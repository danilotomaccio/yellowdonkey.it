(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Mh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},_i=[],Xt=()=>{},pw=()=>!1,gw=/^on[^a-z]/,Al=t=>gw.test(t),Lh=t=>t.startsWith("onUpdate:"),We=Object.assign,Vh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mw=Object.prototype.hasOwnProperty,de=(t,e)=>mw.call(t,e),G=Array.isArray,yi=t=>yo(t)==="[object Map]",Rl=t=>yo(t)==="[object Set]",zf=t=>yo(t)==="[object Date]",se=t=>typeof t=="function",Fe=t=>typeof t=="string",jr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",l_=t=>Re(t)&&se(t.then)&&se(t.catch),c_=Object.prototype.toString,yo=t=>c_.call(t),_w=t=>yo(t).slice(8,-1),u_=t=>yo(t)==="[object Object]",Fh=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,va=Mh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yw=/-(\w)/g,vn=Cl(t=>t.replace(yw,(e,n)=>n?n.toUpperCase():"")),vw=/\B([A-Z])/g,zi=Cl(t=>t.replace(vw,"-$1").toLowerCase()),Sl=Cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nc=Cl(t=>t?`on${Sl(t)}`:""),Hr=(t,e)=>!Object.is(t,e),Ea=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Da=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},h_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ew=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let Gf;const yu=()=>Gf||(Gf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?Aw(s):Uh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Re(t))return t}}const Tw=/;(?![^(]*\))/g,Iw=/:([^]+)/,ww=/\/\*[^]*?\*\//g;function Aw(t){const e={};return t.replace(ww,"").split(Tw).forEach(n=>{if(n){const s=n.split(Iw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bh(t){let e="";if(Fe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Bh(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cw=Mh(Rw);function d_(t){return!!t||t===""}function Sw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bl(t[s],e[s]);return n}function bl(t,e){if(t===e)return!0;let n=zf(t),s=zf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=jr(t),s=jr(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?Sw(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bl(t[o],e[o]))return!1}}return String(t)===String(e)}function bw(t,e){return t.findIndex(n=>bl(n,e))}const XL=t=>Fe(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===c_||!se(t.toString))?JSON.stringify(t,f_,2):String(t),f_=(t,e)=>e&&e.__v_isRef?f_(t,e.value):yi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Rl(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!G(e)&&!u_(e)?String(e):e;let Pt;class p_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function g_(t){return new p_(t)}function Pw(t,e=Pt){e&&e.active&&e.effects.push(t)}function m_(){return Pt}function kw(t){Pt&&Pt.cleanups.push(t)}const $h=t=>{const e=new Set(t);return e.w=0,e.n=0,e},__=t=>(t.w&fs)>0,y_=t=>(t.n&fs)>0,Nw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fs},Ow=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];__(i)&&!y_(i)?i.delete(t):e[n++]=i,i.w&=~fs,i.n&=~fs}e.length=n}},vu=new WeakMap;let yr=0,fs=1;const Eu=30;let qt;const Fs=Symbol(""),Tu=Symbol("");class jh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pw(this,s)}run(){if(!this.active)return this.fn();let e=qt,n=os;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,os=!0,fs=1<<++yr,yr<=Eu?Nw(this):Qf(this),this.fn()}finally{yr<=Eu&&Ow(this),fs=1<<--yr,qt=this.parent,os=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Qf(this),this.onStop&&this.onStop(),this.active=!1)}}function Qf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let os=!0;const v_=[];function Gi(){v_.push(os),os=!1}function Qi(){const t=v_.pop();os=t===void 0?!0:t}function St(t,e,n){if(os&&qt){let s=vu.get(t);s||vu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=$h()),E_(i)}}function E_(t,e){let n=!1;yr<=Eu?y_(t)||(t.n|=fs,n=!__(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function Fn(t,e,n,s,i,r){const o=vu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Fh(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),yi(t)&&a.push(o.get(Tu)));break;case"delete":G(t)||(a.push(o.get(Fs)),yi(t)&&a.push(o.get(Tu)));break;case"set":yi(t)&&a.push(o.get(Fs));break}if(a.length===1)a[0]&&Iu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Iu($h(l))}}function Iu(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Yf(s);for(const s of n)s.computed||Yf(s)}function Yf(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dw=Mh("__proto__,__v_isRef,__isVue"),T_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jr)),xw=Hh(),Mw=Hh(!1,!0),Lw=Hh(!0),Xf=Vw();function Vw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)St(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gi();const s=pe(this)[e].apply(this,n);return Qi(),s}}),t}function Fw(t){const e=pe(this);return St(e,"has",t),e.hasOwnProperty(t)}function Hh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?e0:C_:e?R_:A_).get(s))return s;const o=G(s);if(!t){if(o&&de(Xf,i))return Reflect.get(Xf,i,r);if(i==="hasOwnProperty")return Fw}const a=Reflect.get(s,i,r);return(jr(i)?T_.has(i):Dw(i))||(t||St(s,"get",i),e)?a:nt(a)?o&&Fh(i)?a:a.value:Re(a)?t?b_(a):kl(a):a}}const Uw=I_(),Bw=I_(!0);function I_(t=!1){return function(n,s,i,r){let o=n[s];if(ki(o)&&nt(o)&&!nt(i))return!1;if(!t&&(!xa(i)&&!ki(i)&&(o=pe(o),i=pe(i)),!G(n)&&nt(o)&&!nt(i)))return o.value=i,!0;const a=G(n)&&Fh(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?Hr(i,o)&&Fn(n,"set",s,i):Fn(n,"add",s,i)),l}}function $w(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Fn(t,"delete",e,void 0),s}function jw(t,e){const n=Reflect.has(t,e);return(!jr(e)||!T_.has(e))&&St(t,"has",e),n}function Hw(t){return St(t,"iterate",G(t)?"length":Fs),Reflect.ownKeys(t)}const w_={get:xw,set:Uw,deleteProperty:$w,has:jw,ownKeys:Hw},Ww={get:Lw,set(t,e){return!0},deleteProperty(t,e){return!0}},qw=We({},w_,{get:Mw,set:Bw}),Wh=t=>t,Pl=t=>Reflect.getPrototypeOf(t);function Qo(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&St(i,"get",e),St(i,"get",r));const{has:o}=Pl(i),a=s?Wh:n?Gh:Wr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Yo(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&St(s,"has",t),St(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xo(t,e=!1){return t=t.__v_raw,!e&&St(pe(t),"iterate",Fs),Reflect.get(t,"size",t)}function Jf(t){t=pe(t);const e=pe(this);return Pl(e).has.call(e,t)||(e.add(t),Fn(e,"add",t,t)),this}function Zf(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=Pl(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Hr(e,o)&&Fn(n,"set",t,e):Fn(n,"add",t,e),this}function ep(t){const e=pe(this),{has:n,get:s}=Pl(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Fn(e,"delete",t,void 0),r}function tp(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Fn(t,"clear",void 0,void 0),n}function Jo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?Wh:t?Gh:Wr;return!t&&St(a,"iterate",Fs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Zo(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=yi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Wh:e?Gh:Wr;return!e&&St(r,"iterate",l?Tu:Fs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zn(t){return function(...e){return t==="delete"?!1:this}}function Kw(){const t={get(r){return Qo(this,r)},get size(){return Xo(this)},has:Yo,add:Jf,set:Zf,delete:ep,clear:tp,forEach:Jo(!1,!1)},e={get(r){return Qo(this,r,!1,!0)},get size(){return Xo(this)},has:Yo,add:Jf,set:Zf,delete:ep,clear:tp,forEach:Jo(!1,!0)},n={get(r){return Qo(this,r,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Jo(!0,!1)},s={get(r){return Qo(this,r,!0,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zo(r,!1,!1),n[r]=Zo(r,!0,!1),e[r]=Zo(r,!1,!0),s[r]=Zo(r,!0,!0)}),[t,n,e,s]}const[zw,Gw,Qw,Yw]=Kw();function qh(t,e){const n=e?t?Yw:Qw:t?Gw:zw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const Xw={get:qh(!1,!1)},Jw={get:qh(!1,!0)},Zw={get:qh(!0,!1)},A_=new WeakMap,R_=new WeakMap,C_=new WeakMap,e0=new WeakMap;function t0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n0(t){return t.__v_skip||!Object.isExtensible(t)?0:t0(_w(t))}function kl(t){return ki(t)?t:Kh(t,!1,w_,Xw,A_)}function S_(t){return Kh(t,!1,qw,Jw,R_)}function b_(t){return Kh(t,!0,Ww,Zw,C_)}function Kh(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=n0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function vi(t){return ki(t)?vi(t.__v_raw):!!(t&&t.__v_isReactive)}function ki(t){return!!(t&&t.__v_isReadonly)}function xa(t){return!!(t&&t.__v_isShallow)}function P_(t){return vi(t)||ki(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function zh(t){return Da(t,"__v_skip",!0),t}const Wr=t=>Re(t)?kl(t):t,Gh=t=>Re(t)?b_(t):t;function k_(t){os&&qt&&(t=pe(t),E_(t.dep||(t.dep=$h())))}function N_(t,e){t=pe(t);const n=t.dep;n&&Iu(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Mn(t){return D_(t,!1)}function O_(t){return D_(t,!0)}function D_(t,e){return nt(t)?t:new s0(t,e)}class s0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Wr(e)}get value(){return k_(this),this._value}set value(e){const n=this.__v_isShallow||xa(e)||ki(e);e=n?e:pe(e),Hr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wr(e),N_(this))}}function Ze(t){return nt(t)?t.value:t}const i0={get:(t,e,n)=>Ze(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function x_(t){return vi(t)?t:new Proxy(t,i0)}class r0{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jh(e,()=>{this._dirty||(this._dirty=!0,N_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return k_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function o0(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=Xt):(s=t.get,i=t.set),new r0(s,i,r||!i,n)}function as(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Nl(r,e,n)}return i}function Bt(t,e,n,s){if(se(t)){const r=as(t,e,n,s);return r&&l_(r)&&r.catch(o=>{Nl(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}function Nl(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){as(l,null,10,[t,o,a]);return}}a0(t,n,i,s)}function a0(t,e,n,s=!0){console.error(t)}let qr=!1,wu=!1;const ht=[];let ln=0;const Ei=[];let kn=null,Ps=0;const M_=Promise.resolve();let Qh=null;function L_(t){const e=Qh||M_;return t?e.then(this?t.bind(this):t):e}function l0(t){let e=ln+1,n=ht.length;for(;e<n;){const s=e+n>>>1;Kr(ht[s])<t?e=s+1:n=s}return e}function Yh(t){(!ht.length||!ht.includes(t,qr&&t.allowRecurse?ln+1:ln))&&(t.id==null?ht.push(t):ht.splice(l0(t.id),0,t),V_())}function V_(){!qr&&!wu&&(wu=!0,Qh=M_.then(U_))}function c0(t){const e=ht.indexOf(t);e>ln&&ht.splice(e,1)}function u0(t){G(t)?Ei.push(...t):(!kn||!kn.includes(t,t.allowRecurse?Ps+1:Ps))&&Ei.push(t),V_()}function np(t,e=qr?ln+1:0){for(;e<ht.length;e++){const n=ht[e];n&&n.pre&&(ht.splice(e,1),e--,n())}}function F_(t){if(Ei.length){const e=[...new Set(Ei)];if(Ei.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,s)=>Kr(n)-Kr(s)),Ps=0;Ps<kn.length;Ps++)kn[Ps]();kn=null,Ps=0}}const Kr=t=>t.id==null?1/0:t.id,h0=(t,e)=>{const n=Kr(t)-Kr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function U_(t){wu=!1,qr=!0,ht.sort(h0);const e=Xt;try{for(ln=0;ln<ht.length;ln++){const n=ht[ln];n&&n.active!==!1&&as(n,null,14)}}finally{ln=0,ht.length=0,F_(),qr=!1,Qh=null,(ht.length||Ei.length)&&U_()}}function d0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(h_))}let a,l=s[a=Nc(e)]||s[a=Nc(vn(e))];!l&&r&&(l=s[a=Nc(zi(e))]),l&&Bt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(c,t,6,i)}}function B_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=B_(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):We(o,r),Re(t)&&s.set(t,o),o)}function Ol(t,e){return!t||!Al(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,zi(e))||de(t,e))}let st=null,Dl=null;function Ma(t){const e=st;return st=t,Dl=t&&t.type.__scopeId||null,e}function $_(t){Dl=t}function j_(){Dl=null}function es(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&gp(-1);const r=Ma(e);let o;try{o=t(...i)}finally{Ma(r),s._d&&gp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Oc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:_}=t;let v,T;const R=Ma(t);try{if(n.shapeFlag&4){const w=i||s;v=an(u.call(w,w,h,r,f,d,m)),T=l}else{const w=e;v=an(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),T=e.props?l:f0(l)}}catch(w){kr.length=0,Nl(w,t,1),v=je($t)}let S=v;if(T&&_!==!1){const w=Object.keys(T),{shapeFlag:B}=S;w.length&&B&7&&(o&&w.some(Lh)&&(T=p0(T,o)),S=ps(S,T))}return n.dirs&&(S=ps(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),v=S,Ma(R),v}const f0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Al(n))&&((e||(e={}))[n]=t[n]);return e},p0=(t,e)=>{const n={};for(const s in t)(!Lh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function g0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?sp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ol(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?sp(s,o,c):!0:!!o;return!1}function sp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ol(n,r))return!0}return!1}function m0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _0=t=>t.__isSuspense;function y0(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):u0(t)}const ea={};function Ti(t,e,n){return H_(t,e,n)}function H_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){var a;const l=m_()===((a=Ge)==null?void 0:a.scope)?Ge:null;let c,u=!1,h=!1;if(nt(t)?(c=()=>t.value,u=xa(t)):vi(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(w=>vi(w)||xa(w)),c=()=>t.map(w=>{if(nt(w))return w.value;if(vi(w))return Os(w);if(se(w))return as(w,l,2)})):se(t)?e?c=()=>as(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Bt(t,l,3,[f])}:c=Xt,e&&s){const w=c;c=()=>Os(w())}let d,f=w=>{d=R.onStop=()=>{as(w,l,4)}},m;if(Qr)if(f=Xt,e?n&&Bt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const w=pA();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Xt;let _=h?new Array(t.length).fill(ea):ea;const v=()=>{if(R.active)if(e){const w=R.run();(s||u||(h?w.some((B,j)=>Hr(B,_[j])):Hr(w,_)))&&(d&&d(),Bt(e,l,3,[w,_===ea?void 0:h&&_[0]===ea?[]:_,f]),_=w)}else R.run()};v.allowRecurse=!!e;let T;i==="sync"?T=v:i==="post"?T=()=>Rt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>Yh(v));const R=new jh(c,T);e?n?v():_=R.run():i==="post"?Rt(R.run.bind(R),l&&l.suspense):R.run();const S=()=>{R.stop(),l&&l.scope&&Vh(l.scope.effects,R)};return m&&m.push(S),S}function v0(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?W_(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=Ge;Ni(this);const a=H_(i,r.bind(s),n);return o?Ni(o):Us(),a}function W_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Os(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))Os(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Os(t[n],e);else if(Rl(t)||yi(t))t.forEach(n=>{Os(n,e)});else if(u_(t))for(const n in t)Os(t[n],e);return t}function JL(t,e){const n=st;if(n===null)return t;const s=Fl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=be]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ws(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Gi(),Bt(l,n,8,[t.el,a,t,e]),Qi())}}function E0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Q_(()=>{t.isMounted=!0}),Y_(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],q_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},T0={name:"BaseTransition",props:q_,setup(t,{slots:e}){const n=nd(),s=E0();let i;return()=>{const r=e.default&&z_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==$t){o=_;break}}const a=pe(t),{mode:l}=a;if(s.isLeaving)return Dc(o);const c=ip(o);if(!c)return Dc(o);const u=Au(c,a,s,n);Ru(c,u);const h=n.subTree,d=h&&ip(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,f=!0)}if(d&&d.type!==$t&&(!ks(c,d)||f)){const _=Au(d,a,s,n);if(Ru(d,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Dc(o);l==="in-out"&&c.type!==$t&&(_.delayLeave=(v,T,R)=>{const S=K_(s,d);S[String(d.key)]=d,v._leaveCb=()=>{T(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return o}}},I0=T0;function K_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Au(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:T,onAppearCancelled:R}=e,S=String(t.key),w=K_(n,t),B=(F,ie)=>{F&&Bt(F,s,9,ie)},j=(F,ie)=>{const re=ie[1];B(F,ie),G(F)?F.every(De=>De.length<=1)&&re():F.length<=1&&re()},te={mode:r,persisted:o,beforeEnter(F){let ie=a;if(!n.isMounted)if(i)ie=_||a;else return;F._leaveCb&&F._leaveCb(!0);const re=w[S];re&&ks(t,re)&&re.el._leaveCb&&re.el._leaveCb(),B(ie,[F])},enter(F){let ie=l,re=c,De=u;if(!n.isMounted)if(i)ie=v||l,re=T||c,De=R||u;else return;let H=!1;const ve=F._enterCb=Et=>{H||(H=!0,Et?B(De,[F]):B(re,[F]),te.delayedLeave&&te.delayedLeave(),F._enterCb=void 0)};ie?j(ie,[F,ve]):ve()},leave(F,ie){const re=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ie();B(h,[F]);let De=!1;const H=F._leaveCb=ve=>{De||(De=!0,ie(),ve?B(m,[F]):B(f,[F]),F._leaveCb=void 0,w[re]===t&&delete w[re])};w[re]=t,d?j(d,[F,H]):H()},clone(F){return Au(F,e,n,s)}};return te}function Dc(t){if(xl(t))return t=ps(t),t.children=null,t}function ip(t){return xl(t)?t.children?t.children[0]:void 0:t}function Ru(t,e){t.shapeFlag&6&&t.component?Ru(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function z_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Vt?(o.patchFlag&128&&i++,s=s.concat(z_(o.children,e,a))):(e||o.type!==$t)&&s.push(a!=null?ps(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function vo(t,e){return se(t)?(()=>We({name:t.name},e,{setup:t}))():t}const Sr=t=>!!t.type.__asyncLoader,xl=t=>t.type.__isKeepAlive;function w0(t,e){G_(t,"a",e)}function A0(t,e){G_(t,"da",e)}function G_(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ml(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xl(i.parent.vnode)&&R0(s,e,n,i),i=i.parent}}function R0(t,e,n,s){const i=Ml(e,t,s,!0);X_(()=>{Vh(s[e],i)},n)}function Ml(t,e,n=Ge,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gi(),Ni(n);const a=Bt(e,n,t,o);return Us(),Qi(),a});return s?i.unshift(r):i.push(r),r}}const Wn=t=>(e,n=Ge)=>(!Qr||t==="sp")&&Ml(t,(...s)=>e(...s),n),C0=Wn("bm"),Q_=Wn("m"),S0=Wn("bu"),b0=Wn("u"),Y_=Wn("bum"),X_=Wn("um"),J_=Wn("sp"),P0=Wn("rtg"),k0=Wn("rtc");function N0(t,e=Ge){Ml("ec",t,e)}const Z_="components";function ey(t,e){return D0(Z_,t,!0,e)||t}const O0=Symbol.for("v-ndc");function D0(t,e,n=!0,s=!1){const i=st||Ge;if(i){const r=i.type;if(t===Z_){const a=hA(r,!1);if(a&&(a===e||a===vn(e)||a===Sl(vn(e))))return r}const o=rp(i[t]||r[t],e)||rp(i.appContext[t],e);return!o&&s?r:o}}function rp(t,e){return t&&(t[e]||t[vn(e)]||t[Sl(vn(e))])}function ZL(t,e,n,s){let i;const r=n&&n[s];if(G(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function x0(t,e,n={},s,i){if(st.isCE||st.parent&&Sr(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),je("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),ls();const o=r&&ty(r(n)),a=Gr(Vt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ty(t){return t.some(e=>Fa(e)?!(e.type===$t||e.type===Vt&&!ty(e.children)):!0)?t:null}const Cu=t=>t?dy(t)?Fl(t)||t.proxy:Cu(t.parent):null,br=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cu(t.parent),$root:t=>Cu(t.root),$emit:t=>t.emit,$options:t=>Xh(t),$forceUpdate:t=>t.f||(t.f=()=>Yh(t.update)),$nextTick:t=>t.n||(t.n=L_.bind(t.proxy)),$watch:t=>v0.bind(t)}),xc=(t,e)=>t!==be&&!t.__isScriptSetup&&de(t,e),M0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(xc(s,e))return o[e]=1,s[e];if(i!==be&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==be&&de(n,e))return o[e]=4,n[e];Su&&(o[e]=0)}}const u=br[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&de(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return xc(i,e)?(i[e]=n,!0):s!==be&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&de(t,o)||xc(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(br,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function op(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Su=!0;function L0(t){const e=Xh(t),n=t.proxy,s=t.ctx;Su=!1,e.beforeCreate&&ap(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:R,destroyed:S,unmounted:w,render:B,renderTracked:j,renderTriggered:te,errorCaptured:F,serverPrefetch:ie,expose:re,inheritAttrs:De,components:H,directives:ve,filters:Et}=e;if(c&&V0(c,s,null),o)for(const Ae in o){const me=o[Ae];se(me)&&(s[Ae]=me.bind(n))}if(i){const Ae=i.call(n,n);Re(Ae)&&(t.data=kl(Ae))}if(Su=!0,r)for(const Ae in r){const me=r[Ae],bn=se(me)?me.bind(n,n):se(me.get)?me.get.bind(n,n):Xt,Kn=!se(me)&&se(me.set)?me.set.bind(n):Xt,sn=Kt({get:bn,set:Kn});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>sn.value,set:At=>sn.value=At})}if(a)for(const Ae in a)ny(a[Ae],s,n,Ae);if(l){const Ae=se(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(me=>{Ta(me,Ae[me])})}u&&ap(u,t,"c");function Ve(Ae,me){G(me)?me.forEach(bn=>Ae(bn.bind(n))):me&&Ae(me.bind(n))}if(Ve(C0,h),Ve(Q_,d),Ve(S0,f),Ve(b0,m),Ve(w0,_),Ve(A0,v),Ve(N0,F),Ve(k0,j),Ve(P0,te),Ve(Y_,R),Ve(X_,w),Ve(J_,ie),G(re))if(re.length){const Ae=t.exposed||(t.exposed={});re.forEach(me=>{Object.defineProperty(Ae,me,{get:()=>n[me],set:bn=>n[me]=bn})})}else t.exposed||(t.exposed={});B&&t.render===Xt&&(t.render=B),De!=null&&(t.inheritAttrs=De),H&&(t.components=H),ve&&(t.directives=ve)}function V0(t,e,n=Xt){G(t)&&(t=bu(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Ot(i.from||s,i.default,!0):r=Ot(i.from||s):r=Ot(i),nt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ap(t,e,n){Bt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ny(t,e,n,s){const i=s.includes(".")?W_(n,s):()=>n[s];if(Fe(t)){const r=e[t];se(r)&&Ti(i,r)}else if(se(t))Ti(i,t.bind(n));else if(Re(t))if(G(t))t.forEach(r=>ny(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&Ti(i,r,t)}}function Xh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>La(l,c,o,!0)),La(l,e,o)),Re(e)&&r.set(e,l),l}function La(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&La(t,r,n,!0),i&&i.forEach(o=>La(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=F0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const F0={data:lp,props:cp,emits:cp,methods:vr,computed:vr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:vr,directives:vr,watch:B0,provide:lp,inject:U0};function lp(t,e){return e?t?function(){return We(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function U0(t,e){return vr(bu(t),bu(e))}function bu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function vr(t,e){return t?We(Object.create(null),t,e):e}function cp(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:We(Object.create(null),op(t),op(e??{})):e}function B0(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function sy(){return{app:null,config:{isNativeTag:pw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $0=0;function j0(t,e){return function(s,i=null){se(s)||(s=We({},s)),i!=null&&!Re(i)&&(i=null);const r=sy(),o=new Set;let a=!1;const l=r.app={_uid:$0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:gA,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=je(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Fl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Va=l;try{return c()}finally{Va=null}}};return l}}let Va=null;function Ta(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=Ge||st;if(s||Va){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Va._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function H0(t,e,n,s=!1){const i={},r={};Da(r,Vl,1),t.propsDefaults=Object.create(null),iy(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:S_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function W0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ol(t.emitsOptions,d))continue;const f=e[d];if(l)if(de(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=vn(d);i[m]=Pu(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{iy(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=zi(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Pu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],c=!0)}c&&Fn(t,"set","$attrs")}function iy(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(va(l))continue;const c=e[l];let u;i&&de(i,u=vn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ol(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Pu(i,l,h,c[h],t,!de(c,h))}}return o}function Pu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ni(i),s=c[n]=l.call(null,e),Us())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===zi(n))&&(s=!0))}return s}function ry(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=ry(h,e,!0);We(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,_i),_i;if(G(r))for(let u=0;u<r.length;u++){const h=vn(r[u]);up(h)&&(o[h]=be)}else if(r)for(const u in r){const h=vn(u);if(up(h)){const d=r[u],f=o[h]=G(d)||se(d)?{type:d}:We({},d);if(f){const m=fp(Boolean,f.type),_=fp(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||de(f,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&s.set(t,c),c}function up(t){return t[0]!=="$"}function hp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dp(t,e){return hp(t)===hp(e)}function fp(t,e){return G(e)?e.findIndex(n=>dp(n,t)):se(e)&&dp(e,t)?0:-1}const oy=t=>t[0]==="_"||t==="$stable",Jh=t=>G(t)?t.map(an):[an(t)],q0=(t,e,n)=>{if(e._n)return e;const s=es((...i)=>Jh(e(...i)),n);return s._c=!1,s},ay=(t,e,n)=>{const s=t._ctx;for(const i in t){if(oy(i))continue;const r=t[i];if(se(r))e[i]=q0(i,r,s);else if(r!=null){const o=Jh(r);e[i]=()=>o}}},ly=(t,e)=>{const n=Jh(e);t.slots.default=()=>n},K0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Da(e,"_",n)):ay(e,t.slots={})}else t.slots={},e&&ly(t,e);Da(t.slots,Vl,1)},z0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(We(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ay(e,i)),o=e}else e&&(ly(t,e),o={default:1});if(r)for(const a in i)!oy(a)&&!(a in o)&&delete i[a]};function ku(t,e,n,s,i=!1){if(G(t)){t.forEach((d,f)=>ku(d,e&&(G(e)?e[f]:e),n,s,i));return}if(Sr(s)&&!i)return;const r=s.shapeFlag&4?Fl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,de(h,c)&&(h[c]=null)):nt(c)&&(c.value=null)),se(l))as(l,a,12,[o,u]);else{const d=Fe(l),f=nt(l);if(d||f){const m=()=>{if(t.f){const _=d?de(h,l)?h[l]:u[l]:l.value;i?G(_)&&Vh(_,r):G(_)?_.includes(r)||_.push(r):d?(u[l]=[r],de(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Rt(m,n)):m()}}}const Rt=y0;function G0(t){return Q0(t)}function Q0(t,e){const n=yu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Xt,insertStaticContent:m}=t,_=(p,g,y,E=null,A=null,b=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!ks(p,g)&&(E=I(p),At(p,A,b,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:K,shapeFlag:U}=g;switch(P){case Ll:v(p,g,y,E);break;case $t:T(p,g,y,E);break;case Mc:p==null&&R(g,y,E,L);break;case Vt:H(p,g,y,E,A,b,L,N,O);break;default:U&1?B(p,g,y,E,A,b,L,N,O):U&6?ve(p,g,y,E,A,b,L,N,O):(U&64||U&128)&&P.process(p,g,y,E,A,b,L,N,O,D)}K!=null&&A&&ku(K,p&&p.ref,b,g||p,!g)},v=(p,g,y,E)=>{if(p==null)s(g.el=a(g.children),y,E);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},T=(p,g,y,E)=>{p==null?s(g.el=l(g.children||""),y,E):g.el=p.el},R=(p,g,y,E)=>{[p.el,p.anchor]=m(p.children,g,y,E,p.el,p.anchor)},S=({el:p,anchor:g},y,E)=>{let A;for(;p&&p!==g;)A=d(p),s(p,y,E),p=A;s(g,y,E)},w=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=d(p),i(p),p=y;i(g)},B=(p,g,y,E,A,b,L,N,O)=>{L=L||g.type==="svg",p==null?j(g,y,E,A,b,L,N,O):ie(p,g,A,b,L,N,O)},j=(p,g,y,E,A,b,L,N)=>{let O,P;const{type:K,props:U,shapeFlag:z,transition:J,dirs:oe}=p;if(O=p.el=o(p.type,b,U&&U.is,U),z&8?u(O,p.children):z&16&&F(p.children,O,null,E,A,b&&K!=="foreignObject",L,N),oe&&ws(p,null,E,"created"),te(O,p,p.scopeId,L,E),U){for(const Ie in U)Ie!=="value"&&!va(Ie)&&r(O,Ie,null,U[Ie],b,p.children,E,A,rt);"value"in U&&r(O,"value",null,U.value),(P=U.onVnodeBeforeMount)&&on(P,E,p)}oe&&ws(p,null,E,"beforeMount");const Ce=(!A||A&&!A.pendingBranch)&&J&&!J.persisted;Ce&&J.beforeEnter(O),s(O,g,y),((P=U&&U.onVnodeMounted)||Ce||oe)&&Rt(()=>{P&&on(P,E,p),Ce&&J.enter(O),oe&&ws(p,null,E,"mounted")},A)},te=(p,g,y,E,A)=>{if(y&&f(p,y),E)for(let b=0;b<E.length;b++)f(p,E[b]);if(A){let b=A.subTree;if(g===b){const L=A.vnode;te(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,y,E,A,b,L,N,O=0)=>{for(let P=O;P<p.length;P++){const K=p[P]=N?Jn(p[P]):an(p[P]);_(null,K,g,y,E,A,b,L,N)}},ie=(p,g,y,E,A,b,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:P,dirs:K}=g;O|=p.patchFlag&16;const U=p.props||be,z=g.props||be;let J;y&&As(y,!1),(J=z.onVnodeBeforeUpdate)&&on(J,y,g,p),K&&ws(g,p,y,"beforeUpdate"),y&&As(y,!0);const oe=A&&g.type!=="foreignObject";if(P?re(p.dynamicChildren,P,N,y,E,oe,b):L||me(p,g,N,null,y,E,oe,b,!1),O>0){if(O&16)De(N,g,U,z,y,E,A);else if(O&2&&U.class!==z.class&&r(N,"class",null,z.class,A),O&4&&r(N,"style",U.style,z.style,A),O&8){const Ce=g.dynamicProps;for(let Ie=0;Ie<Ce.length;Ie++){const Ue=Ce[Ie],Wt=U[Ue],ai=z[Ue];(ai!==Wt||Ue==="value")&&r(N,Ue,Wt,ai,A,p.children,y,E,rt)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&P==null&&De(N,g,U,z,y,E,A);((J=z.onVnodeUpdated)||K)&&Rt(()=>{J&&on(J,y,g,p),K&&ws(g,p,y,"updated")},E)},re=(p,g,y,E,A,b,L)=>{for(let N=0;N<g.length;N++){const O=p[N],P=g[N],K=O.el&&(O.type===Vt||!ks(O,P)||O.shapeFlag&70)?h(O.el):y;_(O,P,K,null,E,A,b,L,!0)}},De=(p,g,y,E,A,b,L)=>{if(y!==E){if(y!==be)for(const N in y)!va(N)&&!(N in E)&&r(p,N,y[N],null,L,g.children,A,b,rt);for(const N in E){if(va(N))continue;const O=E[N],P=y[N];O!==P&&N!=="value"&&r(p,N,P,O,L,g.children,A,b,rt)}"value"in E&&r(p,"value",y.value,E.value)}},H=(p,g,y,E,A,b,L,N,O)=>{const P=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(s(P,y,E),s(K,y,E),F(g.children,y,K,A,b,L,N,O)):U>0&&U&64&&z&&p.dynamicChildren?(re(p.dynamicChildren,z,y,A,b,L,N),(g.key!=null||A&&g===A.subTree)&&Zh(p,g,!0)):me(p,g,y,K,A,b,L,N,O)},ve=(p,g,y,E,A,b,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?A.ctx.activate(g,y,E,L,O):Et(g,y,E,A,b,L,O):Sn(p,g,O)},Et=(p,g,y,E,A,b,L)=>{const N=p.component=oA(p,E,A);if(xl(p)&&(N.ctx.renderer=D),aA(N),N.asyncDep){if(A&&A.registerDep(N,Ve),!p.el){const O=N.subTree=je($t);T(null,O,g,y)}return}Ve(N,p,g,y,A,b,L)},Sn=(p,g,y)=>{const E=g.component=p.component;if(g0(p,g,y))if(E.asyncDep&&!E.asyncResolved){Ae(E,g,y);return}else E.next=g,c0(E.update),E.update();else g.el=p.el,E.vnode=g},Ve=(p,g,y,E,A,b,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:U,u:z,parent:J,vnode:oe}=p,Ce=K,Ie;As(p,!1),K?(K.el=oe.el,Ae(p,K,L)):K=oe,U&&Ea(U),(Ie=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ie,J,K,oe),As(p,!0);const Ue=Oc(p),Wt=p.subTree;p.subTree=Ue,_(Wt,Ue,h(Wt.el),I(Wt),p,A,b),K.el=Ue.el,Ce===null&&m0(p,Ue.el),z&&Rt(z,A),(Ie=K.props&&K.props.onVnodeUpdated)&&Rt(()=>on(Ie,J,K,oe),A)}else{let K;const{el:U,props:z}=g,{bm:J,m:oe,parent:Ce}=p,Ie=Sr(g);if(As(p,!1),J&&Ea(J),!Ie&&(K=z&&z.onVnodeBeforeMount)&&on(K,Ce,g),As(p,!0),U&&_e){const Ue=()=>{p.subTree=Oc(p),_e(U,p.subTree,p,A,null)};Ie?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=Oc(p);_(null,Ue,y,E,p,A,b),g.el=Ue.el}if(oe&&Rt(oe,A),!Ie&&(K=z&&z.onVnodeMounted)){const Ue=g;Rt(()=>on(K,Ce,Ue),A)}(g.shapeFlag&256||Ce&&Sr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&Rt(p.a,A),p.isMounted=!0,g=y=E=null}},O=p.effect=new jh(N,()=>Yh(P),p.scope),P=p.update=()=>O.run();P.id=p.uid,As(p,!0),P()},Ae=(p,g,y)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,W0(p,g.props,E,y),z0(p,g.children,y),Gi(),np(),Qi()},me=(p,g,y,E,A,b,L,N,O=!1)=>{const P=p&&p.children,K=p?p.shapeFlag:0,U=g.children,{patchFlag:z,shapeFlag:J}=g;if(z>0){if(z&128){Kn(P,U,y,E,A,b,L,N,O);return}else if(z&256){bn(P,U,y,E,A,b,L,N,O);return}}J&8?(K&16&&rt(P,A,b),U!==P&&u(y,U)):K&16?J&16?Kn(P,U,y,E,A,b,L,N,O):rt(P,A,b,!0):(K&8&&u(y,""),J&16&&F(U,y,E,A,b,L,N,O))},bn=(p,g,y,E,A,b,L,N,O)=>{p=p||_i,g=g||_i;const P=p.length,K=g.length,U=Math.min(P,K);let z;for(z=0;z<U;z++){const J=g[z]=O?Jn(g[z]):an(g[z]);_(p[z],J,y,null,A,b,L,N,O)}P>K?rt(p,A,b,!0,!1,U):F(g,y,E,A,b,L,N,O,U)},Kn=(p,g,y,E,A,b,L,N,O)=>{let P=0;const K=g.length;let U=p.length-1,z=K-1;for(;P<=U&&P<=z;){const J=p[P],oe=g[P]=O?Jn(g[P]):an(g[P]);if(ks(J,oe))_(J,oe,y,null,A,b,L,N,O);else break;P++}for(;P<=U&&P<=z;){const J=p[U],oe=g[z]=O?Jn(g[z]):an(g[z]);if(ks(J,oe))_(J,oe,y,null,A,b,L,N,O);else break;U--,z--}if(P>U){if(P<=z){const J=z+1,oe=J<K?g[J].el:E;for(;P<=z;)_(null,g[P]=O?Jn(g[P]):an(g[P]),y,oe,A,b,L,N,O),P++}}else if(P>z)for(;P<=U;)At(p[P],A,b,!0),P++;else{const J=P,oe=P,Ce=new Map;for(P=oe;P<=z;P++){const bt=g[P]=O?Jn(g[P]):an(g[P]);bt.key!=null&&Ce.set(bt.key,P)}let Ie,Ue=0;const Wt=z-oe+1;let ai=!1,Wf=0;const cr=new Array(Wt);for(P=0;P<Wt;P++)cr[P]=0;for(P=J;P<=U;P++){const bt=p[P];if(Ue>=Wt){At(bt,A,b,!0);continue}let rn;if(bt.key!=null)rn=Ce.get(bt.key);else for(Ie=oe;Ie<=z;Ie++)if(cr[Ie-oe]===0&&ks(bt,g[Ie])){rn=Ie;break}rn===void 0?At(bt,A,b,!0):(cr[rn-oe]=P+1,rn>=Wf?Wf=rn:ai=!0,_(bt,g[rn],y,null,A,b,L,N,O),Ue++)}const qf=ai?Y0(cr):_i;for(Ie=qf.length-1,P=Wt-1;P>=0;P--){const bt=oe+P,rn=g[bt],Kf=bt+1<K?g[bt+1].el:E;cr[P]===0?_(null,rn,y,Kf,A,b,L,N,O):ai&&(Ie<0||P!==qf[Ie]?sn(rn,y,Kf,2):Ie--)}}},sn=(p,g,y,E,A=null)=>{const{el:b,type:L,transition:N,children:O,shapeFlag:P}=p;if(P&6){sn(p.component.subTree,g,y,E);return}if(P&128){p.suspense.move(g,y,E);return}if(P&64){L.move(p,g,y,D);return}if(L===Vt){s(b,g,y);for(let U=0;U<O.length;U++)sn(O[U],g,y,E);s(p.anchor,g,y);return}if(L===Mc){S(p,g,y);return}if(E!==2&&P&1&&N)if(E===0)N.beforeEnter(b),s(b,g,y),Rt(()=>N.enter(b),A);else{const{leave:U,delayLeave:z,afterLeave:J}=N,oe=()=>s(b,g,y),Ce=()=>{U(b,()=>{oe(),J&&J()})};z?z(b,oe,Ce):Ce()}else s(b,g,y)},At=(p,g,y,E=!1,A=!1)=>{const{type:b,props:L,ref:N,children:O,dynamicChildren:P,shapeFlag:K,patchFlag:U,dirs:z}=p;if(N!=null&&ku(N,null,y,p,!0),K&256){g.ctx.deactivate(p);return}const J=K&1&&z,oe=!Sr(p);let Ce;if(oe&&(Ce=L&&L.onVnodeBeforeUnmount)&&on(Ce,g,p),K&6)Go(p.component,y,E);else{if(K&128){p.suspense.unmount(y,E);return}J&&ws(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,y,A,D,E):P&&(b!==Vt||U>0&&U&64)?rt(P,g,y,!1,!0):(b===Vt&&U&384||!A&&K&16)&&rt(O,g,y),E&&ri(p)}(oe&&(Ce=L&&L.onVnodeUnmounted)||J)&&Rt(()=>{Ce&&on(Ce,g,p),J&&ws(p,null,g,"unmounted")},y)},ri=p=>{const{type:g,el:y,anchor:E,transition:A}=p;if(g===Vt){oi(y,E);return}if(g===Mc){w(p);return}const b=()=>{i(y),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:N}=A,O=()=>L(y,b);N?N(p.el,b,O):O()}else b()},oi=(p,g)=>{let y;for(;p!==g;)y=d(p),i(p),p=y;i(g)},Go=(p,g,y)=>{const{bum:E,scope:A,update:b,subTree:L,um:N}=p;E&&Ea(E),A.stop(),b&&(b.active=!1,At(L,p,g,y)),N&&Rt(N,g),Rt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},rt=(p,g,y,E=!1,A=!1,b=0)=>{for(let L=b;L<p.length;L++)At(p[L],g,y,E,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,y)=>{p==null?g._vnode&&At(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,y),np(),F_(),g._vnode=p},D={p:_,um:At,m:sn,r:ri,mt:Et,mc:F,pc:me,pbc:re,n:I,o:t};let q,_e;return e&&([q,_e]=e(D)),{render:V,hydrate:q,createApp:j0(V,q)}}function As({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zh(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Jn(i[r]),a.el=o.el),n||Zh(o,a)),a.type===Ll&&(a.el=o.el)}}function Y0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const X0=t=>t.__isTeleport,Pr=t=>t&&(t.disabled||t.disabled===""),pp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nu=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},J0={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:m,createText:_,createComment:v}}=c,T=Pr(e.props);let{shapeFlag:R,children:S,dynamicChildren:w}=e;if(t==null){const B=e.el=_(""),j=e.anchor=_("");f(B,n,s),f(j,n,s);const te=e.target=Nu(e.props,m),F=e.targetAnchor=_("");te&&(f(F,te),o=o||pp(te));const ie=(re,De)=>{R&16&&u(S,re,De,i,r,o,a,l)};T?ie(n,j):te&&ie(te,F)}else{e.el=t.el;const B=e.anchor=t.anchor,j=e.target=t.target,te=e.targetAnchor=t.targetAnchor,F=Pr(t.props),ie=F?n:j,re=F?B:te;if(o=o||pp(j),w?(d(t.dynamicChildren,w,ie,i,r,o,a),Zh(t,e,!0)):l||h(t,e,ie,re,i,r,o,a,!1),T)F||ta(e,n,B,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=Nu(e.props,m);De&&ta(e,De,null,c,0)}else F&&ta(e,j,te,c,1)}cy(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!Pr(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const m=l[f];i(m,e,n,!0,!!m.dynamicChildren)}},move:ta,hydrate:Z0};function ta(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Pr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function Z0(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Nu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Pr(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}cy(e)}return e.anchor&&o(e.anchor)}const eV=J0;function cy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Vt=Symbol.for("v-fgt"),Ll=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Mc=Symbol.for("v-stc"),kr=[];let Gt=null;function ls(t=!1){kr.push(Gt=t?null:[])}function eA(){kr.pop(),Gt=kr[kr.length-1]||null}let zr=1;function gp(t){zr+=t}function uy(t){return t.dynamicChildren=zr>0?Gt||_i:null,eA(),zr>0&&Gt&&Gt.push(t),t}function ed(t,e,n,s,i,r){return uy(Yi(t,e,n,s,i,r,!0))}function Gr(t,e,n,s,i){return uy(je(t,e,n,s,i,!0))}function Fa(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const Vl="__vInternal",hy=({key:t})=>t??null,Ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||nt(t)||se(t)?{i:st,r:t,k:e,f:!!n}:t:null);function Yi(t,e=null,n=null,s=0,i=null,r=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hy(e),ref:e&&Ia(e),scopeId:Dl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return a?(td(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),zr>0&&!o&&Gt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gt.push(l),l}const je=tA;function tA(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===O0)&&(t=$t),Fa(t)){const a=ps(t,e,!0);return n&&td(a,n),zr>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(dA(t)&&(t=t.__vccOpts),e){e=nA(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Bh(a)),Re(l)&&(P_(l)&&!G(l)&&(l=We({},l)),e.style=Uh(l))}const o=Fe(t)?1:_0(t)?128:X0(t)?64:Re(t)?4:se(t)?2:0;return Yi(t,e,n,s,i,o,r,!0)}function nA(t){return t?P_(t)||Vl in t?We({},t):t:null}function ps(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?sA(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hy(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Ia(e)):[i,Ia(e)]:Ia(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ps(t.ssContent),ssFallback:t.ssFallback&&ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wa(t=" ",e=0){return je(Ll,null,t,e)}function tV(t="",e=!1){return e?(ls(),Gr($t,null,t)):je($t,null,t)}function an(t){return t==null||typeof t=="boolean"?je($t):G(t)?je(Vt,null,t.slice()):typeof t=="object"?Jn(t):je(Ll,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ps(t)}function td(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),td(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Vl in e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[wa(e)]):n=8);t.children=e,t.shapeFlag|=n}function sA(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Bh([e.class,s.class]));else if(i==="style")e.style=Uh([e.style,s.style]);else if(Al(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){Bt(t,e,7,[n,s])}const iA=sy();let rA=0;function oA(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||iA,r={uid:rA++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new p_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ry(s,i),emitsOptions:B_(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=d0.bind(null,r),t.ce&&t.ce(r),r}let Ge=null;const nd=()=>Ge||st;let sd,li,mp="__VUE_INSTANCE_SETTERS__";(li=yu()[mp])||(li=yu()[mp]=[]),li.push(t=>Ge=t),sd=t=>{li.length>1?li.forEach(e=>e(t)):li[0](t)};const Ni=t=>{sd(t),t.scope.on()},Us=()=>{Ge&&Ge.scope.off(),sd(null)};function dy(t){return t.vnode.shapeFlag&4}let Qr=!1;function aA(t,e=!1){Qr=e;const{props:n,children:s}=t.vnode,i=dy(t);H0(t,n,i,e),K0(t,s);const r=i?lA(t,e):void 0;return Qr=!1,r}function lA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zh(new Proxy(t.ctx,M0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?uA(t):null;Ni(t),Gi();const r=as(s,t,0,[t.props,i]);if(Qi(),Us(),l_(r)){if(r.then(Us,Us),e)return r.then(o=>{_p(t,o,e)}).catch(o=>{Nl(o,t,0)});t.asyncDep=r}else _p(t,r,e)}else fy(t,e)}function _p(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=x_(e)),fy(t,n)}let yp;function fy(t,e,n){const s=t.type;if(!t.render){if(!e&&yp&&!s.render){const i=s.template||Xh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=We(We({isCustomElement:r,delimiters:a},o),l);s.render=yp(i,c)}}t.render=s.render||Xt}Ni(t),Gi(),L0(t),Qi(),Us()}function cA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function uA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cA(t)},slots:t.slots,emit:t.emit,expose:e}}function Fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(x_(zh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in br)return br[n](t)},has(e,n){return n in e||n in br}}))}function hA(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function dA(t){return se(t)&&"__vccOpts"in t}const Kt=(t,e)=>o0(t,e,Qr);function id(t,e,n){const s=arguments.length;return s===2?Re(e)&&!G(e)?Fa(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fa(n)&&(n=[n]),je(t,e,n))}const fA=Symbol.for("v-scx"),pA=()=>Ot(fA),gA="3.3.4",mA="http://www.w3.org/2000/svg",Ns=typeof document<"u"?document:null,vp=Ns&&Ns.createElement("template"),_A={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ns.createElementNS(mA,t):Ns.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ns.createTextNode(t),createComment:t=>Ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vp.innerHTML=s?`<svg>${t}</svg>`:t;const a=vp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yA(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vA(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&Ou(s,r,"");for(const r in n)Ou(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ep=/\s*!important$/;function Ou(t,e,n){if(G(n))n.forEach(s=>Ou(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=EA(t,e);Ep.test(n)?t.setProperty(zi(s),n.replace(Ep,""),"important"):t[s]=n}}const Tp=["Webkit","Moz","ms"],Lc={};function EA(t,e){const n=Lc[e];if(n)return n;let s=vn(e);if(s!=="filter"&&s in t)return Lc[e]=s;s=Sl(s);for(let i=0;i<Tp.length;i++){const r=Tp[i]+s;if(r in t)return Lc[e]=r}return e}const Ip="http://www.w3.org/1999/xlink";function TA(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ip,e.slice(6,e.length)):t.setAttributeNS(Ip,e,n);else{const r=Cw(e);n==null||r&&!d_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function IA(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=d_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function py(t,e,n,s){t.addEventListener(e,n,s)}function wA(t,e,n,s){t.removeEventListener(e,n,s)}function AA(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=RA(e);if(s){const c=r[e]=bA(s,i);py(t,a,c,l)}else o&&(wA(t,a,o,l),r[e]=void 0)}}const wp=/(?:Once|Passive|Capture)$/;function RA(t){let e;if(wp.test(t)){e={};let s;for(;s=t.match(wp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zi(t.slice(2)),e]}let Vc=0;const CA=Promise.resolve(),SA=()=>Vc||(CA.then(()=>Vc=0),Vc=Date.now());function bA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(PA(s,n.value),e,5,[s])};return n.value=t,n.attached=SA(),n}function PA(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ap=/^on[a-z]/,kA=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?yA(t,s,i):e==="style"?vA(t,n,s):Al(e)?Lh(e)||AA(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NA(t,e,s,i))?IA(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),TA(t,e,s,i))};function NA(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ap.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ap.test(e)&&Fe(n)?!1:e in t}const Gn="transition",ur="animation",gy=(t,{slots:e})=>id(I0,OA(t),e);gy.displayName="Transition";const my={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gy.props=We({},q_,my);const Rs=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rp=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function OA(t){const e={};for(const H in t)H in my||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=DA(i),_=m&&m[0],v=m&&m[1],{onBeforeEnter:T,onEnter:R,onEnterCancelled:S,onLeave:w,onLeaveCancelled:B,onBeforeAppear:j=T,onAppear:te=R,onAppearCancelled:F=S}=e,ie=(H,ve,Et)=>{Cs(H,ve?u:a),Cs(H,ve?c:o),Et&&Et()},re=(H,ve)=>{H._isLeaving=!1,Cs(H,h),Cs(H,f),Cs(H,d),ve&&ve()},De=H=>(ve,Et)=>{const Sn=H?te:R,Ve=()=>ie(ve,H,Et);Rs(Sn,[ve,Ve]),Cp(()=>{Cs(ve,H?l:r),Qn(ve,H?u:a),Rp(Sn)||Sp(ve,s,_,Ve)})};return We(e,{onBeforeEnter(H){Rs(T,[H]),Qn(H,r),Qn(H,o)},onBeforeAppear(H){Rs(j,[H]),Qn(H,l),Qn(H,c)},onEnter:De(!1),onAppear:De(!0),onLeave(H,ve){H._isLeaving=!0;const Et=()=>re(H,ve);Qn(H,h),LA(),Qn(H,d),Cp(()=>{H._isLeaving&&(Cs(H,h),Qn(H,f),Rp(w)||Sp(H,s,v,Et))}),Rs(w,[H,Et])},onEnterCancelled(H){ie(H,!1),Rs(S,[H])},onAppearCancelled(H){ie(H,!0),Rs(F,[H])},onLeaveCancelled(H){re(H),Rs(B,[H])}})}function DA(t){if(t==null)return null;if(Re(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return Ew(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Cs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Cp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xA=0;function Sp(t,e,n,s){const i=t._endId=++xA,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=MA(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function MA(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Gn}Delay`),r=s(`${Gn}Duration`),o=bp(i,r),a=s(`${ur}Delay`),l=s(`${ur}Duration`),c=bp(a,l);let u=null,h=0,d=0;e===Gn?o>0&&(u=Gn,h=o,d=r.length):e===ur?c>0&&(u=ur,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Gn:ur:null,d=u?u===Gn?r.length:l.length:0);const f=u===Gn&&/\b(transform|all)(,|$)/.test(s(`${Gn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function bp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Pp(n)+Pp(t[s])))}function Pp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function LA(){return document.body.offsetHeight}const kp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Ea(e,n):e},nV={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Rl(e);py(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?h_(Ua(o)):Ua(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=kp(s)},mounted(t,{value:e}){Np(t,e)},beforeUpdate(t,e,n){t._assign=kp(n)},updated(t,{value:e}){Np(t,e)}};function Np(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Rl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ua(r);if(n)G(e)?r.selected=bw(e,o)>-1:r.selected=e.has(o);else if(bl(Ua(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ua(t){return"_value"in t?t._value:t.value}const VA=["ctrl","shift","alt","meta"],FA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VA.some(n=>t[`${n}Key`]&&!e.includes(n))},sV=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=FA[e[i]];if(r&&r(n,e))return}return t(n,...s)},UA=We({patchProp:kA},_A);let Op;function BA(){return Op||(Op=G0(UA))}const $A=(...t)=>{const e=BA().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jA(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jA(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Xi(e)},Xi=function(t){return new Error("Firebase Database ("+_y.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new WA;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(t){const e=yy(t);return Ul.encodeByteArray(e,!0)},Ba=function(t){return vy(t).replace(/\./g,"")},$a=function(t){try{return Ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){return Ey(void 0,t)}function Ey(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!KA(n)||(t[n]=Ey(t[n],e[n]));return t}function KA(t){return t!=="__proto__"}/**
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
 */function zA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GA=()=>zA().__FIREBASE_DEFAULTS__,QA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$a(t[1]);return e&&JSON.parse(e)},rd=()=>{try{return GA()||QA()||YA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ty=t=>{var e,n;return(n=(e=rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XA=t=>{const e=Ty(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Iy=()=>{var t;return(t=rd())===null||t===void 0?void 0:t.config},wy=t=>{var e;return(e=rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function JA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ba(JSON.stringify(n)),Ba(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function ZA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eR(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ry(){return _y.NODE_ADMIN===!0}function Cy(){try{return typeof indexedDB=="object"}catch{return!1}}function tR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=nR,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,s)}}function sR(t,e){return t.replace(iR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const iR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xr($a(r[0])||""),n=Xr($a(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},rR=function(t){const e=Sy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},oR=function(t){const e=Sy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Dp(r)&&Dp(o)){if(!Ha(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Dp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function lR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}function hR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class fR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gR(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pR(t){return t===Ss?void 0:t}function gR(t){return t.instantiationMode==="EAGER"}/**
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
 */class mR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const _R={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},yR=fe.INFO,vR={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ER=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=yR,this._logHandler=ER,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const TR=(t,e)=>e.some(n=>t instanceof n);let xp,Mp;function IR(){return xp||(xp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return Mp||(Mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,xu=new WeakMap,Py=new WeakMap,Bc=new WeakMap,ad=new WeakMap;function AR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(cs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&by.set(n,t)}).catch(()=>{}),ad.set(e,t),e}function RR(t){if(xu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xu.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CR(t){Mu=t(Mu)}function SR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($c(this),e,...n);return Py.set(s,e.sort?e.sort():[e]),cs(s)}:wR().includes(t)?function(...e){return t.apply($c(this),e),cs(by.get(this))}:function(...e){return cs(t.apply($c(this),e))}}function bR(t){return typeof t=="function"?SR(t):(t instanceof IDBTransaction&&RR(t),TR(t,IR())?new Proxy(t,Mu):t)}function cs(t){if(t instanceof IDBRequest)return AR(t);if(Bc.has(t))return Bc.get(t);const e=bR(t);return e!==t&&(Bc.set(t,e),ad.set(e,t)),e}const $c=t=>ad.get(t);function PR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=cs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(cs(o.result),l.oldVersion,l.newVersion,cs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kR=["get","getKey","getAll","getAllKeys","count"],NR=["put","add","delete","clear"],jc=new Map;function Lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=NR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return jc.set(e,r),r}CR(t=>({...t,get:(e,n,s)=>Lp(e,n)||t.get(e,n,s),has:(e,n)=>!!Lp(e,n)||t.has(e,n)}));/**
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
 */class OR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function DR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lu="@firebase/app",Vp="0.9.15";/**
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
 */const Hs=new Eo("@firebase/app"),xR="@firebase/app-compat",MR="@firebase/analytics-compat",LR="@firebase/analytics",VR="@firebase/app-check-compat",FR="@firebase/app-check",UR="@firebase/auth",BR="@firebase/auth-compat",$R="@firebase/database",jR="@firebase/database-compat",HR="@firebase/functions",WR="@firebase/functions-compat",qR="@firebase/installations",KR="@firebase/installations-compat",zR="@firebase/messaging",GR="@firebase/messaging-compat",QR="@firebase/performance",YR="@firebase/performance-compat",XR="@firebase/remote-config",JR="@firebase/remote-config-compat",ZR="@firebase/storage",eC="@firebase/storage-compat",tC="@firebase/firestore",nC="@firebase/firestore-compat",sC="firebase",iC="10.1.0";/**
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
 */const Vu="[DEFAULT]",rC={[Lu]:"fire-core",[xR]:"fire-core-compat",[LR]:"fire-analytics",[MR]:"fire-analytics-compat",[FR]:"fire-app-check",[VR]:"fire-app-check-compat",[UR]:"fire-auth",[BR]:"fire-auth-compat",[$R]:"fire-rtdb",[jR]:"fire-rtdb-compat",[HR]:"fire-fn",[WR]:"fire-fn-compat",[qR]:"fire-iid",[KR]:"fire-iid-compat",[zR]:"fire-fcm",[GR]:"fire-fcm-compat",[QR]:"fire-perf",[YR]:"fire-perf-compat",[XR]:"fire-rc",[JR]:"fire-rc-compat",[ZR]:"fire-gcs",[eC]:"fire-gcs-compat",[tC]:"fire-fst",[nC]:"fire-fst-compat","fire-js":"fire-js",[sC]:"fire-js-all"};/**
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
 */const Wa=new Map,Fu=new Map;function oC(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Fu.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;Fu.set(e,t);for(const n of Wa.values())oC(n,t);return!0}function ld(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},us=new Ji("app","Firebase",aC);/**
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
 */class lC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=iC;function ky(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw us.create("bad-app-name",{appName:String(i)});if(n||(n=Iy()),!n)throw us.create("no-options");const r=Wa.get(i);if(r){if(Ha(n,r.options)&&Ha(s,r.config))return r;throw us.create("duplicate-app",{appName:i})}const o=new mR(i);for(const l of Fu.values())o.addComponent(l);const a=new lC(n,s,o);return Wa.set(i,a),a}function cd(t=Vu){const e=Wa.get(t);if(!e&&t===Vu&&Iy())return ky();if(!e)throw us.create("no-app",{appName:t});return e}function Dt(t,e,n){var s;let i=(s=rC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}En(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cC="firebase-heartbeat-database",uC=1,Jr="firebase-heartbeat-store";let Hc=null;function Ny(){return Hc||(Hc=PR(cC,uC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}}).catch(t=>{throw us.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function hC(t){try{return await(await Ny()).transaction(Jr).objectStore(Jr).get(Oy(t))}catch(e){if(e instanceof Rn)Hs.warn(e.message);else{const n=us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hs.warn(n.message)}}}async function Fp(t,e){try{const s=(await Ny()).transaction(Jr,"readwrite");await s.objectStore(Jr).put(e,Oy(t)),await s.done}catch(n){if(n instanceof Rn)Hs.warn(n.message);else{const s=us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hs.warn(s.message)}}}function Oy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dC=1024,fC=30*24*60*60*1e3;class pC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Up(),{heartbeatsToSend:n,unsentEntries:s}=gC(this._heartbeatsCache.heartbeats),i=Ba(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Up(){return new Date().toISOString().substring(0,10)}function gC(t,e=dC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Bp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cy()?tR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bp(t){return Ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _C(t){En(new Zt("platform-logger",e=>new OR(e),"PRIVATE")),En(new Zt("heartbeat",e=>new pC(e),"PRIVATE")),Dt(Lu,Vp,t),Dt(Lu,Vp,"esm2017"),Dt("fire-js","")}_C("");function ud(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yC=Dy,xy=new Ji("auth","Firebase",Dy());/**
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
 */const qa=new Eo("@firebase/auth");function vC(t,...e){qa.logLevel<=fe.WARN&&qa.warn(`Auth (${vs}): ${t}`,...e)}function Aa(t,...e){qa.logLevel<=fe.ERROR&&qa.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw hd(t,...e)}function gn(t,...e){return hd(t,...e)}function My(t,e,n){const s=Object.assign(Object.assign({},yC()),{[e]:n});return new Ji("auth","Firebase",s).create(e,{appName:t.name})}function EC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Tn(t,"argument-error"),My(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xy.create(t,...e)}function ee(t,e,...n){if(!t)throw hd(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function Un(t,e){t||Nn(e)}/**
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
 */function Uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TC(){return $p()==="http:"||$p()==="https:"}function $p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||ZA()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||Ay()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dd(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ly{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RC=new To(3e4,6e4);function Vy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Io(t,e,n,s,i={}){return Fy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ly.fetch()(Uy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Fy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},AC),e);try{const i=new SC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw na(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw My(t,u,c);Tn(t,u)}}catch(i){if(i instanceof Rn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function CC(t,e,n,s,i={}){const r=await Io(t,e,n,s,i);return"mfaPendingCredential"in r&&Tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Uy(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?dd(t.config,i):`${t.config.apiScheme}://${i}`}class SC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),RC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function na(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function bC(t,e){return Io(t,"POST","/v1/accounts:delete",e)}async function PC(t,e){return Io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kC(t,e=!1){const n=yt(t),s=await n.getIdToken(e),i=fd(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Nr(Wc(i.auth_time)),issuedAtTime:Nr(Wc(i.iat)),expirationTime:Nr(Wc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function fd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=$a(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NC(t){const e=fd(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&OC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function OC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class By{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ka(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Zr(t,PC(n,{idToken:s}));ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?LC(r.providerUserInfo):[],a=MC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new By(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xC(t){const e=yt(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function LC(t){return t.map(e=>{var{providerId:n}=e,s=ud(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function VC(t,e){const n=await Fy(t,{},async()=>{const s=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Uy(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ly.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await VC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new eo;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Yn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new By(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kC(this,e)}reload(){return xC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zr(this,bC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:w,isAnonymous:B,providerData:j,stsTokenManager:te}=n;ee(S&&te,e,"internal-error");const F=eo.fromJSON(this.name,te);ee(typeof S=="string",e,"internal-error"),Yn(h,e.name),Yn(d,e.name),ee(typeof w=="boolean",e,"internal-error"),ee(typeof B=="boolean",e,"internal-error"),Yn(f,e.name),Yn(m,e.name),Yn(_,e.name),Yn(v,e.name),Yn(T,e.name),Yn(R,e.name);const ie=new Bs({uid:S,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:B,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:F,createdAt:T,lastLoginAt:R});return j&&Array.isArray(j)&&(ie.providerData=j.map(re=>Object.assign({},re))),v&&(ie._redirectEventId=v),ie}static async _fromIdTokenResponse(e,n,s=!1){const i=new eo;i.updateFromServerResponse(n);const r=new Bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ka(r),r}}/**
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
 */const jp=new Map;function On(t){Un(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const Hp=$y;/**
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
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ra("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ii(On(Hp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||On(Hp);const o=Ra(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Bs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ii(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ii(r,e,s))}}/**
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
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(zy(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jy(t=_t()){return/firefox\//i.test(t)}function pd(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(t=_t()){return/crios\//i.test(t)}function Wy(t=_t()){return/iemobile/i.test(t)}function qy(t=_t()){return/android/i.test(t)}function Ky(t=_t()){return/blackberry/i.test(t)}function zy(t=_t()){return/webos/i.test(t)}function $l(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FC(t=_t()){var e;return $l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UC(){return eR()&&document.documentMode===10}function Gy(t=_t()){return $l(t)||qy(t)||zy(t)||Ky(t)||/windows phone/i.test(t)||Wy(t)}function BC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qy(t,e=[]){let n;switch(t){case"Browser":n=Wp(_t());break;case"Worker":n=`${Wp(_t())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${s}`}async function Yy(t,e){return Io(t,"GET","/v2/recaptchaConfig",Vy(t,e))}function qp(t){return t!==void 0&&t.enterprise!==void 0}class Xy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function $C(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",$C().appendChild(s)})}function jC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const HC="https://www.google.com/recaptcha/enterprise.js?render=",WC="recaptcha-enterprise",qC="NO_RECAPTCHA";class KC{constructor(e){this.type=WC,this.auth=er(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Yy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Xy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;qp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(qC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&qp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Jy(HC+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class zC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class GC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}async initializeRecaptchaConfig(){const e=await Yy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new KC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(t){return yt(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=lR(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function QC(t,e){const n=ld(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ha(r,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function YC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function XC(t,e,n){const s=er(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Zy(e),{host:o,port:a}=JC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZC()}function Zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JC(t){const e=Zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ev{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function wi(t,e){return CC(t,"POST","/v1/accounts:signInWithIdp",Vy(t,e))}/**
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
 */const eS="http://localhost";class Ws extends ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ud(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ws(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,wi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
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
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ts extends wo{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
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
 */class ns extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.GOOGLE_SIGN_IN_METHOD="google.com";ns.PROVIDER_ID="google.com";/**
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
 */class ss extends wo{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
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
 */class is extends wo{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return is.credential(n,s)}catch{return null}}}is.TWITTER_SIGN_IN_METHOD="twitter.com";is.PROVIDER_ID="twitter.com";/**
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
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bs._fromIdTokenResponse(e,s,i),o=Gp(s);return new Di({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Gp(s);return new Di({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class za extends Rn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,za.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new za(e,n,s,i)}}function tv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?za._fromErrorAndOperation(t,r,e,s):r})}async function tS(t,e,n=!1){const s=await Zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",s)}/**
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
 */async function nS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Zr(t,tv(s,i,e,t),n);ee(r.idToken,s,"internal-error");const o=fd(r.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),Di._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),r}}/**
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
 */async function sS(t,e,n=!1){const s="signIn",i=await tv(t,s,e),r=await Di._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function nv(t,e,n,s){return yt(t).onIdTokenChanged(e,n,s)}function iS(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}const Ga="__sak";/**
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
 */class sv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rS(){const t=_t();return pd(t)||$l(t)}const oS=1e3,aS=10;class iv extends sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rS()&&BC(),this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);UC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const lS=iv;/**
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
 */class rv extends sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rv.type="SESSION";const ov=rv;/**
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
 */function cS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new jl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await cS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
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
 */function md(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=md("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function hS(t){mn().location.href=t}/**
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
 */function av(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function dS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pS(){return av()?self:null}/**
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
 */const lv="firebaseLocalStorageDb",gS=1,Qa="firebaseLocalStorage",cv="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function mS(){const t=indexedDB.deleteDatabase(lv);return new Ao(t).toPromise()}function Bu(){const t=indexedDB.open(lv,gS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Qa,{keyPath:cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Qa)?e(s):(s.close(),await mS(),e(await Bu()))})})}async function Qp(t,e,n){const s=Hl(t,!0).put({[cv]:e,value:n});return new Ao(s).toPromise()}async function _S(t,e){const n=Hl(t,!1).get(e),s=await new Ao(n).toPromise();return s===void 0?null:s.value}function Yp(t,e){const n=Hl(t,!0).delete(e);return new Ao(n).toPromise()}const yS=800,vS=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(pS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dS(),!this.activeServiceWorker)return;this.sender=new uS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bu();return await Qp(e,Ga,"1"),await Yp(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_S(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Hl(i,!1).getAll();return new Ao(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const ES=uv;new To(3e4,6e4);/**
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
 */function hv(t,e){return e?On(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _d extends ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TS(t){return sS(t.auth,new _d(t),t.bypassAuthState)}function IS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),nS(n,new _d(t),t.bypassAuthState)}async function wS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),tS(n,new _d(t),t.bypassAuthState)}/**
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
 */class dv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TS;case"linkViaPopup":case"linkViaRedirect":return wS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:Tn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AS=new To(2e3,1e4);async function iV(t,e,n){const s=er(t);EC(t,e,gd);const i=hv(s,n);return new Ds(s,"signInViaPopup",e,i).executeNotNull()}class Ds extends dv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AS.get())};e()}}Ds.currentPopupAction=null;/**
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
 */const RS="pendingRedirect",Ca=new Map;class CS extends dv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const s=await SS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SS(t,e){const n=kS(e),s=PS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function bS(t,e){Ca.set(t._key(),e)}function PS(t){return On(t._redirectPersistence)}function kS(t){return Ra(RS,t.config.apiKey,t.name)}async function rV(t,e){return await er(t)._initializationPromise,fv(t,e,!1)}async function fv(t,e,n=!1){const s=er(t),i=hv(s,e),o=await new CS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const NS=10*60*1e3;class OS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(t);default:return!1}}/**
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
 */async function xS(t,e={}){return Io(t,"GET","/v1/projects",e)}/**
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
 */const MS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LS=/^https?/;async function VS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xS(t);for(const n of e)try{if(FS(n))return}catch{}Tn(t,"unauthorized-domain")}function FS(t){const e=Uu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LS.test(n))return!1;if(MS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const US=new To(3e4,6e4);function Jp(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BS(t){return new Promise((e,n)=>{var s,i,r;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(gn(t,"network-request-failed"))},timeout:US.get()})}if(!((i=(s=mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mn().gapi)===null||r===void 0)&&r.load)o();else{const a=jC("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Jy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function $S(t){return Sa=Sa||BS(t),Sa}/**
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
 */const jS=new To(5e3,15e3),HS="__/auth/iframe",WS="emulator/auth/iframe",qS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,WS):`https://${t.config.authDomain}/${HS}`,s={apiKey:e.apiKey,appName:t.name,v:vs},i=KS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Zi(s).slice(1)}`}async function GS(t){const e=await $S(t),n=mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:zS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{r(o)},jS.get());function l(){mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const QS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YS=500,XS=600,JS="_blank",ZS="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,s=YS,i=XS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=_t().toLowerCase();n&&(a=Hy(c)?JS:n),jy(c)&&(e=e||ZS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(FC(c)&&a!=="_self")return tb(e||"",a),new Zp(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Zp(h)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nb="__/auth/handler",sb="emulator/auth/handler",ib=encodeURIComponent("fac");async function eg(t,e,n,s,i,r){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vs,eventId:i};if(e instanceof gd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof wo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ib}=${encodeURIComponent(l)}`:"";return`${rb(t)}?${Zi(a).slice(1)}${c}`}function rb({config:t}){return t.emulator?dd(t,sb):`https://${t.authDomain}/${nb}`}/**
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
 */const qc="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ov,this._completeRedirectFn=fv,this._overrideRedirectResult=bS}async _openPopup(e,n,s,i){var r;Un((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await eg(e,n,s,Uu(),i);return eb(e,o,md())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await eg(e,n,s,Uu(),i);return hS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Un(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GS(e),s=new OS(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[qc];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gy()||pd()||$l()}}const ab=ob;var tg="@firebase/auth",ng="1.1.0";/**
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
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ub(t){En(new Zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(t)},c=new GC(s,i,r,l);return YC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),En(new Zt("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(s=>new lb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(tg,ng,cb(t)),Dt(tg,ng,"esm2017")}/**
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
 */const hb=5*60,db=wy("authIdTokenMaxAge")||hb;let sg=null;const fb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>db)return;const i=n==null?void 0:n.token;sg!==i&&(sg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gv(t=cd()){const e=ld(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QC(t,{popupRedirectResolver:ab,persistence:[ES,lS,ov]}),s=wy("authTokenSyncURL");if(s){const r=fb(s);iS(n,r,()=>r(n.currentUser)),nv(n,o=>r(o))}const i=Ty("auth");return i&&XC(n,`http://${i}`),n}ub("Browser");var pb=!1;/**
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
 */const gb=new Map,mb={activated:!1,tokenObservers:[]};function en(t){return gb.get(t)||Object.assign({},mb)}const ig={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class _b{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Yr,await yb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Yr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function yb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const vb={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ya=new Ji("appCheck","AppCheck",vb);function mv(t){if(!en(t).activated)throw Ya.create("use-before-activation",{appName:t.name})}/**
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
 */const Eb="firebase-app-check-database",Tb=1,$u="firebase-app-check-store";let sa=null;function Ib(){return sa||(sa=new Promise((t,e)=>{try{const n=indexedDB.open(Eb,Tb);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ya.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore($u,{keyPath:"compositeKey"})}}}catch(n){e(Ya.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),sa)}function wb(t,e){return Ab(Rb(t),e)}async function Ab(t,e){const s=(await Ib()).transaction($u,"readwrite"),r=s.objectStore($u).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ya.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Rb(t){return`${t.options.appId}-${t.name}`}/**
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
 */const ju=new Eo("@firebase/app-check");function rg(t,e){return Cy()?wb(t,e).catch(n=>{ju.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const Cb={error:"UNKNOWN_ERROR"};function Sb(t){return Ul.encodeString(JSON.stringify(t),!1)}async function Hu(t,e=!1){const n=t.app;mv(n);const s=en(n);let i=s.token,r;if(i&&!Er(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Er(l)?i=l:await rg(n,void 0))}if(!e&&i&&Er(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await en(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?ju.warn(l.message):ju.error(l),r=l}let a;return i?r?Er(i)?a={token:i.token,internalError:r}:a=ag(r):(a={token:i.token},s.token=i,await rg(n,i)):a=ag(r),o&&Nb(n,a),a}async function bb(t){const e=t.app;mv(e);const{provider:n}=en(e);{const{token:s}=await n.getToken();return{token:s}}}function Pb(t,e,n,s){const{app:i}=t,r=en(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Er(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),og(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>og(t))}function _v(t,e){const n=en(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function og(t){const{app:e}=t,n=en(e);let s=n.tokenRefresher;s||(s=kb(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function kb(t){const{app:e}=t;return new _b(async()=>{const n=en(e);let s;if(n.token?s=await Hu(t,!0):s=await Hu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=en(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},ig.RETRIAL_MIN_WAIT,ig.RETRIAL_MAX_WAIT)}function Nb(t,e){const n=en(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Er(t){return t.expireTimeMillis-Date.now()>0}function ag(t){return{token:Sb(Cb),error:t}}/**
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
 */class Ob{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=en(this.app);for(const n of e)_v(this.app,n.next);return Promise.resolve()}}function Db(t,e){return new Ob(t,e)}function xb(t){return{getToken:e=>Hu(t,e),getLimitedUseToken:()=>bb(t),addTokenListener:e=>Pb(t,"INTERNAL",e),removeTokenListener:e=>_v(t.app,e)}}const Mb="@firebase/app-check",Lb="0.8.0",Vb="app-check",lg="app-check-internal";function Fb(){En(new Zt(Vb,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Db(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(lg).initialize()})),En(new Zt(lg,t=>{const e=t.getProvider("app-check").getImmediate();return xb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dt(Mb,Lb)}Fb();var Ub="firebase",Bb="10.1.0";/**
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
 */Dt(Ub,Bb,"app");const yv=Symbol("firebaseApp");function Ro(t){return nd()&&Ot(yv,null)||cd(t)}const un=()=>{},$b=typeof window<"u";function yd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function jb(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Zs(t){return!!t&&typeof t=="object"}const Hb=Object.prototype;function Wb(t){return Zs(t)&&Object.getPrototypeOf(t)===Hb}function vd(t){return Zs(t)&&t.type==="document"}function qb(t){return Zs(t)&&t.type==="collection"}function Kb(t){return vd(t)||qb(t)}function zb(t){return Zs(t)&&t.type==="query"}function Gb(t){return Zs(t)&&"ref"in t}function Qb(t){return Zs(t)&&typeof t.bucket=="string"}function Yb(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Xb=Symbol.for("v-scx");function Jb(){return!!Ot(Xb,0)}const ia=new WeakMap;function Zb(t,e){if(!ia.has(t)){const n=g_(!0);ia.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ia.delete(t)}}return ia.get(t)}const vv=new WeakMap;function Ev(t){return vv.get(Ro(t))}const ra=new WeakMap;function Tv(t){const e=Ro(t);if(!ra.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{ra.set(e,r),n(r.value)}];ra.set(e,i)}return ra.get(e)}function eP(t){const e=Tv(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function tP(t,e){const n=gv(e);nv(n,s=>{const i=Tv();t.value=s,Array.isArray(i)&&i[1](t)})}const cg="@firebase/database",ug="1.0.1";/**
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
 */let Iv="";function nP(t){Iv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sP(e)}}catch{}return new iP},xs=wv("localStorage"),Wu=wv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Eo("@firebase/database"),rP=function(){let t=1;return function(){return t++}}(),Av=function(t){const e=dR(t),n=new aR;n.update(e);const s=n.digest();return Ul.encodeByteArray(s)},Co=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Co.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let $s=null,hg=!0;const oP=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ai.logLevel=fe.VERBOSE,$s=Ai.log.bind(Ai),e&&Wu.set("logging_enabled",!0)):typeof t=="function"?$s=t:($s=null,Wu.remove("logging_enabled"))},lt=function(...t){if(hg===!0&&(hg=!1,$s===null&&Wu.get("logging_enabled")===!0&&oP(!0)),$s){const e=Co.apply(null,t);$s(e)}},So=function(t){return function(...e){lt(t,...e)}},qu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Co(...t);Ai.error(e)},qs=function(...t){const e=`FIREBASE FATAL ERROR: ${Co(...t)}`;throw Ai.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+Co(...t);Ai.warn(e)},aP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xi="[MIN_NAME]",Ks="[MAX_NAME]",tr=function(t,e){if(t===e)return 0;if(t===xi||e===Ks)return-1;if(e===xi||t===Ks)return 1;{const n=dg(t),s=dg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},cP=function(t,e){return t===e?0:t<e?-1:1},hr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},Ed=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=Ed(t[e[s]]);return n+="}",n},Cv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){x(!Rv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},uP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dP=new RegExp("^-?(0*)\\d{1,10}$"),fP=-2147483648,pP=2147483647,dg=function(t){if(dP.test(t)){const e=Number(t);if(e>=fP&&e<=pP)return e}return null},bo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},gP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Or=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ku.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="5",bv="v",Pv="s",kv="r",Nv="f",Ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dv="ls",xv="p",zu="ac",Mv="websocket",Lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Mv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vP(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.counters_={}}incrementCounter(e,n=1){qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc={},zc={};function Id(t){const e=t.toString();return Kc[e]||(Kc[e]=new EP),Kc[e]}function TP(t,e){const n=t.toString();return zc[n]||(zc[n]=e()),zc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="start",wP="close",AP="pLPCommand",RP="pRTLPCB",Fv="id",Uv="pw",Bv="ser",CP="cb",SP="seg",bP="ts",PP="d",kP="dframe",$v=1870,jv=30,NP=$v-jv,OP=25e3,DP=3e4;class pi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=So(e),this.stats_=Id(n),this.urlFn=l=>(this.appCheckToken&&(l[zu]=this.appCheckToken),Vv(n,Lv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DP)),lP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wd((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fg)this.id=a,this.password=l;else if(o===wP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[fg]="t",s[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[CP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bv]=Td,this.transportSessionId&&(s[Pv]=this.transportSessionId),this.lastSessionId&&(s[Dv]=this.lastSessionId),this.applicationId&&(s[xv]=this.applicationId),this.appCheckToken&&(s[zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(s[kv]=Nv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return pi.forceAllow_?!0:!pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uP()&&!hP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vy(n),i=Cv(s,NP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[kP]="t",s[Fv]=e,s[Uv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rP(),window[AP+this.uniqueCallbackIdentifier]=e,window[RP+this.uniqueCallbackIdentifier]=n,this.myIFrame=wd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+s.length<=$v;){const o=this.pendingSegs.shift();s=s+"&"+SP+i+"="+o.seg+"&"+bP+i+"="+o.ts+"&"+PP+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(OP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=16384,MP=45e3;let Xa=null;typeof MozWebSocket<"u"?Xa=MozWebSocket:typeof WebSocket<"u"&&(Xa=WebSocket);class zt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=So(this.connId),this.stats_=Id(n),this.connURL=zt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bv]=Td,typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(o[kv]=Nv),n&&(o[Pv]=n),s&&(o[Dv]=s),i&&(o[zu]=i),r&&(o[xv]=r),Vv(e,Mv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xs.set("previous_websocket_failure",!0);try{let s;Ry(),this.mySock=new Xa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xa!==null&&!zt.forceDisallow_}static previouslyFailed(){return xs.isInMemoryStorage||xs.get("previous_websocket_failure")===!0}markConnectionHealthy(){xs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cv(n,xP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let s=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of to.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);to.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}to.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=6e4,VP=5e3,FP=10*1024,UP=100*1024,Gc="t",pg="d",BP="s",gg="r",$P="e",mg="o",_g="a",yg="n",vg="p",jP="h";class HP{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=So("c:"+this.id+":"),this.transportManager_=new to(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gc in e){const n=e[Gc];n===_g?this.upgradeIfSecondaryHealthy_():n===gg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_g,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hr(Gc,e);if(pg in e){const s=e[pg];if(n===jP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BP?this.onConnectionShutdown_(s):n===gg?this.onReset_(s):n===$P?qu("Server Error: "+s):n===mg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Wv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ja}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=32,Tg=768;class Oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Oe("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gs(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Oe(t.pieces_,e)}function qv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Kv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Oe(e,0)}function Qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Oe(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=ue(t),s=ue(e);if(n===null)return e;if(n===s)return Ut(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gv(t,e){if(gs(t)!==gs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(gs(t)>gs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class qP{constructor(e,n){this.errorPrefix_=n,this.parts_=Kv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bl(this.parts_[s]);Qv(this)}}function KP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bl(e),Qv(t)}function zP(t){const e=t.parts_.pop();t.byteLength_-=Bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qv(t){if(t.byteLength_>Tg)throw new Error(t.errorPrefix_+"has a key path longer than "+Tg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Eg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eg+") or object contains a cycle "+bs(t))}function bs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Wv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ad}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=1e3,GP=60*5*1e3,Ig=30*1e3,QP=1.3,YP=3e4,XP="server_kill",wg=3;class Ln extends Hv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=So("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=GP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ry())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(tt(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Yr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qn(e,"w")){const s=Oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ig)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):qu("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YP&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new HP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{xt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(XP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ed(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wg&&(this.reconnectDelay_=Ig,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iv.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:Ay()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ja.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(xi,e),i=new he(xi,n);return this.compare(s,i)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;class Yv extends Wl{static get __EMPTY_NODE(){return oa}static set __EMPTY_NODE(e){oa=e}compare(e,n){return tr(e.name,n.name)}isDefinedOn(e){throw Xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Ks,oa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,oa)}toString(){return".key"}}const Ri=new Yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kt=class Tr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Tr.RED,this.left=i??hn.EMPTY_NODE,this.right=r??hn.EMPTY_NODE}copy(e,n,s,i,r){return new Tr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Tr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Tr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kt.RED=!0;kt.BLACK=!1;class JP{copy(e,n,s,i,r){return this}insert(e,n,s){return new kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let hn=class ba{constructor(e,n=ba.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ba(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new ba(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new aa(this.root_,null,this.comparator_,!0,e)}};hn.EMPTY_NODE=new JP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t,e){return tr(t.name,e.name)}function Rd(t,e){return tr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;function ek(t){Gu=t}const Xv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Jv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qn(e,".sv"),"Priority must be a string or number.")}else x(t===Gu||t.isEmpty(),"priority of unexpected type.");x(t===Gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ag=e}static get __childrenNodeConstructor(){return Ag}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ue(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||gs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zv,eE;function tk(t){Zv=t}function nk(t){eE=t}class sk extends Wl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?tr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Ks,new Ke("[PRIORITY-POST]",eE))}makePost(e,n){const s=Zv(e);return new he(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ft=new sk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=Math.log(2);class rk{constructor(e){const n=r=>parseInt(Math.log(r)/ik,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new kt(d,h.node,kt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),_=i(f+1,c);return h=t[f],d=n?n(h):h,new kt(d,h.node,kt.BLACK,m,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,_){const v=h-m,T=h;h-=m;const R=i(v+1,T),S=t[v],w=n?n(S):S;f(new kt(w,S.node,_,null,R))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?d(v,kt.BLACK):(d(v,kt.BLACK),d(v,kt.RED))}return u},o=new rk(t.length),a=r(o);return new hn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc;const ci={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ci&&ft,"ChildrenNode.ts has not been loaded"),Qc=Qc||new Dn({".priority":ci},{".priority":ft}),Qc}get(e){const n=Oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return qn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ri,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(he.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Za(s,e.getCompare()):a=ci;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Dn(u,c)}addToIndexes(e,n){const s=ja(this.indexes_,(i,r)=>{const o=Oi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===ci)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Za(a,o.getCompare())}else return ci;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Dn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ja(this.indexes_,i=>{if(i===ci)return i;{const r=n.get(e.name);return r?i.remove(new he(e.name,r)):i}});return new Dn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fr||(fr=new ye(new hn(Rd),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fr}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fr:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fr:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{x(ue(e)!==".priority"||gs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ft,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xv(this.getPriority().val())+":"),this.forEachChild(ft,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new he(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Po?-1:0}withIndex(e){if(e===Ri||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ri||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ft),i=n.getIterator(ft);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ri?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ok extends ye{constructor(){super(new hn(Rd),ye.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const Po=new ok;Object.defineProperties(he,{MIN:{value:new he(xi,ye.EMPTY_NODE)},MAX:{value:new he(Ks,Po)}});Yv.__EMPTY_NODE=ye.EMPTY_NODE;Ke.__childrenNodeConstructor=ye;ek(Po);nk(Po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=!0;function ct(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ct(e))}if(!(t instanceof Array)&&ak){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ct(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return ye.EMPTY_NODE;const r=Za(n,ZP,o=>o.name,Rd);if(s){const o=Za(n,ft.getCompare());return new ye(r,ct(e),new Dn({".priority":o},{".priority":ft}))}else return new ye(r,ct(e),Dn.Default)}else{let n=ye.EMPTY_NODE;return Ht(t,(s,i)=>{if(qn(t,s)&&s.substring(0,1)!=="."){const r=ct(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ct(e))}}tk(ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk extends Wl{constructor(e){super(),this.indexPath_=e,x(!le(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?tr(e.name,n.name):r}makePost(e,n){const s=ct(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,Po);return new he(Ks,e)}toString(){return Kv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck extends Wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?tr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=ct(e);return new he(n,s)}toString(){return".value"}}const uk=new ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return{type:"value",snapshotNode:t}}function dk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function pk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ft?n="$priority":t.index_===uk?n="$value":t.index_===Ri?n="$key":(x(t.index_ instanceof lk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ft&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Hv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=So("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=el.getListenId_(e,s),a={};this.listens_[o]=a;const l=Cg(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Oi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=el.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Cg(e._queryParams),s=e._path.toString(),i=new Yr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xr(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return{value:null,children:new Map}}function tE(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ue(e);t.children.has(s)||t.children.set(s,tl());const i=t.children.get(s);e=Pe(e),tE(i,e,n)}}function Qu(t,e,n){t.value!==null?n(e,t.value):mk(t,(s,i)=>{const r=new Oe(e.toString()+"/"+s);Qu(i,r,n)})}function mk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=10*1e3,yk=30*1e3,vk=5*60*1e3;class Ek{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _k(e);const s=bg+(yk-bg)*Math.random();Or(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&qn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Or(this.reportStats_.bind(this),Math.floor(Math.random()*2*vk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function nE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=nE()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(e));return new nl(we(),n,this.revert)}}else return x(ue(this.path)===e,"operationForChild called for unrelated child."),new nl(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return le(this.path)?new zs(this.source,we(),this.snap.getImmediateChild(e)):new zs(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Oe(e));return n.isEmpty()?null:n.value?new zs(this.source,we(),n.value):new no(this.source,we(),n)}else return x(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new no(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Tk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(pk(o.childName,o.snapshotNode))}),pr(t,i,"child_removed",e,s,n),pr(t,i,"child_added",e,s,n),pr(t,i,"child_moved",r,s,n),pr(t,i,"child_changed",e,s,n),pr(t,i,"value",e,s,n),i}function pr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>wk(t,a,l)),o.forEach(a=>{const l=Ik(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ik(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wk(t,e,n){if(e.childName==null||n.childName==null)throw Xi("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){return{eventCache:t,serverCache:e}}function Dr(t,e,n,s){return rE(new Sd(e,n,s),t.serverCache)}function oE(t,e,n,s){return rE(t.eventCache,new Sd(e,n,s))}function Yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;const Ak=()=>(Yc||(Yc=new hn(cP)),Yc);class Se{constructor(e,n=Ak()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Ht(e,(s,i)=>{n=n.set(new Oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(le(e))return null;{const s=ue(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Pe(e),n);return r!=null?{path:Qe(new Oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new Se(null)}}set(e,n){if(le(e))return new Se(n,this.children);{const s=ue(e),r=(this.children.get(s)||new Se(null)).set(Pe(e),n),o=this.children.insert(s,r);return new Se(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const i=s.remove(Pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(le(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(le(e))return n;{const s=ue(e),r=(this.children.get(s)||new Se(null)).setTree(Pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Se(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(le(e))return null;{const r=ue(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),Qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const i=ue(e),r=this.children.get(i);return r?r.foreachOnPath_(Pe(e),Qe(n,i),s):new Se(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Se(null))}}function xr(t,e,n){if(le(e))return new Jt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new Jt(t.writeTree_.set(i,r))}else{const i=new Se(n),r=t.writeTree_.setTree(e,i);return new Jt(r)}}}function Pg(t,e,n){let s=t;return Ht(n,(i,r)=>{s=xr(s,Qe(e,i),r)}),s}function kg(t,e){if(le(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Jt(n)}}function Xu(t,e){return ei(t,e)!=null}function ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function Ng(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ft,(s,i)=>{e.push(new he(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new he(s,i.value))}),e}function hs(t,e){if(le(e))return t;{const n=ei(t,e);return n!=null?new Jt(new Se(n)):new Jt(t.writeTree_.subtree(e))}}function Ju(t){return t.writeTree_.isEmpty()}function Mi(t,e){return aE(we(),t.writeTree_,e)}function aE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=aE(Qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e){return fE(e,t)}function Rk(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=xr(t.visibleWrites,e,n)),t.lastWriteId=s}function Ck(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Sk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bk(a,s.path)?i=!1:Qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Pk(t),!0;if(s.snap)t.visibleWrites=kg(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=kg(t.visibleWrites,Qe(s.path,l))})}return!0}else return!1}function bk(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Qe(t.path,n),e))return!0;return!1}function Pk(t){t.visibleWrites=cE(t.allWrites,kk,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kk(t){return t.visible}function cE(t,e,n){let s=Jt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qt(n,o)?(a=Ut(n,o),s=xr(s,a,r.snap)):Qt(o,n)&&(a=Ut(o,n),s=xr(s,we(),r.snap.getChild(a)));else if(r.children){if(Qt(n,o))a=Ut(n,o),s=Pg(s,a,r.children);else if(Qt(o,n))if(a=Ut(o,n),le(a))s=Pg(s,we(),r.children);else{const l=Oi(r.children,ue(a));if(l){const c=l.getChild(Pe(a));s=xr(s,we(),c)}}}else throw Xi("WriteRecord should have .snap or .children")}}return s}function uE(t,e,n,s,i){if(!s&&!i){const r=ei(t.visibleWrites,e);if(r!=null)return r;{const o=hs(t.visibleWrites,e);if(Ju(o))return n;if(n==null&&!Xu(o,we()))return null;{const a=n||ye.EMPTY_NODE;return Mi(o,a)}}}else{const r=hs(t.visibleWrites,e);if(!i&&Ju(r))return n;if(!i&&n==null&&!Xu(r,we()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qt(c.path,e)||Qt(e,c.path))},a=cE(t.allWrites,o,e),l=n||ye.EMPTY_NODE;return Mi(a,l)}}}function Nk(t,e,n){let s=ye.EMPTY_NODE;const i=ei(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ft,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=hs(t.visibleWrites,e);return n.forEachChild(ft,(o,a)=>{const l=Mi(hs(r,new Oe(o)),a);s=s.updateImmediateChild(o,l)}),Ng(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=hs(t.visibleWrites,e);return Ng(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ok(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Qe(e,n);if(Xu(t.visibleWrites,r))return null;{const o=hs(t.visibleWrites,r);return Ju(o)?i.getChild(n):Mi(o,i.getChild(n))}}function Dk(t,e,n,s){const i=Qe(e,n),r=ei(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=hs(t.visibleWrites,i);return Mi(o,s.getNode().getImmediateChild(n))}else return null}function xk(t,e){return ei(t.visibleWrites,e)}function Mk(t,e,n,s,i,r,o){let a;const l=hs(t.visibleWrites,e),c=ei(l,we());if(c!=null)a=c;else if(n!=null)a=Mi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Lk(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Zu(t,e,n,s){return uE(t.writeTree,t.treePath,e,n,s)}function hE(t,e){return Nk(t.writeTree,t.treePath,e)}function Og(t,e,n,s){return Ok(t.writeTree,t.treePath,e,n,s)}function sl(t,e){return xk(t.writeTree,Qe(t.treePath,e))}function Vk(t,e,n,s,i,r){return Mk(t.writeTree,t.treePath,e,n,s,i,r)}function bd(t,e,n){return Dk(t.writeTree,t.treePath,e,n)}function dE(t,e){return fE(Qe(t.treePath,e),t.writeTree)}function fE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,fk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,dk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rg(s,e.snapshotNode,i.oldSnap));else throw Xi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const pE=new Uk;class Pd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Sd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gs(this.viewCache_),r=Vk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Bk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $k(t,e,n,s,i){const r=new Fk;let o,a;if(n.type===dn.OVERWRITE){const c=n;c.source.fromUser?o=eh(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=il(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===dn.MERGE){const c=n;c.source.fromUser?o=Hk(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=th(t,e,c.path,c.children,s,i,a,r))}else if(n.type===dn.ACK_USER_WRITE){const c=n;c.revert?o=Kk(t,e,c.path,s,i,r):o=Wk(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===dn.LISTEN_COMPLETE)o=qk(t,e,n.path,s,r);else throw Xi("Unknown operation type: "+n.type);const l=r.getChanges();return jk(e,o,l),{viewCache:o,changes:l}}function jk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(hk(Yu(e)))}}function gE(t,e,n,s,i,r){const o=e.eventCache;if(sl(s,n)!=null)return e;{let a,l;if(le(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gs(e),u=c instanceof ye?c:ye.EMPTY_NODE,h=hE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Zu(s,Gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ue(n);if(c===".priority"){x(gs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Og(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Og(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=bd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Dr(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function il(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ue(n);if(!l.isCompleteForPath(n)&&gs(n)>1)return e;const m=Pe(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,pE,null)}const h=oE(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),d=new Pd(i,h,r);return gE(t,h,n,i,d,a)}function eh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Pd(i,e,r);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Dr(e,c,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Dr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Pe(n),f=a.getNode().getImmediateChild(h);let m;if(le(d))m=s;else{const _=u.getCompleteChild(h);_!=null?qv(d)===".priority"&&_.getChild(zv(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=ye.EMPTY_NODE}if(f.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Dr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dg(t,e){return t.eventCache.isCompleteForChild(e)}function Hk(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Qe(n,l);Dg(e,ue(u))&&(a=eh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Qe(n,l);Dg(e,ue(u))||(a=eh(t,a,u,c,i,r,o))}),a}function xg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function th(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=xg(t,f,d);l=il(t,l,new Oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),_=xg(t,m,d);l=il(t,l,new Oe(h),_,i,r,o,a)}}),l}function Wk(t,e,n,s,i,r,o){if(sl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return il(t,e,n,l.getNode().getChild(n),i,r,a,o);if(le(n)){let c=new Se(null);return l.getNode().forEachChild(Ri,(u,h)=>{c=c.set(new Oe(u),h)}),th(t,e,n,c,i,r,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,h)=>{const d=Qe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),th(t,e,n,c,i,r,a,o)}}function qk(t,e,n,s,i){const r=e.serverCache,o=oE(e,r.getNode(),r.isFullyInitialized()||le(n),r.isFiltered());return gE(t,o,n,s,pE,i)}function Kk(t,e,n,s,i,r){let o;if(sl(s,n)!=null)return e;{const a=new Pd(s,e,i),l=e.eventCache.getNode();let c;if(le(n)||ue(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zu(s,Gs(e));else{const h=e.serverCache.getNode();x(h instanceof ye,"serverChildren would be complete if leaf node"),u=hE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ue(n);let h=bd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ye.EMPTY_NODE,Pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zu(s,Gs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||sl(s,we())!=null,Dr(e,c,o,t.filter.filtersNodes())}}function zk(t,e){const n=Gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Mg(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(x(Gs(t.viewCache_),"We should always have a full cache before handling merges"),x(Yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$k(t.processor_,i,e,n,s);return Bk(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Gk(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Tk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lg;function Qk(t){x(!Lg,"__referenceConstructor has already been defined"),Lg=t}function kd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),Mg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Mg(o,e,n,s));return r}}function Nd(t,e){let n=null;for(const s of t.views.values())n=n||zk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vg;function Yk(t){x(!Vg,"__referenceConstructor has already been defined"),Vg=t}class Fg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Lk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xk(t,e,n,s,i){return Rk(t.pendingWriteTree_,e,n,s,i),i?Kl(t,new zs(nE(),e,n)):[]}function gi(t,e,n=!1){const s=Ck(t.pendingWriteTree_,e);if(Sk(t.pendingWriteTree_,e)){let r=new Se(null);return s.snap!=null?r=r.set(we(),!0):Ht(s.children,o=>{r=r.set(new Oe(o),!0)}),Kl(t,new nl(s.path,r,n))}else return[]}function ql(t,e,n){return Kl(t,new zs(sE(),e,n))}function Jk(t,e,n){const s=Se.fromObject(n);return Kl(t,new no(sE(),e,s))}function Zk(t,e,n,s){const i=vE(t,s);if(i!=null){const r=EE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=new zs(iE(a),l,n);return TE(t,o,c)}else return[]}function eN(t,e,n,s){const i=vE(t,s);if(i){const r=EE(i),o=r.path,a=r.queryId,l=Ut(o,e),c=Se.fromObject(n),u=new no(iE(a),l,c);return TE(t,o,u)}else return[]}function mE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),c=Nd(a,l);if(c)return c});return uE(i,e,r,n,!0)}function Kl(t,e){return _E(e,t.syncPointTree_,null,lE(t.pendingWriteTree_,we()))}function _E(t,e,n,s){if(le(t.path))return yE(t,e,n,s);{const i=e.get(we());n==null&&i!=null&&(n=Nd(i,we()));let r=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dE(s,o);r=r.concat(_E(a,l,c,u))}return i&&(r=r.concat(kd(i,t,s,n))),r}}function yE(t,e,n,s){const i=e.get(we());n==null&&i!=null&&(n=Nd(i,we()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dE(s,o),u=t.operationForChild(o);u&&(r=r.concat(yE(u,a,l,c)))}),i&&(r=r.concat(kd(i,t,s,n))),r}function vE(t,e){return t.tagToQueryMap.get(e)}function EE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Oe(t.substr(0,e))}}function TE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=lE(t.pendingWriteTree_,e);return kd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Od(n)}node(){return this.node_}}class Dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Dd(this.syncTree_,n)}node(){return mE(this.syncTree_,this.path_)}}const tN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ug=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sN(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},sN=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},iN=function(t,e,n,s){return xd(e,new Dd(n,t),s)},rN=function(t,e,n){return xd(t,new Od(e),n)};function xd(t,e,n){const s=t.getPriority().val(),i=Ug(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ug(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,ct(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ft,(a,l)=>{const c=xd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ld(t,e){let n=e instanceof Oe?e:new Oe(e),s=t,i=ue(n);for(;i!==null;){const r=Oi(s.node.children,i)||{children:{},childCount:0};s=new Md(i,s,r),n=Pe(n),i=ue(n)}return s}function nr(t){return t.node.value}function IE(t,e){t.node.value=e,nh(t)}function wE(t){return t.node.childCount>0}function oN(t){return nr(t)===void 0&&!wE(t)}function zl(t,e){Ht(t.node.children,(n,s)=>{e(new Md(n,t,s))})}function AE(t,e,n,s){n&&!s&&e(t),zl(t,i=>{AE(i,e,!0,s)}),n&&s&&e(t)}function aN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ko(t){return new Oe(t.parent===null?t.name:ko(t.parent)+"/"+t.name)}function nh(t){t.parent!==null&&lN(t.parent,t.name,t)}function lN(t,e,n){const s=oN(n),i=qn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,nh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=/[\[\].#$\/\u0000-\u001F\u007F]/,uN=/[\[\].#$\u0000-\u001F\u007F]/,Xc=10*1024*1024,RE=function(t){return typeof t=="string"&&t.length!==0&&!cN.test(t)},hN=function(t){return typeof t=="string"&&t.length!==0&&!uN.test(t)},dN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hN(t)},CE=function(t,e,n){const s=n instanceof Oe?new qP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bs(s));if(typeof e=="function")throw new Error(t+"contains a function "+bs(s)+" with contents = "+e.toString());if(Rv(e))throw new Error(t+"contains "+e.toString()+" "+bs(s));if(typeof e=="string"&&e.length>Xc/3&&Bl(e)>Xc)throw new Error(t+"contains a string greater than "+Xc+" utf8 bytes "+bs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!RE(o)))throw new Error(t+" contains an invalid key ("+o+") "+bs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KP(s,o),CE(t,a,s),zP(s)}),i&&r)throw new Error(t+' contains ".value" child '+bs(s)+" in addition to actual children.")}},fN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!RE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dN(n))throw new Error(hR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Gv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ti(t,e,n){gN(t,n),mN(t,s=>Qt(s,e)||Qt(e,s))}function mN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(_N(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _N(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();$s&&lt("event: "+n.toString()),bo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="repo_interrupt",vN=25;class EN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TN(t,e,n){if(t.stats_=Id(t.repoInfo_),t.forceRestClient_||gP())t.server_=new el(t.repoInfo_,(s,i,r,o)=>{Bg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$g(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(s,i,r,o)=>{Bg(t,s,i,r,o)},s=>{$g(t,s)},s=>{wN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=TP(t.repoInfo_,()=>new Ek(t.stats_,t.server_)),t.infoData_=new gk,t.infoSyncTree_=new Fg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ql(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vd(t,"connected",!1),t.serverSyncTree_=new Fg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ti(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function IN(t){const n=t.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function SE(t){return tN({timestamp:IN(t)})}function Bg(t,e,n,s,i){t.dataUpdateCount++;const r=new Oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ja(n,c=>ct(c));o=eN(t.serverSyncTree_,r,l,i)}else{const l=ct(n);o=Zk(t.serverSyncTree_,r,l,i)}else if(s){const l=ja(n,c=>ct(c));o=Jk(t.serverSyncTree_,r,l)}else{const l=ct(n);o=ql(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ud(t,r)),ti(t.eventQueue_,a,o)}function $g(t,e){Vd(t,"connected",e),e===!1&&RN(t)}function wN(t,e){Ht(e,(n,s)=>{Vd(t,n,s)})}function Vd(t,e,n){const s=new Oe("/.info/"+e),i=ct(n);t.infoData_.updateSnapshot(s,i);const r=ql(t.infoSyncTree_,s,i);ti(t.eventQueue_,s,r)}function AN(t){return t.nextWriteId_++}function RN(t){bE(t,"onDisconnectEvents");const e=SE(t),n=tl();Qu(t.onDisconnect_,we(),(i,r)=>{const o=iN(i,r,t.serverSyncTree_,e);tE(n,i,o)});let s=[];Qu(n,we(),(i,r)=>{s=s.concat(ql(t.serverSyncTree_,i,r));const o=PN(t,i);Ud(t,o)}),t.onDisconnect_=tl(),ti(t.eventQueue_,we(),s)}function CN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yN)}function bE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function PE(t,e,n){return mE(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Fd(t,e=t.transactionQueueTree_){if(e||Gl(t,e),nr(e)){const n=NE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SN(t,ko(e),n)}else wE(e)&&zl(e,n=>{Fd(t,n)})}function SN(t,e,n){const s=n.map(c=>c.currentWriteId),i=PE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{bE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(gi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Gl(t,Ld(t.transactionQueueTree_,e)),Fd(t,t.transactionQueueTree_),ti(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)bo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ud(t,e)}},o)}function Ud(t,e){const n=kE(t,e),s=ko(n),i=NE(t,n);return bN(t,i,s),s}function bN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ut(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vN)u=!0,h="maxretry",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=PE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){CE("transaction failed: Data returned ",f,l.path);let m=ct(f);typeof f=="object"&&f!=null&&qn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,T=SE(t),R=rN(m,d,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=R,l.currentWriteId=AN(t),o.splice(o.indexOf(v),1),i=i.concat(Xk(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),i=i.concat(gi(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0))}ti(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Gl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)bo(s[a]);Fd(t,t.transactionQueueTree_)}function kE(t,e){let n,s=t.transactionQueueTree_;for(n=ue(e);n!==null&&nr(s)===void 0;)s=Ld(s,n),e=Pe(e),n=ue(e);return s}function NE(t,e){const n=[];return OE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function OE(t,e,n){const s=nr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zl(e,i=>{OE(t,i,n)})}function Gl(t,e){const n=nr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,IE(e,n.length>0?n:void 0)}zl(e,s=>{Gl(t,s)})}function PN(t,e){const n=ko(kE(t,e)),s=Ld(t.transactionQueueTree_,e);return aN(s,i=>{Jc(t,i)}),Jc(t,s),AE(s,i=>{Jc(t,i)}),n}function Jc(t,e){const n=nr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?IE(e,void 0):n.length=r+1,ti(t.eventQueue_,ko(e),i);for(let o=0;o<s.length;o++)bo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const jg=function(t,e){const n=ON(t),s=n.namespace;n.domain==="firebase.com"&&qs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&qs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yP(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Oe(n.pathString)}},ON=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=kN(t.substring(u,h)));const d=NN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Bd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return le(this._path)?null:qv(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=Sg(this._queryParams),n=Ed(e);return n==="{}"?"default":n}get _queryObject(){return Sg(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Bd))return!1;const n=this._repo===e._repo,s=Gv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+WP(this._path)}}class sr extends Bd{constructor(e,n){super(e,n,new Cd,!1)}get parent(){const e=zv(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Qk(sr);Yk(sr);/**
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
 */const DN="FIREBASE_DATABASE_EMULATOR_HOST",sh={};let xN=!1;function MN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||qs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[DN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=jg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ku(Ku.OWNER):new _P(t.name,t.options,e);fN("Invalid Firebase Database URL",o),le(o.path)||qs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=VN(a,t,u,new mP(t.name,n));return new FN(h,t)}function LN(t,e){const n=sh[e];(!n||n[t.key]!==t)&&qs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CN(t),delete n[t.key]}function VN(t,e,n,s){let i=sh[e.name];i||(i={},sh[e.name]=i);let r=i[t.toURLString()];return r&&qs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new EN(t,xN,n,s),i[t.toURLString()]=r,r}class FN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function UN(t){nP(vs),En(new Zt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return MN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(cg,ug,t),Dt(cg,ug,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UN();var BN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,$d=$d||{},X=BN||self;function Ql(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function No(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $N(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++jN)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),jN=0;function HN(t,e,n){return t.call.apply(t.bind,arguments)}function WN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=HN:pt=WN,pt.apply(null,arguments)}function la(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Es(){this.s=this.s,this.o=this.o}var qN=0;Es.prototype.s=!1;Es.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qN!=0)&&$N(this)};Es.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Hg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ql(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var KN=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",()=>{},e),X.removeEventListener("test",()=>{},e)}catch{}return t}();function so(t){return/^[\s\xa0]*$/.test(t)}function Yl(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return Yl().indexOf(t)!=-1}function Hd(t){return Hd[" "](t),t}Hd[" "]=function(){};function zN(t,e){var n=UO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var GN=cn("Opera"),Li=cn("Trident")||cn("MSIE"),xE=cn("Edge"),ih=xE||Li,ME=cn("Gecko")&&!(Yl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),QN=Yl().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function LE(){var t=X.document;return t?t.documentMode:void 0}var rh;e:{var eu="",tu=function(){var t=Yl();if(ME)return/rv:([^\);]+)(\)|;)/.exec(t);if(xE)return/Edge\/([\d\.]+)/.exec(t);if(Li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QN)return/WebKit\/(\S+)/.exec(t);if(GN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tu&&(eu=tu?tu[1]:""),Li){var nu=LE();if(nu!=null&&nu>parseFloat(eu)){rh=String(nu);break e}}rh=eu}var oh;if(X.document&&Li){var Wg=LE();oh=Wg||parseInt(rh,10)||void 0}else oh=void 0;var YN=oh;function io(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ME){e:{try{Hd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&io.$.h.call(this)}}Xe(io,gt);var XN={2:"touch",3:"pen",4:"mouse"};io.prototype.h=function(){io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oo="closure_listenable_"+(1e6*Math.random()|0),JN=0;function ZN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++JN,this.fa=this.ia=!1}function Xl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function VE(t){const e={};for(const n in t)e[n]=t[n];return e}const qg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<qg.length;r++)n=qg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Jl(t){this.src=t,this.g={},this.h=0}Jl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=lh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ZN(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function ah(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=DE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Xl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var qd="closure_lm_"+(1e6*Math.random()|0),su={};function UE(t,e,n,s,i){if(s&&s.once)return $E(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)UE(t,e[r],n,s,i);return null}return n=Gd(n),t&&t[Oo]?t.O(e,n,No(s)?!!s.capture:!!s,i):BE(t,e,n,!1,s,i)}function BE(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=No(i)?!!i.capture:!!i,a=zd(t);if(a||(t[qd]=a=new Jl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=tO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)KN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(HE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tO(){function t(n){return e.call(t.src,t.listener,n)}const e=nO;return t}function $E(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$E(t,e[r],n,s,i);return null}return n=Gd(n),t&&t[Oo]?t.P(e,n,No(s)?!!s.capture:!!s,i):BE(t,e,n,!0,s,i)}function jE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)jE(t,e[r],n,s,i);else s=No(s)?!!s.capture:!!s,n=Gd(n),t&&t[Oo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=lh(r,n,s,i),-1<n&&(Xl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lh(e,n,s,i)),(n=-1<t?e[t]:null)&&Kd(n))}function Kd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Oo])ah(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(HE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zd(e))?(ah(n,t),n.h==0&&(n.src=null,e[qd]=null)):Xl(t)}}}function HE(t){return t in su?su[t]:su[t]="on"+t}function nO(t,e){if(t.fa)t=!0;else{e=new io(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Kd(t),t=n.call(s,e)}return t}function zd(t){return t=t[qd],t instanceof Jl?t:null}var iu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(t){return typeof t=="function"?t:(t[iu]||(t[iu]=function(e){return t.handleEvent(e)}),t[iu])}function Ye(){Es.call(this),this.i=new Jl(this),this.S=this,this.J=null}Xe(Ye,Es);Ye.prototype[Oo]=!0;Ye.prototype.removeEventListener=function(t,e,n,s){jE(this,t,e,n,s)};function it(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var i=e;e=new gt(s,t),FE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ca(o,s,!0,e)&&i}if(o=e.g=t,i=ca(o,s,!0,e)&&i,i=ca(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ca(o,s,!1,e)&&i}Ye.prototype.N=function(){if(Ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Xl(n[s]);delete t.g[e],t.h--}}this.J=null};Ye.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ye.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ca(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ah(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Qd=X.JSON.stringify;class sO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function iO(){var t=Yd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rO{constructor(){this.h=this.g=null}add(e,n){const s=WE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var WE=new sO(()=>new oO,t=>t.reset());class oO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function lO(t){X.setTimeout(()=>{throw t},0)}let ro,oo=!1,Yd=new rO,qE=()=>{const t=X.Promise.resolve(void 0);ro=()=>{t.then(cO)}};var cO=()=>{for(var t;t=iO();){try{t.h.call(t.g)}catch(n){lO(n)}var e=WE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1};function Zl(t,e){Ye.call(this),this.h=t||1,this.g=e||X,this.j=pt(this.qb,this),this.l=Date.now()}Xe(Zl,Ye);M=Zl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Xd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Zl.$.N.call(this),Xd(this),delete this.g};function Jd(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function KE(t){t.g=Jd(()=>{t.g=null,t.i&&(t.i=!1,KE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class uO extends Es{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KE(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(t){Es.call(this),this.h=t,this.g={}}Xe(ao,Es);var Kg=[];function zE(t,e,n,s){Array.isArray(n)||(n&&(Kg[0]=n.toString()),n=Kg);for(var i=0;i<n.length;i++){var r=UE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function GE(t){Wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kd(e)},t),t.g={}}ao.prototype.N=function(){ao.$.N.call(this),GE(this)};ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ec(){this.g=!0}ec.prototype.Ea=function(){this.g=!1};function hO(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function mi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pO(t,n)+(s?" "+s:"")})}function fO(t,e){t.info(function(){return"TIMEOUT: "+e})}ec.prototype.info=function(){};function pO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qd(n)}catch{return e}}var ni={},zg=null;function tc(){return zg=zg||new Ye}ni.Ta="serverreachability";function QE(t){gt.call(this,ni.Ta,t)}Xe(QE,gt);function lo(t){const e=tc();it(e,new QE(e))}ni.STAT_EVENT="statevent";function YE(t,e){gt.call(this,ni.STAT_EVENT,t),this.stat=e}Xe(YE,gt);function It(t){const e=tc();it(e,new YE(e,t))}ni.Ua="timingevent";function XE(t,e){gt.call(this,ni.Ua,t),this.size=e}Xe(XE,gt);function Do(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var nc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zd(){}Zd.prototype.h=null;function Gg(t){return t.h||(t.h=t.i())}function ZE(){}var xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ef(){gt.call(this,"d")}Xe(ef,gt);function tf(){gt.call(this,"c")}Xe(tf,gt);var ch;function sc(){}Xe(sc,Zd);sc.prototype.g=function(){return new XMLHttpRequest};sc.prototype.i=function(){return{}};ch=new sc;function Mo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ao(this),this.P=gO,t=ih?125:void 0,this.V=new Zl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eT}function eT(){this.i=null,this.g="",this.h=!1}var gO=45e3,uh={},rl={};M=Mo.prototype;M.setTimeout=function(t){this.P=t};function hh(t,e,n){t.L=1,t.v=rc(Bn(e)),t.s=n,t.S=!0,tT(t,null)}function tT(t,e){t.G=Date.now(),Lo(t),t.A=Bn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),cT(n.i,"t",s),t.C=0,n=t.l.J,t.h=new eT,t.g=kT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new uO(pt(t.Pa,t,t.g),t.O)),zE(t.U,t.g,"readystatechange",t.nb),e=t.I?VE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),lo(),hO(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ih||this.g&&(this.h.h||this.g.ja()||Jg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?lo(3):lo(2)),ic(this);var n=this.g.da();this.ca=n;t:if(nT(this)){var s=Jg(this.g);t="";var i=s.length,r=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),Mr(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(a)){var c=a;break t}}c=null}if(n=c)mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,n);else{this.i=!1,this.o=3,It(12),Ms(this),Mr(this);break e}}this.S?(sT(this,u,o),ih&&this.i&&u==3&&(zE(this.U,this.V,"tick",this.mb),this.V.start())):(mi(this.j,this.m,o,null),dh(this,o)),u==4&&Ms(this),this.i&&!this.J&&(u==4?CT(this.l,this):(this.i=!1,Lo(this)))}else LO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Ms(this),Mr(this)}}}catch{}finally{}};function nT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function sT(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=mO(t,n),i==rl){e==4&&(t.o=4,It(14),s=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uh){t.o=4,It(15),mi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mi(t.j,t.m,i,null),dh(t,i);nT(t)&&i!=rl&&i!=uh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lf(e),e.M=!0,It(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Ms(t),Mr(t))}M.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.C<e.length&&(ic(this),sT(this,t,e),this.i&&t!=4&&Lo(this))}};function mO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?rl:(n=Number(e.substring(n,s)),isNaN(n)?uh:(s+=1,s+n>e.length?rl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Ms(this)};function Lo(t){t.Y=Date.now()+t.P,iT(t,t.P)}function iT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Do(pt(t.lb,t),e)}function ic(t){t.B&&(X.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fO(this.j,this.A),this.L!=2&&(lo(),It(17)),Ms(this),this.o=2,Mr(this)):iT(this,this.Y-t)};function Mr(t){t.l.H==0||t.J||CT(t.l,t)}function Ms(t){ic(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xd(t.V),GE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function dh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fh(n.i,t))){if(!t.K&&fh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ll(n),lc(n);else break e;af(n),It(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Do(pt(n.ib,n),6e3));if(1>=dT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ls(n,11)}else if((t.K||n.g==t)&&ll(n),!so(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(nf(r,r.h),r.h=null))}if(s.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,ke(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=PT(s,s.J?s.pa:null,s.Y),o.K){fT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(ic(a),Lo(a)),s.g=o}else AT(s);0<n.j.length&&cc(n)}else c[0]!="stop"&&c[0]!="close"||Ls(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ls(n,7):of(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}lo(4)}catch{}}function _O(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ql(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function yO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ql(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function rT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ql(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yO(t),s=_O(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var oT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function js(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof js){this.h=t.h,ol(this,t.j),this.s=t.s,this.g=t.g,al(this,t.m),this.l=t.l;var e=t.i,n=new co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qg(this,n),this.o=t.o}else t&&(e=String(t).match(oT))?(this.h=!1,ol(this,e[1]||"",!0),this.s=Ir(e[2]||""),this.g=Ir(e[3]||"",!0),al(this,e[4]),this.l=Ir(e[5]||"",!0),Qg(this,e[6]||"",!0),this.o=Ir(e[7]||"")):(this.h=!1,this.i=new co(null,this.h))}js.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wr(e,Yg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wr(e,Yg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wr(n,n.charAt(0)=="/"?IO:TO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wr(n,AO)),t.join("")};function Bn(t){return new js(t)}function ol(t,e,n){t.j=n?Ir(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function al(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qg(t,e,n){e instanceof co?(t.i=e,RO(t.i,t.h)):(n||(e=wr(e,wO)),t.i=new co(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function rc(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ir(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yg=/[#\/\?@]/g,TO=/[#\?:]/g,IO=/[#\?]/g,wO=/[#\?@]/g,AO=/#/g;function co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ts(t){t.g||(t.g=new Map,t.h=0,t.i&&vO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=co.prototype;M.add=function(t,e){Ts(this),this.i=null,t=ir(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aT(t,e){Ts(t),e=ir(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lT(t,e){return Ts(t),e=ir(t,e),t.g.has(e)}M.forEach=function(t,e){Ts(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){Ts(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){Ts(this);let e=[];if(typeof t=="string")lT(this,t)&&(e=e.concat(this.g.get(ir(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ts(this),this.i=null,t=ir(this,t),lT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cT(t,e,n){aT(t,e),0<n.length&&(t.i=null,t.g.set(ir(t,e),jd(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ir(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RO(t,e){e&&!t.j&&(Ts(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(aT(this,s),cT(this,i,n))},t)),t.j=e}var CO=class{constructor(t,e){this.g=t,this.map=e}};function uT(t){this.l=t||SO,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SO=10;function hT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dT(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nf(t,e){t.g?t.g.add(e):t.h=e}function fT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uT.prototype.cancel=function(){if(this.i=pT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jd(t.i)}var bO=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function PO(){this.g=new bO}function kO(t,e,n){const s=n||"";try{rT(t,function(i,r){let o=i;No(i)&&(o=Qd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function NO(t,e){const n=new ec;if(X.Image){const s=new Image;s.onload=la(ua,n,s,"TestLoadImage: loaded",!0,e),s.onerror=la(ua,n,s,"TestLoadImage: error",!1,e),s.onabort=la(ua,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=la(ua,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ua(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Vo(t){this.l=t.fc||null,this.j=t.ob||!1}Xe(Vo,Zd);Vo.prototype.g=function(){return new oc(this.l,this.j)};Vo.prototype.i=function(t){return function(){return t}}({});function oc(t,e){Ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(oc,Ye);var sf=0;M=oc.prototype;M.open=function(t,e){if(this.readyState!=sf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,uo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=sf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fo(this):uo(this),this.readyState==3&&gT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Fo(this))};M.Ya=function(t){this.g&&(this.response=t,Fo(this))};M.ka=function(){this.g&&Fo(this)};function Fo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,uo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function uo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OO=X.JSON.parse;function Le(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mT,this.L=this.M=!1}Xe(Le,Ye);var mT="",DO=/^https?$/i,xO=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ch.g(),this.C=this.u?Gg(this.u):Gg(ch),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Xg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=DE(xO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vT(this),0<this.B&&((this.L=MO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Jd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Xg(this,r)}};function MO(t){return Li&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof $d<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Xg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_T(t),ac(t)}function _T(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),ac(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ac(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?yT(this):this.kb())};M.kb=function(){yT(this)};function yT(t){if(t.h&&typeof $d<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)Jd(t.La,0,t);else if(it(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(oT)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),s=!DO.test(i?i.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var r=2<fn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",_T(t)}}finally{ac(t)}}}}function ac(t,e){if(t.g){vT(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function vT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OO(e)}};function Jg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function LO(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(so(t[s]))continue;var n=aO(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}eO(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ET(t){let e="";return Wd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function rf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ET(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function gr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function TT(t){this.Ga=0,this.j=[],this.l=new ec,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gr("baseRetryDelayMs",5e3,t),this.hb=gr("retryDelaySeedMs",1e4,t),this.eb=gr("forwardChannelMaxRetries",2,t),this.xa=gr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new uT(t&&t.concurrentRequestLimit),this.Ja=new PO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=TT.prototype;M.ra=8;M.H=1;function of(t){if(IT(t),t.H==3){var e=t.W++,n=Bn(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Uo(t,n),e=new Mo(t,t.l,e),e.L=2,e.v=rc(Bn(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=kT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Lo(e)}bT(t)}function lc(t){t.g&&(lf(t),t.g.cancel(),t.g=null)}function IT(t){lc(t),t.u&&(X.clearTimeout(t.u),t.u=null),ll(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function cc(t){if(!hT(t.i)&&!t.m){t.m=!0;var e=t.Na;ro||qE(),oo||(ro(),oo=!0),Yd.add(e,t),t.C=0}}function VO(t,e){return dT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Do(pt(t.Na,t,e),ST(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Mo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=VE(r),FE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wT(this,i,e),n=Bn(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Uo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(ET(r)))+"&"+e:this.o&&rf(n,this.o,r)),nf(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,hh(i,n,null)):hh(i,n,e),this.H=2}}else this.H==3&&(t?Zg(this,t):this.j.length==0||hT(this.i)||Zg(this))};function Zg(t,e){var n;e?n=e.m:n=t.W++;const s=Bn(t.I);ke(s,"SID",t.K),ke(s,"RID",n),ke(s,"AID",t.V),Uo(t,s),t.o&&t.s&&rf(s,t.o,t.s),n=new Mo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=wT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nf(t.i,n),hh(n,s,e)}function Uo(t,e){t.na&&Wd(t.na,function(n,s){ke(e,s,n)}),t.h&&rT({},function(n,s){ke(e,s,n)})}function wT(t,e,n){n=Math.min(t.j.length,n);var s=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{kO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function AT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ro||qE(),oo||(ro(),oo=!0),Yd.add(e,t),t.A=0}}function af(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Do(pt(t.Ma,t),ST(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,RT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Do(pt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),lc(this),RT(this))};function lf(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function RT(t){t.g=new Mo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Bn(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Uo(t,e),t.o&&t.s&&rf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rc(Bn(e)),n.s=null,n.S=!0,tT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,lc(this),af(this),It(19))};function ll(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function CT(t,e){var n=null;if(t.g==e){ll(t),lf(t),t.g=null;var s=2}else if(fh(t.i,e))n=e.F,fT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=tc(),it(s,new XE(s,n)),cc(t)}else AT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&VO(t,e)||s==2&&af(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}}function ST(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ls(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=pt(t.pb,t);n||(n=new js("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||ol(n,"https"),rc(n)),NO(n.toString(),s)}else It(2);t.H=0,t.h&&t.h.za(e),bT(t),IT(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function bT(t){if(t.H=0,t.ma=[],t.h){const e=pT(t.i);(e.length!=0||t.j.length!=0)&&(Hg(t.ma,e),Hg(t.ma,t.j),t.i.i.length=0,jd(t.j),t.j.length=0),t.h.ya()}}function PT(t,e,n){var s=n instanceof js?Bn(n):new js(n);if(s.g!="")e&&(s.g=e+"."+s.g),al(s,s.m);else{var i=X.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new js(null);s&&ol(r,s),e&&(r.g=e),i&&al(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ke(s,n,e),ke(s,"VER",t.ra),Uo(t,s),s}function kT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new Vo({ob:!0})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function NT(){}M=NT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function cl(){if(Li&&!(10<=Number(YN)))throw Error("Environmental error: no available transport.")}cl.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Ye.call(this),this.g=new TT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!so(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!so(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rr(this)}Xe(Mt,Ye);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=PT(t,null,t.Y),cc(t)};Mt.prototype.close=function(){of(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qd(t),t=n);e.j.push(new CO(e.fb++,t)),e.H==3&&cc(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,of(this.g),delete this.g,Mt.$.N.call(this)};function OT(t){ef.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(OT,ef);function DT(){tf.call(this),this.status=1}Xe(DT,tf);function rr(t){this.g=t}Xe(rr,NT);rr.prototype.Ba=function(){it(this.g,"a")};rr.prototype.Aa=function(t){it(this.g,new OT(t))};rr.prototype.za=function(t){it(this.g,new DT)};rr.prototype.ya=function(){it(this.g,"b")};function FO(){this.blockSize=-1}function tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(tn,FO);tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ru(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)ru(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){ru(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){ru(this,s),i=0;break}}this.h=i,this.i+=e};tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var UO={};function cf(t){return-128<=t&&128>t?zN(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return Ci;if(0>t)return et(pn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ph;return new Te(e,0)}function xT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return et(xT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),s=Ci,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=pn(Math.pow(e,r)),s=s.R(r).add(pn(o))):(s=s.R(n),s=s.add(pn(o)))}return s}var ph=4294967296,Ci=cf(0),gh=cf(1),em=cf(16777216);M=Te.prototype;M.ea=function(){if(Ft(this))return-et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ph+s)*e,e*=ph}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xn(this))return"0";if(Ft(this))return"-"+et(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,s="";;){var i=hl(n,e).g;n=ul(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,xn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}M.X=function(t){return t=ul(this,t),Ft(t)?-1:xn(t)?0:1};function et(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(gh)}M.abs=function(){return Ft(this)?et(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function ul(t,e){return t.add(et(e))}M.R=function(t){if(xn(this)||xn(t))return Ci;if(Ft(this))return Ft(t)?et(this).R(et(t)):et(et(this).R(t));if(Ft(t))return et(this.R(et(t)));if(0>this.X(em)&&0>t.X(em))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,ha(n,2*s+2*i),n[2*s+2*i+1]+=r*l,ha(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,ha(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,ha(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function ha(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function mr(t,e){this.g=t,this.h=e}function hl(t,e){if(xn(e))throw Error("division by zero");if(xn(t))return new mr(Ci,Ci);if(Ft(t))return e=hl(et(t),e),new mr(et(e.g),et(e.h));if(Ft(e))return e=hl(t,et(e)),new mr(et(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gh,s=e;0>=s.X(t);)n=tm(n),s=tm(s);var i=ui(n,1),r=ui(s,1);for(s=ui(s,2),n=ui(n,2);!xn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=ui(s,1),n=ui(n,1)}return e=ul(t,i.R(e)),new mr(i,e)}for(i=Ci;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=pn(n),o=r.R(e);Ft(o)||0<o.X(t);)n-=s,r=pn(n),o=r.R(e);xn(r)&&(r=gh),i=i.add(r),t=ul(t,o)}return new mr(i,t)}M.gb=function(t){return hl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function tm(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function ui(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Te(i,t.h)}cl.prototype.createWebChannel=cl.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;nc.NO_ERROR=0;nc.TIMEOUT=8;nc.HTTP_ERROR=6;JE.COMPLETE="complete";ZE.EventType=xo;xo.OPEN="a";xo.CLOSE="b";xo.ERROR="c";xo.MESSAGE="d";Ye.prototype.listen=Ye.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;tn.prototype.digest=tn.prototype.l;tn.prototype.reset=tn.prototype.reset;tn.prototype.update=tn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=pn;Te.fromString=xT;var BO=function(){return new cl},$O=function(){return tc()},ou=nc,jO=JE,HO=ni,nm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},WO=Vo,da=ZE,qO=Le,KO=tn,Si=Te;const sm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Eo("@firebase/firestore");function im(){return Qs.logLevel}function $(t,...e){if(Qs.logLevel<=fe.DEBUG){const n=e.map(uf);Qs.debug(`Firestore (${or}): ${t}`,...n)}}function $n(t,...e){if(Qs.logLevel<=fe.ERROR){const n=e.map(uf);Qs.error(`Firestore (${or}): ${t}`,...n)}}function Vi(t,...e){if(Qs.logLevel<=fe.WARN){const n=e.map(uf);Qs.warn(`Firestore (${or}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Ne(t,e){t||Y()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class GO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QO{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new MT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new at(e)}}class YO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new YO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new JO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=eD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new He(0,0))}static max(){return new Z(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ho?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ho{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const tD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends ho{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return tD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(xe.fromString(e))}static fromName(e){return new Q(xe.fromString(e).popFirst(5))}static empty(){return new Q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new xe(e.slice()))}}function nD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new ms(i,Q.empty(),e)}function sD(t){return new ms(t.readTime,t.key,-1)}class ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ms(Z.min(),Q.empty(),-1)}static max(){return new ms(Z.max(),Q.empty(),-1)}}function iD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==rD)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}hf.ae=-1;function uc(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function aD(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}}class fa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Je.RED,this.left=i??Je.EMPTY,this.right=r??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new om(this.data.getIterator())}getIteratorFrom(e){return new om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new mt(dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class FT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new FT("Invalid base64 string: "+r):r}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const lD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=lD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */function df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ff(t){const e=t.mapValue.fields.__previous_value__;return df(e)?ff(e):e}function fo(t){const e=_s(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:uD(t)?9007199254740991:10:Y()}function In(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=_s(i.timestampValue),a=_s(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Ys(i.bytesValue).isEqual(Ys(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return $e(i.geoPointValue.latitude)===$e(r.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return $e(i.integerValue)===$e(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=$e(i.doubleValue),a=$e(r.doubleValue);return o===a?dl(o)===dl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(rm(o)!==rm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!In(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function go(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=Xs(t),s=Xs(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=$e(r.integerValue||r.doubleValue),l=$e(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return am(t.timestampValue,e.timestampValue);case 4:return am(fo(t),fo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Ys(r),l=Ys(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ge($e(r.latitude),$e(o.latitude));return a!==0?a:ge($e(r.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Ui(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===pa.mapValue&&o===pa.mapValue)return 0;if(r===pa.mapValue)return 1;if(o===pa.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const f=Ui(a[l[h]],c[u[h]]);if(f!==0)return f}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function am(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=_s(t),s=_s(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function Bi(t){return mh(t)}function mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=_s(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=mh(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${mh(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function _h(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function lm(t){return!!t&&"nullValue"in t}function cm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function Lr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Lr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lr(n)}setAll(e){let n=dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Lr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){si(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ct(Lr(this.value))}}function UT(t){const e=[];return si(t.fields,(n,s)=>{const i=new dt([n]);if(Pa(s)){const r=UT(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Z.min(),Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,i){return new ut(e,1,n,Z.min(),s,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Z.min(),Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Z.min(),Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fl{constructor(e,n){this.position=e,this.inclusive=n}}function um(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Ui(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function hm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vr{constructor(e,n="asc"){this.field=e,this.dir=n}}function hD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class BT{}class qe extends BT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fD(e,n,s):n==="array-contains"?new mD(e,s):n==="in"?new _D(e,s):n==="not-in"?new yD(e,s):n==="array-contains-any"?new vD(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pD(e,s):new gD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ui(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(Ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends BT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new wn(e,n)}matches(e){return $T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $T(t){return t.op==="and"}function jT(t){return dD(t)&&$T(t)}function dD(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function yh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(jT(t))return t.filters.map(e=>yh(e)).join(",");{const e=t.filters.map(n=>yh(n)).join(",");return`${t.op}(${e})`}}function HT(t,e){return t instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&In(s.value,i.value)}(t,e):t instanceof wn?function(s,i){return i instanceof wn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&HT(o,i.filters[a]),!0):!1}(t,e):void Y()}function WT(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(WT).join(" ,")+"}"}(t):"Filter"}class fD extends qe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class pD extends qe{constructor(e,n){super(e,"in",n),this.keys=qT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gD extends qe{constructor(e,n){super(e,"not-in",n),this.keys=qT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class mD extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&go(n.arrayValue,this.value)}}class _D extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class yD extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!go(this.value.arrayValue,n)}}class vD extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>go(this.value.arrayValue,s))}}/**
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
 */class ED{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function dm(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ED(t,e,n,s,i,r,o)}function gf(t){const e=ne(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bi(s)).join(",")),e.he=n}return e.he}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hm(t.startAt,e.startAt)&&hm(t.endAt,e.endAt)}function vh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function TD(t,e,n,s,i,r,o,a){return new hc(t,e,n,s,i,r,o,a)}function dc(t){return new hc(t)}function fm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ID(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function AD(t){return t.collectionGroup!==null}function bi(t){const e=ne(t);if(e.Pe===null){e.Pe=[];const n=wD(e),s=ID(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new Vr(n)),e.Pe.push(new Vr(dt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Vr(dt.keyField(),r))}}}return e.Pe}function jn(t){const e=ne(t);if(!e.Ie)if(e.limitType==="F")e.Ie=dm(e.path,e.collectionGroup,bi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of bi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Vr(r.field,o))}const s=e.endAt?new fl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fl(e.startAt.position,e.startAt.inclusive):null;e.Ie=dm(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function Eh(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return mf(jn(t),jn(e))&&t.limitType===e.limitType}function KT(t){return`${gf(jn(t))}|lt:${t.limitType}`}function Th(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>WT(i)).join(", ")}]`),uc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${s})`}(jn(t))}; limitType=${t.limitType})`}function pc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):Q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of bi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=um(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,bi(s),i)||s.endAt&&!function(o,a,l){const c=um(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,bi(s),i))}(t,e)}function RD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zT(t){return(e,n)=>{let s=!1;for(const i of bi(t)){const r=CD(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function CD(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Ui(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return VT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new Me(Q.comparator);function Hn(){return SD}const GT=new Me(Q.comparator);function Ar(...t){let e=GT;for(const n of t)e=e.insert(n.key,n);return e}function QT(t){let e=GT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vs(){return Fr()}function YT(){return Fr()}function Fr(){return new ar(t=>t.toString(),(t,e)=>t.isEqual(e))}const bD=new Me(Q.comparator),PD=new mt(Q.comparator);function ae(...t){let e=PD;for(const n of t)e=e.add(n);return e}const kD=new mt(ge);function ND(){return kD}/**
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
 */function XT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function JT(t){return{integerValue:""+t}}function OD(t,e){return aD(e)?JT(e):XT(t,e)}/**
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
 */class gc{constructor(){this._=void 0}}function DD(t,e,n){return t instanceof pl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&df(r)&&(r=ff(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof $i?eI(t,e):t instanceof mo?tI(t,e):function(i,r){const o=ZT(i,r),a=pm(o)+pm(i.Te);return _h(o)&&_h(i.Te)?JT(a):XT(i.serializer,a)}(t,e)}function xD(t,e,n){return t instanceof $i?eI(t,e):t instanceof mo?tI(t,e):n}function ZT(t,e){return t instanceof gl?function(s){return _h(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class pl extends gc{}class $i extends gc{constructor(e){super(),this.elements=e}}function eI(t,e){const n=nI(e);for(const s of t.elements)n.some(i=>In(i,s))||n.push(s);return{arrayValue:{values:n}}}class mo extends gc{constructor(e){super(),this.elements=e}}function tI(t,e){let n=nI(e);for(const s of t.elements)n=n.filter(i=>!In(i,s));return{arrayValue:{values:n}}}class gl extends gc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function pm(t){return $e(t.integerValue||t.doubleValue)}function nI(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.field=e,this.transform=n}}function LD(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof $i&&i instanceof $i||s instanceof mo&&i instanceof mo?Fi(s.elements,i.elements,In):s instanceof gl&&i instanceof gl?In(s.Te,i.Te):s instanceof pl&&i instanceof pl}(t.transform,e.transform)}class VD{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function sI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rI(t.key,_n.none()):new jo(t.key,t.data,_n.none());{const n=t.data,s=Ct.empty();let i=new mt(dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Is(t.key,s,new Nt(i.toArray()),_n.none())}}function FD(t,e,n){t instanceof jo?function(i,r,o){const a=i.value.clone(),l=mm(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(i,r,o){if(!ka(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=mm(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(iI(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ur(t,e,n,s){return t instanceof jo?function(r,o,a,l){if(!ka(r.precondition,o))return a;const c=r.value.clone(),u=_m(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(r,o,a,l){if(!ka(r.precondition,o))return a;const c=_m(r.fieldTransforms,l,o),u=o.data;return u.setAll(iI(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return ka(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function UD(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ZT(s.transform,i||null);r!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,r))}return n||null}function gm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Fi(s,i,(r,o)=>LD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends mc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Is extends mc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function iI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function mm(t,e,n){const s=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,xD(o,a,n[i]))}return s}function _m(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,DD(r,o,e))}return s}class rI extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BD extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&FD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ur(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ur(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=YT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=sI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,s)=>gm(n,s))&&Fi(this.baseMutations,e.baseMutations,(n,s)=>gm(n,s))}}class _f{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ne(e.mutations.length===s.length);let i=function(){return bD}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new _f(e,n,s,i)}}/**
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
 */class jD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ce;function WD(t){switch(t){default:return Y();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function oI(t){if(t===void 0)return $n("GRPC error has no .code"),C.UNKNOWN;switch(t){case Be.OK:return C.OK;case Be.CANCELLED:return C.CANCELLED;case Be.UNKNOWN:return C.UNKNOWN;case Be.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Be.INTERNAL:return C.INTERNAL;case Be.UNAVAILABLE:return C.UNAVAILABLE;case Be.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Be.NOT_FOUND:return C.NOT_FOUND;case Be.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Be.ABORTED:return C.ABORTED;case Be.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Be.DATA_LOSS:return C.DATA_LOSS;default:return Y()}}(ce=Be||(Be={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class yf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ga}static getOrCreateInstance(){return ga===null&&(ga=new yf),ga}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ga=null;/**
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
 */function qD(){return new TextEncoder}/**
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
 */const KD=new Si([4294967295,4294967295],0);function ym(t){const e=qD().encode(t),n=new KO;return n.update(e),new Uint8Array(n.digest())}function vm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Si([n,s],0),new Si([i,r],0)]}class vf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rr(`Invalid padding: ${n}`);if(s<0)throw new Rr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Si.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(Si.fromNumber(s)));return i.compare(KD)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=ym(e),[s,i]=vm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new vf(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=ym(e),[s,i]=vm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _c(Z.min(),i,new Me(ge),Hn(),ae())}}class Ho{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ho(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class aI{constructor(e,n){this.targetId=e,this.pe=n}}class lI{constructor(e,n,s=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Em{constructor(){this.ye=0,this.we=Im(),this.Se=vt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ae(),n=ae(),s=ae();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Ho(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=Im()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class zD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Hn(),this.$e=Tm(),this.Ue=new Me(ge)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(vh(a))if(r===0){const l=new Q(a.path);this.ze(i,l,ut.newNoDocument(l,Z.min()))}else Ne(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=yf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var _,v,T,R,S,w;const B={localCacheCount:f,existenceFilterCount:m.count},j=m.unchangedNames;return j&&(B.bloomFilter={applied:h===0,hashCount:(_=j==null?void 0:j.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(R=(T=(v=j==null?void 0:j.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&R!==void 0?R:0,padding:(w=(S=j==null?void 0:j.bits)===null||S===void 0?void 0:S.padding)!==null&&w!==void 0?w:0},d&&(B.bloomFilter.mightContain=d)),B}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Ys(r).toUint8Array()}catch(h){if(h instanceof FT)return Vi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new vf(l,o,a)}catch(h){return Vi(h instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&vh(a.target)){const l=new Q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,ut.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=ae();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new _c(e,n,this.Ue,this.Ke,s);return this.Ke=Hn(),this.$e=Tm(),this.Ue=new Me(ge),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Em,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new mt(ge),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Em),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Tm(){return new Me(Q.comparator)}function Im(){return new Me(Q.comparator)}const GD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),YD=(()=>({and:"AND",or:"OR"}))();class XD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JD(t,e){return ml(t,e.toTimestamp())}function yn(t){return Ne(!!t),Z.fromTimestamp(function(n){const s=_s(n);return new He(s.seconds,s.nanos)}(t))}function Ef(t,e){return function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function uI(t){const e=xe.fromString(t);return Ne(pI(e)),e}function wh(t,e){return Ef(t.databaseId,e.path)}function au(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new W(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(hI(n))}function Ah(t,e){return Ef(t.databaseId,e)}function ZD(t){const e=uI(t);return e.length===4?xe.emptyPath():hI(e)}function Rh(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wm(t,e,n){return{name:wh(t,e),fields:n.value.mapValue.fields}}function e1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?C.UNKNOWN:oI(c.code);return new W(u,c.message||"")}(o);n=new lI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=au(t,s.document.name),r=yn(s.document.updateTime),o=s.document.createTime?yn(s.document.createTime):Z.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=ut.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Na(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=au(t,s.document),r=s.readTime?yn(s.readTime):Z.min(),o=ut.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=au(t,s.document),r=s.removedTargetIds||[];n=new Na([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new HD(i,r),a=s.targetId;n=new aI(a,o)}}return n}function t1(t,e){let n;if(e instanceof jo)n={update:wm(t,e.key,e.value)};else if(e instanceof rI)n={delete:wh(t,e.key)};else if(e instanceof Is)n={update:wm(t,e.key,e.data),updateMask:u1(e.fieldMask)};else{if(!(e instanceof BD))return Y();n={verify:wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:JD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function n1(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?yn(i.updateTime):yn(r);return o.isEqual(Z.min())&&(o=yn(r)),new VD(o,i.transformResults||[])}(n,e))):[]}function s1(t,e){return{documents:[Ah(t,e.path)]}}function i1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ah(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ah(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return fI(wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:hi(h.field),direction:a1(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Ih(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function r1(t){let e=ZD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=dI(h);return d instanceof wn&&jT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Vr(di(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,uc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new fl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new fl(f,d)}(n.endAt)),TD(e,i,o,r,a,"F",l,c)}function o1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=di(n.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=di(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=di(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(s=>dI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function a1(t){return GD[t]}function l1(t){return QD[t]}function c1(t){return YD[t]}function hi(t){return{fieldPath:t.canonicalString()}}function di(t){return dt.fromServerFormat(t.fieldPath)}function fI(t){return t instanceof qe?function(n){if(n.op==="=="){if(cm(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NAN"}};if(lm(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cm(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NOT_NAN"}};if(lm(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(n.field),op:l1(n.op),value:n.value}}}(t):t instanceof wn?function(n){const s=n.getFilters().map(i=>fI(i));return s.length===1?s[0]:{compositeFilter:{op:c1(n.op),filters:s}}}(t):Y()}function u1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,i,r=Z.min(),o=Z.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.ct=e}}function d1(t){const e=r1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
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
 */class f1{constructor(){this.sn=new p1}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ms.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ms.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class p1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new mt(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new mt(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new ji(0)}static On(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.changes=new ar(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Ur(s.mutation,i,Nt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=Vs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ar();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Hn();const o=Fr(),a=function(){return Fr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Is)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ur(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new m1(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fr();let i=new Me((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Nt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ae()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=YT();u.forEach(d=>{if(!r.has(d)){const f=sI(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Vs());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:QT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Ar();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ar();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,h){return new hc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ut.newInvalidDocument(c)))});let o=Ar();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Ur(c.mutation,l,Nt.empty(),He.now()),pc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class y1{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:d1(i.bundledQuery),readTime:yn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class v1{constructor(){this.overlays=new Me(Q.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vs();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Vs(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Vs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Vs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new jD(n,s));let r=this.cr.get(n);r===void 0&&(r=ae(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.lr=new mt(ze.hr),this.Pr=new mt(ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new ze(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new xe([])),s=new ze(n,e),i=new ze(n,e+1);let r=ae();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||ge(e.mr,n.mr)}static Ir(e,n){return ge(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new mt(ze.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $D(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new mt(ge);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),k.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new ze(new Q(r),0);let a=new mt(ge);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return k.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new ze(n,0),i=this.pr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.Dr=e,this.docs=function(){return new Me(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=Hn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ut.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Hn();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iD(sD(u),s)<=0||(i.has(u.key)||pc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new I1(this)}getSize(e){return k.resolve(this.size)}}class I1 extends g1{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.persistence=e,this.Cr=new ar(n=>gf(n),mf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Tf,this.targetCount=0,this.Or=ji.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.Nr={},this.overlays={},this.Br=new hf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new w1(this),this.indexManager=new f1,this.remoteDocumentCache=function(i){return new T1(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new h1(n),this.Qr=new y1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new v1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new E1(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new R1(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class R1 extends oD{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Wr=new Tf,this.Gr=null}static zr(e){return new If(e)}get jr(){if(this.Gr)return this.Gr;throw Y()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,s=>{const i=Q.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,Z.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new wf(e,n.fromCache,s,i)}}/**
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
 */class C1{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(fm(n))return k.resolve(null);let s=jn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Eh(n,null,"F"),s=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Eh(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return fm(n)||i.isEqual(Z.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(im()<=fe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Th(n)),this.ji(e,o,n,nD(i,-1)))})}Gi(e,n){let s=new mt(zT(e));return n.forEach((i,r)=>{pc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return im()<=fe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Th(n)),this.Ki.getDocumentsMatchingQuery(e,n,ms.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class S1{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(ge),this.Yi=new ar(r=>gf(r),mf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function b1(t,e,n,s){return new S1(t,e,n,s)}async function gI(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ae();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function P1(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(_=>{const v=c.docVersions.get(m);Ne(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function mI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function k1(t,e){const n=ne(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(vt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(_,v,T){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Hn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(N1(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(Z.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function N1(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Hn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function O1(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function D1(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new rs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Ch(t,e,n){const s=ne(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Am(t,e,n){const s=ne(t);let i=Z.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ne(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?r:ae())).next(a=>(x1(s,RD(e),a),{documents:a,ss:r})))}function x1(t,e,n){let s=t.Zi.get(e)||Z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class Rm{constructor(){this.activeTargetIds=ND()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M1{constructor(){this.Hs=new Rm,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Rm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class L1{Ys(e){}shutdown(){}}/**
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
 */class Cm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ma=null;function lu(){return ma===null?ma=function(){return 268435456+Math.round(2147483648*Math.random())}():ma++,"0x"+ma.toString(16)}/**
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
 */const V1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class U1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=lu(),l=this.mo(n,s);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Vi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+or}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=V1[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=lu();return new Promise((o,a)=>{const l=new qO;l.setWithCredentials(!0),l.listenOnce(jO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ou.NO_ERROR:const u=l.getResponseJson();$(ot,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case ou.TIMEOUT:$(ot,`RPC '${e}' ${r} timed out`),a(new W(C.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const h=l.getStatus();if($(ot,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(T)>=0?T:C.UNKNOWN}(f.status);a(new W(m,f.message))}else a(new W(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(C.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(ot,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(ot,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=lu(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BO(),a=$O(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new WO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");$(ot,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new F1({so:v=>{f?$(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||($(ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),$(ot,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,T,R)=>{v.listen(T,S=>{try{R(S)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,da.EventType.OPEN,()=>{f||$(ot,`RPC '${e}' stream ${i} transport opened.`)}),_(h,da.EventType.CLOSE,()=>{f||(f=!0,$(ot,`RPC '${e}' stream ${i} transport closed`),m.Po())}),_(h,da.EventType.ERROR,v=>{f||(f=!0,Vi(ot,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new W(C.UNAVAILABLE,"The operation could not be completed")))}),_(h,da.EventType.MESSAGE,v=>{var T;if(!f){const R=v.data[0];Ne(!!R);const S=R,w=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(w){$(ot,`RPC '${e}' stream ${i} received error:`,w);const B=w.status;let j=function(ie){const re=Be[ie];if(re!==void 0)return oI(re)}(B),te=w.message;j===void 0&&(j=C.INTERNAL,te="Unknown error status: "+B+" with message "+w.message),f=!0,m.Po(new W(j,te)),h.close()}else $(ot,`RPC '${e}' stream ${i} received:`,R),m.Io(R)}}),_(a,HO.STAT_EVENT,v=>{v.stat===nm.PROXY?$(ot,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===nm.NOPROXY&&$(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function cu(){return typeof document<"u"?document:null}/**
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
 */function yc(t){return new XD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new _I(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new W(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B1 extends yI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=e1(this.serializer,e),s=function(r){if(!("targetChange"in r))return Z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?yn(o.readTime):Z.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=vh(l)?{documents:s1(r,l)}:{query:i1(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cI(r,o.resumeToken);const c=Ih(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=ml(r,o.snapshotVersion.toTimestamp());const c=Ih(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=o1(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.Ho(n)}}class $1 extends yI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=n1(e.writeResults,e.commitTime),s=yn(e.commitTime);return this.listener.u_(s,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Rh(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>t1(this.serializer,s))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new W(C.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(C.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(C.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class H1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?($n(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{ii(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.y_.add(4),await Wo(c),c.b_.set("Unknown"),c.y_.delete(4),await vc(c)}(this))})}),this.b_=new H1(s,i)}}async function vc(t){if(ii(t))for(const e of t.w_)await e(!0)}async function Wo(t){for(const e of t.w_)await e(!1)}function vI(t,e){const n=ne(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Cf(n)?Rf(n):lr(n).Uo()&&Af(n,e))}function EI(t,e){const n=ne(t),s=lr(n);n.p_.delete(e),s.Uo()&&TI(n,e),n.p_.size===0&&(s.Uo()?s.zo():ii(n)&&n.b_.set("Unknown"))}function Af(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lr(t).i_(e)}function TI(t,e){t.D_.Be(e),lr(t).s_(e)}function Rf(t){t.D_=new zD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),lr(t).start(),t.b_.A_()}function Cf(t){return ii(t)&&!lr(t).$o()&&t.p_.size>0}function ii(t){return ne(t).y_.size===0}function II(t){t.D_=void 0}async function q1(t){t.p_.forEach((e,n)=>{Af(t,e)})}async function K1(t,e){II(t),Cf(t)?(t.b_.m_(e),Rf(t)):t.b_.set("Unknown")}async function z1(t,e,n){if(t.b_.set("Online"),e instanceof lI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _l(t,s)}else if(e instanceof Na?t.D_.We(e):e instanceof aI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Z.min()))try{const s=await mI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(vt.EMPTY_BYTE_STRING,u.snapshotVersion)),TI(r,l);const h=new rs(u.target,l,c,u.sequenceNumber);Af(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await _l(t,s)}}async function _l(t,e,n){if(!$o(e))throw e;t.y_.add(1),await Wo(t),t.b_.set("Offline"),n||(n=()=>mI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await vc(t)})}function wI(t,e){return e().catch(n=>_l(t,n,e))}async function Ec(t){const e=ne(t),n=ys(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;G1(e);)try{const i=await O1(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,Q1(e,i)}catch(i){await _l(e,i)}AI(e)&&RI(e)}function G1(t){return ii(t)&&t.g_.length<10}function Q1(t,e){t.g_.push(e);const n=ys(t);n.Uo()&&n.__&&n.a_(e.mutations)}function AI(t){return ii(t)&&!ys(t).$o()&&t.g_.length>0}function RI(t){ys(t).start()}async function Y1(t){ys(t).l_()}async function X1(t){const e=ys(t);for(const n of t.g_)e.a_(n.mutations)}async function J1(t,e,n){const s=t.g_.shift(),i=_f.from(s,e,n);await wI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ec(t)}async function Z1(t,e){e&&ys(t).__&&await async function(s,i){if(function(o){return WD(o)&&o!==C.ABORTED}(i.code)){const r=s.g_.shift();ys(s).Go(),await wI(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ec(s)}}(t,e),AI(t)&&RI(t)}async function Sm(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ii(n);n.y_.add(3),await Wo(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await vc(n)}async function ex(t,e){const n=ne(t);e?(n.y_.delete(2),await vc(n)):e||(n.y_.add(2),await Wo(n),n.b_.set("Unknown"))}function lr(t){return t.v_||(t.v_=function(n,s,i){const r=ne(n);return r.P_(),new B1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:q1.bind(null,t),uo:K1.bind(null,t),r_:z1.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Cf(t)?Rf(t):t.b_.set("Unknown")):(await t.v_.stop(),II(t))})),t.v_}function ys(t){return t.C_||(t.C_=function(n,s,i){const r=ne(n);return r.P_(),new $1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:Y1.bind(null,t),uo:Z1.bind(null,t),c_:X1.bind(null,t),u_:J1.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ec(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Sf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if($n("AsyncQueue",`${e}: ${t}`),$o(t))return new W(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Q.comparator(n.key,s.key):(n,s)=>Q.comparator(n.key,s.key),this.keyedMap=Ar(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Pi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.F_=new Me(Q.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):Y():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hi(e,n,Pi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.x_=void 0,this.listeners=[]}}class nx{constructor(){this.queries=new ar(e=>KT(e),fc),this.onlineState="Unknown",this.O_=new Set}}async function Pf(t,e){const n=ne(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new tx),i)try{r.x_=await n.onListen(s)}catch(o){const a=bf(o,`Initialization of query '${Th(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&Nf(n)}async function kf(t,e){const n=ne(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function sx(t,e){const n=ne(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&Nf(n)}function ix(t,e,n){const s=ne(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Nf(t){t.O_.forEach(e=>{e.next()})}class Of{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Hi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.key=e}}class SI{constructor(e){this.key=e}}class rx{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ae(),this.mutatedKeys=ae(),this.na=zT(e),this.ra=new Pi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new bm,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=pc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Hi(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new bm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ae(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new SI(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new CI(s))}),n}ha(e){this.X_=e.ss,this.ta=ae();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Hi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class ox{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ax{constructor(e){this.key=e,this.Ia=!1}}class lx{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ar(a=>KT(a),fc),this.da=new Map,this.Aa=new Set,this.Ra=new Me(Q.comparator),this.Va=new Map,this.ma=new Tf,this.fa={},this.ga=new Map,this.pa=ji.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function cx(t,e){const n=vx(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await D1(n.localStore,jn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ux(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&vI(n.remoteStore,o)}return i}async function ux(t,e,n,s,i){t.wa=(h,d,f)=>async function(_,v,T,R){let S=v.view.sa(T);S.zi&&(S=await Am(_.localStore,v.query,!1).then(({documents:j})=>v.view.sa(j,S)));const w=R&&R.targetChanges.get(v.targetId),B=v.view.applyChanges(S,_.isPrimaryClient,w);return km(_,v.targetId,B.ca),B.snapshot}(t,h,d,f);const r=await Am(t.localStore,e,!0),o=new rx(e,r.ss),a=o.sa(r.documents),l=Ho.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);km(t,n,c.ca);const u=new ox(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function hx(t,e){const n=ne(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!fc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ch(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),EI(n.remoteStore,s.targetId),Sh(n,s.targetId)}).catch(Bo)):(Sh(n,s.targetId),await Ch(n.localStore,s.targetId,!0))}async function dx(t,e,n){const s=Ex(t);try{const i=await function(o,a){const l=ne(o),c=He.now(),u=a.reduce((f,m)=>f.add(m.key),ae());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Hn(),_=ae();return l.Xi.getEntries(f,u).next(v=>{m=v,m.forEach((T,R)=>{R.isValidDocument()||(_=_.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const T=[];for(const R of a){const S=UD(R,h.get(R.key).overlayedDocument);S!=null&&T.push(new Is(R.key,S,UT(S.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:QT(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Me(ge)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await qo(s,i.changes),await Ec(s.remoteStore)}catch(i){const r=bf(i,"Failed to persist write");n.reject(r)}}async function bI(t,e){const n=ne(t);try{const s=await k1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Ne(o.Ia):i.removedDocuments.size>0&&(Ne(o.Ia),o.Ia=!1))}),await qo(n,s,e)}catch(s){await Bo(s)}}function Pm(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Nf(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fx(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Me(Q.comparator);o=o.insert(r,ut.newNoDocument(r,Z.min()));const a=ae().add(r),l=new _c(Z.min(),new Map,new Me(ge),o,a);await bI(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),Df(s)}else await Ch(s.localStore,e,!1).then(()=>Sh(s,e,n)).catch(Bo)}async function px(t,e){const n=ne(t),s=e.batch.batchId;try{const i=await P1(n.localStore,e);kI(n,s,null),PI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qo(n,i)}catch(i){await Bo(i)}}async function gx(t,e,n){const s=ne(t);try{const i=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);kI(s,e,n),PI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qo(s,i)}catch(i){await Bo(i)}}function PI(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function kI(t,e,n){const s=ne(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function Sh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||NI(t,s)})}function NI(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(EI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Df(t))}function km(t,e,n){for(const s of n)s instanceof CI?(t.ma.addReference(s.key,e),mx(t,s)):s instanceof SI?($("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||NI(t,s.key)):Y()}function mx(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(s),Df(t))}function Df(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new Q(xe.fromString(e)),s=t.pa.next();t.Va.set(s,new ax(n)),t.Ra=t.Ra.insert(n,s),vI(t.remoteStore,new rs(jn(dc(n.path)),s,"TargetPurposeLimboResolution",hf.ae))}}async function qo(t,e,n){const s=ne(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=wf.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!$o(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,_)}}}(s.localStore,r))}async function _x(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await gI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new W(C.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qo(n,s.ts)}}function yx(t,e){const n=ne(t),s=n.Va.get(e);if(s&&s.Ia)return ae().add(s.key);{let i=ae();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function vx(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fx.bind(null,e),e.Ta.r_=sx.bind(null,e.eventManager),e.Ta.Sa=ix.bind(null,e.eventManager),e}function Ex(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=px.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gx.bind(null,e),e}class Nm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return b1(this.persistence,new C1,e.initialUser,this.serializer)}createPersistence(e){return new A1(If.zr,this.serializer)}createSharedClientState(e){return new M1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_x.bind(null,this.syncEngine),await ex(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nx}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),s=function(r){return new U1(r)}(e.databaseInfo);return function(r,o,a,l){return new j1(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new W1(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pm(this.syncEngine,n,0),function(){return Cm.v()?new Cm:new L1}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new lx(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ne(n);$("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await Wo(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=LT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=bf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await gI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ax(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Sm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Sm(e.remoteStore,r)),t._onlineComponents=e}function wx(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ax(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wx(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new Nm)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await uu(t,new Nm);return t._offlineComponents}async function OI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Om(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Om(t,new Tx))),t._onlineComponents}function Rx(t){return OI(t).then(e=>e.syncEngine)}async function yl(t){const e=await OI(t),n=e.eventManager;return n.onListen=cx.bind(null,e.syncEngine),n.onUnlisten=hx.bind(null,e.syncEngine),n}function Cx(t,e,n={}){const s=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new xf({next:d=>{o.enqueueAndForget(()=>kf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(C.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Of(dc(a.path),u,{includeMetadataChanges:!0,W_:!0});return Pf(r,h)}(await yl(t),t.asyncQueue,e,n,s)),s.promise}function Sx(t,e,n={}){const s=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new xf({next:d=>{o.enqueueAndForget(()=>kf(r,h)),d.fromCache&&l.source==="server"?c.reject(new W(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Of(a,u,{includeMetadataChanges:!0,W_:!0});return Pf(r,h)}(await yl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function DI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e,n){if(!n)throw new W(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bx(t,e,n,s){if(e===!0&&s===!0)throw new W(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!Q.isDocumentKey(t))throw new W(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mm(t){if(Q.isDocumentKey(t))throw new W(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(t);throw new W(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Lm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new W(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new zO;switch(s.type){case"firstParty":return new XO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Dm.get(n);s&&($("ComponentProvider","Removing Datastore"),Dm.delete(n),s.terminate())}(this),Promise.resolve()}}function Px(t,e,n,s={}){var i;const r=(t=jt(t,Tc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=at.MOCK_USER;else{a=JA(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(c)}t._authCredentials=new GO(new MT(a,l))}}/**
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
 */class Ko{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ko(this.firestore,e,this._query)}}class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class ds extends Ko{constructor(e,n,s){super(e,n,dc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Q(e))}withConverter(e){return new ds(this.firestore,e,this._path)}}function uV(t,e,...n){if(t=yt(t),xI("collection","path",e),t instanceof Tc){const s=xe.fromString(e,...n);return Mm(s),new ds(t,null,s)}{if(!(t instanceof wt||t instanceof ds))throw new W(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return Mm(s),new ds(t.firestore,null,s)}}function hV(t,e,...n){if(t=yt(t),arguments.length===1&&(e=LT.V()),xI("doc","path",e),t instanceof Tc){const s=xe.fromString(e,...n);return xm(s),new wt(t,null,new Q(s))}{if(!(t instanceof wt||t instanceof ds))throw new W(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return xm(s),new wt(t.firestore,t instanceof ds?t.converter:null,new Q(s))}}/**
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
 */class kx{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new _I(this,"async_queue_retry"),this.Xa=()=>{const n=cu();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=cu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Vn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!$o(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw $n("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Sf.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&Y()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Vm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Js extends Tc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new kx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MI(this),this._firestoreClient.terminate()}}function Nx(t,e){const n=typeof t=="object"?t:cd(),s=typeof t=="string"?t:e||"(default)",i=ld(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=XA("firestore");r&&Px(i,...r)}return i}function Ic(t){return t._firestoreClient||MI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function MI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new cD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,DI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ix(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(vt.fromBase64String(e))}catch(n){throw new W(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ac{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=/^__.*__$/;class Dx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}class LI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Cc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return vl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(VI(this.uu)&&Ox.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class xx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||yc(e)}Ru(e,n,s,i=!1){return new Cc({uu:e,methodName:n,Au:s,path:dt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FI(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new xx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mx(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);Lf("Data must be an object, but it was:",o,s);const a=UI(s,o);let l,c;if(r.merge)l=new Nt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=bh(e,h,n);if(!o.contains(d))throw new W(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$I(u,d)||u.push(d)}l=new Nt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Dx(new Ct(a),l,c)}class Sc extends Ac{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sc}}function Lx(t,e,n){return new Cc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vx extends Ac{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=Lx(this,e,!0),s=this.Vu.map(r=>zo(r,n)),i=new $i(s);return new MD(e.path,i)}isEqual(e){return this===e}}function Fx(t,e,n,s){const i=t.Ru(1,e,n);Lf("Data must be an object, but it was:",i,s);const r=[],o=Ct.empty();si(s,(l,c)=>{const u=Vf(e,l,n);c=yt(c);const h=i.Iu(u);if(c instanceof Sc)r.push(u);else{const d=zo(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Nt(r);return new LI(o,a,i.fieldTransforms)}function Ux(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[bh(e,s,n)],l=[i];if(r.length%2!=0)throw new W(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(bh(e,r[d])),l.push(r[d+1]);const c=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!$I(c,a[d])){const f=a[d];let m=l[d];m=yt(m);const _=o.Iu(f);if(m instanceof Sc)c.push(f);else{const v=zo(m,_);v!=null&&(c.push(f),u.set(f,v))}}const h=new Nt(c);return new LI(u,h,o.fieldTransforms)}function zo(t,e){if(BI(t=yt(t)))return Lf("Unsupported field value:",e,t),UI(t,e);if(t instanceof Ac)return function(s,i){if(!VI(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=zo(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OD(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=He.fromDate(s);return{timestampValue:ml(i.serializer,r)}}if(s instanceof He){const r=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ml(i.serializer,r)}}if(s instanceof Rc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Wi)return{bytesValue:cI(i.serializer,s._byteString)};if(s instanceof wt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ef(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${Mf(s)}`)}(t,e)}function UI(t,e){const n={};return VT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(s,i)=>{const r=zo(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function BI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Rc||t instanceof Wi||t instanceof wt||t instanceof Ac)}function Lf(t,e,n){if(!BI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Mf(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function bh(t,e,n){if((e=yt(e))instanceof wc)return e._internalPath;if(typeof e=="string")return Vf(t,e);throw vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bx=new RegExp("[~\\*/\\[\\]]");function Vf(t,e,n){if(e.search(Bx)>=0)throw vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wc(...e.split("."))._internalPath}catch{throw vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new W(C.INVALID_ARGUMENT,a+t+l)}function $I(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $x(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $x extends jI{data(){return super.data()}}function HI(t,e){return typeof e=="string"?Vf(t,e):e instanceof wc?e._internalPath:e._delegate._internalPath}/**
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
 */function WI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jx{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return si(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Rc($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ff(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=_s(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);Ne(pI(s));const i=new po(s.get(1),s.get(3)),r=new Q(s.popFirst(5));return i.isEqual(n)||$n(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Hx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qI extends jI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(HI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oa extends qI{data(e={}){return super.data(e)}}class KI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Oa(this._firestore,this._userDataWriter,s.key,s,new Cr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Wx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Wx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function zI(t){t=jt(t,wt);const e=jt(t.firestore,Js);return Cx(Ic(e),t._key).then(n=>QI(e,t,n))}class Ff extends jx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function qx(t){t=jt(t,Ko);const e=jt(t.firestore,Js),n=Ic(e),s=new Ff(e);return WI(t._query),Sx(n,t._query).then(i=>new KI(e,s,t,i))}function dV(t,e,n){t=jt(t,wt);const s=jt(t.firestore,Js),i=Hx(t.converter,e,n);return GI(s,[Mx(FI(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function fV(t,e,n,...s){t=jt(t,wt);const i=jt(t.firestore,Js),r=FI(i);let o;return o=typeof(e=yt(e))=="string"||e instanceof wc?Ux(r,"updateDoc",t._key,e,n,s):Fx(r,"updateDoc",t._key,e),GI(i,[o.toMutation(t._key,_n.exists(!0))])}function Uf(t,...e){var n,s,i;t=yt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Vm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof wt)c=jt(t.firestore,Js),u=dc(t._key.path),l={next:h=>{e[o]&&e[o](QI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,Ko);c=jt(h.firestore,Js),u=h._query;const d=new Ff(c);l={next:f=>{e[o]&&e[o](new KI(c,d,h,f))},error:e[o+1],complete:e[o+2]},WI(t._query)}return function(d,f,m,_){const v=new xf(_),T=new Of(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>Pf(await yl(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>kf(await yl(d),T))}}(Ic(c),u,a,l)}function GI(t,e){return function(s,i){const r=new Vn;return s.asyncQueue.enqueueAndForget(async()=>dx(await Rx(s),i,r)),r.promise}(Ic(t),e)}function QI(t,e,n){const s=n.docs.get(e._key),i=new Ff(t);return new qI(t,i,e._key,s,new Cr(n.hasPendingWrites,n.fromCache),e.converter)}function pV(...t){return new Vx("arrayUnion",t)}(function(e,n=!0){(function(i){or=i})(vs),En(new Zt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Js(new QO(s.getProvider("auth-internal")),new ZO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Dt(sm,"4.1.0",e),Dt(sm,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebasestorage.googleapis.com",Kx="storageBucket",zx=2*60*1e3,Gx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Rn{constructor(e,n,s=0){super(hu(e),`Firebase Storage: ${n} (${hu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function hu(t){return"storage/"+t}function Qx(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(An.UNKNOWN,t)}function Yx(){return new Cn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xx(){return new Cn(An.CANCELED,"User canceled the upload/download.")}function Jx(t){return new Cn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function Zx(t){return new Cn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Fm(t){return new Cn(An.INVALID_ARGUMENT,t)}function XI(){return new Cn(An.APP_DELETED,"The Firebase app was deleted.")}function eM(t){return new Cn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(s.path==="")return s;throw Zx(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===YI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${i}/${v}`,"i"),S=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<S.length;w++){const B=S[w],j=B.regex.exec(e);if(j){const te=j[B.indices.bucket];let F=j[B.indices.path];F||(F=""),s=new Yt(te,F),B.postModify(s);break}}if(s==null)throw Jx(e);return s}}class tM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let m=!1;function _(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function sM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t){return t!==void 0}function Um(t,e,n,s){if(s<e)throw Fm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fm(`Invalid value for '${t}'. Expected ${n} or less.`)}function rM(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var El;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(El||(El={}));/**
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
 */function oM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new _a(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===El.NO_ERROR,l=r.getStatus();if(!a||oM(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===El.ABORT;s(!1,new _a(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new _a(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());iM(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Qx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?XI():Xx();o(l)}else{const l=Yx();o(l)}};this.canceled_?n(!1,new _a(!1,null,!0)):this.backoffId_=nM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _a{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function lM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dM(t,e,n,s,i,r,o=!0){const a=rM(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return uM(c,e),lM(c,n),cM(c,r),hM(c,s),new aM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Tl{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tl(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pM(this._location.path)}get storage(){return this._service}get parent(){const e=fM(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Tl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eM(e)}}function Bm(t,e){const n=e==null?void 0:e[Kx];return n==null?null:Yt.makeFromBucketSpec(n,t)}class gM{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=YI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zx,this._maxUploadRetryTime=Gx,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=Bm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Bm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Um("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Um("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new tM(XI());{const o=dM(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const $m="@firebase/storage",jm="0.11.2";/**
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
 */const mM="storage";function _M(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gM(n,s,i,e,vs)}function yM(){En(new Zt(mM,_M,"PUBLIC").setMultipleInstances(!0)),Dt($m,jm,""),Dt($m,jm,"esm2017")}yM();const du=new WeakMap;function JI(t,e){return du.has(e)||du.set(e,t||{f:{},r:{},s:{},u:{}}),du.get(e)}function vM(t,e,n,s){if(!t)return n;const[i,r]=ZI(t);if(!i)return n;const o=JI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function EM(t,e,n,s){if(!t)return;const[i,r]=ZI(t);if(!i)return;const o=JI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(un),a}function ZI(t){return Kb(t)||zb(t)?["f",t.path]:Gb(t)?["r",t.toString()]:Qb(t)?["s",t.toString()]:[]}const fu=new WeakMap;function TM(t,e,n){const s=Ro();fu.has(s)||fu.set(s,new Map);const i=fu.get(s),r=EM(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):un}const IM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Ph(t,e,n,s){if(!Wb(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof He||m instanceof Rc)h[f]=m;else if(vd(m)){const _=c+f;h[f]=_ in n?l[f]:m.path,d[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[f][_]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Zs(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Bf={reset:!1,wait:!0,maxRefDepth:2,converter:IM,snapshotOptions:{serverTimestamps:"estimate"}};function Il(t){for(const e in t)t[e].unsub()}function kh(t,e,n,s,i,r,o,a,l){const[c,u]=Ph(s.data(t.snapshotOptions),yd(e,n),i,t);r.set(e,n,c),Nh(t,e,n,i,u,r,o,a,l)}function wM({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=un;return a.once?zI(t).then(u=>{u.exists()?kh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Uf(t,u=>{u.exists()?kh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Il(l)}}function Nh(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const v=s[_],T=i[_],R=`${n}.${_}`;if(f[R]=!0,v)if(v.path!==T.path)v.unsub();else return;s[_]={data:()=>yd(e,R),unsub:wM({ref:T,target:e,path:R,depth:o,ops:r,resolve:m.bind(null,R),reject:l},t),path:T.path}})}function AM(t,e,n,s,i,r){const o=Object.assign({},Bf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Mn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,_=un;const v=[],T={added:({newIndex:S,doc:w})=>{v.splice(S,0,Object.create(null));const B=v[S],[j,te]=Ph(w.data(l),void 0,B,o);n.add(Ze(d),S,j),Nh(o,d,`${h}.${S}`,B,te,n,0,s.bind(null,w),i)},modified:({oldIndex:S,newIndex:w,doc:B})=>{const j=Ze(d),te=v[S],F=j[S],[ie,re]=Ph(B.data(l),F,te,o);v.splice(w,0,te),n.remove(j,S),n.add(j,w,ie),Nh(o,d,`${h}.${w}`,te,re,n,0,s,i)},removed:({oldIndex:S})=>{const w=Ze(d);n.remove(w,S),Il(v.splice(S,1)[0])}};function R(S){const w=S.docChanges(a);if(!m&&w.length){m=!0;let B=0;const j=w.length,te=Object.create(null);for(let F=0;F<j;F++)te[w[F].doc.id]=!0;s=F=>{F&&F.id in te&&++B>=j&&(c&&(n.set(t,h,Ze(d)),d=t),f(Ze(d)),s=un)}}w.forEach(B=>{T[B.type](B)}),w.length||(c&&(n.set(t,h,Ze(d)),d=t),s(Ze(d)))}return u?qx(e).then(R).catch(i):_=Uf(e,R,i),S=>{if(_(),S){const w=typeof S=="function"?S():[];n.set(t,h,w)}v.forEach(Il)}}function RM(t,e,n,s,i,r){const o=Object.assign({},Bf,r),a="value",l=Object.create(null);s=Yb(s,()=>yd(t,a));let c=un;function u(h){h.exists()?kh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?zI(e).then(u).catch(i):c=Uf(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Il(l)}}const Hm=Symbol();function ew(t,e){let n=un;const s=Object.assign({},Bf,e),i=Ze(t),r=s.target||Mn();Jb()&&(s.once=!0);const o=vM(i,s.ssrKey,Hm,Ro()),a=o!==Hm;a&&(r.value=o);let l=!a;const c=Mn(!1),u=Mn(),h=O_(),d=m_();let f=un;function m(){let T=Ze(t);const R=new Promise((S,w)=>{if(n(s.reset),!T)return n=un,S(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(vd(T)?RM:AM)(r,T,CM,S,w,s)}).catch(S=>(h.value===R&&(u.value=S),Promise.reject(S))).finally(()=>{h.value===R&&(c.value=!1)});h.value=R}let _=un;nt(t)&&(_=Ti(t,m)),m(),i&&(f=TM(h.value,i,s.ssrKey)),nd()&&J_(()=>h.value),d&&kw(v);function v(T=s.reset){_(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const CM={set:(t,e,n)=>jb(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function gV(t,e){return ew(t,{target:Mn([]),...e})}function mV(t,e){return ew(t,e)}function SM(t){return(e,n)=>{const s=Zb(e,n).run(()=>Mn(t));vv.set(e,s),tP(s,e)}}function _V(t){return $b?gv(Ro(t)):null}function bM(t,{firebaseApp:e,modules:n=[]}){t.provide(yv,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const PM=Symbol();var Wm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wm||(Wm={}));function kM(){const t=g_(!0),e=t.run(()=>Mn({}));let n=[],s=[];const i=zh({install(r){i._a=r,r.provide(PM,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!pb?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const tw=ky({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),yV=Nx(tw);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fi=typeof window<"u";function NM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function pu(t,e){const n={};for(const s in e){const i=e[s];n[s]=nn(i)?i.map(t):t(i)}return n}const Br=()=>{},nn=Array.isArray,OM=/\/$/,DM=t=>t.replace(OM,"");function gu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=VM(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function xM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function MM(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&qi(e.matched[s],n.matched[i])&&nw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LM(t[n],e[n]))return!1;return!0}function LM(t,e){return nn(t)?Km(t,e):nn(e)?Km(e,t):t===e}function Km(t,e){return nn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function VM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var _o;(function(t){t.pop="pop",t.push="push"})(_o||(_o={}));var $r;(function(t){t.back="back",t.forward="forward",t.unknown=""})($r||($r={}));function FM(t){if(!t)if(fi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DM(t)}const UM=/^[^#]+#/;function BM(t,e){return t.replace(UM,"#")+e}function $M(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bc=()=>({left:window.pageXOffset,top:window.pageYOffset});function jM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$M(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zm(t,e){return(history.state?history.state.position-e:-1)+t}const Oh=new Map;function HM(t,e){Oh.set(t,e)}function WM(t){const e=Oh.get(t);return Oh.delete(t),e}let qM=()=>location.protocol+"//"+location.host;function sw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),qm(l,"")}return qm(n,t)+s+i}function KM(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=sw(t,location),m=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=_?d.position-_.position:0}else s(f);i.forEach(T=>{T(n.value,m,{delta:v,type:_o.pop,direction:v?v>0?$r.forward:$r.back:$r.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:bc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Gm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?bc():null}}function zM(t){const{history:e,location:n}=window,s={value:sw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:qM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,Gm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,e.state,{forward:l,scroll:bc()});r(u.current,u,!0);const h=Ee({},Gm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function GM(t){t=FM(t);const e=zM(t),n=KM(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:t,go:s,createHref:BM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function QM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),GM(t)}function YM(t){return typeof t=="string"||t&&typeof t=="object"}function iw(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rw=Symbol("");var Qm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qm||(Qm={}));function Ki(t,e){return Ee(new Error,{type:t,[rw]:!0},e)}function Pn(t,e){return t instanceof Error&&rw in t&&(e==null||!!(t.type&e))}const Ym="[^/]+?",XM={sensitive:!1,strict:!1,start:!0,end:!0},JM=/[.+*?^${}()[\]/\\]/g;function ZM(t,e){const n=Ee({},XM,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(JM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:_,optional:v,regexp:T}=d;r.push({name:m,repeatable:_,optional:v});const R=T||Ym;if(R!==Ym){f+=10;try{new RegExp(`(${R})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+w.message)}}let S=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(S=v&&c.length<2?`(?:/${S})`:"/"+S),v&&(S+="?"),i+=S,f+=20,v&&(f+=-8),_&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:v}=f,T=m in c?c[m]:"";if(nn(T)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=nn(T)?T.join("/"):T;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function eL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tL(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=eL(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Xm(s))return 1;if(Xm(i))return-1}return i.length-s.length}function Xm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nL={type:0,value:""},sL=/[a-zA-Z0-9_]/;function iL(t){if(!t)return[[]];if(t==="/")return[[nL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:sL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function rL(t,e,n){const s=ZM(iL(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function oL(t,e){const n=[],s=new Map;e=e_({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=aL(u);m.aliasOf=d&&d.record;const _=e_(e,u),v=[m];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of S)v.push(Ee({},m,{components:d?d.record.components:m.components,path:w,aliasOf:d?d.record:m}))}let T,R;for(const S of v){const{path:w}=S;if(h&&w[0]!=="/"){const B=h.record.path,j=B[B.length-1]==="/"?"":"/";S.path=h.record.path+(w&&j+w)}if(T=rL(S,h,_),d?d.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),f&&u.name&&!Zm(T)&&o(u.name)),m.children){const B=m.children;for(let j=0;j<B.length;j++)r(B[j],T,d&&d.children[j])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return R?()=>{o(R)}:Br}function o(u){if(iw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ow(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ki(1,{location:u});_=d.record.name,f=Ee(Jm(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Jm(u.params,d.keys.map(R=>R.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(R=>R.re.test(m)),d&&(f=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw Ki(1,{location:u,currentLocation:h});_=d.record.name,f=Ee({},h.params,u.params),m=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:m,params:f,matched:v,meta:cL(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Jm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Zm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cL(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function e_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ow(t,e){return e.children.some(n=>n===t||ow(t,n))}const aw=/#/g,uL=/&/g,hL=/\//g,dL=/=/g,fL=/\?/g,lw=/\+/g,pL=/%5B/g,gL=/%5D/g,cw=/%5E/g,mL=/%60/g,uw=/%7B/g,_L=/%7C/g,hw=/%7D/g,yL=/%20/g;function $f(t){return encodeURI(""+t).replace(_L,"|").replace(pL,"[").replace(gL,"]")}function vL(t){return $f(t).replace(uw,"{").replace(hw,"}").replace(cw,"^")}function Dh(t){return $f(t).replace(lw,"%2B").replace(yL,"+").replace(aw,"%23").replace(uL,"%26").replace(mL,"`").replace(uw,"{").replace(hw,"}").replace(cw,"^")}function EL(t){return Dh(t).replace(dL,"%3D")}function TL(t){return $f(t).replace(aw,"%23").replace(fL,"%3F")}function IL(t){return t==null?"":TL(t).replace(hL,"%2F")}function wl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(lw," "),o=r.indexOf("="),a=wl(o<0?r:r.slice(0,o)),l=o<0?null:wl(r.slice(o+1));if(a in e){let c=e[a];nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function t_(t){let e="";for(let n in t){const s=t[n];if(n=EL(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(s)?s.map(r=>r&&Dh(r)):[s&&Dh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const RL=Symbol(""),n_=Symbol(""),Pc=Symbol(""),jf=Symbol(""),xh=Symbol("");function _r(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ki(4,{from:n,to:e})):h instanceof Error?a(h):YM(h)?a(Ki(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function mu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(CL(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Zn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=NM(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zn(d,n,s,r,o)()}))}}return i}function CL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function s_(t){const e=Ot(Pc),n=Ot(jf),s=Kt(()=>e.resolve(Ze(t.to))),i=Kt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(qi.bind(null,u));if(d>-1)return d;const f=i_(l[c-2]);return c>1&&i_(u)===f&&h[h.length-1].path!==f?h.findIndex(qi.bind(null,l[c-2])):d}),r=Kt(()=>i.value>-1&&kL(n.params,s.value.params)),o=Kt(()=>i.value>-1&&i.value===n.matched.length-1&&nw(n.params,s.value.params));function a(l={}){return PL(l)?e[Ze(t.replace)?"replace":"push"](Ze(t.to)).catch(Br):Promise.resolve()}return{route:s,href:Kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const SL=vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:s_,setup(t,{slots:e}){const n=kl(s_(t)),{options:s}=Ot(Pc),i=Kt(()=>({[r_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[r_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:id("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),bL=SL;function PL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kL(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function i_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const r_=(t,e,n)=>t??e??n,NL=vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(xh),i=Kt(()=>t.route||s.value),r=Ot(n_,0),o=Kt(()=>{let c=Ze(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kt(()=>i.value.matched[o.value]);Ta(n_,Kt(()=>o.value+1)),Ta(RL,a),Ta(xh,i);const l=Mn();return Ti(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!qi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return o_(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=id(d,Ee({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return o_(n.default,{Component:v,route:c})||v}}});function o_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dw=NL;function OL(t){const e=oL(t.routes,t),n=t.parseQuery||wL,s=t.stringifyQuery||t_,i=t.history,r=_r(),o=_r(),a=_r(),l=O_(Xn);let c=Xn;fi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pu.bind(null,I=>""+I),h=pu.bind(null,IL),d=pu.bind(null,wl);function f(I,V){let D,q;return iw(I)?(D=e.getRecordMatcher(I),q=V):q=I,e.addRoute(q,D)}function m(I){const V=e.getRecordMatcher(I);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function T(I,V){if(V=Ee({},V||l.value),typeof I=="string"){const y=gu(n,I,V.path),E=e.resolve({path:y.path},V),A=i.createHref(y.fullPath);return Ee(y,E,{params:d(E.params),hash:wl(y.hash),redirectedFrom:void 0,href:A})}let D;if("path"in I)D=Ee({},I,{path:gu(n,I.path,V.path).path});else{const y=Ee({},I.params);for(const E in y)y[E]==null&&delete y[E];D=Ee({},I,{params:h(y)}),V.params=h(V.params)}const q=e.resolve(D,V),_e=I.hash||"";q.params=u(d(q.params));const p=xM(s,Ee({},I,{hash:vL(_e),path:q.path})),g=i.createHref(p);return Ee({fullPath:p,hash:_e,query:s===t_?AL(I.query):I.query||{}},q,{redirectedFrom:void 0,href:g})}function R(I){return typeof I=="string"?gu(n,I,l.value.path):Ee({},I)}function S(I,V){if(c!==I)return Ki(8,{from:V,to:I})}function w(I){return te(I)}function B(I){return w(Ee(R(I),{replace:!0}))}function j(I){const V=I.matched[I.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let q=typeof D=="function"?D(I):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=R(q):{path:q},q.params={}),Ee({query:I.query,hash:I.hash,params:"path"in q?{}:I.params},q)}}function te(I,V){const D=c=T(I),q=l.value,_e=I.state,p=I.force,g=I.replace===!0,y=j(D);if(y)return te(Ee(R(y),{state:typeof y=="object"?Ee({},_e,y.state):_e,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let A;return!p&&MM(s,q,D)&&(A=Ki(16,{to:E,from:q}),sn(q,q,!0,!1)),(A?Promise.resolve(A):re(E,q)).catch(b=>Pn(b)?Pn(b,2)?b:Kn(b):me(b,E,q)).then(b=>{if(b){if(Pn(b,2))return te(Ee({replace:g},R(b.to),{state:typeof b.to=="object"?Ee({},_e,b.to.state):_e,force:p}),V||E)}else b=H(E,q,!0,g,_e);return De(E,q,b),b})}function F(I,V){const D=S(I,V);return D?Promise.reject(D):Promise.resolve()}function ie(I){const V=oi.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(I):I()}function re(I,V){let D;const[q,_e,p]=DL(I,V);D=mu(q.reverse(),"beforeRouteLeave",I,V);for(const y of q)y.leaveGuards.forEach(E=>{D.push(Zn(E,I,V))});const g=F.bind(null,I,V);return D.push(g),rt(D).then(()=>{D=[];for(const y of r.list())D.push(Zn(y,I,V));return D.push(g),rt(D)}).then(()=>{D=mu(_e,"beforeRouteUpdate",I,V);for(const y of _e)y.updateGuards.forEach(E=>{D.push(Zn(E,I,V))});return D.push(g),rt(D)}).then(()=>{D=[];for(const y of p)if(y.beforeEnter)if(nn(y.beforeEnter))for(const E of y.beforeEnter)D.push(Zn(E,I,V));else D.push(Zn(y.beforeEnter,I,V));return D.push(g),rt(D)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),D=mu(p,"beforeRouteEnter",I,V),D.push(g),rt(D))).then(()=>{D=[];for(const y of o.list())D.push(Zn(y,I,V));return D.push(g),rt(D)}).catch(y=>Pn(y,8)?y:Promise.reject(y))}function De(I,V,D){a.list().forEach(q=>ie(()=>q(I,V,D)))}function H(I,V,D,q,_e){const p=S(I,V);if(p)return p;const g=V===Xn,y=fi?history.state:{};D&&(q||g?i.replace(I.fullPath,Ee({scroll:g&&y&&y.scroll},_e)):i.push(I.fullPath,_e)),l.value=I,sn(I,V,D,g),Kn()}let ve;function Et(){ve||(ve=i.listen((I,V,D)=>{if(!Go.listening)return;const q=T(I),_e=j(q);if(_e){te(Ee(_e,{replace:!0}),q).catch(Br);return}c=q;const p=l.value;fi&&HM(zm(p.fullPath,D.delta),bc()),re(q,p).catch(g=>Pn(g,12)?g:Pn(g,2)?(te(g.to,q).then(y=>{Pn(y,20)&&!D.delta&&D.type===_o.pop&&i.go(-1,!1)}).catch(Br),Promise.reject()):(D.delta&&i.go(-D.delta,!1),me(g,q,p))).then(g=>{g=g||H(q,p,!1),g&&(D.delta&&!Pn(g,8)?i.go(-D.delta,!1):D.type===_o.pop&&Pn(g,20)&&i.go(-1,!1)),De(q,p,g)}).catch(Br)}))}let Sn=_r(),Ve=_r(),Ae;function me(I,V,D){Kn(I);const q=Ve.list();return q.length?q.forEach(_e=>_e(I,V,D)):console.error(I),Promise.reject(I)}function bn(){return Ae&&l.value!==Xn?Promise.resolve():new Promise((I,V)=>{Sn.add([I,V])})}function Kn(I){return Ae||(Ae=!I,Et(),Sn.list().forEach(([V,D])=>I?D(I):V()),Sn.reset()),I}function sn(I,V,D,q){const{scrollBehavior:_e}=t;if(!fi||!_e)return Promise.resolve();const p=!D&&WM(zm(I.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return L_().then(()=>_e(I,V,p)).then(g=>g&&jM(g)).catch(g=>me(g,I,V))}const At=I=>i.go(I);let ri;const oi=new Set,Go={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:_,resolve:T,options:t,push:w,replace:B,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:bn,install(I){const V=this;I.component("RouterLink",bL),I.component("RouterView",dw),I.config.globalProperties.$router=V,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),fi&&!ri&&l.value===Xn&&(ri=!0,w(i.location).catch(_e=>{}));const D={};for(const _e in Xn)Object.defineProperty(D,_e,{get:()=>l.value[_e],enumerable:!0});I.provide(Pc,V),I.provide(jf,S_(D)),I.provide(xh,l);const q=I.unmount;oi.add(I),I.unmount=function(){oi.delete(I),oi.size<1&&(c=Xn,ve&&ve(),ve=null,l.value=Xn,ri=!1,Ae=!1),q()}}};function rt(I){return I.reduce((V,D)=>V.then(()=>ie(D)),Promise.resolve())}return Go}function DL(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>qi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>qi(c,l))||i.push(l))}return[n,s,i]}function xL(){return Ot(Pc)}function ML(){return Ot(jf)}const LL=vo({__name:"App",setup(t){const e=Ev(),n=xL(),s=ML();return Ti(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(ls(),Gr(Ze(dw)))}}),VL="modulepreload",FL=function(t){return"/"+t},a_={},ya=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=FL(r),r in a_)return;a_[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":VL,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const Hf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},UL={},BL={class:"card"};function $L(t,e){return ls(),ed("div",BL,[x0(t.$slots,"title",{},void 0,!0)])}const _u=Hf(UL,[["render",$L],["__scopeId","data-v-52aa979e"]]),jL=t=>($_("data-v-b5b1e296"),t=t(),j_(),t),HL=["src"],WL=jL(()=>Yi("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),qL=vo({__name:"AccountImage",setup(t){var s;const e=Ev(),n=Mn((s=e.value)==null?void 0:s.providerData[0].photoURL);return(i,r)=>{const o=ey("RouterLink");return ls(),ed("div",null,[Ze(e)?(ls(),Gr(o,{key:0,to:"/myAccount"},{default:es(()=>[Yi("img",{class:"accountImage",src:n.value,alt:""},null,8,HL)]),_:1})):(ls(),Gr(o,{key:1,to:"/login"},{default:es(()=>[WL]),_:1}))])}}});const KL=Hf(qL,[["__scopeId","data-v-b5b1e296"]]),zL=t=>($_("data-v-13af1bcb"),t=t(),j_(),t),GL=zL(()=>Yi("h1",null,"Fonti Paintball",-1)),QL=vo({__name:"HomeView",setup(t){return(e,n)=>{const s=ey("RouterLink");return ls(),ed("div",null,[je(KL),Yi("main",null,[GL,je(s,{to:"/rules"},{default:es(()=>[je(_u,null,{title:es(()=>[wa(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),je(s,{to:"/availability"},{default:es(()=>[je(_u,null,{title:es(()=>[wa(" Inserisci disponibilità ")]),_:1})]),_:1}),je(_u,null,{title:es(()=>[wa(" Statistiche giocatori (prossimamente...) ")]),_:1})])])}}});const YL=Hf(QL,[["__scopeId","data-v-13af1bcb"]]),fw=OL({history:QM("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:YL},{path:"/login",name:"login",component:()=>ya(()=>import("./LoginView-0f2bb077.js"),["assets/LoginView-0f2bb077.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>ya(()=>import("./AvailabilityView-118e165e.js"),["assets/AvailabilityView-118e165e.js","assets/costants-37b51c58.js","assets/AvailabilityView-d43b5bc1.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>ya(()=>import("./UserView-34fd13cc.js"),["assets/UserView-34fd13cc.js","assets/costants-37b51c58.js","assets/UserView-09c0314f.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>ya(()=>import("./RulesView-f78e3bce.js"),["assets/RulesView-f78e3bce.js","assets/RulesView-af284cb9.css"])}]});fw.beforeEach(async t=>{if(t.meta.requiresAuth&&!await eP())return{path:"/login",query:{redirect:t.fullPath}}});const kc=$A(LL);kc.use(kM());kc.use(fw);kc.use(bM,{firebaseApp:tw,modules:[SM()]});kc.mount("#app");export{ZL as A,Bh as B,Uh as C,Mn as D,uV as E,Vt as F,ns as G,yV as H,gV as I,eV as J,hV as K,zI as L,fV as M,pV as N,dV as O,mV as P,gy as T,Hf as _,Ev as a,ls as b,ed as c,vo as d,Ze as e,tV as f,rV as g,Yi as h,je as i,j_ as j,JL as k,sV as l,Gr as m,x0 as n,Q_ as o,$_ as p,wa as q,ey as r,iV as s,XL as t,_V as u,nV as v,es as w,kl as x,Kt as y,Ti as z};
