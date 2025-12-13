const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BJqhL9Wv.js","assets/mockData-QDqH7q9Q.js","assets/HomeView-BazLS6A2.css","assets/FollowingView-qM1RUzSN.js","assets/FollowingView-DC-KEoGA.css","assets/CollectionsView-BvrkpRvA.js","assets/CollectionsView-CbhkfhHH.css","assets/DailyView-T-BNL1JH.js","assets/DailyView-7JiscOoy.css","assets/HistoryView-BZU7sVQ7.js","assets/HistoryView-CL9thsIa.css","assets/SettingsView-CS4xX-8w.js","assets/SettingsView-CxMIjo8S.css"])))=>i.map(i=>d[i]);
var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function t(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var n={},r=[],i=()=>{},a=()=>!1,o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=e=>e.startsWith(`onUpdate:`),c=Object.assign,l=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,d=(e,t)=>u.call(e,t),f=Array.isArray,p=e=>S(e)===`[object Map]`,m=e=>S(e)===`[object Set]`,h=e=>S(e)===`[object RegExp]`,g=e=>typeof e==`function`,_=e=>typeof e==`string`,v=e=>typeof e==`symbol`,y=e=>typeof e==`object`&&!!e,b=e=>(y(e)||g(e))&&g(e.then)&&g(e.catch),x=Object.prototype.toString,S=e=>x.call(e),C=e=>S(e).slice(8,-1),ee=e=>S(e)===`[object Object]`,te=e=>_(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ne=t(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),re=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ie=/-\w/g,w=re(e=>e.replace(ie,e=>e.slice(1).toUpperCase())),ae=/\B([A-Z])/g,oe=re(e=>e.replace(ae,`-$1`).toLowerCase()),se=re(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=re(e=>e?`on${se(e)}`:``),le=(e,t)=>!Object.is(e,t),T=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ue=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},de=e=>{let t=parseFloat(e);return isNaN(t)?e:t},fe,pe=()=>fe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function E(e){if(f(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=_(r)?_e(r):E(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(_(e)||y(e))return e}var me=/;(?![^(]*\))/g,he=/:([^]+)/,ge=/\/\*[^]*?\*\//g;function _e(e){let t={};return e.replace(ge,``).split(me).forEach(e=>{if(e){let n=e.split(he);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ve(e){let t=``;if(_(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){let r=ve(e[n]);r&&(t+=r+` `)}else if(y(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ye=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,be=t(ye);ye+``;function xe(e){return!!e||e===``}var Se=e=>!!(e&&e.__v_isRef===!0),D=e=>_(e)?e:e==null?``:f(e)||y(e)&&(e.toString===x||!g(e.toString))?Se(e)?D(e.value):JSON.stringify(e,Ce,2):String(e),Ce=(e,t)=>Se(t)?Ce(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+` =>`]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:v(t)?we(t):y(t)&&!f(t)&&!ee(t)?String(t):t,we=(e,t=``)=>v(e)?`Symbol(${e.description??t})`:e,O,Te=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=O,!e&&O&&(this.index=(O.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=O;try{return O=this,e()}finally{O=t}}}on(){++this._on===1&&(this.prevScope=O,O=this)}off(){this._on>0&&--this._on===0&&(O=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ee(){return O}var k,De=new WeakSet,Oe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,O&&O.active&&O.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,De.has(this)&&(De.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Me(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ge(this),Fe(this);let e=k,t=Ve;k=this,Ve=!0;try{return this.fn()}finally{Ie(this),k=e,Ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ze(e);this.deps=this.depsTail=void 0,Ge(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?De.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Le(this)&&this.run()}get dirty(){return Le(this)}},ke=0,Ae,je;function Me(e,t=!1){if(e.flags|=8,t){e.next=je,je=e;return}e.next=Ae,Ae=e}function Ne(){ke++}function Pe(){if(--ke>0)return;if(je){let e=je;for(je=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ae;){let t=Ae;for(Ae=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Fe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ie(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),ze(r),Be(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Le(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Re(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Re(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ke)||(e.globalVersion=Ke,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Le(e))))return;e.flags|=2;let t=e.dep,n=k,r=Ve;k=e,Ve=!0;try{Fe(e);let n=e.fn(e._value);(t.version===0||le(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{k=n,Ve=r,Ie(e),e.flags&=-3}}function ze(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)ze(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Be(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ve=!0,He=[];function Ue(){He.push(Ve),Ve=!1}function We(){let e=He.pop();Ve=e===void 0?!0:e}function Ge(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=k;k=void 0;try{t()}finally{k=e}}}var Ke=0,qe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Je=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!k||!Ve||k===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==k)t=this.activeLink=new qe(k,this),k.deps?(t.prevDep=k.depsTail,k.depsTail.nextDep=t,k.depsTail=t):k.deps=k.depsTail=t,Ye(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=k.depsTail,t.nextDep=void 0,k.depsTail.nextDep=t,k.depsTail=t,k.deps===t&&(k.deps=e)}return t}trigger(e){this.version++,Ke++,this.notify(e)}notify(e){Ne();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Pe()}}};function Ye(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ye(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Xe=new WeakMap,Ze=Symbol(``),Qe=Symbol(``),$e=Symbol(``);function A(e,t,n){if(Ve&&k){let t=Xe.get(e);t||Xe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Je),r.map=t,r.key=n),r.track()}}function et(e,t,n,r,i,a){let o=Xe.get(e);if(!o){Ke++;return}let s=e=>{e&&e.trigger()};if(Ne(),t===`clear`)o.forEach(s);else{let i=f(e),a=i&&te(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===$e||!v(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get($e)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ze)),p(e)&&s(o.get(Qe)));break;case`delete`:i||(s(o.get(Ze)),p(e)&&s(o.get(Qe)));break;case`set`:p(e)&&s(o.get(Ze));break}}Pe()}function tt(e){let t=j(e);return t===e?t:(A(t,`iterate`,$e),Vt(e)?t:t.map(Wt))}function nt(e){return A(e=j(e),`iterate`,$e),e}function rt(e,t){return Bt(e)?zt(e)?Gt(Wt(t)):Gt(t):Wt(t)}var it={__proto__:null,[Symbol.iterator](){return at(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return tt(this).concat(...e.map(e=>f(e)?tt(e):e))},entries(){return at(this,`entries`,e=>(e[1]=rt(this,e[1]),e))},every(e,t){return st(this,`every`,e,t,void 0,arguments)},filter(e,t){return st(this,`filter`,e,t,e=>e.map(e=>rt(this,e)),arguments)},find(e,t){return st(this,`find`,e,t,e=>rt(this,e),arguments)},findIndex(e,t){return st(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return st(this,`findLast`,e,t,e=>rt(this,e),arguments)},findLastIndex(e,t){return st(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return st(this,`forEach`,e,t,void 0,arguments)},includes(...e){return lt(this,`includes`,e)},indexOf(...e){return lt(this,`indexOf`,e)},join(e){return tt(this).join(e)},lastIndexOf(...e){return lt(this,`lastIndexOf`,e)},map(e,t){return st(this,`map`,e,t,void 0,arguments)},pop(){return ut(this,`pop`)},push(...e){return ut(this,`push`,e)},reduce(e,...t){return ct(this,`reduce`,e,t)},reduceRight(e,...t){return ct(this,`reduceRight`,e,t)},shift(){return ut(this,`shift`)},some(e,t){return st(this,`some`,e,t,void 0,arguments)},splice(...e){return ut(this,`splice`,e)},toReversed(){return tt(this).toReversed()},toSorted(e){return tt(this).toSorted(e)},toSpliced(...e){return tt(this).toSpliced(...e)},unshift(...e){return ut(this,`unshift`,e)},values(){return at(this,`values`,e=>rt(this,e))}};function at(e,t,n){let r=nt(e),i=r[t]();return r!==e&&!Vt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ot=Array.prototype;function st(e,t,n,r,i,a){let o=nt(e),s=o!==e&&!Vt(e),c=o[t];if(c!==ot[t]){let t=c.apply(e,a);return s?Wt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,rt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ct(e,t,n,r){let i=nt(e),a=n;return i!==e&&(Vt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,rt(e,r),i,e)}),i[t](a,...r)}function lt(e,t,n){let r=j(e);A(r,`iterate`,$e);let i=r[t](...n);return(i===-1||i===!1)&&Ht(n[0])?(n[0]=j(n[0]),r[t](...n)):i}function ut(e,t,n=[]){Ue(),Ne();let r=j(e)[t].apply(e,n);return Pe(),We(),r}var dt=t(`__proto__,__v_isRef,__isVue`),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(v));function pt(e){v(e)||(e=String(e));let t=j(this);return A(t,`has`,e),t.hasOwnProperty(e)}var mt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Mt:jt:i?At:kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=f(e);if(!r){let e;if(a&&(e=it[t]))return e;if(t===`hasOwnProperty`)return pt}let o=Reflect.get(e,t,M(e)?e:n);if((v(t)?ft.has(t):dt(t))||(r||A(e,`get`,t),i))return o;if(M(o)){let e=a&&te(t)?o:o.value;return r&&y(e)?Lt(e):e}return y(o)?r?Lt(o):Ft(o):o}},ht=class extends mt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=f(e)&&te(t);if(!this._isShallow){let e=Bt(i);if(!Vt(n)&&!Bt(n)&&(i=j(i),n=j(n)),!a&&M(i)&&!M(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:d(e,t),s=Reflect.set(e,t,n,M(e)?e:r);return e===j(r)&&(o?le(n,i)&&et(e,`set`,t,n,i):et(e,`add`,t,n)),s}deleteProperty(e,t){let n=d(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&et(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!v(t)||!ft.has(t))&&A(e,`has`,t),n}ownKeys(e){return A(e,`iterate`,f(e)?`length`:Ze),Reflect.ownKeys(e)}},gt=class extends mt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},_t=new ht,vt=new gt,yt=new ht(!0),bt=e=>e,xt=e=>Reflect.getPrototypeOf(e);function St(e,t,n){return function(...r){let i=this.__v_raw,a=j(i),o=p(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?bt:t?Gt:Wt;return!t&&A(a,`iterate`,c?Qe:Ze),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ct(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function wt(e,t){let n={get(n){let r=this.__v_raw,i=j(r),a=j(n);e||(le(n,a)&&A(i,`get`,n),A(i,`get`,a));let{has:o}=xt(i),s=t?bt:e?Gt:Wt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&A(j(t),`iterate`,Ze),t.size},has(t){let n=this.__v_raw,r=j(n),i=j(t);return e||(le(t,i)&&A(r,`has`,t),A(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=j(a),s=t?bt:e?Gt:Wt;return!e&&A(o,`iterate`,Ze),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return c(n,e?{add:Ct(`add`),set:Ct(`set`),delete:Ct(`delete`),clear:Ct(`clear`)}:{add(e){!t&&!Vt(e)&&!Bt(e)&&(e=j(e));let n=j(this);return xt(n).has.call(n,e)||(n.add(e),et(n,`add`,e,e)),this},set(e,n){!t&&!Vt(n)&&!Bt(n)&&(n=j(n));let r=j(this),{has:i,get:a}=xt(r),o=i.call(r,e);o||=(e=j(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?le(n,s)&&et(r,`set`,e,n,s):et(r,`add`,e,n),this},delete(e){let t=j(this),{has:n,get:r}=xt(t),i=n.call(t,e);i||=(e=j(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&et(t,`delete`,e,void 0,a),o},clear(){let e=j(this),t=e.size!==0,n=e.clear();return t&&et(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=St(r,e,t)}),n}function Tt(e,t){let n=wt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(d(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap;function Nt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Pt(e){return e.__v_skip||!Object.isExtensible(e)?0:Nt(C(e))}function Ft(e){return Bt(e)?e:Rt(e,!1,_t,Et,kt)}function It(e){return Rt(e,!1,yt,Dt,At)}function Lt(e){return Rt(e,!0,vt,Ot,jt)}function Rt(e,t,n,r,i){if(!y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Pt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Vt(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function j(e){let t=e&&e.__v_raw;return t?j(t):e}function Ut(e){return!d(e,`__v_skip`)&&Object.isExtensible(e)&&ue(e,`__v_skip`,!0),e}var Wt=e=>y(e)?Ft(e):e,Gt=e=>y(e)?Lt(e):e;function M(e){return e?e.__v_isRef===!0:!1}function N(e){return qt(e,!1)}function Kt(e){return qt(e,!0)}function qt(e,t){return M(e)?e:new Jt(e,t)}var Jt=class{constructor(e,t){this.dep=new Je,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:j(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Vt(e)||Bt(e);e=n?e:j(e),le(e,t)&&(this._rawValue=e,this._value=n?e:Wt(e),this.dep.trigger())}};function Yt(e){return M(e)?e.value:e}var Xt={get:(e,t,n)=>t===`__v_raw`?e:Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return M(i)&&!M(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Zt(e){return zt(e)?e:new Proxy(e,Xt)}var Qt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Je(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ke-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&k!==this)return Me(this,!0),!0}get value(){let e=this.dep.track();return Re(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function $t(e,t,n=!1){let r,i;return g(e)?r=e:(r=e.get,i=e.set),new Qt(r,i,n)}var en={},tn=new WeakMap,nn=void 0;function rn(e,t=!1,n=nn){if(n){let t=tn.get(n);t||tn.set(n,t=[]),t.push(e)}}function an(e,t,r=n){let{immediate:a,deep:o,once:s,scheduler:c,augmentJob:u,call:d}=r,p=e=>o?e:Vt(e)||o===!1||o===0?on(e,1):on(e),m,h,_,v,y=!1,b=!1;if(M(e)?(h=()=>e.value,y=Vt(e)):zt(e)?(h=()=>p(e),y=!0):f(e)?(b=!0,y=e.some(e=>zt(e)||Vt(e)),h=()=>e.map(e=>{if(M(e))return e.value;if(zt(e))return p(e);if(g(e))return d?d(e,2):e()})):h=g(e)?t?d?()=>d(e,2):e:()=>{if(_){Ue();try{_()}finally{We()}}let t=nn;nn=m;try{return d?d(e,3,[v]):e(v)}finally{nn=t}}:i,t&&o){let e=h,t=o===!0?1/0:o;h=()=>on(e(),t)}let x=Ee(),S=()=>{m.stop(),x&&x.active&&l(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(en):en,ee=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(t){let e=m.run();if(o||y||(b?e.some((e,t)=>le(e,C[t])):le(e,C))){_&&_();let n=nn;nn=m;try{let n=[e,C===en?void 0:b&&C[0]===en?[]:C,v];C=e,d?d(t,3,n):t(...n)}finally{nn=n}}}else m.run()};return u&&u(ee),m=new Oe(h),m.scheduler=c?()=>c(ee,!1):ee,v=e=>rn(e,!1,m),_=m.onStop=()=>{let e=tn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();tn.delete(m)}},t?a?ee(!0):C=m.run():c?c(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function on(e,t=1/0,n){if(t<=0||!y(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,M(e))on(e.value,t,n);else if(f(e))for(let r=0;r<e.length;r++)on(e[r],t,n);else if(m(e)||p(e))e.forEach(e=>{on(e,t,n)});else if(ee(e)){for(let r in e)on(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&on(e[r],t,n)}return e}function sn(e,t,n,r){try{return r?e(...r):e()}catch(e){ln(e,t,n)}}function cn(e,t,n,r){if(g(e)){let i=sn(e,t,n,r);return i&&b(i)&&i.catch(e=>{ln(e,t,n)}),i}if(f(e)){let i=[];for(let a=0;a<e.length;a++)i.push(cn(e[a],t,n,r));return i}}function ln(e,t,r,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||n;if(t){let n=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;n;){let t=n.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}n=n.parent}if(o){Ue(),sn(o,null,10,[e,i,a]),We();return}}un(e,r,a,i,s)}function un(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var P=[],dn=-1,fn=[],pn=null,mn=0,hn=Promise.resolve(),gn=null;function _n(e){let t=gn||hn;return e?t.then(this?e.bind(this):e):t}function vn(e){let t=dn+1,n=P.length;for(;t<n;){let r=t+n>>>1,i=P[r],a=wn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function yn(e){if(!(e.flags&1)){let t=wn(e),n=P[P.length-1];!n||!(e.flags&2)&&t>=wn(n)?P.push(e):P.splice(vn(t),0,e),e.flags|=1,bn()}}function bn(){gn||=hn.then(Tn)}function xn(e){f(e)?fn.push(...e):pn&&e.id===-1?pn.splice(mn+1,0,e):e.flags&1||(fn.push(e),e.flags|=1),bn()}function Sn(e,t,n=dn+1){for(;n<P.length;n++){let t=P[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;P.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Cn(e){if(fn.length){let e=[...new Set(fn)].sort((e,t)=>wn(e)-wn(t));if(fn.length=0,pn){pn.push(...e);return}for(pn=e,mn=0;mn<pn.length;mn++){let e=pn[mn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}pn=null,mn=0}}var wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tn(e){try{for(dn=0;dn<P.length;dn++){let e=P[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<P.length;dn++){let e=P[dn];e&&(e.flags&=-2)}dn=-1,P.length=0,Cn(e),gn=null,(P.length||fn.length)&&Tn(e)}}var F=null,En=null;function Dn(e){let t=F;return F=e,En=e&&e.type.__scopeId||null,t}function On(e,t=F,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Vi(-1);let i=Dn(t),a;try{a=e(...n)}finally{Dn(i),r._d&&Vi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function kn(e,t){if(F===null)return e;let r=xa(F),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=n]=t[e];a&&(g(a)&&(a={mounted:a,updated:a}),a.deep&&on(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function An(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ue(),cn(c,n,8,[e.el,s,e,t]),We())}}var jn=Symbol(`_vte`),Mn=e=>e.__isTeleport,Nn=Symbol(`_leaveCb`);function Pn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Pn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fn(e,t){return g(e)?(()=>c({name:e.name},t,{setup:e}))():e}function In(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}var Ln=new WeakMap;function Rn(e,t,r,i,o=!1){if(f(e)){e.forEach((e,n)=>Rn(e,t&&(f(t)?t[n]:t),r,i,o));return}if(Bn(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rn(e,t,r,i.component.subTree);return}let s=i.shapeFlag&4?xa(i.component):i.el,c=o?null:s,{i:u,r:p}=e,m=t&&t.r,h=u.refs===n?u.refs={}:u.refs,v=u.setupState,y=j(v),b=v===n?a:e=>d(y,e),x=e=>!0;if(m!=null&&m!==p){if(zn(t),_(m))h[m]=null,b(m)&&(v[m]=null);else if(M(m)){x(m)&&(m.value=null);let e=t;e.k&&(h[e.k]=null)}}if(g(p))sn(p,u,12,[c,h]);else{let t=_(p),n=M(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:h[p]:x(p)||!e.k?p.value:h[e.k];if(o)f(n)&&l(n,s);else if(f(n))n.includes(s)||n.push(s);else if(t)h[p]=[s],b(p)&&(v[p]=h[p]);else{let t=[s];x(p)&&(p.value=t),e.k&&(h[e.k]=t)}}else t?(h[p]=c,b(p)&&(v[p]=c)):n&&(x(p)&&(p.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),Ln.delete(e)};t.id=-1,Ln.set(e,t),L(t,r)}else zn(e),i()}}}function zn(e){let t=Ln.get(e);t&&(t.flags|=8,Ln.delete(e))}pe().requestIdleCallback,pe().cancelIdleCallback;var Bn=e=>!!e.type.__asyncLoader,Vn=e=>e.type.__isKeepAlive,Hn={name:`KeepAlive`,__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=oa(),r=n.ctx;if(!r.renderer)return()=>{let e=t.default&&t.default();return e&&e.length===1?e[0]:e};let i=new Map,a=new Set,o=null,s=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=r,f=d(`div`);r.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,s),c(a.vnode,e,t,n,a,s,r,e.slotScopeIds,i),L(()=>{a.isDeactivated=!1,a.a&&T(a.a);let t=e.props&&e.props.onVnodeMounted;t&&na(t,a.parent,e)},s)},r.deactivate=e=>{let t=e.component;ji(t.m),ji(t.a),l(e,f,null,1,s),L(()=>{t.da&&T(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&na(n,t.parent,e),t.isDeactivated=!0},s)};function p(e){Jn(e),u(e,n,s,!0)}function m(e){i.forEach((t,n)=>{let r=Sa(t.type);r&&!e(r)&&h(n)})}function h(e){let t=i.get(e);t&&(!o||!Gi(t,o))?p(t):o&&Jn(o),i.delete(e),a.delete(e)}Wr(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>Un(e,t)),t&&m(e=>!Un(t,e))},{flush:`post`,deep:!0});let g=null,_=()=>{g!=null&&(Mi(n.subTree.type)?L(()=>{i.set(g,Yn(n.subTree))},n.subTree.suspense):i.set(g,Yn(n.subTree)))};return $n(_),tr(_),nr(()=>{i.forEach(e=>{let{subTree:t,suspense:r}=n,i=Yn(t);if(e.type===i.type&&e.key===i.key){Jn(i);let e=i.component.da;e&&L(e,r);return}p(e)})}),()=>{if(g=null,!t.default)return o=null;let n=t.default(),r=n[0];if(n.length>1)return o=null,n;if(!Wi(r)||!(r.shapeFlag&4)&&!(r.shapeFlag&128))return o=null,r;let s=Yn(r);if(s.type===Fi)return o=null,s;let c=s.type,l=Sa(Bn(s)?s.type.__asyncResolved||{}:c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!Un(u,l))||d&&l&&Un(d,l))return s.shapeFlag&=-257,o=s,r;let p=s.key==null?c:s.key,m=i.get(p);return s.el&&(s=Xi(s),r.shapeFlag&128&&(r.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&Pn(s,s.transition),s.shapeFlag|=512,a.delete(p),a.add(p)):(a.add(p),f&&a.size>parseInt(f,10)&&h(a.values().next().value)),s.shapeFlag|=256,o=s,Mi(r.type)?r:s}}};function Un(e,t){return f(e)?e.some(e=>Un(e,t)):_(e)?e.split(`,`).includes(t):h(e)?(e.lastIndex=0,e.test(t)):!1}function Wn(e,t){Kn(e,`a`,t)}function Gn(e,t){Kn(e,`da`,t)}function Kn(e,t,n=G){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Xn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Vn(e.parent.vnode)&&qn(r,t,n,e),e=e.parent}}function qn(e,t,n,r){let i=Xn(t,e,r,!0);rr(()=>{l(r[t],i)},n)}function Jn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Yn(e){return e.shapeFlag&128?e.ssContent:e}function Xn(e,t,n=G,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ue();let i=la(n),a=cn(t,n,e,r);return i(),We(),a};return r?i.unshift(a):i.push(a),a}}var Zn=e=>(t,n=G)=>{(!fa||e===`sp`)&&Xn(e,(...e)=>t(...e),n)},Qn=Zn(`bm`),$n=Zn(`m`),er=Zn(`bu`),tr=Zn(`u`),nr=Zn(`bum`),rr=Zn(`um`),ir=Zn(`sp`),ar=Zn(`rtg`),or=Zn(`rtc`);function sr(e,t=G){Xn(`ec`,e,t)}var cr=`components`,lr=Symbol.for(`v-ndc`);function ur(e){return _(e)?dr(cr,e,!1)||e:e||lr}function dr(e,t,n=!0,r=!1){let i=F||G;if(i){let n=i.type;if(e===cr){let e=Sa(n,!1);if(e&&(e===t||e===w(t)||e===se(w(t))))return n}let a=fr(i[e]||n[e],t)||fr(i.appContext[e],t);return!a&&r?n:a}}function fr(e,t){return e&&(e[t]||e[w(t)]||e[se(w(t))])}function I(e,t,n,r){let i,a=n&&n[r],o=f(e);if(o||_(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!Vt(e),s=Bt(e),e=nt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Gt(Wt(e[n])):Wt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(y(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function pr(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(f(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function mr(e,t,n={},r,i){if(F.ce||F.parent&&Bn(F.parent)&&F.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),z(),Ui(R,null,[H(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),z();let o=a&&hr(a(n)),s=n.key||o&&o.key,c=Ui(R,{key:(s&&!v(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function hr(e){return e.some(e=>Wi(e)?!(e.type===Fi||e.type===R&&!hr(e.children)):!0)?e:null}var gr=e=>e?da(e)?xa(e):gr(e.parent):null,_r=c(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gr(e.parent),$root:e=>gr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Er(e),$forceUpdate:e=>e.f||=()=>{yn(e.update)},$nextTick:e=>e.n||=_n.bind(e.proxy),$watch:e=>Kr.bind(e)}),vr=(e,t)=>e!==n&&!e.__isScriptSetup&&d(e,t),yr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return r[t];case 3:return o[t]}else if(vr(i,t))return s[t]=1,i[t];else if(a!==n&&d(a,t))return s[t]=2,a[t];else if(d(o,t))return s[t]=3,o[t];else if(r!==n&&d(r,t))return s[t]=4,r[t];else xr&&(s[t]=0)}let u=_r[t],f,p;if(u)return t===`$attrs`&&A(e.attrs,`get`,``),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(r!==n&&d(r,t))return s[t]=4,r[t];if(p=l.config.globalProperties,d(p,t))return p[t]},set({_:e},t,r){let{data:i,setupState:a,ctx:o}=e;return vr(a,t)?(a[t]=r,!0):i!==n&&d(i,t)?(i[t]=r,!0):d(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==n&&c[0]!==`$`&&d(e,c)||vr(t,c)||d(o,c)||d(i,c)||d(_r,c)||d(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?d(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function br(e){return f(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var xr=!0;function Sr(e){let t=Er(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&wr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:h,updated:_,activated:v,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:ie,serverPrefetch:w,expose:ae,inheritAttrs:oe,components:se,directives:ce,filters:le}=t;if(u&&Cr(u,r,null),s)for(let e in s){let t=s[e];g(t)&&(r[e]=t.bind(n))}if(a){let t=a.call(n,n);y(t)&&(e.data=Ft(t))}if(xr=!0,o)for(let e in o){let t=o[e],a=K({get:g(t)?t.bind(n,n):g(t.get)?t.get.bind(n,n):i,set:!g(t)&&g(t.set)?t.set.bind(n):i});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Tr(c[e],r,n,e);if(l){let e=g(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Br(t,e[t])})}d&&wr(d,e,`c`);function T(e,t){f(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(T(Qn,p),T($n,m),T(er,h),T(tr,_),T(Wn,v),T(Gn,b),T(sr,ie),T(or,ne),T(ar,re),T(nr,S),T(rr,ee),T(ir,w),f(ae))if(ae.length){let t=e.exposed||={};ae.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===i&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),ce&&(e.directives=ce),w&&In(e)}function Cr(e,t,n=i){for(let n in f(e)&&(e=jr(e)),e){let r=e[n],i;i=y(r)?`default`in r?Vr(r.from||n,r.default,!0):Vr(r.from||n):Vr(r),M(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function wr(e,t,n){cn(f(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tr(e,t,n,r){let i=r.includes(`.`)?qr(n,r):()=>n[r];if(_(e)){let n=t[e];g(n)&&Wr(i,n)}else if(g(e))Wr(i,e.bind(n));else if(y(e))if(f(e))e.forEach(e=>Tr(e,t,n,r));else{let r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&Wr(i,r,e)}}function Er(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Dr(c,e,o,!0)),Dr(c,t,o)),y(t)&&a.set(t,c),c}function Dr(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&Dr(e,a,n,!0),i&&i.forEach(t=>Dr(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=Or[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}var Or={data:kr,props:Pr,emits:Pr,methods:Nr,computed:Nr,beforeCreate:Mr,created:Mr,beforeMount:Mr,mounted:Mr,beforeUpdate:Mr,updated:Mr,beforeDestroy:Mr,beforeUnmount:Mr,destroyed:Mr,unmounted:Mr,activated:Mr,deactivated:Mr,errorCaptured:Mr,serverPrefetch:Mr,components:Nr,directives:Nr,watch:Fr,provide:kr,inject:Ar};function kr(e,t){return t?e?function(){return c(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function Ar(e,t){return Nr(jr(e),jr(t))}function jr(e){if(f(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Mr(e,t){return e?[...new Set([].concat(e,t))]:t}function Nr(e,t){return e?c(Object.create(null),e,t):t}function Pr(e,t){return e?f(e)&&f(t)?[...new Set([...e,...t])]:c(Object.create(null),br(e),br(t??{})):t}function Fr(e,t){if(!e)return t;if(!t)return e;let n=c(Object.create(null),e);for(let r in t)n[r]=Mr(e[r],t[r]);return n}function Ir(){return{app:null,config:{isNativeTag:a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Lr=0;function Rr(e,t){return function(n,r=null){g(n)||(n=c({},n)),r!=null&&!y(r)&&(r=null);let i=Ir(),a=new WeakSet,o=[],s=!1,l=i.app={_uid:Lr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ta,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&g(e.install)?(a.add(e),e.install(l,...t)):g(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,c){if(!s){let u=l._ceVNode||H(n,r);return u.appContext=i,c===!0?c=`svg`:c===!1&&(c=void 0),o&&t?t(u,a):e(u,a,c),s=!0,l._container=a,a.__vue_app__=l,xa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(cn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=zr;zr=l;try{return e()}finally{zr=t}}};return l}}var zr=null;function Br(e,t){if(G){let n=G.provides,r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function Vr(e,t,n=!1){let r=oa();if(r||zr){let i=zr?zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}var Hr=Symbol.for(`v-scx`),Ur=()=>Vr(Hr);function Wr(e,t,n){return Gr(e,t,n)}function Gr(e,t,r=n){let{immediate:a,deep:o,flush:s,once:l}=r,u=c({},r),d=t&&a||!t&&s!==`post`,f;if(fa){if(s===`sync`){let e=Ur();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=i,e.resume=i,e.pause=i,e}}let p=G;u.call=(e,t,n)=>cn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{L(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():yn(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=an(e,t,u);return fa&&(f?f.push(h):d&&h()),h}function Kr(e,t,n){let r=this.proxy,i=_(e)?e.includes(`.`)?qr(r,e):()=>r[e]:e.bind(r,r),a;g(t)?a=t:(a=t.handler,n=t);let o=la(this),s=Gr(i,a.bind(r),n);return o(),s}function qr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Jr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${oe(t)}Modifiers`];function Yr(e,t,...r){if(e.isUnmounted)return;let i=e.vnode.props||n,a=r,o=t.startsWith(`update:`),s=o&&Jr(i,t.slice(7));s&&(s.trim&&(a=r.map(e=>_(e)?e.trim():e)),s.number&&(a=r.map(de)));let c,l=i[c=ce(t)]||i[c=ce(w(t))];!l&&o&&(l=i[c=ce(oe(t))]),l&&cn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,cn(u,e,6,a)}}var Xr=new WeakMap;function Zr(e,t,n=!1){let r=n?Xr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!g(e)){let r=e=>{let n=Zr(e,t,!0);n&&(s=!0,c(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(y(e)&&r.set(e,null),null):(f(a)?a.forEach(e=>o[e]=null):c(o,a),y(e)&&r.set(e,o),o)}function Qr(e,t){return!e||!o(t)?!1:(t=t.slice(2).replace(/Once$/,``),d(e,t[0].toLowerCase()+t.slice(1))||d(e,oe(t))||d(e,t))}function $r(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Dn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Qi(e.length>1?e(f,{attrs:c,slots:o,emit:l}):e(f,null)),y=t.props?c:ei(c)}}catch(t){Li.length=0,ln(t,e,1),v=H(Fi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(s)&&(y=ti(y,a)),b=Xi(b,y,!1,!0))}return n.dirs&&(b=Xi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Pn(b,n.transition),v=b,Dn(_),v}var ei=e=>{let t;for(let n in e)(n===`class`||n===`style`||o(n))&&((t||={})[n]=e[n]);return t},ti=(e,t)=>{let n={};for(let r in e)(!s(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ni(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ri(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Qr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,l):!0:!!o;return!1}function ri(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Qr(n,a))return!0}return!1}function ii({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var ai={},oi=()=>Object.create(ai),si=e=>Object.getPrototypeOf(e)===ai;function ci(e,t,n,r=!1){let i={},a=oi();for(let n in e.propsDefaults=Object.create(null),ui(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:It(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function li(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=j(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Qr(e.emitsOptions,o))continue;let u=t[o];if(c)if(d(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=w(o);i[t]=di(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ui(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!d(t,a)&&((r=oe(a))===a||!d(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=di(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!d(t,e))&&(delete a[e],l=!0)}l&&et(e.attrs,`set`,``)}function ui(e,t,r,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let n in t){if(ne(n))continue;let l=t[n],u;a&&d(a,u=w(n))?!o||!o.includes(u)?r[u]=l:(c||={})[u]=l:Qr(e.emitsOptions,n)||(!(n in i)||l!==i[n])&&(i[n]=l,s=!0)}if(o){let t=j(r),i=c||n;for(let n=0;n<o.length;n++){let s=o[n];r[s]=di(a,t,s,i[s],e,!d(i,s))}}return s}function di(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=d(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===oe(n))&&(r=!0))}return r}var fi=new WeakMap;function pi(e,t,i=!1){let a=i?fi:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,l={},u=[],p=!1;if(!g(e)){let n=e=>{p=!0;let[n,r]=pi(e,t,!0);c(l,n),r&&u.push(...r)};!i&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!p)return y(e)&&a.set(e,r),r;if(f(s))for(let e=0;e<s.length;e++){let t=w(s[e]);mi(t)&&(l[t]=n)}else if(s)for(let e in s){let t=w(e);if(mi(t)){let n=s[e],r=l[t]=f(n)||g(n)?{type:n}:c({},n),i=r.type,a=!1,o=!0;if(f(i))for(let e=0;e<i.length;++e){let t=i[e],n=g(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=g(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||d(r,`default`))&&u.push(t)}}let m=[l,u];return y(e)&&a.set(e,m),m}function mi(e){return e[0]!==`$`&&!ne(e)}var hi=e=>e===`_`||e===`_ctx`||e===`$stable`,gi=e=>f(e)?e.map(Qi):[Qi(e)],_i=(e,t,n)=>{if(t._n)return t;let r=On((...e)=>gi(t(...e)),n);return r._c=!1,r},vi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(hi(n))continue;let i=e[n];if(g(i))t[n]=_i(n,i,r);else if(i!=null){let e=gi(i);t[n]=()=>e}}},yi=(e,t)=>{let n=gi(t);e.slots.default=()=>n},bi=(e,t,n)=>{for(let r in t)(n||!hi(r))&&(e[r]=t[r])},xi=(e,t,n)=>{let r=e.slots=oi();if(e.vnode.shapeFlag&32){let e=t._;e?(bi(r,t,n),n&&ue(r,`_`,e,!0)):vi(t,r)}else t&&yi(e,t)},Si=(e,t,r)=>{let{vnode:i,slots:a}=e,o=!0,s=n;if(i.shapeFlag&32){let e=t._;e?r&&e===1?o=!1:bi(a,t,r):(o=!t.$stable,vi(t,a)),s=t}else t&&(yi(e,t),s={default:1});if(o)for(let e in a)!hi(e)&&s[e]==null&&delete a[e]},L=Ni;function Ci(e){return wi(e)}function wi(e,t){let a=pe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=i,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gi(e,t)&&(r=Se(e),_e(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Pi:y(e,t,n,r);break;case Fi:b(e,t,n,r);break;case Ii:e??x(t,n,r,o);break;case R:se(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,we)}u!=null&&i?Rn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Rn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),w(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ie(e.children,d,null,r,i,Ti(e,a),s,u),_&&An(e,null,r,`created`),re(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ne(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&na(f,r,e)}_&&An(e,null,r,`beforeMount`);let v=Di(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&L(()=>{f&&na(f,r,e),v&&g.enter(d),_&&An(e,null,r,`mounted`)},i)},re=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Mi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;re(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ie=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?$i(e[l]):Qi(e[l]),t,n,r,i,a,o,s)},w=(e,t,r,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||n,h=t.props||n,g;if(r&&Ei(r,!1),(g=h.onVnodeBeforeUpdate)&&na(g,r,t,e),f&&An(t,e,r,`beforeUpdate`),r&&Ei(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ae(e.dynamicChildren,d,l,r,i,Ti(t,a),o):s||E(e,t,l,null,r,i,Ti(t,a),o,!1),u>0){if(u&16)oe(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==t.children&&p(l,t.children)}else !s&&d==null&&oe(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&L(()=>{g&&na(g,r,t,e),f&&An(t,e,r,`updated`)},i)},ae=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===R||!Gi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},oe=(e,t,r,i,a)=>{if(t!==r){if(t!==n)for(let n in t)!ne(n)&&!(n in r)&&c(e,n,t[n],null,a,i);for(let n in r){if(ne(n))continue;let o=r[n],s=t[n];o!==s&&n!==`value`&&c(e,n,s,o,a,i)}`value`in r&&c(e,`value`,t.value,r.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ie(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren?(ae(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Oi(e,t,!0)):E(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):ue(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=aa(e,r,i);if(Vn(e)&&(s.ctx.renderer=we),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=H(Fi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},ue=(e,t,n)=>{let r=t.component=e.component;if(ni(e,t,n))if(r.asyncDep&&!r.asyncResolved){fe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Ai(e);if(n){t&&(t.el=l.el,fe(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Ei(e,!1),t?(t.el=l.el,fe(e,t,o)):t=l,n&&T(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&na(d,c,t,l),Ei(e,!0);let f=$r(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Se(p),e,i,a),t.el=f.el,u===null&&ii(e,f.el),r&&L(r,i),(d=t.props&&t.props.onVnodeUpdated)&&L(()=>na(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Bn(t);if(Ei(e,!1),l&&T(l),!m&&(o=c&&c.onVnodeBeforeMount)&&na(o,d,t),Ei(e,!0),s&&Te){let t=()=>{e.subTree=$r(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=$r(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&L(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;L(()=>na(o,d,e),i)}(t.shapeFlag&256||d&&Bn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&L(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Oe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>yn(u),Ei(e,!0),l()},fe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,li(e,t.props,r,n),Si(e,t.children,n),Ue(),Sn(e),We()},E=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){he(l,d,n,r,i,a,o,s,c);return}else if(f&256){me(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&xe(l,i,a),d!==l&&p(n,d)):u&16?m&16?he(l,d,n,r,i,a,o,s,c):xe(l,i,a,!0):(u&8&&p(n,``),m&16&&ie(d,n,r,i,a,o,s,c))},me=(e,t,n,i,a,o,s,c,l)=>{e||=r,t||=r;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?$i(t[p]):Qi(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?xe(e,a,o,!0,!1,f):ie(t,n,i,a,o,s,c,l,f)},he=(e,t,n,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?$i(t[u]):Qi(t[u]);if(Gi(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?$i(t[p]):Qi(t[p]);if(Gi(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,r=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?$i(t[u]):Qi(t[u]),n,r,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)_e(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?$i(t[u]):Qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){_e(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Gi(r,t[_])){i=_;break}i===void 0?_e(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let ee=x?ki(C):r;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,r=t[e],f=t[e+1],p=e+1<d?f.el||f.placeholder:i;C[u]===0?v(null,r,n,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?ge(r,n,p,2):_--)}}},ge=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ge(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,we);return}if(c===R){o(a,t,n);for(let e=0;e<u.length;e++)ge(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ii){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),L(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Nn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},_e=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(Ue(),Rn(s,null,n,e,!0),We()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!Bn(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&na(g,t,e),u&6)be(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&An(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,we,r):l&&!l.hasOnce&&(a!==R||d>0&&d&64)?xe(l,t,n,!1,!0):(a===R&&d&384||!i&&u&16)&&xe(c,t,n),r&&ve(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&L(()=>{g&&na(g,t,e),m&&An(e,null,t,`unmounted`)},n)},ve=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===R){ye(n,r);return}if(t===Ii){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ye=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},be=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ji(c),ji(l),r&&T(r),i.stop(),a&&(a.flags|=8,_e(o,e,t,n)),s&&L(s,t),L(()=>{e.isUnmounted=!0},t)},xe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)_e(e[o],t,n,r,i)},Se=e=>{if(e.shapeFlag&6)return Se(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[jn];return n?h(n):t},D=!1,Ce=(e,t,n)=>{e==null?t._vnode&&_e(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,D||=(D=!0,Sn(),Cn(),!1)},we={p:v,um:_e,m:ge,r:ve,mt:le,mc:ie,pc:E,pbc:ae,n:Se,o:e},O,Te;return t&&([O,Te]=t(we)),{render:Ce,hydrate:O,createApp:Rr(Ce,O)}}function Ti({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ei({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Di(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oi(e,t,n=!1){let r=e.children,i=t.children;if(f(r)&&f(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=$i(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Oi(t,a)),a.type===Pi&&a.patchFlag!==-1&&(a.el=t.el),a.type===Fi&&!a.el&&(a.el=t.el)}}function ki(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ai(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}function ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}var Mi=e=>e.__isSuspense;function Ni(e,t){t&&t.pendingBranch?f(e)?t.effects.push(...e):t.effects.push(e):xn(e)}var R=Symbol.for(`v-fgt`),Pi=Symbol.for(`v-txt`),Fi=Symbol.for(`v-cmt`),Ii=Symbol.for(`v-stc`),Li=[],Ri=null;function z(e=!1){Li.push(Ri=e?null:[])}function zi(){Li.pop(),Ri=Li[Li.length-1]||null}var Bi=1;function Vi(e,t=!1){Bi+=e,e<0&&Ri&&t&&(Ri.hasOnce=!0)}function Hi(e){return e.dynamicChildren=Bi>0?Ri||r:null,zi(),Bi>0&&Ri&&Ri.push(e),e}function B(e,t,n,r,i,a){return Hi(V(e,t,n,r,i,a,!0))}function Ui(e,t,n,r,i){return Hi(H(e,t,n,r,i,!0))}function Wi(e){return e?e.__v_isVNode===!0:!1}function Gi(e,t){return e.type===t.type&&e.key===t.key}var Ki=({key:e})=>e??null,qi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:_(e)||M(e)||g(e)?{i:F,r:e,k:t,f:!!n}:e);function V(e,t=null,n=null,r=0,i=null,a=e===R?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ki(t),ref:t&&qi(t),scopeId:En,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F};return s?(ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=_(n)?8:16),Bi>0&&!o&&Ri&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ri.push(c),c}var H=Ji;function Ji(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===lr)&&(e=Fi),Wi(e)){let r=Xi(e,t,!0);return n&&ea(r,n),Bi>0&&!a&&Ri&&(r.shapeFlag&6?Ri[Ri.indexOf(e)]=r:Ri.push(r)),r.patchFlag=-2,r}if(Ca(e)&&(e=e.__vccOpts),t){t=Yi(t);let{class:e,style:n}=t;e&&!_(e)&&(t.class=ve(e)),y(n)&&(Ht(n)&&!f(n)&&(n=c({},n)),t.style=E(n))}let o=_(e)?1:Mi(e)?128:Mn(e)?64:y(e)?4:g(e)?2:0;return V(e,t,n,r,i,o,a,!0)}function Yi(e){return e?Ht(e)||si(e)?c({},e):e:null}function Xi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ki(l),ref:t&&t.ref?n&&a?f(a)?a.concat(qi(t)):[a,qi(t)]:qi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==R?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xi(e.ssContent),ssFallback:e.ssFallback&&Xi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Pn(u,c.clone(u)),u}function U(e=` `,t=0){return H(Pi,null,e,t)}function Zi(e,t){let n=H(Ii,null,e);return n.staticCount=t,n}function W(e=``,t=!1){return t?(z(),Ui(Fi,null,e)):H(Fi,null,e)}function Qi(e){return e==null||typeof e==`boolean`?H(Fi):f(e)?H(R,null,e.slice()):Wi(e)?$i(e):H(Pi,null,String(e))}function $i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xi(e)}function ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(f(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!si(t)?t._ctx=F:r===3&&F&&(F.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else g(t)?(t={default:t,_ctx:F},n=32):(t=String(t),r&64?(n=16,t=[U(t)]):n=8);e.children=t,e.shapeFlag|=n}function ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ve([t.class,r.class]));else if(e===`style`)t.style=E([t.style,r.style]);else if(o(e)){let n=t[e],i=r[e];i&&n!==i&&!(f(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function na(e,t,n,r=null){cn(e,t,7,[n,r])}var ra=Ir(),ia=0;function aa(e,t,r){let i=e.type,a=(t?t.appContext:e.appContext)||ra,o={uid:ia++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pi(i,a),emitsOptions:Zr(i,a),emit:null,emitted:null,propsDefaults:n,inheritAttrs:i.inheritAttrs,ctx:n,data:n,props:n,attrs:n,slots:n,refs:n,setupState:n,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Yr.bind(null,o),e.ce&&e.ce(o),o}var G=null,oa=()=>G||F,sa,ca;{let e=pe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>G=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=G;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{G&&G.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);ci(e,r,a,t),xi(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yr);let{setup:r}=n;if(r){Ue();let n=e.setupContext=r.length>1?ba(e):null,i=la(e),a=sn(r,e,0,[e.props,n]),o=b(a);if(We(),i(),(o||e.sp)&&!Bn(e)&&In(e),o){if(a.then(ua,ua),t)return a.then(n=>{ha(e,n,t)}).catch(t=>{ln(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else va(e,t)}function ha(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Zt(t)),va(e,n)}var ga,_a;function va(e,t,n){let r=e.type;if(!e.render){if(!t&&ga&&!r.render){let t=r.template||Er(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ga(t,c(c({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||i,_a&&_a(e)}{let t=la(e);Ue();try{Sr(e)}finally{We(),t()}}}var ya={get(e,t){return A(e,`get`,``),e[t]}};function ba(e){return{attrs:new Proxy(e.attrs,ya),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function xa(e){return e.exposed?e.exposeProxy||=new Proxy(Zt(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _r)return _r[n](e)},has(e,t){return t in e||t in _r}}):e.proxy}function Sa(e,t=!0){return g(e)?e.displayName||e.name:e.name||t&&e.__name}function Ca(e){return g(e)&&`__vccOpts`in e}var K=(e,t)=>$t(e,t,fa);function wa(e,t,n){try{Vi(-1);let r=arguments.length;return r===2?y(t)&&!f(t)?Wi(t)?H(e,null,[t]):H(e,t):H(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wi(n)&&(n=[n]),H(e,t,n))}finally{Vi(1)}}var Ta=`3.5.25`,Ea=void 0,Da=typeof window<`u`&&window.trustedTypes;if(Da)try{Ea=Da.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Oa=Ea?e=>Ea.createHTML(e):e=>e,ka=`http://www.w3.org/2000/svg`,Aa=`http://www.w3.org/1998/Math/MathML`,ja=typeof document<`u`?document:null,Ma=ja&&ja.createElement(`template`),Na={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ja.createElementNS(ka,e):t===`mathml`?ja.createElementNS(Aa,e):n?ja.createElement(e,{is:n}):ja.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ja.createTextNode(e),createComment:e=>ja.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ja.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ma.innerHTML=Oa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ma.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pa=Symbol(`_vtc`);function Fa(e,t,n){let r=e[Pa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ia=Symbol(`_vod`),La=Symbol(`_vsh`),Ra={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Ia]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):za(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),za(e,!0),r.enter(e)):r.leave(e,()=>{za(e,!1)}):za(e,t))},beforeUnmount(e,{value:t}){za(e,t)}};function za(e,t){e.style.display=t?e[Ia]:`none`,e[La]=!t}var Ba=Symbol(``),Va=/(?:^|;)\s*display\s*:/;function Ha(e,t,n){let r=e.style,i=_(n),a=!1;if(n&&!i){if(t)if(_(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wa(r,t,``)}else for(let e in t)n[e]??Wa(r,e,``);for(let e in n)e===`display`&&(a=!0),Wa(r,e,n[e])}else if(i){if(t!==n){let e=r[Ba];e&&(n+=`;`+e),r.cssText=n,a=Va.test(n)}}else t&&e.removeAttribute(`style`);Ia in e&&(e[Ia]=a?r.display:``,e[La]&&(r.display=`none`))}var Ua=/\s*!important$/;function Wa(e,t,n){if(f(n))n.forEach(n=>Wa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=qa(e,t);Ua.test(n)?e.setProperty(oe(r),n.replace(Ua,``),`important`):e[r]=n}}var Ga=[`Webkit`,`Moz`,`ms`],Ka={};function qa(e,t){let n=Ka[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return Ka[t]=r;r=se(r);for(let n=0;n<Ga.length;n++){let i=Ga[n]+r;if(i in e)return Ka[t]=i}return t}var Ja=`http://www.w3.org/1999/xlink`;function Ya(e,t,n,r,i,a=be(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n):n==null||a&&!xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:v(n)?String(n):n)}function Xa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Oa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Za(e,t,n,r){e.addEventListener(t,n,r)}function Qa(e,t,n,r){e.removeEventListener(t,n,r)}var $a=Symbol(`_vei`);function eo(e,t,n,r,i=null){let a=e[$a]||(e[$a]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=no(t);r?Za(e,n,a[t]=oo(r,i),s):o&&(Qa(e,n,o,s),a[t]=void 0)}}var to=/(?:Once|Passive|Capture)$/;function no(e){let t;if(to.test(e)){t={};let n;for(;n=e.match(to);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):oe(e.slice(2)),t]}var ro=0,io=Promise.resolve(),ao=()=>ro||=(io.then(()=>ro=0),Date.now());function oo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;cn(so(e,n.value),t,5,[e])};return n.value=e,n.attached=ao(),n}function so(e,t){if(f(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var co=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lo=(e,t,n,r,i,a)=>{let c=i===`svg`;t===`class`?Fa(e,r,c):t===`style`?Ha(e,n,r):o(t)?s(t)||eo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):uo(e,t,r,c))?(Xa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ya(e,t,r,c,a,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!_(r))?Xa(e,w(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ya(e,t,r,c))};function uo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&co(t)&&g(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return co(t)&&_(n)?!1:t in e}var fo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return f(t)?e=>T(t,e):t};function po(e){e.target.composing=!0}function mo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ho=Symbol(`_assign`);function go(e,t,n){return t&&(e=e.trim()),n&&(e=de(e)),e}var _o={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ho]=fo(i);let a=r||i.props&&i.props.type===`number`;Za(e,t?`change`:`input`,t=>{t.target.composing||e[ho](go(e.value,n,a))}),(n||a)&&Za(e,`change`,()=>{e.value=go(e.value,n,a)}),t||(Za(e,`compositionstart`,po),Za(e,`compositionend`,mo),Za(e,`change`,mo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ho]=fo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?de(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},vo=[`ctrl`,`shift`,`alt`,`meta`],yo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>vo.some(n=>e[`${n}Key`]&&!t.includes(n))},bo=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=yo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},xo=c({patchProp:lo},Na),So;function Co(){return So||=Ci(xo)}var wo=((...e)=>{let t=Co().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Eo(e);if(!r)return;let i=t._component;!g(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,To(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function To(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Eo(e){return _(e)?document.querySelector(e):e}var Do=e(((e,t)=>{t.exports={}}));e(((e,t)=>{(function(){function e(e){if(e)_[0]=_[16]=_[1]=_[2]=_[3]=_[4]=_[5]=_[6]=_[7]=_[8]=_[9]=_[10]=_[11]=_[12]=_[13]=_[14]=_[15]=0,this.blocks=_,this.buffer8=c;else if(d){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}function n(t,n){var r,i=x(t);if(t=i[0],i[1]){var a,o=[],s=t.length,c=0;for(r=0;r<s;++r)(a=t.charCodeAt(r))<128?o[c++]=a:a<2048?(o[c++]=192|a>>>6,o[c++]=128|63&a):a<55296||a>=57344?(o[c++]=224|a>>>12,o[c++]=128|a>>>6&63,o[c++]=128|63&a):(a=65536+((1023&a)<<10|1023&t.charCodeAt(++r)),o[c++]=240|a>>>18,o[c++]=128|a>>>12&63,o[c++]=128|a>>>6&63,o[c++]=128|63&a);t=o}t.length>64&&(t=new e(!0).update(t).array());var l=[],u=[];for(r=0;r<64;++r){var d=t[r]||0;l[r]=92^d,u[r]=54^d}e.call(this,n),this.update(u),this.oKeyPad=l,this.inner=!0,this.sharedMemory=n}var r=`input is invalid type`,i=typeof window==`object`,a=i?window:{};a.JS_MD5_NO_WINDOW&&(i=!1);var o=!i&&typeof self==`object`,s=!a.JS_MD5_NO_NODE_JS&&typeof process==`object`&&process.versions&&process.versions.node;s?a=global:o&&(a=self);var c,l=!a.JS_MD5_NO_COMMON_JS&&typeof t==`object`&&t.exports,u=typeof define==`function`&&define.amd,d=!a.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<`u`,f=`0123456789abcdef`.split(``),p=[128,32768,8388608,-2147483648],m=[0,8,16,24],h=[`hex`,`array`,`digest`,`buffer`,`arrayBuffer`,`base64`],g=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.split(``),_=[];if(d){var v=new ArrayBuffer(68);c=new Uint8Array(v),_=new Uint32Array(v)}var y=Array.isArray;!a.JS_MD5_NO_NODE_JS&&y||(y=function(e){return Object.prototype.toString.call(e)===`[object Array]`});var b=ArrayBuffer.isView;!d||!a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&b||(b=function(e){return typeof e==`object`&&e.buffer&&e.buffer.constructor===ArrayBuffer});var x=function(e){var t=typeof e;if(t===`string`)return[e,!0];if(t!==`object`||e===null)throw Error(r);if(d&&e.constructor===ArrayBuffer)return[new Uint8Array(e),!1];if(!y(e)&&!b(e))throw Error(r);return[e,!1]},S=function(t){return function(n){return new e(!0).update(n)[t]()}},C=function(e){var t,n=Do(),i=Do().Buffer;return t=i.from&&!a.JS_MD5_NO_BUFFER_FROM?i.from:function(e){return new i(e)},function(a){if(typeof a==`string`)return n.createHash(`md5`).update(a,`utf8`).digest(`hex`);if(a==null)throw Error(r);return a.constructor===ArrayBuffer&&(a=new Uint8Array(a)),y(a)||b(a)||a.constructor===i?n.createHash(`md5`).update(t(a)).digest(`hex`):e(a)}},ee=function(e){return function(t,r){return new n(t,!0).update(r)[e]()}};e.prototype.update=function(e){if(this.finalized)throw Error(`finalize already called`);var t=x(e);e=t[0];for(var n,r,i=t[1],a=0,o=e.length,s=this.blocks,c=this.buffer8;a<o;){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),i)if(d)for(r=this.start;a<o&&r<64;++a)(n=e.charCodeAt(a))<128?c[r++]=n:n<2048?(c[r++]=192|n>>>6,c[r++]=128|63&n):n<55296||n>=57344?(c[r++]=224|n>>>12,c[r++]=128|n>>>6&63,c[r++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++a)),c[r++]=240|n>>>18,c[r++]=128|n>>>12&63,c[r++]=128|n>>>6&63,c[r++]=128|63&n);else for(r=this.start;a<o&&r<64;++a)(n=e.charCodeAt(a))<128?s[r>>>2]|=n<<m[3&r++]:n<2048?(s[r>>>2]|=(192|n>>>6)<<m[3&r++],s[r>>>2]|=(128|63&n)<<m[3&r++]):n<55296||n>=57344?(s[r>>>2]|=(224|n>>>12)<<m[3&r++],s[r>>>2]|=(128|n>>>6&63)<<m[3&r++],s[r>>>2]|=(128|63&n)<<m[3&r++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++a)),s[r>>>2]|=(240|n>>>18)<<m[3&r++],s[r>>>2]|=(128|n>>>12&63)<<m[3&r++],s[r>>>2]|=(128|n>>>6&63)<<m[3&r++],s[r>>>2]|=(128|63&n)<<m[3&r++]);else if(d)for(r=this.start;a<o&&r<64;++a)c[r++]=e[a];else for(r=this.start;a<o&&r<64;++a)s[r>>>2]|=e[a]<<m[3&r++];this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes%=4294967296),this},e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>>2]|=p[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},e.prototype.hash=function(){var e,t,n,r,i,a,o=this.blocks;this.first?t=((t=((e=((e=o[0]-680876937)<<7|e>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&e)+o[1]-117830708)<<12|r>>>20)+e<<0)&(-271733879^e))+o[2]-1126478375)<<17|n>>>15)+r<<0)&(r^e))+o[3]-1316259209)<<22|t>>>10)+n<<0:(e=this.h0,t=this.h1,n=this.h2,t=((t+=((e=((e+=((r=this.h3)^t&(n^r))+o[0]-680876936)<<7|e>>>25)+t<<0)^(n=((n+=(t^(r=((r+=(n^e&(t^n))+o[1]-389564586)<<12|r>>>20)+e<<0)&(e^t))+o[2]+606105819)<<17|n>>>15)+r<<0)&(r^e))+o[3]-1044525330)<<22|t>>>10)+n<<0),t=((t+=((e=((e+=(r^t&(n^r))+o[4]-176418897)<<7|e>>>25)+t<<0)^(n=((n+=(t^(r=((r+=(n^e&(t^n))+o[5]+1200080426)<<12|r>>>20)+e<<0)&(e^t))+o[6]-1473231341)<<17|n>>>15)+r<<0)&(r^e))+o[7]-45705983)<<22|t>>>10)+n<<0,t=((t+=((e=((e+=(r^t&(n^r))+o[8]+1770035416)<<7|e>>>25)+t<<0)^(n=((n+=(t^(r=((r+=(n^e&(t^n))+o[9]-1958414417)<<12|r>>>20)+e<<0)&(e^t))+o[10]-42063)<<17|n>>>15)+r<<0)&(r^e))+o[11]-1990404162)<<22|t>>>10)+n<<0,t=((t+=((e=((e+=(r^t&(n^r))+o[12]+1804603682)<<7|e>>>25)+t<<0)^(n=((n+=(t^(r=((r+=(n^e&(t^n))+o[13]-40341101)<<12|r>>>20)+e<<0)&(e^t))+o[14]-1502002290)<<17|n>>>15)+r<<0)&(r^e))+o[15]+1236535329)<<22|t>>>10)+n<<0,t=((t+=((r=((r+=(t^n&((e=((e+=(n^r&(t^n))+o[1]-165796510)<<5|e>>>27)+t<<0)^t))+o[6]-1069501632)<<9|r>>>23)+e<<0)^e&((n=((n+=(e^t&(r^e))+o[11]+643717713)<<14|n>>>18)+r<<0)^r))+o[0]-373897302)<<20|t>>>12)+n<<0,t=((t+=((r=((r+=(t^n&((e=((e+=(n^r&(t^n))+o[5]-701558691)<<5|e>>>27)+t<<0)^t))+o[10]+38016083)<<9|r>>>23)+e<<0)^e&((n=((n+=(e^t&(r^e))+o[15]-660478335)<<14|n>>>18)+r<<0)^r))+o[4]-405537848)<<20|t>>>12)+n<<0,t=((t+=((r=((r+=(t^n&((e=((e+=(n^r&(t^n))+o[9]+568446438)<<5|e>>>27)+t<<0)^t))+o[14]-1019803690)<<9|r>>>23)+e<<0)^e&((n=((n+=(e^t&(r^e))+o[3]-187363961)<<14|n>>>18)+r<<0)^r))+o[8]+1163531501)<<20|t>>>12)+n<<0,t=((t+=((r=((r+=(t^n&((e=((e+=(n^r&(t^n))+o[13]-1444681467)<<5|e>>>27)+t<<0)^t))+o[2]-51403784)<<9|r>>>23)+e<<0)^e&((n=((n+=(e^t&(r^e))+o[7]+1735328473)<<14|n>>>18)+r<<0)^r))+o[12]-1926607734)<<20|t>>>12)+n<<0,t=((t+=((a=(r=((r+=((i=t^n)^(e=((e+=(i^r)+o[5]-378558)<<4|e>>>28)+t<<0))+o[8]-2022574463)<<11|r>>>21)+e<<0)^e)^(n=((n+=(a^t)+o[11]+1839030562)<<16|n>>>16)+r<<0))+o[14]-35309556)<<23|t>>>9)+n<<0,t=((t+=((a=(r=((r+=((i=t^n)^(e=((e+=(i^r)+o[1]-1530992060)<<4|e>>>28)+t<<0))+o[4]+1272893353)<<11|r>>>21)+e<<0)^e)^(n=((n+=(a^t)+o[7]-155497632)<<16|n>>>16)+r<<0))+o[10]-1094730640)<<23|t>>>9)+n<<0,t=((t+=((a=(r=((r+=((i=t^n)^(e=((e+=(i^r)+o[13]+681279174)<<4|e>>>28)+t<<0))+o[0]-358537222)<<11|r>>>21)+e<<0)^e)^(n=((n+=(a^t)+o[3]-722521979)<<16|n>>>16)+r<<0))+o[6]+76029189)<<23|t>>>9)+n<<0,t=((t+=((a=(r=((r+=((i=t^n)^(e=((e+=(i^r)+o[9]-640364487)<<4|e>>>28)+t<<0))+o[12]-421815835)<<11|r>>>21)+e<<0)^e)^(n=((n+=(a^t)+o[15]+530742520)<<16|n>>>16)+r<<0))+o[2]-995338651)<<23|t>>>9)+n<<0,t=((t+=((r=((r+=(t^((e=((e+=(n^(t|~r))+o[0]-198630844)<<6|e>>>26)+t<<0)|~n))+o[7]+1126891415)<<10|r>>>22)+e<<0)^((n=((n+=(e^(r|~t))+o[14]-1416354905)<<15|n>>>17)+r<<0)|~e))+o[5]-57434055)<<21|t>>>11)+n<<0,t=((t+=((r=((r+=(t^((e=((e+=(n^(t|~r))+o[12]+1700485571)<<6|e>>>26)+t<<0)|~n))+o[3]-1894986606)<<10|r>>>22)+e<<0)^((n=((n+=(e^(r|~t))+o[10]-1051523)<<15|n>>>17)+r<<0)|~e))+o[1]-2054922799)<<21|t>>>11)+n<<0,t=((t+=((r=((r+=(t^((e=((e+=(n^(t|~r))+o[8]+1873313359)<<6|e>>>26)+t<<0)|~n))+o[15]-30611744)<<10|r>>>22)+e<<0)^((n=((n+=(e^(r|~t))+o[6]-1560198380)<<15|n>>>17)+r<<0)|~e))+o[13]+1309151649)<<21|t>>>11)+n<<0,t=((t+=((r=((r+=(t^((e=((e+=(n^(t|~r))+o[4]-145523070)<<6|e>>>26)+t<<0)|~n))+o[11]-1120210379)<<10|r>>>22)+e<<0)^((n=((n+=(e^(r|~t))+o[2]+718787259)<<15|n>>>17)+r<<0)|~e))+o[9]-343485551)<<21|t>>>11)+n<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},e.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3;return f[e>>>4&15]+f[15&e]+f[e>>>12&15]+f[e>>>8&15]+f[e>>>20&15]+f[e>>>16&15]+f[e>>>28&15]+f[e>>>24&15]+f[t>>>4&15]+f[15&t]+f[t>>>12&15]+f[t>>>8&15]+f[t>>>20&15]+f[t>>>16&15]+f[t>>>28&15]+f[t>>>24&15]+f[n>>>4&15]+f[15&n]+f[n>>>12&15]+f[n>>>8&15]+f[n>>>20&15]+f[n>>>16&15]+f[n>>>28&15]+f[n>>>24&15]+f[r>>>4&15]+f[15&r]+f[r>>>12&15]+f[r>>>8&15]+f[r>>>20&15]+f[r>>>16&15]+f[r>>>28&15]+f[r>>>24&15]},e.prototype.toString=e.prototype.hex,e.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3;return[255&e,e>>>8&255,e>>>16&255,e>>>24&255,255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&n,n>>>8&255,n>>>16&255,n>>>24&255,255&r,r>>>8&255,r>>>16&255,r>>>24&255]},e.prototype.array=e.prototype.digest,e.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},e.prototype.buffer=e.prototype.arrayBuffer,e.prototype.base64=function(){for(var e,t,n,r=``,i=this.array(),a=0;a<15;)e=i[a++],t=i[a++],n=i[a++],r+=g[e>>>2]+g[63&(e<<4|t>>>4)]+g[63&(t<<2|n>>>6)]+g[63&n];return e=i[a],r+=g[e>>>2]+g[e<<4&63]+`==`},(n.prototype=new e).finalize=function(){if(e.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();e.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(t),e.prototype.finalize.call(this)}};var te=function(){var t=S(`hex`);s&&(t=C(t)),t.create=function(){return new e},t.update=function(e){return t.create().update(e)};for(var n=0;n<h.length;++n){var r=h[n];t[r]=S(r)}return t}();te.md5=te,te.md5.hmac=function(){var e=ee(`hex`);e.create=function(e){return new n(e)},e.update=function(t,n){return e.create(t).update(n)};for(var t=0;t<h.length;++t){var r=h[t];e[r]=ee(r)}return e}(),l?t.exports=te:(a.md5=te,u&&define(function(){return te}))})()}))();const Oo={CSSStyleSheet:!0,CSSContainer:CSS.supports(`container-type`,`size`)};try{new CSSStyleSheet}catch{Oo.CSSStyleSheet=!1}var ko=(e,t)=>{for(let n of t){if(!Oo.CSSStyleSheet){let t=document.createElement(`style`);t.textContent=n,e.insertBefore(t,e.firstChild);continue}let t=new CSSStyleSheet;t.replaceSync(n),e.adoptedStyleSheets=[...e.adoptedStyleSheets,t]}};const q=e=>{let t={},n={};for(let r in e){let i=e[r],a={key:r,sync:!0,types:[]};r.startsWith(`$`)&&(a.key=r.slice(1),a.sync=!1),Array.isArray(i)&&(a.types=i,i=a.types[0]),t[a.key]=i,n[a.key]={sync:a.sync,def:i,to:e=>{switch(typeof i){case`string`:let t=String(e);return a.types.length>0?a.types.includes(t)?t:a.types[0]:t;case`number`:let n=Number(e);return isNaN(n)?i:n;case`boolean`:return typeof e==`boolean`?e:e===`true`}}}}return Object.defineProperty(t,`$meta`,{value:n}),t},Ao=e=>e;var jo=`
:host{
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*{
  outline: none;
}
`;const J=e=>{let t={observedAttributes:[],upperPropKeys:{},metaProps:e.props?.$meta??{},events:[]};for(let e in t.metaProps??{}){let n=e.toLowerCase();t.observedAttributes.push(n),t.upperPropKeys[n]=e}for(let n in e.events){let e=`on${n}`;t.observedAttributes.push(e),!(e in HTMLElement.prototype)&&t.events.push(e)}let n=new Map;class r extends HTMLElement{static observedAttributes=t.observedAttributes;static define(e){customElements.define(e,this)}constructor(){super();let r=this.attachShadow({mode:`open`});r.innerHTML=e.template??``,ko(r,[jo,...e.style?Array.isArray(e.style)?e.style:[e.style]:[]]);let i={...e.props},a,o={};for(let e in i){let n=this[e];n!==void 0&&(o[e]=n),Object.defineProperty(this,e,{configurable:!0,get:()=>{let t=a?.[e];return!t||typeof t==`function`||!t.get?i[e]:t.get?.(i[e])},set:n=>{let r=t.metaProps[e],o=n===void 0?r.def:r.to(n);if(r.sync){let t=e.toLowerCase(),n=this.getAttribute(t),i=String(o);if(o===r.def&&n!==null)return this.removeAttribute(t);if(o!==r.def&&n!==i)return this.setAttribute(t,i)}if(o===this[e])return;let s=i[e];i[e]=o;let c=a?.[e];if(c)try{typeof c==`function`?c(o,s):c.set?.(o,s)}catch(t){throw i[e]=s,t}}})}let s={};for(let e of t.events){let t=e;typeof this[t]==`function`&&(s[e]=this[t]),Object.defineProperty(this,e,{configurable:!0,get:()=>s[e]??null,set:t=>s[e]=typeof t==`function`?t:void 0}),this.addEventListener(e.slice(2),t=>s[e]&&s[e].bind(this)(t))}for(let t in a=e.setup?.call(this,r),a?.expose??{})Object.defineProperty(this,t,{get:()=>a?.expose?.[t]});for(let e in o)this[e]=o[e];this.connectedCallback=this.disconnectedCallback=this.adoptedCallback=this.attributeChangedCallback=void 0,n.set(this,a)}connectedCallback(){n.get(this)?.onMounted?.()}disconnectedCallback(){n.get(this)?.onUnmounted?.()}adoptedCallback(){n.get(this)?.onAdopted?.()}attributeChangedCallback(e,n,r){if(t.events.includes(e))return this[e]=r?Function(`event`,r):null;this[t.upperPropKeys[e]]=r??void 0}}for(let t in e.methods)r[t]=e.methods[t];return r};var Mo=`s-alert`,No=q({type:[`info`,`success`,`warning`,`error`]}),Po=`
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
`,Fo=`
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
`;(class extends J({style:Po,template:Fo,props:No}){}).define(Mo);var Io=`s-appbar`,Lo=`
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
`,Ro=`
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
`;(class extends J({style:Lo,template:Ro,setup(e){let t=e.querySelector(`.view`);Oo.CSSContainer||new ResizeObserver(()=>{t.classList.toggle(`s-laptop`,this.offsetWidth<=1024),t.classList.toggle(`s-tablet`,this.offsetWidth<=768)}).observe(this)}}){}).define(Io);var zo=`s-avatar`,Bo=q({$src:``}),Vo=`
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
`,Ho=`
<slot></slot>
<slot name="badge"></slot>
`;(class extends J({style:Vo,template:Ho,props:Bo,setup(e){let t=document.createElement(`img`);return{src:n=>{t.src=n,t.onload=()=>{this.dispatchEvent(new Event(`load`)),e.insertBefore(t,e.children[0])},t.onerror=()=>{this.dispatchEvent(new ErrorEvent(`error`)),t.isConnected&&e.removeChild(t)}}}}}){}).define(zo);var Uo=`s-badge`,Wo=`
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
`,Go=`
<slot class="text" part="text"></slot>
`;(class extends J({style:Wo,template:Go}){}).define(Uo);const Ko=e=>{let t=e.trim().match(/^([\d\.]+)(s|ms)$/);if(!t)throw Error();let n=Number(t[1]);return t[2]===`s`?n*1e3:n};var qo=`s-bottom-sheet`,Jo=q({showed:!1,disabledGesture:!1}),Yo=Ao({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),Xo=`
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
`,Zo=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <div class="container" part="container">
    <div class="indicator" part="indicator"></div>
    <slot name="text"></slot>
    <slot id="view"></slot>
  </div>
</dialog>
`,Qo=e=>{let t=document.body,n=document.body.firstElementChild;n&&n.tagName===`S-PAGE`&&(t=n);let r=new $o,i=document.createElement(`div`);return i.slot=`text`,typeof e==`function`||e instanceof HTMLElement?e instanceof HTMLElement?r.appendChild(e):e(r):typeof e==`string`?(i.textContent=e,r.appendChild(i)):(e.root&&(t=e.root),e.disabledGesture&&(r.disabledGesture=e.disabledGesture),typeof e.view==`string`&&(i.textContent=e.view,r.appendChild(i)),e.view instanceof HTMLElement&&r.appendChild(e.view),typeof e.view==`function`&&e.view(r)),r.addEventListener(`closed`,()=>t.removeChild(r)),r.showed=!0,t.appendChild(r),r},$o=class extends J({style:Xo,template:Zo,props:Jo,events:Yo,methods:{builder:Qo},setup(e){let t=e.querySelector(`dialog`),n=e.querySelector(`.container`),r=e.querySelector(`.scrim`),i=e.querySelector(`.indicator`),a=getComputedStyle(this),o=null,s=()=>({easing:a.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(a.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)});e.querySelector(`#view`).onslotchange=e=>{o=e.target.assignedElements()[0]??null},e.querySelector(`slot[name=trigger]`).onclick=()=>{this.showed||!this.dispatchEvent(new CustomEvent(`show`,{cancelable:!0,detail:{source:`TRIGGER`}}))||(this.showed=!0)};let c=e=>{!this.showed||!this.dispatchEvent(new CustomEvent(`close`,{cancelable:!0,detail:{source:e}}))||(this.showed=!1)};r.onclick=()=>c(`SCRIM`);let l=null;n.addEventListener(`touchmove`,e=>{let t=e.target;if(this.disabledGesture)return;let r=e.touches[0];if(!l)return l={y:r.pageY,x:r.pageX,disabled:!1,top:0,h:n.offsetHeight,now:Date.now()};if(l.disabled)return;let a=r.pageY-l.y,s=r.pageX-l.x;if(l.top=Math.min(l.h,Math.max(0,a)),t!==i&&o&&o.scrollTop>0||Math.abs(a)<Math.abs(s))return l.disabled=!0;n.style.transform=`translateY(${l.top}px)`},{passive:!1}),n.ontouchend=()=>{if(!l||l.disabled)return l=null;let e=Date.now()-l.now>300?l.h/3:20;if(l.top>e){if(!this.dispatchEvent(new CustomEvent(`close`,{cancelable:!0,detail:{source:`GESTURE`}})))return;this.showed=!1}else n.animate({transform:[n.style.transform,`translateY(0)`]},s()),n.style.removeProperty(`transform`);l=null};let u=()=>{if(!this.isConnected||t.open)return;t.showModal(),t.classList.add(`show`);let e=s();r.animate({opacity:[0,1]},e),n.animate({transform:[`translateY(100%)`,`translateY(0)`],opacity:[0,1]},e).finished.then(()=>this.dispatchEvent(new Event(`showed`)))},d=()=>{if(!this.isConnected||!t.open)return;t.classList.remove(`show`);let e=s(),i=n.style.transform;r.animate({opacity:[1,0]},e),n.animate({transform:[i===``?`translateY(0)`:i,`translateY(100%)`],opacity:[1,0]},e).finished.then(()=>{t.close(),i&&n.style.removeProperty(`transform`),this.dispatchEvent(new Event(`closed`))})};return{onMounted:()=>this.showed&&!t.open&&u(),showed:e=>e?u():d()}}}){};$o.define(qo);const es={mobileS:matchMedia(`(max-width: 320px)`),mobileM:matchMedia(`(max-width: 375px)`),mobileL:matchMedia(`(max-width: 425px)`),tablet:matchMedia(`(max-width: 768px)`),laptop:matchMedia(`(max-width: 1024px)`),laptopL:matchMedia(`(max-width: 1440px)`),pointerCoarse:matchMedia(`(pointer: coarse)`),pointerFine:matchMedia(`(pointer: fine)`)};var ts=`s-ripple`,ns=q({centered:!1,attached:!1}),rs=`
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
`,is=`
<slot></slot>
<div class="container" part="container">
  <div class="ripple"></div>
</div>
`,as=class extends J({style:rs,template:is,props:ns,setup(e){let t=e.querySelector(`.container`),n=e.querySelector(`.ripple`),r=getComputedStyle(this),i=()=>{let e=r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,t=r.getPropertyValue(`--s-motion-duration-long4`)||`600ms`,n=r.getPropertyValue(`--s-motion-duration-short4`)||`200ms`;return{easing:e,duration:Ko(t),shortDuration:Ko(n)}},a=()=>es.pointerFine.matches&&t.classList.add(`hover`),o=()=>es.pointerFine.matches&&t.classList.remove(`hover`),s={parentNode:null,pressed:!1},c=e=>{let{offsetWidth:r,offsetHeight:a}=this,o=Math.sqrt(r**2+a**2),c={x:`50%`,y:`50%`};if(!this.centered){let{left:t,top:n}=this.getBoundingClientRect(),i=e.clientX-t,s=e.clientY-n,l=a/2,u=r/2,d=(Math.abs(l-s)+l)*2,f=(Math.abs(u-i)+u)*2;o=Math.sqrt(d**2+f**2),c.x=`${i}px`,c.y=`${s}px`}let l=n,u=()=>{};s.pressed?(l=n.cloneNode(),t.appendChild(l),u=()=>l.remove()):(s.pressed=!0,u=()=>s.pressed=!1);let d=s.parentNode??this,f=i();d.setAttribute(`pressed`,``);let p=l.animate({opacity:[1,1],width:[`${o}px`,`${o}px`],height:[`${o}px`,`${o}px`],transform:[`translate(-50%, -50%) scale(0)`,`translate(-50%, -50%) scale(1)`],left:[c.x,c.x],top:[c.y,c.y]},{...f,fill:`forwards`});return()=>{d.removeAttribute(`pressed`);let e=Number(p.currentTime),t=e>f.duration-f.shortDuration?f.shortDuration:f.duration-e;l.animate({opacity:[1,0]},{duration:t,easing:f.easing,fill:`forwards`}).finished.then(u)}},l=async e=>{if(e.button!==0)return;let t={};if(e.pointerType===`mouse`){document.addEventListener(`pointerup`,c(e),{once:!0});return}let n;t.timer=setTimeout(()=>{n=c(e),document.removeEventListener(`touchmove`,r),t.upper&&n()},50),document.addEventListener(`touchend`,()=>{if(!n)return t.upper=!0;n()},{once:!0});let r=()=>clearTimeout(t.timer);document.addEventListener(`touchmove`,r,{once:!0})},u=e=>{e.addEventListener(`mouseenter`,a),e.addEventListener(`mouseleave`,o),e.addEventListener(`wheel`,o,{passive:!0}),e.addEventListener(`pointerdown`,l)},d=()=>{s.parentNode&&=(s.parentNode.removeEventListener(`mouseenter`,a),s.parentNode.removeEventListener(`mouseleave`,o),s.parentNode.removeEventListener(`wheel`,o),s.parentNode.removeEventListener(`pointerdown`,l),null)};return u(this),{onMounted:()=>{this.attached&&this.parentNode&&(s.parentNode=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode,u(s.parentNode))},onUnmounted:()=>this.attached&&d(),attached:e=>{if(this.isConnected){if(!e)return d();u(this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode)}}}}}){};as.define(ts);var os=`s-button`,ss=q({disabled:!1,type:[`filled`,`elevated`,`filled-tonal`,`outlined`,`text`]}),cs=`
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
`,ls=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;(class extends J({style:cs,template:ls,props:ss}){}).define(os);var us=`s-card`,ds=q({type:[`elevated`,`filled`,`outlined`],clickable:!1}),fs=`
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
`,ps=`
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
`;(class extends J({style:fs,template:ps,props:ds,setup(e){let t=e.querySelector(`slot[name=action]`);t.onpointerdown=e=>e.stopPropagation()}}){}).define(us);var ms=class{list=[];select;selectValue;flag=!1;constructor(e){let{context:t}=e;t.addEventListener(`${t.tagName.toLocaleLowerCase()}:select`,n=>{if(n.stopPropagation(),!(n.target instanceof e.class))return;let r;this.flag=!0,n.target.selected=!0,this.list.forEach(e=>{e!==n.target&&(e.selected&&(r=e),e.selected=!1)}),this.select=n.target,this.flag=!1,t.dispatchEvent(new Event(`change`)),this.onUpdate?.(r),this.onSelect?.()}),t.addEventListener(`${t.tagName.toLocaleLowerCase()}:update`,t=>{if(t.stopPropagation(),this.flag||this.list.length===0||!(t.target instanceof e.class))return;this.flag=!0;let n;t.target.selected?(this.select=t.target,this.list.forEach(e=>{e!==t.target&&(e.selected&&(n=e),e.selected=!1)})):delete this.select,this.flag=!1,this.onUpdate?.(n)}),e.slot.addEventListener(`slotchange`,()=>{this.flag=!0,delete this.select,this.list=e.slot.assignedElements().filter(t=>{if(t instanceof e.class){if(this.selectValue!==void 0)t.value===this.selectValue?(this.select=t,t.selected=!0):t.selected=!1;else{if(!this.select&&t.selected)return this.select=t,!0;this.select&&(t.selected=!1)}return!0}}),this.flag=!1,this.onSlotChange?.(),this.onUpdate?.()})}get value(){return this.list[this.list.indexOf(this.select)]?.value??``}set value(e){this.selectValue=e,this.list.length!==0&&(this.flag=!0,this.list.forEach(t=>{if(t.value===e){t.selected=!0,this.select=t;return}t.selected=!1}),this.onUpdate?.(),this.flag=!1)}get selectedIndex(){return this.list.indexOf(this.select)}},hs=`s-carousel`,gs=q({$value:``,$autoplay:!1,$duration:4e3}),_s=`
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
`,vs=`
<div class="container" part="container">
  <slot></slot>
</div>
<div class="track"></div>
`,ys=class extends J({style:_s,template:vs,props:gs,setup(e){let t=e.querySelector(`.container`),n=e.querySelector(`.track`),r=e.querySelector(`slot`),i=new ms({context:this,class:ws,slot:r}),a=-1;i.onUpdate=()=>{n.childNodes.forEach(e=>e.classList.remove(`checked`)),t.style.transform=`translateX(${-i.selectedIndex*100}%)`,i.selectedIndex!==-1&&(n.childNodes[i.selectedIndex].classList.add(`checked`),o())};let o=()=>{!this.autoplay||i.list.length===0||!this.isConnected||(s(),a=setTimeout(()=>{let e=i.selectedIndex+1;e>=i.list.length&&(e=0),i.list[e].selected=!0,this.dispatchEvent(new Event(`change`))},this.duration))},s=()=>clearInterval(a);return i.onSlotChange=()=>{n.innerHTML=``;let e=document.createDocumentFragment();i.list.forEach(t=>{let n=document.createElement(`div`);n.className=`indicator`,n.addEventListener(`click`,()=>t.dispatchEvent(new Event(`${hs}:select`,{bubbles:!0}))),e.appendChild(n)}),n.appendChild(e)},t.onpointerdown=e=>{if(i.list.length<=1)return;s();let n=e.pageX,r=e.pageY,a=t.offsetWidth,c=i.list[i.selectedIndex-1],l=i.list[i.selectedIndex+1],u={now:0,left:0,next:void 0},d=e=>{let o=e instanceof TouchEvent?e.touches[0]:e,s=o.pageX-n,d=o.pageY-r;if(e instanceof TouchEvent&&Math.abs(s)<Math.abs(d)&&!u.next)return f();if(u.left=s,u.now===0&&(u.now=Date.now()),c&&(u.left=Math.min(u.left,a)),l&&(u.left=Math.max(u.left,a*-1)),(!c&&u.left>0||!l&&u.left<0)&&(u.left*=.2),u.left<0&&l||u.left>0&&c){let e=Math.abs(u.left)/a*.05;i.select.style.transition=`none`,i.select.style.transform=`scale(${.05-e+.95})`,u.next=u.left<0?l:c,u.next.style.transition=`none`,u.next.style.transform=`scale(${e+.95})`}t.style.transition=`none`,t.style.pointerEvents=`none`,t.style.transform=`translateX(calc(${-i.selectedIndex*100}% + ${u.left}px))`,e.cancelable&&e.preventDefault()},f=()=>{document.removeEventListener(p.up,f),document.removeEventListener(p.move,d),t.style.removeProperty(`pointer-events`),t.style.removeProperty(`transition`),i.select.style.removeProperty(`transition`),i.select.style.removeProperty(`transform`),u.next?.style.removeProperty(`transition`),u.next?.style.removeProperty(`transform`);let e=i.selectedIndex;if(!(e===0&&u.left>0||e===i.list.length-1&&u.left<0)){let e=Date.now()-u.now>300?a/2:20;if(Math.abs(u.left)>e){u.next?.dispatchEvent(new Event(`${hs}:select`,{bubbles:!0}));return}}t.style.transform=`translateX(${-i.selectedIndex*100}%)`,o()},p={move:es.pointerCoarse.matches?`touchmove`:`pointermove`,up:es.pointerCoarse.matches?`touchend`:`pointerup`};document.addEventListener(p.move,d,{passive:!1}),document.addEventListener(p.up,f)},{expose:{get options(){return i.list},get selectedIndex(){return i.selectedIndex},togglePrevious:()=>{let e=i.list[i.selectedIndex-1];e&&(e.selected=!0)},toggleNext:()=>{let e=i.list[i.selectedIndex+1];e&&(e.selected=!0)}},onMounted:o,onUnmounted:s,value:{get:()=>i.value,set:e=>{i.value=e,o()}},autoplay:o}}}){},bs=`s-carousel-item`,xs=q({selected:!1,$value:``}),Ss=`
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
`,Cs=`<slot></slot>`,ws=class extends J({style:Ss,template:Cs,props:xs,setup(){return{selected:()=>{this.parentNode instanceof ys&&this.dispatchEvent(new Event(`${hs}:update`,{bubbles:!0}))}}}}){};ys.define(hs),ws.define(bs);var Ts=`s-checkbox`,Es=q({disabled:!1,checked:!1,indeterminate:!1}),Ds=`
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
`,Os=`
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
`;(class extends J({style:Ds,template:Os,props:Es,setup(){this.addEventListener(`click`,()=>{this.indeterminate&&=!1,this.checked=!this.checked,this.dispatchEvent(new Event(`change`))})}}){}).define(Ts);var ks=`s-chip`,As=q({type:[`filled`,`outlined`],$value:``,checked:!1,disabled:!1,clickable:!1}),js=`
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
`,Ms=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<slot name="action"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;(class extends J({style:js,template:Ms,props:As,setup(e){let t=e.querySelector(`slot[name=action]`);t.onclick=e=>e.stopPropagation(),t.onpointerdown=e=>e.stopPropagation(),this.addEventListener(`click`,()=>{this.clickable&&(this.checked=!this.checked,this.dispatchEvent(new Event(`change`)))})}}){}).define(ks);var Ns=`s-circular-progress`,Ps=q({indeterminate:!1,animated:!1,$max:100,$value:0}),Fs=`
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
`,Is=48,Ls=4,Rs=(Is-Ls)*Math.PI,zs=`
<div class="container known">
  <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${Rs}px;">
    <circle class="track block" cx="${Is/2}" cy="${Is/2}" r="${(Is-Ls)/2}" style="stroke-width: ${Ls}px" />
    <circle class="indicator block" cx="${Is/2}" cy="${Is/2}" r="${(Is-Ls)/2}" style="stroke-dashoffset: ${Rs}px;stroke-width: ${Ls}px" />
  </svg>
</div>
<div class="container unknown">
  <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${Rs}px;">
    <circle transform="rotate(-90, ${Is/2}, ${Is/2})" cx="${Is/2}" cy="${Is/2}" r=" ${(Is-Ls)/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${Ls}px"></circle>
  </svg>
</div>
`;(class extends J({style:Fs,template:zs,props:Ps,setup(e){let t=e.querySelector(`.known .track`),n=e.querySelector(`.known .indicator`),r=()=>{let e=Math.min(this.value,this.max)/this.max*100,r=Rs-Rs*(e/100),i=e/100*360;t.style.strokeDashoffset=`${e===0?0:Math.min(Rs+16-r,Rs)}px`,t.setAttribute(`transform`,`rotate(${i+20}, ${Is/2}, ${Is/2})`),n.style.strokeDashoffset=`${r}px`};return{max:r,value:r}}}){}).define(Ns);const Bs=(e,t=`yyyy-MM-dd`)=>{typeof e==`string`&&(e=new Date(e));let n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return t.replace(`yyyy`,n.toString()).replace(`MM`,r.toString().padStart(2,`0`)).replace(`dd`,i.toString().padStart(2,`0`))};var Vs=new class{list;locale=navigator.language;updates=new Map;constructor(e){this.list=e}getItem(e){if(e||=this.locale,e in this.list)return this.list[e];let[t]=e.split(`-`);return t in this.list?this.list[t]:this.list.zh}addItem(e,t){if(this.list[e])throw Error(`Locale ${e} already exists`);this.list[e]=t}setLocale(e){this.locale=e??navigator.language,this.updates.forEach(e=>e())}}({});Vs.list={zh:{display:e=>`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日 星期${Vs.list.zh.displayWeeks[e.getDay()]}`,displayMonth:e=>`${e.getFullYear()}年`,displayWeeks:[`日`,`一`,`二`,`三`,`四`,`五`,`六`]},en:{display:e=>`${[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`][e.getDay()]}, Jan ${e.getDate()}`,displayMonth:e=>`${[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`][e.getMonth()]} ${e.getFullYear()}`,displayWeeks:[`S`,`M`,`T`,`W`,`T`,`F`,`S`]}};var Hs=`s-date`,Us=q({$value:``,$locale:``,$max:`2099-12-31`,$min:`1900-01-01`}),Ws=`
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
`,Gs={years:[],weeks:[],days:[]};for(let e=0;e<200;e++)e<7&&Gs.weeks.push(`<div class="item"></div>`),e<31&&Gs.days.push(`<div class="item"><s-ripple class="icon-button">${e+1}</s-ripple></div>`),Gs.years.push(`<s-ripple class="button item"></s-ripple>`);var Ks=`
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
  <s-scroll-view class="years">${Gs.years.join(``)}</s-scroll-view>
  <div class="weeks">${Gs.weeks.join(``)}</div>
  <div class="days">${Gs.days.join(``)}</div>
</div>
`,qs=class{yearSelect;daySelect;dayOverflow;date;min;max;constructor(e,t,n){this.date=typeof e==`string`?new Date(e):e,this.min=new Date(t),this.max=new Date(n)}},Js=(e,t)=>{let n=new Date(e,t+1,1);return n.setDate(n.getDate()-1),n.getDate()},Ys=(e,t)=>{Vs.addItem(e,t)},Xs=e=>{Vs.setLocale(e)};(class extends J({style:Ws,template:Ks,props:Us,methods:{addLocale:Ys,setLocale:Xs},setup(e){let t=e.querySelector(`.container`),n=e.querySelector(`.header>span`),r=e.querySelector(`.action>.year`),i=e.querySelector(`.action>.toggle>.prev`),a=e.querySelector(`.action>.toggle>.next`),o=e.querySelector(`.years`),s=e.querySelector(`.weeks`),c=e.querySelector(`.days`),l=new qs(this.value||new Date,this.min,this.max),u=()=>{let e=Vs.getItem(this.locale).display;n.textContent=e(l.date);let t=Vs.getItem(this.locale).displayMonth;r.children[0].textContent=t(l.date)},d=()=>{let e=Vs.getItem(this.locale).displayWeeks;s.childNodes.forEach((t,n)=>t.textContent=e[n])},f=()=>{let e=new Date(l.date.getFullYear(),l.date.getMonth(),1).getDay();c.children[0].setAttribute(`style`,`margin-left: calc((100% / 7) * ${e})`);let n=new Date(l.date.getFullYear(),l.date.getMonth()+1,0).getDate();l.dayOverflow?.classList.remove(`overflow`),l.dayOverflow=c.children[n-1],l.dayOverflow.classList.add(`overflow`),l.yearSelect?.classList.remove(`checked`),l.yearSelect=o.children[l.date.getFullYear()-l.min.getFullYear()],l.yearSelect.classList.add(`checked`),l.daySelect?.classList.remove(`checked`),l.daySelect=c.children[l.date.getDate()-1],l.daySelect.classList.add(`checked`),t.style.removeProperty(`height`)},p=()=>{let e=l.max.getFullYear()-l.min.getFullYear();o.innerHTML=``,o.style.counterReset=`year-counter ${l.min.getFullYear()-1}`;let t=document.createDocumentFragment();for(let n=0;n<=e;n++){let e=new as;e.classList.add(`button`,`item`),t.appendChild(e)}o.appendChild(t),f()},m=(e,t,n)=>{this.value=Bs(new Date(e,t,n)),this.dispatchEvent(new Event(`change`))};r.onclick=()=>{let e=t.offsetHeight;if(t.classList.toggle(`show-years`),t.classList.contains(`show-years`)){t.style.height=`${e}px`,l.yearSelect&&o.scrollTo({top:l.yearSelect.offsetTop-o.offsetHeight/2+l.yearSelect.offsetHeight/2});return}},i.onclick=()=>{let e=Js(l.date.getFullYear(),l.date.getMonth()-1),t=Math.min(l.date.getDate(),e);m(l.date.getFullYear(),l.date.getMonth()-1,t)},a.onclick=()=>{let e=Js(l.date.getFullYear(),l.date.getMonth()+1),t=Math.min(l.date.getDate(),e);m(l.date.getFullYear(),l.date.getMonth()+1,t)},o.onclick=e=>{e.target instanceof as&&(t.classList.remove(`show-years`),m(Array.from(o.children).indexOf(e.target)+l.min.getFullYear(),l.date.getMonth(),l.date.getDate()))},c.onclick=e=>{if(!(e.target instanceof as))return;let t=Array.from(c.children).indexOf(e.target.parentElement)+1;m(l.date.getFullYear(),l.date.getMonth(),t)};let h=()=>{u(),d()};return f(),h(),{onMounted:()=>Vs.updates.set(this,h),onUnmounted:()=>Vs.updates.delete(this),min:e=>{let t=new Date(e);if(isNaN(t.getTime())||t.getTime()>l.date.getTime())throw Error(`invalid min date`);l.min=t,p()},max:e=>{let t=new Date(e);if(isNaN(t.getTime())||t.getTime()<l.date.getTime())throw Error(`invalid max date`);l.max=t,p()},value:{get:()=>Bs(l.date),set:e=>{let t=new Date(e);if(isNaN(t.getTime())||t.getTime()<l.min.getTime()||t.getTime()>l.max.getTime())throw Error(`invalid date`);l.date=t,u(),f()}},locale:h}}}){}).define(Hs);var Zs=`s-date-picker`,Qs=q({$value:``,$min:``,$max:``,$label:``,$positiveText:`确定`,$negativeText:`取消`,$format:`yyyy-MM-dd`,$locale:``}),$s=`
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
`,ec=`
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
  <s-ripple class="negative" slot="action" part="negative">${Qs.negativeText}</s-ripple>
  <s-ripple class="positive" slot="action" part="positive">${Qs.positiveText}</s-ripple>
</s-dialog>
`;(class extends J({style:$s,template:ec,props:Qs,setup(e){let t=e.querySelector(`s-dialog`),n=e.querySelector(`s-date`),r=e.querySelector(`.negative`),i=e.querySelector(`.positive`),a=e.querySelector(`s-field`),o=e.querySelector(`.label`),s=e.querySelector(`.view`),c={date:``};return t.addEventListener(`show`,()=>{a.fixed=!0,a.focused=!0,c.date||(s.textContent=this.label,s.style.opacity=`0`)}),t.onclose=()=>{a.focused=!1,c.date||(a.fixed=!1)},i.onclick=()=>{this.value=n.value,s.style.removeProperty(`opacity`),this.dispatchEvent(new Event(`change`))},{value:{get:()=>c.date,set:e=>{if(c.date=e,e===``){n.value=Bs(new Date),a.fixed=!1,s.textContent=``;return}a.fixed=!0,s.textContent=Bs(e,this.format),n.value=e}},locale:{get:()=>n.locale,set:e=>n.locale=e},min:{get:()=>n.min,set:e=>n.min=e},max:{get:()=>n.max,set:e=>n.max=e},label:e=>o.textContent=e,positiveText:e=>i.textContent=e,negativeText:e=>r.textContent=e}}}){}).define(Zs);var tc=`s-scroll-view`,nc=`
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
`,rc=`<slot></slot>`;(class extends J({style:nc,template:rc}){}).define(tc);var ic=`s-dialog`,ac=q({showed:!1,size:[`standard`,`full`]}),oc=Ao({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),sc=`
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
`,cc=`
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
`,lc=e=>{let t=document.body,n=new uc,r=document.body.firstElementChild;if(r&&r.tagName===`S-PAGE`&&(t=r),typeof e==`string`){let t=document.createElement(`div`);t.slot=`text`,t.textContent=e,n.appendChild(t)}else{if(e.root&&(t=e.root),e.headline){let t=document.createElement(`div`);t.slot=`headline`,t.textContent=e.headline,n.appendChild(t)}if(e.text){let t=document.createElement(`div`);t.slot=`text`,t.textContent=e.text,n.appendChild(t)}e.view&&(typeof e.view==`function`?e.view(n):n.appendChild(e.view));let r=e.actions??[];for(let e of Array.isArray(r)?r:[r]){let t=document.createElement(`s-button`);t.slot=`action`,t.type=`text`,t.textContent=e.text,e.click&&(t.onclick=e.click),n.appendChild(t)}}return n.showed=!0,n.addEventListener(`closed`,()=>t.removeChild(n)),t.appendChild(n),n},uc=class extends J({style:sc,template:cc,props:ac,events:oc,methods:{builder:lc},setup(e){let t=e.querySelector(`dialog`),n=e.querySelector(`.scrim`),r=e.querySelector(`.wrapper`),i=getComputedStyle(this),a=()=>({easing:i.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(i.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)});e.querySelector(`slot[name=trigger]`).onclick=()=>{if(this.showed||!this.dispatchEvent(new CustomEvent(`show`,{cancelable:!0,detail:{source:`TRIGGER`}})))return console.log(`拒绝`);this.showed=!0};let o=e=>{!this.showed||!this.dispatchEvent(new CustomEvent(`close`,{cancelable:!0,detail:{source:e}}))||(this.showed=!1)};e.querySelector(`.scrim`).onclick=()=>o(`SCRIM`),e.querySelector(`slot[name=action]`).onclick=()=>o(`ACTION`);let s=()=>{if(!this.isConnected||t.open)return;let e=a();t.showModal(),t.classList.add(`show`),n.animate({opacity:[0,1]},e),r.animate({transform:[`scale(.9)`,`scale(1)`],opacity:[0,1]},e).addEventListener(`finish`,()=>this.dispatchEvent(new Event(`showed`)))},c=()=>{if(!this.isConnected||!t.open)return;let e=a();n.animate({opacity:[1,0]},e),r.animate({transform:[`scale(1)`,`scale(.9)`],opacity:[1,0]},e).addEventListener(`finish`,()=>{t.close(),t.classList.remove(`show`),this.dispatchEvent(new Event(`closed`))})};return{onMounted:()=>this.showed&&!t.open&&s(),showed:e=>e?s():c()}}}){};uc.define(ic);var dc=`s-divider`,fc=`
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
`,pc=`<slot></slot>`;(class extends J({style:fc,template:pc}){}).define(dc);var mc=`s-drawer`,hc=`
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
`,gc=`
<slot class="view" part="view"></slot>
<div class="scrim" part="scrim show"></div>
<slot name="start" class="start show" part="start"></slot>
<slot name="end" class="end show" part="end"></slot>
`;(class extends J({style:hc,template:gc,setup(e){let t=e.querySelector(`.scrim`),n={start:e.querySelector(`.start`),end:e.querySelector(`.end`)},r=getComputedStyle(this),i=()=>({easing:r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(r.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)}),a=(e=`start`)=>n[e],o=e=>e??this.offsetWidth<=1024?`show-laptop`:`show`,s=(e=`start`)=>({start:-1,end:1})[e],c=(e,n)=>{let r=a(e),c=o(n);if(r.classList.contains(c))return;let l=s(e),u=i();r.classList.add(c),t.classList.add(c);let d=this.offsetWidth<=1024?{transform:[`translateX(${r.offsetWidth*l}px)`,`translateX(0)`]}:{width:[`0`,r.offsetWidth+`px`]};this.offsetWidth<=1024&&t.animate({opacity:[0,1]},u),r.animate(d,u)},l=(e,n)=>{let r=a(e),c=o(n);if(!r.classList.contains(c))return;let l=s(e),u=i(),d={...this.offsetWidth<=1024?{transform:[`translateX(0)`,`translateX(${r.offsetWidth*l}px)`]}:{width:[r.offsetWidth+`px`,`0px`]}};r.style.display=`block`,r.animate(d,u).finished.then(()=>r.style.removeProperty(`display`)),this.offsetWidth<=1024&&t.animate({opacity:[1,0]},u),r.classList.remove(c),t.classList.remove(c)};return t.addEventListener(`click`,()=>{l(`start`,!0),l(`end`,!0)}),Oo.CSSContainer||new ResizeObserver(()=>{t.classList.toggle(`s-laptop`,this.offsetWidth<=1024),n.start.classList.toggle(`s-laptop`,this.offsetWidth<=1024),n.end.classList.toggle(`s-laptop`,this.offsetWidth<=1024)}).observe(this),{expose:{show:c,close:l,toggle:(e,t)=>{let n=a(e),r=o(t);n.classList.contains(r)?l(e,t):c(e,t)}}}}}){}).define(mc);var _c=`s-empty`,vc=`
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
`,yc=`
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
<slot></slot>`;(class extends J({style:vc,template:yc}){}).define(_c);var bc=`s-fab`,xc=q({hidden:!1,disabled:!1}),Sc=`
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
`,Cc=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;(class extends J({style:Sc,template:Cc,props:xc}){}).define(bc);var wc=`s-icon-button`,Tc=q({disabled:!1,type:[`standard`,`filled`,`filled-tonal`,`outlined`]}),Ec=`
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
`,Dc=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
<slot name="badge"></slot>
`;(class extends J({style:Ec,template:Dc,props:Tc}){}).define(wc);var Oc={none:``,home:`M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z`,add:`M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z`,search:`M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z`,menu:`M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z`,arrow_back:`m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z`,arrow_forward:{name:`arrow_back`,angle:180},arrow_upward:{name:`arrow_back`,angle:90},arrow_downward:{name:`arrow_back`,angle:-90},arrow_drop_up:`m280-400 200-200 200 200H280Z`,arrow_drop_down:{name:`arrow_drop_up`,angle:180},arrow_drop_left:{name:`arrow_drop_up`,angle:-90},arrow_drop_right:{name:`arrow_drop_up`,angle:90},more_vert:`M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z`,more_horiz:{name:`more_vert`,angle:90},close:`m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z`,done:`M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z`,chevron_up:`M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z`,chevron_down:{name:`chevron_up`,angle:180},chevron_left:{name:`chevron_up`,angle:-90},chevron_right:{name:`chevron_up`,angle:90},light_mode:`M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z`,dark_mode:`M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z`,star:`m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z`,favorite:`m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z`},kc=`s-icon`,Ac=q({name:Object.keys(Oc),$src:``}),jc=`
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
`,Mc=`<slot></slot>`;(class extends J({style:jc,template:Mc,props:Ac,setup(e){let t=e.querySelector(`slot`),n=document.createElement(`img`),r=(e=Oc.none,t=``)=>`<svg viewBox="0 -960 960 960"><path d="${e}" transform="${t}"></path></svg>`;return{name:e=>{let n=Oc[e];if(typeof n==`string`)return t.innerHTML=r(n);let i=n.name;typeof Oc[i]==`string`&&(t.innerHTML=r(Oc[i],`rotate(${n.angle} 480 -480)`))},src:async()=>{try{let e=new URL(this.src,location.href);if(e.pathname.endsWith(`.svg`)){let n=await(await fetch(e.href)).text(),r=document.createElement(`template`);r.innerHTML=n;let i=r.content.childNodes[0];if(!(i instanceof SVGElement))throw Error(`Invalid SVG`);t.innerHTML=``,t.appendChild(i),this.dispatchEvent(new Event(`load`))}else n.src=e.href,n.onload=()=>{t.innerHTML=``,t.appendChild(n),this.dispatchEvent(new Event(`load`))},n.onerror=()=>this.dispatchEvent(new ErrorEvent(`error`))}catch{this.dispatchEvent(new ErrorEvent(`error`))}}}}}){}).define(kc);var Nc=`s-linear-progress`,Pc=q({indeterminate:!1,animated:!1,$max:100,$value:0}),Fc=`
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
`,Ic=`
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
`;(class extends J({style:Fc,template:Ic,props:Pc,setup(e){let t=e.querySelector(`.known>.track`),n=e.querySelector(`.known>.indicator`),r=()=>{let e=Math.min(this.value,this.max)/this.max*100;t.style.transform=`translateX(calc(${e}% + ${e===0?0:4}px))`,n.style.transform=`translateX(${e-100}%)`};return{max:r,value:r}}}){}).define(Nc);var Lc=`s-menu`,Rc=`
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
`,zc=`
<slot name="label"></slot>
<slot></slot>
`,Bc=class extends J({style:Rc,template:zc}){},Vc=`s-menu-item`,Hc=q({checked:!1,folded:!0}),Uc=`
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
`,Wc=`
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
<s-fold class="fold" part="fold" folded="${Hc.folded}">
  <slot name="menu" class="menu"></slot>
</s-fold>
`,Gc=class extends J({style:Uc,template:Wc,props:Hc,setup(e){let t=e.querySelector(`.container`),n=e.querySelector(`.fold`),r=e.querySelector(`slot[name=menu]`);return n.onclick=e=>e.stopPropagation(),r.onslotchange=()=>t.classList[r.assignedElements().length>0?`add`:`remove`](`show-menu`),t.onclick=()=>{t.classList.contains(`show-menu`)&&(this.folded=!this.folded)},{folded:e=>n.folded=e}}}){};Bc.define(Lc),Gc.define(Vc);var Kc=`s-navigation`,qc=q({mode:[`bottom`,`rail`],$value:``}),Jc=`
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
`,Yc=`
<slot name="start"></slot>
<slot id="slot"></slot>
<slot name="end"></slot>
`,Xc=class extends J({style:Jc,template:Yc,props:qc,setup(e){let t=e.querySelector(`#slot`),n=new ms({context:this,class:tl,slot:t});return{expose:{get options(){return n.list},get selectedIndex(){return n.selectedIndex}},value:{get:()=>n.value,set:e=>n.value=e}}}}){},Zc=`s-navigation-item`,Qc=q({selected:!1,$value:``}),$c=`
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
`,el=`
<s-ripple attached="true" class="icon" part="icon">
  <slot name="icon"></slot>
  <slot name="badge"></slot>
</s-ripple>
<slot name="text"></slot>
`,tl=class extends J({style:$c,template:el,props:Qc,setup(){return this.addEventListener(`click`,()=>{this.selected||this.parentNode instanceof Xc&&this.dispatchEvent(new Event(`${Kc}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof Xc&&this.dispatchEvent(new Event(`${Kc}:update`,{bubbles:!0}))}}}}){};Xc.define(Kc),tl.define(Zc);var nl=`s-field`,rl=q({focused:!1,fixed:!0}),il=`
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
`,al=`
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
`;(class extends J({style:il,template:al,props:rl}){}).define(nl);var ol=`s-fold`,sl=q({folded:!1}),cl=`
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
`,ll=`
<slot name="trigger"></slot>
<div class="container" part="container">
  <slot class="view" part="view"></slot>
</div>
`;(class extends J({style:cl,template:ll,props:sl,setup(e){e.querySelector(`slot[name=trigger]`).onclick=()=>this.folded=!this.folded}}){}).define(ol);var ul=`s-page`,dl=q({theme:[`light`,`auto`,`dark`]}),fl=`
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
`,pl=`<slot></slot>`,ml=document.createElement(`style`);ml.textContent=`::view-transition-old(root),::view-transition-new(root) { animation: none; mix-blend-mode: normal}`,class extends J({style:fl,template:pl,props:dl,setup(){let e=getComputedStyle(this),t=matchMedia(`(prefers-color-scheme: dark)`),n=()=>({easing:e.getPropertyValue(`--s-motion-easing-standard-accelerate`)||`cubic-bezier(0.3, 0, 1, 1)`,duration:Ko(e.getPropertyValue(`--s-motion-duration-long4`)||`600ms`)}),r=()=>this.theme===`auto`?t.matches:this.theme===`dark`;return{expose:{toggle:(e,r)=>new Promise(i=>{if(this.theme===e)return;let a=t.matches,o=e=>e===`auto`?a?`dark`:`light`:e;if(o(this.theme)===o(e)||!document.startViewTransition)return this.theme=e,i();let s=innerWidth,c=innerHeight,l={clipPath:[`circle(0px at 50% ${c/2}px)`,`circle(${Math.sqrt(s**2+c**2)/2}px at 50% ${c/2}px)`]};if(r&&r.isConnected){let{left:e,top:t}=r.getBoundingClientRect(),n=e+r.offsetWidth/2,i=t+r.offsetHeight/2,a=Math.max(s-n,n),o=Math.max(c-i,i),u=Math.sqrt(a**2+o**2);l.clipPath[0]=`circle(0px at ${n}px ${i}px)`,l.clipPath[1]=`circle(${u}px at ${n}px ${i}px)`}let u=document.startViewTransition(()=>{this.theme=e,document.head.appendChild(ml)});u.ready.then(async()=>{i(document.documentElement.animate(l,{...n(),pseudoElement:`::view-transition-new(root)`})),await u.finished,ml.remove()})}),get isDark(){return r()}},theme:e=>{if(e===`light`)return this.removeAttribute(`dark`);if(e===`dark`)return this.setAttribute(`dark`,``);let n=()=>{t.matches?this.setAttribute(`dark`,``):this.removeAttribute(`dark`),this.dispatchEvent(new Event(`change`))};t.onchange=n,n()}}}}){}.define(ul);var hl=`s-pagination`,gl=q({$value:1,$total:20,$count:20,type:[`standard`,`outlined`]}),_l=`
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
`,vl=`
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
`;(class extends J({style:_l,template:vl,props:gl,setup(e){let t=e.querySelector(`.prev`),n=e.querySelector(`.next`),r=e.querySelector(`.container`),i=()=>this.dispatchEvent(new Event(`change`)),a=()=>{let e=Math.ceil(this.total/this.count),i=Math.max(Math.min(e-7,Math.max(0,this.value-4)),0);if(r.childNodes.forEach(e=>{i++;let t=e;t.textContent=i.toString(),t.classList.toggle(`checked`,this.value===i),t.classList.remove(`text`)}),t.classList.toggle(`disabled`,this.value===1),n.classList.toggle(`disabled`,this.value===e),e>7){if(this.value>=5){r.childNodes.item(0).textContent=`1`;let e=r.childNodes.item(1);e.textContent=`...`,e.classList.add(`text`)}if(this.value<=e-4){r.childNodes.item(r.childNodes.length-1).textContent=e.toString();let t=r.childNodes.item(r.childNodes.length-2);t.textContent=`...`,t.classList.add(`text`)}}};return r.onclick=e=>{if(!(e.target instanceof as))return;let t=Number(e.target.textContent);t!==this.value&&(this.value=t,i())},t.onclick=()=>{let e=Math.max(this.value-1,1);e!==this.value&&(this.value=e,i())},n.onclick=()=>{let e=Math.min(this.value+1,Math.ceil(this.total/this.count));e!==this.value&&(this.value=e,i())},{total:()=>{let e=Math.ceil(this.total/this.count),t=Math.min(e,7),n=document.createDocumentFragment();for(let e=1;e<=t;e++){let e=new as;e.classList.add(`button`),n.appendChild(e)}r.innerHTML=``,r.appendChild(n),a()},value:a}}}){}).define(hl);var yl=`s-picker`,bl=q({disabled:!1,$label:``,$value:``}),xl=`
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
`,Sl=`
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
`,Cl=class extends J({style:xl,template:Sl,props:bl,setup(e){let t=e.querySelector(`.popup`),n=e.querySelector(`.field`),r=e.querySelector(`.label`),i=e.querySelector(`.view`),a=e.querySelector(`#slot`),o=e.querySelector(`.container`),s=new ms({context:this,class:Ol,slot:a});return t.addEventListener(`show`,()=>{n.focused=!0,n.fixed=!0,s.select||(i.textContent=this.label,i.style.opacity=`0`),o.style.minWidth=`${this.offsetWidth}px`,s.select&&o.scrollTo({top:s.select.offsetTop-o.offsetTop-(o.offsetHeight/2-s.select.offsetHeight/2)})}),t.onclose=()=>{n.focused=!1,!s.select&&(n.fixed=!1)},t.addEventListener(`closed`,()=>o.style.removeProperty(`min-width`)),s.onUpdate=()=>{if(!s.select){n.fixed=!1,i.textContent=``;return}n.fixed=!0,i.style.removeProperty(`opacity`),i.textContent=s.select.textContent},s.onSelect=()=>t.close(),{expose:{get options(){return s.list},get selectedIndex(){return s.selectedIndex},get show(){return t.show},get toggle(){return t.toggle},get close(){return t.close}},label:e=>r.textContent=e,value:{get:()=>s.value,set:e=>s.value=e}}}}){},wl=`s-picker-item`,Tl=q({selected:!1,$value:``}),El=`
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
`,Dl=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple part="ripple" attached="true" ></s-ripple>
`,Ol=class extends J({style:El,template:Dl,props:Tl,setup(){return this.addEventListener(`click`,()=>{this.selected||this.parentNode instanceof Cl&&this.dispatchEvent(new Event(`${yl}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof Cl&&this.dispatchEvent(new Event(`${yl}:update`,{bubbles:!0}))}}}}){};Cl.define(yl),Ol.define(wl);var kl=`s-popup`,Al=q({align:[`center`,`left`,`right`]}),jl=Ao({show:Event,showed:Event,closed:Event}),Ml=`
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
`,Nl=`
<slot name="trigger"></slot>
<dialog class="popup" part="popup">
  <div class="scrim" part="scrim"></div>
  <slot class="container" part="container"></slot>
</dialog>
`,Pl=(e,t,n,r)=>{let i={top:0,left:0,origin:[]},a=r===`center`,o=a?e.top+e.height:e.top,s=a?e.top-n:e.top-n+e.height;if(o+n<=innerHeight)i.top=o,i.origin[1]=`top`;else if(s>=0)i.top=s,i.origin[1]=`bottom`;else{let t=(innerHeight-n)/2;i.top=t,i.origin[1]=`${e.top+e.height/2-t}px`}if(a)i.left=e.left-(t-e.width)/2,i.origin[0]=`center`,i.left<0?(i.left=e.left,i.origin[0]=`${e.width/2}px`):i.left+t>innerWidth&&(i.left=e.left+e.width-t,i.origin[0]=`${t-e.width+e.width/2}px`);else{let n=n=>{i.left=e.left-t,i.origin[0]=`right`,i.left<0&&n&&n()},a=n=>{i.left=e.left+e.width,i.origin[0]=`left`,i.left+t>innerWidth&&n&&n()},o=()=>{let n=(innerWidth-t)/2;i.left=n,i.origin[0]=`${e.left+e.width/2-n}px`};r===`left`?n(()=>a(o)):a(()=>n(o))}return i};(class extends J({style:Ml,template:Nl,props:Al,events:jl,setup(e){let t=e.querySelector(`dialog`),n=e.querySelector(`.container`),r=getComputedStyle(this),i=()=>({easing:r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(r.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)}),a=e=>{if(!this.isConnected||t.open)return;let r={top:0,left:0,origin:[]};if(t.showModal(),!this.dispatchEvent(new Event(`show`,{cancelable:!0})))return t.close();n.style.maxHeight=`${innerHeight}px`,n.style.maxWidth=`${innerWidth}px`;let a=n.offsetWidth,o=n.offsetHeight;if(!e||e instanceof HTMLElement){let t=Pl((e??this).getBoundingClientRect(),a,o,this.align);r.top=t.top,r.left=t.left,r.origin=t.origin}else r.top=e.y,r.left=e.x,r.origin=e.origin?.split(` `)??[`left`,`top`],e.x+a>innerWidth&&(r.left=e.x-a,r.origin[0]=`right`),e.y+o>innerHeight&&(r.top=e.y-o,r.origin[1]=`bottom`);n.style.transformOrigin=r.origin.join(` `),n.style.top=`${r.top}px`,n.style.left=`${r.left}px`;let s=n.animate({transform:[`scale(.9)`,`scale(1)`],opacity:[0,1]},i());this.setAttribute(`showed`,``),s.finished.then(()=>this.dispatchEvent(new Event(`showed`)))},o=()=>{if(!this.isConnected||!t.open||n.getAnimations().length>0||!this.dispatchEvent(new Event(`close`,{cancelable:!0})))return;let e=n.animate({transform:[`scale(1)`,`scale(.9)`],opacity:[1,0]},i());this.removeAttribute(`showed`),e.finished.then(()=>{t.close(),this.dispatchEvent(new Event(`closed`))})};return e.querySelector(`slot[name=trigger]`).addEventListener(`click`,()=>a()),e.querySelector(`.scrim`).addEventListener(`pointerdown`,o),{expose:{show:a,toggle:e=>t.open?o():a(e),close:o},onMounted:()=>addEventListener(`resize`,o),onUnmounted:()=>removeEventListener(`resize`,o)}}}){}).define(kl);var Fl=`s-popup-menu`,Il=q({group:[``,`start`,`end`]}),Ll=`
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
`,Rl=`
<s-popup class="popup">
  <slot slot="trigger" name="trigger"></slot>
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</s-popup>
`,zl=class e extends J({style:Ll,template:Rl,props:Il,setup(t){let n=t.querySelector(`.popup`),r=t.querySelector(`slot[name=trigger]`);return r.onclick=e=>{e.stopPropagation(),n.show()},this.addEventListener(`${Fl}:click`,e=>{e.stopPropagation(),n.close()}),n.onclose=t=>{let n=t.target;if(n.parentNode instanceof ShadowRoot){let t=n.parentNode.host;t.parentNode instanceof e&&t.parentNode.close()}},{onMounted:()=>{this.parentNode instanceof e&&n.setAttribute(`align`,`right`)},expose:{get show(){return n.show},get toggle(){return n.toggle},get close(){return n.close}}}}}){},Bl=`s-popup-menu-item`,Vl=`
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
`,Hl=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true"></s-ripple>
`,Ul=class extends J({style:Vl,template:Hl,setup(){this.addEventListener(`click`,()=>this.dispatchEvent(new Event(`${Fl}:click`,{bubbles:!0})))}}){};zl.define(Fl),Ul.define(Bl);var Wl=`s-radio-button`,Gl=q({disabled:!1,checked:!1,name:``,$value:``}),Kl=`
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
`,ql=`
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
`;(class extends J({style:Kl,template:ql,props:Gl,setup(){this.addEventListener(`click`,()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(e=>{e!==this&&(e.checked=!1)}),this.dispatchEvent(new Event(`change`))})}}){}).define(Wl);var Jl=`s-rate`,Yl=q({readOnly:!1,$max:10,$min:0,$value:5,$step:1}),Xl=`
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
`,Zl=`
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
  max="${Yl.max}"
  min="${Yl.min}"
  step="${Yl.step}"
  value="${Yl.value}"
