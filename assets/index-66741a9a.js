(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Nh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},pi=[],Xt=()=>{},JI=()=>!1,ZI=/^on[^a-z]/,Tl=t=>ZI.test(t),Oh=t=>t.startsWith("onUpdate:"),je=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ew=Object.prototype.hasOwnProperty,he=(t,e)=>ew.call(t,e),G=Array.isArray,gi=t=>go(t)==="[object Map]",Il=t=>go(t)==="[object Set]",qf=t=>go(t)==="[object Date]",ne=t=>typeof t=="function",Ve=t=>typeof t=="string",Br=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",o_=t=>Re(t)&&ne(t.then)&&ne(t.catch),a_=Object.prototype.toString,go=t=>a_.call(t),tw=t=>go(t).slice(8,-1),l_=t=>go(t)==="[object Object]",xh=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ga=Nh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nw=/-(\w)/g,_n=wl(t=>t.replace(nw,(e,n)=>n?n.toUpperCase():"")),sw=/\B([A-Z])/g,qi=wl(t=>t.replace(sw,"-$1").toLowerCase()),Al=wl(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=wl(t=>t?`on${Al(t)}`:""),$r=(t,e)=>!Object.is(t,e),ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ba=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},c_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iw=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let Wf;const mu=()=>Wf||(Wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ve(s)?lw(s):Mh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ve(t))return t;if(Re(t))return t}}const rw=/;(?![^(]*\))/g,ow=/:([^]+)/,aw=/\/\*[^]*?\*\//g;function lw(t){const e={};return t.replace(aw,"").split(rw).forEach(n=>{if(n){const s=n.split(ow);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Lh(t){let e="";if(Ve(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Lh(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uw=Nh(cw);function u_(t){return!!t||t===""}function hw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Rl(t[s],e[s]);return n}function Rl(t,e){if(t===e)return!0;let n=qf(t),s=qf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Br(t),s=Br(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?hw(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Rl(t[o],e[o]))return!1}}return String(t)===String(e)}function dw(t,e){return t.findIndex(n=>Rl(n,e))}const CL=t=>Ve(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===a_||!ne(t.toString))?JSON.stringify(t,h_,2):String(t),h_=(t,e)=>e&&e.__v_isRef?h_(t,e.value):gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Il(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!G(e)&&!l_(e)?String(e):e;let Pt;class d_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function f_(t){return new d_(t)}function fw(t,e=Pt){e&&e.active&&e.effects.push(t)}function p_(){return Pt}function pw(t){Pt&&Pt.cleanups.push(t)}const Vh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},g_=t=>(t.w&us)>0,m_=t=>(t.n&us)>0,gw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=us},mw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];g_(i)&&!m_(i)?i.delete(t):e[n++]=i,i.w&=~us,i.n&=~us}e.length=n}},_u=new WeakMap;let mr=0,us=1;const yu=30;let Wt;const xs=Symbol(""),vu=Symbol("");class Fh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fw(this,s)}run(){if(!this.active)return this.fn();let e=Wt,n=ss;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,ss=!0,us=1<<++mr,mr<=yu?gw(this):Kf(this),this.fn()}finally{mr<=yu&&mw(this),us=1<<--mr,Wt=this.parent,ss=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Kf(this),this.onStop&&this.onStop(),this.active=!1)}}function Kf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ss=!0;const __=[];function Wi(){__.push(ss),ss=!1}function Ki(){const t=__.pop();ss=t===void 0?!0:t}function St(t,e,n){if(ss&&Wt){let s=_u.get(t);s||_u.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Vh()),y_(i)}}function y_(t,e){let n=!1;mr<=yu?m_(t)||(t.n|=us,n=!g_(t)):n=!t.has(Wt),n&&(t.add(Wt),Wt.deps.push(t))}function Vn(t,e,n,s,i,r){const o=_u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?xh(n)&&a.push(o.get("length")):(a.push(o.get(xs)),gi(t)&&a.push(o.get(vu)));break;case"delete":G(t)||(a.push(o.get(xs)),gi(t)&&a.push(o.get(vu)));break;case"set":gi(t)&&a.push(o.get(xs));break}if(a.length===1)a[0]&&Eu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Eu(Vh(l))}}function Eu(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&zf(s);for(const s of n)s.computed||zf(s)}function zf(t,e){(t!==Wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _w=Nh("__proto__,__v_isRef,__isVue"),v_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),yw=Uh(),vw=Uh(!1,!0),Ew=Uh(!0),Gf=Tw();function Tw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wi();const s=pe(this)[e].apply(this,n);return Ki(),s}}),t}function Iw(t){const e=pe(this);return St(e,"has",t),e.hasOwnProperty(t)}function Uh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Fw:A_:e?w_:I_).get(s))return s;const o=G(s);if(!t){if(o&&he(Gf,i))return Reflect.get(Gf,i,r);if(i==="hasOwnProperty")return Iw}const a=Reflect.get(s,i,r);return(Br(i)?v_.has(i):_w(i))||(t||St(s,"get",i),e)?a:nt(a)?o&&xh(i)?a:a.value:Re(a)?t?C_(a):Sl(a):a}}const ww=E_(),Aw=E_(!0);function E_(t=!1){return function(n,s,i,r){let o=n[s];if(Si(o)&&nt(o)&&!nt(i))return!1;if(!t&&(!Pa(i)&&!Si(i)&&(o=pe(o),i=pe(i)),!G(n)&&nt(o)&&!nt(i)))return o.value=i,!0;const a=G(n)&&xh(s)?Number(s)<n.length:he(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?$r(i,o)&&Vn(n,"set",s,i):Vn(n,"add",s,i)),l}}function Rw(t,e){const n=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vn(t,"delete",e,void 0),s}function Cw(t,e){const n=Reflect.has(t,e);return(!Br(e)||!v_.has(e))&&St(t,"has",e),n}function Sw(t){return St(t,"iterate",G(t)?"length":xs),Reflect.ownKeys(t)}const T_={get:yw,set:ww,deleteProperty:Rw,has:Cw,ownKeys:Sw},bw={get:Ew,set(t,e){return!0},deleteProperty(t,e){return!0}},Pw=je({},T_,{get:vw,set:Aw}),Bh=t=>t,Cl=t=>Reflect.getPrototypeOf(t);function Ko(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=Cl(i),a=s?Bh:n?qh:jr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function zo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Go(t,e=!1){return t=t.__v_raw,!e&&St(pe(t),"iterate",xs),Reflect.get(t,"size",t)}function Qf(t){t=pe(t);const e=pe(this);return Cl(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function Yf(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=Cl(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?$r(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Xf(t){const e=pe(this),{has:n,get:s}=Cl(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vn(e,"delete",t,void 0),r}function Jf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function Qo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?Bh:t?qh:jr;return!t&&St(a,"iterate",xs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Yo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=gi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Bh:e?qh:jr;return!e&&St(r,"iterate",l?vu:xs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Wn(t){return function(...e){return t==="delete"?!1:this}}function kw(){const t={get(r){return Ko(this,r)},get size(){return Go(this)},has:zo,add:Qf,set:Yf,delete:Xf,clear:Jf,forEach:Qo(!1,!1)},e={get(r){return Ko(this,r,!1,!0)},get size(){return Go(this)},has:zo,add:Qf,set:Yf,delete:Xf,clear:Jf,forEach:Qo(!1,!0)},n={get(r){return Ko(this,r,!0)},get size(){return Go(this,!0)},has(r){return zo.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Qo(!0,!1)},s={get(r){return Ko(this,r,!0,!0)},get size(){return Go(this,!0)},has(r){return zo.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yo(r,!1,!1),n[r]=Yo(r,!0,!1),e[r]=Yo(r,!1,!0),s[r]=Yo(r,!0,!0)}),[t,n,e,s]}const[Nw,Ow,Dw,xw]=kw();function $h(t,e){const n=e?t?xw:Dw:t?Ow:Nw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const Mw={get:$h(!1,!1)},Lw={get:$h(!1,!0)},Vw={get:$h(!0,!1)},I_=new WeakMap,w_=new WeakMap,A_=new WeakMap,Fw=new WeakMap;function Uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bw(t){return t.__v_skip||!Object.isExtensible(t)?0:Uw(tw(t))}function Sl(t){return Si(t)?t:jh(t,!1,T_,Mw,I_)}function R_(t){return jh(t,!1,Pw,Lw,w_)}function C_(t){return jh(t,!0,bw,Vw,A_)}function jh(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Bw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function mi(t){return Si(t)?mi(t.__v_raw):!!(t&&t.__v_isReactive)}function Si(t){return!!(t&&t.__v_isReadonly)}function Pa(t){return!!(t&&t.__v_isShallow)}function S_(t){return mi(t)||Si(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Hh(t){return ba(t,"__v_skip",!0),t}const jr=t=>Re(t)?Sl(t):t,qh=t=>Re(t)?C_(t):t;function b_(t){ss&&Wt&&(t=pe(t),y_(t.dep||(t.dep=Vh())))}function P_(t,e){t=pe(t);const n=t.dep;n&&Eu(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function is(t){return N_(t,!1)}function k_(t){return N_(t,!0)}function N_(t,e){return nt(t)?t:new $w(t,e)}class $w{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:jr(e)}get value(){return b_(this),this._value}set value(e){const n=this.__v_isShallow||Pa(e)||Si(e);e=n?e:pe(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),P_(this))}}function ct(t){return nt(t)?t.value:t}const jw={get:(t,e,n)=>ct(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function O_(t){return mi(t)?t:new Proxy(t,jw)}class Hw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fh(e,()=>{this._dirty||(this._dirty=!0,P_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return b_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qw(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=Xt):(s=t.get,i=t.set),new Hw(s,i,r||!i,n)}function rs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){bl(r,e,n)}return i}function $t(t,e,n,s){if(ne(t)){const r=rs(t,e,n,s);return r&&o_(r)&&r.catch(o=>{bl(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push($t(t[r],e,n,s));return i}function bl(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){rs(l,null,10,[t,o,a]);return}}Ww(t,n,i,s)}function Ww(t,e,n,s=!0){console.error(t)}let Hr=!1,Tu=!1;const dt=[];let ln=0;const _i=[];let bn=null,Rs=0;const D_=Promise.resolve();let Wh=null;function x_(t){const e=Wh||D_;return t?e.then(this?t.bind(this):t):e}function Kw(t){let e=ln+1,n=dt.length;for(;e<n;){const s=e+n>>>1;qr(dt[s])<t?e=s+1:n=s}return e}function Kh(t){(!dt.length||!dt.includes(t,Hr&&t.allowRecurse?ln+1:ln))&&(t.id==null?dt.push(t):dt.splice(Kw(t.id),0,t),M_())}function M_(){!Hr&&!Tu&&(Tu=!0,Wh=D_.then(V_))}function zw(t){const e=dt.indexOf(t);e>ln&&dt.splice(e,1)}function Gw(t){G(t)?_i.push(...t):(!bn||!bn.includes(t,t.allowRecurse?Rs+1:Rs))&&_i.push(t),M_()}function Zf(t,e=Hr?ln+1:0){for(;e<dt.length;e++){const n=dt[e];n&&n.pre&&(dt.splice(e,1),e--,n())}}function L_(t){if(_i.length){const e=[...new Set(_i)];if(_i.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,s)=>qr(n)-qr(s)),Rs=0;Rs<bn.length;Rs++)bn[Rs]();bn=null,Rs=0}}const qr=t=>t.id==null?1/0:t.id,Qw=(t,e)=>{const n=qr(t)-qr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function V_(t){Tu=!1,Hr=!0,dt.sort(Qw);const e=Xt;try{for(ln=0;ln<dt.length;ln++){const n=dt[ln];n&&n.active!==!1&&rs(n,null,14)}}finally{ln=0,dt.length=0,L_(),Hr=!1,Wh=null,(dt.length||_i.length)&&V_()}}function Yw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(i=n.map(f=>Ve(f)?f.trim():f)),h&&(i=n.map(c_))}let a,l=s[a=bc(e)]||s[a=bc(_n(e))];!l&&r&&(l=s[a=bc(qi(e))]),l&&$t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,i)}}function F_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=F_(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):je(o,r),Re(t)&&s.set(t,o),o)}function Pl(t,e){return!t||!Tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,qi(e))||he(t,e))}let st=null,kl=null;function ka(t){const e=st;return st=t,kl=t&&t.type.__scopeId||null,e}function Xw(t){kl=t}function Jw(){kl=null}function oi(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dp(-1);const r=ka(e);let o;try{o=t(...i)}finally{ka(r),s._d&&dp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Pc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,I;const S=ka(t);try{if(n.shapeFlag&4){const w=i||s;v=an(u.call(w,w,h,r,f,d,m)),I=l}else{const w=e;v=an(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),I=e.props?l:Zw(l)}}catch(w){Sr.length=0,bl(w,t,1),v=He(jt)}let P=v;if(I&&y!==!1){const w=Object.keys(I),{shapeFlag:$}=P;w.length&&$&7&&(o&&w.some(Oh)&&(I=e0(I,o)),P=hs(P,I))}return n.dirs&&(P=hs(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),v=P,ka(S),v}const Zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tl(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const s in t)(!Oh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function t0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ep(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Pl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ep(s,o,c):!0:!!o;return!1}function ep(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pl(n,r))return!0}return!1}function n0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const s0=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Gw(t)}const Xo={};function yi(t,e,n){return U_(t,e,n)}function U_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){var a;const l=p_()===((a=Qe)==null?void 0:a.scope)?Qe:null;let c,u=!1,h=!1;if(nt(t)?(c=()=>t.value,u=Pa(t)):mi(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(w=>mi(w)||Pa(w)),c=()=>t.map(w=>{if(nt(w))return w.value;if(mi(w))return bs(w);if(ne(w))return rs(w,l,2)})):ne(t)?e?c=()=>rs(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),$t(t,l,3,[f])}:c=Xt,e&&s){const w=c;c=()=>bs(w())}let d,f=w=>{d=S.onStop=()=>{rs(w,l,4)}},m;if(Kr)if(f=Xt,e?n&&$t(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const w=tA();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Xt;let y=h?new Array(t.length).fill(Xo):Xo;const v=()=>{if(S.active)if(e){const w=S.run();(s||u||(h?w.some(($,j)=>$r($,y[j])):$r(w,y)))&&(d&&d(),$t(e,l,3,[w,y===Xo?void 0:h&&y[0]===Xo?[]:y,f]),y=w)}else S.run()};v.allowRecurse=!!e;let I;i==="sync"?I=v:i==="post"?I=()=>At(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>Kh(v));const S=new Fh(c,I);e?n?v():y=S.run():i==="post"?At(S.run.bind(S),l&&l.suspense):S.run();const P=()=>{S.stop(),l&&l.scope&&Dh(l.scope.effects,S)};return m&&m.push(P),P}function r0(t,e,n){const s=this.proxy,i=Ve(t)?t.includes(".")?B_(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Qe;bi(this);const a=U_(i,r.bind(s),n);return o?bi(o):Ms(),a}function B_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function bs(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))bs(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)bs(t[n],e);else if(Il(t)||gi(t))t.forEach(n=>{bs(n,e)});else if(l_(t))for(const n in t)bs(t[n],e);return t}function SL(t,e){const n=st;if(n===null)return t;const s=Ll(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&bs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function vs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Wi(),$t(l,n,8,[t.el,a,t,e]),Ki())}}function o0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return W_(()=>{t.isMounted=!0}),K_(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],$_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},a0={name:"BaseTransition",props:$_,setup(t,{slots:e}){const n=Zh(),s=o0();let i;return()=>{const r=e.default&&H_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==jt){o=y;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return kc(o);const c=tp(o);if(!c)return kc(o);const u=Iu(c,a,s,n);wu(c,u);const h=n.subTree,d=h&&tp(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const y=m();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==jt&&(!Cs(c,d)||f)){const y=Iu(d,a,s,n);if(wu(d,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},kc(o);l==="in-out"&&c.type!==jt&&(y.delayLeave=(v,I,S)=>{const P=j_(s,d);P[String(d.key)]=d,v._leaveCb=()=>{I(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},l0=a0;function j_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Iu(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:I,onAppearCancelled:S}=e,P=String(t.key),w=j_(n,t),$=(F,se)=>{F&&$t(F,s,9,se)},j=(F,se)=>{const ie=se[1];$(F,se),G(F)?F.every(Oe=>Oe.length<=1)&&ie():F.length<=1&&ie()},te={mode:r,persisted:o,beforeEnter(F){let se=a;if(!n.isMounted)if(i)se=y||a;else return;F._leaveCb&&F._leaveCb(!0);const ie=w[P];ie&&Cs(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),$(se,[F])},enter(F){let se=l,ie=c,Oe=u;if(!n.isMounted)if(i)se=v||l,ie=I||c,Oe=S||u;else return;let q=!1;const ve=F._enterCb=vt=>{q||(q=!0,vt?$(Oe,[F]):$(ie,[F]),te.delayedLeave&&te.delayedLeave(),F._enterCb=void 0)};se?j(se,[F,ve]):ve()},leave(F,se){const ie=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return se();$(h,[F]);let Oe=!1;const q=F._leaveCb=ve=>{Oe||(Oe=!0,se(),ve?$(m,[F]):$(f,[F]),F._leaveCb=void 0,w[ie]===t&&delete w[ie])};w[ie]=t,d?j(d,[F,q]):q()},clone(F){return Iu(F,e,n,s)}};return te}function kc(t){if(Ol(t))return t=hs(t),t.children=null,t}function tp(t){return Ol(t)?t.children?t.children[0]:void 0:t}function wu(t,e){t.shapeFlag&6&&t.component?wu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function H_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&i++,s=s.concat(H_(o.children,e,a))):(e||o.type!==jt)&&s.push(a!=null?hs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Nl(t,e){return ne(t)?(()=>je({name:t.name},e,{setup:t}))():t}const Ar=t=>!!t.type.__asyncLoader,Ol=t=>t.type.__isKeepAlive;function c0(t,e){q_(t,"a",e)}function u0(t,e){q_(t,"da",e)}function q_(t,e,n=Qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Dl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ol(i.parent.vnode)&&h0(s,e,n,i),i=i.parent}}function h0(t,e,n,s){const i=Dl(e,t,s,!0);z_(()=>{Dh(s[e],i)},n)}function Dl(t,e,n=Qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wi(),bi(n);const a=$t(e,n,t,o);return Ms(),Ki(),a});return s?i.unshift(r):i.push(r),r}}const jn=t=>(e,n=Qe)=>(!Kr||t==="sp")&&Dl(t,(...s)=>e(...s),n),d0=jn("bm"),W_=jn("m"),f0=jn("bu"),p0=jn("u"),K_=jn("bum"),z_=jn("um"),G_=jn("sp"),g0=jn("rtg"),m0=jn("rtc");function _0(t,e=Qe){Dl("ec",t,e)}const Q_="components";function y0(t,e){return E0(Q_,t,!0,e)||t}const v0=Symbol.for("v-ndc");function E0(t,e,n=!0,s=!1){const i=st||Qe;if(i){const r=i.type;if(t===Q_){const a=J0(r,!1);if(a&&(a===e||a===_n(e)||a===Al(_n(e))))return r}const o=np(i[t]||r[t],e)||np(i.appContext[t],e);return!o&&s?r:o}}function np(t,e){return t&&(t[e]||t[_n(e)]||t[Al(_n(e))])}function bL(t,e,n,s){let i;const r=n&&n[s];if(G(t)||Ve(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function T0(t,e,n={},s,i){if(st.isCE||st.parent&&Ar(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),He("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),mo();const o=r&&Y_(r(n)),a=Yh(Lt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Y_(t){return t.some(e=>Da(e)?!(e.type===jt||e.type===Lt&&!Y_(e.children)):!0)?t:null}const Au=t=>t?ly(t)?Ll(t)||t.proxy:Au(t.parent):null,Rr=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Au(t.parent),$root:t=>Au(t.root),$emit:t=>t.emit,$options:t=>zh(t),$forceUpdate:t=>t.f||(t.f=()=>Kh(t.update)),$nextTick:t=>t.n||(t.n=x_.bind(t.proxy)),$watch:t=>r0.bind(t)}),Nc=(t,e)=>t!==be&&!t.__isScriptSetup&&he(t,e),I0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Nc(s,e))return o[e]=1,s[e];if(i!==be&&he(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,r[e];if(n!==be&&he(n,e))return o[e]=4,n[e];Ru&&(o[e]=0)}}const u=Rr[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&he(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Nc(i,e)?(i[e]=n,!0):s!==be&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&he(t,o)||Nc(e,o)||(a=r[0])&&he(a,o)||he(s,o)||he(Rr,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sp(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ru=!0;function w0(t){const e=zh(t),n=t.proxy,s=t.ctx;Ru=!1,e.beforeCreate&&ip(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:I,beforeUnmount:S,destroyed:P,unmounted:w,render:$,renderTracked:j,renderTriggered:te,errorCaptured:F,serverPrefetch:se,expose:ie,inheritAttrs:Oe,components:q,directives:ve,filters:vt}=e;if(c&&A0(c,s,null),o)for(const Ae in o){const ge=o[Ae];ne(ge)&&(s[Ae]=ge.bind(n))}if(i){const Ae=i.call(n,n);Re(Ae)&&(t.data=Sl(Ae))}if(Ru=!0,r)for(const Ae in r){const ge=r[Ae],Cn=ne(ge)?ge.bind(n,n):ne(ge.get)?ge.get.bind(n,n):Xt,qn=!ne(ge)&&ne(ge.set)?ge.set.bind(n):Xt,sn=Kt({get:Cn,set:qn});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>sn.value,set:wt=>sn.value=wt})}if(a)for(const Ae in a)X_(a[Ae],s,n,Ae);if(l){const Ae=ne(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(ge=>{_a(ge,Ae[ge])})}u&&ip(u,t,"c");function Le(Ae,ge){G(ge)?ge.forEach(Cn=>Ae(Cn.bind(n))):ge&&Ae(ge.bind(n))}if(Le(d0,h),Le(W_,d),Le(f0,f),Le(p0,m),Le(c0,y),Le(u0,v),Le(_0,F),Le(m0,j),Le(g0,te),Le(K_,S),Le(z_,w),Le(G_,se),G(ie))if(ie.length){const Ae=t.exposed||(t.exposed={});ie.forEach(ge=>{Object.defineProperty(Ae,ge,{get:()=>n[ge],set:Cn=>n[ge]=Cn})})}else t.exposed||(t.exposed={});$&&t.render===Xt&&(t.render=$),Oe!=null&&(t.inheritAttrs=Oe),q&&(t.components=q),ve&&(t.directives=ve)}function A0(t,e,n=Xt){G(t)&&(t=Cu(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Nt(i.from||s,i.default,!0):r=Nt(i.from||s):r=Nt(i),nt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ip(t,e,n){$t(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function X_(t,e,n,s){const i=s.includes(".")?B_(n,s):()=>n[s];if(Ve(t)){const r=e[t];ne(r)&&yi(i,r)}else if(ne(t))yi(i,t.bind(n));else if(Re(t))if(G(t))t.forEach(r=>X_(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&yi(i,r,t)}}function zh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),Re(e)&&r.set(e,l),l}function Na(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Na(t,r,n,!0),i&&i.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=R0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const R0={data:rp,props:op,emits:op,methods:_r,computed:_r,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:_r,directives:_r,watch:S0,provide:rp,inject:C0};function rp(t,e){return e?t?function(){return je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function C0(t,e){return _r(Cu(t),Cu(e))}function Cu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function _r(t,e){return t?je(Object.create(null),t,e):e}function op(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:je(Object.create(null),sp(t),sp(e??{})):e}function S0(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const s in e)n[s]=Et(t[s],e[s]);return n}function J_(){return{app:null,config:{isNativeTag:JI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b0=0;function P0(t,e){return function(s,i=null){ne(s)||(s=je({},s)),i!=null&&!Re(i)&&(i=null);const r=J_(),o=new Set;let a=!1;const l=r.app={_uid:b0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:nA,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=He(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ll(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Oa=l;try{return c()}finally{Oa=null}}};return l}}let Oa=null;function _a(t,e){if(Qe){let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Qe||st;if(s||Oa){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Oa._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s&&s.proxy):e}}function k0(t,e,n,s=!1){const i={},r={};ba(r,Ml,1),t.propsDefaults=Object.create(null),Z_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:R_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function N0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Pl(t.emitsOptions,d))continue;const f=e[d];if(l)if(he(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=_n(d);i[m]=Su(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Z_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=qi(h))===h||!he(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Su(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!he(e,h))&&(delete r[h],c=!0)}c&&Vn(t,"set","$attrs")}function Z_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ga(l))continue;const c=e[l];let u;i&&he(i,u=_n(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Su(i,l,h,c[h],t,!he(c,h))}}return o}function Su(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(bi(i),s=c[n]=l.call(null,e),Ms())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===qi(n))&&(s=!0))}return s}function ey(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[d,f]=ey(h,e,!0);je(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,pi),pi;if(G(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);ap(h)&&(o[h]=be)}else if(r)for(const u in r){const h=_n(u);if(ap(h)){const d=r[u],f=o[h]=G(d)||ne(d)?{type:d}:je({},d);if(f){const m=up(Boolean,f.type),y=up(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||he(f,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&s.set(t,c),c}function ap(t){return t[0]!=="$"}function lp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cp(t,e){return lp(t)===lp(e)}function up(t,e){return G(e)?e.findIndex(n=>cp(n,t)):ne(e)&&cp(e,t)?0:-1}const ty=t=>t[0]==="_"||t==="$stable",Gh=t=>G(t)?t.map(an):[an(t)],O0=(t,e,n)=>{if(e._n)return e;const s=oi((...i)=>Gh(e(...i)),n);return s._c=!1,s},ny=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ty(i))continue;const r=t[i];if(ne(r))e[i]=O0(i,r,s);else if(r!=null){const o=Gh(r);e[i]=()=>o}}},sy=(t,e)=>{const n=Gh(e);t.slots.default=()=>n},D0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),ba(e,"_",n)):ny(e,t.slots={})}else t.slots={},e&&sy(t,e);ba(t.slots,Ml,1)},x0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(je(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ny(e,i)),o=e}else e&&(sy(t,e),o={default:1});if(r)for(const a in i)!ty(a)&&!(a in o)&&delete i[a]};function bu(t,e,n,s,i=!1){if(G(t)){t.forEach((d,f)=>bu(d,e&&(G(e)?e[f]:e),n,s,i));return}if(Ar(s)&&!i)return;const r=s.shapeFlag&4?Ll(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ve(c)?(u[c]=null,he(h,c)&&(h[c]=null)):nt(c)&&(c.value=null)),ne(l))rs(l,a,12,[o,u]);else{const d=Ve(l),f=nt(l);if(d||f){const m=()=>{if(t.f){const y=d?he(h,l)?h[l]:u[l]:l.value;i?G(y)&&Dh(y,r):G(y)?y.includes(r)||y.push(r):d?(u[l]=[r],he(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,he(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,At(m,n)):m()}}}const At=i0;function M0(t){return L0(t)}function L0(t,e){const n=mu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Xt,insertStaticContent:m}=t,y=(p,g,_,E=null,A=null,C=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Cs(p,g)&&(E=T(p),wt(p,A,C,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:b,ref:K,shapeFlag:B}=g;switch(b){case xl:v(p,g,_,E);break;case jt:I(p,g,_,E);break;case Oc:p==null&&S(g,_,E,L);break;case Lt:q(p,g,_,E,A,C,L,N,O);break;default:B&1?$(p,g,_,E,A,C,L,N,O):B&6?ve(p,g,_,E,A,C,L,N,O):(B&64||B&128)&&b.process(p,g,_,E,A,C,L,N,O,D)}K!=null&&A&&bu(K,p&&p.ref,C,g||p,!g)},v=(p,g,_,E)=>{if(p==null)s(g.el=a(g.children),_,E);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},I=(p,g,_,E)=>{p==null?s(g.el=l(g.children||""),_,E):g.el=p.el},S=(p,g,_,E)=>{[p.el,p.anchor]=m(p.children,g,_,E,p.el,p.anchor)},P=({el:p,anchor:g},_,E)=>{let A;for(;p&&p!==g;)A=d(p),s(p,_,E),p=A;s(g,_,E)},w=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),i(p),p=_;i(g)},$=(p,g,_,E,A,C,L,N,O)=>{L=L||g.type==="svg",p==null?j(g,_,E,A,C,L,N,O):se(p,g,A,C,L,N,O)},j=(p,g,_,E,A,C,L,N)=>{let O,b;const{type:K,props:B,shapeFlag:z,transition:Z,dirs:re}=p;if(O=p.el=o(p.type,C,B&&B.is,B),z&8?u(O,p.children):z&16&&F(p.children,O,null,E,A,C&&K!=="foreignObject",L,N),re&&vs(p,null,E,"created"),te(O,p,p.scopeId,L,E),B){for(const Ie in B)Ie!=="value"&&!ga(Ie)&&r(O,Ie,null,B[Ie],C,p.children,E,A,ot);"value"in B&&r(O,"value",null,B.value),(b=B.onVnodeBeforeMount)&&on(b,E,p)}re&&vs(p,null,E,"beforeMount");const Ce=(!A||A&&!A.pendingBranch)&&Z&&!Z.persisted;Ce&&Z.beforeEnter(O),s(O,g,_),((b=B&&B.onVnodeMounted)||Ce||re)&&At(()=>{b&&on(b,E,p),Ce&&Z.enter(O),re&&vs(p,null,E,"mounted")},A)},te=(p,g,_,E,A)=>{if(_&&f(p,_),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(A){let C=A.subTree;if(g===C){const L=A.vnode;te(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,_,E,A,C,L,N,O=0)=>{for(let b=O;b<p.length;b++){const K=p[b]=N?Yn(p[b]):an(p[b]);y(null,K,g,_,E,A,C,L,N)}},se=(p,g,_,E,A,C,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:b,dirs:K}=g;O|=p.patchFlag&16;const B=p.props||be,z=g.props||be;let Z;_&&Es(_,!1),(Z=z.onVnodeBeforeUpdate)&&on(Z,_,g,p),K&&vs(g,p,_,"beforeUpdate"),_&&Es(_,!0);const re=A&&g.type!=="foreignObject";if(b?ie(p.dynamicChildren,b,N,_,E,re,C):L||ge(p,g,N,null,_,E,re,C,!1),O>0){if(O&16)Oe(N,g,B,z,_,E,A);else if(O&2&&B.class!==z.class&&r(N,"class",null,z.class,A),O&4&&r(N,"style",B.style,z.style,A),O&8){const Ce=g.dynamicProps;for(let Ie=0;Ie<Ce.length;Ie++){const Ue=Ce[Ie],qt=B[Ue],ni=z[Ue];(ni!==qt||Ue==="value")&&r(N,Ue,qt,ni,A,p.children,_,E,ot)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&b==null&&Oe(N,g,B,z,_,E,A);((Z=z.onVnodeUpdated)||K)&&At(()=>{Z&&on(Z,_,g,p),K&&vs(g,p,_,"updated")},E)},ie=(p,g,_,E,A,C,L)=>{for(let N=0;N<g.length;N++){const O=p[N],b=g[N],K=O.el&&(O.type===Lt||!Cs(O,b)||O.shapeFlag&70)?h(O.el):_;y(O,b,K,null,E,A,C,L,!0)}},Oe=(p,g,_,E,A,C,L)=>{if(_!==E){if(_!==be)for(const N in _)!ga(N)&&!(N in E)&&r(p,N,_[N],null,L,g.children,A,C,ot);for(const N in E){if(ga(N))continue;const O=E[N],b=_[N];O!==b&&N!=="value"&&r(p,N,b,O,L,g.children,A,C,ot)}"value"in E&&r(p,"value",_.value,E.value)}},q=(p,g,_,E,A,C,L,N,O)=>{const b=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:Z}=g;Z&&(N=N?N.concat(Z):Z),p==null?(s(b,_,E),s(K,_,E),F(g.children,_,K,A,C,L,N,O)):B>0&&B&64&&z&&p.dynamicChildren?(ie(p.dynamicChildren,z,_,A,C,L,N),(g.key!=null||A&&g===A.subTree)&&Qh(p,g,!0)):ge(p,g,_,K,A,C,L,N,O)},ve=(p,g,_,E,A,C,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?A.ctx.activate(g,_,E,L,O):vt(g,_,E,A,C,L,O):Rn(p,g,O)},vt=(p,g,_,E,A,C,L)=>{const N=p.component=z0(p,E,A);if(Ol(p)&&(N.ctx.renderer=D),G0(N),N.asyncDep){if(A&&A.registerDep(N,Le),!p.el){const O=N.subTree=He(jt);I(null,O,g,_)}return}Le(N,p,g,_,A,C,L)},Rn=(p,g,_)=>{const E=g.component=p.component;if(t0(p,g,_))if(E.asyncDep&&!E.asyncResolved){Ae(E,g,_);return}else E.next=g,zw(E.update),E.update();else g.el=p.el,E.vnode=g},Le=(p,g,_,E,A,C,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:B,u:z,parent:Z,vnode:re}=p,Ce=K,Ie;Es(p,!1),K?(K.el=re.el,Ae(p,K,L)):K=re,B&&ma(B),(Ie=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ie,Z,K,re),Es(p,!0);const Ue=Pc(p),qt=p.subTree;p.subTree=Ue,y(qt,Ue,h(qt.el),T(qt),p,A,C),K.el=Ue.el,Ce===null&&n0(p,Ue.el),z&&At(z,A),(Ie=K.props&&K.props.onVnodeUpdated)&&At(()=>on(Ie,Z,K,re),A)}else{let K;const{el:B,props:z}=g,{bm:Z,m:re,parent:Ce}=p,Ie=Ar(g);if(Es(p,!1),Z&&ma(Z),!Ie&&(K=z&&z.onVnodeBeforeMount)&&on(K,Ce,g),Es(p,!0),B&&me){const Ue=()=>{p.subTree=Pc(p),me(B,p.subTree,p,A,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=Pc(p);y(null,Ue,_,E,p,A,C),g.el=Ue.el}if(re&&At(re,A),!Ie&&(K=z&&z.onVnodeMounted)){const Ue=g;At(()=>on(K,Ce,Ue),A)}(g.shapeFlag&256||Ce&&Ar(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&At(p.a,A),p.isMounted=!0,g=_=E=null}},O=p.effect=new Fh(N,()=>Kh(b),p.scope),b=p.update=()=>O.run();b.id=p.uid,Es(p,!0),b()},Ae=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,N0(p,g.props,E,_),x0(p,g.children,_),Wi(),Zf(),Ki()},ge=(p,g,_,E,A,C,L,N,O=!1)=>{const b=p&&p.children,K=p?p.shapeFlag:0,B=g.children,{patchFlag:z,shapeFlag:Z}=g;if(z>0){if(z&128){qn(b,B,_,E,A,C,L,N,O);return}else if(z&256){Cn(b,B,_,E,A,C,L,N,O);return}}Z&8?(K&16&&ot(b,A,C),B!==b&&u(_,B)):K&16?Z&16?qn(b,B,_,E,A,C,L,N,O):ot(b,A,C,!0):(K&8&&u(_,""),Z&16&&F(B,_,E,A,C,L,N,O))},Cn=(p,g,_,E,A,C,L,N,O)=>{p=p||pi,g=g||pi;const b=p.length,K=g.length,B=Math.min(b,K);let z;for(z=0;z<B;z++){const Z=g[z]=O?Yn(g[z]):an(g[z]);y(p[z],Z,_,null,A,C,L,N,O)}b>K?ot(p,A,C,!0,!1,B):F(g,_,E,A,C,L,N,O,B)},qn=(p,g,_,E,A,C,L,N,O)=>{let b=0;const K=g.length;let B=p.length-1,z=K-1;for(;b<=B&&b<=z;){const Z=p[b],re=g[b]=O?Yn(g[b]):an(g[b]);if(Cs(Z,re))y(Z,re,_,null,A,C,L,N,O);else break;b++}for(;b<=B&&b<=z;){const Z=p[B],re=g[z]=O?Yn(g[z]):an(g[z]);if(Cs(Z,re))y(Z,re,_,null,A,C,L,N,O);else break;B--,z--}if(b>B){if(b<=z){const Z=z+1,re=Z<K?g[Z].el:E;for(;b<=z;)y(null,g[b]=O?Yn(g[b]):an(g[b]),_,re,A,C,L,N,O),b++}}else if(b>z)for(;b<=B;)wt(p[b],A,C,!0),b++;else{const Z=b,re=b,Ce=new Map;for(b=re;b<=z;b++){const bt=g[b]=O?Yn(g[b]):an(g[b]);bt.key!=null&&Ce.set(bt.key,b)}let Ie,Ue=0;const qt=z-re+1;let ni=!1,$f=0;const or=new Array(qt);for(b=0;b<qt;b++)or[b]=0;for(b=Z;b<=B;b++){const bt=p[b];if(Ue>=qt){wt(bt,A,C,!0);continue}let rn;if(bt.key!=null)rn=Ce.get(bt.key);else for(Ie=re;Ie<=z;Ie++)if(or[Ie-re]===0&&Cs(bt,g[Ie])){rn=Ie;break}rn===void 0?wt(bt,A,C,!0):(or[rn-re]=b+1,rn>=$f?$f=rn:ni=!0,y(bt,g[rn],_,null,A,C,L,N,O),Ue++)}const jf=ni?V0(or):pi;for(Ie=jf.length-1,b=qt-1;b>=0;b--){const bt=re+b,rn=g[bt],Hf=bt+1<K?g[bt+1].el:E;or[b]===0?y(null,rn,_,Hf,A,C,L,N,O):ni&&(Ie<0||b!==jf[Ie]?sn(rn,_,Hf,2):Ie--)}}},sn=(p,g,_,E,A=null)=>{const{el:C,type:L,transition:N,children:O,shapeFlag:b}=p;if(b&6){sn(p.component.subTree,g,_,E);return}if(b&128){p.suspense.move(g,_,E);return}if(b&64){L.move(p,g,_,D);return}if(L===Lt){s(C,g,_);for(let B=0;B<O.length;B++)sn(O[B],g,_,E);s(p.anchor,g,_);return}if(L===Oc){P(p,g,_);return}if(E!==2&&b&1&&N)if(E===0)N.beforeEnter(C),s(C,g,_),At(()=>N.enter(C),A);else{const{leave:B,delayLeave:z,afterLeave:Z}=N,re=()=>s(C,g,_),Ce=()=>{B(C,()=>{re(),Z&&Z()})};z?z(C,re,Ce):Ce()}else s(C,g,_)},wt=(p,g,_,E=!1,A=!1)=>{const{type:C,props:L,ref:N,children:O,dynamicChildren:b,shapeFlag:K,patchFlag:B,dirs:z}=p;if(N!=null&&bu(N,null,_,p,!0),K&256){g.ctx.deactivate(p);return}const Z=K&1&&z,re=!Ar(p);let Ce;if(re&&(Ce=L&&L.onVnodeBeforeUnmount)&&on(Ce,g,p),K&6)Wo(p.component,_,E);else{if(K&128){p.suspense.unmount(_,E);return}Z&&vs(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,_,A,D,E):b&&(C!==Lt||B>0&&B&64)?ot(b,g,_,!1,!0):(C===Lt&&B&384||!A&&K&16)&&ot(O,g,_),E&&ei(p)}(re&&(Ce=L&&L.onVnodeUnmounted)||Z)&&At(()=>{Ce&&on(Ce,g,p),Z&&vs(p,null,g,"unmounted")},_)},ei=p=>{const{type:g,el:_,anchor:E,transition:A}=p;if(g===Lt){ti(_,E);return}if(g===Oc){w(p);return}const C=()=>{i(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:N}=A,O=()=>L(_,C);N?N(p.el,C,O):O()}else C()},ti=(p,g)=>{let _;for(;p!==g;)_=d(p),i(p),p=_;i(g)},Wo=(p,g,_)=>{const{bum:E,scope:A,update:C,subTree:L,um:N}=p;E&&ma(E),A.stop(),C&&(C.active=!1,wt(L,p,g,_)),N&&At(N,g),At(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ot=(p,g,_,E=!1,A=!1,C=0)=>{for(let L=C;L<p.length;L++)wt(p[L],g,_,E,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,_)=>{p==null?g._vnode&&wt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,_),Zf(),L_(),g._vnode=p},D={p:y,um:wt,m:sn,r:ei,mt:vt,mc:F,pc:ge,pbc:ie,n:T,o:t};let W,me;return e&&([W,me]=e(D)),{render:V,hydrate:W,createApp:P0(V,W)}}function Es({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qh(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Yn(i[r]),a.el=o.el),n||Qh(o,a)),a.type===xl&&(a.el=o.el)}}function V0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const F0=t=>t.__isTeleport,Cr=t=>t&&(t.disabled||t.disabled===""),hp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Pu=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},U0={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:m,createText:y,createComment:v}}=c,I=Cr(e.props);let{shapeFlag:S,children:P,dynamicChildren:w}=e;if(t==null){const $=e.el=y(""),j=e.anchor=y("");f($,n,s),f(j,n,s);const te=e.target=Pu(e.props,m),F=e.targetAnchor=y("");te&&(f(F,te),o=o||hp(te));const se=(ie,Oe)=>{S&16&&u(P,ie,Oe,i,r,o,a,l)};I?se(n,j):te&&se(te,F)}else{e.el=t.el;const $=e.anchor=t.anchor,j=e.target=t.target,te=e.targetAnchor=t.targetAnchor,F=Cr(t.props),se=F?n:j,ie=F?$:te;if(o=o||hp(j),w?(d(t.dynamicChildren,w,se,i,r,o,a),Qh(t,e,!0)):l||h(t,e,se,ie,i,r,o,a,!1),I)F||Jo(e,n,$,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Oe=e.target=Pu(e.props,m);Oe&&Jo(e,Oe,null,c,0)}else F&&Jo(e,j,te,c,1)}iy(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!Cr(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const m=l[f];i(m,e,n,!0,!!m.dynamicChildren)}},move:Jo,hydrate:B0};function Jo(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Cr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function B0(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Pu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Cr(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}iy(e)}return e.anchor&&o(e.anchor)}const PL=U0;function iy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Lt=Symbol.for("v-fgt"),xl=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Oc=Symbol.for("v-stc"),Sr=[];let Gt=null;function mo(t=!1){Sr.push(Gt=t?null:[])}function $0(){Sr.pop(),Gt=Sr[Sr.length-1]||null}let Wr=1;function dp(t){Wr+=t}function ry(t){return t.dynamicChildren=Wr>0?Gt||pi:null,$0(),Wr>0&&Gt&&Gt.push(t),t}function oy(t,e,n,s,i,r){return ry(Xh(t,e,n,s,i,r,!0))}function Yh(t,e,n,s,i){return ry(He(t,e,n,s,i,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Ml="__vInternal",ay=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||nt(t)||ne(t)?{i:st,r:t,k:e,f:!!n}:t:null);function Xh(t,e=null,n=null,s=0,i=null,r=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ay(e),ref:e&&ya(e),scopeId:kl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return a?(Jh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ve(n)?8:16),Wr>0&&!o&&Gt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gt.push(l),l}const He=j0;function j0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===v0)&&(t=jt),Da(t)){const a=hs(t,e,!0);return n&&Jh(a,n),Wr>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(Z0(t)&&(t=t.__vccOpts),e){e=H0(e);let{class:a,style:l}=e;a&&!Ve(a)&&(e.class=Lh(a)),Re(l)&&(S_(l)&&!G(l)&&(l=je({},l)),e.style=Mh(l))}const o=Ve(t)?1:s0(t)?128:F0(t)?64:Re(t)?4:ne(t)?2:0;return Xh(t,e,n,s,i,o,r,!0)}function H0(t){return t?S_(t)||Ml in t?je({},t):t:null}function hs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?q0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ay(a),ref:e&&e.ref?n&&i?G(i)?i.concat(ya(e)):[i,ya(e)]:ya(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function va(t=" ",e=0){return He(xl,null,t,e)}function kL(t="",e=!1){return e?(mo(),Yh(jt,null,t)):He(jt,null,t)}function an(t){return t==null||typeof t=="boolean"?He(jt):G(t)?He(Lt,null,t.slice()):typeof t=="object"?Yn(t):He(xl,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function Jh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Jh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ml in e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[va(e)]):n=8);t.children=e,t.shapeFlag|=n}function q0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Lh([e.class,s.class]));else if(i==="style")e.style=Mh([e.style,s.style]);else if(Tl(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){$t(t,e,7,[n,s])}const W0=J_();let K0=0;function z0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||W0,r={uid:K0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new d_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ey(s,i),emitsOptions:F_(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yw.bind(null,r),t.ce&&t.ce(r),r}let Qe=null;const Zh=()=>Qe||st;let ed,si,fp="__VUE_INSTANCE_SETTERS__";(si=mu()[fp])||(si=mu()[fp]=[]),si.push(t=>Qe=t),ed=t=>{si.length>1?si.forEach(e=>e(t)):si[0](t)};const bi=t=>{ed(t),t.scope.on()},Ms=()=>{Qe&&Qe.scope.off(),ed(null)};function ly(t){return t.vnode.shapeFlag&4}let Kr=!1;function G0(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,i=ly(t);k0(t,n,i,e),D0(t,s);const r=i?Q0(t,e):void 0;return Kr=!1,r}function Q0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hh(new Proxy(t.ctx,I0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?X0(t):null;bi(t),Wi();const r=rs(s,t,0,[t.props,i]);if(Ki(),Ms(),o_(r)){if(r.then(Ms,Ms),e)return r.then(o=>{pp(t,o,e)}).catch(o=>{bl(o,t,0)});t.asyncDep=r}else pp(t,r,e)}else cy(t,e)}function pp(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=O_(e)),cy(t,n)}let gp;function cy(t,e,n){const s=t.type;if(!t.render){if(!e&&gp&&!s.render){const i=s.template||zh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=je(je({isCustomElement:r,delimiters:a},o),l);s.render=gp(i,c)}}t.render=s.render||Xt}bi(t),Wi(),w0(t),Ki(),Ms()}function Y0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function X0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Y0(t)},slots:t.slots,emit:t.emit,expose:e}}function Ll(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(O_(Hh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}}))}function J0(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function Z0(t){return ne(t)&&"__vccOpts"in t}const Kt=(t,e)=>qw(t,e,Kr);function td(t,e,n){const s=arguments.length;return s===2?Re(e)&&!G(e)?Da(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Da(n)&&(n=[n]),He(t,e,n))}const eA=Symbol.for("v-scx"),tA=()=>Nt(eA),nA="3.3.4",sA="http://www.w3.org/2000/svg",Ss=typeof document<"u"?document:null,mp=Ss&&Ss.createElement("template"),iA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ss.createElementNS(sA,t):Ss.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ss.createTextNode(t),createComment:t=>Ss.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ss.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{mp.innerHTML=s?`<svg>${t}</svg>`:t;const a=mp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rA(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function oA(t,e,n){const s=t.style,i=Ve(n);if(n&&!i){if(e&&!Ve(e))for(const r in e)n[r]==null&&ku(s,r,"");for(const r in n)ku(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const _p=/\s*!important$/;function ku(t,e,n){if(G(n))n.forEach(s=>ku(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=aA(t,e);_p.test(n)?t.setProperty(qi(s),n.replace(_p,""),"important"):t[s]=n}}const yp=["Webkit","Moz","ms"],Dc={};function aA(t,e){const n=Dc[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return Dc[e]=s;s=Al(s);for(let i=0;i<yp.length;i++){const r=yp[i]+s;if(r in t)return Dc[e]=r}return e}const vp="http://www.w3.org/1999/xlink";function lA(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vp,e.slice(6,e.length)):t.setAttributeNS(vp,e,n);else{const r=uw(e);n==null||r&&!u_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function cA(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=u_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function uy(t,e,n,s){t.addEventListener(e,n,s)}function uA(t,e,n,s){t.removeEventListener(e,n,s)}function hA(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=dA(e);if(s){const c=r[e]=gA(s,i);uy(t,a,c,l)}else o&&(uA(t,a,o,l),r[e]=void 0)}}const Ep=/(?:Once|Passive|Capture)$/;function dA(t){let e;if(Ep.test(t)){e={};let s;for(;s=t.match(Ep);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qi(t.slice(2)),e]}let xc=0;const fA=Promise.resolve(),pA=()=>xc||(fA.then(()=>xc=0),xc=Date.now());function gA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(mA(s,n.value),e,5,[s])};return n.value=t,n.attached=pA(),n}function mA(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Tp=/^on[a-z]/,_A=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?rA(t,s,i):e==="style"?oA(t,n,s):Tl(e)?Oh(e)||hA(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yA(t,e,s,i))?cA(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lA(t,e,s,i))};function yA(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tp.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tp.test(e)&&Ve(n)?!1:e in t}const Kn="transition",ar="animation",hy=(t,{slots:e})=>td(l0,vA(t),e);hy.displayName="Transition";const dy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hy.props=je({},$_,dy);const Ts=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ip=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function vA(t){const e={};for(const q in t)q in dy||(e[q]=t[q]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=EA(i),y=m&&m[0],v=m&&m[1],{onBeforeEnter:I,onEnter:S,onEnterCancelled:P,onLeave:w,onLeaveCancelled:$,onBeforeAppear:j=I,onAppear:te=S,onAppearCancelled:F=P}=e,se=(q,ve,vt)=>{Is(q,ve?u:a),Is(q,ve?c:o),vt&&vt()},ie=(q,ve)=>{q._isLeaving=!1,Is(q,h),Is(q,f),Is(q,d),ve&&ve()},Oe=q=>(ve,vt)=>{const Rn=q?te:S,Le=()=>se(ve,q,vt);Ts(Rn,[ve,Le]),wp(()=>{Is(ve,q?l:r),zn(ve,q?u:a),Ip(Rn)||Ap(ve,s,y,Le)})};return je(e,{onBeforeEnter(q){Ts(I,[q]),zn(q,r),zn(q,o)},onBeforeAppear(q){Ts(j,[q]),zn(q,l),zn(q,c)},onEnter:Oe(!1),onAppear:Oe(!0),onLeave(q,ve){q._isLeaving=!0;const vt=()=>ie(q,ve);zn(q,h),wA(),zn(q,d),wp(()=>{q._isLeaving&&(Is(q,h),zn(q,f),Ip(w)||Ap(q,s,v,vt))}),Ts(w,[q,vt])},onEnterCancelled(q){se(q,!1),Ts(P,[q])},onAppearCancelled(q){se(q,!0),Ts(F,[q])},onLeaveCancelled(q){ie(q),Ts($,[q])}})}function EA(t){if(t==null)return null;if(Re(t))return[Mc(t.enter),Mc(t.leave)];{const e=Mc(t);return[e,e]}}function Mc(t){return iw(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Is(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function wp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let TA=0;function Ap(t,e,n,s){const i=t._endId=++TA,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=IA(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function IA(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Kn}Delay`),r=s(`${Kn}Duration`),o=Rp(i,r),a=s(`${ar}Delay`),l=s(`${ar}Duration`),c=Rp(a,l);let u=null,h=0,d=0;e===Kn?o>0&&(u=Kn,h=o,d=r.length):e===ar?c>0&&(u=ar,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Kn:ar:null,d=u?u===Kn?r.length:l.length:0);const f=u===Kn&&/\b(transform|all)(,|$)/.test(s(`${Kn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Rp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cp(n)+Cp(t[s])))}function Cp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function wA(){return document.body.offsetHeight}const Sp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ma(e,n):e},NL={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Il(e);uy(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?c_(xa(o)):xa(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Sp(s)},mounted(t,{value:e}){bp(t,e)},beforeUpdate(t,e,n){t._assign=Sp(n)},updated(t,{value:e}){bp(t,e)}};function bp(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Il(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=xa(r);if(n)G(e)?r.selected=dw(e,o)>-1:r.selected=e.has(o);else if(Rl(xa(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xa(t){return"_value"in t?t._value:t.value}const AA=["ctrl","shift","alt","meta"],RA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>AA.some(n=>t[`${n}Key`]&&!e.includes(n))},OL=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=RA[e[i]];if(r&&r(n,e))return}return t(n,...s)},CA=je({patchProp:_A},iA);let Pp;function SA(){return Pp||(Pp=M0(CA))}const bA=(...t)=>{const e=SA().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=PA(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function PA(t){return Ve(t)?document.querySelector(t):t}/**
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
 */const fy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw zi(e)},zi=function(t){return new Error("Firebase Database ("+fy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const py=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(py(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new NA;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gy=function(t){const e=py(t);return Vl.encodeByteArray(e,!0)},Ma=function(t){return gy(t).replace(/\./g,"")},La=function(t){try{return Vl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OA(t){return my(void 0,t)}function my(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DA(n)||(t[n]=my(t[n],e[n]));return t}function DA(t){return t!=="__proto__"}/**
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
 */function xA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MA=()=>xA().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return MA()||LA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_y=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FA=t=>{const e=_y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yy=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config},vy=t=>{var e;return(e=nd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function UA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),a].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function BA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ey(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ty(){return fy.NODE_ADMIN===!0}function Iy(){try{return typeof indexedDB=="object"}catch{return!1}}function jA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const HA="FirebaseError";class wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=HA,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?qA(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,s)}}function qA(t,e){return t.replace(WA,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const WA=/\{\$([^}]+)}/g;/**
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
 */function Gr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
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
 */const wy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Gr(La(r[0])||""),n=Gr(La(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},KA=function(t){const e=wy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zA=function(t){const e=wy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Va(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fa(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(kp(r)&&kp(o)){if(!Fa(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function kp(t){return t!==null&&typeof t=="object"}/**
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
 */function Qi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class GA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function QA(t,e){const n=new YA(t,e);return n.subscribe.bind(n)}class YA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");XA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}function JA(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ZA=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class eR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nR(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tR(t){return t===ws?void 0:t}function nR(t){return t.instantiationMode==="EAGER"}/**
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
 */class sR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const iR={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},rR=de.INFO,oR={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=oR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const lR=(t,e)=>e.some(n=>t instanceof n);let Np,Op;function cR(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uR(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ay=new WeakMap,Ou=new WeakMap,Ry=new WeakMap,Vc=new WeakMap,id=new WeakMap;function hR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(os(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ay.set(n,t)}).catch(()=>{}),id.set(e,t),e}function dR(t){if(Ou.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fR(t){Du=t(Du)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fc(this),e,...n);return Ry.set(s,e.sort?e.sort():[e]),os(s)}:uR().includes(t)?function(...e){return t.apply(Fc(this),e),os(Ay.get(this))}:function(...e){return os(t.apply(Fc(this),e))}}function gR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&dR(t),lR(t,cR())?new Proxy(t,Du):t)}function os(t){if(t instanceof IDBRequest)return hR(t);if(Vc.has(t))return Vc.get(t);const e=gR(t);return e!==t&&(Vc.set(t,e),id.set(e,t)),e}const Fc=t=>id.get(t);function mR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=os(o);return s&&o.addEventListener("upgradeneeded",l=>{s(os(o.result),l.oldVersion,l.newVersion,os(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _R=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],Uc=new Map;function Dp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=yR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_R.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Uc.set(e,r),r}fR(t=>({...t,get:(e,n,s)=>Dp(e,n)||t.get(e,n,s),has:(e,n)=>!!Dp(e,n)||t.has(e,n)}));/**
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
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ER(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ER(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",xp="0.9.15";/**
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
 */const Us=new _o("@firebase/app"),TR="@firebase/app-compat",IR="@firebase/analytics-compat",wR="@firebase/analytics",AR="@firebase/app-check-compat",RR="@firebase/app-check",CR="@firebase/auth",SR="@firebase/auth-compat",bR="@firebase/database",PR="@firebase/database-compat",kR="@firebase/functions",NR="@firebase/functions-compat",OR="@firebase/installations",DR="@firebase/installations-compat",xR="@firebase/messaging",MR="@firebase/messaging-compat",LR="@firebase/performance",VR="@firebase/performance-compat",FR="@firebase/remote-config",UR="@firebase/remote-config-compat",BR="@firebase/storage",$R="@firebase/storage-compat",jR="@firebase/firestore",HR="@firebase/firestore-compat",qR="firebase",WR="10.1.0";/**
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
 */const Mu="[DEFAULT]",KR={[xu]:"fire-core",[TR]:"fire-core-compat",[wR]:"fire-analytics",[IR]:"fire-analytics-compat",[RR]:"fire-app-check",[AR]:"fire-app-check-compat",[CR]:"fire-auth",[SR]:"fire-auth-compat",[bR]:"fire-rtdb",[PR]:"fire-rtdb-compat",[kR]:"fire-fn",[NR]:"fire-fn-compat",[OR]:"fire-iid",[DR]:"fire-iid-compat",[xR]:"fire-fcm",[MR]:"fire-fcm-compat",[LR]:"fire-perf",[VR]:"fire-perf-compat",[FR]:"fire-rc",[UR]:"fire-rc-compat",[BR]:"fire-gcs",[$R]:"fire-gcs-compat",[jR]:"fire-fst",[HR]:"fire-fst-compat","fire-js":"fire-js",[qR]:"fire-js-all"};/**
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
 */const Ua=new Map,Lu=new Map;function zR(t,e){try{t.container.addComponent(e)}catch(n){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Lu.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of Ua.values())zR(n,t);return!0}function rd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const GR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},as=new Gi("app","Firebase",GR);/**
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
 */class QR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=WR;function Cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw as.create("bad-app-name",{appName:String(i)});if(n||(n=yy()),!n)throw as.create("no-options");const r=Ua.get(i);if(r){if(Fa(n,r.options)&&Fa(s,r.config))return r;throw as.create("duplicate-app",{appName:i})}const o=new sR(i);for(const l of Lu.values())o.addComponent(l);const a=new QR(n,s,o);return Ua.set(i,a),a}function od(t=Mu){const e=Ua.get(t);if(!e&&t===Mu&&yy())return Cy();if(!e)throw as.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let i=(s=KR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(a.join(" "));return}yn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YR="firebase-heartbeat-database",XR=1,Qr="firebase-heartbeat-store";let Bc=null;function Sy(){return Bc||(Bc=mR(YR,XR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}}).catch(t=>{throw as.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function JR(t){try{return await(await Sy()).transaction(Qr).objectStore(Qr).get(by(t))}catch(e){if(e instanceof wn)Us.warn(e.message);else{const n=as.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Us.warn(n.message)}}}async function Mp(t,e){try{const s=(await Sy()).transaction(Qr,"readwrite");await s.objectStore(Qr).put(e,by(t)),await s.done}catch(n){if(n instanceof wn)Us.warn(n.message);else{const s=as.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Us.warn(s.message)}}}function by(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZR=1024,eC=30*24*60*60*1e3;class tC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=eC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lp(),{heartbeatsToSend:n,unsentEntries:s}=nC(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lp(){return new Date().toISOString().substring(0,10)}function nC(t,e=ZR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Vp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iy()?jA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vp(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function iC(t){yn(new Zt("platform-logger",e=>new vR(e),"PRIVATE")),yn(new Zt("heartbeat",e=>new tC(e),"PRIVATE")),Ot(xu,xp,t),Ot(xu,xp,"esm2017"),Ot("fire-js","")}iC("");function ad(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rC=Py,ky=new Gi("auth","Firebase",Py());/**
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
 */const Ba=new _o("@firebase/auth");function oC(t,...e){Ba.logLevel<=de.WARN&&Ba.warn(`Auth (${ms}): ${t}`,...e)}function Ea(t,...e){Ba.logLevel<=de.ERROR&&Ba.error(`Auth (${ms}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw ld(t,...e)}function gn(t,...e){return ld(t,...e)}function Ny(t,e,n){const s=Object.assign(Object.assign({},rC()),{[e]:n});return new Gi("auth","Firebase",s).create(e,{appName:t.name})}function aC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&vn(t,"argument-error"),Ny(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ld(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ky.create(t,...e)}function ee(t,e,...n){if(!t)throw ld(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ea(e),new Error(e)}function Fn(t,e){t||Pn(e)}/**
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
 */function Vu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lC(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lC()||BA()||"connection"in navigator)?navigator.onLine:!0}function uC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||Ey()}get(){return cC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cd(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Oy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dC=new yo(3e4,6e4);function Dy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vo(t,e,n,s,i={}){return xy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Oy.fetch()(My(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function xy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hC),e);try{const i=new pC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ny(t,u,c);vn(t,u)}}catch(i){if(i instanceof wn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function fC(t,e,n,s,i={}){const r=await vo(t,e,n,s,i);return"mfaPendingCredential"in r&&vn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function My(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?cd(t.config,i):`${t.config.apiScheme}://${i}`}class pC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),dC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function gC(t,e){return vo(t,"POST","/v1/accounts:delete",e)}async function mC(t,e){return vo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _C(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=ud(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:br($c(i.auth_time)),issuedAtTime:br($c(i.iat)),expirationTime:br($c(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function ud(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=La(n);return i?JSON.parse(i):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yC(t){const e=ud(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wn&&vC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Yr(t,mC(n,{idToken:s}));ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wC(r.providerUserInfo):[],a=IC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ly(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TC(t){const e=rt(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function wC(t){return t.map(e=>{var{providerId:n}=e,s=ad(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function AC(t,e){const n=await xy(t,{},async()=>{const s=Qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=My(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Oy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await AC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xr;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Gn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ls{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ly(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _C(this,e)}reload(){return TC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yr(this,gC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:w,isAnonymous:$,providerData:j,stsTokenManager:te}=n;ee(P&&te,e,"internal-error");const F=Xr.fromJSON(this.name,te);ee(typeof P=="string",e,"internal-error"),Gn(h,e.name),Gn(d,e.name),ee(typeof w=="boolean",e,"internal-error"),ee(typeof $=="boolean",e,"internal-error"),Gn(f,e.name),Gn(m,e.name),Gn(y,e.name),Gn(v,e.name),Gn(I,e.name),Gn(S,e.name);const se=new Ls({uid:P,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:$,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:F,createdAt:I,lastLoginAt:S});return j&&Array.isArray(j)&&(se.providerData=j.map(ie=>Object.assign({},ie))),v&&(se._redirectEventId=v),se}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xr;i.updateFromServerResponse(n);const r=new Ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $a(r),r}}/**
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
 */const Up=new Map;function kn(t){Fn(t instanceof Function,"Expected a class definition");let e=Up.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Up.set(t,e),e)}/**
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
 */class Vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vy.type="NONE";const Bp=Vy;/**
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
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vi(kn(Bp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||kn(Bp);const o=Ta(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ls._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new vi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new vi(r,e,s))}}/**
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
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jy(e))return"Blackberry";if(Hy(e))return"Webos";if(hd(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fy(t=_t()){return/firefox\//i.test(t)}function hd(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(t=_t()){return/crios\//i.test(t)}function By(t=_t()){return/iemobile/i.test(t)}function $y(t=_t()){return/android/i.test(t)}function jy(t=_t()){return/blackberry/i.test(t)}function Hy(t=_t()){return/webos/i.test(t)}function Ul(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RC(t=_t()){var e;return Ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CC(){return $A()&&document.documentMode===10}function qy(t=_t()){return Ul(t)||$y(t)||Hy(t)||jy(t)||/windows phone/i.test(t)||By(t)}function SC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wy(t,e=[]){let n;switch(t){case"Browser":n=$p(_t());break;case"Worker":n=`${$p(_t())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${s}`}async function Ky(t,e){return vo(t,"GET","/v2/recaptchaConfig",Dy(t,e))}function jp(t){return t!==void 0&&t.enterprise!==void 0}class zy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function bC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",bC().appendChild(s)})}function PC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kC="https://www.google.com/recaptcha/enterprise.js?render=",NC="recaptcha-enterprise",OC="NO_RECAPTCHA";class DC{constructor(e){this.type=NC,this.auth=Yi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ky(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;jp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(OC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&jp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gy(kC+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class MC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}async initializeRecaptchaConfig(){const e=await Ky(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new DC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yi(t){return rt(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=QA(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function LC(t,e){const n=rd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Fa(r,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function VC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function FC(t,e,n){const s=Yi(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Qy(e),{host:o,port:a}=UC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BC()}function Qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UC(t){const e=Qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function Ei(t,e){return fC(t,"POST","/v1/accounts:signInWithIdp",Dy(t,e))}/**
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
 */const $C="http://localhost";class Bs extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ad(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Bs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ei(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qi(n)}return e}}/**
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
 */class dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends Eo{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class es extends Eo{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
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
 */class ts extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ts.credential(n,s)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
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
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ls._fromIdTokenResponse(e,s,i),o=Wp(s);return new ki({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Wp(s);return new ki({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ja extends wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ja(e,n,s,i)}}function Xy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(t,r,e,s):r})}async function jC(t,e,n=!1){const s=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",s)}/**
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
 */async function HC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Yr(t,Xy(s,i,e,t),n);ee(r.idToken,s,"internal-error");const o=ud(r.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),ki._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&vn(s,"user-mismatch"),r}}/**
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
 */async function qC(t,e,n=!1){const s="signIn",i=await Xy(t,s,e),r=await ki._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Jy(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function WC(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const Ha="__sak";/**
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
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KC(){const t=_t();return hd(t)||Ul(t)}const zC=1e3,GC=10;class ev extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KC()&&SC(),this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const QC=ev;/**
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
 */class tv extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
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
 */function YC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Bl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await YC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
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
 */function fd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=fd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function JC(t){mn().location.href=t}/**
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
 */function sv(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function ZC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tS(){return sv()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",nS=1,qa="firebaseLocalStorage",rv="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function sS(){const t=indexedDB.deleteDatabase(iv);return new To(t).toPromise()}function Fu(){const t=indexedDB.open(iv,nS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qa,{keyPath:rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qa)?e(s):(s.close(),await sS(),e(await Fu()))})})}async function Kp(t,e,n){const s=$l(t,!0).put({[rv]:e,value:n});return new To(s).toPromise()}async function iS(t,e){const n=$l(t,!1).get(e),s=await new To(n).toPromise();return s===void 0?null:s.value}function zp(t,e){const n=$l(t,!0).delete(e);return new To(n).toPromise()}const rS=800,oS=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>oS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(tS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZC(),!this.activeServiceWorker)return;this.sender=new XC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fu();return await Kp(e,Ha,"1"),await zp(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=$l(i,!1).getAll();return new To(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const aS=ov;new yo(3e4,6e4);/**
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
 */function av(t,e){return e?kn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pd extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lS(t){return qC(t.auth,new pd(t),t.bypassAuthState)}function cS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),HC(n,new pd(t),t.bypassAuthState)}async function uS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),jC(n,new pd(t),t.bypassAuthState)}/**
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
 */class lv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lS;case"linkViaPopup":case"linkViaRedirect":return uS;case"reauthViaPopup":case"reauthViaRedirect":return cS;default:vn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hS=new yo(2e3,1e4);async function DL(t,e,n){const s=Yi(t);aC(t,e,dd);const i=av(s,n);return new Ps(s,"signInViaPopup",e,i).executeNotNull()}class Ps extends lv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hS.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const dS="pendingRedirect",Ia=new Map;class fS extends lv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const s=await pS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pS(t,e){const n=_S(e),s=mS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gS(t,e){Ia.set(t._key(),e)}function mS(t){return kn(t._redirectPersistence)}function _S(t){return Ta(dS,t.config.apiKey,t.name)}async function xL(t,e){return await Yi(t)._initializationPromise,cv(t,e,!1)}async function cv(t,e,n=!1){const s=Yi(t),i=av(s,e),o=await new fS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const yS=10*60*1e3;class vS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ES(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!uv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gp(e))}saveEventToCache(e){this.cachedEventUids.add(Gp(e)),this.lastProcessedEventTime=Date.now()}}function Gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ES(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(t);default:return!1}}/**
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
 */async function TS(t,e={}){return vo(t,"GET","/v1/projects",e)}/**
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
 */const IS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wS=/^https?/;async function AS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TS(t);for(const n of e)try{if(RS(n))return}catch{}vn(t,"unauthorized-domain")}function RS(t){const e=Vu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wS.test(n))return!1;if(IS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const CS=new yo(3e4,6e4);function Qp(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var s,i,r;function o(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(gn(t,"network-request-failed"))},timeout:CS.get()})}if(!((i=(s=mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mn().gapi)===null||r===void 0)&&r.load)o();else{const a=PC("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Gy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function bS(t){return wa=wa||SS(t),wa}/**
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
 */const PS=new yo(5e3,15e3),kS="__/auth/iframe",NS="emulator/auth/iframe",OS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cd(e,NS):`https://${t.config.authDomain}/${kS}`,s={apiKey:e.apiKey,appName:t.name,v:ms},i=DS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qi(s).slice(1)}`}async function MS(t){const e=await bS(t),n=mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:xS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{r(o)},PS.get());function l(){mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const LS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VS=500,FS=600,US="_blank",BS="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(t,e,n,s=VS,i=FS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=_t().toLowerCase();n&&(a=Uy(c)?US:n),Fy(c)&&(e=e||BS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(RC(c)&&a!=="_self")return jS(e||"",a),new Yp(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Yp(h)}function jS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const HS="__/auth/handler",qS="emulator/auth/handler",WS=encodeURIComponent("fac");async function Xp(t,e,n,s,i,r){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ms,eventId:i};if(e instanceof dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Eo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${WS}=${encodeURIComponent(l)}`:"";return`${KS(t)}?${Qi(a).slice(1)}${c}`}function KS({config:t}){return t.emulator?cd(t,qS):`https://${t.authDomain}/${HS}`}/**
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
 */const jc="webStorageSupport";class zS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=cv,this._overrideRedirectResult=gS}async _openPopup(e,n,s,i){var r;Fn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xp(e,n,s,Vu(),i);return $S(e,o,fd())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Xp(e,n,s,Vu(),i);return JC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await MS(e),s=new vS(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[jc];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qy()||hd()||Ul()}}const GS=zS;var Jp="@firebase/auth",Zp="1.1.0";/**
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
 */class QS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XS(t){yn(new Zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wy(t)},c=new MC(s,i,r,l);return VC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yn(new Zt("auth-internal",e=>{const n=Yi(e.getProvider("auth").getImmediate());return(s=>new QS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Jp,Zp,YS(t)),Ot(Jp,Zp,"esm2017")}/**
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
 */const JS=5*60,ZS=vy("authIdTokenMaxAge")||JS;let eg=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZS)return;const i=n==null?void 0:n.token;eg!==i&&(eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hv(t=od()){const e=rd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LC(t,{popupRedirectResolver:GS,persistence:[aS,QC,nv]}),s=vy("authTokenSyncURL");if(s){const r=eb(s);WC(n,r,()=>r(n.currentUser)),Jy(n,o=>r(o))}const i=_y("auth");return i&&FC(n,`http://${i}`),n}XS("Browser");var tb=!1;/**
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
 */const nb=new Map,sb={activated:!1,tokenObservers:[]};function en(t){return nb.get(t)||Object.assign({},sb)}const tg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class ib{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new zr,await rb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new zr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ob={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Wa=new Gi("appCheck","AppCheck",ob);function dv(t){if(!en(t).activated)throw Wa.create("use-before-activation",{appName:t.name})}/**
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
 */const ab="firebase-app-check-database",lb=1,Uu="firebase-app-check-store";let ea=null;function cb(){return ea||(ea=new Promise((t,e)=>{try{const n=indexedDB.open(ab,lb);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Wa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Uu,{keyPath:"compositeKey"})}}}catch(n){e(Wa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ea)}function ub(t,e){return hb(db(t),e)}async function hb(t,e){const s=(await cb()).transaction(Uu,"readwrite"),r=s.objectStore(Uu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Wa.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function db(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Bu=new _o("@firebase/app-check");function ng(t,e){return Iy()?ub(t,e).catch(n=>{Bu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const fb={error:"UNKNOWN_ERROR"};function pb(t){return Vl.encodeString(JSON.stringify(t),!1)}async function $u(t,e=!1){const n=t.app;dv(n);const s=en(n);let i=s.token,r;if(i&&!yr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(yr(l)?i=l:await ng(n,void 0))}if(!e&&i&&yr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await en(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Bu.warn(l.message):Bu.error(l),r=l}let a;return i?r?yr(i)?a={token:i.token,internalError:r}:a=ig(r):(a={token:i.token},s.token=i,await ng(n,i)):a=ig(r),o&&yb(n,a),a}async function gb(t){const e=t.app;dv(e);const{provider:n}=en(e);{const{token:s}=await n.getToken();return{token:s}}}function mb(t,e,n,s){const{app:i}=t,r=en(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&yr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),sg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>sg(t))}function fv(t,e){const n=en(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function sg(t){const{app:e}=t,n=en(e);let s=n.tokenRefresher;s||(s=_b(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function _b(t){const{app:e}=t;return new ib(async()=>{const n=en(e);let s;if(n.token?s=await $u(t,!0):s=await $u(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=en(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},tg.RETRIAL_MIN_WAIT,tg.RETRIAL_MAX_WAIT)}function yb(t,e){const n=en(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function yr(t){return t.expireTimeMillis-Date.now()>0}function ig(t){return{token:pb(fb),error:t}}/**
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
 */class vb{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=en(this.app);for(const n of e)fv(this.app,n.next);return Promise.resolve()}}function Eb(t,e){return new vb(t,e)}function Tb(t){return{getToken:e=>$u(t,e),getLimitedUseToken:()=>gb(t),addTokenListener:e=>mb(t,"INTERNAL",e),removeTokenListener:e=>fv(t.app,e)}}const Ib="@firebase/app-check",wb="0.8.0",Ab="app-check",rg="app-check-internal";function Rb(){yn(new Zt(Ab,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Eb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rg).initialize()})),yn(new Zt(rg,t=>{const e=t.getProvider("app-check").getImmediate();return Tb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(Ib,wb)}Rb();var Cb="firebase",Sb="10.1.0";/**
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
 */Ot(Cb,Sb,"app");const pv=Symbol("firebaseApp");function Io(t){return Zh()&&Nt(pv,null)||od(t)}const un=()=>{},bb=typeof window<"u";function gd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Pb(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Qs(t){return!!t&&typeof t=="object"}const kb=Object.prototype;function Nb(t){return Qs(t)&&Object.getPrototypeOf(t)===kb}function md(t){return Qs(t)&&t.type==="document"}function Ob(t){return Qs(t)&&t.type==="collection"}function Db(t){return md(t)||Ob(t)}function xb(t){return Qs(t)&&t.type==="query"}function Mb(t){return Qs(t)&&"ref"in t}function Lb(t){return Qs(t)&&typeof t.bucket=="string"}function Vb(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Fb=Symbol.for("v-scx");function Ub(){return!!Nt(Fb,0)}const ta=new WeakMap;function Bb(t,e){if(!ta.has(t)){const n=f_(!0);ta.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ta.delete(t)}}return ta.get(t)}const gv=new WeakMap;function $b(t){return gv.get(Io(t))}const na=new WeakMap;function mv(t){const e=Io(t);if(!na.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{na.set(e,r),n(r.value)}];na.set(e,i)}return na.get(e)}function jb(t){const e=mv(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Hb(t,e){const n=hv(e);Jy(n,s=>{const i=mv();t.value=s,Array.isArray(i)&&i[1](t)})}const og="@firebase/database",ag="1.0.1";/**
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
 */let _v="";function qb(t){_v=t}/**
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
 */class Wb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Kb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wb(e)}}catch{}return new Kb},ks=yv("localStorage"),ju=yv("sessionStorage");/**
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
 */const Ti=new _o("@firebase/database"),zb=function(){let t=1;return function(){return t++}}(),vv=function(t){const e=ZA(t),n=new GA;n.update(e);const s=n.digest();return Vl.encodeByteArray(s)},wo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wo.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let Vs=null,lg=!0;const Gb=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ti.logLevel=de.VERBOSE,Vs=Ti.log.bind(Ti),e&&ju.set("logging_enabled",!0)):typeof t=="function"?Vs=t:(Vs=null,ju.remove("logging_enabled"))},ut=function(...t){if(lg===!0&&(lg=!1,Vs===null&&ju.get("logging_enabled")===!0&&Gb(!0)),Vs){const e=wo.apply(null,t);Vs(e)}},Ao=function(t){return function(...e){ut(t,...e)}},Hu=function(...t){const e="FIREBASE INTERNAL ERROR: "+wo(...t);Ti.error(e)},$s=function(...t){const e=`FIREBASE FATAL ERROR: ${wo(...t)}`;throw Ti.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+wo(...t);Ti.warn(e)},Qb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ev=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ni="[MIN_NAME]",js="[MAX_NAME]",Xi=function(t,e){if(t===e)return 0;if(t===Ni||e===js)return-1;if(e===Ni||t===js)return 1;{const n=cg(t),s=cg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Xb=function(t,e){return t===e?0:t<e?-1:1},lr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},_d=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=_d(t[e[s]]);return n+="}",n},Tv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Iv=function(t){x(!Ev(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Jb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Zb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},eP=new RegExp("^-?(0*)\\d{1,10}$"),tP=-2147483648,nP=2147483647,cg=function(t){if(eP.test(t)){const e=Number(t);if(e>=tP&&e<=nP)return e}return null},Ro=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},sP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class iP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class rP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class qu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qu.OWNER="owner";/**
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
 */const yd="5",wv="v",Av="s",Rv="r",Cv="f",Sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bv="ls",Pv="p",Wu="ac",kv="websocket",Nv="long_polling";/**
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
 */class oP{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ov(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===kv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aP(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class lP{constructor(){this.counters_={}}incrementCounter(e,n=1){Hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return OA(this.counters_)}}/**
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
 */const Hc={},qc={};function vd(t){const e=t.toString();return Hc[e]||(Hc[e]=new lP),Hc[e]}function cP(t,e){const n=t.toString();return qc[n]||(qc[n]=e()),qc[n]}/**
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
 */class uP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ro(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ug="start",hP="close",dP="pLPCommand",fP="pRTLPCB",Dv="id",xv="pw",Mv="ser",pP="cb",gP="seg",mP="ts",_P="d",yP="dframe",Lv=1870,Vv=30,vP=Lv-Vv,EP=25e3,TP=3e4;class ui{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ao(e),this.stats_=vd(n),this.urlFn=l=>(this.appCheckToken&&(l[Wu]=this.appCheckToken),Ov(n,Nv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TP)),Yb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ed((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ug)this.id=a,this.password=l;else if(o===hP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ug]="t",s[Mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[pP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wv]=yd,this.transportSessionId&&(s[Av]=this.transportSessionId),this.lastSessionId&&(s[bv]=this.lastSessionId),this.applicationId&&(s[Pv]=this.applicationId),this.appCheckToken&&(s[Wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(s[Rv]=Cv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jb()&&!Zb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gy(n),i=Tv(s,vP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[yP]="t",s[Dv]=e,s[xv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ed{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zb(),window[dP+this.uniqueCallbackIdentifier]=e,window[fP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ed.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ut("frame writing exception"),a.stack&&ut(a.stack),ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ut("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dv]=this.myID,e[xv]=this.myPW,e[Mv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vv+s.length<=Lv;){const o=this.pendingSegs.shift();s=s+"&"+gP+i+"="+o.seg+"&"+mP+i+"="+o.ts+"&"+_P+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(EP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const IP=16384,wP=45e3;let Ka=null;typeof MozWebSocket<"u"?Ka=MozWebSocket:typeof WebSocket<"u"&&(Ka=WebSocket);class zt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ao(this.connId),this.stats_=vd(n),this.connURL=zt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wv]=yd,typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(o[Rv]=Cv),n&&(o[Av]=n),s&&(o[bv]=s),i&&(o[Wu]=i),r&&(o[Pv]=r),Ov(e,kv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let s;Ty(),this.mySock=new Ka(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ka!==null&&!zt.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Gr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tv(n,IP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
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
 */class Jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let s=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of Jr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jr.globalTransportInitialized_=!1;/**
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
 */const AP=6e4,RP=5e3,CP=10*1024,SP=100*1024,Wc="t",hg="d",bP="s",dg="r",PP="e",fg="o",pg="a",gg="n",mg="p",kP="h";class NP{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ao("c:"+this.id+":"),this.transportManager_=new Jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wc in e){const n=e[Wc];n===pg?this.upgradeIfSecondaryHealthy_():n===dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=lr("t",e),s=lr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=lr("t",e),s=lr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=lr(Wc,e);if(hg in e){const s=e[hg];if(n===kP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bP?this.onConnectionShutdown_(s):n===dg?this.onReset_(s):n===PP?Hu("Server Error: "+s):n===fg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yd!==s&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Fv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Uv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class za extends Uv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new za}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _g=32,yg=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Ne("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ds(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function Bv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $v(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function Ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ne(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=le(t),s=le(e);if(n===null)return e;if(n===s)return Ut(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Hv(t,e){if(ds(t)!==ds(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ds(t)>ds(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class DP{constructor(e,n){this.errorPrefix_=n,this.parts_=$v(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);qv(this)}}function xP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fl(e),qv(t)}function MP(t){const e=t.parts_.pop();t.byteLength_-=Fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function qv(t){if(t.byteLength_>yg)throw new Error(t.errorPrefix_+"has a key path longer than "+yg+" bytes ("+t.byteLength_+").");if(t.parts_.length>_g)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_g+") or object contains a cycle "+As(t))}function As(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Td extends Uv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Td}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const cr=1e3,LP=60*5*1e3,vg=30*1e3,VP=1.3,FP=3e4,UP="server_kill",Eg=3;class Dn extends Fv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dn.nextPersistentConnectionId_++,this.log_=Ao("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cr,this.maxReconnectDelay_=LP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ty())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&za.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(tt(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hn(e,"w")){const s=Pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hu("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FP&&(this.reconnectDelay_=cr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new NP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Dt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(UP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Dt(h),l())}}}interrupt(e){ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nu(this.interruptReasons_)&&(this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>_d(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eg&&(this.reconnectDelay_=vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_v.replace(/\./g,"-")]=1,sd()?e["framework.cordova"]=1:Ey()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=za.getInstance().currentlyOnline();return Nu(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
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
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
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
 */class jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(Ni,e),i=new ce(Ni,n);return this.compare(s,i)!==0}minPost(){return ce.MIN}}/**
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
 */let sa;class Wv extends jl{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(e){sa=e}compare(e,n){return Xi(e.name,n.name)}isDefinedOn(e){throw zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(js,sa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,sa)}toString(){return".key"}}const Ii=new Wv;/**
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
 */let ia=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kt=class vr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??vr.RED,this.left=i??hn.EMPTY_NODE,this.right=r??hn.EMPTY_NODE}copy(e,n,s,i,r){return new vr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kt.RED=!0;kt.BLACK=!1;class BP{copy(e,n,s,i,r){return this}insert(e,n,s){return new kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let hn=class Aa{constructor(e,n=Aa.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Aa(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new Aa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ia(this.root_,null,this.comparator_,!0,e)}};hn.EMPTY_NODE=new BP;/**
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
 */function $P(t,e){return Xi(t.name,e.name)}function Id(t,e){return Xi(t,e)}/**
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
 */let Ku;function jP(t){Ku=t}const Kv=function(t){return typeof t=="number"?"number:"+Iv(t):"string:"+t},zv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hn(e,".sv"),"Priority must be a string or number.")}else x(t===Ku||t.isEmpty(),"priority of unexpected type.");x(t===Ku||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tg;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zv(this.priorityNode_)}static set __childrenNodeConstructor(e){Tg=e}static get __childrenNodeConstructor(){return Tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:le(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||ds(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Iv(this.value_):e+=this.value_,this.lazyHash_=vv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gv,Qv;function HP(t){Gv=t}function qP(t){Qv=t}class WP extends jl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(js,new Ke("[PRIORITY-POST]",Qv))}makePost(e,n){const s=Gv(e);return new ce(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ft=new WP;/**
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
 */const KP=Math.log(2);class zP{constructor(e){const n=r=>parseInt(Math.log(r)/KP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ga=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new kt(d,h.node,kt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new kt(d,h.node,kt.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,I=h;h-=m;const S=i(v+1,I),P=t[v],w=n?n(P):P;f(new kt(w,P.node,y,null,S))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,kt.BLACK):(d(v,kt.BLACK),d(v,kt.RED))}return u},o=new zP(t.length),a=r(o);return new hn(s||e,a)};/**
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
 */let Kc;const ii={};class Nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ii&&ft,"ChildrenNode.ts has not been loaded"),Kc=Kc||new Nn({".priority":ii},{".priority":ft}),Kc}get(e){const n=Pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return Hn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ce.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ga(s,e.getCompare()):a=ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Nn(u,c)}addToIndexes(e,n){const s=Va(this.indexes_,(i,r)=>{const o=Pi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ga(a,o.getCompare())}else return ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new Nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Va(this.indexes_,i=>{if(i===ii)return i;{const r=n.get(e.name);return r?i.remove(new ce(e.name,r)):i}});return new Nn(s,this.indexSet_)}}/**
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
 */let ur;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ur||(ur=new ye(new hn(Id),null,Nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ur}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ur:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ur:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=le(e);if(s===null)return n;{x(le(e)!==".priority"||ds(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ft,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kv(this.getPriority().val())+":"),this.forEachChild(ft,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ce(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===Ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ft),i=n.getIterator(ft);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ii?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GP extends ye{constructor(){super(new hn(Id),ye.EMPTY_NODE,Nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const Co=new GP;Object.defineProperties(ce,{MIN:{value:new ce(Ni,ye.EMPTY_NODE)},MAX:{value:new ce(js,Co)}});Wv.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;jP(Co);qP(Co);/**
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
 */const QP=!0;function ht(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ht(e))}if(!(t instanceof Array)&&QP){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ht(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=Ga(n,$P,o=>o.name,Id);if(s){const o=Ga(n,ft.getCompare());return new ye(r,ht(e),new Nn({".priority":o},{".priority":ft}))}else return new ye(r,ht(e),Nn.Default)}else{let n=ye.EMPTY_NODE;return Ht(t,(s,i)=>{if(Hn(t,s)&&s.substring(0,1)!=="."){const r=ht(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ht(e))}}HP(ht);/**
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
 */class YP extends jl{constructor(e){super(),this.indexPath_=e,x(!oe(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xi(e.name,n.name):r}makePost(e,n){const s=ht(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,Co);return new ce(js,e)}toString(){return $v(this.indexPath_,0).join("/")}}/**
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
 */class XP extends jl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=ht(e);return new ce(n,s)}toString(){return".value"}}const JP=new XP;/**
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
 */function ZP(t){return{type:"value",snapshotNode:t}}function ek(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ig(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ni}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:js}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new wd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ft?n="$priority":t.index_===JP?n="$value":t.index_===Ii?n="$key":(x(t.index_ instanceof YP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ag(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ft&&(e.i=t.index_.toString()),e}/**
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
 */class Qa extends Fv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ao("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qa.getListenId_(e,s),a={};this.listens_[o]=a;const l=wg(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Pi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Qa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=wg(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gr(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class sk{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ya(){return{value:null,children:new Map}}function Yv(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=le(e);t.children.has(s)||t.children.set(s,Ya());const i=t.children.get(s);e=Pe(e),Yv(i,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):ik(t,(s,i)=>{const r=new Ne(e.toString()+"/"+s);zu(i,r,n)})}function ik(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class rk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Rg=10*1e3,ok=30*1e3,ak=5*60*1e3;class lk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rk(e);const s=Rg+(ok-Rg)*Math.random();Pr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&Hn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*ak))}}/**
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
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function Xv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=Xv()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new Xa(we(),n,this.revert)}}else return x(le(this.path)===e,"operationForChild called for unrelated child."),new Xa(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Hs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return oe(this.path)?new Hs(this.source,we(),this.snap.getImmediateChild(e)):new Hs(this.source,Pe(this.path),this.snap)}}/**
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
 */class Zr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new Hs(this.source,we(),n.value):new Zr(this.source,we(),n)}else return x(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ad{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ck(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nk(o.childName,o.snapshotNode))}),hr(t,i,"child_removed",e,s,n),hr(t,i,"child_added",e,s,n),hr(t,i,"child_moved",r,s,n),hr(t,i,"child_changed",e,s,n),hr(t,i,"value",e,s,n),i}function hr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>hk(t,a,l)),o.forEach(a=>{const l=uk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function uk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hk(t,e,n){if(e.childName==null||n.childName==null)throw zi("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function eE(t,e){return{eventCache:t,serverCache:e}}function kr(t,e,n,s){return eE(new Ad(e,n,s),t.serverCache)}function tE(t,e,n,s){return eE(t.eventCache,new Ad(e,n,s))}function Gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let zc;const dk=()=>(zc||(zc=new hn(Xb)),zc);class Se{constructor(e,n=dk()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Ht(e,(s,i)=>{n=n.set(new Ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(oe(e))return null;{const s=le(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Pe(e),n);return r!=null?{path:Ye(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const s=le(e),r=(this.children.get(s)||new Se(null)).set(Pe(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const i=s.remove(Pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(oe(e))return n;{const s=le(e),r=(this.children.get(s)||new Se(null)).setTree(Pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(oe(e))return null;{const r=le(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),Ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const i=le(e),r=this.children.get(i);return r?r.foreachOnPath_(Pe(e),Ye(n,i),s):new Se(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Se(null))}}function Nr(t,e,n){if(oe(e))return new Jt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new Jt(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new Jt(r)}}}function Cg(t,e,n){let s=t;return Ht(n,(i,r)=>{s=Nr(s,Ye(e,i),r)}),s}function Sg(t,e){if(oe(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Jt(n)}}function Qu(t,e){return Ys(t,e)!=null}function Ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function bg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ft,(s,i)=>{e.push(new ce(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ce(s,i.value))}),e}function ls(t,e){if(oe(e))return t;{const n=Ys(t,e);return n!=null?new Jt(new Se(n)):new Jt(t.writeTree_.subtree(e))}}function Yu(t){return t.writeTree_.isEmpty()}function Oi(t,e){return nE(we(),t.writeTree_,e)}function nE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nE(Ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ye(t,".priority"),s)),n}}/**
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
 */function sE(t,e){return lE(e,t)}function fk(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Nr(t.visibleWrites,e,n)),t.lastWriteId=s}function pk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function gk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mk(a,s.path)?i=!1:Qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return _k(t),!0;if(s.snap)t.visibleWrites=Sg(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=Sg(t.visibleWrites,Ye(s.path,l))})}return!0}else return!1}function mk(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Ye(t.path,n),e))return!0;return!1}function _k(t){t.visibleWrites=iE(t.allWrites,yk,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yk(t){return t.visible}function iE(t,e,n){let s=Jt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qt(n,o)?(a=Ut(n,o),s=Nr(s,a,r.snap)):Qt(o,n)&&(a=Ut(o,n),s=Nr(s,we(),r.snap.getChild(a)));else if(r.children){if(Qt(n,o))a=Ut(n,o),s=Cg(s,a,r.children);else if(Qt(o,n))if(a=Ut(o,n),oe(a))s=Cg(s,we(),r.children);else{const l=Pi(r.children,le(a));if(l){const c=l.getChild(Pe(a));s=Nr(s,we(),c)}}}else throw zi("WriteRecord should have .snap or .children")}}return s}function rE(t,e,n,s,i){if(!s&&!i){const r=Ys(t.visibleWrites,e);if(r!=null)return r;{const o=ls(t.visibleWrites,e);if(Yu(o))return n;if(n==null&&!Qu(o,we()))return null;{const a=n||ye.EMPTY_NODE;return Oi(o,a)}}}else{const r=ls(t.visibleWrites,e);if(!i&&Yu(r))return n;if(!i&&n==null&&!Qu(r,we()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qt(c.path,e)||Qt(e,c.path))},a=iE(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return Oi(a,l)}}}function vk(t,e,n){let s=ye.EMPTY_NODE;const i=Ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ft,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ls(t.visibleWrites,e);return n.forEachChild(ft,(o,a)=>{const l=Oi(ls(r,new Ne(o)),a);s=s.updateImmediateChild(o,l)}),bg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ls(t.visibleWrites,e);return bg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ek(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ye(e,n);if(Qu(t.visibleWrites,r))return null;{const o=ls(t.visibleWrites,r);return Yu(o)?i.getChild(n):Oi(o,i.getChild(n))}}function Tk(t,e,n,s){const i=Ye(e,n),r=Ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ls(t.visibleWrites,i);return Oi(o,s.getNode().getImmediateChild(n))}else return null}function Ik(t,e){return Ys(t.visibleWrites,e)}function wk(t,e,n,s,i,r,o){let a;const l=ls(t.visibleWrites,e),c=Ys(l,we());if(c!=null)a=c;else if(n!=null)a=Oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Ak(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Xu(t,e,n,s){return rE(t.writeTree,t.treePath,e,n,s)}function oE(t,e){return vk(t.writeTree,t.treePath,e)}function Pg(t,e,n,s){return Ek(t.writeTree,t.treePath,e,n,s)}function Ja(t,e){return Ik(t.writeTree,Ye(t.treePath,e))}function Rk(t,e,n,s,i,r){return wk(t.writeTree,t.treePath,e,n,s,i,r)}function Rd(t,e,n){return Tk(t.writeTree,t.treePath,e,n)}function aE(t,e){return lE(Ye(t.treePath,e),t.writeTree)}function lE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ck{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ig(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,tk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ek(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ig(s,e.snapshotNode,i.oldSnap));else throw zi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Sk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cE=new Sk;class Cd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qs(this.viewCache_),r=Rk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function bk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Pk(t,e,n,s,i){const r=new Ck;let o,a;if(n.type===dn.OVERWRITE){const c=n;c.source.fromUser?o=Ju(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Za(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dn.MERGE){const c=n;c.source.fromUser?o=Nk(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dn.ACK_USER_WRITE){const c=n;c.revert?o=xk(t,e,c.path,s,i,r):o=Ok(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dn.LISTEN_COMPLETE)o=Dk(t,e,n.path,s,r);else throw zi("Unknown operation type: "+n.type);const l=r.getChanges();return kk(e,o,l),{viewCache:o,changes:l}}function kk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ZP(Gu(e)))}}function uE(t,e,n,s,i,r){const o=e.eventCache;if(Ja(s,n)!=null)return e;{let a,l;if(oe(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qs(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=oE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xu(s,qs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=le(n);if(c===".priority"){x(ds(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Pg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Pg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Rd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return kr(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Za(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=le(n);if(!l.isCompleteForPath(n)&&ds(n)>1)return e;const m=Pe(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,cE,null)}const h=tE(e,c,l.isFullyInitialized()||oe(n),u.filtersNodes()),d=new Cd(i,h,r);return uE(t,h,n,i,d,a)}function Ju(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Cd(i,e,r);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=kr(e,c,!0,t.filter.filtersNodes());else{const h=le(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=kr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Pe(n),f=a.getNode().getImmediateChild(h);let m;if(oe(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Bv(d)===".priority"&&y.getChild(jv(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=ye.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=kr(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kg(t,e){return t.eventCache.isCompleteForChild(e)}function Nk(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ye(n,l);kg(e,le(u))&&(a=Ju(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ye(n,l);kg(e,le(u))||(a=Ju(t,a,u,c,i,r,o))}),a}function Ng(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;oe(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Ng(t,f,d);l=Za(t,l,new Ne(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=Ng(t,m,d);l=Za(t,l,new Ne(h),y,i,r,o,a)}}),l}function Ok(t,e,n,s,i,r,o){if(Ja(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Za(t,e,n,l.getNode().getChild(n),i,r,a,o);if(oe(n)){let c=new Se(null);return l.getNode().forEachChild(Ii,(u,h)=>{c=c.set(new Ne(u),h)}),Zu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,h)=>{const d=Ye(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Zu(t,e,n,c,i,r,a,o)}}function Dk(t,e,n,s,i){const r=e.serverCache,o=tE(e,r.getNode(),r.isFullyInitialized()||oe(n),r.isFiltered());return uE(t,o,n,s,cE,i)}function xk(t,e,n,s,i,r){let o;if(Ja(s,n)!=null)return e;{const a=new Cd(s,e,i),l=e.eventCache.getNode();let c;if(oe(n)||le(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xu(s,qs(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=oE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=le(n);let h=Rd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,Pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xu(s,qs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ja(s,we())!=null,kr(e,c,o,t.filter.filtersNodes())}}function Mk(t,e){const n=qs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Og(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(x(qs(t.viewCache_),"We should always have a full cache before handling merges"),x(Gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Pk(t.processor_,i,e,n,s);return bk(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lk(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ck(t.eventGenerator_,e,n,i)}/**
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
 */let Dg;function Vk(t){x(!Dg,"__referenceConstructor has already been defined"),Dg=t}function Sd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),Og(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Og(o,e,n,s));return r}}function bd(t,e){let n=null;for(const s of t.views.values())n=n||Mk(s,e);return n}/**
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
 */let xg;function Fk(t){x(!xg,"__referenceConstructor has already been defined"),xg=t}class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Ak(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uk(t,e,n,s,i){return fk(t.pendingWriteTree_,e,n,s,i),i?ql(t,new Hs(Xv(),e,n)):[]}function hi(t,e,n=!1){const s=pk(t.pendingWriteTree_,e);if(gk(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(we(),!0):Ht(s.children,o=>{r=r.set(new Ne(o),!0)}),ql(t,new Xa(s.path,r,n))}else return[]}function Hl(t,e,n){return ql(t,new Hs(Jv(),e,n))}function Bk(t,e,n){const s=Se.fromObject(n);return ql(t,new Zr(Jv(),e,s))}function $k(t,e,n,s){const i=pE(t,s);if(i!=null){const r=gE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=new Hs(Zv(a),l,n);return mE(t,o,c)}else return[]}function jk(t,e,n,s){const i=pE(t,s);if(i){const r=gE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=Se.fromObject(n),u=new Zr(Zv(a),l,c);return mE(t,o,u)}else return[]}function hE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),c=bd(a,l);if(c)return c});return rE(i,e,r,n,!0)}function ql(t,e){return dE(e,t.syncPointTree_,null,sE(t.pendingWriteTree_,we()))}function dE(t,e,n,s){if(oe(t.path))return fE(t,e,n,s);{const i=e.get(we());n==null&&i!=null&&(n=bd(i,we()));let r=[];const o=le(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=aE(s,o);r=r.concat(dE(a,l,c,u))}return i&&(r=r.concat(Sd(i,t,s,n))),r}}function fE(t,e,n,s){const i=e.get(we());n==null&&i!=null&&(n=bd(i,we()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=aE(s,o),u=t.operationForChild(o);u&&(r=r.concat(fE(u,a,l,c)))}),i&&(r=r.concat(Sd(i,t,s,n))),r}function pE(t,e){return t.tagToQueryMap.get(e)}function gE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function mE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=sE(t.pendingWriteTree_,e);return Sd(s,n,i,null)}/**
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
 */class Pd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pd(n)}node(){return this.node_}}class kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new kd(this.syncTree_,n)}node(){return hE(this.syncTree_,this.path_)}}const Hk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Wk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Kk=function(t,e,n,s){return Nd(e,new kd(n,t),s)},zk=function(t,e,n){return Nd(t,new Pd(e),n)};function Nd(t,e,n){const s=t.getPriority().val(),i=Lg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Lg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,ht(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ft,(a,l)=>{const c=Nd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Od{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Dd(t,e){let n=e instanceof Ne?e:new Ne(e),s=t,i=le(n);for(;i!==null;){const r=Pi(s.node.children,i)||{children:{},childCount:0};s=new Od(i,s,r),n=Pe(n),i=le(n)}return s}function Ji(t){return t.node.value}function _E(t,e){t.node.value=e,eh(t)}function yE(t){return t.node.childCount>0}function Gk(t){return Ji(t)===void 0&&!yE(t)}function Wl(t,e){Ht(t.node.children,(n,s)=>{e(new Od(n,t,s))})}function vE(t,e,n,s){n&&!s&&e(t),Wl(t,i=>{vE(i,e,!0,s)}),n&&s&&e(t)}function Qk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function So(t){return new Ne(t.parent===null?t.name:So(t.parent)+"/"+t.name)}function eh(t){t.parent!==null&&Yk(t.parent,t.name,t)}function Yk(t,e,n){const s=Gk(n),i=Hn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eh(t))}/**
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
 */const Xk=/[\[\].#$\/\u0000-\u001F\u007F]/,Jk=/[\[\].#$\u0000-\u001F\u007F]/,Gc=10*1024*1024,EE=function(t){return typeof t=="string"&&t.length!==0&&!Xk.test(t)},Zk=function(t){return typeof t=="string"&&t.length!==0&&!Jk.test(t)},eN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zk(t)},TE=function(t,e,n){const s=n instanceof Ne?new DP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+As(s));if(typeof e=="function")throw new Error(t+"contains a function "+As(s)+" with contents = "+e.toString());if(Ev(e))throw new Error(t+"contains "+e.toString()+" "+As(s));if(typeof e=="string"&&e.length>Gc/3&&Fl(e)>Gc)throw new Error(t+"contains a string greater than "+Gc+" utf8 bytes "+As(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!EE(o)))throw new Error(t+" contains an invalid key ("+o+") "+As(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xP(s,o),TE(t,a,s),MP(s)}),i&&r)throw new Error(t+' contains ".value" child '+As(s)+" in addition to actual children.")}},tN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!EE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eN(n))throw new Error(JA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Hv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xs(t,e,n){sN(t,n),iN(t,s=>Qt(s,e)||Qt(e,s))}function iN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(rN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Vs&&ut("event: "+n.toString()),Ro(s)}}}/**
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
 */const oN="repo_interrupt",aN=25;class lN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ya(),this.transactionQueueTree_=new Od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cN(t,e,n){if(t.stats_=vd(t.repoInfo_),t.forceRestClient_||sP())t.server_=new Qa(t.repoInfo_,(s,i,r,o)=>{Vg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dn(t.repoInfo_,e,(s,i,r,o)=>{Vg(t,s,i,r,o)},s=>{Fg(t,s)},s=>{hN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=cP(t.repoInfo_,()=>new lk(t.stats_,t.server_)),t.infoData_=new sk,t.infoSyncTree_=new Mg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Hl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xd(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Xs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function uN(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function IE(t){return Hk({timestamp:uN(t)})}function Vg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Va(n,c=>ht(c));o=jk(t.serverSyncTree_,r,l,i)}else{const l=ht(n);o=$k(t.serverSyncTree_,r,l,i)}else if(s){const l=Va(n,c=>ht(c));o=Bk(t.serverSyncTree_,r,l)}else{const l=ht(n);o=Hl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ld(t,r)),Xs(t.eventQueue_,a,o)}function Fg(t,e){xd(t,"connected",e),e===!1&&fN(t)}function hN(t,e){Ht(e,(n,s)=>{xd(t,n,s)})}function xd(t,e,n){const s=new Ne("/.info/"+e),i=ht(n);t.infoData_.updateSnapshot(s,i);const r=Hl(t.infoSyncTree_,s,i);Xs(t.eventQueue_,s,r)}function dN(t){return t.nextWriteId_++}function fN(t){wE(t,"onDisconnectEvents");const e=IE(t),n=Ya();zu(t.onDisconnect_,we(),(i,r)=>{const o=Kk(i,r,t.serverSyncTree_,e);Yv(n,i,o)});let s=[];zu(n,we(),(i,r)=>{s=s.concat(Hl(t.serverSyncTree_,i,r));const o=_N(t,i);Ld(t,o)}),t.onDisconnect_=Ya(),Xs(t.eventQueue_,we(),s)}function pN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oN)}function wE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ut(n,...e)}function AE(t,e,n){return hE(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Md(t,e=t.transactionQueueTree_){if(e||Kl(t,e),Ji(e)){const n=CE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gN(t,So(e),n)}else yE(e)&&Wl(e,n=>{Md(t,n)})}function gN(t,e,n){const s=n.map(c=>c.currentWriteId),i=AE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{wE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(hi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Kl(t,Dd(t.transactionQueueTree_,e)),Md(t,t.transactionQueueTree_),Xs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ro(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Dt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ld(t,e)}},o)}function Ld(t,e){const n=RE(t,e),s=So(n),i=CE(t,n);return mN(t,i,s),s}function mN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ut(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aN)u=!0,h="maxretry",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=AE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){TE("transaction failed: Data returned ",f,l.path);let m=ht(f);typeof f=="object"&&f!=null&&Hn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,I=IE(t),S=zk(m,d,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=dN(t),o.splice(o.indexOf(v),1),i=i.concat(Uk(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(hi(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0))}Xs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Kl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ro(s[a]);Md(t,t.transactionQueueTree_)}function RE(t,e){let n,s=t.transactionQueueTree_;for(n=le(e);n!==null&&Ji(s)===void 0;)s=Dd(s,n),e=Pe(e),n=le(e);return s}function CE(t,e){const n=[];return SE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function SE(t,e,n){const s=Ji(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Wl(e,i=>{SE(t,i,n)})}function Kl(t,e){const n=Ji(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_E(e,n.length>0?n:void 0)}Wl(e,s=>{Kl(t,s)})}function _N(t,e){const n=So(RE(t,e)),s=Dd(t.transactionQueueTree_,e);return Qk(s,i=>{Qc(t,i)}),Qc(t,s),vE(s,i=>{Qc(t,i)}),n}function Qc(t,e){const n=Ji(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_E(e,void 0):n.length=r+1,Xs(t.eventQueue_,So(e),i);for(let o=0;o<s.length;o++)Ro(s[o])}}/**
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
 */function yN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ug=function(t,e){const n=EN(t),s=n.namespace;n.domain==="firebase.com"&&$s(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Qb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oP(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},EN=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=yN(t.substring(u,h)));const d=vN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Vd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return oe(this._path)?null:Bv(this._path)}get ref(){return new Zi(this._repo,this._path)}get _queryIdentifier(){const e=Ag(this._queryParams),n=_d(e);return n==="{}"?"default":n}get _queryObject(){return Ag(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Vd))return!1;const n=this._repo===e._repo,s=Hv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OP(this._path)}}class Zi extends Vd{constructor(e,n){super(e,n,new wd,!1)}get parent(){const e=jv(this._path);return e===null?null:new Zi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Vk(Zi);Fk(Zi);/**
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
 */const TN="FIREBASE_DATABASE_EMULATOR_HOST",th={};let IN=!1;function wN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ug(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[TN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ug(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new qu(qu.OWNER):new rP(t.name,t.options,e);tN("Invalid Firebase Database URL",o),oe(o.path)||$s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=RN(a,t,u,new iP(t.name,n));return new CN(h,t)}function AN(t,e){const n=th[e];(!n||n[t.key]!==t)&&$s(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pN(t),delete n[t.key]}function RN(t,e,n,s){let i=th[e.name];i||(i={},th[e.name]=i);let r=i[t.toURLString()];return r&&$s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new lN(t,IN,n,s),i[t.toURLString()]=r,r}class CN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zi(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$s("Cannot call "+e+" on a deleted database.")}}/**
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
 */function SN(t){qb(ms),yn(new Zt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(og,ag,t),Ot(og,ag,"esm2017")}Dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SN();var bN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Fd=Fd||{},J=bN||self;function zl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PN(t){return Object.prototype.hasOwnProperty.call(t,Yc)&&t[Yc]||(t[Yc]=++kN)}var Yc="closure_uid_"+(1e9*Math.random()>>>0),kN=0;function NN(t,e,n){return t.call.apply(t.bind,arguments)}function ON(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=NN:pt=ON,pt.apply(null,arguments)}function ra(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function _s(){this.s=this.s,this.o=this.o}var DN=0;_s.prototype.s=!1;_s.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DN!=0)&&PN(this)};_s.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ud(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(zl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var xN=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function eo(t){return/^[\s\xa0]*$/.test(t)}function Gl(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return Gl().indexOf(t)!=-1}function Bd(t){return Bd[" "](t),t}Bd[" "]=function(){};function MN(t,e){var n=SO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var LN=cn("Opera"),Di=cn("Trident")||cn("MSIE"),PE=cn("Edge"),nh=PE||Di,kE=cn("Gecko")&&!(Gl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),VN=Gl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function NE(){var t=J.document;return t?t.documentMode:void 0}var sh;e:{var Xc="",Jc=function(){var t=Gl();if(kE)return/rv:([^\);]+)(\)|;)/.exec(t);if(PE)return/Edge\/([\d\.]+)/.exec(t);if(Di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VN)return/WebKit\/(\S+)/.exec(t);if(LN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jc&&(Xc=Jc?Jc[1]:""),Di){var Zc=NE();if(Zc!=null&&Zc>parseFloat(Xc)){sh=String(Zc);break e}}sh=Xc}var ih;if(J.document&&Di){var $g=NE();ih=$g||parseInt(sh,10)||void 0}else ih=void 0;var FN=ih;function to(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kE){e:{try{Bd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.$.h.call(this)}}Je(to,gt);var UN={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Po="closure_listenable_"+(1e6*Math.random()|0),BN=0;function $N(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++BN,this.fa=this.ia=!1}function Ql(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $d(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function jN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function OE(t){const e={};for(const n in t)e[n]=t[n];return e}const jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function DE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<jg.length;r++)n=jg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yl(t){this.src=t,this.g={},this.h=0}Yl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=oh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new $N(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function rh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=bE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ql(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var jd="closure_lm_"+(1e6*Math.random()|0),eu={};function xE(t,e,n,s,i){if(s&&s.once)return LE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xE(t,e[r],n,s,i);return null}return n=Wd(n),t&&t[Po]?t.O(e,n,bo(s)?!!s.capture:!!s,i):ME(t,e,n,!1,s,i)}function ME(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bo(i)?!!i.capture:!!i,a=qd(t);if(a||(t[jd]=a=new Yl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=HN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(FE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HN(){function t(n){return e.call(t.src,t.listener,n)}const e=qN;return t}function LE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)LE(t,e[r],n,s,i);return null}return n=Wd(n),t&&t[Po]?t.P(e,n,bo(s)?!!s.capture:!!s,i):ME(t,e,n,!0,s,i)}function VE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)VE(t,e[r],n,s,i);else s=bo(s)?!!s.capture:!!s,n=Wd(n),t&&t[Po]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=oh(r,n,s,i),-1<n&&(Ql(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,s,i)),(n=-1<t?e[t]:null)&&Hd(n))}function Hd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Po])rh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(FE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qd(e))?(rh(n,t),n.h==0&&(n.src=null,e[jd]=null)):Ql(t)}}}function FE(t){return t in eu?eu[t]:eu[t]="on"+t}function qN(t,e){if(t.fa)t=!0;else{e=new to(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Hd(t),t=n.call(s,e)}return t}function qd(t){return t=t[jd],t instanceof Yl?t:null}var tu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wd(t){return typeof t=="function"?t:(t[tu]||(t[tu]=function(e){return t.handleEvent(e)}),t[tu])}function Xe(){_s.call(this),this.i=new Yl(this),this.S=this,this.J=null}Je(Xe,_s);Xe.prototype[Po]=!0;Xe.prototype.removeEventListener=function(t,e,n,s){VE(this,t,e,n,s)};function it(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var i=e;e=new gt(s,t),DE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=oa(o,s,!0,e)&&i}if(o=e.g=t,i=oa(o,s,!0,e)&&i,i=oa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=oa(o,s,!1,e)&&i}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ql(n[s]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Xe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function oa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kd=J.JSON.stringify;class WN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function KN(){var t=zd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zN{constructor(){this.h=this.g=null}add(e,n){const s=UE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var UE=new WN(()=>new GN,t=>t.reset());class GN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YN(t){J.setTimeout(()=>{throw t},0)}let no,so=!1,zd=new zN,BE=()=>{const t=J.Promise.resolve(void 0);no=()=>{t.then(XN)}};var XN=()=>{for(var t;t=KN();){try{t.h.call(t.g)}catch(n){YN(n)}var e=UE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1};function Xl(t,e){Xe.call(this),this.h=t||1,this.g=e||J,this.j=pt(this.qb,this),this.l=Date.now()}Je(Xl,Xe);M=Xl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Gd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Xl.$.N.call(this),Gd(this),delete this.g};function Qd(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function $E(t){t.g=Qd(()=>{t.g=null,t.i&&(t.i=!1,$E(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JN extends _s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$E(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){_s.call(this),this.h=t,this.g={}}Je(io,_s);var Hg=[];function jE(t,e,n,s){Array.isArray(n)||(n&&(Hg[0]=n.toString()),n=Hg);for(var i=0;i<n.length;i++){var r=xE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function HE(t){$d(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hd(e)},t),t.g={}}io.prototype.N=function(){io.$.N.call(this),HE(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jl(){this.g=!0}Jl.prototype.Ea=function(){this.g=!1};function ZN(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function di(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nO(t,n)+(s?" "+s:"")})}function tO(t,e){t.info(function(){return"TIMEOUT: "+e})}Jl.prototype.info=function(){};function nO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kd(n)}catch{return e}}var Js={},qg=null;function Zl(){return qg=qg||new Xe}Js.Ta="serverreachability";function qE(t){gt.call(this,Js.Ta,t)}Je(qE,gt);function ro(t){const e=Zl();it(e,new qE(e))}Js.STAT_EVENT="statevent";function WE(t,e){gt.call(this,Js.STAT_EVENT,t),this.stat=e}Je(WE,gt);function It(t){const e=Zl();it(e,new WE(e,t))}Js.Ua="timingevent";function KE(t,e){gt.call(this,Js.Ua,t),this.size=e}Je(KE,gt);function ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var ec={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yd(){}Yd.prototype.h=null;function Wg(t){return t.h||(t.h=t.i())}function GE(){}var No={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xd(){gt.call(this,"d")}Je(Xd,gt);function Jd(){gt.call(this,"c")}Je(Jd,gt);var ah;function tc(){}Je(tc,Yd);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};ah=new tc;function Oo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new io(this),this.P=sO,t=nh?125:void 0,this.V=new Xl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new QE}function QE(){this.i=null,this.g="",this.h=!1}var sO=45e3,lh={},el={};M=Oo.prototype;M.setTimeout=function(t){this.P=t};function ch(t,e,n){t.L=1,t.v=sc(Un(e)),t.s=n,t.S=!0,YE(t,null)}function YE(t,e){t.G=Date.now(),Do(t),t.A=Un(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),iT(n.i,"t",s),t.C=0,n=t.l.J,t.h=new QE,t.g=RT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JN(pt(t.Pa,t,t.g),t.O)),jE(t.U,t.g,"readystatechange",t.nb),e=t.I?OE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ro(),ZN(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||nh||this.g&&(this.h.h||this.g.ja()||Qg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ro(3):ro(2)),nc(this);var n=this.g.da();this.ca=n;t:if(XE(this)){var s=Qg(this.g);t="";var i=s.length,r=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ns(this),Or(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eo(a)){var c=a;break t}}c=null}if(n=c)di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uh(this,n);else{this.i=!1,this.o=3,It(12),Ns(this),Or(this);break e}}this.S?(JE(this,u,o),nh&&this.i&&u==3&&(jE(this.U,this.V,"tick",this.mb),this.V.start())):(di(this.j,this.m,o,null),uh(this,o)),u==4&&Ns(this),this.i&&!this.J&&(u==4?TT(this.l,this):(this.i=!1,Do(this)))}else AO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Ns(this),Or(this)}}}catch{}finally{}};function XE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function JE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=iO(t,n),i==el){e==4&&(t.o=4,It(14),s=!1),di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lh){t.o=4,It(15),di(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else di(t.j,t.m,i,null),uh(t,i);XE(t)&&i!=el&&i!=lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rf(e),e.M=!0,It(11))):(di(t.j,t.m,n,"[Invalid Chunked Response]"),Ns(t),Or(t))}M.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.C<e.length&&(nc(this),JE(this,t,e),this.i&&t!=4&&Do(this))}};function iO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?el:(n=Number(e.substring(n,s)),isNaN(n)?lh:(s+=1,s+n>e.length?el:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Ns(this)};function Do(t){t.Y=Date.now()+t.P,ZE(t,t.P)}function ZE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ko(pt(t.lb,t),e)}function nc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tO(this.j,this.A),this.L!=2&&(ro(),It(17)),Ns(this),this.o=2,Or(this)):ZE(this,this.Y-t)};function Or(t){t.l.H==0||t.J||TT(t.l,t)}function Ns(t){nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gd(t.V),HE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hh(n.i,t))){if(!t.K&&hh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sl(n),oc(n);else break e;sf(n),It(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ko(pt(n.ib,n),6e3));if(1>=aT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Os(n,11)}else if((t.K||n.g==t)&&sl(n),!eo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zd(r,r.h),r.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,ke(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=AT(s,s.J?s.pa:null,s.Y),o.K){lT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(nc(a),Do(a)),s.g=o}else vT(s);0<n.j.length&&ac(n)}else c[0]!="stop"&&c[0]!="close"||Os(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Os(n,7):nf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ro(4)}catch{}}function rO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function oO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function eT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oO(t),s=rO(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var tT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fs){this.h=t.h,tl(this,t.j),this.s=t.s,this.g=t.g,nl(this,t.m),this.l=t.l;var e=t.i,n=new oo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kg(this,n),this.o=t.o}else t&&(e=String(t).match(tT))?(this.h=!1,tl(this,e[1]||"",!0),this.s=Er(e[2]||""),this.g=Er(e[3]||"",!0),nl(this,e[4]),this.l=Er(e[5]||"",!0),Kg(this,e[6]||"",!0),this.o=Er(e[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}Fs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tr(e,zg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tr(e,zg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Tr(n,n.charAt(0)=="/"?uO:cO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tr(n,dO)),t.join("")};function Un(t){return new Fs(t)}function tl(t,e,n){t.j=n?Er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kg(t,e,n){e instanceof oo?(t.i=e,fO(t.i,t.h)):(n||(e=Tr(e,hO)),t.i=new oo(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function sc(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zg=/[#\/\?@]/g,cO=/[#\?:]/g,uO=/[#\?]/g,hO=/[#\?@]/g,dO=/#/g;function oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ys(t){t.g||(t.g=new Map,t.h=0,t.i&&aO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=oo.prototype;M.add=function(t,e){ys(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nT(t,e){ys(t),e=er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sT(t,e){return ys(t),e=er(t,e),t.g.has(e)}M.forEach=function(t,e){ys(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){ys(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){ys(this);let e=[];if(typeof t=="string")sT(this,t)&&(e=e.concat(this.g.get(er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ys(this),this.i=null,t=er(this,t),sT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function iT(t,e,n){nT(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),Ud(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fO(t,e){e&&!t.j&&(ys(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(nT(this,s),iT(this,i,n))},t)),t.j=e}var pO=class{constructor(t,e){this.g=t,this.map=e}};function rT(t){this.l=t||gO,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gO=10;function oT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function aT(t){return t.h?1:t.g?t.g.size:0}function hh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zd(t,e){t.g?t.g.add(e):t.h=e}function lT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rT.prototype.cancel=function(){if(this.i=cT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ud(t.i)}var mO=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function _O(){this.g=new mO}function yO(t,e,n){const s=n||"";try{eT(t,function(i,r){let o=i;bo(i)&&(o=Kd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function vO(t,e){const n=new Jl;if(J.Image){const s=new Image;s.onload=ra(aa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ra(aa,n,s,"TestLoadImage: error",!1,e),s.onabort=ra(aa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ra(aa,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function aa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function xo(t){this.l=t.fc||null,this.j=t.ob||!1}Je(xo,Yd);xo.prototype.g=function(){return new ic(this.l,this.j)};xo.prototype.i=function(t){return function(){return t}}({});function ic(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ef,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(ic,Xe);var ef=0;M=ic.prototype;M.open=function(t,e){if(this.readyState!=ef)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ao(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=ef};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mo(this):ao(this),this.readyState==3&&uT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Mo(this))};M.Ya=function(t){this.g&&(this.response=t,Mo(this))};M.ka=function(){this.g&&Mo(this)};function Mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ao(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EO=J.JSON.parse;function Me(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hT,this.L=this.M=!1}Je(Me,Xe);var hT="",TO=/^https?$/i,IO=["POST","PUT"];M=Me.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?Wg(this.u):Wg(ah),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Gg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=bE(IO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pT(this),0<this.B&&((this.L=wO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Qd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gg(this,r)}};function wO(t){return Di&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Fd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dT(t),rc(t)}function dT(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),rc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),Me.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?fT(this):this.kb())};M.kb=function(){fT(this)};function fT(t){if(t.h&&typeof Fd<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)Qd(t.La,0,t);else if(it(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(tT)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),s=!TO.test(i?i.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var r=2<fn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",dT(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){pT(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function pT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EO(e)}};function Qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case hT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function AO(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(eo(t[s]))continue;var n=QN(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}jN(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gT(t){let e="";return $d(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function tf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function dr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mT(t){this.Ga=0,this.j=[],this.l=new Jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dr("baseRetryDelayMs",5e3,t),this.hb=dr("retryDelaySeedMs",1e4,t),this.eb=dr("forwardChannelMaxRetries",2,t),this.xa=dr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new rT(t&&t.concurrentRequestLimit),this.Ja=new _O,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=mT.prototype;M.ra=8;M.H=1;function nf(t){if(_T(t),t.H==3){var e=t.W++,n=Un(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Lo(t,n),e=new Oo(t,t.l,e),e.L=2,e.v=sc(Un(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=RT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Do(e)}wT(t)}function oc(t){t.g&&(rf(t),t.g.cancel(),t.g=null)}function _T(t){oc(t),t.u&&(J.clearTimeout(t.u),t.u=null),sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function ac(t){if(!oT(t.i)&&!t.m){t.m=!0;var e=t.Na;no||BE(),so||(no(),so=!0),zd.add(e,t),t.C=0}}function RO(t,e){return aT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ko(pt(t.Na,t,e),IT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=OE(r),DE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yT(this,i,e),n=Un(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Lo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(gT(r)))+"&"+e:this.o&&tf(n,this.o,r)),Zd(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,ch(i,n,null)):ch(i,n,e),this.H=2}}else this.H==3&&(t?Yg(this,t):this.j.length==0||oT(this.i)||Yg(this))};function Yg(t,e){var n;e?n=e.m:n=t.W++;const s=Un(t.I);ke(s,"SID",t.K),ke(s,"RID",n),ke(s,"AID",t.V),Lo(t,s),t.o&&t.s&&tf(s,t.o,t.s),n=new Oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=yT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zd(t.i,n),ch(n,s,e)}function Lo(t,e){t.na&&$d(t.na,function(n,s){ke(e,s,n)}),t.h&&eT({},function(n,s){ke(e,s,n)})}function yT(t,e,n){n=Math.min(t.j.length,n);var s=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{yO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function vT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;no||BE(),so||(no(),so=!0),zd.add(e,t),t.A=0}}function sf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ko(pt(t.Ma,t),IT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,ET(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ko(pt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),oc(this),ET(this))};function rf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function ET(t){t.g=new Oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Un(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Lo(t,e),t.o&&t.s&&tf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=sc(Un(e)),n.s=null,n.S=!0,YE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,oc(this),sf(this),It(19))};function sl(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function TT(t,e){var n=null;if(t.g==e){sl(t),rf(t),t.g=null;var s=2}else if(hh(t.i,e))n=e.F,lT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Zl(),it(s,new KE(s,n)),ac(t)}else vT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&RO(t,e)||s==2&&sf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Os(t,5);break;case 4:Os(t,10);break;case 3:Os(t,6);break;default:Os(t,2)}}}function IT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Os(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=pt(t.pb,t);n||(n=new Fs("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||tl(n,"https"),sc(n)),vO(n.toString(),s)}else It(2);t.H=0,t.h&&t.h.za(e),wT(t),_T(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function wT(t){if(t.H=0,t.ma=[],t.h){const e=cT(t.i);(e.length!=0||t.j.length!=0)&&(Bg(t.ma,e),Bg(t.ma,t.j),t.i.i.length=0,Ud(t.j),t.j.length=0),t.h.ya()}}function AT(t,e,n){var s=n instanceof Fs?Un(n):new Fs(n);if(s.g!="")e&&(s.g=e+"."+s.g),nl(s,s.m);else{var i=J.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Fs(null);s&&tl(r,s),e&&(r.g=e),i&&nl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ke(s,n,e),ke(s,"VER",t.ra),Lo(t,s),s}function RT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new xo({ob:!0})):new Me(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function CT(){}M=CT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function il(){if(Di&&!(10<=Number(FN)))throw Error("Environmental error: no available transport.")}il.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Xe.call(this),this.g=new mT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}Je(xt,Xe);xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=AT(t,null,t.Y),ac(t)};xt.prototype.close=function(){nf(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kd(t),t=n);e.j.push(new pO(e.fb++,t)),e.H==3&&ac(e)};xt.prototype.N=function(){this.g.h=null,delete this.j,nf(this.g),delete this.g,xt.$.N.call(this)};function ST(t){Xd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(ST,Xd);function bT(){Jd.call(this),this.status=1}Je(bT,Jd);function tr(t){this.g=t}Je(tr,CT);tr.prototype.Ba=function(){it(this.g,"a")};tr.prototype.Aa=function(t){it(this.g,new ST(t))};tr.prototype.za=function(t){it(this.g,new bT)};tr.prototype.ya=function(){it(this.g,"b")};function CO(){this.blockSize=-1}function tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(tn,CO);tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)nu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){nu(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){nu(this,s),i=0;break}}this.h=i,this.i+=e};tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var SO={};function of(t){return-128<=t&&128>t?MN(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return wi;if(0>t)return et(pn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=dh;return new Te(e,0)}function PT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return et(PT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),s=wi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=pn(Math.pow(e,r)),s=s.R(r).add(pn(o))):(s=s.R(n),s=s.add(pn(o)))}return s}var dh=4294967296,wi=of(0),fh=of(1),Xg=of(16777216);M=Te.prototype;M.ea=function(){if(Vt(this))return-et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:dh+s)*e,e*=dh}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(On(this))return"0";if(Vt(this))return"-"+et(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,s="";;){var i=ol(n,e).g;n=rl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,On(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function On(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Vt(t){return t.h==-1}M.X=function(t){return t=rl(this,t),Vt(t)?-1:On(t)?0:1};function et(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(fh)}M.abs=function(){return Vt(this)?et(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function rl(t,e){return t.add(et(e))}M.R=function(t){if(On(this)||On(t))return wi;if(Vt(this))return Vt(t)?et(this).R(et(t)):et(et(this).R(t));if(Vt(t))return et(this.R(et(t)));if(0>this.X(Xg)&&0>t.X(Xg))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,la(n,2*s+2*i),n[2*s+2*i+1]+=r*l,la(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,la(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,la(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function la(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fr(t,e){this.g=t,this.h=e}function ol(t,e){if(On(e))throw Error("division by zero");if(On(t))return new fr(wi,wi);if(Vt(t))return e=ol(et(t),e),new fr(et(e.g),et(e.h));if(Vt(e))return e=ol(t,et(e)),new fr(et(e.g),e.h);if(30<t.g.length){if(Vt(t)||Vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fh,s=e;0>=s.X(t);)n=Jg(n),s=Jg(s);var i=ri(n,1),r=ri(s,1);for(s=ri(s,2),n=ri(n,2);!On(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=ri(s,1),n=ri(n,1)}return e=rl(t,i.R(e)),new fr(i,e)}for(i=wi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=pn(n),o=r.R(e);Vt(o)||0<o.X(t);)n-=s,r=pn(n),o=r.R(e);On(r)&&(r=fh),i=i.add(r),t=rl(t,o)}return new fr(i,t)}M.gb=function(t){return ol(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function Jg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function ri(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(i,t.h)}il.prototype.createWebChannel=il.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;zE.COMPLETE="complete";GE.EventType=No;No.OPEN="a";No.CLOSE="b";No.ERROR="c";No.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;tn.prototype.digest=tn.prototype.l;tn.prototype.reset=tn.prototype.reset;tn.prototype.update=tn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=pn;Te.fromString=PT;var bO=function(){return new il},PO=function(){return Zl()},su=ec,kO=zE,NO=Js,Zg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},OO=xo,ca=GE,DO=Me,xO=tn,Ai=Te;const em="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let nr="10.1.0";/**
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
 */const Ws=new _o("@firebase/firestore");function tm(){return Ws.logLevel}function H(t,...e){if(Ws.logLevel<=de.DEBUG){const n=e.map(af);Ws.debug(`Firestore (${nr}): ${t}`,...n)}}function Bn(t,...e){if(Ws.logLevel<=de.ERROR){const n=e.map(af);Ws.error(`Firestore (${nr}): ${t}`,...n)}}function xi(t,...e){if(Ws.logLevel<=de.WARN){const n=e.map(af);Ws.warn(`Firestore (${nr}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function xe(t,e){t||Y()}function ue(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class LO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VO{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new kT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new lt(e)}}class FO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new FO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $O{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new BO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function jO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class NT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=jO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new We(0,0))}static max(){return new X(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class lo{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends lo{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const HO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends lo{construct(e,n,s){return new Tt(e,n,s)}static isValidIdentifier(e){return HO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new U(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(De.fromString(e))}static fromName(e){return new Q(De.fromString(e).popFirst(5))}static empty(){return new Q(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new De(e.slice()))}}function qO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new fs(i,Q.empty(),e)}function WO(t){return new fs(t.readTime,t.key,-1)}class fs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new fs(X.min(),Q.empty(),-1)}static max(){return new fs(X.max(),Q.empty(),-1)}}function KO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const zO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lf(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==zO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}cf.ae=-1;function Fo(t){return t==null}function al(t){return t===0&&1/t==-1/0}function QO(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function nm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ua(this.root,e,this.comparator,!0)}}class ua{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ze.RED,this.left=i??Ze.EMPTY,this.right=r??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ze(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sm(this.data.getIterator())}getIteratorFrom(e){return new sm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class sm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new mt(Tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class DT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new DT("Invalid base64 string: "+r):r}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const YO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ps(t){if(xe(!!t),typeof t=="string"){let e=0;const n=YO.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ks(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
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
 */function uf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hf(t){const e=t.mapValue.fields.__previous_value__;return uf(e)?hf(e):e}function co(t){const e=ps(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class XO{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uf(t)?4:JO(t)?9007199254740991:10:Y()}function En(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ps(i.timestampValue),a=ps(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Ks(i.bytesValue).isEqual(Ks(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return $e(i.geoPointValue.latitude)===$e(r.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return $e(i.integerValue)===$e(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=$e(i.doubleValue),a=$e(r.doubleValue);return o===a?al(o)===al(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(nm(o)!==nm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function ho(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=zs(t),s=zs(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=$e(r.integerValue||r.doubleValue),l=$e(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return im(t.timestampValue,e.timestampValue);case 4:return im(co(t),co(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Ks(r),l=Ks(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=_e(a[c],l[c]);if(u!==0)return u}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=_e($e(r.latitude),$e(o.latitude));return a!==0?a:_e($e(r.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Li(a[c],l[c]);if(u)return u}return _e(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===ha.mapValue&&o===ha.mapValue)return 0;if(r===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=_e(l[h],u[h]);if(d!==0)return d;const f=Li(a[l[h]],c[u[h]]);if(f!==0)return f}return _e(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function im(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ps(t),s=ps(e),i=_e(n.seconds,s.seconds);return i!==0?i:_e(n.nanos,s.nanos)}function Vi(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ps(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ks(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ph(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ph(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function gh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function rm(t){return!!t&&"nullValue"in t}function om(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function Dr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Dr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Dr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dr(n)}setAll(e){let n=Tt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Dr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){sr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Rt(Dr(this.value))}}/**
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
 */class Ge{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,X.min(),X.min(),X.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,i){return new Ge(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,X.min(),X.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,X.min(),X.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ll{constructor(e,n){this.position=e,this.inclusive=n}}function am(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Li(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function lm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xT{}class qe extends xT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tD(e,n,s):n==="array-contains"?new iD(e,s):n==="in"?new rD(e,s):n==="not-in"?new oD(e,s):n==="array-contains-any"?new aD(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nD(e,s):new sD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tn extends xT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Tn(e,n)}matches(e){return MT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function MT(t){return t.op==="and"}function LT(t){return eD(t)&&MT(t)}function eD(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function mh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(LT(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(n=>mh(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&En(s.value,i.value)}(t,e):t instanceof Tn?function(s,i){return i instanceof Tn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&VT(o,i.filters[a]),!0):!1}(t,e):void Y()}function FT(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(FT).join(" ,")+"}"}(t):"Filter"}class tD extends qe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class nD extends qe{constructor(e,n){super(e,"in",n),this.keys=UT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sD extends qe{constructor(e,n){super(e,"not-in",n),this.keys=UT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class iD extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&ho(n.arrayValue,this.value)}}class rD extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class oD extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class aD extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ho(this.value.arrayValue,s))}}/**
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
 */class lD{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function cm(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lD(t,e,n,s,i,r,o)}function ff(t){const e=ue(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>mh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vi(s)).join(",")),e.he=n}return e.he}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lm(t.startAt,e.startAt)&&lm(t.endAt,e.endAt)}function _h(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class lc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function cD(t,e,n,s,i,r,o,a){return new lc(t,e,n,s,i,r,o,a)}function cc(t){return new lc(t)}function um(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function dD(t){return t.collectionGroup!==null}function Ri(t){const e=ue(t);if(e.Pe===null){e.Pe=[];const n=hD(e),s=uD(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new xr(n)),e.Pe.push(new xr(Tt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new xr(Tt.keyField(),r))}}}return e.Pe}function $n(t){const e=ue(t);if(!e.Ie)if(e.limitType==="F")e.Ie=cm(e.path,e.collectionGroup,Ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ri(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new xr(r.field,o))}const s=e.endAt?new ll(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ll(e.startAt.position,e.startAt.inclusive):null;e.Ie=cm(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function yh(t,e,n){return new lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return pf($n(t),$n(e))&&t.limitType===e.limitType}function BT(t){return`${ff($n(t))}|lt:${t.limitType}`}function vh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>FT(i)).join(", ")}]`),Fo(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Vi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Vi(i)).join(",")),`Target(${s})`}($n(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):Q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Ri(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=am(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Ri(s),i)||s.endAt&&!function(o,a,l){const c=am(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Ri(s),i))}(t,e)}function fD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let s=!1;for(const i of Ri(t)){const r=pD(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function pD(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Li(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */class ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
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
 */const gD=new Fe(Q.comparator);function gs(){return gD}const jT=new Fe(Q.comparator);function Ir(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function mD(t){let e=jT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ds(){return Mr()}function HT(){return Mr()}function Mr(){return new ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const _D=new mt(Q.comparator);function fe(...t){let e=_D;for(const n of t)e=e.add(n);return e}const yD=new mt(_e);function vD(){return yD}/**
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
 */function qT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function WT(t){return{integerValue:""+t}}function ED(t,e){return QO(e)?WT(e):qT(t,e)}/**
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
 */class dc{constructor(){this._=void 0}}function TD(t,e,n){return t instanceof cl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&uf(r)&&(r=hf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Fi?KT(t,e):t instanceof fo?zT(t,e):function(i,r){const o=wD(i,r),a=hm(o)+hm(i.Te);return gh(o)&&gh(i.Te)?WT(a):qT(i.serializer,a)}(t,e)}function ID(t,e,n){return t instanceof Fi?KT(t,e):t instanceof fo?zT(t,e):n}function wD(t,e){return t instanceof ul?function(s){return gh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class cl extends dc{}class Fi extends dc{constructor(e){super(),this.elements=e}}function KT(t,e){const n=GT(e);for(const s of t.elements)n.some(i=>En(i,s))||n.push(s);return{arrayValue:{values:n}}}class fo extends dc{constructor(e){super(),this.elements=e}}function zT(t,e){let n=GT(e);for(const s of t.elements)n=n.filter(i=>!En(i,s));return{arrayValue:{values:n}}}class ul extends dc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function hm(t){return $e(t.integerValue||t.doubleValue)}function GT(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class AD{constructor(e,n){this.field=e,this.transform=n}}function RD(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Fi&&i instanceof Fi||s instanceof fo&&i instanceof fo?Mi(s.elements,i.elements,En):s instanceof ul&&i instanceof ul?En(s.Te,i.Te):s instanceof cl&&i instanceof cl}(t.transform,e.transform)}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function QT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gf(t.key,Ft.none()):new Uo(t.key,t.data,Ft.none());{const n=t.data,s=Rt.empty();let i=new mt(Tt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Zs(t.key,s,new Bt(i.toArray()),Ft.none())}}function CD(t,e,n){t instanceof Uo?function(i,r,o){const a=i.value.clone(),l=fm(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zs?function(i,r,o){if(!Ra(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=fm(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(YT(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lr(t,e,n,s){return t instanceof Uo?function(r,o,a,l){if(!Ra(r.precondition,o))return a;const c=r.value.clone(),u=pm(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zs?function(r,o,a,l){if(!Ra(r.precondition,o))return a;const c=pm(r.fieldTransforms,l,o),u=o.data;return u.setAll(YT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Ra(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Mi(s,i,(r,o)=>RD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends fc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zs extends fc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function YT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fm(t,e,n){const s=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ID(o,a,n[i]))}return s}function pm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,TD(r,o,e))}return s}class gf extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XT extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SD{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&CD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=HT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=QT(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,s)=>dm(n,s))&&Mi(this.baseMutations,e.baseMutations,(n,s)=>dm(n,s))}}/**
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
 */class bD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,ae;function kD(t){switch(t){default:return Y();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function JT(t){if(t===void 0)return Bn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Be.OK:return R.OK;case Be.CANCELLED:return R.CANCELLED;case Be.UNKNOWN:return R.UNKNOWN;case Be.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Be.INTERNAL:return R.INTERNAL;case Be.UNAVAILABLE:return R.UNAVAILABLE;case Be.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Be.NOT_FOUND:return R.NOT_FOUND;case Be.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Be.ABORTED:return R.ABORTED;case Be.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Be.DATA_LOSS:return R.DATA_LOSS;default:return Y()}}(ae=Be||(Be={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class mf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return da}static getOrCreateInstance(){return da===null&&(da=new mf),da}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let da=null;/**
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
 */function ND(){return new TextEncoder}/**
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
 */const OD=new Ai([4294967295,4294967295],0);function gm(t){const e=ND().encode(t),n=new xO;return n.update(e),new Uint8Array(n.digest())}function mm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ai([n,s],0),new Ai([i,r],0)]}class _f{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wr(`Invalid padding: ${n}`);if(s<0)throw new wr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new wr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ai.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(Ai.fromNumber(s)));return i.compare(OD)===1&&(i=new Ai([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=gm(e),[s,i]=mm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new _f(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=gm(e),[s,i]=mm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new pc(X.min(),i,new Fe(_e),gs(),fe())}}class Bo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Bo(s,n,fe(),fe(),fe())}}/**
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
 */class Ca{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class ZT{constructor(e,n){this.targetId=e,this.pe=n}}class eI{constructor(e,n,s=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class _m{constructor(){this.ye=0,this.we=vm(),this.Se=yt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=fe(),n=fe(),s=fe();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Bo(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=vm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class DD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=gs(),this.$e=ym(),this.Ue=new Fe(_e)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(_h(a))if(r===0){const l=new Q(a.path);this.ze(i,l,Ge.newNoDocument(l,X.min()))}else xe(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=mf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var y,v,I,S,P,w;const $={localCacheCount:f,existenceFilterCount:m.count},j=m.unchangedNames;return j&&($.bloomFilter={applied:h===0,hashCount:(y=j==null?void 0:j.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(S=(I=(v=j==null?void 0:j.bits)===null||v===void 0?void 0:v.bitmap)===null||I===void 0?void 0:I.length)!==null&&S!==void 0?S:0,padding:(w=(P=j==null?void 0:j.bits)===null||P===void 0?void 0:P.padding)!==null&&w!==void 0?w:0},d&&($.bloomFilter.mightContain=d)),$}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Ks(r).toUint8Array()}catch(h){if(h instanceof DT)return xi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new _f(l,o,a)}catch(h){return xi(h instanceof wr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&_h(a.target)){const l=new Q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ge.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=fe();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new pc(e,n,this.Ue,this.Ke,s);return this.Ke=gs(),this.$e=ym(),this.Ue=new Fe(_e),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new _m,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new mt(_e),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new _m),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function ym(){return new Fe(Q.comparator)}function vm(){return new Fe(Q.comparator)}const xD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LD=(()=>({and:"AND",or:"OR"}))();class VD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eh(t,e){return t.useProto3Json||Fo(e)?e:{value:e}}function hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FD(t,e){return hl(t,e.toTimestamp())}function Mn(t){return xe(!!t),X.fromTimestamp(function(n){const s=ps(n);return new We(s.seconds,s.nanos)}(t))}function yf(t,e){return function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function nI(t){const e=De.fromString(t);return xe(oI(e)),e}function dl(t,e){return yf(t.databaseId,e.path)}function Vr(t,e){const n=nI(e);if(n.get(1)!==t.databaseId.projectId)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(sI(n))}function Th(t,e){return yf(t.databaseId,e)}function UD(t){const e=nI(t);return e.length===4?De.emptyPath():sI(e)}function fl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sI(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Em(t,e,n){return{name:dl(t,e),fields:n.value.mapValue.fields}}function BD(t,e){return"found"in e?function(s,i){xe(!!i.found),i.found.name,i.found.updateTime;const r=Vr(s,i.found.name),o=Mn(i.found.updateTime),a=i.found.createTime?Mn(i.found.createTime):X.min(),l=new Rt({mapValue:{fields:i.found.fields}});return Ge.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(s,i){xe(!!i.missing),xe(!!i.readTime);const r=Vr(s,i.missing),o=Mn(i.readTime);return Ge.newNoDocument(r,o)}(t,e):Y()}function $D(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(xe(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:JT(c.code);return new U(u,c.message||"")}(o);n=new eI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vr(t,s.document.name),r=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):X.min(),a=new Rt({mapValue:{fields:s.document.fields}}),l=Ge.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ca(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vr(t,s.document),r=s.readTime?Mn(s.readTime):X.min(),o=Ge.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ca([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vr(t,s.document),r=s.removedTargetIds||[];n=new Ca([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new PD(i,r),a=s.targetId;n=new ZT(a,o)}}return n}function jD(t,e){let n;if(e instanceof Uo)n={update:Em(t,e.key,e.value)};else if(e instanceof gf)n={delete:dl(t,e.key)};else if(e instanceof Zs)n={update:Em(t,e.key,e.data),updateMask:YD(e.fieldMask)};else{if(!(e instanceof XT))return Y();n={verify:dl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:FD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function HD(t,e){return{documents:[Th(t,e.path)]}}function qD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Th(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Th(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return rI(Tn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ai(h.field),direction:zD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Eh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function WD(t){let e=UD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){xe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=iI(h);return d instanceof Tn&&LT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new xr(li(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Fo(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ll(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ll(f,d)}(n.endAt)),cD(e,i,o,r,a,"F",l,c)}function KD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=li(n.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=li(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=li(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(s=>iI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function zD(t){return xD[t]}function GD(t){return MD[t]}function QD(t){return LD[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return Tt.fromServerFormat(t.fieldPath)}function rI(t){return t instanceof qe?function(n){if(n.op==="=="){if(om(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(rm(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(om(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(rm(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:GD(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const s=n.getFilters().map(i=>rI(i));return s.length===1?s[0]:{compositeFilter:{op:QD(n.op),filters:s}}}(t):Y()}function YD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ns{constructor(e,n,s,i,r=X.min(),o=X.min(),a=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class XD{constructor(e){this.ct=e}}function JD(t){const e=WD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yh(e,e.limit,"L"):e}/**
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
 */class ZD{constructor(){this.sn=new e1}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(fs.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(fs.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class e1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new mt(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new mt(De.comparator)).toArray()}}/**
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
 */class Ui{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ui(0)}static On(){return new Ui(-1)}}/**
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
 */class t1{constructor(){this.changes=new ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class n1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class s1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Lr(s.mutation,i,Bt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=fe()){const i=Ds();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ir();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ds();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,fe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=gs();const o=Mr(),a=function(){return Mr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Zs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Lr(u.mutation,c,u.mutation.getFieldMask(),We.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new n1(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Mr();let i=new Fe((o,a)=>o-a),r=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Bt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=HT();u.forEach(d=>{if(!r.has(d)){const f=QT(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Ds());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,fe())).next(u=>({batchId:a,changes:mD(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Ir();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ir();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,h){return new lc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ge.newInvalidDocument(c)))});let o=Ir();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Lr(c.mutation,l,Bt.empty(),We.now()),hc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class i1{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:JD(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class r1{constructor(){this.overlays=new Fe(Q.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ds();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Ds(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ds(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ds(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bD(n,s));let r=this.cr.get(n);r===void 0&&(r=fe(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
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
 */class vf{constructor(){this.lr=new mt(ze.hr),this.Pr=new mt(ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new ze(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new Q(new De([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new De([])),s=new ze(n,e),i=new ze(n,e+1);let r=fe();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||_e(e.mr,n.mr)}static Ir(e,n){return _e(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
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
 */class o1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new mt(ze.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SD(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new mt(_e);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),k.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new ze(new Q(r),0);let a=new mt(_e);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return k.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new ze(n,0),i=this.pr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class a1{constructor(e){this.Dr=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=gs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ge.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=gs();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||KO(WO(u),s)<=0||(i.has(u.key)||hc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new l1(this)}getSize(e){return k.resolve(this.size)}}class l1 extends t1{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class c1{constructor(e){this.persistence=e,this.Cr=new ir(n=>ff(n),pf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new vf,this.targetCount=0,this.Or=Ui.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
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
 */class u1{constructor(e,n){this.Nr={},this.overlays={},this.Br=new cf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new c1(this),this.indexManager=new ZD,this.remoteDocumentCache=function(i){return new a1(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new XD(n),this.Qr=new i1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new o1(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const i=new h1(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class h1 extends GO{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Wr=new vf,this.Gr=null}static zr(e){return new Ef(e)}get jr(){if(this.Gr)return this.Gr;throw Y()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,s=>{const i=Q.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Tf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=fe(),i=fe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Tf(e,n.fromCache,s,i)}}/**
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
 */class d1{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(um(n))return k.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yh(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=fe(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,yh(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return um(n)||i.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(tm()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vh(n)),this.ji(e,o,n,qO(i,-1)))})}Gi(e,n){let s=new mt($T(e));return n.forEach((i,r)=>{hc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return tm()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",vh(n)),this.Ki.getDocumentsMatchingQuery(e,n,fs.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class f1{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Fe(_e),this.Yi=new ir(r=>ff(r),pf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function p1(t,e,n,s){return new f1(t,e,n,s)}async function aI(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=fe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function lI(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function g1(t,e){const n=ue(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(yt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=gs(),c=fe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(m1(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function m1(t,e,n){let s=fe(),i=fe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=gs();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function _1(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new ns(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Ih(t,e,n){const s=ue(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Tm(t,e,n){const s=ue(t);let i=X.min(),r=fe();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ue(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:fe())).next(a=>(y1(s,fD(e),a),{documents:a,ss:r})))}function y1(t,e,n){let s=t.Zi.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class Im{constructor(){this.activeTargetIds=vD()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v1{constructor(){this.Hs=new Im,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Im,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E1{Ys(e){}shutdown(){}}/**
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
 */class wm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function ru(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
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
 */const T1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class I1{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const at="WebChannelConnection";class w1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=ru(),l=this.mo(n,s);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw xi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=T1[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=ru();return new Promise((o,a)=>{const l=new DO;l.setWithCredentials(!0),l.listenOnce(kO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case su.NO_ERROR:const u=l.getResponseJson();H(at,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case su.TIMEOUT:H(at,`RPC '${e}' ${r} timed out`),a(new U(R.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const h=l.getStatus();if(H(at,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(I)>=0?I:R.UNKNOWN}(f.status);a(new U(m,f.message))}else a(new U(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(R.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(at,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);H(at,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=ru(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bO(),a=PO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new OO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");H(at,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new I1({so:v=>{f?H(at,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(H(at,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),H(at,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,I,S)=>{v.listen(I,P=>{try{S(P)}catch(w){setTimeout(()=>{throw w},0)}})};return y(h,ca.EventType.OPEN,()=>{f||H(at,`RPC '${e}' stream ${i} transport opened.`)}),y(h,ca.EventType.CLOSE,()=>{f||(f=!0,H(at,`RPC '${e}' stream ${i} transport closed`),m.Po())}),y(h,ca.EventType.ERROR,v=>{f||(f=!0,xi(at,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new U(R.UNAVAILABLE,"The operation could not be completed")))}),y(h,ca.EventType.MESSAGE,v=>{var I;if(!f){const S=v.data[0];xe(!!S);const P=S,w=P.error||((I=P[0])===null||I===void 0?void 0:I.error);if(w){H(at,`RPC '${e}' stream ${i} received error:`,w);const $=w.status;let j=function(se){const ie=Be[se];if(ie!==void 0)return JT(ie)}($),te=w.message;j===void 0&&(j=R.INTERNAL,te="Unknown error status: "+$+" with message "+w.message),f=!0,m.Po(new U(j,te)),h.close()}else H(at,`RPC '${e}' stream ${i} received:`,S),m.Io(S)}}),y(a,NO.STAT_EVENT,v=>{v.stat===Zg.PROXY?H(at,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Zg.NOPROXY&&H(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function ou(){return typeof document<"u"?document:null}/**
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
 */function gc(t){return new VD(t,!0)}/**
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
 */class If{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class A1{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new If(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new U(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R1 extends A1{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=$D(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Mn(o.readTime):X.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=fl(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=_h(l)?{documents:HD(r,l)}:{query:qD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tI(r,o.resumeToken);const c=Eh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=hl(r,o.snapshotVersion.toTimestamp());const c=Eh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=KD(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=fl(this.serializer),n.removeTarget=e,this.Ho(n)}}/**
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
 */class C1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(R.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(R.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class S1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Bn(n),this.d_=!1):H("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class b1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{jo(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.y_.add(4),await $o(c),c.b_.set("Unknown"),c.y_.delete(4),await mc(c)}(this))})}),this.b_=new S1(s,i)}}async function mc(t){if(jo(t))for(const e of t.w_)await e(!0)}async function $o(t){for(const e of t.w_)await e(!1)}function cI(t,e){const n=ue(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Rf(n)?Af(n):rr(n).Uo()&&wf(n,e))}function uI(t,e){const n=ue(t),s=rr(n);n.p_.delete(e),s.Uo()&&hI(n,e),n.p_.size===0&&(s.Uo()?s.zo():jo(n)&&n.b_.set("Unknown"))}function wf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rr(t).i_(e)}function hI(t,e){t.D_.Be(e),rr(t).s_(e)}function Af(t){t.D_=new DD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),rr(t).start(),t.b_.A_()}function Rf(t){return jo(t)&&!rr(t).$o()&&t.p_.size>0}function jo(t){return ue(t).y_.size===0}function dI(t){t.D_=void 0}async function P1(t){t.p_.forEach((e,n)=>{wf(t,e)})}async function k1(t,e){dI(t),Rf(t)?(t.b_.m_(e),Af(t)):t.b_.set("Unknown")}async function N1(t,e,n){if(t.b_.set("Online"),e instanceof eI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Am(t,s)}else if(e instanceof Ca?t.D_.We(e):e instanceof ZT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const s=await lI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(yt.EMPTY_BYTE_STRING,u.snapshotVersion)),hI(r,l);const h=new ns(u.target,l,c,u.sequenceNumber);wf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await Am(t,s)}}async function Am(t,e,n){if(!Vo(e))throw e;t.y_.add(1),await $o(t),t.b_.set("Offline"),n||(n=()=>lI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await mc(t)})}async function Rm(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=jo(n);n.y_.add(3),await $o(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await mc(n)}async function O1(t,e){const n=ue(t);e?(n.y_.delete(2),await mc(n)):e||(n.y_.add(2),await $o(n),n.b_.set("Unknown"))}function rr(t){return t.v_||(t.v_=function(n,s,i){const r=ue(n);return r.P_(),new R1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:P1.bind(null,t),uo:k1.bind(null,t),r_:N1.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Rf(t)?Af(t):t.b_.set("Unknown")):(await t.v_.stop(),dI(t))})),t.v_}/**
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
 */class Cf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Cf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fI(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Vo(t))return new U(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=Ir(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cm{constructor(){this.F_=new Fe(Q.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):Y():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bi(e,n,Ci.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class D1{constructor(){this.x_=void 0,this.listeners=[]}}class x1{constructor(){this.queries=new ir(e=>BT(e),uc),this.onlineState="Unknown",this.O_=new Set}}async function Sf(t,e){const n=ue(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new D1),i)try{r.x_=await n.onListen(s)}catch(o){const a=fI(o,`Initialization of query '${vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&Pf(n)}async function bf(t,e){const n=ue(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function M1(t,e){const n=ue(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&Pf(n)}function L1(t,e,n){const s=ue(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Pf(t){t.O_.forEach(e=>{e.next()})}class kf{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Bi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class pI{constructor(e){this.key=e}}class gI{constructor(e){this.key=e}}class V1{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=fe(),this.mutatedKeys=fe(),this.na=$T(e),this.ra=new Ci(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new Cm,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=hc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Bi(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Cm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=fe(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new gI(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new pI(s))}),n}ha(e){this.X_=e.ss,this.ta=fe();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Bi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class F1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class U1{constructor(e){this.key=e,this.Ia=!1}}class B1{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ir(a=>BT(a),uc),this.da=new Map,this.Aa=new Set,this.Ra=new Fe(Q.comparator),this.Va=new Map,this.ma=new vf,this.fa={},this.ga=new Map,this.pa=Ui.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function $1(t,e){const n=G1(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await _1(n.localStore,$n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await j1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&cI(n.remoteStore,o)}return i}async function j1(t,e,n,s,i){t.wa=(h,d,f)=>async function(y,v,I,S){let P=v.view.sa(I);P.zi&&(P=await Tm(y.localStore,v.query,!1).then(({documents:j})=>v.view.sa(j,P)));const w=S&&S.targetChanges.get(v.targetId),$=v.view.applyChanges(P,y.isPrimaryClient,w);return bm(y,v.targetId,$.ca),$.snapshot}(t,h,d,f);const r=await Tm(t.localStore,e,!0),o=new V1(e,r.ss),a=o.sa(r.documents),l=Bo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);bm(t,n,c.ca);const u=new F1(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function H1(t,e){const n=ue(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!uc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ih(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),uI(n.remoteStore,s.targetId),wh(n,s.targetId)}).catch(lf)):(wh(n,s.targetId),await Ih(n.localStore,s.targetId,!0))}async function mI(t,e){const n=ue(t);try{const s=await g1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?xe(o.Ia):i.removedDocuments.size>0&&(xe(o.Ia),o.Ia=!1))}),await yI(n,s,e)}catch(s){await lf(s)}}function Sm(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Pf(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function q1(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Fe(Q.comparator);o=o.insert(r,Ge.newNoDocument(r,X.min()));const a=fe().add(r),l=new pc(X.min(),new Map,new Fe(_e),o,a);await mI(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),Nf(s)}else await Ih(s.localStore,e,!1).then(()=>wh(s,e,n)).catch(lf)}function wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||_I(t,s)})}function _I(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(uI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Nf(t))}function bm(t,e,n){for(const s of n)s instanceof pI?(t.ma.addReference(s.key,e),W1(t,s)):s instanceof gI?(H("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||_I(t,s.key)):Y()}function W1(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(H("SyncEngine","New document in limbo: "+n),t.Aa.add(s),Nf(t))}function Nf(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new Q(De.fromString(e)),s=t.pa.next();t.Va.set(s,new U1(n)),t.Ra=t.Ra.insert(n,s),cI(t.remoteStore,new ns($n(cc(n.path)),s,"TargetPurposeLimboResolution",cf.ae))}}async function yI(t,e,n){const s=ue(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Tf.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=ue(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Vo(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(s.localStore,r))}async function K1(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await aI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new U(R.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yI(n,s.ts)}}function z1(t,e){const n=ue(t),s=n.Va.get(e);if(s&&s.Ia)return fe().add(s.key);{let i=fe();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function G1(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q1.bind(null,e),e.Ta.r_=M1.bind(null,e.eventManager),e.Ta.Sa=L1.bind(null,e.eventManager),e}class Pm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return p1(this.persistence,new d1,e.initialUser,this.serializer)}createPersistence(e){return new u1(Ef.zr,this.serializer)}createSharedClientState(e){return new v1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Q1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await O1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new x1}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),s=function(r){return new w1(r)}(e.databaseInfo);return function(r,o,a,l){return new C1(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new b1(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Sm(this.syncEngine,n,0),function(){return wm.v()?new wm:new E1}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new B1(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ue(n);H("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await $o(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Y1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new U(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=ue(i),a=fl(o.serializer)+"/documents",l={documents:r.map(d=>dl(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=BD(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());xe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new gf(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const i=Q.fromPath(s);this.mutations.push(new XT(i,this.precondition(i)))}),await async function(s,i){const r=ue(s),o=fl(r.serializer)+"/documents",a={writes:i.map(l=>jD(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=X.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new U(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ft.exists(!1):Ft.updateTime(n):Ft.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new U(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ft.updateTime(n)}return Ft.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class X1{constructor(e,n,s,i,r){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.qa=s.maxAttempts,this.Ko=new If(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new Y1(this.datastore),n=this.Ka(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.$a(i)}))}).catch(s=>{this.$a(s)})})}Ka(e){try{const n=this.updateFunction(e);return!Fo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!kD(n)}return!1}}/**
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
 */class J1{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=NT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{H("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(H("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=fI(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function au(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await aI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ex(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Rm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Rm(e.remoteStore,r)),t._onlineComponents=e}function Z1(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ex(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await au(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Z1(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await au(t,new Pm)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await au(t,new Pm);return t._offlineComponents}async function vI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await km(t,new Q1))),t._onlineComponents}function tx(t){return vI(t).then(e=>e.datastore)}async function pl(t){const e=await vI(t),n=e.eventManager;return n.onListen=$1.bind(null,e.syncEngine),n.onUnlisten=H1.bind(null,e.syncEngine),n}function nx(t,e,n={}){const s=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Of({next:d=>{o.enqueueAndForget(()=>bf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new U(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new U(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kf(cc(a.path),u,{includeMetadataChanges:!0,W_:!0});return Sf(r,h)}(await pl(t),t.asyncQueue,e,n,s)),s.promise}function sx(t,e,n={}){const s=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Of({next:d=>{o.enqueueAndForget(()=>bf(r,h)),d.fromCache&&l.source==="server"?c.reject(new U(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kf(a,u,{includeMetadataChanges:!0,W_:!0});return Sf(r,h)}(await pl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function EI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */function TI(t,e,n){if(!n)throw new U(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ix(t,e,n,s){if(e===!0&&s===!0)throw new U(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Om(t){if(!Q.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(Q.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new U(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new U(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ix("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new MO;switch(s.type){case"firstParty":return new UO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Nm.get(n);s&&(H("ComponentProvider","Removing Datastore"),Nm.delete(n),s.terminate())}(this),Promise.resolve()}}function rx(t,e,n,s={}){var i;const r=(t=Ln(t,_c))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=lt.MOCK_USER;else{a=UA(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new LO(new kT(a,l))}}/**
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
 */class Ho{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ho(this.firestore,e,this._query)}}class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class cs extends Ho{constructor(e,n,s){super(e,n,cc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Q(e))}withConverter(e){return new cs(this.firestore,e,this._path)}}function UL(t,e,...n){if(t=rt(t),TI("collection","path",e),t instanceof _c){const s=De.fromString(e,...n);return Dm(s),new cs(t,null,s)}{if(!(t instanceof Ct||t instanceof cs))throw new U(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return Dm(s),new cs(t.firestore,null,s)}}function BL(t,e,...n){if(t=rt(t),arguments.length===1&&(e=NT.V()),TI("doc","path",e),t instanceof _c){const s=De.fromString(e,...n);return Om(s),new Ct(t,null,new Q(s))}{if(!(t instanceof Ct||t instanceof cs))throw new U(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return Om(s),new Ct(t.firestore,t instanceof cs?t.converter:null,new Q(s))}}/**
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
 */class ox{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new If(this,"async_queue_retry"),this.Xa=()=>{const n=ou();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new xn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Vo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Bn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&Y()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Mm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class $i extends _c{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new ox}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||II(this),this._firestoreClient.terminate()}}function ax(t,e){const n=typeof t=="object"?t:od(),s=typeof t=="string"?t:e||"(default)",i=rd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=FA("firestore");r&&rx(i,...r)}return i}function yc(t){return t._firestoreClient||II(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function II(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new XO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,EI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new J1(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(yt.fromBase64String(e))}catch(n){throw new U(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ec{constructor(e){this._methodName=e}}/**
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
 */class Tc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const lx=/^__.*__$/;class cx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Zs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class wI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Zs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Ic{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return gl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(AI(this.uu)&&lx.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class ux{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gc(e)}Ru(e,n,s,i=!1){return new Ic({uu:e,methodName:n,Au:s,path:Tt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hx(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new ux(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dx(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);xf("Data must be an object, but it was:",o,s);const a=RI(s,o);let l,c;if(r.merge)l=new Bt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ah(e,h,n);if(!o.contains(d))throw new U(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SI(u,d)||u.push(d)}l=new Bt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new cx(new Rt(a),l,c)}class wc extends Ec{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wc}}function fx(t,e,n){return new Ic({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class px extends Ec{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=fx(this,e,!0),s=this.Vu.map(r=>qo(r,n)),i=new Fi(s);return new AD(e.path,i)}isEqual(e){return this===e}}function gx(t,e,n,s){const i=t.Ru(1,e,n);xf("Data must be an object, but it was:",i,s);const r=[],o=Rt.empty();sr(s,(l,c)=>{const u=Mf(e,l,n);c=rt(c);const h=i.Iu(u);if(c instanceof wc)r.push(u);else{const d=qo(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Bt(r);return new wI(o,a,i.fieldTransforms)}function mx(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[Ah(e,s,n)],l=[i];if(r.length%2!=0)throw new U(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ah(e,r[d])),l.push(r[d+1]);const c=[],u=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!SI(c,a[d])){const f=a[d];let m=l[d];m=rt(m);const y=o.Iu(f);if(m instanceof wc)c.push(f);else{const v=qo(m,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new Bt(c);return new wI(u,h,o.fieldTransforms)}function qo(t,e){if(CI(t=rt(t)))return xf("Unsupported field value:",e,t),RI(t,e);if(t instanceof Ec)return function(s,i){if(!AI(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=qo(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ED(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=We.fromDate(s);return{timestampValue:hl(i.serializer,r)}}if(s instanceof We){const r=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hl(i.serializer,r)}}if(s instanceof Tc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Gs)return{bytesValue:tI(i.serializer,s._byteString)};if(s instanceof Ct){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yf(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${Df(s)}`)}(t,e)}function RI(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(s,i)=>{const r=qo(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function CI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Tc||t instanceof Gs||t instanceof Ct||t instanceof Ec)}function xf(t,e,n){if(!CI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Df(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function Ah(t,e,n){if((e=rt(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Mf(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const _x=new RegExp("[~\\*/\\[\\]]");function Mf(t,e,n){if(e.search(_x)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vc(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new U(R.INVALID_ARGUMENT,a+t+l)}function SI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ml{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yx extends ml{data(){return super.data()}}function bI(t,e){return typeof e=="string"?Mf(t,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
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
 */function PI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kI{convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return sr(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Tc($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=ps(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);xe(oI(s));const i=new uo(s.get(1),s.get(3)),r=new Q(s.popFirst(5));return i.isEqual(n)||Bn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function vx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ex extends kI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}/**
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
 */class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lf extends ml{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Sa extends Lf{data(e={}){return super.data(e)}}class NI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Sa(this._firestore,this._userDataWriter,s.key,s,new fi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Sa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Sa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Tx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function OI(t){t=Ln(t,Ct);const e=Ln(t.firestore,$i);return nx(yc(e),t._key).then(n=>DI(e,t,n))}class Ac extends kI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Ix(t){t=Ln(t,Ho);const e=Ln(t.firestore,$i),n=yc(e),s=new Ac(e);return PI(t._query),sx(n,t._query).then(i=>new NI(e,s,t,i))}function Vf(t,...e){var n,s,i;t=rt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ct)c=Ln(t.firestore,$i),u=cc(t._key.path),l={next:h=>{e[o]&&e[o](DI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ln(t,Ho);c=Ln(h.firestore,$i),u=h._query;const d=new Ac(c);l={next:f=>{e[o]&&e[o](new NI(c,d,h,f))},error:e[o+1],complete:e[o+2]},PI(t._query)}return function(d,f,m,y){const v=new Of(y),I=new kf(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>Sf(await pl(d),I)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>bf(await pl(d),I))}}(yc(c),u,a,l)}function DI(t,e,n){const s=n.docs.get(e._key),i=new Ac(t);return new Lf(t,i,e._key,s,new fi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const wx={maxAttempts:5};function pr(t,e){if((t=rt(t)).firestore!==e)throw new U(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class Ax extends class{constructor(n,s){this._firestore=n,this._transaction=s,this._dataReader=hx(n)}get(n){const s=pr(n,this._firestore),i=new Ex(this._firestore);return this._transaction.lookup([s._key]).then(r=>{if(!r||r.length!==1)return Y();const o=r[0];if(o.isFoundDocument())return new ml(this._firestore,i,o.key,o,s.converter);if(o.isNoDocument())return new ml(this._firestore,i,s._key,null,s.converter);throw Y()})}set(n,s,i){const r=pr(n,this._firestore),o=vx(r.converter,s,i),a=dx(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,a),this}update(n,s,i,...r){const o=pr(n,this._firestore);let a;return a=typeof(s=rt(s))=="string"||s instanceof vc?mx(this._dataReader,"Transaction.update",o._key,s,i,r):gx(this._dataReader,"Transaction.update",o._key,s),this._transaction.update(o._key,a),this}delete(n){const s=pr(n,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=pr(e,this._firestore),s=new Ac(this._firestore);return super.get(e).then(i=>new Lf(this._firestore,s,n._key,i._document,new fi(!1,!1),n.converter))}}function jL(t,e,n){t=Ln(t,$i);const s=Object.assign(Object.assign({},wx),n);return function(r){if(r.maxAttempts<1)throw new U(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,a){const l=new xn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await tx(r);new X1(r.asyncQueue,c,a,o,l).run()}),l.promise}(yc(t),i=>e(new Ax(t,i)),s)}function HL(...t){return new px("arrayUnion",t)}(function(e,n=!0){(function(i){nr=i})(ms),yn(new Zt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new $i(new VO(s.getProvider("auth-internal")),new $O(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ot(em,"4.1.0",e),Ot(em,"4.1.0","esm2017")})();/**
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
 */const xI="firebasestorage.googleapis.com",Rx="storageBucket",Cx=2*60*1e3,Sx=10*60*1e3;/**
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
 */class An extends wn{constructor(e,n,s=0){super(lu(e),`Firebase Storage: ${n} (${lu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,An.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function lu(t){return"storage/"+t}function bx(){const t="An unknown error occurred, please check the error payload for server response.";return new An(In.UNKNOWN,t)}function Px(){return new An(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kx(){return new An(In.CANCELED,"User canceled the upload/download.")}function Nx(t){return new An(In.INVALID_URL,"Invalid URL '"+t+"'.")}function Ox(t){return new An(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lm(t){return new An(In.INVALID_ARGUMENT,t)}function MI(){return new An(In.APP_DELETED,"The Firebase app was deleted.")}function Dx(t){return new An(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(s.path==="")return s;throw Ox(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===xI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${y}/${i}/${v}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<P.length;w++){const $=P[w],j=$.regex.exec(e);if(j){const te=j[$.indices.bucket];let F=j[$.indices.path];F||(F=""),s=new Yt(te,F),$.postModify(s);break}}if(s==null)throw Nx(e);return s}}class xx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Mx(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...I){if(c){d();return}if(v){d(),u.call(null,v,...I);return}if(l()||o){d(),u.call(null,v,...I);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let m=!1;function y(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Lx(t){t(!1)}/**
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
 */function Vx(t){return t!==void 0}function Vm(t,e,n,s){if(s<e)throw Lm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Lm(`Invalid value for '${t}'. Expected ${n} or less.`)}function Fx(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _l;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_l||(_l={}));/**
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
 */function Ux(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Bx{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new pa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===_l.NO_ERROR,l=r.getStatus();if(!a||Ux(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===_l.ABORT;s(!1,new pa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new pa(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Vx(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=bx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MI():kx();o(l)}else{const l=Px();o(l)}};this.canceled_?n(!1,new pa(!1,null,!0)):this.backoffId_=Mx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Lx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function $x(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Wx(t,e,n,s,i,r,o=!0){const a=Fx(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Hx(c,e),$x(c,n),jx(c,r),qx(c,s),new Bx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Kx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class yl{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yl(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zx(this._location.path)}get storage(){return this._service}get parent(){const e=Kx(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new yl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Dx(e)}}function Fm(t,e){const n=e==null?void 0:e[Rx];return n==null?null:Yt.makeFromBucketSpec(n,t)}class Gx{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=xI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cx,this._maxUploadRetryTime=Sx,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=Fm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Fm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new xx(MI());{const o=Wx(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Um="@firebase/storage",Bm="0.11.2";/**
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
 */const Qx="storage";function Yx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gx(n,s,i,e,ms)}function Xx(){yn(new Zt(Qx,Yx,"PUBLIC").setMultipleInstances(!0)),Ot(Um,Bm,""),Ot(Um,Bm,"esm2017")}Xx();const cu=new WeakMap;function LI(t,e){return cu.has(e)||cu.set(e,t||{f:{},r:{},s:{},u:{}}),cu.get(e)}function Jx(t,e,n,s){if(!t)return n;const[i,r]=VI(t);if(!i)return n;const o=LI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function Zx(t,e,n,s){if(!t)return;const[i,r]=VI(t);if(!i)return;const o=LI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(un),a}function VI(t){return Db(t)||xb(t)?["f",t.path]:Mb(t)?["r",t.toString()]:Lb(t)?["s",t.toString()]:[]}const uu=new WeakMap;function eM(t,e,n){const s=Io();uu.has(s)||uu.set(s,new Map);const i=uu.get(s),r=Zx(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):un}const tM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Rh(t,e,n,s){if(!Nb(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof We||m instanceof Tc)h[f]=m;else if(md(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Qs(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Ff={reset:!1,wait:!0,maxRefDepth:2,converter:tM,snapshotOptions:{serverTimestamps:"estimate"}};function vl(t){for(const e in t)t[e].unsub()}function Ch(t,e,n,s,i,r,o,a,l){const[c,u]=Rh(s.data(t.snapshotOptions),gd(e,n),i,t);r.set(e,n,c),Sh(t,e,n,i,u,r,o,a,l)}function nM({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=un;return a.once?OI(t).then(u=>{u.exists()?Ch(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Vf(t,u=>{u.exists()?Ch(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),vl(l)}}function Sh(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],I=i[y],S=`${n}.${y}`;if(f[S]=!0,v)if(v.path!==I.path)v.unsub();else return;s[y]={data:()=>gd(e,S),unsub:nM({ref:I,target:e,path:S,depth:o,ops:r,resolve:m.bind(null,S),reject:l},t),path:I.path}})}function sM(t,e,n,s,i,r){const o=Object.assign({},Ff,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=is(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,y=un;const v=[],I={added:({newIndex:P,doc:w})=>{v.splice(P,0,Object.create(null));const $=v[P],[j,te]=Rh(w.data(l),void 0,$,o);n.add(ct(d),P,j),Sh(o,d,`${h}.${P}`,$,te,n,0,s.bind(null,w),i)},modified:({oldIndex:P,newIndex:w,doc:$})=>{const j=ct(d),te=v[P],F=j[P],[se,ie]=Rh($.data(l),F,te,o);v.splice(w,0,te),n.remove(j,P),n.add(j,w,se),Sh(o,d,`${h}.${w}`,te,ie,n,0,s,i)},removed:({oldIndex:P})=>{const w=ct(d);n.remove(w,P),vl(v.splice(P,1)[0])}};function S(P){const w=P.docChanges(a);if(!m&&w.length){m=!0;let $=0;const j=w.length,te=Object.create(null);for(let F=0;F<j;F++)te[w[F].doc.id]=!0;s=F=>{F&&F.id in te&&++$>=j&&(c&&(n.set(t,h,ct(d)),d=t),f(ct(d)),s=un)}}w.forEach($=>{I[$.type]($)}),w.length||(c&&(n.set(t,h,ct(d)),d=t),s(ct(d)))}return u?Ix(e).then(S).catch(i):y=Vf(e,S,i),P=>{if(y(),P){const w=typeof P=="function"?P():[];n.set(t,h,w)}v.forEach(vl)}}function iM(t,e,n,s,i,r){const o=Object.assign({},Ff,r),a="value",l=Object.create(null);s=Vb(s,()=>gd(t,a));let c=un;function u(h){h.exists()?Ch(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?OI(e).then(u).catch(i):c=Vf(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}vl(l)}}const $m=Symbol();function rM(t,e){let n=un;const s=Object.assign({},Ff,e),i=ct(t),r=s.target||is();Ub()&&(s.once=!0);const o=Jx(i,s.ssrKey,$m,Io()),a=o!==$m;a&&(r.value=o);let l=!a;const c=is(!1),u=is(),h=k_(),d=p_();let f=un;function m(){let I=ct(t);const S=new Promise((P,w)=>{if(n(s.reset),!I)return n=un,P(null);c.value=l,l=!0,I.converter||(I=I.withConverter(s.converter)),n=(md(I)?iM:sM)(r,I,oM,P,w,s)}).catch(P=>(h.value===S&&(u.value=P),Promise.reject(P))).finally(()=>{h.value===S&&(c.value=!1)});h.value=S}let y=un;nt(t)&&(y=yi(t,m)),m(),i&&(f=eM(h.value,i,s.ssrKey)),Zh()&&G_(()=>h.value),d&&pw(v);function v(I=s.reset){y(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const oM={set:(t,e,n)=>Pb(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function qL(t,e){return rM(t,{target:is([]),...e})}function aM(t){return(e,n)=>{const s=Bb(e,n).run(()=>is(t));gv.set(e,s),Hb(s,e)}}function WL(t){return bb?hv(Io(t)):null}function lM(t,{firebaseApp:e,modules:n=[]}){t.provide(pv,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const cM=Symbol();var jm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jm||(jm={}));function uM(){const t=f_(!0),e=t.run(()=>is({}));let n=[],s=[];const i=Hh({install(r){i._a=r,r.provide(cM,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!tb?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const FI=Cy({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),KL=ax(FI);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ci=typeof window<"u";function hM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function hu(t,e){const n={};for(const s in e){const i=e[s];n[s]=nn(i)?i.map(t):t(i)}return n}const Fr=()=>{},nn=Array.isArray,dM=/\/$/,fM=t=>t.replace(dM,"");function du(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_M(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function pM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gM(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ji(e.matched[s],n.matched[i])&&UI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ji(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mM(t[n],e[n]))return!1;return!0}function mM(t,e){return nn(t)?qm(t,e):nn(e)?qm(e,t):t===e}function qm(t,e){return nn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _M(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function yM(t){if(!t)if(ci){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fM(t)}const vM=/^[^#]+#/;function EM(t,e){return t.replace(vM,"#")+e}function TM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Rc=()=>({left:window.pageXOffset,top:window.pageYOffset});function IM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=TM(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wm(t,e){return(history.state?history.state.position-e:-1)+t}const bh=new Map;function wM(t,e){bh.set(t,e)}function AM(t){const e=bh.get(t);return bh.delete(t),e}let RM=()=>location.protocol+"//"+location.host;function BI(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Hm(l,"")}return Hm(n,t)+s+i}function CM(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=BI(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else s(f);i.forEach(I=>{I(n.value,m,{delta:v,type:po.pop,direction:v?v>0?Ur.forward:Ur.back:Ur.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Rc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Km(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Rc():null}}function SM(t){const{history:e,location:n}=window,s={value:BI(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:RM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,Km(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,e.state,{forward:l,scroll:Rc()});r(u.current,u,!0);const h=Ee({},Km(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function bM(t){t=yM(t);const e=SM(t),n=CM(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:t,go:s,createHref:EM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function PM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),bM(t)}function kM(t){return typeof t=="string"||t&&typeof t=="object"}function $I(t){return typeof t=="string"||typeof t=="symbol"}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jI=Symbol("");var zm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zm||(zm={}));function Hi(t,e){return Ee(new Error,{type:t,[jI]:!0},e)}function Sn(t,e){return t instanceof Error&&jI in t&&(e==null||!!(t.type&e))}const Gm="[^/]+?",NM={sensitive:!1,strict:!1,start:!0,end:!0},OM=/[.+*?^${}()[\]/\\]/g;function DM(t,e){const n=Ee({},NM,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(OM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:I}=d;r.push({name:m,repeatable:y,optional:v});const S=I||Gm;if(S!==Gm){f+=10;try{new RegExp(`(${S})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+w.message)}}let P=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(P=v&&c.length<2?`(?:/${P})`:"/"+P),v&&(P+="?"),i+=P,f+=20,v&&(f+=-8),y&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,I=m in c?c[m]:"";if(nn(I)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=nn(I)?I.join("/"):I;if(!S)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function xM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function MM(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=xM(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Qm(s))return 1;if(Qm(i))return-1}return i.length-s.length}function Qm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LM={type:0,value:""},VM=/[a-zA-Z0-9_]/;function FM(t){if(!t)return[[]];if(t==="/")return[[LM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:VM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function UM(t,e,n){const s=DM(FM(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BM(t,e){const n=[],s=new Map;e=Jm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=$M(u);m.aliasOf=d&&d.record;const y=Jm(e,u),v=[m];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of P)v.push(Ee({},m,{components:d?d.record.components:m.components,path:w,aliasOf:d?d.record:m}))}let I,S;for(const P of v){const{path:w}=P;if(h&&w[0]!=="/"){const $=h.record.path,j=$[$.length-1]==="/"?"":"/";P.path=h.record.path+(w&&j+w)}if(I=UM(P,h,y),d?d.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),f&&u.name&&!Xm(I)&&o(u.name)),m.children){const $=m.children;for(let j=0;j<$.length;j++)r($[j],I,d&&d.children[j])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return S?()=>{o(S)}:Fr}function o(u){if($I(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&MM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!HI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hi(1,{location:u});y=d.record.name,f=Ee(Ym(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&Ym(u.params,d.keys.map(S=>S.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(S=>S.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw Hi(1,{location:u,currentLocation:h});y=d.record.name,f=Ee({},h.params,u.params),m=d.stringify(f)}const v=[];let I=d;for(;I;)v.unshift(I.record),I=I.parent;return{name:y,path:m,params:f,matched:v,meta:HM(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ym(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function $M(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HM(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Jm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function HI(t,e){return e.children.some(n=>n===t||HI(t,n))}const qI=/#/g,qM=/&/g,WM=/\//g,KM=/=/g,zM=/\?/g,WI=/\+/g,GM=/%5B/g,QM=/%5D/g,KI=/%5E/g,YM=/%60/g,zI=/%7B/g,XM=/%7C/g,GI=/%7D/g,JM=/%20/g;function Uf(t){return encodeURI(""+t).replace(XM,"|").replace(GM,"[").replace(QM,"]")}function ZM(t){return Uf(t).replace(zI,"{").replace(GI,"}").replace(KI,"^")}function Ph(t){return Uf(t).replace(WI,"%2B").replace(JM,"+").replace(qI,"%23").replace(qM,"%26").replace(YM,"`").replace(zI,"{").replace(GI,"}").replace(KI,"^")}function eL(t){return Ph(t).replace(KM,"%3D")}function tL(t){return Uf(t).replace(qI,"%23").replace(zM,"%3F")}function nL(t){return t==null?"":tL(t).replace(WM,"%2F")}function El(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(WI," "),o=r.indexOf("="),a=El(o<0?r:r.slice(0,o)),l=o<0?null:El(r.slice(o+1));if(a in e){let c=e[a];nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zm(t){let e="";for(let n in t){const s=t[n];if(n=eL(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(s)?s.map(r=>r&&Ph(r)):[s&&Ph(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function iL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const rL=Symbol(""),e_=Symbol(""),Cc=Symbol(""),Bf=Symbol(""),kh=Symbol("");function gr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Hi(4,{from:n,to:e})):h instanceof Error?a(h):kM(h)?a(Hi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function fu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(oL(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Xn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hM(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Xn(d,n,s,r,o)()}))}}return i}function oL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function t_(t){const e=Nt(Cc),n=Nt(Bf),s=Kt(()=>e.resolve(ct(t.to))),i=Kt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ji.bind(null,u));if(d>-1)return d;const f=n_(l[c-2]);return c>1&&n_(u)===f&&h[h.length-1].path!==f?h.findIndex(ji.bind(null,l[c-2])):d}),r=Kt(()=>i.value>-1&&uL(n.params,s.value.params)),o=Kt(()=>i.value>-1&&i.value===n.matched.length-1&&UI(n.params,s.value.params));function a(l={}){return cL(l)?e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(Fr):Promise.resolve()}return{route:s,href:Kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const aL=Nl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:t_,setup(t,{slots:e}){const n=Sl(t_(t)),{options:s}=Nt(Cc),i=Kt(()=>({[s_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[s_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:td("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lL=aL;function cL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uL(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function n_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const s_=(t,e,n)=>t??e??n,hL=Nl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(kh),i=Kt(()=>t.route||s.value),r=Nt(e_,0),o=Kt(()=>{let c=ct(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kt(()=>i.value.matched[o.value]);_a(e_,Kt(()=>o.value+1)),_a(rL,a),_a(kh,i);const l=is();return yi(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ji(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return i_(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=td(d,Ee({},m,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return i_(n.default,{Component:v,route:c})||v}}});function i_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const QI=hL;function dL(t){const e=BM(t.routes,t),n=t.parseQuery||sL,s=t.stringifyQuery||Zm,i=t.history,r=gr(),o=gr(),a=gr(),l=k_(Qn);let c=Qn;ci&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hu.bind(null,T=>""+T),h=hu.bind(null,nL),d=hu.bind(null,El);function f(T,V){let D,W;return $I(T)?(D=e.getRecordMatcher(T),W=V):W=T,e.addRoute(W,D)}function m(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function I(T,V){if(V=Ee({},V||l.value),typeof T=="string"){const _=du(n,T,V.path),E=e.resolve({path:_.path},V),A=i.createHref(_.fullPath);return Ee(_,E,{params:d(E.params),hash:El(_.hash),redirectedFrom:void 0,href:A})}let D;if("path"in T)D=Ee({},T,{path:du(n,T.path,V.path).path});else{const _=Ee({},T.params);for(const E in _)_[E]==null&&delete _[E];D=Ee({},T,{params:h(_)}),V.params=h(V.params)}const W=e.resolve(D,V),me=T.hash||"";W.params=u(d(W.params));const p=pM(s,Ee({},T,{hash:ZM(me),path:W.path})),g=i.createHref(p);return Ee({fullPath:p,hash:me,query:s===Zm?iL(T.query):T.query||{}},W,{redirectedFrom:void 0,href:g})}function S(T){return typeof T=="string"?du(n,T,l.value.path):Ee({},T)}function P(T,V){if(c!==T)return Hi(8,{from:V,to:T})}function w(T){return te(T)}function $(T){return w(Ee(S(T),{replace:!0}))}function j(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let W=typeof D=="function"?D(T):D;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=S(W):{path:W},W.params={}),Ee({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function te(T,V){const D=c=I(T),W=l.value,me=T.state,p=T.force,g=T.replace===!0,_=j(D);if(_)return te(Ee(S(_),{state:typeof _=="object"?Ee({},me,_.state):me,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let A;return!p&&gM(s,W,D)&&(A=Hi(16,{to:E,from:W}),sn(W,W,!0,!1)),(A?Promise.resolve(A):ie(E,W)).catch(C=>Sn(C)?Sn(C,2)?C:qn(C):ge(C,E,W)).then(C=>{if(C){if(Sn(C,2))return te(Ee({replace:g},S(C.to),{state:typeof C.to=="object"?Ee({},me,C.to.state):me,force:p}),V||E)}else C=q(E,W,!0,g,me);return Oe(E,W,C),C})}function F(T,V){const D=P(T,V);return D?Promise.reject(D):Promise.resolve()}function se(T){const V=ti.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(T):T()}function ie(T,V){let D;const[W,me,p]=fL(T,V);D=fu(W.reverse(),"beforeRouteLeave",T,V);for(const _ of W)_.leaveGuards.forEach(E=>{D.push(Xn(E,T,V))});const g=F.bind(null,T,V);return D.push(g),ot(D).then(()=>{D=[];for(const _ of r.list())D.push(Xn(_,T,V));return D.push(g),ot(D)}).then(()=>{D=fu(me,"beforeRouteUpdate",T,V);for(const _ of me)_.updateGuards.forEach(E=>{D.push(Xn(E,T,V))});return D.push(g),ot(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(nn(_.beforeEnter))for(const E of _.beforeEnter)D.push(Xn(E,T,V));else D.push(Xn(_.beforeEnter,T,V));return D.push(g),ot(D)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),D=fu(p,"beforeRouteEnter",T,V),D.push(g),ot(D))).then(()=>{D=[];for(const _ of o.list())D.push(Xn(_,T,V));return D.push(g),ot(D)}).catch(_=>Sn(_,8)?_:Promise.reject(_))}function Oe(T,V,D){a.list().forEach(W=>se(()=>W(T,V,D)))}function q(T,V,D,W,me){const p=P(T,V);if(p)return p;const g=V===Qn,_=ci?history.state:{};D&&(W||g?i.replace(T.fullPath,Ee({scroll:g&&_&&_.scroll},me)):i.push(T.fullPath,me)),l.value=T,sn(T,V,D,g),qn()}let ve;function vt(){ve||(ve=i.listen((T,V,D)=>{if(!Wo.listening)return;const W=I(T),me=j(W);if(me){te(Ee(me,{replace:!0}),W).catch(Fr);return}c=W;const p=l.value;ci&&wM(Wm(p.fullPath,D.delta),Rc()),ie(W,p).catch(g=>Sn(g,12)?g:Sn(g,2)?(te(g.to,W).then(_=>{Sn(_,20)&&!D.delta&&D.type===po.pop&&i.go(-1,!1)}).catch(Fr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),ge(g,W,p))).then(g=>{g=g||q(W,p,!1),g&&(D.delta&&!Sn(g,8)?i.go(-D.delta,!1):D.type===po.pop&&Sn(g,20)&&i.go(-1,!1)),Oe(W,p,g)}).catch(Fr)}))}let Rn=gr(),Le=gr(),Ae;function ge(T,V,D){qn(T);const W=Le.list();return W.length?W.forEach(me=>me(T,V,D)):console.error(T),Promise.reject(T)}function Cn(){return Ae&&l.value!==Qn?Promise.resolve():new Promise((T,V)=>{Rn.add([T,V])})}function qn(T){return Ae||(Ae=!T,vt(),Rn.list().forEach(([V,D])=>T?D(T):V()),Rn.reset()),T}function sn(T,V,D,W){const{scrollBehavior:me}=t;if(!ci||!me)return Promise.resolve();const p=!D&&AM(Wm(T.fullPath,0))||(W||!D)&&history.state&&history.state.scroll||null;return x_().then(()=>me(T,V,p)).then(g=>g&&IM(g)).catch(g=>ge(g,T,V))}const wt=T=>i.go(T);let ei;const ti=new Set,Wo={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:I,options:t,push:w,replace:$,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:Cn,install(T){const V=this;T.component("RouterLink",lL),T.component("RouterView",QI),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(l)}),ci&&!ei&&l.value===Qn&&(ei=!0,w(i.location).catch(me=>{}));const D={};for(const me in Qn)Object.defineProperty(D,me,{get:()=>l.value[me],enumerable:!0});T.provide(Cc,V),T.provide(Bf,R_(D)),T.provide(kh,l);const W=T.unmount;ti.add(T),T.unmount=function(){ti.delete(T),ti.size<1&&(c=Qn,ve&&ve(),ve=null,l.value=Qn,ei=!1,Ae=!1),W()}}};function ot(T){return T.reduce((V,D)=>V.then(()=>se(D)),Promise.resolve())}return Wo}function fL(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ji(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ji(c,l))||i.push(l))}return[n,s,i]}function pL(){return Nt(Cc)}function gL(){return Nt(Bf)}const mL=Nl({__name:"App",setup(t){const e=$b(),n=pL(),s=gL();return yi(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(mo(),Yh(ct(QI)))}}),_L="modulepreload",yL=function(t){return"/"+t},r_={},pu=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=yL(r),r in r_)return;r_[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_L,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const YI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},vL={},EL={class:"card"};function TL(t,e){return mo(),oy("div",EL,[T0(t.$slots,"title",{},void 0,!0)])}const gu=YI(vL,[["render",TL],["__scopeId","data-v-52aa979e"]]),IL=t=>(Xw("data-v-bf674ff6"),t=t(),Jw(),t),wL=IL(()=>Xh("h1",null,"Fonti Paintball",-1)),AL=Nl({__name:"HomeView",setup(t){return(e,n)=>{const s=y0("RouterLink");return mo(),oy("main",null,[wL,He(s,{to:"/rules"},{default:oi(()=>[He(gu,null,{title:oi(()=>[va(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),He(s,{to:"/availability"},{default:oi(()=>[He(gu,null,{title:oi(()=>[va(" Inserisci disponibilità ")]),_:1})]),_:1}),He(gu,null,{title:oi(()=>[va(" Statistiche giocatori (prossimamente...) ")]),_:1})])}}});const RL=YI(AL,[["__scopeId","data-v-bf674ff6"]]),XI=dL({history:PM("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:RL},{path:"/login",name:"login",component:()=>pu(()=>import("./LoginView-75f7e925.js"),["assets/LoginView-75f7e925.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>pu(()=>import("./AvailabilityView-2e595064.js"),["assets/AvailabilityView-2e595064.js","assets/AvailabilityView-17d6dec8.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>pu(()=>import("./RulesView-6e06a5c4.js"),["assets/RulesView-6e06a5c4.js","assets/RulesView-d0a269fc.css"])}]});XI.beforeEach(async t=>{if(t.meta.requiresAuth&&!await jb())return{path:"/login",query:{redirect:t.fullPath}}});const Sc=bA(mL);Sc.use(uM());Sc.use(XI);Sc.use(lM,{firebaseApp:FI,modules:[aM()]});Sc.mount("#app");export{bL as A,Lh as B,Mh as C,is as D,UL as E,Lt as F,Zn as G,qL as H,KL as I,PL as J,jL as K,BL as L,HL as M,hy as T,YI as _,$b as a,mo as b,oy as c,Nl as d,ct as e,kL as f,xL as g,Xh as h,He as i,Jw as j,SL as k,OL as l,Yh as m,T0 as n,W_ as o,Xw as p,va as q,y0 as r,DL as s,CL as t,WL as u,NL as v,oi as w,Sl as x,Kt as y,yi as z};
