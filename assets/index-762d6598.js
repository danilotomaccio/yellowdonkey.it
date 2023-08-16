(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function gh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Re={},ai=[],Wt=()=>{},OI=()=>!1,DI=/^on[^a-z]/,hl=t=>DI.test(t),mh=t=>t.startsWith("onUpdate:"),He=Object.assign,_h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xI=Object.prototype.hasOwnProperty,ae=(t,e)=>xI.call(t,e),q=Array.isArray,li=t=>ao(t)==="[object Map]",dl=t=>ao(t)==="[object Set]",Cf=t=>ao(t)==="[object Date]",ee=t=>typeof t=="function",Fe=t=>typeof t=="string",Dr=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",xm=t=>Te(t)&&ee(t.then)&&ee(t.catch),Mm=Object.prototype.toString,ao=t=>Mm.call(t),MI=t=>ao(t).slice(8,-1),Lm=t=>ao(t)==="[object Object]",yh=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oa=gh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},LI=/-(\w)/g,fn=fl(t=>t.replace(LI,(e,n)=>n?n.toUpperCase():"")),VI=/\B([A-Z])/g,Ui=fl(t=>t.replace(VI,"-$1").toLowerCase()),pl=fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=fl(t=>t?`on${pl(t)}`:""),xr=(t,e)=>!Object.is(t,e),aa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ea=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sf;const nu=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vh(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?$I(s):vh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Te(t))return t}}const FI=/;(?![^(]*\))/g,UI=/:([^]+)/,BI=/\/\*[^]*?\*\//g;function $I(t){const e={};return t.replace(BI,"").split(FI).forEach(n=>{if(n){const s=n.split(UI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Eh(t){let e="";if(Fe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Eh(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WI=gh(jI);function Fm(t){return!!t||t===""}function HI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=gl(t[s],e[s]);return n}function gl(t,e){if(t===e)return!0;let n=Cf(t),s=Cf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?HI(t,e):!1;if(n=Te(t),s=Te(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!gl(t[o],e[o]))return!1}}return String(t)===String(e)}function qI(t,e){return t.findIndex(n=>gl(n,e))}const aL=t=>Fe(t)?t:t==null?"":q(t)||Te(t)&&(t.toString===Mm||!ee(t.toString))?JSON.stringify(t,Um,2):String(t),Um=(t,e)=>e&&e.__v_isRef?Um(t,e.value):li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:dl(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!q(e)&&!Lm(e)?String(e):e;let wt;class Bm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function $m(t){return new Bm(t)}function KI(t,e=wt){e&&e.active&&e.effects.push(t)}function jm(){return wt}function zI(t){wt&&wt.cleanups.push(t)}const Th=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wm=t=>(t.w&is)>0,Hm=t=>(t.n&is)>0,GI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=is},QI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Wm(i)&&!Hm(i)?i.delete(t):e[n++]=i,i.w&=~is,i.n&=~is}e.length=n}},su=new WeakMap;let ur=0,is=1;const iu=30;let Lt;const Cs=Symbol(""),ru=Symbol("");class Ih{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,KI(this,s)}run(){if(!this.active)return this.fn();let e=Lt,n=Xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,Xn=!0,is=1<<++ur,ur<=iu?GI(this):bf(this),this.fn()}finally{ur<=iu&&QI(this),is=1<<--ur,Lt=this.parent,Xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(bf(this),this.onStop&&this.onStop(),this.active=!1)}}function bf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xn=!0;const qm=[];function Bi(){qm.push(Xn),Xn=!1}function $i(){const t=qm.pop();Xn=t===void 0?!0:t}function Tt(t,e,n){if(Xn&&Lt){let s=su.get(t);s||su.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Th()),Km(i)}}function Km(t,e){let n=!1;ur<=iu?Hm(t)||(t.n|=is,n=!Wm(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function Nn(t,e,n,s,i,r){const o=su.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?yh(n)&&a.push(o.get("length")):(a.push(o.get(Cs)),li(t)&&a.push(o.get(ru)));break;case"delete":q(t)||(a.push(o.get(Cs)),li(t)&&a.push(o.get(ru)));break;case"set":li(t)&&a.push(o.get(Cs));break}if(a.length===1)a[0]&&ou(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ou(Th(l))}}function ou(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Pf(s);for(const s of n)s.computed||Pf(s)}function Pf(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const YI=gh("__proto__,__v_isRef,__isVue"),zm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),XI=wh(),JI=wh(!1,!0),ZI=wh(!0),kf=ew();function ew(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Tt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bi();const s=ue(this)[e].apply(this,n);return $i(),s}}),t}function tw(t){const e=ue(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function wh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?_w:Jm:e?Xm:Ym).get(s))return s;const o=q(s);if(!t){if(o&&ae(kf,i))return Reflect.get(kf,i,r);if(i==="hasOwnProperty")return tw}const a=Reflect.get(s,i,r);return(Dr(i)?zm.has(i):YI(i))||(t||Tt(s,"get",i),e)?a:Xe(a)?o&&yh(i)?a:a.value:Te(a)?t?e_(a):_l(a):a}}const nw=Gm(),sw=Gm(!0);function Gm(t=!1){return function(n,s,i,r){let o=n[s];if(Ei(o)&&Xe(o)&&!Xe(i))return!1;if(!t&&(!Ta(i)&&!Ei(i)&&(o=ue(o),i=ue(i)),!q(n)&&Xe(o)&&!Xe(i)))return o.value=i,!0;const a=q(n)&&yh(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,r);return n===ue(r)&&(a?xr(i,o)&&Nn(n,"set",s,i):Nn(n,"add",s,i)),l}}function iw(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Nn(t,"delete",e,void 0),s}function rw(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!zm.has(e))&&Tt(t,"has",e),n}function ow(t){return Tt(t,"iterate",q(t)?"length":Cs),Reflect.ownKeys(t)}const Qm={get:XI,set:nw,deleteProperty:iw,has:rw,ownKeys:ow},aw={get:ZI,set(t,e){return!0},deleteProperty(t,e){return!0}},lw=He({},Qm,{get:JI,set:sw}),Rh=t=>t,ml=t=>Reflect.getPrototypeOf(t);function Fo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&Tt(i,"get",e),Tt(i,"get",r));const{has:o}=ml(i),a=s?Rh:n?bh:Mr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Uo(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&Tt(s,"has",t),Tt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bo(t,e=!1){return t=t.__v_raw,!e&&Tt(ue(t),"iterate",Cs),Reflect.get(t,"size",t)}function Nf(t){t=ue(t);const e=ue(this);return ml(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function Of(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=ml(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?xr(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function Df(t){const e=ue(this),{has:n,get:s}=ml(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Nn(e,"delete",t,void 0),r}function xf(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function $o(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),l=e?Rh:t?bh:Mr;return!t&&Tt(a,"iterate",Cs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function jo(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=li(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Rh:e?bh:Mr;return!e&&Tt(r,"iterate",l?ru:Cs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function cw(){const t={get(r){return Fo(this,r)},get size(){return Bo(this)},has:Uo,add:Nf,set:Of,delete:Df,clear:xf,forEach:$o(!1,!1)},e={get(r){return Fo(this,r,!1,!0)},get size(){return Bo(this)},has:Uo,add:Nf,set:Of,delete:Df,clear:xf,forEach:$o(!1,!0)},n={get(r){return Fo(this,r,!0)},get size(){return Bo(this,!0)},has(r){return Uo.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:$o(!0,!1)},s={get(r){return Fo(this,r,!0,!0)},get size(){return Bo(this,!0)},has(r){return Uo.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:$o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jo(r,!1,!1),n[r]=jo(r,!0,!1),e[r]=jo(r,!1,!0),s[r]=jo(r,!0,!0)}),[t,n,e,s]}const[uw,hw,dw,fw]=cw();function Ah(t,e){const n=e?t?fw:dw:t?hw:uw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const pw={get:Ah(!1,!1)},gw={get:Ah(!1,!0)},mw={get:Ah(!0,!1)},Ym=new WeakMap,Xm=new WeakMap,Jm=new WeakMap,_w=new WeakMap;function yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vw(t){return t.__v_skip||!Object.isExtensible(t)?0:yw(MI(t))}function _l(t){return Ei(t)?t:Ch(t,!1,Qm,pw,Ym)}function Zm(t){return Ch(t,!1,lw,gw,Xm)}function e_(t){return Ch(t,!0,aw,mw,Jm)}function Ch(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=vw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ci(t){return Ei(t)?ci(t.__v_raw):!!(t&&t.__v_isReactive)}function Ei(t){return!!(t&&t.__v_isReadonly)}function Ta(t){return!!(t&&t.__v_isShallow)}function t_(t){return ci(t)||Ei(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Sh(t){return Ea(t,"__v_skip",!0),t}const Mr=t=>Te(t)?_l(t):t,bh=t=>Te(t)?e_(t):t;function n_(t){Xn&&Lt&&(t=ue(t),Km(t.dep||(t.dep=Th())))}function s_(t,e){t=ue(t);const n=t.dep;n&&ou(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Jn(t){return r_(t,!1)}function i_(t){return r_(t,!0)}function r_(t,e){return Xe(t)?t:new Ew(t,e)}class Ew{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Mr(e)}get value(){return n_(this),this._value}set value(e){const n=this.__v_isShallow||Ta(e)||Ei(e);e=n?e:ue(e),xr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mr(e),s_(this))}}function st(t){return Xe(t)?t.value:t}const Tw={get:(t,e,n)=>st(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Xe(i)&&!Xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function o_(t){return ci(t)?t:new Proxy(t,Tw)}class Iw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ih(e,()=>{this._dirty||(this._dirty=!0,s_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return n_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ww(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=Wt):(s=t.get,i=t.set),new Iw(s,i,r||!i,n)}function Zn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){yl(r,e,n)}return i}function Ht(t,e,n,s){if(ee(t)){const r=Zn(t,e,n,s);return r&&xm(r)&&r.catch(o=>{yl(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ht(t[r],e,n,s));return i}function yl(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Zn(l,null,10,[t,o,a]);return}}Rw(t,n,i,s)}function Rw(t,e,n,s=!0){console.error(t)}let Lr=!1,au=!1;const at=[];let tn=0;const ui=[];let wn=null,ys=0;const a_=Promise.resolve();let Ph=null;function l_(t){const e=Ph||a_;return t?e.then(this?t.bind(this):t):e}function Aw(t){let e=tn+1,n=at.length;for(;e<n;){const s=e+n>>>1;Vr(at[s])<t?e=s+1:n=s}return e}function kh(t){(!at.length||!at.includes(t,Lr&&t.allowRecurse?tn+1:tn))&&(t.id==null?at.push(t):at.splice(Aw(t.id),0,t),c_())}function c_(){!Lr&&!au&&(au=!0,Ph=a_.then(h_))}function Cw(t){const e=at.indexOf(t);e>tn&&at.splice(e,1)}function Sw(t){q(t)?ui.push(...t):(!wn||!wn.includes(t,t.allowRecurse?ys+1:ys))&&ui.push(t),c_()}function Mf(t,e=Lr?tn+1:0){for(;e<at.length;e++){const n=at[e];n&&n.pre&&(at.splice(e,1),e--,n())}}function u_(t){if(ui.length){const e=[...new Set(ui)];if(ui.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,s)=>Vr(n)-Vr(s)),ys=0;ys<wn.length;ys++)wn[ys]();wn=null,ys=0}}const Vr=t=>t.id==null?1/0:t.id,bw=(t,e)=>{const n=Vr(t)-Vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function h_(t){au=!1,Lr=!0,at.sort(bw);const e=Wt;try{for(tn=0;tn<at.length;tn++){const n=at[tn];n&&n.active!==!1&&Zn(n,null,14)}}finally{tn=0,at.length=0,u_(),Lr=!1,Ph=null,(at.length||ui.length)&&h_()}}function Pw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Re;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(Vm))}let a,l=s[a=mc(e)]||s[a=mc(fn(e))];!l&&r&&(l=s[a=mc(Ui(e))]),l&&Ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(c,t,6,i)}}function d_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=d_(c,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Te(t)&&s.set(t,null),null):(q(r)?r.forEach(l=>o[l]=null):He(o,r),Te(t)&&s.set(t,o),o)}function vl(t,e){return!t||!hl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Ui(e))||ae(t,e))}let Je=null,El=null;function Ia(t){const e=Je;return Je=t,El=t&&t.type.__scopeId||null,e}function kw(t){El=t}function Nw(){El=null}function ei(t,e=Je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Kf(-1);const r=Ia(e);let o;try{o=t(...i)}finally{Ia(r),s._d&&Kf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _c(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,I;const b=Ia(t);try{if(n.shapeFlag&4){const R=i||s;v=en(u.call(R,R,h,r,f,d,m)),I=l}else{const R=e;v=en(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),I=e.props?l:Ow(l)}}catch(R){Tr.length=0,yl(R,t,1),v=Le(rs)}let k=v;if(I&&y!==!1){const R=Object.keys(I),{shapeFlag:Q}=k;R.length&&Q&7&&(o&&R.some(mh)&&(I=Dw(I,o)),k=Ti(k,I))}return n.dirs&&(k=Ti(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Ia(b),v}const Ow=t=>{let e;for(const n in t)(n==="class"||n==="style"||hl(n))&&((e||(e={}))[n]=t[n]);return e},Dw=(t,e)=>{const n={};for(const s in t)(!mh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Lf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!vl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lf(s,o,c):!0:!!o;return!1}function Lf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!vl(n,r))return!0}return!1}function Mw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Lw=t=>t.__isSuspense;function Vw(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Sw(t)}const Wo={};function hi(t,e,n){return f_(t,e,n)}function f_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Re){var a;const l=jm()===((a=je)==null?void 0:a.scope)?je:null;let c,u=!1,h=!1;if(Xe(t)?(c=()=>t.value,u=Ta(t)):ci(t)?(c=()=>t,s=!0):q(t)?(h=!0,u=t.some(R=>ci(R)||Ta(R)),c=()=>t.map(R=>{if(Xe(R))return R.value;if(ci(R))return Es(R);if(ee(R))return Zn(R,l,2)})):ee(t)?e?c=()=>Zn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ht(t,l,3,[f])}:c=Wt,e&&s){const R=c;c=()=>Es(R())}let d,f=R=>{d=b.onStop=()=>{Zn(R,l,4)}},m;if(Ur)if(f=Wt,e?n&&Ht(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const R=NR();m=R.__watcherHandles||(R.__watcherHandles=[])}else return Wt;let y=h?new Array(t.length).fill(Wo):Wo;const v=()=>{if(b.active)if(e){const R=b.run();(s||u||(h?R.some((Q,K)=>xr(Q,y[K])):xr(R,y)))&&(d&&d(),Ht(e,l,3,[R,y===Wo?void 0:h&&y[0]===Wo?[]:y,f]),y=R)}else b.run()};v.allowRecurse=!!e;let I;i==="sync"?I=v:i==="post"?I=()=>vt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>kh(v));const b=new Ih(c,I);e?n?v():y=b.run():i==="post"?vt(b.run.bind(b),l&&l.suspense):b.run();const k=()=>{b.stop(),l&&l.scope&&_h(l.scope.effects,b)};return m&&m.push(k),k}function Fw(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?p_(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=je;Ii(this);const a=f_(i,r.bind(s),n);return o?Ii(o):Ss(),a}function p_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Es(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))Es(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Es(t[n],e);else if(dl(t)||li(t))t.forEach(n=>{Es(n,e)});else if(Lm(t))for(const n in t)Es(t[n],e);return t}function lL(t,e){const n=Je;if(n===null)return t;const s=Al(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Re]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Es(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ps(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Bi(),Ht(l,n,8,[t.el,a,t,e]),$i())}}function Tl(t,e){return ee(t)?(()=>He({name:t.name},e,{setup:t}))():t}const vr=t=>!!t.type.__asyncLoader,g_=t=>t.type.__isKeepAlive;function Uw(t,e){m_(t,"a",e)}function Bw(t,e){m_(t,"da",e)}function m_(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Il(e,s,n),n){let i=n.parent;for(;i&&i.parent;)g_(i.parent.vnode)&&$w(s,e,n,i),i=i.parent}}function $w(t,e,n,s){const i=Il(e,t,s,!0);__(()=>{_h(s[e],i)},n)}function Il(t,e,n=je,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bi(),Ii(n);const a=Ht(e,n,t,o);return Ss(),$i(),a});return s?i.unshift(r):i.push(r),r}}const Vn=t=>(e,n=je)=>(!Ur||t==="sp")&&Il(t,(...s)=>e(...s),n),jw=Vn("bm"),Ww=Vn("m"),Hw=Vn("bu"),qw=Vn("u"),Kw=Vn("bum"),__=Vn("um"),y_=Vn("sp"),zw=Vn("rtg"),Gw=Vn("rtc");function Qw(t,e=je){Il("ec",t,e)}const v_="components";function Yw(t,e){return Jw(v_,t,!0,e)||t}const Xw=Symbol.for("v-ndc");function Jw(t,e,n=!0,s=!1){const i=Je||je;if(i){const r=i.type;if(t===v_){const a=bR(r,!1);if(a&&(a===e||a===fn(e)||a===pl(fn(e))))return r}const o=Vf(i[t]||r[t],e)||Vf(i.appContext[t],e);return!o&&s?r:o}}function Vf(t,e){return t&&(t[e]||t[fn(e)]||t[pl(fn(e))])}function cL(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Zw(t,e,n={},s,i){if(Je.isCE||Je.parent&&vr(Je.parent)&&Je.parent.isCE)return e!=="default"&&(n.name=e),Le("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),lo();const o=r&&E_(r(n)),a=Dh(Mt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function E_(t){return t.some(e=>Aa(e)?!(e.type===rs||e.type===Mt&&!E_(e.children)):!0)?t:null}const lu=t=>t?O_(t)?Al(t)||t.proxy:lu(t.parent):null,Er=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lu(t.parent),$root:t=>lu(t.root),$emit:t=>t.emit,$options:t=>Nh(t),$forceUpdate:t=>t.f||(t.f=()=>kh(t.update)),$nextTick:t=>t.n||(t.n=l_.bind(t.proxy)),$watch:t=>Fw.bind(t)}),yc=(t,e)=>t!==Re&&!t.__isScriptSetup&&ae(t,e),eR={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(yc(s,e))return o[e]=1,s[e];if(i!==Re&&ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,r[e];if(n!==Re&&ae(n,e))return o[e]=4,n[e];cu&&(o[e]=0)}}const u=Er[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ae(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return yc(i,e)?(i[e]=n,!0):s!==Re&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&ae(t,o)||yc(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Er,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ff(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cu=!0;function tR(t){const e=Nh(t),n=t.proxy,s=t.ctx;cu=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:I,beforeUnmount:b,destroyed:k,unmounted:R,render:Q,renderTracked:K,renderTriggered:ye,errorCaptured:Ie,serverPrefetch:_t,expose:ze,inheritAttrs:Un,components:fs,directives:Yt,filters:er}=e;if(c&&nR(c,s,null),o)for(const ve in o){const he=o[ve];ee(he)&&(s[ve]=he.bind(n))}if(i){const ve=i.call(n,n);Te(ve)&&(t.data=_l(ve))}if(cu=!0,r)for(const ve in r){const he=r[ve],Tn=ee(he)?he.bind(n,n):ee(he.get)?he.get.bind(n,n):Wt,Bn=!ee(he)&&ee(he.set)?he.set.bind(n):Wt,Xt=Vt({get:Tn,set:Bn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:yt=>Xt.value=yt})}if(a)for(const ve in a)T_(a[ve],s,n,ve);if(l){const ve=ee(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(he=>{la(he,ve[he])})}u&&Uf(u,t,"c");function Ue(ve,he){q(he)?he.forEach(Tn=>ve(Tn.bind(n))):he&&ve(he.bind(n))}if(Ue(jw,h),Ue(Ww,d),Ue(Hw,f),Ue(qw,m),Ue(Uw,y),Ue(Bw,v),Ue(Qw,Ie),Ue(Gw,K),Ue(zw,ye),Ue(Kw,b),Ue(__,R),Ue(y_,_t),q(ze))if(ze.length){const ve=t.exposed||(t.exposed={});ze.forEach(he=>{Object.defineProperty(ve,he,{get:()=>n[he],set:Tn=>n[he]=Tn})})}else t.exposed||(t.exposed={});Q&&t.render===Wt&&(t.render=Q),Un!=null&&(t.inheritAttrs=Un),fs&&(t.components=fs),Yt&&(t.directives=Yt)}function nR(t,e,n=Wt){q(t)&&(t=uu(t));for(const s in t){const i=t[s];let r;Te(i)?"default"in i?r=At(i.from||s,i.default,!0):r=At(i.from||s):r=At(i),Xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Uf(t,e,n){Ht(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function T_(t,e,n,s){const i=s.includes(".")?p_(n,s):()=>n[s];if(Fe(t)){const r=e[t];ee(r)&&hi(i,r)}else if(ee(t))hi(i,t.bind(n));else if(Te(t))if(q(t))t.forEach(r=>T_(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&hi(i,r,t)}}function Nh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),Te(e)&&r.set(e,l),l}function wa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wa(t,r,n,!0),i&&i.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sR={data:Bf,props:$f,emits:$f,methods:hr,computed:hr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:hr,directives:hr,watch:rR,provide:Bf,inject:iR};function Bf(t,e){return e?t?function(){return He(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function iR(t,e){return hr(uu(t),uu(e))}function uu(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function hr(t,e){return t?He(Object.create(null),t,e):e}function $f(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:He(Object.create(null),Ff(t),Ff(e??{})):e}function rR(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=gt(t[s],e[s]);return n}function I_(){return{app:null,config:{isNativeTag:OI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oR=0;function aR(t,e){return function(s,i=null){ee(s)||(s=He({},s)),i!=null&&!Te(i)&&(i=null);const r=I_(),o=new Set;let a=!1;const l=r.app={_uid:oR++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:OR,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Le(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Al(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ra=l;try{return c()}finally{Ra=null}}};return l}}let Ra=null;function la(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=je||Je;if(s||Ra){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ra._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function lR(t,e,n,s=!1){const i={},r={};Ea(r,Rl,1),t.propsDefaults=Object.create(null),w_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Zm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cR(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vl(t.emitsOptions,d))continue;const f=e[d];if(l)if(ae(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=fn(d);i[m]=hu(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{w_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Ui(h))===h||!ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=hu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],c=!0)}c&&Nn(t,"set","$attrs")}function w_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(oa(l))continue;const c=e[l];let u;i&&ae(i,u=fn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:vl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ue(n),c=a||Re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=hu(i,l,h,c[h],t,!ae(c,h))}}return o}function hu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ii(i),s=c[n]=l.call(null,e),Ss())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ui(n))&&(s=!0))}return s}function R_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,f]=R_(h,e,!0);He(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Te(t)&&s.set(t,ai),ai;if(q(r))for(let u=0;u<r.length;u++){const h=fn(r[u]);jf(h)&&(o[h]=Re)}else if(r)for(const u in r){const h=fn(u);if(jf(h)){const d=r[u],f=o[h]=q(d)||ee(d)?{type:d}:He({},d);if(f){const m=qf(Boolean,f.type),y=qf(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||ae(f,"default"))&&a.push(h)}}}const c=[o,a];return Te(t)&&s.set(t,c),c}function jf(t){return t[0]!=="$"}function Wf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hf(t,e){return Wf(t)===Wf(e)}function qf(t,e){return q(e)?e.findIndex(n=>Hf(n,t)):ee(e)&&Hf(e,t)?0:-1}const A_=t=>t[0]==="_"||t==="$stable",Oh=t=>q(t)?t.map(en):[en(t)],uR=(t,e,n)=>{if(e._n)return e;const s=ei((...i)=>Oh(e(...i)),n);return s._c=!1,s},C_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(A_(i))continue;const r=t[i];if(ee(r))e[i]=uR(i,r,s);else if(r!=null){const o=Oh(r);e[i]=()=>o}}},S_=(t,e)=>{const n=Oh(e);t.slots.default=()=>n},hR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ea(e,"_",n)):C_(e,t.slots={})}else t.slots={},e&&S_(t,e);Ea(t.slots,Rl,1)},dR=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(He(i,e),!n&&a===1&&delete i._):(r=!e.$stable,C_(e,i)),o=e}else e&&(S_(t,e),o={default:1});if(r)for(const a in i)!A_(a)&&!(a in o)&&delete i[a]};function du(t,e,n,s,i=!1){if(q(t)){t.forEach((d,f)=>du(d,e&&(q(e)?e[f]:e),n,s,i));return}if(vr(s)&&!i)return;const r=s.shapeFlag&4?Al(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ae(h,c)&&(h[c]=null)):Xe(c)&&(c.value=null)),ee(l))Zn(l,a,12,[o,u]);else{const d=Fe(l),f=Xe(l);if(d||f){const m=()=>{if(t.f){const y=d?ae(h,l)?h[l]:u[l]:l.value;i?q(y)&&_h(y,r):q(y)?y.includes(r)||y.push(r):d?(u[l]=[r],ae(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ae(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,vt(m,n)):m()}}}const vt=Vw;function fR(t){return pR(t)}function pR(t,e){const n=nu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Wt,insertStaticContent:m}=t,y=(p,g,_,E=null,w=null,C=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!nr(p,g)&&(E=T(p),yt(p,w,C,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:S,ref:j,shapeFlag:F}=g;switch(S){case wl:v(p,g,_,E);break;case rs:I(p,g,_,E);break;case vc:p==null&&b(g,_,E,L);break;case Mt:fs(p,g,_,E,w,C,L,N,O);break;default:F&1?Q(p,g,_,E,w,C,L,N,O):F&6?Yt(p,g,_,E,w,C,L,N,O):(F&64||F&128)&&S.process(p,g,_,E,w,C,L,N,O,D)}j!=null&&w&&du(j,p&&p.ref,C,g||p,!g)},v=(p,g,_,E)=>{if(p==null)s(g.el=a(g.children),_,E);else{const w=g.el=p.el;g.children!==p.children&&c(w,g.children)}},I=(p,g,_,E)=>{p==null?s(g.el=l(g.children||""),_,E):g.el=p.el},b=(p,g,_,E)=>{[p.el,p.anchor]=m(p.children,g,_,E,p.el,p.anchor)},k=({el:p,anchor:g},_,E)=>{let w;for(;p&&p!==g;)w=d(p),s(p,_,E),p=w;s(g,_,E)},R=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),i(p),p=_;i(g)},Q=(p,g,_,E,w,C,L,N,O)=>{L=L||g.type==="svg",p==null?K(g,_,E,w,C,L,N,O):_t(p,g,w,C,L,N,O)},K=(p,g,_,E,w,C,L,N)=>{let O,S;const{type:j,props:F,shapeFlag:W,transition:Y,dirs:te}=p;if(O=p.el=o(p.type,C,F&&F.is,F),W&8?u(O,p.children):W&16&&Ie(p.children,O,null,E,w,C&&j!=="foreignObject",L,N),te&&ps(p,null,E,"created"),ye(O,p,p.scopeId,L,E),F){for(const me in F)me!=="value"&&!oa(me)&&r(O,me,null,F[me],C,p.children,E,w,et);"value"in F&&r(O,"value",null,F.value),(S=F.onVnodeBeforeMount)&&Zt(S,E,p)}te&&ps(p,null,E,"beforeMount");const Ee=(!w||w&&!w.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(O),s(O,g,_),((S=F&&F.onVnodeMounted)||Ee||te)&&vt(()=>{S&&Zt(S,E,p),Ee&&Y.enter(O),te&&ps(p,null,E,"mounted")},w)},ye=(p,g,_,E,w)=>{if(_&&f(p,_),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(w){let C=w.subTree;if(g===C){const L=w.vnode;ye(p,L,L.scopeId,L.slotScopeIds,w.parent)}}},Ie=(p,g,_,E,w,C,L,N,O=0)=>{for(let S=O;S<p.length;S++){const j=p[S]=N?Hn(p[S]):en(p[S]);y(null,j,g,_,E,w,C,L,N)}},_t=(p,g,_,E,w,C,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:j}=g;O|=p.patchFlag&16;const F=p.props||Re,W=g.props||Re;let Y;_&&gs(_,!1),(Y=W.onVnodeBeforeUpdate)&&Zt(Y,_,g,p),j&&ps(g,p,_,"beforeUpdate"),_&&gs(_,!0);const te=w&&g.type!=="foreignObject";if(S?ze(p.dynamicChildren,S,N,_,E,te,C):L||he(p,g,N,null,_,E,te,C,!1),O>0){if(O&16)Un(N,g,F,W,_,E,w);else if(O&2&&F.class!==W.class&&r(N,"class",null,W.class,w),O&4&&r(N,"style",F.style,W.style,w),O&8){const Ee=g.dynamicProps;for(let me=0;me<Ee.length;me++){const Oe=Ee[me],xt=F[Oe],Ys=W[Oe];(Ys!==xt||Oe==="value")&&r(N,Oe,xt,Ys,w,p.children,_,E,et)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&S==null&&Un(N,g,F,W,_,E,w);((Y=W.onVnodeUpdated)||j)&&vt(()=>{Y&&Zt(Y,_,g,p),j&&ps(g,p,_,"updated")},E)},ze=(p,g,_,E,w,C,L)=>{for(let N=0;N<g.length;N++){const O=p[N],S=g[N],j=O.el&&(O.type===Mt||!nr(O,S)||O.shapeFlag&70)?h(O.el):_;y(O,S,j,null,E,w,C,L,!0)}},Un=(p,g,_,E,w,C,L)=>{if(_!==E){if(_!==Re)for(const N in _)!oa(N)&&!(N in E)&&r(p,N,_[N],null,L,g.children,w,C,et);for(const N in E){if(oa(N))continue;const O=E[N],S=_[N];O!==S&&N!=="value"&&r(p,N,S,O,L,g.children,w,C,et)}"value"in E&&r(p,"value",_.value,E.value)}},fs=(p,g,_,E,w,C,L,N,O)=>{const S=g.el=p?p.el:a(""),j=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:Y}=g;Y&&(N=N?N.concat(Y):Y),p==null?(s(S,_,E),s(j,_,E),Ie(g.children,_,j,w,C,L,N,O)):F>0&&F&64&&W&&p.dynamicChildren?(ze(p.dynamicChildren,W,_,w,C,L,N),(g.key!=null||w&&g===w.subTree)&&b_(p,g,!0)):he(p,g,_,j,w,C,L,N,O)},Yt=(p,g,_,E,w,C,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?w.ctx.activate(g,_,E,L,O):er(g,_,E,w,C,L,O):zs(p,g,O)},er=(p,g,_,E,w,C,L)=>{const N=p.component=wR(p,E,w);if(g_(p)&&(N.ctx.renderer=D),RR(N),N.asyncDep){if(w&&w.registerDep(N,Ue),!p.el){const O=N.subTree=Le(rs);I(null,O,g,_)}return}Ue(N,p,g,_,w,C,L)},zs=(p,g,_)=>{const E=g.component=p.component;if(xw(p,g,_))if(E.asyncDep&&!E.asyncResolved){ve(E,g,_);return}else E.next=g,Cw(E.update),E.update();else g.el=p.el,E.vnode=g},Ue=(p,g,_,E,w,C,L)=>{const N=()=>{if(p.isMounted){let{next:j,bu:F,u:W,parent:Y,vnode:te}=p,Ee=j,me;gs(p,!1),j?(j.el=te.el,ve(p,j,L)):j=te,F&&aa(F),(me=j.props&&j.props.onVnodeBeforeUpdate)&&Zt(me,Y,j,te),gs(p,!0);const Oe=_c(p),xt=p.subTree;p.subTree=Oe,y(xt,Oe,h(xt.el),T(xt),p,w,C),j.el=Oe.el,Ee===null&&Mw(p,Oe.el),W&&vt(W,w),(me=j.props&&j.props.onVnodeUpdated)&&vt(()=>Zt(me,Y,j,te),w)}else{let j;const{el:F,props:W}=g,{bm:Y,m:te,parent:Ee}=p,me=vr(g);if(gs(p,!1),Y&&aa(Y),!me&&(j=W&&W.onVnodeBeforeMount)&&Zt(j,Ee,g),gs(p,!0),F&&de){const Oe=()=>{p.subTree=_c(p),de(F,p.subTree,p,w,null)};me?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=_c(p);y(null,Oe,_,E,p,w,C),g.el=Oe.el}if(te&&vt(te,w),!me&&(j=W&&W.onVnodeMounted)){const Oe=g;vt(()=>Zt(j,Ee,Oe),w)}(g.shapeFlag&256||Ee&&vr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&vt(p.a,w),p.isMounted=!0,g=_=E=null}},O=p.effect=new Ih(N,()=>kh(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,gs(p,!0),S()},ve=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,cR(p,g.props,E,_),dR(p,g.children,_),Bi(),Mf(),$i()},he=(p,g,_,E,w,C,L,N,O=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,F=g.children,{patchFlag:W,shapeFlag:Y}=g;if(W>0){if(W&128){Bn(S,F,_,E,w,C,L,N,O);return}else if(W&256){Tn(S,F,_,E,w,C,L,N,O);return}}Y&8?(j&16&&et(S,w,C),F!==S&&u(_,F)):j&16?Y&16?Bn(S,F,_,E,w,C,L,N,O):et(S,w,C,!0):(j&8&&u(_,""),Y&16&&Ie(F,_,E,w,C,L,N,O))},Tn=(p,g,_,E,w,C,L,N,O)=>{p=p||ai,g=g||ai;const S=p.length,j=g.length,F=Math.min(S,j);let W;for(W=0;W<F;W++){const Y=g[W]=O?Hn(g[W]):en(g[W]);y(p[W],Y,_,null,w,C,L,N,O)}S>j?et(p,w,C,!0,!1,F):Ie(g,_,E,w,C,L,N,O,F)},Bn=(p,g,_,E,w,C,L,N,O)=>{let S=0;const j=g.length;let F=p.length-1,W=j-1;for(;S<=F&&S<=W;){const Y=p[S],te=g[S]=O?Hn(g[S]):en(g[S]);if(nr(Y,te))y(Y,te,_,null,w,C,L,N,O);else break;S++}for(;S<=F&&S<=W;){const Y=p[F],te=g[W]=O?Hn(g[W]):en(g[W]);if(nr(Y,te))y(Y,te,_,null,w,C,L,N,O);else break;F--,W--}if(S>F){if(S<=W){const Y=W+1,te=Y<j?g[Y].el:E;for(;S<=W;)y(null,g[S]=O?Hn(g[S]):en(g[S]),_,te,w,C,L,N,O),S++}}else if(S>W)for(;S<=F;)yt(p[S],w,C,!0),S++;else{const Y=S,te=S,Ee=new Map;for(S=te;S<=W;S++){const It=g[S]=O?Hn(g[S]):en(g[S]);It.key!=null&&Ee.set(It.key,S)}let me,Oe=0;const xt=W-te+1;let Ys=!1,wf=0;const tr=new Array(xt);for(S=0;S<xt;S++)tr[S]=0;for(S=Y;S<=F;S++){const It=p[S];if(Oe>=xt){yt(It,w,C,!0);continue}let Jt;if(It.key!=null)Jt=Ee.get(It.key);else for(me=te;me<=W;me++)if(tr[me-te]===0&&nr(It,g[me])){Jt=me;break}Jt===void 0?yt(It,w,C,!0):(tr[Jt-te]=S+1,Jt>=wf?wf=Jt:Ys=!0,y(It,g[Jt],_,null,w,C,L,N,O),Oe++)}const Rf=Ys?gR(tr):ai;for(me=Rf.length-1,S=xt-1;S>=0;S--){const It=te+S,Jt=g[It],Af=It+1<j?g[It+1].el:E;tr[S]===0?y(null,Jt,_,Af,w,C,L,N,O):Ys&&(me<0||S!==Rf[me]?Xt(Jt,_,Af,2):me--)}}},Xt=(p,g,_,E,w=null)=>{const{el:C,type:L,transition:N,children:O,shapeFlag:S}=p;if(S&6){Xt(p.component.subTree,g,_,E);return}if(S&128){p.suspense.move(g,_,E);return}if(S&64){L.move(p,g,_,D);return}if(L===Mt){s(C,g,_);for(let F=0;F<O.length;F++)Xt(O[F],g,_,E);s(p.anchor,g,_);return}if(L===vc){k(p,g,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),s(C,g,_),vt(()=>N.enter(C),w);else{const{leave:F,delayLeave:W,afterLeave:Y}=N,te=()=>s(C,g,_),Ee=()=>{F(C,()=>{te(),Y&&Y()})};W?W(C,te,Ee):Ee()}else s(C,g,_)},yt=(p,g,_,E=!1,w=!1)=>{const{type:C,props:L,ref:N,children:O,dynamicChildren:S,shapeFlag:j,patchFlag:F,dirs:W}=p;if(N!=null&&du(N,null,_,p,!0),j&256){g.ctx.deactivate(p);return}const Y=j&1&&W,te=!vr(p);let Ee;if(te&&(Ee=L&&L.onVnodeBeforeUnmount)&&Zt(Ee,g,p),j&6)Vo(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}Y&&ps(p,null,g,"beforeUnmount"),j&64?p.type.remove(p,g,_,w,D,E):S&&(C!==Mt||F>0&&F&64)?et(S,g,_,!1,!0):(C===Mt&&F&384||!w&&j&16)&&et(O,g,_),E&&Gs(p)}(te&&(Ee=L&&L.onVnodeUnmounted)||Y)&&vt(()=>{Ee&&Zt(Ee,g,p),Y&&ps(p,null,g,"unmounted")},_)},Gs=p=>{const{type:g,el:_,anchor:E,transition:w}=p;if(g===Mt){Qs(_,E);return}if(g===vc){R(p);return}const C=()=>{i(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:L,delayLeave:N}=w,O=()=>L(_,C);N?N(p.el,C,O):O()}else C()},Qs=(p,g)=>{let _;for(;p!==g;)_=d(p),i(p),p=_;i(g)},Vo=(p,g,_)=>{const{bum:E,scope:w,update:C,subTree:L,um:N}=p;E&&aa(E),w.stop(),C&&(C.active=!1,yt(L,p,g,_)),N&&vt(N,g),vt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},et=(p,g,_,E=!1,w=!1,C=0)=>{for(let L=C;L<p.length;L++)yt(p[L],g,_,E,w)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,_)=>{p==null?g._vnode&&yt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,_),Mf(),u_(),g._vnode=p},D={p:y,um:yt,m:Xt,r:Gs,mt:er,mc:Ie,pc:he,pbc:ze,n:T,o:t};let B,de;return e&&([B,de]=e(D)),{render:V,hydrate:B,createApp:aR(V,B)}}function gs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function b_(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Hn(i[r]),a.el=o.el),n||b_(o,a)),a.type===wl&&(a.el=o.el)}}function gR(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const mR=t=>t.__isTeleport,Mt=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),Tr=[];let Ut=null;function lo(t=!1){Tr.push(Ut=t?null:[])}function _R(){Tr.pop(),Ut=Tr[Tr.length-1]||null}let Fr=1;function Kf(t){Fr+=t}function P_(t){return t.dynamicChildren=Fr>0?Ut||ai:null,_R(),Fr>0&&Ut&&Ut.push(t),t}function k_(t,e,n,s,i,r){return P_(xh(t,e,n,s,i,r,!0))}function Dh(t,e,n,s,i){return P_(Le(t,e,n,s,i,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const Rl="__vInternal",N_=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Xe(t)||ee(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function xh(t,e=null,n=null,s=0,i=null,r=t===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&N_(e),ref:e&&ca(e),scopeId:El,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(Mh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Fr>0&&!o&&Ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ut.push(l),l}const Le=yR;function yR(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Xw)&&(t=rs),Aa(t)){const a=Ti(t,e,!0);return n&&Mh(a,n),Fr>0&&!r&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(PR(t)&&(t=t.__vccOpts),e){e=vR(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Eh(a)),Te(l)&&(t_(l)&&!q(l)&&(l=He({},l)),e.style=vh(l))}const o=Fe(t)?1:Lw(t)?128:mR(t)?64:Te(t)?4:ee(t)?2:0;return xh(t,e,n,s,i,o,r,!0)}function vR(t){return t?t_(t)||Rl in t?He({},t):t:null}function Ti(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ER(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&N_(a),ref:e&&e.ref?n&&i?q(i)?i.concat(ca(e)):[i,ca(e)]:ca(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ti(t.ssContent),ssFallback:t.ssFallback&&Ti(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ua(t=" ",e=0){return Le(wl,null,t,e)}function uL(t="",e=!1){return e?(lo(),Dh(rs,null,t)):Le(rs,null,t)}function en(t){return t==null||typeof t=="boolean"?Le(rs):q(t)?Le(Mt,null,t.slice()):typeof t=="object"?Hn(t):Le(wl,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ti(t)}function Mh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Mh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Rl in e)?e._ctx=Je:i===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[ua(e)]):n=8);t.children=e,t.shapeFlag|=n}function ER(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Eh([e.class,s.class]));else if(i==="style")e.style=vh([e.style,s.style]);else if(hl(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Zt(t,e,n,s=null){Ht(t,e,7,[n,s])}const TR=I_();let IR=0;function wR(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||TR,r={uid:IR++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:R_(s,i),emitsOptions:d_(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Pw.bind(null,r),t.ce&&t.ce(r),r}let je=null;const Lh=()=>je||Je;let Vh,Xs,zf="__VUE_INSTANCE_SETTERS__";(Xs=nu()[zf])||(Xs=nu()[zf]=[]),Xs.push(t=>je=t),Vh=t=>{Xs.length>1?Xs.forEach(e=>e(t)):Xs[0](t)};const Ii=t=>{Vh(t),t.scope.on()},Ss=()=>{je&&je.scope.off(),Vh(null)};function O_(t){return t.vnode.shapeFlag&4}let Ur=!1;function RR(t,e=!1){Ur=e;const{props:n,children:s}=t.vnode,i=O_(t);lR(t,n,i,e),hR(t,s);const r=i?AR(t,e):void 0;return Ur=!1,r}function AR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sh(new Proxy(t.ctx,eR));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?SR(t):null;Ii(t),Bi();const r=Zn(s,t,0,[t.props,i]);if($i(),Ss(),xm(r)){if(r.then(Ss,Ss),e)return r.then(o=>{Gf(t,o,e)}).catch(o=>{yl(o,t,0)});t.asyncDep=r}else Gf(t,r,e)}else D_(t,e)}function Gf(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=o_(e)),D_(t,n)}let Qf;function D_(t,e,n){const s=t.type;if(!t.render){if(!e&&Qf&&!s.render){const i=s.template||Nh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=He(He({isCustomElement:r,delimiters:a},o),l);s.render=Qf(i,c)}}t.render=s.render||Wt}Ii(t),Bi(),tR(t),$i(),Ss()}function CR(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function SR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return CR(t)},slots:t.slots,emit:t.emit,expose:e}}function Al(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(o_(Sh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Er)return Er[n](t)},has(e,n){return n in e||n in Er}}))}function bR(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function PR(t){return ee(t)&&"__vccOpts"in t}const Vt=(t,e)=>ww(t,e,Ur);function x_(t,e,n){const s=arguments.length;return s===2?Te(e)&&!q(e)?Aa(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Aa(n)&&(n=[n]),Le(t,e,n))}const kR=Symbol.for("v-scx"),NR=()=>At(kR),OR="3.3.4",DR="http://www.w3.org/2000/svg",vs=typeof document<"u"?document:null,Yf=vs&&vs.createElement("template"),xR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?vs.createElementNS(DR,t):vs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>vs.createTextNode(t),createComment:t=>vs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Yf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function MR(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LR(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&fu(s,r,"");for(const r in n)fu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Xf=/\s*!important$/;function fu(t,e,n){if(q(n))n.forEach(s=>fu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=VR(t,e);Xf.test(n)?t.setProperty(Ui(s),n.replace(Xf,""),"important"):t[s]=n}}const Jf=["Webkit","Moz","ms"],Ec={};function VR(t,e){const n=Ec[e];if(n)return n;let s=fn(e);if(s!=="filter"&&s in t)return Ec[e]=s;s=pl(s);for(let i=0;i<Jf.length;i++){const r=Jf[i]+s;if(r in t)return Ec[e]=r}return e}const Zf="http://www.w3.org/1999/xlink";function FR(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zf,e.slice(6,e.length)):t.setAttributeNS(Zf,e,n);else{const r=WI(e);n==null||r&&!Fm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function UR(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function M_(t,e,n,s){t.addEventListener(e,n,s)}function BR(t,e,n,s){t.removeEventListener(e,n,s)}function $R(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=jR(e);if(s){const c=r[e]=qR(s,i);M_(t,a,c,l)}else o&&(BR(t,a,o,l),r[e]=void 0)}}const ep=/(?:Once|Passive|Capture)$/;function jR(t){let e;if(ep.test(t)){e={};let s;for(;s=t.match(ep);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ui(t.slice(2)),e]}let Tc=0;const WR=Promise.resolve(),HR=()=>Tc||(WR.then(()=>Tc=0),Tc=Date.now());function qR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ht(KR(s,n.value),e,5,[s])};return n.value=t,n.attached=HR(),n}function KR(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tp=/^on[a-z]/,zR=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?MR(t,s,i):e==="style"?LR(t,n,s):hl(e)?mh(e)||$R(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GR(t,e,s,i))?UR(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),FR(t,e,s,i))};function GR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&tp.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||tp.test(e)&&Fe(n)?!1:e in t}const np=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>aa(e,n):e},hL={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=dl(e);M_(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Vm(Ca(o)):Ca(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=np(s)},mounted(t,{value:e}){sp(t,e)},beforeUpdate(t,e,n){t._assign=np(n)},updated(t,{value:e}){sp(t,e)}};function sp(t,e){const n=t.multiple;if(!(n&&!q(e)&&!dl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ca(r);if(n)q(e)?r.selected=qI(e,o)>-1:r.selected=e.has(o);else if(gl(Ca(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ca(t){return"_value"in t?t._value:t.value}const QR=["ctrl","shift","alt","meta"],YR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QR.some(n=>t[`${n}Key`]&&!e.includes(n))},dL=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=YR[e[i]];if(r&&r(n,e))return}return t(n,...s)},XR=He({patchProp:zR},xR);let ip;function JR(){return ip||(ip=fR(XR))}const ZR=(...t)=>{const e=JR().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=e0(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function e0(t){return Fe(t)?document.querySelector(t):t}/**
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
 */const L_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw ji(e)},ji=function(t){return new Error("Firebase Database ("+L_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const V_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},t0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new n0;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F_=function(t){const e=V_(t);return Cl.encodeByteArray(e,!0)},Sa=function(t){return F_(t).replace(/\./g,"")},ba=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s0(t){return U_(void 0,t)}function U_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i0(n)||(t[n]=U_(t[n],e[n]));return t}function i0(t){return t!=="__proto__"}/**
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
 */function r0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o0=()=>r0().__FIREBASE_DEFAULTS__,a0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ba(t[1]);return e&&JSON.parse(e)},Fh=()=>{try{return o0()||a0()||l0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=Fh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},c0=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$_=()=>{var t;return(t=Fh())===null||t===void 0?void 0:t.config},j_=t=>{var e;return(e=Fh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function u0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sa(JSON.stringify(n)),Sa(JSON.stringify(o)),a].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function h0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d0(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H_(){return L_.NODE_ADMIN===!0}function q_(){try{return typeof indexedDB=="object"}catch{return!1}}function f0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const p0="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=p0,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?g0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,s)}}function g0(t,e){return t.replace(m0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const m0=/\{\$([^}]+)}/g;/**
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
 */function $r(t){return JSON.parse(t)}function Ye(t){return JSON.stringify(t)}/**
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
 */const K_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$r(ba(r[0])||""),n=$r(ba(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},_0=function(t){const e=K_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},y0=function(t){const e=K_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rp(r)&&rp(o)){if(!ka(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rp(t){return t!==null&&typeof t=="object"}/**
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
 */function Hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class v0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function E0(t,e){const n=new T0(t,e);return n.subscribe.bind(n)}class T0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");I0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ic),i.error===void 0&&(i.error=Ic),i.complete===void 0&&(i.complete=Ic);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}function w0(t,e){return`${t} failed: ${e} argument `}/**
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
 */const R0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class A0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Br;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S0(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C0(t){return t===ms?void 0:t}function S0(t){return t.instantiationMode==="EAGER"}/**
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
 */class b0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const P0={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},k0=le.INFO,N0={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},O0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=N0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class co{constructor(e){this.name=e,this._logLevel=k0,this._logHandler=O0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const D0=(t,e)=>e.some(n=>t instanceof n);let op,ap;function x0(){return op||(op=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M0(){return ap||(ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,gu=new WeakMap,G_=new WeakMap,wc=new WeakMap,Bh=new WeakMap;function L0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(es(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z_.set(n,t)}).catch(()=>{}),Bh.set(e,t),e}function V0(t){if(gu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function F0(t){mu=t(mu)}function U0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Rc(this),e,...n);return G_.set(s,e.sort?e.sort():[e]),es(s)}:M0().includes(t)?function(...e){return t.apply(Rc(this),e),es(z_.get(this))}:function(...e){return es(t.apply(Rc(this),e))}}function B0(t){return typeof t=="function"?U0(t):(t instanceof IDBTransaction&&V0(t),D0(t,x0())?new Proxy(t,mu):t)}function es(t){if(t instanceof IDBRequest)return L0(t);if(wc.has(t))return wc.get(t);const e=B0(t);return e!==t&&(wc.set(t,e),Bh.set(e,t)),e}const Rc=t=>Bh.get(t);function $0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=es(o);return s&&o.addEventListener("upgradeneeded",l=>{s(es(o.result),l.oldVersion,l.newVersion,es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const j0=["get","getKey","getAll","getAllKeys","count"],W0=["put","add","delete","clear"],Ac=new Map;function lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=W0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||j0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ac.set(e,r),r}F0(t=>({...t,get:(e,n,s)=>lp(e,n)||t.get(e,n,s),has:(e,n)=>!!lp(e,n)||t.has(e,n)}));/**
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
 */class H0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function q0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _u="@firebase/app",cp="0.9.15";/**
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
 */const Ns=new co("@firebase/app"),K0="@firebase/app-compat",z0="@firebase/analytics-compat",G0="@firebase/analytics",Q0="@firebase/app-check-compat",Y0="@firebase/app-check",X0="@firebase/auth",J0="@firebase/auth-compat",Z0="@firebase/database",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",sA="@firebase/installations",iA="@firebase/installations-compat",rA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",lA="@firebase/performance-compat",cA="@firebase/remote-config",uA="@firebase/remote-config-compat",hA="@firebase/storage",dA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/firestore-compat",gA="firebase",mA="10.1.0";/**
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
 */const yu="[DEFAULT]",_A={[_u]:"fire-core",[K0]:"fire-core-compat",[G0]:"fire-analytics",[z0]:"fire-analytics-compat",[Y0]:"fire-app-check",[Q0]:"fire-app-check-compat",[X0]:"fire-auth",[J0]:"fire-auth-compat",[Z0]:"fire-rtdb",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[sA]:"fire-iid",[iA]:"fire-iid-compat",[rA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[lA]:"fire-perf-compat",[cA]:"fire-rc",[uA]:"fire-rc-compat",[hA]:"fire-gcs",[dA]:"fire-gcs-compat",[fA]:"fire-fst",[pA]:"fire-fst-compat","fire-js":"fire-js",[gA]:"fire-js-all"};/**
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
 */const Na=new Map,vu=new Map;function yA(t,e){try{t.container.addComponent(e)}catch(n){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(vu.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of Na.values())yA(n,t);return!0}function $h(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ts=new Wi("app","Firebase",vA);/**
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
 */class EA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const us=mA;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ts.create("bad-app-name",{appName:String(i)});if(n||(n=$_()),!n)throw ts.create("no-options");const r=Na.get(i);if(r){if(ka(n,r.options)&&ka(s,r.config))return r;throw ts.create("duplicate-app",{appName:i})}const o=new b0(i);for(const l of vu.values())o.addComponent(l);const a=new EA(n,s,o);return Na.set(i,a),a}function jh(t=yu){const e=Na.get(t);if(!e&&t===yu&&$_())return Q_();if(!e)throw ts.create("no-app",{appName:t});return e}function Ct(t,e,n){var s;let i=(s=_A[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(a.join(" "));return}pn(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TA="firebase-heartbeat-database",IA=1,jr="firebase-heartbeat-store";let Cc=null;function Y_(){return Cc||(Cc=$0(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jr)}}}).catch(t=>{throw ts.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function wA(t){try{return await(await Y_()).transaction(jr).objectStore(jr).get(X_(t))}catch(e){if(e instanceof vn)Ns.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ns.warn(n.message)}}}async function up(t,e){try{const s=(await Y_()).transaction(jr,"readwrite");await s.objectStore(jr).put(e,X_(t)),await s.done}catch(n){if(n instanceof vn)Ns.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ns.warn(s.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RA=1024,AA=30*24*60*60*1e3;class CA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=AA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hp(),{heartbeatsToSend:n,unsentEntries:s}=SA(this._heartbeatsCache.heartbeats),i=Sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hp(){return new Date().toISOString().substring(0,10)}function SA(t,e=RA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q_()?f0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dp(t){return Sa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PA(t){pn(new Kt("platform-logger",e=>new H0(e),"PRIVATE")),pn(new Kt("heartbeat",e=>new CA(e),"PRIVATE")),Ct(_u,cp,t),Ct(_u,cp,"esm2017"),Ct("fire-js","")}PA("");function Wh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kA=J_,Z_=new Wi("auth","Firebase",J_());/**
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
 */const Oa=new co("@firebase/auth");function NA(t,...e){Oa.logLevel<=le.WARN&&Oa.warn(`Auth (${us}): ${t}`,...e)}function ha(t,...e){Oa.logLevel<=le.ERROR&&Oa.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw Hh(t,...e)}function cn(t,...e){return Hh(t,...e)}function ey(t,e,n){const s=Object.assign(Object.assign({},kA()),{[e]:n});return new Wi("auth","Firebase",s).create(e,{appName:t.name})}function ty(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&gn(t,"argument-error"),ey(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Z_.create(t,...e)}function J(t,e,...n){if(!t)throw Hh(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function On(t,e){t||Rn(e)}/**
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
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OA(){return fp()==="http:"||fp()==="https:"}function fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OA()||h0()||"connection"in navigator)?navigator.onLine:!0}function xA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Uh()||W_()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ny{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LA=new uo(3e4,6e4);function sy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ho(t,e,n,s,i={}){return iy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ny.fetch()(ry(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function iy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},MA),e);try{const i=new FA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ey(t,u,c);gn(t,u)}}catch(i){if(i instanceof vn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function VA(t,e,n,s,i={}){const r=await ho(t,e,n,s,i);return"mfaPendingCredential"in r&&gn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ry(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?qh(t.config,i):`${t.config.apiScheme}://${i}`}class FA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(cn(this.auth,"network-request-failed")),LA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=cn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function UA(t,e){return ho(t,"POST","/v1/accounts:delete",e)}async function BA(t,e){return ho(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $A(t,e=!1){const n=bt(t),s=await n.getIdToken(e),i=Kh(s);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ir(Sc(i.auth_time)),issuedAtTime:Ir(Sc(i.iat)),expirationTime:Ir(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Kh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const i=ba(n);return i?JSON.parse(i):(ha("Failed to decode base64 JWT payload"),null)}catch(i){return ha("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jA(t){const e=Kh(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vn&&WA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function WA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Da(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wr(t,BA(n,{idToken:s}));J(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zA(r.providerUserInfo):[],a=KA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new oy(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qA(t){const e=bt(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function zA(t){return t.map(e=>{var{providerId:n}=e,s=Wh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function GA(t,e){const n=await iy(t,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ry(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ny.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await GA(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Hr;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function jn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new oy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $A(this,e)}reload(){return qA(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,UA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:R,isAnonymous:Q,providerData:K,stsTokenManager:ye}=n;J(k&&ye,e,"internal-error");const Ie=Hr.fromJSON(this.name,ye);J(typeof k=="string",e,"internal-error"),jn(h,e.name),jn(d,e.name),J(typeof R=="boolean",e,"internal-error"),J(typeof Q=="boolean",e,"internal-error"),jn(f,e.name),jn(m,e.name),jn(y,e.name),jn(v,e.name),jn(I,e.name),jn(b,e.name);const _t=new bs({uid:k,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:Q,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Ie,createdAt:I,lastLoginAt:b});return K&&Array.isArray(K)&&(_t.providerData=K.map(ze=>Object.assign({},ze))),v&&(_t._redirectEventId=v),_t}static async _fromIdTokenResponse(e,n,s=!1){const i=new Hr;i.updateFromServerResponse(n);const r=new bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Da(r),r}}/**
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
 */const pp=new Map;function An(t){On(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}/**
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
 */class ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ay.type="NONE";const gp=ay;/**
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
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,r),this.fullPersistenceKey=da("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new di(An(gp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||An(gp);const o=da(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=bs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new di(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new di(r,e,s))}}/**
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
 */function mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dy(e))return"Blackberry";if(fy(e))return"Webos";if(zh(e))return"Safari";if((e.includes("chrome/")||cy(e))&&!e.includes("edge/"))return"Chrome";if(hy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ly(t=ft()){return/firefox\//i.test(t)}function zh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cy(t=ft()){return/crios\//i.test(t)}function uy(t=ft()){return/iemobile/i.test(t)}function hy(t=ft()){return/android/i.test(t)}function dy(t=ft()){return/blackberry/i.test(t)}function fy(t=ft()){return/webos/i.test(t)}function bl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QA(t=ft()){var e;return bl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YA(){return d0()&&document.documentMode===10}function py(t=ft()){return bl(t)||hy(t)||fy(t)||dy(t)||/windows phone/i.test(t)||uy(t)}function XA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gy(t,e=[]){let n;switch(t){case"Browser":n=mp(ft());break;case"Worker":n=`${mp(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${s}`}async function my(t,e){return ho(t,"GET","/v2/recaptchaConfig",sy(t,e))}function _p(t){return t!==void 0&&t.enterprise!==void 0}class _y{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function JA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=cn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",JA().appendChild(s)})}function ZA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eC="https://www.google.com/recaptcha/enterprise.js?render=",tC="recaptcha-enterprise",nC="NO_RECAPTCHA";class sC{constructor(e){this.type=tC,this.auth=Bs(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{my(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _y(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;_p(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(nC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&_p(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yy(eC+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class rC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}async initializeRecaptchaConfig(){const e=await my(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _y(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new sC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bs(t){return bt(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=E0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function oC(t,e){const n=$h(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ka(r,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function aC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lC(t,e,n){const s=Bs(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=vy(e),{host:o,port:a}=cC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uC()}function vy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cC(t){const e=vy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ey{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
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
 */async function fi(t,e){return VA(t,"POST","/v1/accounts:signInWithIdp",sy(t,e))}/**
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
 */const hC="http://localhost";class Os extends Ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Wh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Os(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:hC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
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
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends fo{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Os._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Gn extends fo{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends fo{constructor(){super("twitter.com")}static credential(e,n){return Os._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await bs._fromIdTokenResponse(e,s,i),o=Ep(s);return new Ri({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ep(s);return new Ri({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xa extends vn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xa(e,n,s,i)}}function Ty(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,r,e,s):r})}async function dC(t,e,n=!1){const s=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",s)}/**
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
 */async function fC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wr(t,Ty(s,i,e,t),n);J(r.idToken,s,"internal-error");const o=Kh(r.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),Ri._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gn(s,"user-mismatch"),r}}/**
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
 */async function pC(t,e,n=!1){const s="signIn",i=await Ty(t,s,e),r=await Ri._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Iy(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function gC(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const Ma="__sak";/**
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
 */class wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mC(){const t=ft();return zh(t)||bl(t)}const _C=1e3,yC=10;class Ry extends wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mC()&&XA(),this.fallbackToPolling=py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);YA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const vC=Ry;/**
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
 */class Ay extends wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ay.type="SESSION";const Cy=Ay;/**
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
 */function EC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new kl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await EC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
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
 */function Gh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Gh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function IC(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Sy(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function wC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AC(){return Sy()?self:null}/**
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
 */const by="firebaseLocalStorageDb",CC=1,La="firebaseLocalStorage",Py="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function SC(){const t=indexedDB.deleteDatabase(by);return new po(t).toPromise()}function Tu(){const t=indexedDB.open(by,CC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(La,{keyPath:Py})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(La)?e(s):(s.close(),await SC(),e(await Tu()))})})}async function Tp(t,e,n){const s=Nl(t,!0).put({[Py]:e,value:n});return new po(s).toPromise()}async function bC(t,e){const n=Nl(t,!1).get(e),s=await new po(n).toPromise();return s===void 0?null:s.value}function Ip(t,e){const n=Nl(t,!0).delete(e);return new po(n).toPromise()}const PC=800,kC=3;class ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>kC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(AC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wC(),!this.activeServiceWorker)return;this.sender=new TC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tu();return await Tp(e,Ma,"1"),await Ip(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Nl(i,!1).getAll();return new po(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const NC=ky;new uo(3e4,6e4);/**
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
 */function Qh(t,e){return e?An(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yh extends Ey{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OC(t){return pC(t.auth,new Yh(t),t.bypassAuthState)}function DC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),fC(n,new Yh(t),t.bypassAuthState)}async function xC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),dC(n,new Yh(t),t.bypassAuthState)}/**
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
 */class Ny{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OC;case"linkViaPopup":case"linkViaRedirect":return xC;case"reauthViaPopup":case"reauthViaRedirect":return DC;default:gn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MC=new uo(2e3,1e4);async function fL(t,e,n){const s=Bs(t);ty(t,e,Pl);const i=Qh(s,n);return new Ts(s,"signInViaPopup",e,i).executeNotNull()}class Ts extends Ny{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MC.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const LC="pendingRedirect",fa=new Map;class VC extends Ny{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const s=await FC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FC(t,e){const n=Dy(e),s=Oy(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function UC(t,e){return Oy(t)._set(Dy(e),"true")}function BC(t,e){fa.set(t._key(),e)}function Oy(t){return An(t._redirectPersistence)}function Dy(t){return da(LC,t.config.apiKey,t.name)}/**
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
 */function pL(t,e,n){return $C(t,e,n)}async function $C(t,e,n){const s=Bs(t);ty(t,e,Pl),await s._initializationPromise;const i=Qh(s,n);return await UC(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function gL(t,e){return await Bs(t)._initializationPromise,xy(t,e,!1)}async function xy(t,e,n=!1){const s=Bs(t),i=Qh(s,e),o=await new VC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const jC=10*60*1e3;class WC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!My(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function My({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return My(t);default:return!1}}/**
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
 */async function qC(t,e={}){return ho(t,"GET","/v1/projects",e)}/**
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
 */const KC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zC=/^https?/;async function GC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qC(t);for(const n of e)try{if(QC(n))return}catch{}gn(t,"unauthorized-domain")}function QC(t){const e=Eu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zC.test(n))return!1;if(KC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const YC=new uo(3e4,6e4);function Rp(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XC(t){return new Promise((e,n)=>{var s,i,r;function o(){Rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rp(),n(cn(t,"network-request-failed"))},timeout:YC.get()})}if(!((i=(s=un().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=un().gapi)===null||r===void 0)&&r.load)o();else{const a=ZA("iframefcb");return un()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},yy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pa=null,e})}let pa=null;function JC(t){return pa=pa||XC(t),pa}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ZC=new uo(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qh(e,tS):`https://${t.config.authDomain}/${eS}`,s={apiKey:e.apiKey,appName:t.name,v:us},i=sS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Hi(s).slice(1)}`}async function rS(t){const e=await JC(t),n=un().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:iS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=un().setTimeout(()=>{r(o)},ZC.get());function l(){un().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aS=500,lS=600,cS="_blank",uS="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hS(t,e,n,s=aS,i=lS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ft().toLowerCase();n&&(a=cy(c)?cS:n),ly(c)&&(e=e||uS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(QA(c)&&a!=="_self")return dS(e||"",a),new Ap(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Ap(h)}function dS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler",gS=encodeURIComponent("fac");async function Cp(t,e,n,s,i,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:us,eventId:i};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof fo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gS}=${encodeURIComponent(l)}`:"";return`${mS(t)}?${Hi(a).slice(1)}${c}`}function mS({config:t}){return t.emulator?qh(t,pS):`https://${t.authDomain}/${fS}`}/**
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
 */const bc="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cy,this._completeRedirectFn=xy,this._overrideRedirectResult=BC}async _openPopup(e,n,s,i){var r;On((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Cp(e,n,s,Eu(),i);return hS(e,o,Gh())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Cp(e,n,s,Eu(),i);return IC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(On(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rS(e),s=new WC(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[bc];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return py()||zh()||bl()}}const yS=_S;var Sp="@firebase/auth",bp="1.1.0";/**
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
 */class vS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ES(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TS(t){pn(new Kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gy(t)},c=new rC(s,i,r,l);return aC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pn(new Kt("auth-internal",e=>{const n=Bs(e.getProvider("auth").getImmediate());return(s=>new vS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Sp,bp,ES(t)),Ct(Sp,bp,"esm2017")}/**
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
 */const IS=5*60,wS=j_("authIdTokenMaxAge")||IS;let Pp=null;const RS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wS)return;const i=n==null?void 0:n.token;Pp!==i&&(Pp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ly(t=jh()){const e=$h(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oC(t,{popupRedirectResolver:yS,persistence:[NC,vC,Cy]}),s=j_("authTokenSyncURL");if(s){const r=RS(s);gC(n,r,()=>r(n.currentUser)),Iy(n,o=>r(o))}const i=B_("auth");return i&&lC(n,`http://${i}`),n}TS("Browser");var AS=!1;/**
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
 */const CS=new Map,SS={activated:!1,tokenObservers:[]};function zt(t){return CS.get(t)||Object.assign({},SS)}const kp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class bS{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Br,await PS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Br,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function PS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const kS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Va=new Wi("appCheck","AppCheck",kS);function Vy(t){if(!zt(t).activated)throw Va.create("use-before-activation",{appName:t.name})}/**
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
 */const NS="firebase-app-check-database",OS=1,Iu="firebase-app-check-store";let qo=null;function DS(){return qo||(qo=new Promise((t,e)=>{try{const n=indexedDB.open(NS,OS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Va.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Iu,{keyPath:"compositeKey"})}}}catch(n){e(Va.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),qo)}function xS(t,e){return MS(LS(t),e)}async function MS(t,e){const s=(await DS()).transaction(Iu,"readwrite"),r=s.objectStore(Iu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Va.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function LS(t){return`${t.options.appId}-${t.name}`}/**
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
 */const wu=new co("@firebase/app-check");function Np(t,e){return q_()?xS(t,e).catch(n=>{wu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const VS={error:"UNKNOWN_ERROR"};function FS(t){return Cl.encodeString(JSON.stringify(t),!1)}async function Ru(t,e=!1){const n=t.app;Vy(n);const s=zt(n);let i=s.token,r;if(i&&!dr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(dr(l)?i=l:await Np(n,void 0))}if(!e&&i&&dr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await zt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?wu.warn(l.message):wu.error(l),r=l}let a;return i?r?dr(i)?a={token:i.token,internalError:r}:a=Dp(r):(a={token:i.token},s.token=i,await Np(n,i)):a=Dp(r),o&&jS(n,a),a}async function US(t){const e=t.app;Vy(e);const{provider:n}=zt(e);{const{token:s}=await n.getToken();return{token:s}}}function BS(t,e,n,s){const{app:i}=t,r=zt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&dr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Op(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Op(t))}function Fy(t,e){const n=zt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Op(t){const{app:e}=t,n=zt(e);let s=n.tokenRefresher;s||(s=$S(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function $S(t){const{app:e}=t;return new bS(async()=>{const n=zt(e);let s;if(n.token?s=await Ru(t,!0):s=await Ru(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=zt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},kp.RETRIAL_MIN_WAIT,kp.RETRIAL_MAX_WAIT)}function jS(t,e){const n=zt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function dr(t){return t.expireTimeMillis-Date.now()>0}function Dp(t){return{token:FS(VS),error:t}}/**
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
 */class WS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=zt(this.app);for(const n of e)Fy(this.app,n.next);return Promise.resolve()}}function HS(t,e){return new WS(t,e)}function qS(t){return{getToken:e=>Ru(t,e),getLimitedUseToken:()=>US(t),addTokenListener:e=>BS(t,"INTERNAL",e),removeTokenListener:e=>Fy(t.app,e)}}const KS="@firebase/app-check",zS="0.8.0",GS="app-check",xp="app-check-internal";function QS(){pn(new Kt(GS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return HS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(xp).initialize()})),pn(new Kt(xp,t=>{const e=t.getProvider("app-check").getImmediate();return qS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ct(KS,zS)}QS();var YS="firebase",XS="10.1.0";/**
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
 */Ct(YS,XS,"app");const Uy=Symbol("firebaseApp");function go(t){return Lh()&&At(Uy,null)||jh(t)}const sn=()=>{},JS=typeof window<"u";function Xh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function ZS(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function $s(t){return!!t&&typeof t=="object"}const eb=Object.prototype;function tb(t){return $s(t)&&Object.getPrototypeOf(t)===eb}function Jh(t){return $s(t)&&t.type==="document"}function nb(t){return $s(t)&&t.type==="collection"}function sb(t){return Jh(t)||nb(t)}function ib(t){return $s(t)&&t.type==="query"}function rb(t){return $s(t)&&"ref"in t}function ob(t){return $s(t)&&typeof t.bucket=="string"}function ab(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const lb=Symbol.for("v-scx");function cb(){return Lh(),!!At(lb,0)}const Ko=new WeakMap;function ub(t,e){if(!Ko.has(t)){const n=$m(!0);Ko.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ko.delete(t)}}return Ko.get(t)}const By=new WeakMap;function hb(t){return By.get(go(t))}const zo=new WeakMap;function $y(t){const e=go(t);if(!zo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{zo.set(e,r),n(r.value)}];zo.set(e,i)}return zo.get(e)}function db(t){const e=$y(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function fb(t,e){const n=Ly(e);Iy(n,s=>{const i=$y();t.value=s,Array.isArray(i)&&i[1](t)})}const Mp="@firebase/database",Lp="1.0.1";/**
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
 */let jy="";function pb(t){jy=t}/**
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
 */class gb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$r(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gb(e)}}catch{}return new mb},Is=Wy("localStorage"),Au=Wy("sessionStorage");/**
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
 */const pi=new co("@firebase/database"),_b=function(){let t=1;return function(){return t++}}(),Hy=function(t){const e=R0(t),n=new v0;n.update(e);const s=n.digest();return Cl.encodeByteArray(s)},mo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mo.apply(null,s):typeof s=="object"?e+=Ye(s):e+=s,e+=" "}return e};let Ps=null,Vp=!0;const yb=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(pi.logLevel=le.VERBOSE,Ps=pi.log.bind(pi),e&&Au.set("logging_enabled",!0)):typeof t=="function"?Ps=t:(Ps=null,Au.remove("logging_enabled"))},it=function(...t){if(Vp===!0&&(Vp=!1,Ps===null&&Au.get("logging_enabled")===!0&&yb(!0)),Ps){const e=mo.apply(null,t);Ps(e)}},_o=function(t){return function(...e){it(t,...e)}},Cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+mo(...t);pi.error(e)},Ds=function(...t){const e=`FIREBASE FATAL ERROR: ${mo(...t)}`;throw pi.error(e),new Error(e)},St=function(...t){const e="FIREBASE WARNING: "+mo(...t);pi.warn(e)},vb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Eb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ai="[MIN_NAME]",xs="[MAX_NAME]",qi=function(t,e){if(t===e)return 0;if(t===Ai||e===xs)return-1;if(e===Ai||t===xs)return 1;{const n=Fp(t),s=Fp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Tb=function(t,e){return t===e?0:t<e?-1:1},sr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ye(e))},Zh=function(t){if(typeof t!="object"||t===null)return Ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ye(e[s]),n+=":",n+=Zh(t[e[s]]);return n+="}",n},Ky=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Dt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zy=function(t){x(!qy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ib=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Rb=new RegExp("^-?(0*)\\d{1,10}$"),Ab=-2147483648,Cb=2147483647,Fp=function(t){if(Rb.test(t)){const e=Number(t);if(e>=Ab&&e<=Cb)return e}return null},yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw St("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Pb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class Su{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Su.OWNER="owner";/**
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
 */const ed="5",Gy="v",Qy="s",Yy="r",Xy="f",Jy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zy="ls",ev="p",bu="ac",tv="websocket",nv="long_polling";/**
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
 */class kb{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Nb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===tv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Nb(t)&&(n.ns=t.namespace);const i=[];return Dt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ob{constructor(){this.counters_={}}incrementCounter(e,n=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s0(this.counters_)}}/**
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
 */const Pc={},kc={};function td(t){const e=t.toString();return Pc[e]||(Pc[e]=new Ob),Pc[e]}function Db(t,e){const n=t.toString();return kc[n]||(kc[n]=e()),kc[n]}/**
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
 */class xb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Up="start",Mb="close",Lb="pLPCommand",Vb="pRTLPCB",iv="id",rv="pw",ov="ser",Fb="cb",Ub="seg",Bb="ts",$b="d",jb="dframe",av=1870,lv=30,Wb=av-lv,Hb=25e3,qb=3e4;class ii{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=td(n),this.urlFn=l=>(this.appCheckToken&&(l[bu]=this.appCheckToken),sv(n,nv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qb)),Eb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Up)this.id=a,this.password=l;else if(o===Mb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Up]="t",s[ov]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Fb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Gy]=ed,this.transportSessionId&&(s[Qy]=this.transportSessionId),this.lastSessionId&&(s[Zy]=this.lastSessionId),this.applicationId&&(s[ev]=this.applicationId),this.appCheckToken&&(s[bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jy.test(location.hostname)&&(s[Yy]=Xy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ib()&&!wb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=F_(n),i=Ky(s,Wb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jb]="t",s[iv]=e,s[rv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_b(),window[Lb+this.uniqueCallbackIdentifier]=e,window[Vb+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iv]=this.myID,e[rv]=this.myPW,e[ov]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lv+s.length<=av;){const o=this.pendingSegs.shift();s=s+"&"+Ub+i+"="+o.seg+"&"+Bb+i+"="+o.ts+"&"+$b+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Hb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Kb=16384,zb=45e3;let Fa=null;typeof MozWebSocket<"u"?Fa=MozWebSocket:typeof WebSocket<"u"&&(Fa=WebSocket);class Ft{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=td(n),this.connURL=Ft.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Gy]=ed,typeof location<"u"&&location.hostname&&Jy.test(location.hostname)&&(o[Yy]=Xy),n&&(o[Qy]=n),s&&(o[Zy]=s),i&&(o[bu]=i),r&&(o[ev]=r),sv(e,tv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Is.set("previous_websocket_failure",!0);try{let s;H_(),this.mySock=new Fa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fa!==null&&!Ft.forceDisallow_}static previouslyFailed(){return Is.isInMemoryStorage||Is.get("previous_websocket_failure")===!0}markConnectionHealthy(){Is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$r(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ky(n,Kb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2;Ft.healthyTimeout=3e4;/**
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
 */class qr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ii,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ft&&Ft.isAvailable();let s=n&&!Ft.previouslyFailed();if(e.webSocketOnly&&(n||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ft];else{const i=this.transports_=[];for(const r of qr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qr.globalTransportInitialized_=!1;/**
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
 */const Gb=6e4,Qb=5e3,Yb=10*1024,Xb=100*1024,Nc="t",Bp="d",Jb="s",$p="r",Zb="e",jp="o",Wp="a",Hp="n",qp="p",eP="h";class tP{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new qr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const n=e[Nc];n===Wp?this.upgradeIfSecondaryHealthy_():n===$p?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=sr("t",e),s=sr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=sr("t",e),s=sr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=sr(Nc,e);if(Bp in e){const s=e[Bp];if(n===eP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jb?this.onConnectionShutdown_(s):n===$p?this.onReset_(s):n===Zb?Cu("Server Error: "+s):n===jp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==s&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Gb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class uv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ua extends uv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ua}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Kp=32,zp=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new be("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function os(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new be(t.pieces_,e)}function hv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new be(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof be)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new be(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Ot(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Ot(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pv(t,e){if(os(t)!==os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Bt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(os(t)>os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sP{constructor(e,n){this.errorPrefix_=n,this.parts_=dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sl(this.parts_[s]);gv(this)}}function iP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sl(e),gv(t)}function rP(t){const e=t.parts_.pop();t.byteLength_-=Sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function gv(t){if(t.byteLength_>zp)throw new Error(t.errorPrefix_+"has a key path longer than "+zp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kp+") or object contains a cycle "+_s(t))}function _s(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class sd extends uv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new sd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ir=1e3,oP=60*5*1e3,Gp=30*1e3,aP=1.3,lP=3e4,cP="server_kill",Qp=3;class bn extends cv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bn.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ir,this.maxReconnectDelay_=oP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!H_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ye(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Br,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;bn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fn(e,"w")){const s=wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||y0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cu("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lP&&(this.reconnectDelay_=ir),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new tP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{St(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(cP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&St(h),l())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pu(this.interruptReasons_)&&(this.reconnectDelay_=ir,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Zh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new be(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qp&&(this.reconnectDelay_=Gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jy.replace(/\./g,"-")]=1,Uh()?e["framework.cordova"]=1:W_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ua.getInstance().currentlyOnline();return pu(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Ai,e),i=new oe(Ai,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Go;class mv extends Ol{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return qi(e.name,n.name)}isDefinedOn(e){throw ji("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(xs,Go)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Go)}toString(){return".key"}}const gi=new mv;/**
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
 */let Qo=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Rt=class fr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fr.RED,this.left=i??rn.EMPTY_NODE,this.right=r??rn.EMPTY_NODE}copy(e,n,s,i,r){return new fr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Rt.RED=!0;Rt.BLACK=!1;class uP{copy(e,n,s,i,r){return this}insert(e,n,s){return new Rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let rn=class ga{constructor(e,n=ga.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ga(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rt.BLACK,null,null))}remove(e){return new ga(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qo(this.root_,null,this.comparator_,!0,e)}};rn.EMPTY_NODE=new uP;/**
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
 */function hP(t,e){return qi(t.name,e.name)}function id(t,e){return qi(t,e)}/**
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
 */let Pu;function dP(t){Pu=t}const _v=function(t){return typeof t=="number"?"number:"+zy(t):"string:"+t},yv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else x(t===Pu||t.isEmpty(),"priority of unexpected type.");x(t===Pu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Yp;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yv(this.priorityNode_)}static set __childrenNodeConstructor(e){Yp=e}static get __childrenNodeConstructor(){return Yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_v(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zy(this.value_):e+=this.value_,this.lazyHash_=Hy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let vv,Ev;function fP(t){vv=t}function pP(t){Ev=t}class gP extends Ol{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(xs,new Be("[PRIORITY-POST]",Ev))}makePost(e,n){const s=vv(e);return new oe(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const ct=new gP;/**
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
 */const mP=Math.log(2);class _P{constructor(e){const n=r=>parseInt(Math.log(r)/mP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ba=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Rt(d,h.node,Rt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new Rt(d,h.node,Rt.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,I=h;h-=m;const b=i(v+1,I),k=t[v],R=n?n(k):k;f(new Rt(R,k.node,y,null,b))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,Rt.BLACK):(d(v,Rt.BLACK),d(v,Rt.RED))}return u},o=new _P(t.length),a=r(o);return new rn(s||e,a)};/**
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
 */let Oc;const Js={};class Cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Js&&ct,"ChildrenNode.ts has not been loaded"),Oc=Oc||new Cn({".priority":Js},{".priority":ct}),Oc}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rn?n:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ba(s,e.getCompare()):a=Js;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const s=Pa(this.indexes_,(i,r)=>{const o=wi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Js)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ba(a,o.getCompare())}else return Js;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pa(this.indexes_,i=>{if(i===Js)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new Cn(s,this.indexSet_)}}/**
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
 */let rr;class fe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&yv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rr||(rr=new fe(new rn(id),null,Cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rr}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rr:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?rr:this.priorityNode_;return new fe(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{x(re(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ct,(o,a)=>{n[o]=a.val(e),s++,r&&fe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_v(this.getPriority().val())+":"),this.forEachChild(ct,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===gi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ct),i=n.getIterator(ct);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gi?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yP extends fe{constructor(){super(new rn(id),fe.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const vo=new yP;Object.defineProperties(oe,{MIN:{value:new oe(Ai,fe.EMPTY_NODE)},MAX:{value:new oe(xs,vo)}});mv.__EMPTY_NODE=fe.EMPTY_NODE;Be.__childrenNodeConstructor=fe;dP(vo);pP(vo);/**
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
 */const vP=!0;function rt(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,rt(e))}if(!(t instanceof Array)&&vP){const n=[];let s=!1;if(Dt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=rt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return fe.EMPTY_NODE;const r=Ba(n,hP,o=>o.name,id);if(s){const o=Ba(n,ct.getCompare());return new fe(r,rt(e),new Cn({".priority":o},{".priority":ct}))}else return new fe(r,rt(e),Cn.Default)}else{let n=fe.EMPTY_NODE;return Dt(t,(s,i)=>{if(Fn(t,s)&&s.substring(0,1)!=="."){const r=rt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(rt(e))}}fP(rt);/**
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
 */class EP extends Ol{constructor(e){super(),this.indexPath_=e,x(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qi(e.name,n.name):r}makePost(e,n){const s=rt(e),i=fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,vo);return new oe(xs,e)}toString(){return dv(this.indexPath_,0).join("/")}}/**
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
 */class TP extends Ol{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=rt(e);return new oe(n,s)}toString(){return".value"}}const IP=new TP;/**
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
 */function wP(t){return{type:"value",snapshotNode:t}}function RP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function AP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ai}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ct?n="$priority":t.index_===IP?n="$value":t.index_===gi?n="$key":(x(t.index_ instanceof EP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ct&&(e.i=t.index_.toString()),e}/**
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
 */class $a extends cv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$a.getListenId_(e,s),a={};this.listens_[o]=a;const l=Jp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),wi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=$a.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Jp(e._queryParams),s=e._path.toString(),i=new Br;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$r(a.responseText)}catch{St("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SP{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ja(){return{value:null,children:new Map}}function Tv(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,ja());const i=t.children.get(s);e=Ae(e),Tv(i,e,n)}}function ku(t,e,n){t.value!==null?n(e,t.value):bP(t,(s,i)=>{const r=new be(e.toString()+"/"+s);ku(i,r,n)})}function bP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class PP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Dt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const eg=10*1e3,kP=30*1e3,NP=5*60*1e3;class OP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PP(e);const s=eg+(kP-eg)*Math.random();wr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Dt(e,(i,r)=>{r>0&&Fn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wr(this.reportStats_.bind(this),Math.floor(Math.random()*2*NP))}}/**
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
 */var on;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function Iv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=on.ACK_USER_WRITE,this.source=Iv()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new Wa(_e(),n,this.revert)}}else return x(re(this.path)===e,"operationForChild called for unrelated child."),new Wa(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=on.OVERWRITE}operationForChild(e){return se(this.path)?new Ms(this.source,_e(),this.snap.getImmediateChild(e)):new Ms(this.source,Ae(this.path),this.snap)}}/**
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
 */class Kr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=on.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new Ms(this.source,_e(),n.value):new Kr(this.source,_e(),n)}else return x(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class od{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DP(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(CP(o.childName,o.snapshotNode))}),or(t,i,"child_removed",e,s,n),or(t,i,"child_added",e,s,n),or(t,i,"child_moved",r,s,n),or(t,i,"child_changed",e,s,n),or(t,i,"value",e,s,n),i}function or(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>MP(t,a,l)),o.forEach(a=>{const l=xP(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MP(t,e,n){if(e.childName==null||n.childName==null)throw ji("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Av(t,e){return{eventCache:t,serverCache:e}}function Rr(t,e,n,s){return Av(new od(e,n,s),t.serverCache)}function Cv(t,e,n,s){return Av(t.eventCache,new od(e,n,s))}function Nu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ls(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Dc;const LP=()=>(Dc||(Dc=new rn(Tb)),Dc);class we{constructor(e,n=LP()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Dt(e,(s,i)=>{n=n.set(new be(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(se(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:We(new be(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(Ae(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),We(n,i),s):new we(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new we(null))}}function Ar(t,e,n){if(se(e))return new qt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ot(i,e);return r=r.updateChild(o,n),new qt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new qt(r)}}}function tg(t,e,n){let s=t;return Dt(n,(i,r)=>{s=Ar(s,We(e,i),r)}),s}function ng(t,e){if(se(e))return qt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new qt(n)}}function Ou(t,e){return js(t,e)!=null}function js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ot(n.path,e)):null}function sg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ct,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function ns(t,e){if(se(e))return t;{const n=js(t,e);return n!=null?new qt(new we(n)):new qt(t.writeTree_.subtree(e))}}function Du(t){return t.writeTree_.isEmpty()}function Ci(t,e){return Sv(_e(),t.writeTree_,e)}function Sv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Sv(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
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
 */function bv(t,e){return Dv(e,t)}function VP(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ar(t.visibleWrites,e,n)),t.lastWriteId=s}function FP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function UP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&BP(a,s.path)?i=!1:Bt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return $P(t),!0;if(s.snap)t.visibleWrites=ng(t.visibleWrites,s.path);else{const a=s.children;Dt(a,l=>{t.visibleWrites=ng(t.visibleWrites,We(s.path,l))})}return!0}else return!1}function BP(t,e){if(t.snap)return Bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bt(We(t.path,n),e))return!0;return!1}function $P(t){t.visibleWrites=Pv(t.allWrites,jP,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jP(t){return t.visible}function Pv(t,e,n){let s=qt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Bt(n,o)?(a=Ot(n,o),s=Ar(s,a,r.snap)):Bt(o,n)&&(a=Ot(o,n),s=Ar(s,_e(),r.snap.getChild(a)));else if(r.children){if(Bt(n,o))a=Ot(n,o),s=tg(s,a,r.children);else if(Bt(o,n))if(a=Ot(o,n),se(a))s=tg(s,_e(),r.children);else{const l=wi(r.children,re(a));if(l){const c=l.getChild(Ae(a));s=Ar(s,_e(),c)}}}else throw ji("WriteRecord should have .snap or .children")}}return s}function kv(t,e,n,s,i){if(!s&&!i){const r=js(t.visibleWrites,e);if(r!=null)return r;{const o=ns(t.visibleWrites,e);if(Du(o))return n;if(n==null&&!Ou(o,_e()))return null;{const a=n||fe.EMPTY_NODE;return Ci(o,a)}}}else{const r=ns(t.visibleWrites,e);if(!i&&Du(r))return n;if(!i&&n==null&&!Ou(r,_e()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Bt(c.path,e)||Bt(e,c.path))},a=Pv(t.allWrites,o,e),l=n||fe.EMPTY_NODE;return Ci(a,l)}}}function WP(t,e,n){let s=fe.EMPTY_NODE;const i=js(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ct,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ns(t.visibleWrites,e);return n.forEachChild(ct,(o,a)=>{const l=Ci(ns(r,new be(o)),a);s=s.updateImmediateChild(o,l)}),sg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ns(t.visibleWrites,e);return sg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function HP(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if(Ou(t.visibleWrites,r))return null;{const o=ns(t.visibleWrites,r);return Du(o)?i.getChild(n):Ci(o,i.getChild(n))}}function qP(t,e,n,s){const i=We(e,n),r=js(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ns(t.visibleWrites,i);return Ci(o,s.getNode().getImmediateChild(n))}else return null}function KP(t,e){return js(t.visibleWrites,e)}function zP(t,e,n,s,i,r,o){let a;const l=ns(t.visibleWrites,e),c=js(l,_e());if(c!=null)a=c;else if(n!=null)a=Ci(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function GP(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function xu(t,e,n,s){return kv(t.writeTree,t.treePath,e,n,s)}function Nv(t,e){return WP(t.writeTree,t.treePath,e)}function ig(t,e,n,s){return HP(t.writeTree,t.treePath,e,n,s)}function Ha(t,e){return KP(t.writeTree,We(t.treePath,e))}function QP(t,e,n,s,i,r){return zP(t.writeTree,t.treePath,e,n,s,i,r)}function ad(t,e,n){return qP(t.writeTree,t.treePath,e,n)}function Ov(t,e){return Dv(We(t.treePath,e),t.writeTree)}function Dv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class YP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Xp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,AP(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,RP(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xp(s,e.snapshotNode,i.oldSnap));else throw ji("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class XP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const xv=new XP;class ld{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new od(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ls(this.viewCache_),r=QP(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function JP(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZP(t,e,n,s,i){const r=new YP;let o,a;if(n.type===on.OVERWRITE){const c=n;c.source.fromUser?o=Mu(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=qa(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===on.MERGE){const c=n;c.source.fromUser?o=tk(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===on.ACK_USER_WRITE){const c=n;c.revert?o=ik(t,e,c.path,s,i,r):o=nk(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===on.LISTEN_COMPLETE)o=sk(t,e,n.path,s,r);else throw ji("Unknown operation type: "+n.type);const l=r.getChanges();return ek(e,o,l),{viewCache:o,changes:l}}function ek(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(wP(Nu(e)))}}function Mv(t,e,n,s,i,r){const o=e.eventCache;if(Ha(s,n)!=null)return e;{let a,l;if(se(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ls(e),u=c instanceof fe?c:fe.EMPTY_NODE,h=Nv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=xu(s,Ls(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){x(os(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ig(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ig(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ad(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Rr(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function qa(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=re(n);if(!l.isCompleteForPath(n)&&os(n)>1)return e;const m=Ae(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,xv,null)}const h=Cv(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),d=new ld(i,h,r);return Mv(t,h,n,i,d,a)}function Mu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ld(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rr(e,c,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),f=a.getNode().getImmediateChild(h);let m;if(se(d))m=s;else{const y=u.getCompleteChild(h);y!=null?hv(d)===".priority"&&y.getChild(fv(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=fe.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Rr(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rg(t,e){return t.eventCache.isCompleteForChild(e)}function tk(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=We(n,l);rg(e,re(u))&&(a=Mu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=We(n,l);rg(e,re(u))||(a=Mu(t,a,u,c,i,r,o))}),a}function og(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=og(t,f,d);l=qa(t,l,new be(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=og(t,m,d);l=qa(t,l,new be(h),y,i,r,o,a)}}),l}function nk(t,e,n,s,i,r,o){if(Ha(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qa(t,e,n,l.getNode().getChild(n),i,r,a,o);if(se(n)){let c=new we(null);return l.getNode().forEachChild(gi,(u,h)=>{c=c.set(new be(u),h)}),Lu(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=We(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Lu(t,e,n,c,i,r,a,o)}}function sk(t,e,n,s,i){const r=e.serverCache,o=Cv(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return Mv(t,o,n,s,xv,i)}function ik(t,e,n,s,i,r){let o;if(Ha(s,n)!=null)return e;{const a=new ld(s,e,i),l=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xu(s,Ls(e));else{const h=e.serverCache.getNode();x(h instanceof fe,"serverChildren would be complete if leaf node"),u=Nv(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let h=ad(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,fe.EMPTY_NODE,Ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xu(s,Ls(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ha(s,_e())!=null,Rr(e,c,o,t.filter.filtersNodes())}}function rk(t,e){const n=Ls(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function ag(t,e,n,s){e.type===on.MERGE&&e.source.queryId!==null&&(x(Ls(t.viewCache_),"We should always have a full cache before handling merges"),x(Nu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ZP(t.processor_,i,e,n,s);return JP(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ok(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ok(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return DP(t.eventGenerator_,e,n,i)}/**
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
 */let lg;function ak(t){x(!lg,"__referenceConstructor has already been defined"),lg=t}function cd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),ag(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ag(o,e,n,s));return r}}function ud(t,e){let n=null;for(const s of t.views.values())n=n||rk(s,e);return n}/**
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
 */let cg;function lk(t){x(!cg,"__referenceConstructor has already been defined"),cg=t}class ug{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=GP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ck(t,e,n,s,i){return VP(t.pendingWriteTree_,e,n,s,i),i?xl(t,new Ms(Iv(),e,n)):[]}function ri(t,e,n=!1){const s=FP(t.pendingWriteTree_,e);if(UP(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(_e(),!0):Dt(s.children,o=>{r=r.set(new be(o),!0)}),xl(t,new Wa(s.path,r,n))}else return[]}function Dl(t,e,n){return xl(t,new Ms(wv(),e,n))}function uk(t,e,n){const s=we.fromObject(n);return xl(t,new Kr(wv(),e,s))}function hk(t,e,n,s){const i=Uv(t,s);if(i!=null){const r=Bv(i),o=r.path,a=r.queryId,l=Ot(o,e),c=new Ms(Rv(a),l,n);return $v(t,o,c)}else return[]}function dk(t,e,n,s){const i=Uv(t,s);if(i){const r=Bv(i),o=r.path,a=r.queryId,l=Ot(o,e),c=we.fromObject(n),u=new Kr(Rv(a),l,c);return $v(t,o,u)}else return[]}function Lv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ot(o,e),c=ud(a,l);if(c)return c});return kv(i,e,r,n,!0)}function xl(t,e){return Vv(e,t.syncPointTree_,null,bv(t.pendingWriteTree_,_e()))}function Vv(t,e,n,s){if(se(t.path))return Fv(t,e,n,s);{const i=e.get(_e());n==null&&i!=null&&(n=ud(i,_e()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ov(s,o);r=r.concat(Vv(a,l,c,u))}return i&&(r=r.concat(cd(i,t,s,n))),r}}function Fv(t,e,n,s){const i=e.get(_e());n==null&&i!=null&&(n=ud(i,_e()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ov(s,o),u=t.operationForChild(o);u&&(r=r.concat(Fv(u,a,l,c)))}),i&&(r=r.concat(cd(i,t,s,n))),r}function Uv(t,e){return t.tagToQueryMap.get(e)}function Bv(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new be(t.substr(0,e))}}function $v(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=bv(t.pendingWriteTree_,e);return cd(s,n,i,null)}/**
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
 */class hd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hd(n)}node(){return this.node_}}class dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new dd(this.syncTree_,n)}node(){return Lv(this.syncTree_,this.path_)}}const fk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},gk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},mk=function(t,e,n,s){return fd(e,new dd(n,t),s)},_k=function(t,e,n){return fd(t,new hd(e),n)};function fd(t,e,n){const s=t.getPriority().val(),i=hg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=hg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,rt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(ct,(a,l)=>{const c=fd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class pd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gd(t,e){let n=e instanceof be?e:new be(e),s=t,i=re(n);for(;i!==null;){const r=wi(s.node.children,i)||{children:{},childCount:0};s=new pd(i,s,r),n=Ae(n),i=re(n)}return s}function Ki(t){return t.node.value}function jv(t,e){t.node.value=e,Vu(t)}function Wv(t){return t.node.childCount>0}function yk(t){return Ki(t)===void 0&&!Wv(t)}function Ml(t,e){Dt(t.node.children,(n,s)=>{e(new pd(n,t,s))})}function Hv(t,e,n,s){n&&!s&&e(t),Ml(t,i=>{Hv(i,e,!0,s)}),n&&s&&e(t)}function vk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Eo(t){return new be(t.parent===null?t.name:Eo(t.parent)+"/"+t.name)}function Vu(t){t.parent!==null&&Ek(t.parent,t.name,t)}function Ek(t,e,n){const s=yk(n),i=Fn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Vu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vu(t))}/**
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
 */const Tk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ik=/[\[\].#$\u0000-\u001F\u007F]/,xc=10*1024*1024,qv=function(t){return typeof t=="string"&&t.length!==0&&!Tk.test(t)},wk=function(t){return typeof t=="string"&&t.length!==0&&!Ik.test(t)},Rk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wk(t)},Kv=function(t,e,n){const s=n instanceof be?new sP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_s(s));if(typeof e=="function")throw new Error(t+"contains a function "+_s(s)+" with contents = "+e.toString());if(qy(e))throw new Error(t+"contains "+e.toString()+" "+_s(s));if(typeof e=="string"&&e.length>xc/3&&Sl(e)>xc)throw new Error(t+"contains a string greater than "+xc+" utf8 bytes "+_s(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Dt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qv(o)))throw new Error(t+" contains an invalid key ("+o+") "+_s(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iP(s,o),Kv(t,a,s),rP(s)}),i&&r)throw new Error(t+' contains ".value" child '+_s(s)+" in addition to actual children.")}},Ak=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Rk(n))throw new Error(w0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ck{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sk(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!pv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ws(t,e,n){Sk(t,n),bk(t,s=>Bt(s,e)||Bt(e,s))}function bk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Pk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ps&&it("event: "+n.toString()),yo(s)}}}/**
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
 */const kk="repo_interrupt",Nk=25;class Ok{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ck,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ja(),this.transactionQueueTree_=new pd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dk(t,e,n){if(t.stats_=td(t.repoInfo_),t.forceRestClient_||Sb())t.server_=new $a(t.repoInfo_,(s,i,r,o)=>{dg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new bn(t.repoInfo_,e,(s,i,r,o)=>{dg(t,s,i,r,o)},s=>{fg(t,s)},s=>{Mk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Db(t.repoInfo_,()=>new OP(t.stats_,t.server_)),t.infoData_=new SP,t.infoSyncTree_=new ug({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Dl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),md(t,"connected",!1),t.serverSyncTree_=new ug({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ws(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function xk(t){const n=t.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zv(t){return fk({timestamp:xk(t)})}function dg(t,e,n,s,i){t.dataUpdateCount++;const r=new be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Pa(n,c=>rt(c));o=dk(t.serverSyncTree_,r,l,i)}else{const l=rt(n);o=hk(t.serverSyncTree_,r,l,i)}else if(s){const l=Pa(n,c=>rt(c));o=uk(t.serverSyncTree_,r,l)}else{const l=rt(n);o=Dl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=yd(t,r)),Ws(t.eventQueue_,a,o)}function fg(t,e){md(t,"connected",e),e===!1&&Vk(t)}function Mk(t,e){Dt(e,(n,s)=>{md(t,n,s)})}function md(t,e,n){const s=new be("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(s,i);const r=Dl(t.infoSyncTree_,s,i);Ws(t.eventQueue_,s,r)}function Lk(t){return t.nextWriteId_++}function Vk(t){Gv(t,"onDisconnectEvents");const e=zv(t),n=ja();ku(t.onDisconnect_,_e(),(i,r)=>{const o=mk(i,r,t.serverSyncTree_,e);Tv(n,i,o)});let s=[];ku(n,_e(),(i,r)=>{s=s.concat(Dl(t.serverSyncTree_,i,r));const o=$k(t,i);yd(t,o)}),t.onDisconnect_=ja(),Ws(t.eventQueue_,_e(),s)}function Fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kk)}function Gv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function Qv(t,e,n){return Lv(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function _d(t,e=t.transactionQueueTree_){if(e||Ll(t,e),Ki(e)){const n=Xv(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uk(t,Eo(e),n)}else Wv(e)&&Ml(e,n=>{_d(t,n)})}function Uk(t,e,n){const s=n.map(c=>c.currentWriteId),i=Qv(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ot(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Gv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ri(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ll(t,gd(t.transactionQueueTree_,e)),_d(t,t.transactionQueueTree_),Ws(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)yo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{St("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}yd(t,e)}},o)}function yd(t,e){const n=Yv(t,e),s=Eo(n),i=Xv(t,n);return Bk(t,i,s),s}function Bk(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ot(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Nk)u=!0,h="maxretry",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Qv(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Kv("transaction failed: Data returned ",f,l.path);let m=rt(f);typeof f=="object"&&f!=null&&Fn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,I=zv(t),b=_k(m,d,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=Lk(t),o.splice(o.indexOf(v),1),i=i.concat(ck(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(ri(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(ri(t.serverSyncTree_,l.currentWriteId,!0))}Ws(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ll(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)yo(s[a]);_d(t,t.transactionQueueTree_)}function Yv(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&Ki(s)===void 0;)s=gd(s,n),e=Ae(e),n=re(e);return s}function Xv(t,e){const n=[];return Jv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Jv(t,e,n){const s=Ki(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ml(e,i=>{Jv(t,i,n)})}function Ll(t,e){const n=Ki(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,jv(e,n.length>0?n:void 0)}Ml(e,s=>{Ll(t,s)})}function $k(t,e){const n=Eo(Yv(t,e)),s=gd(t.transactionQueueTree_,e);return vk(s,i=>{Mc(t,i)}),Mc(t,s),Hv(s,i=>{Mc(t,i)}),n}function Mc(t,e){const n=Ki(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jv(e,void 0):n.length=r+1,Ws(t.eventQueue_,Eo(e),i);for(let o=0;o<s.length;o++)yo(s[o])}}/**
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
 */function jk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Wk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):St(`Invalid query segment '${n}' in query '${t}'`)}return e}const pg=function(t,e){const n=Hk(t),s=n.namespace;n.domain==="firebase.com"&&Ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kb(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new be(n.pathString)}},Hk=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=jk(t.substring(u,h)));const d=Wk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class vd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:hv(this._path)}get ref(){return new zi(this._repo,this._path)}get _queryIdentifier(){const e=Zp(this._queryParams),n=Zh(e);return n==="{}"?"default":n}get _queryObject(){return Zp(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof vd))return!1;const n=this._repo===e._repo,s=pv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nP(this._path)}}class zi extends vd{constructor(e,n){super(e,n,new rd,!1)}get parent(){const e=fv(this._path);return e===null?null:new zi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ak(zi);lk(zi);/**
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
 */const qk="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let Kk=!1;function zk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[qk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=pg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Su(Su.OWNER):new Pb(t.name,t.options,e);Ak("Invalid Firebase Database URL",o),se(o.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Qk(a,t,u,new bb(t.name,n));return new Yk(h,t)}function Gk(t,e){const n=Fu[e];(!n||n[t.key]!==t)&&Ds(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fk(t),delete n[t.key]}function Qk(t,e,n,s){let i=Fu[e.name];i||(i={},Fu[e.name]=i);let r=i[t.toURLString()];return r&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ok(t,Kk,n,s),i[t.toURLString()]=r,r}class Yk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zi(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ds("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Xk(t){pb(us),pn(new Kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ct(Mp,Lp,t),Ct(Mp,Lp,"esm2017")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Xk();var Jk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Ed=Ed||{},G=Jk||self;function Vl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function To(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Zk(t){return Object.prototype.hasOwnProperty.call(t,Lc)&&t[Lc]||(t[Lc]=++eN)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),eN=0;function tN(t,e,n){return t.call.apply(t.bind,arguments)}function nN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=tN:ut=nN,ut.apply(null,arguments)}function Yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function hs(){this.s=this.s,this.o=this.o}var sN=0;hs.prototype.s=!1;hs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sN!=0)&&Zk(this)};hs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Td(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Vl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var iN=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function zr(t){return/^[\s\xa0]*$/.test(t)}function Fl(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function nn(t){return Fl().indexOf(t)!=-1}function Id(t){return Id[" "](t),t}Id[" "]=function(){};function rN(t,e){var n=XN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oN=nn("Opera"),Si=nn("Trident")||nn("MSIE"),eE=nn("Edge"),Uu=eE||Si,tE=nn("Gecko")&&!(Fl().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),aN=Fl().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function nE(){var t=G.document;return t?t.documentMode:void 0}var Bu;e:{var Vc="",Fc=function(){var t=Fl();if(tE)return/rv:([^\);]+)(\)|;)/.exec(t);if(eE)return/Edge\/([\d\.]+)/.exec(t);if(Si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aN)return/WebKit\/(\S+)/.exec(t);if(oN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Vc=Fc?Fc[1]:""),Si){var Uc=nE();if(Uc!=null&&Uc>parseFloat(Vc)){Bu=String(Uc);break e}}Bu=Vc}var $u;if(G.document&&Si){var mg=nE();$u=mg||parseInt(Bu,10)||void 0}else $u=void 0;var lN=$u;function Gr(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tE){e:{try{Id(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gr.$.h.call(this)}}Ke(Gr,ht);var cN={2:"touch",3:"pen",4:"mouse"};Gr.prototype.h=function(){Gr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Io="closure_listenable_"+(1e6*Math.random()|0),uN=0;function hN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++uN,this.fa=this.ia=!1}function Ul(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function wd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function dN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sE(t){const e={};for(const n in t)e[n]=t[n];return e}const _g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<_g.length;r++)n=_g[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Bl(t){this.src=t,this.g={},this.h=0}Bl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Wu(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hN(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function ju(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Zv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Rd="closure_lm_"+(1e6*Math.random()|0),Bc={};function rE(t,e,n,s,i){if(s&&s.once)return aE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)rE(t,e[r],n,s,i);return null}return n=Sd(n),t&&t[Io]?t.O(e,n,To(s)?!!s.capture:!!s,i):oE(t,e,n,!1,s,i)}function oE(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=To(i)?!!i.capture:!!i,a=Cd(t);if(a||(t[Rd]=a=new Bl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=fN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)iN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(cE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fN(){function t(n){return e.call(t.src,t.listener,n)}const e=pN;return t}function aE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)aE(t,e[r],n,s,i);return null}return n=Sd(n),t&&t[Io]?t.P(e,n,To(s)?!!s.capture:!!s,i):oE(t,e,n,!0,s,i)}function lE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)lE(t,e[r],n,s,i);else s=To(s)?!!s.capture:!!s,n=Sd(n),t&&t[Io]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Wu(r,n,s,i),-1<n&&(Ul(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wu(e,n,s,i)),(n=-1<t?e[t]:null)&&Ad(n))}function Ad(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Io])ju(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(cE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Cd(e))?(ju(n,t),n.h==0&&(n.src=null,e[Rd]=null)):Ul(t)}}}function cE(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function pN(t,e){if(t.fa)t=!0;else{e=new Gr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Ad(t),t=n.call(s,e)}return t}function Cd(t){return t=t[Rd],t instanceof Bl?t:null}var $c="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sd(t){return typeof t=="function"?t:(t[$c]||(t[$c]=function(e){return t.handleEvent(e)}),t[$c])}function qe(){hs.call(this),this.i=new Bl(this),this.S=this,this.J=null}Ke(qe,hs);qe.prototype[Io]=!0;qe.prototype.removeEventListener=function(t,e,n,s){lE(this,t,e,n,s)};function Ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(s,t),iE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xo(o,s,!0,e)&&i}if(o=e.g=t,i=Xo(o,s,!0,e)&&i,i=Xo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xo(o,s,!1,e)&&i}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ul(n[s]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ju(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var bd=G.JSON.stringify;class gN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mN(){var t=Pd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _N{constructor(){this.h=this.g=null}add(e,n){const s=uE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var uE=new gN(()=>new yN,t=>t.reset());class yN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function EN(t){G.setTimeout(()=>{throw t},0)}let Qr,Yr=!1,Pd=new _N,hE=()=>{const t=G.Promise.resolve(void 0);Qr=()=>{t.then(TN)}};var TN=()=>{for(var t;t=mN();){try{t.h.call(t.g)}catch(n){EN(n)}var e=uE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yr=!1};function $l(t,e){qe.call(this),this.h=t||1,this.g=e||G,this.j=ut(this.qb,this),this.l=Date.now()}Ke($l,qe);M=$l.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(kd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){$l.$.N.call(this),kd(this),delete this.g};function Nd(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function dE(t){t.g=Nd(()=>{t.g=null,t.i&&(t.i=!1,dE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IN extends hs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dE(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(t){hs.call(this),this.h=t,this.g={}}Ke(Xr,hs);var yg=[];function fE(t,e,n,s){Array.isArray(n)||(n&&(yg[0]=n.toString()),n=yg);for(var i=0;i<n.length;i++){var r=rE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function pE(t){wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ad(e)},t),t.g={}}Xr.prototype.N=function(){Xr.$.N.call(this),pE(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jl(){this.g=!0}jl.prototype.Ea=function(){this.g=!1};function wN(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RN(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CN(t,n)+(s?" "+s:"")})}function AN(t,e){t.info(function(){return"TIMEOUT: "+e})}jl.prototype.info=function(){};function CN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bd(n)}catch{return e}}var Hs={},vg=null;function Wl(){return vg=vg||new qe}Hs.Ta="serverreachability";function gE(t){ht.call(this,Hs.Ta,t)}Ke(gE,ht);function Jr(t){const e=Wl();Ze(e,new gE(e))}Hs.STAT_EVENT="statevent";function mE(t,e){ht.call(this,Hs.STAT_EVENT,t),this.stat=e}Ke(mE,ht);function mt(t){const e=Wl();Ze(e,new mE(e,t))}Hs.Ua="timingevent";function _E(t,e){ht.call(this,Hs.Ua,t),this.size=e}Ke(_E,ht);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Hl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Od(){}Od.prototype.h=null;function Eg(t){return t.h||(t.h=t.i())}function vE(){}var Ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dd(){ht.call(this,"d")}Ke(Dd,ht);function xd(){ht.call(this,"c")}Ke(xd,ht);var Hu;function ql(){}Ke(ql,Od);ql.prototype.g=function(){return new XMLHttpRequest};ql.prototype.i=function(){return{}};Hu=new ql;function Ao(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Xr(this),this.P=SN,t=Uu?125:void 0,this.V=new $l(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new EE}function EE(){this.i=null,this.g="",this.h=!1}var SN=45e3,qu={},Ka={};M=Ao.prototype;M.setTimeout=function(t){this.P=t};function Ku(t,e,n){t.L=1,t.v=zl(Dn(e)),t.s=n,t.S=!0,TE(t,null)}function TE(t,e){t.G=Date.now(),Co(t),t.A=Dn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),PE(n.i,"t",s),t.C=0,n=t.l.J,t.h=new EE,t.g=YE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new IN(ut(t.Pa,t,t.g),t.O)),fE(t.U,t.g,"readystatechange",t.nb),e=t.I?sE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Jr(),wN(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Uu||this.g&&(this.h.h||this.g.ja()||Rg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Jr(3):Jr(2)),Kl(this);var n=this.g.da();this.ca=n;t:if(IE(this)){var s=Rg(this.g);t="";var i=s.length,r=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Cr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zr(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zu(this,n);else{this.i=!1,this.o=3,mt(12),ws(this),Cr(this);break e}}this.S?(wE(this,u,o),Uu&&this.i&&u==3&&(fE(this.U,this.V,"tick",this.mb),this.V.start())):(oi(this.j,this.m,o,null),zu(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?KE(this.l,this):(this.i=!1,Co(this)))}else GN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),ws(this),Cr(this)}}}catch{}finally{}};function IE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=bN(t,n),i==Ka){e==4&&(t.o=4,mt(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==qu){t.o=4,mt(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),zu(t,i);IE(t)&&i!=Ka&&i!=qu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bd(e),e.M=!0,mt(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),Cr(t))}M.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.C<e.length&&(Kl(this),wE(this,t,e),this.i&&t!=4&&Co(this))}};function bN(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?qu:(s+=1,s+n>e.length?Ka:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,ws(this)};function Co(t){t.Y=Date.now()+t.P,RE(t,t.P)}function RE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(ut(t.lb,t),e)}function Kl(t){t.B&&(G.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(AN(this.j,this.A),this.L!=2&&(Jr(),mt(17)),ws(this),this.o=2,Cr(this)):RE(this,this.Y-t)};function Cr(t){t.l.H==0||t.J||KE(t.l,t)}function ws(t){Kl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,kd(t.V),pE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Gu(n.i,t))){if(!t.K&&Gu(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qa(n),Yl(n);else break e;Ud(n),mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wo(ut(n.ib,n),6e3));if(1>=OE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Rs(n,11)}else if((t.K||n.g==t)&&Qa(n),!zr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Md(r,r.h),r.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Ce(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=QE(s,s.J?s.pa:null,s.Y),o.K){DE(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Kl(a),Co(a)),s.g=o}else HE(s);0<n.j.length&&Xl(n)}else c[0]!="stop"&&c[0]!="close"||Rs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Rs(n,7):Fd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Jr(4)}catch{}}function PN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function AE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kN(t),s=PN(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var CE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ks(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ks){this.h=t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l;var e=t.i,n=new Zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tg(this,n),this.o=t.o}else t&&(e=String(t).match(CE))?(this.h=!1,za(this,e[1]||"",!0),this.s=pr(e[2]||""),this.g=pr(e[3]||"",!0),Ga(this,e[4]),this.l=pr(e[5]||"",!0),Tg(this,e[6]||"",!0),this.o=pr(e[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}ks.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gr(e,Ig,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gr(e,Ig,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gr(n,n.charAt(0)=="/"?xN:DN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gr(n,LN)),t.join("")};function Dn(t){return new ks(t)}function za(t,e,n){t.j=n?pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tg(t,e,n){e instanceof Zr?(t.i=e,VN(t.i,t.h)):(n||(e=gr(e,MN)),t.i=new Zr(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function zl(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ON),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ON(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ig=/[#\/\?@]/g,DN=/[#\?:]/g,xN=/[#\?]/g,MN=/[#\?@]/g,LN=/#/g;function Zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ds(t){t.g||(t.g=new Map,t.h=0,t.i&&NN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Zr.prototype;M.add=function(t,e){ds(this),this.i=null,t=Gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function SE(t,e){ds(t),e=Gi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bE(t,e){return ds(t),e=Gi(t,e),t.g.has(e)}M.forEach=function(t,e){ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){ds(this);let e=[];if(typeof t=="string")bE(this,t)&&(e=e.concat(this.g.get(Gi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ds(this),this.i=null,t=Gi(this,t),bE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function PE(t,e,n){SE(t,e),0<n.length&&(t.i=null,t.g.set(Gi(t,e),Td(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VN(t,e){e&&!t.j&&(ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(SE(this,s),PE(this,i,n))},t)),t.j=e}var FN=class{constructor(t,e){this.g=t,this.map=e}};function kE(t){this.l=t||UN,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UN=10;function NE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function OE(t){return t.h?1:t.g?t.g.size:0}function Gu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Md(t,e){t.g?t.g.add(e):t.h=e}function DE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kE.prototype.cancel=function(){if(this.i=xE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Td(t.i)}var BN=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function $N(){this.g=new BN}function jN(t,e,n){const s=n||"";try{AE(t,function(i,r){let o=i;To(i)&&(o=bd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function WN(t,e){const n=new jl;if(G.Image){const s=new Image;s.onload=Yo(Jo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yo(Jo,n,s,"TestLoadImage: error",!1,e),s.onabort=Yo(Jo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yo(Jo,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Jo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function So(t){this.l=t.fc||null,this.j=t.ob||!1}Ke(So,Od);So.prototype.g=function(){return new Gl(this.l,this.j)};So.prototype.i=function(t){return function(){return t}}({});function Gl(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ld,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Gl,qe);var Ld=0;M=Gl.prototype;M.open=function(t,e){if(this.readyState!=Ld)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=Ld};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ME(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ME(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bo(this):eo(this),this.readyState==3&&ME(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,bo(this))};M.Ya=function(t){this.g&&(this.response=t,bo(this))};M.ka=function(){this.g&&bo(this)};function bo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var HN=G.JSON.parse;function Ne(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=LE,this.L=this.M=!1}Ke(Ne,qe);var LE="",qN=/^https?$/i,KN=["POST","PUT"];M=Ne.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hu.g(),this.C=this.u?Eg(this.u):Eg(Hu),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){wg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=Zv(KN,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{UE(this),0<this.B&&((this.L=zN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Nd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wg(this,r)}};function zN(t){return Si&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Ed<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,VE(t),Ql(t)}function VE(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Ql(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ql(this,!0)),Ne.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?FE(this):this.kb())};M.kb=function(){FE(this)};function FE(t){if(t.h&&typeof Ed<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)Nd(t.La,0,t);else if(Ze(t,"readystatechange"),an(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(CE)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),s=!qN.test(i?i.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var r=2<an(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",VE(t)}}finally{Ql(t)}}}}function Ql(t,e){if(t.g){UE(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function UE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function an(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),HN(e)}};function Rg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case LE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function GN(t){const e={};t=(t.g&&2<=an(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(zr(t[s]))continue;var n=vN(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}dN(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function BE(t){let e="";return wd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Vd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=BE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function ar(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $E(t){this.Ga=0,this.j=[],this.l=new jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ar("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ar("baseRetryDelayMs",5e3,t),this.hb=ar("retryDelaySeedMs",1e4,t),this.eb=ar("forwardChannelMaxRetries",2,t),this.xa=ar("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kE(t&&t.concurrentRequestLimit),this.Ja=new $N,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=$E.prototype;M.ra=8;M.H=1;function Fd(t){if(jE(t),t.H==3){var e=t.W++,n=Dn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Po(t,n),e=new Ao(t,t.l,e),e.L=2,e.v=zl(Dn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=YE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Co(e)}GE(t)}function Yl(t){t.g&&(Bd(t),t.g.cancel(),t.g=null)}function jE(t){Yl(t),t.u&&(G.clearTimeout(t.u),t.u=null),Qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Xl(t){if(!NE(t.i)&&!t.m){t.m=!0;var e=t.Na;Qr||hE(),Yr||(Qr(),Yr=!0),Pd.add(e,t),t.C=0}}function QN(t,e){return OE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wo(ut(t.Na,t,e),zE(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ao(this,this.l,t);let r=this.s;if(this.U&&(r?(r=sE(r),iE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=WE(this,i,e),n=Dn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Po(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(BE(r)))+"&"+e:this.o&&Vd(n,this.o,r)),Md(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,Ku(i,n,null)):Ku(i,n,e),this.H=2}}else this.H==3&&(t?Ag(this,t):this.j.length==0||NE(this.i)||Ag(this))};function Ag(t,e){var n;e?n=e.m:n=t.W++;const s=Dn(t.I);Ce(s,"SID",t.K),Ce(s,"RID",n),Ce(s,"AID",t.V),Po(t,s),t.o&&t.s&&Vd(s,t.o,t.s),n=new Ao(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=WE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Md(t.i,n),Ku(n,s,e)}function Po(t,e){t.na&&wd(t.na,function(n,s){Ce(e,s,n)}),t.h&&AE({},function(n,s){Ce(e,s,n)})}function WE(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ut(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{jN(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function HE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qr||hE(),Yr||(Qr(),Yr=!0),Pd.add(e,t),t.A=0}}function Ud(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wo(ut(t.Ma,t),zE(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,qE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wo(ut(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),Yl(this),qE(this))};function Bd(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function qE(t){t.g=new Ao(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),Po(t,e),t.o&&t.s&&Vd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zl(Dn(e)),n.s=null,n.S=!0,TE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Yl(this),Ud(this),mt(19))};function Qa(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function KE(t,e){var n=null;if(t.g==e){Qa(t),Bd(t),t.g=null;var s=2}else if(Gu(t.i,e))n=e.F,DE(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Wl(),Ze(s,new _E(s,n)),Xl(t)}else HE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&QN(t,e)||s==2&&Ud(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Rs(t,5);break;case 4:Rs(t,10);break;case 3:Rs(t,6);break;default:Rs(t,2)}}}function zE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Rs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ut(t.pb,t);n||(n=new ks("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||za(n,"https"),zl(n)),WN(n.toString(),s)}else mt(2);t.H=0,t.h&&t.h.za(e),GE(t),jE(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function GE(t){if(t.H=0,t.ma=[],t.h){const e=xE(t.i);(e.length!=0||t.j.length!=0)&&(gg(t.ma,e),gg(t.ma,t.j),t.i.i.length=0,Td(t.j),t.j.length=0),t.h.ya()}}function QE(t,e,n){var s=n instanceof ks?Dn(n):new ks(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=G.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ks(null);s&&za(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ra),Po(t,s),s}function YE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new So({ob:!0})):new Ne(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function XE(){}M=XE.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Ya(){if(Si&&!(10<=Number(lN)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){qe.call(this),this.g=new $E(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qi(this)}Ke(Pt,qe);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=QE(t,null,t.Y),Xl(t)};Pt.prototype.close=function(){Fd(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bd(t),t=n);e.j.push(new FN(e.fb++,t)),e.H==3&&Xl(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,Fd(this.g),delete this.g,Pt.$.N.call(this)};function JE(t){Dd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(JE,Dd);function ZE(){xd.call(this),this.status=1}Ke(ZE,xd);function Qi(t){this.g=t}Ke(Qi,XE);Qi.prototype.Ba=function(){Ze(this.g,"a")};Qi.prototype.Aa=function(t){Ze(this.g,new JE(t))};Qi.prototype.za=function(t){Ze(this.g,new ZE)};Qi.prototype.ya=function(){Ze(this.g,"b")};function YN(){this.blockSize=-1}function Gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Gt,YN);Gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)jc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){jc(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){jc(this,s),i=0;break}}this.h=i,this.i+=e};Gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ge(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var XN={};function $d(t){return-128<=t&&128>t?rN(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function ln(t){if(isNaN(t)||!isFinite(t))return mi;if(0>t)return Qe(ln(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Qu;return new ge(e,0)}function eT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(eT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(e,8)),s=mi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=ln(Math.pow(e,r)),s=s.R(r).add(ln(o))):(s=s.R(n),s=s.add(ln(o)))}return s}var Qu=4294967296,mi=$d(0),Yu=$d(1),Cg=$d(16777216);M=ge.prototype;M.ea=function(){if(kt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Qu+s)*e,e*=Qu}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(kt(this))return"-"+Qe(this).toString(t);for(var e=ln(Math.pow(t,6)),n=this,s="";;){var i=Ja(n,e).g;n=Xa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Sn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}M.X=function(t){return t=Xa(this,t),kt(t)?-1:Sn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ge(n,~t.h).add(Yu)}M.abs=function(){return kt(this)?Qe(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Xa(t,e){return t.add(Qe(e))}M.R=function(t){if(Sn(this)||Sn(t))return mi;if(kt(this))return kt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(kt(t))return Qe(this.R(Qe(t)));if(0>this.X(Cg)&&0>t.X(Cg))return ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Zo(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Zo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Zo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Zo(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ge(n,0)};function Zo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function lr(t,e){this.g=t,this.h=e}function Ja(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new lr(mi,mi);if(kt(t))return e=Ja(Qe(t),e),new lr(Qe(e.g),Qe(e.h));if(kt(e))return e=Ja(t,Qe(e)),new lr(Qe(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yu,s=e;0>=s.X(t);)n=Sg(n),s=Sg(s);var i=Zs(n,1),r=Zs(s,1);for(s=Zs(s,2),n=Zs(n,2);!Sn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Zs(s,1),n=Zs(n,1)}return e=Xa(t,i.R(e)),new lr(i,e)}for(i=mi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=ln(n),o=r.R(e);kt(o)||0<o.X(t);)n-=s,r=ln(n),o=r.R(e);Sn(r)&&(r=Yu),i=i.add(r),t=Xa(t,o)}return new lr(i,t)}M.gb=function(t){return Ja(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ge(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ge(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ge(n,this.h^t.h)};function Sg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ge(n,t.h)}function Zs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ge(i,t.h)}Ya.prototype.createWebChannel=Ya.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Hl.NO_ERROR=0;Hl.TIMEOUT=8;Hl.HTTP_ERROR=6;yE.COMPLETE="complete";vE.EventType=Ro;Ro.OPEN="a";Ro.CLOSE="b";Ro.ERROR="c";Ro.MESSAGE="d";qe.prototype.listen=qe.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Gt.prototype.digest=Gt.prototype.l;Gt.prototype.reset=Gt.prototype.reset;Gt.prototype.update=Gt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=ln;ge.fromString=eT;var JN=function(){return new Ya},ZN=function(){return Wl()},Wc=Hl,eO=yE,tO=Hs,bg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nO=So,ea=vE,sO=Ne,iO=Gt,_i=ge;const Pg="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Yi="10.1.0";/**
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
 */const Vs=new co("@firebase/firestore");function kg(){return Vs.logLevel}function U(t,...e){if(Vs.logLevel<=le.DEBUG){const n=e.map(jd);Vs.debug(`Firestore (${Yi}): ${t}`,...n)}}function xn(t,...e){if(Vs.logLevel<=le.ERROR){const n=e.map(jd);Vs.error(`Firestore (${Yi}): ${t}`,...n)}}function bi(t,...e){if(Vs.logLevel<=le.WARN){const n=e.map(jd);Vs.warn(`Firestore (${Yi}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function Se(t,e){t||z()}function Z(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class oO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aO{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new tT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new nt(e)}}class lO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new lO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new uO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class nT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=dO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}static max(){return new X(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class to{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends to{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends to{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new $(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new $(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Pe.fromString(e))}static fromName(e){return new H(Pe.fromString(e).popFirst(5))}static empty(){return new H(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Pe(e.slice()))}}function pO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new as(i,H.empty(),e)}function gO(t){return new as(t.readTime,t.key,-1)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(X.min(),H.empty(),-1)}static max(){return new as(X.max(),H.empty(),-1)}}function mO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const _O="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ko(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==_O)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(i=>i?P.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new P((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new P((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function No(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wd.ae=-1;function Jl(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function vO(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ng(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??Ge.EMPTY,this.right=r??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Og(this.data.getIterator())}getIteratorFrom(e){return new Og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new dt(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class iT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new iT("Invalid base64 string: "+r):r}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const EO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(Se(!!t),typeof t=="string"){let e=0;const n=EO.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Hd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qd(t){const e=t.mapValue.fields.__previous_value__;return Hd(e)?qd(e):e}function no(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class TO{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hd(t)?4:IO(t)?9007199254740991:10:z()}function mn(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ls(i.timestampValue),a=ls(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Fs(i.bytesValue).isEqual(Fs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return xe(i.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return xe(i.integerValue)===xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=xe(i.doubleValue),a=xe(r.doubleValue);return o===a?Za(o)===Za(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Ng(o)!==Ng(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!mn(o[l],a[l])))return!1;return!0}(t,e);default:return z()}}function io(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Us(t),s=Us(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=xe(r.integerValue||r.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Dg(t.timestampValue,e.timestampValue);case 4:return Dg(no(t),no(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Fs(r),l=Fs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ce(a[c],l[c]);if(u!==0)return u}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ce(xe(r.latitude),xe(o.latitude));return a!==0?a:ce(xe(r.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ki(a[c],l[c]);if(u)return u}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===na.mapValue&&o===na.mapValue)return 0;if(r===na.mapValue)return 1;if(o===na.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ce(l[h],u[h]);if(d!==0)return d;const f=ki(a[l[h]],c[u[h]]);if(f!==0)return f}return ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Dg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ls(t),s=ls(e),i=ce(n.seconds,s.seconds);return i!==0?i:ce(n.nanos,s.nanos)}function Ni(t){return Xu(t)}function Xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ls(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Xu(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Xu(n.fields[o])}`;return i+"}"}(t.mapValue):z()}function Ju(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Mg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ma(t){return!!t&&"mapValue"in t}function Sr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Sr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(n)}setAll(e){let n=lt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Sr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Xi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Nt(Sr(this.value))}}function rT(t){const e=[];return Xi(t.fields,(n,s)=>{const i=new lt([n]);if(ma(s)){const r=rT(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
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
 */class ot{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,X.min(),X.min(),X.min(),Nt.empty(),0)}static newFoundDocument(e,n,s,i){return new ot(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new ot(e,2,n,X.min(),X.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,X.min(),X.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function Lg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=ki(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class br{constructor(e,n="asc"){this.field=e,this.dir=n}}function wO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class oT{}class Ve extends oT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new AO(e,n,s):n==="array-contains"?new bO(e,s):n==="in"?new PO(e,s):n==="not-in"?new kO(e,s):n==="array-contains-any"?new NO(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new CO(e,s):new SO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _n extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new _n(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function aT(t){return t.op==="and"}function lT(t){return RO(t)&&aT(t)}function RO(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Zu(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(lT(t))return t.filters.map(e=>Zu(e)).join(",");{const e=t.filters.map(n=>Zu(n)).join(",");return`${t.op}(${e})`}}function cT(t,e){return t instanceof Ve?function(s,i){return i instanceof Ve&&s.op===i.op&&s.field.isEqual(i.field)&&mn(s.value,i.value)}(t,e):t instanceof _n?function(s,i){return i instanceof _n&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&cT(o,i.filters[a]),!0):!1}(t,e):void z()}function uT(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(uT).join(" ,")+"}"}(t):"Filter"}class AO extends Ve{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class CO extends Ve{constructor(e,n){super(e,"in",n),this.keys=hT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SO extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=hT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class bO extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&io(n.arrayValue,this.value)}}class PO extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class kO extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class NO extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>io(this.value.arrayValue,s))}}/**
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
 */class OO{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Fg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new OO(t,e,n,s,i,r,o)}function zd(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Zu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),e.he=n}return e.he}function Gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vg(t.startAt,e.startAt)&&Vg(t.endAt,e.endAt)}function eh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function DO(t,e,n,s,i,r,o,a){return new Zl(t,e,n,s,i,r,o,a)}function ec(t){return new Zl(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function MO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LO(t){return t.collectionGroup!==null}function yi(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=MO(e),s=xO(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new br(n)),e.Pe.push(new br(lt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new br(lt.keyField(),r))}}}return e.Pe}function Mn(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Fg(e.path,e.collectionGroup,yi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of yi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new br(r.field,o))}const s=e.endAt?new el(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new el(e.startAt.position,e.startAt.inclusive):null;e.Ie=Fg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function th(t,e,n){return new Zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Gd(Mn(t),Mn(e))&&t.limitType===e.limitType}function dT(t){return`${zd(Mn(t))}|lt:${t.limitType}`}function nh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>uT(i)).join(", ")}]`),Jl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ni(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ni(i)).join(",")),`Target(${s})`}(Mn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):H.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of yi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Lg(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,yi(s),i)||s.endAt&&!function(o,a,l){const c=Lg(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,yi(s),i))}(t,e)}function VO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let s=!1;for(const i of yi(t)){const r=FO(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function FO(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?ki(l,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
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
 */class Ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sT(this.inner)}size(){return this.innerSize}}/**
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
 */const UO=new ke(H.comparator);function Ln(){return UO}const pT=new ke(H.comparator);function mr(...t){let e=pT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=pT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function As(){return Pr()}function mT(){return Pr()}function Pr(){return new Ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const BO=new ke(H.comparator),$O=new dt(H.comparator);function ne(...t){let e=$O;for(const n of t)e=e.add(n);return e}const jO=new dt(ce);function WO(){return jO}/**
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
 */function _T(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function yT(t){return{integerValue:""+t}}function HO(t,e){return vO(e)?yT(e):_T(t,e)}/**
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
 */class sc{constructor(){this._=void 0}}function qO(t,e,n){return t instanceof tl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Hd(r)&&(r=qd(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Oi?ET(t,e):t instanceof ro?TT(t,e):function(i,r){const o=vT(i,r),a=Bg(o)+Bg(i.Te);return Ju(o)&&Ju(i.Te)?yT(a):_T(i.serializer,a)}(t,e)}function KO(t,e,n){return t instanceof Oi?ET(t,e):t instanceof ro?TT(t,e):n}function vT(t,e){return t instanceof nl?function(s){return Ju(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class tl extends sc{}class Oi extends sc{constructor(e){super(),this.elements=e}}function ET(t,e){const n=IT(e);for(const s of t.elements)n.some(i=>mn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ro extends sc{constructor(e){super(),this.elements=e}}function TT(t,e){let n=IT(e);for(const s of t.elements)n=n.filter(i=>!mn(i,s));return{arrayValue:{values:n}}}class nl extends sc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Bg(t){return xe(t.integerValue||t.doubleValue)}function IT(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class zO{constructor(e,n){this.field=e,this.transform=n}}function GO(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Oi&&i instanceof Oi||s instanceof ro&&i instanceof ro?Pi(s.elements,i.elements,mn):s instanceof nl&&i instanceof nl?mn(s.Te,i.Te):s instanceof tl&&i instanceof tl}(t.transform,e.transform)}class QO{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function wT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AT(t.key,kn.none()):new Oo(t.key,t.data,kn.none());{const n=t.data,s=Nt.empty();let i=new dt(lt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new qs(t.key,s,new $t(i.toArray()),kn.none())}}function YO(t,e,n){t instanceof Oo?function(i,r,o){const a=i.value.clone(),l=jg(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof qs?function(i,r,o){if(!_a(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=jg(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(RT(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function kr(t,e,n,s){return t instanceof Oo?function(r,o,a,l){if(!_a(r.precondition,o))return a;const c=r.value.clone(),u=Wg(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof qs?function(r,o,a,l){if(!_a(r.precondition,o))return a;const c=Wg(r.fieldTransforms,l,o),u=o.data;return u.setAll(RT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return _a(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XO(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=vT(s.transform,i||null);r!=null&&(n===null&&(n=Nt.empty()),n.set(s.field,r))}return n||null}function $g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Pi(s,i,(r,o)=>GO(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends ic{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qs extends ic{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jg(t,e,n){const s=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,KO(o,a,n[i]))}return s}function Wg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,qO(r,o,e))}return s}class AT extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&YO(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=wT(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,s)=>$g(n,s))&&Pi(this.baseMutations,e.baseMutations,(n,s)=>$g(n,s))}}class Qd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Se(e.mutations.length===s.length);let i=function(){return BO}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Qd(e,n,s,i)}}/**
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
 */class eD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,ie;function nD(t){switch(t){default:return z();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function CT(t){if(t===void 0)return xn("GRPC error has no .code"),A.UNKNOWN;switch(t){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return z()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sa}static getOrCreateInstance(){return sa===null&&(sa=new Yd),sa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let sa=null;/**
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
 */function sD(){return new TextEncoder}/**
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
 */const iD=new _i([4294967295,4294967295],0);function Hg(t){const e=sD().encode(t),n=new iO;return n.update(e),new Uint8Array(n.digest())}function qg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new _i([n,s],0),new _i([i,r],0)]}class Xd{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _r(`Invalid padding: ${n}`);if(s<0)throw new _r(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new _r(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=_i.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(_i.fromNumber(s)));return i.compare(iD)===1&&(i=new _i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Hg(e),[s,i]=qg(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Xd(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Hg(e),[s,i]=qg(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rc(X.min(),i,new ke(ce),Ln(),ne())}}class Do{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Do(s,n,ne(),ne(),ne())}}/**
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
 */class ya{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class ST{constructor(e,n){this.targetId=e,this.pe=n}}class bT{constructor(e,n,s=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Kg{constructor(){this.ye=0,this.we=Gg(),this.Se=pt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ne(),n=ne(),s=ne();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:z()}}),new Do(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=Gg()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class rD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Ln(),this.$e=zg(),this.Ue=new ke(ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(eh(a))if(r===0){const l=new H(a.path);this.ze(i,l,ot.newNoDocument(l,X.min()))}else Se(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Yd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var y,v,I,b,k,R;const Q={localCacheCount:f,existenceFilterCount:m.count},K=m.unchangedNames;return K&&(Q.bloomFilter={applied:h===0,hashCount:(y=K==null?void 0:K.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(I=(v=K==null?void 0:K.bits)===null||v===void 0?void 0:v.bitmap)===null||I===void 0?void 0:I.length)!==null&&b!==void 0?b:0,padding:(R=(k=K==null?void 0:K.bits)===null||k===void 0?void 0:k.padding)!==null&&R!==void 0?R:0},d&&(Q.bloomFilter.mightContain=d)),Q}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Fs(r).toUint8Array()}catch(h){if(h instanceof iT)return bi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Xd(l,o,a)}catch(h){return bi(h instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&eh(a.target)){const l=new H(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,ot.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=ne();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new rc(e,n,this.Ue,this.Ke,s);return this.Ke=Ln(),this.$e=zg(),this.Ue=new ke(ce),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Kg,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new dt(ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Kg),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function zg(){return new ke(H.comparator)}function Gg(){return new ke(H.comparator)}const oD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lD=(()=>({and:"AND",or:"OR"}))();class cD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sh(t,e){return t.useProto3Json||Jl(e)?e:{value:e}}function sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uD(t,e){return sl(t,e.toTimestamp())}function hn(t){return Se(!!t),X.fromTimestamp(function(n){const s=ls(n);return new Me(s.seconds,s.nanos)}(t))}function Jd(t,e){return function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function kT(t){const e=Pe.fromString(t);return Se(xT(e)),e}function ih(t,e){return Jd(t.databaseId,e.path)}function Hc(t,e){const n=kT(e);if(n.get(1)!==t.databaseId.projectId)throw new $(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(NT(n))}function rh(t,e){return Jd(t.databaseId,e)}function hD(t){const e=kT(t);return e.length===4?Pe.emptyPath():NT(e)}function oh(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NT(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qg(t,e,n){return{name:ih(t,e),fields:n.value.mapValue.fields}}function dD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Se(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:CT(c.code);return new $(u,c.message||"")}(o);n=new bT(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Hc(t,s.document.name),r=hn(s.document.updateTime),o=s.document.createTime?hn(s.document.createTime):X.min(),a=new Nt({mapValue:{fields:s.document.fields}}),l=ot.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ya(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Hc(t,s.document),r=s.readTime?hn(s.readTime):X.min(),o=ot.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Hc(t,s.document),r=s.removedTargetIds||[];n=new ya([],r,i,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new tD(i,r),a=s.targetId;n=new ST(a,o)}}return n}function fD(t,e){let n;if(e instanceof Oo)n={update:Qg(t,e.key,e.value)};else if(e instanceof AT)n={delete:ih(t,e.key)};else if(e instanceof qs)n={update:Qg(t,e.key,e.data),updateMask:ID(e.fieldMask)};else{if(!(e instanceof JO))return z();n={verify:ih(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:uD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function pD(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?hn(i.updateTime):hn(r);return o.isEqual(X.min())&&(o=hn(r)),new QO(o,i.transformResults||[])}(n,e))):[]}function gD(t,e){return{documents:[rh(t,e.path)]}}function mD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=rh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return DT(_n.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ti(h.field),direction:vD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=sh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _D(t){let e=hD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=OT(h);return d instanceof _n&&lT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new br(ni(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Jl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new el(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new el(f,d)}(n.endAt)),DO(e,i,o,r,a,"F",l,c)}function yD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ni(n.unaryFilter.field);return Ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ni(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ni(n.unaryFilter.field);return Ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(s=>OT(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function vD(t){return oD[t]}function ED(t){return aD[t]}function TD(t){return lD[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ni(t){return lt.fromServerFormat(t.fieldPath)}function DT(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Mg(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NAN"}};if(xg(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mg(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NOT_NAN"}};if(xg(n.value))return{unaryFilter:{field:ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(n.field),op:ED(n.op),value:n.value}}}(t):t instanceof _n?function(n){const s=n.getFilters().map(i=>DT(i));return s.length===1?s[0]:{compositeFilter:{op:TD(n.op),filters:s}}}(t):z()}function ID(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yn{constructor(e,n,s,i,r=X.min(),o=X.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wD{constructor(e){this.ct=e}}function RD(t){const e=_D({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
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
 */class AD{constructor(){this.sn=new CD}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(as.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class CD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new dt(Pe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new dt(Pe.comparator)).toArray()}}/**
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
 */class Di{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Di(0)}static On(){return new Di(-1)}}/**
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
 */class SD{constructor(){this.changes=new Ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PD{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&kr(s.mutation,i,$t.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const i=As();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=mr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ln();const o=Pr(),a=function(){return Pr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof qs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),kr(u.mutation,c,u.mutation.getFieldMask(),Me.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Pr();let i=new ke((o,a)=>o-a),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||$t.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=mT();u.forEach(d=>{if(!r.has(d)){const f=wT(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):P.resolve(As());let a=-1,l=r;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ne())).next(u=>({batchId:a,changes:gT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let i=mr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=mr();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(u,h){return new Zl(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ot.newInvalidDocument(c)))});let o=mr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&kr(c.mutation,l,$t.empty(),Me.now()),nc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class kD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:RD(i.bundledQuery),readTime:hn(i.readTime)}}(n)),P.resolve()}}/**
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
 */class ND{constructor(){this.overlays=new ke(H.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=As();return P.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const i=As(),r=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=As(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=As(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new eD(n,s));let r=this.cr.get(n);r===void 0&&(r=ne(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
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
 */class Zd{constructor(){this.lr=new dt($e.hr),this.Pr=new dt($e.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new $e(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new $e(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new H(new Pe([])),s=new $e(n,e),i=new $e(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new H(new Pe([])),s=new $e(n,e),i=new $e(n,e+1);let r=ne();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new $e(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return H.comparator(e.key,n.key)||ce(e.mr,n.mr)}static Ir(e,n){return ce(e.mr,n.mr)||H.comparator(e.key,n.key)}}/**
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
 */class OD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new dt($e.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new $e(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new dt(ce);return n.forEach(i=>{const r=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),P.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;H.isDocumentKey(r)||(r=r.child(""));const o=new $e(new H(r),0);let a=new dt(ce);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return P.forEach(n.mutations,i=>{const r=new $e(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new $e(n,0),i=this.pr.firstAfterOrEqual(s);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DD{constructor(e){this.Dr=e,this.docs=function(){return new ke(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let s=Ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ot.newInvalidDocument(i))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ln();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mO(gO(u),s)<=0||(i.has(u.key)||nc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,i){z()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xD(this)}getSize(e){return P.resolve(this.size)}}class xD extends SD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class MD{constructor(e){this.persistence=e,this.Cr=new Ji(n=>zd(n),Gd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Zd,this.targetCount=0,this.Or=Di.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(r).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
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
 */class LD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Wd(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new MD(this),this.indexManager=new AD,this.remoteDocumentCache=function(i){return new DD(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new wD(n),this.Qr=new kD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ND,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new OD(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const i=new VD(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return P.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class VD extends yO{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Wr=new Zd,this.Gr=null}static zr(e){return new ef(e)}get jr(){if(this.Gr)return this.Gr;throw z()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,s=>{const i=H.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class tf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=ne(),i=ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new tf(e,n.fromCache,s,i)}}/**
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
 */class FD{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(Ug(n))return P.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=th(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ne(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,th(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return Ug(n)||i.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(kg()<=le.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nh(n)),this.ji(e,o,n,pO(i,-1)))})}Gi(e,n){let s=new dt(fT(e));return n.forEach((i,r)=>{nc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return kg()<=le.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",nh(n)),this.Ki.getDocumentsMatchingQuery(e,n,as.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class UD{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ke(ce),this.Yi=new Ji(r=>zd(r),Gd),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function BD(t,e,n,s){return new UD(t,e,n,s)}async function MT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ne();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function $D(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=P.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(y=>{const v=c.docVersions.get(m);Se(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function LT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function jD(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Ln(),c=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(WD(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function WD(t,e,n){let s=ne(),i=ne();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ln();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function HD(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function qD(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,P.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new Yn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function ah(t,e,n){const s=Z(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!No(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Yg(t,e,n){const s=Z(t);let i=X.min(),r=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=Z(l),d=h.Yi.get(u);return d!==void 0?P.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:ne())).next(a=>(KD(s,VO(e),a),{documents:a,ss:r})))}function KD(t,e,n){let s=t.Zi.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class Xg{constructor(){this.activeTargetIds=WO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zD{constructor(){this.Hs=new Xg,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Xg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GD{Ys(e){}shutdown(){}}/**
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
 */class Jg{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ia=null;function qc(){return ia===null?ia=function(){return 268435456+Math.round(2147483648*Math.random())}():ia++,"0x"+ia.toString(16)}/**
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
 */const QD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const tt="WebChannelConnection";class XD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=qc(),l=this.mo(n,s);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw bi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=QD[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=qc();return new Promise((o,a)=>{const l=new sO;l.setWithCredentials(!0),l.listenOnce(eO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wc.NO_ERROR:const u=l.getResponseJson();U(tt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Wc.TIMEOUT:U(tt,`RPC '${e}' ${r} timed out`),a(new $(A.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const h=l.getStatus();if(U(tt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(I)>=0?I:A.UNKNOWN}(f.status);a(new $(m,f.message))}else a(new $(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(A.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(tt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);U(tt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=qc(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JN(),a=ZN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new nO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");U(tt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new YD({so:v=>{f?U(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(U(tt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),U(tt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,I,b)=>{v.listen(I,k=>{try{b(k)}catch(R){setTimeout(()=>{throw R},0)}})};return y(h,ea.EventType.OPEN,()=>{f||U(tt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,ea.EventType.CLOSE,()=>{f||(f=!0,U(tt,`RPC '${e}' stream ${i} transport closed`),m.Po())}),y(h,ea.EventType.ERROR,v=>{f||(f=!0,bi(tt,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new $(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,ea.EventType.MESSAGE,v=>{var I;if(!f){const b=v.data[0];Se(!!b);const k=b,R=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(R){U(tt,`RPC '${e}' stream ${i} received error:`,R);const Q=R.status;let K=function(_t){const ze=De[_t];if(ze!==void 0)return CT(ze)}(Q),ye=R.message;K===void 0&&(K=A.INTERNAL,ye="Unknown error status: "+Q+" with message "+R.message),f=!0,m.Po(new $(K,ye)),h.close()}else U(tt,`RPC '${e}' stream ${i} received:`,b),m.Io(b)}}),y(a,tO.STAT_EVENT,v=>{v.stat===bg.PROXY?U(tt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===bg.NOPROXY&&U(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Kc(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new cD(t,!0)}/**
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
 */class VT{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class FT{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new VT(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new $(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JD extends FT{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=dD(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?hn(o.readTime):X.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=oh(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=eh(l)?{documents:gD(r,l)}:{query:mD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=PT(r,o.resumeToken);const c=sh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=sl(r,o.snapshotVersion.toTimestamp());const c=sh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=yD(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=oh(this.serializer),n.removeTarget=e,this.Ho(n)}}class ZD extends FT{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=pD(e.writeResults,e.commitTime),s=hn(e.commitTime);return this.listener.u_(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=oh(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>fD(this.serializer,s))};this.Ho(n)}}/**
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
 */class e1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new $(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(A.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(A.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class t1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(xn(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class n1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{Ks(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Z(l);c.y_.add(4),await xo(c),c.b_.set("Unknown"),c.y_.delete(4),await ac(c)}(this))})}),this.b_=new t1(s,i)}}async function ac(t){if(Ks(t))for(const e of t.w_)await e(!0)}async function xo(t){for(const e of t.w_)await e(!1)}function UT(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),rf(n)?sf(n):Zi(n).Uo()&&nf(n,e))}function BT(t,e){const n=Z(t),s=Zi(n);n.p_.delete(e),s.Uo()&&$T(n,e),n.p_.size===0&&(s.Uo()?s.zo():Ks(n)&&n.b_.set("Unknown"))}function nf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zi(t).i_(e)}function $T(t,e){t.D_.Be(e),Zi(t).s_(e)}function sf(t){t.D_=new rD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Zi(t).start(),t.b_.A_()}function rf(t){return Ks(t)&&!Zi(t).$o()&&t.p_.size>0}function Ks(t){return Z(t).y_.size===0}function jT(t){t.D_=void 0}async function s1(t){t.p_.forEach((e,n)=>{nf(t,e)})}async function i1(t,e){jT(t),rf(t)?(t.b_.m_(e),sf(t)):t.b_.set("Unknown")}async function r1(t,e,n){if(t.b_.set("Online"),e instanceof bT&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await il(t,s)}else if(e instanceof ya?t.D_.We(e):e instanceof ST?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const s=await LT(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),$T(r,l);const h=new Yn(u.target,l,c,u.sequenceNumber);nf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await il(t,s)}}async function il(t,e,n){if(!No(e))throw e;t.y_.add(1),await xo(t),t.b_.set("Offline"),n||(n=()=>LT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await ac(t)})}function WT(t,e){return e().catch(n=>il(t,n,e))}async function lc(t){const e=Z(t),n=cs(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;o1(e);)try{const i=await HD(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,a1(e,i)}catch(i){await il(e,i)}HT(e)&&qT(e)}function o1(t){return Ks(t)&&t.g_.length<10}function a1(t,e){t.g_.push(e);const n=cs(t);n.Uo()&&n.__&&n.a_(e.mutations)}function HT(t){return Ks(t)&&!cs(t).$o()&&t.g_.length>0}function qT(t){cs(t).start()}async function l1(t){cs(t).l_()}async function c1(t){const e=cs(t);for(const n of t.g_)e.a_(n.mutations)}async function u1(t,e,n){const s=t.g_.shift(),i=Qd.from(s,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lc(t)}async function h1(t,e){e&&cs(t).__&&await async function(s,i){if(function(o){return nD(o)&&o!==A.ABORTED}(i.code)){const r=s.g_.shift();cs(s).Go(),await WT(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await lc(s)}}(t,e),HT(t)&&qT(t)}async function Zg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Ks(n);n.y_.add(3),await xo(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await ac(n)}async function d1(t,e){const n=Z(t);e?(n.y_.delete(2),await ac(n)):e||(n.y_.add(2),await xo(n),n.b_.set("Unknown"))}function Zi(t){return t.v_||(t.v_=function(n,s,i){const r=Z(n);return r.P_(),new JD(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:s1.bind(null,t),uo:i1.bind(null,t),r_:r1.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),rf(t)?sf(t):t.b_.set("Unknown")):(await t.v_.stop(),jT(t))})),t.v_}function cs(t){return t.C_||(t.C_=function(n,s,i){const r=Z(n);return r.P_(),new ZD(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:l1.bind(null,t),uo:h1.bind(null,t),c_:c1.bind(null,t),u_:u1.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await lc(t)):(await t.C_.stop(),t.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class of{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new of(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function af(t,e){if(xn("AsyncQueue",`${e}: ${t}`),No(t))return new $(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=mr(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new vi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class em{constructor(){this.F_=new ke(H.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):z():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class xi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xi(e,n,vi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class f1{constructor(){this.x_=void 0,this.listeners=[]}}class p1{constructor(){this.queries=new Ji(e=>dT(e),tc),this.onlineState="Unknown",this.O_=new Set}}async function lf(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new f1),i)try{r.x_=await n.onListen(s)}catch(o){const a=af(o,`Initialization of query '${nh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&uf(n)}async function cf(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function g1(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&uf(n)}function m1(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function uf(t){t.O_.forEach(e=>{e.next()})}class hf{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new xi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class KT{constructor(e){this.key=e}}class zT{constructor(e){this.key=e}}class _1{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ne(),this.mutatedKeys=ne(),this.na=fT(e),this.ra=new vi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new em,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=nc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new xi(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new em,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ne(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new zT(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new KT(s))}),n}ha(e){this.X_=e.ss,this.ta=ne();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return xi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class y1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class v1{constructor(e){this.key=e,this.Ia=!1}}class E1{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Ji(a=>dT(a),tc),this.da=new Map,this.Aa=new Set,this.Ra=new ke(H.comparator),this.Va=new Map,this.ma=new Zd,this.fa={},this.ga=new Map,this.pa=Di.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function T1(t,e){const n=N1(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await qD(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await I1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&UT(n.remoteStore,o)}return i}async function I1(t,e,n,s,i){t.wa=(h,d,f)=>async function(y,v,I,b){let k=v.view.sa(I);k.zi&&(k=await Yg(y.localStore,v.query,!1).then(({documents:K})=>v.view.sa(K,k)));const R=b&&b.targetChanges.get(v.targetId),Q=v.view.applyChanges(k,y.isPrimaryClient,R);return nm(y,v.targetId,Q.ca),Q.snapshot}(t,h,d,f);const r=await Yg(t.localStore,e,!0),o=new _1(e,r.ss),a=o.sa(r.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);nm(t,n,c.ca);const u=new y1(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function w1(t,e){const n=Z(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!tc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ah(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),BT(n.remoteStore,s.targetId),lh(n,s.targetId)}).catch(ko)):(lh(n,s.targetId),await ah(n.localStore,s.targetId,!0))}async function R1(t,e,n){const s=O1(t);try{const i=await function(o,a){const l=Z(o),c=Me.now(),u=a.reduce((f,m)=>f.add(m.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ln(),y=ne();return l.Xi.getEntries(f,u).next(v=>{m=v,m.forEach((I,b)=>{b.isValidDocument()||(y=y.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const I=[];for(const b of a){const k=XO(b,h.get(b.key).overlayedDocument);k!=null&&I.push(new qs(b.key,k,rT(k.value.mapValue),kn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,I,a)}).next(v=>{d=v;const I=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,I)})}).then(()=>({batchId:d.batchId,changes:gT(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new ke(ce)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await Mo(s,i.changes),await lc(s.remoteStore)}catch(i){const r=af(i,"Failed to persist write");n.reject(r)}}async function GT(t,e){const n=Z(t);try{const s=await jD(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Se(o.Ia):i.removedDocuments.size>0&&(Se(o.Ia),o.Ia=!1))}),await Mo(n,s,e)}catch(s){await ko(s)}}function tm(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&uf(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function A1(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new ke(H.comparator);o=o.insert(r,ot.newNoDocument(r,X.min()));const a=ne().add(r),l=new rc(X.min(),new Map,new ke(ce),o,a);await GT(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),df(s)}else await ah(s.localStore,e,!1).then(()=>lh(s,e,n)).catch(ko)}async function C1(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await $D(n.localStore,e);YT(n,s,null),QT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Mo(n,i)}catch(i){await ko(i)}}async function S1(t,e,n){const s=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Se(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);YT(s,e,n),QT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Mo(s,i)}catch(i){await ko(i)}}function QT(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function YT(t,e,n){const s=Z(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||XT(t,s)})}function XT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(BT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),df(t))}function nm(t,e,n){for(const s of n)s instanceof KT?(t.ma.addReference(s.key,e),b1(t,s)):s instanceof zT?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||XT(t,s.key)):z()}function b1(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(U("SyncEngine","New document in limbo: "+n),t.Aa.add(s),df(t))}function df(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new H(Pe.fromString(e)),s=t.pa.next();t.Va.set(s,new v1(n)),t.Ra=t.Ra.insert(n,s),UT(t.remoteStore,new Yn(Mn(ec(n.path)),s,"TargetPurposeLimboResolution",Wd.ae))}}async function Mo(t,e,n){const s=Z(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=tf.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=Z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!No(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(s.localStore,r))}async function P1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await MT(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new $(A.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mo(n,s.ts)}}function k1(t,e){const n=Z(t),s=n.Va.get(e);if(s&&s.Ia)return ne().add(s.key);{let i=ne();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function N1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A1.bind(null,e),e.Ta.r_=g1.bind(null,e.eventManager),e.Ta.Sa=m1.bind(null,e.eventManager),e}function O1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S1.bind(null,e),e}class sm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BD(this.persistence,new FD,e.initialUser,this.serializer)}createPersistence(e){return new LD(ef.zr,this.serializer)}createSharedClientState(e){return new zD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class D1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=P1.bind(null,this.syncEngine),await d1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new p1}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),s=function(r){return new XD(r)}(e.databaseInfo);return function(r,o,a,l){return new e1(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new n1(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tm(this.syncEngine,n,0),function(){return Jg.v()?new Jg:new GD}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new E1(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=Z(n);U("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await xo(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ff{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class x1{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=nT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=af(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await MT(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function im(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L1(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Zg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Zg(e.remoteStore,r)),t._onlineComponents=e}function M1(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function L1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!M1(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await zc(t,new sm)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await zc(t,new sm);return t._offlineComponents}async function JT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await im(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await im(t,new D1))),t._onlineComponents}function V1(t){return JT(t).then(e=>e.syncEngine)}async function rl(t){const e=await JT(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=w1.bind(null,e.syncEngine),n}function F1(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new ff({next:d=>{o.enqueueAndForget(()=>cf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new $(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new $(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new hf(ec(a.path),u,{includeMetadataChanges:!0,W_:!0});return lf(r,h)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}function U1(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new ff({next:d=>{o.enqueueAndForget(()=>cf(r,h)),d.fromCache&&l.source==="server"?c.reject(new $(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new hf(a,u,{includeMetadataChanges:!0,W_:!0});return lf(r,h)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function ZT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rm=new Map;/**
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
 */function eI(t,e,n){if(!n)throw new $(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function B1(t,e,n,s){if(e===!0&&s===!0)throw new $(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function om(t){if(!H.isDocumentKey(t))throw new $(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function am(t){if(H.isDocumentKey(t))throw new $(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pf(t);throw new $(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new $(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rO;switch(s.type){case"firstParty":return new cO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=rm.get(n);s&&(U("ComponentProvider","Removing Datastore"),rm.delete(n),s.terminate())}(this),Promise.resolve()}}function $1(t,e,n,s={}){var i;const r=(t=dn(t,cc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=nt.MOCK_USER;else{a=u0(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new $(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(c)}t._authCredentials=new oO(new tT(a,l))}}/**
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
 */class Lo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class ss extends Lo{constructor(e,n,s){super(e,n,ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new H(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function EL(t,e,...n){if(t=bt(t),eI("collection","path",e),t instanceof cc){const s=Pe.fromString(e,...n);return am(s),new ss(t,null,s)}{if(!(t instanceof Et||t instanceof ss))throw new $(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return am(s),new ss(t.firestore,null,s)}}function TL(t,e,...n){if(t=bt(t),arguments.length===1&&(e=nT.V()),eI("doc","path",e),t instanceof cc){const s=Pe.fromString(e,...n);return om(s),new Et(t,null,new H(s))}{if(!(t instanceof Et||t instanceof ss))throw new $(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return om(s),new Et(t.firestore,t instanceof ss?t.converter:null,new H(s))}}/**
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
 */class j1{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new VT(this,"async_queue_retry"),this.Xa=()=>{const n=Kc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Pn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!No(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw xn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=of.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&z()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function cm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Mi extends cc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new j1}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tI(this),this._firestoreClient.terminate()}}function W1(t,e){const n=typeof t=="object"?t:jh(),s=typeof t=="string"?t:e||"(default)",i=$h(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=c0("firestore");r&&$1(i,...r)}return i}function uc(t){return t._firestoreClient||tI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new TO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ZT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new x1(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(pt.fromBase64String(e))}catch(n){throw new $(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mf{constructor(e){this._methodName=e}}/**
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
 */class hc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const H1=/^__.*__$/;class q1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new qs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}function nI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class dc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new dc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return ol(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(nI(this.uu)&&H1.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class K1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||oc(e)}Ru(e,n,s,i=!1){return new dc({uu:e,methodName:n,Au:s,path:lt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z1(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new K1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function G1(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);rI("Data must be an object, but it was:",o,s);const a=sI(s,o);let l,c;if(r.merge)l=new $t(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=X1(e,h,n);if(!o.contains(d))throw new $(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Z1(u,d)||u.push(d)}l=new $t(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new q1(new Nt(a),l,c)}function Q1(t,e,n){return new dc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Y1 extends mf{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=Q1(this,e,!0),s=this.Vu.map(r=>_f(r,n)),i=new Oi(s);return new zO(e.path,i)}isEqual(e){return this===e}}function _f(t,e){if(iI(t=bt(t)))return rI("Unsupported field value:",e,t),sI(t,e);if(t instanceof mf)return function(s,i){if(!nI(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=_f(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=bt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return HO(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Me.fromDate(s);return{timestampValue:sl(i.serializer,r)}}if(s instanceof Me){const r=new Me(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sl(i.serializer,r)}}if(s instanceof hc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Li)return{bytesValue:PT(i.serializer,s._byteString)};if(s instanceof Et){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Jd(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${pf(s)}`)}(t,e)}function sI(t,e){const n={};return sT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(s,i)=>{const r=_f(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function iI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof hc||t instanceof Li||t instanceof Et||t instanceof mf)}function rI(t,e,n){if(!iI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=pf(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function X1(t,e,n){if((e=bt(e))instanceof gf)return e._internalPath;if(typeof e=="string")return oI(t,e);throw ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const J1=new RegExp("[~\\*/\\[\\]]");function oI(t,e,n){if(e.search(J1)>=0)throw ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gf(...e.split("."))._internalPath}catch{throw ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ol(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new $(A.INVALID_ARGUMENT,a+t+l)}function Z1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class aI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ex(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ex extends aI{data(){return super.data()}}function lI(t,e){return typeof e=="string"?oI(t,e):e instanceof gf?e._internalPath:e._delegate._internalPath}/**
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
 */function cI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tx{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Xi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new hc(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=ls(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);Se(xT(s));const i=new so(s.get(1),s.get(3)),r=new H(s.popFirst(5));return i.isEqual(n)||xn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function nx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class yr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uI extends aI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(lI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class va extends uI{data(e={}){return super.data(e)}}class hI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new va(this._firestore,this._userDataWriter,s.key,s,new yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new yr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function dI(t){t=dn(t,Et);const e=dn(t.firestore,Mi);return F1(uc(e),t._key).then(n=>fI(e,t,n))}class yf extends tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function ix(t){t=dn(t,Lo);const e=dn(t.firestore,Mi),n=uc(e),s=new yf(e);return cI(t._query),U1(n,t._query).then(i=>new hI(e,s,t,i))}function IL(t,e,n){t=dn(t,Et);const s=dn(t.firestore,Mi),i=nx(t.converter,e,n);return rx(s,[G1(z1(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,kn.none())])}function vf(t,...e){var n,s,i;t=bt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(cm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Et)c=dn(t.firestore,Mi),u=ec(t._key.path),l={next:h=>{e[o]&&e[o](fI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dn(t,Lo);c=dn(h.firestore,Mi),u=h._query;const d=new yf(c);l={next:f=>{e[o]&&e[o](new hI(c,d,h,f))},error:e[o+1],complete:e[o+2]},cI(t._query)}return function(d,f,m,y){const v=new ff(y),I=new hf(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>lf(await rl(d),I)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>cf(await rl(d),I))}}(uc(c),u,a,l)}function rx(t,e){return function(s,i){const r=new Pn;return s.asyncQueue.enqueueAndForget(async()=>R1(await V1(s),i,r)),r.promise}(uc(t),e)}function fI(t,e,n){const s=n.docs.get(e._key),i=new yf(t);return new uI(t,i,e._key,s,new yr(n.hasPendingWrites,n.fromCache),e.converter)}function wL(...t){return new Y1("arrayUnion",t)}(function(e,n=!0){(function(i){Yi=i})(us),pn(new Kt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Mi(new aO(s.getProvider("auth-internal")),new hO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ct(Pg,"4.1.0",e),Ct(Pg,"4.1.0","esm2017")})();/**
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
 */const pI="firebasestorage.googleapis.com",ox="storageBucket",ax=2*60*1e3,lx=10*60*1e3;/**
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
 */class En extends vn{constructor(e,n,s=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,En.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function Gc(t){return"storage/"+t}function cx(){const t="An unknown error occurred, please check the error payload for server response.";return new En(yn.UNKNOWN,t)}function ux(){return new En(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hx(){return new En(yn.CANCELED,"User canceled the upload/download.")}function dx(t){return new En(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function fx(t){return new En(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function um(t){return new En(yn.INVALID_ARGUMENT,t)}function gI(){return new En(yn.APP_DELETED,"The Firebase app was deleted.")}function px(t){return new En(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(s.path==="")return s;throw fx(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===pI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${y}/${i}/${v}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<k.length;R++){const Q=k[R],K=Q.regex.exec(e);if(K){const ye=K[Q.indices.bucket];let Ie=K[Q.indices.path];Ie||(Ie=""),s=new jt(ye,Ie),Q.postModify(s);break}}if(s==null)throw dx(e);return s}}class gx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mx(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...I){if(c){d();return}if(v){d(),u.call(null,v,...I);return}if(l()||o){d(),u.call(null,v,...I);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function y(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function _x(t){t(!1)}/**
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
 */function yx(t){return t!==void 0}function hm(t,e,n,s){if(s<e)throw um(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw um(`Invalid value for '${t}'. Expected ${n} or less.`)}function vx(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var al;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(al||(al={}));/**
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
 */function Ex(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Tx{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ra(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===al.NO_ERROR,l=r.getStatus();if(!a||Ex(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===al.ABORT;s(!1,new ra(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ra(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());yx(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=cx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?gI():hx();o(l)}else{const l=ux();o(l)}};this.canceled_?n(!1,new ra(!1,null,!0)):this.backoffId_=mx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_x(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ra{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ix(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ax(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Cx(t,e,n,s,i,r,o=!0){const a=vx(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Rx(c,e),Ix(c,n),wx(c,r),Ax(c,s),new Tx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Sx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ll{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ll(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bx(this._location.path)}get storage(){return this._service}get parent(){const e=Sx(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new ll(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw px(e)}}function dm(t,e){const n=e==null?void 0:e[ox];return n==null?null:jt.makeFromBucketSpec(n,t)}class Px{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=pI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ax,this._maxUploadRetryTime=lx,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=dm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=dm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ll(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new gx(gI());{const o=Cx(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const fm="@firebase/storage",pm="0.11.2";/**
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
 */const kx="storage";function Nx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Px(n,s,i,e,us)}function Ox(){pn(new Kt(kx,Nx,"PUBLIC").setMultipleInstances(!0)),Ct(fm,pm,""),Ct(fm,pm,"esm2017")}Ox();const Qc=new WeakMap;function mI(t,e){return Qc.has(e)||Qc.set(e,t||{f:{},r:{},s:{},u:{}}),Qc.get(e)}function Dx(t,e,n,s){if(!t)return n;const[i,r]=_I(t);if(!i)return n;const o=mI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function xx(t,e,n,s){if(!t)return;const[i,r]=_I(t);if(!i)return;const o=mI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(sn),a}function _I(t){return sb(t)||ib(t)?["f",t.path]:rb(t)?["r",t.toString()]:ob(t)?["s",t.toString()]:[]}const Yc=new WeakMap;function Mx(t,e,n){const s=go();Yc.has(s)||Yc.set(s,new Map);const i=Yc.get(s),r=xx(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):sn}const Lx={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function ch(t,e,n,s){if(!tb(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof Me||m instanceof hc)h[f]=m;else if(Jh(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else $s(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Ef={reset:!1,wait:!0,maxRefDepth:2,converter:Lx,snapshotOptions:{serverTimestamps:"estimate"}};function cl(t){for(const e in t)t[e].unsub()}function uh(t,e,n,s,i,r,o,a,l){const[c,u]=ch(s.data(t.snapshotOptions),Xh(e,n),i,t);r.set(e,n,c),hh(t,e,n,i,u,r,o,a,l)}function Vx({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=sn;return a.once?dI(t).then(u=>{u.exists()?uh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=vf(t,u=>{u.exists()?uh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),cl(l)}}function hh(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],I=i[y],b=`${n}.${y}`;if(f[b]=!0,v)if(v.path!==I.path)v.unsub();else return;s[y]={data:()=>Xh(e,b),unsub:Vx({ref:I,target:e,path:b,depth:o,ops:r,resolve:m.bind(null,b),reject:l},t),path:I.path}})}function Fx(t,e,n,s,i,r){const o=Object.assign({},Ef,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Jn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,y=sn;const v=[],I={added:({newIndex:k,doc:R})=>{v.splice(k,0,Object.create(null));const Q=v[k],[K,ye]=ch(R.data(l),void 0,Q,o);n.add(st(d),k,K),hh(o,d,`${h}.${k}`,Q,ye,n,0,s.bind(null,R),i)},modified:({oldIndex:k,newIndex:R,doc:Q})=>{const K=st(d),ye=v[k],Ie=K[k],[_t,ze]=ch(Q.data(l),Ie,ye,o);v.splice(R,0,ye),n.remove(K,k),n.add(K,R,_t),hh(o,d,`${h}.${R}`,ye,ze,n,0,s,i)},removed:({oldIndex:k})=>{const R=st(d);n.remove(R,k),cl(v.splice(k,1)[0])}};function b(k){const R=k.docChanges(a);if(!m&&R.length){m=!0;let Q=0;const K=R.length,ye=Object.create(null);for(let Ie=0;Ie<K;Ie++)ye[R[Ie].doc.id]=!0;s=Ie=>{Ie&&Ie.id in ye&&++Q>=K&&(c&&(n.set(t,h,st(d)),d=t),f(st(d)),s=sn)}}R.forEach(Q=>{I[Q.type](Q)}),R.length||(c&&(n.set(t,h,st(d)),d=t),s(st(d)))}return u?ix(e).then(b).catch(i):y=vf(e,b,i),k=>{if(y(),k){const R=typeof k=="function"?k():[];n.set(t,h,R)}v.forEach(cl)}}function Ux(t,e,n,s,i,r){const o=Object.assign({},Ef,r),a="value",l=Object.create(null);s=ab(s,()=>Xh(t,a));let c=sn;function u(h){h.exists()?uh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?dI(e).then(u).catch(i):c=vf(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}cl(l)}}const gm=Symbol();function Bx(t,e){let n=sn;const s=Object.assign({},Ef,e),i=st(t),r=s.target||Jn();cb()&&(s.once=!0);const o=Dx(i,s.ssrKey,gm,go()),a=o!==gm;a&&(r.value=o);let l=!a;const c=Jn(!1),u=Jn(),h=i_(),d=jm();let f=sn;function m(){let I=st(t);const b=new Promise((k,R)=>{if(n(s.reset),!I)return n=sn,k(null);c.value=l,l=!0,I.converter||(I=I.withConverter(s.converter)),n=(Jh(I)?Ux:Fx)(r,I,$x,k,R,s)}).catch(k=>(h.value===b&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===b&&(c.value=!1)});h.value=b}let y=sn;Xe(t)&&(y=hi(t,m)),m(),i&&(f=Mx(h.value,i,s.ssrKey)),Lh()&&y_(()=>h.value),d&&zI(v);function v(I=s.reset){y(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const $x={set:(t,e,n)=>ZS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function RL(t,e){return Bx(t,{target:Jn([]),...e})}function jx(t){return(e,n)=>{const s=ub(e,n).run(()=>Jn(t));By.set(e,s),fb(s,e)}}function AL(t){return JS?Ly(go(t)):null}function Wx(t,{firebaseApp:e,modules:n=[]}){t.provide(Uy,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Hx=Symbol();var mm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mm||(mm={}));function qx(){const t=$m(!0),e=t.run(()=>Jn({}));let n=[],s=[];const i=Sh({install(r){i._a=r,r.provide(Hx,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!AS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const yI=Q_({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),CL=W1(yI);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const si=typeof window<"u";function Kx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Xc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Qt(i)?i.map(t):t(i)}return n}const Nr=()=>{},Qt=Array.isArray,zx=/\/$/,Gx=t=>t.replace(zx,"");function Jc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Jx(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Qx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _m(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yx(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Vi(e.matched[s],n.matched[i])&&vI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xx(t[n],e[n]))return!1;return!0}function Xx(t,e){return Qt(t)?ym(t,e):Qt(e)?ym(e,t):t===e}function ym(t,e){return Qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var oo;(function(t){t.pop="pop",t.push="push"})(oo||(oo={}));var Or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Or||(Or={}));function Zx(t){if(!t)if(si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gx(t)}const eM=/^[^#]+#/;function tM(t,e){return t.replace(eM,"#")+e}function nM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fc=()=>({left:window.pageXOffset,top:window.pageYOffset});function sM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=nM(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vm(t,e){return(history.state?history.state.position-e:-1)+t}const dh=new Map;function iM(t,e){dh.set(t,e)}function rM(t){const e=dh.get(t);return dh.delete(t),e}let oM=()=>location.protocol+"//"+location.host;function EI(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),_m(l,"")}return _m(n,t)+s+i}function aM(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=EI(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else s(f);i.forEach(I=>{I(n.value,m,{delta:v,type:oo.pop,direction:v?v>0?Or.forward:Or.back:Or.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:fc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Em(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?fc():null}}function lM(t){const{history:e,location:n}=window,s={value:EI(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:oM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,Em(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:fc()});r(u.current,u,!0);const h=pe({},Em(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function cM(t){t=Zx(t);const e=lM(t),n=aM(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:tM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function uM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cM(t)}function hM(t){return typeof t=="string"||t&&typeof t=="object"}function TI(t){return typeof t=="string"||typeof t=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},II=Symbol("");var Tm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Tm||(Tm={}));function Fi(t,e){return pe(new Error,{type:t,[II]:!0},e)}function In(t,e){return t instanceof Error&&II in t&&(e==null||!!(t.type&e))}const Im="[^/]+?",dM={sensitive:!1,strict:!1,start:!0,end:!0},fM=/[.+*?^${}()[\]/\\]/g;function pM(t,e){const n=pe({},dM,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(fM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:I}=d;r.push({name:m,repeatable:y,optional:v});const b=I||Im;if(b!==Im){f+=10;try{new RegExp(`(${b})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+R.message)}}let k=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),i+=k,f+=20,v&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,I=m in c?c[m]:"";if(Qt(I)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=Qt(I)?I.join("/"):I;if(!b)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function gM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mM(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=gM(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wm(s))return 1;if(wm(i))return-1}return i.length-s.length}function wm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _M={type:0,value:""},yM=/[a-zA-Z0-9_]/;function vM(t){if(!t)return[[]];if(t==="/")return[[_M]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:yM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function EM(t,e,n){const s=pM(vM(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function TM(t,e){const n=[],s=new Map;e=Cm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=IM(u);m.aliasOf=d&&d.record;const y=Cm(e,u),v=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of k)v.push(pe({},m,{components:d?d.record.components:m.components,path:R,aliasOf:d?d.record:m}))}let I,b;for(const k of v){const{path:R}=k;if(h&&R[0]!=="/"){const Q=h.record.path,K=Q[Q.length-1]==="/"?"":"/";k.path=h.record.path+(R&&K+R)}if(I=EM(k,h,y),d?d.alias.push(I):(b=b||I,b!==I&&b.alias.push(I),f&&u.name&&!Am(I)&&o(u.name)),m.children){const Q=m.children;for(let K=0;K<Q.length;K++)r(Q[K],I,d&&d.children[K])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return b?()=>{o(b)}:Nr}function o(u){if(TI(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&mM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!wI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Am(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Fi(1,{location:u});y=d.record.name,f=pe(Rm(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Rm(u.params,d.keys.map(b=>b.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(b=>b.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Fi(1,{location:u,currentLocation:h});y=d.record.name,f=pe({},h.params,u.params),m=d.stringify(f)}const v=[];let I=d;for(;I;)v.unshift(I.record),I=I.parent;return{name:y,path:m,params:f,matched:v,meta:RM(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Rm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function IM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Am(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RM(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Cm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function wI(t,e){return e.children.some(n=>n===t||wI(t,n))}const RI=/#/g,AM=/&/g,CM=/\//g,SM=/=/g,bM=/\?/g,AI=/\+/g,PM=/%5B/g,kM=/%5D/g,CI=/%5E/g,NM=/%60/g,SI=/%7B/g,OM=/%7C/g,bI=/%7D/g,DM=/%20/g;function Tf(t){return encodeURI(""+t).replace(OM,"|").replace(PM,"[").replace(kM,"]")}function xM(t){return Tf(t).replace(SI,"{").replace(bI,"}").replace(CI,"^")}function fh(t){return Tf(t).replace(AI,"%2B").replace(DM,"+").replace(RI,"%23").replace(AM,"%26").replace(NM,"`").replace(SI,"{").replace(bI,"}").replace(CI,"^")}function MM(t){return fh(t).replace(SM,"%3D")}function LM(t){return Tf(t).replace(RI,"%23").replace(bM,"%3F")}function VM(t){return t==null?"":LM(t).replace(CM,"%2F")}function ul(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FM(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(AI," "),o=r.indexOf("="),a=ul(o<0?r:r.slice(0,o)),l=o<0?null:ul(r.slice(o+1));if(a in e){let c=e[a];Qt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Sm(t){let e="";for(let n in t){const s=t[n];if(n=MM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(s)?s.map(r=>r&&fh(r)):[s&&fh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function UM(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Qt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BM=Symbol(""),bm=Symbol(""),pc=Symbol(""),If=Symbol(""),ph=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Fi(4,{from:n,to:e})):h instanceof Error?a(h):hM(h)?a(Fi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Zc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if($M(a)){const c=(a.__vccOpts||a)[e];c&&i.push(qn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Kx(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qn(d,n,s,r,o)()}))}}return i}function $M(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pm(t){const e=At(pc),n=At(If),s=Vt(()=>e.resolve(st(t.to))),i=Vt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Vi.bind(null,u));if(d>-1)return d;const f=km(l[c-2]);return c>1&&km(u)===f&&h[h.length-1].path!==f?h.findIndex(Vi.bind(null,l[c-2])):d}),r=Vt(()=>i.value>-1&&qM(n.params,s.value.params)),o=Vt(()=>i.value>-1&&i.value===n.matched.length-1&&vI(n.params,s.value.params));function a(l={}){return HM(l)?e[st(t.replace)?"replace":"push"](st(t.to)).catch(Nr):Promise.resolve()}return{route:s,href:Vt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const jM=Tl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pm,setup(t,{slots:e}){const n=_l(Pm(t)),{options:s}=At(pc),i=Vt(()=>({[Nm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Nm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:x_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),WM=jM;function HM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Qt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function km(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nm=(t,e,n)=>t??e??n,KM=Tl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(ph),i=Vt(()=>t.route||s.value),r=At(bm,0),o=Vt(()=>{let c=st(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Vt(()=>i.value.matched[o.value]);la(bm,Vt(()=>o.value+1)),la(BM,a),la(ph,i);const l=Jn();return hi(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Vi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Om(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=x_(d,pe({},m,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Om(n.default,{Component:v,route:c})||v}}});function Om(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PI=KM;function zM(t){const e=TM(t.routes,t),n=t.parseQuery||FM,s=t.stringifyQuery||Sm,i=t.history,r=cr(),o=cr(),a=cr(),l=i_(Wn);let c=Wn;si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xc.bind(null,T=>""+T),h=Xc.bind(null,VM),d=Xc.bind(null,ul);function f(T,V){let D,B;return TI(T)?(D=e.getRecordMatcher(T),B=V):B=T,e.addRoute(B,D)}function m(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function I(T,V){if(V=pe({},V||l.value),typeof T=="string"){const _=Jc(n,T,V.path),E=e.resolve({path:_.path},V),w=i.createHref(_.fullPath);return pe(_,E,{params:d(E.params),hash:ul(_.hash),redirectedFrom:void 0,href:w})}let D;if("path"in T)D=pe({},T,{path:Jc(n,T.path,V.path).path});else{const _=pe({},T.params);for(const E in _)_[E]==null&&delete _[E];D=pe({},T,{params:h(_)}),V.params=h(V.params)}const B=e.resolve(D,V),de=T.hash||"";B.params=u(d(B.params));const p=Qx(s,pe({},T,{hash:xM(de),path:B.path})),g=i.createHref(p);return pe({fullPath:p,hash:de,query:s===Sm?UM(T.query):T.query||{}},B,{redirectedFrom:void 0,href:g})}function b(T){return typeof T=="string"?Jc(n,T,l.value.path):pe({},T)}function k(T,V){if(c!==T)return Fi(8,{from:V,to:T})}function R(T){return ye(T)}function Q(T){return R(pe(b(T),{replace:!0}))}function K(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let B=typeof D=="function"?D(T):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=b(B):{path:B},B.params={}),pe({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function ye(T,V){const D=c=I(T),B=l.value,de=T.state,p=T.force,g=T.replace===!0,_=K(D);if(_)return ye(pe(b(_),{state:typeof _=="object"?pe({},de,_.state):de,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let w;return!p&&Yx(s,B,D)&&(w=Fi(16,{to:E,from:B}),Xt(B,B,!0,!1)),(w?Promise.resolve(w):ze(E,B)).catch(C=>In(C)?In(C,2)?C:Bn(C):he(C,E,B)).then(C=>{if(C){if(In(C,2))return ye(pe({replace:g},b(C.to),{state:typeof C.to=="object"?pe({},de,C.to.state):de,force:p}),V||E)}else C=fs(E,B,!0,g,de);return Un(E,B,C),C})}function Ie(T,V){const D=k(T,V);return D?Promise.reject(D):Promise.resolve()}function _t(T){const V=Qs.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(T):T()}function ze(T,V){let D;const[B,de,p]=GM(T,V);D=Zc(B.reverse(),"beforeRouteLeave",T,V);for(const _ of B)_.leaveGuards.forEach(E=>{D.push(qn(E,T,V))});const g=Ie.bind(null,T,V);return D.push(g),et(D).then(()=>{D=[];for(const _ of r.list())D.push(qn(_,T,V));return D.push(g),et(D)}).then(()=>{D=Zc(de,"beforeRouteUpdate",T,V);for(const _ of de)_.updateGuards.forEach(E=>{D.push(qn(E,T,V))});return D.push(g),et(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(Qt(_.beforeEnter))for(const E of _.beforeEnter)D.push(qn(E,T,V));else D.push(qn(_.beforeEnter,T,V));return D.push(g),et(D)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),D=Zc(p,"beforeRouteEnter",T,V),D.push(g),et(D))).then(()=>{D=[];for(const _ of o.list())D.push(qn(_,T,V));return D.push(g),et(D)}).catch(_=>In(_,8)?_:Promise.reject(_))}function Un(T,V,D){a.list().forEach(B=>_t(()=>B(T,V,D)))}function fs(T,V,D,B,de){const p=k(T,V);if(p)return p;const g=V===Wn,_=si?history.state:{};D&&(B||g?i.replace(T.fullPath,pe({scroll:g&&_&&_.scroll},de)):i.push(T.fullPath,de)),l.value=T,Xt(T,V,D,g),Bn()}let Yt;function er(){Yt||(Yt=i.listen((T,V,D)=>{if(!Vo.listening)return;const B=I(T),de=K(B);if(de){ye(pe(de,{replace:!0}),B).catch(Nr);return}c=B;const p=l.value;si&&iM(vm(p.fullPath,D.delta),fc()),ze(B,p).catch(g=>In(g,12)?g:In(g,2)?(ye(g.to,B).then(_=>{In(_,20)&&!D.delta&&D.type===oo.pop&&i.go(-1,!1)}).catch(Nr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),he(g,B,p))).then(g=>{g=g||fs(B,p,!1),g&&(D.delta&&!In(g,8)?i.go(-D.delta,!1):D.type===oo.pop&&In(g,20)&&i.go(-1,!1)),Un(B,p,g)}).catch(Nr)}))}let zs=cr(),Ue=cr(),ve;function he(T,V,D){Bn(T);const B=Ue.list();return B.length?B.forEach(de=>de(T,V,D)):console.error(T),Promise.reject(T)}function Tn(){return ve&&l.value!==Wn?Promise.resolve():new Promise((T,V)=>{zs.add([T,V])})}function Bn(T){return ve||(ve=!T,er(),zs.list().forEach(([V,D])=>T?D(T):V()),zs.reset()),T}function Xt(T,V,D,B){const{scrollBehavior:de}=t;if(!si||!de)return Promise.resolve();const p=!D&&rM(vm(T.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return l_().then(()=>de(T,V,p)).then(g=>g&&sM(g)).catch(g=>he(g,T,V))}const yt=T=>i.go(T);let Gs;const Qs=new Set,Vo={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:I,options:t,push:R,replace:Q,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:Tn,install(T){const V=this;T.component("RouterLink",WM),T.component("RouterView",PI),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),si&&!Gs&&l.value===Wn&&(Gs=!0,R(i.location).catch(de=>{}));const D={};for(const de in Wn)Object.defineProperty(D,de,{get:()=>l.value[de],enumerable:!0});T.provide(pc,V),T.provide(If,Zm(D)),T.provide(ph,l);const B=T.unmount;Qs.add(T),T.unmount=function(){Qs.delete(T),Qs.size<1&&(c=Wn,Yt&&Yt(),Yt=null,l.value=Wn,Gs=!1,ve=!1),B()}}};function et(T){return T.reduce((V,D)=>V.then(()=>_t(D)),Promise.resolve())}return Vo}function GM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vi(c,l))||i.push(l))}return[n,s,i]}function QM(){return At(pc)}function YM(){return At(If)}const XM=Tl({__name:"App",setup(t){const e=hb(),n=QM(),s=YM();return hi(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(lo(),Dh(st(PI)))}}),JM="modulepreload",ZM=function(t){return"/"+t},Dm={},eu=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ZM(r),r in Dm)return;Dm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":JM,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const kI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},eL={},tL={class:"card"};function nL(t,e){return lo(),k_("div",tL,[Zw(t.$slots,"title",{},void 0,!0)])}const tu=kI(eL,[["render",nL],["__scopeId","data-v-52aa979e"]]),sL=t=>(kw("data-v-bf674ff6"),t=t(),Nw(),t),iL=sL(()=>xh("h1",null,"Fonti Paintball",-1)),rL=Tl({__name:"HomeView",setup(t){return(e,n)=>{const s=Yw("RouterLink");return lo(),k_("main",null,[iL,Le(s,{to:"/rules"},{default:ei(()=>[Le(tu,null,{title:ei(()=>[ua(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),Le(s,{to:"/availability"},{default:ei(()=>[Le(tu,null,{title:ei(()=>[ua(" Inserisci disponibilità ")]),_:1})]),_:1}),Le(tu,null,{title:ei(()=>[ua(" Statistiche giocatori (prossimamente...) ")]),_:1})])}}});const oL=kI(rL,[["__scopeId","data-v-bf674ff6"]]),NI=zM({history:uM("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:oL},{path:"/login",name:"login",component:()=>eu(()=>import("./LoginView-c09883e9.js"),["assets/LoginView-c09883e9.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>eu(()=>import("./AvailabilityView-c112fc11.js"),["assets/AvailabilityView-c112fc11.js","assets/AvailabilityView-866e069b.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>eu(()=>import("./RulesView-75c14c38.js"),["assets/RulesView-75c14c38.js","assets/RulesView-7ac51338.css"])}]});NI.beforeEach(async t=>{if(t.meta.requiresAuth&&!await db())return{path:"/login",query:{redirect:t.fullPath}}});const gc=ZR(XM);gc.use(qx());gc.use(NI);gc.use(Wx,{firebaseApp:yI,modules:[jx()]});gc.mount("#app");export{ua as A,lL as B,hL as C,EL as D,RL as E,Mt as F,zn as G,Dh as H,IL as I,wL as J,TL as K,CL as L,kI as _,hb as a,lo as b,k_ as c,Tl as d,st as e,uL as f,gL as g,xh as h,pL as i,Le as j,Nw as k,_l as l,Vt as m,hi as n,Ww as o,kw as p,Zw as q,Yw as r,fL as s,aL as t,AL as u,cL as v,ei as w,Eh as x,dL as y,vh as z};