/>
`;(class extends J({style:Xl,template:Zl,props:Yl,setup(e){let t=e.querySelector(`.indicator`),n=e.querySelector(`input`),r=()=>{let e=(Number(n.value)-this.min)*100/this.max-this.min;t.style.width=`${e}%`};return n.onchange=()=>this.dispatchEvent(new Event(`change`)),n.oninput=()=>{this.value=Number(n.value),this.dispatchEvent(new Event(`input`))},{max:e=>{n.max=String(e),r()},min:e=>{n.min=String(e),r()},step:e=>{n.step=String(e),r()},value:e=>{n.value=String(e),r()}}}}){}).define(Jl);var Ql=`s-search`,$l=q({$placeholder:``,disabled:!1,$value:``,$maxLength:-1,readOnly:!1}),eu=`
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
`,tu=`
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
`;(class extends J({style:eu,template:tu,props:$l,setup(e){let t=e.querySelector(`input`),n=e.querySelector(`.clear`),r=e.querySelector(`[name=dropdown]`),i=()=>n.style.display=t.value===``?`none`:`flex`;return r.onmousedown=e=>e.preventDefault(),t.onchange=()=>this.dispatchEvent(new Event(`change`)),n.onclick=()=>{t.value=``,i(),this.dispatchEvent(new Event(`input`)),this.dispatchEvent(new Event(`change`))},t.oninput=i,{expose:{get native(){return t}},value:{get:()=>t.value,set:e=>{t.value=e,i()}},placeholder:e=>t.placeholder=e,maxLength:e=>t.maxLength=e,readOnly:e=>t.readOnly=e}}}){}).define(Ql);var nu=`s-segmented-button`,ru=q({$value:``,mode:[`auto`,`fixed`]}),iu=`
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
`,au=`<slot></slot>`,ou=class extends J({style:iu,template:au,props:ru,setup(e){let t=e.querySelector(`slot`),n=new ms({context:this,class:du,slot:t}),r=getComputedStyle(this),i=()=>({easing:r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(r.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)});return n.onUpdate=e=>{if(!e||!n.select||!this.isConnected)return;let t=e.shadowRoot.querySelector(`.indicator`).getBoundingClientRect(),r=n.select.shadowRoot.querySelector(`.indicator`),a=r.getBoundingClientRect(),o=t.left-a.left;r.style.transform=`translateX(${a.left>t.left?o:Math.abs(o)}px)`,r.style.width=`${t.width}px`,e.style.zIndex=`1`;let s=r.animate([{transform:`translateX(0)`,width:`${a.width}px`}],i());s.onfinish=s.oncancel=s.onremove=()=>{r.style.removeProperty(`transform`),r.style.removeProperty(`width`),e.style.removeProperty(`z-index`)}},{expose:{get options(){return n.list},get selectedIndex(){return n.selectedIndex}},value:{get:()=>n.value,set:e=>n.value=e}}}}){},su=`s-segmented-button-item`,cu=q({selected:!1,disabled:!1,selectable:!0,$value:``}),lu=`
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
`,uu=`
<div class="indicator" part="indicator"></div>
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`,du=class extends J({style:lu,template:uu,props:cu,setup(){return this.addEventListener(`click`,()=>{!(this.parentNode instanceof ou)||this.selected||this.selectable&&this.dispatchEvent(new Event(`${nu}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof ou&&this.dispatchEvent(new CustomEvent(`${nu}:update`,{bubbles:!0,detail:{}}))}}}}){};ou.define(nu),du.define(su);var fu=`s-skeleton`,pu=`
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
`;(class extends J({style:pu}){}).define(fu);var mu=`s-slider`,hu=q({disabled:!1,$labeled:!1,$max:100,$min:0,$step:1,$value:0}),gu=`
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
`,_u=`
<div class="container" part="container">
  <div class="indicator" part="indicator"></div>
  <div class="track" part="track"></div>
  <div class="handle" part="handle">
    <div class="thumb" part="thumb"></div>
    <div class="label" part="label">${hu.value}</div>
  </div>
</div>
<input
  type="range"
  max="${hu.max}"
  min="${hu.min}"
  step="${hu.step}"
  value="${hu.value}"
/>
`;(class extends J({style:gu,template:_u,props:hu,setup(e){let t=e.querySelector(`.container`),n=e.querySelector(`.indicator`),r=e.querySelector(`.track`),i=e.querySelector(`.handle`),a=e.querySelector(`.label`),o=e.querySelector(`input`),s=()=>{let e=Number(o.value),t=(e-this.min)*100/(this.max-this.min);i.style.left=`calc(${t}% - ${t*.16}px)`,n.style.width=`calc(${t}% - ${4+t*.16}px)`,r.style.width=`calc(${100-t}% - ${20-t*.16}px)`,a.textContent=String(e)};return o.onchange=()=>this.dispatchEvent(new Event(`change`)),o.oninput=()=>{this.value=Number(o.value),this.dispatchEvent(new Event(`input`))},o.onmousedown=e=>e.button===0&&es.pointerFine.matches&&t.classList.add(`active`),o.onmouseup=()=>es.pointerFine.matches&&t.classList.remove(`active`),o.ontouchstart=()=>es.pointerCoarse.matches&&t.classList.add(`active`),o.ontouchend=()=>es.pointerCoarse.matches&&t.classList.remove(`active`),o.ontouchcancel=()=>es.pointerCoarse.matches&&t.classList.remove(`active`),{max:e=>{o.max=String(e),s()},min:e=>{o.min=String(e),s()},step:e=>{o.step=String(e),s()},value:e=>{o.value=String(e),s()}}}}){}).define(mu);var vu=document.createElement(`div`);vu.setAttribute(`style`,`position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none`);const yu=e=>{e.appendChild(vu);let t=vu.getBoundingClientRect();return e.removeChild(vu),{left:t.left,top:t.top,width:t.width,height:t.height}};var bu=`s-snackbar`,xu=q({type:[`none`,`info`,`success`,`warning`,`error`],align:[`auto`,`top`,`bottom`],$duration:4e3}),Su=Ao({show:Event,showed:Event,closed:Event}),Cu=`
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
`,wu=`
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
`,Tu=e=>{let t=document.body,n=new Du;n.style.display=`block`;let r=document.body.firstElementChild;if(r&&r.tagName===`S-PAGE`&&(t=r),typeof e==`string`)n.textContent=e;else{if(e.root&&(t=e.root),e.align&&(n.align=e.align),e.icon&&(e.icon instanceof Element&&(e.icon.slot=`icon`,n.appendChild(e.icon)),typeof e.icon==`string`&&(n.innerHTML=e.icon)),n.append(e.text),e.type&&(n.type=e.type),e.action){let t=document.createElement(`s-button`);t.type=`text`,t.slot=`action`,typeof e.action==`string`?t.textContent=e.action:(t.textContent=e.action.text,t.addEventListener(`click`,e.action.click)),n.appendChild(t)}typeof e.duration==`number`&&(n.duration=e.duration)}return t.appendChild(n),n.addEventListener(`closed`,()=>t.removeChild(n)),n.show(),n},Eu={top:[],bottom:[]},Du=class extends J({style:Cu,template:wu,props:xu,events:Su,methods:{builder:Tu},setup(e){let t=e.querySelector(`.popup`),n=e.querySelector(`.container`),r=getComputedStyle(this),i=()=>({easing:r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(r.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)}),a={timer:0,gap:8},o=()=>this.align===`auto`?es.pointerCoarse.matches?`top`:`bottom`:this.align,s=()=>{if(!this.isConnected||t.classList.contains(`show`))return;if(t.classList.add(`show`),t.showPopover)t.showPopover();else{let n=yu(e);t.style.width=`${innerWidth}px`,t.style.height=`${innerHeight}px`,t.style.marginLeft=`${-n.left}px`,t.style.marginTop=`${-n.top}px`,t.style.zIndex=`3`}let r=o();n.style.alignSelf={top:`flex-start`,bottom:`flex-end`}[r];let s=Eu[r],l={top:1,bottom:-1}[r],u=n.offsetHeight+a.gap;for(let e of s)e.style.transform=`translateY(${u*l}px)`,u+=e.firstElementChild.offsetHeight+a.gap;let d=n.animate({opacity:[0,1],transform:[`translateY(calc(${l*-100}% + 16px))`,``],pointerEvents:`auto`},{...i(),fill:`forwards`});this.dispatchEvent(new Event(`show`)),this.duration>0&&(a.timer=setTimeout(c,this.duration)),t.dataset.align=r,s.unshift(t),d.finished.then(()=>this.dispatchEvent(new Event(`showed`)))},c=()=>{if(!this.isConnected||!t.classList.contains(`show`))return;clearTimeout(a.timer);let e=t.dataset.align,r=Eu[e],o={top:1,bottom:-1}[e],s=r.indexOf(t);for(let e=s+1;e<r.length;e++){let t=r[e],i=Math.abs(Number(t.style.transform.slice(11).slice(0,-3)));t.style.transform=`translateY(${(i-n.offsetHeight-a.gap)*o}px)`}let c=n.animate({opacity:[1,0],transform:`translateY(calc(${o*-100}% + 16px))`},i());this.dispatchEvent(new Event(`close`)),c.finished.then(()=>{t.hidePopover&&t.hidePopover(),t.removeAttribute(`style`),t.classList.remove(`show`),this.dispatchEvent(new Event(`closed`))}),r.splice(s,1)};return n.onmouseenter=()=>clearTimeout(a.timer),n.onmouseleave=()=>t.classList.contains(`show`)&&this.duration>0&&(a.timer=setTimeout(c,this.duration)),e.querySelector(`slot[name=trigger]`).onclick=s,e.querySelector(`slot[name=action]`).onclick=c,{expose:{show:s,close:c}}}}){};Du.define(bu);var Ou=`s-switch`,ku=q({disabled:!1,checked:!1}),Au=`
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
`,ju=`
<div class="track" part="track"></div>
<s-ripple attached="true" class="ripple" part="ripple">
  <div class="thumb" part="thumb">
    <slot name="icon" class="icon"></slot>
  </div>
</s-ripple>
`;(class extends J({style:Au,template:ju,props:ku,setup(){this.addEventListener(`click`,()=>{this.checked=!this.checked,this.dispatchEvent(new Event(`change`))})}}){}).define(Ou);var Mu=`s-tab`,Nu=q({mode:[`scrollable`,`fixed`],$value:``}),Pu=`
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
`,Fu=`
<div class="container" part="container">
  <slot></slot>
</div>
`,Iu=class extends J({style:Pu,template:Fu,props:Nu,setup(e){let t=e.querySelector(`slot`),n=e.querySelector(`.container`),r=new ms({context:this,class:Vu,slot:t}),i=getComputedStyle(this),a=()=>({easing:i.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(i.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)});return r.onUpdate=e=>{if(r.select&&n.scrollWidth!==n.offsetWidth){let e=r.select.offsetLeft-n.offsetLeft-(n.offsetWidth/2-r.select.offsetWidth/2);n.scrollTo({left:e,behavior:`smooth`})}if(!e||!r.select||!this.isConnected)return;let t=e.shadowRoot.querySelector(`.indicator`).getBoundingClientRect(),i=r.select.shadowRoot?.querySelector(`.indicator`),o=i.getBoundingClientRect(),s=t.left-o.left;i.style.transform=`translateX(${o.left>t.left?s:Math.abs(s)}px)`,i.style.width=`${t.width}px`;let c=i.animate([{transform:`translateX(0)`,width:`${o.width}px`}],a());c.onfinish=c.oncancel=c.onremove=()=>{i.style.removeProperty(`transform`),i.style.removeProperty(`width`)}},{expose:{get options(){return r.list},get selectedIndex(){return r.selectedIndex}},value:{get:()=>r.value,set:e=>r.value=e}}}}){},Lu=`s-tab-item`,Ru=q({selected:!1,$value:``}),zu=`
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
`,Bu=`
<div class="container" part="container">
  <slot name="icon"></slot>
  <div class="text" part="text">
    <slot name="text"></slot>
    <slot name="badge"></slot>
  </div>
  <div class="indicator" part="indicator"></div>
</div>
<s-ripple attached="true" part="ripple"></s-ripple>
`,Vu=class extends J({style:zu,template:Bu,props:Ru,setup(e){let t=e.querySelector(`.container`);return e.querySelector(`[name=icon]`).addEventListener(`slotchange`,e=>{let n=e.target.assignedElements().length;t.classList[n>0?`add`:`remove`](`icon`)}),this.addEventListener(`click`,()=>{!(this.parentNode instanceof Iu)||this.selected||this.dispatchEvent(new Event(`${Mu}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof Iu&&this.dispatchEvent(new Event(`${Mu}:update`,{bubbles:!0}))}}}}){};Iu.define(Mu),Vu.define(Lu);var Hu=`s-table`,Uu=`
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
`,Wu=`
<slot></slot>
`,Gu=class extends J({style:Uu,template:Wu}){},Ku=`s-thead`,qu=`
:host{
  display: table-header-group;
  font-weight: 600;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
  color: var(--s-color-on-surface-variant, #40484C);
}
`,Ju=`<slot></slot>`,Yu=class extends J({style:qu,template:Ju}){},Xu=`s-tbody`,Zu=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #191C1E);
}
::slotted(s-tr:not(:first-child)){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
`,Qu=`<slot></slot>`,$u=class extends J({style:Zu,template:Qu}){},ed=`s-tr`,td=`
:host{
  display: table-row;
}
`,nd=`<slot></slot>`,rd=class extends J({style:td,template:nd}){},id=`s-th`,ad=`
:host{
  display: table-cell;
  padding: 12px 16px;
  text-transform: capitalize;
}
`,od=`<slot></slot>`,sd=class extends J({style:ad,template:od}){},cd=`s-td`,ld=`
:host{
  display: table-cell;
  user-select: text;
  padding: 12px 16px;
}
`,ud=`<slot></slot>`,dd=class extends J({style:ld,template:ud}){};Gu.define(Hu),Yu.define(Ku),$u.define(Xu),rd.define(ed),sd.define(id),dd.define(cd);var fd=`s-text-field`,pd=q({$label:``,$placeholder:``,disabled:!1,type:[`text`,`number`,`password`,`multiline`],error:!1,$value:``,$maxLength:-1,readOnly:!1,multiLine:!1,countered:!1}),md=`
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
`,hd=`
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
`;(class extends J({style:md,template:hd,props:pd,setup(e){let t=e.querySelector(`.field`),n=e.querySelector(`.label`),r=e.querySelector(`.shadow`),i=e.querySelector(`.counter`),a=e.querySelector(`.toggle`),o={input:e.querySelector(`input`),textarea:e.querySelector(`textarea`)},s=()=>this.type===`multiline`?o.textarea:o.input,c=()=>{this.countered&&(i.textContent=`${s().value.length}/${this.maxLength}`)},l=()=>this.dispatchEvent(new Event(`change`)),u=()=>{t.fixed=!0,t.focused=!0},d=()=>{t.focused=!1,s().value===``&&!this.error&&(t.fixed=!1)};o.input.oninput=c,o.input.onfocus=u,o.input.onblur=d,o.input.onchange=l,o.textarea.onfocus=u,o.textarea.onblur=d,o.textarea.onchange=l,o.textarea.oninput=()=>{r.textContent=o.textarea.value,c()};let f=e=>{this.value=`${parseInt(this.value||`0`)+e}`,this.dispatchEvent(new Event(`input`)),this.dispatchEvent(new Event(`change`))};return e.querySelector(`.up`).onclick=()=>f(1),e.querySelector(`.down`).onclick=()=>f(-1),e.querySelector(`.visibility`).onclick=()=>{o.input.type=a.classList.contains(`show-password`)?`password`:`text`,a.classList.toggle(`show-password`)},{expose:{get native(){return s()}},label:e=>n.textContent=e,type:(e,t)=>{o.input.type=e===`password`?a.classList.contains(`show-password`)?`text`:`password`:e,e===`multiline`&&(o.textarea.value=o.input.value,r.textContent=o.input.value),t===`multiline`&&(o.input.value=o.textarea.value)},error:e=>{if(e)return t.fixed=!0;s().value===``&&(t.fixed=!1)},value:{get:()=>s().value,set:e=>{o.input.value=e,o.textarea.value=e,r.textContent=e,c(),this.error||(t.fixed=e!==``)}},placeholder:e=>{o.input.placeholder=e,o.textarea.placeholder=e},readOnly:e=>{o.input.readOnly=e,o.textarea.readOnly=e},disabled:e=>{o.input.disabled=e,o.textarea.disabled=e},maxLength:e=>{o.input.maxLength=e,o.textarea.maxLength=e,c()},multiLine:e=>this.type=e?`multiline`:`text`,countered:c}}}){}).define(fd);var gd=`s-tooltip`,_d=q({align:[`top`,`bottom`,`left`,`right`],disabled:!1}),vd=`
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
`,yd=`
<slot name="trigger" part="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <slot></slot>
</div>
`;(class extends J({style:vd,template:yd,props:_d,setup(e){let t=e.querySelector(`slot[name=trigger]`),n=e.querySelector(`.popup`),r=getComputedStyle(this),i=!1,a=()=>({easing:r.getPropertyValue(`--s-motion-easing-standard`)||`cubic-bezier(0.2, 0, 0, 1.0)`,duration:Ko(r.getPropertyValue(`--s-motion-duration-medium4`)||`400ms`)}),o=()=>{if(!this.isConnected||this.disabled)return;if(n.style.display=`block`,i=!0,n.showPopover)n.showPopover();else{let t=yu(e);n.style.marginLeft=`${-t.left}px`,n.style.marginTop=`${-t.top}px`,n.style.zIndex=`3`}let t=this.getBoundingClientRect(),r=n.offsetWidth,o=n.offsetHeight,s={top:0,left:0},c={middle(e){s.left=t.left-(r-t.width)/2;let n=()=>(s.top=t.top+t.height+4,s.top+o>innerHeight),i=()=>(s.top=t.top-o-4,s.top<0);s.left<0&&(s.left=t.left),s.left+r>innerWidth&&(s.left=t.left+t.width-r),e===`top`&&i()&&n(),e===`bottom`&&n()&&i()},left(){return s.left=t.left-r-4,s.top=t.top-(o-t.height)/2,s.left<0},right(){return s.left=t.left+t.width+4,s.top=t.top-(o-t.height)/2,s.left+r>innerWidth}};switch(this.align){case`bottom`:case`top`:c.middle(this.align);break;case`left`:c.left()&&c.right();break;case`right`:c.right()&&c.left();break}n.style.top=`${s.top}px`,n.style.left=`${s.left}px`,n.animate({opacity:[0,1]},a())},s=0,c=()=>{clearTimeout(s),i=!1,n.animate({opacity:[1,0]},a()).finished.then(()=>{i||(n.hidePopover&&n.hidePopover(),n.style.removeProperty(`display`))})};t.addEventListener(`touchstart`,()=>{es.pointerFine.matches||(clearTimeout(s),s=setTimeout(()=>o(),600))},{passive:!0}),t.ontouchend=()=>{clearTimeout(s),c()},t.onmouseenter=()=>es.pointerFine.matches&&o(),t.onmouseleave=()=>es.pointerFine.matches&&c()}}){}).define(gd);var bd=typeof document<`u`;function xd(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Sd(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&xd(e.default)}var Y=Object.assign;function Cd(e,t){let n={};for(let r in t){let i=t[r];n[r]=Td(i)?i.map(e):e(i)}return n}var wd=()=>{},Td=Array.isArray;function Ed(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Dd=/#/g,Od=/&/g,kd=/\//g,Ad=/=/g,jd=/\?/g,Md=/\+/g,Nd=/%5B/g,Pd=/%5D/g,Fd=/%5E/g,Id=/%60/g,Ld=/%7B/g,Rd=/%7C/g,zd=/%7D/g,Bd=/%20/g;function Vd(e){return e==null?``:encodeURI(``+e).replace(Rd,`|`).replace(Nd,`[`).replace(Pd,`]`)}function Hd(e){return Vd(e).replace(Ld,`{`).replace(zd,`}`).replace(Fd,`^`)}function Ud(e){return Vd(e).replace(Md,`%2B`).replace(Bd,`+`).replace(Dd,`%23`).replace(Od,`%26`).replace(Id,"`").replace(Ld,`{`).replace(zd,`}`).replace(Fd,`^`)}function Wd(e){return Ud(e).replace(Ad,`%3D`)}function Gd(e){return Vd(e).replace(Dd,`%23`).replace(jd,`%3F`)}function Kd(e){return Gd(e).replace(kd,`%2F`)}function qd(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Jd=/\/$/,Yd=e=>e.replace(Jd,``);function Xd(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=af(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:qd(o)}}function Zd(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Qd(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function $d(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ef(t.matched[r],n.matched[i])&&tf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ef(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!nf(e[n],t[n]))return!1;return!0}function nf(e,t){return Td(e)?rf(e,t):Td(t)?rf(t,e):e===t}function rf(e,t){return Td(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function af(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var of={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},sf=function(e){return e.pop=`pop`,e.push=`push`,e}({}),cf=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function lf(e){if(!e)if(bd){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Yd(e)}var uf=/^[^#]+#/;function df(e,t){return e.replace(uf,`#`)+t}function ff(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var pf=()=>({left:window.scrollX,top:window.scrollY});function mf(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=ff(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function hf(e,t){return(history.state?history.state.position-t:-1)+e}var gf=new Map;function _f(e,t){gf.set(e,t)}function vf(e){let t=gf.get(e);return gf.delete(e),t}function yf(e){return typeof e==`string`||e&&typeof e==`object`}function bf(e){return typeof e==`string`||typeof e==`symbol`}var X=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),xf=Symbol(``);X.MATCHER_NOT_FOUND,X.NAVIGATION_GUARD_REDIRECT,X.NAVIGATION_ABORTED,X.NAVIGATION_CANCELLED,X.NAVIGATION_DUPLICATED;function Sf(e,t){return Y(Error(),{type:e,[xf]:!0},t)}function Cf(e,t){return e instanceof Error&&xf in e&&(t==null||!!(e.type&t))}function wf(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Md,` `),i=r.indexOf(`=`),a=qd(i<0?r:r.slice(0,i)),o=i<0?null:qd(r.slice(i+1));if(a in t){let e=t[a];Td(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Tf(e){let t=``;for(let n in e){let r=e[n];if(n=Wd(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Td(r)?r.map(e=>e&&Ud(e)):[r&&Ud(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Ef(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Td(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Df=Symbol(``),Of=Symbol(``),kf=Symbol(``),Af=Symbol(``),jf=Symbol(``);function Mf(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nf(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Sf(X.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):yf(e)?c(Sf(X.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Pf(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(xd(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Nf(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Sd(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Nf(c,n,r,o,e,i)()}))}}return a}function Ff(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>ef(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>ef(e,s))||i.push(s))}return[n,r,i]}var If=()=>location.protocol+`//`+location.host;function Lf(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Qd(n,``)}return Qd(n,e)+r+i}function Rf(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Lf(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:sf.pop,direction:u?u>0?cf.forward:cf.back:cf.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Y({},e.state,{scroll:pf()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function zf(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?pf():null}}function Bf(e){let{history:t,location:n}=window,r={value:Lf(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:If()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Y({},t.state,zf(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Y({},i.value,t.state,{forward:e,scroll:pf()});a(o.current,o,!0),a(e,Y({},zf(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Vf(e){e=lf(e);let t=Bf(e),n=Rf(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Y({location:``,base:e,go:r,createHref:df.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function Hf(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),Vf(e)}var Uf=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Z=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Z||{}),Wf={type:Uf.Static,value:``},Gf=/[a-zA-Z0-9_]/;function Kf(e){if(!e)return[[]];if(e===`/`)return[[Wf]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Z.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Z.Static?a.push({type:Uf.Static,value:l}):n===Z.Param||n===Z.ParamRegExp||n===Z.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Uf.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Z.ParamRegExp){r=n,n=Z.EscapeNext;continue}switch(n){case Z.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Z.Param):f();break;case Z.EscapeNext:f(),n=r;break;case Z.Param:c===`(`?n=Z.ParamRegExp:Gf.test(c)?f():(d(),n=Z.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Z.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Z.ParamRegExpEnd:u+=c;break;case Z.ParamRegExpEnd:d(),n=Z.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Z.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var qf=`[^/]+?`,Jf={sensitive:!1,strict:!1,start:!0,end:!0},Yf=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(Yf||{}),Xf=/[.+*?^${}()[\]/\\]/g;function Zf(e,t){let n=Y({},Jf,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[Yf.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=Yf.Segment+(n.sensitive?Yf.BonusCaseSensitive:0);if(o.type===Uf.Static)r||(i+=`/`),i+=o.value.replace(Xf,`\\$&`),s+=Yf.Static;else if(o.type===Uf.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||qf;if(u!==qf){s+=Yf.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=Yf.Dynamic,c&&(s+=Yf.BonusOptional),n&&(s+=Yf.BonusRepeatable),u===`.*`&&(s+=Yf.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=Yf.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Uf.Static)n+=e.value;else if(e.type===Uf.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Td(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Td(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Qf(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Yf.Static+Yf.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Yf.Static+Yf.Segment?1:-1:0}function $f(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Qf(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(ep(r))return 1;if(ep(i))return-1}return i.length-r.length}function ep(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var tp={strict:!1,end:!0,sensitive:!1};function np(e,t,n){let r=Y(Zf(Kf(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function rp(e,t){let n=[],r=new Map;t=Ed(tp,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=ap(e);s.aliasOf=r&&r.record;let l=Ed(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(ap(Y({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=np(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!sp(d)&&o(e.name)),dp(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:wd}function o(e){if(bf(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=lp(e,n);n.splice(t,0,e),e.record.name&&!sp(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Sf(X.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=Y(ip(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ip(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Sf(X.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=Y({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:cp(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function ip(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ap(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:op(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function op(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function sp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cp(e){return e.reduce((e,t)=>Y(e,t.meta),{})}function lp(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;$f(e,t[i])<0?r=i:n=i+1}let i=up(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function up(e){let t=e;for(;t=t.parent;)if(dp(t)&&$f(e,t)===0)return t}function dp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function fp(e){let t=Vr(kf),n=Vr(Af),r=K(()=>{let n=Yt(e.to);return t.resolve(n)}),i=K(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(ef.bind(null,i));if(o>-1)return o;let s=_p(e[t-2]);return t>1&&_p(i)===s&&a[a.length-1].path!==s?a.findIndex(ef.bind(null,e[t-2])):o}),a=K(()=>i.value>-1&&gp(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&tf(n.params,r.value.params));function s(n={}){if(hp(n)){let n=t[Yt(e.replace)?`replace`:`push`](Yt(e.to)).catch(wd);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function pp(e){return e.length===1?e[0]:e}var mp=Fn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:fp,setup(e,{slots:t}){let n=Ft(fp(e)),{options:r}=Vr(kf),i=K(()=>({[vp(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[vp(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&pp(t.default(n));return e.custom?r:wa(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function hp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gp(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Td(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function _p(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var vp=(e,t,n)=>e??t??n,yp=Fn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Vr(jf),i=K(()=>e.route||r.value),a=Vr(Of,0),o=K(()=>{let e=Yt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=K(()=>i.value.matched[o.value]);Br(Of,K(()=>o.value+1)),Br(Df,s),Br(jf,i);let c=N();return Wr(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!ef(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return bp(n.default,{Component:l,route:r});let u=o.props[a],d=wa(l,Y({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return bp(n.default,{Component:d,route:r})||d}}});function bp(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var xp=yp;function Sp(e){let t=rp(e.routes,e),n=e.parseQuery||wf,r=e.stringifyQuery||Tf,i=e.history,a=Mf(),o=Mf(),s=Mf(),c=Kt(of),l=of;bd&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Cd.bind(null,e=>``+e),d=Cd.bind(null,Kd),f=Cd.bind(null,qd);function p(e,n){let r,i;return bf(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=Y({},a||c.value),typeof e==`string`){let r=Xd(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Y(r,o,{params:f(o.params),hash:qd(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Y({},e,{path:Xd(n,e.path,a.path).path});else{let t=Y({},e.params);for(let e in t)t[e]??delete t[e];o=Y({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Zd(r,Y({},e,{hash:Hd(l),path:s.path})),m=i.createHref(p);return Y({fullPath:p,hash:l,query:r===Tf?Ef(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Xd(n,e,c.value.path):Y({},e)}function y(e,t){if(l!==e)return Sf(X.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(Y(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),Y({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(Y(v(u),{state:typeof u==`object`?Y({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&$d(r,i,n)&&(f=Sf(X.NAVIGATION_DUPLICATED,{to:d,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):ne(d,i)).catch(e=>Cf(e)?Cf(e,X.NAVIGATION_GUARD_REDIRECT)?e:ue(e):le(e,d,i)).then(e=>{if(e){if(Cf(e,X.NAVIGATION_GUARD_REDIRECT))return C(Y({replace:s},v(e.to),{state:typeof e.to==`object`?Y({},a,e.to.state):a,force:o}),t||d)}else e=ie(d,i,!0,s,a);return re(d,i,e),e})}function ee(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=E.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,s]=Ff(e,t);n=Pf(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Nf(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),he(n).then(()=>{n=[];for(let r of a.list())n.push(Nf(r,e,t));return n.push(c),he(n)}).then(()=>{n=Pf(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Nf(r,e,t))});return n.push(c),he(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Td(r.beforeEnter))for(let i of r.beforeEnter)n.push(Nf(i,e,t));else n.push(Nf(r.beforeEnter,e,t));return n.push(c),he(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Pf(s,`beforeRouteEnter`,e,t,te),n.push(c),he(n))).then(()=>{n=[];for(let r of o.list())n.push(Nf(r,e,t));return n.push(c),he(n)}).catch(e=>Cf(e,X.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function re(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function ie(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===of,l=bd?history.state:{};n&&(r||s?i.replace(e.fullPath,Y({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,de(e,t,n,s),ue()}let w;function ae(){w||=i.listen((e,t,n)=>{if(!me.listening)return;let r=_(e),a=S(r,me.currentRoute.value);if(a){C(Y(a,{replace:!0,force:!0}),r).catch(wd);return}l=r;let o=c.value;bd&&_f(hf(o.fullPath,n.delta),pf()),ne(r,o).catch(e=>Cf(e,X.NAVIGATION_ABORTED|X.NAVIGATION_CANCELLED)?e:Cf(e,X.NAVIGATION_GUARD_REDIRECT)?(C(Y(v(e.to),{force:!0}),r).then(e=>{Cf(e,X.NAVIGATION_ABORTED|X.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===sf.pop&&i.go(-1,!1)}).catch(wd),Promise.reject()):(n.delta&&i.go(-n.delta,!1),le(e,r,o))).then(e=>{e||=ie(r,o,!1),e&&(n.delta&&!Cf(e,X.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===sf.pop&&Cf(e,X.NAVIGATION_ABORTED|X.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(r,o,e)}).catch(wd)})}let oe=Mf(),se=Mf(),ce;function le(e,t,n){ue(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function T(){return ce&&c.value!==of?Promise.resolve():new Promise((e,t)=>{oe.add([e,t])})}function ue(e){return ce||(ce=!e,ae(),oe.list().forEach(([t,n])=>e?n(e):t()),oe.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!bd||!a)return Promise.resolve();let o=!r&&vf(hf(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return _n().then(()=>a(t,n,o)).then(e=>e&&mf(e)).catch(e=>le(e,t,n))}let fe=e=>i.go(e),pe,E=new Set,me={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:se.add,isReady:T,install(e){e.component(`RouterLink`,mp),e.component(`RouterView`,xp),e.config.globalProperties.$router=me,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Yt(c)}),bd&&!pe&&c.value===of&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in of)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(kf,me),e.provide(Af,It(t)),e.provide(jf,c);let n=e.unmount;E.add(e),e.unmount=function(){E.delete(e),E.size<1&&(l=of,w&&w(),w=null,c.value=of,pe=!1,ce=!1),n()}}};function he(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return me}function Cp(){return Vr(kf)}function wp(e){return Vr(Af)}var Tp=`material-symbols-style`,Q={__name:`MaterialSymbol`,props:{icon:{type:String,required:!0},family:{type:String,default:`rounded`,validator:e=>[`outlined`,`rounded`,`sharp`].includes(e)},fill:{type:Boolean,default:!1},weight:{type:Number,default:400},grade:{type:Number,default:0},size:{type:[Number,String],default:24},color:{type:String,default:void 0},alignText:{type:Boolean,default:!1}},setup(e){if(typeof document<`u`&&!document.getElementById(Tp)){let e=document.createElement(`style`);e.id=Tp,e.innerHTML=`
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
  `,document.head.appendChild(e)}let t=e,n=K(()=>({fontFamily:`"${`Material Symbols ${t.family.charAt(0).toUpperCase()+t.family.slice(1)}`}"`,fontWeight:`normal`,fontStyle:`normal`,fontSize:typeof t.size==`number`?`${t.size}px`:t.size,color:t.color,position:t.alignText?`relative`:void 0,top:t.alignText?`0.125em`:void 0,fontVariationSettings:`'FILL' ${t.fill?1:0}, 'wght' ${t.weight}, 'GRAD' ${t.grade}, 'opsz' ${t.size}`}));return(t,r)=>(z(),B(`span`,{class:`material-symbols`,style:E(n.value)},D(e.icon),5))}},$=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Ep={key:0},Dp={style:{width:`100%`,"max-width":`none`,margin:`0`,height:`100%`,border:`none`}},Op=[`checked`,`onClick`],kp={key:1,mode:`rail`,style:{height:`100%`,border:`none`,"background-color":`transparent`}},Ap=[`selected`,`onClick`],jp={slot:`text`},Mp={slot:`end`,class:`rail-footer`},Np=$({__name:`AdaptiveNavigation`,props:{onLogout:{type:Function,default:()=>{}},onMoreClick:{type:Function,default:()=>{}}},setup(e){let t=e,n=Cp(),r=wp(),i=N(!1),a=()=>{typeof window<`u`&&(i.value=window.innerWidth<768)};$n(()=>{a(),window.addEventListener(`resize`,a)}),rr(()=>{window.removeEventListener(`resize`,a)});let o=[{id:`home`,label:`主页`,icon:`home`,path:`/`},{id:`following`,label:`关注`,icon:`group`,path:`/following`},{id:`collections`,label:`收藏`,icon:`bookmark`,path:`/collections`},{id:`daily`,label:`日报`,icon:`newspaper`,path:`/daily`},{id:`history`,label:`历史`,icon:`history`,path:`/history`},{id:`settings`,label:`设置`,icon:`settings`,path:`/settings`}],s=e=>{if(n.push(e),i.value){let e=document.querySelector(`s-drawer`);e&&(e.showed=!1)}},c=()=>{if(t.onMoreClick(),i.value){let e=document.querySelector(`s-drawer`);e&&(e.showed=!1)}},l=e=>!!(e===`/`&&r.path===`/`||e!==`/`&&r.path.startsWith(e));return(t,n)=>i.value?(z(),B(`s-scroll-view`,Ep,[V(`s-menu`,Dp,[(z(),B(R,null,I(o,e=>V(`s-menu-item`,{key:e.id,checked:l(e.path),onClick:t=>s(e.path)},[H(Q,{slot:`start`,icon:e.icon},null,8,[`icon`]),U(` `+D(e.label),1)],8,Op)),64)),n[5]||=V(`s-divider`,null,null,-1),V(`s-menu-item`,{onClick:c},[H(Q,{slot:`start`,icon:`menu`}),n[3]||=U(` 更多 `,-1)]),V(`s-menu-item`,{onClick:n[0]||=(...t)=>e.onLogout&&e.onLogout(...t)},[H(Q,{slot:`start`,icon:`logout`}),n[4]||=U(` 退出登录 `,-1)])])])):(z(),B(`s-navigation`,kp,[n[6]||=V(`s-avatar`,{class:`logo-box`},`Z`,-1),(z(),B(R,null,I(o,e=>V(`s-navigation-item`,{key:e.id,selected:l(e.path),onClick:t=>s(e.path)},[H(Q,{slot:`icon`,icon:e.icon,fill:l(e.path)},null,8,[`icon`,`fill`]),V(`div`,jp,D(e.label),1)],8,Ap)),64)),V(`div`,Mp,[V(`s-icon-button`,{onClick:n[1]||=(...t)=>e.onMoreClick&&e.onMoreClick(...t),type:`standard`},[H(Q,{icon:`menu`})]),V(`s-icon-button`,{type:`outlined`,onClick:n[2]||=(...t)=>e.onLogout&&e.onLogout(...t)},[H(Q,{icon:`logout`})])])]))}},[[`__scopeId`,`data-v-5948f065`]]),Pp=[`showed`],Fp={class:`dialog-content`},Ip=[`value`],Lp=[`value`],Rp=[`disabled`],zp={key:0,indeterminate:`true`,slot:`start`,style:{width:`20px`,height:`20px`,"margin-right":`8px`}},Bp=$({__name:`LoginDialog`,props:{modelValue:{type:Boolean,default:!1}},emits:[`update:modelValue`,`login-success`],setup(e,{emit:t}){let n=t,r=N(!1),i=N(`13344556677`),a=N(`123456789`),o=()=>{n(`update:modelValue`,!1)},s=async()=>{r.value=!0;try{let e=await window.$zhihu.get(`https://api.zhihu.com/me`);n(`login-success`,e.data||e),o()}catch(e){console.error(`Login/Fetch failed`,e)}finally{r.value=!1}};return(t,n)=>(z(),B(`s-dialog`,{showed:e.modelValue,onClose:o},[n[3]||=V(`s-button`,{slot:`trigger`,style:{display:`none`}},`登录`,-1),n[4]||=V(`div`,{slot:`headline`},`登录`,-1),V(`div`,Fp,[V(`s-text-field`,{class:`text-field`,label:`请输入手机号`,value:i.value,onInput:n[0]||=e=>i.value=e.target.value},null,40,Ip),V(`s-text-field`,{class:`text-field`,style:{"margin-top":`8px`},label:`请输入密码`,value:a.value,onInput:n[1]||=e=>a.value=e.target.value},null,40,Lp),V(`s-button`,{id:`submit`,style:{"border-radius":`4px`,"box-shadow":`none`},onClick:s,disabled:r.value},[r.value?(z(),B(`s-circular-progress`,zp)):W(``,!0),n[2]||=U(` 登 录 `,-1)],8,Rp)])],40,Pp))}},[[`__scopeId`,`data-v-87cbefef`]]),Vp={style:{width:`100%`,"z-index":`0`}},Hp={slot:`action`,class:`action-container`},Up={class:`desktop-only`},Wp={class:`tablet-only`},Gp=[`src`],Kp=$({__name:`TopBar`,setup(e){let t=Cp(),n=N(!1),r=N(null),i=()=>{let e=document.querySelector(`s-drawer`);e&&typeof e.toggle==`function`&&e.toggle()},a=()=>{t.push(`/search`)},o=()=>{n.value=!0},s=e=>{r.value=e};return(e,t)=>(z(),B(R,null,[V(`s-appbar`,Vp,[V(`s-icon-button`,{slot:`navigation`,onClick:i},[H(Q,{icon:`menu`})]),t[1]||=V(`div`,{slot:`headline`,class:`headline`},` Zyphron `,-1),V(`s-search`,{slot:`search`,placeholder:`搜索关键字...`,readonly:``,onClick:a,style:{cursor:`pointer`}}),V(`div`,Hp,[V(`s-icon-button`,Up,[H(Q,{icon:`notifications`})]),V(`s-icon-button`,Wp,[H(Q,{icon:`chat_bubble`})]),V(`s-avatar`,{src:r.value?.avatar_url||`https://picsum.photos/id/64/200/200`,class:`avatar`,onClick:o},null,8,Gp)])]),H(Bp,{modelValue:n.value,"onUpdate:modelValue":t[0]||=e=>n.value=e,onLoginSuccess:s},null,8,[`modelValue`])],64))}},[[`__scopeId`,`data-v-739da963`]]),qp={key:0,class:`more-menu`},Jp={__name:`MoreMenuDialog`,props:[`isOpen`,`onClose`],setup(e){return(t,n)=>e.isOpen?(z(),B(`div`,qp,`More Menu`)):W(``,!0)}},Yp={theme:`auto`,class:`app-page`},Xp={class:`app-drawer`},Zp={class:`main-content`},Qp={key:0},$p={class:`view-container`},em=$({__name:`App`,setup(e){let t=Cp(),n=wp(),r=N(!1),i=N(!1),a=()=>{typeof window<`u`&&(i.value=window.innerWidth<768)};$n(()=>{a(),window.addEventListener(`resize`,a)}),rr(()=>{window.removeEventListener(`resize`,a)});let o=()=>{window.confirm(`确定要退出登录吗？`)&&t.push(`/`)},s=()=>{r.value=!1},c=K(()=>{let e=n.path;return e.startsWith(`/article/`)||e.startsWith(`/question/`)||e.startsWith(`/user/`)||e.startsWith(`/topic/`)||e===`/search`});return(e,t)=>(z(),B(`s-page`,Yp,[V(`s-drawer`,Xp,[V(`div`,{slot:`start`,style:E({width:i.value?`280px`:`auto`})},[H(Np,{onLogout:o,onMoreClick:()=>r.value=!0},null,8,[`onMoreClick`])],4),V(`div`,Zp,[c.value?W(``,!0):(z(),B(`div`,Qp,[H(Kp)])),V(`div`,$p,[H(Yt(xp),null,{default:On(({Component:e,route:t})=>[(z(),Ui(Hn,null,[t.meta.keepAlive?(z(),Ui(ur(e),{key:t.path})):W(``,!0)],1024)),t.meta.keepAlive?W(``,!0):(z(),Ui(ur(e),{key:t.path}))]),_:1})])])]),H(Jp,{isOpen:r.value,onClose:s},null,8,[`isOpen`])]))}},[[`__scopeId`,`data-v-4b83bbc9`]]),tm={key:0},nm=[`href`],rm={key:2,class:`styled-bold`},im={key:3,class:`styled-italic`},am={key:4,class:`styled-highlight`},om=$({__name:`RenderStyledText`,props:{text:{type:String,required:!0},marks:{type:Array,default:()=>[]}},setup(e){let t=e,n=K(()=>{if(!t.marks||t.marks.length===0)return[{type:`text`,content:t.text}];let e=[...t.marks].sort((e,t)=>e.start_index-t.start_index),n=[],r=0;return e.forEach(e=>{e.start_index>r&&n.push({type:`text`,content:t.text.substring(r,e.start_index)});let i=t.text.substring(e.start_index,e.end_index);n.push({type:`mark`,markType:e.type,content:i,link:e.link}),r=e.end_index}),r<t.text.length&&n.push({type:`text`,content:t.text.substring(r)}),n});return(e,t)=>(z(),B(`span`,null,[(z(!0),B(R,null,I(n.value,(e,n)=>(z(),B(R,{key:n},[e.type===`text`?(z(),B(`span`,tm,D(e.content),1)):e.markType===`link`&&e.link?(z(),B(`a`,{key:1,href:e.link.href,target:`_blank`,class:`styled-link`,onClick:t[0]||=bo(()=>{},[`stop`])},D(e.content),9,nm)):e.markType===`bold`?(z(),B(`strong`,rm,D(e.content),1)):e.markType===`italic`?(z(),B(`em`,im,D(e.content),1)):(z(),B(`span`,am,D(e.content),1))],64))),128))]))}},[[`__scopeId`,`data-v-2b03d9cd`]]),sm={class:`content-renderer`},cm={key:0,class:`paragraph`},lm=[`id`],um={key:2,class:`blockquote-wrapper`},dm={class:`quote-icon`},fm={class:`blockquote`},pm={key:3,class:`code-block`},mm={class:`code-content`},hm={key:5,class:`image-figure`},gm=[`src`,`alt`],_m={key:0,class:`image-caption`},vm=[`href`],ym={class:`card-content`},bm={class:`card-title`},xm={class:`card-desc`},Sm={class:`card-meta`},Cm=[`src`],wm={key:7,class:`video-container`},Tm=[`src`,`poster`],Em={key:8,class:`app-tip`},Dm={class:`tip-icon`},Om={key:9,class:`hr-divider`},km=$({__name:`ContentRenderer`,props:{segments:{type:Array,default:()=>[]}},setup(e){let t=e=>{if(!e.card)return{};try{let t=e.card.extra_info?JSON.parse(e.card.extra_info):{};return{title:e.card.title,desc:t.desc||t.description||``,url:t.url||`#`,cover:e.card.cover}}catch{return{title:e.card.title,desc:``,url:`#`}}};return(n,r)=>(z(),B(`div`,sm,[(z(!0),B(R,null,I(e.segments,(e,n)=>(z(),B(R,{key:n},[e.type===`paragraph`?(z(),B(`p`,cm,[H(om,{text:e.paragraph.text,marks:e.paragraph.marks},null,8,[`text`,`marks`])])):e.type===`heading`?(z(),B(`h3`,{key:1,id:`heading-${n}`,class:`heading`},D(e.heading.text),9,lm)):e.type===`blockquote`?(z(),B(`div`,um,[V(`div`,dm,[H(Q,{icon:`format_quote`,size:24,fill:``})]),V(`blockquote`,fm,[H(om,{text:e.blockquote.text,marks:e.blockquote.marks},null,8,[`text`,`marks`])])])):e.type===`code_block`?(z(),B(`div`,pm,[V(`pre`,mm,[V(`code`,null,D(e.code_block.content),1)])])):e.type===`list_node`?(z(),Ui(ur(e.list_node.ordered?`ol`:`ul`),{key:4,class:ve([`list-node`,{ordered:e.list_node.ordered}])},{default:On(()=>[(z(!0),B(R,null,I(e.list_node.items,(e,t)=>(z(),B(`li`,{key:t,class:`list-item`},[H(om,{text:e.text,marks:e.marks},null,8,[`text`,`marks`])]))),128))]),_:2},1032,[`class`])):e.type===`image`?(z(),B(`figure`,hm,[V(`img`,{src:e.image.urls?.[0],alt:e.image.description||`Article Image`,class:`article-image`,loading:`lazy`},null,8,gm),e.image.description?(z(),B(`figcaption`,_m,D(e.image.description),1)):W(``,!0)])):e.type===`card`?(z(),B(`a`,{key:6,href:t(e).url,target:`_blank`,rel:`noopener`,class:`link-card group`},[V(`div`,ym,[V(`h4`,bm,D(t(e).title),1),V(`p`,xm,D(t(e).desc),1),V(`div`,Sm,[H(Q,{icon:`open_in_new`,size:12}),r[0]||=V(`span`,null,`Link Card`,-1)])]),t(e).cover?(z(),B(`img`,{key:0,src:t(e).cover,class:`card-cover`},null,8,Cm)):W(``,!0)],8,vm)):e.type===`video`?(z(),B(`div`,wm,[V(`video`,{controls:``,class:`video-player`,src:e.video.url,poster:e.video.poster},` Your browser does not support the video tag. `,8,Tm)])):e.type===`myapptip`?(z(),B(`div`,Em,[V(`div`,Dm,[H(Q,{icon:`info`,size:20})]),V(`div`,null,D(e.myapptip.text),1)])):e.type===`hr`?(z(),B(`hr`,Om)):W(``,!0)],64))),128))]))}},[[`__scopeId`,`data-v-5194f69e`]]);window.canLoad=!0;function Am(e,t={}){return new Promise((n,r)=>{if(!window.canLoad){r(Error(`Request blocked by window.canLoad`));return}let i=(t.method||`GET`).toUpperCase(),a=t.headers||{},o=t.body,s=i===`GET`||i===`HEAD`?null:o,c={method:i,url:e,headers:a,onload:e=>{let t=e.status,i=e.responseText,a=e.responseHeaders,o=null;try{o=JSON.parse(i)}catch{}t===403?o?.error?.message&&o?.error?.redirect?window.canLoad||(alert(o.error.message),confirm(`立即跳转`)&&(window.location.href=o.error.redirect,alert(`已跳转 成功后请自行退出`))):o?.error?.message&&alert(o.error.message):t===401?typeof getLogin==`function`&&getLogin()&&(window.canLoad||(alert(`登录状态已失效 已自动帮你清除失效的登录状态 你可以点击下方我知道了来跳转登录`),confirm(`我知道了`)&&(typeof clearAllCookies==`function`&&clearAllCookies(),localStorage.removeItem(`signdata`),localStorage.removeItem(`idx`),localStorage.removeItem(`udid`),window.location.href=`https://www.zhihu.com/signin`))):t===400&&o?.error?.message&&alert(o.error.message);let s=new Headers;if(a)for(let[e,t]of Object.entries(a))s.append(e,t);let c=new Response(i,{status:t,headers:s});t>=200&&t<300?n(c):r(Error(`HTTP ${t}`))},onerror:e=>{r(Error(`Network error: ${e?.error||`unknown`}`))}};s!==null&&(c.data=s),GM_xmlhttpRequest(c)})}window.unifiedFetch=Am;var jm=Am,Mm=class e{constructor(e,t,n=!1){this.encryptConf=e,this.decryptConf=t,this.isDebug=n}logDebug(e){this.isDebug&&console.log(e)}getEncryptConf(){return this.encryptConf}getDecryptConf(){return this.decryptConf}static hexToBytes(e){let t=[];for(let n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t}static bytesToHex(e){return e.map(e=>e.toString(16).padStart(2,`0`)).join(``)}static padData(e){let t=16-e.length%16,n=[185,186,184,179,177,178,176,191,189,190,188,183,181,182,180,155][t-1];return[...e,...Array(t).fill(n)]}calculateAdjustedLength(e,t){let n=t-1;if(!(0<=n&&n<e.length))throw Error(`Index out of range`);let r=e[n];return r<=16?t-r:r>=t?t:t-r}transform(e,t){let n=Array(e.length);for(let r=0;r<e.length;r++)n[r]=t[e[r]<0?e[r]+256:e[r]];return n}textToMatrix(e){let t=[];for(let n=0;n<16;n++){let r=BigInt(8*(15-n)),i=Number(e>>r&255n);n%4==0?t.push([i]):t[Math.floor(n/4)].push(i)}return t}stateToBytes(e){return e.flat()}stateToHex(t){return e.bytesToHex(this.stateToBytes(t))}xorArrayTemplate(e,t,n){let r=[];for(let i=0;i<e.length;i++){let a=n(t[i]&15^e[i]<<4&255)>>4&255,o=n(t[i]>>4&15^e[i]>>4<<4)>>4&255;r.push(a^o<<4)}return r}addRoundKeys(e,t,n){return e.map((e,r)=>this.xorArrayTemplate(e,t[r],n))}subBytes(e,t,n){return t.map((r,i)=>r.map((r,a)=>e[n[i][a]&15^t[i][a]<<4&255]>>4&255^(e[n[i][a]>>4&15^t[i][a]>>4<<4]>>4&255)<<4))}shiftRows(e,t,n){return t.map((r,i)=>r.map((r,a)=>e[n[i][a]&15^t[i][a]<<4&255]>>4&255^(e[n[i][a]>>4&15^t[i][a]>>4<<4]>>4&255)<<4))}mixColumns(e,t,n){return t.map((r,i)=>r.map((r,a)=>e[n[i][a]&15^t[i][a]<<4&255]>>4&255^(e[n[i][a]>>4&15^t[i][a]>>4<<4]>>4&255)<<4))}buildKey(e,t,n){let r=``;for(let i of t){let t=parseInt(n.substr(i,2),16);r+=e[t*4]}return r}encrypt(e,t){let{key_schedule:n,s_box:r,dict1:i,dict2:a,dict3:o,dict4:s,dict5:c,round_constants:l}=this.getEncryptConf(),u=this.addRoundKeys(this.textToMatrix(e),t.slice(0,4),e=>n[e]),d=[{template:i,indices:[0,8,16,24]},{template:a,indices:[10,18,26,2]},{template:o,indices:[20,28,4,12]},{template:s,indices:[30,6,14,22]}],f=[];for(let e of d){let t=this.buildKey(e.template,e.indices,this.stateToHex(u));f.push(this.textToMatrix(BigInt(`0x`+t)))}for(let e=1;e<10;e++)if(u=this.subBytes(r,f[0],f[1]),u=this.shiftRows(r,u,f[2]),u=this.mixColumns(r,u,f[3]),u=this.addRoundKeys(u,t.slice(4*e,4*(e+1)),e=>r[e]),e!==9){f=[];for(let e of d){let t=this.buildKey(e.template,e.indices,this.stateToHex(u));f.push(this.textToMatrix(BigInt(`0x`+t)))}}let p=[0,10,20,30,8,18,28,6,16,26,4,14,24,2,12,22],m=``;for(let e of p){let t=parseInt(this.stateToHex(u).substr(e,2),16);m+=c[t]}return u=this.textToMatrix(BigInt(`0x`+m)),u=this.addRoundKeys(u,t.slice(40,44),e=>l[e]),u}generateRoundKeys(t){let n=e.hexToBytes(t),r=n.slice(4).map((e,t)=>e^n[(t+4)%3]),i=e.bytesToHex(r),a=[];for(let e=0;e<i.length;e+=32)a.push(i.substr(e,32));return a}transformIv(e,t){let n;return n=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e),this.transform(Array.from(n),t).map(e=>e.toString(16).padStart(2,`0`)).join(``)}aesEncrypt(t,n,r){let i=BigInt(`0x`+n)^BigInt(`0x`+r),a=[];for(let n of t){let t=e.hexToBytes(n);for(let e=0;e<t.length;e+=4)a.push(t.slice(e,e+4))}let o=this.encrypt(i,a),s=this.stateToHex(o);return this.logDebug(`Encrypted: ${s}`),s}processInput(e){let t=this.getDecryptConf().input_arr,n=e.length,r=Array(n+256).fill(0);for(let i=0;i<n;i++)r[i]=t[e[i]];for(let e=0;e<256;e++)r[n+e]=0;return{data:r,length:n}}processOut(e,t){let n=this.getDecryptConf().out_arr,r=Array(t);for(let t=0;t<r.length;t++){let i=e[t];r[t]=i<0?n[i+256]:n[i]}let i=r[r.length-1];i<0&&(i+=256);let a=r.length>i?r.length-i:r.length;return r.slice(0,a)}decrypt(e,t){let{key_schedule:n,s_box:r,dict1:i,dict2:a,dict3:o,dict4:s,dict5:c,round_constants:l}=this.getDecryptConf(),u=this.addRoundKeys(this.textToMatrix(e),t.slice(0,4),e=>n[e]),d=[{template:i,indices:[0,8,16,24]},{template:a,indices:[26,2,10,18]},{template:o,indices:[20,28,4,12]},{template:s,indices:[14,22,30,6]}],f=[];for(let e of d){let t=this.buildKey(e.template,e.indices,this.stateToHex(u));f.push(this.textToMatrix(BigInt(`0x`+t)))}for(let e=1;e<10;e++)if(u=this.subBytes(r,f[0],f[1]),u=this.shiftRows(r,u,f[2]),u=this.mixColumns(r,u,f[3]),u=this.addRoundKeys(u,t.slice(4*e,4*(e+1)),e=>r[e]),e!==9){f=[];for(let e of d){let t=this.buildKey(e.template,e.indices,this.stateToHex(u));f.push(this.textToMatrix(BigInt(`0x`+t)))}}let p=[0,26,20,14,8,2,28,22,16,10,4,30,24,18,12,6],m=``;for(let e of p){let t=parseInt(this.stateToHex(u).substr(e,2),16);m+=c[t]}return u=this.textToMatrix(BigInt(`0x`+m)),u=this.addRoundKeys(u,t.slice(40,44),e=>l[e]),u}aesDecrypt(t,n,r){let i=BigInt(`0x`+n),a=[];for(let n of t){let t=e.hexToBytes(n);for(let e=0;e<t.length;e+=4)a.push(t.slice(e,e+4))}let o=this.decrypt(i,a),s=this.stateToHex(o),c=(BigInt(`0x`+s)^BigInt(`0x`+r)).toString(16).padStart(32,`0`);return this.logDebug(`Decrypted: ${c}`),c}createEncryptor(t,n,r=!1){let i=this.getEncryptConf(),a=this.transformIv(n,i.iv_arr),o=this.generateRoundKeys(t);return t=>{let n=new TextEncoder,s=e.padData(this.transform(Array.from(n.encode(t)),i.input_arr)),c=e.bytesToHex(s),l=[];for(let e=0;e<c.length;e+=32)l.push(c.substr(e,32));let u=[],d=a;for(let e of l){let t=this.aesEncrypt(o,e,d);u.push(t),d=t}let f=e.hexToBytes(u.join(``)),p=this.transform(f,i.out_arr);if(r)return String.fromCharCode(...p);{let e=Uint8Array.from(p);return btoa(String.fromCharCode.apply(null,e))}}}createDecryptor(t,n,r=!1){let i=this.getDecryptConf(),a=this.transformIv(n,i.iv_arr),o=this.generateRoundKeys(t);return t=>{let n;if(r)n=Array.from(t).map(e=>e.charCodeAt(0));else{let e=atob(t);n=Array.from(e).map(e=>e.charCodeAt(0))}let{data:i,length:s}=this.processInput(n),c=e.bytesToHex(i),l=[];for(let e=0;e<c.length;e+=32)l.push(c.substr(e,32));let u=[],d=a;for(let e of l){let t=this.aesDecrypt(o,e,d);u.push(t),d=e}let f=u.join(``),p=new Uint8Array(f.match(/.{1,2}/g).map(e=>parseInt(e,16))),m=this.calculateAdjustedLength(p,i.length),h=this.processOut(p.slice(0,m),s);return new TextDecoder().decode(Uint8Array.from(h))}}},Nm=null;function Pm(){return Nm||(Nm=new Mm({key_schedule:[225,198,252,215,113,97,93,72,172,185,133,159,16,53,15,43,254,161,231,85,176,60,222,151,196,118,18,76,134,110,47,15,159,62,73,26,41,172,142,248,101,8,91,225,212,203,186,126,66,107,151,135,1,205,16,231,61,45,219,252,80,169,120,184,52,155,111,2,136,246,47,169,70,31,120,198,182,229,214,88,105,69,61,35,28,239,11,198,144,131,190,172,125,244,91,208,206,233,164,188,93,64,122,97,241,223,40,61,4,150,30,129,166,245,203,120,222,147,183,48,234,81,9,99,40,76,141,25,121,94,185,164,229,19,194,5,219,251,49,37,108,143,77,146,186,219,118,201,252,134,171,32,91,224,106,13,54,30,156,64,39,129,9,101,154,221,60,181,22,64,193,115,174,88,250,227,2,24,42,56,69,84,98,115,141,154,169,185,202,215,230,242,139,44,29,68,57,178,150,213,4,104,229,93,253,119,161,196,20,6,129,150,110,114,66,91,44,57,249,209,233,185,201,163,87,121,223,254,194,2,237,30,182,167,150,137,65,37,106,60,213,176,95,234,170,32,250,132,120,200,75,23,159,8,62,108],s_box:[187,219,118,193,250,135,163,32,82,237,99,0,62,25,149,73,209,189,82,227,173,45,250,132,118,207,69,27,149,2,57,101,122,87,191,166,224,18,197,13,222,246,54,47,100,143,67,155,199,233,175,186,80,76,127,100,240,223,37,60,10,146,22,135,251,175,229,95,188,63,214,158,199,124,18,77,128,99,33,10,136,41,29,67,48,191,152,220,9,100,231,86,244,127,171,197,160,243,194,113,218,144,178,62,233,83,10,101,45,73,134,30,43,143,12,107,151,213,57,180,25,71,204,121,166,82,255,224,88,125,216,255,205,3,235,17,179,167,157,135,79,32,98,53,233,205,254,221,126,104,89,71,169,191,132,156,28,62,2,43,109,67,62,39,24,229,6,199,144,133,188,173,120,240,82,212,10,31,45,62,69,85,107,114,138,158,168,182,197,212,230,253,57,146,102,5,130,247,47,160,78,23,120,194,188,235,212,80,25,7,141,144,100,121,79,92,37,62,246,220,228,187,201,169,158,53,64,22,41,164,128,245,99,2,90,233,223,196,191,114,79,102,148,141,2,199,22,234,49,46,219,243,93,168,117,180],round_constants:[9,110,17,252,140,83,232,59,116,149,194,40,210,70,179,171,109,8,117,151,235,56,135,83,22,244,173,79,188,38,210,205,30,122,14,238,151,76,240,40,105,130,220,53,192,91,167,182,252,157,230,2,121,171,27,196,133,96,63,213,45,178,75,90,139,236,144,125,4,215,98,178,240,30,75,168,87,201,48,42,81,50,74,165,208,14,187,104,44,206,159,118,128,26,232,254,227,130,246,20,98,179,11,209,148,118,36,194,51,162,91,73,63,84,44,203,177,98,209,11,75,175,251,26,226,116,129,148,117,23,104,133,246,42,149,73,7,224,191,95,171,52,197,214,147,252,131,110,28,198,116,162,232,13,88,190,71,218,34,49,201,170,217,55,67,148,46,248,190,89,10,230,20,136,121,104,34,69,58,221,163,124,207,17,87,177,232,3,253,108,158,136,220,181,205,41,86,134,60,237,170,74,27,251,13,151,101,114,76,40,93,176,207,19,160,118,53,209,130,100,149,14,251,232,179,222,166,64,57,226,80,134,203,47,112,156,105,243,2,26,175,192,180,85,32,254,73,147,222,56,97,132,118,231,30,1],dict1:{0:`0C1717DA`,4:`F08A8A36`,8:`C89A9A19`,12:`3F9797DE`,16:`574D4D35`,20:`F48C8C38`,24:`72D6D65C`,28:`1D6D6DFB`,32:`4C8787CA`,36:`C5CBCBB5`,40:`428F8FC9`,44:`1C6868F4`,48:`D56B6B45`,52:`52AFAFE9`,56:`13F9F96D`,60:`3CC8C804`,64:`01B6B60F`,68:`D26F6F49`,72:`6236367C`,76:`270D0D75`,80:`24D9D987`,84:`982A2AF9`,88:`61EFEF86`,92:`7E020224`,96:`C6939317`,100:`7309092D`,104:`584A4A39`,108:`106A6AF6`,112:`3E9292D4`,116:`448989C7`,120:`11FFFF66`,124:`534C4C30`,128:`D4696947`,132:`B3B9B9BD`,136:`DA626243`,140:`9C57576A`,144:`29DEDE80`,148:`AC37372A`,152:`6A35357E`,156:`FE7272E4`,160:`051B1BD5`,164:`7CD8D854`,168:`F37979ED`,172:`B1BFBFB6`,176:`389494DC`,180:`7F07072E`,184:`B8B4B4BC`,188:`2B010171`,192:`35C1C102`,196:`7AD5D55E`,200:`77000022`,204:`4B717191`,208:`8DADAD9B`,212:`6D3D3D7B`,216:`196363FD`,220:`75D1D152`,224:`041919D7`,228:`22DFDF89`,232:`884444CC`,236:`AD303021`,240:`84ACAC98`,244:`26030377`,248:`B913131D`,252:`A7EDED55`,256:`5DA0A0E1`,260:`AFE8E853`,264:`603A3A76`,268:`5B414131`,272:`32C6C60C`,276:`972D2DF5`,280:`DFF8F8A3`,284:`BBBBBBBB`,288:`E95353AD`,292:`5E45453A`,296:`D1F6F6AF`,300:`8E4242C4`,304:`146C6CF8`,308:`1A6565FE`,312:`9D505061`,316:`FB7B7BEB`,320:`156161F2`,324:`A1E6E65F`,328:`A8EAEA59`,332:`F983833D`,336:`50A4A4EF`,340:`6C383874`,344:`68E4E48C`,348:`E329294D`,352:`C2CFCFB9`,356:`FD8D8D3B`,360:`CF989813`,364:`A4393927`,368:`0BB1B101`,372:`864E4EC8`,376:`D6F3F3A7`,380:`B01A1A16`,384:`CB919111`,388:`65313172`,392:`46737397`,396:`BA15151E`,400:`498E8EC0`,404:`230C0C70`,408:`DEF5F5AA`,412:`F87474EC`,416:`319F9FD6`,420:`D96E6E40`,424:`E05A5AA6`,428:`EC5858A4`,432:`BC181814`,436:`80AAAA96`,440:`925F5F69`,444:`2106067F`,448:`30CACA06`,452:`E12F2F46`,456:`F67E7EE8`,460:`E7202042`,464:`932C2CF0`,468:`CDC0C0B1`,472:`379090D2`,476:`2AD2D283`,480:`A034342F`,484:`126666FC`,488:`85A1A192`,492:`94595967`,496:`7804042C`,500:`408484CF`,504:`C4C9C9B7`,508:`E62E2E48`,512:`EF27274E`,516:`DC67674A`,520:`0FB8B803`,524:`A23F3F29`,528:`B6BEBEB8`,532:`6FE7E78E`,536:`2DD0D081`,540:`9F2828F3`,544:`F286863C`,548:`5146463F`,552:`20D4D48F`,556:`A53B3B25`,560:`C79D9D15`,564:`5AA2A2E3`,568:`F17F7FE6`,572:`D7FDFDA5`,576:`4A8282C3`,580:`E25656AC`,584:`B41C1C18`,588:`CAC2C2B3`,592:`70DADA56`,596:`F77070E2`,600:`7B0B0B2B`,604:`1BFBFB6B`,608:`8CA8A894`,612:`C0C4C4BF`,616:`34CCCC08`,620:`874040C2`,624:`5CA7A7EA`,628:`995E5E60`,632:`9B2121F1`,636:`2CD7D78A`,640:`962323F7`,644:`67E0E082`,648:`66EEEE88`,652:`280A0A79`,656:`BEB2B2B4`,660:`ED5D5DAB`,664:`091E1ED0`,668:`9054546F`,672:`834949CD`,676:`06B3B307`,680:`DD606041`,684:`3B9B9BDB`,688:`79D3D35D`,692:`E824244C`,696:`C9CECEB0`,700:`DBF1F1A1`,704:`C196961F`,708:`EB2B2B4B`,712:`CE95951A`,716:`FA85853E`,720:`AEE5E55A`,724:`4E75759A`,728:`39C3C30D`,732:`339999DD`,736:`63E9E98D`,740:`D064644F`,744:`54A9A9E7`,748:`6EE2E284`,752:`369E9ED8`,756:`B7B0B0B2`,760:`A3ECEC50`,764:`CCC7C7BA`,768:`4D8080C1`,772:`17F0F062`,776:`08BABA09`,780:`EA5555AE`,784:`A93E3E20`,788:`03BCBC00`,792:`955B5B65`,796:`BD1D1D1B`,800:`487A7A99`,804:`ABE1E151`,808:`814F4FC6`,812:`B216161C`,816:`760E0E28`,820:`7DDDDD5B`,824:`1FF7F76E`,828:`E45C5CA8`,832:`0D1010D1`,836:`16FEFE68`,840:`82A6A69C`,844:`0EB5B50A`,848:`4F787893`,852:`710F0F26`,856:`89A3A39D`,860:`D3FCFCA0`,864:`E55151A2`,868:`B5111112`,872:`56434337`,876:`6BEBEB8B`,880:`8AA5A59E`,884:`6933337D`,888:`25DBDB85`,892:`FF7777EE`,896:`643C3C78`,900:`18F4F46C`,904:`3AC5C50E`,908:`74DCDC58`,912:`D8FAFAA9`,916:`C39C9C10`,920:`8B4B4BCB`,924:`FC888834`,928:`BFB7B7BE`,932:`001414DF`,936:`912626FF`,940:`55ABABE5`,944:`F5818132`,948:`3DCDCD0B`,952:`EE222244`,956:`1EF2F264`,960:`0A1212D3`,964:`8F4747CE`,968:`2F080873`,972:`437C7C90`,976:`A6E3E357`,980:`9A525263`,984:`477D7D95`,988:`4176769F`,992:`59AEAEE0`,996:`458B8BC5`,1e3:`AA323223`,1004:`07BDBD05`,1008:`021F1FD9`,1012:`9E2525FA`,1016:`5F484833`,1020:`2E05057A`},dict2:{0:`DA0C1717`,4:`36F08A8A`,8:`19C89A9A`,12:`DE3F9797`,16:`35574D4D`,20:`38F48C8C`,24:`5C72D6D6`,28:`FB1D6D6D`,32:`CA4C8787`,36:`B5C5CBCB`,40:`C9428F8F`,44:`F41C6868`,48:`45D56B6B`,52:`E952AFAF`,56:`6D13F9F9`,60:`043CC8C8`,64:`0F01B6B6`,68:`49D26F6F`,72:`7C623636`,76:`75270D0D`,80:`8724D9D9`,84:`F9982A2A`,88:`8661EFEF`,92:`247E0202`,96:`17C69393`,100:`2D730909`,104:`39584A4A`,108:`F6106A6A`,112:`D43E9292`,116:`C7448989`,120:`6611FFFF`,124:`30534C4C`,128:`47D46969`,132:`BDB3B9B9`,136:`43DA6262`,140:`6A9C5757`,144:`8029DEDE`,148:`2AAC3737`,152:`7E6A3535`,156:`E4FE7272`,160:`D5051B1B`,164:`547CD8D8`,168:`EDF37979`,172:`B6B1BFBF`,176:`DC389494`,180:`2E7F0707`,184:`BCB8B4B4`,188:`712B0101`,192:`0235C1C1`,196:`5E7AD5D5`,200:`22770000`,204:`914B7171`,208:`9B8DADAD`,212:`7B6D3D3D`,216:`FD196363`,220:`5275D1D1`,224:`D7041919`,228:`8922DFDF`,232:`CC884444`,236:`21AD3030`,240:`9884ACAC`,244:`77260303`,248:`1DB91313`,252:`55A7EDED`,256:`E15DA0A0`,260:`53AFE8E8`,264:`76603A3A`,268:`315B4141`,272:`0C32C6C6`,276:`F5972D2D`,280:`A3DFF8F8`,284:`BBBBBBBB`,288:`ADE95353`,292:`3A5E4545`,296:`AFD1F6F6`,300:`C48E4242`,304:`F8146C6C`,308:`FE1A6565`,312:`619D5050`,316:`EBFB7B7B`,320:`F2156161`,324:`5FA1E6E6`,328:`59A8EAEA`,332:`3DF98383`,336:`EF50A4A4`,340:`746C3838`,344:`8C68E4E4`,348:`4DE32929`,352:`B9C2CFCF`,356:`3BFD8D8D`,360:`13CF9898`,364:`27A43939`,368:`010BB1B1`,372:`C8864E4E`,376:`A7D6F3F3`,380:`16B01A1A`,384:`11CB9191`,388:`72653131`,392:`97467373`,396:`1EBA1515`,400:`C0498E8E`,404:`70230C0C`,408:`AADEF5F5`,412:`ECF87474`,416:`D6319F9F`,420:`40D96E6E`,424:`A6E05A5A`,428:`A4EC5858`,432:`14BC1818`,436:`9680AAAA`,440:`69925F5F`,444:`7F210606`,448:`0630CACA`,452:`46E12F2F`,456:`E8F67E7E`,460:`42E72020`,464:`F0932C2C`,468:`B1CDC0C0`,472:`D2379090`,476:`832AD2D2`,480:`2FA03434`,484:`FC126666`,488:`9285A1A1`,492:`67945959`,496:`2C780404`,500:`CF408484`,504:`B7C4C9C9`,508:`48E62E2E`,512:`4EEF2727`,516:`4ADC6767`,520:`030FB8B8`,524:`29A23F3F`,528:`B8B6BEBE`,532:`8E6FE7E7`,536:`812DD0D0`,540:`F39F2828`,544:`3CF28686`,548:`3F514646`,552:`8F20D4D4`,556:`25A53B3B`,560:`15C79D9D`,564:`E35AA2A2`,568:`E6F17F7F`,572:`A5D7FDFD`,576:`C34A8282`,580:`ACE25656`,584:`18B41C1C`,588:`B3CAC2C2`,592:`5670DADA`,596:`E2F77070`,600:`2B7B0B0B`,604:`6B1BFBFB`,608:`948CA8A8`,612:`BFC0C4C4`,616:`0834CCCC`,620:`C2874040`,624:`EA5CA7A7`,628:`60995E5E`,632:`F19B2121`,636:`8A2CD7D7`,640:`F7962323`,644:`8267E0E0`,648:`8866EEEE`,652:`79280A0A`,656:`B4BEB2B2`,660:`ABED5D5D`,664:`D0091E1E`,668:`6F905454`,672:`CD834949`,676:`0706B3B3`,680:`41DD6060`,684:`DB3B9B9B`,688:`5D79D3D3`,692:`4CE82424`,696:`B0C9CECE`,700:`A1DBF1F1`,704:`1FC19696`,708:`4BEB2B2B`,712:`1ACE9595`,716:`3EFA8585`,720:`5AAEE5E5`,724:`9A4E7575`,728:`0D39C3C3`,732:`DD339999`,736:`8D63E9E9`,740:`4FD06464`,744:`E754A9A9`,748:`846EE2E2`,752:`D8369E9E`,756:`B2B7B0B0`,760:`50A3ECEC`,764:`BACCC7C7`,768:`C14D8080`,772:`6217F0F0`,776:`0908BABA`,780:`AEEA5555`,784:`20A93E3E`,788:`0003BCBC`,792:`65955B5B`,796:`1BBD1D1D`,800:`99487A7A`,804:`51ABE1E1`,808:`C6814F4F`,812:`1CB21616`,816:`28760E0E`,820:`5B7DDDDD`,824:`6E1FF7F7`,828:`A8E45C5C`,832:`D10D1010`,836:`6816FEFE`,840:`9C82A6A6`,844:`0A0EB5B5`,848:`934F7878`,852:`26710F0F`,856:`9D89A3A3`,860:`A0D3FCFC`,864:`A2E55151`,868:`12B51111`,872:`37564343`,876:`8B6BEBEB`,880:`9E8AA5A5`,884:`7D693333`,888:`8525DBDB`,892:`EEFF7777`,896:`78643C3C`,900:`6C18F4F4`,904:`0E3AC5C5`,908:`5874DCDC`,912:`A9D8FAFA`,916:`10C39C9C`,920:`CB8B4B4B`,924:`34FC8888`,928:`BEBFB7B7`,932:`DF001414`,936:`FF912626`,940:`E555ABAB`,944:`32F58181`,948:`0B3DCDCD`,952:`44EE2222`,956:`641EF2F2`,960:`D30A1212`,964:`CE8F4747`,968:`732F0808`,972:`90437C7C`,976:`57A6E3E3`,980:`639A5252`,984:`95477D7D`,988:`9F417676`,992:`E059AEAE`,996:`C5458B8B`,1e3:`23AA3232`,1004:`0507BDBD`,1008:`D9021F1F`,1012:`FA9E2525`,1016:`335F4848`,1020:`7A2E0505`},dict3:{0:`17DA0C17`,4:`8A36F08A`,8:`9A19C89A`,12:`97DE3F97`,16:`4D35574D`,20:`8C38F48C`,24:`D65C72D6`,28:`6DFB1D6D`,32:`87CA4C87`,36:`CBB5C5CB`,40:`8FC9428F`,44:`68F41C68`,48:`6B45D56B`,52:`AFE952AF`,56:`F96D13F9`,60:`C8043CC8`,64:`B60F01B6`,68:`6F49D26F`,72:`367C6236`,76:`0D75270D`,80:`D98724D9`,84:`2AF9982A`,88:`EF8661EF`,92:`02247E02`,96:`9317C693`,100:`092D7309`,104:`4A39584A`,108:`6AF6106A`,112:`92D43E92`,116:`89C74489`,120:`FF6611FF`,124:`4C30534C`,128:`6947D469`,132:`B9BDB3B9`,136:`6243DA62`,140:`576A9C57`,144:`DE8029DE`,148:`372AAC37`,152:`357E6A35`,156:`72E4FE72`,160:`1BD5051B`,164:`D8547CD8`,168:`79EDF379`,172:`BFB6B1BF`,176:`94DC3894`,180:`072E7F07`,184:`B4BCB8B4`,188:`01712B01`,192:`C10235C1`,196:`D55E7AD5`,200:`00227700`,204:`71914B71`,208:`AD9B8DAD`,212:`3D7B6D3D`,216:`63FD1963`,220:`D15275D1`,224:`19D70419`,228:`DF8922DF`,232:`44CC8844`,236:`3021AD30`,240:`AC9884AC`,244:`03772603`,248:`131DB913`,252:`ED55A7ED`,256:`A0E15DA0`,260:`E853AFE8`,264:`3A76603A`,268:`41315B41`,272:`C60C32C6`,276:`2DF5972D`,280:`F8A3DFF8`,284:`BBBBBBBB`,288:`53ADE953`,292:`453A5E45`,296:`F6AFD1F6`,300:`42C48E42`,304:`6CF8146C`,308:`65FE1A65`,312:`50619D50`,316:`7BEBFB7B`,320:`61F21561`,324:`E65FA1E6`,328:`EA59A8EA`,332:`833DF983`,336:`A4EF50A4`,340:`38746C38`,344:`E48C68E4`,348:`294DE329`,352:`CFB9C2CF`,356:`8D3BFD8D`,360:`9813CF98`,364:`3927A439`,368:`B1010BB1`,372:`4EC8864E`,376:`F3A7D6F3`,380:`1A16B01A`,384:`9111CB91`,388:`31726531`,392:`73974673`,396:`151EBA15`,400:`8EC0498E`,404:`0C70230C`,408:`F5AADEF5`,412:`74ECF874`,416:`9FD6319F`,420:`6E40D96E`,424:`5AA6E05A`,428:`58A4EC58`,432:`1814BC18`,436:`AA9680AA`,440:`5F69925F`,444:`067F2106`,448:`CA0630CA`,452:`2F46E12F`,456:`7EE8F67E`,460:`2042E720`,464:`2CF0932C`,468:`C0B1CDC0`,472:`90D23790`,476:`D2832AD2`,480:`342FA034`,484:`66FC1266`,488:`A19285A1`,492:`59679459`,496:`042C7804`,500:`84CF4084`,504:`C9B7C4C9`,508:`2E48E62E`,512:`274EEF27`,516:`674ADC67`,520:`B8030FB8`,524:`3F29A23F`,528:`BEB8B6BE`,532:`E78E6FE7`,536:`D0812DD0`,540:`28F39F28`,544:`863CF286`,548:`463F5146`,552:`D48F20D4`,556:`3B25A53B`,560:`9D15C79D`,564:`A2E35AA2`,568:`7FE6F17F`,572:`FDA5D7FD`,576:`82C34A82`,580:`56ACE256`,584:`1C18B41C`,588:`C2B3CAC2`,592:`DA5670DA`,596:`70E2F770`,600:`0B2B7B0B`,604:`FB6B1BFB`,608:`A8948CA8`,612:`C4BFC0C4`,616:`CC0834CC`,620:`40C28740`,624:`A7EA5CA7`,628:`5E60995E`,632:`21F19B21`,636:`D78A2CD7`,640:`23F79623`,644:`E08267E0`,648:`EE8866EE`,652:`0A79280A`,656:`B2B4BEB2`,660:`5DABED5D`,664:`1ED0091E`,668:`546F9054`,672:`49CD8349`,676:`B30706B3`,680:`6041DD60`,684:`9BDB3B9B`,688:`D35D79D3`,692:`244CE824`,696:`CEB0C9CE`,700:`F1A1DBF1`,704:`961FC196`,708:`2B4BEB2B`,712:`951ACE95`,716:`853EFA85`,720:`E55AAEE5`,724:`759A4E75`,728:`C30D39C3`,732:`99DD3399`,736:`E98D63E9`,740:`644FD064`,744:`A9E754A9`,748:`E2846EE2`,752:`9ED8369E`,756:`B0B2B7B0`,760:`EC50A3EC`,764:`C7BACCC7`,768:`80C14D80`,772:`F06217F0`,776:`BA0908BA`,780:`55AEEA55`,784:`3E20A93E`,788:`BC0003BC`,792:`5B65955B`,796:`1D1BBD1D`,800:`7A99487A`,804:`E151ABE1`,808:`4FC6814F`,812:`161CB216`,816:`0E28760E`,820:`DD5B7DDD`,824:`F76E1FF7`,828:`5CA8E45C`,832:`10D10D10`,836:`FE6816FE`,840:`A69C82A6`,844:`B50A0EB5`,848:`78934F78`,852:`0F26710F`,856:`A39D89A3`,860:`FCA0D3FC`,864:`51A2E551`,868:`1112B511`,872:`43375643`,876:`EB8B6BEB`,880:`A59E8AA5`,884:`337D6933`,888:`DB8525DB`,892:`77EEFF77`,896:`3C78643C`,900:`F46C18F4`,904:`C50E3AC5`,908:`DC5874DC`,912:`FAA9D8FA`,916:`9C10C39C`,920:`4BCB8B4B`,924:`8834FC88`,928:`B7BEBFB7`,932:`14DF0014`,936:`26FF9126`,940:`ABE555AB`,944:`8132F581`,948:`CD0B3DCD`,952:`2244EE22`,956:`F2641EF2`,960:`12D30A12`,964:`47CE8F47`,968:`08732F08`,972:`7C90437C`,976:`E357A6E3`,980:`52639A52`,984:`7D95477D`,988:`769F4176`,992:`AEE059AE`,996:`8BC5458B`,1e3:`3223AA32`,1004:`BD0507BD`,1008:`1FD9021F`,1012:`25FA9E25`,1016:`48335F48`,1020:`057A2E05`},dict4:{0:`1717DA0C`,4:`8A8A36F0`,8:`9A9A19C8`,12:`9797DE3F`,16:`4D4D3557`,20:`8C8C38F4`,24:`D6D65C72`,28:`6D6DFB1D`,32:`8787CA4C`,36:`CBCBB5C5`,40:`8F8FC942`,44:`6868F41C`,48:`6B6B45D5`,52:`AFAFE952`,56:`F9F96D13`,60:`C8C8043C`,64:`B6B60F01`,68:`6F6F49D2`,72:`36367C62`,76:`0D0D7527`,80:`D9D98724`,84:`2A2AF998`,88:`EFEF8661`,92:`0202247E`,96:`939317C6`,100:`09092D73`,104:`4A4A3958`,108:`6A6AF610`,112:`9292D43E`,116:`8989C744`,120:`FFFF6611`,124:`4C4C3053`,128:`696947D4`,132:`B9B9BDB3`,136:`626243DA`,140:`57576A9C`,144:`DEDE8029`,148:`37372AAC`,152:`35357E6A`,156:`7272E4FE`,160:`1B1BD505`,164:`D8D8547C`,168:`7979EDF3`,172:`BFBFB6B1`,176:`9494DC38`,180:`07072E7F`,184:`B4B4BCB8`,188:`0101712B`,192:`C1C10235`,196:`D5D55E7A`,200:`00002277`,204:`7171914B`,208:`ADAD9B8D`,212:`3D3D7B6D`,216:`6363FD19`,220:`D1D15275`,224:`1919D704`,228:`DFDF8922`,232:`4444CC88`,236:`303021AD`,240:`ACAC9884`,244:`03037726`,248:`13131DB9`,252:`EDED55A7`,256:`A0A0E15D`,260:`E8E853AF`,264:`3A3A7660`,268:`4141315B`,272:`C6C60C32`,276:`2D2DF597`,280:`F8F8A3DF`,284:`BBBBBBBB`,288:`5353ADE9`,292:`45453A5E`,296:`F6F6AFD1`,300:`4242C48E`,304:`6C6CF814`,308:`6565FE1A`,312:`5050619D`,316:`7B7BEBFB`,320:`6161F215`,324:`E6E65FA1`,328:`EAEA59A8`,332:`83833DF9`,336:`A4A4EF50`,340:`3838746C`,344:`E4E48C68`,348:`29294DE3`,352:`CFCFB9C2`,356:`8D8D3BFD`,360:`989813CF`,364:`393927A4`,368:`B1B1010B`,372:`4E4EC886`,376:`F3F3A7D6`,380:`1A1A16B0`,384:`919111CB`,388:`31317265`,392:`73739746`,396:`15151EBA`,400:`8E8EC049`,404:`0C0C7023`,408:`F5F5AADE`,412:`7474ECF8`,416:`9F9FD631`,420:`6E6E40D9`,424:`5A5AA6E0`,428:`5858A4EC`,432:`181814BC`,436:`AAAA9680`,440:`5F5F6992`,444:`06067F21`,448:`CACA0630`,452:`2F2F46E1`,456:`7E7EE8F6`,460:`202042E7`,464:`2C2CF093`,468:`C0C0B1CD`,472:`9090D237`,476:`D2D2832A`,480:`34342FA0`,484:`6666FC12`,488:`A1A19285`,492:`59596794`,496:`04042C78`,500:`8484CF40`,504:`C9C9B7C4`,508:`2E2E48E6`,512:`27274EEF`,516:`67674ADC`,520:`B8B8030F`,524:`3F3F29A2`,528:`BEBEB8B6`,532:`E7E78E6F`,536:`D0D0812D`,540:`2828F39F`,544:`86863CF2`,548:`46463F51`,552:`D4D48F20`,556:`3B3B25A5`,560:`9D9D15C7`,564:`A2A2E35A`,568:`7F7FE6F1`,572:`FDFDA5D7`,576:`8282C34A`,580:`5656ACE2`,584:`1C1C18B4`,588:`C2C2B3CA`,592:`DADA5670`,596:`7070E2F7`,600:`0B0B2B7B`,604:`FBFB6B1B`,608:`A8A8948C`,612:`C4C4BFC0`,616:`CCCC0834`,620:`4040C287`,624:`A7A7EA5C`,628:`5E5E6099`,632:`2121F19B`,636:`D7D78A2C`,640:`2323F796`,644:`E0E08267`,648:`EEEE8866`,652:`0A0A7928`,656:`B2B2B4BE`,660:`5D5DABED`,664:`1E1ED009`,668:`54546F90`,672:`4949CD83`,676:`B3B30706`,680:`606041DD`,684:`9B9BDB3B`,688:`D3D35D79`,692:`24244CE8`,696:`CECEB0C9`,700:`F1F1A1DB`,704:`96961FC1`,708:`2B2B4BEB`,712:`95951ACE`,716:`85853EFA`,720:`E5E55AAE`,724:`75759A4E`,728:`C3C30D39`,732:`9999DD33`,736:`E9E98D63`,740:`64644FD0`,744:`A9A9E754`,748:`E2E2846E`,752:`9E9ED836`,756:`B0B0B2B7`,760:`ECEC50A3`,764:`C7C7BACC`,768:`8080C14D`,772:`F0F06217`,776:`BABA0908`,780:`5555AEEA`,784:`3E3E20A9`,788:`BCBC0003`,792:`5B5B6595`,796:`1D1D1BBD`,800:`7A7A9948`,804:`E1E151AB`,808:`4F4FC681`,812:`16161CB2`,816:`0E0E2876`,820:`DDDD5B7D`,824:`F7F76E1F`,828:`5C5CA8E4`,832:`1010D10D`,836:`FEFE6816`,840:`A6A69C82`,844:`B5B50A0E`,848:`7878934F`,852:`0F0F2671`,856:`A3A39D89`,860:`FCFCA0D3`,864:`5151A2E5`,868:`111112B5`,872:`43433756`,876:`EBEB8B6B`,880:`A5A59E8A`,884:`33337D69`,888:`DBDB8525`,892:`7777EEFF`,896:`3C3C7864`,900:`F4F46C18`,904:`C5C50E3A`,908:`DCDC5874`,912:`FAFAA9D8`,916:`9C9C10C3`,920:`4B4BCB8B`,924:`888834FC`,928:`B7B7BEBF`,932:`1414DF00`,936:`2626FF91`,940:`ABABE555`,944:`818132F5`,948:`CDCD0B3D`,952:`222244EE`,956:`F2F2641E`,960:`1212D30A`,964:`4747CE8F`,968:`0808732F`,972:`7C7C9043`,976:`E3E357A6`,980:`5252639A`,984:`7D7D9547`,988:`76769F41`,992:`AEAEE059`,996:`8B8BC545`,1e3:`323223AA`,1004:`BDBD0507`,1008:`1F1FD902`,1012:`2525FA9E`,1016:`4848335F`,1020:`05057A2E`},dict5:{0:`17`,1:`8A`,2:`9A`,3:`97`,4:`4D`,5:`8C`,6:`D6`,7:`6D`,8:`87`,9:`CB`,10:`8F`,11:`68`,12:`6B`,13:`AF`,14:`F9`,15:`C8`,16:`B6`,17:`6F`,18:`36`,19:`0D`,20:`D9`,21:`2A`,22:`EF`,23:`02`,24:`93`,25:`09`,26:`4A`,27:`6A`,28:`92`,29:`89`,30:`FF`,31:`4C`,32:`69`,33:`B9`,34:`62`,35:`57`,36:`DE`,37:`37`,38:`35`,39:`72`,40:`1B`,41:`D8`,42:`79`,43:`BF`,44:`94`,45:`07`,46:`B4`,47:`01`,48:`C1`,49:`D5`,50:`00`,51:`71`,52:`AD`,53:`3D`,54:`63`,55:`D1`,56:`19`,57:`DF`,58:`44`,59:`30`,60:`AC`,61:`03`,62:`13`,63:`ED`,64:`A0`,65:`E8`,66:`3A`,67:`41`,68:`C6`,69:`2D`,70:`F8`,71:`BB`,72:`53`,73:`45`,74:`F6`,75:`42`,76:`6C`,77:`65`,78:`50`,79:`7B`,80:`61`,81:`E6`,82:`EA`,83:`83`,84:`A4`,85:`38`,86:`E4`,87:`29`,88:`CF`,89:`8D`,90:`98`,91:`39`,92:`B1`,93:`4E`,94:`F3`,95:`1A`,96:`91`,97:`31`,98:`73`,99:`15`,100:`8E`,101:`0C`,102:`F5`,103:`74`,104:`9F`,105:`6E`,106:`5A`,107:`58`,108:`18`,109:`AA`,110:`5F`,111:`06`,112:`CA`,113:`2F`,114:`7E`,115:`20`,116:`2C`,117:`C0`,118:`90`,119:`D2`,120:`34`,121:`66`,122:`A1`,123:`59`,124:`04`,125:`84`,126:`C9`,127:`2E`,128:`27`,129:`67`,130:`B8`,131:`3F`,132:`BE`,133:`E7`,134:`D0`,135:`28`,136:`86`,137:`46`,138:`D4`,139:`3B`,140:`9D`,141:`A2`,142:`7F`,143:`FD`,144:`82`,145:`56`,146:`1C`,147:`C2`,148:`DA`,149:`70`,150:`0B`,151:`FB`,152:`A8`,153:`C4`,154:`CC`,155:`40`,156:`A7`,157:`5E`,158:`21`,159:`D7`,160:`23`,161:`E0`,162:`EE`,163:`0A`,164:`B2`,165:`5D`,166:`1E`,167:`54`,168:`49`,169:`B3`,170:`60`,171:`9B`,172:`D3`,173:`24`,174:`CE`,175:`F1`,176:`96`,177:`2B`,178:`95`,179:`85`,180:`E5`,181:`75`,182:`C3`,183:`99`,184:`E9`,185:`64`,186:`A9`,187:`E2`,188:`9E`,189:`B0`,190:`EC`,191:`C7`,192:`80`,193:`F0`,194:`BA`,195:`55`,196:`3E`,197:`BC`,198:`5B`,199:`1D`,200:`7A`,201:`E1`,202:`4F`,203:`16`,204:`0E`,205:`DD`,206:`F7`,207:`5C`,208:`10`,209:`FE`,210:`A6`,211:`B5`,212:`78`,213:`0F`,214:`A3`,215:`FC`,216:`51`,217:`11`,218:`43`,219:`EB`,220:`A5`,221:`33`,222:`DB`,223:`77`,224:`3C`,225:`F4`,226:`C5`,227:`DC`,228:`FA`,229:`9C`,230:`4B`,231:`88`,232:`B7`,233:`14`,234:`26`,235:`AB`,236:`81`,237:`CD`,238:`22`,239:`F2`,240:`12`,241:`47`,242:`08`,243:`7C`,244:`E3`,245:`52`,246:`7D`,247:`76`,248:`AE`,249:`8B`,250:`32`,251:`BD`,252:`1F`,253:`25`,254:`48`,255:`05`},input_arr:[187,185,186,184,179,177,178,176,191,189,190,188,183,181,182,180,155,153,154,152,147,145,146,144,159,157,158,156,151,149,150,148,171,169,170,168,163,161,162,160,175,173,174,172,167,165,166,164,139,137,138,136,131,129,130,128,143,141,142,140,135,133,134,132,59,57,58,56,51,49,50,48,63,61,62,60,55,53,54,52,27,25,26,24,19,17,18,16,31,29,30,28,23,21,22,20,43,41,42,40,35,33,34,32,47,45,46,44,39,37,38,36,11,9,10,8,3,1,2,0,15,13,14,12,7,5,6,4,251,249,250,248,243,241,242,240,255,253,254,252,247,245,246,244,219,217,218,216,211,209,210,208,223,221,222,220,215,213,214,212,235,233,234,232,227,225,226,224,239,237,238,236,231,229,230,228,203,201,202,200,195,193,194,192,207,205,206,204,199,197,198,196,123,121,122,120,115,113,114,112,127,125,126,124,119,117,118,116,91,89,90,88,83,81,82,80,95,93,94,92,87,85,86,84,107,105,106,104,99,97,98,96,111,109,110,108,103,101,102,100,75,73,74,72,67,65,66,64,79,77,78,76,71,69,70,68],iv_arr:[0,2,1,3,8,10,9,11,4,6,5,7,12,14,13,15,32,34,33,35,40,42,41,43,36,38,37,39,44,46,45,47,16,18,17,19,24,26,25,27,20,22,21,23,28,30,29,31,48,50,49,51,56,58,57,59,52,54,53,55,60,62,61,63,128,130,129,131,136,138,137,139,132,134,133,135,140,142,141,143,160,162,161,163,168,170,169,171,164,166,165,167,172,174,173,175,144,146,145,147,152,154,153,155,148,150,149,151,156,158,157,159,176,178,177,179,184,186,185,187,180,182,181,183,188,190,189,191,64,66,65,67,72,74,73,75,68,70,69,71,76,78,77,79,96,98,97,99,104,106,105,107,100,102,101,103,108,110,109,111,80,82,81,83,88,90,89,91,84,86,85,87,92,94,93,95,112,114,113,115,120,122,121,123,116,118,117,119,124,126,125,127,192,194,193,195,200,202,201,203,196,198,197,199,204,206,205,207,224,226,225,227,232,234,233,235,228,230,229,231,236,238,237,239,208,210,209,211,216,218,217,219,212,214,213,215,220,222,221,223,240,242,241,243,248,250,249,251,244,246,245,247,252,254,253,255],out_arr:[0,2,1,3,8,10,9,11,4,6,5,7,12,14,13,15,32,34,33,35,40,42,41,43,36,38,37,39,44,46,45,47,16,18,17,19,24,26,25,27,20,22,21,23,28,30,29,31,48,50,49,51,56,58,57,59,52,54,53,55,60,62,61,63,128,130,129,131,136,138,137,139,132,134,133,135,140,142,141,143,160,162,161,163,168,170,169,171,164,166,165,167,172,174,173,175,144,146,145,147,152,154,153,155,148,150,149,151,156,158,157,159,176,178,177,179,184,186,185,187,180,182,181,183,188,190,189,191,64,66,65,67,72,74,73,75,68,70,69,71,76,78,77,79,96,98,97,99,104,106,105,107,100,102,101,103,108,110,109,111,80,82,81,83,88,90,89,91,84,86,85,87,92,94,93,95,112,114,113,115,120,122,121,123,116,118,117,119,124,126,125,127,192,194,193,195,200,202,201,203,196,198,197,199,204,206,205,207,224,226,225,227,232,234,233,235,228,230,229,231,236,238,237,239,208,210,209,211,216,218,217,219,212,214,213,215,220,222,221,223,240,242,241,243,248,250,249,251,244,246,245,247,252,254,253,255]},{key_schedule:[4,27,45,60,65,86,97,120,136,144,174,182,193,220,239,242,217,79,206,234,25,158,182,252,171,85,136,102,36,15,55,126,176,56,87,29,234,40,212,166,254,202,118,15,148,96,79,134,97,224,153,76,48,195,1,140,112,39,241,220,88,184,31,169,164,41,18,82,199,63,252,188,208,225,3,126,70,132,158,100,134,196,68,145,32,235,123,107,12,50,208,243,22,164,83,177,115,84,58,46,151,22,134,2,111,68,187,160,229,242,193,210,244,145,235,196,85,73,173,223,180,27,101,135,51,112,36,5,70,217,128,110,12,248,61,150,45,119,193,230,172,18,180,95,30,1,175,188,218,120,232,92,192,255,34,59,130,78,96,149,233,103,244,217,187,137,22,199,83,173,159,79,127,62,5,32,60,189,113,8,107,168,64,35,153,139,83,18,245,229,223,197,204,136,215,252,165,108,83,225,26,183,70,155,10,32,115,61,38,168,8,122,143,179,154,61,66,102,26,82,216,193,241,236,147,249,98,131,114,213,38,67,59,7,225,192,185,80,168,20,89,116,188,161,243,5,196,23,224,223,53,32,106,154,135,66],s_box:[237,111,243,222,186,130,21,205,93,175,149,69,115,52,6,41,104,238,150,67,50,207,7,140,119,43,244,219,91,189,24,175,249,154,226,203,84,76,172,211,180,26,97,128,50,121,35,9,216,68,196,226,16,150,176,242,169,90,131,105,41,3,61,121,178,52,81,18,228,38,215,175,251,202,116,5,146,97,78,141,136,198,73,155,32,236,117,101,13,49,220,250,25,165,86,176,21,7,165,177,222,127,224,95,202,249,41,62,137,65,109,151,194,141,222,242,164,96,89,236,20,176,67,144,3,47,122,50,84,112,182,167,250,7,207,17,230,211,50,38,109,151,135,72,171,46,18,90,204,56,250,176,213,239,5,113,64,132,156,102,157,247,109,142,115,211,39,65,63,11,224,193,183,95,165,20,71,211,128,109,5,241,51,154,46,125,200,226,171,19,191,90,113,88,61,39,157,25,140,8,101,79,184,165,236,245,199,221,52,184,115,4,102,172,65,37,147,142,88,25,249,234,216,192,12,24,32,61,71,88,105,113,130,159,175,190,198,210,230,241,40,161,5,124,131,185,155,58,67,98,30,93,215,200,255,229],round_constants:[92,192,130,239,221,165,102,59,14,177,17,123,154,68,247,47,200,91,28,120,78,62,251,174,144,33,128,226,12,216,105,185,143,24,86,60,10,115,185,226,217,105,205,168,68,152,34,251,234,127,61,94,98,25,208,137,185,11,162,199,32,254,74,145,217,76,12,101,85,34,233,180,128,48,149,252,31,207,127,171,175,53,121,28,41,81,153,194,241,66,227,134,110,176,9,216,97,251,189,218,231,154,82,4,52,133,42,72,168,113,196,30,51,162,226,137,177,197,3,90,109,211,117,28,249,40,151,68,11,158,214,190,136,250,60,97,86,227,70,44,198,19,164,120,186,39,106,14,58,70,136,218,234,87,245,157,114,171,18,198,27,142,195,169,151,228,47,120,66,245,94,56,222,14,181,108,119,239,174,196,255,138,72,24,43,146,60,84,180,101,218,12,147,6,67,46,23,100,175,253,203,124,215,185,94,137,48,233,77,217,156,241,198,187,117,37,27,162,12,111,137,81,237,49,249,104,37,65,123,15,199,155,173,18,178,220,63,232,95,136,39,189,253,155,165,212,17,65,122,198,103,14,233,58,129,84],dict1:{0:`602ED000`,4:`7230645A`,8:`2274F1AE`,12:`6F801344`,16:`A3DD1A8B`,20:`EAB5C3F7`,24:`44099B86`,28:`6B87B779`,32:`33110EF8`,36:`4A0F389D`,40:`6E8E1846`,44:`3DD14557`,48:`A7D31E81`,52:`92F05933`,56:`BC96392A`,60:`C52A37AB`,64:`38DC73E1`,68:`C32D8BD2`,72:`55CC6D36`,76:`09AF57B2`,80:`B89C8A40`,84:`F148B8C2`,88:`B57C2D06`,92:`1E3BB283`,96:`FA45B3C7`,100:`6D21A131`,104:`31D86CD3`,108:`D3FD3BE2`,112:`239DE3F3`,116:`A112EB6C`,120:`2E9B5BCB`,124:`E3E156D6`,128:`7E6E36FC`,132:`4D0D040F`,136:`47434645`,140:`D9FF05A3`,144:`01C2F2E8`,148:`C6229D50`,152:`1733FE91`,156:`EFE0EAED`,160:`494F607B`,164:`BE7E7C98`,168:`83BD726A`,172:`F301D6E6`,176:`54A73E63`,180:`434D424A`,184:`E7E652D4`,188:`3AD56BD0`,192:`FC4614B3`,196:`32D024AA`,200:`2A7F16D9`,204:`00CB1F5D`,208:`89BF202B`,212:`703E6755`,216:`02C4115E`,220:`D45922FE`,224:`80EB3D09`,228:`DFF498D5`,232:`DD5D6FB9`,236:`51A8964B`,240:`8EBB6A42`,244:`53C1289C`,248:`2C73B056`,252:`8FB46E47`,256:`4C03070C`,260:`CA8F7EF4`,264:`5DA18075`,268:`9CF6EF0B`,272:`3CD64D52`,276:`BA950261`,280:`D85A26FD`,284:`A9DFB13A`,288:`BF707B99`,292:`71382CE3`,296:`CB2934A1`,300:`E1B8C8F2`,304:`B4978E43`,308:`0CC3C0A6`,312:`AFD4C690`,316:`90FE5030`,320:`E8BC1BC5`,324:`EEEEEEEE`,328:`57C6239F`,332:`8BB94F70`,336:`2793E8F0`,340:`4F442E67`,344:`1A6FAC4F`,348:`E6E8A059`,352:`39153F16`,356:`E0BEB5B1`,360:`5BC76534`,364:`8AEF888D`,368:`133DFA9B`,372:`153A1032`,376:`6427E692`,380:`0DCDC9A4`,384:`CE2B03EA`,388:`0BA9ED15`,392:`186AD869`,396:`B776638F`,400:`A01BA474`,404:`A6D2BF35`,408:`56C8770D`,412:`85BA4173`,416:`B371688C`,420:`658CB478`,424:`0EABDBFB`,428:`37160AF9`,432:`6C26AF3B`,436:`C92F9553`,440:`B2909F72`,444:`3F1082CF`,448:`87B37665`,452:`30DE27A5`,456:`1C63557E`,460:`F608E0A9`,464:`9658157F`,468:`756C091E`,472:`FE0EAEDE`,476:`84E90B96`,480:`42048538`,484:`1469D368`,488:`94F7A682`,492:`299FD712`,496:`36183114`,500:`1162AB4C`,504:`D6F20DA0`,508:`287ACEEF`,512:`EBE7D1AF`,516:`73619EC8`,520:`88EA0C94`,524:`1B391937`,528:`D05B791F`,532:`3B1790BD`,536:`ABD9F907`,540:`2D7DB954`,544:`AEDBC293`,548:`454A7123`,552:`AC13D52E`,556:`106BE424`,560:`D7F33CE7`,564:`59C5740E`,568:`766881B4`,572:`9B57C729`,576:`6381CC6E`,580:`9F50F364`,584:`79658FB6`,588:`81E2838E`,592:`6220D903`,596:`A4195348`,600:`ECB6F413`,604:`EDB1F710`,608:`DA5F4EC4`,612:`5CA6897A`,616:`9E5EF866`,620:`193FC10A`,624:`E5ECDFAC`,628:`6985FD2C`,632:`B678473D`,636:`CF2408E5`,640:`E4B71CCA`,644:`F905E9A8`,648:`955CC428`,652:`77669AC9`,656:`91F8DE9A`,660:`743748DB`,664:`86B22921`,668:`D1524AC6`,672:`5AA59241`,676:`0FA4DCF1`,680:`03ADA3C3`,684:`0ACFF6E9`,688:`9756BB4D`,692:`8DED943F`,696:`259AA5BA`,700:`F04EC511`,704:`7D3175A7`,708:`61285E8A`,712:`CD8D2F19`,716:`FF00AADD`,720:`682CE297`,724:`99551D7C`,728:`D5FA875B`,732:`A214A776`,736:`B975443E`,740:`82E43508`,744:`9351BC4E`,748:`BD913025`,752:`C7238CD7`,756:`DBF98451`,760:`C28440BC`,764:`4102339E`,768:`A5DAF002`,772:`9AF5DA95`,776:`5ECE4C88`,780:`AA1FEC6F`,784:`05AAE51A`,788:`E9E5A958`,792:`B09E9177`,796:`DEFB93DA`,800:`207BFFAD`,804:`04C9BADC`,808:`E2B0BDBB`,812:`400B8D39`,816:`2479CAEC`,820:`52A00F22`,824:`1F34B680`,828:`F240CD1B`,832:`5FC04B89`,836:`783C43D1`,840:`AD1DDD2D`,844:`58AC3A60`,848:`50AE0127`,852:`FB07515F`,856:`F706D2E4`,860:`F50C5F5C`,864:`F84CFBF5`,868:`7B67001D`,872:`6688F52F`,876:`7A352BE0`,880:`4E4B2A62`,884:`B198066B`,888:`08CABEDF`,892:`34D778EB`,896:`6A255A85`,900:`1632CF05`,904:`9DF1E101`,908:`46426971`,912:`2F945CC1`,916:`6786CB6D`,920:`BB772504`,924:`98FCA287`,928:`DC5361B8`,932:`1D6D5D7D`,936:`7C367DA2`,940:`3E1E86CC`,944:`480A9C84`,948:`8CE3973C`,952:`C48962CE`,956:`351C99BE`,960:`CC832118`,964:`FD4117B0`,968:`2692D417`,972:`C08B49BF`,976:`1264E726`,980:`F447FCFA`,984:`4B497F20`,988:`C1827AF6`,992:`2B99ADB5`,996:`7F6032FF`,1e3:`C88A66CD`,1004:`07A3A8C0`,1008:`D254701C`,1012:`217212D8`,1016:`06A254B7`,1020:`A81A5849`},dict2:{0:`00602ED0`,4:`5A723064`,8:`AE2274F1`,12:`446F8013`,16:`8BA3DD1A`,20:`F7EAB5C3`,24:`8644099B`,28:`796B87B7`,32:`F833110E`,36:`9D4A0F38`,40:`466E8E18`,44:`573DD145`,48:`81A7D31E`,52:`3392F059`,56:`2ABC9639`,60:`ABC52A37`,64:`E138DC73`,68:`D2C32D8B`,72:`3655CC6D`,76:`B209AF57`,80:`40B89C8A`,84:`C2F148B8`,88:`06B57C2D`,92:`831E3BB2`,96:`C7FA45B3`,100:`316D21A1`,104:`D331D86C`,108:`E2D3FD3B`,112:`F3239DE3`,116:`6CA112EB`,120:`CB2E9B5B`,124:`D6E3E156`,128:`FC7E6E36`,132:`0F4D0D04`,136:`45474346`,140:`A3D9FF05`,144:`E801C2F2`,148:`50C6229D`,152:`911733FE`,156:`EDEFE0EA`,160:`7B494F60`,164:`98BE7E7C`,168:`6A83BD72`,172:`E6F301D6`,176:`6354A73E`,180:`4A434D42`,184:`D4E7E652`,188:`D03AD56B`,192:`B3FC4614`,196:`AA32D024`,200:`D92A7F16`,204:`5D00CB1F`,208:`2B89BF20`,212:`55703E67`,216:`5E02C411`,220:`FED45922`,224:`0980EB3D`,228:`D5DFF498`,232:`B9DD5D6F`,236:`4B51A896`,240:`428EBB6A`,244:`9C53C128`,248:`562C73B0`,252:`478FB46E`,256:`0C4C0307`,260:`F4CA8F7E`,264:`755DA180`,268:`0B9CF6EF`,272:`523CD64D`,276:`61BA9502`,280:`FDD85A26`,284:`3AA9DFB1`,288:`99BF707B`,292:`E371382C`,296:`A1CB2934`,300:`F2E1B8C8`,304:`43B4978E`,308:`A60CC3C0`,312:`90AFD4C6`,316:`3090FE50`,320:`C5E8BC1B`,324:`EEEEEEEE`,328:`9F57C623`,332:`708BB94F`,336:`F02793E8`,340:`674F442E`,344:`4F1A6FAC`,348:`59E6E8A0`,352:`1639153F`,356:`B1E0BEB5`,360:`345BC765`,364:`8D8AEF88`,368:`9B133DFA`,372:`32153A10`,376:`926427E6`,380:`A40DCDC9`,384:`EACE2B03`,388:`150BA9ED`,392:`69186AD8`,396:`8FB77663`,400:`74A01BA4`,404:`35A6D2BF`,408:`0D56C877`,412:`7385BA41`,416:`8CB37168`,420:`78658CB4`,424:`FB0EABDB`,428:`F937160A`,432:`3B6C26AF`,436:`53C92F95`,440:`72B2909F`,444:`CF3F1082`,448:`6587B376`,452:`A530DE27`,456:`7E1C6355`,460:`A9F608E0`,464:`7F965815`,468:`1E756C09`,472:`DEFE0EAE`,476:`9684E90B`,480:`38420485`,484:`681469D3`,488:`8294F7A6`,492:`12299FD7`,496:`14361831`,500:`4C1162AB`,504:`A0D6F20D`,508:`EF287ACE`,512:`AFEBE7D1`,516:`C873619E`,520:`9488EA0C`,524:`371B3919`,528:`1FD05B79`,532:`BD3B1790`,536:`07ABD9F9`,540:`542D7DB9`,544:`93AEDBC2`,548:`23454A71`,552:`2EAC13D5`,556:`24106BE4`,560:`E7D7F33C`,564:`0E59C574`,568:`B4766881`,572:`299B57C7`,576:`6E6381CC`,580:`649F50F3`,584:`B679658F`,588:`8E81E283`,592:`036220D9`,596:`48A41953`,600:`13ECB6F4`,604:`10EDB1F7`,608:`C4DA5F4E`,612:`7A5CA689`,616:`669E5EF8`,620:`0A193FC1`,624:`ACE5ECDF`,628:`2C6985FD`,632:`3DB67847`,636:`E5CF2408`,640:`CAE4B71C`,644:`A8F905E9`,648:`28955CC4`,652:`C977669A`,656:`9A91F8DE`,660:`DB743748`,664:`2186B229`,668:`C6D1524A`,672:`415AA592`,676:`F10FA4DC`,680:`C303ADA3`,684:`E90ACFF6`,688:`4D9756BB`,692:`3F8DED94`,696:`BA259AA5`,700:`11F04EC5`,704:`A77D3175`,708:`8A61285E`,712:`19CD8D2F`,716:`DDFF00AA`,720:`97682CE2`,724:`7C99551D`,728:`5BD5FA87`,732:`76A214A7`,736:`3EB97544`,740:`0882E435`,744:`4E9351BC`,748:`25BD9130`,752:`D7C7238C`,756:`51DBF984`,760:`BCC28440`,764:`9E410233`,768:`02A5DAF0`,772:`959AF5DA`,776:`885ECE4C`,780:`6FAA1FEC`,784:`1A05AAE5`,788:`58E9E5A9`,792:`77B09E91`,796:`DADEFB93`,800:`AD207BFF`,804:`DC04C9BA`,808:`BBE2B0BD`,812:`39400B8D`,816:`EC2479CA`,820:`2252A00F`,824:`801F34B6`,828:`1BF240CD`,832:`895FC04B`,836:`D1783C43`,840:`2DAD1DDD`,844:`6058AC3A`,848:`2750AE01`,852:`5FFB0751`,856:`E4F706D2`,860:`5CF50C5F`,864:`F5F84CFB`,868:`1D7B6700`,872:`2F6688F5`,876:`E07A352B`,880:`624E4B2A`,884:`6BB19806`,888:`DF08CABE`,892:`EB34D778`,896:`856A255A`,900:`051632CF`,904:`019DF1E1`,908:`71464269`,912:`C12F945C`,916:`6D6786CB`,920:`04BB7725`,924:`8798FCA2`,928:`B8DC5361`,932:`7D1D6D5D`,936:`A27C367D`,940:`CC3E1E86`,944:`84480A9C`,948:`3C8CE397`,952:`CEC48962`,956:`BE351C99`,960:`18CC8321`,964:`B0FD4117`,968:`172692D4`,972:`BFC08B49`,976:`261264E7`,980:`FAF447FC`,984:`204B497F`,988:`F6C1827A`,992:`B52B99AD`,996:`FF7F6032`,1e3:`CDC88A66`,1004:`C007A3A8`,1008:`1CD25470`,1012:`D8217212`,1016:`B706A254`,1020:`49A81A58`},dict3:{0:`D000602E`,4:`645A7230`,8:`F1AE2274`,12:`13446F80`,16:`1A8BA3DD`,20:`C3F7EAB5`,24:`9B864409`,28:`B7796B87`,32:`0EF83311`,36:`389D4A0F`,40:`18466E8E`,44:`45573DD1`,48:`1E81A7D3`,52:`593392F0`,56:`392ABC96`,60:`37ABC52A`,64:`73E138DC`,68:`8BD2C32D`,72:`6D3655CC`,76:`57B209AF`,80:`8A40B89C`,84:`B8C2F148`,88:`2D06B57C`,92:`B2831E3B`,96:`B3C7FA45`,100:`A1316D21`,104:`6CD331D8`,108:`3BE2D3FD`,112:`E3F3239D`,116:`EB6CA112`,120:`5BCB2E9B`,124:`56D6E3E1`,128:`36FC7E6E`,132:`040F4D0D`,136:`46454743`,140:`05A3D9FF`,144:`F2E801C2`,148:`9D50C622`,152:`FE911733`,156:`EAEDEFE0`,160:`607B494F`,164:`7C98BE7E`,168:`726A83BD`,172:`D6E6F301`,176:`3E6354A7`,180:`424A434D`,184:`52D4E7E6`,188:`6BD03AD5`,192:`14B3FC46`,196:`24AA32D0`,200:`16D92A7F`,204:`1F5D00CB`,208:`202B89BF`,212:`6755703E`,216:`115E02C4`,220:`22FED459`,224:`3D0980EB`,228:`98D5DFF4`,232:`6FB9DD5D`,236:`964B51A8`,240:`6A428EBB`,244:`289C53C1`,248:`B0562C73`,252:`6E478FB4`,256:`070C4C03`,260:`7EF4CA8F`,264:`80755DA1`,268:`EF0B9CF6`,272:`4D523CD6`,276:`0261BA95`,280:`26FDD85A`,284:`B13AA9DF`,288:`7B99BF70`,292:`2CE37138`,296:`34A1CB29`,300:`C8F2E1B8`,304:`8E43B497`,308:`C0A60CC3`,312:`C690AFD4`,316:`503090FE`,320:`1BC5E8BC`,324:`EEEEEEEE`,328:`239F57C6`,332:`4F708BB9`,336:`E8F02793`,340:`2E674F44`,344:`AC4F1A6F`,348:`A059E6E8`,352:`3F163915`,356:`B5B1E0BE`,360:`65345BC7`,364:`888D8AEF`,368:`FA9B133D`,372:`1032153A`,376:`E6926427`,380:`C9A40DCD`,384:`03EACE2B`,388:`ED150BA9`,392:`D869186A`,396:`638FB776`,400:`A474A01B`,404:`BF35A6D2`,408:`770D56C8`,412:`417385BA`,416:`688CB371`,420:`B478658C`,424:`DBFB0EAB`,428:`0AF93716`,432:`AF3B6C26`,436:`9553C92F`,440:`9F72B290`,444:`82CF3F10`,448:`766587B3`,452:`27A530DE`,456:`557E1C63`,460:`E0A9F608`,464:`157F9658`,468:`091E756C`,472:`AEDEFE0E`,476:`0B9684E9`,480:`85384204`,484:`D3681469`,488:`A68294F7`,492:`D712299F`,496:`31143618`,500:`AB4C1162`,504:`0DA0D6F2`,508:`CEEF287A`,512:`D1AFEBE7`,516:`9EC87361`,520:`0C9488EA`,524:`19371B39`,528:`791FD05B`,532:`90BD3B17`,536:`F907ABD9`,540:`B9542D7D`,544:`C293AEDB`,548:`7123454A`,552:`D52EAC13`,556:`E424106B`,560:`3CE7D7F3`,564:`740E59C5`,568:`81B47668`,572:`C7299B57`,576:`CC6E6381`,580:`F3649F50`,584:`8FB67965`,588:`838E81E2`,592:`D9036220`,596:`5348A419`,600:`F413ECB6`,604:`F710EDB1`,608:`4EC4DA5F`,612:`897A5CA6`,616:`F8669E5E`,620:`C10A193F`,624:`DFACE5EC`,628:`FD2C6985`,632:`473DB678`,636:`08E5CF24`,640:`1CCAE4B7`,644:`E9A8F905`,648:`C428955C`,652:`9AC97766`,656:`DE9A91F8`,660:`48DB7437`,664:`292186B2`,668:`4AC6D152`,672:`92415AA5`,676:`DCF10FA4`,680:`A3C303AD`,684:`F6E90ACF`,688:`BB4D9756`,692:`943F8DED`,696:`A5BA259A`,700:`C511F04E`,704:`75A77D31`,708:`5E8A6128`,712:`2F19CD8D`,716:`AADDFF00`,720:`E297682C`,724:`1D7C9955`,728:`875BD5FA`,732:`A776A214`,736:`443EB975`,740:`350882E4`,744:`BC4E9351`,748:`3025BD91`,752:`8CD7C723`,756:`8451DBF9`,760:`40BCC284`,764:`339E4102`,768:`F002A5DA`,772:`DA959AF5`,776:`4C885ECE`,780:`EC6FAA1F`,784:`E51A05AA`,788:`A958E9E5`,792:`9177B09E`,796:`93DADEFB`,800:`FFAD207B`,804:`BADC04C9`,808:`BDBBE2B0`,812:`8D39400B`,816:`CAEC2479`,820:`0F2252A0`,824:`B6801F34`,828:`CD1BF240`,832:`4B895FC0`,836:`43D1783C`,840:`DD2DAD1D`,844:`3A6058AC`,848:`012750AE`,852:`515FFB07`,856:`D2E4F706`,860:`5F5CF50C`,864:`FBF5F84C`,868:`001D7B67`,872:`F52F6688`,876:`2BE07A35`,880:`2A624E4B`,884:`066BB198`,888:`BEDF08CA`,892:`78EB34D7`,896:`5A856A25`,900:`CF051632`,904:`E1019DF1`,908:`69714642`,912:`5CC12F94`,916:`CB6D6786`,920:`2504BB77`,924:`A28798FC`,928:`61B8DC53`,932:`5D7D1D6D`,936:`7DA27C36`,940:`86CC3E1E`,944:`9C84480A`,948:`973C8CE3`,952:`62CEC489`,956:`99BE351C`,960:`2118CC83`,964:`17B0FD41`,968:`D4172692`,972:`49BFC08B`,976:`E7261264`,980:`FCFAF447`,984:`7F204B49`,988:`7AF6C182`,992:`ADB52B99`,996:`32FF7F60`,1e3:`66CDC88A`,1004:`A8C007A3`,1008:`701CD254`,1012:`12D82172`,1016:`54B706A2`,1020:`5849A81A`},dict4:{0:`2ED00060`,4:`30645A72`,8:`74F1AE22`,12:`8013446F`,16:`DD1A8BA3`,20:`B5C3F7EA`,24:`099B8644`,28:`87B7796B`,32:`110EF833`,36:`0F389D4A`,40:`8E18466E`,44:`D145573D`,48:`D31E81A7`,52:`F0593392`,56:`96392ABC`,60:`2A37ABC5`,64:`DC73E138`,68:`2D8BD2C3`,72:`CC6D3655`,76:`AF57B209`,80:`9C8A40B8`,84:`48B8C2F1`,88:`7C2D06B5`,92:`3BB2831E`,96:`45B3C7FA`,100:`21A1316D`,104:`D86CD331`,108:`FD3BE2D3`,112:`9DE3F323`,116:`12EB6CA1`,120:`9B5BCB2E`,124:`E156D6E3`,128:`6E36FC7E`,132:`0D040F4D`,136:`43464547`,140:`FF05A3D9`,144:`C2F2E801`,148:`229D50C6`,152:`33FE9117`,156:`E0EAEDEF`,160:`4F607B49`,164:`7E7C98BE`,168:`BD726A83`,172:`01D6E6F3`,176:`A73E6354`,180:`4D424A43`,184:`E652D4E7`,188:`D56BD03A`,192:`4614B3FC`,196:`D024AA32`,200:`7F16D92A`,204:`CB1F5D00`,208:`BF202B89`,212:`3E675570`,216:`C4115E02`,220:`5922FED4`,224:`EB3D0980`,228:`F498D5DF`,232:`5D6FB9DD`,236:`A8964B51`,240:`BB6A428E`,244:`C1289C53`,248:`73B0562C`,252:`B46E478F`,256:`03070C4C`,260:`8F7EF4CA`,264:`A180755D`,268:`F6EF0B9C`,272:`D64D523C`,276:`950261BA`,280:`5A26FDD8`,284:`DFB13AA9`,288:`707B99BF`,292:`382CE371`,296:`2934A1CB`,300:`B8C8F2E1`,304:`978E43B4`,308:`C3C0A60C`,312:`D4C690AF`,316:`FE503090`,320:`BC1BC5E8`,324:`EEEEEEEE`,328:`C6239F57`,332:`B94F708B`,336:`93E8F027`,340:`442E674F`,344:`6FAC4F1A`,348:`E8A059E6`,352:`153F1639`,356:`BEB5B1E0`,360:`C765345B`,364:`EF888D8A`,368:`3DFA9B13`,372:`3A103215`,376:`27E69264`,380:`CDC9A40D`,384:`2B03EACE`,388:`A9ED150B`,392:`6AD86918`,396:`76638FB7`,400:`1BA474A0`,404:`D2BF35A6`,408:`C8770D56`,412:`BA417385`,416:`71688CB3`,420:`8CB47865`,424:`ABDBFB0E`,428:`160AF937`,432:`26AF3B6C`,436:`2F9553C9`,440:`909F72B2`,444:`1082CF3F`,448:`B3766587`,452:`DE27A530`,456:`63557E1C`,460:`08E0A9F6`,464:`58157F96`,468:`6C091E75`,472:`0EAEDEFE`,476:`E90B9684`,480:`04853842`,484:`69D36814`,488:`F7A68294`,492:`9FD71229`,496:`18311436`,500:`62AB4C11`,504:`F20DA0D6`,508:`7ACEEF28`,512:`E7D1AFEB`,516:`619EC873`,520:`EA0C9488`,524:`3919371B`,528:`5B791FD0`,532:`1790BD3B`,536:`D9F907AB`,540:`7DB9542D`,544:`DBC293AE`,548:`4A712345`,552:`13D52EAC`,556:`6BE42410`,560:`F33CE7D7`,564:`C5740E59`,568:`6881B476`,572:`57C7299B`,576:`81CC6E63`,580:`50F3649F`,584:`658FB679`,588:`E2838E81`,592:`20D90362`,596:`195348A4`,600:`B6F413EC`,604:`B1F710ED`,608:`5F4EC4DA`,612:`A6897A5C`,616:`5EF8669E`,620:`3FC10A19`,624:`ECDFACE5`,628:`85FD2C69`,632:`78473DB6`,636:`2408E5CF`,640:`B71CCAE4`,644:`05E9A8F9`,648:`5CC42895`,652:`669AC977`,656:`F8DE9A91`,660:`3748DB74`,664:`B2292186`,668:`524AC6D1`,672:`A592415A`,676:`A4DCF10F`,680:`ADA3C303`,684:`CFF6E90A`,688:`56BB4D97`,692:`ED943F8D`,696:`9AA5BA25`,700:`4EC511F0`,704:`3175A77D`,708:`285E8A61`,712:`8D2F19CD`,716:`00AADDFF`,720:`2CE29768`,724:`551D7C99`,728:`FA875BD5`,732:`14A776A2`,736:`75443EB9`,740:`E4350882`,744:`51BC4E93`,748:`913025BD`,752:`238CD7C7`,756:`F98451DB`,760:`8440BCC2`,764:`02339E41`,768:`DAF002A5`,772:`F5DA959A`,776:`CE4C885E`,780:`1FEC6FAA`,784:`AAE51A05`,788:`E5A958E9`,792:`9E9177B0`,796:`FB93DADE`,800:`7BFFAD20`,804:`C9BADC04`,808:`B0BDBBE2`,812:`0B8D3940`,816:`79CAEC24`,820:`A00F2252`,824:`34B6801F`,828:`40CD1BF2`,832:`C04B895F`,836:`3C43D178`,840:`1DDD2DAD`,844:`AC3A6058`,848:`AE012750`,852:`07515FFB`,856:`06D2E4F7`,860:`0C5F5CF5`,864:`4CFBF5F8`,868:`67001D7B`,872:`88F52F66`,876:`352BE07A`,880:`4B2A624E`,884:`98066BB1`,888:`CABEDF08`,892:`D778EB34`,896:`255A856A`,900:`32CF0516`,904:`F1E1019D`,908:`42697146`,912:`945CC12F`,916:`86CB6D67`,920:`772504BB`,924:`FCA28798`,928:`5361B8DC`,932:`6D5D7D1D`,936:`367DA27C`,940:`1E86CC3E`,944:`0A9C8448`,948:`E3973C8C`,952:`8962CEC4`,956:`1C99BE35`,960:`832118CC`,964:`4117B0FD`,968:`92D41726`,972:`8B49BFC0`,976:`64E72612`,980:`47FCFAF4`,984:`497F204B`,988:`827AF6C1`,992:`99ADB52B`,996:`6032FF7F`,1e3:`8A66CDC8`,1004:`A3A8C007`,1008:`54701CD2`,1012:`7212D821`,1016:`A254B706`,1020:`1A5849A8`},dict5:{0:`80`,1:`33`,2:`BC`,3:`29`,4:`67`,5:`1C`,6:`12`,7:`47`,8:`5F`,9:`F2`,10:`2C`,11:`F3`,12:`6A`,13:`FB`,14:`05`,15:`A8`,16:`CD`,17:`55`,18:`D3`,19:`64`,20:`3F`,21:`39`,22:`63`,23:`5A`,24:`3C`,25:`3B`,26:`BD`,27:`25`,28:`A0`,29:`90`,30:`EB`,31:`A4`,32:`68`,33:`B8`,34:`E3`,35:`4F`,36:`37`,37:`E8`,38:`DA`,39:`E4`,40:`5D`,41:`76`,42:`41`,43:`74`,44:`18`,45:`E1`,46:`AE`,47:`B6`,48:`97`,49:`13`,50:`1A`,51:`09`,52:`2D`,53:`31`,54:`0C`,55:`93`,56:`9F`,57:`65`,58:`86`,59:`FF`,60:`73`,61:`ED`,62:`C9`,63:`71`,64:`BF`,65:`B3`,66:`B2`,67:`10`,68:`F1`,69:`88`,70:`91`,71:`79`,72:`7D`,73:`0D`,74:`AF`,75:`19`,76:`38`,77:`99`,78:`27`,79:`F0`,80:`F9`,81:`EE`,82:`E6`,83:`6D`,84:`AB`,85:`A1`,86:`CB`,87:`DB`,88:`E5`,89:`B7`,90:`D1`,91:`82`,92:`D7`,93:`EC`,94:`0E`,95:`9C`,96:`D2`,97:`24`,98:`B0`,99:`46`,100:`84`,101:`7C`,102:`53`,103:`66`,104:`4D`,105:`4A`,106:`4B`,107:`58`,108:`30`,109:`EF`,110:`92`,111:`DF`,112:`43`,113:`11`,114:`14`,115:`6B`,116:`AA`,117:`72`,118:`4E`,119:`32`,120:`C8`,121:`BB`,122:`BE`,123:`D4`,124:`E2`,125:`C0`,126:`48`,127:`F7`,128:`50`,129:`2F`,130:`35`,131:`E9`,132:`3D`,133:`A5`,134:`49`,135:`CC`,136:`2A`,137:`D6`,138:`34`,139:`F4`,140:`22`,141:`51`,142:`42`,143:`E7`,144:`69`,145:`59`,146:`45`,147:`85`,148:`8B`,149:`0B`,150:`C7`,151:`CA`,152:`03`,153:`B5`,154:`5C`,155:`A9`,156:`5B`,157:`77`,158:`23`,159:`D5`,160:`FC`,161:`60`,162:`EA`,163:`28`,164:`C4`,165:`96`,166:`26`,167:`01`,168:`F8`,169:`40`,170:`70`,171:`3A`,172:`DC`,173:`08`,174:`5E`,175:`07`,176:`83`,177:`94`,178:`F6`,179:`44`,180:`04`,181:`A7`,182:`78`,183:`8E`,184:`21`,185:`98`,186:`D9`,187:`02`,188:`52`,189:`7F`,190:`16`,191:`F5`,192:`4C`,193:`CE`,194:`A6`,195:`9B`,196:`2E`,197:`D0`,198:`95`,199:`62`,200:`B9`,201:`8A`,202:`BA`,203:`CF`,204:`FA`,205:`C2`,206:`57`,207:`0A`,208:`AD`,209:`9D`,210:`3E`,211:`1F`,212:`C5`,213:`20`,214:`7E`,215:`2B`,216:`89`,217:`75`,218:`7A`,219:`06`,220:`A3`,221:`8F`,222:`87`,223:`C6`,224:`9E`,225:`AC`,226:`1B`,227:`56`,228:`E0`,229:`6C`,230:`61`,231:`B4`,232:`8D`,233:`1E`,234:`81`,235:`D8`,236:`15`,237:`0F`,238:`C3`,239:`A2`,240:`FD`,241:`9A`,242:`DE`,243:`1D`,244:`FE`,245:`8C`,246:`DD`,247:`B1`,248:`54`,249:`6F`,250:`C1`,251:`7B`,252:`36`,253:`17`,254:`6E`,255:`00`},input_arr:[0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15,32,34,33,35,36,38,37,39,40,42,41,43,44,46,45,47,16,18,17,19,20,22,21,23,24,26,25,27,28,30,29,31,48,50,49,51,52,54,53,55,56,58,57,59,60,62,61,63,64,66,65,67,68,70,69,71,72,74,73,75,76,78,77,79,96,98,97,99,100,102,101,103,104,106,105,107,108,110,109,111,80,82,81,83,84,86,85,87,88,90,89,91,92,94,93,95,112,114,113,115,116,118,117,119,120,122,121,123,124,126,125,127,128,130,129,131,132,134,133,135,136,138,137,139,140,142,141,143,160,162,161,163,164,166,165,167,168,170,169,171,172,174,173,175,144,146,145,147,148,150,149,151,152,154,153,155,156,158,157,159,176,178,177,179,180,182,181,183,184,186,185,187,188,190,189,191,192,194,193,195,196,198,197,199,200,202,201,203,204,206,205,207,224,226,225,227,228,230,229,231,232,234,233,235,236,238,237,239,208,210,209,211,212,214,213,215,216,218,217,219,220,222,221,223,240,242,241,243,244,246,245,247,248,250,249,251,252,254,253,255],iv_arr:[0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15,32,34,33,35,36,38,37,39,40,42,41,43,44,46,45,47,16,18,17,19,20,22,21,23,24,26,25,27,28,30,29,31,48,50,49,51,52,54,53,55,56,58,57,59,60,62,61,63,64,66,65,67,68,70,69,71,72,74,73,75,76,78,77,79,96,98,97,99,100,102,101,103,104,106,105,107,108,110,109,111,80,82,81,83,84,86,85,87,88,90,89,91,92,94,93,95,112,114,113,115,116,118,117,119,120,122,121,123,124,126,125,127,128,130,129,131,132,134,133,135,136,138,137,139,140,142,141,143,160,162,161,163,164,166,165,167,168,170,169,171,172,174,173,175,144,146,145,147,148,150,149,151,152,154,153,155,156,158,157,159,176,178,177,179,180,182,181,183,184,186,185,187,188,190,189,191,192,194,193,195,196,198,197,199,200,202,201,203,204,206,205,207,224,226,225,227,228,230,229,231,232,234,233,235,236,238,237,239,208,210,209,211,212,214,213,215,216,218,217,219,220,222,221,223,240,242,241,243,244,246,245,247,248,250,249,251,252,254,253,255],out_arr:[102,100,103,101,98,96,99,97,110,108,111,109,106,104,107,105,70,68,71,69,66,64,67,65,78,76,79,77,74,72,75,73,118,116,119,117,114,112,115,113,126,124,127,125,122,120,123,121,86,84,87,85,82,80,83,81,94,92,95,93,90,88,91,89,38,36,39,37,34,32,35,33,46,44,47,45,42,40,43,41,6,4,7,5,2,0,3,1,14,12,15,13,10,8,11,9,54,52,55,53,50,48,51,49,62,60,63,61,58,56,59,57,22,20,23,21,18,16,19,17,30,28,31,29,26,24,27,25,230,228,231,229,226,224,227,225,238,236,239,237,234,232,235,233,198,196,199,197,194,192,195,193,206,204,207,205,202,200,203,201,246,244,247,245,242,240,243,241,254,252,255,253,250,248,251,249,214,212,215,213,210,208,211,209,222,220,223,221,218,216,219,217,166,164,167,165,162,160,163,161,174,172,175,173,170,168,171,169,134,132,135,133,130,128,131,129,142,140,143,141,138,136,139,137,182,180,183,181,178,176,179,177,190,188,191,189,186,184,187,185,150,148,151,149,146,144,147,145,158,156,159,157,154,152,155,153]}),Nm)}window.getLAESInstance=Pm;var Fm=`10.12.0`,Im=`101_1_1.0`,Lm=`21210`,Rm=`com.zhihu.android`,zm=class{constructor({encryptData:e,loginData:t,zsts:n={},defaultHeaders:r={}}){if(typeof e!=`function`)throw Error(`必须提供 encryptData 加密函数`);if(console.log(`BindLoginData:`,t),this.udid=t.udid,!this.udid)throw Error(`提供 loginData 缺少 udid，请先使用游客登录获取 udid`);t=t.guest||t,this.accessToken=`Bearer `+t.access_token,this.cookie=Object.entries(t.cookie||{}).filter(([e,t])=>t).map(([e,t])=>`${e}=${t}`).join(`; `);let[i,a]=Array.isArray(n)?n:[];this.zst81=a,this.zst82=i,this.encryptData=e.bind(this);let o=`OS=Android&Release=15&Model=Pixel&VersionName=10.12.0&VersionCode=${Lm}&Product=com.zhihu.android&Installer=Google+Play&DeviceType=AndroidPhone`,s=`${Rm}/Futureve/${Fm} Mozilla/5.0 (Linux; Android; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.1000.10 Mobile Safari/537.36`;this.commonDefaultHeaders={"User-Agent":s,"x-Zse-93":Im,...this.cookie&&{Cookie:this.cookie},...this.accessToken&&{Authorization:this.accessToken},...this.udid&&{"x-udid":this.udid},...this.zst81&&{"X-ZST-81":this.zst81},...this.zst82&&{"X-ZST-82":this.zst82},...r},this.appSpecificHeaders={"x-api-version":`3.0.93`,"x-app-version":Fm,"x-app-za":o,"x-app-bundleid":Rm,"x-app-flavor":`play`,"x-app-build":`release`},this.defaultHeaders={...this.commonDefaultHeaders,...this.appSpecificHeaders}}async request(e,t,n={},{headers:r={},encryptBody:i=!0,isWWW:a=!1}={}){e=e.toUpperCase();let o=e===`GET`,s=this.commonDefaultHeaders;a||(s=this.defaultHeaders);let c={...s,...r,...o&&{"x-Zse-96":`1.0_${this.encryptData(t)}`}},l=null;!o&&n&&(l=!n||Object.keys(n).length===0?``:i?this.encryptData(n,!0):JSON.stringify(n),c[`Content-Type`]=i?`application/x-www-form-urlencoded`:`application/json`);try{console.log(`[ZhihuRequest] ${e} ${t}`);let n=await jm(t,{method:e,headers:c,body:l});if(!n.ok){let e=Error(`HTTP ${n.status}`);throw e.response=n,e}return n.json()}catch(n){throw console.error(`[ZhihuRequest] ${e} ${t} failed:`,n),n}}get(e,t){return this.request(`GET`,e,null,t)}post(e,t,n){return this.request(`POST`,e,t,n)}patch(e,t,n){return this.request(`PATCH`,e,t,n)}put(e,t,n){return this.request(`PUT`,e,t,n)}delete(e,t){return this.request(`DELETE`,e,null,t)}},Bm=null,Vm=Pm();function Hm({loginData:e,zsts:t,defaultHeaders:n}){let r=Vm.createEncryptor(`541a3a5896fbefd351917c8251328a236a7efbf27d0fad8283ef59ef07aa386dbb2b1fcbba167135d575877ba0205a02f0aac2d31957bc7f028ed5888d4bbe69ed6768efc15ab703dc0f406b301845a0a64cf3c427c82870053bd7ba6721649c3a9aca8c3c31710a6be5ce71e4686842732d9314d6898cc3fdca075db46d1ccf3a7f9b20615f4a303c5235bd02c5cdc791eb123b9d9f7e72e954de3bcbf7d314064a1eced78d13679d040dd4080640d18c37bbde`,[102,48,53,53,49,56,53,54,97,97,53,55,53,102,97,97]);function i(e,t=!1){if(!t&&typeof e!=`string`)throw Error(`URL data must be a string`);if(t&&typeof e!=`string`)throw Error(`Form data must be a string`);if(t)e=btoa(encodeURIComponent(e));else{let t=`https://api.zhihu.com`;if(e.startsWith(`http://api.zhihu.com`)&&(e=e.replace(`http://`,`https://`)),!e.startsWith(t))throw Error(`URL must start with ${t}`);e=`${Im}+${e.slice(21)}+${Fm}+${this.accessToken}+${this.udid}`,e=md5(e)}return r(e)}return e||(e={udid:`UraTB9TKRhtLBYAOB4UmHKrPn18Tg811TFQ=`,guest:{access_token:`gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ==`,token_type:`bearer`,user_type:`guest`,id:`30f6dfae636d89c2078c6c0676a2929f`,uid:0x1b46cad40d13e400,push_channel:`pm_n_4c16eb12348347b7ad35126bb50e61d4`,URL:``,cookie:{q_c0:``,z_c0:`gt2.0AAAAAI9lh-cbRsrUB5O2UgAAAAxNVQJgAgC0JjzaArWyMX2KTozuYn71fSF1hQ==`},created_at:0}},t=[`2.0IeUTj9TKRhsMAAAASwUAADIuMPui_GgAAAAAngWRhxBicaoZtrn_UBY16lmTsmU=`,`2uSTcNTKRhsbYMgVuWpD4QRnkRP48-uihQ9CAA==`],n={"x-ms-id":`DUzQXhjAQDuNnnrXUZuXcZAHclw7VipDNE79RFV6UVhoakFRRHVObm5yWFVadVhjWkFIY2x3N1ZpcERORTc5c2h1`}),Bm=new zm({encryptData:i,loginData:e,zsts:t,defaultHeaders:n}),window.$zhihu=Bm,console.log(`ZhihuRequest 已全局初始化`),Bm}function Um(){return Bm}var Wm=class e{constructor(e,t,n){this.data=e,this.paging=t||{next:null,prev:null},this.options=n}async next(){if(!this.paging.next)return null;let t=await Um().get(this.paging.next,this.options);return new e(t.data,t.paging,this.options)}async prev(){if(!this.paging.prev)return null;let t=await Um().get(this.paging.prev,this.options);return new e(t.data,t.paging,this.options)}},Gm={get(e,t={}){return Um().get(e,t).then(e=>new Wm(e.data,e.paging,t))},post(e,t={},n={}){return Um().post(e,t,n).then(e=>e.data)},patch(e,t={},n={}){return Um().patch(e,t,n).then(e=>e.data)},put(e,t={},n={}){return Um().put(e,t,n).then(e=>e.data)},delete(e,t={}){return Um().delete(e,t).then(e=>e.data)}},Km=[`showed`],qm={class:`comments-container`},Jm={class:`header`},Ym={key:0,class:`header-left`},Xm={class:`title`},Zm={key:1,class:`header-left`},Qm={class:`title`},$m={class:`scroll-view`},eh={key:0,class:`replies-view`},th={class:`comment-item main-comment`},nh=[`src`],rh={class:`comment-content`},ih={class:`comment-header`},ah={class:`username`},oh={class:`timestamp`},sh={class:`text`},ch={class:`comments-list replies-container`},lh=[`src`],uh={class:`comment-content`},dh={class:`comment-header`},fh={class:`user-info`},ph={class:`username`},mh={key:0,class:`reply-badge`},hh={class:`timestamp`},gh={class:`text`},_h={class:`actions`},vh=[`onClick`],yh=[`onClick`],bh={key:0,class:`loading-spinner`},xh={key:1},Sh={key:0,class:`loading-state`},Ch={key:1,class:`error-state`},wh={key:2,class:`empty-state`},Th={key:3,class:`comments-list`},Eh=[`src`],Dh={class:`comment-content`},Oh={class:`comment-header`},kh={class:`user-info`},Ah={class:`username`},jh={key:0,class:`location-badge`},Mh={class:`timestamp`},Nh={class:`text`},Ph={class:`actions`},Fh=[`onClick`],Ih=[`onClick`],Lh={key:0,class:`replies-toggle`},Rh=[`onClick`],zh={key:0,class:`text-center mt-4`},Bh=[`disabled`],Vh={key:0,class:`loading-spinner mr-2`},Hh={class:`footer`},Uh={key:0,class:`reply-context`},Wh=[`label`],Gh={type:`filled`,class:`send-btn`,slot:`end`},Kh=$({__name:`CommentsSheet`,props:{modelValue:Boolean,resourceType:{type:String,required:!0},resourceId:{type:[String,Number],required:!0}},emits:[`update:modelValue`,`reply`,`like`],setup(e,{emit:t}){let n=e,r=t,i=N([]),a=N(0),o=N(null),s=N(!1),c=N(null),l=N(null),u=N(``),d=N(null),f=N(!1),p=e=>{let t=e.replies_count||e.child_comment_count||0;return{id:e.id,author_name:e.author?.member?.name||`匿名用户`,author_avatar:e.author?.member?.avatar_url,ip_location:e.address_text||null,content:e.content,like_count:e.vote_count||0,created_time:new Date(e.created_time*1e3).toLocaleDateString(),replies_count:t,reply_to_author:e.reply_to_author?.member?.name||null,child_result:null,child_comments:[],child_comments_loading:!1}},m=e=>e===`p`?`articles`:e===`answer`?`answers`:e,h=async(e=!1)=>{if(!s.value){s.value=!0,c.value=null;try{let t;if(e&&o.value)t=await o.value.next();else{let e=`https://api.zhihu.com/${m(n.resourceType)}/${n.resourceId}/comments?limit=20&order=normal`;t=await Gm.get(e)}if(!t){s.value=!1;return}let r=t.data.map(p);e?i.value.push(...r):(i.value=r,a.value=t.paging?.totals||t.data.length),o.value=t}catch(e){console.error(`Failed to load comments:`,e),c.value=`评论加载失败`}finally{s.value=!1}}},g=async e=>{d.value=e,e.replies_count>0&&(f.value=!0,await v(e),f.value=!1)},_=()=>{d.value&&(d.value.child_comments=[]),d.value=null},v=async(e,t=!1)=>{if(!e.child_comments_loading){e.child_comments_loading=!0;try{let n;if(t&&e.child_result)n=await e.child_result.next();else{let t=`https://api.zhihu.com/comments/${e.id}/replies?limit=20`;n=await Gm.get(t),n.data.length>0&&n.data[0].id==e.id&&(n.data=n.data.slice(1))}if(!n){e.child_comments_loading=!1;return}let r=n.data.map(p);t?e.child_comments.push(...r):e.child_comments=r,e.child_result=n}catch(e){console.error(`Failed to load child comments:`,e)}finally{e.child_comments_loading=!1}}},y=()=>{r(`update:modelValue`,!1)},b=e=>{l.value=e.author_name},x=()=>{l.value=null,u.value=``};return Wr(()=>n.modelValue,e=>{e&&(i.value=[],a.value=0,o.value=null,c.value=null,d.value=null,l.value=null,u.value=``,n.resourceType&&n.resourceId&&h())}),(t,n)=>(z(),B(`s-dialog`,{showed:e.modelValue,onClose:y},[n[7]||=V(`div`,{slot:`trigger`,style:{display:`none`}},null,-1),V(`div`,qm,[V(`div`,Jm,[d.value?(z(),B(`div`,Ym,[V(`s-icon-button`,{onClick:_},[H(Q,{icon:`arrow_back`})]),V(`span`,Xm,`评论回复 (`+D(d.value.replies_count)+`)`,1)])):(z(),B(`div`,Zm,[V(`span`,Qm,D(a.value)+` 条评论`,1)])),V(`s-icon-button`,{onClick:y},[H(Q,{icon:`close`})])]),V(`s-scroll-view`,$m,[d.value?(z(),B(`div`,eh,[V(`div`,th,[V(`img`,{src:d.value.author_avatar,class:`avatar`,onerror:`this.src='https://placehold.co/40x40/6366f1/ffffff?text=U'`},null,8,nh),V(`div`,rh,[V(`div`,ih,[V(`span`,ah,D(d.value.author_name),1),V(`span`,oh,D(d.value.created_time),1)]),V(`p`,sh,D(d.value.content),1)])]),n[4]||=V(`div`,{class:`replies-label`},`全部回复`,-1),V(`div`,ch,[(z(!0),B(R,null,I(d.value.child_comments,e=>(z(),B(`div`,{key:e.id,class:`comment-item`},[V(`img`,{src:e.author_avatar,class:`avatar small`,onerror:`this.src='https://placehold.co/30x30/6366f1/ffffff?text=U'`},null,8,lh),V(`div`,uh,[V(`div`,dh,[V(`div`,fh,[V(`span`,ph,D(e.author_name),1),e.reply_to_author?(z(),B(`span`,mh,[H(Q,{icon:`arrow_right`,size:14}),U(` `+D(e.reply_to_author),1)])):W(``,!0)]),V(`span`,hh,D(e.created_time),1)]),V(`p`,gh,D(e.content),1),V(`div`,_h,[V(`button`,{class:`action-btn`,onClick:t=>r(`like`,e.id)},[H(Q,{icon:`thumb_up`,size:16}),U(` `+D(e.like_count),1)],8,vh),V(`button`,{class:`action-btn`,onClick:t=>b(e)},[H(Q,{icon:`chat_bubble`,size:16}),n[3]||=U(` 回复 `,-1)],8,yh)])])]))),128)),d.value.child_result?.paging?.next?(z(),B(`button`,{key:0,class:`load-more-btn`,onClick:n[0]||=e=>v(d.value,!0)},[d.value.child_comments_loading?(z(),B(`span`,bh,[H(Q,{icon:`progress_activity`,size:16,class:`spin`})])):W(``,!0),U(` `+D(d.value.child_comments_loading?`正在加载...`:`加载更多回复...`),1)])):W(``,!0)])])):(z(),B(`div`,xh,[s.value&&i.value.length===0?(z(),B(`div`,Sh,[H(Q,{icon:`progress_activity`,size:24,class:`spin primary-color`}),n[5]||=U(` 正在加载评论... `,-1)])):c.value?(z(),B(`div`,Ch,[H(Q,{icon:`error`,size:24}),U(` `+D(c.value),1)])):i.value.length===0?(z(),B(`div`,wh,` 暂无评论，快来抢沙发吧~ `)):(z(),B(`div`,Th,[(z(!0),B(R,null,I(i.value,e=>(z(),B(`div`,{key:e.id,class:`comment-item`},[V(`img`,{src:e.author_avatar,class:`avatar`,onerror:`this.src='https://placehold.co/40x40/6366f1/ffffff?text=U'`},null,8,Eh),V(`div`,Dh,[V(`div`,Oh,[V(`div`,kh,[V(`span`,Ah,D(e.author_name),1),e.ip_location?(z(),B(`span`,jh,[H(Q,{icon:`location_on`,size:14}),U(` `+D(e.ip_location),1)])):W(``,!0)]),V(`span`,Mh,D(e.created_time),1)]),V(`p`,Nh,D(e.content),1),V(`div`,Ph,[V(`button`,{class:`action-btn`,onClick:t=>r(`like`,e.id)},[H(Q,{icon:`thumb_up`,size:16}),U(` `+D(e.like_count),1)],8,Fh),V(`button`,{class:`action-btn`,onClick:t=>b(e)},[H(Q,{icon:`chat_bubble`,size:16}),n[6]||=U(` 回复 `,-1)],8,Ih)]),e.replies_count>0?(z(),B(`div`,Lh,[V(`button`,{class:`toggle-btn`,onClick:t=>g(e)},[U(` 查看全部 `+D(e.replies_count)+` 条回复 `,1),H(Q,{icon:`chevron_right`,size:16})],8,Rh)])):W(``,!0)])]))),128)),o.value?.paging?.next?(z(),B(`div`,zh,[V(`button`,{class:`load-more-btn`,disabled:s.value,onClick:n[1]||=e=>h(!0)},[s.value?(z(),B(`span`,Vh,[H(Q,{icon:`progress_activity`,size:16,class:`spin`})])):W(``,!0),U(` `+D(s.value?`正在加载更多评论...`:`加载更多评论`),1)],8,Bh)])):W(``,!0)]))]))]),V(`div`,Hh,[l.value?(z(),B(`div`,Uh,[V(`span`,null,`回复: @`+D(l.value),1),V(`button`,{onClick:x,class:`close-reply`},[H(Q,{icon:`close`,size:16})])])):W(``,!0),kn(V(`s-text-field`,{label:l.value?`回复 ${l.value}...`:`友善评论，精彩互动...`,"onUpdate:modelValue":n[2]||=e=>u.value=e,class:`input-field`},[V(`s-icon-button`,Gh,[H(Q,{icon:`send`,size:18})])],8,Wh),[[_o,u.value]])])])],40,Km))}},[[`__scopeId`,`data-v-b337231f`]]),qh={class:`article-detail`},Jh={key:0,class:`loading-container`},Yh={class:`top-bar glass`},Xh={class:`left-actions`},Zh={class:`article-title`},Qh={class:`right-actions`},$h={key:0,class:`toc-popover glass`},eg={class:`toc-list`},tg=[`onClick`],ng={class:`main-scroll`},rg={key:0,class:`hero-image-container`},ig=[`src`],ag={class:`content-wrapper`},og=[`src`],sg={class:`card-info`},cg={class:`card-name`},lg={key:0,class:`toc-card`},ug=[`onClick`],dg={key:1,class:`image-gallery`},fg=[`value`],pg={class:`bottom-float-container`},mg={class:`float-bar glass`},hg={class:`action-group`},gg={class:`action-count`},_g={class:`action-count`},vg=$({__name:`ArticleDetail`,setup(e){let t=wp(),n=Cp(),r=N(null),i=N(!0),a=N(!1),o=N(!1),s=N([]),c=N(!1);N(null);let l=N([]),u=N(0),{type:d,id:f}=t.params,p=K(()=>s.value.length<=3||c.value?s.value:s.value.slice(0,3)),m=async()=>{i.value=!0;try{let e=d===`p`?`article`:d,t=await $zhihu.get(`https://api.zhihu.com/${e}s/v2/${f}`),n=t.structured_content?.segments?[...t.structured_content.segments]:[];t.relationship_tips&&n.unshift({type:`myapptip`,myapptip:{text:t.relationship_tips.text}}),t.video&&n.unshift({type:`video`,video:{id:t.video.attachment_id,title:t.video.title}});let i=`未知`,a=t.content_end_info;a&&(i=a.update_time_text||a.create_time_text||`未知`,a.ip_info&&(i+=` · ${a.ip_info}`)),n.push({type:`myapptip`,myapptip:{text:i}});let o={id:t.id,title:t.header?.text||`无标题`,author:t.author?.fullname||`匿名用户`,authorId:t.author?.id,avatarUrl:t.author.avatar?.avatar_image?.day||``,imageUrl:t.image_url||t.title_image||``,structured_content:n,content:t.content||``,metrics:{votes:t.reaction.statistics.up_vote_count||0,comments:t.reaction.statistics.comment_count||0}};d===`p`&&(s.value=h(n)),t.image_list?.images&&(l.value=t.image_list.images),r.value=o}catch(e){console.error(`Failed to fetch article`,e)}finally{i.value=!1}},h=e=>{let t=[];return e.forEach((e,n)=>{e.type===`heading`&&e.heading?.text&&t.push({id:`heading-${n}`,text:e.heading.text})}),t},g=e=>e?e>1e3?`${(e/1e3).toFixed(1)}k`:e:0,_=e=>{o.value=!1,_n(()=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})})};return $n(()=>{f&&m()}),(e,t)=>(z(),B(`div`,qh,[i.value?(z(),B(`div`,Jh,[...t[6]||=[V(`s-circular-progress`,{indeterminate:`true`},null,-1)]])):r.value?(z(),B(R,{key:1},[V(`div`,Yh,[V(`div`,Xh,[V(`s-icon-button`,{onClick:t[0]||=e=>Yt(n).back()},[H(Q,{icon:`arrow_back`})]),V(`span`,Zh,D(r.value.title),1)]),V(`div`,Qh,[V(`s-icon-button`,null,[H(Q,{icon:`more_horiz`})])])]),o.value?(z(),B(`s-card`,$h,[t[7]||=V(`div`,{class:`toc-title`},`目录`,-1),V(`s-scroll-view`,eg,[(z(!0),B(R,null,I(s.value,e=>(z(),B(`div`,{key:e.id,class:`toc-item`,onClick:t=>_(e.id)},D(e.text),9,tg))),128))])])):W(``,!0),V(`s-scroll-view`,ng,[r.value.imageUrl?(z(),B(`div`,rg,[V(`img`,{src:r.value.imageUrl,class:`hero-image`},null,8,ig),t[8]||=V(`div`,{class:`hero-gradient`},null,-1)])):W(``,!0),V(`div`,ag,[V(`s-card`,{clickable:`true`,onClick:t[1]||=e=>Yt(n).push(`/user/${r.value.authorId}`),class:`author-card`},[V(`img`,{src:r.value.avatarUrl,class:`card-avatar`},null,8,og),V(`div`,sg,[V(`div`,cg,D(r.value.author),1),t[9]||=V(`div`,{class:`card-desc`},`知乎用户`,-1)])]),s.value.length>0?(z(),B(`s-card`,lg,[t[10]||=V(`div`,{class:`toc-header`},`目录`,-1),(z(!0),B(R,null,I(p.value,e=>(z(),B(`div`,{key:e.id,class:`toc-link`,onClick:t=>_(e.id)},D(e.text),9,ug))),128)),s.value.length>3?(z(),B(`div`,{key:0,class:`toc-toggle`,onClick:t[2]||=e=>c.value=!c.value},[V(`span`,null,D(c.value?`收起`:`展开更多`),1),H(Q,{icon:c.value?`expand_less`:`expand_more`,class:`toggle-icon`},null,8,[`icon`])])):W(``,!0)])):W(``,!0),H(km,{segments:r.value.structured_content},null,8,[`segments`]),l.value.length>0?(z(),B(`div`,dg,[kn(V(`s-carousel`,{"onUpdate:modelValue":t[3]||=e=>u.value=e},[(z(!0),B(R,null,I(l.value,(e,t)=>(z(),B(`s-carousel-item`,{key:t,value:t,style:E({backgroundImage:`url(${e.url})`,backgroundSize:`contain`,backgroundRepeat:`no-repeat`,backgroundPosition:`center`})},null,12,fg))),128))],512),[[_o,u.value,void 0,{lazy:!0}]])])):W(``,!0)])]),V(`div`,pg,[V(`div`,mg,[V(`div`,hg,[V(`s-icon-button`,null,[H(Q,{icon:`thumb_up`,size:20})]),V(`span`,gg,D(g(r.value.metrics.votes)),1)]),t[11]||=V(`div`,{class:`vertical-divider`},null,-1),V(`div`,{class:`action-group`,onClick:t[4]||=e=>a.value=!0},[V(`s-icon-button`,null,[H(Q,{icon:`chat_bubble`,size:20})]),V(`span`,_g,D(g(r.value.metrics.comments)),1)]),t[12]||=V(`div`,{class:`vertical-divider`},null,-1),V(`s-icon-button`,null,[H(Q,{icon:`bookmark`,size:20})]),V(`s-icon-button`,null,[H(Q,{icon:`share`,size:20})])])]),H(Kh,{modelValue:a.value,"onUpdate:modelValue":t[5]||=e=>a.value=e,resourceId:Yt(f),resourceType:Yt(d)},null,8,[`modelValue`,`resourceId`,`resourceType`])],64)):W(``,!0)]))}},[[`__scopeId`,`data-v-3b0adbc3`]]),yg={class:`title`},bg={class:`excerpt`},xg={class:`footer`},Sg=$({__name:`FeedCard`,props:{item:Object,isThought:Boolean},emits:[`click`,`userClick`],setup(e){return(t,n)=>(z(),B(`s-card`,{class:`feed-card`,clickable:!0,onClick:n[0]||=n=>t.$emit(`click`,e.item)},[V(`div`,yg,D(e.item.title),1),V(`div`,bg,D(e.item.excerpt),1),V(`div`,xg,D(e.item.target?.author?.name??`未知作者`)+` · `+D(e.item.metrics.likes)+` 赞同 `+D(e.item.metrics.comments)+` 评论`,1)]))}},[[`__scopeId`,`data-v-426a965f`]]),Cg={class:`mobile-tab-layout`},wg={class:`header`},Tg={class:`tab-bar`},Eg=[`selected`,`onClick`],Dg={slot:`text`},Og={class:`page-content`},kg=$({__name:`MobileTabLayout`,props:{tabs:{type:Array,required:!0},activeId:{type:String,default:void 0},onChange:{type:Function,default:void 0},defaultId:{type:String,default:void 0}},setup(e){let t=e,n=N(t.defaultId||t.tabs[0]?.id),r=N(null),i=N(!1),a=N(null),o=K(()=>t.activeId===void 0?n.value:t.activeId),s=e=>{t.onChange?t.onChange(e):n.value=e},c=()=>{let e=r.value;if(!e||i.value)return;let a=e.scrollLeft,s=e.offsetWidth,c=Math.round(a/s),l=t.tabs[c]?.id;l&&l!==o.value&&(t.onChange?t.onChange(l):n.value=l)};return Wr(o,e=>{_n(()=>{let n=r.value;if(!n)return;let o=t.tabs.findIndex(t=>t.id===e);if(o===-1)return;let s=n.offsetWidth*o,c=n.scrollLeft;Math.abs(c-s)>5&&(i.value=!0,a.value&&clearTimeout(a.value),n.scrollTo({left:s,behavior:`smooth`}),a.value=setTimeout(()=>{i.value=!1},600))})},{immediate:!0}),(t,n)=>(z(),B(`div`,Cg,[V(`div`,wg,[V(`s-tab`,Tg,[(z(!0),B(R,null,I(e.tabs,e=>(z(),B(`s-tab-item`,{key:e.id,selected:o.value===e.id,onClick:t=>s(e.id)},[V(`div`,Dg,D(e.label),1)],8,Eg))),128))])]),V(`div`,{ref_key:`containerRef`,ref:r,class:`view-pager`,onScroll:c},[(z(!0),B(R,null,I(e.tabs,e=>(z(),B(`div`,{key:e.id,class:`page`},[V(`div`,Og,[mr(t.$slots,e.id,{},void 0,!0)])]))),128))],544)]))}},[[`__scopeId`,`data-v-e291060c`]]),Ag=$({__name:`LoadingSentinel`,props:[`onLoadMore`],setup(e){let t=e,n=N(null),r=null;return $n(()=>{r=new IntersectionObserver(e=>{e[0].isIntersecting&&t.onLoadMore?.()},{threshold:.1}),n.value&&r.observe(n.value)}),rr(()=>{r&&r.disconnect()}),(e,t)=>(z(),B(`div`,{ref_key:`sentinelRef`,ref:n,class:`loading-sentinel`},[...t[0]||=[V(`s-circular-progress`,{indeterminate:`true`,style:{width:`24px`,height:`24px`}},null,-1)]],512))}},[[`__scopeId`,`data-v-ac42e7c3`]]),jg={class:`ptr-wrapper`},Mg={class:`spinner-container`},Ng={key:0,class:`spinner`},Pg={key:0,class:`footer-state`},Fg={key:1,class:`no-more-text`},Ig={key:0,class:`fab-container`},Lg={class:`fab-group`},Rg={class:`fab-group`},zg=80,Bg=120,Vg=$({__name:`PullToRefresh`,props:{onRefresh:{type:Function,required:!0},onLoadMore:{type:Function,default:null},hasMore:{type:Boolean,default:!0}},setup(e){let t=e,n=N(null),r=N(0),i=N(!1),a=N(!1),o=N(!1),s=N(0),c=N(!1),l=()=>{typeof window<`u`&&(o.value=window.innerWidth<768)},u=()=>{let e=n.value;e&&(e.scrollTop>300?a.value=!0:a.value=!1)},d=()=>{let e=n.value;e&&e.scrollTo({top:0,behavior:`smooth`})},f=async()=>{if(!i.value){i.value=!0;try{await t.onRefresh()}finally{i.value=!1}}},p=e=>{let t=n.value;t&&(t.scrollTop<=0?(s.value=e.touches[0].clientY,c.value=!0):c.value=!1)},m=e=>{let t=n.value;if(!c.value||i.value||!t||t.scrollTop>0)return;let a=e.touches[0].clientY-s.value;a>0&&(e.cancelable&&a<Bg&&e.preventDefault(),r.value=Math.min(a*.5,Bg))},h=async()=>{if(r.value>zg){i.value=!0,r.value=zg;try{await t.onRefresh()}finally{i.value=!1,r.value=0}}else r.value=0;c.value=!1},g=()=>{!c.value||i.value||h()};return $n(()=>{l(),window.addEventListener(`resize`,l);let e=n.value;e&&(e.addEventListener(`scroll`,u),e.addEventListener(`touchstart`,p,{passive:!0}),e.addEventListener(`touchmove`,m,{passive:!1}),e.addEventListener(`touchend`,g))}),rr(()=>{window.removeEventListener(`resize`,l);let e=n.value;e&&(e.removeEventListener(`scroll`,u),e.removeEventListener(`touchstart`,p),e.removeEventListener(`touchmove`,m),e.removeEventListener(`touchend`,g))}),(t,s)=>(z(),B(`div`,jg,[V(`s-scroll-view`,{ref_key:`containerRef`,ref:n,class:`scroll-view`},[V(`div`,{class:`loading-indicator`,style:E({transform:`translateY(${r.value-50}px)`,opacity:r.value>5||i.value?1:0,transition:c.value?`none`:`transform 0.3s ease-out, opacity 0.3s`})},[V(`div`,Mg,[i.value?(z(),B(`div`,Ng)):(z(),B(`s-icon`,{key:1,style:E({transform:`rotate(${r.value*2}deg)`})},[H(Q,{icon:`refresh`,size:24,class:`refresh-icon`})],4))])],4),V(`div`,{class:`content-wrapper`,style:E({transform:`translateY(${r.value}px)`,transition:c.value?`none`:`transform 0.3s ease-out`})},[mr(t.$slots,`default`,{},void 0,!0),e.onLoadMore?(z(),B(`div`,Pg,[e.hasMore&&!i.value?(z(),Ui(Ag,{key:0,onLoadMore:e.onLoadMore},null,8,[`onLoadMore`])):e.hasMore?W(``,!0):(z(),B(`div`,Fg,`没有更多了`))])):W(``,!0)],4)],512),o.value?W(``,!0):(z(),B(`div`,Ig,[V(`div`,{class:ve([`fab-wrapper`,{visible:a.value,hidden:!a.value}])},[V(`div`,Lg,[V(`s-fab`,{onClick:d},[V(`s-icon`,null,[H(Q,{icon:`vertical_align_top`})])]),s[0]||=V(`s-tooltip`,null,`回到顶部`,-1)])],2),V(`div`,Rg,[V(`s-fab`,{onClick:f,style:E({transform:i.value?`rotate(180deg)`:`none`,transition:`transform 0.5s`})},[V(`s-icon`,null,[H(Q,{icon:`refresh`})])],4),s[1]||=V(`s-tooltip`,null,`刷新`,-1)])]))]))}},[[`__scopeId`,`data-v-e3875605`]]);const Hg={formatTitle(e){let t=``;return e.target?.content?.title?t=e.target.content.title.trim():e.target?.question?.title?t=e.target.question.title.trim():e.target?.excerpt_title&&(t=e.target.excerpt_title.trim()),t&&t.length>30?t.substring(0,30)+`...`:t||``},getDataType(e){return e.target&&e.target.type?e.target.type:e.type},getId(e){return e.target&&e.target.id?e.target.id:e.id}};var Ug={class:`user-profile`},Wg={class:`top-bar glass`},Gg={key:0,class:`top-title`},Kg={class:`main-scroll`},qg={key:0,class:`profile-header`},Jg={class:`info-container`},Yg={class:`avatar-row`},Xg=[`src`],Zg={class:`name-row`},Qg={class:`name`},$g={key:0,class:`gender-badge`},e_={key:0,class:`headline`},t_={class:`stats-row`},n_={class:`stat-item`},r_={class:`stat-val`},i_={class:`stat-item`},a_={class:`stat-val`},o_={class:`stat-item`},s_={class:`stat-val`},c_={class:`tabs-container`},l_={class:`content-list`},u_={key:0,class:`loading-state`},d_={key:0,class:`empty-state`},f_=$({__name:`UserProfile`,setup(e){let t=wp(),n=Cp(),r=t.params.id,i=N(null),a=N(!1),o=N(`activities`),s=Ft({}),c=N([]),l=async()=>{let e={activities:`https://api.zhihu.com/moments/${r}/activities?limit=20`,zvideo:`https://api.zhihu.com/people/${r}/zvideos?offset=0&limit=20`,answer:`https://api.zhihu.com/people/${r}/answers?order_by=created&offset=0&limit=20`,vote:`https://api.zhihu.com/moments/${r}/vote?limit=20`,article:`https://api.zhihu.com/people/${r}/articles?offset=0&limit=20`,column:`https://api.zhihu.com/people/${r}/column-contributions?offset=0&limit=20`,pin:`https://api.zhihu.com/v2/pins/${r}/moments`,question:`https://api.zhihu.com/people/${r}/questions?offset=0&limit=20`};try{let t=await $zhihu.get(`https://api.zhihu.com/people/${r}/profile/tab`),n=(t.data||t).tabs_v3||[],i=[],a=e=>{if(e.name===`全部`||e.key===`all`)return;let t=e.name;e.number>0&&(t+=` ${e.number}`),i.push({key:e.key,title:t,url:e.url})};n.forEach(e=>{e.sub_tab?e.sub_tab.forEach(a):a(e)});let l=[],u=e=>{for(let[t,n]of Object.entries({"/activities":`activities`,"/answers":`answer`,"/articles":`article`,"/zvideos":`zvideo`,"/questions":`question`,"/vote":`vote`,"/pins":`pin`,"/column":`column`}))if(e&&e.includes(t))return n;return`unknown`};i.forEach(t=>{let n=u(t.url),r=t.key;if(r===`share`)return;let i=e[r]||t.url;if(i){let e=r||n;l.push({id:e,label:t.title,url:i,key:r}),s[e]||(s[e]={list:[],page:1,hasMore:!0,loading:!1,url:i})}});let d=l.findIndex(e=>e.id===`activities`);if(d>0){let e=l.splice(d,1)[0];l.unshift(e)}else if(d===-1){let t=e.activities;l.unshift({id:`activities`,label:`动态`,url:t}),s.activities||={list:[],page:1,hasMore:!0,loading:!1,url:t}}c.value=l,l.length>0&&(o.value=l[0].id)}catch(t){console.error(`Fetch tabs failed`,t);let n=[{id:`activities`,label:`动态`,url:e.activities}];n.forEach(e=>{s[e.id]||(s[e.id]={list:[],page:1,hasMore:!0,loading:!1,url:e.url})}),c.value=n,o.value=`activities`}},u=async()=>{a.value=!0;try{let e=await $zhihu.get(`https://api.zhihu.com/people/${r}`);i.value=e.data||e}catch(e){console.error(`Failed to fetch user info`,e)}finally{a.value=!1}},d=async(e,t=!1)=>{let n=s[e];if(!n||n.loading)return;let r=!n.lastResult;if(!(!t&&!n.hasMore&&!r)){n.loading=!0;try{let e;if(t||r){let t=n.url;e=await Gm.get(t)}else n.lastResult&&(e=await n.lastResult.next());if(!e)n.hasMore=!1;else{n.lastResult=e;let a=e.data||[];n.hasMore=!!e.paging?.next;let o=a.map(e=>{let t=e.target||e;t.column&&(t=t.column);let n=t.type||e.type||`article`;n===`moments_pin`&&(n=`pin`);let r=Hg.formatTitle(e)||t.title||t.name||t.content?.[0]?.title||`无标题`;return{...e,title:r,excerpt:t.excerpt||t.excerpt_new||t.intro||t.description||``,metrics:{likes:t.voteup_count||t.like_count||0,comments:t.comment_count||t.items_count||0},author:t.author||i.value,type:n,id:t.id}});if(t||r)n.list=o;else{let e=o.filter(e=>!n.list.some(t=>t.id===e.id));n.list=[...n.list,...e]}}}catch(t){console.error(`Failed to fetch content for ${e}`,t),n.hasMore=!1}finally{n.loading=!1}}};$n(()=>{u(),l().then(()=>{o.value&&d(o.value)})}),Wr(o,e=>{e&&d(e)});let f=async()=>{o.value&&await d(o.value,!0)},p=()=>{if(o.value){let e=s[o.value];e&&e.hasMore&&d(o.value,!1)}},m=()=>{n.back()},h=e=>{let t=e.target?.id||e.id,r=e.target?.type||e.type||`article`;r===`question`?n.push(`/question/${t}`):n.push(`/article/${r}/${t}`)};return(e,t)=>(z(),B(`div`,Ug,[V(`div`,Wg,[V(`s-icon-button`,{onClick:m},[H(Q,{icon:`arrow_back`})]),i.value?(z(),B(`div`,Gg,D(i.value.name),1)):W(``,!0),V(`s-icon-button`,null,[H(Q,{icon:`more_vert`})])]),V(`s-scroll-view`,Kg,[H(Vg,{onRefresh:f,onLoadMore:p,hasMore:s[o.value]?.hasMore},{default:On(()=>[i.value?(z(),B(`div`,qg,[t[4]||=V(`div`,{class:`cover-image`},null,-1),V(`div`,Jg,[V(`div`,Yg,[V(`img`,{src:i.value.avatar_url,class:`avatar`},null,8,Xg),t[0]||=V(`s-button`,{class:`follow-btn`,type:`filled`},`关注`,-1)]),V(`div`,Zg,[V(`h1`,Qg,D(i.value.name),1),i.value.gender===-1?W(``,!0):(z(),B(`div`,$g,[H(Q,{icon:i.value.gender===1?`male`:`female`,size:16},null,8,[`icon`])]))]),i.value.headline?(z(),B(`div`,e_,D(i.value.headline),1)):W(``,!0),V(`div`,t_,[V(`div`,n_,[V(`span`,r_,D(i.value.following_count||0),1),t[1]||=V(`span`,{class:`stat-label`},`关注`,-1)]),V(`div`,i_,[V(`span`,a_,D(i.value.follower_count||0),1),t[2]||=V(`span`,{class:`stat-label`},`粉丝`,-1)]),V(`div`,o_,[V(`span`,s_,D(i.value.voteup_count||0),1),t[3]||=V(`span`,{class:`stat-label`},`获赞`,-1)])])])])):W(``,!0),V(`div`,c_,[c.value.length>0?(z(),Ui(kg,{key:0,expanded:``,tabs:c.value,activeId:o.value,onChange:e=>o.value=e},pr({_:2},[I(c.value,e=>({name:e.id,fn:On(()=>[V(`div`,l_,[s[e.id]?.loading&&(!s[e.id]?.list||s[e.id].list.length===0)?(z(),B(`div`,u_,[...t[5]||=[V(`s-circular-progress`,{indeterminate:`true`},null,-1)]])):(z(),B(R,{key:1},[s[e.id]?.list.length===0?(z(),B(`div`,d_,` 暂无内容 `)):W(``,!0),(z(!0),B(R,null,I(s[e.id]?.list,(e,t)=>(z(),Ui(Sg,{key:t,item:e,onClick:t=>h(e)},null,8,[`item`,`onClick`]))),128))],64))])])}))]),1032,[`tabs`,`activeId`,`onChange`])):W(``,!0)])]),_:1},8,[`hasMore`])])]))}},[[`__scopeId`,`data-v-5cbd8db0`]]),p_={class:`question-detail`},m_={key:0,class:`loading-state`},h_={class:`top-bar glass`},g_={class:`title-text`},__={class:`main-scroll`},v_={class:`content-wrapper`},y_={class:`question-header`},b_={class:`max-container`},x_={class:`tags-row`},S_=[`onClick`],C_={class:`tag-text`},w_={class:`author-info`},T_=[`src`],E_={class:`author-details`},D_={class:`author-name`},O_={class:`author-bio`},k_={class:`description-preview`},A_=[`innerHTML`],j_={class:`action-bar`},M_={class:`action-buttons`},N_=[`type`],P_={slot:`icon`},F_={class:`metrics`},I_={class:`metric-item`},L_={class:`metric-item`},R_={class:`max-container`},z_={class:`answers-header`},B_={class:`answers-title`},V_={class:`sort-option`},H_={class:`answers-list`},U_=[`onClick`],W_={class:`answer-author`},G_=[`src`],K_={class:`answer-author-name`},q_={class:`answer-excerpt`},J_={class:`answer-metrics`},Y_={class:`metric-item primary`},X_={class:`metric-item`},Z_={class:`timestamp`},Q_=[`showed`],$_=[`innerHTML`],ev=$({__name:`QuestionDetail`,setup(e){let t=wp(),n=Cp(),r=K(()=>t.params.id),i=N(null),a=N([]),o=N(!0),s=N(!1),c=N(!1),l=e=>e>1e3?`${(e/1e3).toFixed(1)}k`:e,u=async()=>{o.value=!0;try{let e=await window.$zhihu.get(`https://api.zhihu.com/questions/${r.value}`),t=e.data||e;i.value={id:t.id,title:t.title,description:t.detail||t.excerpt||``,tags:(t.topics||[]).slice(0,5).map(e=>({id:e.id,name:e.name})),answerCount:t.answer_count||0,followerCount:t.follower_count||0,author:{name:t.author?.name||`匿名用户`,avatarUrl:t.author?.avatar_url,bio:t.author?.headline||``}};let n=await window.$zhihu.get(`https://api.zhihu.com/questions/${r.value}/answers?limit=20&order=default`),o=n.data||n;a.value=(Array.isArray(o)?o:[]).map(e=>({id:e.id,author:e.author?.name||`匿名用户`,avatarUrl:e.author?.avatar_url,excerpt:e.excerpt||e.content?.substring(0,200)||``,voteCount:e.voteup_count||0,commentCount:e.comment_count||0,timestamp:new Date(e.created_time*1e3).toLocaleDateString()}))}catch(e){console.error(`Failed to fetch question:`,e)}finally{o.value=!1}},d=()=>{n.back()},f=e=>{n.push(`/article/answer/${e.id}`)},p=e=>{n.push(`/topic/${e.id}`)};return $n(()=>{u()}),(e,t)=>(z(),B(`div`,p_,[o.value?(z(),B(`div`,m_,[H(Q,{icon:`progress_activity`,size:32,class:`spin`})])):i.value?(z(),B(R,{key:1},[V(`div`,h_,[V(`s-icon-button`,{onClick:d},[H(Q,{icon:`arrow_back`})]),V(`div`,g_,D(i.value.title),1),V(`s-icon-button`,null,[H(Q,{icon:`more_vert`})])]),V(`s-scroll-view`,__,[V(`div`,v_,[V(`div`,y_,[V(`div`,b_,[V(`div`,x_,[(z(!0),B(R,null,I(i.value.tags,e=>(z(),B(`s-chip`,{key:e.id,class:`tag-chip`,clickable:`true`,onClick:t=>p(e)},[V(`span`,C_,D(e.name),1)],8,S_))),128))]),V(`div`,w_,[V(`img`,{src:i.value.author.avatarUrl,class:`author-avatar`,onerror:`this.src='https://placehold.co/32x32/6366f1/ffffff?text=U'`},null,8,T_),V(`div`,E_,[V(`span`,D_,D(i.value.author.name),1),V(`span`,O_,D(i.value.author.bio),1)])]),V(`div`,k_,[V(`div`,{class:`description-text`,innerHTML:i.value.description},null,8,A_),i.value.description?(z(),B(`button`,{key:0,onClick:t[0]||=e=>s.value=!0,class:`expand-button`},[t[4]||=U(` 展开阅读全文 `,-1),H(Q,{icon:`keyboard_arrow_down`,size:18})])):W(``,!0)]),V(`div`,j_,[V(`div`,M_,[V(`s-button`,{type:c.value?`filled-tonal`:`filled`,onClick:t[1]||=e=>c.value=!c.value,class:`action-btn`},[V(`s-icon`,P_,[H(Q,{icon:c.value?`check`:`add`},null,8,[`icon`])]),U(` `+D(c.value?`已关注`:`关注问题`),1)],8,N_)]),V(`div`,F_,[V(`div`,I_,[H(Q,{icon:`star`,size:20}),V(`span`,null,D(l(i.value.followerCount))+` 收藏`,1)]),V(`div`,L_,[H(Q,{icon:`chat_bubble`,size:18}),V(`span`,null,D(i.value.answerCount)+` 评论`,1)])])])])]),t[6]||=V(`s-divider`,null,null,-1),V(`div`,R_,[V(`div`,z_,[V(`h2`,B_,D(i.value.answerCount)+` 个回答`,1),V(`div`,V_,[t[5]||=V(`span`,null,`默认排序`,-1),H(Q,{icon:`sort`,size:16})])]),V(`div`,H_,[(z(!0),B(R,null,I(a.value,e=>(z(),B(`s-card`,{key:e.id,class:`answer-item`,clickable:`true`,onClick:t=>f(e)},[V(`div`,W_,[V(`img`,{src:e.avatarUrl,class:`answer-avatar`,onerror:`this.src='https://placehold.co/24x24/6366f1/ffffff?text=U'`},null,8,G_),V(`span`,K_,D(e.author),1)]),V(`div`,q_,[V(`p`,null,D(e.excerpt),1)]),V(`div`,J_,[V(`div`,Y_,[H(Q,{icon:`thumb_up`,size:18,fill:!0}),V(`span`,null,D(l(e.voteCount)),1)]),V(`div`,X_,[H(Q,{icon:`chat_bubble`,size:18}),V(`span`,null,D(l(e.commentCount)),1)]),V(`div`,Z_,D(e.timestamp),1)])],8,U_))),128))])])])]),V(`s-dialog`,{showed:s.value,onClose:t[3]||=e=>s.value=!1},[t[7]||=V(`div`,{slot:`headline`},`问题描述`,-1),V(`div`,{slot:`text`,class:`dialog-content`,innerHTML:i.value.description},null,8,$_),V(`s-button`,{slot:`action`,type:`text`,onClick:t[2]||=e=>s.value=!1},`关闭`)],40,Q_)],64)):W(``,!0)]))}},[[`__scopeId`,`data-v-1d54ba8c`]]),tv={class:`topic-detail`},nv={class:`top-bar glass`},rv={class:`title`},iv={class:`main-scroll`},av={key:0},ov={key:0,class:`topic-header`},sv={class:`info-container`},cv=[`src`],lv={class:`topic-info`},uv={class:`topic-name`},dv={class:`topic-excerpt`},fv={class:`stats`},pv={class:`stat-item`},mv={class:`stat-val`},hv={class:`stat-item`},gv={class:`stat-val`},_v={type:`filled`,class:`follow-btn`},vv={slot:`icon`},yv={class:`tabs-container`},bv={class:`detail-content`},xv={class:`detail-card`},Sv={class:`detail-title`},Cv={class:`detail-text`},wv={key:0,class:`topic-header`},Tv={class:`info-container`},Ev=[`src`],Dv={class:`topic-info`},Ov={class:`topic-name`},kv={class:`topic-excerpt`},Av={class:`stats`},jv={class:`stat-item`},Mv={class:`stat-val`},Nv={class:`stat-item`},Pv={class:`stat-val`},Fv={type:`filled`,class:`follow-btn`},Iv={slot:`icon`},Lv={class:`tabs-container`},Rv={class:`content-list`},zv={key:0,class:`loading-state`},Bv={key:1,class:`empty-state`},Vv={key:2,class:`card-grid`},Hv=$({__name:`TopicDetail`,setup(e){let t=wp(),n=Cp(),r=K(()=>t.params.id),i=N(null),a=N(!1),o=N(`detail`),s=N({detail:{list:[],result:null,hasMore:!0,loading:!1},discussion:{list:[],result:null,hasMore:!0,loading:!1},ideas:{list:[],result:null,hasMore:!0,loading:!1},videos:{list:[],result:null,hasMore:!0,loading:!1},questions:{list:[],result:null,hasMore:!0,loading:!1}}),c=[{id:`detail`,label:`详情`},{id:`discussion`,label:`讨论`},{id:`ideas`,label:`想法`},{id:`videos`,label:`视频`},{id:`questions`,label:`问题`}],l=async()=>{a.value=!0;try{let e=await $zhihu.get(`https://api.zhihu.com/topics/${r.value}`),t=e.data||e;i.value={id:t.id,name:t.name,avatar:t.avatar_url,excerpt:t.excerpt||t.introduction||``,followerCount:t.followers_count||0,questionCount:t.questions_count||0}}catch(e){console.error(`Failed to fetch topic info`,e)}finally{a.value=!1}},u=e=>{let t=e.target||e;return{id:t.id,type:t.type||`article`,title:t.title||t.question?.title||``,excerpt:t.excerpt||t.content?.substring(0,200)||``,author:t.author?.name||`匿名用户`,avatarUrl:t.author?.avatar_url,imageUrl:t.thumbnail||t.image_url,metrics:{votes:t.voteup_count||0,comments:t.comment_count||0},timestamp:t.created_time?new Date(t.created_time*1e3).toLocaleDateString():``}},d=async(e,t=!1)=>{if(e===`detail`)return;let n=s.value[e];if(!n.loading&&!(!t&&!n.hasMore)){n.loading=!0;try{let i,a={discussion:`https://api.zhihu.com/topics/${r.value}/feeds/timeline_activity?limit=20`,ideas:`https://api.zhihu.com/topics/${r.value}/feeds/top_activity?limit=20`,videos:`https://api.zhihu.com/topics/${r.value}/feeds/top_activity?limit=20`,questions:`https://api.zhihu.com/topics/${r.value}/questions?limit=20`};if(i=t||!n.result?await window.$http.get(a[e]):await n.result.next(),!i)n.hasMore=!1;else{n.result=i;let e=i.data||[];n.hasMore=!!i.paging?.next;let r=e.map(u);if(t)n.list=r;else{let e=r.filter(e=>!n.list.some(t=>t.id===e.id));n.list=[...n.list,...e]}}}catch(t){console.error(`Failed to fetch content for ${e}`,t),n.hasMore=!1}finally{n.loading=!1}}},f=()=>{n.back()},p=e=>{e.type===`question`?n.push(`/question/${e.id}`):n.push(`/article/${e.type}/${e.id}`)},m=async()=>{await d(o.value,!0)},h=async()=>{await d(o.value,!1)};return $n(()=>{l(),d(`detail`)}),(e,t)=>(z(),B(`div`,tv,[V(`div`,nv,[V(`s-icon-button`,{onClick:f},[H(Q,{icon:`arrow_back`})]),V(`span`,rv,D(i.value?.name||`话题`),1)]),V(`s-scroll-view`,iv,[o.value===`detail`?(z(),B(`div`,av,[i.value?(z(),B(`div`,ov,[t[3]||=V(`div`,{class:`cover-image`},null,-1),V(`div`,sv,[V(`img`,{src:i.value.avatar,class:`topic-avatar`,onerror:`this.src='https://placehold.co/80x80/6366f1/ffffff?text=T'`},null,8,cv),V(`div`,lv,[V(`h1`,uv,D(i.value.name),1),V(`p`,dv,D(i.value.excerpt),1),V(`div`,fv,[V(`div`,pv,[V(`span`,mv,D(i.value.followerCount),1),t[0]||=V(`span`,{class:`stat-label`},`关注者`,-1)]),V(`div`,hv,[V(`span`,gv,D(i.value.questionCount),1),t[1]||=V(`span`,{class:`stat-label`},`问题`,-1)])]),V(`s-button`,_v,[V(`s-icon`,vv,[H(Q,{icon:`add`})]),t[2]||=U(` 关注话题 `,-1)])])])])):W(``,!0),V(`div`,yv,[H(kg,{expanded:``,tabs:c,activeId:o.value,onChange:e=>{o.value=e,e!==`detail`&&!s.value[e].list.length&&d(e)}},{detail:On(()=>[V(`div`,bv,[V(`s-card`,xv,[V(`h3`,Sv,D(i.value?.name),1),V(`p`,Cv,D(i.value?.excerpt||`暂无简介`),1)])])]),_:1},8,[`activeId`,`onChange`])])])):(z(),Ui(Vg,{key:1,onRefresh:m,onLoadMore:h,hasMore:s.value[o.value]?.hasMore},{default:On(()=>[i.value?(z(),B(`div`,wv,[t[7]||=V(`div`,{class:`cover-image`},null,-1),V(`div`,Tv,[V(`img`,{src:i.value.avatar,class:`topic-avatar`,onerror:`this.src='https://placehold.co/80x80/6366f1/ffffff?text=T'`},null,8,Ev),V(`div`,Dv,[V(`h1`,Ov,D(i.value.name),1),V(`p`,kv,D(i.value.excerpt),1),V(`div`,Av,[V(`div`,jv,[V(`span`,Mv,D(i.value.followerCount),1),t[4]||=V(`span`,{class:`stat-label`},`关注者`,-1)]),V(`div`,Nv,[V(`span`,Pv,D(i.value.questionCount),1),t[5]||=V(`span`,{class:`stat-label`},`问题`,-1)])]),V(`s-button`,Fv,[V(`s-icon`,Iv,[H(Q,{icon:`add`})]),t[6]||=U(` 关注话题 `,-1)])])])])):W(``,!0),V(`div`,Lv,[H(kg,{expanded:``,tabs:c,activeId:o.value,onChange:e=>{o.value=e,e!==`detail`&&!s.value[e].list.length&&d(e)}},pr({_:2},[I(c.filter(e=>e.id!==`detail`),e=>({name:e.id,fn:On(()=>[V(`div`,Rv,[s.value[e.id].loading&&s.value[e.id].list.length===0?(z(),B(`div`,zv,[H(Q,{icon:`progress_activity`,size:24,class:`spin`}),t[8]||=U(` 加载中... `,-1)])):s.value[e.id].list.length===0?(z(),B(`div`,Bv,` 暂无内容 `)):(z(),B(`div`,Vv,[(z(!0),B(R,null,I(s.value[e.id].list,e=>(z(),B(`div`,{key:e.id,class:`masonry-item`},[H(Sg,{item:e,onClick:t=>p(e)},null,8,[`item`,`onClick`])]))),128))]))])])}))]),1032,[`activeId`,`onChange`])])]),_:1},8,[`hasMore`]))])]))}},[[`__scopeId`,`data-v-900102e2`]]),Uv=`modulepreload`,Wv=function(e){return`/zhihu_web/`+e},Gv={};const Kv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Wv(t,n),t in Gv)return;Gv[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Uv,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var qv=[{path:`/`,component:()=>Kv(()=>import(`./HomeView-BJqhL9Wv.js`),__vite__mapDeps([0,1,2])),meta:{keepAlive:!0}},{path:`/following`,component:()=>Kv(()=>import(`./FollowingView-qM1RUzSN.js`),__vite__mapDeps([3,1,4])),meta:{keepAlive:!0}},{path:`/collections`,component:()=>Kv(()=>import(`./CollectionsView-BvrkpRvA.js`),__vite__mapDeps([5,1,6])),meta:{keepAlive:!0}},{path:`/daily`,component:()=>Kv(()=>import(`./DailyView-T-BNL1JH.js`),__vite__mapDeps([7,8])),meta:{keepAlive:!0}},{path:`/history`,component:()=>Kv(()=>import(`./HistoryView-BZU7sVQ7.js`),__vite__mapDeps([9,10])),meta:{keepAlive:!0}},{path:`/settings`,component:()=>Kv(()=>import(`./SettingsView-CS4xX-8w.js`),__vite__mapDeps([11,12])),meta:{keepAlive:!0}},{path:`/search`,component:()=>Kv(()=>import(`./SearchPage-CeW0lvq5.js`),[]),meta:{keepAlive:!0}},{path:`/article/:type/:id`,component:vg},{path:`/user/:id`,component:f_},{path:`/question/:id`,component:ev},{path:`/topic/:id`,component:Hv}],Jv=Sp({history:Hf(),routes:qv});Hm({}),window.$http=Gm,window.$zhihu=Um(),wo(em).use(Jv).mount(`#app`);export{kn as C,D,ve as E,On as S,Yt as T,H as _,Gm as a,I as b,Cp as c,V as d,Ui as f,U as g,Zi as h,Sg as i,Ra as l,B as m,Vg as n,$ as o,W as p,kg as r,Q as s,Hg as t,R as u,$n as v,N as w,Wr as x,z as y};