(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ua(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const wt={},Tr=[],Le=()=>{},Uh=()=>!1,zi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ba=e=>e.startsWith("onUpdate:"),oe=Object.assign,ja=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ag=Object.prototype.hasOwnProperty,mt=(e,t)=>Ag.call(e,t),rt=Array.isArray,Ir=e=>Ki(e)==="[object Map]",Bh=e=>Ki(e)==="[object Set]",it=e=>typeof e=="function",Ot=e=>typeof e=="string",Vn=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",jh=e=>(Ct(e)||it(e))&&it(e.then)&&it(e.catch),$h=Object.prototype.toString,Ki=e=>$h.call(e),bg=e=>Ki(e).slice(8,-1),qh=e=>Ki(e)==="[object Object]",$a=e=>Ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=Ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rg=/-\w/g,Ie=Gi(e=>e.replace(Rg,t=>t.slice(1).toUpperCase())),Sg=/\B([A-Z])/g,tr=Gi(e=>e.replace(Sg,"-$1").toLowerCase()),Wi=Gi(e=>e.charAt(0).toUpperCase()+e.slice(1)),No=Gi(e=>e?`on${Wi(e)}`:""),zn=(e,t)=>!Object.is(e,t),pi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hh=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ra=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ul;const Qi=()=>Ul||(Ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qa(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ot(r)?Dg(r):qa(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ot(e)||Ct(e))return e}const Cg=/;(?![^(]*\))/g,Pg=/:([^]+)/,Vg=/\/\*[^]*?\*\//g;function Dg(e){const t={};return e.replace(Vg,"").split(Cg).forEach(n=>{if(n){const r=n.split(Pg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ha(e){let t="";if(Ot(e))t=e;else if(rt(e))for(let n=0;n<e.length;n++){const r=Ha(e[n]);r&&(t+=r+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ng=Ua(xg);function zh(e){return!!e||e===""}const Kh=e=>!!(e&&e.__v_isRef===!0),dr=e=>Ot(e)?e:e==null?"":rt(e)||Ct(e)&&(e.toString===$h||!it(e.toString))?Kh(e)?dr(e.value):JSON.stringify(e,Gh,2):String(e),Gh=(e,t)=>Kh(t)?Gh(e,t.value):Ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Mo(r,i)+" =>"]=s,n),{})}:Bh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mo(n))}:Vn(t)?Mo(t):Ct(t)&&!rt(t)&&!qh(t)?String(t):t,Mo=(e,t="")=>{var n;return Vn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class Mg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){this._on>0&&--this._on===0&&(ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Og(){return ae}let vt;const Oo=new WeakSet;class Wh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&ae.active&&ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bl(this),Xh(this);const t=vt,n=be;vt=this,be=!0;try{return this.fn()}finally{Jh(this),vt=t,be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ga(t);this.deps=this.depsTail=void 0,Bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sa(this)&&this.run()}get dirty(){return sa(this)}}let Qh=0,fs,ds;function Yh(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function za(){Qh++}function Ka(){if(--Qh>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Xh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jh(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ga(r),kg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function sa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===As)||(e.globalVersion=As,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!sa(e))))return;e.flags|=2;const t=e.dep,n=vt,r=be;vt=e,be=!0;try{Xh(e);const s=e.fn(e._value);(t.version===0||zn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{vt=n,be=r,Jh(e),e.flags&=-3}}function Ga(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ga(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function kg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let be=!0;const tf=[];function Je(){tf.push(be),be=!1}function Ze(){const e=tf.pop();be=e===void 0?!0:e}function Bl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=vt;vt=void 0;try{t()}finally{vt=n}}}let As=0;class Lg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ef{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!vt||!be||vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==vt)n=this.activeLink=new Lg(vt,this),vt.deps?(n.prevDep=vt.depsTail,vt.depsTail.nextDep=n,vt.depsTail=n):vt.deps=vt.depsTail=n,nf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=vt.depsTail,n.nextDep=void 0,vt.depsTail.nextDep=n,vt.depsTail=n,vt.deps===n&&(vt.deps=r)}return n}trigger(t){this.version++,As++,this.notify(t)}notify(t){za();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ka()}}}function nf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)nf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ia=new WeakMap,Kn=Symbol(""),oa=Symbol(""),bs=Symbol("");function Jt(e,t,n){if(be&&vt){let r=ia.get(e);r||ia.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ef),s.map=r,s.key=n),s.track()}}function Ye(e,t,n,r,s,i){const a=ia.get(e);if(!a){As++;return}const c=u=>{u&&u.trigger()};if(za(),t==="clear")a.forEach(c);else{const u=rt(e),f=u&&$a(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,T)=>{(T==="length"||T===bs||!Vn(T)&&T>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(bs)),t){case"add":u?f&&c(a.get("length")):(c(a.get(Kn)),Ir(e)&&c(a.get(oa)));break;case"delete":u||(c(a.get(Kn)),Ir(e)&&c(a.get(oa)));break;case"set":Ir(e)&&c(a.get(Kn));break}}Ka()}function fr(e){const t=Et(e);return t===e?t:(Jt(t,"iterate",bs),Re(e)?t:t.map(re))}function Yi(e){return Jt(e=Et(e),"iterate",bs),e}const Fg={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,re)},concat(...e){return fr(this).concat(...e.map(t=>rt(t)?fr(t):t))},entries(){return ko(this,"entries",e=>(e[1]=re(e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,n=>n.map(re),arguments)},find(e,t){return Ge(this,"find",e,t,re,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,re,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return Lo(this,"includes",e)},indexOf(...e){return Lo(this,"indexOf",e)},join(e){return fr(this).join(e)},lastIndexOf(...e){return Lo(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return ss(this,"pop")},push(...e){return ss(this,"push",e)},reduce(e,...t){return jl(this,"reduce",e,t)},reduceRight(e,...t){return jl(this,"reduceRight",e,t)},shift(){return ss(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return ss(this,"splice",e)},toReversed(){return fr(this).toReversed()},toSorted(e){return fr(this).toSorted(e)},toSpliced(...e){return fr(this).toSpliced(...e)},unshift(...e){return ss(this,"unshift",e)},values(){return ko(this,"values",re)}};function ko(e,t,n){const r=Yi(e),s=r[t]();return r!==e&&!Re(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ug=Array.prototype;function Ge(e,t,n,r,s,i){const a=Yi(e),c=a!==e&&!Re(e),u=a[t];if(u!==Ug[t]){const g=u.apply(e,i);return c?re(g):g}let f=n;a!==e&&(c?f=function(g,T){return n.call(this,re(g),T,e)}:n.length>2&&(f=function(g,T){return n.call(this,g,T,e)}));const d=u.call(a,f,r);return c&&s?s(d):d}function jl(e,t,n,r){const s=Yi(e);let i=n;return s!==e&&(Re(e)?n.length>3&&(i=function(a,c,u){return n.call(this,a,c,u,e)}):i=function(a,c,u){return n.call(this,a,re(c),u,e)}),s[t](i,...r)}function Lo(e,t,n){const r=Et(e);Jt(r,"iterate",bs);const s=r[t](...n);return(s===-1||s===!1)&&Xa(n[0])?(n[0]=Et(n[0]),r[t](...n)):s}function ss(e,t,n=[]){Je(),za();const r=Et(e)[t].apply(e,n);return Ka(),Ze(),r}const Bg=Ua("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vn));function jg(e){Vn(e)||(e=String(e));const t=Et(this);return Jt(t,"has",e),t.hasOwnProperty(e)}class sf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xg:lf:i?cf:af).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=rt(t);if(!s){let u;if(a&&(u=Fg[n]))return u;if(n==="hasOwnProperty")return jg}const c=Reflect.get(t,n,ie(t)?t:r);if((Vn(n)?rf.has(n):Bg(n))||(s||Jt(t,"get",n),i))return c;if(ie(c)){const u=a&&$a(n)?c:c.value;return s&&Ct(u)?ca(u):u}return Ct(c)?s?ca(c):Qa(c):c}}class of extends sf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Qn(i);if(!Re(r)&&!Qn(r)&&(i=Et(i),r=Et(r)),!rt(t)&&ie(i)&&!ie(r))return u||(i.value=r),!0}const a=rt(t)&&$a(n)?Number(n)<t.length:mt(t,n),c=Reflect.set(t,n,r,ie(t)?t:s);return t===Et(s)&&(a?zn(r,i)&&Ye(t,"set",n,r):Ye(t,"add",n,r)),c}deleteProperty(t,n){const r=mt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ye(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Vn(n)||!rf.has(n))&&Jt(t,"has",n),r}ownKeys(t){return Jt(t,"iterate",rt(t)?"length":Kn),Reflect.ownKeys(t)}}class $g extends sf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qg=new of,Hg=new $g,zg=new of(!0);const aa=e=>e,si=e=>Reflect.getPrototypeOf(e);function Kg(e,t,n){return function(...r){const s=this.__v_raw,i=Et(s),a=Ir(i),c=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?aa:t?Ai:re;return!t&&Jt(i,"iterate",u?oa:Kn),{next(){const{value:g,done:T}=f.next();return T?{value:g,done:T}:{value:c?[d(g[0]),d(g[1])]:d(g),done:T}},[Symbol.iterator](){return this}}}}function ii(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gg(e,t){const n={get(s){const i=this.__v_raw,a=Et(i),c=Et(s);e||(zn(s,c)&&Jt(a,"get",s),Jt(a,"get",c));const{has:u}=si(a),f=t?aa:e?Ai:re;if(u.call(a,s))return f(i.get(s));if(u.call(a,c))return f(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Jt(Et(s),"iterate",Kn),s.size},has(s){const i=this.__v_raw,a=Et(i),c=Et(s);return e||(zn(s,c)&&Jt(a,"has",s),Jt(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,u=Et(c),f=t?aa:e?Ai:re;return!e&&Jt(u,"iterate",Kn),c.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return oe(n,e?{add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear")}:{add(s){!t&&!Re(s)&&!Qn(s)&&(s=Et(s));const i=Et(this);return si(i).has.call(i,s)||(i.add(s),Ye(i,"add",s,s)),this},set(s,i){!t&&!Re(i)&&!Qn(i)&&(i=Et(i));const a=Et(this),{has:c,get:u}=si(a);let f=c.call(a,s);f||(s=Et(s),f=c.call(a,s));const d=u.call(a,s);return a.set(s,i),f?zn(i,d)&&Ye(a,"set",s,i):Ye(a,"add",s,i),this},delete(s){const i=Et(this),{has:a,get:c}=si(i);let u=a.call(i,s);u||(s=Et(s),u=a.call(i,s)),c&&c.call(i,s);const f=i.delete(s);return u&&Ye(i,"delete",s,void 0),f},clear(){const s=Et(this),i=s.size!==0,a=s.clear();return i&&Ye(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Kg(s,e,t)}),n}function Wa(e,t){const n=Gg(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(mt(n,s)&&s in r?n:r,s,i)}const Wg={get:Wa(!1,!1)},Qg={get:Wa(!1,!0)},Yg={get:Wa(!0,!1)};const af=new WeakMap,cf=new WeakMap,lf=new WeakMap,Xg=new WeakMap;function Jg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zg(e){return e.__v_skip||!Object.isExtensible(e)?0:Jg(bg(e))}function Qa(e){return Qn(e)?e:Ya(e,!1,qg,Wg,af)}function tm(e){return Ya(e,!1,zg,Qg,cf)}function ca(e){return Ya(e,!0,Hg,Yg,lf)}function Ya(e,t,n,r,s){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Zg(e);if(i===0)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function wr(e){return Qn(e)?wr(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function Re(e){return!!(e&&e.__v_isShallow)}function Xa(e){return e?!!e.__v_raw:!1}function Et(e){const t=e&&e.__v_raw;return t?Et(t):e}function em(e){return!mt(e,"__v_skip")&&Object.isExtensible(e)&&Hh(e,"__v_skip",!0),e}const re=e=>Ct(e)?Qa(e):e,Ai=e=>Ct(e)?ca(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function nm(e){return ie(e)?e.value:e}const rm={get:(e,t,n)=>t==="__v_raw"?e:nm(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function uf(e){return wr(e)?e:new Proxy(e,rm)}class sm{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ef(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Yh(this,!0),!0}get value(){const t=this.dep.track();return Zh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function im(e,t,n=!1){let r,s;return it(e)?r=e:(r=e.get,s=e.set),new sm(r,s,n)}const oi={},bi=new WeakMap;let jn;function om(e,t=!1,n=jn){if(n){let r=bi.get(n);r||bi.set(n,r=[]),r.push(e)}}function am(e,t,n=wt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:u}=n,f=W=>s?W:Re(W)||s===!1||s===0?Xe(W,1):Xe(W);let d,g,T,S,L=!1,B=!1;if(ie(e)?(g=()=>e.value,L=Re(e)):wr(e)?(g=()=>f(e),L=!0):rt(e)?(B=!0,L=e.some(W=>wr(W)||Re(W)),g=()=>e.map(W=>{if(ie(W))return W.value;if(wr(W))return f(W);if(it(W))return u?u(W,2):W()})):it(e)?t?g=u?()=>u(e,2):e:g=()=>{if(T){Je();try{T()}finally{Ze()}}const W=jn;jn=d;try{return u?u(e,3,[S]):e(S)}finally{jn=W}}:g=Le,t&&s){const W=g,ht=s===!0?1/0:s;g=()=>Xe(W(),ht)}const j=Og(),G=()=>{d.stop(),j&&j.active&&ja(j.effects,d)};if(i&&t){const W=t;t=(...ht)=>{W(...ht),G()}}let Q=B?new Array(e.length).fill(oi):oi;const J=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(t){const ht=d.run();if(s||L||(B?ht.some((Tt,w)=>zn(Tt,Q[w])):zn(ht,Q))){T&&T();const Tt=jn;jn=d;try{const w=[ht,Q===oi?void 0:B&&Q[0]===oi?[]:Q,S];Q=ht,u?u(t,3,w):t(...w)}finally{jn=Tt}}}else d.run()};return c&&c(J),d=new Wh(g),d.scheduler=a?()=>a(J,!1):J,S=W=>om(W,!1,d),T=d.onStop=()=>{const W=bi.get(d);if(W){if(u)u(W,4);else for(const ht of W)ht();bi.delete(d)}},t?r?J(!0):Q=d.run():a?a(J.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function Xe(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ie(e))Xe(e.value,t,n);else if(rt(e))for(let r=0;r<e.length;r++)Xe(e[r],t,n);else if(Bh(e)||Ir(e))e.forEach(r=>{Xe(r,t,n)});else if(qh(e)){for(const r in e)Xe(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Xe(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(e,t,n,r){try{return r?e(...r):e()}catch(s){Xi(s,t,n)}}function He(e,t,n,r){if(it(e)){const s=Bs(e,t,n,r);return s&&jh(s)&&s.catch(i=>{Xi(i,t,n)}),s}if(rt(e)){const s=[];for(let i=0;i<e.length;i++)s.push(He(e[i],t,n,r));return s}}function Xi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||wt;if(t){let c=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,u,f)===!1)return}c=c.parent}if(i){Je(),Bs(i,null,10,[e,u,f]),Ze();return}}cm(e,n,s,r,a)}function cm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const se=[];let Me=-1;const vr=[];let pn=null,pr=0;const hf=Promise.resolve();let Ri=null;function lm(e){const t=Ri||hf;return e?t.then(this?e.bind(this):e):t}function um(e){let t=Me+1,n=se.length;for(;t<n;){const r=t+n>>>1,s=se[r],i=Rs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ja(e){if(!(e.flags&1)){const t=Rs(e),n=se[se.length-1];!n||!(e.flags&2)&&t>=Rs(n)?se.push(e):se.splice(um(t),0,e),e.flags|=1,ff()}}function ff(){Ri||(Ri=hf.then(pf))}function hm(e){rt(e)?vr.push(...e):pn&&e.id===-1?pn.splice(pr+1,0,e):e.flags&1||(vr.push(e),e.flags|=1),ff()}function $l(e,t,n=Me+1){for(;n<se.length;n++){const r=se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function df(e){if(vr.length){const t=[...new Set(vr)].sort((n,r)=>Rs(n)-Rs(r));if(vr.length=0,pn){pn.push(...t);return}for(pn=t,pr=0;pr<pn.length;pr++){const n=pn[pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pn=null,pr=0}}const Rs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pf(e){try{for(Me=0;Me<se.length;Me++){const t=se[Me];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Me<se.length;Me++){const t=se[Me];t&&(t.flags&=-2)}Me=-1,se.length=0,df(),Ri=null,(se.length||vr.length)&&pf()}}let ge=null,gf=null;function Si(e){const t=ge;return ge=e,gf=e&&e.type.__scopeId||null,t}function fm(e,t=ge,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&eu(-1);const i=Si(t);let a;try{a=e(...s)}finally{Si(i),r._d&&eu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ai(e,t){if(ge===null)return e;const n=eo(ge),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,c,u=wt]=t[s];i&&(it(i)&&(i={mounted:i,updated:i}),i.deep&&Xe(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Un(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let u=c.dir[r];u&&(Je(),He(u,n,8,[e.el,c,e,t]),Ze())}}const dm=Symbol("_vte"),pm=e=>e.__isTeleport,gm=Symbol("_leaveCb");function Za(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Za(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ci=new WeakMap;function ps(e,t,n,r,s=!1){if(rt(e)){e.forEach((L,B)=>ps(L,t&&(rt(t)?t[B]:t),n,r,s));return}if(gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ps(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?eo(r.component):r.el,a=s?null:i,{i:c,r:u}=e,f=t&&t.r,d=c.refs===wt?c.refs={}:c.refs,g=c.setupState,T=Et(g),S=g===wt?Uh:L=>mt(T,L);if(f!=null&&f!==u){if(ql(t),Ot(f))d[f]=null,S(f)&&(g[f]=null);else if(ie(f)){f.value=null;const L=t;L.k&&(d[L.k]=null)}}if(it(u))Bs(u,c,12,[a,d]);else{const L=Ot(u),B=ie(u);if(L||B){const j=()=>{if(e.f){const G=L?S(u)?g[u]:d[u]:u.value;if(s)rt(G)&&ja(G,i);else if(rt(G))G.includes(i)||G.push(i);else if(L)d[u]=[i],S(u)&&(g[u]=d[u]);else{const Q=[i];u.value=Q,e.k&&(d[e.k]=Q)}}else L?(d[u]=a,S(u)&&(g[u]=a)):B&&(u.value=a,e.k&&(d[e.k]=a))};if(a){const G=()=>{j(),Ci.delete(e)};G.id=-1,Ci.set(e,G),pe(G,n)}else ql(e),j()}}}function ql(e){const t=Ci.get(e);t&&(t.flags|=8,Ci.delete(e))}Qi().requestIdleCallback;Qi().cancelIdleCallback;const gs=e=>!!e.type.__asyncLoader,_f=e=>e.type.__isKeepAlive;function mm(e,t){yf(e,"a",t)}function _m(e,t){yf(e,"da",t)}function yf(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ji(t,r,n),n){let s=n.parent;for(;s&&s.parent;)_f(s.parent.vnode)&&ym(r,t,n,s),s=s.parent}}function ym(e,t,n,r){const s=Ji(t,e,r,!0);Ef(()=>{ja(r[t],s)},n)}function Ji(e,t,n=te,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Je();const c=js(n),u=He(t,n,e,a);return c(),Ze(),u});return r?s.unshift(i):s.push(i),i}}const on=e=>(t,n=te)=>{(!Cs||e==="sp")&&Ji(e,(...r)=>t(...r),n)},Em=on("bm"),Tm=on("m"),Im=on("bu"),wm=on("u"),vm=on("bum"),Ef=on("um"),Am=on("sp"),bm=on("rtg"),Rm=on("rtc");function Sm(e,t=te){Ji("ec",e,t)}const Cm="components";function Hl(e,t){return Vm(Cm,e,!0,t)||e}const Pm=Symbol.for("v-ndc");function Vm(e,t,n=!0,r=!1){const s=ge||te;if(s){const i=s.type;{const c=I_(i,!1);if(c&&(c===t||c===Ie(t)||c===Wi(Ie(t))))return i}const a=zl(s[e]||i[e],t)||zl(s.appContext[e],t);return!a&&r?i:a}}function zl(e,t){return e&&(e[t]||e[Ie(t)]||e[Wi(Ie(t))])}function Kl(e,t,n,r){let s;const i=n,a=rt(e);if(a||Ot(e)){const c=a&&wr(e);let u=!1,f=!1;c&&(u=!Re(e),f=Qn(e),e=Yi(e)),s=new Array(e.length);for(let d=0,g=e.length;d<g;d++)s[d]=t(u?f?Ai(re(e[d])):re(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i)}else if(Ct(e))if(e[Symbol.iterator])s=Array.from(e,(c,u)=>t(c,u,void 0,i));else{const c=Object.keys(e);s=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const la=e=>e?Bf(e)?eo(e):la(e.parent):null,ms=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>la(e.parent),$root:e=>la(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>If(e),$forceUpdate:e=>e.f||(e.f=()=>{Ja(e.update)}),$nextTick:e=>e.n||(e.n=lm.bind(e.proxy)),$watch:e=>Jm.bind(e)}),Fo=(e,t)=>e!==wt&&!e.__isScriptSetup&&mt(e,t),Dm={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:u}=e;let f;if(t[0]!=="$"){const S=a[t];if(S!==void 0)switch(S){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Fo(r,t))return a[t]=1,r[t];if(s!==wt&&mt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&mt(f,t))return a[t]=3,i[t];if(n!==wt&&mt(n,t))return a[t]=4,n[t];ua&&(a[t]=0)}}const d=ms[t];let g,T;if(d)return t==="$attrs"&&Jt(e.attrs,"get",""),d(e);if((g=c.__cssModules)&&(g=g[t]))return g;if(n!==wt&&mt(n,t))return a[t]=4,n[t];if(T=u.config.globalProperties,mt(T,t))return T[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Fo(s,t)?(s[t]=n,!0):r!==wt&&mt(r,t)?(r[t]=n,!0):mt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},c){let u,f;return!!(n[c]||e!==wt&&c[0]!=="$"&&mt(e,c)||Fo(t,c)||(u=i[0])&&mt(u,c)||mt(r,c)||mt(ms,c)||mt(s.config.globalProperties,c)||(f=a.__cssModules)&&f[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:mt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gl(e){return rt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ua=!0;function xm(e){const t=If(e),n=e.proxy,r=e.ctx;ua=!1,t.beforeCreate&&Wl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:T,beforeUpdate:S,updated:L,activated:B,deactivated:j,beforeDestroy:G,beforeUnmount:Q,destroyed:J,unmounted:W,render:ht,renderTracked:Tt,renderTriggered:w,errorCaptured:m,serverPrefetch:E,expose:A,inheritAttrs:I,components:b,directives:_,filters:Ut}=t;if(f&&Nm(f,r,null),a)for(const bt in a){const gt=a[bt];it(gt)&&(r[bt]=gt.bind(n))}if(s){const bt=s.call(n,n);Ct(bt)&&(e.data=Qa(bt))}if(ua=!0,i)for(const bt in i){const gt=i[bt],ye=it(gt)?gt.bind(n,n):it(gt.get)?gt.get.bind(n,n):Le,or=!it(gt)&&it(gt.set)?gt.set.bind(n):Le,Ve=v_({get:ye,set:or});Object.defineProperty(r,bt,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:ue=>Ve.value=ue})}if(c)for(const bt in c)Tf(c[bt],r,n,bt);if(u){const bt=it(u)?u.call(n):u;Reflect.ownKeys(bt).forEach(gt=>{Um(gt,bt[gt])})}d&&Wl(d,e,"c");function qt(bt,gt){rt(gt)?gt.forEach(ye=>bt(ye.bind(n))):gt&&bt(gt.bind(n))}if(qt(Em,g),qt(Tm,T),qt(Im,S),qt(wm,L),qt(mm,B),qt(_m,j),qt(Sm,m),qt(Rm,Tt),qt(bm,w),qt(vm,Q),qt(Ef,W),qt(Am,E),rt(A))if(A.length){const bt=e.exposed||(e.exposed={});A.forEach(gt=>{Object.defineProperty(bt,gt,{get:()=>n[gt],set:ye=>n[gt]=ye,enumerable:!0})})}else e.exposed||(e.exposed={});ht&&e.render===Le&&(e.render=ht),I!=null&&(e.inheritAttrs=I),b&&(e.components=b),_&&(e.directives=_),E&&mf(e)}function Nm(e,t,n=Le){rt(e)&&(e=ha(e));for(const r in e){const s=e[r];let i;Ct(s)?"default"in s?i=gi(s.from||r,s.default,!0):i=gi(s.from||r):i=gi(s),ie(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Wl(e,t,n){He(rt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tf(e,t,n,r){let s=r.includes(".")?Mf(n,r):()=>n[r];if(Ot(e)){const i=t[e];it(i)&&Bo(s,i)}else if(it(e))Bo(s,e.bind(n));else if(Ct(e))if(rt(e))e.forEach(i=>Tf(i,t,n,r));else{const i=it(e.handler)?e.handler.bind(n):t[e.handler];it(i)&&Bo(s,i,e)}}function If(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let u;return c?u=c:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>Pi(u,f,a,!0)),Pi(u,t,a)),Ct(t)&&i.set(t,u),u}function Pi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Pi(e,i,n,!0),s&&s.forEach(a=>Pi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const c=Mm[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const Mm={data:Ql,props:Yl,emits:Yl,methods:os,computed:os,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:os,directives:os,watch:km,provide:Ql,inject:Om};function Ql(e,t){return t?e?function(){return oe(it(e)?e.call(this,this):e,it(t)?t.call(this,this):t)}:t:e}function Om(e,t){return os(ha(e),ha(t))}function ha(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function os(e,t){return e?oe(Object.create(null),e,t):t}function Yl(e,t){return e?rt(e)&&rt(t)?[...new Set([...e,...t])]:oe(Object.create(null),Gl(e),Gl(t??{})):t}function km(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function wf(){return{app:null,config:{isNativeTag:Uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Fm(e,t){return function(r,s=null){it(r)||(r=oe({},r)),s!=null&&!Ct(s)&&(s=null);const i=wf(),a=new WeakSet,c=[];let u=!1;const f=i.app={_uid:Lm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:A_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&it(d.install)?(a.add(d),d.install(f,...g)):it(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,T){if(!u){const S=f._ceVNode||Se(r,s);return S.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),e(S,d,T),u=!0,f._container=d,d.__vue_app__=f,eo(S.component)}},onUnmount(d){c.push(d)},unmount(){u&&(He(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=Ar;Ar=f;try{return d()}finally{Ar=g}}};return f}}let Ar=null;function Um(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function gi(e,t,n=!1){const r=m_();if(r||Ar){let s=Ar?Ar._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&it(t)?t.call(r&&r.proxy):t}}const vf={},Af=()=>Object.create(vf),bf=e=>Object.getPrototypeOf(e)===vf;function Bm(e,t,n,r=!1){const s={},i=Af();e.propsDefaults=Object.create(null),Rf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:tm(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function jm(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,c=Et(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let T=d[g];if(Zi(e.emitsOptions,T))continue;const S=t[T];if(u)if(mt(i,T))S!==i[T]&&(i[T]=S,f=!0);else{const L=Ie(T);s[L]=fa(u,c,L,S,e,!1)}else S!==i[T]&&(i[T]=S,f=!0)}}}else{Rf(e,t,s,i)&&(f=!0);let d;for(const g in c)(!t||!mt(t,g)&&((d=tr(g))===g||!mt(t,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=fa(u,c,g,void 0,e,!0)):delete s[g]);if(i!==c)for(const g in i)(!t||!mt(t,g))&&(delete i[g],f=!0)}f&&Ye(e.attrs,"set","")}function Rf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,c;if(t)for(let u in t){if(hs(u))continue;const f=t[u];let d;s&&mt(s,d=Ie(u))?!i||!i.includes(d)?n[d]=f:(c||(c={}))[d]=f:Zi(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=Et(n),f=c||wt;for(let d=0;d<i.length;d++){const g=i[d];n[g]=fa(s,u,g,f[g],e,!mt(f,g))}}return a}function fa(e,t,n,r,s,i){const a=e[n];if(a!=null){const c=mt(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&it(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=js(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===tr(n))&&(r=!0))}return r}const $m=new WeakMap;function Sf(e,t,n=!1){const r=n?$m:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},c=[];let u=!1;if(!it(e)){const d=g=>{u=!0;const[T,S]=Sf(g,t,!0);oe(a,T),S&&c.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ct(e)&&r.set(e,Tr),Tr;if(rt(i))for(let d=0;d<i.length;d++){const g=Ie(i[d]);Xl(g)&&(a[g]=wt)}else if(i)for(const d in i){const g=Ie(d);if(Xl(g)){const T=i[d],S=a[g]=rt(T)||it(T)?{type:T}:oe({},T),L=S.type;let B=!1,j=!0;if(rt(L))for(let G=0;G<L.length;++G){const Q=L[G],J=it(Q)&&Q.name;if(J==="Boolean"){B=!0;break}else J==="String"&&(j=!1)}else B=it(L)&&L.name==="Boolean";S[0]=B,S[1]=j,(B||mt(S,"default"))&&c.push(g)}}const f=[a,c];return Ct(e)&&r.set(e,f),f}function Xl(e){return e[0]!=="$"&&!hs(e)}const tc=e=>e==="_"||e==="_ctx"||e==="$stable",ec=e=>rt(e)?e.map(ke):[ke(e)],qm=(e,t,n)=>{if(t._n)return t;const r=fm((...s)=>ec(t(...s)),n);return r._c=!1,r},Cf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(tc(s))continue;const i=e[s];if(it(i))t[s]=qm(s,i,r);else if(i!=null){const a=ec(i);t[s]=()=>a}}},Pf=(e,t)=>{const n=ec(t);e.slots.default=()=>n},Vf=(e,t,n)=>{for(const r in t)(n||!tc(r))&&(e[r]=t[r])},Hm=(e,t,n)=>{const r=e.slots=Af();if(e.vnode.shapeFlag&32){const s=t._;s?(Vf(r,t,n),n&&Hh(r,"_",s,!0)):Cf(t,r)}else t&&Pf(e,t)},zm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=wt;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Vf(s,t,n):(i=!t.$stable,Cf(t,s)),a=t}else t&&(Pf(e,t),a={default:1});if(i)for(const c in s)!tc(c)&&a[c]==null&&delete s[c]},pe=o_;function Km(e){return Gm(e)}function Gm(e,t){const n=Qi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:T,setScopeId:S=Le,insertStaticContent:L}=e,B=(y,v,P,U=null,x=null,N=null,q=void 0,F=null,O=!!v.dynamicChildren)=>{if(y===v)return;y&&!is(y,v)&&(U=an(y),ue(y,x,N,!0),y=null),v.patchFlag===-2&&(O=!1,v.dynamicChildren=null);const{type:k,ref:Z,shapeFlag:H}=v;switch(k){case to:j(y,v,P,U);break;case wn:G(y,v,P,U);break;case jo:y==null&&Q(v,P,U,q);break;case ve:b(y,v,P,U,x,N,q,F,O);break;default:H&1?ht(y,v,P,U,x,N,q,F,O):H&6?_(y,v,P,U,x,N,q,F,O):(H&64||H&128)&&k.process(y,v,P,U,x,N,q,F,O,Nn)}Z!=null&&x?ps(Z,y&&y.ref,N,v||y,!v):Z==null&&y&&y.ref!=null&&ps(y.ref,null,N,y,!0)},j=(y,v,P,U)=>{if(y==null)r(v.el=c(v.children),P,U);else{const x=v.el=y.el;v.children!==y.children&&f(x,v.children)}},G=(y,v,P,U)=>{y==null?r(v.el=u(v.children||""),P,U):v.el=y.el},Q=(y,v,P,U)=>{[y.el,y.anchor]=L(y.children,v,P,U,y.el,y.anchor)},J=({el:y,anchor:v},P,U)=>{let x;for(;y&&y!==v;)x=T(y),r(y,P,U),y=x;r(v,P,U)},W=({el:y,anchor:v})=>{let P;for(;y&&y!==v;)P=T(y),s(y),y=P;s(v)},ht=(y,v,P,U,x,N,q,F,O)=>{v.type==="svg"?q="svg":v.type==="math"&&(q="mathml"),y==null?Tt(v,P,U,x,N,q,F,O):E(y,v,x,N,q,F,O)},Tt=(y,v,P,U,x,N,q,F)=>{let O,k;const{props:Z,shapeFlag:H,transition:X,dirs:tt}=y;if(O=y.el=a(y.type,N,Z&&Z.is,Z),H&8?d(O,y.children):H&16&&m(y.children,O,null,U,x,Uo(y,N),q,F),tt&&Un(y,null,U,"created"),w(O,y,y.scopeId,q,U),Z){for(const yt in Z)yt!=="value"&&!hs(yt)&&i(O,yt,null,Z[yt],N,U);"value"in Z&&i(O,"value",null,Z.value,N),(k=Z.onVnodeBeforeMount)&&Ne(k,U,y)}tt&&Un(y,null,U,"beforeMount");const ct=Wm(x,X);ct&&X.beforeEnter(O),r(O,v,P),((k=Z&&Z.onVnodeMounted)||ct||tt)&&pe(()=>{k&&Ne(k,U,y),ct&&X.enter(O),tt&&Un(y,null,U,"mounted")},x)},w=(y,v,P,U,x)=>{if(P&&S(y,P),U)for(let N=0;N<U.length;N++)S(y,U[N]);if(x){let N=x.subTree;if(v===N||kf(N.type)&&(N.ssContent===v||N.ssFallback===v)){const q=x.vnode;w(y,q,q.scopeId,q.slotScopeIds,x.parent)}}},m=(y,v,P,U,x,N,q,F,O=0)=>{for(let k=O;k<y.length;k++){const Z=y[k]=F?mn(y[k]):ke(y[k]);B(null,Z,v,P,U,x,N,q,F)}},E=(y,v,P,U,x,N,q)=>{const F=v.el=y.el;let{patchFlag:O,dynamicChildren:k,dirs:Z}=v;O|=y.patchFlag&16;const H=y.props||wt,X=v.props||wt;let tt;if(P&&Bn(P,!1),(tt=X.onVnodeBeforeUpdate)&&Ne(tt,P,v,y),Z&&Un(v,y,P,"beforeUpdate"),P&&Bn(P,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&d(F,""),k?A(y.dynamicChildren,k,F,P,U,Uo(v,x),N):q||gt(y,v,F,null,P,U,Uo(v,x),N,!1),O>0){if(O&16)I(F,H,X,P,x);else if(O&2&&H.class!==X.class&&i(F,"class",null,X.class,x),O&4&&i(F,"style",H.style,X.style,x),O&8){const ct=v.dynamicProps;for(let yt=0;yt<ct.length;yt++){const pt=ct[yt],Wt=H[pt],Qt=X[pt];(Qt!==Wt||pt==="value")&&i(F,pt,Wt,Qt,x,P)}}O&1&&y.children!==v.children&&d(F,v.children)}else!q&&k==null&&I(F,H,X,P,x);((tt=X.onVnodeUpdated)||Z)&&pe(()=>{tt&&Ne(tt,P,v,y),Z&&Un(v,y,P,"updated")},U)},A=(y,v,P,U,x,N,q)=>{for(let F=0;F<v.length;F++){const O=y[F],k=v[F],Z=O.el&&(O.type===ve||!is(O,k)||O.shapeFlag&198)?g(O.el):P;B(O,k,Z,null,U,x,N,q,!0)}},I=(y,v,P,U,x)=>{if(v!==P){if(v!==wt)for(const N in v)!hs(N)&&!(N in P)&&i(y,N,v[N],null,x,U);for(const N in P){if(hs(N))continue;const q=P[N],F=v[N];q!==F&&N!=="value"&&i(y,N,F,q,x,U)}"value"in P&&i(y,"value",v.value,P.value,x)}},b=(y,v,P,U,x,N,q,F,O)=>{const k=v.el=y?y.el:c(""),Z=v.anchor=y?y.anchor:c("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:tt}=v;tt&&(F=F?F.concat(tt):tt),y==null?(r(k,P,U),r(Z,P,U),m(v.children||[],P,Z,x,N,q,F,O)):H>0&&H&64&&X&&y.dynamicChildren?(A(y.dynamicChildren,X,P,x,N,q,F),(v.key!=null||x&&v===x.subTree)&&Df(y,v,!0)):gt(y,v,P,Z,x,N,q,F,O)},_=(y,v,P,U,x,N,q,F,O)=>{v.slotScopeIds=F,y==null?v.shapeFlag&512?x.ctx.activate(v,P,U,q,O):Ut(v,P,U,x,N,q,O):Pe(y,v,O)},Ut=(y,v,P,U,x,N,q)=>{const F=y.component=g_(y,U,x);if(_f(y)&&(F.ctx.renderer=Nn),__(F,!1,q),F.asyncDep){if(x&&x.registerDep(F,qt,q),!y.el){const O=F.subTree=Se(wn);G(null,O,v,P),y.placeholder=O.el}}else qt(F,y,v,P,x,N,q)},Pe=(y,v,P)=>{const U=v.component=y.component;if(s_(y,v,P))if(U.asyncDep&&!U.asyncResolved){bt(U,v,P);return}else U.next=v,U.update();else v.el=y.el,U.vnode=v},qt=(y,v,P,U,x,N,q)=>{const F=()=>{if(y.isMounted){let{next:H,bu:X,u:tt,parent:ct,vnode:yt}=y;{const fe=xf(y);if(fe){H&&(H.el=yt.el,bt(y,H,q)),fe.asyncDep.then(()=>{y.isUnmounted||F()});return}}let pt=H,Wt;Bn(y,!1),H?(H.el=yt.el,bt(y,H,q)):H=yt,X&&pi(X),(Wt=H.props&&H.props.onVnodeBeforeUpdate)&&Ne(Wt,ct,H,yt),Bn(y,!0);const Qt=Zl(y),he=y.subTree;y.subTree=Qt,B(he,Qt,g(he.el),an(he),y,x,N),H.el=Qt.el,pt===null&&i_(y,Qt.el),tt&&pe(tt,x),(Wt=H.props&&H.props.onVnodeUpdated)&&pe(()=>Ne(Wt,ct,H,yt),x)}else{let H;const{el:X,props:tt}=v,{bm:ct,m:yt,parent:pt,root:Wt,type:Qt}=y,he=gs(v);Bn(y,!1),ct&&pi(ct),!he&&(H=tt&&tt.onVnodeBeforeMount)&&Ne(H,pt,v),Bn(y,!0);{Wt.ce&&Wt.ce._def.shadowRoot!==!1&&Wt.ce._injectChildStyle(Qt);const fe=y.subTree=Zl(y);B(null,fe,P,U,y,x,N),v.el=fe.el}if(yt&&pe(yt,x),!he&&(H=tt&&tt.onVnodeMounted)){const fe=v;pe(()=>Ne(H,pt,fe),x)}(v.shapeFlag&256||pt&&gs(pt.vnode)&&pt.vnode.shapeFlag&256)&&y.a&&pe(y.a,x),y.isMounted=!0,v=P=U=null}};y.scope.on();const O=y.effect=new Wh(F);y.scope.off();const k=y.update=O.run.bind(O),Z=y.job=O.runIfDirty.bind(O);Z.i=y,Z.id=y.uid,O.scheduler=()=>Ja(Z),Bn(y,!0),k()},bt=(y,v,P)=>{v.component=y;const U=y.vnode.props;y.vnode=v,y.next=null,jm(y,v.props,U,P),zm(y,v.children,P),Je(),$l(y),Ze()},gt=(y,v,P,U,x,N,q,F,O=!1)=>{const k=y&&y.children,Z=y?y.shapeFlag:0,H=v.children,{patchFlag:X,shapeFlag:tt}=v;if(X>0){if(X&128){or(k,H,P,U,x,N,q,F,O);return}else if(X&256){ye(k,H,P,U,x,N,q,F,O);return}}tt&8?(Z&16&&Ke(k,x,N),H!==k&&d(P,H)):Z&16?tt&16?or(k,H,P,U,x,N,q,F,O):Ke(k,x,N,!0):(Z&8&&d(P,""),tt&16&&m(H,P,U,x,N,q,F,O))},ye=(y,v,P,U,x,N,q,F,O)=>{y=y||Tr,v=v||Tr;const k=y.length,Z=v.length,H=Math.min(k,Z);let X;for(X=0;X<H;X++){const tt=v[X]=O?mn(v[X]):ke(v[X]);B(y[X],tt,P,null,x,N,q,F,O)}k>Z?Ke(y,x,N,!0,!1,H):m(v,P,U,x,N,q,F,O,H)},or=(y,v,P,U,x,N,q,F,O)=>{let k=0;const Z=v.length;let H=y.length-1,X=Z-1;for(;k<=H&&k<=X;){const tt=y[k],ct=v[k]=O?mn(v[k]):ke(v[k]);if(is(tt,ct))B(tt,ct,P,null,x,N,q,F,O);else break;k++}for(;k<=H&&k<=X;){const tt=y[H],ct=v[X]=O?mn(v[X]):ke(v[X]);if(is(tt,ct))B(tt,ct,P,null,x,N,q,F,O);else break;H--,X--}if(k>H){if(k<=X){const tt=X+1,ct=tt<Z?v[tt].el:U;for(;k<=X;)B(null,v[k]=O?mn(v[k]):ke(v[k]),P,ct,x,N,q,F,O),k++}}else if(k>X)for(;k<=H;)ue(y[k],x,N,!0),k++;else{const tt=k,ct=k,yt=new Map;for(k=ct;k<=X;k++){const Ht=v[k]=O?mn(v[k]):ke(v[k]);Ht.key!=null&&yt.set(Ht.key,k)}let pt,Wt=0;const Qt=X-ct+1;let he=!1,fe=0;const we=new Array(Qt);for(k=0;k<Qt;k++)we[k]=0;for(k=tt;k<=H;k++){const Ht=y[k];if(Wt>=Qt){ue(Ht,x,N,!0);continue}let Bt;if(Ht.key!=null)Bt=yt.get(Ht.key);else for(pt=ct;pt<=X;pt++)if(we[pt-ct]===0&&is(Ht,v[pt])){Bt=pt;break}Bt===void 0?ue(Ht,x,N,!0):(we[Bt-ct]=k+1,Bt>=fe?fe=Bt:he=!0,B(Ht,v[Bt],P,null,x,N,q,F,O),Wt++)}const cr=he?Qm(we):Tr;for(pt=cr.length-1,k=Qt-1;k>=0;k--){const Ht=ct+k,Bt=v[Ht],qr=v[Ht+1],Mn=Ht+1<Z?qr.el||qr.placeholder:U;we[k]===0?B(null,Bt,P,Mn,x,N,q,F,O):he&&(pt<0||k!==cr[pt]?Ve(Bt,P,Mn,2):pt--)}}},Ve=(y,v,P,U,x=null)=>{const{el:N,type:q,transition:F,children:O,shapeFlag:k}=y;if(k&6){Ve(y.component.subTree,v,P,U);return}if(k&128){y.suspense.move(v,P,U);return}if(k&64){q.move(y,v,P,Nn);return}if(q===ve){r(N,v,P);for(let H=0;H<O.length;H++)Ve(O[H],v,P,U);r(y.anchor,v,P);return}if(q===jo){J(y,v,P);return}if(U!==2&&k&1&&F)if(U===0)F.beforeEnter(N),r(N,v,P),pe(()=>F.enter(N),x);else{const{leave:H,delayLeave:X,afterLeave:tt}=F,ct=()=>{y.ctx.isUnmounted?s(N):r(N,v,P)},yt=()=>{N._isLeaving&&N[gm](!0),H(N,()=>{ct(),tt&&tt()})};X?X(N,ct,yt):yt()}else r(N,v,P)},ue=(y,v,P,U=!1,x=!1)=>{const{type:N,props:q,ref:F,children:O,dynamicChildren:k,shapeFlag:Z,patchFlag:H,dirs:X,cacheIndex:tt}=y;if(H===-2&&(x=!1),F!=null&&(Je(),ps(F,null,P,y,!0),Ze()),tt!=null&&(v.renderCache[tt]=void 0),Z&256){v.ctx.deactivate(y);return}const ct=Z&1&&X,yt=!gs(y);let pt;if(yt&&(pt=q&&q.onVnodeBeforeUnmount)&&Ne(pt,v,y),Z&6)jr(y.component,P,U);else{if(Z&128){y.suspense.unmount(P,U);return}ct&&Un(y,null,v,"beforeUnmount"),Z&64?y.type.remove(y,v,P,Nn,U):k&&!k.hasOnce&&(N!==ve||H>0&&H&64)?Ke(k,v,P,!1,!0):(N===ve&&H&384||!x&&Z&16)&&Ke(O,v,P),U&&Br(y)}(yt&&(pt=q&&q.onVnodeUnmounted)||ct)&&pe(()=>{pt&&Ne(pt,v,y),ct&&Un(y,null,v,"unmounted")},P)},Br=y=>{const{type:v,el:P,anchor:U,transition:x}=y;if(v===ve){ar(P,U);return}if(v===jo){W(y);return}const N=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:F}=x,O=()=>q(P,N);F?F(y.el,N,O):O()}else N()},ar=(y,v)=>{let P;for(;y!==v;)P=T(y),s(y),y=P;s(v)},jr=(y,v,P)=>{const{bum:U,scope:x,job:N,subTree:q,um:F,m:O,a:k}=y;Jl(O),Jl(k),U&&pi(U),x.stop(),N&&(N.flags|=8,ue(q,y,v,P)),F&&pe(F,v),pe(()=>{y.isUnmounted=!0},v)},Ke=(y,v,P,U=!1,x=!1,N=0)=>{for(let q=N;q<y.length;q++)ue(y[q],v,P,U,x)},an=y=>{if(y.shapeFlag&6)return an(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const v=T(y.anchor||y.el),P=v&&v[dm];return P?T(P):v};let xn=!1;const $r=(y,v,P)=>{y==null?v._vnode&&ue(v._vnode,null,null,!0):B(v._vnode||null,y,v,null,null,null,P),v._vnode=y,xn||(xn=!0,$l(),df(),xn=!1)},Nn={p:B,um:ue,m:Ve,r:Br,mt:Ut,mc:m,pc:gt,pbc:A,n:an,o:e};return{render:$r,hydrate:void 0,createApp:Fm($r)}}function Uo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wm(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Df(e,t,n=!1){const r=e.children,s=t.children;if(rt(r)&&rt(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Df(a,c)),c.type===to&&c.patchFlag!==-1&&(c.el=a.el),c.type===wn&&!c.el&&(c.el=a.el)}}function Qm(e){const t=e.slice(),n=[0];let r,s,i,a,c;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<f?i=c+1:a=c;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function xf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xf(t)}function Jl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ym=Symbol.for("v-scx"),Xm=()=>gi(Ym);function Bo(e,t,n){return Nf(e,t,n)}function Nf(e,t,n=wt){const{immediate:r,deep:s,flush:i,once:a}=n,c=oe({},n),u=t&&r||!t&&i!=="post";let f;if(Cs){if(i==="sync"){const S=Xm();f=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=Le,S.resume=Le,S.pause=Le,S}}const d=te;c.call=(S,L,B)=>He(S,d,L,B);let g=!1;i==="post"?c.scheduler=S=>{pe(S,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(S,L)=>{L?S():Ja(S)}),c.augmentJob=S=>{t&&(S.flags|=4),g&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const T=am(e,t,c);return Cs&&(f?f.push(T):u&&T()),T}function Jm(e,t,n){const r=this.proxy,s=Ot(e)?e.includes(".")?Mf(r,e):()=>r[e]:e.bind(r,r);let i;it(t)?i=t:(i=t.handler,n=t);const a=js(this),c=Nf(s,i.bind(r),n);return a(),c}function Mf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Zm=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ie(t)}Modifiers`]||e[`${tr(t)}Modifiers`];function t_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||wt;let s=n;const i=t.startsWith("update:"),a=i&&Zm(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ot(d)?d.trim():d)),a.number&&(s=n.map(ra)));let c,u=r[c=No(t)]||r[c=No(Ie(t))];!u&&i&&(u=r[c=No(tr(t))]),u&&He(u,e,6,s);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,He(f,e,6,s)}}const e_=new WeakMap;function Of(e,t,n=!1){const r=n?e_:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},c=!1;if(!it(e)){const u=f=>{const d=Of(f,t,!0);d&&(c=!0,oe(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(Ct(e)&&r.set(e,null),null):(rt(i)?i.forEach(u=>a[u]=null):oe(a,i),Ct(e)&&r.set(e,a),a)}function Zi(e,t){return!e||!zi(t)?!1:(t=t.slice(2).replace(/Once$/,""),mt(e,t[0].toLowerCase()+t.slice(1))||mt(e,tr(t))||mt(e,t))}function Zl(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:T,setupState:S,ctx:L,inheritAttrs:B}=e,j=Si(e);let G,Q;try{if(n.shapeFlag&4){const W=s||r,ht=W;G=ke(f.call(ht,W,d,g,S,T,L)),Q=c}else{const W=t;G=ke(W.length>1?W(g,{attrs:c,slots:a,emit:u}):W(g,null)),Q=t.props?c:n_(c)}}catch(W){_s.length=0,Xi(W,e,1),G=Se(wn)}let J=G;if(Q&&B!==!1){const W=Object.keys(Q),{shapeFlag:ht}=J;W.length&&ht&7&&(i&&W.some(Ba)&&(Q=r_(Q,i)),J=Cr(J,Q,!1,!0))}return n.dirs&&(J=Cr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&Za(J,n.transition),G=J,Si(j),G}const n_=e=>{let t;for(const n in e)(n==="class"||n==="style"||zi(n))&&((t||(t={}))[n]=e[n]);return t},r_=(e,t)=>{const n={};for(const r in e)(!Ba(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function s_(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:c,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?tu(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const T=d[g];if(a[T]!==r[T]&&!Zi(f,T))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?tu(r,a,f):!0:!!a;return!1}function tu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Zi(n,i))return!0}return!1}function i_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kf=e=>e.__isSuspense;function o_(e,t){t&&t.pendingBranch?rt(e)?t.effects.push(...e):t.effects.push(e):hm(e)}const ve=Symbol.for("v-fgt"),to=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),_s=[];let me=null;function Qe(e=!1){_s.push(me=e?null:[])}function a_(){_s.pop(),me=_s[_s.length-1]||null}let Ss=1;function eu(e,t=!1){Ss+=e,e<0&&me&&t&&(me.hasOnce=!0)}function Lf(e){return e.dynamicChildren=Ss>0?me||Tr:null,a_(),Ss>0&&me&&me.push(e),e}function gn(e,t,n,r,s,i){return Lf(at(e,t,n,r,s,i,!0))}function c_(e,t,n,r,s){return Lf(Se(e,t,n,r,s,!0))}function Ff(e){return e?e.__v_isVNode===!0:!1}function is(e,t){return e.type===t.type&&e.key===t.key}const Uf=({key:e})=>e??null,mi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ot(e)||ie(e)||it(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function at(e,t=null,n=null,r=0,s=null,i=e===ve?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uf(t),ref:t&&mi(t),scopeId:gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return c?(rc(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Ot(n)?8:16),Ss>0&&!a&&me&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&me.push(u),u}const Se=l_;function l_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Pm)&&(e=wn),Ff(e)){const c=Cr(e,t,!0);return n&&rc(c,n),Ss>0&&!i&&me&&(c.shapeFlag&6?me[me.indexOf(e)]=c:me.push(c)),c.patchFlag=-2,c}if(w_(e)&&(e=e.__vccOpts),t){t=u_(t);let{class:c,style:u}=t;c&&!Ot(c)&&(t.class=Ha(c)),Ct(u)&&(Xa(u)&&!rt(u)&&(u=oe({},u)),t.style=qa(u))}const a=Ot(e)?1:kf(e)?128:pm(e)?64:Ct(e)?4:it(e)?2:0;return at(e,t,n,r,s,a,i,!0)}function u_(e){return e?Xa(e)||bf(e)?oe({},e):e:null}function Cr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:u}=e,f=t?f_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Uf(f),ref:t&&t.ref?n&&i?rt(i)?i.concat(mi(t)):[i,mi(t)]:mi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cr(e.ssContent),ssFallback:e.ssFallback&&Cr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Za(d,u.clone(d)),d}function nc(e=" ",t=0){return Se(to,null,e,t)}function h_(e="",t=!1){return t?(Qe(),c_(wn,null,e)):Se(wn,null,e)}function ke(e){return e==null||typeof e=="boolean"?Se(wn):rt(e)?Se(ve,null,e.slice()):Ff(e)?mn(e):Se(to,null,String(e))}function mn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cr(e)}function rc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(rt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),rc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!bf(t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else it(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[nc(t)]):n=8);e.children=t,e.shapeFlag|=n}function f_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ha([t.class,r.class]));else if(s==="style")t.style=qa([t.style,r.style]);else if(zi(s)){const i=t[s],a=r[s];a&&i!==a&&!(rt(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ne(e,t,n,r=null){He(e,t,7,[n,r])}const d_=wf();let p_=0;function g_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||d_,i={uid:p_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sf(r,s),emitsOptions:Of(r,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:r.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=t_.bind(null,i),e.ce&&e.ce(i),i}let te=null;const m_=()=>te||ge;let Vi,da;{const e=Qi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Vi=t("__VUE_INSTANCE_SETTERS__",n=>te=n),da=t("__VUE_SSR_SETTERS__",n=>Cs=n)}const js=e=>{const t=te;return Vi(e),e.scope.on(),()=>{e.scope.off(),Vi(t)}},nu=()=>{te&&te.scope.off(),Vi(null)};function Bf(e){return e.vnode.shapeFlag&4}let Cs=!1;function __(e,t=!1,n=!1){t&&da(t);const{props:r,children:s}=e.vnode,i=Bf(e);Bm(e,r,i,t),Hm(e,s,n||t);const a=i?y_(e,t):void 0;return t&&da(!1),a}function y_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Dm);const{setup:r}=n;if(r){Je();const s=e.setupContext=r.length>1?T_(e):null,i=js(e),a=Bs(r,e,0,[e.props,s]),c=jh(a);if(Ze(),i(),(c||e.sp)&&!gs(e)&&mf(e),c){if(a.then(nu,nu),t)return a.then(u=>{ru(e,u)}).catch(u=>{Xi(u,e,0)});e.asyncDep=a}else ru(e,a)}else jf(e)}function ru(e,t,n){it(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=uf(t)),jf(e)}function jf(e,t,n){const r=e.type;e.render||(e.render=r.render||Le);{const s=js(e);Je();try{xm(e)}finally{Ze(),s()}}}const E_={get(e,t){return Jt(e,"get",""),e[t]}};function T_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,E_),slots:e.slots,emit:e.emit,expose:t}}function eo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(uf(em(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ms)return ms[n](e)},has(t,n){return n in t||n in ms}})):e.proxy}function I_(e,t=!0){return it(e)?e.displayName||e.name:e.name||t&&e.__name}function w_(e){return it(e)&&"__vccOpts"in e}const v_=(e,t)=>im(e,t,Cs),A_="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pa;const su=typeof window<"u"&&window.trustedTypes;if(su)try{pa=su.createPolicy("vue",{createHTML:e=>e})}catch{}const $f=pa?e=>pa.createHTML(e):e=>e,b_="http://www.w3.org/2000/svg",R_="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,iu=We&&We.createElement("template"),S_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?We.createElementNS(b_,e):t==="mathml"?We.createElementNS(R_,e):n?We.createElement(e,{is:n}):We.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{iu.innerHTML=$f(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=iu.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},C_=Symbol("_vtc");function P_(e,t,n){const r=e[C_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ou=Symbol("_vod"),V_=Symbol("_vsh"),D_=Symbol(""),x_=/(?:^|;)\s*display\s*:/;function N_(e,t,n){const r=e.style,s=Ot(n);let i=!1;if(n&&!s){if(t)if(Ot(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&_i(r,c,"")}else for(const a in t)n[a]==null&&_i(r,a,"");for(const a in n)a==="display"&&(i=!0),_i(r,a,n[a])}else if(s){if(t!==n){const a=r[D_];a&&(n+=";"+a),r.cssText=n,i=x_.test(n)}}else t&&e.removeAttribute("style");ou in e&&(e[ou]=i?r.display:"",e[V_]&&(r.display="none"))}const au=/\s*!important$/;function _i(e,t,n){if(rt(n))n.forEach(r=>_i(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=M_(e,t);au.test(n)?e.setProperty(tr(r),n.replace(au,""),"important"):e[r]=n}}const cu=["Webkit","Moz","ms"],$o={};function M_(e,t){const n=$o[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return $o[t]=r;r=Wi(r);for(let s=0;s<cu.length;s++){const i=cu[s]+r;if(i in e)return $o[t]=i}return t}const lu="http://www.w3.org/1999/xlink";function uu(e,t,n,r,s,i=Ng(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(lu,t.slice(6,t.length)):e.setAttributeNS(lu,t,n):n==null||i&&!zh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Vn(n)?String(n):n)}function hu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$f(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=zh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function gr(e,t,n,r){e.addEventListener(t,n,r)}function O_(e,t,n,r){e.removeEventListener(t,n,r)}const fu=Symbol("_vei");function k_(e,t,n,r,s=null){const i=e[fu]||(e[fu]={}),a=i[t];if(r&&a)a.value=r;else{const[c,u]=L_(t);if(r){const f=i[t]=B_(r,s);gr(e,c,f,u)}else a&&(O_(e,c,a,u),i[t]=void 0)}}const du=/(?:Once|Passive|Capture)$/;function L_(e){let t;if(du.test(e)){t={};let r;for(;r=e.match(du);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tr(e.slice(2)),t]}let qo=0;const F_=Promise.resolve(),U_=()=>qo||(F_.then(()=>qo=0),qo=Date.now());function B_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(j_(r,n.value),t,5,[r])};return n.value=e,n.attached=U_(),n}function j_(e,t){if(rt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const pu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?P_(e,r,a):t==="style"?N_(e,n,r):zi(t)?Ba(t)||k_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):q_(e,t,r,a))?(hu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&uu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ot(r))?hu(e,Ie(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),uu(e,t,r,a))};function q_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&pu(t)&&it(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pu(t)&&Ot(n)?!1:t in e}const gu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return rt(t)?n=>pi(t,n):t};function H_(e){e.target.composing=!0}function mu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ho=Symbol("_assign"),ci={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ho]=gu(s);const i=r||s.props&&s.props.type==="number";gr(e,t?"change":"input",a=>{if(a.target.composing)return;let c=e.value;n&&(c=c.trim()),i&&(c=ra(c)),e[Ho](c)}),n&&gr(e,"change",()=>{e.value=e.value.trim()}),t||(gr(e,"compositionstart",H_),gr(e,"compositionend",mu),gr(e,"change",mu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[Ho]=gu(a),e.composing)return;const c=(i||e.type==="number")&&!/^0\d/.test(e.value)?ra(e.value):e.value,u=t??"";c!==u&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===u)||(e.value=u))}},z_=["ctrl","shift","alt","meta"],K_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>z_.some(n=>e[`${n}Key`]&&!t.includes(n))},G_=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<t.length;a++){const c=K_[t[a]];if(c&&c(s,t))return}return e(s,...i)}))},W_=oe({patchProp:$_},S_);let _u;function Q_(){return _u||(_u=Km(W_))}const Y_=((...e)=>{const t=Q_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=J_(r);if(!s)return;const i=t._component;!it(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,X_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function X_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function J_(e){return Ot(e)?document.querySelector(e):e}const Z_=()=>{};var yu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ty=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],c=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,c=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let T=(c&15)<<2|f>>6,S=f&63;u||(S=64,a||(T=64)),r.push(n[d],n[g],n[T],n[S])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ty(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||f==null||g==null)throw new ey;const T=i<<2|c>>4;if(r.push(T),f!==64){const S=c<<4&240|f>>2;if(r.push(S),g!==64){const L=f<<6&192|g;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ny=function(e){const t=qf(e);return Hf.encodeByteArray(t,!0)},Di=function(e){return ny(e).replace(/\./g,"")},ry=function(e){try{return Hf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=()=>sy().__FIREBASE_DEFAULTS__,oy=()=>{if(typeof process>"u"||typeof yu>"u")return;const e=yu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ay=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ry(e[1]);return t&&JSON.parse(t)},sc=()=>{try{return Z_()||iy()||oy()||ay()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},cy=e=>sc()?.emulatorHosts?.[e],ly=e=>{const t=cy(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zf=()=>sc()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hy(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Di(JSON.stringify(n)),Di(JSON.stringify(a)),""].join(".")}const ys={};function dy(){const e={prod:[],emulator:[]};for(const t of Object.keys(ys))ys[t]?e.emulator.push(t):e.prod.push(t);return e}function py(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Eu=!1;function gy(e,t){if(typeof window>"u"||typeof document>"u"||!ic(window.location.host)||ys[e]===t||ys[e]||Eu)return;ys[e]=t;function n(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=dy().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function f(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Eu=!0,a()},T}function d(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function g(){const T=py(r),S=n("text"),L=document.getElementById(S)||document.createElement("span"),B=n("learnmore"),j=document.getElementById(B)||document.createElement("a"),G=n("preprendIcon"),Q=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const J=T.element;c(J),d(j,B);const W=f();u(Q,G),J.append(Q,L,j,W),document.body.appendChild(J)}i?(L.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _y(){const e=sc()?.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ey(){return!_y()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function Ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="FirebaseError";class Dn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Iy,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?wy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Dn(s,c,r)}}function wy(e,t){return e.replace(vy,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const vy=/\{\$([^}]+)}/g;function Ps(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Tu(i)&&Tu(a)){if(!Ps(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=1e3,by=2,Ry=14400*1e3,Sy=.5;function Iu(e,t=Ay,n=by){const r=t*Math.pow(n,e),s=Math.round(Sy*r*(Math.random()-.5)*2);return Math.min(Ry,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return e&&e._delegate?e._delegate:e}class en{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new uy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vy(t))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=$n){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$n){return this.instances.has(t)}getOptions(t=$n){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Py(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$n){return this.component?this.component.multipleInstances?t:$n:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Py(e){return e===$n?void 0:e}function Vy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Cy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(dt||(dt={}));const xy={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},Ny=dt.INFO,My={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},Oy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=My[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oc{constructor(t){this.name=t,this._logLevel=Ny,this._logHandler=Oy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}const ky=(e,t)=>t.some(n=>e instanceof n);let wu,vu;function Ly(){return wu||(wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fy(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,ga=new WeakMap,Qf=new WeakMap,zo=new WeakMap,ac=new WeakMap;function Uy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(yn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Wf.set(n,e)}).catch(()=>{}),ac.set(t,e),t}function By(e){if(ga.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});ga.set(e,t)}let ma={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ga.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jy(e){ma=e(ma)}function $y(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ko(this),t,...n);return Qf.set(r,t.sort?t.sort():[t]),yn(r)}:Fy().includes(e)?function(...t){return e.apply(Ko(this),t),yn(Wf.get(this))}:function(...t){return yn(e.apply(Ko(this),t))}}function qy(e){return typeof e=="function"?$y(e):(e instanceof IDBTransaction&&By(e),ky(e,Ly())?new Proxy(e,ma):e)}function yn(e){if(e instanceof IDBRequest)return Uy(e);if(zo.has(e))return zo.get(e);const t=qy(e);return t!==e&&(zo.set(e,t),ac.set(t,e)),t}const Ko=e=>ac.get(e);function Yf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),c=yn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(yn(a.result),u.oldVersion,u.newVersion,yn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Hy=["get","getKey","getAll","getAllKeys","count"],zy=["put","add","delete","clear"],Go=new Map;function Au(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Go.get(t))return Go.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=zy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hy.includes(n)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return Go.set(t,i),i}jy(e=>({...e,get:(t,n,r)=>Au(t,n)||e.get(t,n,r),has:(t,n)=>!!Au(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gy(e){return e.getComponent()?.type==="VERSION"}const _a="@firebase/app",bu="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new oc("@firebase/app"),Wy="@firebase/app-compat",Qy="@firebase/analytics-compat",Yy="@firebase/analytics",Xy="@firebase/app-check-compat",Jy="@firebase/app-check",Zy="@firebase/auth",tE="@firebase/auth-compat",eE="@firebase/database",nE="@firebase/data-connect",rE="@firebase/database-compat",sE="@firebase/functions",iE="@firebase/functions-compat",oE="@firebase/installations",aE="@firebase/installations-compat",cE="@firebase/messaging",lE="@firebase/messaging-compat",uE="@firebase/performance",hE="@firebase/performance-compat",fE="@firebase/remote-config",dE="@firebase/remote-config-compat",pE="@firebase/storage",gE="@firebase/storage-compat",mE="@firebase/firestore",_E="@firebase/ai",yE="@firebase/firestore-compat",EE="firebase",TE="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",IE={[_a]:"fire-core",[Wy]:"fire-core-compat",[Yy]:"fire-analytics",[Qy]:"fire-analytics-compat",[Jy]:"fire-app-check",[Xy]:"fire-app-check-compat",[Zy]:"fire-auth",[tE]:"fire-auth-compat",[eE]:"fire-rtdb",[nE]:"fire-data-connect",[rE]:"fire-rtdb-compat",[sE]:"fire-fn",[iE]:"fire-fn-compat",[oE]:"fire-iid",[aE]:"fire-iid-compat",[cE]:"fire-fcm",[lE]:"fire-fcm-compat",[uE]:"fire-perf",[hE]:"fire-perf-compat",[fE]:"fire-rc",[dE]:"fire-rc-compat",[pE]:"fire-gcs",[gE]:"fire-gcs-compat",[mE]:"fire-fst",[yE]:"fire-fst-compat",[_E]:"fire-vertex","fire-js":"fire-js",[EE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Map,wE=new Map,Ea=new Map;function Ru(e,t){try{e.container.addComponent(t)}catch(n){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vn(e){const t=e.name;if(Ea.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;Ea.set(t,e);for(const n of xi.values())Ru(n,e);for(const n of wE.values())Ru(n,e);return!0}function $s(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function vE(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new no("app","Firebase",AE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=TE;function Xf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ya,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=zf()),!n)throw En.create("no-options");const i=xi.get(s);if(i){if(Ps(n,i.options)&&Ps(r,i.config))return i;throw En.create("duplicate-app",{appName:s})}const a=new Dy(s);for(const u of Ea.values())a.addComponent(u);const c=new bE(n,r,a);return xi.set(s,c),c}function Jf(e=ya){const t=xi.get(e);if(!t&&e===ya&&zf())return Xf();if(!t)throw En.create("no-app",{appName:e});return t}function Fe(e,t,n){let r=IE[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}vn(new en(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebase-heartbeat-database",CE=1,Vs="firebase-heartbeat-store";let Wo=null;function Zf(){return Wo||(Wo=Yf(SE,CE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw En.create("idb-open",{originalErrorMessage:e.message})})),Wo}async function PE(e){try{const n=(await Zf()).transaction(Vs),r=await n.objectStore(Vs).get(td(e));return await n.done,r}catch(t){if(t instanceof Dn)nn.warn(t.message);else{const n=En.create("idb-get",{originalErrorMessage:t?.message});nn.warn(n.message)}}}async function Su(e,t){try{const r=(await Zf()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(t,td(e)),await r.done}catch(n){if(n instanceof Dn)nn.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n?.message});nn.warn(r.message)}}}function td(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=1024,DE=30;class xE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>DE){const s=OE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){nn.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cu(),{heartbeatsToSend:n,unsentEntries:r}=NE(this._heartbeatsCache.heartbeats),s=Di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nn.warn(t),""}}}function Cu(){return new Date().toISOString().substring(0,10)}function NE(e,t=VE){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Pu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ME{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PE(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Pu(e){return Di(JSON.stringify({version:2,heartbeats:e})).length}function OE(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(e){vn(new en("platform-logger",t=>new Ky(t),"PRIVATE")),vn(new en("heartbeat",t=>new xE(t),"PRIVATE")),Fe(_a,bu,e),Fe(_a,bu,"esm2020"),Fe("fire-js","")}kE("");var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,ed;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function E(){}E.prototype=m.prototype,w.F=m.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(A,I,b){for(var _=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)_[Ut-2]=arguments[Ut];return m.prototype[I].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,E){E||(E=0);const A=Array(16);if(typeof m=="string")for(var I=0;I<16;++I)A[I]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(I=0;I<16;++I)A[I]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=w.g[0],E=w.g[1],I=w.g[2];let b=w.g[3],_;_=m+(b^E&(I^b))+A[0]+3614090360&4294967295,m=E+(_<<7&4294967295|_>>>25),_=b+(I^m&(E^I))+A[1]+3905402710&4294967295,b=m+(_<<12&4294967295|_>>>20),_=I+(E^b&(m^E))+A[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(m^I&(b^m))+A[3]+3250441966&4294967295,E=I+(_<<22&4294967295|_>>>10),_=m+(b^E&(I^b))+A[4]+4118548399&4294967295,m=E+(_<<7&4294967295|_>>>25),_=b+(I^m&(E^I))+A[5]+1200080426&4294967295,b=m+(_<<12&4294967295|_>>>20),_=I+(E^b&(m^E))+A[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(m^I&(b^m))+A[7]+4249261313&4294967295,E=I+(_<<22&4294967295|_>>>10),_=m+(b^E&(I^b))+A[8]+1770035416&4294967295,m=E+(_<<7&4294967295|_>>>25),_=b+(I^m&(E^I))+A[9]+2336552879&4294967295,b=m+(_<<12&4294967295|_>>>20),_=I+(E^b&(m^E))+A[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(m^I&(b^m))+A[11]+2304563134&4294967295,E=I+(_<<22&4294967295|_>>>10),_=m+(b^E&(I^b))+A[12]+1804603682&4294967295,m=E+(_<<7&4294967295|_>>>25),_=b+(I^m&(E^I))+A[13]+4254626195&4294967295,b=m+(_<<12&4294967295|_>>>20),_=I+(E^b&(m^E))+A[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(m^I&(b^m))+A[15]+1236535329&4294967295,E=I+(_<<22&4294967295|_>>>10),_=m+(I^b&(E^I))+A[1]+4129170786&4294967295,m=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(m^E))+A[6]+3225465664&4294967295,b=m+(_<<9&4294967295|_>>>23),_=I+(m^E&(b^m))+A[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^m&(I^b))+A[0]+3921069994&4294967295,E=I+(_<<20&4294967295|_>>>12),_=m+(I^b&(E^I))+A[5]+3593408605&4294967295,m=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(m^E))+A[10]+38016083&4294967295,b=m+(_<<9&4294967295|_>>>23),_=I+(m^E&(b^m))+A[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^m&(I^b))+A[4]+3889429448&4294967295,E=I+(_<<20&4294967295|_>>>12),_=m+(I^b&(E^I))+A[9]+568446438&4294967295,m=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(m^E))+A[14]+3275163606&4294967295,b=m+(_<<9&4294967295|_>>>23),_=I+(m^E&(b^m))+A[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^m&(I^b))+A[8]+1163531501&4294967295,E=I+(_<<20&4294967295|_>>>12),_=m+(I^b&(E^I))+A[13]+2850285829&4294967295,m=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(m^E))+A[2]+4243563512&4294967295,b=m+(_<<9&4294967295|_>>>23),_=I+(m^E&(b^m))+A[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^m&(I^b))+A[12]+2368359562&4294967295,E=I+(_<<20&4294967295|_>>>12),_=m+(E^I^b)+A[5]+4294588738&4294967295,m=E+(_<<4&4294967295|_>>>28),_=b+(m^E^I)+A[8]+2272392833&4294967295,b=m+(_<<11&4294967295|_>>>21),_=I+(b^m^E)+A[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^m)+A[14]+4259657740&4294967295,E=I+(_<<23&4294967295|_>>>9),_=m+(E^I^b)+A[1]+2763975236&4294967295,m=E+(_<<4&4294967295|_>>>28),_=b+(m^E^I)+A[4]+1272893353&4294967295,b=m+(_<<11&4294967295|_>>>21),_=I+(b^m^E)+A[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^m)+A[10]+3200236656&4294967295,E=I+(_<<23&4294967295|_>>>9),_=m+(E^I^b)+A[13]+681279174&4294967295,m=E+(_<<4&4294967295|_>>>28),_=b+(m^E^I)+A[0]+3936430074&4294967295,b=m+(_<<11&4294967295|_>>>21),_=I+(b^m^E)+A[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^m)+A[6]+76029189&4294967295,E=I+(_<<23&4294967295|_>>>9),_=m+(E^I^b)+A[9]+3654602809&4294967295,m=E+(_<<4&4294967295|_>>>28),_=b+(m^E^I)+A[12]+3873151461&4294967295,b=m+(_<<11&4294967295|_>>>21),_=I+(b^m^E)+A[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^m)+A[2]+3299628645&4294967295,E=I+(_<<23&4294967295|_>>>9),_=m+(I^(E|~b))+A[0]+4096336452&4294967295,m=E+(_<<6&4294967295|_>>>26),_=b+(E^(m|~I))+A[7]+1126891415&4294967295,b=m+(_<<10&4294967295|_>>>22),_=I+(m^(b|~E))+A[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~m))+A[5]+4237533241&4294967295,E=I+(_<<21&4294967295|_>>>11),_=m+(I^(E|~b))+A[12]+1700485571&4294967295,m=E+(_<<6&4294967295|_>>>26),_=b+(E^(m|~I))+A[3]+2399980690&4294967295,b=m+(_<<10&4294967295|_>>>22),_=I+(m^(b|~E))+A[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~m))+A[1]+2240044497&4294967295,E=I+(_<<21&4294967295|_>>>11),_=m+(I^(E|~b))+A[8]+1873313359&4294967295,m=E+(_<<6&4294967295|_>>>26),_=b+(E^(m|~I))+A[15]+4264355552&4294967295,b=m+(_<<10&4294967295|_>>>22),_=I+(m^(b|~E))+A[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~m))+A[13]+1309151649&4294967295,E=I+(_<<21&4294967295|_>>>11),_=m+(I^(E|~b))+A[4]+4149444226&4294967295,m=E+(_<<6&4294967295|_>>>26),_=b+(E^(m|~I))+A[11]+3174756917&4294967295,b=m+(_<<10&4294967295|_>>>22),_=I+(m^(b|~E))+A[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~m))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const E=m-this.blockSize,A=this.C;let I=this.h,b=0;for(;b<m;){if(I==0)for(;b<=E;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(A[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,A),I=0;break}}else for(;b<m;)if(A[I++]=w[b++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)w[m++]=this.g[E]>>>A&255;return w};function i(w,m){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=m(w)}function a(w,m){this.h=m;const E=[];let A=!0;for(let I=w.length-1;I>=0;I--){const b=w[I]|0;A&&b==m||(E[I]=b,A=!1)}this.g=E}var c={};function u(w){return-128<=w&&w<128?i(w,function(m){return new a([m|0],m<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return j(f(-w));const m=[];let E=1;for(let A=0;w>=E;A++)m[A]=w/E|0,E*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return j(d(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=f(Math.pow(m,8));let A=g;for(let b=0;b<w.length;b+=8){var I=Math.min(8,w.length-b);const _=parseInt(w.substring(b,b+I),m);I<8?(I=f(Math.pow(m,I)),A=A.j(I).add(f(_))):(A=A.j(E),A=A.add(f(_)))}return A}var g=u(0),T=u(1),S=u(16777216);e=a.prototype,e.m=function(){if(B(this))return-j(this).m();let w=0,m=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);w+=(A>=0?A:4294967296+A)*m,m*=4294967296}return w},e.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(L(this))return"0";if(B(this))return"-"+j(this).toString(w);const m=f(Math.pow(w,6));var E=this;let A="";for(;;){const I=W(E,m).g;E=G(E,I.j(m));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=I,L(E))return b+A;for(;b.length<6;)b="0"+b;A=b+A}},e.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function L(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function B(w){return w.h==-1}e.l=function(w){return w=G(this,w),B(w)?-1:L(w)?0:1};function j(w){const m=w.g.length,E=[];for(let A=0;A<m;A++)E[A]=~w.g[A];return new a(E,~w.h).add(T)}e.abs=function(){return B(this)?j(this):this},e.add=function(w){const m=Math.max(this.g.length,w.g.length),E=[];let A=0;for(let I=0;I<=m;I++){let b=A+(this.i(I)&65535)+(w.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);A=_>>>16,b&=65535,_&=65535,E[I]=_<<16|b}return new a(E,E[E.length-1]&-2147483648?-1:0)};function G(w,m){return w.add(j(m))}e.j=function(w){if(L(this)||L(w))return g;if(B(this))return B(w)?j(this).j(j(w)):j(j(this).j(w));if(B(w))return j(this.j(j(w)));if(this.l(S)<0&&w.l(S)<0)return f(this.m()*w.m());const m=this.g.length+w.g.length,E=[];for(var A=0;A<2*m;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<w.g.length;I++){const b=this.i(A)>>>16,_=this.i(A)&65535,Ut=w.i(I)>>>16,Pe=w.i(I)&65535;E[2*A+2*I]+=_*Pe,Q(E,2*A+2*I),E[2*A+2*I+1]+=b*Pe,Q(E,2*A+2*I+1),E[2*A+2*I+1]+=_*Ut,Q(E,2*A+2*I+1),E[2*A+2*I+2]+=b*Ut,Q(E,2*A+2*I+2)}for(w=0;w<m;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=m;w<2*m;w++)E[w]=0;return new a(E,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function J(w,m){this.g=w,this.h=m}function W(w,m){if(L(m))throw Error("division by zero");if(L(w))return new J(g,g);if(B(w))return m=W(j(w),m),new J(j(m.g),j(m.h));if(B(m))return m=W(w,j(m)),new J(j(m.g),m.h);if(w.g.length>30){if(B(w)||B(m))throw Error("slowDivide_ only works with positive integers.");for(var E=T,A=m;A.l(w)<=0;)E=ht(E),A=ht(A);var I=Tt(E,1),b=Tt(A,1);for(A=Tt(A,2),E=Tt(E,2);!L(A);){var _=b.add(A);_.l(w)<=0&&(I=I.add(E),b=_),A=Tt(A,1),E=Tt(E,1)}return m=G(w,I.j(m)),new J(I,m)}for(I=g;w.l(m)>=0;){for(E=Math.max(1,Math.floor(w.m()/m.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),b=f(E),_=b.j(m);B(_)||_.l(w)>0;)E-=A,b=f(E),_=b.j(m);L(b)&&(b=T),I=I.add(b),w=G(w,_)}return new J(I,w)}e.B=function(w){return W(this,w).h},e.and=function(w){const m=Math.max(this.g.length,w.g.length),E=[];for(let A=0;A<m;A++)E[A]=this.i(A)&w.i(A);return new a(E,this.h&w.h)},e.or=function(w){const m=Math.max(this.g.length,w.g.length),E=[];for(let A=0;A<m;A++)E[A]=this.i(A)|w.i(A);return new a(E,this.h|w.h)},e.xor=function(w){const m=Math.max(this.g.length,w.g.length),E=[];for(let A=0;A<m;A++)E[A]=this.i(A)^w.i(A);return new a(E,this.h^w.h)};function ht(w){const m=w.g.length+1,E=[];for(let A=0;A<m;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(E,w.h)}function Tt(w,m){const E=m>>5;m%=32;const A=w.g.length-E,I=[];for(let b=0;b<A;b++)I[b]=m>0?w.i(b+E)>>>m|w.i(b+E+1)<<32-m:w.i(b+E);return new a(I,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ed=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Tn=a}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nd,as,rd,yi,Ta,sd,id,od;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof li=="object"&&li];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break t;h=h[R]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=u,f.apply(null,arguments)}function d(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,R,C){for(var $=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)$[ot-2]=arguments[ot];return l.prototype[R].apply(p,$)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function L(o,l){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=o.length||0;const C=R.length||0;o.length=h+C;for(let $=0;$<C;$++)o[h+$]=R[$]}else o.push(R)}}class B{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){a.setTimeout(()=>{throw o},0)}function G(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Q{constructor(){this.h=this.g=null}add(l,h){const p=J.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var J=new B(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,Tt=!1,w=new Q,m=()=>{const o=Promise.resolve(void 0);ht=()=>{o.then(E)}};function E(){for(var o;o=G();){try{o.h.call(o.g)}catch(h){j(h)}var l=J;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}Tt=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Ut(o,l){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(Ut,I),Ut.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ut.Z.h.call(this)},Ut.prototype.h=function(){Ut.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),qt=0;function bt(o,l,h,p,R){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++qt,this.da=this.fa=!1}function gt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function or(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Ve(o){const l={};for(const h in o)l[h]=o[h];return l}const ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Br(o,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let C=0;C<ue.length;C++)h=ue[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function ar(o){this.src=o,this.g={},this.h=0}ar.prototype.add=function(o,l,h,p,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const $=Ke(o,l,p,R);return $>-1?(l=o[$],h||(l.fa=!1)):(l=new bt(l,this.src,C,!!p,R),l.fa=h,o.push(l)),l};function jr(o,l){const h=l.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,l,void 0),C;(C=R>=0)&&Array.prototype.splice.call(p,R,1),C&&(gt(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ke(o,l,h,p){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==p)return R}return-1}var an="closure_lm_"+(Math.random()*1e6|0),xn={};function $r(o,l,h,p,R){if(Array.isArray(l)){for(let C=0;C<l.length;C++)$r(o,l[C],h,p,R);return null}return h=q(h),o&&o[Pe]?o.J(l,h,c(p)?!!p.capture:!1,R):Nn(o,l,h,!1,p,R)}function Nn(o,l,h,p,R,C){if(!l)throw Error("Invalid event type");const $=c(R)?!!R.capture:!!R;let ot=x(o);if(ot||(o[an]=ot=new ar(o)),h=ot.add(l,h,p,$,C),h.proxy)return h;if(p=Yc(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)b||(R=$),R===void 0&&(R=!1),o.addEventListener(l.toString(),p,R);else if(o.attachEvent)o.attachEvent(P(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Yc(){function o(h){return l.call(o.src,o.listener,h)}const l=U;return o}function y(o,l,h,p,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)y(o,l[C],h,p,R);else p=c(p)?!!p.capture:!!p,h=q(h),o&&o[Pe]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],h=Ke(l,h,p,R),h>-1&&(gt(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=x(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ke(l,h,p,R)),(h=o>-1?l[o]:null)&&v(h))}function v(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Pe])jr(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(P(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=x(l))?(jr(h,o),h.h==0&&(h.src=null,l[an]=null)):gt(o)}}}function P(o){return o in xn?xn[o]:xn[o]="on"+o}function U(o,l){if(o.da)o=!0;else{l=new Ut(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&v(o),o=h.call(p,l)}return o}function x(o){return o=o[an],o instanceof ar?o:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(o){return typeof o=="function"?o:(o[N]||(o[N]=function(l){return o.handleEvent(l)}),o[N])}function F(){A.call(this),this.i=new ar(this),this.M=this,this.G=null}g(F,A),F.prototype[Pe]=!0,F.prototype.removeEventListener=function(o,l,h,p){y(this,o,l,h,p)};function O(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new I(l,o);else if(l instanceof I)l.target=l.target||o;else{var R=l;l=new I(p,o),Br(l,R)}R=!0;let C,$;if(h)for($=h.length-1;$>=0;$--)C=l.g=h[$],R=k(C,p,!0,l)&&R;if(C=l.g=o,R=k(C,p,!0,l)&&R,R=k(C,p,!1,l)&&R,h)for($=0;$<h.length;$++)C=l.g=h[$],R=k(C,p,!1,l)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)gt(h[p]);delete o.g[l],o.h--}}this.G=null},F.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},F.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function k(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let C=0;C<l.length;++C){const $=l[C];if($&&!$.da&&$.capture==h){const ot=$.listener,kt=$.ha||$.src;$.fa&&jr(o.i,$),R=ot.call(kt,p)!==!1&&R}}return R&&!p.defaultPrevented}function Z(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function H(o){o.g=Z(()=>{o.g=null,o.i&&(o.i=!1,H(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class X extends A{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:H(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){A.call(this),this.h=o,this.g={}}g(tt,A);var ct=[];function yt(o){ye(o.g,function(l,h){this.g.hasOwnProperty(h)&&v(l)},o),o.g={}}tt.prototype.N=function(){tt.Z.N.call(this),yt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pt=a.JSON.stringify,Wt=a.JSON.parse,Qt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function he(){}function fe(){}var we={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cr(){I.call(this,"d")}g(cr,I);function Ht(){I.call(this,"c")}g(Ht,I);var Bt={},qr=null;function Mn(){return qr=qr||new F}Bt.Ia="serverreachability";function Xc(o){I.call(this,Bt.Ia,o)}g(Xc,I);function Hr(o){const l=Mn();O(l,new Xc(l))}Bt.STAT_EVENT="statevent";function Jc(o,l){I.call(this,Bt.STAT_EVENT,o),this.stat=l}g(Jc,I);function ee(o){const l=Mn();O(l,new Jc(l,o))}Bt.Ja="timingevent";function Zc(o,l){I.call(this,Bt.Ja,o),this.size=l}g(Zc,I);function zr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Kr(){this.g=!0}Kr.prototype.ua=function(){this.g=!1};function ng(o,l,h,p,R,C){o.info(function(){if(o.g)if(C){var $="",ot=C.split("&");for(let It=0;It<ot.length;It++){var kt=ot[It].split("=");if(kt.length>1){const jt=kt[0];kt=kt[1];const xe=jt.split("_");$=xe.length>=2&&xe[1]=="type"?$+(jt+"="+kt+"&"):$+(jt+"=redacted&")}}}else $=null;else $=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+$})}function rg(o,l,h,p,R,C,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+C+" "+$})}function lr(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+ig(o,h)+(p?" "+p:"")})}function sg(o,l){o.info(function(){return"TIMEOUT: "+l})}Kr.prototype.info=function(){};function ig(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let $=1;$<p.length;$++)p[$]=""}}}}return pt(C)}catch{return l}}var Ws={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},el;function Eo(){}g(Eo,he),Eo.prototype.g=function(){return new XMLHttpRequest},el=new Eo;function Gr(o){return encodeURIComponent(String(o))}function og(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function cn(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var rl={},To={};function Io(o,l,h){o.M=1,o.A=Ys(De(l)),o.u=h,o.R=!0,sl(o,null)}function sl(o,l){o.F=Date.now(),Qs(o),o.B=De(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),_l(h.i,"t",p),o.C=0,h=o.j.L,o.h=new nl,o.g=Ol(o.j,h?l:null,!o.u),o.P>0&&(o.O=new X(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(ct[0]=R.toString()),R=ct);for(let C=0;C<R.length;C++){const $=$r(h,R[C],p||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=o.J?Ve(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Hr(),ng(o.i,o.v,o.B,o.l,o.S,o.u)}cn.prototype.ba=function(o){o=o.target;const l=this.O;l&&hn(o)==3?l.j():this.Y(o)},cn.prototype.Y=function(o){try{if(o==this.g)t:{const ot=hn(this.g),kt=this.g.ya(),It=this.g.ca();if(!(ot<3)&&(ot!=3||this.g&&(this.h.h||this.g.la()||Al(this.g)))){this.K||ot!=4||kt==7||(kt==8||It<=0?Hr(3):Hr(2)),wo(this);var l=this.g.ca();this.X=l;var h=ag(this);if(this.o=l==200,rg(this.i,this.v,this.B,this.l,this.S,ot,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var C=p;break e}}C=null}if(o=C)lr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vo(this,o);else{this.o=!1,this.m=3,ee(12),On(this),Wr(this);break t}}if(this.R){o=!0;let jt;for(;!this.K&&this.C<h.length;)if(jt=cg(this,h),jt==To){ot==4&&(this.m=4,ee(14),o=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==rl){this.m=4,ee(15),lr(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else lr(this.i,this.l,jt,null),vo(this,jt);if(il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||h.length!=0||this.h.h||(this.m=1,ee(16),o=!1),this.o=this.o&&o,!o)lr(this.i,this.l,h,"[Invalid Chunked Response]"),On(this),Wr(this);else if(h.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Do($),$.P=!0,ee(11))}}else lr(this.i,this.l,h,null),vo(this,h);ot==4&&On(this),this.o&&!this.K&&(ot==4?Dl(this.j,this):(this.o=!1,Qs(this)))}else wg(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,ee(12)):(this.m=0,ee(13)),On(this),Wr(this)}}}catch{}finally{}};function ag(o){if(!il(o))return o.g.la();const l=Al(o.g);if(l==="")return"";let h="";const p=l.length,R=hn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return On(o),Wr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(l[C],{stream:!(R&&C==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function il(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function cg(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?To:(h=Number(l.substring(h,p)),isNaN(h)?rl:(p+=1,p+h>l.length?To:(l=l.slice(p,p+h),o.C=p+h,l)))}cn.prototype.cancel=function(){this.K=!0,On(this)};function Qs(o){o.T=Date.now()+o.H,ol(o,o.H)}function ol(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=zr(f(o.aa,o),l)}function wo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}cn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(sg(this.i,this.B),this.M!=2&&(Hr(),ee(17)),On(this),this.m=2,Wr(this)):ol(this,this.T-o)};function Wr(o){o.j.I==0||o.K||Dl(o.j,o)}function On(o){wo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,yt(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function vo(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Ao(h.h,o))){if(!o.L&&Ao(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ei(h),Zs(h);else break t;Vo(h),ee(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=zr(f(h.Va,h),6e3));ll(h.h)<=1&&h.ta&&(h.ta=void 0)}else Ln(h,11)}else if((o.L||h.g==o)&&ei(h),!_(l))for(R=h.Ba.g.parse(l),l=0;l<R.length;l++){let It=R[l];const jt=It[0];if(!(jt<=h.K))if(h.K=jt,It=It[1],h.I==2)if(It[0]=="c"){h.M=It[1],h.ba=It[2];const xe=It[3];xe!=null&&(h.ka=xe,h.j.info("VER="+h.ka));const Fn=It[4];Fn!=null&&(h.za=Fn,h.j.info("SVER="+h.za));const fn=It[5];fn!=null&&typeof fn=="number"&&fn>0&&(p=1.5*fn,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const dn=o.g;if(dn){const ri=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var C=p.h;C.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(bo(C,C.h),C.h=null))}if(p.G){const xo=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(p.wa=xo,Rt(p.J,p.G,xo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var $=o;if(p.na=Ml(p,p.L?p.ba:null,p.W),$.L){ul(p.h,$);var ot=$,kt=p.O;kt&&(ot.H=kt),ot.D&&(wo(ot),Qs(ot)),p.g=$}else Pl(p);h.i.length>0&&ti(h)}else It[0]!="stop"&&It[0]!="close"||Ln(h,7);else h.I==3&&(It[0]=="stop"||It[0]=="close"?It[0]=="stop"?Ln(h,7):Po(h):It[0]!="noop"&&h.l&&h.l.qa(It),h.A=0)}}Hr(4)}catch{}}var lg=class{constructor(o,l){this.g=o,this.map=l}};function al(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ll(o){return o.h?1:o.g?o.g.size:0}function Ao(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function bo(o,l){o.g?o.g.add(l):o.h=l}function ul(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}al.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return S(o.i)}var fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ug(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let R,C=null;p>=0?(R=o[h].substring(0,p),C=o[h].substring(p+1)):R=o[h],l(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ln(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof ln?(this.l=o.l,Qr(this,o.j),this.o=o.o,this.g=o.g,Yr(this,o.u),this.h=o.h,Ro(this,yl(o.i)),this.m=o.m):o&&(l=String(o).match(fl))?(this.l=!1,Qr(this,l[1]||"",!0),this.o=Xr(l[2]||""),this.g=Xr(l[3]||"",!0),Yr(this,l[4]),this.h=Xr(l[5]||"",!0),Ro(this,l[6]||"",!0),this.m=Xr(l[7]||"")):(this.l=!1,this.i=new Zr(null,this.l))}ln.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Jr(l,dl,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Jr(l,dl,!0),"@"),o.push(Gr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Jr(h,h.charAt(0)=="/"?dg:fg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Jr(h,gg)),o.join("")},ln.prototype.resolve=function(o){const l=De(this);let h=!!o.j;h?Qr(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)Yr(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=l.h.lastIndexOf("/");R!=-1&&(p=l.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let $=0;$<R.length;){const ot=R[$++];ot=="."?p&&$==R.length&&C.push(""):ot==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&$==R.length&&C.push("")):(C.push(ot),p=!0)}p=C.join("/")}else p=R}return h?l.h=p:h=o.i.toString()!=="",h?Ro(l,yl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function De(o){return new ln(o)}function Qr(o,l,h){o.j=h?Xr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Yr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Ro(o,l,h){l instanceof Zr?(o.i=l,mg(o.i,o.l)):(h||(l=Jr(l,pg)),o.i=new Zr(l,o.l))}function Rt(o,l,h){o.i.set(l,h)}function Ys(o){return Rt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Xr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,hg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var dl=/[#\/\?@]/g,fg=/[#\?:]/g,dg=/[#\?]/g,pg=/[#\?@]/g,gg=/#/g;function Zr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&ug(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}e=Zr.prototype,e.add=function(o,l){kn(this),this.i=null,o=ur(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function pl(o,l){kn(o),l=ur(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function gl(o,l){return kn(o),l=ur(o,l),o.g.has(l)}e.forEach=function(o,l){kn(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(l,R,p,this)},this)},this)};function ml(o,l){kn(o);let h=[];if(typeof l=="string")gl(o,l)&&(h=h.concat(o.g.get(ur(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}e.set=function(o,l){return kn(this),this.i=null,o=ur(this,o),gl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},e.get=function(o,l){return o?(o=ml(this,o),o.length>0?String(o[0]):l):l};function _l(o,l,h){pl(o,l),h.length>0&&(o.i=null,o.g.set(ur(o,l),S(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const R=Gr(h);h=ml(this,h);for(let C=0;C<h.length;C++){let $=R;h[C]!==""&&($+="="+Gr(h[C])),o.push($)}}return this.i=o.join("&")};function yl(o){const l=new Zr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function ur(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function mg(o,l){l&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(pl(this,p),_l(this,R,h))},o)),o.j=l}function _g(o,l){const h=new Kr;if(a.Image){const p=new Image;p.onload=d(un,h,"TestLoadImage: loaded",!0,l,p),p.onerror=d(un,h,"TestLoadImage: error",!1,l,p),p.onabort=d(un,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=d(un,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function yg(o,l){const h=new Kr,p=new AbortController,R=setTimeout(()=>{p.abort(),un(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?un(h,"TestPingServer: ok",!0,l):un(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),un(h,"TestPingServer: error",!1,l)})}function un(o,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Eg(){this.g=new Qt}function So(o){this.i=o.Sb||null,this.h=o.ab||!1}g(So,he),So.prototype.g=function(){return new Xs(this.i,this.h)};function Xs(o,l){F.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Xs,F),e=Xs.prototype,e.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,es(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;El(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function El(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ts(this):es(this),this.readyState==3&&El(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,ts(this))},e.Na=function(o){this.g&&(this.response=o,ts(this))},e.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.B=null,es(o)}e.setRequestHeader=function(o,l){this.A.append(o,l)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tl(o){let l="";return ye(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Co(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Tl(h),typeof o=="string"?h!=null&&Gr(h):Rt(o,l,h))}function Vt(o){F.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Vt,F);var Tg=/^https?$/i,Ig=["POST","PUT"];e=Vt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():el.g(),this.g.onreadystatechange=T(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){Il(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ig,l,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of h)this.g.setRequestHeader(C,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Il(this,C)}};function Il(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,wl(o),Js(o)}function wl(o){o.A||(o.A=!0,O(o,"complete"),O(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,O(this,"complete"),O(this,"abort"),Js(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Js(this,!0)),Vt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?vl(this):this.Xa())},e.Xa=function(){vl(this)};function vl(o){if(o.h&&typeof i<"u"){if(o.v&&hn(o)==4)setTimeout(o.Ca.bind(o),0);else if(O(o,"readystatechange"),hn(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=C===0){let $=String(o.D).match(fl)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),p=!Tg.test($?$.toLowerCase():"")}h=p}if(h)O(o,"complete"),O(o,"success");else{o.o=6;try{var R=hn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",wl(o)}}finally{Js(o)}}}}function Js(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||O(o,"ready");try{h.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function hn(o){return o.g?o.g.readyState:0}e.ca=function(){try{return hn(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Wt(l)}};function Al(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wg(o){const l={};o=(o.g&&hn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=og(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[R]||[];l[R]=C,C.push(h)}or(l,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function bl(o){this.za=0,this.i=[],this.j=new Kr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,o),this.Za=ns("retryDelaySeedMs",1e4,o),this.Ta=ns("forwardChannelMaxRetries",2,o),this.va=ns("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new al(o&&o.concurrentRequestLimit),this.Ba=new Eg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=bl.prototype,e.ka=8,e.I=1,e.connect=function(o,l,h,p){ee(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Ml(this,null,this.W),ti(this)};function Po(o){if(Rl(o),o.I==3){var l=o.V++,h=De(o.J);if(Rt(h,"SID",o.M),Rt(h,"RID",l),Rt(h,"TYPE","terminate"),rs(o,h),l=new cn(o,o.j,l),l.M=2,l.A=Ys(De(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Ol(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Qs(l)}Nl(o)}function Zs(o){o.g&&(Do(o),o.g.cancel(),o.g=null)}function Rl(o){Zs(o),o.v&&(a.clearTimeout(o.v),o.v=null),ei(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ti(o){if(!cl(o.h)&&!o.m){o.m=!0;var l=o.Ea;ht||m(),Tt||(ht(),Tt=!0),w.add(l,o),o.D=0}}function vg(o,l){return ll(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=zr(f(o.Ea,o,l),xl(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new cn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Ve(C),Br(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Cl(this,R,l),h=De(this.J),Rt(h,"RID",o),Rt(h,"CVER",22),this.G&&Rt(h,"X-HTTP-Session-Id",this.G),rs(this,h),C&&(this.R?l="headers="+Gr(Tl(C))+"&"+l:this.u&&Co(h,this.u,C)),bo(this.h,R),this.Ra&&Rt(h,"TYPE","init"),this.S?(Rt(h,"$req",l),Rt(h,"SID","null"),R.U=!0,Io(R,h,null)):Io(R,h,l),this.I=2}}else this.I==3&&(o?Sl(this,o):this.i.length==0||cl(this.h)||Sl(this))};function Sl(o,l){var h;l?h=l.l:h=o.V++;const p=De(o.J);Rt(p,"SID",o.M),Rt(p,"RID",h),Rt(p,"AID",o.K),rs(o,p),o.u&&o.o&&Co(p,o.u,o.o),h=new cn(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Cl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),bo(o.h,h),Io(h,p,l)}function rs(o,l){o.H&&ye(o.H,function(h,p){Rt(l,p,h)}),o.l&&ye({},function(h,p){Rt(l,p,h)})}function Cl(o,l,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;t:{var R=o.i;let ot=-1;for(;;){const kt=["count="+h];ot==-1?h>0?(ot=R[0].g,kt.push("ofs="+ot)):ot=0:kt.push("ofs="+ot);let It=!0;for(let jt=0;jt<h;jt++){var C=R[jt].g;const xe=R[jt].map;if(C-=ot,C<0)ot=Math.max(0,R[jt].g-100),It=!1;else try{C="req"+C+"_"||"";try{var $=xe instanceof Map?xe:Object.entries(xe);for(const[Fn,fn]of $){let dn=fn;c(fn)&&(dn=pt(fn)),kt.push(C+Fn+"="+encodeURIComponent(dn))}}catch(Fn){throw kt.push(C+"type="+encodeURIComponent("_badmap")),Fn}}catch{p&&p(xe)}}if(It){$=kt.join("&");break t}}$=void 0}return o=o.i.splice(0,h),l.G=o,$}function Pl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ht||m(),Tt||(ht(),Tt=!0),w.add(l,o),o.A=0}}function Vo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=zr(f(o.Da,o),xl(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Vl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=zr(f(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ee(10),Zs(this),Vl(this))};function Do(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Vl(o){o.g=new cn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=De(o.na);Rt(l,"RID","rpc"),Rt(l,"SID",o.M),Rt(l,"AID",o.K),Rt(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&Rt(l,"TO",o.ia),Rt(l,"TYPE","xmlhttp"),rs(o,l),o.u&&o.o&&Co(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ys(De(l)),h.u=null,h.R=!0,sl(h,o)}e.Va=function(){this.C!=null&&(this.C=null,Zs(this),Vo(this),ee(19))};function ei(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Dl(o,l){var h=null;if(o.g==l){ei(o),Do(o),o.g=null;var p=2}else if(Ao(o.h,l))h=l.G,ul(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var R=o.D;p=Mn(),O(p,new Zc(p,h)),ti(o)}else Pl(o);else if(R=l.m,R==3||R==0&&l.X>0||!(p==1&&vg(o,l)||p==2&&Vo(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),R){case 1:Ln(o,5);break;case 4:Ln(o,10);break;case 3:Ln(o,6);break;default:Ln(o,2)}}}function xl(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Ln(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),p=o.Ua;const R=!p;p=new ln(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qr(p,"https"),Ys(p),R?_g(p.toString(),h):yg(p.toString(),h)}else ee(2);o.I=0,o.l&&o.l.pa(l),Nl(o),Rl(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Nl(o){if(o.I=0,o.ja=[],o.l){const l=hl(o.h);(l.length!=0||o.i.length!=0)&&(L(o.ja,l),L(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Ml(o,l,h){var p=h instanceof ln?De(h):new ln(h);if(p.g!="")l&&(p.g=l+"."+p.g),Yr(p,p.u);else{var R=a.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const C=new ln(null);p&&Qr(C,p),l&&(C.g=l),R&&Yr(C,R),h&&(C.h=h),p=C}return h=o.G,l=o.wa,h&&l&&Rt(p,h,l),Rt(p,"VER",o.ka),rs(o,p),p}function Ol(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new Vt(new So({ab:h})):new Vt(o.ma),l.Fa(o.L),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}e=kl.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function ni(){}ni.prototype.g=function(o,l){return new de(o,l)};function de(o,l){F.call(this),this.g=new bl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new hr(this)}g(de,F),de.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},de.prototype.close=function(){Po(this.g)},de.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=pt(o),o=h);l.i.push(new lg(l.Ya++,o)),l.I==3&&ti(l)},de.prototype.N=function(){this.g.l=null,delete this.j,Po(this.g),delete this.g,de.Z.N.call(this)};function Ll(o){cr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(Ll,cr);function Fl(){Ht.call(this),this.status=1}g(Fl,Ht);function hr(o){this.g=o}g(hr,kl),hr.prototype.ra=function(){O(this.g,"a")},hr.prototype.qa=function(o){O(this.g,new Ll(o))},hr.prototype.pa=function(o){O(this.g,new Fl)},hr.prototype.oa=function(){O(this.g,"b")},ni.prototype.createWebChannel=ni.prototype.g,de.prototype.send=de.prototype.o,de.prototype.open=de.prototype.m,de.prototype.close=de.prototype.close,od=function(){return new ni},id=function(){return Mn()},sd=Bt,Ta={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,yi=Ws,tl.COMPLETE="complete",rd=tl,fe.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",F.prototype.listen=F.prototype.J,as=fe,Vt.prototype.listenOnce=Vt.prototype.K,Vt.prototype.getLastError=Vt.prototype.Ha,Vt.prototype.getLastErrorCode=Vt.prototype.ya,Vt.prototype.getStatus=Vt.prototype.ca,Vt.prototype.getResponseJson=Vt.prototype.La,Vt.prototype.getResponseText=Vt.prototype.la,Vt.prototype.send=Vt.prototype.ea,Vt.prototype.setWithCredentials=Vt.prototype.Fa,nd=Vt}).apply(typeof li<"u"?li:typeof self<"u"?self:typeof window<"u"?window:{});const Du="@firebase/firestore",xu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new oc("@firebase/firestore");function mr(){return Yn.logLevel}function K(e,...t){if(Yn.logLevel<=dt.DEBUG){const n=t.map(cc);Yn.debug(`Firestore (${Or}): ${e}`,...n)}}function rn(e,...t){if(Yn.logLevel<=dt.ERROR){const n=t.map(cc);Yn.error(`Firestore (${Or}): ${e}`,...n)}}function Pr(e,...t){if(Yn.logLevel<=dt.WARN){const n=t.map(cc);Yn.warn(`Firestore (${Or}): ${e}`,...n)}}function cc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,ad(e,r,n)}function ad(e,t,n){let r=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw rn(r),new Error(r)}function _t(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||ad(t,s,r)}function st(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Dn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class LE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class FE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class UE{constructor(t){this.t=t,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){_t(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string",31837,{l:r}),new cd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string",2055,{h:t}),new Xt(t)}}class BE{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jE{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new BE(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $E{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vE(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){_t(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Nu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(_t(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nu(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function lt(e,t){return e<t?-1:e>t?1:0}function Ia(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return Qo(s)===Qo(i)?lt(s,i):Qo(s)?1:-1}return lt(e.length,t.length)}const HE=55296,zE=57343;function Qo(e){const t=e.charCodeAt(0);return t>=HE&&t<=zE}function Vr(e,t,n){return e.length===t.length&&e.every(((r,s)=>n(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="__name__";class Oe{constructor(t,n,r){n===void 0?n=0:n>t.length&&et(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&et(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Oe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return lt(t.length,n.length)}static compareSegments(t,n){const r=Oe.isNumericId(t),s=Oe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Oe.extractNumericId(t).compare(Oe.extractNumericId(n)):Ia(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Tn.fromString(t.substring(4,t.length-2))}}class At extends Oe{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new At(n)}static emptyPath(){return new At([])}}const KE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Oe{construct(t,n,r){return new Kt(t,n,r)}static isValidIdentifier(t){return KE.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mu}static keyField(){return new Kt([Mu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(At.fromString(t))}static fromName(t){return new Y(At.fromString(t).popFirst(5))}static empty(){return new Y(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new At(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function GE(e,t,n,r){if(t===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ou(e){if(!Y.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ku(e){if(Y.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ud(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function ro(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":et(12329,{type:typeof e})}function br(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ro(e);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){const n={typeString:e};return t&&(n.value=t),n}function qs(e,t){if(!ud(e))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=-62135596800,Fu=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Fu);return new St(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Lu)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fu}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:St._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(qs(t,St._jsonSchema))return new St(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Lu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}St._jsonSchemaVersion="firestore/timestamp/1.0",St._jsonSchema={type:Mt("string",St._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static fromTimestamp(t){return new nt(t)}static min(){return new nt(new St(0,0))}static max(){return new nt(new St(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function WE(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new An(s,Y.empty(),t)}function QE(e){return new An(e.readTime,e.key,Ds)}class An{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new An(nt.min(),Y.empty(),Ds)}static max(){return new An(nt.max(),Y.empty(),Ds)}}function YE(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Y.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e){if(e.code!==V.FAILED_PRECONDITION||e.message!==XE)throw e;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&et(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):D.reject(n)}static resolve(t){return new D(((n,r)=>{n(t)}))}static reject(t){return new D(((n,r)=>{r(t)}))}static waitFor(t){return new D(((n,r)=>{let s=0,i=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(u=>r(u)))})),a=!0,i===s&&n()}))}static or(t){let n=D.resolve(!1);for(const r of t)n=n.next((s=>s?D.resolve(s):r()));return n}static forEach(t,n){const r=[];return t.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(t,n){return new D(((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next((d=>{a[f]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(t,n){return new D(((r,s)=>{const i=()=>{t()===!0?n().next((()=>{i()}),s):r()};i()}))}}function ZE(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}so.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=-1;function io(e){return e==null}function Ni(e){return e===0&&1/e==-1/0}function tT(e){return typeof e=="number"&&Number.isInteger(e)&&!Ni(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="";function eT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Uu(t)),t=nT(e.get(n),t);return Uu(t)}function nT(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case hd:n+="";break;default:n+=i}}return n}function Uu(e){return e+hd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function er(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n){this.comparator=t,this.root=n||zt.EMPTY}insert(t,n){return new Pt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(t){return new Pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ui(this.root,t,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ui(this.root,t,this.comparator,!0)}}class ui{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class zt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??zt.RED,this.left=s??zt.EMPTY,this.right=i??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new zt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw et(43730,{key:this.key,value:this.value});if(this.right.isRed())throw et(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw et(27949);return t+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw et(57766)}get value(){throw et(16141)}get color(){throw et(16727)}get left(){throw et(29726)}get right(){throw et(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.comparator=t,this.data=new Pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ju(this.data.getIterator())}getIteratorFrom(t){return new ju(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Ft(this.comparator);return n.data=t,n}}class ju{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.fields=t,t.sort(Kt.comparator)}static empty(){return new Ae([])}unionWith(t){let n=new Ft(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ae(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dd("Invalid base64 string: "+i):i}})(t);return new Gt(n)}static fromUint8Array(t){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const rT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(e){if(_t(!!e,39018),typeof e=="string"){let t=0;const n=rT.exec(e);if(_t(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Dt(e.seconds),nanos:Dt(e.nanos)}}function Dt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Rn(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="server_timestamp",gd="__type__",md="__previous_value__",_d="__local_write_time__";function hc(e){return(e?.mapValue?.fields||{})[gd]?.stringValue===pd}function oo(e){const t=e.mapValue.fields[md];return hc(t)?oo(t):t}function xs(e){const t=bn(e.mapValue.fields[_d].timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,n,r,s,i,a,c,u,f,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const Mi="(default)";class Ns{constructor(t,n){this.projectId=t,this.database=n||Mi}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Mi}isEqual(t){return t instanceof Ns&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="__type__",iT="__max__",hi={mapValue:{}},Ed="__vector__",Oi="value";function Sn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hc(e)?4:aT(e)?9007199254740991:oT(e)?10:11:et(28295,{value:e})}function ze(e,t){if(e===t)return!0;const n=Sn(e);if(n!==Sn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=bn(s.timestampValue),c=bn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(s,i){return Rn(s.bytesValue).isEqual(Rn(i.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)})(e,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Dt(s.doubleValue),c=Dt(i.doubleValue);return a===c?Ni(a)===Ni(c):isNaN(a)&&isNaN(c)}return!1})(e,t);case 9:return Vr(e.arrayValue.values||[],t.arrayValue.values||[],ze);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bu(a)!==Bu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ze(a[u],c[u])))return!1;return!0})(e,t);default:return et(52216,{left:e})}}function Ms(e,t){return(e.values||[]).find((n=>ze(n,t)))!==void 0}function Dr(e,t){if(e===t)return 0;const n=Sn(e),r=Sn(t);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return(function(i,a){const c=Dt(i.integerValue||i.doubleValue),u=Dt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(e,t);case 3:return $u(e.timestampValue,t.timestampValue);case 4:return $u(xs(e),xs(t));case 5:return Ia(e.stringValue,t.stringValue);case 6:return(function(i,a){const c=Rn(i),u=Rn(a);return c.compareTo(u)})(e.bytesValue,t.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const d=lt(c[f],u[f]);if(d!==0)return d}return lt(c.length,u.length)})(e.referenceValue,t.referenceValue);case 8:return(function(i,a){const c=lt(Dt(i.latitude),Dt(a.latitude));return c!==0?c:lt(Dt(i.longitude),Dt(a.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return qu(e.arrayValue,t.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},f=c[Oi]?.arrayValue,d=u[Oi]?.arrayValue,g=lt(f?.values?.length||0,d?.values?.length||0);return g!==0?g:qu(f,d)})(e.mapValue,t.mapValue);case 11:return(function(i,a){if(i===hi.mapValue&&a===hi.mapValue)return 0;if(i===hi.mapValue)return 1;if(a===hi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const T=Ia(u[g],d[g]);if(T!==0)return T;const S=Dr(c[u[g]],f[d[g]]);if(S!==0)return S}return lt(u.length,d.length)})(e.mapValue,t.mapValue);default:throw et(23264,{he:n})}}function $u(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=bn(e),r=bn(t),s=lt(n.seconds,r.seconds);return s!==0?s:lt(n.nanos,r.nanos)}function qu(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Dr(n[s],r[s]);if(i)return i}return lt(n.length,r.length)}function xr(e){return wa(e)}function wa(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(n){const r=bn(n);return`time(${r.seconds},${r.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(n){return Rn(n).toBase64()})(e.bytesValue):"referenceValue"in e?(function(n){return Y.fromName(n).toString()})(e.referenceValue):"geoPointValue"in e?(function(n){return`geo(${n.latitude},${n.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wa(i);return r+"]"})(e.arrayValue):"mapValue"in e?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wa(n.fields[a])}`;return s+"}"})(e.mapValue):et(61005,{value:e})}function Ei(e){switch(Sn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=oo(e);return t?16+Ei(t):16;case 5:return 2*e.stringValue.length;case 6:return Rn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ei(i)),0)})(e.arrayValue);case 10:case 11:return(function(r){let s=0;return er(r.fields,((i,a)=>{s+=i.length+Ei(a)})),s})(e.mapValue);default:throw et(13486,{value:e})}}function Hu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function va(e){return!!e&&"integerValue"in e}function fc(e){return!!e&&"arrayValue"in e}function zu(e){return!!e&&"nullValue"in e}function Ku(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ti(e){return!!e&&"mapValue"in e}function oT(e){return(e?.mapValue?.fields||{})[yd]?.stringValue===Ed}function Es(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return er(e.mapValue.fields,((n,r)=>t.mapValue.fields[n]=Es(r))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Es(e.arrayValue.values[n]);return t}return{...e}}function aT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===iT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ti(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(n)}setAll(t){let n=Kt.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Es(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ti(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ze(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){er(n,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ee(Es(this.value))}}function Td(e){const t=[];return er(e.fields,((n,r)=>{const s=new Kt([n]);if(Ti(r)){const i=Td(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Ae(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,n,r,s,i,a,c){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Zt(t,0,nt.min(),nt.min(),nt.min(),Ee.empty(),0)}static newFoundDocument(t,n,r,s){return new Zt(t,1,n,nt.min(),r,s,0)}static newNoDocument(t,n){return new Zt(t,2,n,nt.min(),nt.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new Zt(t,3,n,nt.min(),nt.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Zt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,n){this.position=t,this.inclusive=n}}function Gu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Dr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wu(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ze(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,n="asc"){this.field=t,this.dir=n}}function cT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{}class Nt extends Id{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new uT(t,n,r):n==="array-contains"?new dT(t,r):n==="in"?new pT(t,r):n==="not-in"?new gT(t,r):n==="array-contains-any"?new mT(t,r):new Nt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new hT(t,r):new fT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Dr(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.matchesComparison(Dr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends Id{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Ce(t,n)}matches(t){return wd(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wd(e){return e.op==="and"}function vd(e){return lT(e)&&wd(e)}function lT(e){for(const t of e.filters)if(t instanceof Ce)return!1;return!0}function Aa(e){if(e instanceof Nt)return e.field.canonicalString()+e.op.toString()+xr(e.value);if(vd(e))return e.filters.map((t=>Aa(t))).join(",");{const t=e.filters.map((n=>Aa(n))).join(",");return`${e.op}(${t})`}}function Ad(e,t){return e instanceof Nt?(function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)})(e,t):e instanceof Ce?(function(r,s){return s instanceof Ce&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Ad(a,s.filters[c])),!0):!1})(e,t):void et(19439)}function bd(e){return e instanceof Nt?(function(n){return`${n.field.canonicalString()} ${n.op} ${xr(n.value)}`})(e):e instanceof Ce?(function(n){return n.op.toString()+" {"+n.getFilters().map(bd).join(" ,")+"}"})(e):"Filter"}class uT extends Nt{constructor(t,n,r){super(t,n,r),this.key=Y.fromName(r.referenceValue)}matches(t){const n=Y.comparator(t.key,this.key);return this.matchesComparison(n)}}class hT extends Nt{constructor(t,n){super(t,"in",n),this.keys=Rd("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class fT extends Nt{constructor(t,n){super(t,"not-in",n),this.keys=Rd("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function Rd(e,t){return(t.arrayValue?.values||[]).map((n=>Y.fromName(n.referenceValue)))}class dT extends Nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fc(n)&&Ms(n.arrayValue,this.value)}}class pT extends Nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ms(this.value.arrayValue,n)}}class gT extends Nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ms(this.value.arrayValue,n)}}class mT extends Nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fc(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ms(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(t,n=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Qu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new _T(e,t,n,r,s,i,a)}function dc(e){const t=st(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>Aa(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),io(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>xr(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>xr(r))).join(",")),t.Te=n}return t.Te}function pc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!cT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ad(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wu(e.startAt,t.startAt)&&Wu(e.endAt,t.endAt)}function ba(e){return Y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,n=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yT(e,t,n,r,s,i,a,c){return new Fr(e,t,n,r,s,i,a,c)}function gc(e){return new Fr(e)}function Yu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Sd(e){return e.collectionGroup!==null}function Ts(e){const t=st(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ft(Kt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Os(i,r))})),n.has(Kt.keyField().canonicalString())||t.Ie.push(new Os(Kt.keyField(),r))}return t.Ie}function Ue(e){const t=st(e);return t.Ee||(t.Ee=ET(t,Ts(e))),t.Ee}function ET(e,t){if(e.limitType==="F")return Qu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Os(s.field,i)}));const n=e.endAt?new ki(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ki(e.startAt.position,e.startAt.inclusive):null;return Qu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ra(e,t){const n=e.filters.concat([t]);return new Fr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Sa(e,t,n){return new Fr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ao(e,t){return pc(Ue(e),Ue(t))&&e.limitType===t.limitType}function Cd(e){return`${dc(Ue(e))}|lt:${e.limitType}`}function _r(e){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>bd(s))).join(", ")}]`),io(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>xr(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>xr(s))).join(",")),`Target(${r})`})(Ue(e))}; limitType=${e.limitType})`}function co(e,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(e,t)&&(function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(e,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(e,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const f=Gu(a,c,u);return a.inclusive?f<=0:f<0})(r.startAt,Ts(r),s)||r.endAt&&!(function(a,c,u){const f=Gu(a,c,u);return a.inclusive?f>=0:f>0})(r.endAt,Ts(r),s))})(e,t)}function TT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pd(e){return(t,n)=>{let r=!1;for(const s of Ts(e)){const i=IT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IT(e,t,n){const r=e.field.isKeyField()?Y.comparator(t.key,n.key):(function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?Dr(u,f):et(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return et(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){er(this.inner,((n,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Pt(Y.comparator);function sn(){return wT}const Vd=new Pt(Y.comparator);function cs(...e){let t=Vd;for(const n of e)t=t.insert(n.key,n);return t}function Dd(e){let t=Vd;return e.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function qn(){return Is()}function xd(){return Is()}function Is(){return new nr((e=>e.toString()),((e,t)=>e.isEqual(t)))}const vT=new Pt(Y.comparator),AT=new Ft(Y.comparator);function ut(...e){let t=AT;for(const n of e)t=t.add(n);return t}const bT=new Ft(lt);function RT(){return bT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(t)?"-0":t}}function Nd(e){return{integerValue:""+e}}function ST(e,t){return tT(t)?Nd(t):mc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this._=void 0}}function CT(e,t,n){return e instanceof ks?(function(s,i){const a={fields:{[gd]:{stringValue:pd},[_d]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hc(i)&&(i=oo(i)),i&&(a.fields[md]=i),{mapValue:a}})(n,t):e instanceof Ls?Od(e,t):e instanceof Fs?kd(e,t):(function(s,i){const a=Md(s,i),c=Xu(a)+Xu(s.Ae);return va(a)&&va(s.Ae)?Nd(c):mc(s.serializer,c)})(e,t)}function PT(e,t,n){return e instanceof Ls?Od(e,t):e instanceof Fs?kd(e,t):n}function Md(e,t){return e instanceof Li?(function(r){return va(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class ks extends lo{}class Ls extends lo{constructor(t){super(),this.elements=t}}function Od(e,t){const n=Ld(t);for(const r of e.elements)n.some((s=>ze(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Fs extends lo{constructor(t){super(),this.elements=t}}function kd(e,t){let n=Ld(t);for(const r of e.elements)n=n.filter((s=>!ze(s,r)));return{arrayValue:{values:n}}}class Li extends lo{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Xu(e){return Dt(e.integerValue||e.doubleValue)}function Ld(e){return fc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t,n){this.field=t,this.transform=n}}function DT(e,t){return e.field.isEqual(t.field)&&(function(r,s){return r instanceof Ls&&s instanceof Ls||r instanceof Fs&&s instanceof Fs?Vr(r.elements,s.elements,ze):r instanceof Li&&s instanceof Li?ze(r.Ae,s.Ae):r instanceof ks&&s instanceof ks})(e.transform,t.transform)}class xT{constructor(t,n){this.version=t,this.transformResults=n}}class Be{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Be}static exists(t){return new Be(void 0,t)}static updateTime(t){return new Be(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ii(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class uo{}function Fd(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _c(e.key,Be.none()):new Hs(e.key,e.data,Be.none());{const n=e.data,r=Ee.empty();let s=new Ft(Kt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rr(e.key,r,new Ae(s.toArray()),Be.none())}}function NT(e,t,n){e instanceof Hs?(function(s,i,a){const c=s.value.clone(),u=Zu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(e,t,n):e instanceof rr?(function(s,i,a){if(!Ii(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Zu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ud(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(e,t,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,n)}function ws(e,t,n,r){return e instanceof Hs?(function(i,a,c,u){if(!Ii(i.precondition,a))return c;const f=i.value.clone(),d=th(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(e,t,n,r):e instanceof rr?(function(i,a,c,u){if(!Ii(i.precondition,a))return c;const f=th(i.fieldTransforms,u,a),d=a.data;return d.setAll(Ud(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(e,t,n,r):(function(i,a,c){return Ii(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(e,t,n)}function MT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Md(r.transform,s||null);i!=null&&(n===null&&(n=Ee.empty()),n.set(r.field,i))}return n||null}function Ju(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vr(r,s,((i,a)=>DT(i,a)))})(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Hs extends uo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends uo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ud(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Zu(e,t,n){const r=new Map;_t(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,PT(a,c,n[s]))}return r}function th(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,CT(i,a,t))}return r}class _c extends uo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OT extends uo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&NT(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ws(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xd();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const u=Fd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(nt.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),ut())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,((n,r)=>Ju(n,r)))&&Vr(this.baseMutations,t.baseMutations,((n,r)=>Ju(n,r)))}}class yc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){_t(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return vT})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new yc(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,ft;function UT(e){switch(e){case V.OK:return et(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return et(15467,{code:e})}}function Bd(e){if(e===void 0)return rn("GRPC error has no .code"),V.UNKNOWN;switch(e){case xt.OK:return V.OK;case xt.CANCELLED:return V.CANCELLED;case xt.UNKNOWN:return V.UNKNOWN;case xt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case xt.INTERNAL:return V.INTERNAL;case xt.UNAVAILABLE:return V.UNAVAILABLE;case xt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case xt.NOT_FOUND:return V.NOT_FOUND;case xt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case xt.ABORTED:return V.ABORTED;case xt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case xt.DATA_LOSS:return V.DATA_LOSS;default:return et(39323,{code:e})}}(ft=xt||(xt={}))[ft.OK=0]="OK",ft[ft.CANCELLED=1]="CANCELLED",ft[ft.UNKNOWN=2]="UNKNOWN",ft[ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ft[ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ft[ft.NOT_FOUND=5]="NOT_FOUND",ft[ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",ft[ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",ft[ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",ft[ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ft[ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ft[ft.ABORTED=10]="ABORTED",ft[ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",ft[ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",ft[ft.INTERNAL=13]="INTERNAL",ft[ft.UNAVAILABLE=14]="UNAVAILABLE",ft[ft.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new Tn([4294967295,4294967295],0);function eh(e){const t=BT().encode(e),n=new ed;return n.update(t),new Uint8Array(n.digest())}function nh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Tn([n,r],0),new Tn([s,i],0)]}class Ec{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ls(`Invalid padding: ${n}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ls(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Tn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(Tn.fromNumber(r)));return s.compare(jT)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=eh(t),[r,s]=nh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ec(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const n=eh(t),[r,s]=nh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,zs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ho(nt.min(),s,new Pt(lt),sn(),ut())}}class zs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new zs(r,n,ut(),ut(),ut())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class jd{constructor(t,n){this.targetId=t,this.Ce=n}}class $d{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rh{constructor(){this.ve=0,this.Fe=sh(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ut(),n=ut(),r=ut();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:et(38017,{changeType:i})}})),new zs(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=sh()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,_t(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $T{constructor(t){this.Ge=t,this.ze=new Map,this.je=sn(),this.Je=fi(),this.He=fi(),this.Ye=new Pt(lt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:et(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ba(i))if(r===0){const a=new Y(i.path);this.et(n,a,Zt.newNoDocument(a,nt.min()))}else _t(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,f)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Rn(r).toUint8Array()}catch(u){if(u instanceof dd)return Pr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ec(a,s,i)}catch(u){return Pr(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(t){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ba(c.target)){const u=new Y(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Zt.newNoDocument(u,t))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=ut();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new ho(t,n,this.Ye,this.je,r);return this.je=sn(),this.Je=fi(),this.He=fi(),this.Ye=new Pt(lt),s}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new rh,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Ft(lt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Ft(lt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||K("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new rh),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function fi(){return new Pt(Y.comparator)}function sh(){return new Pt(Y.comparator)}const qT={asc:"ASCENDING",desc:"DESCENDING"},HT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zT={and:"AND",or:"OR"};class KT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ca(e,t){return e.useProto3Json||io(t)?t:{value:t}}function Fi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function GT(e,t){return Fi(e,t.toTimestamp())}function je(e){return _t(!!e,49232),nt.fromTimestamp((function(n){const r=bn(n);return new St(r.seconds,r.nanos)})(e))}function Tc(e,t){return Pa(e,t).canonicalString()}function Pa(e,t){const n=(function(s){return new At(["projects",s.projectId,"databases",s.database])})(e).child("documents");return t===void 0?n:n.child(t)}function Hd(e){const t=At.fromString(e);return _t(Qd(t),10190,{key:t.toString()}),t}function Va(e,t){return Tc(e.databaseId,t.path)}function Yo(e,t){const n=Hd(t);if(n.get(1)!==e.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Y(Kd(n))}function zd(e,t){return Tc(e.databaseId,t)}function WT(e){const t=Hd(e);return t.length===4?At.emptyPath():Kd(t)}function Da(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Kd(e){return _t(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function ih(e,t,n){return{name:Va(e,t),fields:n.value.mapValue.fields}}function QT(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:et(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(f,d){return f.useProto3Json?(_t(d===void 0||typeof d=="string",58123),Gt.fromBase64String(d||"")):(_t(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Gt.fromUint8Array(d||new Uint8Array))})(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(f){const d=f.code===void 0?V.UNKNOWN:Bd(f.code);return new z(d,f.message||"")})(a);n=new $d(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yo(e,r.document.name),i=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):nt.min(),c=new Ee({mapValue:{fields:r.document.fields}}),u=Zt.newFoundDocument(s,i,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];n=new wi(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Yo(e,r.document),i=r.readTime?je(r.readTime):nt.min(),a=Zt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new wi([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Yo(e,r.document),i=r.removedTargetIds||[];n=new wi([],i,s,null)}else{if(!("filter"in t))return et(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new FT(s,i),c=r.targetId;n=new jd(c,a)}}return n}function YT(e,t){let n;if(t instanceof Hs)n={update:ih(e,t.key,t.value)};else if(t instanceof _c)n={delete:Va(e,t.key)};else if(t instanceof rr)n={update:ih(e,t.key,t.data),updateMask:iI(t.fieldMask)};else{if(!(t instanceof OT))return et(16599,{Vt:t.type});n={verify:Va(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof ks)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ls)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Li)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw et(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:GT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:et(27497)})(e,t.precondition)),n}function XT(e,t){return e&&e.length>0?(_t(t!==void 0,14353),e.map((n=>(function(s,i){let a=s.updateTime?je(s.updateTime):je(i);return a.isEqual(nt.min())&&(a=je(i)),new xT(a,s.transformResults||[])})(n,t)))):[]}function JT(e,t){return{documents:[zd(e,t.path)]}}function ZT(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zd(e,s);const i=(function(f){if(f.length!==0)return Wd(Ce.create(f,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((d=>(function(T){return{field:yr(T.field),direction:nI(T.dir)}})(d)))})(t.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Ca(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:n,parent:s}}function tI(e){let t=WT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_t(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=(function(g){const T=Gd(g);return T instanceof Ce&&vd(T)?T.getFilters():[T]})(n.where));let a=[];n.orderBy&&(a=(function(g){return g.map((T=>(function(L){return new Os(Er(L.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(T)))})(n.orderBy));let c=null;n.limit&&(c=(function(g){let T;return T=typeof g=="object"?g.value:g,io(T)?null:T})(n.limit));let u=null;n.startAt&&(u=(function(g){const T=!!g.before,S=g.values||[];return new ki(S,T)})(n.startAt));let f=null;return n.endAt&&(f=(function(g){const T=!g.before,S=g.values||[];return new ki(S,T)})(n.endAt)),yT(t,s,a,i,c,"F",u,f)}function eI(e,t){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et(28987,{purpose:s})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Gd(e){return e.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Er(n.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(n.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(n.unaryFilter.field);return Nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Er(n.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return et(61313);default:return et(60726)}})(e):e.fieldFilter!==void 0?(function(n){return Nt.create(Er(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return et(58110);default:return et(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(e):e.compositeFilter!==void 0?(function(n){return Ce.create(n.compositeFilter.filters.map((r=>Gd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return et(1026)}})(n.compositeFilter.op))})(e):et(30097,{filter:e})}function nI(e){return qT[e]}function rI(e){return HT[e]}function sI(e){return zT[e]}function yr(e){return{fieldPath:e.canonicalString()}}function Er(e){return Kt.fromServerFormat(e.fieldPath)}function Wd(e){return e instanceof Nt?(function(n){if(n.op==="=="){if(Ku(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NAN"}};if(zu(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ku(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NOT_NAN"}};if(zu(n.value))return{unaryFilter:{field:yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(n.field),op:rI(n.op),value:n.value}}})(e):e instanceof Ce?(function(n){const r=n.getFilters().map((s=>Wd(s)));return r.length===1?r[0]:{compositeFilter:{op:sI(n.op),filters:r}}})(e):et(54877,{filter:e})}function iI(e){const t=[];return e.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function Qd(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,r,s,i=nt.min(),a=nt.min(),c=Gt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new _n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t){this.yt=t}}function aI(e){const t=tI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Sa(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.Cn=new lI}addToCollectionParentIndex(t,n){return this.Cn.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(An.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(An.min())}updateCollectionGroup(t,n,r){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class lI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ft(At.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ft(At.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yd=41943040;class ce{static withCacheSize(t){return new ce(t,ce.DEFAULT_COLLECTION_PERCENTILE,ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce.DEFAULT_COLLECTION_PERCENTILE=10,ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ce.DEFAULT=new ce(Yd,ce.DEFAULT_COLLECTION_PERCENTILE,ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ce.DISABLED=new ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Nr(0)}static cr(){return new Nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="LruGarbageCollector",uI=1048576;function ch([e,t],[n,r]){const s=lt(e,n);return s===0?lt(t,r):s}class hI{constructor(t){this.Ir=t,this.buffer=new Ft(ch),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ch(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){K(ah,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lr(n)?K(ah,"Ignoring IndexedDB error during garbage collection: ",n):await kr(n)}await this.Vr(3e5)}))}}class dI{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return D.resolve(so.ce);const r=new hI(n);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(oh)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oh):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,s,i,a,c,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(t,r,n)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r)))).next((g=>(f=Date.now(),mr()<=dt.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function pI(e,t){return new dI(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.changes=new nr((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Zt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,n)))).next((s=>(r!==null&&ws(r.mutation,s,Ae.empty(),St.now()),s)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,ut()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=ut()){const s=qn();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,r).next((i=>{let a=cs();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(t,n){const r=qn();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,ut())))}populateOverlays(t,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(t,n,r,s){let i=sn();const a=Is(),c=(function(){return Is()})();return n.forEach(((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof rr)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),ws(d.mutation,f,d.mutation.getFieldMask(),St.now())):a.set(f.key,Ae.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((f,d)=>a.set(f,d))),n.forEach(((f,d)=>c.set(f,new mI(d,a.get(f)??null)))),c)))}recalculateAndSaveOverlays(t,n){const r=Is();let s=new Pt(((a,c)=>a-c)),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((a=>{for(const c of a)c.keys().forEach((u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||Ae.empty();d=c.applyToLocalView(f,d),r.set(u,d);const g=(s.get(c.batchId)||ut()).add(u);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,d=u.value,g=xd();d.forEach((T=>{if(!i.has(T)){const S=Fd(n.get(T),r.get(T));S!==null&&g.set(T,S),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Sd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):D.resolve(qn());let c=Ds,u=i;return a.next((f=>D.forEach(f,((d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(t,d).next((T=>{u=u.insert(d,T)}))))).next((()=>this.populateOverlays(t,f,i))).next((()=>this.computeViews(t,u,f,ut()))).next((d=>({batchId:c,changes:Dd(d)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Y(n)).next((r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(t,i).next((c=>D.forEach(c,(u=>{const f=(function(g,T){return new Fr(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((d=>{d.forEach(((g,T)=>{a=a.insert(g,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s)))).next((a=>{i.forEach(((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Zt.newInvalidDocument(d)))}));let c=cs();return a.forEach(((u,f)=>{const d=i.get(u);d!==void 0&&ws(d.mutation,f,Ae.empty(),St.now()),co(n,f)&&(c=c.insert(u,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return D.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}})(n)),D.resolve()}getNamedQuery(t,n){return D.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:aI(s.bundledQuery),readTime:je(s.readTime)}})(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.overlays=new Pt(Y.comparator),this.qr=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const r=qn();return D.forEach(n,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((s,i)=>{this.St(t,n,i)})),D.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),D.resolve()}getOverlaysForCollection(t,n,r){const s=qn(),i=n.length+1,a=new Y(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return D.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Pt(((f,d)=>f-d));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=qn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=qn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,d)=>c.set(f,d))),!(c.size()>=s)););return D.resolve(c)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new LT(n,r));let i=this.qr.get(n);i===void 0&&(i=ut(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.Qr=new Ft($t.$r),this.Ur=new Ft($t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new $t(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Gr(new $t(t,n))}zr(t,n){t.forEach((r=>this.removeReference(r,n)))}jr(t){const n=new Y(new At([])),r=new $t(n,t),s=new $t(n,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new Y(new At([])),r=new $t(n,t),s=new $t(n,t+1);let i=ut();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const n=new $t(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class $t{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return Y.comparator(t.key,n.key)||lt(t.Yr,n.Yr)}static Kr(t,n){return lt(t.Yr,n.Yr)||Y.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ft($t.$r)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kT(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new $t(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,n){return D.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?uc:this.tr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $t(n,0),s=new $t(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ft(lt);return n.forEach((s=>{const i=new $t(s,0),a=new $t(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),D.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new $t(new Y(i),0);let c=new Ft(lt);return this.Zr.forEachWhile((u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.Yr)),!0)}),a),D.resolve(this.ti(c))}ti(t){const n=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(t,n){_t(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return D.forEach(n.mutations,(s=>{const i=new $t(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,n){const r=new $t(n,0),s=this.Zr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t){this.ri=t,this.docs=(function(){return new Pt(Y.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(t,n){let r=sn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Zt.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=sn();const a=n.path,c=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||YE(QE(d),r)<=0||(s.has(d.key)||co(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,r,s){et(9500)}ii(t,n){return D.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new vI(this)}getSize(t){return D.resolve(this.size)}}class vI extends gI{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),D.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t){this.persistence=t,this.si=new nr((n=>dc(n)),pc),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.oi=0,this._i=new Ic,this.targetCount=0,this.ai=Nr.ur()}forEachTarget(t,n){return this.si.forEach(((r,s)=>n(s))),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),D.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Nr(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Pr(n),D.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return D.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),D.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),D.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return D.resolve(r)}containsKey(t,n){return D.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n){this.ui={},this.overlays={},this.ci=new so(0),this.li=!1,this.li=!0,this.hi=new TI,this.referenceDelegate=t(this),this.Pi=new AI(this),this.indexManager=new cI,this.remoteDocumentCache=(function(s){return new wI(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new oI(n),this.Ii=new yI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new EI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new II(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){K("MemoryPersistence","Starting transaction:",t);const s=new bI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,n){return D.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,n))))}}class bI extends JE{constructor(t){super(),this.currentSequenceNumber=t}}class wc{constructor(t){this.persistence=t,this.Ri=new Ic,this.Vi=null}static mi(t){return new wc(t)}get fi(){if(this.Vi)return this.Vi;throw et(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),D.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),D.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.fi,(r=>{const s=Y.fromPath(r);return this.gi(t,s).next((i=>{i||n.removeEntry(s,nt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return D.or([()=>D.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Ui{constructor(t,n){this.persistence=t,this.pi=new nr((r=>eT(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=pI(this,n)}static mi(t,n){return new Ui(t,n)}Ei(){}di(t){return D.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((s=>r+s))))}wr(t){let n=0;return this.pr(t,(r=>{n++})).next((()=>n))}pr(t,n){return D.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?D.resolve():n(s)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,n).next((c=>{c||(r++,i.removeEntry(a,nt.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),D.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),D.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ei(t.data.value)),n}br(t,n,r){return D.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.pi.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=s}static As(t,n){let r=ut(),s=ut();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vc(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Ey()?8:ZE(my())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ys(t,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new RI;return this.Ss(t,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(t,n,a,c.size)}))})).next((()=>i.result))}bs(t,n,r,s){return r.documentReadCount<this.fs?(mr()<=dt.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",_r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),D.resolve()):(mr()<=dt.DEBUG&&K("QueryEngine","Query:",_r(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(mr()<=dt.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",_r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ue(n))):D.resolve())}ys(t,n){if(Yu(n))return D.resolve(null);let r=Ue(n);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Sa(n,null,"F"),r=Ue(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=ut(...i);return this.ps.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((u=>{const f=this.Ds(n,c);return this.Cs(n,f,a,u.readTime)?this.ys(t,Sa(n,null,"F")):this.vs(t,f,n,u)}))))})))))}ws(t,n,r,s){return Yu(n)||s.isEqual(nt.min())?D.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?D.resolve(null):(mr()<=dt.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_r(n)),this.vs(t,a,n,WE(s,Ds)).next((c=>c)))}))}Ds(t,n){let r=new Ft(Pd(t));return n.forEach(((s,i)=>{co(t,i)&&(r=r.add(i))})),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return mr()<=dt.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",_r(n)),this.ps.getDocumentsMatchingQuery(t,n,An.min(),r)}vs(t,n,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="LocalStore",CI=3e8;class PI{constructor(t,n,r,s){this.persistence=t,this.Fs=n,this.serializer=s,this.Ms=new Pt(lt),this.xs=new nr((i=>dc(i)),pc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _I(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function VI(e,t,n,r){return new PI(e,t,n,r)}async function Jd(e,t){const n=st(e);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=ut();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){c.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:c})))}))}))}function DI(e,t){const n=st(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,f,d){const g=f.batch,T=g.keys();let S=D.resolve();return T.forEach((L=>{S=S.next((()=>d.getEntry(u,L))).next((B=>{const j=f.docVersions.get(L);_t(j!==null,48541),B.version.compareTo(j)<0&&(g.applyToRemoteDocument(B,f),B.isValidDocument()&&(B.setReadTime(f.commitVersion),d.addEntry(B)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(u,g)))})(n,r,t,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=ut();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u})(t)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Zd(e){const t=st(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function xI(e,t){const n=st(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];t.targetChanges.forEach(((d,g)=>{const T=s.get(g);if(!T)return;c.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,g))));let S=T.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(Gt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(g,S),(function(B,j,G){return B.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=CI?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(T,S,d)&&c.push(n.Pi.updateTargetData(i,S))}));let u=sn(),f=ut();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(NI(i,a,t.documentUpdates).next((d=>{u=d.ks,f=d.qs}))),!r.isEqual(nt.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((g=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,f))).next((()=>u))})).then((i=>(n.Ms=s,i)))}function NI(e,t,n){let r=ut(),s=ut();return n.forEach((i=>r=r.add(i))),t.getEntries(e,r).next((i=>{let a=sn();return n.forEach(((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(nt.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):K(Ac,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function MI(e,t){const n=st(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=uc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function OI(e,t){const n=st(e);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,t).next((i=>i?(s=i,D.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new _n(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r}))}async function xa(e,t,n){const r=st(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Lr(a))throw a;K(Ac,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function lh(e,t,n){const r=st(e);let s=nt.min(),i=ut();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,d){const g=st(u),T=g.xs.get(d);return T!==void 0?D.resolve(g.Ms.get(T)):g.Pi.getTargetData(f,d)})(r,a,Ue(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,n?s:nt.min(),n?i:ut()))).next((c=>(kI(r,TT(t),c),{documents:c,Qs:i})))))}function kI(e,t,n){let r=e.Os.get(t)||nt.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),e.Os.set(t,r)}class uh{constructor(){this.activeTargetIds=RT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class LI{constructor(){this.Mo=new uh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new uh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="ConnectivityMonitor";class fh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){K(hh,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){K(hh,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di=null;function Na(){return di===null?di=(function(){return 268435456+Math.round(2147483648*Math.random())})():di++,"0x"+di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="RestConnection",UI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Mi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,n,r,s,i){const a=Na(),c=this.zo(t,n.toUriEncodedString());K(Xo,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:f}=new URL(c),d=ic(f);return this.Jo(t,c,u,r,d).then((g=>(K(Xo,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw Pr(Xo,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Ho(t,n,r,s,i,a){return this.Go(t,n,r,s,i)}jo(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Or})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,n){const r=UI[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class $I extends BI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=Na();return new Promise(((c,u)=>{const f=new nd;f.setWithCredentials(!0),f.listenOnce(rd.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case yi.NO_ERROR:const g=f.getResponseJson();K(Yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case yi.TIMEOUT:K(Yt,`RPC '${t}' ${a} timed out`),u(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const T=f.getStatus();if(K(Yt,`RPC '${t}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const L=S?.error;if(L&&L.status&&L.message){const B=(function(G){const Q=G.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(Q)>=0?Q:V.UNKNOWN})(L.status);u(new z(B,L.message))}else u(new z(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new z(V.UNAVAILABLE,"Connection failed."));break;default:et(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{K(Yt,`RPC '${t}' ${a} completed.`)}}));const d=JSON.stringify(s);K(Yt,`RPC '${t}' ${a} sending request:`,s),f.send(n,"POST",d,r,15)}))}T_(t,n,r){const s=Na(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=od(),c=id(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(Yt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);this.I_(g);let T=!1,S=!1;const L=new jI({Yo:j=>{S?K(Yt,`Not sending because RPC '${t}' stream ${s} is closed:`,j):(T||(K(Yt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),T=!0),K(Yt,`RPC '${t}' stream ${s} sending:`,j),g.send(j))},Zo:()=>g.close()}),B=(j,G,Q)=>{j.listen(G,(J=>{try{Q(J)}catch(W){setTimeout((()=>{throw W}),0)}}))};return B(g,as.EventType.OPEN,(()=>{S||(K(Yt,`RPC '${t}' stream ${s} transport opened.`),L.o_())})),B(g,as.EventType.CLOSE,(()=>{S||(S=!0,K(Yt,`RPC '${t}' stream ${s} transport closed`),L.a_(),this.E_(g))})),B(g,as.EventType.ERROR,(j=>{S||(S=!0,Pr(Yt,`RPC '${t}' stream ${s} transport errored. Name:`,j.name,"Message:",j.message),L.a_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),B(g,as.EventType.MESSAGE,(j=>{if(!S){const G=j.data[0];_t(!!G,16349);const Q=G,J=Q?.error||Q[0]?.error;if(J){K(Yt,`RPC '${t}' stream ${s} received error:`,J);const W=J.status;let ht=(function(m){const E=xt[m];if(E!==void 0)return Bd(E)})(W),Tt=J.message;ht===void 0&&(ht=V.INTERNAL,Tt="Unknown error status: "+W+" with message "+J.message),S=!0,L.a_(new z(ht,Tt)),g.close()}else K(Yt,`RPC '${t}' stream ${s} received:`,G),L.u_(G)}})),B(c,sd.STAT_EVENT,(j=>{j.stat===Ta.PROXY?K(Yt,`RPC '${t}' stream ${s} detected buffering proxy`):j.stat===Ta.NOPROXY&&K(Yt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{L.__()}),0),L}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){return new KT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="PersistentStream";class ep{constructor(t,n,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tp(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{t((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return K(dh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(K(dh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qI extends ep{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=QT(this.serializer,t),r=(function(i){if(!("targetChange"in i))return nt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?nt.min():a.readTime?je(a.readTime):nt.min()})(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Da(this.serializer),n.addTarget=(function(i,a){let c;const u=a.target;if(c=ba(u)?{documents:JT(i,u)}:{query:ZT(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=qd(i,a.resumeToken);const f=Ca(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(nt.min())>0){c.readTime=Fi(i,a.snapshotVersion.toTimestamp());const f=Ca(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const r=eI(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Da(this.serializer),n.removeTarget=t,this.q_(n)}}class HI extends ep{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return _t(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,_t(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){_t(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=XT(t.writeResults,t.commitTime),r=je(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Da(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>YT(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{}class KI extends zI{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,Pa(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())}))}Ho(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(t,Pa(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class GI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="RemoteStore";class WI{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{sr(this)&&(K(Xn,"Restarting streams for network reachability change."),await(async function(u){const f=st(u);f.Ea.add(4),await Ks(f),f.Ra.set("Unknown"),f.Ea.delete(4),await po(f)})(this))}))})),this.Ra=new GI(r,s)}}async function po(e){if(sr(e))for(const t of e.da)await t(!0)}async function Ks(e){for(const t of e.da)await t(!1)}function np(e,t){const n=st(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Cc(n)?Sc(n):Ur(n).O_()&&Rc(n,t))}function bc(e,t){const n=st(e),r=Ur(n);n.Ia.delete(t),r.O_()&&rp(n,t),n.Ia.size===0&&(r.O_()?r.L_():sr(n)&&n.Ra.set("Unknown"))}function Rc(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ur(e).Y_(t)}function rp(e,t){e.Va.Ue(t),Ur(e).Z_(t)}function Sc(e){e.Va=new $T({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Ur(e).start(),e.Ra.ua()}function Cc(e){return sr(e)&&!Ur(e).x_()&&e.Ia.size>0}function sr(e){return st(e).Ea.size===0}function sp(e){e.Va=void 0}async function QI(e){e.Ra.set("Online")}async function YI(e){e.Ia.forEach(((t,n)=>{Rc(e,t)}))}async function XI(e,t){sp(e),Cc(e)?(e.Ra.ha(t),Sc(e)):e.Ra.set("Unknown")}async function JI(e,t,n){if(e.Ra.set("Online"),t instanceof $d&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(e,t)}catch(r){K(Xn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Bi(e,r)}else if(t instanceof wi?e.Va.Ze(t):t instanceof jd?e.Va.st(t):e.Va.tt(t),!n.isEqual(nt.min()))try{const r=await Zd(e.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(f);d&&i.Ia.set(f,d.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,f)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Gt.EMPTY_BYTE_STRING,d.snapshotVersion)),rp(i,u);const g=new _n(d.target,u,f,d.sequenceNumber);Rc(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(e,n)}catch(r){K(Xn,"Failed to raise snapshot:",r),await Bi(e,r)}}async function Bi(e,t,n){if(!Lr(t))throw t;e.Ea.add(1),await Ks(e),e.Ra.set("Offline"),n||(n=()=>Zd(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{K(Xn,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await po(e)}))}function ip(e,t){return t().catch((n=>Bi(e,n,t)))}async function go(e){const t=st(e),n=Cn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:uc;for(;ZI(t);)try{const s=await MI(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,tw(t,s)}catch(s){await Bi(t,s)}op(t)&&ap(t)}function ZI(e){return sr(e)&&e.Ta.length<10}function tw(e,t){e.Ta.push(t);const n=Cn(e);n.O_()&&n.X_&&n.ea(t.mutations)}function op(e){return sr(e)&&!Cn(e).x_()&&e.Ta.length>0}function ap(e){Cn(e).start()}async function ew(e){Cn(e).ra()}async function nw(e){const t=Cn(e);for(const n of e.Ta)t.ea(n.mutations)}async function rw(e,t,n){const r=e.Ta.shift(),s=yc.from(r,t,n);await ip(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await go(e)}async function sw(e,t){t&&Cn(e).X_&&await(async function(r,s){if((function(a){return UT(a)&&a!==V.ABORTED})(s.code)){const i=r.Ta.shift();Cn(r).B_(),await ip(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await go(r)}})(e,t),op(e)&&ap(e)}async function ph(e,t){const n=st(e);n.asyncQueue.verifyOperationInProgress(),K(Xn,"RemoteStore received new credentials");const r=sr(n);n.Ea.add(3),await Ks(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await po(n)}async function iw(e,t){const n=st(e);t?(n.Ea.delete(2),await po(n)):t||(n.Ea.add(2),await Ks(n),n.Ra.set("Unknown"))}function Ur(e){return e.ma||(e.ma=(function(n,r,s){const i=st(n);return i.sa(),new qI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:QI.bind(null,e),t_:YI.bind(null,e),r_:XI.bind(null,e),H_:JI.bind(null,e)}),e.da.push((async t=>{t?(e.ma.B_(),Cc(e)?Sc(e):e.Ra.set("Unknown")):(await e.ma.stop(),sp(e))}))),e.ma}function Cn(e){return e.fa||(e.fa=(function(n,r,s){const i=st(n);return i.sa(),new HI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:ew.bind(null,e),r_:sw.bind(null,e),ta:nw.bind(null,e),na:rw.bind(null,e)}),e.da.push((async t=>{t?(e.fa.B_(),await go(e)):(await e.fa.stop(),e.Ta.length>0&&(K(Xn,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))}))),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,c=new Pc(t,n,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vc(e,t){if(rn("AsyncQueue",`${t}: ${e}`),Lr(e))return new z(V.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{static emptySet(t){return new Rr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=cs(),this.sortedSet=new Pt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Rr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.ga=new Pt(Y.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):et(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class Mr{constructor(t,n,r,s,i,a,c,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new Mr(t,n,Rr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ao(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class aw{constructor(){this.queries=mh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=st(n),i=s.queries;s.queries=mh(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function mh(){return new nr((e=>Cd(e)),ao)}async function cw(e,t){const n=st(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new ow,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Vc(a,`Initialization of query '${_r(t.query)}' failed`);return void t.onError(c)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&Dc(n)}async function lw(e,t){const n=st(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uw(e,t){const n=st(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Dc(n)}function hw(e,t,n){const r=st(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function Dc(e){e.Ca.forEach((t=>{t.next()}))}var Ma,_h;(_h=Ma||(Ma={})).Ma="default",_h.Cache="cache";class fw{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Mr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Mr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ma.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){this.key=t}}class lp{constructor(t){this.key=t}}class dw{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ut(),this.mutatedKeys=ut(),this.eu=Pd(t),this.tu=new Rr(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new gh,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,g)=>{const T=s.get(d),S=co(this.query,g)?g:null,L=!!T&&this.mutatedKeys.has(T.key),B=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let j=!1;T&&S?T.data.isEqual(S.data)?L!==B&&(r.track({type:3,doc:S}),j=!0):this.su(T,S)||(r.track({type:2,doc:S}),j=!0,(u&&this.eu(S,u)>0||f&&this.eu(S,f)<0)&&(c=!0)):!T&&S?(r.track({type:0,doc:S}),j=!0):T&&!S&&(r.track({type:1,doc:T}),j=!0,(u||f)&&(c=!0)),j&&(S?(a=a.add(S),i=B?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((d,g)=>(function(S,L){const B=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et(20277,{Rt:j})}};return B(S)-B(L)})(d.type,g.type)||this.eu(d.doc,g.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,f=u!==this.Za;return this.Za=u,a.length!==0||f?{snapshot:new Mr(this.query,t.tu,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ut(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return t.forEach((r=>{this.Xa.has(r)||n.push(new lp(r))})),this.Xa.forEach((r=>{t.has(r)||n.push(new cp(r))})),n}cu(t){this.Ya=t.Qs,this.Xa=ut();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Mr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xc="SyncEngine";class pw{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class gw{constructor(t){this.key=t,this.hu=!1}}class mw{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new nr((c=>Cd(c)),ao),this.Iu=new Map,this.Eu=new Set,this.du=new Pt(Y.comparator),this.Au=new Map,this.Ru=new Ic,this.Vu={},this.mu=new Map,this.fu=Nr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _w(e,t,n=!0){const r=gp(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await up(r,t,n,!0),s}async function yw(e,t){const n=gp(e);await up(n,t,!0,!1)}async function up(e,t,n,r){const s=await OI(e.localStore,Ue(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Ew(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&np(e.remoteStore,s),c}async function Ew(e,t,n,r,s){e.pu=(g,T,S)=>(async function(B,j,G,Q){let J=j.view.ru(G);J.Cs&&(J=await lh(B.localStore,j.query,!1).then((({documents:w})=>j.view.ru(w,J))));const W=Q&&Q.targetChanges.get(j.targetId),ht=Q&&Q.targetMismatches.get(j.targetId)!=null,Tt=j.view.applyChanges(J,B.isPrimaryClient,W,ht);return Eh(B,j.targetId,Tt.au),Tt.snapshot})(e,g,T,S);const i=await lh(e.localStore,t,!0),a=new dw(t,i.Qs),c=a.ru(i.documents),u=zs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(c,e.isPrimaryClient,u);Eh(e,n,f.au);const d=new pw(t,n,a);return e.Tu.set(t,d),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),f.snapshot}async function Tw(e,t,n){const r=st(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ao(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xa(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bc(r.remoteStore,s.targetId),Oa(r,s.targetId)})).catch(kr)):(Oa(r,s.targetId),await xa(r.localStore,s.targetId,!0))}async function Iw(e,t){const n=st(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bc(n.remoteStore,r.targetId))}async function ww(e,t,n){const r=Pw(e);try{const s=await(function(a,c){const u=st(a),f=St.now(),d=c.reduce(((S,L)=>S.add(L.key)),ut());let g,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let L=sn(),B=ut();return u.Ns.getEntries(S,d).next((j=>{L=j,L.forEach(((G,Q)=>{Q.isValidDocument()||(B=B.add(G))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,L))).next((j=>{g=j;const G=[];for(const Q of c){const J=MT(Q,g.get(Q.key).overlayedDocument);J!=null&&G.push(new rr(Q.key,J,Td(J.value.mapValue),Be.exists(!0)))}return u.mutationQueue.addMutationBatch(S,f,G,c)})).next((j=>{T=j;const G=j.applyToLocalDocumentSet(g,B);return u.documentOverlayCache.saveOverlays(S,j.batchId,G)}))})).then((()=>({batchId:T.batchId,changes:Dd(g)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let f=a.Vu[a.currentUser.toKey()];f||(f=new Pt(lt)),f=f.insert(c,u),a.Vu[a.currentUser.toKey()]=f})(r,s.batchId,n),await Gs(r,s.changes),await go(r.remoteStore)}catch(s){const i=Vc(s,"Failed to persist write");n.reject(i)}}async function hp(e,t){const n=st(e);try{const r=await xI(n.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?_t(a.hu,14607):s.removedDocuments.size>0&&(_t(a.hu,42227),a.hu=!1))})),await Gs(n,r,t)}catch(r){await kr(r)}}function yh(e,t,n){const r=st(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=st(a);u.onlineState=c;let f=!1;u.queries.forEach(((d,g)=>{for(const T of g.Sa)T.va(c)&&(f=!0)})),f&&Dc(u)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vw(e,t,n){const r=st(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new Pt(Y.comparator);a=a.insert(i,Zt.newNoDocument(i,nt.min()));const c=ut().add(i),u=new ho(nt.min(),new Map,new Pt(lt),a,c);await hp(r,u),r.du=r.du.remove(i),r.Au.delete(t),Nc(r)}else await xa(r.localStore,t,!1).then((()=>Oa(r,t,n))).catch(kr)}async function Aw(e,t){const n=st(e),r=t.batch.batchId;try{const s=await DI(n.localStore,t);dp(n,r,null),fp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gs(n,s)}catch(s){await kr(s)}}async function bw(e,t,n){const r=st(e);try{const s=await(function(a,c){const u=st(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let d;return u.mutationQueue.lookupMutationBatch(f,c).next((g=>(_t(g!==null,37113),d=g.keys(),u.mutationQueue.removeMutationBatch(f,g)))).next((()=>u.mutationQueue.performConsistencyCheck(f))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d))).next((()=>u.localDocuments.getDocuments(f,d)))}))})(r.localStore,t);dp(r,t,n),fp(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Gs(r,s)}catch(s){await kr(s)}}function fp(e,t){(e.mu.get(t)||[]).forEach((n=>{n.resolve()})),e.mu.delete(t)}function dp(e,t,n){const r=st(e);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Oa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach((r=>{e.Ru.containsKey(r)||pp(e,r)}))}function pp(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(bc(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),Nc(e))}function Eh(e,t,n){for(const r of n)r instanceof cp?(e.Ru.addReference(r.key,t),Rw(e,r)):r instanceof lp?(K(xc,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||pp(e,r.key)):et(19791,{wu:r})}function Rw(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(K(xc,"New document in limbo: "+n),e.Eu.add(r),Nc(e))}function Nc(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new Y(At.fromString(t)),r=e.fu.next();e.Au.set(r,new gw(n)),e.du=e.du.insert(n,r),np(e.remoteStore,new _n(Ue(gc(n.path)),r,"TargetPurposeLimboResolution",so.ce))}}async function Gs(e,t,n){const r=st(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,t,n).then((f=>{if((f||n)&&r.isPrimaryClient){const d=f?!f.fromCache:n?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(f){s.push(f);const d=vc.As(u.targetId,f);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,f){const d=st(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(f,(T=>D.forEach(T.Es,(S=>d.persistence.referenceDelegate.addReference(g,T.targetId,S))).next((()=>D.forEach(T.ds,(S=>d.persistence.referenceDelegate.removeReference(g,T.targetId,S)))))))))}catch(g){if(!Lr(g))throw g;K(Ac,"Failed to update sequence numbers: "+g)}for(const g of f){const T=g.targetId;if(!g.fromCache){const S=d.Ms.get(T),L=S.snapshotVersion,B=S.withLastLimboFreeSnapshotVersion(L);d.Ms=d.Ms.insert(T,B)}}})(r.localStore,i))}async function Sw(e,t){const n=st(e);if(!n.currentUser.isEqual(t)){K(xc,"User change. New user:",t.toKey());const r=await Jd(n.localStore,t);n.currentUser=t,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new z(V.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Gs(n,r.Ls)}}function Cw(e,t){const n=st(e),r=n.Au.get(t);if(r&&r.hu)return ut().add(r.key);{let s=ut();const i=n.Iu.get(t);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function gp(e){const t=st(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vw.bind(null,t),t.Pu.H_=uw.bind(null,t.eventManager),t.Pu.yu=hw.bind(null,t.eventManager),t}function Pw(e){const t=st(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Aw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bw.bind(null,t),t}class ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return VI(this.persistence,new SI,t.initialUser,this.serializer)}Cu(t){return new Xd(wc.mi,this.serializer)}Du(t){return new LI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ji.provider={build:()=>new ji};class Vw extends ji{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){_t(this.persistence.referenceDelegate instanceof Ui,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fI(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?ce.withCacheSize(this.cacheSizeBytes):ce.DEFAULT;return new Xd((r=>Ui.mi(r,n)),this.serializer)}}class ka{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sw.bind(null,this.syncEngine),await iw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new aw})()}createDatastore(t){const n=fo(t.databaseInfo.databaseId),r=(function(i){return new $I(i)})(t.databaseInfo);return(function(i,a,c,u){return new KI(i,a,c,u)})(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,s,i,a,c){return new WI(r,s,i,a,c)})(this.localStore,this.datastore,t.asyncQueue,(n=>yh(this.syncEngine,n,0)),(function(){return fh.v()?new fh:new FI})())}createSyncEngine(t,n){return(function(s,i,a,c,u,f,d){const g=new mw(s,i,a,c,u,f);return d&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=st(n);K(Xn,"RemoteStore shutting down."),r.Ea.add(5),await Ks(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ka.provider={build:()=>new ka};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):rn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="FirestoreClient";class xw{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xt.UNAUTHENTICATED,this.clientId=lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{K(Pn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(K(Pn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Vc(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Zo(e,t){e.asyncQueue.verifyOperationInProgress(),K(Pn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Jd(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Th(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Nw(e);K(Pn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((r=>ph(t.remoteStore,r))),e.setAppCheckTokenChangeListener(((r,s)=>ph(t.remoteStore,s))),e._onlineComponents=t}async function Nw(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){K(Pn,"Using user provided OfflineComponentProvider");try{await Zo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await Zo(e,new ji)}}else K(Pn,"Using default OfflineComponentProvider"),await Zo(e,new Vw(void 0));return e._offlineComponents}async function mp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(K(Pn,"Using user provided OnlineComponentProvider"),await Th(e,e._uninitializedComponentsProvider._online)):(K(Pn,"Using default OnlineComponentProvider"),await Th(e,new ka))),e._onlineComponents}function Mw(e){return mp(e).then((t=>t.syncEngine))}async function Ih(e){const t=await mp(e),n=t.eventManager;return n.onListen=_w.bind(null,t.syncEngine),n.onUnlisten=Tw.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=yw.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Iw.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firestore.googleapis.com",vh=!0;class Ah{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yp,this.ssl=vh}else this.host=t.host,this.ssl=t.ssl??vh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<uI)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}GE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_p(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new LE;switch(r.type){case"firstParty":return new jE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=wh.get(n);r&&(K("ComponentProvider","Removing Datastore"),wh.delete(n),r.terminate())})(this),Promise.resolve()}}function Ow(e,t,n,r={}){e=br(e,mo);const s=ic(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`;s&&(hy(`https://${c}`),gy("Firestore",!0)),i.host!==yp&&i.host!==c&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ps(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Xt.MOCK_USER;else{f=fy(r.mockUserToken,e._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xt(g)}e._authCredentials=new FE(new cd(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ir(this.firestore,t,this._query)}}class Lt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lt(this.firestore,t,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(qs(n,Lt._jsonSchema))return new Lt(t,r||null,new Y(At.fromString(n.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Mt("string",Lt._jsonSchemaVersion),referencePath:Mt("string")};class In extends ir{constructor(t,n,r){super(t,n,gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lt(this.firestore,null,new Y(t))}withConverter(t){return new In(this.firestore,t,this._path)}}function Ep(e,t,...n){if(e=tn(e),ld("collection","path",t),e instanceof mo){const r=At.fromString(t,...n);return ku(r),new In(e,null,r)}{if(!(e instanceof Lt||e instanceof In))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return ku(r),new In(e.firestore,null,r)}}function Tp(e,t,...n){if(e=tn(e),arguments.length===1&&(t=lc.newId()),ld("doc","path",t),e instanceof mo){const r=At.fromString(t,...n);return Ou(r),new Lt(e,null,new Y(r))}{if(!(e instanceof Lt||e instanceof In))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return Ou(r),new Lt(e.firestore,e instanceof In?e.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="AsyncQueue";class Rh{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tp(this,"async_queue_retry"),this._c=()=>{const r=Jo();r&&K(bh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Jo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Jo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Lr(t))throw t;K(bh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,rn("INTERNAL UNHANDLED ERROR: ",Sh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Pc.createAndSchedule(this,t,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&et(47125,{Pc:Sh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Sh(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(e){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(e,["next","error","complete"])}class Us extends mo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Rh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Rh(t),this._firestoreClient=void 0,await t}}}function kw(e,t){const n=typeof e=="object"?e:Jf(),r=typeof e=="string"?e:Mi,s=$s(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ly("firestore");i&&Ow(s,...i)}return s}function Ip(e){if(e._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Lw(e),e._firestoreClient}function Lw(e){const t=e._freezeSettings(),n=(function(s,i,a,c){return new sT(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,_p(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new xw(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Te(Gt.fromBase64String(t))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Te(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Te._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(qs(t,Te._jsonSchema))return Te.fromBase64String(t.bytes)}}Te._jsonSchemaVersion="firestore/bytes/1.0",Te._jsonSchema={type:Mt("string",Te._jsonSchemaVersion),bytes:Mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(qs(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:Mt("string",$e._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(qs(t,qe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new qe(t.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:Mt("string",qe._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=/^__.*__$/;class Uw{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new rr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Hs(t,this.data,n,this.fieldTransforms)}}function wp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et(40011,{Ac:e})}}class kc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new kc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return $i(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(wp(this.Ac)&&Fw.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Bw{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||fo(t)}Cc(t,n,r,s=!1){return new kc({Ac:t,methodName:n,Dc:r,path:Kt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vp(e){const t=e._freezeSettings(),n=fo(e._databaseId);return new Bw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jw(e,t,n,r,s,i={}){const a=e.Cc(i.merge||i.mergeFields?2:0,t,n,s);Rp("Data must be an object, but it was:",a,r);const c=Ap(r,a);let u,f;if(i.merge)u=new Ae(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const T=qw(t,g,n);if(!a.contains(T))throw new z(V.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);zw(d,T)||d.push(T)}u=new Ae(d),f=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,f=a.fieldTransforms;return new Uw(new Ee(c),u,f)}class Lc extends Oc{_toFieldTransform(t){return new VT(t.path,new ks)}isEqual(t){return t instanceof Lc}}function $w(e,t,n,r=!1){return Fc(n,e.Cc(r?4:3,t))}function Fc(e,t){if(bp(e=tn(e)))return Rp("Unsupported field value:",t,e),Ap(e,t);if(e instanceof Oc)return(function(r,s){if(!wp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Fc(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(e,t)}return(function(r,s){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ST(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=St.fromDate(r);return{timestampValue:Fi(s.serializer,i)}}if(r instanceof St){const i=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fi(s.serializer,i)}}if(r instanceof $e)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Te)return{bytesValue:qd(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qe)return(function(a,c){return{mapValue:{fields:{[yd]:{stringValue:Ed},[Oi]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return mc(c.serializer,f)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ro(r)}`)})(e,t)}function Ap(e,t){const n={};return fd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):er(e,((r,s)=>{const i=Fc(s,t.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function bp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof St||e instanceof $e||e instanceof Te||e instanceof Lt||e instanceof Oc||e instanceof qe)}function Rp(e,t,n){if(!bp(n)||!ud(n)){const r=ro(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function qw(e,t,n){if((t=tn(t))instanceof Mc)return t._internalPath;if(typeof t=="string")return Sp(e,t);throw $i("Field path arguments must be of type string or ",e,!1,void 0,n)}const Hw=new RegExp("[~\\*/\\[\\]]");function Sp(e,t,n){if(t.search(Hw)>=0)throw $i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mc(...t.split("."))._internalPath}catch{throw $i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $i(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new z(V.INVALID_ARGUMENT,c+e+u)}function zw(e,t){return e.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kw extends Cp{data(){return super.data()}}function Uc(e,t){return typeof t=="string"?Sp(e,t):t instanceof Mc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bc{}class Pp extends Bc{}function Ww(e,t,...n){let r=[];t instanceof Bc&&r.push(t),r=r.concat(n),(function(i){const a=i.filter((u=>u instanceof $c)).length,c=i.filter((u=>u instanceof jc)).length;if(a>1||a>0&&c>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)e=s._apply(e);return e}class jc extends Pp{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new jc(t,n,r)}_apply(t){const n=this._parse(t);return Vp(t._query,n),new ir(t.firestore,t.converter,Ra(t._query,n))}_parse(t){const n=vp(t.firestore);return(function(i,a,c,u,f,d,g){let T;if(f.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Vh(g,d);const L=[];for(const B of g)L.push(Ph(u,i,B));T={arrayValue:{values:L}}}else T=Ph(u,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Vh(g,d),T=$w(c,a,g,d==="in"||d==="not-in");return Nt.create(f,d,T)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class $c extends Bc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new $c(t,n)}_parse(t){const n=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Ce.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Vp(a,u),a=Ra(a,u)})(t._query,n),new ir(t.firestore,t.converter,Ra(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qc extends Pp{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new qc(t,n)}_apply(t){const n=(function(s,i,a){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Os(i,a)})(t._query,this._field,this._direction);return new ir(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Fr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,n))}}function Qw(e,t="asc"){const n=t,r=Uc("orderBy",e);return qc._create(r,n)}function Ph(e,t,n){if(typeof(n=tn(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sd(t)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(At.fromString(n));if(!Y.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hu(e,new Y(r))}if(n instanceof Lt)return Hu(e,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(n)}.`)}function Vh(e,t){if(!Array.isArray(e)||e.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vp(e,t){const n=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(e.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Yw{convertValue(t,n="none"){switch(Sn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Rn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw et(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return er(t,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(t){const n=t.fields?.[Oi].arrayValue?.values?.map((r=>Dt(r.doubleValue)));return new qe(n)}convertGeoPoint(t){return new $e(Dt(t.latitude),Dt(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=oo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=bn(t);return new St(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=At.fromString(t);_t(Qd(r),9688,{name:t});const s=new Ns(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class us{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wn extends Cp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Wn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wn._jsonSchema={type:Mt("string",Wn._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class vi extends Wn{data(t={}){return super.data(t)}}class Sr{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new vi(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Jw(c.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Sr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=lc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Jw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return et(61501,{type:e})}}Sr._jsonSchemaVersion="firestore/querySnapshot/1.0",Sr._jsonSchema={type:Mt("string",Sr._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class Dp extends Yw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function Zw(e){return xp(br(e.firestore,Us),[new _c(e._key,Be.none())])}function tv(e,t){const n=br(e.firestore,Us),r=Tp(e),s=Xw(e.converter,t);return xp(n,[jw(vp(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then((()=>r))}function ev(e,...t){e=tn(e);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ch(t[r])||(n=t[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ch(t[r])){const u=t[r];t[r]=u.next?.bind(u),t[r+1]=u.error?.bind(u),t[r+2]=u.complete?.bind(u)}let i,a,c;if(e instanceof Lt)a=br(e.firestore,Us),c=gc(e._key.path),i={next:u=>{t[r]&&t[r](nv(a,e,u))},error:t[r+1],complete:t[r+2]};else{const u=br(e,ir);a=br(u.firestore,Us),c=u._query;const f=new Dp(a);i={next:d=>{t[r]&&t[r](new Sr(a,f,u,d))},error:t[r+1],complete:t[r+2]},Gw(e._query)}return(function(f,d,g,T){const S=new Dw(T),L=new fw(d,S,g);return f.asyncQueue.enqueueAndForget((async()=>cw(await Ih(f),L))),()=>{S.Nu(),f.asyncQueue.enqueueAndForget((async()=>lw(await Ih(f),L)))}})(Ip(a),c,s,i)}function xp(e,t){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>ww(await Mw(r),s,i))),i.promise})(Ip(e),t)}function nv(e,t,n){const r=n.docs.get(t._key),s=new Dp(e);return new Wn(e,s,t._key,r,new us(n.hasPendingWrites,n.fromCache),t.converter)}function rv(){return new Lc("serverTimestamp")}(function(t,n=!0){(function(s){Or=s})(RE),vn(new en("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Us(new UE(r.getProvider("auth-internal")),new $E(a,r.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(f.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Fe(Du,xu,t),Fe(Du,xu,"esm2020")})();var sv="firebase",iv="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(sv,iv,"app");const Np="@firebase/installations",Hc="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=1e4,Op=`w:${Hc}`,kp="FIS_v2",ov="https://firebaseinstallations.googleapis.com/v1",av=3600*1e3,cv="installations",lv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jn=new no(cv,lv,uv);function Lp(e){return e instanceof Dn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp({projectId:e}){return`${ov}/projects/${e}/installations`}function Up(e){return{token:e.token,requestStatus:2,expiresIn:fv(e.expiresIn),creationTime:Date.now()}}async function Bp(e,t){const r=(await t.json()).error;return Jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function hv(e,{refreshToken:t}){const n=jp(e);return n.append("Authorization",dv(t)),n}async function $p(e){const t=await e();return t.status>=500&&t.status<600?e():t}function fv(e){return Number(e.replace("s","000"))}function dv(e){return`${kp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fp(e),s=jp(e),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:kp,appId:e.appId,sdkVersion:Op},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await $p(()=>fetch(r,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Up(f.authToken)}}else throw await Bp("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=/^[cdef][\w-]{21}$/,La="";function _v(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=yv(e);return mv.test(n)?n:La}catch{return La}}function yv(e){return gv(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Map;function zp(e,t){const n=_o(e);Kp(n,t),Ev(n,t)}function Kp(e,t){const n=Hp.get(e);if(n)for(const r of n)r(t)}function Ev(e,t){const n=Tv();n&&n.postMessage({key:e,fid:t}),Iv()}let Hn=null;function Tv(){return!Hn&&"BroadcastChannel"in self&&(Hn=new BroadcastChannel("[Firebase] FID Change"),Hn.onmessage=e=>{Kp(e.data.key,e.data.fid)}),Hn}function Iv(){Hp.size===0&&Hn&&(Hn.close(),Hn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebase-installations-database",vv=1,Zn="firebase-installations-store";let ta=null;function zc(){return ta||(ta=Yf(wv,vv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zn)}}})),ta}async function qi(e,t){const n=_o(e),s=(await zc()).transaction(Zn,"readwrite"),i=s.objectStore(Zn),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&zp(e,t.fid),t}async function Gp(e){const t=_o(e),r=(await zc()).transaction(Zn,"readwrite");await r.objectStore(Zn).delete(t),await r.done}async function yo(e,t){const n=_o(e),s=(await zc()).transaction(Zn,"readwrite"),i=s.objectStore(Zn),a=await i.get(n),c=t(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&zp(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(e){let t;const n=await yo(e.appConfig,r=>{const s=Av(r),i=bv(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===La?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Av(e){const t=e||{fid:_v(),registrationStatus:0};return Wp(t)}function bv(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Rv(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Sv(e)}:{installationEntry:t}}async function Rv(e,t){try{const n=await pv(e,t);return qi(e.appConfig,n)}catch(n){throw Lp(n)&&n.customData.serverCode===409?await Gp(e.appConfig):await qi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Sv(e){let t=await Dh(e.appConfig);for(;t.registrationStatus===1;)await qp(100),t=await Dh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kc(e);return r||n}return t}function Dh(e){return yo(e,t=>{if(!t)throw Jn.create("installation-not-found");return Wp(t)})}function Wp(e){return Cv(e)?{fid:e.fid,registrationStatus:0}:e}function Cv(e){return e.registrationStatus===1&&e.registrationTime+Mp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv({appConfig:e,heartbeatServiceProvider:t},n){const r=Vv(e,n),s=hv(e,n),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Op,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await $p(()=>fetch(r,c));if(u.ok){const f=await u.json();return Up(f)}else throw await Bp("Generate Auth Token",u)}function Vv(e,{fid:t}){return`${Fp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e,t=!1){let n;const r=await yo(e.appConfig,i=>{if(!Qp(i))throw Jn.create("not-registered");const a=i.authToken;if(!t&&Nv(a))return i;if(a.requestStatus===1)return n=Dv(e,t),i;{if(!navigator.onLine)throw Jn.create("app-offline");const c=Ov(i);return n=xv(e,c),c}});return n?await n:r.authToken}async function Dv(e,t){let n=await xh(e.appConfig);for(;n.authToken.requestStatus===1;)await qp(100),n=await xh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Gc(e,t):r}function xh(e){return yo(e,t=>{if(!Qp(t))throw Jn.create("not-registered");const n=t.authToken;return kv(n)?{...t,authToken:{requestStatus:0}}:t})}async function xv(e,t){try{const n=await Pv(e,t),r={...t,authToken:n};return await qi(e.appConfig,r),n}catch(n){if(Lp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gp(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await qi(e.appConfig,r)}throw n}}function Qp(e){return e!==void 0&&e.registrationStatus===2}function Nv(e){return e.requestStatus===2&&!Mv(e)}function Mv(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+av}function Ov(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function kv(e){return e.requestStatus===1&&e.requestTime+Mp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(e){const t=e,{installationEntry:n,registrationPromise:r}=await Kc(t);return r?r.catch(console.error):Gc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(e,t=!1){const n=e;return await Uv(n),(await Gc(n,t)).token}async function Uv(e){const{registrationPromise:t}=await Kc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(e){if(!e||!e.options)throw ea("App Configuration");if(!e.name)throw ea("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ea(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ea(e){return Jn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="installations",jv="installations-internal",$v=e=>{const t=e.getProvider("app").getImmediate(),n=Bv(t),r=$s(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qv=e=>{const t=e.getProvider("app").getImmediate(),n=$s(t,Yp).getImmediate();return{getId:()=>Lv(n),getToken:s=>Fv(n,s)}};function Hv(){vn(new en(Yp,$v,"PUBLIC")),vn(new en(jv,qv,"PRIVATE"))}Hv();Fe(Np,Hc);Fe(Np,Hc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="analytics",zv="firebase_id",Kv="origin",Gv=60*1e3,Wv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_e=new no("analytics","Analytics",Qv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(e){if(!e.startsWith(Wc)){const t=_e.create("invalid-gtag-resource",{gtagURL:e});return le.warn(t.message),""}return e}function Xp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Xv(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Jv(e,t){const n=Xv("firebase-js-sdk-policy",{createScriptURL:Yv}),r=document.createElement("script"),s=`${Wc}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Zv(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function tA(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const u=(await Xp(n)).find(f=>f.measurementId===s);u&&await t[u.appId]}}catch(c){le.error(c)}e("config",s,i)}async function eA(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Xp(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&t[f.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){le.error(i)}}function nA(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await eA(e,t,n,c,u)}else if(i==="config"){const[c,u]=a;await tA(e,t,n,r,c,u)}else if(i==="consent"){const[c,u]=a;e("consent",c,u)}else if(i==="get"){const[c,u,f]=a;e("get",c,u,f)}else if(i==="set"){const[c]=a;e("set",c)}else e(i,...a)}catch(c){le.error(c)}}return s}function rA(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=nA(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function sA(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Wc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=30,oA=1e3;class aA{constructor(t={},n=oA){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Jp=new aA;function cA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function lA(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:cA(n)},s=Wv.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();c.error?.message&&(a=c.error.message)}catch{}throw _e.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function uA(e,t=Jp,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw _e.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw _e.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new dA;return setTimeout(async()=>{c.abort()},Gv),Zp({appId:r,apiKey:s,measurementId:i},a,c,t)}async function Zp(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Jp){const{appId:i,measurementId:a}=e;try{await hA(r,t)}catch(c){if(a)return le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:a};throw c}try{const c=await lA(e);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!fA(u)){if(s.deleteThrottleMetadata(i),a)return le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:i,measurementId:a};throw c}const f=Number(u?.customData?.httpStatus)===503?Iu(n,s.intervalMillis,iA):Iu(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,d),le.debug(`Calling attemptFetch again in ${f} millis`),Zp(e,d,r,s)}}function hA(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(_e.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fA(e){if(!(e instanceof Dn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class dA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function pA(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a={...r,send_to:i};e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(){if(Kf())try{await Gf()}catch(e){return le.warn(_e.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return le.warn(_e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mA(e,t,n,r,s,i,a){const c=uA(e);c.then(T=>{n[T.measurementId]=T.appId,e.options.measurementId&&T.measurementId!==e.options.measurementId&&le.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>le.error(T)),t.push(c);const u=gA().then(T=>{if(T)return r.getId()}),[f,d]=await Promise.all([c,u]);sA(i)||Jv(i,f.measurementId),s("js",new Date);const g=a?.config??{};return g[Kv]="firebase",g.update=!0,d!=null&&(g[zv]=d),s("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(t){this.app=t}_delete(){return delete vs[this.app.options.appId],Promise.resolve()}}let vs={},Nh=[];const Mh={};let na="dataLayer",yA="gtag",Oh,tg,kh=!1;function EA(){const e=[];if(yy()&&e.push("This is a browser extension environment."),Ty()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=_e.create("invalid-analytics-context",{errorInfo:t});le.warn(n.message)}}function TA(e,t,n){EA();const r=e.options.appId;if(!r)throw _e.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _e.create("no-api-key");if(vs[r]!=null)throw _e.create("already-exists",{id:r});if(!kh){Zv(na);const{wrappedGtag:i,gtagCore:a}=rA(vs,Nh,Mh,na,yA);tg=i,Oh=a,kh=!0}return vs[r]=mA(e,Nh,Mh,t,Oh,na,n),new _A(e)}function IA(e=Jf()){e=tn(e);const t=$s(e,Hi);return t.isInitialized()?t.getImmediate():wA(e)}function wA(e,t={}){const n=$s(e,Hi);if(n.isInitialized()){const s=n.getImmediate();if(Ps(t,n.getOptions()))return s;throw _e.create("already-initialized")}return n.initialize({options:t})}function vA(e,t,n,r){e=tn(e),pA(tg,vs[e.app.options.appId],t,n,r).catch(s=>le.error(s))}const Lh="@firebase/analytics",Fh="0.10.18";function AA(){vn(new en(Hi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return TA(r,s,n)},"PUBLIC")),vn(new en("analytics-internal",e,"PRIVATE")),Fe(Lh,Fh),Fe(Lh,Fh,"esm2020");function e(t){try{const n=t.getProvider(Hi).getImmediate();return{logEvent:(r,s,i)=>vA(n,r,s,i)}}catch(n){throw _e.create("interop-component-reg-failed",{reason:n})}}}AA();const bA={apiKey:"AIzaSyByycsXhbVQzXMFpHEdaE_ycgDU04LUH0A",authDomain:"recipe-sharing-3ca72.firebaseapp.com",projectId:"recipe-sharing-3ca72",storageBucket:"recipe-sharing-3ca72.firebasestorage.app",messagingSenderId:"93447991093",appId:"1:93447991093:web:a34e9500dd805ab734e67c",measurementId:"G-C8PL6Y5871"},eg=Xf(bA);IA(eg);const Fa=kw(eg),Qc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},RA={data(){return{title:"",ingredientsStr:"",steps:"",category:""}},methods:{async saveRecipe(){if(!this.title.trim()){window.M&&M.toast&&M.toast({html:"Title required",classes:"red"});return}try{await tv(Ep(Fa,"recipes"),{title:this.title.trim(),ingredients:this.ingredientsStr?this.ingredientsStr.split(",").map(e=>e.trim()):[],steps:this.steps.trim(),category:this.category.trim()||"Uncategorized",createdAt:rv()}),this.title=this.ingredientsStr=this.steps=this.category="",window.M&&M.toast&&M.toast({html:"Recipe saved",classes:"teal"}),this.$emit("saved")}catch(e){console.error(e),window.M&&M.toast&&M.toast({html:"Error saving recipe",classes:"red"})}}}},SA={class:"card",style:{padding:"16px","margin-bottom":"16px"}},CA={class:"row"},PA={class:"input-field col s12"},VA={class:"input-field col s12"},DA={class:"input-field col s12"},xA={class:"input-field col s6"},NA={class:"col s6",style:{display:"flex","align-items":"flex-end","justify-content":"flex-end"}};function MA(e,t,n,r,s,i){return Qe(),gn("div",SA,[t[10]||(t[10]=at("h5",null,"Add a Recipe",-1)),at("div",CA,[at("div",PA,[ai(at("input",{id:"title","onUpdate:modelValue":t[0]||(t[0]=a=>s.title=a),type:"text"},null,512),[[ci,s.title]]),t[5]||(t[5]=at("label",{class:"active",for:"title"},"Title",-1))]),at("div",VA,[ai(at("textarea",{id:"ingredients","onUpdate:modelValue":t[1]||(t[1]=a=>s.ingredientsStr=a),class:"materialize-textarea"},null,512),[[ci,s.ingredientsStr]]),t[6]||(t[6]=at("label",{class:"active",for:"ingredients"},"Ingredients (comma separated)",-1))]),at("div",DA,[ai(at("textarea",{id:"steps","onUpdate:modelValue":t[2]||(t[2]=a=>s.steps=a),class:"materialize-textarea"},null,512),[[ci,s.steps]]),t[7]||(t[7]=at("label",{class:"active",for:"steps"},"Steps / Instructions",-1))]),at("div",xA,[ai(at("input",{id:"category","onUpdate:modelValue":t[3]||(t[3]=a=>s.category=a),type:"text"},null,512),[[ci,s.category]]),t[8]||(t[8]=at("label",{class:"active",for:"category"},"Category (e.g., Dessert)",-1))]),at("div",NA,[at("button",{class:"btn teal",onClick:t[4]||(t[4]=(...a)=>i.saveRecipe&&i.saveRecipe(...a))},[...t[9]||(t[9]=[at("i",{class:"material-icons left"},"save",-1),nc(" Save ",-1)])])])])])}const OA=Qc(RA,[["render",MA],["__scopeId","data-v-492934b8"]]),kA={data(){return{recipes:[],unsubscribe:null}},mounted(){this.fetchRecipes()},beforeUnmount(){this.unsubscribe&&this.unsubscribe()},methods:{fetchRecipes(){const e=Ww(Ep(Fa,"recipes"),Qw("createdAt","desc"));this.unsubscribe&&this.unsubscribe(),this.unsubscribe=ev(e,t=>{this.recipes=t.docs.map(n=>{const r=n.data();return{id:n.id,title:r.title,ingredients:r.ingredients||[],steps:r.steps||"",category:r.category||"",createdAt:r.createdAt||null}})},t=>{console.error("Firestore listen error:",t)})},formatDate(e){try{return e?e.toDate().toLocaleString():""}catch{return""}},async deleteRecipe(e){if(confirm("Delete this recipe?"))try{await Zw(Tp(Fa,"recipes",e)),window.M&&M.toast&&M.toast({html:"Recipe deleted",classes:"red"})}catch(t){console.error(t),window.M&&M.toast&&M.toast({html:"Delete failed",classes:"red"})}}}},LA={key:0,class:"card-panel grey lighten-4"},FA={style:{display:"flex","justify-content":"space-between","align-items":"center"}},UA={style:{margin:"0"}},BA={class:"grey-text"},jA=["onClick"],$A={style:{"margin-top":"8px"}},qA={style:{margin:"8px 0","padding-left":"20px"}},HA={style:{"white-space":"pre-wrap"}};function zA(e,t,n,r,s,i){return Qe(),gn("div",null,[t[3]||(t[3]=at("h5",{style:{"margin-bottom":"8px"}},"Recipes",-1)),s.recipes.length===0?(Qe(),gn("div",LA," No recipes yet. ")):h_("",!0),(Qe(!0),gn(ve,null,Kl(s.recipes,a=>(Qe(),gn("div",{key:a.id,class:"card",style:{padding:"12px","margin-bottom":"10px"}},[at("div",FA,[at("div",null,[at("h6",UA,dr(a.title),1),at("small",BA,dr(a.category)+" • "+dr(i.formatDate(a.createdAt)),1)]),at("div",null,[at("button",{class:"btn-flat",onClick:c=>i.deleteRecipe(a.id),title:"Delete"},[...t[0]||(t[0]=[at("i",{class:"material-icons red-text"},"delete",-1)])],8,jA)])]),at("div",$A,[t[1]||(t[1]=at("strong",null,"Ingredients:",-1)),at("ul",qA,[(Qe(!0),gn(ve,null,Kl(a.ingredients,(c,u)=>(Qe(),gn("li",{key:u},dr(c),1))),128))]),t[2]||(t[2]=at("strong",null,"Steps:",-1)),at("p",HA,dr(a.steps),1)])]))),128))])}const KA=Qc(kA,[["render",zA],["__scopeId","data-v-37913d05"]]),GA={components:{RecipeForm:OA,RecipeList:KA},methods:{onSaved(){const e=this.$refs.list;e&&e.fetchRecipes&&e.fetchRecipes()},scrollToAdd(){const e=this.$refs.form?.$el;e&&e.scrollIntoView({behavior:"smooth"})}}},WA={class:"app-container"},QA={class:"white z-depth-1",style:{padding:"10px","margin-bottom":"10px"}},YA={class:"nav-wrapper"},XA={id:"nav-mobile",class:"right"};function JA(e,t,n,r,s,i){const a=Hl("recipe-form"),c=Hl("recipe-list");return Qe(),gn("div",WA,[at("nav",QA,[at("div",YA,[t[2]||(t[2]=at("a",{class:"brand-logo left",href:"#",style:{"padding-left":"10px",color:"#00695c"}}," Recipe Share ",-1)),at("ul",XA,[at("li",null,[at("a",{href:"#",onClick:t[0]||(t[0]=G_((...u)=>i.scrollToAdd&&i.scrollToAdd(...u),["prevent"]))},[...t[1]||(t[1]=[at("i",{class:"material-icons"},"add",-1),nc(" Add",-1)])])])])])]),Se(a,{ref:"form",onSaved:i.onSaved},null,8,["onSaved"]),Se(c,{ref:"list"},null,512)])}const ZA=Qc(GA,[["render",JA],["__scopeId","data-v-47383466"]]);Y_(ZA).mount("#app");
