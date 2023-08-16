(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _h(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Re={},oi=[],Ht=()=>{},RI=()=>!1,AI=/^on[^a-z]/,fl=t=>AI.test(t),yh=t=>t.startsWith("onUpdate:"),We=Object.assign,vh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},CI=Object.prototype.hasOwnProperty,oe=(t,e)=>CI.call(t,e),K=Array.isArray,ai=t=>ao(t)==="[object Map]",pl=t=>ao(t)==="[object Set]",Sf=t=>ao(t)==="[object Date]",Z=t=>typeof t=="function",Fe=t=>typeof t=="string",Dr=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Lm=t=>Te(t)&&Z(t.then)&&Z(t.catch),Vm=Object.prototype.toString,ao=t=>Vm.call(t),SI=t=>ao(t).slice(8,-1),Fm=t=>ao(t)==="[object Object]",Eh=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,aa=_h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bI=/-(\w)/g,dn=gl(t=>t.replace(bI,(e,n)=>n?n.toUpperCase():"")),PI=/\B([A-Z])/g,Vi=gl(t=>t.replace(PI,"-$1").toLowerCase()),ml=gl(t=>t.charAt(0).toUpperCase()+t.slice(1)),vc=gl(t=>t?`on${ml(t)}`:""),xr=(t,e)=>!Object.is(t,e),la=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ea=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Um=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bf;const ru=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Th(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?DI(s):Th(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Te(t))return t}}const kI=/;(?![^(]*\))/g,NI=/:([^]+)/,OI=/\/\*[^]*?\*\//g;function DI(t){const e={};return t.replace(OI,"").split(kI).forEach(n=>{if(n){const s=n.split(NI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ih(t){let e="";if(Fe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Ih(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MI=_h(xI);function Bm(t){return!!t||t===""}function LI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=_l(t[s],e[s]);return n}function _l(t,e){if(t===e)return!0;let n=Sf(t),s=Sf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?LI(t,e):!1;if(n=Te(t),s=Te(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!_l(t[o],e[o]))return!1}}return String(t)===String(e)}function VI(t,e){return t.findIndex(n=>_l(n,e))}const qM=t=>Fe(t)?t:t==null?"":K(t)||Te(t)&&(t.toString===Vm||!Z(t.toString))?JSON.stringify(t,$m,2):String(t),$m=(t,e)=>e&&e.__v_isRef?$m(t,e.value):ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:pl(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!K(e)&&!Fm(e)?String(e):e;let At;class jm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qm(t){return new jm(t)}function FI(t,e=At){e&&e.active&&e.effects.push(t)}function Hm(){return At}function UI(t){At&&At.cleanups.push(t)}const wh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wm=t=>(t.w&ss)>0,Km=t=>(t.n&ss)>0,BI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ss},$I=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Wm(i)&&!Km(i)?i.delete(t):e[n++]=i,i.w&=~ss,i.n&=~ss}e.length=n}},ou=new WeakMap;let ur=0,ss=1;const au=30;let Ft;const As=Symbol(""),lu=Symbol("");class Rh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,FI(this,s)}run(){if(!this.active)return this.fn();let e=Ft,n=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,Yn=!0,ss=1<<++ur,ur<=au?BI(this):Pf(this),this.fn()}finally{ur<=au&&$I(this),ss=1<<--ur,Ft=this.parent,Yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ft===this?this.deferStop=!0:this.active&&(Pf(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yn=!0;const zm=[];function Fi(){zm.push(Yn),Yn=!1}function Ui(){const t=zm.pop();Yn=t===void 0?!0:t}function wt(t,e,n){if(Yn&&Ft){let s=ou.get(t);s||ou.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=wh()),Gm(i)}}function Gm(t,e){let n=!1;ur<=au?Km(t)||(t.n|=ss,n=!Wm(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function Nn(t,e,n,s,i,r){const o=ou.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Eh(n)&&a.push(o.get("length")):(a.push(o.get(As)),ai(t)&&a.push(o.get(lu)));break;case"delete":K(t)||(a.push(o.get(As)),ai(t)&&a.push(o.get(lu)));break;case"set":ai(t)&&a.push(o.get(As));break}if(a.length===1)a[0]&&cu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cu(wh(l))}}function cu(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&kf(s);for(const s of n)s.computed||kf(s)}function kf(t,e){(t!==Ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jI=_h("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),qI=Ah(),HI=Ah(!1,!0),WI=Ah(!0),Nf=KI();function KI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let r=0,o=this.length;r<o;r++)wt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fi();const s=ce(this)[e].apply(this,n);return Ui(),s}}),t}function zI(t){const e=ce(this);return wt(e,"has",t),e.hasOwnProperty(t)}function Ah(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?cw:e_:e?Zm:Jm).get(s))return s;const o=K(s);if(!t){if(o&&oe(Nf,i))return Reflect.get(Nf,i,r);if(i==="hasOwnProperty")return zI}const a=Reflect.get(s,i,r);return(Dr(i)?Qm.has(i):jI(i))||(t||wt(s,"get",i),e)?a:Je(a)?o&&Eh(i)?a:a.value:Te(a)?t?n_(a):vl(a):a}}const GI=Ym(),QI=Ym(!0);function Ym(t=!1){return function(n,s,i,r){let o=n[s];if(vi(o)&&Je(o)&&!Je(i))return!1;if(!t&&(!Ta(i)&&!vi(i)&&(o=ce(o),i=ce(i)),!K(n)&&Je(o)&&!Je(i)))return o.value=i,!0;const a=K(n)&&Eh(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===ce(r)&&(a?xr(i,o)&&Nn(n,"set",s,i):Nn(n,"add",s,i)),l}}function YI(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Nn(t,"delete",e,void 0),s}function XI(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!Qm.has(e))&&wt(t,"has",e),n}function JI(t){return wt(t,"iterate",K(t)?"length":As),Reflect.ownKeys(t)}const Xm={get:qI,set:GI,deleteProperty:YI,has:XI,ownKeys:JI},ZI={get:WI,set(t,e){return!0},deleteProperty(t,e){return!0}},ew=We({},Xm,{get:HI,set:QI}),Ch=t=>t,yl=t=>Reflect.getPrototypeOf(t);function Uo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ce(t),r=ce(e);n||(e!==r&&wt(i,"get",e),wt(i,"get",r));const{has:o}=yl(i),a=s?Ch:n?kh:Mr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Bo(t,e=!1){const n=this.__v_raw,s=ce(n),i=ce(t);return e||(t!==i&&wt(s,"has",t),wt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function $o(t,e=!1){return t=t.__v_raw,!e&&wt(ce(t),"iterate",As),Reflect.get(t,"size",t)}function Of(t){t=ce(t);const e=ce(this);return yl(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function Df(t,e){e=ce(e);const n=ce(this),{has:s,get:i}=yl(n);let r=s.call(n,t);r||(t=ce(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?xr(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function xf(t){const e=ce(this),{has:n,get:s}=yl(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Nn(e,"delete",t,void 0),r}function Mf(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function jo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ce(o),l=e?Ch:t?kh:Mr;return!t&&wt(a,"iterate",As),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function qo(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=ai(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ch:e?kh:Mr;return!e&&wt(r,"iterate",l?lu:As),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:this}}function tw(){const t={get(r){return Uo(this,r)},get size(){return $o(this)},has:Bo,add:Of,set:Df,delete:xf,clear:Mf,forEach:jo(!1,!1)},e={get(r){return Uo(this,r,!1,!0)},get size(){return $o(this)},has:Bo,add:Of,set:Df,delete:xf,clear:Mf,forEach:jo(!1,!0)},n={get(r){return Uo(this,r,!0)},get size(){return $o(this,!0)},has(r){return Bo.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:jo(!0,!1)},s={get(r){return Uo(this,r,!0,!0)},get size(){return $o(this,!0)},has(r){return Bo.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qo(r,!1,!1),n[r]=qo(r,!0,!1),e[r]=qo(r,!1,!0),s[r]=qo(r,!0,!0)}),[t,n,e,s]}const[nw,sw,iw,rw]=tw();function Sh(t,e){const n=e?t?rw:iw:t?sw:nw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const ow={get:Sh(!1,!1)},aw={get:Sh(!1,!0)},lw={get:Sh(!0,!1)},Jm=new WeakMap,Zm=new WeakMap,e_=new WeakMap,cw=new WeakMap;function uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hw(t){return t.__v_skip||!Object.isExtensible(t)?0:uw(SI(t))}function vl(t){return vi(t)?t:bh(t,!1,Xm,ow,Jm)}function t_(t){return bh(t,!1,ew,aw,Zm)}function n_(t){return bh(t,!0,ZI,lw,e_)}function bh(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=hw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function li(t){return vi(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function vi(t){return!!(t&&t.__v_isReadonly)}function Ta(t){return!!(t&&t.__v_isShallow)}function s_(t){return li(t)||vi(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Ph(t){return Ea(t,"__v_skip",!0),t}const Mr=t=>Te(t)?vl(t):t,kh=t=>Te(t)?n_(t):t;function i_(t){Yn&&Ft&&(t=ce(t),Gm(t.dep||(t.dep=wh())))}function r_(t,e){t=ce(t);const n=t.dep;n&&cu(n)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Xn(t){return a_(t,!1)}function o_(t){return a_(t,!0)}function a_(t,e){return Je(t)?t:new dw(t,e)}class dw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Mr(e)}get value(){return i_(this),this._value}set value(e){const n=this.__v_isShallow||Ta(e)||vi(e);e=n?e:ce(e),xr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mr(e),r_(this))}}function rt(t){return Je(t)?t.value:t}const fw={get:(t,e,n)=>rt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function l_(t){return li(t)?t:new Proxy(t,fw)}class pw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rh(e,()=>{this._dirty||(this._dirty=!0,r_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ce(this);return i_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gw(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=Ht):(s=t.get,i=t.set),new pw(s,i,r||!i,n)}function Jn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){El(r,e,n)}return i}function Wt(t,e,n,s){if(Z(t)){const r=Jn(t,e,n,s);return r&&Lm(r)&&r.catch(o=>{El(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Wt(t[r],e,n,s));return i}function El(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jn(l,null,10,[t,o,a]);return}}mw(t,n,i,s)}function mw(t,e,n,s=!0){console.error(t)}let Lr=!1,uu=!1;const lt=[];let nn=0;const ci=[];let In=null,_s=0;const c_=Promise.resolve();let Nh=null;function u_(t){const e=Nh||c_;return t?e.then(this?t.bind(this):t):e}function _w(t){let e=nn+1,n=lt.length;for(;e<n;){const s=e+n>>>1;Vr(lt[s])<t?e=s+1:n=s}return e}function Oh(t){(!lt.length||!lt.includes(t,Lr&&t.allowRecurse?nn+1:nn))&&(t.id==null?lt.push(t):lt.splice(_w(t.id),0,t),h_())}function h_(){!Lr&&!uu&&(uu=!0,Nh=c_.then(f_))}function yw(t){const e=lt.indexOf(t);e>nn&&lt.splice(e,1)}function vw(t){K(t)?ci.push(...t):(!In||!In.includes(t,t.allowRecurse?_s+1:_s))&&ci.push(t),h_()}function Lf(t,e=Lr?nn+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function d_(t){if(ci.length){const e=[...new Set(ci)];if(ci.length=0,In){In.push(...e);return}for(In=e,In.sort((n,s)=>Vr(n)-Vr(s)),_s=0;_s<In.length;_s++)In[_s]();In=null,_s=0}}const Vr=t=>t.id==null?1/0:t.id,Ew=(t,e)=>{const n=Vr(t)-Vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function f_(t){uu=!1,Lr=!0,lt.sort(Ew);const e=Ht;try{for(nn=0;nn<lt.length;nn++){const n=lt[nn];n&&n.active!==!1&&Jn(n,null,14)}}finally{nn=0,lt.length=0,d_(),Lr=!1,Nh=null,(lt.length||ci.length)&&f_()}}function Tw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Re;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(Um))}let a,l=s[a=vc(e)]||s[a=vc(dn(e))];!l&&r&&(l=s[a=vc(Vi(e))]),l&&Wt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(c,t,6,i)}}function p_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=p_(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Te(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):We(o,r),Te(t)&&s.set(t,o),o)}function Tl(t,e){return!t||!fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Vi(e))||oe(t,e))}let Ze=null,Il=null;function Ia(t){const e=Ze;return Ze=t,Il=t&&t.type.__scopeId||null,e}function Iw(t){Il=t}function ww(){Il=null}function Js(t,e=Ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zf(-1);const r=Ia(e);let o;try{o=t(...i)}finally{Ia(r),s._d&&zf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ec(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,R;const P=Ia(t);try{if(n.shapeFlag&4){const A=i||s;v=tn(u.call(A,A,h,r,f,d,m)),R=l}else{const A=e;v=tn(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),R=e.props?l:Rw(l)}}catch(A){Er.length=0,El(A,t,1),v=Me(is)}let k=v;if(R&&y!==!1){const A=Object.keys(R),{shapeFlag:Y}=k;A.length&&Y&7&&(o&&A.some(yh)&&(R=Aw(R,o)),k=Ei(k,R))}return n.dirs&&(k=Ei(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Ia(P),v}const Rw=t=>{let e;for(const n in t)(n==="class"||n==="style"||fl(n))&&((e||(e={}))[n]=t[n]);return e},Aw=(t,e)=>{const n={};for(const s in t)(!yh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Cw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Tl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vf(s,o,c):!0:!!o;return!1}function Vf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Tl(n,r))return!0}return!1}function Sw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bw=t=>t.__isSuspense;function Pw(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):vw(t)}const Ho={};function ui(t,e,n){return g_(t,e,n)}function g_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Re){var a;const l=Hm()===((a=qe)==null?void 0:a.scope)?qe:null;let c,u=!1,h=!1;if(Je(t)?(c=()=>t.value,u=Ta(t)):li(t)?(c=()=>t,s=!0):K(t)?(h=!0,u=t.some(A=>li(A)||Ta(A)),c=()=>t.map(A=>{if(Je(A))return A.value;if(li(A))return vs(A);if(Z(A))return Jn(A,l,2)})):Z(t)?e?c=()=>Jn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Wt(t,l,3,[f])}:c=Ht,e&&s){const A=c;c=()=>vs(A())}let d,f=A=>{d=P.onStop=()=>{Jn(A,l,4)}},m;if(Ur)if(f=Ht,e?n&&Wt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const A=w0();m=A.__watcherHandles||(A.__watcherHandles=[])}else return Ht;let y=h?new Array(t.length).fill(Ho):Ho;const v=()=>{if(P.active)if(e){const A=P.run();(s||u||(h?A.some((Y,G)=>xr(Y,y[G])):xr(A,y)))&&(d&&d(),Wt(e,l,3,[A,y===Ho?void 0:h&&y[0]===Ho?[]:y,f]),y=A)}else P.run()};v.allowRecurse=!!e;let R;i==="sync"?R=v:i==="post"?R=()=>Et(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),R=()=>Oh(v));const P=new Rh(c,R);e?n?v():y=P.run():i==="post"?Et(P.run.bind(P),l&&l.suspense):P.run();const k=()=>{P.stop(),l&&l.scope&&vh(l.scope.effects,P)};return m&&m.push(k),k}function kw(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?m_(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=qe;Ti(this);const a=g_(i,r.bind(s),n);return o?Ti(o):Cs(),a}function m_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function vs(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))vs(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)vs(t[n],e);else if(pl(t)||ai(t))t.forEach(n=>{vs(n,e)});else if(Fm(t))for(const n in t)vs(t[n],e);return t}function HM(t,e){const n=Ze;if(n===null)return t;const s=Sl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Re]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&vs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function fs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Fi(),Wt(l,n,8,[t.el,a,t,e]),Ui())}}function wl(t,e){return Z(t)?(()=>We({name:t.name},e,{setup:t}))():t}const yr=t=>!!t.type.__asyncLoader,__=t=>t.type.__isKeepAlive;function Nw(t,e){y_(t,"a",e)}function Ow(t,e){y_(t,"da",e)}function y_(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)__(i.parent.vnode)&&Dw(s,e,n,i),i=i.parent}}function Dw(t,e,n,s){const i=Rl(e,t,s,!0);v_(()=>{vh(s[e],i)},n)}function Rl(t,e,n=qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fi(),Ti(n);const a=Wt(e,n,t,o);return Cs(),Ui(),a});return s?i.unshift(r):i.push(r),r}}const Ln=t=>(e,n=qe)=>(!Ur||t==="sp")&&Rl(t,(...s)=>e(...s),n),xw=Ln("bm"),Mw=Ln("m"),Lw=Ln("bu"),Vw=Ln("u"),Fw=Ln("bum"),v_=Ln("um"),E_=Ln("sp"),Uw=Ln("rtg"),Bw=Ln("rtc");function $w(t,e=qe){Rl("ec",t,e)}const T_="components";function jw(t,e){return Hw(T_,t,!0,e)||t}const qw=Symbol.for("v-ndc");function Hw(t,e,n=!0,s=!1){const i=Ze||qe;if(i){const r=i.type;if(t===T_){const a=E0(r,!1);if(a&&(a===e||a===dn(e)||a===ml(dn(e))))return r}const o=Ff(i[t]||r[t],e)||Ff(i.appContext[t],e);return!o&&s?r:o}}function Ff(t,e){return t&&(t[e]||t[dn(e)]||t[ml(dn(e))])}function WM(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Ww(t,e,n={},s,i){if(Ze.isCE||Ze.parent&&yr(Ze.parent)&&Ze.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),lo();const o=r&&I_(r(n)),a=Mh(Vt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function I_(t){return t.some(e=>Aa(e)?!(e.type===is||e.type===Vt&&!I_(e.children)):!0)?t:null}const hu=t=>t?M_(t)?Sl(t)||t.proxy:hu(t.parent):null,vr=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$emit:t=>t.emit,$options:t=>Dh(t),$forceUpdate:t=>t.f||(t.f=()=>Oh(t.update)),$nextTick:t=>t.n||(t.n=u_.bind(t.proxy)),$watch:t=>kw.bind(t)}),Tc=(t,e)=>t!==Re&&!t.__isScriptSetup&&oe(t,e),Kw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Tc(s,e))return o[e]=1,s[e];if(i!==Re&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,r[e];if(n!==Re&&oe(n,e))return o[e]=4,n[e];du&&(o[e]=0)}}const u=vr[e];let h,d;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&oe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Tc(i,e)?(i[e]=n,!0):s!==Re&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&oe(t,o)||Tc(e,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(vr,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uf(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let du=!0;function zw(t){const e=Dh(t),n=t.proxy,s=t.ctx;du=!1,e.beforeCreate&&Bf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:R,beforeUnmount:P,destroyed:k,unmounted:A,render:Y,renderTracked:G,renderTriggered:ye,errorCaptured:Ie,serverPrefetch:yt,expose:Ge,inheritAttrs:Fn,components:ds,directives:Xt,filters:Zi}=e;if(c&&Gw(c,s,null),o)for(const ve in o){const ue=o[ve];Z(ue)&&(s[ve]=ue.bind(n))}if(i){const ve=i.call(n,n);Te(ve)&&(t.data=vl(ve))}if(du=!0,r)for(const ve in r){const ue=r[ve],En=Z(ue)?ue.bind(n,n):Z(ue.get)?ue.get.bind(n,n):Ht,Un=!Z(ue)&&Z(ue.set)?ue.set.bind(n):Ht,Jt=Ut({get:En,set:Un});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:vt=>Jt.value=vt})}if(a)for(const ve in a)w_(a[ve],s,n,ve);if(l){const ve=Z(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(ue=>{ca(ue,ve[ue])})}u&&Bf(u,t,"c");function Ue(ve,ue){K(ue)?ue.forEach(En=>ve(En.bind(n))):ue&&ve(ue.bind(n))}if(Ue(xw,h),Ue(Mw,d),Ue(Lw,f),Ue(Vw,m),Ue(Nw,y),Ue(Ow,v),Ue($w,Ie),Ue(Bw,G),Ue(Uw,ye),Ue(Fw,P),Ue(v_,A),Ue(E_,yt),K(Ge))if(Ge.length){const ve=t.exposed||(t.exposed={});Ge.forEach(ue=>{Object.defineProperty(ve,ue,{get:()=>n[ue],set:En=>n[ue]=En})})}else t.exposed||(t.exposed={});Y&&t.render===Ht&&(t.render=Y),Fn!=null&&(t.inheritAttrs=Fn),ds&&(t.components=ds),Xt&&(t.directives=Xt)}function Gw(t,e,n=Ht){K(t)&&(t=fu(t));for(const s in t){const i=t[s];let r;Te(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Bf(t,e,n){Wt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function w_(t,e,n,s){const i=s.includes(".")?m_(n,s):()=>n[s];if(Fe(t)){const r=e[t];Z(r)&&ui(i,r)}else if(Z(t))ui(i,t.bind(n));else if(Te(t))if(K(t))t.forEach(r=>w_(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&ui(i,r,t)}}function Dh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),Te(e)&&r.set(e,l),l}function wa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wa(t,r,n,!0),i&&i.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Qw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qw={data:$f,props:jf,emits:jf,methods:hr,computed:hr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:hr,directives:hr,watch:Xw,provide:$f,inject:Yw};function $f(t,e){return e?t?function(){return We(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Yw(t,e){return hr(fu(t),fu(e))}function fu(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function hr(t,e){return t?We(Object.create(null),t,e):e}function jf(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:We(Object.create(null),Uf(t),Uf(e??{})):e}function Xw(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=gt(t[s],e[s]);return n}function R_(){return{app:null,config:{isNativeTag:RI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jw=0;function Zw(t,e){return function(s,i=null){Z(s)||(s=We({},s)),i!=null&&!Te(i)&&(i=null);const r=R_(),o=new Set;let a=!1;const l=r.app={_uid:Jw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:R0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Me(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Sl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ra=l;try{return c()}finally{Ra=null}}};return l}}let Ra=null;function ca(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=qe||Ze;if(s||Ra){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ra._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function e0(t,e,n,s=!1){const i={},r={};Ea(r,Cl,1),t.propsDefaults=Object.create(null),A_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:t_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function t0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Tl(t.emitsOptions,d))continue;const f=e[d];if(l)if(oe(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=dn(d);i[m]=pu(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{A_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Vi(h))===h||!oe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=pu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!oe(e,h))&&(delete r[h],c=!0)}c&&Nn(t,"set","$attrs")}function A_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(aa(l))continue;const c=e[l];let u;i&&oe(i,u=dn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Tl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||Re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=pu(i,l,h,c[h],t,!oe(c,h))}}return o}function pu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ti(i),s=c[n]=l.call(null,e),Cs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Vi(n))&&(s=!0))}return s}function C_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[d,f]=C_(h,e,!0);We(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Te(t)&&s.set(t,oi),oi;if(K(r))for(let u=0;u<r.length;u++){const h=dn(r[u]);qf(h)&&(o[h]=Re)}else if(r)for(const u in r){const h=dn(u);if(qf(h)){const d=r[u],f=o[h]=K(d)||Z(d)?{type:d}:We({},d);if(f){const m=Kf(Boolean,f.type),y=Kf(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||oe(f,"default"))&&a.push(h)}}}const c=[o,a];return Te(t)&&s.set(t,c),c}function qf(t){return t[0]!=="$"}function Hf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wf(t,e){return Hf(t)===Hf(e)}function Kf(t,e){return K(e)?e.findIndex(n=>Wf(n,t)):Z(e)&&Wf(e,t)?0:-1}const S_=t=>t[0]==="_"||t==="$stable",xh=t=>K(t)?t.map(tn):[tn(t)],n0=(t,e,n)=>{if(e._n)return e;const s=Js((...i)=>xh(e(...i)),n);return s._c=!1,s},b_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(S_(i))continue;const r=t[i];if(Z(r))e[i]=n0(i,r,s);else if(r!=null){const o=xh(r);e[i]=()=>o}}},P_=(t,e)=>{const n=xh(e);t.slots.default=()=>n},s0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Ea(e,"_",n)):b_(e,t.slots={})}else t.slots={},e&&P_(t,e);Ea(t.slots,Cl,1)},i0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(We(i,e),!n&&a===1&&delete i._):(r=!e.$stable,b_(e,i)),o=e}else e&&(P_(t,e),o={default:1});if(r)for(const a in i)!S_(a)&&!(a in o)&&delete i[a]};function gu(t,e,n,s,i=!1){if(K(t)){t.forEach((d,f)=>gu(d,e&&(K(e)?e[f]:e),n,s,i));return}if(yr(s)&&!i)return;const r=s.shapeFlag&4?Sl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,oe(h,c)&&(h[c]=null)):Je(c)&&(c.value=null)),Z(l))Jn(l,a,12,[o,u]);else{const d=Fe(l),f=Je(l);if(d||f){const m=()=>{if(t.f){const y=d?oe(h,l)?h[l]:u[l]:l.value;i?K(y)&&vh(y,r):K(y)?y.includes(r)||y.push(r):d?(u[l]=[r],oe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,oe(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Et(m,n)):m()}}}const Et=Pw;function r0(t){return o0(t)}function o0(t,e){const n=ru();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ht,insertStaticContent:m}=t,y=(p,g,_,E=null,I=null,C=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!tr(p,g)&&(E=T(p),vt(p,I,C,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:S,ref:j,shapeFlag:U}=g;switch(S){case Al:v(p,g,_,E);break;case is:R(p,g,_,E);break;case Ic:p==null&&P(g,_,E,L);break;case Vt:ds(p,g,_,E,I,C,L,N,O);break;default:U&1?Y(p,g,_,E,I,C,L,N,O):U&6?Xt(p,g,_,E,I,C,L,N,O):(U&64||U&128)&&S.process(p,g,_,E,I,C,L,N,O,D)}j!=null&&I&&gu(j,p&&p.ref,C,g||p,!g)},v=(p,g,_,E)=>{if(p==null)s(g.el=a(g.children),_,E);else{const I=g.el=p.el;g.children!==p.children&&c(I,g.children)}},R=(p,g,_,E)=>{p==null?s(g.el=l(g.children||""),_,E):g.el=p.el},P=(p,g,_,E)=>{[p.el,p.anchor]=m(p.children,g,_,E,p.el,p.anchor)},k=({el:p,anchor:g},_,E)=>{let I;for(;p&&p!==g;)I=d(p),s(p,_,E),p=I;s(g,_,E)},A=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),i(p),p=_;i(g)},Y=(p,g,_,E,I,C,L,N,O)=>{L=L||g.type==="svg",p==null?G(g,_,E,I,C,L,N,O):yt(p,g,I,C,L,N,O)},G=(p,g,_,E,I,C,L,N)=>{let O,S;const{type:j,props:U,shapeFlag:q,transition:X,dirs:ee}=p;if(O=p.el=o(p.type,C,U&&U.is,U),q&8?u(O,p.children):q&16&&Ie(p.children,O,null,E,I,C&&j!=="foreignObject",L,N),ee&&fs(p,null,E,"created"),ye(O,p,p.scopeId,L,E),U){for(const me in U)me!=="value"&&!aa(me)&&r(O,me,null,U[me],C,p.children,E,I,nt);"value"in U&&r(O,"value",null,U.value),(S=U.onVnodeBeforeMount)&&en(S,E,p)}ee&&fs(p,null,E,"beforeMount");const Ee=(!I||I&&!I.pendingBranch)&&X&&!X.persisted;Ee&&X.beforeEnter(O),s(O,g,_),((S=U&&U.onVnodeMounted)||Ee||ee)&&Et(()=>{S&&en(S,E,p),Ee&&X.enter(O),ee&&fs(p,null,E,"mounted")},I)},ye=(p,g,_,E,I)=>{if(_&&f(p,_),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(I){let C=I.subTree;if(g===C){const L=I.vnode;ye(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},Ie=(p,g,_,E,I,C,L,N,O=0)=>{for(let S=O;S<p.length;S++){const j=p[S]=N?qn(p[S]):tn(p[S]);y(null,j,g,_,E,I,C,L,N)}},yt=(p,g,_,E,I,C,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:j}=g;O|=p.patchFlag&16;const U=p.props||Re,q=g.props||Re;let X;_&&ps(_,!1),(X=q.onVnodeBeforeUpdate)&&en(X,_,g,p),j&&fs(g,p,_,"beforeUpdate"),_&&ps(_,!0);const ee=I&&g.type!=="foreignObject";if(S?Ge(p.dynamicChildren,S,N,_,E,ee,C):L||ue(p,g,N,null,_,E,ee,C,!1),O>0){if(O&16)Fn(N,g,U,q,_,E,I);else if(O&2&&U.class!==q.class&&r(N,"class",null,q.class,I),O&4&&r(N,"style",U.style,q.style,I),O&8){const Ee=g.dynamicProps;for(let me=0;me<Ee.length;me++){const Oe=Ee[me],Lt=U[Oe],Gs=q[Oe];(Gs!==Lt||Oe==="value")&&r(N,Oe,Lt,Gs,I,p.children,_,E,nt)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&S==null&&Fn(N,g,U,q,_,E,I);((X=q.onVnodeUpdated)||j)&&Et(()=>{X&&en(X,_,g,p),j&&fs(g,p,_,"updated")},E)},Ge=(p,g,_,E,I,C,L)=>{for(let N=0;N<g.length;N++){const O=p[N],S=g[N],j=O.el&&(O.type===Vt||!tr(O,S)||O.shapeFlag&70)?h(O.el):_;y(O,S,j,null,E,I,C,L,!0)}},Fn=(p,g,_,E,I,C,L)=>{if(_!==E){if(_!==Re)for(const N in _)!aa(N)&&!(N in E)&&r(p,N,_[N],null,L,g.children,I,C,nt);for(const N in E){if(aa(N))continue;const O=E[N],S=_[N];O!==S&&N!=="value"&&r(p,N,S,O,L,g.children,I,C,nt)}"value"in E&&r(p,"value",_.value,E.value)}},ds=(p,g,_,E,I,C,L,N,O)=>{const S=g.el=p?p.el:a(""),j=g.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:X}=g;X&&(N=N?N.concat(X):X),p==null?(s(S,_,E),s(j,_,E),Ie(g.children,_,j,I,C,L,N,O)):U>0&&U&64&&q&&p.dynamicChildren?(Ge(p.dynamicChildren,q,_,I,C,L,N),(g.key!=null||I&&g===I.subTree)&&k_(p,g,!0)):ue(p,g,_,j,I,C,L,N,O)},Xt=(p,g,_,E,I,C,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?I.ctx.activate(g,_,E,L,O):Zi(g,_,E,I,C,L,O):Ws(p,g,O)},Zi=(p,g,_,E,I,C,L)=>{const N=p.component=g0(p,E,I);if(__(p)&&(N.ctx.renderer=D),m0(N),N.asyncDep){if(I&&I.registerDep(N,Ue),!p.el){const O=N.subTree=Me(is);R(null,O,g,_)}return}Ue(N,p,g,_,I,C,L)},Ws=(p,g,_)=>{const E=g.component=p.component;if(Cw(p,g,_))if(E.asyncDep&&!E.asyncResolved){ve(E,g,_);return}else E.next=g,yw(E.update),E.update();else g.el=p.el,E.vnode=g},Ue=(p,g,_,E,I,C,L)=>{const N=()=>{if(p.isMounted){let{next:j,bu:U,u:q,parent:X,vnode:ee}=p,Ee=j,me;ps(p,!1),j?(j.el=ee.el,ve(p,j,L)):j=ee,U&&la(U),(me=j.props&&j.props.onVnodeBeforeUpdate)&&en(me,X,j,ee),ps(p,!0);const Oe=Ec(p),Lt=p.subTree;p.subTree=Oe,y(Lt,Oe,h(Lt.el),T(Lt),p,I,C),j.el=Oe.el,Ee===null&&Sw(p,Oe.el),q&&Et(q,I),(me=j.props&&j.props.onVnodeUpdated)&&Et(()=>en(me,X,j,ee),I)}else{let j;const{el:U,props:q}=g,{bm:X,m:ee,parent:Ee}=p,me=yr(g);if(ps(p,!1),X&&la(X),!me&&(j=q&&q.onVnodeBeforeMount)&&en(j,Ee,g),ps(p,!0),U&&he){const Oe=()=>{p.subTree=Ec(p),he(U,p.subTree,p,I,null)};me?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=Ec(p);y(null,Oe,_,E,p,I,C),g.el=Oe.el}if(ee&&Et(ee,I),!me&&(j=q&&q.onVnodeMounted)){const Oe=g;Et(()=>en(j,Ee,Oe),I)}(g.shapeFlag&256||Ee&&yr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&Et(p.a,I),p.isMounted=!0,g=_=E=null}},O=p.effect=new Rh(N,()=>Oh(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,ps(p,!0),S()},ve=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,t0(p,g.props,E,_),i0(p,g.children,_),Fi(),Lf(),Ui()},ue=(p,g,_,E,I,C,L,N,O=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,U=g.children,{patchFlag:q,shapeFlag:X}=g;if(q>0){if(q&128){Un(S,U,_,E,I,C,L,N,O);return}else if(q&256){En(S,U,_,E,I,C,L,N,O);return}}X&8?(j&16&&nt(S,I,C),U!==S&&u(_,U)):j&16?X&16?Un(S,U,_,E,I,C,L,N,O):nt(S,I,C,!0):(j&8&&u(_,""),X&16&&Ie(U,_,E,I,C,L,N,O))},En=(p,g,_,E,I,C,L,N,O)=>{p=p||oi,g=g||oi;const S=p.length,j=g.length,U=Math.min(S,j);let q;for(q=0;q<U;q++){const X=g[q]=O?qn(g[q]):tn(g[q]);y(p[q],X,_,null,I,C,L,N,O)}S>j?nt(p,I,C,!0,!1,U):Ie(g,_,E,I,C,L,N,O,U)},Un=(p,g,_,E,I,C,L,N,O)=>{let S=0;const j=g.length;let U=p.length-1,q=j-1;for(;S<=U&&S<=q;){const X=p[S],ee=g[S]=O?qn(g[S]):tn(g[S]);if(tr(X,ee))y(X,ee,_,null,I,C,L,N,O);else break;S++}for(;S<=U&&S<=q;){const X=p[U],ee=g[q]=O?qn(g[q]):tn(g[q]);if(tr(X,ee))y(X,ee,_,null,I,C,L,N,O);else break;U--,q--}if(S>U){if(S<=q){const X=q+1,ee=X<j?g[X].el:E;for(;S<=q;)y(null,g[S]=O?qn(g[S]):tn(g[S]),_,ee,I,C,L,N,O),S++}}else if(S>q)for(;S<=U;)vt(p[S],I,C,!0),S++;else{const X=S,ee=S,Ee=new Map;for(S=ee;S<=q;S++){const Rt=g[S]=O?qn(g[S]):tn(g[S]);Rt.key!=null&&Ee.set(Rt.key,S)}let me,Oe=0;const Lt=q-ee+1;let Gs=!1,Rf=0;const er=new Array(Lt);for(S=0;S<Lt;S++)er[S]=0;for(S=X;S<=U;S++){const Rt=p[S];if(Oe>=Lt){vt(Rt,I,C,!0);continue}let Zt;if(Rt.key!=null)Zt=Ee.get(Rt.key);else for(me=ee;me<=q;me++)if(er[me-ee]===0&&tr(Rt,g[me])){Zt=me;break}Zt===void 0?vt(Rt,I,C,!0):(er[Zt-ee]=S+1,Zt>=Rf?Rf=Zt:Gs=!0,y(Rt,g[Zt],_,null,I,C,L,N,O),Oe++)}const Af=Gs?a0(er):oi;for(me=Af.length-1,S=Lt-1;S>=0;S--){const Rt=ee+S,Zt=g[Rt],Cf=Rt+1<j?g[Rt+1].el:E;er[S]===0?y(null,Zt,_,Cf,I,C,L,N,O):Gs&&(me<0||S!==Af[me]?Jt(Zt,_,Cf,2):me--)}}},Jt=(p,g,_,E,I=null)=>{const{el:C,type:L,transition:N,children:O,shapeFlag:S}=p;if(S&6){Jt(p.component.subTree,g,_,E);return}if(S&128){p.suspense.move(g,_,E);return}if(S&64){L.move(p,g,_,D);return}if(L===Vt){s(C,g,_);for(let U=0;U<O.length;U++)Jt(O[U],g,_,E);s(p.anchor,g,_);return}if(L===Ic){k(p,g,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),s(C,g,_),Et(()=>N.enter(C),I);else{const{leave:U,delayLeave:q,afterLeave:X}=N,ee=()=>s(C,g,_),Ee=()=>{U(C,()=>{ee(),X&&X()})};q?q(C,ee,Ee):Ee()}else s(C,g,_)},vt=(p,g,_,E=!1,I=!1)=>{const{type:C,props:L,ref:N,children:O,dynamicChildren:S,shapeFlag:j,patchFlag:U,dirs:q}=p;if(N!=null&&gu(N,null,_,p,!0),j&256){g.ctx.deactivate(p);return}const X=j&1&&q,ee=!yr(p);let Ee;if(ee&&(Ee=L&&L.onVnodeBeforeUnmount)&&en(Ee,g,p),j&6)Fo(p.component,_,E);else{if(j&128){p.suspense.unmount(_,E);return}X&&fs(p,null,g,"beforeUnmount"),j&64?p.type.remove(p,g,_,I,D,E):S&&(C!==Vt||U>0&&U&64)?nt(S,g,_,!1,!0):(C===Vt&&U&384||!I&&j&16)&&nt(O,g,_),E&&Ks(p)}(ee&&(Ee=L&&L.onVnodeUnmounted)||X)&&Et(()=>{Ee&&en(Ee,g,p),X&&fs(p,null,g,"unmounted")},_)},Ks=p=>{const{type:g,el:_,anchor:E,transition:I}=p;if(g===Vt){zs(_,E);return}if(g===Ic){A(p);return}const C=()=>{i(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,O=()=>L(_,C);N?N(p.el,C,O):O()}else C()},zs=(p,g)=>{let _;for(;p!==g;)_=d(p),i(p),p=_;i(g)},Fo=(p,g,_)=>{const{bum:E,scope:I,update:C,subTree:L,um:N}=p;E&&la(E),I.stop(),C&&(C.active=!1,vt(L,p,g,_)),N&&Et(N,g),Et(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},nt=(p,g,_,E=!1,I=!1,C=0)=>{for(let L=C;L<p.length;L++)vt(p[L],g,_,E,I)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,_)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,_),Lf(),d_(),g._vnode=p},D={p:y,um:vt,m:Jt,r:Ks,mt:Zi,mc:Ie,pc:ue,pbc:Ge,n:T,o:t};let $,he;return e&&([$,he]=e(D)),{render:V,hydrate:$,createApp:Zw(V,$)}}function ps({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function k_(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=qn(i[r]),a.el=o.el),n||k_(o,a)),a.type===Al&&(a.el=o.el)}}function a0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const l0=t=>t.__isTeleport,Vt=Symbol.for("v-fgt"),Al=Symbol.for("v-txt"),is=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),Er=[];let $t=null;function lo(t=!1){Er.push($t=t?null:[])}function c0(){Er.pop(),$t=Er[Er.length-1]||null}let Fr=1;function zf(t){Fr+=t}function N_(t){return t.dynamicChildren=Fr>0?$t||oi:null,c0(),Fr>0&&$t&&$t.push(t),t}function O_(t,e,n,s,i,r){return N_(Lh(t,e,n,s,i,r,!0))}function Mh(t,e,n,s,i){return N_(Me(t,e,n,s,i,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const Cl="__vInternal",D_=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Je(t)||Z(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function Lh(t,e=null,n=null,s=0,i=null,r=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&D_(e),ref:e&&ua(e),scopeId:Il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Vh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Fr>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const Me=u0;function u0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===qw)&&(t=is),Aa(t)){const a=Ei(t,e,!0);return n&&Vh(a,n),Fr>0&&!r&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(T0(t)&&(t=t.__vccOpts),e){e=h0(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Ih(a)),Te(l)&&(s_(l)&&!K(l)&&(l=We({},l)),e.style=Th(l))}const o=Fe(t)?1:bw(t)?128:l0(t)?64:Te(t)?4:Z(t)?2:0;return Lh(t,e,n,s,i,o,r,!0)}function h0(t){return t?s_(t)||Cl in t?We({},t):t:null}function Ei(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?d0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&D_(a),ref:e&&e.ref?n&&i?K(i)?i.concat(ua(e)):[i,ua(e)]:ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ei(t.ssContent),ssFallback:t.ssFallback&&Ei(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ha(t=" ",e=0){return Me(Al,null,t,e)}function KM(t="",e=!1){return e?(lo(),Mh(is,null,t)):Me(is,null,t)}function tn(t){return t==null||typeof t=="boolean"?Me(is):K(t)?Me(Vt,null,t.slice()):typeof t=="object"?qn(t):Me(Al,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ei(t)}function Vh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Vh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Cl in e)?e._ctx=Ze:i===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),s&64?(n=16,e=[ha(e)]):n=8);t.children=e,t.shapeFlag|=n}function d0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ih([e.class,s.class]));else if(i==="style")e.style=Th([e.style,s.style]);else if(fl(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function en(t,e,n,s=null){Wt(t,e,7,[n,s])}const f0=R_();let p0=0;function g0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||f0,r={uid:p0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:C_(s,i),emitsOptions:p_(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Tw.bind(null,r),t.ce&&t.ce(r),r}let qe=null;const x_=()=>qe||Ze;let Fh,Qs,Gf="__VUE_INSTANCE_SETTERS__";(Qs=ru()[Gf])||(Qs=ru()[Gf]=[]),Qs.push(t=>qe=t),Fh=t=>{Qs.length>1?Qs.forEach(e=>e(t)):Qs[0](t)};const Ti=t=>{Fh(t),t.scope.on()},Cs=()=>{qe&&qe.scope.off(),Fh(null)};function M_(t){return t.vnode.shapeFlag&4}let Ur=!1;function m0(t,e=!1){Ur=e;const{props:n,children:s}=t.vnode,i=M_(t);e0(t,n,i,e),s0(t,s);const r=i?_0(t,e):void 0;return Ur=!1,r}function _0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ph(new Proxy(t.ctx,Kw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?v0(t):null;Ti(t),Fi();const r=Jn(s,t,0,[t.props,i]);if(Ui(),Cs(),Lm(r)){if(r.then(Cs,Cs),e)return r.then(o=>{Qf(t,o,e)}).catch(o=>{El(o,t,0)});t.asyncDep=r}else Qf(t,r,e)}else L_(t,e)}function Qf(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=l_(e)),L_(t,n)}let Yf;function L_(t,e,n){const s=t.type;if(!t.render){if(!e&&Yf&&!s.render){const i=s.template||Dh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=We(We({isCustomElement:r,delimiters:a},o),l);s.render=Yf(i,c)}}t.render=s.render||Ht}Ti(t),Fi(),zw(t),Ui(),Cs()}function y0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}}))}function v0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return y0(t)},slots:t.slots,emit:t.emit,expose:e}}function Sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(l_(Ph(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vr)return vr[n](t)},has(e,n){return n in e||n in vr}}))}function E0(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function T0(t){return Z(t)&&"__vccOpts"in t}const Ut=(t,e)=>gw(t,e,Ur);function V_(t,e,n){const s=arguments.length;return s===2?Te(e)&&!K(e)?Aa(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Aa(n)&&(n=[n]),Me(t,e,n))}const I0=Symbol.for("v-scx"),w0=()=>St(I0),R0="3.3.4",A0="http://www.w3.org/2000/svg",ys=typeof document<"u"?document:null,Xf=ys&&ys.createElement("template"),C0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ys.createElementNS(A0,t):ys.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ys.createTextNode(t),createComment:t=>ys.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ys.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Xf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Xf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function S0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function b0(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&mu(s,r,"");for(const r in n)mu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Jf=/\s*!important$/;function mu(t,e,n){if(K(n))n.forEach(s=>mu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=P0(t,e);Jf.test(n)?t.setProperty(Vi(s),n.replace(Jf,""),"important"):t[s]=n}}const Zf=["Webkit","Moz","ms"],wc={};function P0(t,e){const n=wc[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return wc[e]=s;s=ml(s);for(let i=0;i<Zf.length;i++){const r=Zf[i]+s;if(r in t)return wc[e]=r}return e}const ep="http://www.w3.org/1999/xlink";function k0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ep,e.slice(6,e.length)):t.setAttributeNS(ep,e,n);else{const r=MI(e);n==null||r&&!Bm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function N0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function F_(t,e,n,s){t.addEventListener(e,n,s)}function O0(t,e,n,s){t.removeEventListener(e,n,s)}function D0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=x0(e);if(s){const c=r[e]=V0(s,i);F_(t,a,c,l)}else o&&(O0(t,a,o,l),r[e]=void 0)}}const tp=/(?:Once|Passive|Capture)$/;function x0(t){let e;if(tp.test(t)){e={};let s;for(;s=t.match(tp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vi(t.slice(2)),e]}let Rc=0;const M0=Promise.resolve(),L0=()=>Rc||(M0.then(()=>Rc=0),Rc=Date.now());function V0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wt(F0(s,n.value),e,5,[s])};return n.value=t,n.attached=L0(),n}function F0(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const np=/^on[a-z]/,U0=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?S0(t,s,i):e==="style"?b0(t,n,s):fl(e)?yh(e)||D0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B0(t,e,s,i))?N0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),k0(t,e,s,i))};function B0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&np.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||np.test(e)&&Fe(n)?!1:e in t}const sp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>la(e,n):e},zM={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=pl(e);F_(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Um(Ca(o)):Ca(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=sp(s)},mounted(t,{value:e}){ip(t,e)},beforeUpdate(t,e,n){t._assign=sp(n)},updated(t,{value:e}){ip(t,e)}};function ip(t,e){const n=t.multiple;if(!(n&&!K(e)&&!pl(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ca(r);if(n)K(e)?r.selected=VI(e,o)>-1:r.selected=e.has(o);else if(_l(Ca(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ca(t){return"_value"in t?t._value:t.value}const $0=["ctrl","shift","alt","meta"],j0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$0.some(n=>t[`${n}Key`]&&!e.includes(n))},GM=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=j0[e[i]];if(r&&r(n,e))return}return t(n,...s)},q0=We({patchProp:U0},C0);let rp;function H0(){return rp||(rp=r0(q0))}const W0=(...t)=>{const e=H0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=K0(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function K0(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Bi(e)},Bi=function(t){return new Error("Firebase Database ("+U_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},z0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new G0;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $_=function(t){const e=B_(t);return bl.encodeByteArray(e,!0)},Sa=function(t){return $_(t).replace(/\./g,"")},ba=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return j_(void 0,t)}function j_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y0(n)||(t[n]=j_(t[n],e[n]));return t}function Y0(t){return t!=="__proto__"}/**
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
 */function X0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J0=()=>X0().__FIREBASE_DEFAULTS__,Z0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ba(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return J0()||Z0()||eR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q_=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tR=t=>{const e=q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},H_=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config},W_=t=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function nR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sa(JSON.stringify(n)),Sa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function sR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iR(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z_(){return U_.NODE_ADMIN===!0}function G_(){try{return typeof indexedDB=="object"}catch{return!1}}function rR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=oR,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?aR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,s)}}function aR(t,e){return t.replace(lR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$r(ba(r[0])||""),n=$r(ba(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},cR=function(t){const e=Q_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uR=function(t){const e=Q_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _u(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(op(r)&&op(o)){if(!ka(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function op(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function dR(t,e){const n=new fR(t,e);return n.subscribe.bind(n)}class fR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ac),i.error===void 0&&(i.error=Ac),i.complete===void 0&&(i.complete=Ac);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}function gR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class _R{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Br;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vR(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yR(t){return t===gs?void 0:t}function vR(t){return t.instantiationMode==="EAGER"}/**
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
 */class ER{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _R(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const TR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},IR=ae.INFO,wR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},RR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class co{constructor(e){this.name=e,this._logLevel=IR,this._logHandler=RR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const AR=(t,e)=>e.some(n=>t instanceof n);let ap,lp;function CR(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SR(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,yu=new WeakMap,X_=new WeakMap,Cc=new WeakMap,$h=new WeakMap;function bR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,t)}).catch(()=>{}),$h.set(e,t),e}function PR(t){if(yu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});yu.set(t,e)}let vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){vu=t(vu)}function NR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sc(this),e,...n);return X_.set(s,e.sort?e.sort():[e]),Zn(s)}:SR().includes(t)?function(...e){return t.apply(Sc(this),e),Zn(Y_.get(this))}:function(...e){return Zn(t.apply(Sc(this),e))}}function OR(t){return typeof t=="function"?NR(t):(t instanceof IDBTransaction&&PR(t),AR(t,CR())?new Proxy(t,vu):t)}function Zn(t){if(t instanceof IDBRequest)return bR(t);if(Cc.has(t))return Cc.get(t);const e=OR(t);return e!==t&&(Cc.set(t,e),$h.set(e,t)),e}const Sc=t=>$h.get(t);function DR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xR=["get","getKey","getAll","getAllKeys","count"],MR=["put","add","delete","clear"],bc=new Map;function cp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=MR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bc.set(e,r),r}kR(t=>({...t,get:(e,n,s)=>cp(e,n)||t.get(e,n,s),has:(e,n)=>!!cp(e,n)||t.has(e,n)}));/**
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
 */class LR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",up="0.9.15";/**
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
 */const ks=new co("@firebase/app"),FR="@firebase/app-compat",UR="@firebase/analytics-compat",BR="@firebase/analytics",$R="@firebase/app-check-compat",jR="@firebase/app-check",qR="@firebase/auth",HR="@firebase/auth-compat",WR="@firebase/database",KR="@firebase/database-compat",zR="@firebase/functions",GR="@firebase/functions-compat",QR="@firebase/installations",YR="@firebase/installations-compat",XR="@firebase/messaging",JR="@firebase/messaging-compat",ZR="@firebase/performance",eA="@firebase/performance-compat",tA="@firebase/remote-config",nA="@firebase/remote-config-compat",sA="@firebase/storage",iA="@firebase/storage-compat",rA="@firebase/firestore",oA="@firebase/firestore-compat",aA="firebase",lA="10.1.0";/**
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
 */const Tu="[DEFAULT]",cA={[Eu]:"fire-core",[FR]:"fire-core-compat",[BR]:"fire-analytics",[UR]:"fire-analytics-compat",[jR]:"fire-app-check",[$R]:"fire-app-check-compat",[qR]:"fire-auth",[HR]:"fire-auth-compat",[WR]:"fire-rtdb",[KR]:"fire-rtdb-compat",[zR]:"fire-fn",[GR]:"fire-fn-compat",[QR]:"fire-iid",[YR]:"fire-iid-compat",[XR]:"fire-fcm",[JR]:"fire-fcm-compat",[ZR]:"fire-perf",[eA]:"fire-perf-compat",[tA]:"fire-rc",[nA]:"fire-rc-compat",[sA]:"fire-gcs",[iA]:"fire-gcs-compat",[rA]:"fire-fst",[oA]:"fire-fst-compat","fire-js":"fire-js",[aA]:"fire-js-all"};/**
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
 */const Na=new Map,Iu=new Map;function uA(t,e){try{t.container.addComponent(e)}catch(n){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Iu.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of Na.values())uA(n,t);return!0}function jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},es=new $i("app","Firebase",hA);/**
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
 */class dA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=lA;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw es.create("bad-app-name",{appName:String(i)});if(n||(n=H_()),!n)throw es.create("no-options");const r=Na.get(i);if(r){if(ka(n,r.options)&&ka(s,r.config))return r;throw es.create("duplicate-app",{appName:i})}const o=new ER(i);for(const l of Iu.values())o.addComponent(l);const a=new dA(n,s,o);return Na.set(i,a),a}function qh(t=Tu){const e=Na.get(t);if(!e&&t===Tu&&H_())return J_();if(!e)throw es.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=cA[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(a.join(" "));return}fn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fA="firebase-heartbeat-database",pA=1,jr="firebase-heartbeat-store";let Pc=null;function Z_(){return Pc||(Pc=DR(fA,pA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jr)}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function gA(t){try{return await(await Z_()).transaction(jr).objectStore(jr).get(ey(t))}catch(e){if(e instanceof yn)ks.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ks.warn(n.message)}}}async function hp(t,e){try{const s=(await Z_()).transaction(jr,"readwrite");await s.objectStore(jr).put(e,ey(t)),await s.done}catch(n){if(n instanceof yn)ks.warn(n.message);else{const s=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ks.warn(s.message)}}}function ey(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mA=1024,_A=30*24*60*60*1e3;class yA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=_A}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dp(),{heartbeatsToSend:n,unsentEntries:s}=vA(this._heartbeatsCache.heartbeats),i=Sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dp(){return new Date().toISOString().substring(0,10)}function vA(t,e=mA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class EA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G_()?rR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fp(t){return Sa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TA(t){fn(new zt("platform-logger",e=>new LR(e),"PRIVATE")),fn(new zt("heartbeat",e=>new yA(e),"PRIVATE")),bt(Eu,up,t),bt(Eu,up,"esm2017"),bt("fire-js","")}TA("");function Hh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IA=ty,ny=new $i("auth","Firebase",ty());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new co("@firebase/auth");function wA(t,...e){Oa.logLevel<=ae.WARN&&Oa.warn(`Auth (${cs}): ${t}`,...e)}function da(t,...e){Oa.logLevel<=ae.ERROR&&Oa.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw Wh(t,...e)}function un(t,...e){return Wh(t,...e)}function sy(t,e,n){const s=Object.assign(Object.assign({},IA()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function RA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&pn(t,"argument-error"),sy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ny.create(t,...e)}function J(t,e,...n){if(!t)throw Wh(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function On(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AA(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AA()||sR()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Bh()||K_()}get(){return CA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new uo(3e4,6e4);function ry(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ho(t,e,n,s,i={}){return oy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iy.fetch()(ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function oy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bA),e);try{const i=new NA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sy(t,u,c);pn(t,u)}}catch(i){if(i instanceof yn)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function kA(t,e,n,s,i={}){const r=await ho(t,e,n,s,i);return"mfaPendingCredential"in r&&pn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ay(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Kh(t.config,i):`${t.config.apiScheme}://${i}`}class NA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(un(this.auth,"network-request-failed")),PA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=un(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){return ho(t,"POST","/v1/accounts:delete",e)}async function DA(t,e){return ho(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=tt(t),s=await n.getIdToken(e),i=zh(s);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Tr(kc(i.auth_time)),issuedAtTime:Tr(kc(i.iat)),expirationTime:Tr(kc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function zh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const i=ba(n);return i?JSON.parse(i):(da("Failed to decode base64 JWT payload"),null)}catch(i){return da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function MA(t){const e=zh(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yn&&LA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function LA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Da(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qr(t,DA(n,{idToken:s}));J(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?BA(r.providerUserInfo):[],a=UA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ly(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function FA(t){const e=tt(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function BA(t){return t.map(e=>{var{providerId:n}=e,s=Hh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){const n=await oy(t,{},async()=>{const s=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ay(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $A(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Hr;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ss{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Hh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ly(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return FA(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qr(this,OA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:Y,providerData:G,stsTokenManager:ye}=n;J(k&&ye,e,"internal-error");const Ie=Hr.fromJSON(this.name,ye);J(typeof k=="string",e,"internal-error"),$n(h,e.name),$n(d,e.name),J(typeof A=="boolean",e,"internal-error"),J(typeof Y=="boolean",e,"internal-error"),$n(f,e.name),$n(m,e.name),$n(y,e.name),$n(v,e.name),$n(R,e.name),$n(P,e.name);const yt=new Ss({uid:k,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Ie,createdAt:R,lastLoginAt:P});return G&&Array.isArray(G)&&(yt.providerData=G.map(Ge=>Object.assign({},Ge))),v&&(yt._redirectEventId=v),yt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Hr;i.updateFromServerResponse(n);const r=new Ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Da(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Map;function Rn(t){On(t instanceof Function,"Expected a class definition");let e=gp.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gp.set(t,e),e)}/**
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
 */class cy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cy.type="NONE";const mp=cy;/**
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
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fa(this.userKey,i.apiKey,r),this.fullPersistenceKey=fa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(Rn(mp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Rn(mp);const o=fa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ss._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(py(e))return"Blackberry";if(gy(e))return"Webos";if(Gh(e))return"Safari";if((e.includes("chrome/")||hy(e))&&!e.includes("edge/"))return"Chrome";if(fy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function uy(t=ft()){return/firefox\//i.test(t)}function Gh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hy(t=ft()){return/crios\//i.test(t)}function dy(t=ft()){return/iemobile/i.test(t)}function fy(t=ft()){return/android/i.test(t)}function py(t=ft()){return/blackberry/i.test(t)}function gy(t=ft()){return/webos/i.test(t)}function kl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jA(t=ft()){var e;return kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qA(){return iR()&&document.documentMode===10}function my(t=ft()){return kl(t)||fy(t)||gy(t)||py(t)||/windows phone/i.test(t)||dy(t)}function HA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e=[]){let n;switch(t){case"Browser":n=_p(ft());break;case"Worker":n=`${_p(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${s}`}async function yy(t,e){return ho(t,"GET","/v2/recaptchaConfig",ry(t,e))}function yp(t){return t!==void 0&&t.enterprise!==void 0}class vy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ey(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=un("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",WA().appendChild(s)})}function KA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zA="https://www.google.com/recaptcha/enterprise.js?render=",GA="recaptcha-enterprise",QA="NO_RECAPTCHA";class YA{constructor(e){this.type=GA,this.auth=qi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{yy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;yp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(QA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&yp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ey(zA+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class XA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new XA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await yy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new YA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return tt(t)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){const n=jh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ka(r,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function eC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tC(t,e,n){const s=qi(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Ty(e),{host:o,port:a}=nC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sC()}function Ty(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nC(t){const e=Ty(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ep(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ep(o)}}}function Ep(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return kA(t,"POST","/v1/accounts:signInWithIdp",ry(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="http://localhost";class Ns extends Iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Hh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ns(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:iC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends Qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends fo{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends fo{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends fo{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ss._fromIdTokenResponse(e,s,i),o=Tp(s);return new wi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Tp(s);return new wi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends yn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xa(e,n,s,i)}}function wy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,r,e,s):r})}async function rC(t,e,n=!1){const s=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",s)}/**
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
 */async function oC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await qr(t,wy(s,i,e,t),n);J(r.idToken,s,"internal-error");const o=zh(r.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),wi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&pn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e,n=!1){const s="signIn",i=await wy(t,s,e),r=await wi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Ry(t,e,n,s){return tt(t).onIdTokenChanged(e,n,s)}function lC(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}const Ma="__sak";/**
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
 */class Ay{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){const t=ft();return Gh(t)||kl(t)}const uC=1e3,hC=10;class Cy extends Ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cC()&&HA(),this.fallbackToPolling=my(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);qA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},uC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cy.type="LOCAL";const dC=Cy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends Ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sy.type="SESSION";const by=Sy;/**
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
 */function fC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Nl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await fC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Yh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function gC(t){hn().location.href=t}/**
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
 */function Py(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function mC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _C(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yC(){return Py()?self:null}/**
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
 */const ky="firebaseLocalStorageDb",vC=1,La="firebaseLocalStorage",Ny="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function EC(){const t=indexedDB.deleteDatabase(ky);return new po(t).toPromise()}function Ru(){const t=indexedDB.open(ky,vC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(La,{keyPath:Ny})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(La)?e(s):(s.close(),await EC(),e(await Ru()))})})}async function Ip(t,e,n){const s=Ol(t,!0).put({[Ny]:e,value:n});return new po(s).toPromise()}async function TC(t,e){const n=Ol(t,!1).get(e),s=await new po(n).toPromise();return s===void 0?null:s.value}function wp(t,e){const n=Ol(t,!0).delete(e);return new po(n).toPromise()}const IC=800,wC=3;class Oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(yC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mC(),!this.activeServiceWorker)return;this.sender=new pC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_C()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ru();return await Ip(e,Ma,"1"),await wp(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ip(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ol(i,!1).getAll();return new po(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oy.type="LOCAL";const RC=Oy;new uo(3e4,6e4);/**
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
 */function Dy(t,e){return e?Rn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xh extends Iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AC(t){return aC(t.auth,new Xh(t),t.bypassAuthState)}function CC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),oC(n,new Xh(t),t.bypassAuthState)}async function SC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),rC(n,new Xh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AC;case"linkViaPopup":case"linkViaRedirect":return SC;case"reauthViaPopup":case"reauthViaRedirect":return CC;default:pn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new uo(2e3,1e4);async function QM(t,e,n){const s=qi(t);RA(t,e,Qh);const i=Dy(s,n);return new Es(s,"signInViaPopup",e,i).executeNotNull()}class Es extends xy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="pendingRedirect",pa=new Map;class kC extends xy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const s=await NC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NC(t,e){const n=xC(e),s=DC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function OC(t,e){pa.set(t._key(),e)}function DC(t){return Rn(t._redirectPersistence)}function xC(t){return fa(PC,t.config.apiKey,t.name)}async function YM(t,e){return await qi(t)._initializationPromise,My(t,e,!1)}async function My(t,e,n=!1){const s=qi(t),i=Dy(s,e),o=await new kC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=10*60*1e3;class LC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ly(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rp(e))}saveEventToCache(e){this.cachedEventUids.add(Rp(e)),this.lastProcessedEventTime=Date.now()}}function Rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ly(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e={}){return ho(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BC=/^https?/;async function $C(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FC(t);for(const n of e)try{if(jC(n))return}catch{}pn(t,"unauthorized-domain")}function jC(t){const e=wu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BC.test(n))return!1;if(UC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const qC=new uo(3e4,6e4);function Ap(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HC(t){return new Promise((e,n)=>{var s,i,r;function o(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),n(un(t,"network-request-failed"))},timeout:qC.get()})}if(!((i=(s=hn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=hn().gapi)===null||r===void 0)&&r.load)o();else{const a=KA("iframefcb");return hn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Ey(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ga=null,e})}let ga=null;function WC(t){return ga=ga||HC(t),ga}/**
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
 */const KC=new uo(5e3,15e3),zC="__/auth/iframe",GC="emulator/auth/iframe",QC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kh(e,GC):`https://${t.config.authDomain}/${zC}`,s={apiKey:e.apiKey,appName:t.name,v:cs},i=YC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ji(s).slice(1)}`}async function JC(t){const e=await WC(t),n=hn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:XC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=hn().setTimeout(()=>{r(o)},KC.get());function l(){hn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ZC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eS=500,tS=600,nS="_blank",sS="http://localhost";class Cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iS(t,e,n,s=eS,i=tS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ft().toLowerCase();n&&(a=hy(c)?nS:n),uy(c)&&(e=e||sS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(jA(c)&&a!=="_self")return rS(e||"",a),new Cp(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Cp(h)}function rS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const oS="__/auth/handler",aS="emulator/auth/handler",lS=encodeURIComponent("fac");async function Sp(t,e,n,s,i,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:cs,eventId:i};if(e instanceof Qh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_u(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof fo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${lS}=${encodeURIComponent(l)}`:"";return`${cS(t)}?${ji(a).slice(1)}${c}`}function cS({config:t}){return t.emulator?Kh(t,aS):`https://${t.authDomain}/${oS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=by,this._completeRedirectFn=My,this._overrideRedirectResult=OC}async _openPopup(e,n,s,i){var r;On((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Sp(e,n,s,wu(),i);return iS(e,o,Yh())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Sp(e,n,s,wu(),i);return gC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(On(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await JC(e),s=new LC(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Nc];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$C(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return my()||Gh()||kl()}}const hS=uS;var bp="@firebase/auth",Pp="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pS(t){fn(new zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_y(t)},c=new JA(s,i,r,l);return eC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fn(new zt("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(s=>new dS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(bp,Pp,fS(t)),bt(bp,Pp,"esm2017")}/**
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
 */const gS=5*60,mS=W_("authIdTokenMaxAge")||gS;let kp=null;const _S=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mS)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vy(t=qh()){const e=jh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZA(t,{popupRedirectResolver:hS,persistence:[RC,dC,by]}),s=W_("authTokenSyncURL");if(s){const r=_S(s);lC(n,r,()=>r(n.currentUser)),Ry(n,o=>r(o))}const i=q_("auth");return i&&tC(n,`http://${i}`),n}pS("Browser");var yS=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new Map,ES={activated:!1,tokenObservers:[]};function Gt(t){return vS.get(t)||Object.assign({},ES)}const Np={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Br,await IS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Br,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function IS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Va=new $i("appCheck","AppCheck",wS);function Fy(t){if(!Gt(t).activated)throw Va.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="firebase-app-check-database",AS=1,Au="firebase-app-check-store";let Ko=null;function CS(){return Ko||(Ko=new Promise((t,e)=>{try{const n=indexedDB.open(RS,AS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Va.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Au,{keyPath:"compositeKey"})}}}catch(n){e(Va.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ko)}function SS(t,e){return bS(PS(t),e)}async function bS(t,e){const s=(await CS()).transaction(Au,"readwrite"),r=s.objectStore(Au).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Va.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function PS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new co("@firebase/app-check");function Op(t,e){return G_()?SS(t,e).catch(n=>{Cu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={error:"UNKNOWN_ERROR"};function NS(t){return bl.encodeString(JSON.stringify(t),!1)}async function Su(t,e=!1){const n=t.app;Fy(n);const s=Gt(n);let i=s.token,r;if(i&&!dr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(dr(l)?i=l:await Op(n,void 0))}if(!e&&i&&dr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Gt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Cu.warn(l.message):Cu.error(l),r=l}let a;return i?r?dr(i)?a={token:i.token,internalError:r}:a=xp(r):(a={token:i.token},s.token=i,await Op(n,i)):a=xp(r),o&&MS(n,a),a}async function OS(t){const e=t.app;Fy(e);const{provider:n}=Gt(e);{const{token:s}=await n.getToken();return{token:s}}}function DS(t,e,n,s){const{app:i}=t,r=Gt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&dr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Dp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Dp(t))}function Uy(t,e){const n=Gt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Dp(t){const{app:e}=t,n=Gt(e);let s=n.tokenRefresher;s||(s=xS(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function xS(t){const{app:e}=t;return new TS(async()=>{const n=Gt(e);let s;if(n.token?s=await Su(t,!0):s=await Su(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Gt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Np.RETRIAL_MIN_WAIT,Np.RETRIAL_MAX_WAIT)}function MS(t,e){const n=Gt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function dr(t){return t.expireTimeMillis-Date.now()>0}function xp(t){return{token:NS(kS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Gt(this.app);for(const n of e)Uy(this.app,n.next);return Promise.resolve()}}function VS(t,e){return new LS(t,e)}function FS(t){return{getToken:e=>Su(t,e),getLimitedUseToken:()=>OS(t),addTokenListener:e=>DS(t,"INTERNAL",e),removeTokenListener:e=>Uy(t.app,e)}}const US="@firebase/app-check",BS="0.8.0",$S="app-check",Mp="app-check-internal";function jS(){fn(new zt($S,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return VS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Mp).initialize()})),fn(new zt(Mp,t=>{const e=t.getProvider("app-check").getImmediate();return FS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),bt(US,BS)}jS();var qS="firebase",HS="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(qS,HS,"app");const By=Symbol("firebaseApp");function go(t){return x_()&&St(By,null)||qh(t)}const rn=()=>{},WS=typeof window<"u";function Jh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function KS(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Bs(t){return!!t&&typeof t=="object"}const zS=Object.prototype;function GS(t){return Bs(t)&&Object.getPrototypeOf(t)===zS}function Zh(t){return Bs(t)&&t.type==="document"}function QS(t){return Bs(t)&&t.type==="collection"}function YS(t){return Zh(t)||QS(t)}function XS(t){return Bs(t)&&t.type==="query"}function JS(t){return Bs(t)&&"ref"in t}function ZS(t){return Bs(t)&&typeof t.bucket=="string"}function eb(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const tb=Symbol.for("v-scx");function nb(){return!!St(tb,0)}const zo=new WeakMap;function sb(t,e){if(!zo.has(t)){const n=qm(!0);zo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),zo.delete(t)}}return zo.get(t)}const $y=new WeakMap;function ib(t){return $y.get(go(t))}const Go=new WeakMap;function jy(t){const e=go(t);if(!Go.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Go.set(e,r),n(r.value)}];Go.set(e,i)}return Go.get(e)}function rb(t){const e=jy(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function ob(t,e){const n=Vy(e);Ry(n,s=>{const i=jy();t.value=s,Array.isArray(i)&&i[1](t)})}const Lp="@firebase/database",Vp="1.0.1";/**
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
 */let qy="";function ab(t){qy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$r(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lb(e)}}catch{}return new cb},Ts=Hy("localStorage"),bu=Hy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new co("@firebase/database"),ub=function(){let t=1;return function(){return t++}}(),Wy=function(t){const e=mR(t),n=new hR;n.update(e);const s=n.digest();return bl.encodeByteArray(s)},mo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mo.apply(null,s):typeof s=="object"?e+=Xe(s):e+=s,e+=" "}return e};let bs=null,Fp=!0;const hb=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fi.logLevel=ae.VERBOSE,bs=fi.log.bind(fi),e&&bu.set("logging_enabled",!0)):typeof t=="function"?bs=t:(bs=null,bu.remove("logging_enabled"))},ot=function(...t){if(Fp===!0&&(Fp=!1,bs===null&&bu.get("logging_enabled")===!0&&hb(!0)),bs){const e=mo.apply(null,t);bs(e)}},_o=function(t){return function(...e){ot(t,...e)}},Pu=function(...t){const e="FIREBASE INTERNAL ERROR: "+mo(...t);fi.error(e)},Os=function(...t){const e=`FIREBASE FATAL ERROR: ${mo(...t)}`;throw fi.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+mo(...t);fi.warn(e)},db=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ky=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ri="[MIN_NAME]",Ds="[MAX_NAME]",Hi=function(t,e){if(t===e)return 0;if(t===Ri||e===Ds)return-1;if(e===Ri||t===Ds)return 1;{const n=Up(t),s=Up(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},pb=function(t,e){return t===e?0:t<e?-1:1},nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},ed=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Xe(e[s]),n+=":",n+=ed(t[e[s]]);return n+="}",n},zy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Mt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gy=function(t){x(!Ky(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},_b=new RegExp("^-?(0*)\\d{1,10}$"),yb=-2147483648,vb=2147483647,Up=function(t){if(_b.test(t)){const e=Number(t);if(e>=yb&&e<=vb)return e}return null},yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Eb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ir=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Tb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ku.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="5",Qy="v",Yy="s",Xy="r",Jy="f",Zy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ev="ls",tv="p",Nu="ac",nv="websocket",sv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Rb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===nv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Rb(t)&&(n.ns=t.namespace);const i=[];return Mt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.counters_={}}incrementCounter(e,n=1){Vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={},Dc={};function nd(t){const e=t.toString();return Oc[e]||(Oc[e]=new Ab),Oc[e]}function Cb(t,e){const n=t.toString();return Dc[n]||(Dc[n]=e()),Dc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="start",bb="close",Pb="pLPCommand",kb="pRTLPCB",rv="id",ov="pw",av="ser",Nb="cb",Ob="seg",Db="ts",xb="d",Mb="dframe",lv=1870,cv=30,Lb=lv-cv,Vb=25e3,Fb=3e4;class ni{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=nd(n),this.urlFn=l=>(this.appCheckToken&&(l[Nu]=this.appCheckToken),iv(n,sv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Sb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fb)),fb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bp)this.id=a,this.password=l;else if(o===bb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Bp]="t",s[av]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Nb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qy]=td,this.transportSessionId&&(s[Yy]=this.transportSessionId),this.lastSessionId&&(s[ev]=this.lastSessionId),this.applicationId&&(s[tv]=this.applicationId),this.appCheckToken&&(s[Nu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(s[Xy]=Jy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gb()&&!mb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$_(n),i=zy(s,Lb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Mb]="t",s[rv]=e,s[ov]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ub(),window[Pb+this.uniqueCallbackIdentifier]=e,window[kb+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rv]=this.myID,e[ov]=this.myPW,e[av]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cv+s.length<=lv;){const o=this.pendingSegs.shift();s=s+"&"+Ob+i+"="+o.seg+"&"+Db+i+"="+o.ts+"&"+xb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Vb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=16384,Bb=45e3;let Fa=null;typeof MozWebSocket<"u"?Fa=MozWebSocket:typeof WebSocket<"u"&&(Fa=WebSocket);class Bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=nd(n),this.connURL=Bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Qy]=td,typeof location<"u"&&location.hostname&&Zy.test(location.hostname)&&(o[Xy]=Jy),n&&(o[Yy]=n),s&&(o[ev]=s),i&&(o[Nu]=i),r&&(o[tv]=r),iv(e,nv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ts.set("previous_websocket_failure",!0);try{let s;z_(),this.mySock=new Fa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fa!==null&&!Bt.forceDisallow_}static previouslyFailed(){return Ts.isInMemoryStorage||Ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$r(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zy(n,Ub);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const i=this.transports_=[];for(const r of Wr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=6e4,jb=5e3,qb=10*1024,Hb=100*1024,xc="t",$p="d",Wb="s",jp="r",Kb="e",qp="o",Hp="a",Wp="n",Kp="p",zb="h";class Gb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new Wr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ir(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xc in e){const n=e[xc];n===Hp?this.upgradeIfSecondaryHealthy_():n===jp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nr(xc,e);if($p in e){const s=e[$p];if(n===zb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wb?this.onConnectionShutdown_(s):n===jp?this.onReset_(s):n===Kb?Pu("Server Error: "+s):n===qp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),td!==s&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ir(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($b))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ir(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends hv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ua}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=32,Gp=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Se("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function dv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function He(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return Dt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gv(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function jt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Yb{constructor(e,n){this.errorPrefix_=n,this.parts_=fv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Pl(this.parts_[s]);mv(this)}}function Xb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Pl(e),mv(t)}function Jb(t){const e=t.parts_.pop();t.byteLength_-=Pl(e),t.parts_.length>0&&(t.byteLength_-=1)}function mv(t){if(t.byteLength_>Gp)throw new Error(t.errorPrefix_+"has a key path longer than "+Gp+" bytes ("+t.byteLength_+").");if(t.parts_.length>zp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zp+") or object contains a cycle "+ms(t))}function ms(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends hv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new id}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1e3,Zb=60*5*1e3,Qp=30*1e3,eP=1.3,tP=3e4,nP="server_kill",Yp=3;class Sn extends uv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sr,this.maxReconnectDelay_=Zb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!z_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Xe(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Br,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vn(e,"w")){const s=Ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pu("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tP&&(this.reconnectDelay_=sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Gb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Pt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(nP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pt(h),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_u(this.interruptReasons_)&&(this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ed(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yp&&(this.reconnectDelay_=Qp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qy.replace(/\./g,"-")]=1,Bh()?e["framework.cordova"]=1:K_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ua.getInstance().currentlyOnline();return _u(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(Ri,e),i=new ie(Ri,n);return this.compare(s,i)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class _v extends Dl{static get __EMPTY_NODE(){return Qo}static set __EMPTY_NODE(e){Qo=e}compare(e,n){return Hi(e.name,n.name)}isDefinedOn(e){throw Bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Ds,Qo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Qo)}toString(){return".key"}}const pi=new _v;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ct=class fr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??fr.RED,this.left=i??on.EMPTY_NODE,this.right=r??on.EMPTY_NODE}copy(e,n,s,i,r){return new fr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return on.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return on.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ct.RED=!0;Ct.BLACK=!1;class sP{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let on=class ma{constructor(e,n=ma.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ma(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new ma(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Yo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Yo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Yo(this.root_,null,this.comparator_,!0,e)}};on.EMPTY_NODE=new sP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e){return Hi(t.name,e.name)}function rd(t,e){return Hi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;function rP(t){Ou=t}const yv=function(t){return typeof t=="number"?"number:"+Gy(t):"string:"+t},vv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vn(e,".sv"),"Priority must be a string or number.")}else x(t===Ou||t.isEmpty(),"priority of unexpected type.");x(t===Ou||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xp;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vv(this.priorityNode_)}static set __childrenNodeConstructor(e){Xp=e}static get __childrenNodeConstructor(){return Xp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gy(this.value_):e+=this.value_,this.lazyHash_=Wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ev,Tv;function oP(t){Ev=t}function aP(t){Tv=t}class lP extends Dl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ds,new Be("[PRIORITY-POST]",Tv))}makePost(e,n){const s=Ev(e);return new ie(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const ct=new lP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=Math.log(2);class uP{constructor(e){const n=r=>parseInt(Math.log(r)/cP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ba=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ct(d,h.node,Ct.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new Ct(d,h.node,Ct.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,R=h;h-=m;const P=i(v+1,R),k=t[v],A=n?n(k):k;f(new Ct(A,k.node,y,null,P))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,Ct.BLACK):(d(v,Ct.BLACK),d(v,Ct.RED))}return u},o=new uP(t.length),a=r(o);return new on(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc;const Ys={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Ys&&ct,"ChildrenNode.ts has not been loaded"),Mc=Mc||new An({".priority":Ys},{".priority":ct}),Mc}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof on?n:null}hasIndex(e){return Vn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ie.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ba(s,e.getCompare()):a=Ys;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new An(u,c)}addToIndexes(e,n){const s=Pa(this.indexes_,(i,r)=>{const o=Ii(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Ys)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ba(a,o.getCompare())}else return Ys;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new An(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pa(this.indexes_,i=>{if(i===Ys)return i;{const r=n.get(e.name);return r?i.remove(new ie(e.name,r)):i}});return new An(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;class fe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ir||(ir=new fe(new on(rd),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ir}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ir:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ir:this.priorityNode_;return new fe(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{x(se(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ct,(o,a)=>{n[o]=a.val(e),s++,r&&fe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yv(this.getPriority().val())+":"),this.forEachChild(ct,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ct),i=n.getIterator(ct);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hP extends fe{constructor(){super(new on(rd),fe.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const vo=new hP;Object.defineProperties(ie,{MIN:{value:new ie(Ri,fe.EMPTY_NODE)},MAX:{value:new ie(Ds,vo)}});_v.__EMPTY_NODE=fe.EMPTY_NODE;Be.__childrenNodeConstructor=fe;rP(vo);aP(vo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=!0;function at(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,at(e))}if(!(t instanceof Array)&&dP){const n=[];let s=!1;if(Mt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return fe.EMPTY_NODE;const r=Ba(n,iP,o=>o.name,rd);if(s){const o=Ba(n,ct.getCompare());return new fe(r,at(e),new An({".priority":o},{".priority":ct}))}else return new fe(r,at(e),An.Default)}else{let n=fe.EMPTY_NODE;return Mt(t,(s,i)=>{if(Vn(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}oP(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends Dl{constructor(e){super(),this.indexPath_=e,x(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hi(e.name,n.name):r}makePost(e,n){const s=at(e),i=fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,i)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,vo);return new ie(Ds,e)}toString(){return fv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP extends Dl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=at(e);return new ie(n,s)}toString(){return".value"}}const gP=new pP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return{type:"value",snapshotNode:t}}function _P(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ri}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ct?n="$priority":t.index_===gP?n="$value":t.index_===pi?n="$key":(x(t.index_ instanceof fP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function eg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ct&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends uv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$a.getListenId_(e,s),a={};this.listens_[o]=a;const l=Zp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ii(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=$a.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zp(e._queryParams),s=e._path.toString(),i=new Br;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ji(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$r(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){return{value:null,children:new Map}}function Iv(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,ja());const i=t.children.get(s);e=Ae(e),Iv(i,e,n)}}function Du(t,e,n){t.value!==null?n(e,t.value):TP(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);Du(i,r,n)})}function TP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Mt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=10*1e3,wP=30*1e3,RP=5*60*1e3;class AP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new IP(e);const s=tg+(wP-tg)*Math.random();Ir(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Mt(e,(i,r)=>{r>0&&Vn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ir(this.reportStats_.bind(this),Math.floor(Math.random()*2*RP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(an||(an={}));function wv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Av(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=an.ACK_USER_WRITE,this.source=wv()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new qa(_e(),n,this.revert)}}else return x(se(this.path)===e,"operationForChild called for unrelated child."),new qa(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=an.OVERWRITE}operationForChild(e){return te(this.path)?new xs(this.source,_e(),this.snap.getImmediateChild(e)):new xs(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=an.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new xs(this.source,_e(),n.value):new Kr(this.source,_e(),n)}else return x(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function CP(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vP(o.childName,o.snapshotNode))}),rr(t,i,"child_removed",e,s,n),rr(t,i,"child_added",e,s,n),rr(t,i,"child_moved",r,s,n),rr(t,i,"child_changed",e,s,n),rr(t,i,"value",e,s,n),i}function rr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>bP(t,a,l)),o.forEach(a=>{const l=SP(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function SP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bP(t,e,n){if(e.childName==null||n.childName==null)throw Bi("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){return{eventCache:t,serverCache:e}}function wr(t,e,n,s){return Cv(new ad(e,n,s),t.serverCache)}function Sv(t,e,n,s){return Cv(t.eventCache,new ad(e,n,s))}function xu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;const PP=()=>(Lc||(Lc=new on(pb)),Lc);class we{constructor(e,n=PP()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Mt(e,(s,i)=>{n=n.set(new Se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:He(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new we(null)}}set(e,n){if(te(e))return new we(n,this.children);{const s=se(e),r=(this.children.get(s)||new we(null)).set(Ae(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new we(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(He(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),He(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),He(n,i),s):new we(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(He(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new we(null))}}function Rr(t,e,n){if(te(e))return new Kt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Dt(i,e);return r=r.updateChild(o,n),new Kt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Kt(r)}}}function ng(t,e,n){let s=t;return Mt(n,(i,r)=>{s=Rr(s,He(e,i),r)}),s}function sg(t,e){if(te(e))return Kt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Kt(n)}}function Mu(t,e){return $s(t,e)!=null}function $s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function ig(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ct,(s,i)=>{e.push(new ie(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ie(s,i.value))}),e}function ts(t,e){if(te(e))return t;{const n=$s(t,e);return n!=null?new Kt(new we(n)):new Kt(t.writeTree_.subtree(e))}}function Lu(t){return t.writeTree_.isEmpty()}function Ai(t,e){return bv(_e(),t.writeTree_,e)}function bv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=bv(He(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(He(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t,e){return xv(e,t)}function kP(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Rr(t.visibleWrites,e,n)),t.lastWriteId=s}function NP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function OP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&DP(a,s.path)?i=!1:jt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return xP(t),!0;if(s.snap)t.visibleWrites=sg(t.visibleWrites,s.path);else{const a=s.children;Mt(a,l=>{t.visibleWrites=sg(t.visibleWrites,He(s.path,l))})}return!0}else return!1}function DP(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(He(t.path,n),e))return!0;return!1}function xP(t){t.visibleWrites=kv(t.allWrites,MP,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MP(t){return t.visible}function kv(t,e,n){let s=Kt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)jt(n,o)?(a=Dt(n,o),s=Rr(s,a,r.snap)):jt(o,n)&&(a=Dt(o,n),s=Rr(s,_e(),r.snap.getChild(a)));else if(r.children){if(jt(n,o))a=Dt(n,o),s=ng(s,a,r.children);else if(jt(o,n))if(a=Dt(o,n),te(a))s=ng(s,_e(),r.children);else{const l=Ii(r.children,se(a));if(l){const c=l.getChild(Ae(a));s=Rr(s,_e(),c)}}}else throw Bi("WriteRecord should have .snap or .children")}}return s}function Nv(t,e,n,s,i){if(!s&&!i){const r=$s(t.visibleWrites,e);if(r!=null)return r;{const o=ts(t.visibleWrites,e);if(Lu(o))return n;if(n==null&&!Mu(o,_e()))return null;{const a=n||fe.EMPTY_NODE;return Ai(o,a)}}}else{const r=ts(t.visibleWrites,e);if(!i&&Lu(r))return n;if(!i&&n==null&&!Mu(r,_e()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(jt(c.path,e)||jt(e,c.path))},a=kv(t.allWrites,o,e),l=n||fe.EMPTY_NODE;return Ai(a,l)}}}function LP(t,e,n){let s=fe.EMPTY_NODE;const i=$s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ct,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ts(t.visibleWrites,e);return n.forEachChild(ct,(o,a)=>{const l=Ai(ts(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),ig(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ts(t.visibleWrites,e);return ig(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function VP(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,n);if(Mu(t.visibleWrites,r))return null;{const o=ts(t.visibleWrites,r);return Lu(o)?i.getChild(n):Ai(o,i.getChild(n))}}function FP(t,e,n,s){const i=He(e,n),r=$s(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ts(t.visibleWrites,i);return Ai(o,s.getNode().getImmediateChild(n))}else return null}function UP(t,e){return $s(t.visibleWrites,e)}function BP(t,e,n,s,i,r,o){let a;const l=ts(t.visibleWrites,e),c=$s(l,_e());if(c!=null)a=c;else if(n!=null)a=Ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function $P(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Vu(t,e,n,s){return Nv(t.writeTree,t.treePath,e,n,s)}function Ov(t,e){return LP(t.writeTree,t.treePath,e)}function rg(t,e,n,s){return VP(t.writeTree,t.treePath,e,n,s)}function Ha(t,e){return UP(t.writeTree,He(t.treePath,e))}function jP(t,e,n,s,i,r){return BP(t.writeTree,t.treePath,e,n,s,i,r)}function ld(t,e,n){return FP(t.writeTree,t.treePath,e,n)}function Dv(t,e){return xv(He(t.treePath,e),t.writeTree)}function xv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Jp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,yP(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,_P(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Jp(s,e.snapshotNode,i.oldSnap));else throw Bi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mv=new HP;class cd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ld(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ms(this.viewCache_),r=jP(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function WP(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KP(t,e,n,s,i){const r=new qP;let o,a;if(n.type===an.OVERWRITE){const c=n;c.source.fromUser?o=Fu(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=Wa(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===an.MERGE){const c=n;c.source.fromUser?o=GP(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Uu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===an.ACK_USER_WRITE){const c=n;c.revert?o=XP(t,e,c.path,s,i,r):o=QP(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===an.LISTEN_COMPLETE)o=YP(t,e,n.path,s,r);else throw Bi("Unknown operation type: "+n.type);const l=r.getChanges();return zP(e,o,l),{viewCache:o,changes:l}}function zP(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(mP(xu(e)))}}function Lv(t,e,n,s,i,r){const o=e.eventCache;if(Ha(s,n)!=null)return e;{let a,l;if(te(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ms(e),u=c instanceof fe?c:fe.EMPTY_NODE,h=Ov(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Vu(s,Ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){x(rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=rg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=rg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ld(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return wr(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Wa(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=se(n);if(!l.isCompleteForPath(n)&&rs(n)>1)return e;const m=Ae(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,Mv,null)}const h=Sv(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),d=new cd(i,h,r);return Lv(t,h,n,i,d,a)}function Fu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new cd(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=wr(e,c,!0,t.filter.filtersNodes());else{const h=se(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=wr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),f=a.getNode().getImmediateChild(h);let m;if(te(d))m=s;else{const y=u.getCompleteChild(h);y!=null?dv(d)===".priority"&&y.getChild(pv(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=fe.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=wr(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function og(t,e){return t.eventCache.isCompleteForChild(e)}function GP(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=He(n,l);og(e,se(u))&&(a=Fu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=He(n,l);og(e,se(u))||(a=Fu(t,a,u,c,i,r,o))}),a}function ag(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Uu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=ag(t,f,d);l=Wa(t,l,new Se(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=ag(t,m,d);l=Wa(t,l,new Se(h),y,i,r,o,a)}}),l}function QP(t,e,n,s,i,r,o){if(Ha(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wa(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new we(null);return l.getNode().forEachChild(pi,(u,h)=>{c=c.set(new Se(u),h)}),Uu(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=He(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Uu(t,e,n,c,i,r,a,o)}}function YP(t,e,n,s,i){const r=e.serverCache,o=Sv(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return Lv(t,o,n,s,Mv,i)}function XP(t,e,n,s,i,r){let o;if(Ha(s,n)!=null)return e;{const a=new cd(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vu(s,Ms(e));else{const h=e.serverCache.getNode();x(h instanceof fe,"serverChildren would be complete if leaf node"),u=Ov(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let h=ld(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,fe.EMPTY_NODE,Ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vu(s,Ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ha(s,_e())!=null,wr(e,c,o,t.filter.filtersNodes())}}function JP(t,e){const n=Ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function lg(t,e,n,s){e.type===an.MERGE&&e.source.queryId!==null&&(x(Ms(t.viewCache_),"We should always have a full cache before handling merges"),x(xu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=KP(t.processor_,i,e,n,s);return WP(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ZP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ZP(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return CP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg;function ek(t){x(!cg,"__referenceConstructor has already been defined"),cg=t}function ud(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),lg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(lg(o,e,n,s));return r}}function hd(t,e){let n=null;for(const s of t.views.values())n=n||JP(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;function tk(t){x(!ug,"__referenceConstructor has already been defined"),ug=t}class hg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=$P(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nk(t,e,n,s,i){return kP(t.pendingWriteTree_,e,n,s,i),i?Ml(t,new xs(wv(),e,n)):[]}function si(t,e,n=!1){const s=NP(t.pendingWriteTree_,e);if(OP(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(_e(),!0):Mt(s.children,o=>{r=r.set(new Se(o),!0)}),Ml(t,new qa(s.path,r,n))}else return[]}function xl(t,e,n){return Ml(t,new xs(Rv(),e,n))}function sk(t,e,n){const s=we.fromObject(n);return Ml(t,new Kr(Rv(),e,s))}function ik(t,e,n,s){const i=Bv(t,s);if(i!=null){const r=$v(i),o=r.path,a=r.queryId,l=Dt(o,e),c=new xs(Av(a),l,n);return jv(t,o,c)}else return[]}function rk(t,e,n,s){const i=Bv(t,s);if(i){const r=$v(i),o=r.path,a=r.queryId,l=Dt(o,e),c=we.fromObject(n),u=new Kr(Av(a),l,c);return jv(t,o,u)}else return[]}function Vv(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Dt(o,e),c=hd(a,l);if(c)return c});return Nv(i,e,r,n,!0)}function Ml(t,e){return Fv(e,t.syncPointTree_,null,Pv(t.pendingWriteTree_,_e()))}function Fv(t,e,n,s){if(te(t.path))return Uv(t,e,n,s);{const i=e.get(_e());n==null&&i!=null&&(n=hd(i,_e()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Dv(s,o);r=r.concat(Fv(a,l,c,u))}return i&&(r=r.concat(ud(i,t,s,n))),r}}function Uv(t,e,n,s){const i=e.get(_e());n==null&&i!=null&&(n=hd(i,_e()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Dv(s,o),u=t.operationForChild(o);u&&(r=r.concat(Uv(u,a,l,c)))}),i&&(r=r.concat(ud(i,t,s,n))),r}function Bv(t,e){return t.tagToQueryMap.get(e)}function $v(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function jv(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=Pv(t.pendingWriteTree_,e);return ud(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dd(n)}node(){return this.node_}}class fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new fd(this.syncTree_,n)}node(){return Vv(this.syncTree_,this.path_)}}const ok=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ak(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ak=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},lk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ck=function(t,e,n,s){return pd(e,new fd(n,t),s)},uk=function(t,e,n){return pd(t,new dd(e),n)};function pd(t,e,n){const s=t.getPriority().val(),i=dg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=dg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(ct,(a,l)=>{const c=pd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function md(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=se(n);for(;i!==null;){const r=Ii(s.node.children,i)||{children:{},childCount:0};s=new gd(i,s,r),n=Ae(n),i=se(n)}return s}function Wi(t){return t.node.value}function qv(t,e){t.node.value=e,Bu(t)}function Hv(t){return t.node.childCount>0}function hk(t){return Wi(t)===void 0&&!Hv(t)}function Ll(t,e){Mt(t.node.children,(n,s)=>{e(new gd(n,t,s))})}function Wv(t,e,n,s){n&&!s&&e(t),Ll(t,i=>{Wv(i,e,!0,s)}),n&&s&&e(t)}function dk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Eo(t){return new Se(t.parent===null?t.name:Eo(t.parent)+"/"+t.name)}function Bu(t){t.parent!==null&&fk(t.parent,t.name,t)}function fk(t,e,n){const s=hk(n),i=Vn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Bu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=/[\[\].#$\/\u0000-\u001F\u007F]/,gk=/[\[\].#$\u0000-\u001F\u007F]/,Vc=10*1024*1024,Kv=function(t){return typeof t=="string"&&t.length!==0&&!pk.test(t)},mk=function(t){return typeof t=="string"&&t.length!==0&&!gk.test(t)},_k=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mk(t)},zv=function(t,e,n){const s=n instanceof Se?new Yb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ms(s));if(typeof e=="function")throw new Error(t+"contains a function "+ms(s)+" with contents = "+e.toString());if(Ky(e))throw new Error(t+"contains "+e.toString()+" "+ms(s));if(typeof e=="string"&&e.length>Vc/3&&Pl(e)>Vc)throw new Error(t+"contains a string greater than "+Vc+" utf8 bytes "+ms(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Mt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Kv(o)))throw new Error(t+" contains an invalid key ("+o+") "+ms(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xb(s,o),zv(t,a,s),Jb(s)}),i&&r)throw new Error(t+' contains ".value" child '+ms(s)+" in addition to actual children.")}},yk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_k(n))throw new Error(gR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ek(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!gv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function js(t,e,n){Ek(t,n),Tk(t,s=>jt(s,e)||jt(e,s))}function Tk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Ik(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ik(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();bs&&ot("event: "+n.toString()),yo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="repo_interrupt",Rk=25;class Ak{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ja(),this.transactionQueueTree_=new gd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ck(t,e,n){if(t.stats_=nd(t.repoInfo_),t.forceRestClient_||Eb())t.server_=new $a(t.repoInfo_,(s,i,r,o)=>{fg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(s,i,r,o)=>{fg(t,s,i,r,o)},s=>{pg(t,s)},s=>{bk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Cb(t.repoInfo_,()=>new AP(t.stats_,t.server_)),t.infoData_=new EP,t.infoSyncTree_=new hg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=xl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_d(t,"connected",!1),t.serverSyncTree_=new hg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);js(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Sk(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gv(t){return ok({timestamp:Sk(t)})}function fg(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Pa(n,c=>at(c));o=rk(t.serverSyncTree_,r,l,i)}else{const l=at(n);o=ik(t.serverSyncTree_,r,l,i)}else if(s){const l=Pa(n,c=>at(c));o=sk(t.serverSyncTree_,r,l)}else{const l=at(n);o=xl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=vd(t,r)),js(t.eventQueue_,a,o)}function pg(t,e){_d(t,"connected",e),e===!1&&kk(t)}function bk(t,e){Mt(e,(n,s)=>{_d(t,n,s)})}function _d(t,e,n){const s=new Se("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=xl(t.infoSyncTree_,s,i);js(t.eventQueue_,s,r)}function Pk(t){return t.nextWriteId_++}function kk(t){Qv(t,"onDisconnectEvents");const e=Gv(t),n=ja();Du(t.onDisconnect_,_e(),(i,r)=>{const o=ck(i,r,t.serverSyncTree_,e);Iv(n,i,o)});let s=[];Du(n,_e(),(i,r)=>{s=s.concat(xl(t.serverSyncTree_,i,r));const o=xk(t,i);vd(t,o)}),t.onDisconnect_=ja(),js(t.eventQueue_,_e(),s)}function Nk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wk)}function Qv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Yv(t,e,n){return Vv(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function yd(t,e=t.transactionQueueTree_){if(e||Vl(t,e),Wi(e)){const n=Jv(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ok(t,Eo(e),n)}else Hv(e)&&Ll(e,n=>{yd(t,n)})}function Ok(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yv(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Dt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(si(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Vl(t,md(t.transactionQueueTree_,e)),yd(t,t.transactionQueueTree_),js(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)yo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}vd(t,e)}},o)}function vd(t,e){const n=Xv(t,e),s=Eo(n),i=Jv(t,n);return Dk(t,i,s),s}function Dk(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Dt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Rk)u=!0,h="maxretry",i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Yv(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){zv("transaction failed: Data returned ",f,l.path);let m=at(f);typeof f=="object"&&f!=null&&Vn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,R=Gv(t),P=uk(m,d,R);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=Pk(t),o.splice(o.indexOf(v),1),i=i.concat(nk(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(si(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(si(t.serverSyncTree_,l.currentWriteId,!0))}js(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)yo(s[a]);yd(t,t.transactionQueueTree_)}function Xv(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&Wi(s)===void 0;)s=md(s,n),e=Ae(e),n=se(e);return s}function Jv(t,e){const n=[];return Zv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zv(t,e,n){const s=Wi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ll(e,i=>{Zv(t,i,n)})}function Vl(t,e){const n=Wi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,qv(e,n.length>0?n:void 0)}Ll(e,s=>{Vl(t,s)})}function xk(t,e){const n=Eo(Xv(t,e)),s=md(t.transactionQueueTree_,e);return dk(s,i=>{Fc(t,i)}),Fc(t,s),Wv(s,i=>{Fc(t,i)}),n}function Fc(t,e){const n=Wi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qv(e,void 0):n.length=r+1,js(t.eventQueue_,Eo(e),i);for(let o=0;o<s.length;o++)yo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Lk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const gg=function(t,e){const n=Vk(t),s=n.namespace;n.domain==="firebase.com"&&Os(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Os("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||db();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wb(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},Vk=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Mk(t.substring(u,h)));const d=Lk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:dv(this._path)}get ref(){return new Ki(this._repo,this._path)}get _queryIdentifier(){const e=eg(this._queryParams),n=ed(e);return n==="{}"?"default":n}get _queryObject(){return eg(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Ed))return!1;const n=this._repo===e._repo,s=gv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qb(this._path)}}class Ki extends Ed{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=pv(this._path);return e===null?null:new Ki(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ek(Ki);tk(Ki);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="FIREBASE_DATABASE_EMULATOR_HOST",$u={};let Uk=!1;function Bk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Os("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Fk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=gg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ku(ku.OWNER):new Ib(t.name,t.options,e);yk("Invalid Firebase Database URL",o),te(o.path)||Os("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jk(a,t,u,new Tb(t.name,n));return new qk(h,t)}function $k(t,e){const n=$u[e];(!n||n[t.key]!==t)&&Os(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Nk(t),delete n[t.key]}function jk(t,e,n,s){let i=$u[e.name];i||(i={},$u[e.name]=i);let r=i[t.toURLString()];return r&&Os("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ak(t,Uk,n,s),i[t.toURLString()]=r,r}class qk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ck(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ki(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&($k(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Os("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Hk(t){ab(cs),fn(new zt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Bk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bt(Lp,Vp,t),bt(Lp,Vp,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Hk();var Wk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Td=Td||{},Q=Wk||self;function Fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function To(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Kk(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++zk)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),zk=0;function Gk(t,e,n){return t.call.apply(t.bind,arguments)}function Qk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=Gk:ut=Qk,ut.apply(null,arguments)}function Xo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function us(){this.s=this.s,this.o=this.o}var Yk=0;us.prototype.s=!1;us.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Yk!=0)&&Kk(this)};us.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Id(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Xk=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function zr(t){return/^[\s\xa0]*$/.test(t)}function Ul(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return Ul().indexOf(t)!=-1}function wd(t){return wd[" "](t),t}wd[" "]=function(){};function Jk(t,e){var n=HN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Zk=sn("Opera"),Ci=sn("Trident")||sn("MSIE"),tE=sn("Edge"),ju=tE||Ci,nE=sn("Gecko")&&!(Ul().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),eN=Ul().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function sE(){var t=Q.document;return t?t.documentMode:void 0}var qu;e:{var Bc="",$c=function(){var t=Ul();if(nE)return/rv:([^\);]+)(\)|;)/.exec(t);if(tE)return/Edge\/([\d\.]+)/.exec(t);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eN)return/WebKit\/(\S+)/.exec(t);if(Zk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($c&&(Bc=$c?$c[1]:""),Ci){var jc=sE();if(jc!=null&&jc>parseFloat(Bc)){qu=String(jc);break e}}qu=Bc}var Hu;if(Q.document&&Ci){var _g=sE();Hu=_g||parseInt(qu,10)||void 0}else Hu=void 0;var tN=Hu;function Gr(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nE){e:{try{wd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gr.$.h.call(this)}}ze(Gr,ht);var nN={2:"touch",3:"pen",4:"mouse"};Gr.prototype.h=function(){Gr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Io="closure_listenable_"+(1e6*Math.random()|0),sN=0;function iN(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++sN,this.fa=this.ia=!1}function Bl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function rN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iE(t){const e={};for(const n in t)e[n]=t[n];return e}const yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<yg.length;r++)n=yg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $l(t){this.src=t,this.g={},this.h=0}$l.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ku(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new iN(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Wu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=eE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Bl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ku(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Ad="closure_lm_"+(1e6*Math.random()|0),qc={};function oE(t,e,n,s,i){if(s&&s.once)return lE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)oE(t,e[r],n,s,i);return null}return n=bd(n),t&&t[Io]?t.O(e,n,To(s)?!!s.capture:!!s,i):aE(t,e,n,!1,s,i)}function aE(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=To(i)?!!i.capture:!!i,a=Sd(t);if(a||(t[Ad]=a=new $l(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=oN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Xk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(uE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oN(){function t(n){return e.call(t.src,t.listener,n)}const e=aN;return t}function lE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lE(t,e[r],n,s,i);return null}return n=bd(n),t&&t[Io]?t.P(e,n,To(s)?!!s.capture:!!s,i):aE(t,e,n,!0,s,i)}function cE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)cE(t,e[r],n,s,i);else s=To(s)?!!s.capture:!!s,n=bd(n),t&&t[Io]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ku(r,n,s,i),-1<n&&(Bl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ku(e,n,s,i)),(n=-1<t?e[t]:null)&&Cd(n))}function Cd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Io])Wu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(uE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Sd(e))?(Wu(n,t),n.h==0&&(n.src=null,e[Ad]=null)):Bl(t)}}}function uE(t){return t in qc?qc[t]:qc[t]="on"+t}function aN(t,e){if(t.fa)t=!0;else{e=new Gr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Cd(t),t=n.call(s,e)}return t}function Sd(t){return t=t[Ad],t instanceof $l?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function Ke(){us.call(this),this.i=new $l(this),this.S=this,this.J=null}ze(Ke,us);Ke.prototype[Io]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){cE(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(s,t),rE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Jo(o,s,!0,e)&&i}if(o=e.g=t,i=Jo(o,s,!0,e)&&i,i=Jo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Jo(o,s,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Bl(n[s]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Jo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Pd=Q.JSON.stringify;class lN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function cN(){var t=kd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uN{constructor(){this.h=this.g=null}add(e,n){const s=hE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hE=new lN(()=>new hN,t=>t.reset());class hN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function fN(t){Q.setTimeout(()=>{throw t},0)}let Qr,Yr=!1,kd=new uN,dE=()=>{const t=Q.Promise.resolve(void 0);Qr=()=>{t.then(pN)}};var pN=()=>{for(var t;t=cN();){try{t.h.call(t.g)}catch(n){fN(n)}var e=hE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yr=!1};function jl(t,e){Ke.call(this),this.h=t||1,this.g=e||Q,this.j=ut(this.qb,this),this.l=Date.now()}ze(jl,Ke);M=jl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Nd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){jl.$.N.call(this),Nd(this),delete this.g};function Od(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function fE(t){t.g=Od(()=>{t.g=null,t.i&&(t.i=!1,fE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gN extends us{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fE(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(t){us.call(this),this.h=t,this.g={}}ze(Xr,us);var vg=[];function pE(t,e,n,s){Array.isArray(n)||(n&&(vg[0]=n.toString()),n=vg);for(var i=0;i<n.length;i++){var r=oE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function gE(t){Rd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cd(e)},t),t.g={}}Xr.prototype.N=function(){Xr.$.N.call(this),gE(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ql(){this.g=!0}ql.prototype.Ea=function(){this.g=!1};function mN(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _N(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ii(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vN(t,n)+(s?" "+s:"")})}function yN(t,e){t.info(function(){return"TIMEOUT: "+e})}ql.prototype.info=function(){};function vN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pd(n)}catch{return e}}var qs={},Eg=null;function Hl(){return Eg=Eg||new Ke}qs.Ta="serverreachability";function mE(t){ht.call(this,qs.Ta,t)}ze(mE,ht);function Jr(t){const e=Hl();et(e,new mE(e))}qs.STAT_EVENT="statevent";function _E(t,e){ht.call(this,qs.STAT_EVENT,t),this.stat=e}ze(_E,ht);function _t(t){const e=Hl();et(e,new _E(e,t))}qs.Ua="timingevent";function yE(t,e){ht.call(this,qs.Ua,t),this.size=e}ze(yE,ht);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Wl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dd(){}Dd.prototype.h=null;function Tg(t){return t.h||(t.h=t.i())}function EE(){}var Ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xd(){ht.call(this,"d")}ze(xd,ht);function Md(){ht.call(this,"c")}ze(Md,ht);var zu;function Kl(){}ze(Kl,Dd);Kl.prototype.g=function(){return new XMLHttpRequest};Kl.prototype.i=function(){return{}};zu=new Kl;function Ao(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Xr(this),this.P=EN,t=ju?125:void 0,this.V=new jl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new TE}function TE(){this.i=null,this.g="",this.h=!1}var EN=45e3,Gu={},Ka={};M=Ao.prototype;M.setTimeout=function(t){this.P=t};function Qu(t,e,n){t.L=1,t.v=Gl(Dn(e)),t.s=n,t.S=!0,IE(t,null)}function IE(t,e){t.G=Date.now(),Co(t),t.A=Dn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),kE(n.i,"t",s),t.C=0,n=t.l.J,t.h=new TE,t.g=XE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new gN(ut(t.Pa,t,t.g),t.O)),pE(t.U,t.g,"readystatechange",t.nb),e=t.I?iE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Jr(),mN(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ju||this.g&&(this.h.h||this.g.ja()||Ag(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Jr(3):Jr(2)),zl(this);var n=this.g.da();this.ca=n;t:if(wE(this)){var s=Ag(this.g);t="";var i=s.length,r=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Is(this),Ar(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_N(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zr(a)){var c=a;break t}}c=null}if(n=c)ii(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,n);else{this.i=!1,this.o=3,_t(12),Is(this),Ar(this);break e}}this.S?(RE(this,u,o),ju&&this.i&&u==3&&(pE(this.U,this.V,"tick",this.mb),this.V.start())):(ii(this.j,this.m,o,null),Yu(this,o)),u==4&&Is(this),this.i&&!this.J&&(u==4?zE(this.l,this):(this.i=!1,Co(this)))}else $N(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),Is(this),Ar(this)}}}catch{}finally{}};function wE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function RE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=TN(t,n),i==Ka){e==4&&(t.o=4,_t(14),s=!1),ii(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gu){t.o=4,_t(15),ii(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ii(t.j,t.m,i,null),Yu(t,i);wE(t)&&i!=Ka&&i!=Gu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$d(e),e.M=!0,_t(11))):(ii(t.j,t.m,n,"[Invalid Chunked Response]"),Is(t),Ar(t))}M.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(zl(this),RE(this,t,e),this.i&&t!=4&&Co(this))}};function TN(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?Gu:(s+=1,s+n>e.length?Ka:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Is(this)};function Co(t){t.Y=Date.now()+t.P,AE(t,t.P)}function AE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(ut(t.lb,t),e)}function zl(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(yN(this.j,this.A),this.L!=2&&(Jr(),_t(17)),Is(this),this.o=2,Ar(this)):AE(this,this.Y-t)};function Ar(t){t.l.H==0||t.J||zE(t.l,t)}function Is(t){zl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Nd(t.V),gE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Yu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Xu(n.i,t))){if(!t.K&&Xu(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qa(n),Xl(n);else break e;Bd(n),_t(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wo(ut(n.ib,n),6e3));if(1>=DE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ws(n,11)}else if((t.K||n.g==t)&&Qa(n),!zr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ld(r,r.h),r.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Ce(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=YE(s,s.J?s.pa:null,s.Y),o.K){xE(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(zl(a),Co(a)),s.g=o}else WE(s);0<n.j.length&&Jl(n)}else c[0]!="stop"&&c[0]!="close"||ws(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ws(n,7):Ud(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Jr(4)}catch{}}function IN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function CE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wN(t),s=IN(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var SE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ps(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ps){this.h=t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l;var e=t.i,n=new Zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ig(this,n),this.o=t.o}else t&&(e=String(t).match(SE))?(this.h=!1,za(this,e[1]||"",!0),this.s=pr(e[2]||""),this.g=pr(e[3]||"",!0),Ga(this,e[4]),this.l=pr(e[5]||"",!0),Ig(this,e[6]||"",!0),this.o=pr(e[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}Ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gr(e,wg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gr(e,wg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gr(n,n.charAt(0)=="/"?SN:CN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gr(n,PN)),t.join("")};function Dn(t){return new Ps(t)}function za(t,e,n){t.j=n?pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ig(t,e,n){e instanceof Zr?(t.i=e,kN(t.i,t.h)):(n||(e=gr(e,bN)),t.i=new Zr(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Gl(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,AN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function AN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wg=/[#\/\?@]/g,CN=/[#\?:]/g,SN=/[#\?]/g,bN=/[#\?@]/g,PN=/#/g;function Zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hs(t){t.g||(t.g=new Map,t.h=0,t.i&&RN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Zr.prototype;M.add=function(t,e){hs(this),this.i=null,t=zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bE(t,e){hs(t),e=zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function PE(t,e){return hs(t),e=zi(t,e),t.g.has(e)}M.forEach=function(t,e){hs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){hs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){hs(this);let e=[];if(typeof t=="string")PE(this,t)&&(e=e.concat(this.g.get(zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return hs(this),this.i=null,t=zi(this,t),PE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kE(t,e,n){bE(t,e),0<n.length&&(t.i=null,t.g.set(zi(t,e),Id(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kN(t,e){e&&!t.j&&(hs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(bE(this,s),kE(this,i,n))},t)),t.j=e}var NN=class{constructor(t,e){this.g=t,this.map=e}};function NE(t){this.l=t||ON,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ON=10;function OE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function DE(t){return t.h?1:t.g?t.g.size:0}function Xu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ld(t,e){t.g?t.g.add(e):t.h=e}function xE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}NE.prototype.cancel=function(){if(this.i=ME(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ME(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Id(t.i)}var DN=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function xN(){this.g=new DN}function MN(t,e,n){const s=n||"";try{CE(t,function(i,r){let o=i;To(i)&&(o=Pd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function LN(t,e){const n=new ql;if(Q.Image){const s=new Image;s.onload=Xo(Zo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xo(Zo,n,s,"TestLoadImage: error",!1,e),s.onabort=Xo(Zo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xo(Zo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Zo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function So(t){this.l=t.fc||null,this.j=t.ob||!1}ze(So,Dd);So.prototype.g=function(){return new Ql(this.l,this.j)};So.prototype.i=function(t){return function(){return t}}({});function Ql(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ql,Ke);var Vd=0;M=Ql.prototype;M.open=function(t,e){if(this.readyState!=Vd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=Vd};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function LE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bo(this):eo(this),this.readyState==3&&LE(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,bo(this))};M.Ya=function(t){this.g&&(this.response=t,bo(this))};M.ka=function(){this.g&&bo(this)};function bo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VN=Q.JSON.parse;function ke(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VE,this.L=this.M=!1}ze(ke,Ke);var VE="",FN=/^https?$/i,UN=["POST","PUT"];M=ke.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zu.g(),this.C=this.u?Tg(this.u):Tg(zu),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Rg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=eE(UN,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{BE(this),0<this.B&&((this.L=BN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Od(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Rg(this,r)}};function BN(t){return Ci&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Td<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Rg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,FE(t),Yl(t)}function FE(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Yl(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yl(this,!0)),ke.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?UE(this):this.kb())};M.kb=function(){UE(this)};function UE(t){if(t.h&&typeof Td<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)Od(t.La,0,t);else if(et(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(SE)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),s=!FN.test(i?i.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var r=2<ln(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",FE(t)}}finally{Yl(t)}}}}function Yl(t,e){if(t.g){BE(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function BE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VN(e)}};function Ag(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $N(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(zr(t[s]))continue;var n=dN(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}rN(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $E(t){let e="";return Rd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$E(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function or(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jE(t){this.Ga=0,this.j=[],this.l=new ql,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=or("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=or("baseRetryDelayMs",5e3,t),this.hb=or("retryDelaySeedMs",1e4,t),this.eb=or("forwardChannelMaxRetries",2,t),this.xa=or("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new NE(t&&t.concurrentRequestLimit),this.Ja=new xN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=jE.prototype;M.ra=8;M.H=1;function Ud(t){if(qE(t),t.H==3){var e=t.W++,n=Dn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Po(t,n),e=new Ao(t,t.l,e),e.L=2,e.v=Gl(Dn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=XE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Co(e)}QE(t)}function Xl(t){t.g&&($d(t),t.g.cancel(),t.g=null)}function qE(t){Xl(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Jl(t){if(!OE(t.i)&&!t.m){t.m=!0;var e=t.Na;Qr||dE(),Yr||(Qr(),Yr=!0),kd.add(e,t),t.C=0}}function jN(t,e){return DE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wo(ut(t.Na,t,e),GE(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ao(this,this.l,t);let r=this.s;if(this.U&&(r?(r=iE(r),rE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=HE(this,i,e),n=Dn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Po(this,n),r&&(this.O?e="headers="+encodeURIComponent(String($E(r)))+"&"+e:this.o&&Fd(n,this.o,r)),Ld(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,Qu(i,n,null)):Qu(i,n,e),this.H=2}}else this.H==3&&(t?Cg(this,t):this.j.length==0||OE(this.i)||Cg(this))};function Cg(t,e){var n;e?n=e.m:n=t.W++;const s=Dn(t.I);Ce(s,"SID",t.K),Ce(s,"RID",n),Ce(s,"AID",t.V),Po(t,s),t.o&&t.s&&Fd(s,t.o,t.s),n=new Ao(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=HE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ld(t.i,n),Qu(n,s,e)}function Po(t,e){t.na&&Rd(t.na,function(n,s){Ce(e,s,n)}),t.h&&CE({},function(n,s){Ce(e,s,n)})}function HE(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ut(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{MN(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function WE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qr||dE(),Yr||(Qr(),Yr=!0),kd.add(e,t),t.A=0}}function Bd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wo(ut(t.Ma,t),GE(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,KE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wo(ut(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Xl(this),KE(this))};function $d(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function KE(t){t.g=new Ao(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),Po(t,e),t.o&&t.s&&Fd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Gl(Dn(e)),n.s=null,n.S=!0,IE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Xl(this),Bd(this),_t(19))};function Qa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function zE(t,e){var n=null;if(t.g==e){Qa(t),$d(t),t.g=null;var s=2}else if(Xu(t.i,e))n=e.F,xE(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Hl(),et(s,new yE(s,n)),Jl(t)}else WE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&jN(t,e)||s==2&&Bd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ws(t,5);break;case 4:ws(t,10);break;case 3:ws(t,6);break;default:ws(t,2)}}}function GE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ws(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ut(t.pb,t);n||(n=new Ps("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||za(n,"https"),Gl(n)),LN(n.toString(),s)}else _t(2);t.H=0,t.h&&t.h.za(e),QE(t),qE(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function QE(t){if(t.H=0,t.ma=[],t.h){const e=ME(t.i);(e.length!=0||t.j.length!=0)&&(mg(t.ma,e),mg(t.ma,t.j),t.i.i.length=0,Id(t.j),t.j.length=0),t.h.ya()}}function YE(t,e,n){var s=n instanceof Ps?Dn(n):new Ps(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ps(null);s&&za(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ra),Po(t,s),s}function XE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new So({ob:!0})):new ke(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function JE(){}M=JE.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Ya(){if(Ci&&!(10<=Number(tN)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Ke.call(this),this.g=new jE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gi(this)}ze(kt,Ke);kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=YE(t,null,t.Y),Jl(t)};kt.prototype.close=function(){Ud(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pd(t),t=n);e.j.push(new NN(e.fb++,t)),e.H==3&&Jl(e)};kt.prototype.N=function(){this.g.h=null,delete this.j,Ud(this.g),delete this.g,kt.$.N.call(this)};function ZE(t){xd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(ZE,xd);function eT(){Md.call(this),this.status=1}ze(eT,Md);function Gi(t){this.g=t}ze(Gi,JE);Gi.prototype.Ba=function(){et(this.g,"a")};Gi.prototype.Aa=function(t){et(this.g,new ZE(t))};Gi.prototype.za=function(t){et(this.g,new eT)};Gi.prototype.ya=function(){et(this.g,"b")};function qN(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Qt,qN);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Wc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Wc(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Wc(this,s),i=0;break}}this.h=i,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ge(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var HN={};function jd(t){return-128<=t&&128>t?Jk(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function cn(t){if(isNaN(t)||!isFinite(t))return gi;if(0>t)return Ye(cn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ju;return new ge(e,0)}function tT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ye(tT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cn(Math.pow(e,8)),s=gi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=cn(Math.pow(e,r)),s=s.R(r).add(cn(o))):(s=s.R(n),s=s.add(cn(o)))}return s}var Ju=4294967296,gi=jd(0),Zu=jd(1),Sg=jd(16777216);M=ge.prototype;M.ea=function(){if(Nt(this))return-Ye(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ju+s)*e,e*=Ju}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Nt(this))return"-"+Ye(this).toString(t);for(var e=cn(Math.pow(t,6)),n=this,s="";;){var i=Ja(n,e).g;n=Xa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Cn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}M.X=function(t){return t=Xa(this,t),Nt(t)?-1:Cn(t)?0:1};function Ye(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ge(n,~t.h).add(Zu)}M.abs=function(){return Nt(this)?Ye(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Xa(t,e){return t.add(Ye(e))}M.R=function(t){if(Cn(this)||Cn(t))return gi;if(Nt(this))return Nt(t)?Ye(this).R(Ye(t)):Ye(Ye(this).R(t));if(Nt(t))return Ye(this.R(Ye(t)));if(0>this.X(Sg)&&0>t.X(Sg))return cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,ea(n,2*s+2*i),n[2*s+2*i+1]+=r*l,ea(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,ea(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,ea(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ge(n,0)};function ea(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ar(t,e){this.g=t,this.h=e}function Ja(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new ar(gi,gi);if(Nt(t))return e=Ja(Ye(t),e),new ar(Ye(e.g),Ye(e.h));if(Nt(e))return e=Ja(t,Ye(e)),new ar(Ye(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Zu,s=e;0>=s.X(t);)n=bg(n),s=bg(s);var i=Xs(n,1),r=Xs(s,1);for(s=Xs(s,2),n=Xs(n,2);!Cn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Xs(s,1),n=Xs(n,1)}return e=Xa(t,i.R(e)),new ar(i,e)}for(i=gi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=cn(n),o=r.R(e);Nt(o)||0<o.X(t);)n-=s,r=cn(n),o=r.R(e);Cn(r)&&(r=Zu),i=i.add(r),t=Xa(t,o)}return new ar(i,t)}M.gb=function(t){return Ja(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ge(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ge(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ge(n,this.h^t.h)};function bg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ge(n,t.h)}function Xs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ge(i,t.h)}Ya.prototype.createWebChannel=Ya.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Wl.NO_ERROR=0;Wl.TIMEOUT=8;Wl.HTTP_ERROR=6;vE.COMPLETE="complete";EE.EventType=Ro;Ro.OPEN="a";Ro.CLOSE="b";Ro.ERROR="c";Ro.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=cn;ge.fromString=tT;var WN=function(){return new Ya},KN=function(){return Hl()},Kc=Wl,zN=vE,GN=qs,Pg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},QN=So,ta=EE,YN=ke,XN=Qt,mi=ge;const kg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new co("@firebase/firestore");function Ng(){return Ls.logLevel}function B(t,...e){if(Ls.logLevel<=ae.DEBUG){const n=e.map(qd);Ls.debug(`Firestore (${Qi}): ${t}`,...n)}}function xn(t,...e){if(Ls.logLevel<=ae.ERROR){const n=e.map(qd);Ls.error(`Firestore (${Qi}): ${t}`,...n)}}function Si(t,...e){if(Ls.logLevel<=ae.WARN){const n=e.map(qd);Ls.warn(`Firestore (${Qi}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function Pe(t,e){t||W()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class ZN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eO{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new nT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new it(e)}}class tO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new tO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new sO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=rO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Ve(0,0))}static max(){return new z(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends to{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const oO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends to{construct(e,n,s){return new mt(e,n,s)}static isValidIdentifier(e){return oO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new F(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new F(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(be.fromString(e))}static fromName(e){return new H(be.fromString(e).popFirst(5))}static empty(){return new H(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new be(e.slice()))}}function aO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new os(i,H.empty(),e)}function lO(t){return new os(t.readTime,t.key,-1)}class os{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new os(z.min(),H.empty(),-1)}static max(){return new os(z.max(),H.empty(),-1)}}function cO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==uO)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wd.ae=-1;function No(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function dO(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new na(this.root,e,this.comparator,!1)}getReverseIterator(){return new na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new na(this.root,e,this.comparator,!0)}}class na{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=i??Qe.EMPTY,this.right=r??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new dt(mt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class rT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new rT("Invalid base64 string: "+r):r}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const fO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=fO.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zd(t){const e=t.mapValue.fields.__previous_value__;return Kd(e)?zd(e):e}function no(t){const e=as(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kd(t)?4:gO(t)?9007199254740991:10:W()}function gn(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=as(i.timestampValue),a=as(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Vs(i.bytesValue).isEqual(Vs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return xe(i.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return xe(i.integerValue)===xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=xe(i.doubleValue),a=xe(r.doubleValue);return o===a?Za(o)===Za(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Og(o)!==Og(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!gn(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function io(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=Fs(t),s=Fs(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=xe(r.integerValue||r.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return xg(t.timestampValue,e.timestampValue);case 4:return xg(no(t),no(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Vs(r),l=Vs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=de(a[c],l[c]);if(u!==0)return u}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=de(xe(r.latitude),xe(o.latitude));return a!==0?a:de(xe(r.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Pi(a[c],l[c]);if(u)return u}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===sa.mapValue&&o===sa.mapValue)return 0;if(r===sa.mapValue)return 1;if(o===sa.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=de(l[h],u[h]);if(d!==0)return d;const f=Pi(a[l[h]],c[u[h]]);if(f!==0)return f}return de(l.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function xg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=as(t),s=as(e),i=de(n.seconds,s.seconds);return i!==0?i:de(n.nanos,s.nanos)}function ki(t){return eh(t)}function eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=as(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=eh(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${eh(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function th(t){return!!t&&"integerValue"in t}function Gd(t){return!!t&&"arrayValue"in t}function Mg(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zc(t){return!!t&&"mapValue"in t}function Cr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Cr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(n)}setAll(e){let n=mt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Cr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Yi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Tt(Cr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,z.min(),z.min(),z.min(),Tt.empty(),0)}static newFoundDocument(e,n,s,i){return new je(e,1,n,z.min(),s,i,0)}static newNoDocument(e,n){return new je(e,2,n,z.min(),z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,z.min(),z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function Vg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Pi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function mO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class oT{}class Le extends oT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new yO(e,n,s):n==="array-contains"?new TO(e,s):n==="in"?new IO(e,s):n==="not-in"?new wO(e,s):n==="array-contains-any"?new RO(e,s):new Le(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new vO(e,s):new EO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pi(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mn extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new mn(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function aT(t){return t.op==="and"}function lT(t){return _O(t)&&aT(t)}function _O(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function nh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ki(t.value);if(lT(t))return t.filters.map(e=>nh(e)).join(",");{const e=t.filters.map(n=>nh(n)).join(",");return`${t.op}(${e})`}}function cT(t,e){return t instanceof Le?function(s,i){return i instanceof Le&&s.op===i.op&&s.field.isEqual(i.field)&&gn(s.value,i.value)}(t,e):t instanceof mn?function(s,i){return i instanceof mn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&cT(o,i.filters[a]),!0):!1}(t,e):void W()}function uT(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${ki(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(uT).join(" ,")+"}"}(t):"Filter"}class yO extends Le{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class vO extends Le{constructor(e,n){super(e,"in",n),this.keys=hT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EO extends Le{constructor(e,n){super(e,"not-in",n),this.keys=hT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class TO extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gd(n)&&io(n.arrayValue,this.value)}}class IO extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class wO extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class RO extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>io(this.value.arrayValue,s))}}/**
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
 */class AO{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Ug(t,e=null,n=[],s=[],i=null,r=null,o=null){return new AO(t,e,n,s,i,r,o)}function Qd(t){const e=re(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>nh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),No(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ki(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ki(s)).join(",")),e.he=n}return e.he}function Yd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function sh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function CO(t,e,n,s,i,r,o,a){return new Zl(t,e,n,s,i,r,o,a)}function ec(t){return new Zl(t)}function Bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function PO(t){return t.collectionGroup!==null}function _i(t){const e=re(t);if(e.Pe===null){e.Pe=[];const n=bO(e),s=SO(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new Sr(n)),e.Pe.push(new Sr(mt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Sr(mt.keyField(),r))}}}return e.Pe}function Mn(t){const e=re(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ug(e.path,e.collectionGroup,_i(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of _i(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Sr(r.field,o))}const s=e.endAt?new el(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new el(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ug(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function ih(t,e,n){return new Zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Yd(Mn(t),Mn(e))&&t.limitType===e.limitType}function dT(t){return`${Qd(Mn(t))}|lt:${t.limitType}`}function rh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>uT(i)).join(", ")}]`),No(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>ki(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>ki(i)).join(",")),`Target(${s})`}(Mn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):H.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of _i(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Vg(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,_i(s),i)||s.endAt&&!function(o,a,l){const c=Vg(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,_i(s),i))}(t,e)}function kO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let s=!1;for(const i of _i(t)){const r=NO(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function NO(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Pi(l,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return iT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new Ne(H.comparator);function ls(){return OO}const pT=new Ne(H.comparator);function mr(...t){let e=pT;for(const n of t)e=e.insert(n.key,n);return e}function DO(t){let e=pT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rs(){return br()}function gT(){return br()}function br(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const xO=new dt(H.comparator);function le(...t){let e=xO;for(const n of t)e=e.add(n);return e}const MO=new dt(de);function LO(){return MO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function VO(t,e){return dO(e)?_T(e):mT(t,e)}/**
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
 */class sc{constructor(){this._=void 0}}function FO(t,e,n){return t instanceof tl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Kd(r)&&(r=zd(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Ni?yT(t,e):t instanceof ro?vT(t,e):function(i,r){const o=BO(i,r),a=$g(o)+$g(i.Te);return th(o)&&th(i.Te)?_T(a):mT(i.serializer,a)}(t,e)}function UO(t,e,n){return t instanceof Ni?yT(t,e):t instanceof ro?vT(t,e):n}function BO(t,e){return t instanceof nl?function(s){return th(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class tl extends sc{}class Ni extends sc{constructor(e){super(),this.elements=e}}function yT(t,e){const n=ET(e);for(const s of t.elements)n.some(i=>gn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ro extends sc{constructor(e){super(),this.elements=e}}function vT(t,e){let n=ET(e);for(const s of t.elements)n=n.filter(i=>!gn(i,s));return{arrayValue:{values:n}}}class nl extends sc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function $g(t){return xe(t.integerValue||t.doubleValue)}function ET(t){return Gd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n){this.field=e,this.transform=n}}function jO(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Ni&&i instanceof Ni||s instanceof ro&&i instanceof ro?bi(s.elements,i.elements,gn):s instanceof nl&&i instanceof nl?gn(s.Te,i.Te):s instanceof tl&&i instanceof tl}(t.transform,e.transform)}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function TT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xd(t.key,Ot.none()):new Oo(t.key,t.data,Ot.none());{const n=t.data,s=Tt.empty();let i=new dt(mt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Hs(t.key,s,new xt(i.toArray()),Ot.none())}}function qO(t,e,n){t instanceof Oo?function(i,r,o){const a=i.value.clone(),l=qg(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(i,r,o){if(!_a(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=qg(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(IT(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pr(t,e,n,s){return t instanceof Oo?function(r,o,a,l){if(!_a(r.precondition,o))return a;const c=r.value.clone(),u=Hg(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Hs?function(r,o,a,l){if(!_a(r.precondition,o))return a;const c=Hg(r.fieldTransforms,l,o),u=o.data;return u.setAll(IT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return _a(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&bi(s,i,(r,o)=>jO(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends ic{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hs extends ic{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function IT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qg(t,e,n){const s=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,UO(o,a,n[i]))}return s}function Hg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,FO(r,o,e))}return s}class Xd extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wT extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&qO(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=gT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=TT(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,s)=>jg(n,s))&&bi(this.baseMutations,e.baseMutations,(n,s)=>jg(n,s))}}/**
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
 */class WO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ne;function zO(t){switch(t){default:return W();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function RT(t){if(t===void 0)return xn("GRPC error has no .code"),w.UNKNOWN;switch(t){case De.OK:return w.OK;case De.CANCELLED:return w.CANCELLED;case De.UNKNOWN:return w.UNKNOWN;case De.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case De.INTERNAL:return w.INTERNAL;case De.UNAVAILABLE:return w.UNAVAILABLE;case De.UNAUTHENTICATED:return w.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case De.NOT_FOUND:return w.NOT_FOUND;case De.ALREADY_EXISTS:return w.ALREADY_EXISTS;case De.PERMISSION_DENIED:return w.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case De.ABORTED:return w.ABORTED;case De.OUT_OF_RANGE:return w.OUT_OF_RANGE;case De.UNIMPLEMENTED:return w.UNIMPLEMENTED;case De.DATA_LOSS:return w.DATA_LOSS;default:return W()}}(ne=De||(De={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ia}static getOrCreateInstance(){return ia===null&&(ia=new Jd),ia}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ia=null;/**
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
 */function GO(){return new TextEncoder}/**
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
 */const QO=new mi([4294967295,4294967295],0);function Wg(t){const e=GO().encode(t),n=new XN;return n.update(e),new Uint8Array(n.digest())}function Kg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new mi([n,s],0),new mi([i,r],0)]}class Zd{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _r(`Invalid padding: ${n}`);if(s<0)throw new _r(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new _r(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=mi.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(mi.fromNumber(s)));return i.compare(QO)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Wg(e),[s,i]=Kg(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Zd(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Wg(e),[s,i]=Kg(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rc(z.min(),i,new Ne(de),ls(),le())}}class Do{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Do(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class AT{constructor(e,n){this.targetId=e,this.pe=n}}class CT{constructor(e,n,s=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class zg{constructor(){this.ye=0,this.we=Qg(),this.Se=pt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=le(),n=le(),s=le();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:W()}}),new Do(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=Qg()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class YO{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ls(),this.$e=Gg(),this.Ue=new Ne(de)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(sh(a))if(r===0){const l=new H(a.path);this.ze(i,l,je.newNoDocument(l,z.min()))}else Pe(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Jd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var y,v,R,P,k,A;const Y={localCacheCount:f,existenceFilterCount:m.count},G=m.unchangedNames;return G&&(Y.bloomFilter={applied:h===0,hashCount:(y=G==null?void 0:G.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(P=(R=(v=G==null?void 0:G.bits)===null||v===void 0?void 0:v.bitmap)===null||R===void 0?void 0:R.length)!==null&&P!==void 0?P:0,padding:(A=(k=G==null?void 0:G.bits)===null||k===void 0?void 0:k.padding)!==null&&A!==void 0?A:0},d&&(Y.bloomFilter.mightContain=d)),Y}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Vs(r).toUint8Array()}catch(h){if(h instanceof rT)return Si("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Zd(l,o,a)}catch(h){return Si(h instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&sh(a.target)){const l=new H(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,je.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=le();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new rc(e,n,this.Ue,this.Ke,s);return this.Ke=ls(),this.$e=Gg(),this.Ue=new Ne(de),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new zg,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new dt(de),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new zg),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new Ne(H.comparator)}function Qg(){return new Ne(H.comparator)}const XO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZO=(()=>({and:"AND",or:"OR"}))();class eD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oh(t,e){return t.useProto3Json||No(e)?e:{value:e}}function sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ST(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tD(t,e){return sl(t,e.toTimestamp())}function Pn(t){return Pe(!!t),z.fromTimestamp(function(n){const s=as(n);return new Ve(s.seconds,s.nanos)}(t))}function ef(t,e){return function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function bT(t){const e=be.fromString(t);return Pe(OT(e)),e}function il(t,e){return ef(t.databaseId,e.path)}function kr(t,e){const n=bT(e);if(n.get(1)!==t.databaseId.projectId)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(PT(n))}function ah(t,e){return ef(t.databaseId,e)}function nD(t){const e=bT(t);return e.length===4?be.emptyPath():PT(e)}function rl(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PT(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yg(t,e,n){return{name:il(t,e),fields:n.value.mapValue.fields}}function sD(t,e){return"found"in e?function(s,i){Pe(!!i.found),i.found.name,i.found.updateTime;const r=kr(s,i.found.name),o=Pn(i.found.updateTime),a=i.found.createTime?Pn(i.found.createTime):z.min(),l=new Tt({mapValue:{fields:i.found.fields}});return je.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(s,i){Pe(!!i.missing),Pe(!!i.readTime);const r=kr(s,i.missing),o=Pn(i.readTime);return je.newNoDocument(r,o)}(t,e):W()}function iD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Pe(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:RT(c.code);return new F(u,c.message||"")}(o);n=new CT(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=kr(t,s.document.name),r=Pn(s.document.updateTime),o=s.document.createTime?Pn(s.document.createTime):z.min(),a=new Tt({mapValue:{fields:s.document.fields}}),l=je.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ya(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=kr(t,s.document),r=s.readTime?Pn(s.readTime):z.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=kr(t,s.document),r=s.removedTargetIds||[];n=new ya([],r,i,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new KO(i,r),a=s.targetId;n=new AT(a,o)}}return n}function rD(t,e){let n;if(e instanceof Oo)n={update:Yg(t,e.key,e.value)};else if(e instanceof Xd)n={delete:il(t,e.key)};else if(e instanceof Hs)n={update:Yg(t,e.key,e.data),updateMask:fD(e.fieldMask)};else{if(!(e instanceof wT))return W();n={verify:il(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:tD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function oD(t,e){return{documents:[ah(t,e.path)]}}function aD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ah(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ah(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return NT(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Zs(h.field),direction:uD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=oh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lD(t){let e=nD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=kT(h);return d instanceof mn&&lT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Sr(ei(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,No(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new el(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new el(f,d)}(n.endAt)),CO(e,i,o,r,a,"F",l,c)}function cD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ei(n.unaryFilter.field);return Le.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ei(n.unaryFilter.field);return Le.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(s=>kT(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function uD(t){return XO[t]}function hD(t){return JO[t]}function dD(t){return ZO[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ei(t){return mt.fromServerFormat(t.fieldPath)}function NT(t){return t instanceof Le?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NAN"}};if(Mg(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NAN"}};if(Mg(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(n.field),op:hD(n.op),value:n.value}}}(t):t instanceof mn?function(n){const s=n.getFilters().map(i=>NT(i));return s.length===1?s[0]:{compositeFilter:{op:dD(n.op),filters:s}}}(t):W()}function fD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,s,i,r=z.min(),o=z.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.ct=e}}function gD(t){const e=lD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ih(e,e.limit,"L"):e}/**
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
 */class mD{constructor(){this.sn=new _D}addToCollectionParentIndex(e,n){return this.sn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(os.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class _D{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new dt(be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new dt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Oi(0)}static On(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Pr(s.mutation,i,xt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=Rs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=mr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ls();const o=br(),a=function(){return br()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Pr(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new vD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=br();let i=new Ne((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||xt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=gT();u.forEach(d=>{if(!r.has(d)){const f=TT(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Rs());let a=-1,l=r;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:DO(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let i=mr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=mr();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,h){return new Zl(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,je.newInvalidDocument(c)))});let o=mr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Pr(c.mutation,l,xt.empty(),Ve.now()),nc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return b.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:gD(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class ID{constructor(){this.overlays=new Ne(H.comparator),this.cr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rs();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Rs(),r=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ne((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Rs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return b.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new WO(n,s));let r=this.cr.get(n);r===void 0&&(r=le(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.lr=new dt($e.hr),this.Pr=new dt($e.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new $e(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new $e(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new H(new be([])),s=new $e(n,e),i=new $e(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new H(new be([])),s=new $e(n,e),i=new $e(n,e+1);let r=le();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new $e(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return H.comparator(e.key,n.key)||de(e.mr,n.mr)}static Ir(e,n){return de(e.mr,n.mr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new dt($e.hr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new $e(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new dt(de);return n.forEach(i=>{const r=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),b.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;H.isDocumentKey(r)||(r=r.child(""));const o=new $e(new H(r),0);let a=new dt(de);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),b.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return b.forEach(n.mutations,i=>{const r=new $e(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new $e(n,0),i=this.pr.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.Dr=e,this.docs=function(){return new Ne(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=ls();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ls();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cO(lO(u),s)<=0||(i.has(u.key)||nc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){W()}vr(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new AD(this)}getSize(e){return b.resolve(this.size)}}class AD extends yD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.persistence=e,this.Cr=new Xi(n=>Qd(n),Yd),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new tf,this.targetCount=0,this.Or=Oi.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),b.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Ln(n),b.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Wd(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new CD(this),this.indexManager=new mD,this.remoteDocumentCache=function(i){return new RD(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new pD(n),this.Qr=new TD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ID,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new wD(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new bD(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return b.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class bD extends hO{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Wr=new tf,this.Gr=null}static zr(e){return new nf(e)}get jr(){if(this.Gr)return this.Gr;throw W()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.jr,s=>{const i=H.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,z.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return b.or([()=>b.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new sf(e,n.fromCache,s,i)}}/**
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
 */class PD{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(Bg(n))return b.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ih(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,ih(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return Bg(n)||i.isEqual(z.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(Ng()<=ae.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rh(n)),this.ji(e,o,n,aO(i,-1)))})}Gi(e,n){let s=new dt(fT(e));return n.forEach((i,r)=>{nc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return Ng()<=ae.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",rh(n)),this.Ki.getDocumentsMatchingQuery(e,n,os.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ne(de),this.Yi=new Xi(r=>Qd(r),Yd),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ED(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ND(t,e,n,s){return new kD(t,e,n,s)}async function DT(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function xT(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function OD(t,e){const n=re(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(y,v,R){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=ls(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(DD(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(z.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function DD(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ls();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function xD(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new Qn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function lh(t,e,n){const s=re(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Xg(t,e,n){const s=re(t);let i=z.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=re(l),d=h.Yi.get(u);return d!==void 0?b.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?r:le())).next(a=>(MD(s,kO(e),a),{documents:a,ss:r})))}function MD(t,e,n){let s=t.Zi.get(e)||z.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class Jg{constructor(){this.activeTargetIds=LO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LD{constructor(){this.Hs=new Jg,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Jg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VD{Ys(e){}shutdown(){}}/**
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
 */class Zg{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ra=null;function Gc(){return ra===null?ra=function(){return 268435456+Math.round(2147483648*Math.random())}():ra++,"0x"+ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class BD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=Gc(),l=this.mo(n,s);B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>(B("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Si("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=FD[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=Gc();return new Promise((o,a)=>{const l=new YN;l.setWithCredentials(!0),l.listenOnce(zN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kc.NO_ERROR:const u=l.getResponseJson();B(st,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Kc.TIMEOUT:B(st,`RPC '${e}' ${r} timed out`),a(new F(w.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const h=l.getStatus();if(B(st,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const R=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(R)>=0?R:w.UNKNOWN}(f.status);a(new F(m,f.message))}else a(new F(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(w.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{B(st,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);B(st,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=Gc(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WN(),a=KN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new QN({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");B(st,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new UD({so:v=>{f?B(st,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(B(st,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),B(st,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,R,P)=>{v.listen(R,k=>{try{P(k)}catch(A){setTimeout(()=>{throw A},0)}})};return y(h,ta.EventType.OPEN,()=>{f||B(st,`RPC '${e}' stream ${i} transport opened.`)}),y(h,ta.EventType.CLOSE,()=>{f||(f=!0,B(st,`RPC '${e}' stream ${i} transport closed`),m.Po())}),y(h,ta.EventType.ERROR,v=>{f||(f=!0,Si(st,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new F(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,ta.EventType.MESSAGE,v=>{var R;if(!f){const P=v.data[0];Pe(!!P);const k=P,A=k.error||((R=k[0])===null||R===void 0?void 0:R.error);if(A){B(st,`RPC '${e}' stream ${i} received error:`,A);const Y=A.status;let G=function(yt){const Ge=De[yt];if(Ge!==void 0)return RT(Ge)}(Y),ye=A.message;G===void 0&&(G=w.INTERNAL,ye="Unknown error status: "+Y+" with message "+A.message),f=!0,m.Po(new F(G,ye)),h.close()}else B(st,`RPC '${e}' stream ${i} received:`,P),m.Io(P)}}),y(a,GN.STAT_EVENT,v=>{v.stat===Pg.PROXY?B(st,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Pg.NOPROXY&&B(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new eD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new rf(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new F(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jD extends $D{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=iD(this.serializer,e),s=function(r){if(!("targetChange"in r))return z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Pn(o.readTime):z.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=rl(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=sh(l)?{documents:oD(r,l)}:{query:aD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ST(r,o.resumeToken);const c=oh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=sl(r,o.snapshotVersion.toTimestamp());const c=oh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=cD(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=rl(this.serializer),n.removeTarget=e,this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(w.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(w.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class HD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(xn(n),this.d_=!1):B("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{Mo(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=re(l);c.y_.add(4),await xo(c),c.b_.set("Unknown"),c.y_.delete(4),await ac(c)}(this))})}),this.b_=new HD(s,i)}}async function ac(t){if(Mo(t))for(const e of t.w_)await e(!0)}async function xo(t){for(const e of t.w_)await e(!1)}function MT(t,e){const n=re(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),lf(n)?af(n):Ji(n).Uo()&&of(n,e))}function LT(t,e){const n=re(t),s=Ji(n);n.p_.delete(e),s.Uo()&&VT(n,e),n.p_.size===0&&(s.Uo()?s.zo():Mo(n)&&n.b_.set("Unknown"))}function of(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ji(t).i_(e)}function VT(t,e){t.D_.Be(e),Ji(t).s_(e)}function af(t){t.D_=new YO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Ji(t).start(),t.b_.A_()}function lf(t){return Mo(t)&&!Ji(t).$o()&&t.p_.size>0}function Mo(t){return re(t).y_.size===0}function FT(t){t.D_=void 0}async function KD(t){t.p_.forEach((e,n)=>{of(t,e)})}async function zD(t,e){FT(t),lf(t)?(t.b_.m_(e),af(t)):t.b_.set("Unknown")}async function GD(t,e,n){if(t.b_.set("Online"),e instanceof CT&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await em(t,s)}else if(e instanceof ya?t.D_.We(e):e instanceof AT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(z.min()))try{const s=await xT(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),VT(r,l);const h=new Qn(u.target,l,c,u.sequenceNumber);of(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await em(t,s)}}async function em(t,e,n){if(!ko(e))throw e;t.y_.add(1),await xo(t),t.b_.set("Offline"),n||(n=()=>xT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await ac(t)})}async function tm(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=Mo(n);n.y_.add(3),await xo(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await ac(n)}async function QD(t,e){const n=re(t);e?(n.y_.delete(2),await ac(n)):e||(n.y_.add(2),await xo(n),n.b_.set("Unknown"))}function Ji(t){return t.v_||(t.v_=function(n,s,i){const r=re(n);return r.P_(),new jD(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:KD.bind(null,t),uo:zD.bind(null,t),r_:GD.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),lf(t)?af(t):t.b_.set("Unknown")):(await t.v_.stop(),FT(t))})),t.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new cf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function UT(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ko(t))return new F(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=mr(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.F_=new Ne(H.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):W():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Di{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Di(e,n,yi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.x_=void 0,this.listeners=[]}}class XD{constructor(){this.queries=new Xi(e=>dT(e),tc),this.onlineState="Unknown",this.O_=new Set}}async function uf(t,e){const n=re(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new YD),i)try{r.x_=await n.onListen(s)}catch(o){const a=UT(o,`Initialization of query '${rh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&df(n)}async function hf(t,e){const n=re(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function JD(t,e){const n=re(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&df(n)}function ZD(t,e,n){const s=re(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function df(t){t.O_.forEach(e=>{e.next()})}class ff{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.key=e}}class $T{constructor(e){this.key=e}}class e1{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=le(),this.mutatedKeys=le(),this.na=fT(e),this.ra=new yi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new nm,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=nc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Di(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new nm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=le(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new $T(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new BT(s))}),n}ha(e){this.X_=e.ss,this.ta=le();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Di.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class t1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class n1{constructor(e){this.key=e,this.Ia=!1}}class s1{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Xi(a=>dT(a),tc),this.da=new Map,this.Aa=new Set,this.Ra=new Ne(H.comparator),this.Va=new Map,this.ma=new tf,this.fa={},this.ga=new Map,this.pa=Oi.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function i1(t,e){const n=h1(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await xD(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await r1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&MT(n.remoteStore,o)}return i}async function r1(t,e,n,s,i){t.wa=(h,d,f)=>async function(y,v,R,P){let k=v.view.sa(R);k.zi&&(k=await Xg(y.localStore,v.query,!1).then(({documents:G})=>v.view.sa(G,k)));const A=P&&P.targetChanges.get(v.targetId),Y=v.view.applyChanges(k,y.isPrimaryClient,A);return im(y,v.targetId,Y.ca),Y.snapshot}(t,h,d,f);const r=await Xg(t.localStore,e,!0),o=new e1(e,r.ss),a=o.sa(r.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);im(t,n,c.ca);const u=new t1(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function o1(t,e){const n=re(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!tc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),LT(n.remoteStore,s.targetId),ch(n,s.targetId)}).catch(Hd)):(ch(n,s.targetId),await lh(n.localStore,s.targetId,!0))}async function jT(t,e){const n=re(t);try{const s=await OD(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Pe(o.Ia):i.removedDocuments.size>0&&(Pe(o.Ia),o.Ia=!1))}),await HT(n,s,e)}catch(s){await Hd(s)}}function sm(t,e,n){const s=re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=re(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&df(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function a1(t,e,n){const s=re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Ne(H.comparator);o=o.insert(r,je.newNoDocument(r,z.min()));const a=le().add(r),l=new rc(z.min(),new Map,new Ne(de),o,a);await jT(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),pf(s)}else await lh(s.localStore,e,!1).then(()=>ch(s,e,n)).catch(Hd)}function ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||qT(t,s)})}function qT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(LT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),pf(t))}function im(t,e,n){for(const s of n)s instanceof BT?(t.ma.addReference(s.key,e),l1(t,s)):s instanceof $T?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||qT(t,s.key)):W()}function l1(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(B("SyncEngine","New document in limbo: "+n),t.Aa.add(s),pf(t))}function pf(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new H(be.fromString(e)),s=t.pa.next();t.Va.set(s,new n1(n)),t.Ra=t.Ra.insert(n,s),MT(t.remoteStore,new Qn(Mn(ec(n.path)),s,"TargetPurposeLimboResolution",Wd.ae))}}async function HT(t,e,n){const s=re(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=sf.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=re(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(c,d=>b.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>b.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ko(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(s.localStore,r))}async function c1(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await DT(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(w.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await HT(n,s.ts)}}function u1(t,e){const n=re(t),s=n.Va.get(e);if(s&&s.Ia)return le().add(s.key);{let i=le();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function h1(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a1.bind(null,e),e.Ta.r_=JD.bind(null,e.eventManager),e.Ta.Sa=ZD.bind(null,e.eventManager),e}class rm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ND(this.persistence,new PD,e.initialUser,this.serializer)}createPersistence(e){return new SD(nf.zr,this.serializer)}createSharedClientState(e){return new LD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=c1.bind(null,this.syncEngine),await QD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XD}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),s=function(r){return new BD(r)}(e.databaseInfo);return function(r,o,a,l){return new qD(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new WD(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sm(this.syncEngine,n,0),function(){return Zg.v()?new Zg:new VD}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new s1(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=re(n);B("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await xo(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new F(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=re(i),a=rl(o.serializer)+"/documents",l={documents:r.map(d=>il(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=sD(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Pe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xd(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const i=H.fromPath(s);this.mutations.push(new wT(i,this.precondition(i)))}),await async function(s,i){const r=re(s),o=rl(r.serializer)+"/documents",a={writes:i.map(l=>rD(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw W();n=z.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new F(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?Ot.exists(!1):Ot.updateTime(n):Ot.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new F(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ot.updateTime(n)}return Ot.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class p1{constructor(e,n,s,i,r){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.qa=s.maxAttempts,this.Ko=new rf(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new f1(this.datastore),n=this.Ka(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.$a(i)}))}).catch(s=>{this.$a(s)})})}Ka(e){try{const n=this.updateFunction(e);return!No(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!zO(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=sT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=UT(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await DT(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _1(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>tm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>tm(e.remoteStore,r)),t._onlineComponents=e}function m1(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!m1(n))throw n;Si("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new rm)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Yc(t,new rm);return t._offlineComponents}async function WT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await om(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await om(t,new d1))),t._onlineComponents}function y1(t){return WT(t).then(e=>e.datastore)}async function ol(t){const e=await WT(t),n=e.eventManager;return n.onListen=i1.bind(null,e.syncEngine),n.onUnlisten=o1.bind(null,e.syncEngine),n}function v1(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new gf({next:d=>{o.enqueueAndForget(()=>hf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new F(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new F(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ff(ec(a.path),u,{includeMetadataChanges:!0,W_:!0});return uf(r,h)}(await ol(t),t.asyncQueue,e,n,s)),s.promise}function E1(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new gf({next:d=>{o.enqueueAndForget(()=>hf(r,h)),d.fromCache&&l.source==="server"?c.reject(new F(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ff(a,u,{includeMetadataChanges:!0,W_:!0});return uf(r,h)}(await ol(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function KT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e,n){if(!n)throw new F(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function T1(t,e,n,s){if(e===!0&&s===!0)throw new F(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lm(t){if(!H.isDocumentKey(t))throw new F(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(H.isDocumentKey(t))throw new F(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(t);throw new F(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}T1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new um({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new um(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new JN;switch(s.type){case"firstParty":return new nO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=am.get(n);s&&(B("ComponentProvider","Removing Datastore"),am.delete(n),s.terminate())}(this),Promise.resolve()}}function I1(t,e,n,s={}){var i;const r=(t=kn(t,lc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=it.MOCK_USER;else{a=nR(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(c)}t._authCredentials=new ZN(new nT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class It{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class ns extends Lo{constructor(e,n,s){super(e,n,ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new H(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function tL(t,e,...n){if(t=tt(t),zT("collection","path",e),t instanceof lc){const s=be.fromString(e,...n);return cm(s),new ns(t,null,s)}{if(!(t instanceof It||t instanceof ns))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return cm(s),new ns(t.firestore,null,s)}}function nL(t,e,...n){if(t=tt(t),arguments.length===1&&(e=sT.V()),zT("doc","path",e),t instanceof lc){const s=be.fromString(e,...n);return lm(s),new It(t,null,new H(s))}{if(!(t instanceof It||t instanceof ns))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return lm(s),new It(t.firestore,t instanceof ns?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new rf(this,"async_queue_retry"),this.Xa=()=>{const n=Qc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new bn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ko(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw xn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=cf.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&W()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function hm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class xi extends lc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new w1}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GT(this),this._firestoreClient.terminate()}}function R1(t,e){const n=typeof t=="object"?t:qh(),s=typeof t=="string"?t:e||"(default)",i=jh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=tR("firestore");r&&I1(i,...r)}return i}function cc(t){return t._firestoreClient||GT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function GT(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new pO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,KT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new g1(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(pt.fromBase64String(e))}catch(n){throw new F(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=/^__.*__$/;class C1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class QT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function YT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class fc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return al(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(YT(this.uu)&&A1.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class S1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||oc(e)}Ru(e,n,s,i=!1){return new fc({uu:e,methodName:n,Au:s,path:mt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function b1(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new S1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P1(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);_f("Data must be an object, but it was:",o,s);const a=XT(s,o);let l,c;if(r.merge)l=new xt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=uh(e,h,n);if(!o.contains(d))throw new F(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ZT(u,d)||u.push(d)}l=new xt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new C1(new Tt(a),l,c)}class pc extends hc{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function k1(t,e,n){return new fc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class N1 extends hc{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=k1(this,e,!0),s=this.Vu.map(r=>Vo(r,n)),i=new Ni(s);return new $O(e.path,i)}isEqual(e){return this===e}}function O1(t,e,n,s){const i=t.Ru(1,e,n);_f("Data must be an object, but it was:",i,s);const r=[],o=Tt.empty();Yi(s,(l,c)=>{const u=yf(e,l,n);c=tt(c);const h=i.Iu(u);if(c instanceof pc)r.push(u);else{const d=Vo(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new xt(r);return new QT(o,a,i.fieldTransforms)}function D1(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[uh(e,s,n)],l=[i];if(r.length%2!=0)throw new F(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(uh(e,r[d])),l.push(r[d+1]);const c=[],u=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!ZT(c,a[d])){const f=a[d];let m=l[d];m=tt(m);const y=o.Iu(f);if(m instanceof pc)c.push(f);else{const v=Vo(m,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new xt(c);return new QT(u,h,o.fieldTransforms)}function Vo(t,e){if(JT(t=tt(t)))return _f("Unsupported field value:",e,t),XT(t,e);if(t instanceof hc)return function(s,i){if(!YT(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Vo(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return VO(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ve.fromDate(s);return{timestampValue:sl(i.serializer,r)}}if(s instanceof Ve){const r=new Ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sl(i.serializer,r)}}if(s instanceof dc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Us)return{bytesValue:ST(i.serializer,s._byteString)};if(s instanceof It){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ef(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${mf(s)}`)}(t,e)}function XT(t,e){const n={};return iT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(s,i)=>{const r=Vo(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function JT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof dc||t instanceof Us||t instanceof It||t instanceof hc)}function _f(t,e,n){if(!JT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=mf(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function uh(t,e,n){if((e=tt(e))instanceof uc)return e._internalPath;if(typeof e=="string")return yf(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const x1=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(x1)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uc(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new F(w.INVALID_ARGUMENT,a+t+l)}function ZT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M1 extends ll{data(){return super.data()}}function eI(t,e){return typeof e=="string"?yf(t,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nI{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Yi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new dc(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=as(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);Pe(OT(s));const i=new so(s.get(1),s.get(3)),r=new H(s.popFirst(5));return i.isEqual(n)||xn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class V1 extends nI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vf extends ll{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(eI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class va extends vf{data(e={}){return super.data(e)}}class sI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ri(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new va(this._firestore,this._userDataWriter,s.key,s,new ri(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:F1(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){t=kn(t,It);const e=kn(t.firestore,xi);return v1(cc(e),t._key).then(n=>rI(e,t,n))}class gc extends nI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function U1(t){t=kn(t,Lo);const e=kn(t.firestore,xi),n=cc(e),s=new gc(e);return tI(t._query),E1(n,t._query).then(i=>new sI(e,s,t,i))}function Ef(t,...e){var n,s,i;t=tt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(hm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof It)c=kn(t.firestore,xi),u=ec(t._key.path),l={next:h=>{e[o]&&e[o](rI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=kn(t,Lo);c=kn(h.firestore,xi),u=h._query;const d=new gc(c);l={next:f=>{e[o]&&e[o](new sI(c,d,h,f))},error:e[o+1],complete:e[o+2]},tI(t._query)}return function(d,f,m,y){const v=new gf(y),R=new ff(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>uf(await ol(d),R)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>hf(await ol(d),R))}}(cc(c),u,a,l)}function rI(t,e,n){const s=n.docs.get(e._key),i=new gc(t);return new vf(t,i,e._key,s,new ri(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const B1={maxAttempts:5};function lr(t,e){if((t=tt(t)).firestore!==e)throw new F(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $1 extends class{constructor(n,s){this._firestore=n,this._transaction=s,this._dataReader=b1(n)}get(n){const s=lr(n,this._firestore),i=new V1(this._firestore);return this._transaction.lookup([s._key]).then(r=>{if(!r||r.length!==1)return W();const o=r[0];if(o.isFoundDocument())return new ll(this._firestore,i,o.key,o,s.converter);if(o.isNoDocument())return new ll(this._firestore,i,s._key,null,s.converter);throw W()})}set(n,s,i){const r=lr(n,this._firestore),o=L1(r.converter,s,i),a=P1(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,a),this}update(n,s,i,...r){const o=lr(n,this._firestore);let a;return a=typeof(s=tt(s))=="string"||s instanceof uc?D1(this._dataReader,"Transaction.update",o._key,s,i,r):O1(this._dataReader,"Transaction.update",o._key,s),this._transaction.update(o._key,a),this}delete(n){const s=lr(n,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=lr(e,this._firestore),s=new gc(this._firestore);return super.get(e).then(i=>new vf(this._firestore,s,n._key,i._document,new ri(!1,!1),n.converter))}}function iL(t,e,n){t=kn(t,xi);const s=Object.assign(Object.assign({},B1),n);return function(r){if(r.maxAttempts<1)throw new F(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,a){const l=new bn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await y1(r);new p1(r.asyncQueue,c,a,o,l).run()}),l.promise}(cc(t),i=>e(new $1(t,i)),s)}function rL(...t){return new N1("arrayUnion",t)}(function(e,n=!0){(function(i){Qi=i})(cs),fn(new zt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new xi(new eO(s.getProvider("auth-internal")),new iO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),bt(kg,"4.1.0",e),bt(kg,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",j1="storageBucket",q1=2*60*1e3,H1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yn{constructor(e,n,s=0){super(Xc(e),`Firebase Storage: ${n} (${Xc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_n||(_n={}));function Xc(t){return"storage/"+t}function W1(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(_n.UNKNOWN,t)}function K1(){return new vn(_n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function z1(){return new vn(_n.CANCELED,"User canceled the upload/download.")}function G1(t){return new vn(_n.INVALID_URL,"Invalid URL '"+t+"'.")}function Q1(t){return new vn(_n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dm(t){return new vn(_n.INVALID_ARGUMENT,t)}function aI(){return new vn(_n.APP_DELETED,"The Firebase app was deleted.")}function Y1(t){return new vn(_n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(s.path==="")return s;throw Q1(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",R=new RegExp(`^https?://${y}/${i}/${v}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<k.length;A++){const Y=k[A],G=Y.regex.exec(e);if(G){const ye=G[Y.indices.bucket];let Ie=G[Y.indices.path];Ie||(Ie=""),s=new qt(ye,Ie),Y.postModify(s);break}}if(s==null)throw G1(e);return s}}class X1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...R){if(c){d();return}if(v){d(),u.call(null,v,...R);return}if(l()||o){d(),u.call(null,v,...R);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function y(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Z1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){return t!==void 0}function fm(t,e,n,s){if(s<e)throw dm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw dm(`Invalid value for '${t}'. Expected ${n} or less.`)}function tx(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cl||(cl={}));/**
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
 */function nx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===cl.NO_ERROR,l=r.getStatus();if(!a||nx(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===cl.ABORT;s(!1,new oa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new oa(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ex(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=W1();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?aI():z1();o(l)}else{const l=K1();o(l)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=J1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Z1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ix(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ox(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ax(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lx(t,e,n,s,i,r,o=!0){const a=tx(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return ox(c,e),ix(c,n),rx(c,r),ax(c,s),new sx(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ux(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ul{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ul(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ux(this._location.path)}get storage(){return this._service}get parent(){const e=cx(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new ul(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Y1(e)}}function pm(t,e){const n=e==null?void 0:e[j1];return n==null?null:qt.makeFromBucketSpec(n,t)}class hx{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q1,this._maxUploadRetryTime=H1,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=pm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=pm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ul(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new X1(aI());{const o=lx(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const gm="@firebase/storage",mm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="storage";function fx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hx(n,s,i,e,cs)}function px(){fn(new zt(dx,fx,"PUBLIC").setMultipleInstances(!0)),bt(gm,mm,""),bt(gm,mm,"esm2017")}px();const Jc=new WeakMap;function lI(t,e){return Jc.has(e)||Jc.set(e,t||{f:{},r:{},s:{},u:{}}),Jc.get(e)}function gx(t,e,n,s){if(!t)return n;const[i,r]=cI(t);if(!i)return n;const o=lI(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function mx(t,e,n,s){if(!t)return;const[i,r]=cI(t);if(!i)return;const o=lI(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(rn),a}function cI(t){return YS(t)||XS(t)?["f",t.path]:JS(t)?["r",t.toString()]:ZS(t)?["s",t.toString()]:[]}const Zc=new WeakMap;function _x(t,e,n){const s=go();Zc.has(s)||Zc.set(s,new Map);const i=Zc.get(s),r=mx(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):rn}const yx={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function hh(t,e,n,s){if(!GS(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof Ve||m instanceof dc)h[f]=m;else if(Zh(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Bs(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const Tf={reset:!1,wait:!0,maxRefDepth:2,converter:yx,snapshotOptions:{serverTimestamps:"estimate"}};function hl(t){for(const e in t)t[e].unsub()}function dh(t,e,n,s,i,r,o,a,l){const[c,u]=hh(s.data(t.snapshotOptions),Jh(e,n),i,t);r.set(e,n,c),fh(t,e,n,i,u,r,o,a,l)}function vx({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=rn;return a.once?iI(t).then(u=>{u.exists()?dh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Ef(t,u=>{u.exists()?dh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),hl(l)}}function fh(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],R=i[y],P=`${n}.${y}`;if(f[P]=!0,v)if(v.path!==R.path)v.unsub();else return;s[y]={data:()=>Jh(e,P),unsub:vx({ref:R,target:e,path:P,depth:o,ops:r,resolve:m.bind(null,P),reject:l},t),path:R.path}})}function Ex(t,e,n,s,i,r){const o=Object.assign({},Tf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Xn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,y=rn;const v=[],R={added:({newIndex:k,doc:A})=>{v.splice(k,0,Object.create(null));const Y=v[k],[G,ye]=hh(A.data(l),void 0,Y,o);n.add(rt(d),k,G),fh(o,d,`${h}.${k}`,Y,ye,n,0,s.bind(null,A),i)},modified:({oldIndex:k,newIndex:A,doc:Y})=>{const G=rt(d),ye=v[k],Ie=G[k],[yt,Ge]=hh(Y.data(l),Ie,ye,o);v.splice(A,0,ye),n.remove(G,k),n.add(G,A,yt),fh(o,d,`${h}.${A}`,ye,Ge,n,0,s,i)},removed:({oldIndex:k})=>{const A=rt(d);n.remove(A,k),hl(v.splice(k,1)[0])}};function P(k){const A=k.docChanges(a);if(!m&&A.length){m=!0;let Y=0;const G=A.length,ye=Object.create(null);for(let Ie=0;Ie<G;Ie++)ye[A[Ie].doc.id]=!0;s=Ie=>{Ie&&Ie.id in ye&&++Y>=G&&(c&&(n.set(t,h,rt(d)),d=t),f(rt(d)),s=rn)}}A.forEach(Y=>{R[Y.type](Y)}),A.length||(c&&(n.set(t,h,rt(d)),d=t),s(rt(d)))}return u?U1(e).then(P).catch(i):y=Ef(e,P,i),k=>{if(y(),k){const A=typeof k=="function"?k():[];n.set(t,h,A)}v.forEach(hl)}}function Tx(t,e,n,s,i,r){const o=Object.assign({},Tf,r),a="value",l=Object.create(null);s=eb(s,()=>Jh(t,a));let c=rn;function u(h){h.exists()?dh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?iI(e).then(u).catch(i):c=Ef(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}hl(l)}}const _m=Symbol();function Ix(t,e){let n=rn;const s=Object.assign({},Tf,e),i=rt(t),r=s.target||Xn();nb()&&(s.once=!0);const o=gx(i,s.ssrKey,_m,go()),a=o!==_m;a&&(r.value=o);let l=!a;const c=Xn(!1),u=Xn(),h=o_(),d=Hm();let f=rn;function m(){let R=rt(t);const P=new Promise((k,A)=>{if(n(s.reset),!R)return n=rn,k(null);c.value=l,l=!0,R.converter||(R=R.withConverter(s.converter)),n=(Zh(R)?Tx:Ex)(r,R,wx,k,A,s)}).catch(k=>(h.value===P&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===P&&(c.value=!1)});h.value=P}let y=rn;Je(t)&&(y=ui(t,m)),m(),i&&(f=_x(h.value,i,s.ssrKey)),x_()&&E_(()=>h.value),d&&UI(v);function v(R=s.reset){y(),f(),n(R)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const wx={set:(t,e,n)=>KS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function oL(t,e){return Ix(t,{target:Xn([]),...e})}function Rx(t){return(e,n)=>{const s=sb(e,n).run(()=>Xn(t));$y.set(e,s),ob(s,e)}}function aL(t){return WS?Vy(go(t)):null}function Ax(t,{firebaseApp:e,modules:n=[]}){t.provide(By,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Cx=Symbol();var ym;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ym||(ym={}));function Sx(){const t=qm(!0),e=t.run(()=>Xn({}));let n=[],s=[];const i=Ph({install(r){i._a=r,r.provide(Cx,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!yS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const uI=J_({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),lL=R1(uI);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ti=typeof window<"u";function bx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function eu(t,e){const n={};for(const s in e){const i=e[s];n[s]=Yt(i)?i.map(t):t(i)}return n}const Nr=()=>{},Yt=Array.isArray,Px=/\/$/,kx=t=>t.replace(Px,"");function tu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=xx(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Nx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ox(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Mi(e.matched[s],n.matched[i])&&hI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Dx(t[n],e[n]))return!1;return!0}function Dx(t,e){return Yt(t)?Em(t,e):Yt(e)?Em(e,t):t===e}function Em(t,e){return Yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function xx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var oo;(function(t){t.pop="pop",t.push="push"})(oo||(oo={}));var Or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Or||(Or={}));function Mx(t){if(!t)if(ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kx(t)}const Lx=/^[^#]+#/;function Vx(t,e){return t.replace(Lx,"#")+e}function Fx(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const mc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ux(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Fx(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tm(t,e){return(history.state?history.state.position-e:-1)+t}const ph=new Map;function Bx(t,e){ph.set(t,e)}function $x(t){const e=ph.get(t);return ph.delete(t),e}let jx=()=>location.protocol+"//"+location.host;function dI(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),vm(l,"")}return vm(n,t)+s+i}function qx(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=dI(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else s(f);i.forEach(R=>{R(n.value,m,{delta:v,type:oo.pop,direction:v?v>0?Or.forward:Or.back:Or.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:mc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Im(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?mc():null}}function Hx(t){const{history:e,location:n}=window,s={value:dI(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:jx()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,Im(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:mc()});r(u.current,u,!0);const h=pe({},Im(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Wx(t){t=Mx(t);const e=Hx(t),n=qx(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:Vx.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Kx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Wx(t)}function zx(t){return typeof t=="string"||t&&typeof t=="object"}function fI(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pI=Symbol("");var wm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wm||(wm={}));function Li(t,e){return pe(new Error,{type:t,[pI]:!0},e)}function Tn(t,e){return t instanceof Error&&pI in t&&(e==null||!!(t.type&e))}const Rm="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0},Qx=/[.+*?^${}()[\]/\\]/g;function Yx(t,e){const n=pe({},Gx,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Qx,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:R}=d;r.push({name:m,repeatable:y,optional:v});const P=R||Rm;if(P!==Rm){f+=10;try{new RegExp(`(${P})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+A.message)}}let k=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),i+=k,f+=20,v&&(f+=-8),y&&(f+=-20),P===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,R=m in c?c[m]:"";if(Yt(R)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=Yt(R)?R.join("/"):R;if(!P)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Xx(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jx(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Xx(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Am(s))return 1;if(Am(i))return-1}return i.length-s.length}function Am(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zx={type:0,value:""},eM=/[a-zA-Z0-9_]/;function tM(t){if(!t)return[[]];if(t==="/")return[[Zx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:eM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function nM(t,e,n){const s=Yx(tM(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function sM(t,e){const n=[],s=new Map;e=bm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=iM(u);m.aliasOf=d&&d.record;const y=bm(e,u),v=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of k)v.push(pe({},m,{components:d?d.record.components:m.components,path:A,aliasOf:d?d.record:m}))}let R,P;for(const k of v){const{path:A}=k;if(h&&A[0]!=="/"){const Y=h.record.path,G=Y[Y.length-1]==="/"?"":"/";k.path=h.record.path+(A&&G+A)}if(R=nM(k,h,y),d?d.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),f&&u.name&&!Sm(R)&&o(u.name)),m.children){const Y=m.children;for(let G=0;G<Y.length;G++)r(Y[G],R,d&&d.children[G])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return P?()=>{o(P)}:Nr}function o(u){if(fI(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Jx(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Li(1,{location:u});y=d.record.name,f=pe(Cm(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Cm(u.params,d.keys.map(P=>P.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(P=>P.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Li(1,{location:u,currentLocation:h});y=d.record.name,f=pe({},h.params,u.params),m=d.stringify(f)}const v=[];let R=d;for(;R;)v.unshift(R.record),R=R.parent;return{name:y,path:m,params:f,matched:v,meta:oM(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Cm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function iM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Sm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function oM(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function bm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gI(t,e){return e.children.some(n=>n===t||gI(t,n))}const mI=/#/g,aM=/&/g,lM=/\//g,cM=/=/g,uM=/\?/g,_I=/\+/g,hM=/%5B/g,dM=/%5D/g,yI=/%5E/g,fM=/%60/g,vI=/%7B/g,pM=/%7C/g,EI=/%7D/g,gM=/%20/g;function If(t){return encodeURI(""+t).replace(pM,"|").replace(hM,"[").replace(dM,"]")}function mM(t){return If(t).replace(vI,"{").replace(EI,"}").replace(yI,"^")}function gh(t){return If(t).replace(_I,"%2B").replace(gM,"+").replace(mI,"%23").replace(aM,"%26").replace(fM,"`").replace(vI,"{").replace(EI,"}").replace(yI,"^")}function _M(t){return gh(t).replace(cM,"%3D")}function yM(t){return If(t).replace(mI,"%23").replace(uM,"%3F")}function vM(t){return t==null?"":yM(t).replace(lM,"%2F")}function dl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function EM(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_I," "),o=r.indexOf("="),a=dl(o<0?r:r.slice(0,o)),l=o<0?null:dl(r.slice(o+1));if(a in e){let c=e[a];Yt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pm(t){let e="";for(let n in t){const s=t[n];if(n=_M(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(s)?s.map(r=>r&&gh(r)):[s&&gh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function TM(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const IM=Symbol(""),km=Symbol(""),_c=Symbol(""),wf=Symbol(""),mh=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Li(4,{from:n,to:e})):h instanceof Error?a(h):zx(h)?a(Li(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function nu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(wM(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Hn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=bx(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Hn(d,n,s,r,o)()}))}}return i}function wM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nm(t){const e=St(_c),n=St(wf),s=Ut(()=>e.resolve(rt(t.to))),i=Ut(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Mi.bind(null,u));if(d>-1)return d;const f=Om(l[c-2]);return c>1&&Om(u)===f&&h[h.length-1].path!==f?h.findIndex(Mi.bind(null,l[c-2])):d}),r=Ut(()=>i.value>-1&&SM(n.params,s.value.params)),o=Ut(()=>i.value>-1&&i.value===n.matched.length-1&&hI(n.params,s.value.params));function a(l={}){return CM(l)?e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(Nr):Promise.resolve()}return{route:s,href:Ut(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const RM=wl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nm,setup(t,{slots:e}){const n=vl(Nm(t)),{options:s}=St(_c),i=Ut(()=>({[Dm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Dm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:V_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),AM=RM;function CM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Om(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dm=(t,e,n)=>t??e??n,bM=wl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(mh),i=Ut(()=>t.route||s.value),r=St(km,0),o=Ut(()=>{let c=rt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ut(()=>i.value.matched[o.value]);ca(km,Ut(()=>o.value+1)),ca(IM,a),ca(mh,i);const l=Xn();return ui(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Mi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return xm(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=V_(d,pe({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return xm(n.default,{Component:v,route:c})||v}}});function xm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TI=bM;function PM(t){const e=sM(t.routes,t),n=t.parseQuery||EM,s=t.stringifyQuery||Pm,i=t.history,r=cr(),o=cr(),a=cr(),l=o_(jn);let c=jn;ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=eu.bind(null,T=>""+T),h=eu.bind(null,vM),d=eu.bind(null,dl);function f(T,V){let D,$;return fI(T)?(D=e.getRecordMatcher(T),$=V):$=T,e.addRoute($,D)}function m(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function R(T,V){if(V=pe({},V||l.value),typeof T=="string"){const _=tu(n,T,V.path),E=e.resolve({path:_.path},V),I=i.createHref(_.fullPath);return pe(_,E,{params:d(E.params),hash:dl(_.hash),redirectedFrom:void 0,href:I})}let D;if("path"in T)D=pe({},T,{path:tu(n,T.path,V.path).path});else{const _=pe({},T.params);for(const E in _)_[E]==null&&delete _[E];D=pe({},T,{params:h(_)}),V.params=h(V.params)}const $=e.resolve(D,V),he=T.hash||"";$.params=u(d($.params));const p=Nx(s,pe({},T,{hash:mM(he),path:$.path})),g=i.createHref(p);return pe({fullPath:p,hash:he,query:s===Pm?TM(T.query):T.query||{}},$,{redirectedFrom:void 0,href:g})}function P(T){return typeof T=="string"?tu(n,T,l.value.path):pe({},T)}function k(T,V){if(c!==T)return Li(8,{from:V,to:T})}function A(T){return ye(T)}function Y(T){return A(pe(P(T),{replace:!0}))}function G(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let $=typeof D=="function"?D(T):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=P($):{path:$},$.params={}),pe({query:T.query,hash:T.hash,params:"path"in $?{}:T.params},$)}}function ye(T,V){const D=c=R(T),$=l.value,he=T.state,p=T.force,g=T.replace===!0,_=G(D);if(_)return ye(pe(P(_),{state:typeof _=="object"?pe({},he,_.state):he,force:p,replace:g}),V||D);const E=D;E.redirectedFrom=V;let I;return!p&&Ox(s,$,D)&&(I=Li(16,{to:E,from:$}),Jt($,$,!0,!1)),(I?Promise.resolve(I):Ge(E,$)).catch(C=>Tn(C)?Tn(C,2)?C:Un(C):ue(C,E,$)).then(C=>{if(C){if(Tn(C,2))return ye(pe({replace:g},P(C.to),{state:typeof C.to=="object"?pe({},he,C.to.state):he,force:p}),V||E)}else C=ds(E,$,!0,g,he);return Fn(E,$,C),C})}function Ie(T,V){const D=k(T,V);return D?Promise.reject(D):Promise.resolve()}function yt(T){const V=zs.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(T):T()}function Ge(T,V){let D;const[$,he,p]=kM(T,V);D=nu($.reverse(),"beforeRouteLeave",T,V);for(const _ of $)_.leaveGuards.forEach(E=>{D.push(Hn(E,T,V))});const g=Ie.bind(null,T,V);return D.push(g),nt(D).then(()=>{D=[];for(const _ of r.list())D.push(Hn(_,T,V));return D.push(g),nt(D)}).then(()=>{D=nu(he,"beforeRouteUpdate",T,V);for(const _ of he)_.updateGuards.forEach(E=>{D.push(Hn(E,T,V))});return D.push(g),nt(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(Yt(_.beforeEnter))for(const E of _.beforeEnter)D.push(Hn(E,T,V));else D.push(Hn(_.beforeEnter,T,V));return D.push(g),nt(D)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),D=nu(p,"beforeRouteEnter",T,V),D.push(g),nt(D))).then(()=>{D=[];for(const _ of o.list())D.push(Hn(_,T,V));return D.push(g),nt(D)}).catch(_=>Tn(_,8)?_:Promise.reject(_))}function Fn(T,V,D){a.list().forEach($=>yt(()=>$(T,V,D)))}function ds(T,V,D,$,he){const p=k(T,V);if(p)return p;const g=V===jn,_=ti?history.state:{};D&&($||g?i.replace(T.fullPath,pe({scroll:g&&_&&_.scroll},he)):i.push(T.fullPath,he)),l.value=T,Jt(T,V,D,g),Un()}let Xt;function Zi(){Xt||(Xt=i.listen((T,V,D)=>{if(!Fo.listening)return;const $=R(T),he=G($);if(he){ye(pe(he,{replace:!0}),$).catch(Nr);return}c=$;const p=l.value;ti&&Bx(Tm(p.fullPath,D.delta),mc()),Ge($,p).catch(g=>Tn(g,12)?g:Tn(g,2)?(ye(g.to,$).then(_=>{Tn(_,20)&&!D.delta&&D.type===oo.pop&&i.go(-1,!1)}).catch(Nr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),ue(g,$,p))).then(g=>{g=g||ds($,p,!1),g&&(D.delta&&!Tn(g,8)?i.go(-D.delta,!1):D.type===oo.pop&&Tn(g,20)&&i.go(-1,!1)),Fn($,p,g)}).catch(Nr)}))}let Ws=cr(),Ue=cr(),ve;function ue(T,V,D){Un(T);const $=Ue.list();return $.length?$.forEach(he=>he(T,V,D)):console.error(T),Promise.reject(T)}function En(){return ve&&l.value!==jn?Promise.resolve():new Promise((T,V)=>{Ws.add([T,V])})}function Un(T){return ve||(ve=!T,Zi(),Ws.list().forEach(([V,D])=>T?D(T):V()),Ws.reset()),T}function Jt(T,V,D,$){const{scrollBehavior:he}=t;if(!ti||!he)return Promise.resolve();const p=!D&&$x(Tm(T.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return u_().then(()=>he(T,V,p)).then(g=>g&&Ux(g)).catch(g=>ue(g,T,V))}const vt=T=>i.go(T);let Ks;const zs=new Set,Fo={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:R,options:t,push:A,replace:Y,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:En,install(T){const V=this;T.component("RouterLink",AM),T.component("RouterView",TI),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(l)}),ti&&!Ks&&l.value===jn&&(Ks=!0,A(i.location).catch(he=>{}));const D={};for(const he in jn)Object.defineProperty(D,he,{get:()=>l.value[he],enumerable:!0});T.provide(_c,V),T.provide(wf,t_(D)),T.provide(mh,l);const $=T.unmount;zs.add(T),T.unmount=function(){zs.delete(T),zs.size<1&&(c=jn,Xt&&Xt(),Xt=null,l.value=jn,Ks=!1,ve=!1),$()}}};function nt(T){return T.reduce((V,D)=>V.then(()=>yt(D)),Promise.resolve())}return Fo}function kM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Mi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Mi(c,l))||i.push(l))}return[n,s,i]}function NM(){return St(_c)}function OM(){return St(wf)}const DM=wl({__name:"App",setup(t){const e=ib(),n=NM(),s=OM();return ui(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(lo(),Mh(rt(TI)))}}),xM="modulepreload",MM=function(t){return"/"+t},Mm={},su=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=MM(r),r in Mm)return;Mm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":xM,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const II=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},LM={},VM={class:"card"};function FM(t,e){return lo(),O_("div",VM,[Ww(t.$slots,"title",{},void 0,!0)])}const iu=II(LM,[["render",FM],["__scopeId","data-v-52aa979e"]]),UM=t=>(Iw("data-v-bf674ff6"),t=t(),ww(),t),BM=UM(()=>Lh("h1",null,"Fonti Paintball",-1)),$M=wl({__name:"HomeView",setup(t){return(e,n)=>{const s=jw("RouterLink");return lo(),O_("main",null,[BM,Me(s,{to:"/rules"},{default:Js(()=>[Me(iu,null,{title:Js(()=>[ha(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),Me(s,{to:"/availability"},{default:Js(()=>[Me(iu,null,{title:Js(()=>[ha(" Inserisci disponibilità ")]),_:1})]),_:1}),Me(iu,null,{title:Js(()=>[ha(" Statistiche giocatori (prossimamente...) ")]),_:1})])}}});const jM=II($M,[["__scopeId","data-v-bf674ff6"]]),wI=PM({history:Kx("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:jM},{path:"/login",name:"login",component:()=>su(()=>import("./LoginView-7f9be98f.js"),["assets/LoginView-7f9be98f.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>su(()=>import("./AvailabilityView-dad4ecf9.js"),["assets/AvailabilityView-dad4ecf9.js","assets/AvailabilityView-328d1b1c.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>su(()=>import("./RulesView-91bfcef5.js"),["assets/RulesView-91bfcef5.js","assets/RulesView-d0a269fc.css"])}]});wI.beforeEach(async t=>{if(t.meta.requiresAuth&&!await rb())return{path:"/login",query:{redirect:t.fullPath}}});const yc=W0(DM);yc.use(Sx());yc.use(wI);yc.use(Ax,{firebaseApp:uI,modules:[Rx()]});yc.mount("#app");export{HM as A,zM as B,Xn as C,tL as D,oL as E,Vt as F,Kn as G,Mh as H,lL as I,iL as J,nL as K,rL as L,II as _,ib as a,lo as b,O_ as c,wl as d,rt as e,KM as f,YM as g,Lh as h,Me as i,ww as j,vl as k,Ut as l,ui as m,Ww as n,Mw as o,Iw as p,WM as q,jw as r,QM as s,qM as t,aL as u,Ih as v,Js as w,GM as x,ha as y,Th as z};
