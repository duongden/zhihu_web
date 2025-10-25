export function Mypep(userId) {
    return {
        tabs: [],
        pageTitle: '加载中...',
        userId: userId,
        urlToken: null,
        activeTabId: null,
        tabDataCache: {},

        async init() {
            try {
                await this.fetchUser();
            } catch { }

            this.tabs = await this.fetchTabs();
            if (this.tabs.length > 0) {
                this.activeTabId = this.tabs[0].id;
            }
            this.pageTitle = `用户主页 - ${this.userId}`;
        },

        async fetchUser() {
            const res = await window.zhihu.get(
                `https://api.zhihu.com/people/${this.userId}/profile?profile_new_version=1`
            );
            const parsed = JSON.parse(res);
            localStorage.setItem(key, JSON.stringify(parsed));
            this.urlToken = parsed.url_token || this.userId;
            return parsed;
        },

        async fetchTabs() {
            const urls = this.getUrls();

            if (!this.getLogin()) {
                return [{ id: 'activities', title: '动态', url: urls.activities }];
            }

            try {
                const data = await window.zhihu.get(
                    `https://api.zhihu.com/people/${this.userId}/profile/tab`
                );
                const tabs = data.tabs_v3 || [];
                const tabList = [];

                const addTab = (tab) => {
                    if (tab.name === '全部' || tab.key === 'all') return;
                    let title = tab.name;
                    if (tab.number > 0) title += ` ${tab.number}`;
                    tabList.push({ key: tab.key, title, url: tab.url });
                };

                tabs.forEach(tab => {
                    if (tab.sub_tab) tab.sub_tab.forEach(addTab);
                    else addTab(tab);
                });

                return this.processTabs(tabList, urls);
            } catch {
                return [{ id: 'activities', title: '动态', url: urls.activities }];
            }
        },

        processTabs(tabList, urls) {
            const finalTabs = [];
            let answerIndex = -1;

            tabList.forEach((tab) => {
                const url = urls[tab.key] || tab.url;
                if (!url) return;

                const id = this._getKeyFromUrl(url);
                finalTabs.push({ id, title: tab.title, url });

                if (tab.key === 'answer') answerIndex = finalTabs.length - 1;
            });

            // 将“动态”移到最前
            const actIndex = finalTabs.findIndex(t => t.id === 'activities');
            if (actIndex > 0) {
                const actTab = finalTabs.splice(actIndex, 1)[0];
                finalTabs.unshift(actTab);
                if (answerIndex !== -1) {
                    answerIndex = answerIndex < actIndex ? answerIndex + 1 : answerIndex - 1;
                }
            }

            if (finalTabs.length === 0) {
                finalTabs.push({ id: 'activities', title: '动态', url: urls.activities });
                answerIndex = -1;
            }

            finalTabs.forEach((tab, i) => {
                tab.isAnswer = answerIndex === i;
            });

            return finalTabs;
        },

        _getKeyFromUrl(url) {
            const map = {
                '/activities': 'activities',
                '/answers': 'answer',
                '/articles': 'article',
                '/zvideos': 'zvideo',
                '/questions': 'question',
                '/vote': 'vote',
                '/pins': 'pin',
                '/column': 'column'
            };
            for (const [path, key] of Object.entries(map)) {
                if (url.includes(path)) return key;
            }
            return 'unknown';
        },

        getUrls() {
            const id = this.userId;
            return {
                activities: `https://api.zhihu.com/moments/${id}/activities?limit=20`,
                zvideo: `https://api.zhihu.com/people/${id}/zvideos?offset=0&limit=20`,
                answer: `https://api.zhihu.com/people/${id}/answers?order_by=created&offset=0&limit=20`,
                vote: `https://api.zhihu.com/moments/${id}/vote?limit=20`,
                article: `https://api.zhihu.com/people/${id}/articles?offset=0&limit=20`,
                column: `https://api.zhihu.com/people/${id}/column-contributions?offset=0&limit=20`,
                pin: `https://api.zhihu.com/v2/pins/${id}/moments`,
                question: `https://api.zhihu.com/people/${id}/questions?offset=0&limit=20`
            };
        },

        getLogin() {
            return true; // TODO
        },

        async fetchData(tabId) {
            const tab = this.tabs.find(t => t.id === tabId);
            if (!tab) throw new Error(`Tab "${tabId}" not found`);

            const cache = this.tabDataCache[tabId];
            const url = cache?.paging?.next || tab.url;

            const res = await window.zhihu.get(url);
            const list = Array.isArray(res.data) ? res.data : [];

            this.tabDataCache[tabId] = {
                url,
                paging: res.paging || {}
            };

            const result = [];

            for (const item of list) {
                if (item.more_tabs && Array.isArray(item.more_tabs)) {
                    for (const mt of item.more_tabs) {
                        const title = mt.title || "More Content";
                        const id = "More" + title;
                        const subtitle = mt.sub_title ? `共有${mt.sub_title}个内容 ` : "";
                        result.push({
                            header: title,
                            content: subtitle + "点击查看",
                            footer: "0 赞同 · 0 评论",
                            id,
                        });
                    }
                    continue;
                }

                let activity = item.action_text || "";
                let target = item.target || item;
                if (target.column) target = target.column;

                let preview = target.excerpt || target.excerpt_new || target.intro || target.description || "";
                const upvotes = target.voteup_count !== undefined ? String(target.voteup_count) :
                    target.like_count !== undefined ? String(target.like_count) : null;
                const comments = target.comment_count !== undefined ? String(target.comment_count) :
                    target.items_count !== undefined ? String(target.items_count) : null;

                let id = null;
                let title = "Unknown";
                const type = target.type;

                if (type === "answer") {
                    const qid = target.question?.id || "null";
                    const aid = target.id || "null";
                    id = `${qid}分割${aid}`;
                    title = target.question?.title || "Answer";
                    activity = activity || "Published an answer";
                } else if (type === "topic") {
                    preview = "No preview";
                    id = `Topic分割${target.id || ""}`;
                    title = target.name || "Topic";
                    activity = activity || "Published a topic";
                } else if (type === "question") {
                    id = `Question分割${target.id || ""}`;
                    title = target.title || "Question";
                    preview = "No preview";
                    activity = activity || "Asked a question";
                } else if (type === "column") {
                    id = `Column分割${target.id || ""}`;
                    title = target.title || "Column";
                    preview = target.intro || target.description || "";
                    activity = activity || "Published a column";
                } else if (type === "collection") {
                    continue;
                } else if (type === "pin" || type === "moments_pin") {
                    id = `Thought分割${target.id || ""}`;
                    const first = Array.isArray(target.content) ? target.content[0] : null;
                    title = (first?.title && first.title.trim() !== "") ? first.title : "A thought";
                    preview = target.content_html || "";
                    activity = activity || "Published a thought";
                } else if (type === "article") {
                    id = `Article分割${target.id || ""}`;
                    title = target.title || "Article";
                    activity = activity || "Published an article";
                } else if (type === "zvideo") {
                    id = `Video分割${target.id || ""}`;
                    title = target.title || "Video";
                    activity = activity || "Published a video";
                } else if (type === "roundtable") {
                    id = `Roundtable分割${target.id || ""}`;
                    title = target.name || "Roundtable";
                    preview = target.description || "";
                    activity = activity || "Followed a roundtable";
                } else if (type === "special") {
                    id = `Special分割${target.id || ""}`;
                    title = target.title || "Special";
                    preview = target.description || "";
                    activity = activity || "Followed a special";
                } else {
                    title = target.title || target.name || "Unknown";
                    activity = activity || "Unknown activity";
                }

                if (!preview || preview === "" || preview === "No preview") {
                    preview = null;
                }

                const upvoteText = upvotes ? `${upvotes} 赞同` : "0 赞同";
                const commentText = comments ? `${comments} 评论` : "0 评论";
                const footer = `${upvoteText} · ${commentText}`;

                result.push({
                    header: title,
                    content: preview,
                    footer,
                    id,
                });
            }

            return result;
        }

    };
}

window.Mypep = Mypep;