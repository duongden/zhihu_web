const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-EeQABMO3.js","assets/mockData-BUIiJdAD.js","assets/HomeView-COeTLqx3.css","assets/FollowingView-BjY6TUQR.js","assets/FollowingView-BDMvB3AI.css","assets/CollectionsView-DGizstLl.js","assets/CollectionsView-Dl77d3v2.css","assets/DailyView-BTuGmxqg.js","assets/DailyView-BRoYnD07.css","assets/HistoryView-la_q7nlK.js","assets/HistoryView-aiWrSD_b.css","assets/SettingsView-BxbGOQ8Y.js","assets/SettingsView-BMl_S12V.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function Bn(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const ve={},rs=[],pt=()=>{},Wr=()=>!1,vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wn=e=>e.startsWith("onUpdate:"),Me=Object.assign,_n=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},La=Object.prototype.hasOwnProperty,me=(e,t)=>La.call(e,t),ne=Array.isArray,is=e=>Ps(e)==="[object Map]",Kr=e=>Ps(e)==="[object Set]",Ia=e=>Ps(e)==="[object RegExp]",ae=e=>typeof e=="function",Ae=e=>typeof e=="string",Dt=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",Zr=e=>(Ee(e)||ae(e))&&ae(e.then)&&ae(e.catch),Gr=Object.prototype.toString,Ps=e=>Gr.call(e),qa=e=>Ps(e).slice(8,-1),Yr=e=>Ps(e)==="[object Object]",$n=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bs=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Ra=/-\w/g,Ye=bo(e=>e.replace(Ra,t=>t.slice(1).toUpperCase())),za=/\B([A-Z])/g,Gt=bo(e=>e.replace(za,"-$1").toLowerCase()),yo=bo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lo=bo(e=>e?`on${yo(e)}`:""),Lt=(e,t)=>!Object.is(e,t),as=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Xr=(e,t,s,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:s})},kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zn;const Eo=()=>Zn||(Zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ut(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],n=Ae(o)?Ha(o):ut(o);if(n)for(const r in n)t[r]=n[r]}return t}else if(Ae(e)||Ee(e))return e}const Pa=/;(?![^(]*\))/g,Oa=/:([^]+)/,Na=/\/\*[^]*?\*\//g;function Ha(e){const t={};return e.replace(Na,"").split(Pa).forEach(s=>{if(s){const o=s.split(Oa);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Os(e){let t="";if(Ae(e))t=e;else if(ne(e))for(let s=0;s<e.length;s++){const o=Os(e[s]);o&&(t+=o+" ")}else if(Ee(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ja=Bn(Va);function Jr(e){return!!e||e===""}const Qr=e=>!!(e&&e.__v_isRef===!0),j=e=>Ae(e)?e:e==null?"":ne(e)||Ee(e)&&(e.toString===Gr||!ae(e.toString))?Qr(e)?j(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,t)=>Qr(t)?ei(e,t.value):is(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,n],r)=>(s[Io(o,r)+" =>"]=n,s),{})}:Kr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Io(s))}:Dt(t)?Io(t):Ee(t)&&!ne(t)&&!Yr(t)?String(t):t,Io=(e,t="")=>{var s;return Dt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let He;class Ua{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=He;try{return He=this,t()}finally{He=s}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){this._on>0&&--this._on===0&&(He=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(this.effects.length=0,s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Wa(){return He}let ye;const qo=new WeakSet;class ti{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gn(this),ni(this);const t=ye,s=Qe;ye=this,Qe=!0;try{return this.fn()}finally{ri(this),ye=t,Qe=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Mn(t);this.deps=this.depsTail=void 0,Gn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yo(this)&&this.run()}get dirty(){return Yo(this)}}let si=0,ws,_s;function oi(e,t=!1){if(e.flags|=8,t){e.next=_s,_s=e;return}e.next=ws,ws=e}function Sn(){si++}function Tn(){if(--si>0)return;if(_s){let t=_s;for(_s=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;ws;){let t=ws;for(ws=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=s}}if(e)throw e}function ni(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ri(e){let t,s=e.depsTail,o=s;for(;o;){const n=o.prevDep;o.version===-1?(o===s&&(s=n),Mn(o),Ka(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=n}e.deps=t,e.depsTail=s}function Yo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ii(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ii(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ms)||(e.globalVersion=Ms,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Yo(e))))return;e.flags|=2;const t=e.dep,s=ye,o=Qe;ye=e,Qe=!0;try{ni(e);const n=e.fn(e._value);(t.version===0||Lt(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{ye=s,Qe=o,ri(e),e.flags&=-3}}function Mn(e,t=!1){const{dep:s,prevSub:o,nextSub:n}=e;if(o&&(o.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=o,e.nextSub=void 0),s.subs===e&&(s.subs=o,!o&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Mn(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ka(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Qe=!0;const ai=[];function Ct(){ai.push(Qe),Qe=!1}function At(){const e=ai.pop();Qe=e===void 0?!0:e}function Gn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ye;ye=void 0;try{t()}finally{ye=s}}}let Ms=0;class Za{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ln{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!Qe||ye===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ye)s=this.activeLink=new Za(ye,this),ye.deps?(s.prevDep=ye.depsTail,ye.depsTail.nextDep=s,ye.depsTail=s):ye.deps=ye.depsTail=s,li(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const o=s.nextDep;o.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=o),s.prevDep=ye.depsTail,s.nextDep=void 0,ye.depsTail.nextDep=s,ye.depsTail=s,ye.deps===s&&(ye.deps=o)}return s}trigger(t){this.version++,Ms++,this.notify(t)}notify(t){Sn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Tn()}}}function li(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)li(o)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Xo=new WeakMap,Ut=Symbol(""),Jo=Symbol(""),Ls=Symbol("");function ke(e,t,s){if(Qe&&ye){let o=Xo.get(e);o||Xo.set(e,o=new Map);let n=o.get(s);n||(o.set(s,n=new Ln),n.map=o,n.key=s),n.track()}}function bt(e,t,s,o,n,r){const i=Xo.get(e);if(!i){Ms++;return}const a=c=>{c&&c.trigger()};if(Sn(),t==="clear")i.forEach(a);else{const c=ne(e),d=c&&$n(s);if(c&&s==="length"){const l=Number(o);i.forEach((u,p)=>{(p==="length"||p===Ls||!Dt(p)&&p>=l)&&a(u)})}else switch((s!==void 0||i.has(void 0))&&a(i.get(s)),d&&a(i.get(Ls)),t){case"add":c?d&&a(i.get("length")):(a(i.get(Ut)),is(e)&&a(i.get(Jo)));break;case"delete":c||(a(i.get(Ut)),is(e)&&a(i.get(Jo)));break;case"set":is(e)&&a(i.get(Ut));break}}Tn()}function Qt(e){const t=xe(e);return t===e?t:(ke(t,"iterate",Ls),Ge(e)?t:t.map(st))}function Co(e){return ke(e=xe(e),"iterate",Ls),e}function $t(e,t){return Ft(e)?Wt(e)?ps(st(t)):ps(t):st(t)}const Ga={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return Qt(this).concat(...e.map(t=>ne(t)?Qt(t):t))},entries(){return Ro(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,s=>s.map(o=>$t(this,o)),arguments)},find(e,t){return mt(this,"find",e,t,s=>$t(this,s),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,s=>$t(this,s),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return zo(this,"includes",e)},indexOf(...e){return zo(this,"indexOf",e)},join(e){return Qt(this).join(e)},lastIndexOf(...e){return zo(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return bs(this,"pop")},push(...e){return bs(this,"push",e)},reduce(e,...t){return Yn(this,"reduce",e,t)},reduceRight(e,...t){return Yn(this,"reduceRight",e,t)},shift(){return bs(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return bs(this,"splice",e)},toReversed(){return Qt(this).toReversed()},toSorted(e){return Qt(this).toSorted(e)},toSpliced(...e){return Qt(this).toSpliced(...e)},unshift(...e){return bs(this,"unshift",e)},values(){return Ro(this,"values",e=>$t(this,e))}};function Ro(e,t,s){const o=Co(e),n=o[t]();return o!==e&&!Ge(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const Ya=Array.prototype;function mt(e,t,s,o,n,r){const i=Co(e),a=i!==e&&!Ge(e),c=i[t];if(c!==Ya[t]){const u=c.apply(e,r);return a?st(u):u}let d=s;i!==e&&(a?d=function(u,p){return s.call(this,$t(e,u),p,e)}:s.length>2&&(d=function(u,p){return s.call(this,u,p,e)}));const l=c.call(i,d,o);return a&&n?n(l):l}function Yn(e,t,s,o){const n=Co(e);let r=s;return n!==e&&(Ge(e)?s.length>3&&(r=function(i,a,c){return s.call(this,i,a,c,e)}):r=function(i,a,c){return s.call(this,i,$t(e,a),c,e)}),n[t](r,...o)}function zo(e,t,s){const o=xe(e);ke(o,"iterate",Ls);const n=o[t](...s);return(n===-1||n===!1)&&Rn(s[0])?(s[0]=xe(s[0]),o[t](...s)):n}function bs(e,t,s=[]){Ct(),Sn();const o=xe(e)[t].apply(e,s);return Tn(),At(),o}const Xa=Bn("__proto__,__v_isRef,__isVue"),ci=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt));function Ja(e){Dt(e)||(e=String(e));const t=xe(this);return ke(t,"has",e),t.hasOwnProperty(e)}class di{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,o){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return o===(n?r?ll:hi:r?fi:pi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=ne(t);if(!n){let c;if(i&&(c=Ga[s]))return c;if(s==="hasOwnProperty")return Ja}const a=Reflect.get(t,s,Te(t)?t:o);if((Dt(s)?ci.has(s):Xa(s))||(n||ke(t,"get",s),r))return a;if(Te(a)){const c=i&&$n(s)?a:a.value;return n&&Ee(c)?en(c):c}return Ee(a)?n?en(a):Ns(a):a}}class ui extends di{constructor(t=!1){super(!1,t)}set(t,s,o,n){let r=t[s];const i=ne(t)&&$n(s);if(!this._isShallow){const d=Ft(r);if(!Ge(o)&&!Ft(o)&&(r=xe(r),o=xe(o)),!i&&Te(r)&&!Te(o))return d||(r.value=o),!0}const a=i?Number(s)<t.length:me(t,s),c=Reflect.set(t,s,o,Te(t)?t:n);return t===xe(n)&&(a?Lt(o,r)&&bt(t,"set",s,o):bt(t,"add",s,o)),c}deleteProperty(t,s){const o=me(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&o&&bt(t,"delete",s,void 0),n}has(t,s){const o=Reflect.has(t,s);return(!Dt(s)||!ci.has(s))&&ke(t,"has",s),o}ownKeys(t){return ke(t,"iterate",ne(t)?"length":Ut),Reflect.ownKeys(t)}}class Qa extends di{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const el=new ui,tl=new Qa,sl=new ui(!0);const Qo=e=>e,Us=e=>Reflect.getPrototypeOf(e);function ol(e,t,s){return function(...o){const n=this.__v_raw,r=xe(n),i=is(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,d=n[e](...o),l=s?Qo:t?ps:st;return!t&&ke(r,"iterate",c?Jo:Ut),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:a?[l(u[0]),l(u[1])]:l(u),done:p}},[Symbol.iterator](){return this}}}}function Ws(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function nl(e,t){const s={get(n){const r=this.__v_raw,i=xe(r),a=xe(n);e||(Lt(n,a)&&ke(i,"get",n),ke(i,"get",a));const{has:c}=Us(i),d=t?Qo:e?ps:st;if(c.call(i,n))return d(r.get(n));if(c.call(i,a))return d(r.get(a));r!==i&&r.get(n)},get size(){const n=this.__v_raw;return!e&&ke(xe(n),"iterate",Ut),n.size},has(n){const r=this.__v_raw,i=xe(r),a=xe(n);return e||(Lt(n,a)&&ke(i,"has",n),ke(i,"has",a)),n===a?r.has(n):r.has(n)||r.has(a)},forEach(n,r){const i=this,a=i.__v_raw,c=xe(a),d=t?Qo:e?ps:st;return!e&&ke(c,"iterate",Ut),a.forEach((l,u)=>n.call(r,d(l),d(u),i))}};return Me(s,e?{add:Ws("add"),set:Ws("set"),delete:Ws("delete"),clear:Ws("clear")}:{add(n){!t&&!Ge(n)&&!Ft(n)&&(n=xe(n));const r=xe(this);return Us(r).has.call(r,n)||(r.add(n),bt(r,"add",n,n)),this},set(n,r){!t&&!Ge(r)&&!Ft(r)&&(r=xe(r));const i=xe(this),{has:a,get:c}=Us(i);let d=a.call(i,n);d||(n=xe(n),d=a.call(i,n));const l=c.call(i,n);return i.set(n,r),d?Lt(r,l)&&bt(i,"set",n,r):bt(i,"add",n,r),this},delete(n){const r=xe(this),{has:i,get:a}=Us(r);let c=i.call(r,n);c||(n=xe(n),c=i.call(r,n)),a&&a.call(r,n);const d=r.delete(n);return c&&bt(r,"delete",n,void 0),d},clear(){const n=xe(this),r=n.size!==0,i=n.clear();return r&&bt(n,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=ol(n,e,t)}),s}function In(e,t){const s=nl(e,t);return(o,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?o:Reflect.get(me(s,n)&&n in o?s:o,n,r)}const rl={get:In(!1,!1)},il={get:In(!1,!0)},al={get:In(!0,!1)};const pi=new WeakMap,fi=new WeakMap,hi=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(qa(e))}function Ns(e){return Ft(e)?e:qn(e,!1,el,rl,pi)}function xi(e){return qn(e,!1,sl,il,fi)}function en(e){return qn(e,!0,tl,al,hi)}function qn(e,t,s,o,n){if(!Ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=dl(e);if(r===0)return e;const i=n.get(e);if(i)return i;const a=new Proxy(e,r===2?o:s);return n.set(e,a),a}function Wt(e){return Ft(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Ge(e){return!!(e&&e.__v_isShallow)}function Rn(e){return e?!!e.__v_raw:!1}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function ul(e){return!me(e,"__v_skip")&&Object.isExtensible(e)&&Xr(e,"__v_skip",!0),e}const st=e=>Ee(e)?Ns(e):e,ps=e=>Ee(e)?en(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function se(e){return mi(e,!1)}function pl(e){return mi(e,!0)}function mi(e,t){return Te(e)?e:new fl(e,t)}class fl{constructor(t,s){this.dep=new Ln,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:xe(t),this._value=s?t:st(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,o=this.__v_isShallow||Ge(t)||Ft(t);t=o?t:xe(t),Lt(t,s)&&(this._rawValue=t,this._value=o?t:st(t),this.dep.trigger())}}function Je(e){return Te(e)?e.value:e}const hl={get:(e,t,s)=>t==="__v_raw"?e:Je(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const n=e[t];return Te(n)&&!Te(s)?(n.value=s,!0):Reflect.set(e,t,s,o)}};function gi(e){return Wt(e)?e:new Proxy(e,hl)}class xl{constructor(t,s,o){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Ln(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return oi(this,!0),!0}get value(){const t=this.dep.track();return ii(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ml(e,t,s=!1){let o,n;return ae(e)?o=e:(o=e.get,n=e.set),new xl(o,n,s)}const Ks={},so=new WeakMap;let Nt;function gl(e,t=!1,s=Nt){if(s){let o=so.get(s);o||so.set(s,o=[]),o.push(e)}}function vl(e,t,s=ve){const{immediate:o,deep:n,once:r,scheduler:i,augmentJob:a,call:c}=s,d=w=>n?w:Ge(w)||n===!1||n===0?yt(w,1):yt(w);let l,u,p,h,v=!1,C=!1;if(Te(e)?(u=()=>e.value,v=Ge(e)):Wt(e)?(u=()=>d(e),v=!0):ne(e)?(C=!0,v=e.some(w=>Wt(w)||Ge(w)),u=()=>e.map(w=>{if(Te(w))return w.value;if(Wt(w))return d(w);if(ae(w))return c?c(w,2):w()})):ae(e)?t?u=c?()=>c(e,2):e:u=()=>{if(p){Ct();try{p()}finally{At()}}const w=Nt;Nt=l;try{return c?c(e,3,[h]):e(h)}finally{Nt=w}}:u=pt,t&&n){const w=u,P=n===!0?1/0:n;u=()=>yt(w(),P)}const B=Wa(),x=()=>{l.stop(),B&&B.active&&_n(B.effects,l)};if(r&&t){const w=t;t=(...P)=>{w(...P),x()}}let f=C?new Array(e.length).fill(Ks):Ks;const A=w=>{if(!(!(l.flags&1)||!l.dirty&&!w))if(t){const P=l.run();if(n||v||(C?P.some((R,z)=>Lt(R,f[z])):Lt(P,f))){p&&p();const R=Nt;Nt=l;try{const z=[P,f===Ks?void 0:C&&f[0]===Ks?[]:f,h];f=P,c?c(t,3,z):t(...z)}finally{Nt=R}}}else l.run()};return a&&a(A),l=new ti(u),l.scheduler=i?()=>i(A,!1):A,h=w=>gl(w,!1,l),p=l.onStop=()=>{const w=so.get(l);if(w){if(c)c(w,4);else for(const P of w)P();so.delete(l)}},t?o?A(!0):f=l.run():i?i(A.bind(null,!0),!0):l.run(),x.pause=l.pause.bind(l),x.resume=l.resume.bind(l),x.stop=x,x}function yt(e,t=1/0,s){if(t<=0||!Ee(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,Te(e))yt(e.value,t,s);else if(ne(e))for(let o=0;o<e.length;o++)yt(e[o],t,s);else if(Kr(e)||is(e))e.forEach(o=>{yt(o,t,s)});else if(Yr(e)){for(const o in e)yt(e[o],t,s);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&yt(e[o],t,s)}return e}function Hs(e,t,s,o){try{return o?e(...o):e()}catch(n){Ao(n,t,s)}}function ft(e,t,s,o){if(ae(e)){const n=Hs(e,t,s,o);return n&&Zr(n)&&n.catch(r=>{Ao(r,t,s)}),n}if(ne(e)){const n=[];for(let r=0;r<e.length;r++)n.push(ft(e[r],t,s,o));return n}}function Ao(e,t,s,o=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ve;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,c,d)===!1)return}a=a.parent}if(r){Ct(),Hs(r,null,10,[e,c,d]),At();return}}bl(e,s,n,o,i)}function bl(e,t,s,o=!0,n=!1){if(n)throw e;console.error(e)}const qe=[];let ct=-1;const ls=[];let kt=null,es=0;const vi=Promise.resolve();let oo=null;function Fo(e){const t=oo||vi;return e?t.then(this?e.bind(this):e):t}function yl(e){let t=ct+1,s=qe.length;for(;t<s;){const o=t+s>>>1,n=qe[o],r=Is(n);r<e||r===e&&n.flags&2?t=o+1:s=o}return t}function zn(e){if(!(e.flags&1)){const t=Is(e),s=qe[qe.length-1];!s||!(e.flags&2)&&t>=Is(s)?qe.push(e):qe.splice(yl(t),0,e),e.flags|=1,bi()}}function bi(){oo||(oo=vi.then(Ei))}function El(e){ne(e)?ls.push(...e):kt&&e.id===-1?kt.splice(es+1,0,e):e.flags&1||(ls.push(e),e.flags|=1),bi()}function Xn(e,t,s=ct+1){for(;s<qe.length;s++){const o=qe[s];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;qe.splice(s,1),s--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function yi(e){if(ls.length){const t=[...new Set(ls)].sort((s,o)=>Is(s)-Is(o));if(ls.length=0,kt){kt.push(...t);return}for(kt=t,es=0;es<kt.length;es++){const s=kt[es];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}kt=null,es=0}}const Is=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ei(e){try{for(ct=0;ct<qe.length;ct++){const t=qe[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<qe.length;ct++){const t=qe[ct];t&&(t.flags&=-2)}ct=-1,qe.length=0,yi(),oo=null,(qe.length||ls.length)&&Ei()}}let $e=null,Ci=null;function no(e){const t=$e;return $e=e,Ci=e&&e.type.__scopeId||null,t}function It(e,t=$e,s){if(!t||e._n)return e;const o=(...n)=>{o._d&&co(-1);const r=no(t);let i;try{i=e(...n)}finally{no(r),o._d&&co(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Ai(e,t){if($e===null)return e;const s=$o($e),o=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,i,a,c=ve]=t[n];r&&(ae(r)&&(r={mounted:r,updated:r}),r.deep&&yt(i),o.push({dir:r,instance:s,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function zt(e,t,s,o){const n=e.dirs,r=t&&t.dirs;for(let i=0;i<n.length;i++){const a=n[i];r&&(a.oldValue=r[i].value);let c=a.dir[o];c&&(Ct(),ft(c,s,8,[e.el,a,e,t]),At())}}const Cl=Symbol("_vte"),Al=e=>e.__isTeleport,Fl=Symbol("_leaveCb");function Do(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Do(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fi(e,t){return ae(e)?Me({name:e.name},t,{setup:e}):e}function Di(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ro=new WeakMap;function $s(e,t,s,o,n=!1){if(ne(e)){e.forEach((v,C)=>$s(v,t&&(ne(t)?t[C]:t),s,o,n));return}if(Kt(o)&&!n){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&$s(e,t,s,o.component.subTree);return}const r=o.shapeFlag&4?$o(o.component):o.el,i=n?null:r,{i:a,r:c}=e,d=t&&t.r,l=a.refs===ve?a.refs={}:a.refs,u=a.setupState,p=xe(u),h=u===ve?Wr:v=>me(p,v);if(d!=null&&d!==c){if(Jn(t),Ae(d))l[d]=null,h(d)&&(u[d]=null);else if(Te(d)){d.value=null;const v=t;v.k&&(l[v.k]=null)}}if(ae(c))Hs(c,a,12,[i,l]);else{const v=Ae(c),C=Te(c);if(v||C){const B=()=>{if(e.f){const x=v?h(c)?u[c]:l[c]:c.value;if(n)ne(x)&&_n(x,r);else if(ne(x))x.includes(r)||x.push(r);else if(v)l[c]=[r],h(c)&&(u[c]=l[c]);else{const f=[r];c.value=f,e.k&&(l[e.k]=f)}}else v?(l[c]=i,h(c)&&(u[c]=i)):C&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const x=()=>{B(),ro.delete(e)};x.id=-1,ro.set(e,x),_e(x,s)}else Jn(e),B()}}}function Jn(e){const t=ro.get(e);t&&(t.flags|=8,ro.delete(e))}Eo().requestIdleCallback;Eo().cancelIdleCallback;const Kt=e=>!!e.type.__asyncLoader,Bi=e=>e.type.__isKeepAlive,Dl={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=Ji(),o=s.ctx;if(!o.renderer)return()=>{const f=t.default&&t.default();return f&&f.length===1?f[0]:f};const n=new Map,r=new Set;let i=null;const a=s.suspense,{renderer:{p:c,m:d,um:l,o:{createElement:u}}}=o,p=u("div");o.activate=(f,A,w,P,R)=>{const z=f.component;d(f,A,w,0,a),c(z.vnode,f,A,w,z,a,P,f.slotScopeIds,R),_e(()=>{z.isDeactivated=!1,z.a&&as(z.a);const q=f.props&&f.props.onVnodeMounted;q&&Ze(q,z.parent,f)},a)},o.deactivate=f=>{const A=f.component;ao(A.m),ao(A.a),d(f,p,null,1,a),_e(()=>{A.da&&as(A.da);const w=f.props&&f.props.onVnodeUnmounted;w&&Ze(w,A.parent,f),A.isDeactivated=!0},a)};function h(f){Po(f),l(f,s,a,!0)}function v(f){n.forEach((A,w)=>{const P=ln(A.type);P&&!f(P)&&C(w)})}function C(f){const A=n.get(f);A&&(!i||!ts(A,i))?h(A):i&&Po(i),n.delete(f),r.delete(f)}qt(()=>[e.include,e.exclude],([f,A])=>{f&&v(w=>Cs(f,w)),A&&v(w=>!Cs(A,w))},{flush:"post",deep:!0});let B=null;const x=()=>{B!=null&&(lo(s.subTree.type)?_e(()=>{n.set(B,Zs(s.subTree))},s.subTree.suspense):n.set(B,Zs(s.subTree)))};return xt(x),_i(x),$i(()=>{n.forEach(f=>{const{subTree:A,suspense:w}=s,P=Zs(A);if(f.type===P.type&&f.key===P.key){Po(P);const R=P.component.da;R&&_e(R,w);return}h(f)})}),()=>{if(B=null,!t.default)return i=null;const f=t.default(),A=f[0];if(f.length>1)return i=null,f;if(!fs(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return i=null,A;let w=Zs(A);if(w.type===ht)return i=null,w;const P=w.type,R=ln(Kt(w)?w.type.__asyncResolved||{}:P),{include:z,exclude:q,max:g}=e;if(z&&(!R||!Cs(z,R))||q&&R&&Cs(q,R))return w.shapeFlag&=-257,i=w,A;const y=w.key==null?P:w.key,F=n.get(y);return w.el&&(w=Zt(w),A.shapeFlag&128&&(A.ssContent=w)),B=y,F?(w.el=F.el,w.component=F.component,w.transition&&Do(w,w.transition),w.shapeFlag|=512,r.delete(y),r.add(y)):(r.add(y),g&&r.size>parseInt(g,10)&&C(r.values().next().value)),w.shapeFlag|=256,i=w,lo(A.type)?A:w}}},Bl=Dl;function Cs(e,t){return ne(e)?e.some(s=>Cs(s,t)):Ae(e)?e.split(",").includes(t):Ia(e)?(e.lastIndex=0,e.test(t)):!1}function wl(e,t){wi(e,"a",t)}function _l(e,t){wi(e,"da",t)}function wi(e,t,s=Se){const o=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Bo(t,o,s),s){let n=s.parent;for(;n&&n.parent;)Bi(n.parent.vnode)&&$l(o,t,s,n),n=n.parent}}function $l(e,t,s,o){const n=Bo(t,e,o,!0);ms(()=>{_n(o[t],n)},s)}function Po(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Zs(e){return e.shapeFlag&128?e.ssContent:e}function Bo(e,t,s=Se,o=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...i)=>{Ct();const a=Vs(s),c=ft(t,s,e,i);return a(),At(),c});return o?n.unshift(r):n.push(r),r}}const Bt=e=>(t,s=Se)=>{(!Rs||e==="sp")&&Bo(e,(...o)=>t(...o),s)},kl=Bt("bm"),xt=Bt("m"),Sl=Bt("bu"),_i=Bt("u"),$i=Bt("bum"),ms=Bt("um"),Tl=Bt("sp"),Ml=Bt("rtg"),Ll=Bt("rtc");function Il(e,t=Se){Bo("ec",e,t)}const ql="components",ki=Symbol.for("v-ndc");function tn(e){return Ae(e)?Rl(ql,e,!1)||e:e||ki}function Rl(e,t,s=!0,o=!1){const n=$e||Se;if(n){const r=n.type;{const a=ln(r,!1);if(a&&(a===t||a===Ye(t)||a===yo(Ye(t))))return r}const i=Qn(n[e]||r[e],t)||Qn(n.appContext[e],t);return!i&&o?r:i}}function Qn(e,t){return e&&(e[t]||e[Ye(t)]||e[yo(Ye(t))])}function we(e,t,s,o){let n;const r=s,i=ne(e);if(i||Ae(e)){const a=i&&Wt(e);let c=!1,d=!1;a&&(c=!Ge(e),d=Ft(e),e=Co(e)),n=new Array(e.length);for(let l=0,u=e.length;l<u;l++)n[l]=t(c?d?ps(st(e[l])):st(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let a=0;a<e;a++)n[a]=t(a+1,a,void 0,r)}else if(Ee(e))if(e[Symbol.iterator])n=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);n=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const l=a[c];n[c]=t(e[l],l,c,r)}}else n=[];return n}function Si(e,t){for(let s=0;s<t.length;s++){const o=t[s];if(ne(o))for(let n=0;n<o.length;n++)e[o[n].name]=o[n].fn;else o&&(e[o.name]=o.key?(...n)=>{const r=o.fn(...n);return r&&(r.key=o.key),r}:o.fn)}return e}function Ti(e,t,s={},o,n){if($e.ce||$e.parent&&Kt($e.parent)&&$e.parent.ce){const d=Object.keys(s).length>0;return t!=="default"&&(s.name=t),$(),tt(pe,null,[N("slot",s,o)],d?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),$();const i=r&&Mi(r(s)),a=s.key||i&&i.key,c=tt(pe,{key:(a&&!Dt(a)?a:`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return r&&r._c&&(r._d=!0),c}function Mi(e){return e.some(t=>fs(t)?!(t.type===ht||t.type===pe&&!Mi(t.children)):!0)?e:null}const sn=e=>e?Qi(e)?$o(e):sn(e.parent):null,ks=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sn(e.parent),$root:e=>sn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ii(e),$forceUpdate:e=>e.f||(e.f=()=>{zn(e.update)}),$nextTick:e=>e.n||(e.n=Fo.bind(e.proxy)),$watch:e=>Zl.bind(e)}),Oo=(e,t)=>e!==ve&&!e.__isScriptSetup&&me(e,t),zl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:o,data:n,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return o[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(Oo(o,t))return i[t]=1,o[t];if(n!==ve&&me(n,t))return i[t]=2,n[t];if(me(r,t))return i[t]=3,r[t];if(s!==ve&&me(s,t))return i[t]=4,s[t];on&&(i[t]=0)}}const d=ks[t];let l,u;if(d)return t==="$attrs"&&ke(e.attrs,"get",""),d(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(s!==ve&&me(s,t))return i[t]=4,s[t];if(u=c.config.globalProperties,me(u,t))return u[t]},set({_:e},t,s){const{data:o,setupState:n,ctx:r}=e;return Oo(n,t)?(n[t]=s,!0):o!==ve&&me(o,t)?(o[t]=s,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:n,props:r,type:i}},a){let c;return!!(s[a]||e!==ve&&a[0]!=="$"&&me(e,a)||Oo(t,a)||me(r,a)||me(o,a)||me(ks,a)||me(n.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:me(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function er(e){return ne(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let on=!0;function Pl(e){const t=Ii(e),s=e.proxy,o=e.ctx;on=!1,t.beforeCreate&&tr(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:a,provide:c,inject:d,created:l,beforeMount:u,mounted:p,beforeUpdate:h,updated:v,activated:C,deactivated:B,beforeDestroy:x,beforeUnmount:f,destroyed:A,unmounted:w,render:P,renderTracked:R,renderTriggered:z,errorCaptured:q,serverPrefetch:g,expose:y,inheritAttrs:F,components:D,directives:K,filters:J}=t;if(d&&Ol(d,o,null),i)for(const ie in i){const fe=i[ie];ae(fe)&&(o[ie]=fe.bind(s))}if(n){const ie=n.call(s,s);Ee(ie)&&(e.data=Ns(ie))}if(on=!0,r)for(const ie in r){const fe=r[ie],We=ae(fe)?fe.bind(s,s):ae(fe.get)?fe.get.bind(s,s):pt,wt=!ae(fe)&&ae(fe.set)?fe.set.bind(s):pt,rt=Be({get:We,set:wt});Object.defineProperty(o,ie,{enumerable:!0,configurable:!0,get:()=>rt.value,set:ze=>rt.value=ze})}if(a)for(const ie in a)Li(a[ie],o,s,ie);if(c){const ie=ae(c)?c.call(s):c;Reflect.ownKeys(ie).forEach(fe=>{Ys(fe,ie[fe])})}l&&tr(l,e,"c");function Y(ie,fe){ne(fe)?fe.forEach(We=>ie(We.bind(s))):fe&&ie(fe.bind(s))}if(Y(kl,u),Y(xt,p),Y(Sl,h),Y(_i,v),Y(wl,C),Y(_l,B),Y(Il,q),Y(Ll,R),Y(Ml,z),Y($i,f),Y(ms,w),Y(Tl,g),ne(y))if(y.length){const ie=e.exposed||(e.exposed={});y.forEach(fe=>{Object.defineProperty(ie,fe,{get:()=>s[fe],set:We=>s[fe]=We,enumerable:!0})})}else e.exposed||(e.exposed={});P&&e.render===pt&&(e.render=P),F!=null&&(e.inheritAttrs=F),D&&(e.components=D),K&&(e.directives=K),g&&Di(e)}function Ol(e,t,s=pt){ne(e)&&(e=nn(e));for(const o in e){const n=e[o];let r;Ee(n)?"default"in n?r=et(n.from||o,n.default,!0):r=et(n.from||o):r=et(n),Te(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function tr(e,t,s){ft(ne(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function Li(e,t,s,o){let n=o.includes(".")?zi(s,o):()=>s[o];if(Ae(e)){const r=t[e];ae(r)&&qt(n,r)}else if(ae(e))qt(n,e.bind(s));else if(Ee(e))if(ne(e))e.forEach(r=>Li(r,t,s,o));else{const r=ae(e.handler)?e.handler.bind(s):t[e.handler];ae(r)&&qt(n,r,e)}}function Ii(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!n.length&&!s&&!o?c=t:(c={},n.length&&n.forEach(d=>io(c,d,i,!0)),io(c,t,i)),Ee(t)&&r.set(t,c),c}function io(e,t,s,o=!1){const{mixins:n,extends:r}=t;r&&io(e,r,s,!0),n&&n.forEach(i=>io(e,i,s,!0));for(const i in t)if(!(o&&i==="expose")){const a=Nl[i]||s&&s[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Nl={data:sr,props:or,emits:or,methods:As,computed:As,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:As,directives:As,watch:Vl,provide:sr,inject:Hl};function sr(e,t){return t?e?function(){return Me(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return As(nn(e),nn(t))}function nn(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function As(e,t){return e?Me(Object.create(null),e,t):t}function or(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:Me(Object.create(null),er(e),er(t??{})):t}function Vl(e,t){if(!e)return t;if(!t)return e;const s=Me(Object.create(null),e);for(const o in t)s[o]=Le(e[o],t[o]);return s}function qi(){return{app:null,config:{isNativeTag:Wr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jl=0;function Ul(e,t){return function(o,n=null){ae(o)||(o=Me({},o)),n!=null&&!Ee(n)&&(n=null);const r=qi(),i=new WeakSet,a=[];let c=!1;const d=r.app={_uid:jl++,_component:o,_props:n,_container:null,_context:r,_instance:null,version:Dc,get config(){return r.config},set config(l){},use(l,...u){return i.has(l)||(l&&ae(l.install)?(i.add(l),l.install(d,...u)):ae(l)&&(i.add(l),l(d,...u))),d},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),d},component(l,u){return u?(r.components[l]=u,d):r.components[l]},directive(l,u){return u?(r.directives[l]=u,d):r.directives[l]},mount(l,u,p){if(!c){const h=d._ceVNode||N(o,n);return h.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(h,l,p),c=!0,d._container=l,l.__vue_app__=d,$o(h.component)}},onUnmount(l){a.push(l)},unmount(){c&&(ft(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(l,u){return r.provides[l]=u,d},runWithContext(l){const u=cs;cs=d;try{return l()}finally{cs=u}}};return d}}let cs=null;function Ys(e,t){if(Se){let s=Se.provides;const o=Se.parent&&Se.parent.provides;o===s&&(s=Se.provides=Object.create(o)),s[e]=t}}function et(e,t,s=!1){const o=Ji();if(o||cs){let n=cs?cs._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&ae(t)?t.call(o&&o.proxy):t}}const Wl=Symbol.for("v-scx"),Kl=()=>et(Wl);function qt(e,t,s){return Ri(e,t,s)}function Ri(e,t,s=ve){const{immediate:o,deep:n,flush:r,once:i}=s,a=Me({},s),c=t&&o||!t&&r!=="post";let d;if(Rs){if(r==="sync"){const h=Kl();d=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=pt,h.resume=pt,h.pause=pt,h}}const l=Se;a.call=(h,v,C)=>ft(h,l,v,C);let u=!1;r==="post"?a.scheduler=h=>{_e(h,l&&l.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(h,v)=>{v?h():zn(h)}),a.augmentJob=h=>{t&&(h.flags|=4),u&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const p=vl(e,t,a);return Rs&&(d?d.push(p):c&&p()),p}function Zl(e,t,s){const o=this.proxy,n=Ae(e)?e.includes(".")?zi(o,e):()=>o[e]:e.bind(o,o);let r;ae(t)?r=t:(r=t.handler,s=t);const i=Vs(this),a=Ri(n,r.bind(o),s);return i(),a}function zi(e,t){const s=t.split(".");return()=>{let o=e;for(let n=0;n<s.length&&o;n++)o=o[s[n]];return o}}const Gl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Yl(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||ve;let n=s;const r=t.startsWith("update:"),i=r&&Gl(o,t.slice(7));i&&(i.trim&&(n=s.map(l=>Ae(l)?l.trim():l)),i.number&&(n=s.map(kn)));let a,c=o[a=Lo(t)]||o[a=Lo(Ye(t))];!c&&r&&(c=o[a=Lo(Gt(t))]),c&&ft(c,e,6,n);const d=o[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(d,e,6,n)}}const Xl=new WeakMap;function Pi(e,t,s=!1){const o=s?Xl:t.emitsCache,n=o.get(e);if(n!==void 0)return n;const r=e.emits;let i={},a=!1;if(!ae(e)){const c=d=>{const l=Pi(d,t,!0);l&&(a=!0,Me(i,l))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(Ee(e)&&o.set(e,null),null):(ne(r)?r.forEach(c=>i[c]=null):Me(i,r),Ee(e)&&o.set(e,i),i)}function wo(e,t){return!e||!vo(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,Gt(t))||me(e,t))}function nr(e){const{type:t,vnode:s,proxy:o,withProxy:n,propsOptions:[r],slots:i,attrs:a,emit:c,render:d,renderCache:l,props:u,data:p,setupState:h,ctx:v,inheritAttrs:C}=e,B=no(e);let x,f;try{if(s.shapeFlag&4){const w=n||o,P=w;x=dt(d.call(P,w,l,u,h,p,v)),f=a}else{const w=t;x=dt(w.length>1?w(u,{attrs:a,slots:i,emit:c}):w(u,null)),f=t.props?a:Jl(a)}}catch(w){Ss.length=0,Ao(w,e,1),x=N(ht)}let A=x;if(f&&C!==!1){const w=Object.keys(f),{shapeFlag:P}=A;w.length&&P&7&&(r&&w.some(wn)&&(f=Ql(f,r)),A=Zt(A,f,!1,!0))}return s.dirs&&(A=Zt(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&Do(A,s.transition),x=A,no(B),x}const Jl=e=>{let t;for(const s in e)(s==="class"||s==="style"||vo(s))&&((t||(t={}))[s]=e[s]);return t},Ql=(e,t)=>{const s={};for(const o in e)(!wn(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s};function ec(e,t,s){const{props:o,children:n,component:r}=e,{props:i,children:a,patchFlag:c}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?rr(o,i,d):!!i;if(c&8){const l=t.dynamicProps;for(let u=0;u<l.length;u++){const p=l[u];if(i[p]!==o[p]&&!wo(d,p))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?rr(o,i,d):!0:!!i;return!1}function rr(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let n=0;n<o.length;n++){const r=o[n];if(t[r]!==e[r]&&!wo(s,r))return!0}return!1}function tc({vnode:e,parent:t},s){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=s,t=t.parent;else break}}const Oi={},Ni=()=>Object.create(Oi),Hi=e=>Object.getPrototypeOf(e)===Oi;function sc(e,t,s,o=!1){const n={},r=Ni();e.propsDefaults=Object.create(null),Vi(e,t,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);s?e.props=o?n:xi(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function oc(e,t,s,o){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,a=xe(n),[c]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let p=l[u];if(wo(e.emitsOptions,p))continue;const h=t[p];if(c)if(me(r,p))h!==r[p]&&(r[p]=h,d=!0);else{const v=Ye(p);n[v]=rn(c,a,v,h,e,!1)}else h!==r[p]&&(r[p]=h,d=!0)}}}else{Vi(e,t,n,r)&&(d=!0);let l;for(const u in a)(!t||!me(t,u)&&((l=Gt(u))===u||!me(t,l)))&&(c?s&&(s[u]!==void 0||s[l]!==void 0)&&(n[u]=rn(c,a,u,void 0,e,!0)):delete n[u]);if(r!==a)for(const u in r)(!t||!me(t,u))&&(delete r[u],d=!0)}d&&bt(e.attrs,"set","")}function Vi(e,t,s,o){const[n,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Bs(c))continue;const d=t[c];let l;n&&me(n,l=Ye(c))?!r||!r.includes(l)?s[l]=d:(a||(a={}))[l]=d:wo(e.emitsOptions,c)||(!(c in o)||d!==o[c])&&(o[c]=d,i=!0)}if(r){const c=xe(s),d=a||ve;for(let l=0;l<r.length;l++){const u=r[l];s[u]=rn(n,c,u,d[u],e,!me(d,u))}}return i}function rn(e,t,s,o,n,r){const i=e[s];if(i!=null){const a=me(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&ae(c)){const{propsDefaults:d}=n;if(s in d)o=d[s];else{const l=Vs(n);o=d[s]=c.call(null,t),l()}}else o=c;n.ce&&n.ce._setProp(s,o)}i[0]&&(r&&!a?o=!1:i[1]&&(o===""||o===Gt(s))&&(o=!0))}return o}const nc=new WeakMap;function ji(e,t,s=!1){const o=s?nc:t.propsCache,n=o.get(e);if(n)return n;const r=e.props,i={},a=[];let c=!1;if(!ae(e)){const l=u=>{c=!0;const[p,h]=ji(u,t,!0);Me(i,p),h&&a.push(...h)};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return Ee(e)&&o.set(e,rs),rs;if(ne(r))for(let l=0;l<r.length;l++){const u=Ye(r[l]);ir(u)&&(i[u]=ve)}else if(r)for(const l in r){const u=Ye(l);if(ir(u)){const p=r[l],h=i[u]=ne(p)||ae(p)?{type:p}:Me({},p),v=h.type;let C=!1,B=!0;if(ne(v))for(let x=0;x<v.length;++x){const f=v[x],A=ae(f)&&f.name;if(A==="Boolean"){C=!0;break}else A==="String"&&(B=!1)}else C=ae(v)&&v.name==="Boolean";h[0]=C,h[1]=B,(C||me(h,"default"))&&a.push(u)}}const d=[i,a];return Ee(e)&&o.set(e,d),d}function ir(e){return e[0]!=="$"&&!Bs(e)}const Pn=e=>e==="_"||e==="_ctx"||e==="$stable",On=e=>ne(e)?e.map(dt):[dt(e)],rc=(e,t,s)=>{if(t._n)return t;const o=It((...n)=>On(t(...n)),s);return o._c=!1,o},Ui=(e,t,s)=>{const o=e._ctx;for(const n in e){if(Pn(n))continue;const r=e[n];if(ae(r))t[n]=rc(n,r,o);else if(r!=null){const i=On(r);t[n]=()=>i}}},Wi=(e,t)=>{const s=On(t);e.slots.default=()=>s},Ki=(e,t,s)=>{for(const o in t)(s||!Pn(o))&&(e[o]=t[o])},ic=(e,t,s)=>{const o=e.slots=Ni();if(e.vnode.shapeFlag&32){const n=t._;n?(Ki(o,t,s),s&&Xr(o,"_",n,!0)):Ui(t,o)}else t&&Wi(e,t)},ac=(e,t,s)=>{const{vnode:o,slots:n}=e;let r=!0,i=ve;if(o.shapeFlag&32){const a=t._;a?s&&a===1?r=!1:Ki(n,t,s):(r=!t.$stable,Ui(t,n)),i=t}else t&&(Wi(e,t),i={default:1});if(r)for(const a in n)!Pn(a)&&i[a]==null&&delete n[a]},_e=pc;function lc(e){return cc(e)}function cc(e,t){const s=Eo();s.__VUE__=!0;const{insert:o,remove:n,patchProp:r,createElement:i,createText:a,createComment:c,setText:d,setElementText:l,parentNode:u,nextSibling:p,setScopeId:h=pt,insertStaticContent:v}=e,C=(b,E,_,S=null,L=null,k=null,U=void 0,V=null,H=!!E.dynamicChildren)=>{if(b===E)return;b&&!ts(b,E)&&(S=T(b),ze(b,L,k,!0),b=null),E.patchFlag===-2&&(H=!1,E.dynamicChildren=null);const{type:I,ref:oe,shapeFlag:Z}=E;switch(I){case _o:B(b,E,_,S);break;case ht:x(b,E,_,S);break;case Xs:b==null&&f(E,_,S,U);break;case pe:D(b,E,_,S,L,k,U,V,H);break;default:Z&1?P(b,E,_,S,L,k,U,V,H):Z&6?K(b,E,_,S,L,k,U,V,H):(Z&64||Z&128)&&I.process(b,E,_,S,L,k,U,V,H,ee)}oe!=null&&L?$s(oe,b&&b.ref,k,E||b,!E):oe==null&&b&&b.ref!=null&&$s(b.ref,null,k,b,!0)},B=(b,E,_,S)=>{if(b==null)o(E.el=a(E.children),_,S);else{const L=E.el=b.el;E.children!==b.children&&d(L,E.children)}},x=(b,E,_,S)=>{b==null?o(E.el=c(E.children||""),_,S):E.el=b.el},f=(b,E,_,S)=>{[b.el,b.anchor]=v(b.children,E,_,S,b.el,b.anchor)},A=({el:b,anchor:E},_,S)=>{let L;for(;b&&b!==E;)L=p(b),o(b,_,S),b=L;o(E,_,S)},w=({el:b,anchor:E})=>{let _;for(;b&&b!==E;)_=p(b),n(b),b=_;n(E)},P=(b,E,_,S,L,k,U,V,H)=>{if(E.type==="svg"?U="svg":E.type==="math"&&(U="mathml"),b==null)R(E,_,S,L,k,U,V,H);else{const I=b.el&&b.el._isVueCE?b.el:null;try{I&&I._beginPatch(),g(b,E,L,k,U,V,H)}finally{I&&I._endPatch()}}},R=(b,E,_,S,L,k,U,V)=>{let H,I;const{props:oe,shapeFlag:Z,transition:te,dirs:re}=b;if(H=b.el=i(b.type,k,oe&&oe.is,oe),Z&8?l(H,b.children):Z&16&&q(b.children,H,null,S,L,No(b,k),U,V),re&&zt(b,null,S,"created"),z(H,b,b.scopeId,U,S),oe){for(const be in oe)be!=="value"&&!Bs(be)&&r(H,be,null,oe[be],k,S);"value"in oe&&r(H,"value",null,oe.value,k),(I=oe.onVnodeBeforeMount)&&Ze(I,S,b)}re&&zt(b,null,S,"beforeMount");const ue=dc(L,te);ue&&te.beforeEnter(H),o(H,E,_),((I=oe&&oe.onVnodeMounted)||ue||re)&&_e(()=>{I&&Ze(I,S,b),ue&&te.enter(H),re&&zt(b,null,S,"mounted")},L)},z=(b,E,_,S,L)=>{if(_&&h(b,_),S)for(let k=0;k<S.length;k++)h(b,S[k]);if(L){let k=L.subTree;if(E===k||lo(k.type)&&(k.ssContent===E||k.ssFallback===E)){const U=L.vnode;z(b,U,U.scopeId,U.slotScopeIds,L.parent)}}},q=(b,E,_,S,L,k,U,V,H=0)=>{for(let I=H;I<b.length;I++){const oe=b[I]=V?St(b[I]):dt(b[I]);C(null,oe,E,_,S,L,k,U,V)}},g=(b,E,_,S,L,k,U)=>{const V=E.el=b.el;let{patchFlag:H,dynamicChildren:I,dirs:oe}=E;H|=b.patchFlag&16;const Z=b.props||ve,te=E.props||ve;let re;if(_&&Pt(_,!1),(re=te.onVnodeBeforeUpdate)&&Ze(re,_,E,b),oe&&zt(E,b,_,"beforeUpdate"),_&&Pt(_,!0),(Z.innerHTML&&te.innerHTML==null||Z.textContent&&te.textContent==null)&&l(V,""),I?y(b.dynamicChildren,I,V,_,S,No(E,L),k):U||fe(b,E,V,null,_,S,No(E,L),k,!1),H>0){if(H&16)F(V,Z,te,_,L);else if(H&2&&Z.class!==te.class&&r(V,"class",null,te.class,L),H&4&&r(V,"style",Z.style,te.style,L),H&8){const ue=E.dynamicProps;for(let be=0;be<ue.length;be++){const ge=ue[be],Pe=Z[ge],Oe=te[ge];(Oe!==Pe||ge==="value")&&r(V,ge,Pe,Oe,L,_)}}H&1&&b.children!==E.children&&l(V,E.children)}else!U&&I==null&&F(V,Z,te,_,L);((re=te.onVnodeUpdated)||oe)&&_e(()=>{re&&Ze(re,_,E,b),oe&&zt(E,b,_,"updated")},S)},y=(b,E,_,S,L,k,U)=>{for(let V=0;V<E.length;V++){const H=b[V],I=E[V],oe=H.el&&(H.type===pe||!ts(H,I)||H.shapeFlag&198)?u(H.el):_;C(H,I,oe,null,S,L,k,U,!0)}},F=(b,E,_,S,L)=>{if(E!==_){if(E!==ve)for(const k in E)!Bs(k)&&!(k in _)&&r(b,k,E[k],null,L,S);for(const k in _){if(Bs(k))continue;const U=_[k],V=E[k];U!==V&&k!=="value"&&r(b,k,V,U,L,S)}"value"in _&&r(b,"value",E.value,_.value,L)}},D=(b,E,_,S,L,k,U,V,H)=>{const I=E.el=b?b.el:a(""),oe=E.anchor=b?b.anchor:a("");let{patchFlag:Z,dynamicChildren:te,slotScopeIds:re}=E;re&&(V=V?V.concat(re):re),b==null?(o(I,_,S),o(oe,_,S),q(E.children||[],_,oe,L,k,U,V,H)):Z>0&&Z&64&&te&&b.dynamicChildren?(y(b.dynamicChildren,te,_,L,k,U,V),(E.key!=null||L&&E===L.subTree)&&Zi(b,E,!0)):fe(b,E,_,oe,L,k,U,V,H)},K=(b,E,_,S,L,k,U,V,H)=>{E.slotScopeIds=V,b==null?E.shapeFlag&512?L.ctx.activate(E,_,S,U,H):J(E,_,S,L,k,U,H):O(b,E,H)},J=(b,E,_,S,L,k,U)=>{const V=b.component=bc(b,S,L);if(Bi(b)&&(V.ctx.renderer=ee),yc(V,!1,U),V.asyncDep){if(L&&L.registerDep(V,Y,U),!b.el){const H=V.subTree=N(ht);x(null,H,E,_),b.placeholder=H.el}}else Y(V,b,E,_,L,k,U)},O=(b,E,_)=>{const S=E.component=b.component;if(ec(b,E,_))if(S.asyncDep&&!S.asyncResolved){ie(S,E,_);return}else S.next=E,S.update();else E.el=b.el,S.vnode=E},Y=(b,E,_,S,L,k,U)=>{const V=()=>{if(b.isMounted){let{next:Z,bu:te,u:re,parent:ue,vnode:be}=b;{const at=Gi(b);if(at){Z&&(Z.el=be.el,ie(b,Z,U)),at.asyncDep.then(()=>{b.isUnmounted||V()});return}}let ge=Z,Pe;Pt(b,!1),Z?(Z.el=be.el,ie(b,Z,U)):Z=be,te&&as(te),(Pe=Z.props&&Z.props.onVnodeBeforeUpdate)&&Ze(Pe,ue,Z,be),Pt(b,!0);const Oe=nr(b),it=b.subTree;b.subTree=Oe,C(it,Oe,u(it.el),T(it),b,L,k),Z.el=Oe.el,ge===null&&tc(b,Oe.el),re&&_e(re,L),(Pe=Z.props&&Z.props.onVnodeUpdated)&&_e(()=>Ze(Pe,ue,Z,be),L)}else{let Z;const{el:te,props:re}=E,{bm:ue,m:be,parent:ge,root:Pe,type:Oe}=b,it=Kt(E);Pt(b,!1),ue&&as(ue),!it&&(Z=re&&re.onVnodeBeforeMount)&&Ze(Z,ge,E),Pt(b,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(Oe);const at=b.subTree=nr(b);C(null,at,_,S,b,L,k),E.el=at.el}if(be&&_e(be,L),!it&&(Z=re&&re.onVnodeMounted)){const at=E;_e(()=>Ze(Z,ge,at),L)}(E.shapeFlag&256||ge&&Kt(ge.vnode)&&ge.vnode.shapeFlag&256)&&b.a&&_e(b.a,L),b.isMounted=!0,E=_=S=null}};b.scope.on();const H=b.effect=new ti(V);b.scope.off();const I=b.update=H.run.bind(H),oe=b.job=H.runIfDirty.bind(H);oe.i=b,oe.id=b.uid,H.scheduler=()=>zn(oe),Pt(b,!0),I()},ie=(b,E,_)=>{E.component=b;const S=b.vnode.props;b.vnode=E,b.next=null,oc(b,E.props,S,_),ac(b,E.children,_),Ct(),Xn(b),At()},fe=(b,E,_,S,L,k,U,V,H=!1)=>{const I=b&&b.children,oe=b?b.shapeFlag:0,Z=E.children,{patchFlag:te,shapeFlag:re}=E;if(te>0){if(te&128){wt(I,Z,_,S,L,k,U,V,H);return}else if(te&256){We(I,Z,_,S,L,k,U,V,H);return}}re&8?(oe&16&&Ke(I,L,k),Z!==I&&l(_,Z)):oe&16?re&16?wt(I,Z,_,S,L,k,U,V,H):Ke(I,L,k,!0):(oe&8&&l(_,""),re&16&&q(Z,_,S,L,k,U,V,H))},We=(b,E,_,S,L,k,U,V,H)=>{b=b||rs,E=E||rs;const I=b.length,oe=E.length,Z=Math.min(I,oe);let te;for(te=0;te<Z;te++){const re=E[te]=H?St(E[te]):dt(E[te]);C(b[te],re,_,null,L,k,U,V,H)}I>oe?Ke(b,L,k,!0,!1,Z):q(E,_,S,L,k,U,V,H,Z)},wt=(b,E,_,S,L,k,U,V,H)=>{let I=0;const oe=E.length;let Z=b.length-1,te=oe-1;for(;I<=Z&&I<=te;){const re=b[I],ue=E[I]=H?St(E[I]):dt(E[I]);if(ts(re,ue))C(re,ue,_,null,L,k,U,V,H);else break;I++}for(;I<=Z&&I<=te;){const re=b[Z],ue=E[te]=H?St(E[te]):dt(E[te]);if(ts(re,ue))C(re,ue,_,null,L,k,U,V,H);else break;Z--,te--}if(I>Z){if(I<=te){const re=te+1,ue=re<oe?E[re].el:S;for(;I<=te;)C(null,E[I]=H?St(E[I]):dt(E[I]),_,ue,L,k,U,V,H),I++}}else if(I>te)for(;I<=Z;)ze(b[I],L,k,!0),I++;else{const re=I,ue=I,be=new Map;for(I=ue;I<=te;I++){const Ve=E[I]=H?St(E[I]):dt(E[I]);Ve.key!=null&&be.set(Ve.key,I)}let ge,Pe=0;const Oe=te-ue+1;let it=!1,at=0;const vs=new Array(Oe);for(I=0;I<Oe;I++)vs[I]=0;for(I=re;I<=Z;I++){const Ve=b[I];if(Pe>=Oe){ze(Ve,L,k,!0);continue}let lt;if(Ve.key!=null)lt=be.get(Ve.key);else for(ge=ue;ge<=te;ge++)if(vs[ge-ue]===0&&ts(Ve,E[ge])){lt=ge;break}lt===void 0?ze(Ve,L,k,!0):(vs[lt-ue]=I+1,lt>=at?at=lt:it=!0,C(Ve,E[lt],_,null,L,k,U,V,H),Pe++)}const Un=it?uc(vs):rs;for(ge=Un.length-1,I=Oe-1;I>=0;I--){const Ve=ue+I,lt=E[Ve],Wn=E[Ve+1],Kn=Ve+1<oe?Wn.el||Wn.placeholder:S;vs[I]===0?C(null,lt,_,Kn,L,k,U,V,H):it&&(ge<0||I!==Un[ge]?rt(lt,_,Kn,2):ge--)}}},rt=(b,E,_,S,L=null)=>{const{el:k,type:U,transition:V,children:H,shapeFlag:I}=b;if(I&6){rt(b.component.subTree,E,_,S);return}if(I&128){b.suspense.move(E,_,S);return}if(I&64){U.move(b,E,_,ee);return}if(U===pe){o(k,E,_);for(let Z=0;Z<H.length;Z++)rt(H[Z],E,_,S);o(b.anchor,E,_);return}if(U===Xs){A(b,E,_);return}if(S!==2&&I&1&&V)if(S===0)V.beforeEnter(k),o(k,E,_),_e(()=>V.enter(k),L);else{const{leave:Z,delayLeave:te,afterLeave:re}=V,ue=()=>{b.ctx.isUnmounted?n(k):o(k,E,_)},be=()=>{k._isLeaving&&k[Fl](!0),Z(k,()=>{ue(),re&&re()})};te?te(k,ue,be):be()}else o(k,E,_)},ze=(b,E,_,S=!1,L=!1)=>{const{type:k,props:U,ref:V,children:H,dynamicChildren:I,shapeFlag:oe,patchFlag:Z,dirs:te,cacheIndex:re}=b;if(Z===-2&&(L=!1),V!=null&&(Ct(),$s(V,null,_,b,!0),At()),re!=null&&(E.renderCache[re]=void 0),oe&256){E.ctx.deactivate(b);return}const ue=oe&1&&te,be=!Kt(b);let ge;if(be&&(ge=U&&U.onVnodeBeforeUnmount)&&Ze(ge,E,b),oe&6)Rt(b.component,_,S);else{if(oe&128){b.suspense.unmount(_,S);return}ue&&zt(b,null,E,"beforeUnmount"),oe&64?b.type.remove(b,E,_,ee,S):I&&!I.hasOnce&&(k!==pe||Z>0&&Z&64)?Ke(I,E,_,!1,!0):(k===pe&&Z&384||!L&&oe&16)&&Ke(H,E,_),S&&Xt(b)}(be&&(ge=U&&U.onVnodeUnmounted)||ue)&&_e(()=>{ge&&Ze(ge,E,b),ue&&zt(b,null,E,"unmounted")},_)},Xt=b=>{const{type:E,el:_,anchor:S,transition:L}=b;if(E===pe){Jt(_,S);return}if(E===Xs){w(b);return}const k=()=>{n(_),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(b.shapeFlag&1&&L&&!L.persisted){const{leave:U,delayLeave:V}=L,H=()=>U(_,k);V?V(b.el,k,H):H()}else k()},Jt=(b,E)=>{let _;for(;b!==E;)_=p(b),n(b),b=_;n(E)},Rt=(b,E,_)=>{const{bum:S,scope:L,job:k,subTree:U,um:V,m:H,a:I}=b;ao(H),ao(I),S&&as(S),L.stop(),k&&(k.flags|=8,ze(U,b,E,_)),V&&_e(V,E),_e(()=>{b.isUnmounted=!0},E)},Ke=(b,E,_,S=!1,L=!1,k=0)=>{for(let U=k;U<b.length;U++)ze(b[U],E,_,S,L)},T=b=>{if(b.shapeFlag&6)return T(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const E=p(b.anchor||b.el),_=E&&E[Cl];return _?p(_):E};let G=!1;const W=(b,E,_)=>{b==null?E._vnode&&ze(E._vnode,null,null,!0):C(E._vnode||null,b,E,null,null,null,_),E._vnode=b,G||(G=!0,Xn(),yi(),G=!1)},ee={p:C,um:ze,m:rt,r:Xt,mt:J,mc:q,pc:fe,pbc:y,n:T,o:e};return{render:W,hydrate:void 0,createApp:Ul(W)}}function No({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Pt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function dc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zi(e,t,s=!1){const o=e.children,n=t.children;if(ne(o)&&ne(n))for(let r=0;r<o.length;r++){const i=o[r];let a=n[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[r]=St(n[r]),a.el=i.el),!s&&a.patchFlag!==-2&&Zi(i,a)),a.type===_o&&a.patchFlag!==-1&&(a.el=i.el),a.type===ht&&!a.el&&(a.el=i.el)}}function uc(e){const t=e.slice(),s=[0];let o,n,r,i,a;const c=e.length;for(o=0;o<c;o++){const d=e[o];if(d!==0){if(n=s[s.length-1],e[n]<d){t[o]=n,s.push(o);continue}for(r=0,i=s.length-1;r<i;)a=r+i>>1,e[s[a]]<d?r=a+1:i=a;d<e[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,i=s[r-1];r-- >0;)s[r]=i,i=t[i];return s}function Gi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gi(t)}function ao(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const lo=e=>e.__isSuspense;function pc(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):El(e)}const pe=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Xs=Symbol.for("v-stc"),Ss=[];let Ue=null;function $(e=!1){Ss.push(Ue=e?null:[])}function fc(){Ss.pop(),Ue=Ss[Ss.length-1]||null}let qs=1;function co(e,t=!1){qs+=e,e<0&&Ue&&t&&(Ue.hasOnce=!0)}function Yi(e){return e.dynamicChildren=qs>0?Ue||rs:null,fc(),qs>0&&Ue&&Ue.push(e),e}function M(e,t,s,o,n,r){return Yi(m(e,t,s,o,n,r,!0))}function tt(e,t,s,o,n){return Yi(N(e,t,s,o,n,!0))}function fs(e){return e?e.__v_isVNode===!0:!1}function ts(e,t){return e.type===t.type&&e.key===t.key}const Xi=({key:e})=>e??null,Js=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||Te(e)||ae(e)?{i:$e,r:e,k:t,f:!!s}:e:null);function m(e,t=null,s=null,o=0,n=null,r=e===pe?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xi(t),ref:t&&Js(t),scopeId:Ci,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:$e};return a?(Nn(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=Ae(s)?8:16),qs>0&&!i&&Ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ue.push(c),c}const N=hc;function hc(e,t=null,s=null,o=0,n=null,r=!1){if((!e||e===ki)&&(e=ht),fs(e)){const a=Zt(e,t,!0);return s&&Nn(a,s),qs>0&&!r&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(e)]=a:Ue.push(a)),a.patchFlag=-2,a}if(Fc(e)&&(e=e.__vccOpts),t){t=xc(t);let{class:a,style:c}=t;a&&!Ae(a)&&(t.class=Os(a)),Ee(c)&&(Rn(c)&&!ne(c)&&(c=Me({},c)),t.style=ut(c))}const i=Ae(e)?1:lo(e)?128:Al(e)?64:Ee(e)?4:ae(e)?2:0;return m(e,t,s,o,n,i,r,!0)}function xc(e){return e?Rn(e)||Hi(e)?Me({},e):e:null}function Zt(e,t,s=!1,o=!1){const{props:n,ref:r,patchFlag:i,children:a,transition:c}=e,d=t?mc(n||{},t):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Xi(d),ref:t&&t.ref?s&&r?ne(r)?r.concat(Js(t)):[r,Js(t)]:Js(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&Do(l,c.clone(l)),l}function Fe(e=" ",t=0){return N(_o,null,e,t)}function a6(e,t){const s=N(Xs,null,e);return s.staticCount=t,s}function ce(e="",t=!1){return t?($(),tt(ht,null,e)):N(ht,null,e)}function dt(e){return e==null||typeof e=="boolean"?N(ht):ne(e)?N(pe,null,e.slice()):fs(e)?St(e):N(_o,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function Nn(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ne(t))s=16;else if(typeof t=="object")if(o&65){const n=t.default;n&&(n._c&&(n._d=!1),Nn(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Hi(t)?t._ctx=$e:n===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:$e},s=32):(t=String(t),o&64?(s=16,t=[Fe(t)]):s=8);e.children=t,e.shapeFlag|=s}function mc(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const n in o)if(n==="class")t.class!==o.class&&(t.class=Os([t.class,o.class]));else if(n==="style")t.style=ut([t.style,o.style]);else if(vo(n)){const r=t[n],i=o[n];i&&r!==i&&!(ne(r)&&r.includes(i))&&(t[n]=r?[].concat(r,i):i)}else n!==""&&(t[n]=o[n])}return t}function Ze(e,t,s,o=null){ft(e,t,7,[s,o])}const gc=qi();let vc=0;function bc(e,t,s){const o=e.type,n=(t?t.appContext:e.appContext)||gc,r={uid:vc++,vnode:e,type:o,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ua(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ji(o,n),emitsOptions:Pi(o,n),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:o.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Yl.bind(null,r),e.ce&&e.ce(r),r}let Se=null;const Ji=()=>Se||$e;let uo,an;{const e=Eo(),t=(s,o)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(o),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};uo=t("__VUE_INSTANCE_SETTERS__",s=>Se=s),an=t("__VUE_SSR_SETTERS__",s=>Rs=s)}const Vs=e=>{const t=Se;return uo(e),e.scope.on(),()=>{e.scope.off(),uo(t)}},ar=()=>{Se&&Se.scope.off(),uo(null)};function Qi(e){return e.vnode.shapeFlag&4}let Rs=!1;function yc(e,t=!1,s=!1){t&&an(t);const{props:o,children:n}=e.vnode,r=Qi(e);sc(e,o,r,t),ic(e,n,s||t);const i=r?Ec(e,t):void 0;return t&&an(!1),i}function Ec(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zl);const{setup:o}=s;if(o){Ct();const n=e.setupContext=o.length>1?Ac(e):null,r=Vs(e),i=Hs(o,e,0,[e.props,n]),a=Zr(i);if(At(),r(),(a||e.sp)&&!Kt(e)&&Di(e),a){if(i.then(ar,ar),t)return i.then(c=>{lr(e,c)}).catch(c=>{Ao(c,e,0)});e.asyncDep=i}else lr(e,i)}else ea(e)}function lr(e,t,s){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ee(t)&&(e.setupState=gi(t)),ea(e)}function ea(e,t,s){const o=e.type;e.render||(e.render=o.render||pt);{const n=Vs(e);Ct();try{Pl(e)}finally{At(),n()}}}const Cc={get(e,t){return ke(e,"get",""),e[t]}};function Ac(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Cc),slots:e.slots,emit:e.emit,expose:t}}function $o(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(gi(ul(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in ks)return ks[s](e)},has(t,s){return s in t||s in ks}})):e.proxy}function ln(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function Fc(e){return ae(e)&&"__vccOpts"in e}const Be=(e,t)=>ml(e,t,Rs);function ta(e,t,s){try{co(-1);const o=arguments.length;return o===2?Ee(t)&&!ne(t)?fs(t)?N(e,null,[t]):N(e,t):N(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&fs(s)&&(s=[s]),N(e,t,s))}finally{co(1)}}const Dc="3.5.25";let cn;const cr=typeof window<"u"&&window.trustedTypes;if(cr)try{cn=cr.createPolicy("vue",{createHTML:e=>e})}catch{}const sa=cn?e=>cn.createHTML(e):e=>e,Bc="http://www.w3.org/2000/svg",wc="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,dr=vt&&vt.createElement("template"),_c={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const n=t==="svg"?vt.createElementNS(Bc,e):t==="mathml"?vt.createElementNS(wc,e):s?vt.createElement(e,{is:s}):vt.createElement(e);return e==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,o,n,r){const i=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{dr.innerHTML=sa(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=dr.content;if(o==="svg"||o==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},$c=Symbol("_vtc");function kc(e,t,s){const o=e[$c];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const po=Symbol("_vod"),oa=Symbol("_vsh"),l6={name:"show",beforeMount(e,{value:t},{transition:s}){e[po]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):ys(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),ys(e,!0),o.enter(e)):o.leave(e,()=>{ys(e,!1)}):ys(e,t))},beforeUnmount(e,{value:t}){ys(e,t)}};function ys(e,t){e.style.display=t?e[po]:"none",e[oa]=!t}const Sc=Symbol(""),Tc=/(?:^|;)\s*display\s*:/;function Mc(e,t,s){const o=e.style,n=Ae(s);let r=!1;if(s&&!n){if(t)if(Ae(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();s[a]==null&&Qs(o,a,"")}else for(const i in t)s[i]==null&&Qs(o,i,"");for(const i in s)i==="display"&&(r=!0),Qs(o,i,s[i])}else if(n){if(t!==s){const i=o[Sc];i&&(s+=";"+i),o.cssText=s,r=Tc.test(s)}}else t&&e.removeAttribute("style");po in e&&(e[po]=r?o.display:"",e[oa]&&(o.display="none"))}const ur=/\s*!important$/;function Qs(e,t,s){if(ne(s))s.forEach(o=>Qs(e,t,o));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const o=Lc(e,t);ur.test(s)?e.setProperty(Gt(o),s.replace(ur,""),"important"):e[o]=s}}const pr=["Webkit","Moz","ms"],Ho={};function Lc(e,t){const s=Ho[t];if(s)return s;let o=Ye(t);if(o!=="filter"&&o in e)return Ho[t]=o;o=yo(o);for(let n=0;n<pr.length;n++){const r=pr[n]+o;if(r in e)return Ho[t]=r}return t}const fr="http://www.w3.org/1999/xlink";function hr(e,t,s,o,n,r=ja(t)){o&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(fr,t.slice(6,t.length)):e.setAttributeNS(fr,t,s):s==null||r&&!Jr(s)?e.removeAttribute(t):e.setAttribute(t,r?"":Dt(s)?String(s):s)}function xr(e,t,s,o,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?sa(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(a!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Jr(s):s==null&&a==="string"?(s="",i=!0):a==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(n||t)}function ss(e,t,s,o){e.addEventListener(t,s,o)}function Ic(e,t,s,o){e.removeEventListener(t,s,o)}const mr=Symbol("_vei");function qc(e,t,s,o,n=null){const r=e[mr]||(e[mr]={}),i=r[t];if(o&&i)i.value=o;else{const[a,c]=Rc(t);if(o){const d=r[t]=Oc(o,n);ss(e,a,d,c)}else i&&(Ic(e,a,i,c),r[t]=void 0)}}const gr=/(?:Once|Passive|Capture)$/;function Rc(e){let t;if(gr.test(e)){t={};let o;for(;o=e.match(gr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Vo=0;const zc=Promise.resolve(),Pc=()=>Vo||(zc.then(()=>Vo=0),Vo=Date.now());function Oc(e,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;ft(Nc(o,s.value),t,5,[o])};return s.value=e,s.attached=Pc(),s}function Nc(e,t){if(ne(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>n=>!n._stopped&&o&&o(n))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hc=(e,t,s,o,n,r)=>{const i=n==="svg";t==="class"?kc(e,o,i):t==="style"?Mc(e,s,o):vo(t)?wn(t)||qc(e,t,s,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vc(e,t,o,i))?(xr(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hr(e,t,o,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(o))?xr(e,Ye(t),o,r,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),hr(e,t,o,i))};function Vc(e,t,s,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&ae(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return vr(t)&&Ae(s)?!1:t in e}const br=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?s=>as(t,s):t};function jc(e){e.target.composing=!0}function yr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jo=Symbol("_assign");function Er(e,t,s){return t&&(e=e.trim()),s&&(e=kn(e)),e}const na={created(e,{modifiers:{lazy:t,trim:s,number:o}},n){e[jo]=br(n);const r=o||n.props&&n.props.type==="number";ss(e,t?"change":"input",i=>{i.target.composing||e[jo](Er(e.value,s,r))}),(s||r)&&ss(e,"change",()=>{e.value=Er(e.value,s,r)}),t||(ss(e,"compositionstart",jc),ss(e,"compositionend",yr),ss(e,"change",yr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:o,trim:n,number:r}},i){if(e[jo]=br(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?kn(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(o&&t===s||n&&e.value.trim()===c)||(e.value=c))}},Uc=["ctrl","shift","alt","meta"],Wc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Uc.some(s=>e[`${s}Key`]&&!t.includes(s))},Kc=(e,t)=>{const s=e._withMods||(e._withMods={}),o=t.join(".");return s[o]||(s[o]=((n,...r)=>{for(let i=0;i<t.length;i++){const a=Wc[t[i]];if(a&&a(n,t))return}return e(n,...r)}))},Zc=Me({patchProp:Hc},_c);let Cr;function Gc(){return Cr||(Cr=lc(Zc))}const Yc=((...e)=>{const t=Gc().createApp(...e),{mount:s}=t;return t.mount=o=>{const n=Jc(o);if(!n)return;const r=t._component;!ae(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=s(n,!1,Xc(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},t});function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jc(e){return Ae(e)?document.querySelector(e):e}(function(){function e(g){if(g)B[0]=B[16]=B[1]=B[2]=B[3]=B[4]=B[5]=B[6]=B[7]=B[8]=B[9]=B[10]=B[11]=B[12]=B[13]=B[14]=B[15]=0,this.blocks=B,this.buffer8=a;else if(l){var y=new ArrayBuffer(68);this.buffer8=new Uint8Array(y),this.blocks=new Uint32Array(y)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}function t(g,y){var F,D=w(g);if(g=D[0],D[1]){var K,J=[],O=g.length,Y=0;for(F=0;F<O;++F)(K=g.charCodeAt(F))<128?J[Y++]=K:K<2048?(J[Y++]=192|K>>>6,J[Y++]=128|63&K):K<55296||K>=57344?(J[Y++]=224|K>>>12,J[Y++]=128|K>>>6&63,J[Y++]=128|63&K):(K=65536+((1023&K)<<10|1023&g.charCodeAt(++F)),J[Y++]=240|K>>>18,J[Y++]=128|K>>>12&63,J[Y++]=128|K>>>6&63,J[Y++]=128|63&K);g=J}g.length>64&&(g=new e(!0).update(g).array());var ie=[],fe=[];for(F=0;F<64;++F){var We=g[F]||0;ie[F]=92^We,fe[F]=54^We}e.call(this,y),this.update(fe),this.oKeyPad=ie,this.inner=!0,this.sharedMemory=y}var s="input is invalid type",o=typeof window=="object",n=o?window:{};n.JS_MD5_NO_WINDOW&&(o=!1);var r=!o&&typeof self=="object",i=!n.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;i?n=global:r&&(n=self);var a,c=!n.JS_MD5_NO_COMMON_JS&&typeof module=="object"&&module.exports,d=typeof define=="function"&&define.amd,l=!n.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",u="0123456789abcdef".split(""),p=[128,32768,8388608,-2147483648],h=[0,8,16,24],v=["hex","array","digest","buffer","arrayBuffer","base64"],C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),B=[];if(l){var x=new ArrayBuffer(68);a=new Uint8Array(x),B=new Uint32Array(x)}var f=Array.isArray;!n.JS_MD5_NO_NODE_JS&&f||(f=function(g){return Object.prototype.toString.call(g)==="[object Array]"});var A=ArrayBuffer.isView;!l||!n.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&A||(A=function(g){return typeof g=="object"&&g.buffer&&g.buffer.constructor===ArrayBuffer});var w=function(g){var y=typeof g;if(y==="string")return[g,!0];if(y!=="object"||g===null)throw new Error(s);if(l&&g.constructor===ArrayBuffer)return[new Uint8Array(g),!1];if(!f(g)&&!A(g))throw new Error(s);return[g,!1]},P=function(g){return function(y){return new e(!0).update(y)[g]()}},R=function(g){var y,F=require("crypto"),D=require("buffer").Buffer;return y=D.from&&!n.JS_MD5_NO_BUFFER_FROM?D.from:function(K){return new D(K)},function(K){if(typeof K=="string")return F.createHash("md5").update(K,"utf8").digest("hex");if(K==null)throw new Error(s);return K.constructor===ArrayBuffer&&(K=new Uint8Array(K)),f(K)||A(K)||K.constructor===D?F.createHash("md5").update(y(K)).digest("hex"):g(K)}},z=function(g){return function(y,F){return new t(y,!0).update(F)[g]()}};e.prototype.update=function(g){if(this.finalized)throw new Error("finalize already called");var y=w(g);g=y[0];for(var F,D,K=y[1],J=0,O=g.length,Y=this.blocks,ie=this.buffer8;J<O;){if(this.hashed&&(this.hashed=!1,Y[0]=Y[16],Y[16]=Y[1]=Y[2]=Y[3]=Y[4]=Y[5]=Y[6]=Y[7]=Y[8]=Y[9]=Y[10]=Y[11]=Y[12]=Y[13]=Y[14]=Y[15]=0),K)if(l)for(D=this.start;J<O&&D<64;++J)(F=g.charCodeAt(J))<128?ie[D++]=F:F<2048?(ie[D++]=192|F>>>6,ie[D++]=128|63&F):F<55296||F>=57344?(ie[D++]=224|F>>>12,ie[D++]=128|F>>>6&63,ie[D++]=128|63&F):(F=65536+((1023&F)<<10|1023&g.charCodeAt(++J)),ie[D++]=240|F>>>18,ie[D++]=128|F>>>12&63,ie[D++]=128|F>>>6&63,ie[D++]=128|63&F);else for(D=this.start;J<O&&D<64;++J)(F=g.charCodeAt(J))<128?Y[D>>>2]|=F<<h[3&D++]:F<2048?(Y[D>>>2]|=(192|F>>>6)<<h[3&D++],Y[D>>>2]|=(128|63&F)<<h[3&D++]):F<55296||F>=57344?(Y[D>>>2]|=(224|F>>>12)<<h[3&D++],Y[D>>>2]|=(128|F>>>6&63)<<h[3&D++],Y[D>>>2]|=(128|63&F)<<h[3&D++]):(F=65536+((1023&F)<<10|1023&g.charCodeAt(++J)),Y[D>>>2]|=(240|F>>>18)<<h[3&D++],Y[D>>>2]|=(128|F>>>12&63)<<h[3&D++],Y[D>>>2]|=(128|F>>>6&63)<<h[3&D++],Y[D>>>2]|=(128|63&F)<<h[3&D++]);else if(l)for(D=this.start;J<O&&D<64;++J)ie[D++]=g[J];else for(D=this.start;J<O&&D<64;++J)Y[D>>>2]|=g[J]<<h[3&D++];this.lastByteIndex=D,this.bytes+=D-this.start,D>=64?(this.start=D-64,this.hash(),this.hashed=!0):this.start=D}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var g=this.blocks,y=this.lastByteIndex;g[y>>>2]|=p[3&y],y>=56&&(this.hashed||this.hash(),g[0]=g[16],g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0),g[14]=this.bytes<<3,g[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},e.prototype.hash=function(){var g,y,F,D,K,J,O=this.blocks;this.first?y=((y=((g=((g=O[0]-680876937)<<7|g>>>25)-271733879<<0)^(F=((F=(-271733879^(D=((D=(-1732584194^2004318071&g)+O[1]-117830708)<<12|D>>>20)+g<<0)&(-271733879^g))+O[2]-1126478375)<<17|F>>>15)+D<<0)&(D^g))+O[3]-1316259209)<<22|y>>>10)+F<<0:(g=this.h0,y=this.h1,F=this.h2,y=((y+=((g=((g+=((D=this.h3)^y&(F^D))+O[0]-680876936)<<7|g>>>25)+y<<0)^(F=((F+=(y^(D=((D+=(F^g&(y^F))+O[1]-389564586)<<12|D>>>20)+g<<0)&(g^y))+O[2]+606105819)<<17|F>>>15)+D<<0)&(D^g))+O[3]-1044525330)<<22|y>>>10)+F<<0),y=((y+=((g=((g+=(D^y&(F^D))+O[4]-176418897)<<7|g>>>25)+y<<0)^(F=((F+=(y^(D=((D+=(F^g&(y^F))+O[5]+1200080426)<<12|D>>>20)+g<<0)&(g^y))+O[6]-1473231341)<<17|F>>>15)+D<<0)&(D^g))+O[7]-45705983)<<22|y>>>10)+F<<0,y=((y+=((g=((g+=(D^y&(F^D))+O[8]+1770035416)<<7|g>>>25)+y<<0)^(F=((F+=(y^(D=((D+=(F^g&(y^F))+O[9]-1958414417)<<12|D>>>20)+g<<0)&(g^y))+O[10]-42063)<<17|F>>>15)+D<<0)&(D^g))+O[11]-1990404162)<<22|y>>>10)+F<<0,y=((y+=((g=((g+=(D^y&(F^D))+O[12]+1804603682)<<7|g>>>25)+y<<0)^(F=((F+=(y^(D=((D+=(F^g&(y^F))+O[13]-40341101)<<12|D>>>20)+g<<0)&(g^y))+O[14]-1502002290)<<17|F>>>15)+D<<0)&(D^g))+O[15]+1236535329)<<22|y>>>10)+F<<0,y=((y+=((D=((D+=(y^F&((g=((g+=(F^D&(y^F))+O[1]-165796510)<<5|g>>>27)+y<<0)^y))+O[6]-1069501632)<<9|D>>>23)+g<<0)^g&((F=((F+=(g^y&(D^g))+O[11]+643717713)<<14|F>>>18)+D<<0)^D))+O[0]-373897302)<<20|y>>>12)+F<<0,y=((y+=((D=((D+=(y^F&((g=((g+=(F^D&(y^F))+O[5]-701558691)<<5|g>>>27)+y<<0)^y))+O[10]+38016083)<<9|D>>>23)+g<<0)^g&((F=((F+=(g^y&(D^g))+O[15]-660478335)<<14|F>>>18)+D<<0)^D))+O[4]-405537848)<<20|y>>>12)+F<<0,y=((y+=((D=((D+=(y^F&((g=((g+=(F^D&(y^F))+O[9]+568446438)<<5|g>>>27)+y<<0)^y))+O[14]-1019803690)<<9|D>>>23)+g<<0)^g&((F=((F+=(g^y&(D^g))+O[3]-187363961)<<14|F>>>18)+D<<0)^D))+O[8]+1163531501)<<20|y>>>12)+F<<0,y=((y+=((D=((D+=(y^F&((g=((g+=(F^D&(y^F))+O[13]-1444681467)<<5|g>>>27)+y<<0)^y))+O[2]-51403784)<<9|D>>>23)+g<<0)^g&((F=((F+=(g^y&(D^g))+O[7]+1735328473)<<14|F>>>18)+D<<0)^D))+O[12]-1926607734)<<20|y>>>12)+F<<0,y=((y+=((J=(D=((D+=((K=y^F)^(g=((g+=(K^D)+O[5]-378558)<<4|g>>>28)+y<<0))+O[8]-2022574463)<<11|D>>>21)+g<<0)^g)^(F=((F+=(J^y)+O[11]+1839030562)<<16|F>>>16)+D<<0))+O[14]-35309556)<<23|y>>>9)+F<<0,y=((y+=((J=(D=((D+=((K=y^F)^(g=((g+=(K^D)+O[1]-1530992060)<<4|g>>>28)+y<<0))+O[4]+1272893353)<<11|D>>>21)+g<<0)^g)^(F=((F+=(J^y)+O[7]-155497632)<<16|F>>>16)+D<<0))+O[10]-1094730640)<<23|y>>>9)+F<<0,y=((y+=((J=(D=((D+=((K=y^F)^(g=((g+=(K^D)+O[13]+681279174)<<4|g>>>28)+y<<0))+O[0]-358537222)<<11|D>>>21)+g<<0)^g)^(F=((F+=(J^y)+O[3]-722521979)<<16|F>>>16)+D<<0))+O[6]+76029189)<<23|y>>>9)+F<<0,y=((y+=((J=(D=((D+=((K=y^F)^(g=((g+=(K^D)+O[9]-640364487)<<4|g>>>28)+y<<0))+O[12]-421815835)<<11|D>>>21)+g<<0)^g)^(F=((F+=(J^y)+O[15]+530742520)<<16|F>>>16)+D<<0))+O[2]-995338651)<<23|y>>>9)+F<<0,y=((y+=((D=((D+=(y^((g=((g+=(F^(y|~D))+O[0]-198630844)<<6|g>>>26)+y<<0)|~F))+O[7]+1126891415)<<10|D>>>22)+g<<0)^((F=((F+=(g^(D|~y))+O[14]-1416354905)<<15|F>>>17)+D<<0)|~g))+O[5]-57434055)<<21|y>>>11)+F<<0,y=((y+=((D=((D+=(y^((g=((g+=(F^(y|~D))+O[12]+1700485571)<<6|g>>>26)+y<<0)|~F))+O[3]-1894986606)<<10|D>>>22)+g<<0)^((F=((F+=(g^(D|~y))+O[10]-1051523)<<15|F>>>17)+D<<0)|~g))+O[1]-2054922799)<<21|y>>>11)+F<<0,y=((y+=((D=((D+=(y^((g=((g+=(F^(y|~D))+O[8]+1873313359)<<6|g>>>26)+y<<0)|~F))+O[15]-30611744)<<10|D>>>22)+g<<0)^((F=((F+=(g^(D|~y))+O[6]-1560198380)<<15|F>>>17)+D<<0)|~g))+O[13]+1309151649)<<21|y>>>11)+F<<0,y=((y+=((D=((D+=(y^((g=((g+=(F^(y|~D))+O[4]-145523070)<<6|g>>>26)+y<<0)|~F))+O[11]-1120210379)<<10|D>>>22)+g<<0)^((F=((F+=(g^(D|~y))+O[2]+718787259)<<15|F>>>17)+D<<0)|~g))+O[9]-343485551)<<21|y>>>11)+F<<0,this.first?(this.h0=g+1732584193<<0,this.h1=y-271733879<<0,this.h2=F-1732584194<<0,this.h3=D+271733878<<0,this.first=!1):(this.h0=this.h0+g<<0,this.h1=this.h1+y<<0,this.h2=this.h2+F<<0,this.h3=this.h3+D<<0)},e.prototype.hex=function(){this.finalize();var g=this.h0,y=this.h1,F=this.h2,D=this.h3;return u[g>>>4&15]+u[15&g]+u[g>>>12&15]+u[g>>>8&15]+u[g>>>20&15]+u[g>>>16&15]+u[g>>>28&15]+u[g>>>24&15]+u[y>>>4&15]+u[15&y]+u[y>>>12&15]+u[y>>>8&15]+u[y>>>20&15]+u[y>>>16&15]+u[y>>>28&15]+u[y>>>24&15]+u[F>>>4&15]+u[15&F]+u[F>>>12&15]+u[F>>>8&15]+u[F>>>20&15]+u[F>>>16&15]+u[F>>>28&15]+u[F>>>24&15]+u[D>>>4&15]+u[15&D]+u[D>>>12&15]+u[D>>>8&15]+u[D>>>20&15]+u[D>>>16&15]+u[D>>>28&15]+u[D>>>24&15]},e.prototype.toString=e.prototype.hex,e.prototype.digest=function(){this.finalize();var g=this.h0,y=this.h1,F=this.h2,D=this.h3;return[255&g,g>>>8&255,g>>>16&255,g>>>24&255,255&y,y>>>8&255,y>>>16&255,y>>>24&255,255&F,F>>>8&255,F>>>16&255,F>>>24&255,255&D,D>>>8&255,D>>>16&255,D>>>24&255]},e.prototype.array=e.prototype.digest,e.prototype.arrayBuffer=function(){this.finalize();var g=new ArrayBuffer(16),y=new Uint32Array(g);return y[0]=this.h0,y[1]=this.h1,y[2]=this.h2,y[3]=this.h3,g},e.prototype.buffer=e.prototype.arrayBuffer,e.prototype.base64=function(){for(var g,y,F,D="",K=this.array(),J=0;J<15;)g=K[J++],y=K[J++],F=K[J++],D+=C[g>>>2]+C[63&(g<<4|y>>>4)]+C[63&(y<<2|F>>>6)]+C[63&F];return g=K[J],D+=C[g>>>2]+C[g<<4&63]+"=="},(t.prototype=new e).finalize=function(){if(e.prototype.finalize.call(this),this.inner){this.inner=!1;var g=this.array();e.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(g),e.prototype.finalize.call(this)}};var q=(function(){var g=P("hex");i&&(g=R(g)),g.create=function(){return new e},g.update=function(D){return g.create().update(D)};for(var y=0;y<v.length;++y){var F=v[y];g[F]=P(F)}return g})();q.md5=q,q.md5.hmac=(function(){var g=z("hex");g.create=function(D){return new t(D)},g.update=function(D,K){return g.create(D).update(K)};for(var y=0;y<v.length;++y){var F=v[y];g[F]=z(F)}return g})(),c?module.exports=q:(n.md5=q,d&&define(function(){return q}))})();const ko={CSSStyleSheet:!0,CSSContainer:CSS.supports("container-type","size")};try{new CSSStyleSheet}catch{ko.CSSStyleSheet=!1}const Qc=(e,t)=>{for(const s of t){if(!ko.CSSStyleSheet){const n=document.createElement("style");n.textContent=s,e.insertBefore(n,e.firstChild);continue}const o=new CSSStyleSheet;o.replaceSync(s),e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}},le=e=>{const t={},s={};for(const o in e){let n=e[o];const r={key:o,sync:!0,types:[]};o.startsWith("$")&&(r.key=o.slice(1),r.sync=!1),Array.isArray(n)&&(r.types=n,n=r.types[0]),t[r.key]=n,s[r.key]={sync:r.sync,def:n,to:i=>{switch(typeof n){case"string":const a=String(i);return r.types.length>0?r.types.includes(a)?a:r.types[0]:a;case"number":const c=Number(i);return isNaN(c)?n:c;case"boolean":return typeof i=="boolean"?i:i==="true"}}}}return Object.defineProperty(t,"$meta",{value:s}),t},So=e=>e,e0=`
:host{
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*{
  outline: none;
}
`,X=e=>{const t={observedAttributes:[],upperPropKeys:{},metaProps:e.props?.$meta??{},events:[]};for(const n in t.metaProps??{}){const r=n.toLowerCase();t.observedAttributes.push(r),t.upperPropKeys[r]=n}for(const n in e.events){const r=`on${n}`;t.observedAttributes.push(r),!(r in HTMLElement.prototype)&&t.events.push(r)}const s=new Map;class o extends HTMLElement{static observedAttributes=t.observedAttributes;static define(r){customElements.define(r,this)}constructor(){super();const r=this.attachShadow({mode:"open"});r.innerHTML=e.template??"",Qc(r,[e0,...e.style?Array.isArray(e.style)?e.style:[e.style]:[]]);const i={...e.props};let a;const c={};for(const l in i){const u=this[l];u!==void 0&&(c[l]=u),Object.defineProperty(this,l,{configurable:!0,get:()=>{const p=a?.[l];return!p||typeof p=="function"||!p.get?i[l]:p.get?.(i[l])},set:p=>{const h=t.metaProps[l],v=p===void 0?h.def:h.to(p);if(h.sync){const x=l.toLowerCase(),f=this.getAttribute(x),A=String(v);if(v===h.def&&f!==null)return this.removeAttribute(x);if(v!==h.def&&f!==A)return this.setAttribute(x,A)}if(v===this[l])return;const C=i[l];i[l]=v;const B=a?.[l];if(B)try{typeof B=="function"?B(v,C):B.set?.(v,C)}catch(x){throw i[l]=C,x}}})}const d={};for(const l of t.events){const u=l;typeof this[u]=="function"&&(d[l]=this[u]),Object.defineProperty(this,l,{configurable:!0,get:()=>d[l]??null,set:p=>d[l]=typeof p=="function"?p:void 0}),this.addEventListener(l.slice(2),p=>d[l]&&d[l].bind(this)(p))}a=e.setup?.call(this,r);for(const l in a?.expose??{})Object.defineProperty(this,l,{get:()=>a?.expose?.[l]});for(const l in c)this[l]=c[l];this.connectedCallback=this.disconnectedCallback=this.adoptedCallback=this.attributeChangedCallback=void 0,s.set(this,a)}connectedCallback(){s.get(this)?.onMounted?.()}disconnectedCallback(){s.get(this)?.onUnmounted?.()}adoptedCallback(){s.get(this)?.onAdopted?.()}attributeChangedCallback(r,i,a){if(t.events.includes(r))return this[r]=a?new Function("event",a):null;this[t.upperPropKeys[r]]=a??void 0}}for(const n in e.methods)o[n]=e.methods[n];return o},t0="s-alert",s0=le({type:["info","success","warning","error"]}),o0=`
:host{
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  line-height: 22px;
  font-size: .875rem;
  font-weight: 500;
  min-height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  color: var(--s-color-on-secondary-container, #354A53);
  background: var(--s-color-secondary-container, #CFE6F1);
}
:host([type=success]){
  color: var(--s-color-on-success-container, #002111);
  background: var(--s-color-success-container, #92f7bc);
}
:host([type=warning]){
  color: var(--s-color-on-warning-container, #221b00);
  background: var(--s-color-warning-container, #ffe169);
}
:host([type=error]){
  color: var(--s-color-on-error-container, #93000A);
  background: var(--s-color-error-container, #FFDAD6);
}
svg{
  width: 24px;
  height: 24px;
  fill: currentColor;
  margin-right: 8px;
  margin-left: -2px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
}
.text{
  flex-grow: 1;
  min-width: 0;
}
:host(:not([type])) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 8px;
  margin-left: -2px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -2px;
  margin-left: 8px;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  color: currentColor;
  width: 24px;
  height: 24px;
}
::slotted(:is(s-button[slot=end], s-icon-button[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
  color: currentColor;
}
::slotted(s-button[slot=end]){
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: .8125rem;
}
::slotted(s-icon-button[slot=end]){
  width: 32px;
  padding: 5px;
}
`,n0=`
<slot name="start">
  <svg viewBox="0 0 24 24" class="info">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="success">
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="warning">
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="error">
    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
  </svg>
</slot>
<div class="text" part="text"><slot></slot></div>
<slot name="end"></slot>
`;class r0 extends X({style:o0,template:n0,props:s0}){}r0.define(t0);const i0="s-appbar",a0=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  container-name: s-appbar;
  container-type: inline-size;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=navigation]){
  margin-left: 4px;
  flex-shrink: 0;
}
::slotted([slot=logo]){
  margin-left: 12px;
  height: 32px;
  color: var(--s-color-primary, #006782);
  fill: currentColor;
  flex-shrink: 0;
}
::slotted([slot=headline]){
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 12px;
  color: var(--s-color-primary, #006782);
}
.view{
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  max-height: 100%;
  justify-content: flex-end;
}
.view.s-laptop{
  height: 56px;
}
.view.s-tablet ::slotted(s-search[slot=search]){
  width: auto;
  flex-grow: 1;
}
::slotted([slot=action]){
  margin: 0 4px;
  flex-shrink: 0;
}
::slotted(s-search[slot=search]){
  flex-shrink: 0;
  margin: 0 4px 0 8px;
}
@container s-appbar (max-width: 1024px){
  .view{
    height: 56px;
  }
}
@container s-appbar (max-width: 768px){
  ::slotted(s-search[slot=search]){
    width: auto;
    flex-grow: 1;
  }
}
`,l0=`
<slot name="start"></slot>
<slot name="navigation"></slot>
<slot name="logo"></slot>
<slot name="headline"></slot>
<div class="view" part="view">
  <slot></slot>
  <slot name="search"></slot>
</div>
<slot name="action"></slot>
<slot name="end"></slot>
`;class c0 extends X({style:a0,template:l0,setup(t){const s=t.querySelector(".view");ko.CSSContainer||new ResizeObserver(()=>{s.classList.toggle("s-laptop",this.offsetWidth<=1024),s.classList.toggle("s-tablet",this.offsetWidth<=768)}).observe(this)}}){}c0.define(i0);const d0="s-avatar",u0=le({$src:""}),p0=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  width: 40px;
  border-radius: 50%;
  color: var(--s-color-on-tertiary, #ffffff);
  background: var(--s-color-tertiary, #5C5B7E);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 24px;
}
::slotted([slot=badge]){
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
img{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
`,f0=`
<slot></slot>
<slot name="badge"></slot>
`;class h0 extends X({style:p0,template:f0,props:u0,setup(t){const s=document.createElement("img");return{src:o=>{s.src=o,s.onload=()=>{this.dispatchEvent(new Event("load")),t.insertBefore(s,t.children[0])},s.onerror=()=>{this.dispatchEvent(new ErrorEvent("error")),s.isConnected&&t.removeChild(s)}}}}}){}h0.define(d0);const x0="s-badge",m0=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  font-size: .625rem;
  vertical-align: middle;
  box-sizing: border-box;
  background: var(--s-color-error, #BA1A1A);
  color: var(--s-color-on-error, #ffffff);
}
:host(:not(:empty)) .text{
  height: 16px;
  padding: 0 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: inherit;
  color: inherit;
  box-shadow: inherit;
  border-radius: 8px;
}
`,g0=`
<slot class="text" part="text"></slot>
`;class v0 extends X({style:m0,template:g0}){}v0.define(x0);const ot=e=>{const t=e.trim().match(/^([\d\.]+)(s|ms)$/);if(!t)throw new Error;const s=Number(t[1]);return t[2]==="s"?s*1e3:s},b0="s-bottom-sheet",y0=le({showed:!1,disabledGesture:!1}),E0=So({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),C0=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  justify-content: center;
  align-items: flex-end;
  color: inherit;
  overflow: hidden;
}
dialog::backdrop{
  background: none;
}
dialog[open]{
  display: flex;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container{
  outline: none;
  position: relative;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom);
  max-width: 425px;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-low, #F2F4F5);
}
.indicator{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}
.indicator::before{
  content: '';
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--s-color-outline, #70787D);
  opacity: .4;
}
::slotted([slot=text]){
  padding: 24px;
  line-height: 22px;
}
::slotted(:not([slot])){
  overscroll-behavior: none;
}
@media (max-width: 768px){
  .container{
    max-width: 768px;
  }
}
`,A0=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <div class="container" part="container">
    <div class="indicator" part="indicator"></div>
    <slot name="text"></slot>
    <slot id="view"></slot>
  </div>
</dialog>
`,F0=e=>{let t=document.body;const s=document.body.firstElementChild;s&&s.tagName==="S-PAGE"&&(t=s);const o=new ra,n=document.createElement("div");return n.slot="text",typeof e=="function"||e instanceof HTMLElement?e instanceof HTMLElement?o.appendChild(e):e(o):typeof e=="string"?(n.textContent=e,o.appendChild(n)):(e.root&&(t=e.root),e.disabledGesture&&(o.disabledGesture=e.disabledGesture),typeof e.view=="string"&&(n.textContent=e.view,o.appendChild(n)),e.view instanceof HTMLElement&&o.appendChild(e.view),typeof e.view=="function"&&e.view(o)),o.addEventListener("closed",()=>t.removeChild(o)),o.showed=!0,t.appendChild(o),o};class ra extends X({style:C0,template:A0,props:y0,events:E0,methods:{builder:F0},setup(t){const s=t.querySelector("dialog"),o=t.querySelector(".container"),n=t.querySelector(".scrim"),r=t.querySelector(".indicator"),i=getComputedStyle(this);let a=null;const c=()=>{const h=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",v=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:h,duration:ot(v)}};t.querySelector("#view").onslotchange=h=>{a=h.target.assignedElements()[0]??null},t.querySelector("slot[name=trigger]").onclick=()=>{this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}}))||(this.showed=!0)};const d=h=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:h}}))||(this.showed=!1)};n.onclick=()=>d("SCRIM");let l=null;o.addEventListener("touchmove",h=>{const v=h.target;if(this.disabledGesture)return;const C=h.touches[0];if(!l)return l={y:C.pageY,x:C.pageX,disabled:!1,top:0,h:o.offsetHeight,now:Date.now()};if(l.disabled)return;const B=C.pageY-l.y,x=C.pageX-l.x;if(l.top=Math.min(l.h,Math.max(0,B)),v!==r&&a&&a.scrollTop>0||Math.abs(B)<Math.abs(x))return l.disabled=!0;o.style.transform=`translateY(${l.top}px)`},{passive:!1}),o.ontouchend=()=>{if(!l||l.disabled)return l=null;const h=Date.now()-l.now>300?l.h/3:20;if(l.top>h){if(!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:"GESTURE"}})))return;this.showed=!1}else o.animate({transform:[o.style.transform,"translateY(0)"]},c()),o.style.removeProperty("transform");l=null};const u=()=>{if(!this.isConnected||s.open)return;s.showModal(),s.classList.add("show");const h=c();n.animate({opacity:[0,1]},h),o.animate({transform:["translateY(100%)","translateY(0)"],opacity:[0,1]},h).finished.then(()=>this.dispatchEvent(new Event("showed")))},p=()=>{if(!this.isConnected||!s.open)return;s.classList.remove("show");const h=c(),v=o.style.transform;n.animate({opacity:[1,0]},h),o.animate({transform:[v===""?"translateY(0)":v,"translateY(100%)"],opacity:[1,0]},h).finished.then(()=>{s.close(),v&&o.style.removeProperty("transform"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!s.open&&u(),showed:h=>h?u():p()}}}){}ra.define(b0);const je={mobileS:matchMedia("(max-width: 320px)"),mobileM:matchMedia("(max-width: 375px)"),mobileL:matchMedia("(max-width: 425px)"),tablet:matchMedia("(max-width: 768px)"),laptop:matchMedia("(max-width: 1024px)"),laptopL:matchMedia("(max-width: 1440px)"),pointerCoarse:matchMedia("(pointer: coarse)"),pointerFine:matchMedia("(pointer: fine)")},D0="s-ripple",B0=le({centered:!1,attached:!1}),w0=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}
:host([attached=true]),
.container,
.container::before,
.ripple{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
.container{
  overflow: hidden;
}
.container::before{
  content: '';
  opacity: 0;
  background: var(--ripple-color, currentColor);
  transition: opacity var(--s-motion-duration-short4, 100ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.container.hover::before{
  opacity: var(--ripple-hover-opacity, .12);
}
.ripple{
  opacity: 0;
  border-radius: 50%;
  background: currentColor;
  filter: blur(12px) opacity(var(--ripple-opacity, .18));
}
`,_0=`
<slot></slot>
<div class="container" part="container">
  <div class="ripple"></div>
</div>
`;class ds extends X({style:w0,template:_0,props:B0,setup(t){const s=t.querySelector(".container"),o=t.querySelector(".ripple"),n=getComputedStyle(this),r=()=>{const h=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",v=n.getPropertyValue("--s-motion-duration-long4")||"600ms",C=n.getPropertyValue("--s-motion-duration-short4")||"200ms";return{easing:h,duration:ot(v),shortDuration:ot(C)}},i=()=>je.pointerFine.matches&&s.classList.add("hover"),a=()=>je.pointerFine.matches&&s.classList.remove("hover"),c={parentNode:null,pressed:!1},d=h=>{const{offsetWidth:v,offsetHeight:C}=this;let B=Math.sqrt(v**2+C**2);const x={x:"50%",y:"50%"};if(!this.centered){const{left:q,top:g}=this.getBoundingClientRect(),y=h.clientX-q,F=h.clientY-g,D=C/2,K=v/2,J=(Math.abs(D-F)+D)*2,O=(Math.abs(K-y)+K)*2;B=Math.sqrt(J**2+O**2),x.x=`${y}px`,x.y=`${F}px`}let f=o,A=()=>{};c.pressed?(f=o.cloneNode(),s.appendChild(f),A=()=>f.remove()):(c.pressed=!0,A=()=>c.pressed=!1);const w=c.parentNode??this,P=r();w.setAttribute("pressed","");const R=f.animate({opacity:[1,1],width:[`${B}px`,`${B}px`],height:[`${B}px`,`${B}px`],transform:["translate(-50%, -50%) scale(0)","translate(-50%, -50%) scale(1)"],left:[x.x,x.x],top:[x.y,x.y]},{...P,fill:"forwards"});return()=>{w.removeAttribute("pressed");const q=Number(R.currentTime),g=P.duration-P.shortDuration,y=q>g?P.shortDuration:P.duration-q;f.animate({opacity:[1,0]},{duration:y,easing:P.easing,fill:"forwards"}).finished.then(A)}},l=async h=>{if(h.button!==0)return;const v={};if(h.pointerType==="mouse"){document.addEventListener("pointerup",d(h),{once:!0});return}let C;v.timer=setTimeout(()=>{C=d(h),document.removeEventListener("touchmove",B),v.upper&&C()},50),document.addEventListener("touchend",()=>{if(!C)return v.upper=!0;C()},{once:!0});const B=()=>clearTimeout(v.timer);document.addEventListener("touchmove",B,{once:!0})},u=h=>{h.addEventListener("mouseenter",i),h.addEventListener("mouseleave",a),h.addEventListener("wheel",a,{passive:!0}),h.addEventListener("pointerdown",l)},p=()=>{c.parentNode&&(c.parentNode.removeEventListener("mouseenter",i),c.parentNode.removeEventListener("mouseleave",a),c.parentNode.removeEventListener("wheel",a),c.parentNode.removeEventListener("pointerdown",l),c.parentNode=null)};return u(this),{onMounted:()=>{this.attached&&this.parentNode&&(c.parentNode=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode,u(c.parentNode))},onUnmounted:()=>this.attached&&p(),attached:h=>{if(!this.isConnected)return;if(!h)return p();const v=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;u(v)}}}}){}ds.define(D0);const $0="s-button",k0=le({disabled:!1,type:["filled","elevated","filled-tonal","outlined","text"]}),S0=`
:host{
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  max-width: -moz-available;
  max-width: -webkit-fill-available;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  overflow: hidden;
}
:host([disabled=true]){
  pointer-events: none !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([type=elevated]){
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-primary, #006782);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][disabled=true]){
  box-shadow: none !important;
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D);
  background: none;
  color: var(--s-color-primary, #006782);
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=text]){
  background: none;
  color: var(--s-color-primary, #006782);
  padding: 0 16px;
}
:host([type=text][disabled=true]){
  background: none !important;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon, s-circular-progress)){
  fill: currentColor;
  color: currentColor;
  width: 20px;
  height: 20px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 4px;
  margin-left: -8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -8px;
  margin-left: 4px;
}
::slotted(s-circular-progress[slot=start]){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(s-circular-progress[slot=end]){
  margin-left: 8px;
  margin-right: -8px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -4px;
  margin-right: 4px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 4px;
  margin-right: -4px;
}
:host(:not([type])[pressed]){
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][pressed]){
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
@media (pointer: fine){
  :host(:not([type]):hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([type=elevated]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,T0=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class M0 extends X({style:S0,template:T0,props:k0}){}M0.define($0);const L0="s-card",I0=le({type:["elevated","filled","outlined"],clickable:!1}),q0=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 12px;
  position: relative;
  font-size: .875rem;
  box-sizing: border-box;
  max-width: 280px;
  overflow: hidden;
  color: var(--s-color-on-surface, #191C1E);
  background: var(--s-color-surface-container-low, #F2F4F5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=filled]){
  box-shadow: none;
  background: var(--s-color-surface-container-highest, #E1E3E4);
}
:host([type=outlined]){
  box-shadow: none;
  background: var(--s-color-surface, #F8F9FB);
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([clickable=true]){
  cursor: pointer;
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([clickable=true]) .ripple{
  display: block;
}
.action{
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 16px;
}
.ripple{
  display: none;
  border-radius: 0;
}
::slotted([slot=image]){
  display: block;
  max-height: 160px;
  min-height: 96px;
  width: 100%;
  object-fit: cover;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=headline]){
  font-size: 1.375rem;
  line-height: 22px;
  margin: 12px 16px;
}
::slotted([slot=subhead]){
  font-size: 1rem;
  margin: -8px 16px 12px 16px;
}
::slotted([slot=text]){
  line-height: 22px;
  margin: 12px 16px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted(s-button[slot=action]){
  margin-bottom: 16px;
}
::slotted([slot=headline]+[slot=subhead]){
  background: red;
}
@media (pointer: fine){
  :host([clickable=true][type=filled]:hover),
  :host([clickable=true][type=outlined]:hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([clickable=true]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
`,R0=`
<slot name="start"></slot>
<slot name="image"></slot>
<slot name="headline"></slot>
<slot name="subhead"></slot>
<slot name="text"></slot>
<slot></slot>
<div class="action" part="action">
  <slot name="action"></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class z0 extends X({style:q0,template:R0,props:I0,setup(t){const s=t.querySelector("slot[name=action]");s.onpointerdown=o=>o.stopPropagation()}}){}z0.define(L0);class js{list=[];select;selectValue;flag=!1;constructor(t){const{context:s}=t;s.addEventListener(`${s.tagName.toLocaleLowerCase()}:select`,o=>{if(o.stopPropagation(),!(o.target instanceof t.class))return;let n;this.flag=!0,o.target.selected=!0,this.list.forEach(r=>{r!==o.target&&(r.selected&&(n=r),r.selected=!1)}),this.select=o.target,this.flag=!1,s.dispatchEvent(new Event("change")),this.onUpdate?.(n),this.onSelect?.()}),s.addEventListener(`${s.tagName.toLocaleLowerCase()}:update`,o=>{if(o.stopPropagation(),this.flag||this.list.length===0||!(o.target instanceof t.class))return;this.flag=!0;let n;o.target.selected?(this.select=o.target,this.list.forEach(r=>{r!==o.target&&(r.selected&&(n=r),r.selected=!1)})):delete this.select,this.flag=!1,this.onUpdate?.(n)}),t.slot.addEventListener("slotchange",()=>{this.flag=!0,delete this.select,this.list=t.slot.assignedElements().filter(o=>{if(o instanceof t.class){if(this.selectValue!==void 0)o.value===this.selectValue?(this.select=o,o.selected=!0):o.selected=!1;else{if(!this.select&&o.selected)return this.select=o,!0;this.select&&(o.selected=!1)}return!0}}),this.flag=!1,this.onSlotChange?.(),this.onUpdate?.()})}get value(){return this.list[this.list.indexOf(this.select)]?.value??""}set value(t){this.selectValue=t,this.list.length!==0&&(this.flag=!0,this.list.forEach(s=>{if(s.value===t){s.selected=!0,this.select=s;return}s.selected=!1}),this.onUpdate?.(),this.flag=!1)}get selectedIndex(){return this.list.indexOf(this.select)}}const fo="s-carousel",P0=le({$value:"",$autoplay:!1,$duration:4e3}),O0=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 2;
  -webkit-aspect-ratio: 2;
}
.container{
  display: flex;
  justify-content: flex-start;
  height: 100%;
  min-width: 100%;
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.track{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: 12px 0;
}
.track .indicator{
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: white;
  opacity: .3;
  flex-shrink: 0;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.track .indicator.checked{
  opacity: 1;
}
`,N0=`
<div class="container" part="container">
  <slot></slot>
</div>
<div class="track"></div>
`;class ia extends X({style:O0,template:N0,props:P0,setup(t){const s=t.querySelector(".container"),o=t.querySelector(".track"),n=t.querySelector("slot"),r=new js({context:this,class:aa,slot:n});let i=-1;r.onUpdate=()=>{o.childNodes.forEach(d=>d.classList.remove("checked")),s.style.transform=`translateX(${-r.selectedIndex*100}%)`,r.selectedIndex!==-1&&(o.childNodes[r.selectedIndex].classList.add("checked"),a())};const a=()=>{!this.autoplay||r.list.length===0||!this.isConnected||(c(),i=setTimeout(()=>{let d=r.selectedIndex+1;d>=r.list.length&&(d=0),r.list[d].selected=!0,this.dispatchEvent(new Event("change"))},this.duration))},c=()=>clearInterval(i);return r.onSlotChange=()=>{o.innerHTML="";const d=document.createDocumentFragment();r.list.forEach(l=>{const u=document.createElement("div");u.className="indicator",u.addEventListener("click",()=>l.dispatchEvent(new Event(`${fo}:select`,{bubbles:!0}))),d.appendChild(u)}),o.appendChild(d)},s.onpointerdown=d=>{if(r.list.length<=1)return;c();const l=d.pageX,u=d.pageY,p=s.offsetWidth,h=r.list[r.selectedIndex-1],v=r.list[r.selectedIndex+1],C={now:0,left:0,next:void 0},B=A=>{const w=A instanceof TouchEvent?A.touches[0]:A,P=w.pageX-l,R=w.pageY-u;if(A instanceof TouchEvent&&Math.abs(P)<Math.abs(R)&&!C.next)return x();if(C.left=P,C.now===0&&(C.now=Date.now()),h&&(C.left=Math.min(C.left,p)),v&&(C.left=Math.max(C.left,p*-1)),(!h&&C.left>0||!v&&C.left<0)&&(C.left=C.left*.2),C.left<0&&v||C.left>0&&h){const z=Math.abs(C.left)/p*.05;r.select.style.transition="none",r.select.style.transform=`scale(${.05-z+.95})`,C.next=C.left<0?v:h,C.next.style.transition="none",C.next.style.transform=`scale(${z+.95})`}s.style.transition="none",s.style.pointerEvents="none",s.style.transform=`translateX(calc(${-r.selectedIndex*100}% + ${C.left}px))`,A.cancelable&&A.preventDefault()},x=()=>{document.removeEventListener(f.up,x),document.removeEventListener(f.move,B),s.style.removeProperty("pointer-events"),s.style.removeProperty("transition"),r.select.style.removeProperty("transition"),r.select.style.removeProperty("transform"),C.next?.style.removeProperty("transition"),C.next?.style.removeProperty("transform");const A=r.selectedIndex;if(!(A===0&&C.left>0||A===r.list.length-1&&C.left<0)){const P=Date.now()-C.now>300?p/2:20;if(Math.abs(C.left)>P){C.next?.dispatchEvent(new Event(`${fo}:select`,{bubbles:!0}));return}}s.style.transform=`translateX(${-r.selectedIndex*100}%)`,a()},f={move:je.pointerCoarse.matches?"touchmove":"pointermove",up:je.pointerCoarse.matches?"touchend":"pointerup"};document.addEventListener(f.move,B,{passive:!1}),document.addEventListener(f.up,x)},{expose:{get options(){return r.list},get selectedIndex(){return r.selectedIndex},togglePrevious:()=>{const d=r.list[r.selectedIndex-1];d&&(d.selected=!0)},toggleNext:()=>{const d=r.list[r.selectedIndex+1];d&&(d.selected=!0)}},onMounted:a,onUnmounted:c,value:{get:()=>r.value,set:d=>{r.value=d,a()}},autoplay:a}}}){}const H0="s-carousel-item",V0=le({selected:!1,$value:""}),j0=`
:host{
  user-drag: none;
  -webkit-user-drag: none;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: var(--s-color-surface-container-high, #E7E8EA);
  transform: scale(.95);
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  background-repeat: round;
}
:host([selected=true]){
  transform: scale(1);
}
`,U0="<slot></slot>";class aa extends X({style:j0,template:U0,props:V0,setup(){return{selected:()=>{this.parentNode instanceof ia&&this.dispatchEvent(new Event(`${fo}:update`,{bubbles:!0}))}}}}){}ia.define(fo);aa.define(H0);const W0="s-checkbox",K0=le({disabled:!1,checked:!1,indeterminate:!1}),Z0=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked,
.indeterminate{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.checked,
.indeterminate{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([indeterminate=true]) .unchecked{
  opacity: 0;
}
:host([checked=true]:not([indeterminate=true])) .checked,
:host([indeterminate=true]) .indeterminate{
  opacity: 1;
  transform: scale(1);
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked], [slot=indeterminate])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,G0=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <svg viewBox="0 -960 960 960">
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
  <slot class="indeterminate" name="indeterminate">
    <svg viewBox="0 -960 960 960">
      <path d="M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class Y0 extends X({style:Z0,template:G0,props:K0,setup(){this.addEventListener("click",()=>{this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}Y0.define(W0);const X0="s-chip",J0=le({type:["filled","outlined"],$value:"",checked:!1,disabled:!1,clickable:!1}),Q0=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  padding: 0 16px;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  font-size: .8125rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: var(--s-color-surface-container-high, #E7E8EA);
  color: var(--s-color-on-surface, #191C1E);
  transition-property: color, background-color, box-shadow;
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([disabled=true]){
  pointer-events: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-surface-container-high, #E7E8EA) 38%, transparent) !important;
}
:host([checked=true]){
  border: none;
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-primary, #006782);
}
:host([type=outlined]){
  background: none;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([type=outlined][checked=true]){
  border-color: var(--s-color-primary, #006782);
}
::slotted(:is(s-icon, svg)){
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
::slotted(s-avatar){
  width: 24px;
  height: 24px;
  font-size: .75rem;
}
::slotted(s-avatar[slot=start]){
  margin-left: -12px;
  margin-right: 8px;
}
::slotted(s-icon-button[slot=action]){
  margin: 0 -12px 0 8px;
  width: 24px;
  height: 24px;
  padding: 3px;
  color: currentColor;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
:host(:not([clickable=true])) .ripple{
  display: none;
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,ed=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<slot name="action"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class td extends X({style:Q0,template:ed,props:J0,setup(t){const s=t.querySelector("slot[name=action]");s.onclick=o=>o.stopPropagation(),s.onpointerdown=o=>o.stopPropagation(),this.addEventListener("click",()=>{this.clickable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))})}}){}td.define(X0);const sd="s-circular-progress",od=le({indeterminate:!1,animated:!1,$max:100,$value:0}),nd=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 48px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-primary, #006782);
}
:host([animated=true]) .known .block{
  transition-duration: var(--s-motion-duration-medium4, 400ms);
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-name: stroke-dashoffset, transform;
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: block;
}
.container{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: relative;
}
svg{
  height: inherit;
  width: inherit;
  stroke: currentColor;
}
circle{
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: var(--dasharray);
}
.track{
  stroke: var(--s-color-secondary-container, #CFE6F1);
}
.unknown{
  animation: rotate 1568ms linear infinite;
}
@keyframes stroke{
  0% { stroke-dashoffset: var(--dasharray) }
  50% { stroke-dashoffset: calc(var(--dasharray) / 4) }
  100% { stroke-dashoffset: var(--dasharray) }
}
@keyframes stroke-rotate{
  0% { transform: rotate(0deg) }
  12.5% { transform: rotate(0deg) }
  25% {transform: rotate(270deg)}
  37.5% {transform: rotate(270deg)}
  50% {transform: rotate(540deg)}
  62.5% {transform: rotate(540deg)}
  75% {transform: rotate(810deg)}
  87.5% {transform: rotate(810deg)}
  100% { transform: rotate(1080deg) }
  100% { transform: rotate(1080deg) }
}
@keyframes rotate{
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
`,Ne=48,Ht=4,Vt=(Ne-Ht)*Math.PI,rd=`
<div class="container known">
  <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${Vt}px;">
    <circle class="track block" cx="${Ne/2}" cy="${Ne/2}" r="${(Ne-Ht)/2}" style="stroke-width: ${Ht}px" />
    <circle class="indicator block" cx="${Ne/2}" cy="${Ne/2}" r="${(Ne-Ht)/2}" style="stroke-dashoffset: ${Vt}px;stroke-width: ${Ht}px" />
  </svg>
</div>
<div class="container unknown">
  <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${Vt}px;">
    <circle transform="rotate(-90, ${Ne/2}, ${Ne/2})" cx="${Ne/2}" cy="${Ne/2}" r=" ${(Ne-Ht)/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${Ht}px"></circle>
  </svg>
</div>
`;class id extends X({style:nd,template:rd,props:od,setup(t){const s=t.querySelector(".known .track"),o=t.querySelector(".known .indicator"),n=()=>{const r=Math.min(this.value,this.max)/this.max*100,i=Vt-Vt*(r/100),a=r/100*360;s.style.strokeDashoffset=`${r===0?0:Math.min(Vt+16-i,Vt)}px`,s.setAttribute("transform",`rotate(${a+20}, ${Ne/2}, ${Ne/2})`),o.style.strokeDashoffset=`${i}px`};return{max:n,value:n}}}){}id.define(sd);const ho=(e,t="yyyy-MM-dd")=>{typeof e=="string"&&(e=new Date(e));const s=e.getFullYear(),o=e.getMonth()+1,n=e.getDate();return t.replace("yyyy",s.toString()).replace("MM",o.toString().padStart(2,"0")).replace("dd",n.toString().padStart(2,"0"))};class ad{list;locale=navigator.language;updates=new Map;constructor(t){this.list=t}getItem(t){if(t=t||this.locale,t in this.list)return this.list[t];const[s]=t.split("-");return s in this.list?this.list[s]:this.list.zh}addItem(t,s){if(this.list[t])throw new Error(`Locale ${t} already exists`);this.list[t]=s}setLocale(t){this.locale=t??navigator.language,this.updates.forEach(s=>s())}}const Et=new ad({});Et.list={zh:{display:e=>`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日 星期${Et.list.zh.displayWeeks[e.getDay()]}`,displayMonth:e=>`${e.getFullYear()}年`,displayWeeks:["日","一","二","三","四","五","六"]},en:{display:e=>`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]}, Jan ${e.getDate()}`,displayMonth:e=>`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getFullYear()}`,displayWeeks:["S","M","T","W","T","F","S"]}};const ld="s-date",cd=le({$value:"",$locale:"",$max:"2099-12-31",$min:"1900-01-01"}),dd=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 8px;
  font-size: .875rem;
  max-width: 360px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
}
.button,
.icon-button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  font-size: .8125rem;
  color: var(--s-color-on-surface-variant, #40484C);
}
.icon-button{
  width: 36px;
  border-radius: 50%;
}
.button{
  border-radius: 18px;
  height: 36px;
  padding: 0 12px;
}
svg{
  width: 24px;
  fill: currentColor;
  box-sizing: border-box;
}
.header{
  padding: 24px 24px 16px 24px;
  font-size: 1.25rem;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container, #ECEEF0);
}
.container{
  display: flex;
  flex-direction: column;
  position: relative;
}
.action{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.action>.year>svg{
  margin: 0 -8px 0 2px;
  padding: 1px;
}
.action>.toggle{
  display: flex;
}
.years{
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 4px;
  column-gap: 6px;
  padding: 0 16px 16px 16px;
  margin-top: -12px;
  max-height: 280px;
  counter-reset: year-counter 1899;
}
.years>.item{
  counter-increment: year-counter;
  flex-grow: 1;
}
.years>.item::before{
  content: counter(year-counter);
}
.weeks{
  display: flex;
  padding: 0 16px;
  font-size: .8125rem;
  color: var(--s-color-outline, #70787D);
}
.weeks>.item,
.days>.item{
  width: calc(100% / 7);
  display: inline-flex;
  justify-content: center;
}
.days{
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}
.days>.overflow~.item{
  display: none;
}
.days>.item>s-ripple{
  margin: 2px;
}
.days>.checked>s-ripple,
.years>.checked{
  pointer-events: none;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
.container:not(.show-years) .years,
.show-years :is(.weeks, .days, .action>.toggle){
  display: none;
}
`,us={years:[],weeks:[],days:[]};for(let e=0;e<200;e++)e<7&&us.weeks.push('<div class="item"></div>'),e<31&&us.days.push(`<div class="item"><s-ripple class="icon-button">${e+1}</s-ripple></div>`),us.years.push('<s-ripple class="button item"></s-ripple>');const ud=`
<div class="header" part="header">
  <slot name="headline"></slot>
  <span></span>
</div>
<div class="container" part="container">
  <div class="action">
    <s-ripple class="button year" slot="trigger">
      <span></span>
      <svg viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
    </s-ripple>
    <div class="toggle">
      <s-ripple class="icon-button prev" part="prev-button">
        <svg viewBox="0 -960 960 960">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="icon-button next" part="next-button">
        <svg viewBox="0 -960 960 960">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
        </svg>
      </s-ripple>
    </div>
  </div>
  <s-scroll-view class="years">${us.years.join("")}</s-scroll-view>
  <div class="weeks">${us.weeks.join("")}</div>
  <div class="days">${us.days.join("")}</div>
</div>
`;class pd{yearSelect;daySelect;dayOverflow;date;min;max;constructor(t,s,o){this.date=typeof t=="string"?new Date(t):t,this.min=new Date(s),this.max=new Date(o)}}const Ar=(e,t)=>{const s=new Date(e,t+1,1);return s.setDate(s.getDate()-1),s.getDate()},fd=(e,t)=>{Et.addItem(e,t)},hd=e=>{Et.setLocale(e)};class xd extends X({style:dd,template:ud,props:cd,methods:{addLocale:fd,setLocale:hd},setup(t){const s=t.querySelector(".container"),o=t.querySelector(".header>span"),n=t.querySelector(".action>.year"),r=t.querySelector(".action>.toggle>.prev"),i=t.querySelector(".action>.toggle>.next"),a=t.querySelector(".years"),c=t.querySelector(".weeks"),d=t.querySelector(".days"),l=new pd(this.value||new Date,this.min,this.max),u=()=>{const x=Et.getItem(this.locale).display;o.textContent=x(l.date);const f=Et.getItem(this.locale).displayMonth;n.children[0].textContent=f(l.date)},p=()=>{const x=Et.getItem(this.locale).displayWeeks;c.childNodes.forEach((f,A)=>f.textContent=x[A])},h=()=>{const x=new Date(l.date.getFullYear(),l.date.getMonth(),1).getDay();d.children[0].setAttribute("style",`margin-left: calc((100% / 7) * ${x})`);const f=new Date(l.date.getFullYear(),l.date.getMonth()+1,0).getDate();l.dayOverflow?.classList.remove("overflow"),l.dayOverflow=d.children[f-1],l.dayOverflow.classList.add("overflow"),l.yearSelect?.classList.remove("checked"),l.yearSelect=a.children[l.date.getFullYear()-l.min.getFullYear()],l.yearSelect.classList.add("checked"),l.daySelect?.classList.remove("checked"),l.daySelect=d.children[l.date.getDate()-1],l.daySelect.classList.add("checked"),s.style.removeProperty("height")},v=()=>{const x=l.max.getFullYear()-l.min.getFullYear();a.innerHTML="",a.style.counterReset=`year-counter ${l.min.getFullYear()-1}`;const f=document.createDocumentFragment();for(let A=0;A<=x;A++){const w=new ds;w.classList.add("button","item"),f.appendChild(w)}a.appendChild(f),h()},C=(x,f,A)=>{this.value=ho(new Date(x,f,A)),this.dispatchEvent(new Event("change"))};n.onclick=()=>{const x=s.offsetHeight;if(s.classList.toggle("show-years"),s.classList.contains("show-years")){s.style.height=`${x}px`,l.yearSelect&&a.scrollTo({top:l.yearSelect.offsetTop-a.offsetHeight/2+l.yearSelect.offsetHeight/2});return}},r.onclick=()=>{const x=Ar(l.date.getFullYear(),l.date.getMonth()-1),f=Math.min(l.date.getDate(),x);C(l.date.getFullYear(),l.date.getMonth()-1,f)},i.onclick=()=>{const x=Ar(l.date.getFullYear(),l.date.getMonth()+1),f=Math.min(l.date.getDate(),x);C(l.date.getFullYear(),l.date.getMonth()+1,f)},a.onclick=x=>{if(!(x.target instanceof ds))return;s.classList.remove("show-years");const f=Array.from(a.children).indexOf(x.target)+l.min.getFullYear();C(f,l.date.getMonth(),l.date.getDate())},d.onclick=x=>{if(!(x.target instanceof ds))return;const f=Array.from(d.children).indexOf(x.target.parentElement)+1;C(l.date.getFullYear(),l.date.getMonth(),f)};const B=()=>{u(),p()};return h(),B(),{onMounted:()=>Et.updates.set(this,B),onUnmounted:()=>Et.updates.delete(this),min:x=>{const f=new Date(x);if(isNaN(f.getTime())||f.getTime()>l.date.getTime())throw Error("invalid min date");l.min=f,v()},max:x=>{const f=new Date(x);if(isNaN(f.getTime())||f.getTime()<l.date.getTime())throw Error("invalid max date");l.max=f,v()},value:{get:()=>ho(l.date),set:x=>{const f=new Date(x);if(isNaN(f.getTime())||f.getTime()<l.min.getTime()||f.getTime()>l.max.getTime())throw Error("invalid date");l.date=f,u(),h()}},locale:B}}}){}xd.define(ld);const md="s-date-picker",dn=le({$value:"",$min:"",$max:"",$label:"",$positiveText:"确定",$negativeText:"取消",$format:"yyyy-MM-dd",$locale:""}),gd=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --date-picker-border-radius: 4px;
  --date-picker-border-color: var(--s-color-outline, #70787D);
  --date-picker-border-width: 1px;
  --date-picker-padding: 16px;
  --date-picker-height: 48px;
}
s-dialog{
  display: block;
}
.field{
  --field-border-radius: var(--date-picker-border-radius);
  --field-border-color: var(--date-picker-border-color);
  --field-border-width: var(--date-picker-border-width);
  --field-padding: var(--date-picker-padding);
  height: var(--date-picker-height);
  position: relative;
  cursor: pointer;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--date-picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--date-picker-padding) * -1) + 12px));
  margin-right: max(0px, calc(var(--date-picker-padding) - 4px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.ripple{
  border-radius: var(--date-picker-border-radius);
}
.date{
  border: none;
  width: 360px;
  border-radius: 0;
}
.positive,
.negative{
  border-radius: 20px;
}
`,vd=`
<s-dialog part="dialog">
  <slot name="trigger" slot="trigger">
    <s-field class="field" fixed="false" part="field">
      <div class="label" part="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-date class="date" part="date"></s-date>
  <s-ripple class="negative" slot="action" part="negative">${dn.negativeText}</s-ripple>
  <s-ripple class="positive" slot="action" part="positive">${dn.positiveText}</s-ripple>
</s-dialog>
`;class bd extends X({style:gd,template:vd,props:dn,setup(t){const s=t.querySelector("s-dialog"),o=t.querySelector("s-date"),n=t.querySelector(".negative"),r=t.querySelector(".positive"),i=t.querySelector("s-field"),a=t.querySelector(".label"),c=t.querySelector(".view"),d={date:""};return s.addEventListener("show",()=>{i.fixed=!0,i.focused=!0,d.date||(c.textContent=this.label,c.style.opacity="0")}),s.onclose=()=>{i.focused=!1,d.date||(i.fixed=!1)},r.onclick=()=>{this.value=o.value,c.style.removeProperty("opacity"),this.dispatchEvent(new Event("change"))},{value:{get:()=>d.date,set:l=>{if(d.date=l,l===""){o.value=ho(new Date),i.fixed=!1,c.textContent="";return}i.fixed=!0,c.textContent=ho(l,this.format),o.value=l}},locale:{get:()=>o.locale,set:l=>o.locale=l},min:{get:()=>o.min,set:l=>o.min=l},max:{get:()=>o.max,set:l=>o.max=l},label:l=>a.textContent=l,positiveText:l=>r.textContent=l,negativeText:l=>n.textContent=l}}}){}bd.define(md);const yd="s-scroll-view",Ed=`
:host{
  display: block;
  overflow: auto;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    background: transparent;
    width: 6px;
    height: 6px;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,Cd="<slot></slot>";class Ad extends X({style:Ed,template:Cd}){}Ad.define(yd);const Fd="s-dialog",Dd=le({showed:!1,size:["standard","full"]}),Bd=So({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),wd=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  color: inherit;
}
dialog::backdrop{
  background: none;
}
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container,
::slotted([slot=custom]){
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  pointer-events: auto;
  position: relative;
  border-radius: 28px;
  display: flex;
  outline: none;
  flex-direction: column;
  overflow: hidden;
  transition-timing-function: ease-out;
  box-shadow: var(--s-elevation-level5, 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-high, #E7E8EA);
}
:host([size=full]) .container{
  width: 100%;
  height: 100%;
  border-radius: 0;
  max-width: none;
  max-height: none;
}
:host([size=full]) ::slotted(:is([slot=text],:not([slot]))){
  max-width: 100%;
  width: auto;
}
::slotted([slot=headline]){
  padding: 24px 24px 0 24px;
  font-size: 1.5rem;
  line-height: 22px;
  font-weight: 600;
  color: var(--s-color-on-surface, #191C1E);
  flex-shrink: 0;
}
.text{
  user-select: text;
  -webkit-user-select: text;
  flex-grow: 1;
}
::slotted([slot=text]){
  margin: 16px 24px;
  max-width: calc(100% - 48px);
  line-height: 22px;
}
::slotted(:is(:not([slot]), [slot=text])){
  width: 375px;
}
::slotted(:not([slot])){
  max-width: 100%;
}
.action{
  display: flex;
  justify-content: flex-end;
  padding: 0 14px;
  flex-shrink: 0;
}
::slotted([slot=action]){
  min-width: 72px;
  margin: 16px 2px;
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: var(--s-color-primary, #006782);
  box-sizing: border-box;
  height: 40px;
  font-size: .875rem;
  cursor: pointer;
}
`,_d=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <slot name="custom" class="wrapper" part="wrapper">
    <div class="container" part="container">
      <slot name="headline"></slot>
      <s-scroll-view class="text" part="view">
        <slot></slot>
        <slot name="text"></slot>
      </s-scroll-view>
      <div class="action" part="action">
        <slot name="action"></slot>
      </div>
    </div>
  </slot>
</dialog>
`,$d=e=>{let t=document.body;const s=new la,o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof e=="string"){const n=document.createElement("div");n.slot="text",n.textContent=e,s.appendChild(n)}else{if(e.root&&(t=e.root),e.headline){const r=document.createElement("div");r.slot="headline",r.textContent=e.headline,s.appendChild(r)}if(e.text){const r=document.createElement("div");r.slot="text",r.textContent=e.text,s.appendChild(r)}e.view&&(typeof e.view=="function"?e.view(s):s.appendChild(e.view));const n=e.actions??[];for(const r of Array.isArray(n)?n:[n]){const i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=r.text,r.click&&(i.onclick=r.click),s.appendChild(i)}}return s.showed=!0,s.addEventListener("closed",()=>t.removeChild(s)),t.appendChild(s),s};class la extends X({style:wd,template:_d,props:Dd,events:Bd,methods:{builder:$d},setup(t){const s=t.querySelector("dialog"),o=t.querySelector(".scrim"),n=t.querySelector(".wrapper"),r=getComputedStyle(this),i=()=>{const l=r.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=r.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:ot(u)}};t.querySelector("slot[name=trigger]").onclick=()=>{if(this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}})))return console.log("拒绝");this.showed=!0};const a=l=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:l}}))||(this.showed=!1)};t.querySelector(".scrim").onclick=()=>a("SCRIM"),t.querySelector("slot[name=action]").onclick=()=>a("ACTION");const c=()=>{if(!this.isConnected||s.open)return;const l=i();s.showModal(),s.classList.add("show"),o.animate({opacity:[0,1]},l),n.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},l).addEventListener("finish",()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!s.open)return;const l=i();o.animate({opacity:[1,0]},l),n.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},l).addEventListener("finish",()=>{s.close(),s.classList.remove("show"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!s.open&&c(),showed:l=>l?c():d()}}}){}la.define(Fd);const kd="s-divider",Sd=`
:host{
  display: flex;
  align-items: center;
  margin: 0 16px;
  gap: 8px;
  font-size: .75rem;
  color: var(--s-color-outline, #70787D);
 }
:host::before,
:host::after{
  content: '';
  flex-grow: 1;
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host(:empty){
  gap: 0;
}
`,Td="<slot></slot>";class Md extends X({style:Sd,template:Td}){}Md.define(kd);const Ld="s-drawer",Id=`
:host{
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  container-name: s-drawer;
  container-type: inline-size;
}
.start,
.end{
  flex-shrink: 0;
  height: 100%;
  display: none;
  overflow: hidden;
}
.start{
  order: -1;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
  pointer-events: none;
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
.view{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  position: relative;
}
::slotted(:is([slot=start], [slot=end])){
  width: 280px;
  border-width: 1px;
  height: 100%;
  box-sizing: border-box;
  pointer-events: auto;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  border-color: var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=start]){
  border-right-style: solid;
}
::slotted([slot=end]){
  border-left-style: solid;
}
::slotted(s-scroll-view:not([slot])){
  flex-grow: 1;
}
.start.show,
.end.show{
  display: block;
}
.scrim.s-laptop{
  display: block;
  z-index: 3;
}
.scrim.s-laptop.show-laptop{
  opacity: 1;
  pointer-events: auto;
}
.start.s-laptop,
.end.s-laptop{
  position: absolute;
  z-index: 3;
  max-width: 75%;
  display: none;
}
.end.s-laptop{
  left: auto;
  right: 0;
}
.start.s-laptop.show,
.end.s-laptop.show{
  display: none;
}
.start.s-laptop.show-laptop,
.end.s-laptop.show-laptop{
  display: block;
}
.s-laptop ::slotted(:is([slot=start], [slot=end])){
  border-left-style: none;
  border-right-style: none;
  box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
}
@container s-drawer (max-width: 1024px){
  .scrim{
    display: block;
    z-index: 3;
  }
  .scrim.show-laptop{
    opacity: 1;
    pointer-events: auto;
  }
  .start,
  .end{
    position: absolute;
    z-index: 3;
    max-width: 75%;
    display: none;
  }
  .end{
    left: auto;
    right: 0;
  }
  .start.show,
  .end.show{
    display: none;
  }
  .start.show-laptop,
  .end.show-laptop{
    display: block;
  }
  ::slotted(:is([slot=start], [slot=end])){
    border-left-style: none;
    border-right-style: none;
    box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  }
}
`,qd=`
<slot class="view" part="view"></slot>
<div class="scrim" part="scrim show"></div>
<slot name="start" class="start show" part="start"></slot>
<slot name="end" class="end show" part="end"></slot>
`;class Rd extends X({style:Id,template:qd,setup(t){const s=t.querySelector(".scrim"),o={start:t.querySelector(".start"),end:t.querySelector(".end")},n=getComputedStyle(this),r=()=>{const p=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",h=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:p,duration:ot(h)}},i=(p="start")=>o[p],a=p=>p??this.offsetWidth<=1024?"show-laptop":"show",c=(p="start")=>({start:-1,end:1})[p],d=(p,h)=>{const v=i(p),C=a(h);if(v.classList.contains(C))return;const B=c(p),x=r();v.classList.add(C),s.classList.add(C);const f=this.offsetWidth<=1024?{transform:[`translateX(${v.offsetWidth*B}px)`,"translateX(0)"]}:{width:["0",v.offsetWidth+"px"]};this.offsetWidth<=1024&&s.animate({opacity:[0,1]},x),v.animate(f,x)},l=(p,h)=>{const v=i(p),C=a(h);if(!v.classList.contains(C))return;const B=c(p),x=r(),f={...this.offsetWidth<=1024?{transform:["translateX(0)",`translateX(${v.offsetWidth*B}px)`]}:{width:[v.offsetWidth+"px","0px"]}};v.style.display="block",v.animate(f,x).finished.then(()=>v.style.removeProperty("display")),this.offsetWidth<=1024&&s.animate({opacity:[1,0]},x),v.classList.remove(C),s.classList.remove(C)},u=(p,h)=>{const v=i(p),C=a(h);v.classList.contains(C)?l(p,h):d(p,h)};return s.addEventListener("click",()=>{l("start",!0),l("end",!0)}),ko.CSSContainer||new ResizeObserver(()=>{s.classList.toggle("s-laptop",this.offsetWidth<=1024),o.start.classList.toggle("s-laptop",this.offsetWidth<=1024),o.end.classList.toggle("s-laptop",this.offsetWidth<=1024)}).observe(this),{expose:{show:d,close:l,toggle:u}}}}){}Rd.define(Ld);const zd="s-empty",Pd=`
:host{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
  gap: 12px;
  font-size: .75rem;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
}
.shadow{
  fill: var(--s-color-surface-container-high, #E7E8EA);
}
.box{
  fill: var(--s-color-surface-container-highest, #E1E3E4);
}
.border{
  stroke: var(--s-color-outline, #70787D);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 40px;
}
`,Od=`
<slot name="icon">
  <svg width="64" height="41" viewBox="0 0 64 41">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse cx="32" cy="33" rx="32" ry="7" class="shadow"></ellipse>
      <g fill-rule="nonzero" class="border">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
        <path class="box" d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
      </g>
    </g>
  </svg>
</slot>
<slot></slot>`;class Nd extends X({style:Pd,template:Od}){}Nd.define(zd);const Hd="s-fab",Vd=le({hidden:!1,disabled:!1}),jd=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  font-size: .875rem;
  border-radius: 28px;
  font-weight: 500;
  white-space: nowrap;
  text-transform: capitalize;
  padding: 0 24px;
  transition-property: box-shadow, transform;
  transition-duration: var(--s-motion-duration-short4, 200ms);
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-primary-container, #BAEAFF);
  color: var(--s-color-on-primary-container, #004D62);
}
:host([disabled=true]){
  pointer-events: none;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([hidden=true]){
  transform: scale(0);
  pointer-events: none;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon)){
  width: 24px;
  height: 24px;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(svg, s-icon):not([slot])){
  margin: 16px -8px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
:host([pressed]){
  box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
}
@media (pointer: fine){
  :host(:hover){
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
}
`,Ud=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class Wd extends X({style:jd,template:Ud,props:Vd}){}Wd.define(Hd);const Kd="s-icon-button",Zd=le({disabled:!1,type:["standard","filled","filled-tonal","outlined"]}),Gd=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-on-surface-variant, #40484C);
  position: relative;
  box-sizing: border-box;
}
:host([disabled=true]){
  pointer-events: none !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=filled]){
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=filled]) ::slotted([slot=badge]){
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D)
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
::slotted(:not([slot=badge])){
  color: inherit;
}
::slotted(svg){
  width: 24px;
  height: 24px;
  fill: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
  flex-shrink: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,Yd=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
<slot name="badge"></slot>
`;class Xd extends X({style:Gd,template:Yd,props:Zd}){}Xd.define(Kd);const Fs={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},Jd="s-icon",Qd=le({name:Object.keys(Fs),$src:""}),eu=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  fill: currentColor;
  box-sizing: border-box;
  color: var(--s-color-on-surface-variant, #40484C);
}
svg,
img{
  width: 100%;
  height: 100%;
}
::slotted(*){
  width: 100%;
  height: 100%;
}
`,tu="<slot></slot>";class su extends X({style:eu,template:tu,props:Qd,setup(t){const s=t.querySelector("slot"),o=document.createElement("img"),n=(r=Fs.none,i="")=>`<svg viewBox="0 -960 960 960"><path d="${r}" transform="${i}"></path></svg>`;return{name:r=>{const i=Fs[r];if(typeof i=="string")return s.innerHTML=n(i);const a=i.name;typeof Fs[a]=="string"&&(s.innerHTML=n(Fs[a],`rotate(${i.angle} 480 -480)`))},src:async()=>{try{const r=new URL(this.src,location.href);if(r.pathname.endsWith(".svg")){const a=await(await fetch(r.href)).text(),c=document.createElement("template");c.innerHTML=a;const d=c.content.childNodes[0];if(!(d instanceof SVGElement))throw new Error("Invalid SVG");s.innerHTML="",s.appendChild(d),this.dispatchEvent(new Event("load"))}else o.src=r.href,o.onload=()=>{s.innerHTML="",s.appendChild(o),this.dispatchEvent(new Event("load"))},o.onerror=()=>this.dispatchEvent(new ErrorEvent("error"))}catch{this.dispatchEvent(new ErrorEvent("error"))}}}}}){}su.define(Jd);const ou="s-linear-progress",nu=le({indeterminate:!1,animated:!1,$max:100,$value:0}),ru=`
:host{
  display: block;
  height: 4px;
  color: var(--s-color-primary, #006782);
  border-radius: 2px;
  overflow: hidden;
}
:host([animated=true]) .known>.block{
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: flex;
}
.container{
  height: 100%;
  border-radius: inherit;
  position: relative;
}
.block{
  position: absolute;
  height: 100%;
  border-radius: inherit;
  width: 100%;
  left: 0;
  top: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
}
.indicator{
  background: currentColor;
}
.indicator-dot{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  background: currentColor;
  border-radius: inherit;
}
@keyframes unknown{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(150%);
  }
}
.unknown{
  justify-content: flex-end;
  gap: 4px;
  animation: unknown 2s linear infinite;
}
.unknown .block{
  position: static;
  flex-grow: 1;
  width: 100%;
  flex-shrink: 0;
}
.unknown .indicator{
  width: 50%;
}
`,iu=`
<div class="container known" part="container">
  <div class="track block" style="transform: translateX(0%)" part="track"></div>
  <div class="indicator-dot" part="indicator-dot"></div>
  <div class="indicator block" style="transform: translateX(-100%)" part="indicator"></div>
</div>
<div class="container unknown" part="container">
  <div class="track block" part="track"></div>
  <div class="indicator block" part="indicator"></div>
  <div class="track block" part="indicator"></div>
</div>
`;class au extends X({style:ru,template:iu,props:nu,setup(t){const s=t.querySelector(".known>.track"),o=t.querySelector(".known>.indicator"),n=()=>{const r=Math.min(this.value,this.max)/this.max*100;s.style.transform=`translateX(calc(${r}% + ${r===0?0:4}px))`,o.style.transform=`translateX(${r-100}%)`};return{max:n,value:n}}}){}au.define(ou);const lu="s-menu",cu=`
:host{
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  background: var(--s-color-surface-container-low, #F2F4F5);
}
:host(:nth-of-type(n+2)){
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 44px;
  margin: -4px 20px;
  font-size: .75rem;
  color: var(--s-color-on-surface-variant, #40484C);
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
}
`,du=`
<slot name="label"></slot>
<slot></slot>
`;class uu extends X({style:cu,template:du}){}const pu="s-menu-item",ca=le({checked:!1,folded:!0}),fu=`
:host{
  display: flex;
  flex-direction: column;
  margin: 4px 8px 4px 0;
  color: var(--s-color-on-surface, #191C1E);
}
.container{
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 0 24px 24px 0;
  padding: 0 20px;
  flex-shrink: 0;
}
:host([checked=true]) .container{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toggle-icon{
  width: 24px;
  height: 24px;
  display: none;
  margin-right: -8px;
  margin-left: 12px;
  transform: rotate(-90deg);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.show-menu .toggle-icon{
  display: block;
}
:host([folded=false]) .toggle-icon{
  transform: rotate(0deg);
}
.fold{
  flex-shrink: 0;
}
.show-menu+.fold{
  margin: 0 -8px 0 0;
}
.menu{
  display: block;
  padding-top: 8px;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([checked=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 12px;
}
::slotted([slot=end]){
  margin-right: -8px;
  margin-left: 12px;
}
::slotted([slot=menu]){
  background: var(--s-color-surface-container-high, #E7E8EA);
}
`,hu=`
<s-ripple class="container" part="container">
  <slot name="start"></slot>
  <div class="text" part="text">
    <slot></slot>
  </div>
  <slot name="end">
    <svg viewBox="0 -960 960 960" class="toggle-icon">
      <path d="M480-360 280-560h400L480-360Z"></path>
    </svg>
  </slot>
</s-ripple>
<s-fold class="fold" part="fold" folded="${ca.folded}">
  <slot name="menu" class="menu"></slot>
</s-fold>
`;class xu extends X({style:fu,template:hu,props:ca,setup(t){const s=t.querySelector(".container"),o=t.querySelector(".fold"),n=t.querySelector("slot[name=menu]");return o.onclick=r=>r.stopPropagation(),n.onslotchange=()=>s.classList[n.assignedElements().length>0?"add":"remove"]("show-menu"),s.onclick=()=>{s.classList.contains("show-menu")&&(this.folded=!this.folded)},{folded:r=>o.folded=r}}}){}uu.define(lu);xu.define(pu);const un="s-navigation",mu=le({mode:["bottom","rail"],$value:""}),gu=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  position: relative;
  padding-bottom: env(safe-area-inset-bottom);
}
:host([mode=rail]){
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  box-shadow: none;
  height: 100%;
  background: none;
  padding-bottom: 0;
}
::slotted(s-navigation-item){
  height: 64px;
}
:host([mode=rail]) ::slotted(s-navigation-item){
  height: 72px;
}
:host([mode=rail]) ::slotted(s-icon-button[slot=start]){
  width: 56px;
  height: 56px;
  margin: 16px 0 8px 0;
  border-radius: 12px;
}
:host([mode=rail]) ::slotted([slot=end]){
  flex-grow: 1;
}
`,vu=`
<slot name="start"></slot>
<slot id="slot"></slot>
<slot name="end"></slot>
`;class pn extends X({style:gu,template:vu,props:mu,setup(t){const s=t.querySelector("#slot"),o=new js({context:this,class:da,slot:s});return{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:n=>o.value=n}}}}){}const bu="s-navigation-item",yu=le({selected:!1,$value:""}),Eu=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  font-size: .75rem;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  max-width: 80px;
  text-transform: capitalize;
  transition: color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.icon{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 48px;
  border-radius: 14px;
  transition: background-color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([selected=true]) .icon{
  background: var(--s-color-secondary-container, #CFE6F1);
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(svg){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  width: 24px;
  height: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
}
::slotted([slot=text]){
  margin-top: 4px;
}
`,Cu=`
<s-ripple attached="true" class="icon" part="icon">
  <slot name="icon"></slot>
  <slot name="badge"></slot>
</s-ripple>
<slot name="text"></slot>
`;class da extends X({style:Eu,template:Cu,props:yu,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof pn&&this.dispatchEvent(new Event(`${un}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof pn&&this.dispatchEvent(new Event(`${un}:update`,{bubbles:!0}))}}}}){}pn.define(un);da.define(bu);const Au="s-field",Fu=le({focused:!1,fixed:!0}),Du=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --field-padding: 16px;
  --field-padding-top: var(--field-padding);
  --field-padding-bottom: var(--field-padding);
  --field-padding-left: var(--field-padding);
  --field-padding-right: var(--field-padding);
  --field-border-radius: 4px;
  --field-border-width: 1px;
  --field-focused-border-width: 2px;
  --field-border-color: var(--s-color-outline, #70787D);
}
.container{
  display: flex;
  height: 100%;
  min-height: inherit;
}
.line{
  position: relative;
}
.line::before,
.line::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-width: var(--field-border-width);
  border-color: var(--field-border-color);
  pointer-events: none;
}
.line::after{
  border-width: var(--field-focused-border-width);
  border-color: var(--s-color-primary, #006782);
  opacity: 0;
  transition: opacity .2s ease-out;
}
:host([focused=true]) .line::after{
  opacity: 1;
}
.start,
.end{
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: var(--field-border-radius);
}
.start::before,
.end::before,
.start::after,
.end::after{
  border-top-style: solid;
  border-bottom-style: solid;
}
.start::before,
.start::after{
  border-left-style: solid;
  border-top-left-radius: var(--field-border-radius);
  border-bottom-left-radius: var(--field-border-radius);
}
.end::before,
.end::after{
  border-right-style: solid;
  border-top-right-radius: var(--field-border-radius);
  border-bottom-right-radius: var(--field-border-radius);
  left: auto;
  right: 0;
}
.box{
  display: grid;
  grid-template-areas: "a" "a";
  flex-grow: 1;
}
.box::before,
.box::after{
  border-bottom-style: solid;
}
.top,
.view{
  height: 100%;
  display: flex;
  grid-area: a;
  position: relative;
  box-sizing: border-box;
  margin-left: calc(var(--field-border-radius) * -1);
  margin-right: calc(var(--field-border-radius) * -1);
}
.view{
  align-items: center;
}
.top{
  pointer-events: none;
}
.top>.left::before,
.top>.right::before,
.top>.left::after,
.top>.right::after{
  border-top-style: solid;
}
.top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius) - 4px);
  margin-left: max(4px, var(--field-border-radius));
  margin-right: min(4px, calc(var(--field-padding-left) - var(--field-border-radius)));
  flex-shrink: 0;
}
:host([fixed=false]) .top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-right: 0;
}
.top>.right{
  flex-grow: 1;
  width: calc(var(--field-padding-right) - var(--field-border-radius) - 4px);
  margin-left: min(4px, calc(var(--field-padding-right) - var(--field-border-radius)));
  margin-right: max(4px, var(--field-border-radius));
}
:host([fixed=false]) .top>.right{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-left: 0;
}
.label{
  display: block;
  height: 100%;
  flex-shrink: 0;
}
.label>.line::before,
.label>.line::after,
:host([fixed=false]) .label::before,
:host([fixed=false]) .label::after{
  border-top-style: solid;
}
.label>.line::before,
.label>.line::after{
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 100%;
  font-size: .75rem;
  align-items: center;
  transform: translateY(-50%);
  color: var(--field-border-color);
  transition: transform .2s ease-out, font-size .2s ease-out;
  box-sizing: border-box;
  position: relative;
}
:host([fixed=false]) ::slotted([slot=label]),
::slotted([slot=label]:empty){
  font-size: inherit;
  transform: translateY(0);
}
::slotted([slot=label]:empty)::before,
::slotted([slot=label]:empty)::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
  border-top: solid var(--field-border-width); var(--field-border-color);
}
::slotted([slot=label]:empty)::after{
  opacity: 0;
  border-width: var(--field-focused-border-width);
  transition: opacity .2s ease-out;
  border-color: var(--s-color-primary, #006782);
}
:host([focused=true]) ::slotted([slot=label]:empty)::after{
  opacity: 1;
}
:host([focused=true]) ::slotted([slot=label]){
  color: var(--s-color-primary, #006782);
}
::slotted(:not([slot])){
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  padding-top: var(--field-padding-top);
  padding-bottom: var(--field-padding-bottom);
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}
`,Bu=`
<div class="container" part="container">
  <div class="start line" part="start">
    <slot name="start"></slot>
  </div>
  <div class="box line" part="box">
    <slot class="view"></slot>
    <div class="top" part="top">
      <div class="line left"></div>
      <slot name="label" class="label line">
        <div class="line"></div>
      </slot>
      <div class="line right"></div>
    </div>
  </div>
  <div class="end line" part="end">
    <slot name="end"></slot>
  </div>
  <slot name="custom"></slot>
</div>
`;class wu extends X({style:Du,template:Bu,props:Fu}){}wu.define(Au);const _u="s-fold",$u=le({folded:!1}),ku=`
:host{
  display: block;
}
.container{
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition: grid-template-rows var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([folded=true]) .container{
  grid-template-rows: 0fr;
}
.view{
  display: block;
  min-height: 0;
  overflow: hidden;
}
`,Su=`
<slot name="trigger"></slot>
<div class="container" part="container">
  <slot class="view" part="view"></slot>
</div>
`;class Tu extends X({style:ku,template:Su,props:$u,setup(t){t.querySelector("slot[name=trigger]").onclick=()=>this.folded=!this.folded}}){}Tu.define(_u);const Mu="s-page",Lu=le({theme:["light","auto","dark"]}),Iu=`
:host{
  display: flow-root;
  height: 100%;
  font-family: Roboto, system-ui;
  color: var(--s-color-on-background);
  background: var(--s-color-background);
  --s-color-scrim: #000000;
  --s-color-primary: #006782;
  --s-color-on-primary: #ffffff;
  --s-color-primary-container: #BAEAFF;
  --s-color-on-primary-container: #004D62;
  --s-color-secondary: #4C616B;
  --s-color-on-secondary: #ffffff;
  --s-color-secondary-container: #CFE6F1;
  --s-color-on-secondary-container: #354A53;
  --s-color-tertiary: #5C5B7E;
  --s-color-on-tertiary: #ffffff;
  --s-color-tertiary-container: #E2DFFF;
  --s-color-on-tertiary-container: #444465;
  --s-color-error: #BA1A1A;
  --s-color-on-error: #ffffff;
  --s-color-error-container: #FFDAD6;
  --s-color-on-error-container: #93000A;
  --s-color-background: #F8F9FB;
  --s-color-on-background: #191C1E;
  --s-color-outline: #70787D;
  --s-color-outline-variant: #C0C8CC;
  --s-color-surface: #F8F9FB;
  --s-color-on-surface: #191C1E;
  --s-color-surface-variant: #DCE4E8;
  --s-color-on-surface-variant: #40484C;
  --s-color-inverse-surface: #2E3132;
  --s-color-inverse-on-surface: #EFF1F3;
  --s-color-inverse-primary: #60D4FE;
  --s-color-surface-container: #ECEEF0;
  --s-color-surface-container-high: #E7E8EA;
  --s-color-surface-container-highest: #E1E3E4;
  --s-color-surface-container-low: #F2F4F5;
  --s-color-surface-container-lowest: #FFFFFF;
  --s-color-success: #006d43;
  --s-color-on-success: #ffffff;
  --s-color-success-container: #92f7bc;
  --s-color-on-success-container: #002111;
  --s-color-warning: #6f5d00;
  --s-color-on-warning: #ffffff;
  --s-color-warning-container: #ffe169;
  --s-color-on-warning-container: #221b00;
  --s-color-dark-primary: #60D4FE;
  --s-color-dark-on-primary: #003545;
  --s-color-dark-primary-container: #004D62;
  --s-color-dark-on-primary-container: #BAEAFF;
  --s-color-dark-secondary: #B4CAD5;
  --s-color-dark-on-secondary: #1E333C;
  --s-color-dark-secondary-container: #354A53;
  --s-color-dark-on-secondary-container: #CFE6F1;
  --s-color-dark-tertiary: #C4C3EA;
  --s-color-dark-on-tertiary: #2D2D4D;
  --s-color-dark-tertiary-container: #444465;
  --s-color-dark-on-tertiary-container: #E2DFFF;
  --s-color-dark-error: #FFB4AB;
  --s-color-dark-on-error: #690005;
  --s-color-dark-error-container: #93000A;
  --s-color-dark-on-error-container: #FFDAD6;
  --s-color-dark-background: #111415;
  --s-color-dark-on-background: #E1E3E4;
  --s-color-dark-outline: #8A9296;
  --s-color-dark-outline-variant: #40484C;
  --s-color-dark-surface: #111415;
  --s-color-dark-on-surface: #E1E3E4;
  --s-color-dark-surface-variant: #40484C;
  --s-color-dark-on-surface-variant: #C0C8CC;
  --s-color-dark-inverse-surface: #E1E3E4;
  --s-color-dark-inverse-on-surface: #2E3132;
  --s-color-dark-inverse-primary: #006782;
  --s-color-dark-surface-container: #1D2022;
  --s-color-dark-surface-container-high: #272A2C;
  --s-color-dark-surface-container-highest: #323537;
  --s-color-dark-surface-container-low: #191C1E;
  --s-color-dark-surface-container-lowest: #0C0F10;
  --s-color-dark-success: #76daa1;
  --s-color-dark-on-success: #003920;
  --s-color-dark-success-container: #005231;
  --s-color-dark-on-success-container: #92f7bc;
  --s-color-dark-warning: #e2c54b;
  --s-color-dark-on-warning: #3a3000;
  --s-color-dark-warning-container: #544600;
  --s-color-dark-on-warning-container: #ffe169;
  --s-elevation-level1: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  --s-elevation-level2: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  --s-elevation-level3: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  --s-elevation-level4: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
  --s-elevation-level5: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12);
  --s-motion-duration-Short1: 50ms;
  --s-motion-duration-short2: 100ms;
  --s-motion-duration-short3: 150ms;
  --s-motion-duration-short4: 200ms;
  --s-motion-duration-medium1: 250ms;
  --s-motion-duration-medium2: 300ms;
  --s-motion-duration-medium3: 350ms;
  --s-motion-duration-medium4: 400ms;
  --s-motion-duration-long1: 450ms;
  --s-motion-duration-long2: 500ms;
  --s-motion-duration-long3: 550ms;
  --s-motion-duration-long4: 600ms;
  --s-motion-duration-extra-long1: 700ms;
  --s-motion-duration-extra-long2: 800ms;
  --s-motion-duration-extra-long3: 900ms;
  --s-motion-duration-extra-long4: 1000ms;
  --s-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);
  --s-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --s-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --s-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
}
:host([dark]){
  --s-color-primary: var(--s-color-dark-primary) !important;
  --s-color-on-primary: var(--s-color-dark-on-primary) !important;
  --s-color-primary-container: var(--s-color-dark-primary-container) !important;
  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;
  --s-color-secondary: var(--s-color-dark-secondary) !important;
  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;
  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;
  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;
  --s-color-tertiary: var(--s-color-dark-tertiary) !important;
  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;
  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;
  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;
  --s-color-error: var(--s-color-dark-error) !important;
  --s-color-on-error: var(--s-color-dark-on-error) !important;
  --s-color-error-container: var(--s-color-dark-error-container) !important;
  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;
  --s-color-background: var(--s-color-dark-background) !important;
  --s-color-on-background: var(--s-color-dark-on-background) !important;
  --s-color-outline: var(--s-color-dark-outline) !important;
  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;
  --s-color-surface: var(--s-color-dark-surface) !important;
  --s-color-on-surface: var(--s-color-dark-on-surface) !important;
  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;
  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;
  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;
  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;
  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;
  --s-color-surface-container: var(--s-color-dark-surface-container) !important;
  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;
  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;
  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;
  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;
  --s-color-success: var(--s-color-dark-success) !important;
  --s-color-on-success: var(--s-color-dark-on-success) !important;
  --s-color-success-container: var(--s-color-dark-success-container) !important;
  --s-color-on-success-container: var(--s-color-dark-on-success-container) !important;
  --s-color-warning: var(--s-color-dark-warning) !important;
  --s-color-on-warning: var(--s-color-dark-on-warning) !important;
  --s-color-warning-container: var(--s-color-dark-warning-container) !important;
  --s-color-on-warning-container: var(--s-color-dark-on-warning-container) !important;
}
`,qu="<slot></slot>",fn=document.createElement("style");fn.textContent="::view-transition-old(root),::view-transition-new(root) { animation: none; mix-blend-mode: normal}";class Ru extends X({style:Iu,template:qu,props:Lu,setup(){const t=getComputedStyle(this),s=matchMedia("(prefers-color-scheme: dark)"),o=()=>{const i=t.getPropertyValue("--s-motion-easing-standard-accelerate")||"cubic-bezier(0.3, 0, 1, 1)",a=t.getPropertyValue("--s-motion-duration-long4")||"600ms";return{easing:i,duration:ot(a)}},n=()=>this.theme==="auto"?s.matches:this.theme==="dark";return{expose:{toggle:(i,a)=>new Promise(c=>{if(this.theme===i)return;const d=s.matches,l=x=>x==="auto"?d?"dark":"light":x,u=l(this.theme),p=l(i);if(u===p||!document.startViewTransition)return this.theme=i,c();const h=innerWidth,v=innerHeight,C={clipPath:[`circle(0px at 50% ${v/2}px)`,`circle(${Math.sqrt(h**2+v**2)/2}px at 50% ${v/2}px)`]};if(a&&a.isConnected){const{left:x,top:f}=a.getBoundingClientRect(),A=x+a.offsetWidth/2,w=f+a.offsetHeight/2,P=Math.max(h-A,A),R=Math.max(v-w,w),z=Math.sqrt(P**2+R**2);C.clipPath[0]=`circle(0px at ${A}px ${w}px)`,C.clipPath[1]=`circle(${z}px at ${A}px ${w}px)`}const B=document.startViewTransition(()=>{this.theme=i,document.head.appendChild(fn)});B.ready.then(async()=>{const x=document.documentElement.animate(C,{...o(),pseudoElement:"::view-transition-new(root)"});c(x),await B.finished,fn.remove()})}),get isDark(){return n()}},theme:i=>{if(i==="light")return this.removeAttribute("dark");if(i==="dark")return this.setAttribute("dark","");const a=()=>{s.matches?this.setAttribute("dark",""):this.removeAttribute("dark"),this.dispatchEvent(new Event("change"))};s.onchange=a,a()}}}}){}Ru.define(Mu);const zu="s-pagination",Pu=le({$value:1,$total:20,$count:20,type:["standard","outlined"]}),Ou=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  border-radius: 18px;
  gap: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([type=outlined]) :is(.icon-button, .button){
  border-width: 1px;
  border-color: var(--s-color-outline-variant, #C0C8CC);
  border-style: solid;
}
.container{
  display: flex;
  flex-wrap: wrap;
  gap: inherit;
  height: 100%;
  border-radius: inherit;
  justify-content: space-evenly;
}
.icon-button,
.button{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
}
.icon-button{
  border-radius: inherit;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
}
.button{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  padding: 0 8px;
  border-radius: inherit;
  box-sizing: border-box;
}
.checked{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
  border-color: var(--s-color-secondary, #4C616B) !important;
}
.disabled{
  pointer-events: none;
  opacity: .38;
}
.text{
  pointer-events: none;
  border: none !important;
}
svg{
  width: 24px;
  height: 24px;
  padding: 1px;
  box-sizing: border-box;
  fill: var(--s-color-on-surface-variant, #40484C);
}
`,Nu=`
<s-ripple class="prev icon-button disabled" part="prev">
  <svg viewBox="0 -960 960 960">
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
  </svg>
</s-ripple>
<div class="container">
  <s-ripple class="button checked">1</s-ripple>
</div>
<s-ripple class="next icon-button disabled" part="next">
  <svg viewBox="0 -960 960 960">
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
  </svg>
</s-ripple>
`;class Hu extends X({style:Ou,template:Nu,props:Pu,setup(t){const s=t.querySelector(".prev"),o=t.querySelector(".next"),n=t.querySelector(".container"),r=()=>this.dispatchEvent(new Event("change")),i=()=>{const c=Math.ceil(this.total/this.count);let d=Math.max(Math.min(c-7,Math.max(0,this.value-4)),0);if(n.childNodes.forEach(l=>{d++;const u=l;u.textContent=d.toString(),u.classList.toggle("checked",this.value===d),u.classList.remove("text")}),s.classList.toggle("disabled",this.value===1),o.classList.toggle("disabled",this.value===c),c>7){if(this.value>=5){n.childNodes.item(0).textContent="1";const l=n.childNodes.item(1);l.textContent="...",l.classList.add("text")}if(this.value<=c-4){n.childNodes.item(n.childNodes.length-1).textContent=c.toString();const l=n.childNodes.item(n.childNodes.length-2);l.textContent="...",l.classList.add("text")}}},a=()=>{const c=Math.ceil(this.total/this.count),d=Math.min(c,7),l=document.createDocumentFragment();for(let u=1;u<=d;u++){const p=new ds;p.classList.add("button"),l.appendChild(p)}n.innerHTML="",n.appendChild(l),i()};return n.onclick=c=>{if(!(c.target instanceof ds))return;const d=Number(c.target.textContent);d!==this.value&&(this.value=d,r())},s.onclick=()=>{const c=Math.max(this.value-1,1);c!==this.value&&(this.value=c,r())},o.onclick=()=>{const c=Math.min(this.value+1,Math.ceil(this.total/this.count));c!==this.value&&(this.value=c,r())},{total:a,value:i}}}){}Hu.define(zu);const hn="s-picker",Vu=le({disabled:!1,$label:"",$value:""}),ju=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --picker-border-radius: 4px;
  --picker-border-color: var(--s-color-outline, #70787D);
  --picker-border-width: 1px;
  --picker-padding: 16px;
  --picker-height: 48px;
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
.popup{
  display: block;
  cursor: pointer;
  position: relative;
}
.ripple{
  border-radius: var(--picker-border-radius);
}
.field{
  --field-border-radius: var(--picker-border-radius);
  --field-border-color: var(--picker-border-color);
  --field-border-width: var(--picker-border-width);
  --field-padding: var(--picker-padding);
  height: var(--picker-height);
  width: 100%;
  position: relative;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--picker-padding) * -1) + 4px));
  margin-right: max(0px, calc(var(--picker-padding) - 12px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.container{
  max-height: 408px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  gap: 4px;
}
`,Uu=`
<s-popup class="popup">
  <slot name="trigger" slot="trigger">
    <s-field fixed="false" class="field" part="field">
      <div class="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-scroll-view class="container" part="container">
    <slot id="slot"></slot>
  </s-scroll-view>
</s-popup>
`;class xn extends X({style:ju,template:Uu,props:Vu,setup(t){const s=t.querySelector(".popup"),o=t.querySelector(".field"),n=t.querySelector(".label"),r=t.querySelector(".view"),i=t.querySelector("#slot"),a=t.querySelector(".container"),c=new js({context:this,class:ua,slot:i});return s.addEventListener("show",()=>{o.focused=!0,o.fixed=!0,c.select||(r.textContent=this.label,r.style.opacity="0"),a.style.minWidth=`${this.offsetWidth}px`,c.select&&a.scrollTo({top:c.select.offsetTop-a.offsetTop-(a.offsetHeight/2-c.select.offsetHeight/2)})}),s.onclose=()=>{o.focused=!1,!c.select&&(o.fixed=!1)},s.addEventListener("closed",()=>a.style.removeProperty("min-width")),c.onUpdate=()=>{if(!c.select){o.fixed=!1,r.textContent="";return}o.fixed=!0,r.style.removeProperty("opacity"),r.textContent=c.select.textContent},c.onSelect=()=>s.close(),{expose:{get options(){return c.list},get selectedIndex(){return c.selectedIndex},get show(){return s.show},get toggle(){return s.toggle},get close(){return s.close}},label:d=>n.textContent=d,value:{get:()=>c.value,set:d=>c.value=d}}}}){}const Wu="s-picker-item",Ku=le({selected:!1,$value:""}),Zu=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  flex-shrink: 0;
  padding: 0 12px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -4px;
}
`,Gu=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple part="ripple" attached="true" ></s-ripple>
`;class ua extends X({style:Zu,template:Gu,props:Ku,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof xn&&this.dispatchEvent(new Event(`${hn}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof xn&&this.dispatchEvent(new Event(`${hn}:update`,{bubbles:!0}))}}}}){}xn.define(hn);ua.define(Wu);const Yu="s-popup",Xu=le({align:["center","left","right"]}),Ju=So({show:Event,showed:Event,closed:Event}),Qu=`
:host{
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  position: relative;
  overflow: hidden;
  color: inherit;
  outline: none;
}
dialog::backdrop{
  background: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.container{
  display: block;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  width: fit-content;
  height: fit-content;
  outline: none;
}
::slotted(:not([slot])){
  border-radius: 4px;
  max-width: inherit;
  max-height: inherit;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container, #ECEEF0);
}
`,e1=`
<slot name="trigger"></slot>
<dialog class="popup" part="popup">
  <div class="scrim" part="scrim"></div>
  <slot class="container" part="container"></slot>
</dialog>
`,t1=(e,t,s,o)=>{const n={top:0,left:0,origin:[]},r=o==="center",i=r?e.top+e.height:e.top,a=r?e.top-s:e.top-s+e.height;if(i+s<=innerHeight)n.top=i,n.origin[1]="top";else if(a>=0)n.top=a,n.origin[1]="bottom";else{const c=(innerHeight-s)/2;n.top=c,n.origin[1]=`${e.top+e.height/2-c}px`}if(r)n.left=e.left-(t-e.width)/2,n.origin[0]="center",n.left<0?(n.left=e.left,n.origin[0]=`${e.width/2}px`):n.left+t>innerWidth&&(n.left=e.left+e.width-t,n.origin[0]=`${t-e.width+e.width/2}px`);else{const c=u=>{n.left=e.left-t,n.origin[0]="right",n.left<0&&u&&u()},d=u=>{n.left=e.left+e.width,n.origin[0]="left",n.left+t>innerWidth&&u&&u()},l=()=>{const u=(innerWidth-t)/2;n.left=u,n.origin[0]=`${e.left+e.width/2-u}px`};o==="left"?c(()=>d(l)):d(()=>c(l))}return n};class s1 extends X({style:Qu,template:e1,props:Xu,events:Ju,setup(t){const s=t.querySelector("dialog"),o=t.querySelector(".container"),n=getComputedStyle(this),r=()=>{const d=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",l=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:d,duration:ot(l)}},i=d=>{if(!this.isConnected||s.open)return;const l={top:0,left:0,origin:[]};if(s.showModal(),!this.dispatchEvent(new Event("show",{cancelable:!0})))return s.close();o.style.maxHeight=`${innerHeight}px`,o.style.maxWidth=`${innerWidth}px`;const u=o.offsetWidth,p=o.offsetHeight;if(!d||d instanceof HTMLElement){const C=(d??this).getBoundingClientRect(),B=t1(C,u,p,this.align);l.top=B.top,l.left=B.left,l.origin=B.origin}else l.top=d.y,l.left=d.x,l.origin=d.origin?.split(" ")??["left","top"],d.x+u>innerWidth&&(l.left=d.x-u,l.origin[0]="right"),d.y+p>innerHeight&&(l.top=d.y-p,l.origin[1]="bottom");o.style.transformOrigin=l.origin.join(" "),o.style.top=`${l.top}px`,o.style.left=`${l.left}px`;const h=o.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},r());this.setAttribute("showed",""),h.finished.then(()=>this.dispatchEvent(new Event("showed")))},a=()=>{if(!this.isConnected||!s.open||o.getAnimations().length>0||!this.dispatchEvent(new Event("close",{cancelable:!0})))return;const d=o.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},r());this.removeAttribute("showed"),d.finished.then(()=>{s.close(),this.dispatchEvent(new Event("closed"))})},c=d=>s.open?a():i(d);return t.querySelector("slot[name=trigger]").addEventListener("click",()=>i()),t.querySelector(".scrim").addEventListener("pointerdown",a),{expose:{show:i,toggle:c,close:a},onMounted:()=>addEventListener("resize",a),onUnmounted:()=>removeEventListener("resize",a)}}}){}s1.define(Yu);const Hn="s-popup-menu",o1=le({group:["","start","end"]}),n1=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
}
.popup{
  display: block;
}
.container{
  box-sizing: border-box;
  padding: 4px 0;
  max-width: 224px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
::slotted(s-popup-menu[group=start]){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-top: 4px;
  padding-top: 4px;
}
::slotted(s-popup-menu[group=end]){
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-bottom: 4px;
  padding-bottom: 4px;
}
`,r1=`
<s-popup class="popup">
  <slot slot="trigger" name="trigger"></slot>
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</s-popup>
`;class xo extends X({style:n1,template:r1,props:o1,setup(t){const s=t.querySelector(".popup"),o=t.querySelector("slot[name=trigger]");return o.onclick=n=>{n.stopPropagation(),s.show()},this.addEventListener(`${Hn}:click`,n=>{n.stopPropagation(),s.close()}),s.onclose=n=>{const r=n.target;if(r.parentNode instanceof ShadowRoot){const i=r.parentNode.host;i.parentNode instanceof xo&&i.parentNode.close()}},{onMounted:()=>{this.parentNode instanceof xo&&s.setAttribute("align","right")},expose:{get show(){return s.show},get toggle(){return s.toggle},get close(){return s.close}}}}}){}const i1="s-popup-menu-item",a1=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  padding: 0 12px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  height: 24px;
  width: 24px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -6px;
}
`,l1=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true"></s-ripple>
`;class c1 extends X({style:a1,template:l1,setup(){this.addEventListener("click",()=>this.dispatchEvent(new Event(`${Hn}:click`,{bubbles:!0})))}}){}xo.define(Hn);c1.define(i1);const d1="s-radio-button",u1=le({disabled:!1,checked:!1,name:"",$value:""}),p1=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.checked{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([checked=true]:not([indeterminate=true])) .checked{
  opacity: 1;
  transform: scale(1);
}
.dot{
  width: 60%;
  height: 60%;
  transform: scale(0.4);
  background: currentColor;
  border-radius: 50%;
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,f1=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <div class="dot"></div>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class h1 extends X({style:p1,template:f1,props:u1,setup(){this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(t=>{t!==this&&(t.checked=!1)}),this.dispatchEvent(new Event("change"))})}}){}h1.define(d1);const x1="s-rate",Ds=le({readOnly:!1,$max:10,$min:0,$value:5,$step:1}),m1=`
:host{
  display: inline-flex;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  font-size: 24px;
  width: calc(1em * 5);
  height: 1em;
}
.track{
  width: 100%;
  display: flex;
}
.track svg,
::slotted([slot=track]){
  fill: var(--s-color-secondary-container, #CFE6F1);
  filter: drop-shadow(1em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(2em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(3em 0 0 var(--s-color-secondary-container, #CFE6F1));
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  display: flex;
}
.indicator svg,
::slotted([slot=indicator]){
  fill: var(--s-color-primary, #006782);
  filter: drop-shadow(1em 0 0 var(--s-color-primary, #006782)) drop-shadow(2em 0 0 var(--s-color-primary, #006782)) drop-shadow(3em 0 0 var(--s-color-primary, #006782)) drop-shadow(4em 0 0 var(--s-color-primary, #006782));
}
svg,
::slotted(*){
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  flex-shrink: 0;
}
input{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0;
}
:host([readonly=true]) input{
  display: none;
}
`,g1=`
<slot name="track" class="track" part="track">
  <svg viewBox="0 -960 960 960">
    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
  </svg>
</slot>
<slot name="indicator" class="indicator" part="indicator">
  <svg viewBox="0 -960 960 960">
    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
  </svg>
</slot>
<input
  type="range"
  max="${Ds.max}"
  min="${Ds.min}"
  step="${Ds.step}"
  value="${Ds.value}"
/>
`;class v1 extends X({style:m1,template:g1,props:Ds,setup(t){const s=t.querySelector(".indicator"),o=t.querySelector("input"),n=()=>{const i=(Number(o.value)-this.min)*100/this.max-this.min;s.style.width=`${i}%`};return o.onchange=()=>this.dispatchEvent(new Event("change")),o.oninput=()=>{this.value=Number(o.value),this.dispatchEvent(new Event("input"))},{max:r=>{o.max=String(r),n()},min:r=>{o.min=String(r),n()},step:r=>{o.step=String(r),n()},value:r=>{o.value=String(r),n()}}}}){}v1.define(x1);const b1="s-search",y1=le({$placeholder:"",disabled:!1,$value:"",$maxLength:-1,readOnly:!1}),E1=`
:host{
  display: inline-flex;
  vertical-align: middle;
  min-height: 40px;
  width: 220px;
  border-radius: 20px;
  font-size: .875rem;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
  --search-outline-width: 1px;
  --search-outline-color: var(--s-color-surface-variant, #DCE4E8);
}
.wrapper{
  display: grid;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
  background: inherit;
  min-height: inherit;
  flex-grow: 1;
  width: 100%;
  box-shadow: 0 0 0 var(--search-outline-width) var(--search-outline-color);
}
:host(:focus-within) .wrapper{
  position: absolute;
}
.container{
  display: flex;
  align-items: center;
  position: relative;
  min-height: inherit;
}
input{
  border: none;
  padding: 0 16px;
  height: 100%;
  width: 0;
  flex-grow: 1;
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: 1;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
}
input::placeholder{
  color: var(--s-color-outline, #70787D);
}
input::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
::slotted([slot=dropdown]){
  position: absolute;
  pointer-events: none;
  left: 0;
  height: 0;
  opacity: 0;
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
  height: auto;
}
:host(:focus-within) ::slotted([slot=dropdown]){
  pointer-events: auto;
  position: relative;
  opacity: 1;
}
::slotted([slot]){
  flex-shrink: 0;
}
.clear{
  display: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
svg,
::slotted(svg){
  height: 24px;
  width: 24px;
  fill: var(--s-color-on-surface-variant, #40484C);
}
.icon,
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin: 0 -8px 0 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin: 0 8px 0 -8px;
}
::slotted(s-icon-button[slot=start]){
  margin-right: -16px;
}
.clear,
::slotted(s-icon-button[slot=end]){
  margin-left: -16px;
}
`,C1=`
<div class="wrapper" part="wrapper">
  <div class="container" part="container">
    <slot name="start">
      <svg viewBox="0 -960 960 960" class="icon">
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
      </svg>
    </slot>
    <input type="text">
    <slot name="end">
      <s-ripple class="clear">
        <svg viewBox="0 -960 960 960">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
        </svg>
      </s-ripple>
    </slot>
  </div>
  <slot name="dropdown"></slot>
</div>
`;class A1 extends X({style:E1,template:C1,props:y1,setup(t){const s=t.querySelector("input"),o=t.querySelector(".clear"),n=t.querySelector("[name=dropdown]"),r=()=>o.style.display=s.value===""?"none":"flex";return n.onmousedown=i=>i.preventDefault(),s.onchange=()=>this.dispatchEvent(new Event("change")),o.onclick=()=>{s.value="",r(),this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))},s.oninput=r,{expose:{get native(){return s}},value:{get:()=>s.value,set:i=>{s.value=i,r()}},placeholder:i=>s.placeholder=i,maxLength:i=>s.maxLength=i,readOnly:i=>s.readOnly=i}}}){}A1.define(b1);const mn="s-segmented-button",F1=le({$value:"",mode:["auto","fixed"]}),D1=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  padding: 3px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
}
:host([mode=fixed]){
  display: flex;
}
:host([mode=fixed]) ::slotted(s-segmented-button-item){
  flex-basis: 100%;
}
`,B1="<slot></slot>";class gn extends X({style:D1,template:B1,props:F1,setup(t){const s=t.querySelector("slot"),o=new js({context:this,class:pa,slot:s}),n=getComputedStyle(this),r=()=>{const i=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",a=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:i,duration:ot(a)}};return o.onUpdate=i=>{if(!i||!o.select||!this.isConnected)return;const a=i.shadowRoot.querySelector(".indicator").getBoundingClientRect(),c=o.select.shadowRoot.querySelector(".indicator"),d=c.getBoundingClientRect(),l=a.left-d.left;c.style.transform=`translateX(${d.left>a.left?l:Math.abs(l)}px)`,c.style.width=`${a.width}px`,i.style.zIndex="1";const u=c.animate([{transform:"translateX(0)",width:`${d.width}px`}],r());u.onfinish=u.oncancel=u.onremove=()=>{c.style.removeProperty("transform"),c.style.removeProperty("width"),i.style.removeProperty("z-index")}},{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:i=>o.value=i}}}}){}const w1="s-segmented-button-item",_1=le({selected:!1,disabled:!1,selectable:!0,$value:""}),$1=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 64px;
  padding: 0 16px;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 500;
  font-size: .8125rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  transition: color var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-on-primary, #ffffff);
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: inherit;
  background: var(--s-color-primary, #006782);
}
:host([selected=true]) .indicator{
  opacity: 1;
}
::slotted([slot]){
  width: 18px;
  height: 18px;
  color: inherit;
  fill: currentColor;
  flex-shrink: 0;
  position: relative;
}
::slotted([slot=start]){
  margin-right: 4px;
}
::slotted([slot=end]){
  margin-right: 4px;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  position: relative;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    opacity: .38;
    color: var(--s-color-on-surface, #191C1E);
  }
}
`,k1=`
<div class="indicator" part="indicator"></div>
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class pa extends X({style:$1,template:k1,props:_1,setup(){return this.addEventListener("click",()=>{!(this.parentNode instanceof gn)||this.selected||this.selectable&&this.dispatchEvent(new Event(`${mn}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof gn&&this.dispatchEvent(new CustomEvent(`${mn}:update`,{bubbles:!0,detail:{}}))}}}}){}gn.define(mn);pa.define(w1);const S1="s-skeleton",T1=`
:host{
  display: block;
  height: 16px;
  animation: skeleton var(--s-motion-duration-extra-long4, 1000ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0)) infinite;
  background: linear-gradient(90deg, var(--s-color-surface-container-high, #E7E8EA) 25%, var(--s-color-surface-container-highest, #E1E3E4) 37%, var(--s-color-surface-container-high, #E7E8EA) 63%);
  background-size: 400% 100%;
  border-radius: 8px;
}
@keyframes skeleton{
  0%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
`;class M1 extends X({style:T1}){}M1.define(S1);const L1="s-slider",os=le({disabled:!1,$labeled:!1,$max:100,$min:0,$step:1,$value:0}),I1=`
:host{
  display: block;
  color: var(--s-color-primary, #006782);
  height: 16px;
  cursor: pointer;
  position: relative;
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
.container{
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.track,
.indicator{
  height: 4px;
  border-radius: 2px;
  position: absolute;
  right: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
  width: calc(100% - 20px);
}
:host([disabled=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.indicator{
  left: 0;
  width: 0;
  background: currentColor;
}
.handle{
  position: relative;
  height: 16px;
  width: 16px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}
.thumb{
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: currentColor;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.thumb::before{
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: color-mix(in srgb, currentColor 20%, transparent);
  transform: scale(0);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.active .thumb::before{
  transform: scale(1);
}
.label{
  position: absolute;
  bottom: 100%;
  margin-bottom: 12px;
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 6px;
  height: 24px;
  font-size: .75rem;
  transform: scale(0);
  transform-origin: center bottom;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  opacity: .85;
  z-index: 1;
  display: none;
}
.active .label{
  transform: scale(1);
}
:host([labeled=true]) .label{
  display: flex;
}
input{
  margin: 0;
  height: 100%;
  width: 100%;
  cursor: inherit;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    color: var(--s-color-on-surface, #191C1E) !important;
  }
  :host([disabled=true]) .track{
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
  }
  :host([disabled=true]) .thumb{
    opacity: .38;
  }
}
`,q1=`
<div class="container" part="container">
  <div class="indicator" part="indicator"></div>
  <div class="track" part="track"></div>
  <div class="handle" part="handle">
    <div class="thumb" part="thumb"></div>
    <div class="label" part="label">${os.value}</div>
  </div>
</div>
<input
  type="range"
  max="${os.max}"
  min="${os.min}"
  step="${os.step}"
  value="${os.value}"
/>
`;class R1 extends X({style:I1,template:q1,props:os,setup(t){const s=t.querySelector(".container"),o=t.querySelector(".indicator"),n=t.querySelector(".track"),r=t.querySelector(".handle"),i=t.querySelector(".label"),a=t.querySelector("input"),c=()=>{const d=Number(a.value),l=(d-this.min)*100/(this.max-this.min);r.style.left=`calc(${l}% - ${l*.16}px)`,o.style.width=`calc(${l}% - ${4+l*.16}px)`,n.style.width=`calc(${100-l}% - ${20-l*.16}px)`,i.textContent=String(d)};return a.onchange=()=>this.dispatchEvent(new Event("change")),a.oninput=()=>{this.value=Number(a.value),this.dispatchEvent(new Event("input"))},a.onmousedown=d=>d.button===0&&je.pointerFine.matches&&s.classList.add("active"),a.onmouseup=()=>je.pointerFine.matches&&s.classList.remove("active"),a.ontouchstart=()=>je.pointerCoarse.matches&&s.classList.add("active"),a.ontouchend=()=>je.pointerCoarse.matches&&s.classList.remove("active"),a.ontouchcancel=()=>je.pointerCoarse.matches&&s.classList.remove("active"),{max:d=>{a.max=String(d),c()},min:d=>{a.min=String(d),c()},step:d=>{a.step=String(d),c()},value:d=>{a.value=String(d),c()}}}}){}R1.define(L1);const eo=document.createElement("div");eo.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const fa=e=>{e.appendChild(eo);const t=eo.getBoundingClientRect();return e.removeChild(eo),{left:t.left,top:t.top,width:t.width,height:t.height}},z1="s-snackbar",P1=le({type:["none","info","success","warning","error"],align:["auto","top","bottom"],$duration:4e3}),O1=So({show:Event,showed:Event,closed:Event}),N1=`
:host{
  display: inline-block;
  vertical-align: middle;
}
.popup{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  display: none;
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none;
  padding: 16px;
  justify-content: center;
  transition: transform var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.popup.show{
  display: flex;
}
.container{
  outline: none;
  align-self: flex-end;
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: 48px;
  line-height: 22px;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: .875rem;
  font-weight: 500;
  box-sizing: border-box;
  max-width: 320px;
  transition: box-shadow var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
.text{
  flex-grow: 1;
  min-width: 0;
  user-select: text;
  -webkit-user-select: text;
}
.icon{
  display: none;
}
:host([type=info]) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
:host([type=info]) .container{
  color: var(--s-color-on-secondary, #ffffff);
  background: var(--s-color-secondary, #4C616B);
}
:host([type=success]) .container{
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
:host([type=warning]) .container{
  color: var(--s-color-on-warning, #ffffff);
  background: var(--s-color-warning, #6f5d00);
}
:host([type=error]) .container{
  color: var(--s-color-on-error, #ffffff);
  background: var(--s-color-error, #BA1A1A);
}
:host([type=info]) ::slotted([slot=action]),
:host([type=success]) ::slotted([slot=action]),
:host([type=warning]) ::slotted([slot=action]),
:host([type=error]) ::slotted([slot=action]){
  color: currentColor;
}
svg,
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin-right: 12px;
  margin-left: -4px;
}
::slotted([slot=action]){
  font-size: inherit;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 4px;
  margin-right: -8px;
  margin-left: 12px;
  cursor: pointer;
  height: 36px;
  font-size: .875rem;
  color: var(--s-color-inverse-primary, #60D4FE);
}
@media (max-width: 375px){
  .popup{
    padding: 8px;
  }
}
@media (pointer: fine){
  .container:hover{
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
`,H1=`
<slot name="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <div class="container" part="container">
    <slot name="icon">
      <svg viewBox="0 0 24 24" class="icon info">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon success">
        <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon warning">
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon error">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    </slot>
    <div class="text" part="text">
      <slot></slot>
    </div>
    <slot name="action"></slot>
  </div>
</div>
`,V1=e=>{let t=document.body;const s=new ha;s.style.display="block";const o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof e=="string")s.textContent=e;else{if(e.root&&(t=e.root),e.align&&(s.align=e.align),e.icon&&(e.icon instanceof Element&&(e.icon.slot="icon",s.appendChild(e.icon)),typeof e.icon=="string"&&(s.innerHTML=e.icon)),s.append(e.text),e.type&&(s.type=e.type),e.action){const n=document.createElement("s-button");n.type="text",n.slot="action",typeof e.action=="string"?n.textContent=e.action:(n.textContent=e.action.text,n.addEventListener("click",e.action.click)),s.appendChild(n)}typeof e.duration=="number"&&(s.duration=e.duration)}return t.appendChild(s),s.addEventListener("closed",()=>t.removeChild(s)),s.show(),s},Fr={top:[],bottom:[]};class ha extends X({style:N1,template:H1,props:P1,events:O1,methods:{builder:V1},setup(t){const s=t.querySelector(".popup"),o=t.querySelector(".container"),n=getComputedStyle(this),r=()=>{const l=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:ot(u)}},i={timer:0,gap:8},a=()=>this.align==="auto"?je.pointerCoarse.matches?"top":"bottom":this.align,c=()=>{if(!this.isConnected||s.classList.contains("show"))return;if(s.classList.add("show"),s.showPopover)s.showPopover();else{const C=fa(t);s.style.width=`${innerWidth}px`,s.style.height=`${innerHeight}px`,s.style.marginLeft=`${-C.left}px`,s.style.marginTop=`${-C.top}px`,s.style.zIndex="3"}const l=a();o.style.alignSelf={top:"flex-start",bottom:"flex-end"}[l];const u=Fr[l],p={top:1,bottom:-1}[l];let h=o.offsetHeight+i.gap;for(const C of u)C.style.transform=`translateY(${h*p}px)`,h+=C.firstElementChild.offsetHeight+i.gap;const v=o.animate({opacity:[0,1],transform:[`translateY(calc(${p*-100}% + 16px))`,""],pointerEvents:"auto"},{...r(),fill:"forwards"});this.dispatchEvent(new Event("show")),this.duration>0&&(i.timer=setTimeout(d,this.duration)),s.dataset.align=l,u.unshift(s),v.finished.then(()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!s.classList.contains("show"))return;clearTimeout(i.timer);const l=s.dataset.align,u=Fr[l],p={top:1,bottom:-1}[l],h=u.indexOf(s);for(let C=h+1;C<u.length;C++){const B=u[C],x=Math.abs(Number(B.style.transform.slice(11).slice(0,-3)));B.style.transform=`translateY(${(x-o.offsetHeight-i.gap)*p}px)`}const v=o.animate({opacity:[1,0],transform:`translateY(calc(${p*-100}% + 16px))`},r());this.dispatchEvent(new Event("close")),v.finished.then(()=>{s.hidePopover&&s.hidePopover(),s.removeAttribute("style"),s.classList.remove("show"),this.dispatchEvent(new Event("closed"))}),u.splice(h,1)};return o.onmouseenter=()=>clearTimeout(i.timer),o.onmouseleave=()=>s.classList.contains("show")&&this.duration>0&&(i.timer=setTimeout(d,this.duration)),t.querySelector("slot[name=trigger]").onclick=c,t.querySelector("slot[name=action]").onclick=d,{expose:{show:c,close:d}}}}){}ha.define(z1);const j1="s-switch",U1=le({disabled:!1,checked:!1}),W1=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: var(--s-color-primary, #006782);
  width: 52px;
  aspect-ratio: 1.625;
  -webkit-aspect-ratio: 1.625;
  border-radius: 16px;
}
:host([disabled=true]){
  pointer-events: none;
}
.track{
  width: 100%;
  height: 100%;
  border: solid 2px var(--s-color-outline, #70787D);
  box-sizing: border-box;
  border-radius: inherit;
}
:host([disabled=true]) .track{
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([checked=true]) .track{
  border-width: 0;
  background: currentColor;
}
:host([disabled=true][checked=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.ripple{
  height: 125%;
  width: auto;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  inset: auto;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
  transform: translateX(-10%);
}
:host([checked=true]) .ripple{
  transform: translateX(40%);
  color: currentColor;
}
.thumb{
  background: var(--s-color-outline, #70787D);
  border-radius: 50%;
  width: 40%;
  height: 40%;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  position: relative;
}
:host([disabled=true]) .thumb{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
:host([checked=true]) .thumb{
  background: var(--s-color-on-primary, #ffffff);
  transform: scale(1.5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([disabled=true][checked=true]) .thumb{
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: none;
}
.icon{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: currentColor;
}
::slotted([slot=icon]),
svg{
  color: currentColor;
  fill: currentColor;
  width: 70%;
  height: 70%;
}
:host([checked=true]) .icon{
  opacity: 1;
}
:host([checked=true][disabled=true]) .icon{
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent);
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]) .track{
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .track{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true]) .thumb{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .thumb{
    background: var(--s-color-surface, #F8F9FB) !important;
  }
}
`,K1=`
<div class="track" part="track"></div>
<s-ripple attached="true" class="ripple" part="ripple">
  <div class="thumb" part="thumb">
    <slot name="icon" class="icon"></slot>
  </div>
</s-ripple>
`;class Z1 extends X({style:W1,template:K1,props:U1,setup(){this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}Z1.define(j1);const vn="s-tab",G1=le({mode:["scrollable","fixed"],$value:""}),Y1=`
:host{
  display: flex;
  justify-content: flex-start;
  position: relative;
  background: var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-surface-variant, #40484C);
}
:host::before{
  content: '';
  position: absolute;
  width: 100%;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  bottom: 0;
  left: 0;
}
.container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
.container::-webkit-scrollbar{
  display: none;
}
:host([mode=fixed]) .container{
  overflow: hidden;
  width: 100%;
}
::slotted(s-tab-item){
  flex-shrink: 0;
  flex-basis: auto;
}
:host([mode=fixed]) ::slotted(s-tab-item){
  flex-basis: 100%;
  flex-shrink: 1;
}
`,X1=`
<div class="container" part="container">
  <slot></slot>
</div>
`;class bn extends X({style:Y1,template:X1,props:G1,setup(t){const s=t.querySelector("slot"),o=t.querySelector(".container"),n=new js({context:this,class:xa,slot:s}),r=getComputedStyle(this),i=()=>{const a=r.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",c=r.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:a,duration:ot(c)}};return n.onUpdate=a=>{if(n.select&&o.scrollWidth!==o.offsetWidth){const h=n.select.offsetLeft-o.offsetLeft-(o.offsetWidth/2-n.select.offsetWidth/2);o.scrollTo({left:h,behavior:"smooth"})}if(!a||!n.select||!this.isConnected)return;const c=a.shadowRoot.querySelector(".indicator").getBoundingClientRect(),d=n.select.shadowRoot?.querySelector(".indicator"),l=d.getBoundingClientRect(),u=c.left-l.left;d.style.transform=`translateX(${l.left>c.left?u:Math.abs(u)}px)`,d.style.width=`${c.width}px`;const p=d.animate([{transform:"translateX(0)",width:`${l.width}px`}],i());p.onfinish=p.oncancel=p.onremove=()=>{d.style.removeProperty("transform"),d.style.removeProperty("width")}},{expose:{get options(){return n.list},get selectedIndex(){return n.selectedIndex}},value:{get:()=>n.value,set:a=>n.value=a}}}}){}const J1="s-tab-item",Q1=le({selected:!1,$value:""}),ep=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0 16px;
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: inherit;
}
.indicator{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: var(--s-color-primary, #006782);
  border-radius: 1.5px 1.5px 0 0;
  opacity: 0;
}
:host([selected=true]) .indicator{
  opacity: 1;
}
.text{
  display: flex;
  align-items: center;
  line-height: 1;
}
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin: 10px 0;
}
::slotted([slot=text]){
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
}
.icon ::slotted([slot=text]){
  margin-top: -6px;
  height: 26px;
}
::slotted([slot=badge]){
  margin-left: 4px;
}
::slotted([slot=badge]:not(:empty)){
  width: auto;
}
.icon ::slotted([slot=badge]){
  position: absolute;
  right: 0;
  width: 8px;
  top: 12px;
  margin-left: 0;
}
`,tp=`
<div class="container" part="container">
  <slot name="icon"></slot>
  <div class="text" part="text">
    <slot name="text"></slot>
    <slot name="badge"></slot>
  </div>
  <div class="indicator" part="indicator"></div>
</div>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class xa extends X({style:ep,template:tp,props:Q1,setup(t){const s=t.querySelector(".container");return t.querySelector("[name=icon]").addEventListener("slotchange",o=>{const r=o.target.assignedElements().length;s.classList[r>0?"add":"remove"]("icon")}),this.addEventListener("click",()=>{!(this.parentNode instanceof bn)||this.selected||this.dispatchEvent(new Event(`${vn}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof bn&&this.dispatchEvent(new Event(`${vn}:update`,{bubbles:!0}))}}}}){}bn.define(vn);xa.define(J1);const sp="s-table",op=`
:host{
  display: inline-block;
  font-size: .875rem;
  overflow: auto;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
  border-radius: 4px;
  white-space: nowrap;
}
slot{
  display: table;
  border-collapse: collapse;
  min-width: 100%;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,np=`
<slot></slot>
`;class rp extends X({style:op,template:np}){}const ip="s-thead",ap=`
:host{
  display: table-header-group;
  font-weight: 600;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
  color: var(--s-color-on-surface-variant, #40484C);
}
`,lp="<slot></slot>";class cp extends X({style:ap,template:lp}){}const dp="s-tbody",up=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #191C1E);
}
::slotted(s-tr:not(:first-child)){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
`,pp="<slot></slot>";class fp extends X({style:up,template:pp}){}const hp="s-tr",xp=`
:host{
  display: table-row;
}
`,mp="<slot></slot>";class gp extends X({style:xp,template:mp}){}const vp="s-th",bp=`
:host{
  display: table-cell;
  padding: 12px 16px;
  text-transform: capitalize;
}
`,yp="<slot></slot>";class Ep extends X({style:bp,template:yp}){}const Cp="s-td",Ap=`
:host{
  display: table-cell;
  user-select: text;
  padding: 12px 16px;
}
`,Fp="<slot></slot>";class Dp extends X({style:Ap,template:Fp}){}rp.define(sp);cp.define(ip);fp.define(dp);gp.define(hp);Ep.define(vp);Dp.define(Cp);const Bp="s-text-field",wp=le({$label:"",$placeholder:"",disabled:!1,type:["text","number","password","multiline"],error:!1,$value:"",$maxLength:-1,readOnly:!1,multiLine:!1,countered:!1}),_p=`
:host{
  display: inline-grid;
  vertical-align: middle;
  font-size: .875rem;
  min-height: 48px;
  width: 280px;
  color: var(--s-color-on-surface, #191C1E);
  --text-field-border-radius: 4px;
  --text-field-border-color: var(--s-color-outline, #70787D);
  --text-field-padding: 16px;
  --text-field-padding-top: var(--text-field-padding);
  --text-field-padding-bottom: var(--text-field-padding);
  --text-field-padding-left: var(--text-field-padding);
  --text-field-padding-right: var(--text-field-padding);
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
:host([type=multiline]){
  line-height: 24px;
  --text-field-padding-top: 12px;
  --text-field-padding-bottom: 12px;
}
.field{
  display: block;
  min-height: inherit;
  font-size: inherit;
  --field-border-radius: var(--text-field-border-radius);
  --field-border-color: var(--text-field-border-color);
  --field-padding: var(--text-field-padding);
  --field-padding-top: var(--text-field-padding-top);
  --field-padding-bottom: var(--text-field-padding-bottom);
  --field-padding-left: var(--text-field-padding-left);
  --field-padding-right: var(--text-field-padding-right);
}
:host([error=true]) .field{
  --s-color-primary: var(--s-color-error, #BA1A1A);
  --field-border-color: var(--s-color-error, #BA1A1A);
  --field-border-width: 2px;
}
:host([type=multiline]) .label{
  height: fit-content;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
}
.view{
  flex-grow: 1;
  padding: 0;
  flex-direction: column;
  position: relative;
}
input,
textarea{
  border: none;
  height: 100%;
  width: 100%;
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
  display: block;
  -moz-appearance: textfield;
}
textarea{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  resize: none;
  scrollbar-width: none;
  display: none;
}
input::placeholder,
textarea::placeholder{
  color: var(--text-field-border-color);
}
input::selection,
textarea::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=multiline]) input,
.text>.counter{
  display: none;
}
textarea,
.shadow{
  line-height: inherit;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  box-sizing: border-box;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
  padding-left: var(--text-field-padding-left);
  padding-right: var(--text-field-padding-right);
}
:host([type=multiline]) :is(textarea, .shadow),
:host([countered=true]) .counter{
  display: block;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
input:is(::-ms-clear, ::-ms-reveal){
  display: none;
}
.shadow{
  pointer-events: none;
  display: none;
  opacity: 0;
  width: 100%;
  min-height: 100%;
}
.shadow::after{
  content: ' ';
}
.text{
  display: flex;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  font-size: .75rem;
  color: var(--text-field-border-color);
}
:host([error=true]) .text{
  color: var(--s-color-error, #BA1A1A);
}
.text>slot[name=text]{
  display: block;
  flex-grow: 1;
}
.text>.counter,
::slotted([slot=text]){
  margin-top: 8px;
}
.toggle{
  flex-direction: column;
}
.toggle,
.toggle>s-ripple{
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle svg{
  pointer-events: none;
}
.toggle>s-ripple{
  display: none;
}
.toggle>.up,
.toggle>.down{
  height: 16px;
  width: 24px;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: -4px;
}
.toggle>.visibility{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 4px 0 -4px;
}
.toggle>.visibility>svg{
  display: none;
}
:host([type=number]) .toggle>:is(.up, .down),
:host([type=password]) :is(.toggle>.visibility, .toggle:not(.show-password)>.visibility>.on, .toggle.show-password>.visibility>.off){
  display: flex;
}
svg,
::slotted(svg){
  fill: var(--s-color-on-surface-variant, #40484C);
  height: 24px;
  width: 24px;
  flex-shrink: 0;
}
::slotted(s-icon-button[slot=start]){
  margin-left: 4px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 4px);
}
::slotted(s-icon-button[slot=end]){
  margin-right: 4px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 4px);
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: 12px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 8px);
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-right: 12px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 8px);
}
`,$p=`
<s-field class="field" fixed="false">
  <div slot="label" class="label"></div>
  <div class="view">
    <div class="shadow"></div>
    <input type="text" part="input">
    <textarea part="textarea"></textarea>
  </div>
  <slot slot="start" name="start"></slot>
  <slot slot="end" name="end">
    <div class="toggle" part="toggle">
      <s-ripple class="up">
        <svg viewBox="0 -960 960 960">
          <path d="m280-400 200-200 200 200H280Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="down">
        <svg viewBox="0 -960 960 960">
          <path d="M480-360 280-560h400L480-360Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="visibility">
        <svg viewBox="0 -960 960 960" class="on">
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path>
        </svg>
        <svg viewBox="0 -960 960 960" class="off">
          <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"></path>
        </svg>
      </s-ripple>
    </div>
  </slot>
</s-field>
<div class="text" part="text">
  <slot name="text"></slot>
  <div class="counter" part="counter"></div>
</div>
`;class kp extends X({style:_p,template:$p,props:wp,setup(t){const s=t.querySelector(".field"),o=t.querySelector(".label"),n=t.querySelector(".shadow"),r=t.querySelector(".counter"),i=t.querySelector(".toggle"),a={input:t.querySelector("input"),textarea:t.querySelector("textarea")},c=()=>this.type==="multiline"?a.textarea:a.input,d=()=>{this.countered&&(r.textContent=`${c().value.length}/${this.maxLength}`)},l=()=>this.dispatchEvent(new Event("change")),u=()=>{s.fixed=!0,s.focused=!0},p=()=>{s.focused=!1,c().value===""&&!this.error&&(s.fixed=!1)};a.input.oninput=d,a.input.onfocus=u,a.input.onblur=p,a.input.onchange=l,a.textarea.onfocus=u,a.textarea.onblur=p,a.textarea.onchange=l,a.textarea.oninput=()=>{n.textContent=a.textarea.value,d()};const h=v=>{this.value=`${parseInt(this.value||"0")+v}`,this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))};return t.querySelector(".up").onclick=()=>h(1),t.querySelector(".down").onclick=()=>h(-1),t.querySelector(".visibility").onclick=()=>{a.input.type=i.classList.contains("show-password")?"password":"text",i.classList.toggle("show-password")},{expose:{get native(){return c()}},label:v=>o.textContent=v,type:(v,C)=>{a.input.type=v==="password"?i.classList.contains("show-password")?"text":"password":v,v==="multiline"&&(a.textarea.value=a.input.value,n.textContent=a.input.value),C==="multiline"&&(a.input.value=a.textarea.value)},error:v=>{if(v)return s.fixed=!0;c().value===""&&(s.fixed=!1)},value:{get:()=>c().value,set:v=>{a.input.value=v,a.textarea.value=v,n.textContent=v,d(),this.error||(s.fixed=v!=="")}},placeholder:v=>{a.input.placeholder=v,a.textarea.placeholder=v},readOnly:v=>{a.input.readOnly=v,a.textarea.readOnly=v},disabled:v=>{a.input.disabled=v,a.textarea.disabled=v},maxLength:v=>{a.input.maxLength=v,a.textarea.maxLength=v,d()},multiLine:v=>this.type=v?"multiline":"text",countered:d}}}){}kp.define(Bp);const Sp="s-tooltip",Tp=le({align:["top","bottom","left","right"],disabled:!1}),Mp=`
:host{
  display: inline-flex;
  vertical-align: middle;
  text-align: left;
}
.popup{
  position: fixed;
  display: none;
  inset: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  font-size: .875rem;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  filter: opacity(.88);
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
::slotted(img){
  display: block;
  border-radius: 4px;
  margin: 2px 0;
  max-width: 280px;
}
`,Lp=`
<slot name="trigger" part="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <slot></slot>
</div>
`;class Ip extends X({style:Mp,template:Lp,props:Tp,setup(t){const s=t.querySelector("slot[name=trigger]"),o=t.querySelector(".popup"),n=getComputedStyle(this);let r=!1;const i=()=>{const l=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:ot(u)}},a=()=>{if(!this.isConnected||this.disabled)return;if(o.style.display="block",r=!0,o.showPopover)o.showPopover();else{const B=fa(t);o.style.marginLeft=`${-B.left}px`,o.style.marginTop=`${-B.top}px`,o.style.zIndex="3"}const l=this.getBoundingClientRect(),u=4,p=o.offsetWidth,h=o.offsetHeight,v={top:0,left:0},C={middle(B){v.left=l.left-(p-l.width)/2;const x=()=>(v.top=l.top+l.height+u,v.top+h>innerHeight),f=()=>(v.top=l.top-h-u,v.top<0);v.left<0&&(v.left=l.left),v.left+p>innerWidth&&(v.left=l.left+l.width-p),B==="top"&&f()&&x(),B==="bottom"&&x()&&f()},left(){return v.left=l.left-p-u,v.top=l.top-(h-l.height)/2,v.left<0},right(){return v.left=l.left+l.width+u,v.top=l.top-(h-l.height)/2,v.left+p>innerWidth}};switch(this.align){case"bottom":case"top":C.middle(this.align);break;case"left":C.left()&&C.right();break;case"right":C.right()&&C.left();break}o.style.top=`${v.top}px`,o.style.left=`${v.left}px`,o.animate({opacity:[0,1]},i())};let c=0;const d=()=>{clearTimeout(c),r=!1,o.animate({opacity:[1,0]},i()).finished.then(()=>{r||(o.hidePopover&&o.hidePopover(),o.style.removeProperty("display"))})};s.addEventListener("touchstart",()=>{je.pointerFine.matches||(clearTimeout(c),c=setTimeout(()=>a(),600))},{passive:!0}),s.ontouchend=()=>{clearTimeout(c),d()},s.onmouseenter=()=>je.pointerFine.matches&&a(),s.onmouseleave=()=>je.pointerFine.matches&&d()}}){}Ip.define(Sp);const ns=typeof document<"u";function ma(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ma(e.default)}const he=Object.assign;function Uo(e,t){const s={};for(const o in t){const n=t[o];s[o]=nt(n)?n.map(e):e(n)}return s}const Ts=()=>{},nt=Array.isArray;function Dr(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}const ga=/#/g,Rp=/&/g,zp=/\//g,Pp=/=/g,Op=/\?/g,va=/\+/g,Np=/%5B/g,Hp=/%5D/g,ba=/%5E/g,Vp=/%60/g,ya=/%7B/g,jp=/%7C/g,Ea=/%7D/g,Up=/%20/g;function Vn(e){return e==null?"":encodeURI(""+e).replace(jp,"|").replace(Np,"[").replace(Hp,"]")}function Wp(e){return Vn(e).replace(ya,"{").replace(Ea,"}").replace(ba,"^")}function yn(e){return Vn(e).replace(va,"%2B").replace(Up,"+").replace(ga,"%23").replace(Rp,"%26").replace(Vp,"`").replace(ya,"{").replace(Ea,"}").replace(ba,"^")}function Kp(e){return yn(e).replace(Pp,"%3D")}function Zp(e){return Vn(e).replace(ga,"%23").replace(Op,"%3F")}function Gp(e){return Zp(e).replace(zp,"%2F")}function zs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Yp=/\/$/,Xp=e=>e.replace(Yp,"");function Wo(e,t,s="/"){let o,n={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(o=t.slice(0,c),r=t.slice(c,a>0?a:t.length),n=e(r.slice(1))),a>=0&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=tf(o??t,s),{fullPath:o+r+i,path:o,query:n,hash:zs(i)}}function Jp(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Br(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qp(e,t,s){const o=t.matched.length-1,n=s.matched.length-1;return o>-1&&o===n&&hs(t.matched[o],s.matched[n])&&Ca(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function hs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ca(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!ef(e[s],t[s]))return!1;return!0}function ef(e,t){return nt(e)?wr(e,t):nt(t)?wr(t,e):e===t}function wr(e,t){return nt(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function tf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),o=e.split("/"),n=o[o.length-1];(n===".."||n===".")&&o.push("");let r=s.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let En=(function(e){return e.pop="pop",e.push="push",e})({}),Ko=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function sf(e){if(!e)if(ns){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xp(e)}const of=/^[^#]+#/;function nf(e,t){return e.replace(of,"#")+t}function rf(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const To=()=>({left:window.scrollX,top:window.scrollY});function af(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;t=rf(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function _r(e,t){return(history.state?history.state.position-t:-1)+e}const Cn=new Map;function lf(e,t){Cn.set(e,t)}function cf(e){const t=Cn.get(e);return Cn.delete(e),t}function df(e){return typeof e=="string"||e&&typeof e=="object"}function Aa(e){return typeof e=="string"||typeof e=="symbol"}let Ce=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Fa=Symbol("");Ce.MATCHER_NOT_FOUND+"",Ce.NAVIGATION_GUARD_REDIRECT+"",Ce.NAVIGATION_ABORTED+"",Ce.NAVIGATION_CANCELLED+"",Ce.NAVIGATION_DUPLICATED+"";function xs(e,t){return he(new Error,{type:e,[Fa]:!0},t)}function gt(e,t){return e instanceof Error&&Fa in e&&(t==null||!!(e.type&t))}const uf=["params","query","hash"];function pf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of uf)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function ff(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const n=s[o].replace(va," "),r=n.indexOf("="),i=zs(r<0?n:n.slice(0,r)),a=r<0?null:zs(n.slice(r+1));if(i in t){let c=t[i];nt(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function $r(e){let t="";for(let s in e){const o=e[s];if(s=Kp(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(nt(o)?o.map(n=>n&&yn(n)):[o&&yn(o)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+s,n!=null&&(t+="="+n))})}return t}function hf(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=nt(o)?o.map(n=>n==null?null:""+n):o==null?o:""+o)}return t}const xf=Symbol(""),kr=Symbol(""),Mo=Symbol(""),jn=Symbol(""),An=Symbol("");function Es(){let e=[];function t(o){return e.push(o),()=>{const n=e.indexOf(o);n>-1&&e.splice(n,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Tt(e,t,s,o,n,r=i=>i()){const i=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise((a,c)=>{const d=p=>{p===!1?c(xs(Ce.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?c(p):df(p)?c(xs(Ce.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&o.enterCallbacks[n]===i&&typeof p=="function"&&i.push(p),a())},l=r(()=>e.call(o&&o.instances[n],t,s,d));let u=Promise.resolve(l);e.length<3&&(u=u.then(d)),u.catch(p=>c(p))})}function Zo(e,t,s,o,n=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(ma(c)){const d=(c.__vccOpts||c)[t];d&&r.push(Tt(d,s,o,i,a,n))}else{let d=c();r.push(()=>d.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const u=qp(l)?l.default:l;i.mods[a]=l,i.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Tt(p,s,o,i,a,n)()}))}}return r}function mf(e,t){const s=[],o=[],n=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(d=>hs(d,a))?o.push(a):s.push(a));const c=e.matched[i];c&&(t.matched.find(d=>hs(d,c))||n.push(c))}return[s,o,n]}let gf=()=>location.protocol+"//"+location.host;function Da(e,t){const{pathname:s,search:o,hash:n}=t,r=e.indexOf("#");if(r>-1){let i=n.includes(e.slice(r))?e.slice(r).length:1,a=n.slice(i);return a[0]!=="/"&&(a="/"+a),Br(a,"")}return Br(s,e)+o+n}function vf(e,t,s,o){let n=[],r=[],i=null;const a=({state:p})=>{const h=Da(e,location),v=s.value,C=t.value;let B=0;if(p){if(s.value=h,t.value=p,i&&i===v){i=null;return}B=C?p.position-C.position:0}else o(h);n.forEach(x=>{x(s.value,v,{delta:B,type:En.pop,direction:B?B>0?Ko.forward:Ko.back:Ko.unknown})})};function c(){i=s.value}function d(p){n.push(p);const h=()=>{const v=n.indexOf(p);v>-1&&n.splice(v,1)};return r.push(h),h}function l(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(he({},p.state,{scroll:To()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:d,destroy:u}}function Sr(e,t,s,o=!1,n=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:n?To():null}}function bf(e){const{history:t,location:s}=window,o={value:Da(e,s)},n={value:t.state};n.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,d,l){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+c:gf()+e+c;try{t[l?"replaceState":"pushState"](d,"",p),n.value=d}catch(h){console.error(h),s[l?"replace":"assign"](p)}}function i(c,d){r(c,he({},t.state,Sr(n.value.back,c,n.value.forward,!0),d,{position:n.value.position}),!0),o.value=c}function a(c,d){const l=he({},n.value,t.state,{forward:c,scroll:To()});r(l.current,l,!0),r(c,he({},Sr(o.value,c,null),{position:l.position+1},d),!1),o.value=c}return{location:o,state:n,push:a,replace:i}}function yf(e){e=sf(e);const t=bf(e),s=vf(e,t.state,t.location,t.replace);function o(r,i=!0){i||s.pauseListeners(),history.go(r)}const n=he({location:"",base:e,go:o,createHref:nf.bind(null,e)},t,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function Ef(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yf(e)}let jt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var De=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(De||{});const Cf={type:jt.Static,value:""},Af=/[a-zA-Z0-9_]/;function Ff(e){if(!e)return[[]];if(e==="/")return[[Cf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${s})/"${d}": ${h}`)}let s=De.Static,o=s;const n=[];let r;function i(){r&&n.push(r),r=[]}let a=0,c,d="",l="";function u(){d&&(s===De.Static?r.push({type:jt.Static,value:d}):s===De.Param||s===De.ParamRegExp||s===De.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:jt.Param,value:d,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&s!==De.ParamRegExp){o=s,s=De.EscapeNext;continue}switch(s){case De.Static:c==="/"?(d&&u(),i()):c===":"?(u(),s=De.Param):p();break;case De.EscapeNext:p(),s=o;break;case De.Param:c==="("?s=De.ParamRegExp:Af.test(c)?p():(u(),s=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case De.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:s=De.ParamRegExpEnd:l+=c;break;case De.ParamRegExpEnd:u(),s=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return s===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${d}"`),u(),i(),n}const Tr="[^/]+?",Df={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const Bf=/[.+*?^${}()[\]/\\]/g;function wf(e,t){const s=he({},Df,t),o=[];let n=s.start?"^":"";const r=[];for(const d of e){const l=d.length?[]:[Ie.Root];s.strict&&!d.length&&(n+="/");for(let u=0;u<d.length;u++){const p=d[u];let h=Ie.Segment+(s.sensitive?Ie.BonusCaseSensitive:0);if(p.type===jt.Static)u||(n+="/"),n+=p.value.replace(Bf,"\\$&"),h+=Ie.Static;else if(p.type===jt.Param){const{value:v,repeatable:C,optional:B,regexp:x}=p;r.push({name:v,repeatable:C,optional:B});const f=x||Tr;if(f!==Tr){h+=Ie.BonusCustomRegExp;try{`${f}`}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${f}): `+w.message)}}let A=C?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;u||(A=B&&d.length<2?`(?:/${A})`:"/"+A),B&&(A+="?"),n+=A,h+=Ie.Dynamic,B&&(h+=Ie.BonusOptional),C&&(h+=Ie.BonusRepeatable),f===".*"&&(h+=Ie.BonusWildcard)}l.push(h)}o.push(l)}if(s.strict&&s.end){const d=o.length-1;o[d][o[d].length-1]+=Ie.BonusStrict}s.strict||(n+="/?"),s.end?n+="$":s.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const i=new RegExp(n,s.sensitive?"":"i");function a(d){const l=d.match(i),u={};if(!l)return null;for(let p=1;p<l.length;p++){const h=l[p]||"",v=r[p-1];u[v.name]=h&&v.repeatable?h.split("/"):h}return u}function c(d){let l="",u=!1;for(const p of e){(!u||!l.endsWith("/"))&&(l+="/"),u=!1;for(const h of p)if(h.type===jt.Static)l+=h.value;else if(h.type===jt.Param){const{value:v,repeatable:C,optional:B}=h,x=v in d?d[v]:"";if(nt(x)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const f=nt(x)?x.join("/"):x;if(!f)if(B)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);l+=f}}return l||"/"}return{re:i,score:o,keys:r,parse:a,stringify:c}}function _f(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function Ba(e,t){let s=0;const o=e.score,n=t.score;for(;s<o.length&&s<n.length;){const r=_f(o[s],n[s]);if(r)return r;s++}if(Math.abs(n.length-o.length)===1){if(Mr(o))return 1;if(Mr(n))return-1}return n.length-o.length}function Mr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $f={strict:!1,end:!0,sensitive:!1};function kf(e,t,s){const o=wf(Ff(e.path),s),n=he(o,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function Sf(e,t){const s=[],o=new Map;t=Dr($f,t);function n(u){return o.get(u)}function r(u,p,h){const v=!h,C=Ir(u);C.aliasOf=h&&h.record;const B=Dr(t,u),x=[C];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of w)x.push(Ir(he({},C,{components:h?h.record.components:C.components,path:P,aliasOf:h?h.record:C})))}let f,A;for(const w of x){const{path:P}=w;if(p&&P[0]!=="/"){const R=p.record.path,z=R[R.length-1]==="/"?"":"/";w.path=p.record.path+(P&&z+P)}if(f=kf(w,p,B),h?h.alias.push(f):(A=A||f,A!==f&&A.alias.push(f),v&&u.name&&!qr(f)&&i(u.name)),wa(f)&&c(f),C.children){const R=C.children;for(let z=0;z<R.length;z++)r(R[z],f,h&&h.children[z])}h=h||f}return A?()=>{i(A)}:Ts}function i(u){if(Aa(u)){const p=o.get(u);p&&(o.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&o.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return s}function c(u){const p=Lf(u,s);s.splice(p,0,u),u.record.name&&!qr(u)&&o.set(u.record.name,u)}function d(u,p){let h,v={},C,B;if("name"in u&&u.name){if(h=o.get(u.name),!h)throw xs(Ce.MATCHER_NOT_FOUND,{location:u});B=h.record.name,v=he(Lr(p.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),u.params&&Lr(u.params,h.keys.map(A=>A.name))),C=h.stringify(v)}else if(u.path!=null)C=u.path,h=s.find(A=>A.re.test(C)),h&&(v=h.parse(C),B=h.record.name);else{if(h=p.name?o.get(p.name):s.find(A=>A.re.test(p.path)),!h)throw xs(Ce.MATCHER_NOT_FOUND,{location:u,currentLocation:p});B=h.record.name,v=he({},p.params,u.params),C=h.stringify(v)}const x=[];let f=h;for(;f;)x.unshift(f.record),f=f.parent;return{name:B,path:C,params:v,matched:x,meta:Mf(x)}}e.forEach(u=>r(u));function l(){s.length=0,o.clear()}return{addRoute:r,resolve:d,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:n}}function Lr(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function Ir(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Tf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Tf(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="object"?s[o]:s;return t}function qr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mf(e){return e.reduce((t,s)=>he(t,s.meta),{})}function Lf(e,t){let s=0,o=t.length;for(;s!==o;){const r=s+o>>1;Ba(e,t[r])<0?o=r:s=r+1}const n=If(e);return n&&(o=t.lastIndexOf(n,o-1)),o}function If(e){let t=e;for(;t=t.parent;)if(wa(t)&&Ba(e,t)===0)return t}function wa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Rr(e){const t=et(Mo),s=et(jn),o=Be(()=>{const c=Je(e.to);return t.resolve(c)}),n=Be(()=>{const{matched:c}=o.value,{length:d}=c,l=c[d-1],u=s.matched;if(!l||!u.length)return-1;const p=u.findIndex(hs.bind(null,l));if(p>-1)return p;const h=zr(c[d-2]);return d>1&&zr(l)===h&&u[u.length-1].path!==h?u.findIndex(hs.bind(null,c[d-2])):p}),r=Be(()=>n.value>-1&&Of(s.params,o.value.params)),i=Be(()=>n.value>-1&&n.value===s.matched.length-1&&Ca(s.params,o.value.params));function a(c={}){if(Pf(c)){const d=t[Je(e.replace)?"replace":"push"](Je(e.to)).catch(Ts);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:o,href:Be(()=>o.value.href),isActive:r,isExactActive:i,navigate:a}}function qf(e){return e.length===1?e[0]:e}const Rf=Fi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rr,setup(e,{slots:t}){const s=Ns(Rr(e)),{options:o}=et(Mo),n=Be(()=>({[Pr(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Pr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&qf(t.default(s));return e.custom?r:ta("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},r)}}}),zf=Rf;function Pf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Of(e,t){for(const s in t){const o=t[s],n=e[s];if(typeof o=="string"){if(o!==n)return!1}else if(!nt(n)||n.length!==o.length||o.some((r,i)=>r!==n[i]))return!1}return!0}function zr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pr=(e,t,s)=>e??t??s,Nf=Fi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const o=et(An),n=Be(()=>e.route||o.value),r=et(kr,0),i=Be(()=>{let d=Je(r);const{matched:l}=n.value;let u;for(;(u=l[d])&&!u.components;)d++;return d}),a=Be(()=>n.value.matched[i.value]);Ys(kr,Be(()=>i.value+1)),Ys(xf,a),Ys(An,n);const c=se();return qt(()=>[c.value,a.value,e.name],([d,l,u],[p,h,v])=>{l&&(l.instances[u]=d,h&&h!==l&&d&&d===p&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),d&&l&&(!h||!hs(l,h)||!p)&&(l.enterCallbacks[u]||[]).forEach(C=>C(d))},{flush:"post"}),()=>{const d=n.value,l=e.name,u=a.value,p=u&&u.components[l];if(!p)return Or(s.default,{Component:p,route:d});const h=u.props[l],v=h?h===!0?d.params:typeof h=="function"?h(d):h:null,B=ta(p,he({},v,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[l]=null)},ref:c}));return Or(s.default,{Component:B,route:d})||B}}});function Or(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const _a=Nf;function Hf(e){const t=Sf(e.routes,e),s=e.parseQuery||ff,o=e.stringifyQuery||$r,n=e.history,r=Es(),i=Es(),a=Es(),c=pl(_t);let d=_t;ns&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Uo.bind(null,T=>""+T),u=Uo.bind(null,Gp),p=Uo.bind(null,zs);function h(T,G){let W,ee;return Aa(T)?(W=t.getRecordMatcher(T),ee=G):ee=T,t.addRoute(ee,W)}function v(T){const G=t.getRecordMatcher(T);G&&t.removeRoute(G)}function C(){return t.getRoutes().map(T=>T.record)}function B(T){return!!t.getRecordMatcher(T)}function x(T,G){if(G=he({},G||c.value),typeof T=="string"){const _=Wo(s,T,G.path),S=t.resolve({path:_.path},G),L=n.createHref(_.fullPath);return he(_,S,{params:p(S.params),hash:zs(_.hash),redirectedFrom:void 0,href:L})}let W;if(T.path!=null)W=he({},T,{path:Wo(s,T.path,G.path).path});else{const _=he({},T.params);for(const S in _)_[S]==null&&delete _[S];W=he({},T,{params:u(_)}),G.params=u(G.params)}const ee=t.resolve(W,G),de=T.hash||"";ee.params=l(p(ee.params));const b=Jp(o,he({},T,{hash:Wp(de),path:ee.path})),E=n.createHref(b);return he({fullPath:b,hash:de,query:o===$r?hf(T.query):T.query||{}},ee,{redirectedFrom:void 0,href:E})}function f(T){return typeof T=="string"?Wo(s,T,c.value.path):he({},T)}function A(T,G){if(d!==T)return xs(Ce.NAVIGATION_CANCELLED,{from:G,to:T})}function w(T){return z(T)}function P(T){return w(he(f(T),{replace:!0}))}function R(T,G){const W=T.matched[T.matched.length-1];if(W&&W.redirect){const{redirect:ee}=W;let de=typeof ee=="function"?ee(T,G):ee;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=f(de):{path:de},de.params={}),he({query:T.query,hash:T.hash,params:de.path!=null?{}:T.params},de)}}function z(T,G){const W=d=x(T),ee=c.value,de=T.state,b=T.force,E=T.replace===!0,_=R(W,ee);if(_)return z(he(f(_),{state:typeof _=="object"?he({},de,_.state):de,force:b,replace:E}),G||W);const S=W;S.redirectedFrom=G;let L;return!b&&Qp(o,ee,W)&&(L=xs(Ce.NAVIGATION_DUPLICATED,{to:S,from:ee}),rt(ee,ee,!0,!1)),(L?Promise.resolve(L):y(S,ee)).catch(k=>gt(k)?gt(k,Ce.NAVIGATION_GUARD_REDIRECT)?k:wt(k):fe(k,S,ee)).then(k=>{if(k){if(gt(k,Ce.NAVIGATION_GUARD_REDIRECT))return z(he({replace:E},f(k.to),{state:typeof k.to=="object"?he({},de,k.to.state):de,force:b}),G||S)}else k=D(S,ee,!0,E,de);return F(S,ee,k),k})}function q(T,G){const W=A(T,G);return W?Promise.reject(W):Promise.resolve()}function g(T){const G=Jt.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(T):T()}function y(T,G){let W;const[ee,de,b]=mf(T,G);W=Zo(ee.reverse(),"beforeRouteLeave",T,G);for(const _ of ee)_.leaveGuards.forEach(S=>{W.push(Tt(S,T,G))});const E=q.bind(null,T,G);return W.push(E),Ke(W).then(()=>{W=[];for(const _ of r.list())W.push(Tt(_,T,G));return W.push(E),Ke(W)}).then(()=>{W=Zo(de,"beforeRouteUpdate",T,G);for(const _ of de)_.updateGuards.forEach(S=>{W.push(Tt(S,T,G))});return W.push(E),Ke(W)}).then(()=>{W=[];for(const _ of b)if(_.beforeEnter)if(nt(_.beforeEnter))for(const S of _.beforeEnter)W.push(Tt(S,T,G));else W.push(Tt(_.beforeEnter,T,G));return W.push(E),Ke(W)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),W=Zo(b,"beforeRouteEnter",T,G,g),W.push(E),Ke(W))).then(()=>{W=[];for(const _ of i.list())W.push(Tt(_,T,G));return W.push(E),Ke(W)}).catch(_=>gt(_,Ce.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function F(T,G,W){a.list().forEach(ee=>g(()=>ee(T,G,W)))}function D(T,G,W,ee,de){const b=A(T,G);if(b)return b;const E=G===_t,_=ns?history.state:{};W&&(ee||E?n.replace(T.fullPath,he({scroll:E&&_&&_.scroll},de)):n.push(T.fullPath,de)),c.value=T,rt(T,G,W,E),wt()}let K;function J(){K||(K=n.listen((T,G,W)=>{if(!Rt.listening)return;const ee=x(T),de=R(ee,Rt.currentRoute.value);if(de){z(he(de,{replace:!0,force:!0}),ee).catch(Ts);return}d=ee;const b=c.value;ns&&lf(_r(b.fullPath,W.delta),To()),y(ee,b).catch(E=>gt(E,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_CANCELLED)?E:gt(E,Ce.NAVIGATION_GUARD_REDIRECT)?(z(he(f(E.to),{force:!0}),ee).then(_=>{gt(_,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_DUPLICATED)&&!W.delta&&W.type===En.pop&&n.go(-1,!1)}).catch(Ts),Promise.reject()):(W.delta&&n.go(-W.delta,!1),fe(E,ee,b))).then(E=>{E=E||D(ee,b,!1),E&&(W.delta&&!gt(E,Ce.NAVIGATION_CANCELLED)?n.go(-W.delta,!1):W.type===En.pop&&gt(E,Ce.NAVIGATION_ABORTED|Ce.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),F(ee,b,E)}).catch(Ts)}))}let O=Es(),Y=Es(),ie;function fe(T,G,W){wt(T);const ee=Y.list();return ee.length?ee.forEach(de=>de(T,G,W)):console.error(T),Promise.reject(T)}function We(){return ie&&c.value!==_t?Promise.resolve():new Promise((T,G)=>{O.add([T,G])})}function wt(T){return ie||(ie=!T,J(),O.list().forEach(([G,W])=>T?W(T):G()),O.reset()),T}function rt(T,G,W,ee){const{scrollBehavior:de}=e;if(!ns||!de)return Promise.resolve();const b=!W&&cf(_r(T.fullPath,0))||(ee||!W)&&history.state&&history.state.scroll||null;return Fo().then(()=>de(T,G,b)).then(E=>E&&af(E)).catch(E=>fe(E,T,G))}const ze=T=>n.go(T);let Xt;const Jt=new Set,Rt={currentRoute:c,listening:!0,addRoute:h,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:C,resolve:x,options:e,push:w,replace:P,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:Y.add,isReady:We,install(T){T.component("RouterLink",zf),T.component("RouterView",_a),T.config.globalProperties.$router=Rt,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(c)}),ns&&!Xt&&c.value===_t&&(Xt=!0,w(n.location).catch(ee=>{}));const G={};for(const ee in _t)Object.defineProperty(G,ee,{get:()=>c.value[ee],enumerable:!0});T.provide(Mo,Rt),T.provide(jn,xi(G)),T.provide(An,c);const W=T.unmount;Jt.add(T),T.unmount=function(){Jt.delete(T),Jt.size<1&&(d=_t,K&&K(),K=null,c.value=_t,Xt=!1,ie=!1),W()}}};function Ke(T){return T.reduce((G,W)=>G.then(()=>g(W)),Promise.resolve())}return Rt}function Yt(){return et(Mo)}function gs(e){return et(jn)}const Nr="material-symbols-style",Q={__name:"MaterialSymbol",props:{icon:{type:String,required:!0},family:{type:String,default:"rounded",validator:e=>["outlined","rounded","sharp"].includes(e)},fill:{type:Boolean,default:!1},weight:{type:Number,default:400},grade:{type:Number,default:0},size:{type:[Number,String],default:24},color:{type:String,default:void 0},alignText:{type:Boolean,default:!1}},setup(e){if(typeof document<"u"&&!document.getElementById(Nr)){const o=document.createElement("style");o.id=Nr,o.innerHTML=`
    @import "https://fonts.googleapis.cn/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    @import "https://fonts.googleapis.cn/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    @import "https://fonts.googleapis.cn/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    
    .material-symbols {
      line-height: 1;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      user-select: none;
    }
  `,document.head.appendChild(o)}const t=e,s=Be(()=>({fontFamily:`"${`Material Symbols ${t.family.charAt(0).toUpperCase()+t.family.slice(1)}`}"`,fontWeight:"normal",fontStyle:"normal",fontSize:typeof t.size=="number"?`${t.size}px`:t.size,color:t.color,position:t.alignText?"relative":void 0,top:t.alignText?"0.125em":void 0,fontVariationSettings:`'FILL' ${t.fill?1:0}, 'wght' ${t.weight}, 'GRAD' ${t.grade}, 'opsz' ${t.size}`}));return(o,n)=>($(),M("span",{class:"material-symbols",style:ut(s.value)},j(e.icon),5))}},Re=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s},Vf={key:0},jf={style:{width:"100%","max-width":"none",margin:"0",height:"100%",border:"none"}},Uf=["checked","onClick"],Wf={key:1,mode:"rail",style:{height:"100%",border:"none","background-color":"transparent"}},Kf=["selected","onClick"],Zf={slot:"text"},Gf={slot:"end",class:"rail-footer"},Yf={__name:"AdaptiveNavigation",props:{onLogout:{type:Function,default:()=>{}},onMoreClick:{type:Function,default:()=>{}}},setup(e){const t=e,s=Yt(),o=gs(),n=se(!1),r=()=>{typeof window<"u"&&(n.value=window.innerWidth<768)};xt(()=>{r(),window.addEventListener("resize",r)}),ms(()=>{window.removeEventListener("resize",r)});const i=[{id:"home",label:"主页",icon:"home",path:"/"},{id:"following",label:"关注",icon:"group",path:"/following"},{id:"collections",label:"收藏",icon:"bookmark",path:"/collections"},{id:"daily",label:"日报",icon:"newspaper",path:"/daily"},{id:"history",label:"历史",icon:"history",path:"/history"},{id:"settings",label:"设置",icon:"settings",path:"/settings"}],a=l=>{if(s.push(l),n.value){const u=document.querySelector("s-drawer");u&&(u.showed=!1)}},c=()=>{if(t.onMoreClick(),n.value){const l=document.querySelector("s-drawer");l&&(l.showed=!1)}},d=l=>!!(l==="/"&&o.path==="/"||l!=="/"&&o.path.startsWith(l));return(l,u)=>n.value?($(),M("s-scroll-view",Vf,[m("s-menu",jf,[($(),M(pe,null,we(i,p=>m("s-menu-item",{key:p.id,checked:d(p.path),onClick:h=>a(p.path)},[N(Q,{slot:"start",icon:p.icon},null,8,["icon"]),Fe(" "+j(p.label),1)],8,Uf)),64)),u[5]||(u[5]=m("s-divider",null,null,-1)),m("s-menu-item",{onClick:c},[N(Q,{slot:"start",icon:"menu"}),u[3]||(u[3]=Fe(" 更多 ",-1))]),m("s-menu-item",{onClick:u[0]||(u[0]=(...p)=>e.onLogout&&e.onLogout(...p))},[N(Q,{slot:"start",icon:"logout"}),u[4]||(u[4]=Fe(" 退出登录 ",-1))])])])):($(),M("s-navigation",Wf,[u[6]||(u[6]=m("s-avatar",{class:"logo-box"},"Z",-1)),($(),M(pe,null,we(i,p=>m("s-navigation-item",{key:p.id,selected:d(p.path),onClick:h=>a(p.path)},[N(Q,{slot:"icon",icon:p.icon,fill:d(p.path)},null,8,["icon","fill"]),m("div",Zf,j(p.label),1)],8,Kf)),64)),m("div",Gf,[m("s-icon-button",{onClick:u[1]||(u[1]=(...p)=>e.onMoreClick&&e.onMoreClick(...p)),type:"standard"},[N(Q,{icon:"menu"})]),m("s-icon-button",{type:"outlined",onClick:u[2]||(u[2]=(...p)=>e.onLogout&&e.onLogout(...p))},[N(Q,{icon:"logout"})])])]))}},Xf=Re(Yf,[["__scopeId","data-v-5948f065"]]),Jf=["showed"],Qf={class:"dialog-content"},e2=["value"],t2=["value"],s2=["disabled"],o2={key:0,indeterminate:"true",slot:"start",style:{width:"20px",height:"20px","margin-right":"8px"}},n2={__name:"LoginDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","login-success"],setup(e,{emit:t}){const s=t,o=se(!1),n=se("13344556677"),r=se("123456789"),i=()=>{s("update:modelValue",!1)},a=async()=>{o.value=!0;try{const c=await window.$zhihu.get("https://api.zhihu.com/me"),d=c.data||c;s("login-success",d),i()}catch(c){console.error("Login/Fetch failed",c)}finally{o.value=!1}};return(c,d)=>($(),M("s-dialog",{showed:e.modelValue,onClose:i},[d[3]||(d[3]=m("s-button",{slot:"trigger",style:{display:"none"}},"登录",-1)),d[4]||(d[4]=m("div",{slot:"headline"},"登录",-1)),m("div",Qf,[m("s-text-field",{class:"text-field",label:"请输入手机号",value:n.value,onInput:d[0]||(d[0]=l=>n.value=l.target.value)},null,40,e2),m("s-text-field",{class:"text-field",style:{"margin-top":"8px"},label:"请输入密码",value:r.value,onInput:d[1]||(d[1]=l=>r.value=l.target.value)},null,40,t2),m("s-button",{id:"submit",style:{"border-radius":"4px","box-shadow":"none"},onClick:a,disabled:o.value},[o.value?($(),M("s-circular-progress",o2)):ce("",!0),d[2]||(d[2]=Fe(" 登 录 ",-1))],8,s2)])],40,Jf))}},r2=Re(n2,[["__scopeId","data-v-87cbefef"]]),i2={style:{width:"100%","z-index":"0"}},a2={slot:"action",class:"action-container"},l2={class:"desktop-only"},c2={class:"tablet-only"},d2=["src"],u2={__name:"TopBar",setup(e){const t=Yt(),s=se(!1),o=se(null),n=()=>{const c=document.querySelector("s-drawer");c&&typeof c.toggle=="function"&&c.toggle()},r=()=>{t.push("/search")},i=()=>{s.value=!0},a=c=>{o.value=c};return(c,d)=>($(),M(pe,null,[m("s-appbar",i2,[m("s-icon-button",{slot:"navigation",onClick:n},[N(Q,{icon:"menu"})]),d[1]||(d[1]=m("div",{slot:"headline",class:"headline"}," Zyphron ",-1)),m("s-search",{slot:"search",placeholder:"搜索关键字...",readonly:"",onClick:r,style:{cursor:"pointer"}}),m("div",a2,[m("s-icon-button",l2,[N(Q,{icon:"notifications"})]),m("s-icon-button",c2,[N(Q,{icon:"chat_bubble"})]),m("s-avatar",{src:o.value?.avatar_url||"https://picsum.photos/id/64/200/200",class:"avatar",onClick:i},null,8,d2)])]),N(r2,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=l=>s.value=l),onLoginSuccess:a},null,8,["modelValue"])],64))}},p2=Re(u2,[["__scopeId","data-v-739da963"]]),f2={key:0,class:"more-menu"},h2={__name:"MoreMenuDialog",props:["isOpen","onClose"],setup(e){return(t,s)=>e.isOpen?($(),M("div",f2,"More Menu")):ce("",!0)}},x2={theme:"auto",class:"app-page"},m2={class:"app-drawer"},g2={class:"main-content"},v2={key:0},b2={class:"view-container"},y2={__name:"App",setup(e){const t=Yt(),s=gs(),o=se(!1),n=se(!1),r=()=>{typeof window<"u"&&(n.value=window.innerWidth<768)};xt(()=>{r(),window.addEventListener("resize",r)}),ms(()=>{window.removeEventListener("resize",r)});const i=()=>{window.confirm("确定要退出登录吗？")&&t.push("/")},a=()=>{o.value=!1},c=Be(()=>{const d=s.path;return d.startsWith("/article/")||d.startsWith("/question/")||d.startsWith("/user/")||d.startsWith("/topic/")||d==="/search"});return(d,l)=>($(),M("s-page",x2,[m("s-drawer",m2,[m("div",{slot:"start",style:ut({width:n.value?"280px":"auto"})},[N(Xf,{onLogout:i,onMoreClick:()=>o.value=!0},null,8,["onMoreClick"])],4),m("div",g2,[c.value?ce("",!0):($(),M("div",v2,[N(p2)])),m("div",b2,[N(Je(_a),null,{default:It(({Component:u,route:p})=>[($(),tt(Bl,null,[p.meta.keepAlive?($(),tt(tn(u),{key:p.path})):ce("",!0)],1024)),p.meta.keepAlive?ce("",!0):($(),tt(tn(u),{key:p.path}))]),_:1})])])]),N(h2,{isOpen:o.value,onClose:a},null,8,["isOpen"])]))}},E2=Re(y2,[["__scopeId","data-v-4b83bbc9"]]),C2="modulepreload",A2=function(e){return"/"+e},Hr={},Ot=function(t,s,o){let n=Promise.resolve();if(s&&s.length>0){let c=function(d){return Promise.all(d.map(l=>Promise.resolve(l).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");n=c(s.map(d=>{if(d=A2(d),d in Hr)return;Hr[d]=!0;const l=d.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":C2,l||(p.as="script"),p.crossOrigin="",p.href=d,a&&p.setAttribute("nonce",a),document.head.appendChild(p),l)return new Promise((h,v)=>{p.addEventListener("load",h),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return n.then(i=>{for(const a of i||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},F2={key:0},D2=["href"],B2={key:2,class:"styled-bold"},w2={key:3,class:"styled-italic"},_2={key:4,class:"styled-highlight"},$2={__name:"RenderStyledText",props:{text:{type:String,required:!0},marks:{type:Array,default:()=>[]}},setup(e){const t=e,s=Be(()=>{if(!t.marks||t.marks.length===0)return[{type:"text",content:t.text}];const o=[...t.marks].sort((i,a)=>i.start_index-a.start_index),n=[];let r=0;return o.forEach(i=>{i.start_index>r&&n.push({type:"text",content:t.text.substring(r,i.start_index)});const a=t.text.substring(i.start_index,i.end_index);n.push({type:"mark",markType:i.type,content:a,link:i.link}),r=i.end_index}),r<t.text.length&&n.push({type:"text",content:t.text.substring(r)}),n});return(o,n)=>($(),M("span",null,[($(!0),M(pe,null,we(s.value,(r,i)=>($(),M(pe,{key:i},[r.type==="text"?($(),M("span",F2,j(r.content),1)):r.markType==="link"&&r.link?($(),M("a",{key:1,href:r.link.href,target:"_blank",class:"styled-link",onClick:n[0]||(n[0]=Kc(()=>{},["stop"]))},j(r.content),9,D2)):r.markType==="bold"?($(),M("strong",B2,j(r.content),1)):r.markType==="italic"?($(),M("em",w2,j(r.content),1)):($(),M("span",_2,j(r.content),1))],64))),128))]))}},Go=Re($2,[["__scopeId","data-v-2b03d9cd"]]),k2={class:"content-renderer"},S2={key:0,class:"paragraph"},T2=["id"],M2={key:2,class:"blockquote-wrapper"},L2={class:"quote-icon"},I2={class:"blockquote"},q2={key:3,class:"code-block"},R2={class:"code-content"},z2={key:5,class:"image-figure"},P2=["src","alt"],O2={key:0,class:"image-caption"},N2=["href"],H2={class:"card-content"},V2={class:"card-title"},j2={class:"card-desc"},U2={class:"card-meta"},W2=["src"],K2={key:7,class:"video-container"},Z2=["src","poster"],G2={key:8,class:"app-tip"},Y2={class:"tip-icon"},X2={key:9,class:"hr-divider"},J2={__name:"ContentRenderer",props:{segments:{type:Array,default:()=>[]}},setup(e){const t=s=>{if(!s.card)return{};try{const o=s.card.extra_info?JSON.parse(s.card.extra_info):{};return{title:s.card.title,desc:o.desc||o.description||"",url:o.url||"#",cover:s.card.cover}}catch{return{title:s.card.title,desc:"",url:"#"}}};return(s,o)=>($(),M("div",k2,[($(!0),M(pe,null,we(e.segments,(n,r)=>($(),M(pe,{key:r},[n.type==="paragraph"?($(),M("p",S2,[N(Go,{text:n.paragraph.text,marks:n.paragraph.marks},null,8,["text","marks"])])):n.type==="heading"?($(),M("h3",{key:1,id:`heading-${r}`,class:"heading"},j(n.heading.text),9,T2)):n.type==="blockquote"?($(),M("div",M2,[m("div",L2,[N(Q,{icon:"format_quote",size:24,fill:""})]),m("blockquote",I2,[N(Go,{text:n.blockquote.text,marks:n.blockquote.marks},null,8,["text","marks"])])])):n.type==="code_block"?($(),M("div",q2,[m("pre",R2,[m("code",null,j(n.code_block.content),1)])])):n.type==="list_node"?($(),tt(tn(n.list_node.ordered?"ol":"ul"),{key:4,class:Os(["list-node",{ordered:n.list_node.ordered}])},{default:It(()=>[($(!0),M(pe,null,we(n.list_node.items,(i,a)=>($(),M("li",{key:a,class:"list-item"},[N(Go,{text:i.text,marks:i.marks},null,8,["text","marks"])]))),128))]),_:2},1032,["class"])):n.type==="image"?($(),M("figure",z2,[m("img",{src:n.image.urls?.[0],alt:n.image.description||"Article Image",class:"article-image",loading:"lazy"},null,8,P2),n.image.description?($(),M("figcaption",O2,j(n.image.description),1)):ce("",!0)])):n.type==="card"?($(),M("a",{key:6,href:t(n).url,target:"_blank",rel:"noopener",class:"link-card group"},[m("div",H2,[m("h4",V2,j(t(n).title),1),m("p",j2,j(t(n).desc),1),m("div",U2,[N(Q,{icon:"open_in_new",size:12}),o[0]||(o[0]=m("span",null,"Link Card",-1))])]),t(n).cover?($(),M("img",{key:0,src:t(n).cover,class:"card-cover"},null,8,W2)):ce("",!0)],8,N2)):n.type==="video"?($(),M("div",K2,[m("video",{controls:"",class:"video-player",src:n.video.url,poster:n.video.poster}," Your browser does not support the video tag. ",8,Z2)])):n.type==="myapptip"?($(),M("div",G2,[m("div",Y2,[N(Q,{icon:"info",size:20})]),m("div",null,j(n.myapptip.text),1)])):n.type==="hr"?($(),M("hr",X2)):ce("",!0)],64))),128))]))}},Q2=Re(J2,[["__scopeId","data-v-5194f69e"]]);window.canLoad=!0;function $a(e,t={}){return new Promise((s,o)=>{if(!window.canLoad){o(new Error("Request blocked by window.canLoad"));return}const n=(t.method||"GET").toUpperCase(),r=t.headers||{},i=t.body,c=n==="GET"||n==="HEAD"?null:i,d={method:n,url:e,headers:r,onload:l=>{const u=l.status,p=l.responseText,h=l.responseHeaders;let v=null;try{v=JSON.parse(p)}catch{}u===403?v?.error?.message&&v?.error?.redirect?window.canLoad||(alert(v.error.message),confirm("立即跳转")&&(window.location.href=v.error.redirect,alert("已跳转 成功后请自行退出"))):v?.error?.message&&alert(v.error.message):u===401?typeof getLogin=="function"&&getLogin()&&(window.canLoad||(alert("登录状态已失效 已自动帮你清除失效的登录状态 你可以点击下方我知道了来跳转登录"),confirm("我知道了")&&(typeof clearAllCookies=="function"&&clearAllCookies(),localStorage.removeItem("signdata"),localStorage.removeItem("idx"),localStorage.removeItem("udid"),window.location.href="https://www.zhihu.com/signin"))):u===400&&v?.error?.message&&alert(v.error.message);const C=new Headers;if(h)for(const[x,f]of Object.entries(h))C.append(x,f);const B=new Response(p,{status:u,headers:C});u>=200&&u<300?s(B):o(new Error(`HTTP ${u}`))},onerror:l=>{o(new Error(`Network error: ${l?.error||"unknown"}`))}};c!==null&&(d.data=c),GM_xmlhttpRequest(d)})}window.unifiedFetch=$a;class Xe{constructor(t,s,o=!1){this.encryptConf=t,this.decryptConf=s,this.isDebug=o}logDebug(t){this.isDebug&&console.log(t)}getEncryptConf(){return this.encryptConf}getDecryptConf(){return this.decryptConf}static hexToBytes(t){const s=[];for(let o=0;o<t.length;o+=2)s.push(parseInt(t.substr(o,2),16));return s}static bytesToHex(t){return t.map(s=>s.toString(16).padStart(2,"0")).join("")}static padData(t){const o=16-t.length%16,r=[185,186,184,179,177,178,176,191,189,190,188,183,181,182,180,155][o-1];return[...t,...Array(o).fill(r)]}calculateAdjustedLength(t,s){const n=s-1;if(!(0<=n&&n<t.length))throw new Error("Index out of range");const r=t[n];return r<=16?s-r:r>=s?s:s-r}transform(t,s){const o=new Array(t.length);for(let n=0;n<t.length;n++){const r=t[n]<0?t[n]+256:t[n];o[n]=s[r]}return o}textToMatrix(t){const s=[];for(let o=0;o<16;o++){const n=BigInt(8*(15-o)),r=Number(t>>n&0xFFn);o%4===0?s.push([r]):s[Math.floor(o/4)].push(r)}return s}stateToBytes(t){return t.flat()}stateToHex(t){return Xe.bytesToHex(this.stateToBytes(t))}xorArrayTemplate(t,s,o){const n=[];for(let r=0;r<t.length;r++){const i=s[r]&15^t[r]<<4&255,a=o(i)>>4&255,c=s[r]>>4&15^t[r]>>4<<4,d=o(c)>>4&255;n.push(a^d<<4)}return n}addRoundKeys(t,s,o){return t.map((n,r)=>this.xorArrayTemplate(n,s[r],o))}subBytes(t,s,o){return s.map((n,r)=>n.map((i,a)=>t[o[r][a]&15^s[r][a]<<4&255]>>4&255^(t[o[r][a]>>4&15^s[r][a]>>4<<4]>>4&255)<<4))}shiftRows(t,s,o){return s.map((n,r)=>n.map((i,a)=>t[o[r][a]&15^s[r][a]<<4&255]>>4&255^(t[o[r][a]>>4&15^s[r][a]>>4<<4]>>4&255)<<4))}mixColumns(t,s,o){return s.map((n,r)=>n.map((i,a)=>t[o[r][a]&15^s[r][a]<<4&255]>>4&255^(t[o[r][a]>>4&15^s[r][a]>>4<<4]>>4&255)<<4))}buildKey(t,s,o){let n="";for(const r of s){const i=parseInt(o.substr(r,2),16);n+=t[i*4]}return n}encrypt(t,s){const o=this.getEncryptConf(),{key_schedule:n,s_box:r,dict1:i,dict2:a,dict3:c,dict4:d,dict5:l,round_constants:u}=o;let p=this.addRoundKeys(this.textToMatrix(t),s.slice(0,4),x=>n[x]);const h=[{template:i,indices:[0,8,16,24]},{template:a,indices:[10,18,26,2]},{template:c,indices:[20,28,4,12]},{template:d,indices:[30,6,14,22]}];let v=[];for(const x of h){const f=this.buildKey(x.template,x.indices,this.stateToHex(p));v.push(this.textToMatrix(BigInt("0x"+f)))}for(let x=1;x<10;x++)if(p=this.subBytes(r,v[0],v[1]),p=this.shiftRows(r,p,v[2]),p=this.mixColumns(r,p,v[3]),p=this.addRoundKeys(p,s.slice(4*x,4*(x+1)),f=>r[f]),x!==9){v=[];for(const f of h){const A=this.buildKey(f.template,f.indices,this.stateToHex(p));v.push(this.textToMatrix(BigInt("0x"+A)))}}const C=[0,10,20,30,8,18,28,6,16,26,4,14,24,2,12,22];let B="";for(const x of C){const f=parseInt(this.stateToHex(p).substr(x,2),16);B+=l[f]}return p=this.textToMatrix(BigInt("0x"+B)),p=this.addRoundKeys(p,s.slice(40,44),x=>u[x]),p}generateRoundKeys(t){const s=Xe.hexToBytes(t),o=s.slice(4).map((i,a)=>i^s[(a+4)%3]),n=Xe.bytesToHex(o),r=[];for(let i=0;i<n.length;i+=32)r.push(n.substr(i,32));return r}transformIv(t,s){let o;return typeof t=="string"?o=new TextEncoder().encode(t):o=new Uint8Array(t),this.transform(Array.from(o),s).map(n=>n.toString(16).padStart(2,"0")).join("")}aesEncrypt(t,s,o){const n=BigInt("0x"+s),r=BigInt("0x"+o),i=n^r,a=[];for(const l of t){const u=Xe.hexToBytes(l);for(let p=0;p<u.length;p+=4)a.push(u.slice(p,p+4))}const c=this.encrypt(i,a),d=this.stateToHex(c);return this.logDebug(`Encrypted: ${d}`),d}processInput(t){const o=this.getDecryptConf().input_arr,n=t.length,r=new Array(n+256).fill(0);for(let i=0;i<n;i++){const a=t[i];r[i]=o[a]}for(let i=0;i<256;i++)r[n+i]=0;return{data:r,length:n}}processOut(t,s){const n=this.getDecryptConf().out_arr,r=new Array(s);for(let c=0;c<r.length;c++){const d=t[c];r[c]=d<0?n[d+256]:n[d]}let i=r[r.length-1];i<0&&(i+=256);const a=r.length>i?r.length-i:r.length;return r.slice(0,a)}decrypt(t,s){const o=this.getDecryptConf(),{key_schedule:n,s_box:r,dict1:i,dict2:a,dict3:c,dict4:d,dict5:l,round_constants:u}=o;let p=this.addRoundKeys(this.textToMatrix(t),s.slice(0,4),x=>n[x]);const h=[{template:i,indices:[0,8,16,24]},{template:a,indices:[26,2,10,18]},{template:c,indices:[20,28,4,12]},{template:d,indices:[14,22,30,6]}];let v=[];for(const x of h){const f=this.buildKey(x.template,x.indices,this.stateToHex(p));v.push(this.textToMatrix(BigInt("0x"+f)))}for(let x=1;x<10;x++)if(p=this.subBytes(r,v[0],v[1]),p=this.shiftRows(r,p,v[2]),p=this.mixColumns(r,p,v[3]),p=this.addRoundKeys(p,s.slice(4*x,4*(x+1)),f=>r[f]),x!==9){v=[];for(const f of h){const A=this.buildKey(f.template,f.indices,this.stateToHex(p));v.push(this.textToMatrix(BigInt("0x"+A)))}}const C=[0,26,20,14,8,2,28,22,16,10,4,30,24,18,12,6];let B="";for(const x of C){const f=parseInt(this.stateToHex(p).substr(x,2),16);B+=l[f]}return p=this.textToMatrix(BigInt("0x"+B)),p=this.addRoundKeys(p,s.slice(40,44),x=>u[x]),p}aesDecrypt(t,s,o){const n=BigInt("0x"+s),r=[];for(const p of t){const h=Xe.hexToBytes(p);for(let v=0;v<h.length;v+=4)r.push(h.slice(v,v+4))}const i=this.decrypt(n,r),a=this.stateToHex(i),c=BigInt("0x"+a),d=BigInt("0x"+o),u=(c^d).toString(16).padStart(32,"0");return this.logDebug(`Decrypted: ${u}`),u}createEncryptor(t,s,o=!1){const n=this.getEncryptConf(),r=this.transformIv(s,n.iv_arr),i=this.generateRoundKeys(t);return a=>{const c=new TextEncoder,d=Xe.padData(this.transform(Array.from(c.encode(a)),n.input_arr)),l=Xe.bytesToHex(d),u=[];for(let B=0;B<l.length;B+=32)u.push(l.substr(B,32));const p=[];let h=r;for(const B of u){const x=this.aesEncrypt(i,B,h);p.push(x),h=x}const v=Xe.hexToBytes(p.join("")),C=this.transform(v,n.out_arr);if(o)return String.fromCharCode(...C);{const B=Uint8Array.from(C);return btoa(String.fromCharCode.apply(null,B))}}}createDecryptor(t,s,o=!1){const n=this.getDecryptConf(),r=this.transformIv(s,n.iv_arr),i=this.generateRoundKeys(t);return a=>{let c;if(o)c=Array.from(a).map(w=>w.charCodeAt(0));else{const w=atob(a);c=Array.from(w).map(P=>P.charCodeAt(0))}const{data:d,length:l}=this.processInput(c),u=Xe.bytesToHex(d),p=[];for(let w=0;w<u.length;w+=32)p.push(u.substr(w,32));const h=[];let v=r;for(const w of p){const P=this.aesDecrypt(i,w,v);h.push(P),v=w}const C=h.join(""),B=new Uint8Array(C.match(/.{1,2}/g).map(w=>parseInt(w,16))),x=this.calculateAdjustedLength(B,d.length),f=this.processOut(B.slice(0,x),l);return new TextDecoder().decode(Uint8Array.from(f))}}}let Gs=null;function ka(){if(Gs)return Gs;var e={key_schedule:[225,198,252,215,113,97,93,72,172,185,133,159,16,53,15,43,254,161,231,85,176,60,222,151,196,118,18,76,134,110,47,15,159,62,73,26,41,172,142,248,101,8,91,225,212,203,186,126,66,107,151,135,1,205,16,231,61,45,219,252,80,169,120,184,52,155,111,2,136,246,47,169,70,31,120,198,182,229,214,88,105,69,61,35,28,239,11,198,144,131,190,172,125,244,91,208,206,233,164,188,93,64,122,97,241,223,40,61,4,150,30,129,166,245,203,120,222,147,183,48,234,81,9,99,40,76,141,25,121,94,185,164,229,19,194,5,219,251,49,37,108,143,77,146,186,219,118,201,252,134,171,32,91,224,106,13,54,30,156,64,39,129,9,101,154,221,60,181,22,64,193,115,174,88,250,227,2,24,42,56,69,84,98,115,141,154,169,185,202,215,230,242,139,44,29,68,57,178,150,213,4,104,229,93,253,119,161,196,20,6,129,150,110,114,66,91,44,57,249,209,233,185,201,163,87,121,223,254,194,2,237,30,182,167,150,137,65,37,106,60,213,176,95,234,170,32,250,132,120,200,75,23,159,8,62,108],s_box:[187,219,118,193,250,135,163,32,82,237,99,0,62,25,149,73,209,189,82,227,173,45,250,132,118,207,69,27,149,2,57,101,122,87,191,166,224,18,197,13,222,246,54,47,100,143,67,155,199,233,175,186,80,76,127,100,240,223,37,60,10,146,22,135,251,175,229,95,188,63,214,158,199,124,18,77,128,99,33,10,136,41,29,67,48,191,152,220,9,100,231,86,244,127,171,197,160,243,194,113,218,144,178,62,233,83,10,101,45,73,134,30,43,143,12,107,151,213,57,180,25,71,204,121,166,82,255,224,88,125,216,255,205,3,235,17,179,167,157,135,79,32,98,53,233,205,254,221,126,104,89,71,169,191,132,156,28,62,2,43,109,67,62,39,24,229,6,199,144,133,188,173,120,240,82,212,10,31,45,62,69,85,107,114,138,158,168,182,197,212,230,253,57,146,102,5,130,247,47,160,78,23,120,194,188,235,212,80,25,7,141,144,100,121,79,92,37,62,246,220,228,187,201,169,158,53,64,22,41,164,128,245,99,2,90,233,223,196,191,114,79,102,148,141,2,199,22,234,49,46,219,243,93,168,117,180],round_constants:[9,110,17,252,140,83,232,59,116,149,194,40,210,70,179,171,109,8,117,151,235,56,135,83,22,244,173,79,188,38,210,205,30,122,14,238,151,76,240,40,105,130,220,53,192,91,167,182,252,157,230,2,121,171,27,196,133,96,63,213,45,178,75,90,139,236,144,125,4,215,98,178,240,30,75,168,87,201,48,42,81,50,74,165,208,14,187,104,44,206,159,118,128,26,232,254,227,130,246,20,98,179,11,209,148,118,36,194,51,162,91,73,63,84,44,203,177,98,209,11,75,175,251,26,226,116,129,148,117,23,104,133,246,42,149,73,7,224,191,95,171,52,197,214,147,252,131,110,28,198,116,162,232,13,88,190,71,218,34,49,201,170,217,55,67,148,46,248,190,89,10,230,20,136,121,104,34,69,58,221,163,124,207,17,87,177,232,3,253,108,158,136,220,181,205,41,86,134,60,237,170,74,27,251,13,151,101,114,76,40,93,176,207,19,160,118,53,209,130,100,149,14,251,232,179,222,166,64,57,226,80,134,203,47,112,156,105,243,2,26,175,192,180,85,32,254,73,147,222,56,97,132,118,231,30,1],dict1:{0:"0C1717DA",4:"F08A8A36",8:"C89A9A19",12:"3F9797DE",16:"574D4D35",20:"F48C8C38",24:"72D6D65C",28:"1D6D6DFB",32:"4C8787CA",36:"C5CBCBB5",40:"428F8FC9",44:"1C6868F4",48:"D56B6B45",52:"52AFAFE9",56:"13F9F96D",60:"3CC8C804",64:"01B6B60F",68:"D26F6F49",72:"6236367C",76:"270D0D75",80:"24D9D987",84:"982A2AF9",88:"61EFEF86",92:"7E020224",96:"C6939317",100:"7309092D",104:"584A4A39",108:"106A6AF6",112:"3E9292D4",116:"448989C7",120:"11FFFF66",124:"534C4C30",128:"D4696947",132:"B3B9B9BD",136:"DA626243",140:"9C57576A",144:"29DEDE80",148:"AC37372A",152:"6A35357E",156:"FE7272E4",160:"051B1BD5",164:"7CD8D854",168:"F37979ED",172:"B1BFBFB6",176:"389494DC",180:"7F07072E",184:"B8B4B4BC",188:"2B010171",192:"35C1C102",196:"7AD5D55E",200:"77000022",204:"4B717191",208:"8DADAD9B",212:"6D3D3D7B",216:"196363FD",220:"75D1D152",224:"041919D7",228:"22DFDF89",232:"884444CC",236:"AD303021",240:"84ACAC98",244:"26030377",248:"B913131D",252:"A7EDED55",256:"5DA0A0E1",260:"AFE8E853",264:"603A3A76",268:"5B414131",272:"32C6C60C",276:"972D2DF5",280:"DFF8F8A3",284:"BBBBBBBB",288:"E95353AD",292:"5E45453A",296:"D1F6F6AF",300:"8E4242C4",304:"146C6CF8",308:"1A6565FE",312:"9D505061",316:"FB7B7BEB",320:"156161F2",324:"A1E6E65F",328:"A8EAEA59",332:"F983833D",336:"50A4A4EF",340:"6C383874",344:"68E4E48C",348:"E329294D",352:"C2CFCFB9",356:"FD8D8D3B",360:"CF989813",364:"A4393927",368:"0BB1B101",372:"864E4EC8",376:"D6F3F3A7",380:"B01A1A16",384:"CB919111",388:"65313172",392:"46737397",396:"BA15151E",400:"498E8EC0",404:"230C0C70",408:"DEF5F5AA",412:"F87474EC",416:"319F9FD6",420:"D96E6E40",424:"E05A5AA6",428:"EC5858A4",432:"BC181814",436:"80AAAA96",440:"925F5F69",444:"2106067F",448:"30CACA06",452:"E12F2F46",456:"F67E7EE8",460:"E7202042",464:"932C2CF0",468:"CDC0C0B1",472:"379090D2",476:"2AD2D283",480:"A034342F",484:"126666FC",488:"85A1A192",492:"94595967",496:"7804042C",500:"408484CF",504:"C4C9C9B7",508:"E62E2E48",512:"EF27274E",516:"DC67674A",520:"0FB8B803",524:"A23F3F29",528:"B6BEBEB8",532:"6FE7E78E",536:"2DD0D081",540:"9F2828F3",544:"F286863C",548:"5146463F",552:"20D4D48F",556:"A53B3B25",560:"C79D9D15",564:"5AA2A2E3",568:"F17F7FE6",572:"D7FDFDA5",576:"4A8282C3",580:"E25656AC",584:"B41C1C18",588:"CAC2C2B3",592:"70DADA56",596:"F77070E2",600:"7B0B0B2B",604:"1BFBFB6B",608:"8CA8A894",612:"C0C4C4BF",616:"34CCCC08",620:"874040C2",624:"5CA7A7EA",628:"995E5E60",632:"9B2121F1",636:"2CD7D78A",640:"962323F7",644:"67E0E082",648:"66EEEE88",652:"280A0A79",656:"BEB2B2B4",660:"ED5D5DAB",664:"091E1ED0",668:"9054546F",672:"834949CD",676:"06B3B307",680:"DD606041",684:"3B9B9BDB",688:"79D3D35D",692:"E824244C",696:"C9CECEB0",700:"DBF1F1A1",704:"C196961F",708:"EB2B2B4B",712:"CE95951A",716:"FA85853E",720:"AEE5E55A",724:"4E75759A",728:"39C3C30D",732:"339999DD",736:"63E9E98D",740:"D064644F",744:"54A9A9E7",748:"6EE2E284",752:"369E9ED8",756:"B7B0B0B2",760:"A3ECEC50",764:"CCC7C7BA",768:"4D8080C1",772:"17F0F062",776:"08BABA09",780:"EA5555AE",784:"A93E3E20",788:"03BCBC00",792:"955B5B65",796:"BD1D1D1B",800:"487A7A99",804:"ABE1E151",808:"814F4FC6",812:"B216161C",816:"760E0E28",820:"7DDDDD5B",824:"1FF7F76E",828:"E45C5CA8",832:"0D1010D1",836:"16FEFE68",840:"82A6A69C",844:"0EB5B50A",848:"4F787893",852:"710F0F26",856:"89A3A39D",860:"D3FCFCA0",864:"E55151A2",868:"B5111112",872:"56434337",876:"6BEBEB8B",880:"8AA5A59E",884:"6933337D",888:"25DBDB85",892:"FF7777EE",896:"643C3C78",900:"18F4F46C",904:"3AC5C50E",908:"74DCDC58",912:"D8FAFAA9",916:"C39C9C10",920:"8B4B4BCB",924:"FC888834",928:"BFB7B7BE",932:"001414DF",936:"912626FF",940:"55ABABE5",944:"F5818132",948:"3DCDCD0B",952:"EE222244",956:"1EF2F264",960:"0A1212D3",964:"8F4747CE",968:"2F080873",972:"437C7C90",976:"A6E3E357",980:"9A525263",984:"477D7D95",988:"4176769F",992:"59AEAEE0",996:"458B8BC5",1e3:"AA323223",1004:"07BDBD05",1008:"021F1FD9",1012:"9E2525FA",1016:"5F484833",1020:"2E05057A"},dict2:{0:"DA0C1717",4:"36F08A8A",8:"19C89A9A",12:"DE3F9797",16:"35574D4D",20:"38F48C8C",24:"5C72D6D6",28:"FB1D6D6D",32:"CA4C8787",36:"B5C5CBCB",40:"C9428F8F",44:"F41C6868",48:"45D56B6B",52:"E952AFAF",56:"6D13F9F9",60:"043CC8C8",64:"0F01B6B6",68:"49D26F6F",72:"7C623636",76:"75270D0D",80:"8724D9D9",84:"F9982A2A",88:"8661EFEF",92:"247E0202",96:"17C69393",100:"2D730909",104:"39584A4A",108:"F6106A6A",112:"D43E9292",116:"C7448989",120:"6611FFFF",124:"30534C4C",128:"47D46969",132:"BDB3B9B9",136:"43DA6262",140:"6A9C5757",144:"8029DEDE",148:"2AAC3737",152:"7E6A3535",156:"E4FE7272",160:"D5051B1B",164:"547CD8D8",168:"EDF37979",172:"B6B1BFBF",176:"DC389494",180:"2E7F0707",184:"BCB8B4B4",188:"712B0101",192:"0235C1C1",196:"5E7AD5D5",200:"22770000",204:"914B7171",208:"9B8DADAD",212:"7B6D3D3D",216:"FD196363",220:"5275D1D1",224:"D7041919",228:"8922DFDF",232:"CC884444",236:"21AD3030",240:"9884ACAC",244:"77260303",248:"1DB91313",252:"55A7EDED",256:"E15DA0A0",260:"53AFE8E8",264:"76603A3A",268:"315B4141",272:"0C32C6C6",276:"F5972D2D",280:"A3DFF8F8",284:"BBBBBBBB",288:"ADE95353",292:"3A5E4545",296:"AFD1F6F6",300:"C48E4242",304:"F8146C6C",308:"FE1A6565",312:"619D5050",316:"EBFB7B7B",320:"F2156161",324:"5FA1E6E6",328:"59A8EAEA",332:"3DF98383",336:"EF50A4A4",340:"746C3838",344:"8C68E4E4",348:"4DE32929",352:"B9C2CFCF",356:"3BFD8D8D",360:"13CF9898",364:"27A43939",368:"010BB1B1",372:"C8864E4E",376:"A7D6F3F3",380:"16B01A1A",384:"11CB9191",388:"72653131",392:"97467373",396:"1EBA1515",400:"C0498E8E",404:"70230C0C",408:"AADEF5F5",412:"ECF87474",416:"D6319F9F",420:"40D96E6E",424:"A6E05A5A",428:"A4EC5858",432:"14BC1818",436:"9680AAAA",440:"69925F5F",444:"7F210606",448:"0630CACA",452:"46E12F2F",456:"E8F67E7E",460:"42E72020",464:"F0932C2C",468:"B1CDC0C0",472:"D2379090",476:"832AD2D2",480:"2FA03434",484:"FC126666",488:"9285A1A1",492:"67945959",496:"2C780404",500:"CF408484",504:"B7C4C9C9",508:"48E62E2E",512:"4EEF2727",516:"4ADC6767",520:"030FB8B8",524:"29A23F3F",528:"B8B6BEBE",532:"8E6FE7E7",536:"812DD0D0",540:"F39F2828",544:"3CF28686",548:"3F514646",552:"8F20D4D4",556:"25A53B3B",560:"15C79D9D",564:"E35AA2A2",568:"E6F17F7F",572:"A5D7FDFD",576:"C34A8282",580:"ACE25656",584:"18B41C1C",588:"B3CAC2C2",592:"5670DADA",596:"E2F77070",600:"2B7B0B0B",604:"6B1BFBFB",608:"948CA8A8",612:"BFC0C4C4",616:"0834CCCC",620:"C2874040",624:"EA5CA7A7",628:"60995E5E",632:"F19B2121",636:"8A2CD7D7",640:"F7962323",644:"8267E0E0",648:"8866EEEE",652:"79280A0A",656:"B4BEB2B2",660:"ABED5D5D",664:"D0091E1E",668:"6F905454",672:"CD834949",676:"0706B3B3",680:"41DD6060",684:"DB3B9B9B",688:"5D79D3D3",692:"4CE82424",696:"B0C9CECE",700:"A1DBF1F1",704:"1FC19696",708:"4BEB2B2B",712:"1ACE9595",716:"3EFA8585",720:"5AAEE5E5",724:"9A4E7575",728:"0D39C3C3",732:"DD339999",736:"8D63E9E9",740:"4FD06464",744:"E754A9A9",748:"846EE2E2",752:"D8369E9E",756:"B2B7B0B0",760:"50A3ECEC",764:"BACCC7C7",768:"C14D8080",772:"6217F0F0",776:"0908BABA",780:"AEEA5555",784:"20A93E3E",788:"0003BCBC",792:"65955B5B",796:"1BBD1D1D",800:"99487A7A",804:"51ABE1E1",808:"C6814F4F",812:"1CB21616",816:"28760E0E",820:"5B7DDDDD",824:"6E1FF7F7",828:"A8E45C5C",832:"D10D1010",836:"6816FEFE",840:"9C82A6A6",844:"0A0EB5B5",848:"934F7878",852:"26710F0F",856:"9D89A3A3",860:"A0D3FCFC",864:"A2E55151",868:"12B51111",872:"37564343",876:"8B6BEBEB",880:"9E8AA5A5",884:"7D693333",888:"8525DBDB",892:"EEFF7777",896:"78643C3C",900:"6C18F4F4",904:"0E3AC5C5",908:"5874DCDC",912:"A9D8FAFA",916:"10C39C9C",920:"CB8B4B4B",924:"34FC8888",928:"BEBFB7B7",932:"DF001414",936:"FF912626",940:"E555ABAB",944:"32F58181",948:"0B3DCDCD",952:"44EE2222",956:"641EF2F2",960:"D30A1212",964:"CE8F4747",968:"732F0808",972:"90437C7C",976:"57A6E3E3",980:"639A5252",984:"95477D7D",988:"9F417676",992:"E059AEAE",996:"C5458B8B",1e3:"23AA3232",1004:"0507BDBD",1008:"D9021F1F",1012:"FA9E2525",1016:"335F4848",1020:"7A2E0505"},dict3:{0:"17DA0C17",4:"8A36F08A",8:"9A19C89A",12:"97DE3F97",16:"4D35574D",20:"8C38F48C",24:"D65C72D6",28:"6DFB1D6D",32:"87CA4C87",36:"CBB5C5CB",40:"8FC9428F",44:"68F41C68",48:"6B45D56B",52:"AFE952AF",56:"F96D13F9",60:"C8043CC8",64:"B60F01B6",68:"6F49D26F",72:"367C6236",76:"0D75270D",80:"D98724D9",84:"2AF9982A",88:"EF8661EF",92:"02247E02",96:"9317C693",100:"092D7309",104:"4A39584A",108:"6AF6106A",112:"92D43E92",116:"89C74489",120:"FF6611FF",124:"4C30534C",128:"6947D469",132:"B9BDB3B9",136:"6243DA62",140:"576A9C57",144:"DE8029DE",148:"372AAC37",152:"357E6A35",156:"72E4FE72",160:"1BD5051B",164:"D8547CD8",168:"79EDF379",172:"BFB6B1BF",176:"94DC3894",180:"072E7F07",184:"B4BCB8B4",188:"01712B01",192:"C10235C1",196:"D55E7AD5",200:"00227700",204:"71914B71",208:"AD9B8DAD",212:"3D7B6D3D",216:"63FD1963",220:"D15275D1",224:"19D70419",228:"DF8922DF",232:"44CC8844",236:"3021AD30",240:"AC9884AC",244:"03772603",248:"131DB913",252:"ED55A7ED",256:"A0E15DA0",260:"E853AFE8",264:"3A76603A",268:"41315B41",272:"C60C32C6",276:"2DF5972D",280:"F8A3DFF8",284:"BBBBBBBB",288:"53ADE953",292:"453A5E45",296:"F6AFD1F6",300:"42C48E42",304:"6CF8146C",308:"65FE1A65",312:"50619D50",316:"7BEBFB7B",320:"61F21561",324:"E65FA1E6",328:"EA59A8EA",332:"833DF983",336:"A4EF50A4",340:"38746C38",344:"E48C68E4",348:"294DE329",352:"CFB9C2CF",356:"8D3BFD8D",360:"9813CF98",364:"3927A439",368:"B1010BB1",372:"4EC8864E",376:"F3A7D6F3",380:"1A16B01A",384:"9111CB91",388:"31726531",392:"73974673",396:"151EBA15",400:"8EC0498E",404:"0C70230C",408:"F5AADEF5",412:"74ECF874",416:"9FD6319F",420:"6E40D96E",424:"5AA6E05A",428:"58A4EC58",432:"1814BC18",436:"AA9680AA",440:"5F69925F",444:"067F2106",448:"CA0630CA",452:"2F46E12F",456:"7EE8F67E",460:"2042E720",464:"2CF0932C",468:"C0B1CDC0",472:"90D23790",476:"D2832AD2",480:"342FA034",484:"66FC1266",488:"A19285A1",492:"59679459",496:"042C7804",500:"84CF4084",504:"C9B7C4C9",508:"2E48E62E",512:"274EEF27",516:"674ADC67",520:"B8030FB8",524:"3F29A23F",528:"BEB8B6BE",532:"E78E6FE7",536:"D0812DD0",540:"28F39F28",544:"863CF286",548:"463F5146",552:"D48F20D4",556:"3B25A53B",560:"9D15C79D",564:"A2E35AA2",568:"7FE6F17F",572:"FDA5D7FD",576:"82C34A82",580:"56ACE256",584:"1C18B41C",588:"C2B3CAC2",592:"DA5670DA",596:"70E2F770",600:"0B2B7B0B",604:"FB6B1BFB",608:"A8948CA8",612:"C4BFC0C4",616:"CC0834CC",620:"40C28740",624:"A7EA5CA7",628:"5E60995E",632:"21F19B21",636:"D78A2CD7",640:"23F79623",644:"E08267E0",648:"EE8866EE",652:"0A79280A",656:"B2B4BEB2",660:"5DABED5D",664:"1ED0091E",668:"546F9054",672:"49CD8349",676:"B30706B3",680:"6041DD60",684:"9BDB3B9B",688:"D35D79D3",692:"244CE824",696:"CEB0C9CE",700:"F1A1DBF1",704:"961FC196",708:"2B4BEB2B",712:"951ACE95",716:"853EFA85",720:"E55AAEE5",724:"759A4E75",728:"C30D39C3",732:"99DD3399",736:"E98D63E9",740:"644FD064",744:"A9E754A9",748:"E2846EE2",752:"9ED8369E",756:"B0B2B7B0",760:"EC50A3EC",764:"C7BACCC7",768:"80C14D80",772:"F06217F0",776:"BA0908BA",780:"55AEEA55",784:"3E20A93E",788:"BC0003BC",792:"5B65955B",796:"1D1BBD1D",800:"7A99487A",804:"E151ABE1",808:"4FC6814F",812:"161CB216",816:"0E28760E",820:"DD5B7DDD",824:"F76E1FF7",828:"5CA8E45C",832:"10D10D10",836:"FE6816FE",840:"A69C82A6",844:"B50A0EB5",848:"78934F78",852:"0F26710F",856:"A39D89A3",860:"FCA0D3FC",864:"51A2E551",868:"1112B511",872:"43375643",876:"EB8B6BEB",880:"A59E8AA5",884:"337D6933",888:"DB8525DB",892:"77EEFF77",896:"3C78643C",900:"F46C18F4",904:"C50E3AC5",908:"DC5874DC",912:"FAA9D8FA",916:"9C10C39C",920:"4BCB8B4B",924:"8834FC88",928:"B7BEBFB7",932:"14DF0014",936:"26FF9126",940:"ABE555AB",944:"8132F581",948:"CD0B3DCD",952:"2244EE22",956:"F2641EF2",960:"12D30A12",964:"47CE8F47",968:"08732F08",972:"7C90437C",976:"E357A6E3",980:"52639A52",984:"7D95477D",988:"769F4176",992:"AEE059AE",996:"8BC5458B",1e3:"3223AA32",1004:"BD0507BD",1008:"1FD9021F",1012:"25FA9E25",1016:"48335F48",1020:"057A2E05"},dict4:{0:"1717DA0C",4:"8A8A36F0",8:"9A9A19C8",12:"9797DE3F",16:"4D4D3557",20:"8C8C38F4",24:"D6D65C72",28:"6D6DFB1D",32:"8787CA4C",36:"CBCBB5C5",40:"8F8FC942",44:"6868F41C",48:"6B6B45D5",52:"AFAFE952",56:"F9F96D13",60:"C8C8043C",64:"B6B60F01",68:"6F6F49D2",72:"36367C62",76:"0D0D7527",80:"D9D98724",84:"2A2AF998",88:"EFEF8661",92:"0202247E",96:"939317C6",100:"09092D73",104:"4A4A3958",108:"6A6AF610",112:"9292D43E",116:"8989C744",120:"FFFF6611",124:"4C4C3053",128:"696947D4",132:"B9B9BDB3",136:"626243DA",140:"57576A9C",144:"DEDE8029",148:"37372AAC",152:"35357E6A",156:"7272E4FE",160:"1B1BD505",164:"D8D8547C",168:"7979EDF3",172:"BFBFB6B1",176:"9494DC38",180:"07072E7F",184:"B4B4BCB8",188:"0101712B",192:"C1C10235",196:"D5D55E7A",200:"00002277",204:"7171914B",208:"ADAD9B8D",212:"3D3D7B6D",216:"6363FD19",220:"D1D15275",224:"1919D704",228:"DFDF8922",232:"4444CC88",236:"303021AD",240:"ACAC9884",244:"03037726",248:"13131DB9",252:"EDED55A7",256:"A0A0E15D",260:"E8E853AF",264:"3A3A7660",268:"4141315B",272:"C6C60C32",276:"2D2DF597",280:"F8F8A3DF",284:"BBBBBBBB",288:"5353ADE9",292:"45453A5E",296:"F6F6AFD1",300:"4242C48E",304:"6C6CF814",308:"6565FE1A",312:"5050619D",316:"7B7BEBFB",320:"6161F215",324:"E6E65FA1",328:"EAEA59A8",332:"83833DF9",336:"A4A4EF50",340:"3838746C",344:"E4E48C68",348:"29294DE3",352:"CFCFB9C2",356:"8D8D3BFD",360:"989813CF",364:"393927A4",368:"B1B1010B",372:"4E4EC886",376:"F3F3A7D6",380:"1A1A16B0",384:"919111CB",388:"31317265",392:"73739746",396:"15151EBA",400:"8E8EC049",404:"0C0C7023",408:"F5F5AADE",412:"7474ECF8",416:"9F9FD631",420:"6E6E40D9",424:"5A5AA6E0",428:"5858A4EC",432:"181814BC",436:"AAAA9680",440:"5F5F6992",444:"06067F21",448:"CACA0630",452:"2F2F46E1",456:"7E7EE8F6",460:"202042E7",464:"2C2CF093",468:"C0C0B1CD",472:"9090D237",476:"D2D2832A",480:"34342FA0",484:"6666FC12",488:"A1A19285",492:"59596794",496:"04042C78",500:"8484CF40",504:"C9C9B7C4",508:"2E2E48E6",512:"27274EEF",516:"67674ADC",520:"B8B8030F",524:"3F3F29A2",528:"BEBEB8B6",532:"E7E78E6F",536:"D0D0812D",540:"2828F39F",544:"86863CF2",548:"46463F51",552:"D4D48F20",556:"3B3B25A5",560:"9D9D15C7",564:"A2A2E35A",568:"7F7FE6F1",572:"FDFDA5D7",576:"8282C34A",580:"5656ACE2",584:"1C1C18B4",588:"C2C2B3CA",592:"DADA5670",596:"7070E2F7",600:"0B0B2B7B",604:"FBFB6B1B",608:"A8A8948C",612:"C4C4BFC0",616:"CCCC0834",620:"4040C287",624:"A7A7EA5C",628:"5E5E6099",632:"2121F19B",636:"D7D78A2C",640:"2323F796",644:"E0E08267",648:"EEEE8866",652:"0A0A7928",656:"B2B2B4BE",660:"5D5DABED",664:"1E1ED009",668:"54546F90",672:"4949CD83",676:"B3B30706",680:"606041DD",684:"9B9BDB3B",688:"D3D35D79",692:"24244CE8",696:"CECEB0C9",700:"F1F1A1DB",704:"96961FC1",708:"2B2B4BEB",712:"95951ACE",716:"85853EFA",720:"E5E55AAE",724:"75759A4E",728:"C3C30D39",732:"9999DD33",736:"E9E98D63",740:"64644FD0",744:"A9A9E754",748:"E2E2846E",752:"9E9ED836",756:"B0B0B2B7",760:"ECEC50A3",764:"C7C7BACC",768:"8080C14D",772:"F0F06217",776:"BABA0908",780:"5555AEEA",784:"3E3E20A9",788:"BCBC0003",792:"5B5B6595",796:"1D1D1BBD",800:"7A7A9948",804:"E1E151AB",808:"4F4FC681",812:"16161CB2",816:"0E0E2876",820:"DDDD5B7D",824:"F7F76E1F",828:"5C5CA8E4",832:"1010D10D",836:"FEFE6816",840:"A6A69C82",844:"B5B50A0E",848:"7878934F",852:"0F0F2671",856:"A3A39D89",860:"FCFCA0D3",864:"5151A2E5",868:"111112B5",872:"43433756",876:"EBEB8B6B",880:"A5A59E8A",884:"33337D69",888:"DBDB8525",892:"7777EEFF",896:"3C3C7864",900:"F4F46C18",904:"C5C50E3A",908:"DCDC5874",912:"FAFAA9D8",916:"9C9C10C3",920:"4B4BCB8B",924:"888834FC",928:"B7B7BEBF",932:"1414DF00",936:"2626FF91",940:"ABABE555",944:"818132F5",948:"CDCD0B3D",952:"222244EE",956:"F2F2641E",960:"1212D30A",964:"4747CE8F",968:"0808732F",972:"7C7C9043",976:"E3E357A6",980:"5252639A",984:"7D7D9547",988:"76769F41",992:"AEAEE059",996:"8B8BC545",1e3:"323223AA",1004:"BDBD0507",1008:"1F1FD902",1012:"2525FA9E",1016:"4848335F",1020:"05057A2E"},dict5:{0:"17",1:"8A",2:"9A",3:"97",4:"4D",5:"8C",6:"D6",7:"6D",8:"87",9:"CB",10:"8F",11:"68",12:"6B",13:"AF",14:"F9",15:"C8",16:"B6",17:"6F",18:"36",19:"0D",20:"D9",21:"2A",22:"EF",23:"02",24:"93",25:"09",26:"4A",27:"6A",28:"92",29:"89",30:"FF",31:"4C",32:"69",33:"B9",34:"62",35:"57",36:"DE",37:"37",38:"35",39:"72",40:"1B",41:"D8",42:"79",43:"BF",44:"94",45:"07",46:"B4",47:"01",48:"C1",49:"D5",50:"00",51:"71",52:"AD",53:"3D",54:"63",55:"D1",56:"19",57:"DF",58:"44",59:"30",60:"AC",61:"03",62:"13",63:"ED",64:"A0",65:"E8",66:"3A",67:"41",68:"C6",69:"2D",70:"F8",71:"BB",72:"53",73:"45",74:"F6",75:"42",76:"6C",77:"65",78:"50",79:"7B",80:"61",81:"E6",82:"EA",83:"83",84:"A4",85:"38",86:"E4",87:"29",88:"CF",89:"8D",90:"98",91:"39",92:"B1",93:"4E",94:"F3",95:"1A",96:"91",97:"31",98:"73",99:"15",100:"8E",101:"0C",102:"F5",103:"74",104:"9F",105:"6E",106:"5A",107:"58",108:"18",109:"AA",110:"5F",111:"06",112:"CA",113:"2F",114:"7E",115:"20",116:"2C",117:"C0",118:"90",119:"D2",120:"34",121:"66",122:"A1",123:"59",124:"04",125:"84",126:"C9",127:"2E",128:"27",129:"67",130:"B8",131:"3F",132:"BE",133:"E7",134:"D0",135:"28",136:"86",137:"46",138:"D4",139:"3B",140:"9D",141:"A2",142:"7F",143:"FD",144:"82",145:"56",146:"1C",147:"C2",148:"DA",149:"70",150:"0B",151:"FB",152:"A8",153:"C4",154:"CC",155:"40",156:"A7",157:"5E",158:"21",159:"D7",160:"23",161:"E0",162:"EE",163:"0A",164:"B2",165:"5D",166:"1E",167:"54",168:"49",169:"B3",170:"60",171:"9B",172:"D3",173:"24",174:"CE",175:"F1",176:"96",177:"2B",178:"95",179:"85",180:"E5",181:"75",182:"C3",183:"99",184:"E9",185:"64",186:"A9",187:"E2",188:"9E",189:"B0",190:"EC",191:"C7",192:"80",193:"F0",194:"BA",195:"55",196:"3E",197:"BC",198:"5B",199:"1D",200:"7A",201:"E1",202:"4F",203:"16",204:"0E",205:"DD",206:"F7",207:"5C",208:"10",209:"FE",210:"A6",211:"B5",212:"78",213:"0F",214:"A3",215:"FC",216:"51",217:"11",218:"43",219:"EB",220:"A5",221:"33",222:"DB",223:"77",224:"3C",225:"F4",226:"C5",227:"DC",228:"FA",229:"9C",230:"4B",231:"88",232:"B7",233:"14",234:"26",235:"AB",236:"81",237:"CD",238:"22",239:"F2",240:"12",241:"47",242:"08",243:"7C",244:"E3",245:"52",246:"7D",247:"76",248:"AE",249:"8B",250:"32",251:"BD",252:"1F",253:"25",254:"48",255:"05"},input_arr:[187,185,186,184,179,177,178,176,191,189,190,188,183,181,182,180,155,153,154,152,147,145,146,144,159,157,158,156,151,149,150,148,171,169,170,168,163,161,162,160,175,173,174,172,167,165,166,164,139,137,138,136,131,129,130,128,143,141,142,140,135,133,134,132,59,57,58,56,51,49,50,48,63,61,62,60,55,53,54,52,27,25,26,24,19,17,18,16,31,29,30,28,23,21,22,20,43,41,42,40,35,33,34,32,47,45,46,44,39,37,38,36,11,9,10,8,3,1,2,0,15,13,14,12,7,5,6,4,251,249,250,248,243,241,242,240,255,253,254,252,247,245,246,244,219,217,218,216,211,209,210,208,223,221,222,220,215,213,214,212,235,233,234,232,227,225,226,224,239,237,238,236,231,229,230,228,203,201,202,200,195,193,194,192,207,205,206,204,199,197,198,196,123,121,122,120,115,113,114,112,127,125,126,124,119,117,118,116,91,89,90,88,83,81,82,80,95,93,94,92,87,85,86,84,107,105,106,104,99,97,98,96,111,109,110,108,103,101,102,100,75,73,74,72,67,65,66,64,79,77,78,76,71,69,70,68],iv_arr:[0,2,1,3,8,10,9,11,4,6,5,7,12,14,13,15,32,34,33,35,40,42,41,43,36,38,37,39,44,46,45,47,16,18,17,19,24,26,25,27,20,22,21,23,28,30,29,31,48,50,49,51,56,58,57,59,52,54,53,55,60,62,61,63,128,130,129,131,136,138,137,139,132,134,133,135,140,142,141,143,160,162,161,163,168,170,169,171,164,166,165,167,172,174,173,175,144,146,145,147,152,154,153,155,148,150,149,151,156,158,157,159,176,178,177,179,184,186,185,187,180,182,181,183,188,190,189,191,64,66,65,67,72,74,73,75,68,70,69,71,76,78,77,79,96,98,97,99,104,106,105,107,100,102,101,103,108,110,109,111,80,82,81,83,88,90,89,91,84,86,85,87,92,94,93,95,112,114,113,115,120,122,121,123,116,118,117,119,124,126,125,127,192,194,193,195,200,202,201,203,196,198,197,199,204,206,205,207,224,226,225,227,232,234,233,235,228,230,229,231,236,238,237,239,208,210,209,211,216,218,217,219,212,214,213,215,220,222,221,223,240,242,241,243,248,250,249,251,244,246,245,247,252,254,253,255],out_arr:[0,2,1,3,8,10,9,11,4,6,5,7,12,14,13,15,32,34,33,35,40,42,41,43,36,38,37,39,44,46,45,47,16,18,17,19,24,26,25,27,20,22,21,23,28,30,29,31,48,50,49,51,56,58,57,59,52,54,53,55,60,62,61,63,128,130,129,131,136,138,137,139,132,134,133,135,140,142,141,143,160,162,161,163,168,170,169,171,164,166,165,167,172,174,173,175,144,146,145,147,152,154,153,155,148,150,149,151,156,158,157,159,176,178,177,179,184,186,185,187,180,182,181,183,188,190,189,191,64,66,65,67,72,74,73,75,68,70,69,71,76,78,77,79,96,98,97,99,104,106,105,107,100,102,101,103,108,110,109,111,80,82,81,83,88,90,89,91,84,86,85,87,92,94,93,95,112,114,113,115,120,122,121,123,116,118,117,119,124,126,125,127,192,194,193,195,200,202,201,203,196,198,197,199,204,206,205,207,224,226,225,227,232,234,233,235,228,230,229,231,236,238,237,239,208,210,209,211,216,218,217,219,212,214,213,215,220,222,221,223,240,242,241,243,248,250,249,251,244,246,245,247,252,254,253,255]},t={key_schedule:[4,27,45,60,65,86,97,120,136,144,174,182,193,220,239,242,217,79,206,234,25,158,182,252,171,85,136,102,36,15,55,126,176,56,87,29,234,40,212,166,254,202,118,15,148,96,79,134,97,224,153,76,48,195,1,140,112,39,241,220,88,184,31,169,164,41,18,82,199,63,252,188,208,225,3,126,70,132,158,100,134,196,68,145,32,235,123,107,12,50,208,243,22,164,83,177,115,84,58,46,151,22,134,2,111,68,187,160,229,242,193,210,244,145,235,196,85,73,173,223,180,27,101,135,51,112,36,5,70,217,128,110,12,248,61,150,45,119,193,230,172,18,180,95,30,1,175,188,218,120,232,92,192,255,34,59,130,78,96,149,233,103,244,217,187,137,22,199,83,173,159,79,127,62,5,32,60,189,113,8,107,168,64,35,153,139,83,18,245,229,223,197,204,136,215,252,165,108,83,225,26,183,70,155,10,32,115,61,38,168,8,122,143,179,154,61,66,102,26,82,216,193,241,236,147,249,98,131,114,213,38,67,59,7,225,192,185,80,168,20,89,116,188,161,243,5,196,23,224,223,53,32,106,154,135,66],s_box:[237,111,243,222,186,130,21,205,93,175,149,69,115,52,6,41,104,238,150,67,50,207,7,140,119,43,244,219,91,189,24,175,249,154,226,203,84,76,172,211,180,26,97,128,50,121,35,9,216,68,196,226,16,150,176,242,169,90,131,105,41,3,61,121,178,52,81,18,228,38,215,175,251,202,116,5,146,97,78,141,136,198,73,155,32,236,117,101,13,49,220,250,25,165,86,176,21,7,165,177,222,127,224,95,202,249,41,62,137,65,109,151,194,141,222,242,164,96,89,236,20,176,67,144,3,47,122,50,84,112,182,167,250,7,207,17,230,211,50,38,109,151,135,72,171,46,18,90,204,56,250,176,213,239,5,113,64,132,156,102,157,247,109,142,115,211,39,65,63,11,224,193,183,95,165,20,71,211,128,109,5,241,51,154,46,125,200,226,171,19,191,90,113,88,61,39,157,25,140,8,101,79,184,165,236,245,199,221,52,184,115,4,102,172,65,37,147,142,88,25,249,234,216,192,12,24,32,61,71,88,105,113,130,159,175,190,198,210,230,241,40,161,5,124,131,185,155,58,67,98,30,93,215,200,255,229],round_constants:[92,192,130,239,221,165,102,59,14,177,17,123,154,68,247,47,200,91,28,120,78,62,251,174,144,33,128,226,12,216,105,185,143,24,86,60,10,115,185,226,217,105,205,168,68,152,34,251,234,127,61,94,98,25,208,137,185,11,162,199,32,254,74,145,217,76,12,101,85,34,233,180,128,48,149,252,31,207,127,171,175,53,121,28,41,81,153,194,241,66,227,134,110,176,9,216,97,251,189,218,231,154,82,4,52,133,42,72,168,113,196,30,51,162,226,137,177,197,3,90,109,211,117,28,249,40,151,68,11,158,214,190,136,250,60,97,86,227,70,44,198,19,164,120,186,39,106,14,58,70,136,218,234,87,245,157,114,171,18,198,27,142,195,169,151,228,47,120,66,245,94,56,222,14,181,108,119,239,174,196,255,138,72,24,43,146,60,84,180,101,218,12,147,6,67,46,23,100,175,253,203,124,215,185,94,137,48,233,77,217,156,241,198,187,117,37,27,162,12,111,137,81,237,49,249,104,37,65,123,15,199,155,173,18,178,220,63,232,95,136,39,189,253,155,165,212,17,65,122,198,103,14,233,58,129,84],dict1:{0:"602ED000",4:"7230645A",8:"2274F1AE",12:"6F801344",16:"A3DD1A8B",20:"EAB5C3F7",24:"44099B86",28:"6B87B779",32:"33110EF8",36:"4A0F389D",40:"6E8E1846",44:"3DD14557",48:"A7D31E81",52:"92F05933",56:"BC96392A",60:"C52A37AB",64:"38DC73E1",68:"C32D8BD2",72:"55CC6D36",76:"09AF57B2",80:"B89C8A40",84:"F148B8C2",88:"B57C2D06",92:"1E3BB283",96:"FA45B3C7",100:"6D21A131",104:"31D86CD3",108:"D3FD3BE2",112:"239DE3F3",116:"A112EB6C",120:"2E9B5BCB",124:"E3E156D6",128:"7E6E36FC",132:"4D0D040F",136:"47434645",140:"D9FF05A3",144:"01C2F2E8",148:"C6229D50",152:"1733FE91",156:"EFE0EAED",160:"494F607B",164:"BE7E7C98",168:"83BD726A",172:"F301D6E6",176:"54A73E63",180:"434D424A",184:"E7E652D4",188:"3AD56BD0",192:"FC4614B3",196:"32D024AA",200:"2A7F16D9",204:"00CB1F5D",208:"89BF202B",212:"703E6755",216:"02C4115E",220:"D45922FE",224:"80EB3D09",228:"DFF498D5",232:"DD5D6FB9",236:"51A8964B",240:"8EBB6A42",244:"53C1289C",248:"2C73B056",252:"8FB46E47",256:"4C03070C",260:"CA8F7EF4",264:"5DA18075",268:"9CF6EF0B",272:"3CD64D52",276:"BA950261",280:"D85A26FD",284:"A9DFB13A",288:"BF707B99",292:"71382CE3",296:"CB2934A1",300:"E1B8C8F2",304:"B4978E43",308:"0CC3C0A6",312:"AFD4C690",316:"90FE5030",320:"E8BC1BC5",324:"EEEEEEEE",328:"57C6239F",332:"8BB94F70",336:"2793E8F0",340:"4F442E67",344:"1A6FAC4F",348:"E6E8A059",352:"39153F16",356:"E0BEB5B1",360:"5BC76534",364:"8AEF888D",368:"133DFA9B",372:"153A1032",376:"6427E692",380:"0DCDC9A4",384:"CE2B03EA",388:"0BA9ED15",392:"186AD869",396:"B776638F",400:"A01BA474",404:"A6D2BF35",408:"56C8770D",412:"85BA4173",416:"B371688C",420:"658CB478",424:"0EABDBFB",428:"37160AF9",432:"6C26AF3B",436:"C92F9553",440:"B2909F72",444:"3F1082CF",448:"87B37665",452:"30DE27A5",456:"1C63557E",460:"F608E0A9",464:"9658157F",468:"756C091E",472:"FE0EAEDE",476:"84E90B96",480:"42048538",484:"1469D368",488:"94F7A682",492:"299FD712",496:"36183114",500:"1162AB4C",504:"D6F20DA0",508:"287ACEEF",512:"EBE7D1AF",516:"73619EC8",520:"88EA0C94",524:"1B391937",528:"D05B791F",532:"3B1790BD",536:"ABD9F907",540:"2D7DB954",544:"AEDBC293",548:"454A7123",552:"AC13D52E",556:"106BE424",560:"D7F33CE7",564:"59C5740E",568:"766881B4",572:"9B57C729",576:"6381CC6E",580:"9F50F364",584:"79658FB6",588:"81E2838E",592:"6220D903",596:"A4195348",600:"ECB6F413",604:"EDB1F710",608:"DA5F4EC4",612:"5CA6897A",616:"9E5EF866",620:"193FC10A",624:"E5ECDFAC",628:"6985FD2C",632:"B678473D",636:"CF2408E5",640:"E4B71CCA",644:"F905E9A8",648:"955CC428",652:"77669AC9",656:"91F8DE9A",660:"743748DB",664:"86B22921",668:"D1524AC6",672:"5AA59241",676:"0FA4DCF1",680:"03ADA3C3",684:"0ACFF6E9",688:"9756BB4D",692:"8DED943F",696:"259AA5BA",700:"F04EC511",704:"7D3175A7",708:"61285E8A",712:"CD8D2F19",716:"FF00AADD",720:"682CE297",724:"99551D7C",728:"D5FA875B",732:"A214A776",736:"B975443E",740:"82E43508",744:"9351BC4E",748:"BD913025",752:"C7238CD7",756:"DBF98451",760:"C28440BC",764:"4102339E",768:"A5DAF002",772:"9AF5DA95",776:"5ECE4C88",780:"AA1FEC6F",784:"05AAE51A",788:"E9E5A958",792:"B09E9177",796:"DEFB93DA",800:"207BFFAD",804:"04C9BADC",808:"E2B0BDBB",812:"400B8D39",816:"2479CAEC",820:"52A00F22",824:"1F34B680",828:"F240CD1B",832:"5FC04B89",836:"783C43D1",840:"AD1DDD2D",844:"58AC3A60",848:"50AE0127",852:"FB07515F",856:"F706D2E4",860:"F50C5F5C",864:"F84CFBF5",868:"7B67001D",872:"6688F52F",876:"7A352BE0",880:"4E4B2A62",884:"B198066B",888:"08CABEDF",892:"34D778EB",896:"6A255A85",900:"1632CF05",904:"9DF1E101",908:"46426971",912:"2F945CC1",916:"6786CB6D",920:"BB772504",924:"98FCA287",928:"DC5361B8",932:"1D6D5D7D",936:"7C367DA2",940:"3E1E86CC",944:"480A9C84",948:"8CE3973C",952:"C48962CE",956:"351C99BE",960:"CC832118",964:"FD4117B0",968:"2692D417",972:"C08B49BF",976:"1264E726",980:"F447FCFA",984:"4B497F20",988:"C1827AF6",992:"2B99ADB5",996:"7F6032FF",1e3:"C88A66CD",1004:"07A3A8C0",1008:"D254701C",1012:"217212D8",1016:"06A254B7",1020:"A81A5849"},dict2:{0:"00602ED0",4:"5A723064",8:"AE2274F1",12:"446F8013",16:"8BA3DD1A",20:"F7EAB5C3",24:"8644099B",28:"796B87B7",32:"F833110E",36:"9D4A0F38",40:"466E8E18",44:"573DD145",48:"81A7D31E",52:"3392F059",56:"2ABC9639",60:"ABC52A37",64:"E138DC73",68:"D2C32D8B",72:"3655CC6D",76:"B209AF57",80:"40B89C8A",84:"C2F148B8",88:"06B57C2D",92:"831E3BB2",96:"C7FA45B3",100:"316D21A1",104:"D331D86C",108:"E2D3FD3B",112:"F3239DE3",116:"6CA112EB",120:"CB2E9B5B",124:"D6E3E156",128:"FC7E6E36",132:"0F4D0D04",136:"45474346",140:"A3D9FF05",144:"E801C2F2",148:"50C6229D",152:"911733FE",156:"EDEFE0EA",160:"7B494F60",164:"98BE7E7C",168:"6A83BD72",172:"E6F301D6",176:"6354A73E",180:"4A434D42",184:"D4E7E652",188:"D03AD56B",192:"B3FC4614",196:"AA32D024",200:"D92A7F16",204:"5D00CB1F",208:"2B89BF20",212:"55703E67",216:"5E02C411",220:"FED45922",224:"0980EB3D",228:"D5DFF498",232:"B9DD5D6F",236:"4B51A896",240:"428EBB6A",244:"9C53C128",248:"562C73B0",252:"478FB46E",256:"0C4C0307",260:"F4CA8F7E",264:"755DA180",268:"0B9CF6EF",272:"523CD64D",276:"61BA9502",280:"FDD85A26",284:"3AA9DFB1",288:"99BF707B",292:"E371382C",296:"A1CB2934",300:"F2E1B8C8",304:"43B4978E",308:"A60CC3C0",312:"90AFD4C6",316:"3090FE50",320:"C5E8BC1B",324:"EEEEEEEE",328:"9F57C623",332:"708BB94F",336:"F02793E8",340:"674F442E",344:"4F1A6FAC",348:"59E6E8A0",352:"1639153F",356:"B1E0BEB5",360:"345BC765",364:"8D8AEF88",368:"9B133DFA",372:"32153A10",376:"926427E6",380:"A40DCDC9",384:"EACE2B03",388:"150BA9ED",392:"69186AD8",396:"8FB77663",400:"74A01BA4",404:"35A6D2BF",408:"0D56C877",412:"7385BA41",416:"8CB37168",420:"78658CB4",424:"FB0EABDB",428:"F937160A",432:"3B6C26AF",436:"53C92F95",440:"72B2909F",444:"CF3F1082",448:"6587B376",452:"A530DE27",456:"7E1C6355",460:"A9F608E0",464:"7F965815",468:"1E756C09",472:"DEFE0EAE",476:"9684E90B",480:"38420485",484:"681469D3",488:"8294F7A6",492:"12299FD7",496:"14361831",500:"4C1162AB",504:"A0D6F20D",508:"EF287ACE",512:"AFEBE7D1",516:"C873619E",520:"9488EA0C",524:"371B3919",528:"1FD05B79",532:"BD3B1790",536:"07ABD9F9",540:"542D7DB9",544:"93AEDBC2",548:"23454A71",552:"2EAC13D5",556:"24106BE4",560:"E7D7F33C",564:"0E59C574",568:"B4766881",572:"299B57C7",576:"6E6381CC",580:"649F50F3",584:"B679658F",588:"8E81E283",592:"036220D9",596:"48A41953",600:"13ECB6F4",604:"10EDB1F7",608:"C4DA5F4E",612:"7A5CA689",616:"669E5EF8",620:"0A193FC1",624:"ACE5ECDF",628:"2C6985FD",632:"3DB67847",636:"E5CF2408",640:"CAE4B71C",644:"A8F905E9",648:"28955CC4",652:"C977669A",656:"9A91F8DE",660:"DB743748",664:"2186B229",668:"C6D1524A",672:"415AA592",676:"F10FA4DC",680:"C303ADA3",684:"E90ACFF6",688:"4D9756BB",692:"3F8DED94",696:"BA259AA5",700:"11F04EC5",704:"A77D3175",708:"8A61285E",712:"19CD8D2F",716:"DDFF00AA",720:"97682CE2",724:"7C99551D",728:"5BD5FA87",732:"76A214A7",736:"3EB97544",740:"0882E435",744:"4E9351BC",748:"25BD9130",752:"D7C7238C",756:"51DBF984",760:"BCC28440",764:"9E410233",768:"02A5DAF0",772:"959AF5DA",776:"885ECE4C",780:"6FAA1FEC",784:"1A05AAE5",788:"58E9E5A9",792:"77B09E91",796:"DADEFB93",800:"AD207BFF",804:"DC04C9BA",808:"BBE2B0BD",812:"39400B8D",816:"EC2479CA",820:"2252A00F",824:"801F34B6",828:"1BF240CD",832:"895FC04B",836:"D1783C43",840:"2DAD1DDD",844:"6058AC3A",848:"2750AE01",852:"5FFB0751",856:"E4F706D2",860:"5CF50C5F",864:"F5F84CFB",868:"1D7B6700",872:"2F6688F5",876:"E07A352B",880:"624E4B2A",884:"6BB19806",888:"DF08CABE",892:"EB34D778",896:"856A255A",900:"051632CF",904:"019DF1E1",908:"71464269",912:"C12F945C",916:"6D6786CB",920:"04BB7725",924:"8798FCA2",928:"B8DC5361",932:"7D1D6D5D",936:"A27C367D",940:"CC3E1E86",944:"84480A9C",948:"3C8CE397",952:"CEC48962",956:"BE351C99",960:"18CC8321",964:"B0FD4117",968:"172692D4",972:"BFC08B49",976:"261264E7",980:"FAF447FC",984:"204B497F",988:"F6C1827A",992:"B52B99AD",996:"FF7F6032",1e3:"CDC88A66",1004:"C007A3A8",1008:"1CD25470",1012:"D8217212",1016:"B706A254",1020:"49A81A58"},dict3:{0:"D000602E",4:"645A7230",8:"F1AE2274",12:"13446F80",16:"1A8BA3DD",20:"C3F7EAB5",24:"9B864409",28:"B7796B87",32:"0EF83311",36:"389D4A0F",40:"18466E8E",44:"45573DD1",48:"1E81A7D3",52:"593392F0",56:"392ABC96",60:"37ABC52A",64:"73E138DC",68:"8BD2C32D",72:"6D3655CC",76:"57B209AF",80:"8A40B89C",84:"B8C2F148",88:"2D06B57C",92:"B2831E3B",96:"B3C7FA45",100:"A1316D21",104:"6CD331D8",108:"3BE2D3FD",112:"E3F3239D",116:"EB6CA112",120:"5BCB2E9B",124:"56D6E3E1",128:"36FC7E6E",132:"040F4D0D",136:"46454743",140:"05A3D9FF",144:"F2E801C2",148:"9D50C622",152:"FE911733",156:"EAEDEFE0",160:"607B494F",164:"7C98BE7E",168:"726A83BD",172:"D6E6F301",176:"3E6354A7",180:"424A434D",184:"52D4E7E6",188:"6BD03AD5",192:"14B3FC46",196:"24AA32D0",200:"16D92A7F",204:"1F5D00CB",208:"202B89BF",212:"6755703E",216:"115E02C4",220:"22FED459",224:"3D0980EB",228:"98D5DFF4",232:"6FB9DD5D",236:"964B51A8",240:"6A428EBB",244:"289C53C1",248:"B0562C73",252:"6E478FB4",256:"070C4C03",260:"7EF4CA8F",264:"80755DA1",268:"EF0B9CF6",272:"4D523CD6",276:"0261BA95",280:"26FDD85A",284:"B13AA9DF",288:"7B99BF70",292:"2CE37138",296:"34A1CB29",300:"C8F2E1B8",304:"8E43B497",308:"C0A60CC3",312:"C690AFD4",316:"503090FE",320:"1BC5E8BC",324:"EEEEEEEE",328:"239F57C6",332:"4F708BB9",336:"E8F02793",340:"2E674F44",344:"AC4F1A6F",348:"A059E6E8",352:"3F163915",356:"B5B1E0BE",360:"65345BC7",364:"888D8AEF",368:"FA9B133D",372:"1032153A",376:"E6926427",380:"C9A40DCD",384:"03EACE2B",388:"ED150BA9",392:"D869186A",396:"638FB776",400:"A474A01B",404:"BF35A6D2",408:"770D56C8",412:"417385BA",416:"688CB371",420:"B478658C",424:"DBFB0EAB",428:"0AF93716",432:"AF3B6C26",436:"9553C92F",440:"9F72B290",444:"82CF3F10",448:"766587B3",452:"27A530DE",456:"557E1C63",460:"E0A9F608",464:"157F9658",468:"091E756C",472:"AEDEFE0E",476:"0B9684E9",480:"85384204",484:"D3681469",488:"A68294F7",492:"D712299F",496:"31143618",500:"AB4C1162",504:"0DA0D6F2",508:"CEEF287A",512:"D1AFEBE7",516:"9EC87361",520:"0C9488EA",524:"19371B39",528:"791FD05B",532:"90BD3B17",536:"F907ABD9",540:"B9542D7D",544:"C293AEDB",548:"7123454A",552:"D52EAC13",556:"E424106B",560:"3CE7D7F3",564:"740E59C5",568:"81B47668",572:"C7299B57",576:"CC6E6381",580:"F3649F50",584:"8FB67965",588:"838E81E2",592:"D9036220",596:"5348A419",600:"F413ECB6",604:"F710EDB1",608:"4EC4DA5F",612:"897A5CA6",616:"F8669E5E",620:"C10A193F",624:"DFACE5EC",628:"FD2C6985",632:"473DB678",636:"08E5CF24",640:"1CCAE4B7",644:"E9A8F905",648:"C428955C",652:"9AC97766",656:"DE9A91F8",660:"48DB7437",664:"292186B2",668:"4AC6D152",672:"92415AA5",676:"DCF10FA4",680:"A3C303AD",684:"F6E90ACF",688:"BB4D9756",692:"943F8DED",696:"A5BA259A",700:"C511F04E",704:"75A77D31",708:"5E8A6128",712:"2F19CD8D",716:"AADDFF00",720:"E297682C",724:"1D7C9955",728:"875BD5FA",732:"A776A214",736:"443EB975",740:"350882E4",744:"BC4E9351",748:"3025BD91",752:"8CD7C723",756:"8451DBF9",760:"40BCC284",764:"339E4102",768:"F002A5DA",772:"DA959AF5",776:"4C885ECE",780:"EC6FAA1F",784:"E51A05AA",788:"A958E9E5",792:"9177B09E",796:"93DADEFB",800:"FFAD207B",804:"BADC04C9",808:"BDBBE2B0",812:"8D39400B",816:"CAEC2479",820:"0F2252A0",824:"B6801F34",828:"CD1BF240",832:"4B895FC0",836:"43D1783C",840:"DD2DAD1D",844:"3A6058AC",848:"012750AE",852:"515FFB07",856:"D2E4F706",860:"5F5CF50C",864:"FBF5F84C",868:"001D7B67",872:"F52F6688",876:"2BE07A35",880:"2A624E4B",884:"066BB198",888:"BEDF08CA",892:"78EB34D7",896:"5A856A25",900:"CF051632",904:"E1019DF1",908:"69714642",912:"5CC12F94",916:"CB6D6786",920:"2504BB77",924:"A28798FC",928:"61B8DC53",932:"5D7D1D6D",936:"7DA27C36",940:"86CC3E1E",944:"9C84480A",948:"973C8CE3",952:"62CEC489",956:"99BE351C",960:"2118CC83",964:"17B0FD41",968:"D4172692",972:"49BFC08B",976:"E7261264",980:"FCFAF447",984:"7F204B49",988:"7AF6C182",992:"ADB52B99",996:"32FF7F60",1e3:"66CDC88A",1004:"A8C007A3",1008:"701CD254",1012:"12D82172",1016:"54B706A2",1020:"5849A81A"},dict4:{0:"2ED00060",4:"30645A72",8:"74F1AE22",12:"8013446F",16:"DD1A8BA3",20:"B5C3F7EA",24:"099B8644",28:"87B7796B",32:"110EF833",36:"0F389D4A",40:"8E18466E",44:"D145573D",48:"D31E81A7",52:"F0593392",56:"96392ABC",60:"2A37ABC5",64:"DC73E138",68:"2D8BD2C3",72:"CC6D3655",76:"AF57B209",80:"9C8A40B8",84:"48B8C2F1",88:"7C2D06B5",92:"3BB2831E",96:"45B3C7FA",100:"21A1316D",104:"D86CD331",108:"FD3BE2D3",112:"9DE3F323",116:"12EB6CA1",120:"9B5BCB2E",124:"E156D6E3",128:"6E36FC7E",132:"0D040F4D",136:"43464547",140:"FF05A3D9",144:"C2F2E801",148:"229D50C6",152:"33FE9117",156:"E0EAEDEF",160:"4F607B49",164:"7E7C98BE",168:"BD726A83",172:"01D6E6F3",176:"A73E6354",180:"4D424A43",184:"E652D4E7",188:"D56BD03A",192:"4614B3FC",196:"D024AA32",200:"7F16D92A",204:"CB1F5D00",208:"BF202B89",212:"3E675570",216:"C4115E02",220:"5922FED4",224:"EB3D0980",228:"F498D5DF",232:"5D6FB9DD",236:"A8964B51",240:"BB6A428E",244:"C1289C53",248:"73B0562C",252:"B46E478F",256:"03070C4C",260:"8F7EF4CA",264:"A180755D",268:"F6EF0B9C",272:"D64D523C",276:"950261BA",280:"5A26FDD8",284:"DFB13AA9",288:"707B99BF",292:"382CE371",296:"2934A1CB",300:"B8C8F2E1",304:"978E43B4",308:"C3C0A60C",312:"D4C690AF",316:"FE503090",320:"BC1BC5E8",324:"EEEEEEEE",328:"C6239F57",332:"B94F708B",336:"93E8F027",340:"442E674F",344:"6FAC4F1A",348:"E8A059E6",352:"153F1639",356:"BEB5B1E0",360:"C765345B",364:"EF888D8A",368:"3DFA9B13",372:"3A103215",376:"27E69264",380:"CDC9A40D",384:"2B03EACE",388:"A9ED150B",392:"6AD86918",396:"76638FB7",400:"1BA474A0",404:"D2BF35A6",408:"C8770D56",412:"BA417385",416:"71688CB3",420:"8CB47865",424:"ABDBFB0E",428:"160AF937",432:"26AF3B6C",436:"2F9553C9",440:"909F72B2",444:"1082CF3F",448:"B3766587",452:"DE27A530",456:"63557E1C",460:"08E0A9F6",464:"58157F96",468:"6C091E75",472:"0EAEDEFE",476:"E90B9684",480:"04853842",484:"69D36814",488:"F7A68294",492:"9FD71229",496:"18311436",500:"62AB4C11",504:"F20DA0D6",508:"7ACEEF28",512:"E7D1AFEB",516:"619EC873",520:"EA0C9488",524:"3919371B",528:"5B791FD0",532:"1790BD3B",536:"D9F907AB",540:"7DB9542D",544:"DBC293AE",548:"4A712345",552:"13D52EAC",556:"6BE42410",560:"F33CE7D7",564:"C5740E59",568:"6881B476",572:"57C7299B",576:"81CC6E63",580:"50F3649F",584:"658FB679",588:"E2838E81",592:"20D90362",596:"195348A4",600:"B6F413EC",604:"B1F710ED",608:"5F4EC4DA",612:"A6897A5C",616:"5EF8669E",620:"3FC10A19",624:"ECDFACE5",628:"85FD2C69",632:"78473DB6",636:"2408E5CF",640:"B71CCAE4",644:"05E9A8F9",648:"5CC42895",652:"669AC977",656:"F8DE9A91",660:"3748DB74",664:"B2292186",668:"524AC6D1",672:"A592415A",676:"A4DCF10F",680:"ADA3C303",684:"CFF6E90A",688:"56BB4D97",692:"ED943F8D",696:"9AA5BA25",700:"4EC511F0",704:"3175A77D",708:"285E8A61",712:"8D2F19CD",716:"00AADDFF",720:"2CE29768",724:"551D7C99",728:"FA875BD5",732:"14A776A2",736:"75443EB9",740:"E4350882",744:"51BC4E93",748:"913025BD",752:"238CD7C7",756:"F98451DB",760:"8440BCC2",764:"02339E41",768:"DAF002A5",772:"F5DA959A",776:"CE4C885E",780:"1FEC6FAA",784:"AAE51A05",788:"E5A958E9",792:"9E9177B0",796:"FB93DADE",800:"7BFFAD20",804:"C9BADC04",808:"B0BDBBE2",812:"0B8D3940",816:"79CAEC24",820:"A00F2252",824:"34B6801F",828:"40CD1BF2",832:"C04B895F",836:"3C43D178",840:"1DDD2DAD",844:"AC3A6058",848:"AE012750",852:"07515FFB",856:"06D2E4F7",860:"0C5F5CF5",864:"4CFBF5F8",868:"67001D7B",872:"88F52F66",876:"352BE07A",880:"4B2A624E",884:"98066BB1",888:"CABEDF08",892:"D778EB34",896:"255A856A",900:"32CF0516",904:"F1E1019D",908:"42697146",912:"945CC12F",916:"86CB6D67",920:"772504BB",924:"FCA28798",928:"5361B8DC",932:"6D5D7D1D",936:"367DA27C",940:"1E86CC3E",944:"0A9C8448",948:"E3973C8C",952:"8962CEC4",956:"1C99BE35",960:"832118CC",964:"4117B0FD",968:"92D41726",972:"8B49BFC0",976:"64E72612",980:"47FCFAF4",984:"497F204B",988:"827AF6C1",992:"99ADB52B",996:"6032FF7F",1e3:"8A66CDC8",1004:"A3A8C007",1008:"54701CD2",1012:"7212D821",1016:"A254B706",1020:"1A5849A8"},dict5:{0:"80",1:"33",2:"BC",3:"29",4:"67",5:"1C",6:"12",7:"47",8:"5F",9:"F2",10:"2C",11:"F3",12:"6A",13:"FB",14:"05",15:"A8",16:"CD",17:"55",18:"D3",19:"64",20:"3F",21:"39",22:"63",23:"5A",24:"3C",25:"3B",26:"BD",27:"25",28:"A0",29:"90",30:"EB",31:"A4",32:"68",33:"B8",34:"E3",35:"4F",36:"37",37:"E8",38:"DA",39:"E4",40:"5D",41:"76",42:"41",43:"74",44:"18",45:"E1",46:"AE",47:"B6",48:"97",49:"13",50:"1A",51:"09",52:"2D",53:"31",54:"0C",55:"93",56:"9F",57:"65",58:"86",59:"FF",60:"73",61:"ED",62:"C9",63:"71",64:"BF",65:"B3",66:"B2",67:"10",68:"F1",69:"88",70:"91",71:"79",72:"7D",73:"0D",74:"AF",75:"19",76:"38",77:"99",78:"27",79:"F0",80:"F9",81:"EE",82:"E6",83:"6D",84:"AB",85:"A1",86:"CB",87:"DB",88:"E5",89:"B7",90:"D1",91:"82",92:"D7",93:"EC",94:"0E",95:"9C",96:"D2",97:"24",98:"B0",99:"46",100:"84",101:"7C",102:"53",103:"66",104:"4D",105:"4A",106:"4B",107:"58",108:"30",109:"EF",110:"92",111:"DF",112:"43",113:"11",114:"14",115:"6B",116:"AA",117:"72",118:"4E",119:"32",120:"C8",121:"BB",122:"BE",123:"D4",124:"E2",125:"C0",126:"48",127:"F7",128:"50",129:"2F",130:"35",131:"E9",132:"3D",133:"A5",134:"49",135:"CC",136:"2A",137:"D6",138:"34",139:"F4",140:"22",141:"51",142:"42",143:"E7",144:"69",145:"59",146:"45",147:"85",148:"8B",149:"0B",150:"C7",151:"CA",152:"03",153:"B5",154:"5C",155:"A9",156:"5B",157:"77",158:"23",159:"D5",160:"FC",161:"60",162:"EA",163:"28",164:"C4",165:"96",166:"26",167:"01",168:"F8",169:"40",170:"70",171:"3A",172:"DC",173:"08",174:"5E",175:"07",176:"83",177:"94",178:"F6",179:"44",180:"04",181:"A7",182:"78",183:"8E",184:"21",185:"98",186:"D9",187:"02",188:"52",189:"7F",190:"16",191:"F5",192:"4C",193:"CE",194:"A6",195:"9B",196:"2E",197:"D0",198:"95",199:"62",200:"B9",201:"8A",202:"BA",203:"CF",204:"FA",205:"C2",206:"57",207:"0A",208:"AD",209:"9D",210:"3E",211:"1F",212:"C5",213:"20",214:"7E",215:"2B",216:"89",217:"75",218:"7A",219:"06",220:"A3",221:"8F",222:"87",223:"C6",224:"9E",225:"AC",226:"1B",227:"56",228:"E0",229:"6C",230:"61",231:"B4",232:"8D",233:"1E",234:"81",235:"D8",236:"15",237:"0F",238:"C3",239:"A2",240:"FD",241:"9A",242:"DE",243:"1D",244:"FE",245:"8C",246:"DD",247:"B1",248:"54",249:"6F",250:"C1",251:"7B",252:"36",253:"17",254:"6E",255:"00"},input_arr:[0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15,32,34,33,35,36,38,37,39,40,42,41,43,44,46,45,47,16,18,17,19,20,22,21,23,24,26,25,27,28,30,29,31,48,50,49,51,52,54,53,55,56,58,57,59,60,62,61,63,64,66,65,67,68,70,69,71,72,74,73,75,76,78,77,79,96,98,97,99,100,102,101,103,104,106,105,107,108,110,109,111,80,82,81,83,84,86,85,87,88,90,89,91,92,94,93,95,112,114,113,115,116,118,117,119,120,122,121,123,124,126,125,127,128,130,129,131,132,134,133,135,136,138,137,139,140,142,141,143,160,162,161,163,164,166,165,167,168,170,169,171,172,174,173,175,144,146,145,147,148,150,149,151,152,154,153,155,156,158,157,159,176,178,177,179,180,182,181,183,184,186,185,187,188,190,189,191,192,194,193,195,196,198,197,199,200,202,201,203,204,206,205,207,224,226,225,227,228,230,229,231,232,234,233,235,236,238,237,239,208,210,209,211,212,214,213,215,216,218,217,219,220,222,221,223,240,242,241,243,244,246,245,247,248,250,249,251,252,254,253,255],iv_arr:[0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15,32,34,33,35,36,38,37,39,40,42,41,43,44,46,45,47,16,18,17,19,20,22,21,23,24,26,25,27,28,30,29,31,48,50,49,51,52,54,53,55,56,58,57,59,60,62,61,63,64,66,65,67,68,70,69,71,72,74,73,75,76,78,77,79,96,98,97,99,100,102,101,103,104,106,105,107,108,110,109,111,80,82,81,83,84,86,85,87,88,90,89,91,92,94,93,95,112,114,113,115,116,118,117,119,120,122,121,123,124,126,125,127,128,130,129,131,132,134,133,135,136,138,137,139,140,142,141,143,160,162,161,163,164,166,165,167,168,170,169,171,172,174,173,175,144,146,145,147,148,150,149,151,152,154,153,155,156,158,157,159,176,178,177,179,180,182,181,183,184,186,185,187,188,190,189,191,192,194,193,195,196,198,197,199,200,202,201,203,204,206,205,207,224,226,225,227,228,230,229,231,232,234,233,235,236,238,237,239,208,210,209,211,212,214,213,215,216,218,217,219,220,222,221,223,240,242,241,243,244,246,245,247,248,250,249,251,252,254,253,255],out_arr:[102,100,103,101,98,96,99,97,110,108,111,109,106,104,107,105,70,68,71,69,66,64,67,65,78,76,79,77,74,72,75,73,118,116,119,117,114,112,115,113,126,124,127,125,122,120,123,121,86,84,87,85,82,80,83,81,94,92,95,93,90,88,91,89,38,36,39,37,34,32,35,33,46,44,47,45,42,40,43,41,6,4,7,5,2,0,3,1,14,12,15,13,10,8,11,9,54,52,55,53,50,48,51,49,62,60,63,61,58,56,59,57,22,20,23,21,18,16,19,17,30,28,31,29,26,24,27,25,230,228,231,229,226,224,227,225,238,236,239,237,234,232,235,233,198,196,199,197,194,192,195,193,206,204,207,205,202,200,203,201,246,244,247,245,242,240,243,241,254,252,255,253,250,248,251,249,214,212,215,213,210,208,211,209,222,220,223,221,218,216,219,217,166,164,167,165,162,160,163,161,174,172,175,173,170,168,171,169,134,132,135,133,130,128,131,129,142,140,143,141,138,136,139,137,182,180,183,181,178,176,179,177,190,188,191,189,186,184,187,185,150,148,151,149,146,144,147,145,158,156,159,157,154,152,155,153]};return Gs=new Xe(e,t),Gs}window.getLAESInstance=ka;const Fn="10.12.0",Sa="101_1_1.0",eh="21210",Vr="com.zhihu.android";class th{constructor({encryptData:t,loginData:s,zsts:o={},defaultHeaders:n={}}){if(typeof t!="function")throw new Error("必须提供 encryptData 加密函数");if(console.log("BindLoginData:",s),this.udid=s.udid,!this.udid)throw new Error("提供 loginData 缺少 udid，请先使用游客登录获取 udid");s=s.guest||s,this.accessToken="Bearer "+s.access_token,this.cookie=Object.entries(s.cookie||{}).filter(([d,l])=>l).map(([d,l])=>`${d}=${l}`).join("; ");const[r,i]=Array.isArray(o)?o:[];this.zst81=i,this.zst82=r,this.encryptData=t.bind(this);const a=`OS=Android&Release=15&Model=Pixel&VersionName=10.12.0&VersionCode=${eh}&Product=com.zhihu.android&Installer=Google+Play&DeviceType=AndroidPhone`,c=`${Vr}/Futureve/${Fn} Mozilla/5.0 (Linux; Android; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.1000.10 Mobile Safari/537.36`;this.commonDefaultHeaders={"User-Agent":c,"x-Zse-93":Sa,...this.cookie&&{Cookie:this.cookie},...this.accessToken&&{Authorization:this.accessToken},...this.udid&&{"x-udid":this.udid},...this.zst81&&{"X-ZST-81":this.zst81},...this.zst82&&{"X-ZST-82":this.zst82},...n},this.appSpecificHeaders={"x-api-version":"3.0.93","x-app-version":Fn,"x-app-za":a,"x-app-bundleid":Vr,"x-app-flavor":"play","x-app-build":"release"},this.defaultHeaders={...this.commonDefaultHeaders,...this.appSpecificHeaders}}async request(t,s,o={},{headers:n={},encryptBody:r=!0,isWWW:i=!1}={}){t=t.toUpperCase();const a=t==="GET";let c=this.commonDefaultHeaders;i||(c=this.defaultHeaders);const d={...c,...n,...a&&{"x-Zse-96":`1.0_${this.encryptData(s)}`}};let l=null;!a&&o&&(l=!o||Object.keys(o).length===0?"":r?this.encryptData(o,!0):JSON.stringify(o),d["Content-Type"]=r?"application/x-www-form-urlencoded":"application/json");try{console.log(`[ZhihuRequest] ${t} ${s}`);const u=await $a(s,{method:t,headers:d,body:l});if(!u.ok){const p=new Error(`HTTP ${u.status}`);throw p.response=u,p}return u.json()}catch(u){throw console.error(`[ZhihuRequest] ${t} ${s} failed:`,u),u}}get(t,s){return this.request("GET",t,null,s)}post(t,s,o){return this.request("POST",t,s,o)}patch(t,s,o){return this.request("PATCH",t,s,o)}put(t,s,o){return this.request("PUT",t,s,o)}delete(t,s){return this.request("DELETE",t,null,s)}}let to=null;const sh=ka();function oh({loginData:e,zsts:t,defaultHeaders:s}){const o=sh.createEncryptor("541a3a5896fbefd351917c8251328a236a7efbf27d0fad8283ef59ef07aa386dbb2b1fcbba167135d575877ba0205a02f0aac2d31957bc7f028ed5888d4bbe69ed6768efc15ab703dc0f406b301845a0a64cf3c427c82870053bd7ba6721649c3a9aca8c3c31710a6be5ce71e4686842732d9314d6898cc3fdca075db46d1ccf3a7f9b20615f4a303c5235bd02c5cdc791eb123b9d9f7e72e954de3bcbf7d314064a1eced78d13679d040dd4080640d18c37bbde",[102,48,53,53,49,56,53,54,97,97,53,55,53,102,97,97]);function n(r,i=!1){if(!i&&typeof r!="string")throw new Error("URL data must be a string");if(i&&typeof r!="string")throw new Error("Form data must be a string");if(i)r=btoa(encodeURIComponent(r));else{const a="https://api.zhihu.com";if(r.startsWith("http://api.zhihu.com")&&(r=r.replace("http://","https://")),!r.startsWith(a))throw new Error(`URL must start with ${a}`);const c=r.slice(a.length);r=`${Sa}+${c}+${Fn}+${this.accessToken}+${this.udid}`,r=md5(r)}return o(r)}return e||(e={udid:"UraTB9TKRhtLBYAOB4UmHKrPn18Tg811TFQ=",guest:{access_token:"gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ==",token_type:"bearer",user_type:"guest",id:"30f6dfae636d89c2078c6c0676a2929f",uid:1965481299495085e3,push_channel:"pm_n_4c16eb12348347b7ad35126bb50e61d4",URL:"",cookie:{q_c0:"",z_c0:"gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ=="},created_at:0}},t=["2.0IeUTj9TKRhsMAAAASwUAADIuMPui_GgAAAAAngWRhxBicaoZtrn_UBY16lmTsmU=","2uSTcNTKRhsbYMgVuWpD4QRnkRP48-uihQ9CAA=="],s={"x-ms-id":"DUzQXhjAQDuNnnrXUZuXcZAHclw7VipDNE79RFV6UVhoakFRRHVObm5yWFVadVhjWkFIY2x3N1ZpcERORTc5c2h1"}),to=new th({encryptData:n,loginData:e,zsts:t,defaultHeaders:s}),window.$zhihu=to,console.log("ZhihuRequest 已全局初始化"),to}function Mt(){return to}class mo{constructor(t,s,o){this.data=t,this.paging=s||{next:null,prev:null},this.options=o}async next(){if(!this.paging.next)return null;const s=await Mt().get(this.paging.next,this.options);return new mo(s.data,s.paging,this.options)}async prev(){if(!this.paging.prev)return null;const s=await Mt().get(this.paging.prev,this.options);return new mo(s.data,s.paging,this.options)}}const go={get(e,t={}){return Mt().get(e,t).then(o=>new mo(o.data,o.paging,t))},post(e,t={},s={}){return Mt().post(e,t,s).then(n=>n.data)},patch(e,t={},s={}){return Mt().patch(e,t,s).then(n=>n.data)},put(e,t={},s={}){return Mt().put(e,t,s).then(n=>n.data)},delete(e,t={}){return Mt().delete(e,t).then(o=>o.data)}},nh=["showed"],rh={class:"comments-container"},ih={class:"header"},ah={key:0,class:"header-left"},lh={class:"title"},ch={key:1,class:"header-left"},dh={class:"title"},uh={class:"scroll-view"},ph={key:0,class:"replies-view"},fh={class:"comment-item main-comment"},hh=["src"],xh={class:"comment-content"},mh={class:"comment-header"},gh={class:"username"},vh={class:"timestamp"},bh={class:"text"},yh={class:"comments-list replies-container"},Eh=["src"],Ch={class:"comment-content"},Ah={class:"comment-header"},Fh={class:"user-info"},Dh={class:"username"},Bh={key:0,class:"reply-badge"},wh={class:"timestamp"},_h={class:"text"},$h={class:"actions"},kh=["onClick"],Sh=["onClick"],Th={key:0,class:"loading-spinner"},Mh={key:1},Lh={key:0,class:"loading-state"},Ih={key:1,class:"error-state"},qh={key:2,class:"empty-state"},Rh={key:3,class:"comments-list"},zh=["src"],Ph={class:"comment-content"},Oh={class:"comment-header"},Nh={class:"user-info"},Hh={class:"username"},Vh={key:0,class:"location-badge"},jh={class:"timestamp"},Uh={class:"text"},Wh={class:"actions"},Kh=["onClick"],Zh=["onClick"],Gh={key:0,class:"replies-toggle"},Yh=["onClick"],Xh={key:0,class:"text-center mt-4"},Jh=["disabled"],Qh={key:0,class:"loading-spinner mr-2"},e4={class:"footer"},t4={key:0,class:"reply-context"},s4=["label"],o4={type:"filled",class:"send-btn",slot:"end"},n4={__name:"CommentsSheet",props:{modelValue:Boolean,resourceType:{type:String,required:!0},resourceId:{type:[String,Number],required:!0}},emits:["update:modelValue","reply","like"],setup(e,{emit:t}){const s=e,o=t,n=se([]),r=se(0),i=se(null),a=se(!1),c=se(null),d=se(null),l=se(""),u=se(null),p=se(!1),h=R=>{const z=R.replies_count||R.child_comment_count||0;return{id:R.id,author_name:R.author?.member?.name||"匿名用户",author_avatar:R.author?.member?.avatar_url,ip_location:R.address_text||null,content:R.content,like_count:R.vote_count||0,created_time:new Date(R.created_time*1e3).toLocaleDateString(),replies_count:z,reply_to_author:R.reply_to_author?.member?.name||null,child_result:null,child_comments:[],child_comments_loading:!1}},v=R=>R==="p"?"articles":R==="answer"?"answers":R,C=async(R=!1)=>{if(!a.value){a.value=!0,c.value=null;try{let z;if(R&&i.value)z=await i.value.next();else{const g=`https://api.zhihu.com/${v(s.resourceType)}/${s.resourceId}/comments?limit=20&order=normal`;z=await go.get(g)}if(!z){a.value=!1;return}const q=z.data.map(h);R?n.value.push(...q):(n.value=q,r.value=z.paging?.totals||z.data.length),i.value=z}catch(z){console.error("Failed to load comments:",z),c.value="评论加载失败"}finally{a.value=!1}}},B=async R=>{u.value=R,R.replies_count>0&&(p.value=!0,await f(R),p.value=!1)},x=()=>{u.value&&(u.value.child_comments=[]),u.value=null},f=async(R,z=!1)=>{if(!R.child_comments_loading){R.child_comments_loading=!0;try{let q;if(z&&R.child_result)q=await R.child_result.next();else{const y=`https://api.zhihu.com/comments/${R.id}/replies?limit=20`;q=await go.get(y),q.data.length>0&&q.data[0].id==R.id&&(q.data=q.data.slice(1))}if(!q){R.child_comments_loading=!1;return}const g=q.data.map(h);z?R.child_comments.push(...g):R.child_comments=g,R.child_result=q}catch(q){console.error("Failed to load child comments:",q)}finally{R.child_comments_loading=!1}}},A=()=>{o("update:modelValue",!1)},w=R=>{d.value=R.author_name},P=()=>{d.value=null,l.value=""};return qt(()=>s.modelValue,R=>{R&&(n.value=[],r.value=0,i.value=null,c.value=null,u.value=null,d.value=null,l.value="",s.resourceType&&s.resourceId&&C())}),(R,z)=>($(),M("s-dialog",{showed:e.modelValue,onClose:A},[z[7]||(z[7]=m("div",{slot:"trigger",style:{display:"none"}},null,-1)),m("div",rh,[m("div",ih,[u.value?($(),M("div",ah,[m("s-icon-button",{onClick:x},[N(Q,{icon:"arrow_back"})]),m("span",lh,"评论回复 ("+j(u.value.replies_count)+")",1)])):($(),M("div",ch,[m("span",dh,j(r.value)+" 条评论",1)])),m("s-icon-button",{onClick:A},[N(Q,{icon:"close"})])]),m("s-scroll-view",uh,[u.value?($(),M("div",ph,[m("div",fh,[m("img",{src:u.value.author_avatar,class:"avatar",onerror:"this.src='https://placehold.co/40x40/6366f1/ffffff?text=U'"},null,8,hh),m("div",xh,[m("div",mh,[m("span",gh,j(u.value.author_name),1),m("span",vh,j(u.value.created_time),1)]),m("p",bh,j(u.value.content),1)])]),z[4]||(z[4]=m("div",{class:"replies-label"},"全部回复",-1)),m("div",yh,[($(!0),M(pe,null,we(u.value.child_comments,q=>($(),M("div",{key:q.id,class:"comment-item"},[m("img",{src:q.author_avatar,class:"avatar small",onerror:"this.src='https://placehold.co/30x30/6366f1/ffffff?text=U'"},null,8,Eh),m("div",Ch,[m("div",Ah,[m("div",Fh,[m("span",Dh,j(q.author_name),1),q.reply_to_author?($(),M("span",Bh,[N(Q,{icon:"arrow_right",size:14}),Fe(" "+j(q.reply_to_author),1)])):ce("",!0)]),m("span",wh,j(q.created_time),1)]),m("p",_h,j(q.content),1),m("div",$h,[m("button",{class:"action-btn",onClick:g=>o("like",q.id)},[N(Q,{icon:"thumb_up",size:16}),Fe(" "+j(q.like_count),1)],8,kh),m("button",{class:"action-btn",onClick:g=>w(q)},[N(Q,{icon:"chat_bubble",size:16}),z[3]||(z[3]=Fe(" 回复 ",-1))],8,Sh)])])]))),128)),u.value.child_result?.paging?.next?($(),M("button",{key:0,class:"load-more-btn",onClick:z[0]||(z[0]=q=>f(u.value,!0))},[u.value.child_comments_loading?($(),M("span",Th,[N(Q,{icon:"progress_activity",size:16,class:"spin"})])):ce("",!0),Fe(" "+j(u.value.child_comments_loading?"正在加载...":"加载更多回复..."),1)])):ce("",!0)])])):($(),M("div",Mh,[a.value&&n.value.length===0?($(),M("div",Lh,[N(Q,{icon:"progress_activity",size:24,class:"spin primary-color"}),z[5]||(z[5]=Fe(" 正在加载评论... ",-1))])):c.value?($(),M("div",Ih,[N(Q,{icon:"error",size:24}),Fe(" "+j(c.value),1)])):n.value.length===0?($(),M("div",qh," 暂无评论，快来抢沙发吧~ ")):($(),M("div",Rh,[($(!0),M(pe,null,we(n.value,q=>($(),M("div",{key:q.id,class:"comment-item"},[m("img",{src:q.author_avatar,class:"avatar",onerror:"this.src='https://placehold.co/40x40/6366f1/ffffff?text=U'"},null,8,zh),m("div",Ph,[m("div",Oh,[m("div",Nh,[m("span",Hh,j(q.author_name),1),q.ip_location?($(),M("span",Vh,[N(Q,{icon:"location_on",size:14}),Fe(" "+j(q.ip_location),1)])):ce("",!0)]),m("span",jh,j(q.created_time),1)]),m("p",Uh,j(q.content),1),m("div",Wh,[m("button",{class:"action-btn",onClick:g=>o("like",q.id)},[N(Q,{icon:"thumb_up",size:16}),Fe(" "+j(q.like_count),1)],8,Kh),m("button",{class:"action-btn",onClick:g=>w(q)},[N(Q,{icon:"chat_bubble",size:16}),z[6]||(z[6]=Fe(" 回复 ",-1))],8,Zh)]),q.replies_count>0?($(),M("div",Gh,[m("button",{class:"toggle-btn",onClick:g=>B(q)},[Fe(" 查看全部 "+j(q.replies_count)+" 条回复 ",1),N(Q,{icon:"chevron_right",size:16})],8,Yh)])):ce("",!0)])]))),128)),i.value?.paging?.next?($(),M("div",Xh,[m("button",{class:"load-more-btn",disabled:a.value,onClick:z[1]||(z[1]=q=>C(!0))},[a.value?($(),M("span",Qh,[N(Q,{icon:"progress_activity",size:16,class:"spin"})])):ce("",!0),Fe(" "+j(a.value?"正在加载更多评论...":"加载更多评论"),1)],8,Jh)])):ce("",!0)]))]))]),m("div",e4,[d.value?($(),M("div",t4,[m("span",null,"回复: @"+j(d.value),1),m("button",{onClick:P,class:"close-reply"},[N(Q,{icon:"close",size:16})])])):ce("",!0),Ai(m("s-text-field",{label:d.value?`回复 ${d.value}...`:"友善评论，精彩互动...","onUpdate:modelValue":z[2]||(z[2]=q=>l.value=q),class:"input-field"},[m("s-icon-button",o4,[N(Q,{icon:"send",size:18})])],8,s4),[[na,l.value]])])])],40,nh))}},r4=Re(n4,[["__scopeId","data-v-b337231f"]]),i4={class:"article-detail"},a4={key:0,class:"loading-container"},l4={class:"top-bar glass"},c4={class:"left-actions"},d4={class:"article-title"},u4={class:"right-actions"},p4={key:0,class:"toc-popover glass"},f4={class:"toc-list"},h4=["onClick"],x4={class:"main-scroll"},m4={key:0,class:"hero-image-container"},g4=["src"],v4={class:"content-wrapper"},b4=["src"],y4={class:"card-info"},E4={class:"card-name"},C4={key:0,class:"toc-card"},A4=["onClick"],F4={key:1,class:"image-gallery"},D4=["value"],B4={class:"bottom-float-container"},w4={class:"float-bar glass"},_4={class:"action-group"},$4={class:"action-count"},k4={class:"action-count"},S4={__name:"ArticleDetail",setup(e){const t=gs(),s=Yt(),o=se(null),n=se(!0),r=se(!1),i=se(!1),a=se([]),c=se(!1);se(null);const d=se([]),l=se(0),{type:u,id:p}=t.params,h=Be(()=>a.value.length<=3||c.value?a.value:a.value.slice(0,3)),v=async()=>{n.value=!0;try{const f=u==="p"?"article":u,A=await $zhihu.get(`https://api.zhihu.com/${f}s/v2/${p}`);let w=A.structured_content?.segments?[...A.structured_content.segments]:[];A.relationship_tips&&w.unshift({type:"myapptip",myapptip:{text:A.relationship_tips.text}}),A.video&&w.unshift({type:"video",video:{id:A.video.attachment_id,title:A.video.title}});let P="未知";const R=A.content_end_info;R&&(P=R.update_time_text||R.create_time_text||"未知",R.ip_info&&(P+=` · ${R.ip_info}`)),w.push({type:"myapptip",myapptip:{text:P}});const z={id:A.id,title:A.header?.text||"无标题",author:A.author?.fullname||"匿名用户",authorId:A.author?.id,avatarUrl:A.author.avatar?.avatar_image?.day||"",imageUrl:A.image_url||A.title_image||"",structured_content:w,content:A.content||"",metrics:{votes:A.reaction.statistics.up_vote_count||0,comments:A.reaction.statistics.comment_count||0}};u==="p"&&(a.value=C(w)),A.image_list?.images&&(d.value=A.image_list.images),o.value=z}catch(f){console.error("Failed to fetch article",f)}finally{n.value=!1}},C=f=>{const A=[];return f.forEach((w,P)=>{w.type==="heading"&&w.heading?.text&&A.push({id:`heading-${P}`,text:w.heading.text})}),A},B=f=>f?f>1e3?`${(f/1e3).toFixed(1)}k`:f:0,x=f=>{i.value=!1,Fo(()=>{const A=document.getElementById(f);A&&A.scrollIntoView({behavior:"smooth",block:"start"})})};return xt(()=>{p&&v()}),(f,A)=>($(),M("div",i4,[n.value?($(),M("div",a4,[...A[6]||(A[6]=[m("s-circular-progress",{indeterminate:"true"},null,-1)])])):o.value?($(),M(pe,{key:1},[m("div",l4,[m("div",c4,[m("s-icon-button",{onClick:A[0]||(A[0]=w=>Je(s).back())},[N(Q,{icon:"arrow_back"})]),m("span",d4,j(o.value.title),1)]),m("div",u4,[m("s-icon-button",null,[N(Q,{icon:"more_horiz"})])])]),i.value?($(),M("s-card",p4,[A[7]||(A[7]=m("div",{class:"toc-title"},"目录",-1)),m("s-scroll-view",f4,[($(!0),M(pe,null,we(a.value,w=>($(),M("div",{key:w.id,class:"toc-item",onClick:P=>x(w.id)},j(w.text),9,h4))),128))])])):ce("",!0),m("s-scroll-view",x4,[o.value.imageUrl?($(),M("div",m4,[m("img",{src:o.value.imageUrl,class:"hero-image"},null,8,g4),A[8]||(A[8]=m("div",{class:"hero-gradient"},null,-1))])):ce("",!0),m("div",v4,[m("s-card",{clickable:"true",onClick:A[1]||(A[1]=w=>Je(s).push(`/user/${o.value.authorId}`)),class:"author-card"},[m("img",{src:o.value.avatarUrl,class:"card-avatar"},null,8,b4),m("div",y4,[m("div",E4,j(o.value.author),1),A[9]||(A[9]=m("div",{class:"card-desc"},"知乎用户",-1))])]),a.value.length>0?($(),M("s-card",C4,[A[10]||(A[10]=m("div",{class:"toc-header"},"目录",-1)),($(!0),M(pe,null,we(h.value,w=>($(),M("div",{key:w.id,class:"toc-link",onClick:P=>x(w.id)},j(w.text),9,A4))),128)),a.value.length>3?($(),M("div",{key:0,class:"toc-toggle",onClick:A[2]||(A[2]=w=>c.value=!c.value)},[m("span",null,j(c.value?"收起":"展开更多"),1),N(Q,{icon:c.value?"expand_less":"expand_more",class:"toggle-icon"},null,8,["icon"])])):ce("",!0)])):ce("",!0),N(Q2,{segments:o.value.structured_content},null,8,["segments"]),d.value.length>0?($(),M("div",F4,[Ai(m("s-carousel",{"onUpdate:modelValue":A[3]||(A[3]=w=>l.value=w)},[($(!0),M(pe,null,we(d.value,(w,P)=>($(),M("s-carousel-item",{key:P,value:P,style:ut({backgroundImage:`url(${w.url})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"})},null,12,D4))),128))],512),[[na,l.value,void 0,{lazy:!0}]])])):ce("",!0)])]),m("div",B4,[m("div",w4,[m("div",_4,[m("s-icon-button",null,[N(Q,{icon:"thumb_up",size:20})]),m("span",$4,j(B(o.value.metrics.votes)),1)]),A[11]||(A[11]=m("div",{class:"vertical-divider"},null,-1)),m("div",{class:"action-group",onClick:A[4]||(A[4]=w=>r.value=!0)},[m("s-icon-button",null,[N(Q,{icon:"chat_bubble",size:20})]),m("span",k4,j(B(o.value.metrics.comments)),1)]),A[12]||(A[12]=m("div",{class:"vertical-divider"},null,-1)),m("s-icon-button",null,[N(Q,{icon:"bookmark",size:20})]),m("s-icon-button",null,[N(Q,{icon:"share",size:20})])])]),N(r4,{modelValue:r.value,"onUpdate:modelValue":A[5]||(A[5]=w=>r.value=w),resourceId:Je(p),resourceType:Je(u)},null,8,["modelValue","resourceId","resourceType"])],64)):ce("",!0)]))}},T4=Re(S4,[["__scopeId","data-v-3b0adbc3"]]),M4={class:"title"},L4={class:"excerpt"},I4={class:"footer"},q4={__name:"FeedCard",props:{item:Object,isThought:Boolean},emits:["click","userClick"],setup(e){return(t,s)=>($(),M("s-card",{class:"feed-card",clickable:!0,onClick:s[0]||(s[0]=o=>t.$emit("click",e.item))},[m("div",M4,j(e.item.title),1),m("div",L4,j(e.item.excerpt),1),m("div",I4,j(e.item.target?.author?.name??"未知作者")+" · "+j(e.item.metrics.likes)+" 赞同 "+j(e.item.metrics.comments)+" 评论",1)]))}},Ta=Re(q4,[["__scopeId","data-v-426a965f"]]),R4={class:"mobile-tab-layout"},z4={class:"header"},P4={class:"tab-bar"},O4=["selected","onClick"],N4={slot:"text"},H4={class:"page-content"},V4={__name:"MobileTabLayout",props:{tabs:{type:Array,required:!0},activeId:{type:String,default:void 0},onChange:{type:Function,default:void 0},defaultId:{type:String,default:void 0}},setup(e){const t=e,s=se(t.defaultId||t.tabs[0]?.id),o=se(null),n=se(!1),r=se(null),i=Be(()=>t.activeId!==void 0?t.activeId:s.value),a=d=>{t.onChange?t.onChange(d):s.value=d},c=()=>{const d=o.value;if(!d||n.value)return;const l=d.scrollLeft,u=d.offsetWidth,p=Math.round(l/u),h=t.tabs[p]?.id;h&&h!==i.value&&(t.onChange?t.onChange(h):s.value=h)};return qt(i,d=>{Fo(()=>{const l=o.value;if(!l)return;const u=t.tabs.findIndex(C=>C.id===d);if(u===-1)return;const h=l.offsetWidth*u,v=l.scrollLeft;Math.abs(v-h)>5&&(n.value=!0,r.value&&clearTimeout(r.value),l.scrollTo({left:h,behavior:"smooth"}),r.value=setTimeout(()=>{n.value=!1},600))})},{immediate:!0}),(d,l)=>($(),M("div",R4,[m("div",z4,[m("s-tab",P4,[($(!0),M(pe,null,we(e.tabs,u=>($(),M("s-tab-item",{key:u.id,selected:i.value===u.id,onClick:p=>a(u.id)},[m("div",N4,j(u.label),1)],8,O4))),128))])]),m("div",{ref_key:"containerRef",ref:o,class:"view-pager",onScroll:c},[($(!0),M(pe,null,we(e.tabs,u=>($(),M("div",{key:u.id,class:"page"},[m("div",H4,[Ti(d.$slots,u.id,{},void 0)])]))),128))],544)]))}},Dn=Re(V4,[["__scopeId","data-v-e291060c"]]),j4={__name:"LoadingSentinel",props:["onLoadMore"],setup(e){const t=e,s=se(null);let o=null;return xt(()=>{o=new IntersectionObserver(n=>{n[0].isIntersecting&&t.onLoadMore?.()},{threshold:.1}),s.value&&o.observe(s.value)}),ms(()=>{o&&o.disconnect()}),(n,r)=>($(),M("div",{ref_key:"sentinelRef",ref:s,class:"loading-sentinel"},[...r[0]||(r[0]=[m("s-circular-progress",{indeterminate:"true",style:{width:"24px",height:"24px"}},null,-1)])],512))}},U4=Re(j4,[["__scopeId","data-v-ac42e7c3"]]),W4={class:"ptr-wrapper"},K4={class:"spinner-container"},Z4={key:0,class:"spinner"},G4={key:0,class:"footer-state"},Y4={key:1,class:"no-more-text"},X4={key:0,class:"fab-container"},J4={class:"fab-group"},Q4={class:"fab-group"},jr=80,Ur=120,ex={__name:"PullToRefresh",props:{onRefresh:{type:Function,required:!0},onLoadMore:{type:Function,default:null},hasMore:{type:Boolean,default:!0}},setup(e){const t=e,s=se(null),o=se(0),n=se(!1),r=se(!1),i=se(!1),a=se(0),c=se(!1),d=()=>{typeof window<"u"&&(i.value=window.innerWidth<768)},l=()=>{const x=s.value;x&&(x.scrollTop>300?r.value=!0:r.value=!1)},u=()=>{const x=s.value;x&&x.scrollTo({top:0,behavior:"smooth"})},p=async()=>{if(!n.value){n.value=!0;try{await t.onRefresh()}finally{n.value=!1}}},h=x=>{const f=s.value;f&&(f.scrollTop<=0?(a.value=x.touches[0].clientY,c.value=!0):c.value=!1)},v=x=>{const f=s.value;if(!c.value||n.value||!f||f.scrollTop>0)return;const w=x.touches[0].clientY-a.value;if(w>0){x.cancelable&&w<Ur&&x.preventDefault();const P=Math.min(w*.5,Ur);o.value=P}},C=async()=>{if(o.value>jr){n.value=!0,o.value=jr;try{await t.onRefresh()}finally{n.value=!1,o.value=0}}else o.value=0;c.value=!1},B=()=>{!c.value||n.value||C()};return xt(()=>{d(),window.addEventListener("resize",d);const x=s.value;x&&(x.addEventListener("scroll",l),x.addEventListener("touchstart",h,{passive:!0}),x.addEventListener("touchmove",v,{passive:!1}),x.addEventListener("touchend",B))}),ms(()=>{window.removeEventListener("resize",d);const x=s.value;x&&(x.removeEventListener("scroll",l),x.removeEventListener("touchstart",h),x.removeEventListener("touchmove",v),x.removeEventListener("touchend",B))}),(x,f)=>($(),M("div",W4,[m("s-scroll-view",{ref_key:"containerRef",ref:s,class:"scroll-view"},[m("div",{class:"loading-indicator",style:ut({transform:`translateY(${o.value-50}px)`,opacity:o.value>5||n.value?1:0,transition:c.value?"none":"transform 0.3s ease-out, opacity 0.3s"})},[m("div",K4,[n.value?($(),M("div",Z4)):($(),M("s-icon",{key:1,style:ut({transform:`rotate(${o.value*2}deg)`})},[N(Q,{icon:"refresh",size:24,class:"refresh-icon"})],4))])],4),m("div",{class:"content-wrapper",style:ut({transform:`translateY(${o.value}px)`,transition:c.value?"none":"transform 0.3s ease-out"})},[Ti(x.$slots,"default",{},void 0),e.onLoadMore?($(),M("div",G4,[e.hasMore&&!n.value?($(),tt(U4,{key:0,onLoadMore:e.onLoadMore},null,8,["onLoadMore"])):e.hasMore?ce("",!0):($(),M("div",Y4,"没有更多了"))])):ce("",!0)],4)],512),i.value?ce("",!0):($(),M("div",X4,[m("div",{class:Os(["fab-wrapper",{visible:r.value,hidden:!r.value}])},[m("div",J4,[m("s-fab",{onClick:u},[m("s-icon",null,[N(Q,{icon:"vertical_align_top"})])]),f[0]||(f[0]=m("s-tooltip",null,"回到顶部",-1))])],2),m("div",Q4,[m("s-fab",{onClick:p,style:ut({transform:n.value?"rotate(180deg)":"none",transition:"transform 0.5s"})},[m("s-icon",null,[N(Q,{icon:"refresh"})])],4),f[1]||(f[1]=m("s-tooltip",null,"刷新",-1))])]))]))}},Ma=Re(ex,[["__scopeId","data-v-e3875605"]]),tx={formatTitle(e){let s="";return e.target?.content?.title?s=e.target.content.title.trim():e.target?.question?.title?s=e.target.question.title.trim():e.target?.excerpt_title&&(s=e.target.excerpt_title.trim()),s&&s.length>30?s.substring(0,30)+"...":s||""},getDataType(e){return e.target&&e.target.type?e.target.type:e.type},getId(e){return e.target&&e.target.id?e.target.id:e.id}},sx={class:"user-profile"},ox={class:"top-bar glass"},nx={key:0,class:"top-title"},rx={class:"main-scroll"},ix={key:0,class:"profile-header"},ax={class:"info-container"},lx={class:"avatar-row"},cx=["src"],dx={class:"name-row"},ux={class:"name"},px={key:0,class:"gender-badge"},fx={key:0,class:"headline"},hx={class:"stats-row"},xx={class:"stat-item"},mx={class:"stat-val"},gx={class:"stat-item"},vx={class:"stat-val"},bx={class:"stat-item"},yx={class:"stat-val"},Ex={class:"tabs-container"},Cx={class:"content-list"},Ax={key:0,class:"loading-state"},Fx={key:0,class:"empty-state"},Dx={__name:"UserProfile",setup(e){const t=gs(),s=Yt(),o=t.params.id,n=se(null),r=se(!1),i=se("activities"),a=Ns({}),c=se([]),d=async()=>{const B={activities:`https://api.zhihu.com/moments/${o}/activities?limit=20`,zvideo:`https://api.zhihu.com/people/${o}/zvideos?offset=0&limit=20`,answer:`https://api.zhihu.com/people/${o}/answers?order_by=created&offset=0&limit=20`,vote:`https://api.zhihu.com/moments/${o}/vote?limit=20`,article:`https://api.zhihu.com/people/${o}/articles?offset=0&limit=20`,column:`https://api.zhihu.com/people/${o}/column-contributions?offset=0&limit=20`,pin:`https://api.zhihu.com/v2/pins/${o}/moments`,question:`https://api.zhihu.com/people/${o}/questions?offset=0&limit=20`};try{const x=await $zhihu.get(`https://api.zhihu.com/people/${o}/profile/tab`),A=(x.data||x).tabs_v3||[],w=[],P=y=>{if(y.name==="全部"||y.key==="all")return;let F=y.name;y.number>0&&(F+=` ${y.number}`),w.push({key:y.key,title:F,url:y.url})};A.forEach(y=>{y.sub_tab?y.sub_tab.forEach(P):P(y)});const R=[];let z=-1;const q=y=>{const F={"/activities":"activities","/answers":"answer","/articles":"article","/zvideos":"zvideo","/questions":"question","/vote":"vote","/pins":"pin","/column":"column"};for(const[D,K]of Object.entries(F))if(y&&y.includes(D))return K;return"unknown"};w.forEach(y=>{const F=q(y.url);let D=y.key;if(D==="share")return;const K=B[D]||y.url;if(K){const J=D||F;R.push({id:J,label:y.title,url:K,key:D}),a[J]||(a[J]={list:[],page:1,hasMore:!0,loading:!1,url:K})}});const g=R.findIndex(y=>y.id==="activities");if(g>0){const y=R.splice(g,1)[0];R.unshift(y)}else if(g===-1){const y=B.activities;R.unshift({id:"activities",label:"动态",url:y}),a.activities||(a.activities={list:[],page:1,hasMore:!0,loading:!1,url:y})}c.value=R,R.length>0&&(i.value=R[0].id)}catch(x){console.error("Fetch tabs failed",x);const f=[{id:"activities",label:"动态",url:B.activities}];f.forEach(A=>{a[A.id]||(a[A.id]={list:[],page:1,hasMore:!0,loading:!1,url:A.url})}),c.value=f,i.value="activities"}},l=async()=>{r.value=!0;try{const B=await $zhihu.get(`https://api.zhihu.com/people/${o}`),x=B.data||B;n.value=x}catch(B){console.error("Failed to fetch user info",B)}finally{r.value=!1}},u=async(B,x=!1)=>{const f=a[B];if(!f||f.loading)return;const A=!f.lastResult;if(!(!x&&!f.hasMore&&!A)){f.loading=!0;try{let w;if(x||A){let P=f.url;w=await go.get(P)}else f.lastResult&&(w=await f.lastResult.next());if(!w)f.hasMore=!1;else{f.lastResult=w;const P=w.data||[];f.hasMore=!!w.paging?.next;const R=P.map(z=>{let q=z.target||z;q.column&&(q=q.column);let g=q.type||z.type||"article";g==="moments_pin"&&(g="pin");const y=tx.formatTitle(z)||q.title||q.name||q.content?.[0]?.title||"无标题";return{...z,title:y,excerpt:q.excerpt||q.excerpt_new||q.intro||q.description||"",metrics:{likes:q.voteup_count||q.like_count||0,comments:q.comment_count||q.items_count||0},author:q.author||n.value,type:g,id:q.id}});if(x||A)f.list=R;else{const z=R.filter(q=>!f.list.some(g=>g.id===q.id));f.list=[...f.list,...z]}}}catch(w){console.error(`Failed to fetch content for ${B}`,w),f.hasMore=!1}finally{f.loading=!1}}};xt(()=>{l(),d().then(()=>{i.value&&u(i.value)})}),qt(i,B=>{B&&u(B)});const p=async()=>{i.value&&await u(i.value,!0)},h=()=>{if(i.value){const B=a[i.value];B&&B.hasMore&&u(i.value,!1)}},v=()=>{s.back()},C=B=>{const x=B.target?.id||B.id,f=B.target?.type||B.type||"article";f==="question"?s.push(`/question/${x}`):s.push(`/article/${f}/${x}`)};return(B,x)=>($(),M("div",sx,[m("div",ox,[m("s-icon-button",{onClick:v},[N(Q,{icon:"arrow_back"})]),n.value?($(),M("div",nx,j(n.value.name),1)):ce("",!0),m("s-icon-button",null,[N(Q,{icon:"more_vert"})])]),m("s-scroll-view",rx,[N(Ma,{onRefresh:p,onLoadMore:h,hasMore:a[i.value]?.hasMore},{default:It(()=>[n.value?($(),M("div",ix,[x[4]||(x[4]=m("div",{class:"cover-image"},null,-1)),m("div",ax,[m("div",lx,[m("img",{src:n.value.avatar_url,class:"avatar"},null,8,cx),x[0]||(x[0]=m("s-button",{class:"follow-btn",type:"filled"},"关注",-1))]),m("div",dx,[m("h1",ux,j(n.value.name),1),n.value.gender!==-1?($(),M("div",px,[N(Q,{icon:n.value.gender===1?"male":"female",size:16},null,8,["icon"])])):ce("",!0)]),n.value.headline?($(),M("div",fx,j(n.value.headline),1)):ce("",!0),m("div",hx,[m("div",xx,[m("span",mx,j(n.value.following_count||0),1),x[1]||(x[1]=m("span",{class:"stat-label"},"关注",-1))]),m("div",gx,[m("span",vx,j(n.value.follower_count||0),1),x[2]||(x[2]=m("span",{class:"stat-label"},"粉丝",-1))]),m("div",bx,[m("span",yx,j(n.value.voteup_count||0),1),x[3]||(x[3]=m("span",{class:"stat-label"},"获赞",-1))])])])])):ce("",!0),m("div",Ex,[c.value.length>0?($(),tt(Dn,{key:0,expanded:"",tabs:c.value,activeId:i.value,onChange:f=>i.value=f},Si({_:2},[we(c.value,f=>({name:f.id,fn:It(()=>[m("div",Cx,[a[f.id]?.loading&&(!a[f.id]?.list||a[f.id].list.length===0)?($(),M("div",Ax,[...x[5]||(x[5]=[m("s-circular-progress",{indeterminate:"true"},null,-1)])])):($(),M(pe,{key:1},[a[f.id]?.list.length===0?($(),M("div",Fx," 暂无内容 ")):ce("",!0),($(!0),M(pe,null,we(a[f.id]?.list,(A,w)=>($(),tt(Ta,{key:w,item:A,onClick:P=>C(A)},null,8,["item","onClick"]))),128))],64))])])}))]),1032,["tabs","activeId","onChange"])):ce("",!0)])]),_:1},8,["hasMore"])])]))}},Bx=Re(Dx,[["__scopeId","data-v-5cbd8db0"]]),wx={class:"question-detail"},_x={key:0,class:"loading-state"},$x={class:"top-bar glass"},kx={class:"title-text"},Sx={class:"main-scroll"},Tx={class:"content-wrapper"},Mx={class:"question-header"},Lx={class:"max-container"},Ix={class:"tags-row"},qx=["onClick"],Rx={class:"tag-text"},zx={class:"author-info"},Px=["src"],Ox={class:"author-details"},Nx={class:"author-name"},Hx={class:"author-bio"},Vx={class:"description-preview"},jx=["innerHTML"],Ux={class:"action-bar"},Wx={class:"action-buttons"},Kx=["type"],Zx={slot:"icon"},Gx={class:"metrics"},Yx={class:"metric-item"},Xx={class:"metric-item"},Jx={class:"max-container"},Qx={class:"answers-header"},e8={class:"answers-title"},t8={class:"sort-option"},s8={class:"answers-list"},o8=["onClick"],n8={class:"answer-author"},r8=["src"],i8={class:"answer-author-name"},a8={class:"answer-excerpt"},l8={class:"answer-metrics"},c8={class:"metric-item primary"},d8={class:"metric-item"},u8={class:"timestamp"},p8=["showed"],f8=["innerHTML"],h8={__name:"QuestionDetail",setup(e){const t=gs(),s=Yt(),o=Be(()=>t.params.id),n=se(null),r=se([]),i=se(!0),a=se(!1),c=se(!1),d=v=>v>1e3?`${(v/1e3).toFixed(1)}k`:v,l=async()=>{i.value=!0;try{const v=await window.$zhihu.get(`https://api.zhihu.com/questions/${o.value}`),C=v.data||v;n.value={id:C.id,title:C.title,description:C.detail||C.excerpt||"",tags:(C.topics||[]).slice(0,5).map(f=>({id:f.id,name:f.name})),answerCount:C.answer_count||0,followerCount:C.follower_count||0,author:{name:C.author?.name||"匿名用户",avatarUrl:C.author?.avatar_url,bio:C.author?.headline||""}};const B=await window.$zhihu.get(`https://api.zhihu.com/questions/${o.value}/answers?limit=20&order=default`),x=B.data||B;r.value=(Array.isArray(x)?x:[]).map(f=>({id:f.id,author:f.author?.name||"匿名用户",avatarUrl:f.author?.avatar_url,excerpt:f.excerpt||f.content?.substring(0,200)||"",voteCount:f.voteup_count||0,commentCount:f.comment_count||0,timestamp:new Date(f.created_time*1e3).toLocaleDateString()}))}catch(v){console.error("Failed to fetch question:",v)}finally{i.value=!1}},u=()=>{s.back()},p=v=>{s.push(`/article/answer/${v.id}`)},h=v=>{s.push(`/topic/${v.id}`)};return xt(()=>{l()}),(v,C)=>($(),M("div",wx,[i.value?($(),M("div",_x,[N(Q,{icon:"progress_activity",size:32,class:"spin"})])):n.value?($(),M(pe,{key:1},[m("div",$x,[m("s-icon-button",{onClick:u},[N(Q,{icon:"arrow_back"})]),m("div",kx,j(n.value.title),1),m("s-icon-button",null,[N(Q,{icon:"more_vert"})])]),m("s-scroll-view",Sx,[m("div",Tx,[m("div",Mx,[m("div",Lx,[m("div",Ix,[($(!0),M(pe,null,we(n.value.tags,B=>($(),M("s-chip",{key:B.id,class:"tag-chip",clickable:"true",onClick:x=>h(B)},[m("span",Rx,j(B.name),1)],8,qx))),128))]),m("div",zx,[m("img",{src:n.value.author.avatarUrl,class:"author-avatar",onerror:"this.src='https://placehold.co/32x32/6366f1/ffffff?text=U'"},null,8,Px),m("div",Ox,[m("span",Nx,j(n.value.author.name),1),m("span",Hx,j(n.value.author.bio),1)])]),m("div",Vx,[m("div",{class:"description-text",innerHTML:n.value.description},null,8,jx),n.value.description?($(),M("button",{key:0,onClick:C[0]||(C[0]=B=>a.value=!0),class:"expand-button"},[C[4]||(C[4]=Fe(" 展开阅读全文 ",-1)),N(Q,{icon:"keyboard_arrow_down",size:18})])):ce("",!0)]),m("div",Ux,[m("div",Wx,[m("s-button",{type:c.value?"filled-tonal":"filled",onClick:C[1]||(C[1]=B=>c.value=!c.value),class:"action-btn"},[m("s-icon",Zx,[N(Q,{icon:c.value?"check":"add"},null,8,["icon"])]),Fe(" "+j(c.value?"已关注":"关注问题"),1)],8,Kx)]),m("div",Gx,[m("div",Yx,[N(Q,{icon:"star",size:20}),m("span",null,j(d(n.value.followerCount))+" 收藏",1)]),m("div",Xx,[N(Q,{icon:"chat_bubble",size:18}),m("span",null,j(n.value.answerCount)+" 评论",1)])])])])]),C[6]||(C[6]=m("s-divider",null,null,-1)),m("div",Jx,[m("div",Qx,[m("h2",e8,j(n.value.answerCount)+" 个回答",1),m("div",t8,[C[5]||(C[5]=m("span",null,"默认排序",-1)),N(Q,{icon:"sort",size:16})])]),m("div",s8,[($(!0),M(pe,null,we(r.value,B=>($(),M("s-card",{key:B.id,class:"answer-item",clickable:"true",onClick:x=>p(B)},[m("div",n8,[m("img",{src:B.avatarUrl,class:"answer-avatar",onerror:"this.src='https://placehold.co/24x24/6366f1/ffffff?text=U'"},null,8,r8),m("span",i8,j(B.author),1)]),m("div",a8,[m("p",null,j(B.excerpt),1)]),m("div",l8,[m("div",c8,[N(Q,{icon:"thumb_up",size:18,fill:!0}),m("span",null,j(d(B.voteCount)),1)]),m("div",d8,[N(Q,{icon:"chat_bubble",size:18}),m("span",null,j(d(B.commentCount)),1)]),m("div",u8,j(B.timestamp),1)])],8,o8))),128))])])])]),m("s-dialog",{showed:a.value,onClose:C[3]||(C[3]=B=>a.value=!1)},[C[7]||(C[7]=m("div",{slot:"headline"},"问题描述",-1)),m("div",{slot:"text",class:"dialog-content",innerHTML:n.value.description},null,8,f8),m("s-button",{slot:"action",type:"text",onClick:C[2]||(C[2]=B=>a.value=!1)},"关闭")],40,p8)],64)):ce("",!0)]))}},x8=Re(h8,[["__scopeId","data-v-1d54ba8c"]]),m8={class:"topic-detail"},g8={class:"top-bar glass"},v8={class:"title"},b8={class:"main-scroll"},y8={key:0},E8={key:0,class:"topic-header"},C8={class:"info-container"},A8=["src"],F8={class:"topic-info"},D8={class:"topic-name"},B8={class:"topic-excerpt"},w8={class:"stats"},_8={class:"stat-item"},$8={class:"stat-val"},k8={class:"stat-item"},S8={class:"stat-val"},T8={type:"filled",class:"follow-btn"},M8={slot:"icon"},L8={class:"tabs-container"},I8={class:"detail-content"},q8={class:"detail-card"},R8={class:"detail-title"},z8={class:"detail-text"},P8={key:0,class:"topic-header"},O8={class:"info-container"},N8=["src"],H8={class:"topic-info"},V8={class:"topic-name"},j8={class:"topic-excerpt"},U8={class:"stats"},W8={class:"stat-item"},K8={class:"stat-val"},Z8={class:"stat-item"},G8={class:"stat-val"},Y8={type:"filled",class:"follow-btn"},X8={slot:"icon"},J8={class:"tabs-container"},Q8={class:"content-list"},e6={key:0,class:"loading-state"},t6={key:1,class:"empty-state"},s6={key:2,class:"card-grid"},o6={__name:"TopicDetail",setup(e){const t=gs(),s=Yt(),o=Be(()=>t.params.id),n=se(null),r=se(!1),i=se("detail"),a=se({detail:{list:[],result:null,hasMore:!0,loading:!1},discussion:{list:[],result:null,hasMore:!0,loading:!1},ideas:{list:[],result:null,hasMore:!0,loading:!1},videos:{list:[],result:null,hasMore:!0,loading:!1},questions:{list:[],result:null,hasMore:!0,loading:!1}}),c=[{id:"detail",label:"详情"},{id:"discussion",label:"讨论"},{id:"ideas",label:"想法"},{id:"videos",label:"视频"},{id:"questions",label:"问题"}],d=async()=>{r.value=!0;try{const B=await $zhihu.get(`https://api.zhihu.com/topics/${o.value}`),x=B.data||B;n.value={id:x.id,name:x.name,avatar:x.avatar_url,excerpt:x.excerpt||x.introduction||"",followerCount:x.followers_count||0,questionCount:x.questions_count||0}}catch(B){console.error("Failed to fetch topic info",B)}finally{r.value=!1}},l=B=>{const x=B.target||B;return{id:x.id,type:x.type||"article",title:x.title||x.question?.title||"",excerpt:x.excerpt||x.content?.substring(0,200)||"",author:x.author?.name||"匿名用户",avatarUrl:x.author?.avatar_url,imageUrl:x.thumbnail||x.image_url,metrics:{votes:x.voteup_count||0,comments:x.comment_count||0},timestamp:x.created_time?new Date(x.created_time*1e3).toLocaleDateString():""}},u=async(B,x=!1)=>{if(B==="detail")return;const f=a.value[B];if(!f.loading&&!(!x&&!f.hasMore)){f.loading=!0;try{let A;const w={discussion:`https://api.zhihu.com/topics/${o.value}/feeds/timeline_activity?limit=20`,ideas:`https://api.zhihu.com/topics/${o.value}/feeds/top_activity?limit=20`,videos:`https://api.zhihu.com/topics/${o.value}/feeds/top_activity?limit=20`,questions:`https://api.zhihu.com/topics/${o.value}/questions?limit=20`};if(x||!f.result?A=await window.$http.get(w[B]):A=await f.result.next(),!A)f.hasMore=!1;else{f.result=A;const P=A.data||[];f.hasMore=!!A.paging?.next;const R=P.map(l);if(x)f.list=R;else{const z=R.filter(q=>!f.list.some(g=>g.id===q.id));f.list=[...f.list,...z]}}}catch(A){console.error(`Failed to fetch content for ${B}`,A),f.hasMore=!1}finally{f.loading=!1}}},p=()=>{s.back()},h=B=>{B.type==="question"?s.push(`/question/${B.id}`):s.push(`/article/${B.type}/${B.id}`)},v=async()=>{await u(i.value,!0)},C=async()=>{await u(i.value,!1)};return xt(()=>{d(),u("detail")}),(B,x)=>($(),M("div",m8,[m("div",g8,[m("s-icon-button",{onClick:p},[N(Q,{icon:"arrow_back"})]),m("span",v8,j(n.value?.name||"话题"),1)]),m("s-scroll-view",b8,[i.value==="detail"?($(),M("div",y8,[n.value?($(),M("div",E8,[x[3]||(x[3]=m("div",{class:"cover-image"},null,-1)),m("div",C8,[m("img",{src:n.value.avatar,class:"topic-avatar",onerror:"this.src='https://placehold.co/80x80/6366f1/ffffff?text=T'"},null,8,A8),m("div",F8,[m("h1",D8,j(n.value.name),1),m("p",B8,j(n.value.excerpt),1),m("div",w8,[m("div",_8,[m("span",$8,j(n.value.followerCount),1),x[0]||(x[0]=m("span",{class:"stat-label"},"关注者",-1))]),m("div",k8,[m("span",S8,j(n.value.questionCount),1),x[1]||(x[1]=m("span",{class:"stat-label"},"问题",-1))])]),m("s-button",T8,[m("s-icon",M8,[N(Q,{icon:"add"})]),x[2]||(x[2]=Fe(" 关注话题 ",-1))])])])])):ce("",!0),m("div",L8,[N(Dn,{expanded:"",tabs:c,activeId:i.value,onChange:f=>{i.value=f,f!=="detail"&&!a.value[f].list.length&&u(f)}},{detail:It(()=>[m("div",I8,[m("s-card",q8,[m("h3",R8,j(n.value?.name),1),m("p",z8,j(n.value?.excerpt||"暂无简介"),1)])])]),_:1},8,["activeId","onChange"])])])):($(),tt(Ma,{key:1,onRefresh:v,onLoadMore:C,hasMore:a.value[i.value]?.hasMore},{default:It(()=>[n.value?($(),M("div",P8,[x[7]||(x[7]=m("div",{class:"cover-image"},null,-1)),m("div",O8,[m("img",{src:n.value.avatar,class:"topic-avatar",onerror:"this.src='https://placehold.co/80x80/6366f1/ffffff?text=T'"},null,8,N8),m("div",H8,[m("h1",V8,j(n.value.name),1),m("p",j8,j(n.value.excerpt),1),m("div",U8,[m("div",W8,[m("span",K8,j(n.value.followerCount),1),x[4]||(x[4]=m("span",{class:"stat-label"},"关注者",-1))]),m("div",Z8,[m("span",G8,j(n.value.questionCount),1),x[5]||(x[5]=m("span",{class:"stat-label"},"问题",-1))])]),m("s-button",Y8,[m("s-icon",X8,[N(Q,{icon:"add"})]),x[6]||(x[6]=Fe(" 关注话题 ",-1))])])])])):ce("",!0),m("div",J8,[N(Dn,{expanded:"",tabs:c,activeId:i.value,onChange:f=>{i.value=f,f!=="detail"&&!a.value[f].list.length&&u(f)}},Si({_:2},[we(c.filter(f=>f.id!=="detail"),f=>({name:f.id,fn:It(()=>[m("div",Q8,[a.value[f.id].loading&&a.value[f.id].list.length===0?($(),M("div",e6,[N(Q,{icon:"progress_activity",size:24,class:"spin"}),x[8]||(x[8]=Fe(" 加载中... ",-1))])):a.value[f.id].list.length===0?($(),M("div",t6," 暂无内容 ")):($(),M("div",s6,[($(!0),M(pe,null,we(a.value[f.id].list,A=>($(),M("div",{key:A.id,class:"masonry-item"},[N(Ta,{item:A,onClick:w=>h(A)},null,8,["item","onClick"])]))),128))]))])])}))]),1032,["activeId","onChange"])])]),_:1},8,["hasMore"]))])]))}},n6=Re(o6,[["__scopeId","data-v-900102e2"]]),r6=[{path:"/",component:()=>Ot(()=>import("./HomeView-EeQABMO3.js"),__vite__mapDeps([0,1,2])),meta:{keepAlive:!0}},{path:"/following",component:()=>Ot(()=>import("./FollowingView-BjY6TUQR.js"),__vite__mapDeps([3,1,4])),meta:{keepAlive:!0}},{path:"/collections",component:()=>Ot(()=>import("./CollectionsView-DGizstLl.js"),__vite__mapDeps([5,6])),meta:{keepAlive:!0}},{path:"/daily",component:()=>Ot(()=>import("./DailyView-BTuGmxqg.js"),__vite__mapDeps([7,8])),meta:{keepAlive:!0}},{path:"/history",component:()=>Ot(()=>import("./HistoryView-la_q7nlK.js"),__vite__mapDeps([9,10])),meta:{keepAlive:!0}},{path:"/settings",component:()=>Ot(()=>import("./SettingsView-BxbGOQ8Y.js"),__vite__mapDeps([11,12])),meta:{keepAlive:!0}},{path:"/search",component:()=>Ot(()=>import("./SearchPage-BQH1OQIK.js"),[]),meta:{keepAlive:!0}},{path:"/article/:type/:id",component:T4},{path:"/user/:id",component:Bx},{path:"/question/:id",component:x8},{path:"/topic/:id",component:n6}],i6=Hf({history:Ef(),routes:r6});oh({});window.$http=go;window.$zhihu=Mt();Yc(E2).use(i6).mount("#app");export{pe as F,Dn as M,Ma as P,Re as _,m as a,ce as b,M as c,xt as d,tx as e,we as f,Ai as g,go as h,N as i,It as j,Ta as k,Je as l,tt as m,Os as n,$ as o,Q as p,Fe as q,se as r,a6 as s,j as t,Yt as u,l6 as v,qt as w};
