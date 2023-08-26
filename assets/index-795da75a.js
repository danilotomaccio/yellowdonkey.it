(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ud(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Me={},ji=[],hn=()=>{},Z0=()=>!1,eb=/^on[^a-z]/,dc=t=>eb.test(t),Bd=t=>t.startsWith("onUpdate:"),tt=Object.assign,Hd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tb=Object.prototype.hasOwnProperty,de=(t,e)=>tb.call(t,e),X=Array.isArray,zi=t=>fc(t)==="[object Map]",xy=t=>fc(t)==="[object Set]",ie=t=>typeof t=="function",Qe=t=>typeof t=="string",jd=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Oy=t=>Ve(t)&&ie(t.then)&&ie(t.catch),Dy=Object.prototype.toString,fc=t=>Dy.call(t),nb=t=>fc(t).slice(8,-1),My=t=>fc(t)==="[object Object]",zd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,il=Ud(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sb=/-(\w)/g,Mn=pc(t=>t.replace(sb,(e,n)=>n?n.toUpperCase():"")),ib=/\B([A-Z])/g,Tr=pc(t=>t.replace(ib,"-$1").toLowerCase()),mc=pc(t=>t.charAt(0).toUpperCase()+t.slice(1)),wu=pc(t=>t?`on${mc(t)}`:""),wo=(t,e)=>!Object.is(t,e),Iu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cm;const ph=()=>cm||(cm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wd(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?cb(s):Wd(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(Ve(t))return t}}const ob=/;(?![^(]*\))/g,ab=/:([^]+)/,lb=/\/\*[^]*?\*\//g;function cb(t){const e={};return t.replace(lb,"").split(ob).forEach(n=>{if(n){const s=n.split(ab);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qd(t){let e="";if(Qe(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=qd(t[n]);s&&(e+=s+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ub="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hb=Ud(ub);function Ly(t){return!!t||t===""}const ls=t=>Qe(t)?t:t==null?"":X(t)||Ve(t)&&(t.toString===Dy||!ie(t.toString))?JSON.stringify(t,Vy,2):String(t),Vy=(t,e)=>e&&e.__v_isRef?Vy(t,e.value):zi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:xy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!X(e)&&!My(e)?String(e):e;let Bt;class Fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Kd(t){return new Fy(t)}function db(t,e=Bt){e&&e.active&&e.effects.push(t)}function Gd(){return Bt}function $y(t){Bt&&Bt.cleanups.push(t)}const Qd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uy=t=>(t.w&Ss)>0,By=t=>(t.n&Ss)>0,fb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ss},pb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Uy(i)&&!By(i)?i.delete(t):e[n++]=i,i.w&=~Ss,i.n&=~Ss}e.length=n}},vl=new WeakMap;let Yr=0,Ss=1;const mh=30;let on;const ni=Symbol(""),gh=Symbol("");class Yd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,db(this,s)}run(){if(!this.active)return this.fn();let e=on,n=Ts;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=on,on=this,Ts=!0,Ss=1<<++Yr,Yr<=mh?fb(this):um(this),this.fn()}finally{Yr<=mh&&pb(this),Ss=1<<--Yr,on=this.parent,Ts=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(um(this),this.onStop&&this.onStop(),this.active=!1)}}function um(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ts=!0;const Hy=[];function wr(){Hy.push(Ts),Ts=!1}function Ir(){const t=Hy.pop();Ts=t===void 0?!0:t}function Vt(t,e,n){if(Ts&&on){let s=vl.get(t);s||vl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Qd()),jy(i)}}function jy(t,e){let n=!1;Yr<=mh?By(t)||(t.n|=Ss,n=!Uy(t)):n=!t.has(on),n&&(t.add(on),on.deps.push(t))}function Jn(t,e,n,s,i,r){const o=vl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?zd(n)&&a.push(o.get("length")):(a.push(o.get(ni)),zi(t)&&a.push(o.get(gh)));break;case"delete":X(t)||(a.push(o.get(ni)),zi(t)&&a.push(o.get(gh)));break;case"set":zi(t)&&a.push(o.get(ni));break}if(a.length===1)a[0]&&_h(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_h(Qd(l))}}function _h(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&hm(s);for(const s of n)s.computed||hm(s)}function hm(t,e){(t!==on||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function mb(t,e){var n;return(n=vl.get(t))==null?void 0:n.get(e)}const gb=Ud("__proto__,__v_isRef,__isVue"),zy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jd)),_b=Xd(),yb=Xd(!1,!0),vb=Xd(!0),dm=Eb();function Eb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let r=0,o=this.length;r<o;r++)Vt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wr();const s=pe(this)[e].apply(this,n);return Ir(),s}}),t}function Tb(t){const e=pe(this);return Vt(e,"has",t),e.hasOwnProperty(t)}function Xd(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Vb:Qy:e?Gy:Ky).get(s))return s;const o=X(s);if(!t){if(o&&de(dm,i))return Reflect.get(dm,i,r);if(i==="hasOwnProperty")return Tb}const a=Reflect.get(s,i,r);return(jd(i)?zy.has(i):gb(i))||(t||Vt(s,"get",i),e)?a:$e(a)?o&&zd(i)?a:a.value:Ve(a)?t?Xy(a):ta(a):a}}const wb=Wy(),Ib=Wy(!0);function Wy(t=!1){return function(n,s,i,r){let o=n[s];if(er(o)&&$e(o)&&!$e(i))return!1;if(!t&&(!El(i)&&!er(i)&&(o=pe(o),i=pe(i)),!X(n)&&$e(o)&&!$e(i)))return o.value=i,!0;const a=X(n)&&zd(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,i,r);return n===pe(r)&&(a?wo(i,o)&&Jn(n,"set",s,i):Jn(n,"add",s,i)),l}}function bb(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Jn(t,"delete",e,void 0),s}function Ab(t,e){const n=Reflect.has(t,e);return(!jd(e)||!zy.has(e))&&Vt(t,"has",e),n}function Rb(t){return Vt(t,"iterate",X(t)?"length":ni),Reflect.ownKeys(t)}const qy={get:_b,set:wb,deleteProperty:bb,has:Ab,ownKeys:Rb},Cb={get:vb,set(t,e){return!0},deleteProperty(t,e){return!0}},Sb=tt({},qy,{get:yb,set:Ib}),Jd=t=>t,gc=t=>Reflect.getPrototypeOf(t);function Ma(t,e,n=!1,s=!1){t=t.__v_raw;const i=pe(t),r=pe(e);n||(e!==r&&Vt(i,"get",e),Vt(i,"get",r));const{has:o}=gc(i),a=s?Jd:n?tf:Io;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function La(t,e=!1){const n=this.__v_raw,s=pe(n),i=pe(t);return e||(t!==i&&Vt(s,"has",t),Vt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Va(t,e=!1){return t=t.__v_raw,!e&&Vt(pe(t),"iterate",ni),Reflect.get(t,"size",t)}function fm(t){t=pe(t);const e=pe(this);return gc(e).has.call(e,t)||(e.add(t),Jn(e,"add",t,t)),this}function pm(t,e){e=pe(e);const n=pe(this),{has:s,get:i}=gc(n);let r=s.call(n,t);r||(t=pe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?wo(e,o)&&Jn(n,"set",t,e):Jn(n,"add",t,e),this}function mm(t){const e=pe(this),{has:n,get:s}=gc(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Jn(e,"delete",t,void 0),r}function gm(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&Jn(t,"clear",void 0,void 0),n}function Fa(t,e){return function(s,i){const r=this,o=r.__v_raw,a=pe(o),l=e?Jd:t?tf:Io;return!t&&Vt(a,"iterate",ni),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $a(t,e,n){return function(...s){const i=this.__v_raw,r=pe(i),o=zi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Jd:e?tf:Io;return!e&&Vt(r,"iterate",l?gh:ni),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function cs(t){return function(...e){return t==="delete"?!1:this}}function Pb(){const t={get(r){return Ma(this,r)},get size(){return Va(this)},has:La,add:fm,set:pm,delete:mm,clear:gm,forEach:Fa(!1,!1)},e={get(r){return Ma(this,r,!1,!0)},get size(){return Va(this)},has:La,add:fm,set:pm,delete:mm,clear:gm,forEach:Fa(!1,!0)},n={get(r){return Ma(this,r,!0)},get size(){return Va(this,!0)},has(r){return La.call(this,r,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:Fa(!0,!1)},s={get(r){return Ma(this,r,!0,!0)},get size(){return Va(this,!0)},has(r){return La.call(this,r,!0)},add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$a(r,!1,!1),n[r]=$a(r,!0,!1),e[r]=$a(r,!1,!0),s[r]=$a(r,!0,!0)}),[t,n,e,s]}const[kb,Nb,xb,Ob]=Pb();function Zd(t,e){const n=e?t?Ob:xb:t?Nb:kb;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(de(n,i)&&i in s?n:s,i,r)}const Db={get:Zd(!1,!1)},Mb={get:Zd(!1,!0)},Lb={get:Zd(!0,!1)},Ky=new WeakMap,Gy=new WeakMap,Qy=new WeakMap,Vb=new WeakMap;function Fb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $b(t){return t.__v_skip||!Object.isExtensible(t)?0:Fb(nb(t))}function ta(t){return er(t)?t:ef(t,!1,qy,Db,Ky)}function Yy(t){return ef(t,!1,Sb,Mb,Gy)}function Xy(t){return ef(t,!0,Cb,Lb,Qy)}function ef(t,e,n,s,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=$b(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ws(t){return er(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function El(t){return!!(t&&t.__v_isShallow)}function Jy(t){return ws(t)||er(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function _c(t){return yl(t,"__v_skip",!0),t}const Io=t=>Ve(t)?ta(t):t,tf=t=>Ve(t)?Xy(t):t;function Zy(t){Ts&&on&&(t=pe(t),jy(t.dep||(t.dep=Qd())))}function ev(t,e){t=pe(t);const n=t.dep;n&&_h(n)}function $e(t){return!!(t&&t.__v_isRef===!0)}function Mt(t){return nv(t,!1)}function tv(t){return nv(t,!0)}function nv(t,e){return $e(t)?t:new Ub(t,e)}class Ub{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Io(e)}get value(){return Zy(this),this._value}set value(e){const n=this.__v_isShallow||El(e)||er(e);e=n?e:pe(e),wo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Io(e),ev(this))}}function Re(t){return $e(t)?t.value:t}const Bb={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function sv(t){return ws(t)?t:new Proxy(t,Bb)}function Hb(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=zb(t,n);return e}class jb{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mb(pe(this._object),this._key)}}function zb(t,e,n){const s=t[e];return $e(s)?s:new jb(t,e,n)}class Wb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yd(e,()=>{this._dirty||(this._dirty=!0,ev(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=pe(this);return Zy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qb(t,e,n=!1){let s,i;const r=ie(t);return r?(s=t,i=hn):(s=t.get,i=t.set),new Wb(s,i,r||!i,n)}function Is(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){yc(r,e,n)}return i}function dn(t,e,n,s){if(ie(t)){const r=Is(t,e,n,s);return r&&Oy(r)&&r.catch(o=>{yc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(dn(t[r],e,n,s));return i}function yc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Is(l,null,10,[t,o,a]);return}}Kb(t,n,i,s)}function Kb(t,e,n,s=!0){console.error(t)}let bo=!1,yh=!1;const gt=[];let An=0;const Wi=[];let Wn=null,Gs=0;const iv=Promise.resolve();let nf=null;function sf(t){const e=nf||iv;return t?e.then(this?t.bind(this):t):e}function Gb(t){let e=An+1,n=gt.length;for(;e<n;){const s=e+n>>>1;Ao(gt[s])<t?e=s+1:n=s}return e}function rf(t){(!gt.length||!gt.includes(t,bo&&t.allowRecurse?An+1:An))&&(t.id==null?gt.push(t):gt.splice(Gb(t.id),0,t),rv())}function rv(){!bo&&!yh&&(yh=!0,nf=iv.then(av))}function Qb(t){const e=gt.indexOf(t);e>An&&gt.splice(e,1)}function Yb(t){X(t)?Wi.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?Gs+1:Gs))&&Wi.push(t),rv()}function _m(t,e=bo?An+1:0){for(;e<gt.length;e++){const n=gt[e];n&&n.pre&&(gt.splice(e,1),e--,n())}}function ov(t){if(Wi.length){const e=[...new Set(Wi)];if(Wi.length=0,Wn){Wn.push(...e);return}for(Wn=e,Wn.sort((n,s)=>Ao(n)-Ao(s)),Gs=0;Gs<Wn.length;Gs++)Wn[Gs]();Wn=null,Gs=0}}const Ao=t=>t.id==null?1/0:t.id,Xb=(t,e)=>{const n=Ao(t)-Ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function av(t){yh=!1,bo=!0,gt.sort(Xb);const e=hn;try{for(An=0;An<gt.length;An++){const n=gt[An];n&&n.active!==!1&&Is(n,null,14)}}finally{An=0,gt.length=0,ov(),bo=!1,nf=null,(gt.length||Wi.length)&&av()}}function Jb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Me;d&&(i=n.map(f=>Qe(f)?f.trim():f)),h&&(i=n.map(rb))}let a,l=s[a=wu(e)]||s[a=wu(Mn(e))];!l&&r&&(l=s[a=wu(Tr(e))]),l&&dn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dn(c,t,6,i)}}function lv(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=lv(c,e,!0);u&&(a=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ve(t)&&s.set(t,null),null):(X(r)?r.forEach(l=>o[l]=null):tt(o,r),Ve(t)&&s.set(t,o),o)}function vc(t,e){return!t||!dc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Tr(e))||de(t,e))}let lt=null,Ec=null;function Tl(t){const e=lt;return lt=t,Ec=t&&t.type.__scopeId||null,e}function Tc(t){Ec=t}function wc(){Ec=null}function rn(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Sm(-1);const r=Tl(e);let o;try{o=t(...i)}finally{Tl(r),s._d&&Sm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=t;let v,T;const R=Tl(t);try{if(n.shapeFlag&4){const b=i||s;v=bn(u.call(b,b,h,r,f,d,g)),T=l}else{const b=e;v=bn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),T=e.props?l:Zb(l)}}catch(b){ao.length=0,yc(b,t,1),v=et(Ps)}let P=v;if(T&&_!==!1){const b=Object.keys(T),{shapeFlag:B}=P;b.length&&B&7&&(o&&b.some(Bd)&&(T=eA(T,o)),P=tr(P,T))}return n.dirs&&(P=tr(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),v=P,Tl(R),v}const Zb=t=>{let e;for(const n in t)(n==="class"||n==="style"||dc(n))&&((e||(e={}))[n]=t[n]);return e},eA=(t,e)=>{const n={};for(const s in t)(!Bd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tA(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ym(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!vc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ym(s,o,c):!0:!!o;return!1}function ym(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!vc(n,r))return!0}return!1}function nA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sA=t=>t.__isSuspense;function iA(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Yb(t)}const Ua={};function si(t,e,n){return cv(t,e,n)}function cv(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Me){var a;const l=Gd()===((a=Ke)==null?void 0:a.scope)?Ke:null;let c,u=!1,h=!1;if($e(t)?(c=()=>t.value,u=El(t)):ws(t)?(c=()=>t,s=!0):X(t)?(h=!0,u=t.some(b=>ws(b)||El(b)),c=()=>t.map(b=>{if($e(b))return b.value;if(ws(b))return Fi(b);if(ie(b))return Is(b,l,2)})):ie(t)?e?c=()=>Is(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),dn(t,l,3,[f])}:c=hn,e&&s){const b=c;c=()=>Fi(b())}let d,f=b=>{d=R.onStop=()=>{Is(b,l,4)}},g;if(So)if(f=hn,e?n&&dn(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const b=JA();g=b.__watcherHandles||(b.__watcherHandles=[])}else return hn;let _=h?new Array(t.length).fill(Ua):Ua;const v=()=>{if(R.active)if(e){const b=R.run();(s||u||(h?b.some((B,G)=>wo(B,_[G])):wo(b,_)))&&(d&&d(),dn(e,l,3,[b,_===Ua?void 0:h&&_[0]===Ua?[]:_,f]),_=b)}else R.run()};v.allowRecurse=!!e;let T;i==="sync"?T=v:i==="post"?T=()=>Ot(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>rf(v));const R=new Yd(c,T);e?n?v():_=R.run():i==="post"?Ot(R.run.bind(R),l&&l.suspense):R.run();const P=()=>{R.stop(),l&&l.scope&&Hd(l.scope.effects,R)};return g&&g.push(P),P}function rA(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?uv(s,t):()=>s[t]:t.bind(s,s);let r;ie(e)?r=e:(r=e.handler,n=e);const o=Ke;nr(this);const a=cv(i,r.bind(s),n);return o?nr(o):ii(),a}function uv(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Fi(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))Fi(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Fi(t[n],e);else if(xy(t)||zi(t))t.forEach(n=>{Fi(n,e)});else if(My(t))for(const n in t)Fi(t[n],e);return t}function Hs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(wr(),dn(l,n,8,[t.el,a,t,e]),Ir())}}function Ei(t,e){return ie(t)?(()=>tt({name:t.name},e,{setup:t}))():t}const ro=t=>!!t.type.__asyncLoader,hv=t=>t.type.__isKeepAlive;function oA(t,e){dv(t,"a",e)}function aA(t,e){dv(t,"da",e)}function dv(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ic(e,s,n),n){let i=n.parent;for(;i&&i.parent;)hv(i.parent.vnode)&&lA(s,e,n,i),i=i.parent}}function lA(t,e,n,s){const i=Ic(e,t,s,!0);of(()=>{Hd(s[e],i)},n)}function Ic(t,e,n=Ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wr(),nr(n);const a=dn(e,n,t,o);return ii(),Ir(),a});return s?i.unshift(r):i.push(r),r}}const is=t=>(e,n=Ke)=>(!So||t==="sp")&&Ic(t,(...s)=>e(...s),n),cA=is("bm"),uA=is("m"),hA=is("bu"),dA=is("u"),fA=is("bum"),of=is("um"),fv=is("sp"),pA=is("rtg"),mA=is("rtc");function gA(t,e=Ke){Ic("ec",t,e)}const pv="components";function af(t,e){return yA(pv,t,!0,e)||t}const _A=Symbol.for("v-ndc");function yA(t,e,n=!0,s=!1){const i=lt||Ke;if(i){const r=i.type;if(t===pv){const a=QA(r,!1);if(a&&(a===e||a===Mn(e)||a===mc(Mn(e))))return r}const o=vm(i[t]||r[t],e)||vm(i.appContext[t],e);return!o&&s?r:o}}function vm(t,e){return t&&(t[e]||t[Mn(e)]||t[mc(Mn(e))])}function vA(t,e,n,s){let i;const r=n&&n[s];if(X(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Ba(t,e,n={},s,i){if(lt.isCE||lt.parent&&ro(lt.parent)&&lt.parent.isCE)return e!=="default"&&(n.name=e),et("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Be();const o=r&&mv(r(n)),a=ks(Zt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function mv(t){return t.some(e=>Il(e)?!(e.type===Ps||e.type===Zt&&!mv(e.children)):!0)?t:null}const vh=t=>t?Cv(t)?df(t)||t.proxy:vh(t.parent):null,oo=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vh(t.parent),$root:t=>vh(t.root),$emit:t=>t.emit,$options:t=>lf(t),$forceUpdate:t=>t.f||(t.f=()=>rf(t.update)),$nextTick:t=>t.n||(t.n=sf.bind(t.proxy)),$watch:t=>rA.bind(t)}),Au=(t,e)=>t!==Me&&!t.__isScriptSetup&&de(t,e),EA={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Au(s,e))return o[e]=1,s[e];if(i!==Me&&de(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,r[e];if(n!==Me&&de(n,e))return o[e]=4,n[e];Eh&&(o[e]=0)}}const u=oo[e];let h,d;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&de(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Au(i,e)?(i[e]=n,!0):s!==Me&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Me&&de(t,o)||Au(e,o)||(a=r[0])&&de(a,o)||de(s,o)||de(oo,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Em(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Eh=!0;function TA(t){const e=lf(t),n=t.proxy,s=t.ctx;Eh=!1,e.beforeCreate&&Tm(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:R,destroyed:P,unmounted:b,render:B,renderTracked:G,renderTriggered:he,errorCaptured:Q,serverPrefetch:ne,expose:Ie,inheritAttrs:ut,components:Ft,directives:Xt,filters:Bs}=e;if(c&&wA(c,s,null),o)for(const Se in o){const _e=o[Se];ie(_e)&&(s[Se]=_e.bind(n))}if(i){const Se=i.call(n,n);Ve(Se)&&(t.data=ta(Se))}if(Eh=!0,r)for(const Se in r){const _e=r[Se],jn=ie(_e)?_e.bind(n,n):ie(_e.get)?_e.get.bind(n,n):hn,as=!ie(_e)&&ie(_e.set)?_e.set.bind(n):hn,En=jt({get:jn,set:as});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>En.value,set:xt=>En.value=xt})}if(a)for(const Se in a)gv(a[Se],s,n,Se);if(l){const Se=ie(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(_e=>{rl(_e,Se[_e])})}u&&Tm(u,t,"c");function me(Se,_e){X(_e)?_e.forEach(jn=>Se(jn.bind(n))):_e&&Se(_e.bind(n))}if(me(cA,h),me(uA,d),me(hA,f),me(dA,g),me(oA,_),me(aA,v),me(gA,Q),me(mA,G),me(pA,he),me(fA,R),me(of,b),me(fv,ne),X(Ie))if(Ie.length){const Se=t.exposed||(t.exposed={});Ie.forEach(_e=>{Object.defineProperty(Se,_e,{get:()=>n[_e],set:jn=>n[_e]=jn})})}else t.exposed||(t.exposed={});B&&t.render===hn&&(t.render=B),ut!=null&&(t.inheritAttrs=ut),Ft&&(t.components=Ft),Xt&&(t.directives=Xt)}function wA(t,e,n=hn){X(t)&&(t=Th(t));for(const s in t){const i=t[s];let r;Ve(i)?"default"in i?r=Lt(i.from||s,i.default,!0):r=Lt(i.from||s):r=Lt(i),$e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Tm(t,e,n){dn(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gv(t,e,n,s){const i=s.includes(".")?uv(n,s):()=>n[s];if(Qe(t)){const r=e[t];ie(r)&&si(i,r)}else if(ie(t))si(i,t.bind(n));else if(Ve(t))if(X(t))t.forEach(r=>gv(r,e,n,s));else{const r=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(r)&&si(i,r,t)}}function lf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wl(l,c,o,!0)),wl(l,e,o)),Ve(e)&&r.set(e,l),l}function wl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wl(t,r,n,!0),i&&i.forEach(o=>wl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=IA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IA={data:wm,props:Im,emits:Im,methods:Xr,computed:Xr,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Xr,directives:Xr,watch:AA,provide:wm,inject:bA};function wm(t,e){return e?t?function(){return tt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function bA(t,e){return Xr(Th(t),Th(e))}function Th(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Xr(t,e){return t?tt(Object.create(null),t,e):e}function Im(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:tt(Object.create(null),Em(t),Em(e??{})):e}function AA(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=At(t[s],e[s]);return n}function _v(){return{app:null,config:{isNativeTag:Z0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function CA(t,e){return function(s,i=null){ie(s)||(s=tt({},s)),i!=null&&!Ve(i)&&(i=null);const r=_v(),o=new Set;let a=!1;const l=r.app={_uid:RA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ZA,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=et(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,df(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ro=l;try{return c()}finally{Ro=null}}};return l}}let Ro=null;function rl(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function Lt(t,e,n=!1){const s=Ke||lt;if(s||Ro){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ro._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ie(e)?e.call(s&&s.proxy):e}}function SA(){return!!(Ke||lt||Ro)}function PA(t,e,n,s=!1){const i={},r={};yl(r,Ac,1),t.propsDefaults=Object.create(null),yv(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Yy(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=pe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vc(t.emitsOptions,d))continue;const f=e[d];if(l)if(de(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Mn(d);i[g]=wh(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{yv(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Tr(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=wh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!de(e,h))&&(delete r[h],c=!0)}c&&Jn(t,"set","$attrs")}function yv(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(il(l))continue;const c=e[l];let u;i&&de(i,u=Mn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:vc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=pe(n),c=a||Me;for(let u=0;u<r.length;u++){const h=r[u];n[h]=wh(i,l,h,c[h],t,!de(c,h))}}return o}function wh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(nr(i),s=c[n]=l.call(null,e),ii())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Tr(n))&&(s=!0))}return s}function vv(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=h=>{l=!0;const[d,f]=vv(h,e,!0);tt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ve(t)&&s.set(t,ji),ji;if(X(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);bm(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=Mn(u);if(bm(h)){const d=r[u],f=o[h]=X(d)||ie(d)?{type:d}:tt({},d);if(f){const g=Cm(Boolean,f.type),_=Cm(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||de(f,"default"))&&a.push(h)}}}const c=[o,a];return Ve(t)&&s.set(t,c),c}function bm(t){return t[0]!=="$"}function Am(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Rm(t,e){return Am(t)===Am(e)}function Cm(t,e){return X(e)?e.findIndex(n=>Rm(n,t)):ie(e)&&Rm(e,t)?0:-1}const Ev=t=>t[0]==="_"||t==="$stable",cf=t=>X(t)?t.map(bn):[bn(t)],NA=(t,e,n)=>{if(e._n)return e;const s=rn((...i)=>cf(e(...i)),n);return s._c=!1,s},Tv=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ev(i))continue;const r=t[i];if(ie(r))e[i]=NA(i,r,s);else if(r!=null){const o=cf(r);e[i]=()=>o}}},wv=(t,e)=>{const n=cf(e);t.slots.default=()=>n},xA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),yl(e,"_",n)):Tv(e,t.slots={})}else t.slots={},e&&wv(t,e);yl(t.slots,Ac,1)},OA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(tt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Tv(e,i)),o=e}else e&&(wv(t,e),o={default:1});if(r)for(const a in i)!Ev(a)&&!(a in o)&&delete i[a]};function Ih(t,e,n,s,i=!1){if(X(t)){t.forEach((d,f)=>Ih(d,e&&(X(e)?e[f]:e),n,s,i));return}if(ro(s)&&!i)return;const r=s.shapeFlag&4?df(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Qe(c)?(u[c]=null,de(h,c)&&(h[c]=null)):$e(c)&&(c.value=null)),ie(l))Is(l,a,12,[o,u]);else{const d=Qe(l),f=$e(l);if(d||f){const g=()=>{if(t.f){const _=d?de(h,l)?h[l]:u[l]:l.value;i?X(_)&&Hd(_,r):X(_)?_.includes(r)||_.push(r):d?(u[l]=[r],de(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ot(g,n)):g()}}}const Ot=iA;function DA(t){return MA(t)}function MA(t,e){const n=ph();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=hn,insertStaticContent:g}=t,_=(p,m,y,E=null,I=null,C=null,L=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!$r(p,m)&&(E=w(p),xt(p,I,C,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:z,shapeFlag:$}=m;switch(S){case bc:v(p,m,y,E);break;case Ps:T(p,m,y,E);break;case Ru:p==null&&R(m,y,E,L);break;case Zt:Ft(p,m,y,E,I,C,L,N,x);break;default:$&1?B(p,m,y,E,I,C,L,N,x):$&6?Xt(p,m,y,E,I,C,L,N,x):($&64||$&128)&&S.process(p,m,y,E,I,C,L,N,x,O)}z!=null&&I&&Ih(z,p&&p.ref,C,m||p,!m)},v=(p,m,y,E)=>{if(p==null)s(m.el=a(m.children),y,E);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},T=(p,m,y,E)=>{p==null?s(m.el=l(m.children||""),y,E):m.el=p.el},R=(p,m,y,E)=>{[p.el,p.anchor]=g(p.children,m,y,E,p.el,p.anchor)},P=({el:p,anchor:m},y,E)=>{let I;for(;p&&p!==m;)I=d(p),s(p,y,E),p=I;s(m,y,E)},b=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=d(p),i(p),p=y;i(m)},B=(p,m,y,E,I,C,L,N,x)=>{L=L||m.type==="svg",p==null?G(m,y,E,I,C,L,N,x):ne(p,m,I,C,L,N,x)},G=(p,m,y,E,I,C,L,N)=>{let x,S;const{type:z,props:$,shapeFlag:W,transition:Z,dirs:re}=p;if(x=p.el=o(p.type,C,$&&$.is,$),W&8?u(x,p.children):W&16&&Q(p.children,x,null,E,I,C&&z!=="foreignObject",L,N),re&&Hs(p,null,E,"created"),he(x,p,p.scopeId,L,E),$){for(const be in $)be!=="value"&&!il(be)&&r(x,be,null,$[be],C,p.children,E,I,ht);"value"in $&&r(x,"value",null,$.value),(S=$.onVnodeBeforeMount)&&wn(S,E,p)}re&&Hs(p,null,E,"beforeMount");const Pe=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Pe&&Z.beforeEnter(x),s(x,m,y),((S=$&&$.onVnodeMounted)||Pe||re)&&Ot(()=>{S&&wn(S,E,p),Pe&&Z.enter(x),re&&Hs(p,null,E,"mounted")},I)},he=(p,m,y,E,I)=>{if(y&&f(p,y),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(I){let C=I.subTree;if(m===C){const L=I.vnode;he(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},Q=(p,m,y,E,I,C,L,N,x=0)=>{for(let S=x;S<p.length;S++){const z=p[S]=N?fs(p[S]):bn(p[S]);_(null,z,m,y,E,I,C,L,N)}},ne=(p,m,y,E,I,C,L)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:S,dirs:z}=m;x|=p.patchFlag&16;const $=p.props||Me,W=m.props||Me;let Z;y&&js(y,!1),(Z=W.onVnodeBeforeUpdate)&&wn(Z,y,m,p),z&&Hs(m,p,y,"beforeUpdate"),y&&js(y,!0);const re=I&&m.type!=="foreignObject";if(S?Ie(p.dynamicChildren,S,N,y,E,re,C):L||_e(p,m,N,null,y,E,re,C,!1),x>0){if(x&16)ut(N,m,$,W,y,E,I);else if(x&2&&$.class!==W.class&&r(N,"class",null,W.class,I),x&4&&r(N,"style",$.style,W.style,I),x&8){const Pe=m.dynamicProps;for(let be=0;be<Pe.length;be++){const He=Pe[be],sn=$[He],Pi=W[He];(Pi!==sn||He==="value")&&r(N,He,sn,Pi,I,p.children,y,E,ht)}}x&1&&p.children!==m.children&&u(N,m.children)}else!L&&S==null&&ut(N,m,$,W,y,E,I);((Z=W.onVnodeUpdated)||z)&&Ot(()=>{Z&&wn(Z,y,m,p),z&&Hs(m,p,y,"updated")},E)},Ie=(p,m,y,E,I,C,L)=>{for(let N=0;N<m.length;N++){const x=p[N],S=m[N],z=x.el&&(x.type===Zt||!$r(x,S)||x.shapeFlag&70)?h(x.el):y;_(x,S,z,null,E,I,C,L,!0)}},ut=(p,m,y,E,I,C,L)=>{if(y!==E){if(y!==Me)for(const N in y)!il(N)&&!(N in E)&&r(p,N,y[N],null,L,m.children,I,C,ht);for(const N in E){if(il(N))continue;const x=E[N],S=y[N];x!==S&&N!=="value"&&r(p,N,S,x,L,m.children,I,C,ht)}"value"in E&&r(p,"value",y.value,E.value)}},Ft=(p,m,y,E,I,C,L,N,x)=>{const S=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=m;Z&&(N=N?N.concat(Z):Z),p==null?(s(S,y,E),s(z,y,E),Q(m.children,y,z,I,C,L,N,x)):$>0&&$&64&&W&&p.dynamicChildren?(Ie(p.dynamicChildren,W,y,I,C,L,N),(m.key!=null||I&&m===I.subTree)&&Iv(p,m,!0)):_e(p,m,y,z,I,C,L,N,x)},Xt=(p,m,y,E,I,C,L,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,y,E,L,x):Bs(m,y,E,I,C,L,x):Jt(p,m,x)},Bs=(p,m,y,E,I,C,L)=>{const N=p.component=zA(p,E,I);if(hv(p)&&(N.ctx.renderer=O),WA(N),N.asyncDep){if(I&&I.registerDep(N,me),!p.el){const x=N.subTree=et(Ps);T(null,x,m,y)}return}me(N,p,m,y,I,C,L)},Jt=(p,m,y)=>{const E=m.component=p.component;if(tA(p,m,y))if(E.asyncDep&&!E.asyncResolved){Se(E,m,y);return}else E.next=m,Qb(E.update),E.update();else m.el=p.el,E.vnode=m},me=(p,m,y,E,I,C,L)=>{const N=()=>{if(p.isMounted){let{next:z,bu:$,u:W,parent:Z,vnode:re}=p,Pe=z,be;js(p,!1),z?(z.el=re.el,Se(p,z,L)):z=re,$&&Iu($),(be=z.props&&z.props.onVnodeBeforeUpdate)&&wn(be,Z,z,re),js(p,!0);const He=bu(p),sn=p.subTree;p.subTree=He,_(sn,He,h(sn.el),w(sn),p,I,C),z.el=He.el,Pe===null&&nA(p,He.el),W&&Ot(W,I),(be=z.props&&z.props.onVnodeUpdated)&&Ot(()=>wn(be,Z,z,re),I)}else{let z;const{el:$,props:W}=m,{bm:Z,m:re,parent:Pe}=p,be=ro(m);if(js(p,!1),Z&&Iu(Z),!be&&(z=W&&W.onVnodeBeforeMount)&&wn(z,Pe,m),js(p,!0),$&&ye){const He=()=>{p.subTree=bu(p),ye($,p.subTree,p,I,null)};be?m.type.__asyncLoader().then(()=>!p.isUnmounted&&He()):He()}else{const He=p.subTree=bu(p);_(null,He,y,E,p,I,C),m.el=He.el}if(re&&Ot(re,I),!be&&(z=W&&W.onVnodeMounted)){const He=m;Ot(()=>wn(z,Pe,He),I)}(m.shapeFlag&256||Pe&&ro(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Ot(p.a,I),p.isMounted=!0,m=y=E=null}},x=p.effect=new Yd(N,()=>rf(S),p.scope),S=p.update=()=>x.run();S.id=p.uid,js(p,!0),S()},Se=(p,m,y)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,kA(p,m.props,E,y),OA(p,m.children,y),wr(),_m(),Ir()},_e=(p,m,y,E,I,C,L,N,x=!1)=>{const S=p&&p.children,z=p?p.shapeFlag:0,$=m.children,{patchFlag:W,shapeFlag:Z}=m;if(W>0){if(W&128){as(S,$,y,E,I,C,L,N,x);return}else if(W&256){jn(S,$,y,E,I,C,L,N,x);return}}Z&8?(z&16&&ht(S,I,C),$!==S&&u(y,$)):z&16?Z&16?as(S,$,y,E,I,C,L,N,x):ht(S,I,C,!0):(z&8&&u(y,""),Z&16&&Q($,y,E,I,C,L,N,x))},jn=(p,m,y,E,I,C,L,N,x)=>{p=p||ji,m=m||ji;const S=p.length,z=m.length,$=Math.min(S,z);let W;for(W=0;W<$;W++){const Z=m[W]=x?fs(m[W]):bn(m[W]);_(p[W],Z,y,null,I,C,L,N,x)}S>z?ht(p,I,C,!0,!1,$):Q(m,y,E,I,C,L,N,x,$)},as=(p,m,y,E,I,C,L,N,x)=>{let S=0;const z=m.length;let $=p.length-1,W=z-1;for(;S<=$&&S<=W;){const Z=p[S],re=m[S]=x?fs(m[S]):bn(m[S]);if($r(Z,re))_(Z,re,y,null,I,C,L,N,x);else break;S++}for(;S<=$&&S<=W;){const Z=p[$],re=m[W]=x?fs(m[W]):bn(m[W]);if($r(Z,re))_(Z,re,y,null,I,C,L,N,x);else break;$--,W--}if(S>$){if(S<=W){const Z=W+1,re=Z<z?m[Z].el:E;for(;S<=W;)_(null,m[S]=x?fs(m[S]):bn(m[S]),y,re,I,C,L,N,x),S++}}else if(S>W)for(;S<=$;)xt(p[S],I,C,!0),S++;else{const Z=S,re=S,Pe=new Map;for(S=re;S<=W;S++){const $t=m[S]=x?fs(m[S]):bn(m[S]);$t.key!=null&&Pe.set($t.key,S)}let be,He=0;const sn=W-re+1;let Pi=!1,om=0;const Fr=new Array(sn);for(S=0;S<sn;S++)Fr[S]=0;for(S=Z;S<=$;S++){const $t=p[S];if(He>=sn){xt($t,I,C,!0);continue}let Tn;if($t.key!=null)Tn=Pe.get($t.key);else for(be=re;be<=W;be++)if(Fr[be-re]===0&&$r($t,m[be])){Tn=be;break}Tn===void 0?xt($t,I,C,!0):(Fr[Tn-re]=S+1,Tn>=om?om=Tn:Pi=!0,_($t,m[Tn],y,null,I,C,L,N,x),He++)}const am=Pi?LA(Fr):ji;for(be=am.length-1,S=sn-1;S>=0;S--){const $t=re+S,Tn=m[$t],lm=$t+1<z?m[$t+1].el:E;Fr[S]===0?_(null,Tn,y,lm,I,C,L,N,x):Pi&&(be<0||S!==am[be]?En(Tn,y,lm,2):be--)}}},En=(p,m,y,E,I=null)=>{const{el:C,type:L,transition:N,children:x,shapeFlag:S}=p;if(S&6){En(p.component.subTree,m,y,E);return}if(S&128){p.suspense.move(m,y,E);return}if(S&64){L.move(p,m,y,O);return}if(L===Zt){s(C,m,y);for(let $=0;$<x.length;$++)En(x[$],m,y,E);s(p.anchor,m,y);return}if(L===Ru){P(p,m,y);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),s(C,m,y),Ot(()=>N.enter(C),I);else{const{leave:$,delayLeave:W,afterLeave:Z}=N,re=()=>s(C,m,y),Pe=()=>{$(C,()=>{re(),Z&&Z()})};W?W(C,re,Pe):Pe()}else s(C,m,y)},xt=(p,m,y,E=!1,I=!1)=>{const{type:C,props:L,ref:N,children:x,dynamicChildren:S,shapeFlag:z,patchFlag:$,dirs:W}=p;if(N!=null&&Ih(N,null,y,p,!0),z&256){m.ctx.deactivate(p);return}const Z=z&1&&W,re=!ro(p);let Pe;if(re&&(Pe=L&&L.onVnodeBeforeUnmount)&&wn(Pe,m,p),z&6)Da(p.component,y,E);else{if(z&128){p.suspense.unmount(y,E);return}Z&&Hs(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,y,I,O,E):S&&(C!==Zt||$>0&&$&64)?ht(S,m,y,!1,!0):(C===Zt&&$&384||!I&&z&16)&&ht(x,m,y),E&&Ci(p)}(re&&(Pe=L&&L.onVnodeUnmounted)||Z)&&Ot(()=>{Pe&&wn(Pe,m,p),Z&&Hs(p,null,m,"unmounted")},y)},Ci=p=>{const{type:m,el:y,anchor:E,transition:I}=p;if(m===Zt){Si(y,E);return}if(m===Ru){b(p);return}const C=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,x=()=>L(y,C);N?N(p.el,C,x):x()}else C()},Si=(p,m)=>{let y;for(;p!==m;)y=d(p),i(p),p=y;i(m)},Da=(p,m,y)=>{const{bum:E,scope:I,update:C,subTree:L,um:N}=p;E&&Iu(E),I.stop(),C&&(C.active=!1,xt(L,p,m,y)),N&&Ot(N,m),Ot(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ht=(p,m,y,E=!1,I=!1,C=0)=>{for(let L=C;L<p.length;L++)xt(p[L],m,y,E,I)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,m,y)=>{p==null?m._vnode&&xt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),_m(),ov(),m._vnode=p},O={p:_,um:xt,m:En,r:Ci,mt:Bs,mc:Q,pc:_e,pbc:Ie,n:w,o:t};let H,ye;return e&&([H,ye]=e(O)),{render:V,hydrate:H,createApp:CA(V,H)}}function js({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Iv(t,e,n=!1){const s=t.children,i=e.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=fs(i[r]),a.el=o.el),n||Iv(o,a)),a.type===bc&&(a.el=o.el)}}function LA(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const VA=t=>t.__isTeleport,Zt=Symbol.for("v-fgt"),bc=Symbol.for("v-txt"),Ps=Symbol.for("v-cmt"),Ru=Symbol.for("v-stc"),ao=[];let ln=null;function Be(t=!1){ao.push(ln=t?null:[])}function FA(){ao.pop(),ln=ao[ao.length-1]||null}let Co=1;function Sm(t){Co+=t}function bv(t){return t.dynamicChildren=Co>0?ln||ji:null,FA(),Co>0&&ln&&ln.push(t),t}function Ut(t,e,n,s,i,r){return bv(Ae(t,e,n,s,i,r,!0))}function ks(t,e,n,s,i){return bv(et(t,e,n,s,i,!0))}function Il(t){return t?t.__v_isVNode===!0:!1}function $r(t,e){return t.type===e.type&&t.key===e.key}const Ac="__vInternal",Av=({key:t})=>t??null,ol=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||$e(t)||ie(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Ae(t,e=null,n=null,s=0,i=null,r=t===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Av(e),ref:e&&ol(e),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return a?(uf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),Co>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const et=$A;function $A(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_A)&&(t=Ps),Il(t)){const a=tr(t,e,!0);return n&&uf(a,n),Co>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag|=-2,a}if(YA(t)&&(t=t.__vccOpts),e){e=UA(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=qd(a)),Ve(l)&&(Jy(l)&&!X(l)&&(l=tt({},l)),e.style=Wd(l))}const o=Qe(t)?1:sA(t)?128:VA(t)?64:Ve(t)?4:ie(t)?2:0;return Ae(t,e,n,s,i,o,r,!0)}function UA(t){return t?Jy(t)||Ac in t?tt({},t):t:null}function tr(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?BA(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Av(a),ref:e&&e.ref?n&&i?X(i)?i.concat(ol(e)):[i,ol(e)]:ol(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qn(t=" ",e=0){return et(bc,null,t,e)}function In(t="",e=!1){return e?(Be(),ks(Ps,null,t)):et(Ps,null,t)}function bn(t){return t==null||typeof t=="boolean"?et(Ps):X(t)?et(Zt,null,t.slice()):typeof t=="object"?fs(t):et(bc,null,String(t))}function fs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function uf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),uf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ac in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[qn(e)]):n=8);t.children=e,t.shapeFlag|=n}function BA(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qd([e.class,s.class]));else if(i==="style")e.style=Wd([e.style,s.style]);else if(dc(i)){const r=e[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function wn(t,e,n,s=null){dn(t,e,7,[n,s])}const HA=_v();let jA=0;function zA(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||HA,r={uid:jA++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vv(s,i),emitsOptions:lv(s,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jb.bind(null,r),t.ce&&t.ce(r),r}let Ke=null;const Rv=()=>Ke||lt;let hf,ki,Pm="__VUE_INSTANCE_SETTERS__";(ki=ph()[Pm])||(ki=ph()[Pm]=[]),ki.push(t=>Ke=t),hf=t=>{ki.length>1?ki.forEach(e=>e(t)):ki[0](t)};const nr=t=>{hf(t),t.scope.on()},ii=()=>{Ke&&Ke.scope.off(),hf(null)};function Cv(t){return t.vnode.shapeFlag&4}let So=!1;function WA(t,e=!1){So=e;const{props:n,children:s}=t.vnode,i=Cv(t);PA(t,n,i,e),xA(t,s);const r=i?qA(t,e):void 0;return So=!1,r}function qA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_c(new Proxy(t.ctx,EA));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?GA(t):null;nr(t),wr();const r=Is(s,t,0,[t.props,i]);if(Ir(),ii(),Oy(r)){if(r.then(ii,ii),e)return r.then(o=>{km(t,o,e)}).catch(o=>{yc(o,t,0)});t.asyncDep=r}else km(t,r,e)}else Sv(t,e)}function km(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=sv(e)),Sv(t,n)}let Nm;function Sv(t,e,n){const s=t.type;if(!t.render){if(!e&&Nm&&!s.render){const i=s.template||lf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=tt(tt({isCustomElement:r,delimiters:a},o),l);s.render=Nm(i,c)}}t.render=s.render||hn}nr(t),wr(),TA(t),Ir(),ii()}function KA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function GA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return KA(t)},slots:t.slots,emit:t.emit,expose:e}}function df(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sv(_c(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}}))}function QA(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function YA(t){return ie(t)&&"__vccOpts"in t}const jt=(t,e)=>qb(t,e,So);function Pv(t,e,n){const s=arguments.length;return s===2?Ve(e)&&!X(e)?Il(e)?et(t,null,[e]):et(t,e):et(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Il(n)&&(n=[n]),et(t,e,n))}const XA=Symbol.for("v-scx"),JA=()=>Lt(XA),ZA="3.3.4",eR="http://www.w3.org/2000/svg",Qs=typeof document<"u"?document:null,xm=Qs&&Qs.createElement("template"),tR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qs.createElementNS(eR,t):Qs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qs.createTextNode(t),createComment:t=>Qs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{xm.innerHTML=s?`<svg>${t}</svg>`:t;const a=xm.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nR(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sR(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&bh(s,r,"");for(const r in n)bh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Om=/\s*!important$/;function bh(t,e,n){if(X(n))n.forEach(s=>bh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=iR(t,e);Om.test(n)?t.setProperty(Tr(s),n.replace(Om,""),"important"):t[s]=n}}const Dm=["Webkit","Moz","ms"],Cu={};function iR(t,e){const n=Cu[e];if(n)return n;let s=Mn(e);if(s!=="filter"&&s in t)return Cu[e]=s;s=mc(s);for(let i=0;i<Dm.length;i++){const r=Dm[i]+s;if(r in t)return Cu[e]=r}return e}const Mm="http://www.w3.org/1999/xlink";function rR(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mm,e.slice(6,e.length)):t.setAttributeNS(Mm,e,n);else{const r=hb(e);n==null||r&&!Ly(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oR(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ly(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function aR(t,e,n,s){t.addEventListener(e,n,s)}function lR(t,e,n,s){t.removeEventListener(e,n,s)}function cR(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=uR(e);if(s){const c=r[e]=fR(s,i);aR(t,a,c,l)}else o&&(lR(t,a,o,l),r[e]=void 0)}}const Lm=/(?:Once|Passive|Capture)$/;function uR(t){let e;if(Lm.test(t)){e={};let s;for(;s=t.match(Lm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let Su=0;const hR=Promise.resolve(),dR=()=>Su||(hR.then(()=>Su=0),Su=Date.now());function fR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dn(pR(s,n.value),e,5,[s])};return n.value=t,n.attached=dR(),n}function pR(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Vm=/^on[a-z]/,mR=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?nR(t,s,i):e==="style"?sR(t,n,s):dc(e)?Bd(e)||cR(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gR(t,e,s,i))?oR(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rR(t,e,s,i))};function gR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Vm.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vm.test(e)&&Qe(n)?!1:e in t}const _R=["ctrl","shift","alt","meta"],yR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_R.some(n=>t[`${n}Key`]&&!e.includes(n))},uU=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=yR[e[i]];if(r&&r(n,e))return}return t(n,...s)},vR=tt({patchProp:mR},tR);let Fm;function ER(){return Fm||(Fm=DA(vR))}const TR=(...t)=>{const e=ER().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=wR(s);if(!i)return;const r=e._component;!ie(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function wR(t){return Qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw br(e)},br=function(t){return new Error("Firebase Database ("+kv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new bR;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xv=function(t){const e=Nv(t);return Rc.encodeByteArray(e,!0)},bl=function(t){return xv(t).replace(/\./g,"")},Al=function(t){try{return Rc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){return Ov(void 0,t)}function Ov(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RR(n)||(t[n]=Ov(t[n],e[n]));return t}function RR(t){return t!=="__proto__"}/**
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
 */function CR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SR=()=>CR().__FIREBASE_DEFAULTS__,PR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Al(t[1]);return e&&JSON.parse(e)},ff=()=>{try{return SR()||PR()||kR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=ff())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NR=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mv=()=>{var t;return(t=ff())===null||t===void 0?void 0:t.config},Lv=t=>{var e;return(e=ff())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function xR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bl(JSON.stringify(n)),bl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function OR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fv(){return kv.NODE_ADMIN===!0}function $v(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LR,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?VR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,s)}}function VR(t,e){return t.replace(FR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const FR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ko(Al(r[0])||""),n=ko(Al(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$R=function(t){const e=Uv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UR=function(t){const e=Uv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($m(r)&&$m(o)){if(!Cl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function HR(t,e){const n=new jR(t,e);return n.subscribe.bind(n)}class jR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}function WR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ws="[DEFAULT]";/**
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
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Po;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(t){return t===Ws?void 0:t}function QR(t){return t.instantiationMode==="EAGER"}/**
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
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const XR={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},JR=fe.INFO,ZR={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},eC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ZR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class na{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=eC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const tC=(t,e)=>e.some(n=>t instanceof n);let Um,Bm;function nC(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sC(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bv=new WeakMap,Rh=new WeakMap,Hv=new WeakMap,ku=new WeakMap,mf=new WeakMap;function iC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bv.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function rC(t){if(Rh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oC(t){Ch=t(Ch)}function aC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nu(this),e,...n);return Hv.set(s,e.sort?e.sort():[e]),bs(s)}:sC().includes(t)?function(...e){return t.apply(Nu(this),e),bs(Bv.get(this))}:function(...e){return bs(t.apply(Nu(this),e))}}function lC(t){return typeof t=="function"?aC(t):(t instanceof IDBTransaction&&rC(t),tC(t,nC())?new Proxy(t,Ch):t)}function bs(t){if(t instanceof IDBRequest)return iC(t);if(ku.has(t))return ku.get(t);const e=lC(t);return e!==t&&(ku.set(t,e),mf.set(e,t)),e}const Nu=t=>mf.get(t);function cC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=bs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(bs(o.result),l.oldVersion,l.newVersion,bs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uC=["get","getKey","getAll","getAllKeys","count"],hC=["put","add","delete","clear"],xu=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xu.set(e,r),r}oC(t=>({...t,get:(e,n,s)=>Hm(e,n)||t.get(e,n,s),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
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
 */class dC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",jm="0.9.15";/**
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
 */const li=new na("@firebase/app"),pC="@firebase/app-compat",mC="@firebase/analytics-compat",gC="@firebase/analytics",_C="@firebase/app-check-compat",yC="@firebase/app-check",vC="@firebase/auth",EC="@firebase/auth-compat",TC="@firebase/database",wC="@firebase/database-compat",IC="@firebase/functions",bC="@firebase/functions-compat",AC="@firebase/installations",RC="@firebase/installations-compat",CC="@firebase/messaging",SC="@firebase/messaging-compat",PC="@firebase/performance",kC="@firebase/performance-compat",NC="@firebase/remote-config",xC="@firebase/remote-config-compat",OC="@firebase/storage",DC="@firebase/storage-compat",MC="@firebase/firestore",LC="@firebase/firestore-compat",VC="firebase",FC="10.1.0";/**
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
 */const Ph="[DEFAULT]",$C={[Sh]:"fire-core",[pC]:"fire-core-compat",[gC]:"fire-analytics",[mC]:"fire-analytics-compat",[yC]:"fire-app-check",[_C]:"fire-app-check-compat",[vC]:"fire-auth",[EC]:"fire-auth-compat",[TC]:"fire-rtdb",[wC]:"fire-rtdb-compat",[IC]:"fire-fn",[bC]:"fire-fn-compat",[AC]:"fire-iid",[RC]:"fire-iid-compat",[CC]:"fire-fcm",[SC]:"fire-fcm-compat",[PC]:"fire-perf",[kC]:"fire-perf-compat",[NC]:"fire-rc",[xC]:"fire-rc-compat",[OC]:"fire-gcs",[DC]:"fire-gcs-compat",[MC]:"fire-fst",[LC]:"fire-fst-compat","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const Sl=new Map,kh=new Map;function UC(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(kh.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of Sl.values())UC(n,t);return!0}function gf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const BC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},As=new Ar("app","Firebase",BC);/**
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
 */class HC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=FC;function jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw As.create("bad-app-name",{appName:String(i)});if(n||(n=Mv()),!n)throw As.create("no-options");const r=Sl.get(i);if(r){if(Cl(n,r.options)&&Cl(s,r.config))return r;throw As.create("duplicate-app",{appName:i})}const o=new YR(i);for(const l of kh.values())o.addComponent(l);const a=new HC(n,s,o);return Sl.set(i,a),a}function _f(t=Ph){const e=Sl.get(t);if(!e&&t===Ph&&Mv())return jv();if(!e)throw As.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=(s=$C[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}Ln(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jC="firebase-heartbeat-database",zC=1,No="firebase-heartbeat-store";let Ou=null;function zv(){return Ou||(Ou=cC(jC,zC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(No)}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),Ou}async function WC(t){try{return await(await zv()).transaction(No).objectStore(No).get(Wv(t))}catch(e){if(e instanceof Bn)li.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function zm(t,e){try{const s=(await zv()).transaction(No,"readwrite");await s.objectStore(No).put(e,Wv(t)),await s.done}catch(n){if(n instanceof Bn)li.warn(n.message);else{const s=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(s.message)}}}function Wv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qC=1024,KC=30*24*60*60*1e3;class GC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=KC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wm(),{heartbeatsToSend:n,unsentEntries:s}=QC(this._heartbeatsCache.heartbeats),i=bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wm(){return new Date().toISOString().substring(0,10)}function QC(t,e=qC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $v()?MR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qm(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XC(t){Ln(new pn("platform-logger",e=>new dC(e),"PRIVATE")),Ln(new pn("heartbeat",e=>new GC(e),"PRIVATE")),Wt(Sh,jm,t),Wt(Sh,jm,"esm2017"),Wt("fire-js","")}XC("");function yf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function qv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC=qv,Kv=new Ar("auth","Firebase",qv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new na("@firebase/auth");function ZC(t,...e){Pl.logLevel<=fe.WARN&&Pl.warn(`Auth (${Ls}): ${t}`,...e)}function al(t,...e){Pl.logLevel<=fe.ERROR&&Pl.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw vf(t,...e)}function xn(t,...e){return vf(t,...e)}function Gv(t,e,n){const s=Object.assign(Object.assign({},JC()),{[e]:n});return new Ar("auth","Firebase",s).create(e,{appName:t.name})}function eS(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Vn(t,"argument-error"),Gv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Kv.create(t,...e)}function ee(t,e,...n){if(!t)throw vf(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Zn(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tS(){return Km()==="http:"||Km()==="https:"}function Km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||OR()||"connection"in navigator)?navigator.onLine:!0}function sS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=pf()||Vv()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new sa(3e4,6e4);function Yv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ia(t,e,n,s,i={}){return Xv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Rr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qv.fetch()(Jv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Xv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},iS),e);try{const i=new aS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gv(t,u,c);Vn(t,u)}}catch(i){if(i instanceof Bn)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function oS(t,e,n,s,i={}){const r=await ia(t,e,n,s,i);return"mfaPendingCredential"in r&&Vn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Jv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ef(t.config,i):`${t.config.apiScheme}://${i}`}class aS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),rS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e){return ia(t,"POST","/v1/accounts:delete",e)}async function cS(t,e){return ia(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uS(t,e=!1){const n=nt(t),s=await n.getIdToken(e),i=Tf(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:lo(Du(i.auth_time)),issuedAtTime:lo(Du(i.iat)),expirationTime:lo(Du(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function Tf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=Al(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hS(t){const e=Tf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&dS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await xo(t,cS(n,{idToken:s}));ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gS(r.providerUserInfo):[],a=mS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Zv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pS(t){const e=nt(t);await kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gS(t){return t.map(e=>{var{providerId:n}=e,s=yf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e){const n=await Xv(t,{},async()=>{const s=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Jv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await _S(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Oo;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uS(this,e)}reload(){return pS(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await kl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xo(this,lS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:b,isAnonymous:B,providerData:G,stsTokenManager:he}=n;ee(P&&he,e,"internal-error");const Q=Oo.fromJSON(this.name,he);ee(typeof P=="string",e,"internal-error"),us(h,e.name),us(d,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof B=="boolean",e,"internal-error"),us(f,e.name),us(g,e.name),us(_,e.name),us(v,e.name),us(T,e.name),us(R,e.name);const ne=new ri({uid:P,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:B,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:Q,createdAt:T,lastLoginAt:R});return G&&Array.isArray(G)&&(ne.providerData=G.map(Ie=>Object.assign({},Ie))),v&&(ne._redirectEventId=v),ne}static async _fromIdTokenResponse(e,n,s=!1){const i=new Oo;i.updateFromServerResponse(n);const r=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await kl(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function Gn(t){Zn(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
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
 */class eE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eE.type="NONE";const Qm=eE;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,r),this.fullPersistenceKey=ll("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qi(Gn(Qm),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Gn(Qm);const o=ll(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ri._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new qi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rE(e))return"Blackberry";if(oE(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||nE(e))&&!e.includes("edge/"))return"Chrome";if(iE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tE(t=It()){return/firefox\//i.test(t)}function wf(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nE(t=It()){return/crios\//i.test(t)}function sE(t=It()){return/iemobile/i.test(t)}function iE(t=It()){return/android/i.test(t)}function rE(t=It()){return/blackberry/i.test(t)}function oE(t=It()){return/webos/i.test(t)}function Sc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yS(t=It()){var e;return Sc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vS(){return DR()&&document.documentMode===10}function aE(t=It()){return Sc(t)||iE(t)||oE(t)||rE(t)||/windows phone/i.test(t)||sE(t)}function ES(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e=[]){let n;switch(t){case"Browser":n=Ym(It());break;case"Worker":n=`${Ym(It())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${s}`}async function cE(t,e){return ia(t,"GET","/v2/recaptchaConfig",Yv(t,e))}function Xm(t){return t!==void 0&&t.enterprise!==void 0}class uE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",TS().appendChild(s)})}function wS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const IS="https://www.google.com/recaptcha/enterprise.js?render=",bS="recaptcha-enterprise",AS="NO_RECAPTCHA";class RS{constructor(e){this.type=bS,this.auth=Cr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{cE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Xm(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(AS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Xm(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hE(IS+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}async initializeRecaptchaConfig(){const e=await cE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new RS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cr(t){return nt(t)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=HR(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e){const n=gf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Cl(r,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function kS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function NS(t,e,n){const s=Cr(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=dE(e),{host:o,port:a}=xS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OS()}function dE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xS(t){const e=dE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zm(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zm(o)}}}function Zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e){return oS(t,"POST","/v1/accounts:signInWithIdp",Yv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="http://localhost";class ci extends fE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=yf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ci(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ki(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ki(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ki(e,n)}buildRequest(){const e={requestUri:DS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ra extends If{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends ra{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";ms.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gs.credential(n,s)}catch{return null}}}gs.GOOGLE_SIGN_IN_METHOD="google.com";gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends ra{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends ra{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ys.credential(n,s)}catch{return null}}}ys.TWITTER_SIGN_IN_METHOD="twitter.com";ys.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ri._fromIdTokenResponse(e,s,i),o=eg(s);return new ir({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=eg(s);return new ir({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Bn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Nl(e,n,s,i)}}function pE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,r,e,s):r})}async function MS(t,e,n=!1){const s=await xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ir._forOperation(t,"link",s)}/**
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
 */async function LS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await xo(t,pE(s,i,e,t),n);ee(r.idToken,s,"internal-error");const o=Tf(r.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),ir._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Vn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e,n=!1){const s="signIn",i=await pE(t,s,e),r=await ir._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function mE(t,e,n,s){return nt(t).onIdTokenChanged(e,n,s)}function FS(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}const xl="__sak";/**
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
 */class gE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){const t=It();return wf(t)||Sc(t)}const US=1e3,BS=10;class _E extends gE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$S()&&ES(),this.fallbackToPolling=aE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);vS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_E.type="LOCAL";const HS=_E;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends gE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yE.type="SESSION";const vE=yE;/**
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
 */function jS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await jS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=bf("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function WS(t){On().location.href=t}/**
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
 */function EE(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function qS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GS(){return EE()?self:null}/**
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
 */const TE="firebaseLocalStorageDb",QS=1,Ol="firebaseLocalStorage",wE="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function YS(){const t=indexedDB.deleteDatabase(TE);return new oa(t).toPromise()}function xh(){const t=indexedDB.open(TE,QS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ol,{keyPath:wE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ol)?e(s):(s.close(),await YS(),e(await xh()))})})}async function tg(t,e,n){const s=kc(t,!0).put({[wE]:e,value:n});return new oa(s).toPromise()}async function XS(t,e){const n=kc(t,!1).get(e),s=await new oa(n).toPromise();return s===void 0?null:s.value}function ng(t,e){const n=kc(t,!0).delete(e);return new oa(n).toPromise()}const JS=800,ZS=3;class IE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ZS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return EE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(GS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qS(),!this.activeServiceWorker)return;this.sender=new zS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await tg(e,xl,"1"),await ng(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>XS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=kc(i,!1).getAll();return new oa(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IE.type="LOCAL";const eP=IE;new sa(3e4,6e4);/**
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
 */function bE(t,e){return e?Gn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Af extends fE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tP(t){return VS(t.auth,new Af(t),t.bypassAuthState)}function nP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),LS(n,new Af(t),t.bypassAuthState)}async function sP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),MS(n,new Af(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tP;case"linkViaPopup":case"linkViaRedirect":return sP;case"reauthViaPopup":case"reauthViaRedirect":return nP;default:Vn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=new sa(2e3,1e4);async function hU(t,e,n){const s=Cr(t);eS(t,e,If);const i=bE(s,n);return new Ys(s,"signInViaPopup",e,i).executeNotNull()}class Ys extends AE{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iP.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="pendingRedirect",cl=new Map;class oP extends AE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const s=await aP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aP(t,e){const n=uP(e),s=cP(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function lP(t,e){cl.set(t._key(),e)}function cP(t){return Gn(t._redirectPersistence)}function uP(t){return ll(rP,t.config.apiKey,t.name)}async function dU(t,e){return await Cr(t)._initializationPromise,RE(t,e,!1)}async function RE(t,e,n=!1){const s=Cr(t),i=bE(s,e),o=await new oP(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=10*60*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!CE(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return ia(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function _P(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(yP(n))return}catch{}Vn(t,"unauthorized-domain")}function yP(t){const e=Nh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gP.test(n))return!1;if(mP.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const vP=new sa(3e4,6e4);function ig(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EP(t){return new Promise((e,n)=>{var s,i,r;function o(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),n(xn(t,"network-request-failed"))},timeout:vP.get()})}if(!((i=(s=On().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=On().gapi)===null||r===void 0)&&r.load)o();else{const a=wS("iframefcb");return On()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},hE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ul=null,e})}let ul=null;function TP(t){return ul=ul||EP(t),ul}/**
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
 */const wP=new sa(5e3,15e3),IP="__/auth/iframe",bP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,bP):`https://${t.config.authDomain}/${IP}`,s={apiKey:e.apiKey,appName:t.name,v:Ls},i=RP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Rr(s).slice(1)}`}async function SP(t){const e=await TP(t),n=On().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:CP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=On().setTimeout(()=>{r(o)},wP.get());function l(){On().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const PP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kP=500,NP=600,xP="_blank",OP="http://localhost";class rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DP(t,e,n,s=kP,i=NP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PP),{width:s.toString(),height:i.toString(),top:r,left:o}),c=It().toLowerCase();n&&(a=nE(c)?xP:n),tE(c)&&(e=e||OP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(yS(c)&&a!=="_self")return MP(e||"",a),new rg(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new rg(h)}function MP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const LP="__/auth/handler",VP="emulator/auth/handler",FP=encodeURIComponent("fac");async function og(t,e,n,s,i,r){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ls,eventId:i};if(e instanceof If){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ra){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${FP}=${encodeURIComponent(l)}`:"";return`${$P(t)}?${Rr(a).slice(1)}${c}`}function $P({config:t}){return t.emulator?Ef(t,VP):`https://${t.authDomain}/${LP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="webStorageSupport";class UP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vE,this._completeRedirectFn=RE,this._overrideRedirectResult=lP}async _openPopup(e,n,s,i){var r;Zn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await og(e,n,s,Nh(),i);return DP(e,o,bf())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await og(e,n,s,Nh(),i);return WS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await SP(e),s=new dP(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mu,{type:Mu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Mu];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_P(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aE()||wf()||Sc()}}const BP=UP;var ag="@firebase/auth",lg="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zP(t){Ln(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lE(t)},c=new SS(s,i,r,l);return kS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new pn("auth-internal",e=>{const n=Cr(e.getProvider("auth").getImmediate());return(s=>new HP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(ag,lg,jP(t)),Wt(ag,lg,"esm2017")}/**
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
 */const WP=5*60,qP=Lv("authIdTokenMaxAge")||WP;let cg=null;const KP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qP)return;const i=n==null?void 0:n.token;cg!==i&&(cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SE(t=_f()){const e=gf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PS(t,{popupRedirectResolver:BP,persistence:[eP,HS,vE]}),s=Lv("authTokenSyncURL");if(s){const r=KP(s);FS(n,r,()=>r(n.currentUser)),mE(n,o=>r(o))}const i=Dv("auth");return i&&NS(n,`http://${i}`),n}zP("Browser");var GP=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new Map,YP={activated:!1,tokenObservers:[]};function mn(t){return QP.get(t)||Object.assign({},YP)}const ug={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Po,await JP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Po,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function JP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Dl=new Ar("appCheck","AppCheck",ZP);function PE(t){if(!mn(t).activated)throw Dl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="firebase-app-check-database",tk=1,Oh="firebase-app-check-store";let ja=null;function nk(){return ja||(ja=new Promise((t,e)=>{try{const n=indexedDB.open(ek,tk);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Dl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Oh,{keyPath:"compositeKey"})}}}catch(n){e(Dl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ja)}function sk(t,e){return ik(rk(t),e)}async function ik(t,e){const s=(await nk()).transaction(Oh,"readwrite"),r=s.objectStore(Oh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Dl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function rk(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new na("@firebase/app-check");function hg(t,e){return $v()?sk(t,e).catch(n=>{Dh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={error:"UNKNOWN_ERROR"};function ak(t){return Rc.encodeString(JSON.stringify(t),!1)}async function Mh(t,e=!1){const n=t.app;PE(n);const s=mn(n);let i=s.token,r;if(i&&!Jr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Jr(l)?i=l:await hg(n,void 0))}if(!e&&i&&Jr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await mn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Dh.warn(l.message):Dh.error(l),r=l}let a;return i?r?Jr(i)?a={token:i.token,internalError:r}:a=fg(r):(a={token:i.token},s.token=i,await hg(n,i)):a=fg(r),o&&hk(n,a),a}async function lk(t){const e=t.app;PE(e);const{provider:n}=mn(e);{const{token:s}=await n.getToken();return{token:s}}}function ck(t,e,n,s){const{app:i}=t,r=mn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Jr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),dg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>dg(t))}function kE(t,e){const n=mn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function dg(t){const{app:e}=t,n=mn(e);let s=n.tokenRefresher;s||(s=uk(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function uk(t){const{app:e}=t;return new XP(async()=>{const n=mn(e);let s;if(n.token?s=await Mh(t,!0):s=await Mh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=mn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},ug.RETRIAL_MIN_WAIT,ug.RETRIAL_MAX_WAIT)}function hk(t,e){const n=mn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Jr(t){return t.expireTimeMillis-Date.now()>0}function fg(t){return{token:ak(ok),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=mn(this.app);for(const n of e)kE(this.app,n.next);return Promise.resolve()}}function fk(t,e){return new dk(t,e)}function pk(t){return{getToken:e=>Mh(t,e),getLimitedUseToken:()=>lk(t),addTokenListener:e=>ck(t,"INTERNAL",e),removeTokenListener:e=>kE(t.app,e)}}const mk="@firebase/app-check",gk="0.8.0",_k="app-check",pg="app-check-internal";function yk(){Ln(new pn(_k,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return fk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(pg).initialize()})),Ln(new pn(pg,t=>{const e=t.getProvider("app-check").getImmediate();return pk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(mk,gk)}yk();var vk="firebase",Ek="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(vk,Ek,"app");const NE=Symbol("firebaseApp");function aa(t){return Rv()&&Lt(NE,null)||_f(t)}const Cn=()=>{},Tk=typeof window<"u";function Rf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function wk(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ti(t){return!!t&&typeof t=="object"}const Ik=Object.prototype;function bk(t){return Ti(t)&&Object.getPrototypeOf(t)===Ik}function Cf(t){return Ti(t)&&t.type==="document"}function Ak(t){return Ti(t)&&t.type==="collection"}function Rk(t){return Cf(t)||Ak(t)}function Ck(t){return Ti(t)&&t.type==="query"}function Sk(t){return Ti(t)&&"ref"in t}function Pk(t){return Ti(t)&&typeof t.bucket=="string"}function kk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Nk=Symbol.for("v-scx");function xk(){return!!Lt(Nk,0)}const za=new WeakMap;function Ok(t,e){if(!za.has(t)){const n=Kd(!0);za.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),za.delete(t)}}return za.get(t)}const xE=new WeakMap;function Nc(t){return xE.get(aa(t))}const Wa=new WeakMap;function OE(t){const e=aa(t);if(!Wa.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{Wa.set(e,r),n(r.value)}];Wa.set(e,i)}return Wa.get(e)}function mg(t){const e=OE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Dk(t,e){const n=SE(e);mE(n,s=>{const i=OE();t.value=s,Array.isArray(i)&&i[1](t)})}const gg="@firebase/database",_g="1.0.1";/**
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
 */let DE="";function Mk(t){DE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ko(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Lk(e)}}catch{}return new Vk},Xs=ME("localStorage"),Lh=ME("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new na("@firebase/database"),Fk=function(){let t=1;return function(){return t++}}(),LE=function(t){const e=qR(t),n=new BR;n.update(e);const s=n.digest();return Rc.encodeByteArray(s)},la=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=la.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let oi=null,yg=!0;const $k=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Gi.logLevel=fe.VERBOSE,oi=Gi.log.bind(Gi),e&&Lh.set("logging_enabled",!0)):typeof t=="function"?oi=t:(oi=null,Lh.remove("logging_enabled"))},pt=function(...t){if(yg===!0&&(yg=!1,oi===null&&Lh.get("logging_enabled")===!0&&$k(!0)),oi){const e=la.apply(null,t);oi(e)}},ca=function(t){return function(...e){pt(t,...e)}},Vh=function(...t){const e="FIREBASE INTERNAL ERROR: "+la(...t);Gi.error(e)},ui=function(...t){const e=`FIREBASE FATAL ERROR: ${la(...t)}`;throw Gi.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+la(...t);Gi.warn(e)},Uk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},VE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rr="[MIN_NAME]",hi="[MAX_NAME]",Sr=function(t,e){if(t===e)return 0;if(t===rr||e===hi)return-1;if(e===rr||t===hi)return 1;{const n=vg(t),s=vg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hk=function(t,e){return t===e?0:t<e?-1:1},Ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},Sf=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=at(e[s]),n+=":",n+=Sf(t[e[s]]);return n+="}",n},FE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $E=function(t){D(!VE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},jk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Wk=new RegExp("^-?(0*)\\d{1,10}$"),qk=-2147483648,Kk=2147483647,vg=function(t){if(Wk.test(t)){const e=Number(t);if(e>=qk&&e<=Kk)return e}return null},ua=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},co=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Qk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class Fh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="5",UE="v",BE="s",HE="r",jE="f",zE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WE="ls",qE="p",$h="ac",KE="websocket",GE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function QE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===KE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===GE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jk(t)&&(n.ns=t.namespace);const i=[];return nn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.counters_={}}incrementCounter(e,n=1){rs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={},Vu={};function kf(t){const e=t.toString();return Lu[e]||(Lu[e]=new Zk),Lu[e]}function eN(t,e){const n=t.toString();return Vu[n]||(Vu[n]=e()),Vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ua(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="start",nN="close",sN="pLPCommand",iN="pRTLPCB",YE="id",XE="pw",JE="ser",rN="cb",oN="seg",aN="ts",lN="d",cN="dframe",ZE=1870,eT=30,uN=ZE-eT,hN=25e3,dN=3e4;class $i{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ca(e),this.stats_=kf(n),this.urlFn=l=>(this.appCheckToken&&(l[$h]=this.appCheckToken),QE(n,GE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dN)),Bk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Eg)this.id=a,this.password=l;else if(o===nN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Eg]="t",s[JE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[UE]=Pf,this.transportSessionId&&(s[BE]=this.transportSessionId),this.lastSessionId&&(s[WE]=this.lastSessionId),this.applicationId&&(s[qE]=this.applicationId),this.appCheckToken&&(s[$h]=this.appCheckToken),typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(s[HE]=jE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jk()&&!zk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xv(n),i=FE(s,uN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[cN]="t",s[YE]=e,s[XE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fk(),window[sN+this.uniqueCallbackIdentifier]=e,window[iN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[YE]=this.myID,e[XE]=this.myPW,e[JE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eT+s.length<=ZE;){const o=this.pendingSegs.shift();s=s+"&"+oN+i+"="+o.seg+"&"+aN+i+"="+o.ts+"&"+lN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(hN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=16384,pN=45e3;let Ml=null;typeof MozWebSocket<"u"?Ml=MozWebSocket:typeof WebSocket<"u"&&(Ml=WebSocket);class an{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ca(this.connId),this.stats_=kf(n),this.connURL=an.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[UE]=Pf,typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(o[HE]=jE),n&&(o[BE]=n),s&&(o[WE]=s),i&&(o[$h]=i),r&&(o[qE]=r),QE(e,KE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xs.set("previous_websocket_failure",!0);try{let s;Fv(),this.mySock=new Ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ml!==null&&!an.forceDisallow_}static previouslyFailed(){return Xs.isInMemoryStorage||Xs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ko(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=FE(n,fN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$i,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=an&&an.isAvailable();let s=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[an];else{const i=this.transports_=[];for(const r of Do.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Do.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Do.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=6e4,gN=5e3,_N=10*1024,yN=100*1024,Fu="t",Tg="d",vN="s",wg="r",EN="e",Ig="o",bg="a",Ag="n",Rg="p",TN="h";class wN{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ca("c:"+this.id+":"),this.transportManager_=new Do(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_N?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fu in e){const n=e[Fu];n===bg?this.upgradeIfSecondaryHealthy_():n===wg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ig&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ur("t",e),s=Ur("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ag,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ur("t",e),s=Ur("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ur(Fu,e);if(Tg in e){const s=e[Tg];if(n===TN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ag){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vN?this.onConnectionShutdown_(s):n===wg?this.onReset_(s):n===EN?Vh("Server Error: "+s):n===Ig?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pf!==s&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends nT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ll}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=32,Sg=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new De("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ns(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function sT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function iT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function Ze(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof De)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new De(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function tn(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return tn(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oT(t,e){if(Ns(t)!==Ns(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function cn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ns(t)>Ns(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class bN{constructor(e,n){this.errorPrefix_=n,this.parts_=iT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Cc(this.parts_[s]);aT(this)}}function AN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cc(e),aT(t)}function RN(t){const e=t.parts_.pop();t.byteLength_-=Cc(e),t.parts_.length>0&&(t.byteLength_-=1)}function aT(t){if(t.byteLength_>Sg)throw new Error(t.errorPrefix_+"has a key path longer than "+Sg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cg+") or object contains a cycle "+qs(t))}function qs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends nT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xf}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=1e3,CN=60*5*1e3,Pg=30*1e3,SN=1.3,PN=3e4,kN="server_kill",kg=3;class Xn extends tT{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=ca("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Br,this.maxReconnectDelay_=CN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(at(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Po,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rs(e,"w")){const s=sr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$R(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vh("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PN&&(this.reconnectDelay_=Br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new wN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(kN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ah(this.interruptReasons_)&&(this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Sf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new De(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kg&&(this.reconnectDelay_=Pg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+DE.replace(/\./g,"-")]=1,pf()?e["framework.cordova"]=1:Vv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ll.getInstance().currentlyOnline();return Ah(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(rr,e),i=new ue(rr,n);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class lT extends xc{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,n){return Sr(e.name,n.name)}isDefinedOn(e){throw br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(hi,qa)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,qa)}toString(){return".key"}}const Qi=new lT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ht=class Zr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Zr.RED,this.left=i??Sn.EMPTY_NODE,this.right=r??Sn.EMPTY_NODE}copy(e,n,s,i,r){return new Zr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Sn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ht.RED=!0;Ht.BLACK=!1;class NN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Sn=class hl{constructor(e,n=hl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new hl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ka(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ka(this.root_,null,this.comparator_,!0,e)}};Sn.EMPTY_NODE=new NN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t,e){return Sr(t.name,e.name)}function Of(t,e){return Sr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;function ON(t){Uh=t}const cT=function(t){return typeof t=="number"?"number:"+$E(t):"string:"+t},uT=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rs(e,".sv"),"Priority must be a string or number.")}else D(t===Uh||t.isEmpty(),"priority of unexpected type.");D(t===Uh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ng;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uT(this.priorityNode_)}static set __childrenNodeConstructor(e){Ng=e}static get __childrenNodeConstructor(){return Ng}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ce(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$E(this.value_):e+=this.value_,this.lazyHash_=LE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),r=Ye.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hT,dT;function DN(t){hT=t}function MN(t){dT=t}class LN extends xc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Sr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(hi,new Ye("[PRIORITY-POST]",dT))}makePost(e,n){const s=hT(e);return new ue(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const yt=new LN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=Math.log(2);class FN{constructor(e){const n=r=>parseInt(Math.log(r)/VN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),_=i(f+1,c);return h=t[f],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,g,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,_){const v=h-g,T=h;h-=g;const R=i(v+1,T),P=t[v],b=n?n(P):P;f(new Ht(b,P.node,_,null,R))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));_?d(v,Ht.BLACK):(d(v,Ht.BLACK),d(v,Ht.RED))}return u},o=new FN(t.length),a=r(o);return new Sn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;const Ni={};class Qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Ni&&yt,"ChildrenNode.ts has not been loaded"),$u=$u||new Qn({".priority":Ni},{".priority":yt}),$u}get(e){const n=sr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Sn?n:null}hasIndex(e){return rs(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Vl(s,e.getCompare()):a=Ni;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Qn(u,c)}addToIndexes(e,n){const s=Rl(this.indexes_,(i,r)=>{const o=sr(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===Ni)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ue.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vl(a,o.getCompare())}else return Ni;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ue(e.name,a))),l.insert(e,e.node)}});return new Qn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Rl(this.indexes_,i=>{if(i===Ni)return i;{const r=n.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new Qn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class ve{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uT(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hr||(Hr=new ve(new Sn(Of),null,Qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hr}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hr:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hr:this.priorityNode_;return new ve(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{D(ce(e)!==".priority"||Ns(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(xe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(yt,(o,a)=>{n[o]=a.val(e),s++,r&&ve.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cT(this.getPriority().val())+":"),this.forEachChild(yt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":LE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ha?-1:0}withIndex(e){if(e===Qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(yt),i=n.getIterator(yt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qi?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $N extends ve{constructor(){super(new Sn(Of),ve.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const ha=new $N;Object.defineProperties(ue,{MIN:{value:new ue(rr,ve.EMPTY_NODE)},MAX:{value:new ue(hi,ha)}});lT.__EMPTY_NODE=ve.EMPTY_NODE;Ye.__childrenNodeConstructor=ve;ON(ha);MN(ha);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=!0;function mt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,mt(e))}if(!(t instanceof Array)&&UN){const n=[];let s=!1;if(nn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=mt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ue(o,l)))}}),n.length===0)return ve.EMPTY_NODE;const r=Vl(n,xN,o=>o.name,Of);if(s){const o=Vl(n,yt.getCompare());return new ve(r,mt(e),new Qn({".priority":o},{".priority":yt}))}else return new ve(r,mt(e),Qn.Default)}else{let n=ve.EMPTY_NODE;return nn(t,(s,i)=>{if(rs(t,s)&&s.substring(0,1)!=="."){const r=mt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(mt(e))}}DN(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN extends xc{constructor(e){super(),this.indexPath_=e,D(!ae(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Sr(e.name,n.name):r}makePost(e,n){const s=mt(e),i=ve.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,i)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,ha);return new ue(hi,e)}toString(){return iT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN extends xc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Sr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=mt(e);return new ue(n,s)}toString(){return".value"}}const jN=new HN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){return{type:"value",snapshotNode:t}}function WN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function KN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yt}copy(){const e=new Df;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Og(t){const e={};if(t.isDefault())return e;let n;if(t.index_===yt?n="$priority":t.index_===jN?n="$value":t.index_===Qi?n="$key":(D(t.index_ instanceof BN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=at(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+at(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=at(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==yt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends tT{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ca("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fl.getListenId_(e,s),a={};this.listens_[o]=a;const l=Og(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),sr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Fl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Og(e._queryParams),s=e._path.toString(),i=new Po;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ko(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return{value:null,children:new Map}}function fT(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,$l());const i=t.children.get(s);e=xe(e),fT(i,e,n)}}function Bh(t,e,n){t.value!==null?n(e,t.value):QN(t,(s,i)=>{const r=new De(e.toString()+"/"+s);Bh(i,r,n)})}function QN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=10*1e3,XN=30*1e3,JN=5*60*1e3;class ZN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YN(e);const s=Mg+(XN-Mg)*Math.random();co(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nn(e,(i,r)=>{r>0&&rs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),co(this.reportStats_.bind(this),Math.floor(Math.random()*2*JN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function pT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=pT()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new Ul(Ce(),n,this.revert)}}else return D(ce(this.path)===e,"operationForChild called for unrelated child."),new Ul(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return ae(this.path)?new di(this.source,Ce(),this.snap.getImmediateChild(e)):new di(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new di(this.source,Ce(),n.value):new Mo(this.source,Ce(),n)}else return D(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ex(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(KN(o.childName,o.snapshotNode))}),jr(t,i,"child_removed",e,s,n),jr(t,i,"child_added",e,s,n),jr(t,i,"child_moved",r,s,n),jr(t,i,"child_changed",e,s,n),jr(t,i,"value",e,s,n),i}function jr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>nx(t,a,l)),o.forEach(a=>{const l=tx(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nx(t,e,n){if(e.childName==null||n.childName==null)throw br("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){return{eventCache:t,serverCache:e}}function uo(t,e,n,s){return _T(new Mf(e,n,s),t.serverCache)}function yT(t,e,n,s){return _T(t.eventCache,new Mf(e,n,s))}function Hh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;const sx=()=>(Uu||(Uu=new Sn(Hk)),Uu);class Ne{constructor(e,n=sx()){this.value=e,this.children=n}static fromObject(e){let n=new Ne(null);return nn(e,(s,i)=>{n=n.set(new De(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(ae(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(xe(e),n);return r!=null?{path:Ze(new De(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(xe(e)):new Ne(null)}}set(e,n){if(ae(e))return new Ne(n,this.children);{const s=ce(e),r=(this.children.get(s)||new Ne(null)).set(xe(e),n),o=this.children.insert(s,r);return new Ne(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(xe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ne(null):new Ne(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(xe(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ce(e),r=(this.children.get(s)||new Ne(null)).setTree(xe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ne(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ze(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(xe(e),Ze(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(xe(e),Ze(n,i),s):new Ne(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.writeTree_=e}static empty(){return new fn(new Ne(null))}}function ho(t,e,n){if(ae(e))return new fn(new Ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tn(i,e);return r=r.updateChild(o,n),new fn(t.writeTree_.set(i,r))}else{const i=new Ne(n),r=t.writeTree_.setTree(e,i);return new fn(r)}}}function Lg(t,e,n){let s=t;return nn(n,(i,r)=>{s=ho(s,Ze(e,i),r)}),s}function Vg(t,e){if(ae(e))return fn.empty();{const n=t.writeTree_.setTree(e,new Ne(null));return new fn(n)}}function jh(t,e){return wi(t,e)!=null}function wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tn(n.path,e)):null}function Fg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(yt,(s,i)=>{e.push(new ue(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function Rs(t,e){if(ae(e))return t;{const n=wi(t,e);return n!=null?new fn(new Ne(n)):new fn(t.writeTree_.subtree(e))}}function zh(t){return t.writeTree_.isEmpty()}function or(t,e){return vT(Ce(),t.writeTree_,e)}function vT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vT(Ze(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ze(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e){return AT(e,t)}function ix(t,e,n,s,i){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ho(t.visibleWrites,e,n)),t.lastWriteId=s}function rx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ox(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ax(a,s.path)?i=!1:cn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return lx(t),!0;if(s.snap)t.visibleWrites=Vg(t.visibleWrites,s.path);else{const a=s.children;nn(a,l=>{t.visibleWrites=Vg(t.visibleWrites,Ze(s.path,l))})}return!0}else return!1}function ax(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(Ze(t.path,n),e))return!0;return!1}function lx(t){t.visibleWrites=TT(t.allWrites,cx,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cx(t){return t.visible}function TT(t,e,n){let s=fn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)cn(n,o)?(a=tn(n,o),s=ho(s,a,r.snap)):cn(o,n)&&(a=tn(o,n),s=ho(s,Ce(),r.snap.getChild(a)));else if(r.children){if(cn(n,o))a=tn(n,o),s=Lg(s,a,r.children);else if(cn(o,n))if(a=tn(o,n),ae(a))s=Lg(s,Ce(),r.children);else{const l=sr(r.children,ce(a));if(l){const c=l.getChild(xe(a));s=ho(s,Ce(),c)}}}else throw br("WriteRecord should have .snap or .children")}}return s}function wT(t,e,n,s,i){if(!s&&!i){const r=wi(t.visibleWrites,e);if(r!=null)return r;{const o=Rs(t.visibleWrites,e);if(zh(o))return n;if(n==null&&!jh(o,Ce()))return null;{const a=n||ve.EMPTY_NODE;return or(o,a)}}}else{const r=Rs(t.visibleWrites,e);if(!i&&zh(r))return n;if(!i&&n==null&&!jh(r,Ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(cn(c.path,e)||cn(e,c.path))},a=TT(t.allWrites,o,e),l=n||ve.EMPTY_NODE;return or(a,l)}}}function ux(t,e,n){let s=ve.EMPTY_NODE;const i=wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(yt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rs(t.visibleWrites,e);return n.forEachChild(yt,(o,a)=>{const l=or(Rs(r,new De(o)),a);s=s.updateImmediateChild(o,l)}),Fg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rs(t.visibleWrites,e);return Fg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function hx(t,e,n,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ze(e,n);if(jh(t.visibleWrites,r))return null;{const o=Rs(t.visibleWrites,r);return zh(o)?i.getChild(n):or(o,i.getChild(n))}}function dx(t,e,n,s){const i=Ze(e,n),r=wi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rs(t.visibleWrites,i);return or(o,s.getNode().getImmediateChild(n))}else return null}function fx(t,e){return wi(t.visibleWrites,e)}function px(t,e,n,s,i,r,o){let a;const l=Rs(t.visibleWrites,e),c=wi(l,Ce());if(c!=null)a=c;else if(n!=null)a=or(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function mx(){return{visibleWrites:fn.empty(),allWrites:[],lastWriteId:-1}}function Wh(t,e,n,s){return wT(t.writeTree,t.treePath,e,n,s)}function IT(t,e){return ux(t.writeTree,t.treePath,e)}function $g(t,e,n,s){return hx(t.writeTree,t.treePath,e,n,s)}function Bl(t,e){return fx(t.writeTree,Ze(t.treePath,e))}function gx(t,e,n,s,i,r){return px(t.writeTree,t.treePath,e,n,s,i,r)}function Lf(t,e,n){return dx(t.writeTree,t.treePath,e,n)}function bT(t,e){return AT(Ze(t.treePath,e),t.writeTree)}function AT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,xg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,qN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,WN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,xg(s,e.snapshotNode,i.oldSnap));else throw br("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const RT=new yx;class Vf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fi(this.viewCache_),r=gx(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function vx(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ex(t,e,n,s,i){const r=new _x;let o,a;if(n.type===Pn.OVERWRITE){const c=n;c.source.fromUser?o=qh(t,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=Hl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Pn.MERGE){const c=n;c.source.fromUser?o=wx(t,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Pn.ACK_USER_WRITE){const c=n;c.revert?o=Ax(t,e,c.path,s,i,r):o=Ix(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Pn.LISTEN_COMPLETE)o=bx(t,e,n.path,s,r);else throw br("Unknown operation type: "+n.type);const l=r.getChanges();return Tx(e,o,l),{viewCache:o,changes:l}}function Tx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Hh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(zN(Hh(e)))}}function CT(t,e,n,s,i,r){const o=e.eventCache;if(Bl(s,n)!=null)return e;{let a,l;if(ae(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fi(e),u=c instanceof ve?c:ve.EMPTY_NODE,h=IT(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Wh(s,fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(n);if(c===".priority"){D(Ns(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=$g(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=$g(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Lf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return uo(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function Hl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ce(n);if(!l.isCompleteForPath(n)&&Ns(n)>1)return e;const g=xe(n),v=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,RT,null)}const h=yT(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),d=new Vf(i,h,r);return CT(t,h,n,i,d,a)}function qh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Vf(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=uo(e,c,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=uo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=xe(n),f=a.getNode().getImmediateChild(h);let g;if(ae(d))g=s;else{const _=u.getCompleteChild(h);_!=null?sT(d)===".priority"&&_.getChild(rT(d)).isEmpty()?g=_:g=_.updateChild(d,s):g=ve.EMPTY_NODE}if(f.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=uo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ug(t,e){return t.eventCache.isCompleteForChild(e)}function wx(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ze(n,l);Ug(e,ce(u))&&(a=qh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ze(n,l);Ug(e,ce(u))||(a=qh(t,a,u,c,i,r,o))}),a}function Bg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Kh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new Ne(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Bg(t,f,d);l=Hl(t,l,new De(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),_=Bg(t,g,d);l=Hl(t,l,new De(h),_,i,r,o,a)}}),l}function Ix(t,e,n,s,i,r,o){if(Bl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new Ne(null);return l.getNode().forEachChild(Qi,(u,h)=>{c=c.set(new De(u),h)}),Kh(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ne(null);return s.foreach((u,h)=>{const d=Ze(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Kh(t,e,n,c,i,r,a,o)}}function bx(t,e,n,s,i){const r=e.serverCache,o=yT(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return CT(t,o,n,s,RT,i)}function Ax(t,e,n,s,i,r){let o;if(Bl(s,n)!=null)return e;{const a=new Vf(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wh(s,fi(e));else{const h=e.serverCache.getNode();D(h instanceof ve,"serverChildren would be complete if leaf node"),u=IT(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ce(n);let h=Lf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,xe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ve.EMPTY_NODE,xe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wh(s,fi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Bl(s,Ce())!=null,uo(e,c,o,t.filter.filtersNodes())}}function Rx(t,e){const n=fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Hg(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(D(fi(t.viewCache_),"We should always have a full cache before handling merges"),D(Hh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ex(t.processor_,i,e,n,s);return vx(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Cx(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Cx(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ex(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jg;function Sx(t){D(!jg,"__referenceConstructor has already been defined"),jg=t}function Ff(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),Hg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Hg(o,e,n,s));return r}}function $f(t,e){let n=null;for(const s of t.views.values())n=n||Rx(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zg;function Px(t){D(!zg,"__referenceConstructor has already been defined"),zg=t}class Wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kx(t,e,n,s,i){return ix(t.pendingWriteTree_,e,n,s,i),i?Dc(t,new di(pT(),e,n)):[]}function Ui(t,e,n=!1){const s=rx(t.pendingWriteTree_,e);if(ox(t.pendingWriteTree_,e)){let r=new Ne(null);return s.snap!=null?r=r.set(Ce(),!0):nn(s.children,o=>{r=r.set(new De(o),!0)}),Dc(t,new Ul(s.path,r,n))}else return[]}function Oc(t,e,n){return Dc(t,new di(mT(),e,n))}function Nx(t,e,n){const s=Ne.fromObject(n);return Dc(t,new Mo(mT(),e,s))}function xx(t,e,n,s){const i=NT(t,s);if(i!=null){const r=xT(i),o=r.path,a=r.queryId,l=tn(o,e),c=new di(gT(a),l,n);return OT(t,o,c)}else return[]}function Ox(t,e,n,s){const i=NT(t,s);if(i){const r=xT(i),o=r.path,a=r.queryId,l=tn(o,e),c=Ne.fromObject(n),u=new Mo(gT(a),l,c);return OT(t,o,u)}else return[]}function ST(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tn(o,e),c=$f(a,l);if(c)return c});return wT(i,e,r,n,!0)}function Dc(t,e){return PT(e,t.syncPointTree_,null,ET(t.pendingWriteTree_,Ce()))}function PT(t,e,n,s){if(ae(t.path))return kT(t,e,n,s);{const i=e.get(Ce());n==null&&i!=null&&(n=$f(i,Ce()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=bT(s,o);r=r.concat(PT(a,l,c,u))}return i&&(r=r.concat(Ff(i,t,s,n))),r}}function kT(t,e,n,s){const i=e.get(Ce());n==null&&i!=null&&(n=$f(i,Ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bT(s,o),u=t.operationForChild(o);u&&(r=r.concat(kT(u,a,l,c)))}),i&&(r=r.concat(Ff(i,t,s,n))),r}function NT(t,e){return t.tagToQueryMap.get(e)}function xT(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function OT(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=ET(t.pendingWriteTree_,e);return Ff(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uf(n)}node(){return this.node_}}class Bf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new Bf(this.syncTree_,n)}node(){return ST(this.syncTree_,this.path_)}}const Dx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qg=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Mx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Lx(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Mx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},Lx=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vx=function(t,e,n,s){return Hf(e,new Bf(n,t),s)},Fx=function(t,e,n){return Hf(t,new Uf(e),n)};function Hf(t,e,n){const s=t.getPriority().val(),i=qg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=qg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,mt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ye(i))),o.forEachChild(yt,(a,l)=>{const c=Hf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function zf(t,e){let n=e instanceof De?e:new De(e),s=t,i=ce(n);for(;i!==null;){const r=sr(s.node.children,i)||{children:{},childCount:0};s=new jf(i,s,r),n=xe(n),i=ce(n)}return s}function Pr(t){return t.node.value}function DT(t,e){t.node.value=e,Gh(t)}function MT(t){return t.node.childCount>0}function $x(t){return Pr(t)===void 0&&!MT(t)}function Mc(t,e){nn(t.node.children,(n,s)=>{e(new jf(n,t,s))})}function LT(t,e,n,s){n&&!s&&e(t),Mc(t,i=>{LT(i,e,!0,s)}),n&&s&&e(t)}function Ux(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function da(t){return new De(t.parent===null?t.name:da(t.parent)+"/"+t.name)}function Gh(t){t.parent!==null&&Bx(t.parent,t.name,t)}function Bx(t,e,n){const s=$x(n),i=rs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Gh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=/[\[\].#$\/\u0000-\u001F\u007F]/,jx=/[\[\].#$\u0000-\u001F\u007F]/,Bu=10*1024*1024,VT=function(t){return typeof t=="string"&&t.length!==0&&!Hx.test(t)},zx=function(t){return typeof t=="string"&&t.length!==0&&!jx.test(t)},Wx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zx(t)},FT=function(t,e,n){const s=n instanceof De?new bN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qs(s));if(typeof e=="function")throw new Error(t+"contains a function "+qs(s)+" with contents = "+e.toString());if(VE(e))throw new Error(t+"contains "+e.toString()+" "+qs(s));if(typeof e=="string"&&e.length>Bu/3&&Cc(e)>Bu)throw new Error(t+"contains a string greater than "+Bu+" utf8 bytes "+qs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!VT(o)))throw new Error(t+" contains an invalid key ("+o+") "+qs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AN(s,o),FT(t,a,s),RN(s)}),i&&r)throw new Error(t+' contains ".value" child '+qs(s)+" in addition to actual children.")}},qx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!VT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wx(n))throw new Error(WR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gx(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ii(t,e,n){Gx(t,n),Qx(t,s=>cn(s,e)||cn(e,s))}function Qx(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Yx(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Yx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();oi&&pt("event: "+n.toString()),ua(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="repo_interrupt",Jx=25;class Zx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$l(),this.transactionQueueTree_=new jf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function e1(t,e,n){if(t.stats_=kf(t.repoInfo_),t.forceRestClient_||Gk())t.server_=new Fl(t.repoInfo_,(s,i,r,o)=>{Kg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(s,i,r,o)=>{Kg(t,s,i,r,o)},s=>{Gg(t,s)},s=>{n1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=eN(t.repoInfo_,()=>new ZN(t.stats_,t.server_)),t.infoData_=new GN,t.infoSyncTree_=new Wg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Oc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wf(t,"connected",!1),t.serverSyncTree_=new Wg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ii(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function t1(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $T(t){return Dx({timestamp:t1(t)})}function Kg(t,e,n,s,i){t.dataUpdateCount++;const r=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Rl(n,c=>mt(c));o=Ox(t.serverSyncTree_,r,l,i)}else{const l=mt(n);o=xx(t.serverSyncTree_,r,l,i)}else if(s){const l=Rl(n,c=>mt(c));o=Nx(t.serverSyncTree_,r,l)}else{const l=mt(n);o=Oc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Kf(t,r)),Ii(t.eventQueue_,a,o)}function Gg(t,e){Wf(t,"connected",e),e===!1&&i1(t)}function n1(t,e){nn(e,(n,s)=>{Wf(t,n,s)})}function Wf(t,e,n){const s=new De("/.info/"+e),i=mt(n);t.infoData_.updateSnapshot(s,i);const r=Oc(t.infoSyncTree_,s,i);Ii(t.eventQueue_,s,r)}function s1(t){return t.nextWriteId_++}function i1(t){UT(t,"onDisconnectEvents");const e=$T(t),n=$l();Bh(t.onDisconnect_,Ce(),(i,r)=>{const o=Vx(i,r,t.serverSyncTree_,e);fT(n,i,o)});let s=[];Bh(n,Ce(),(i,r)=>{s=s.concat(Oc(t.serverSyncTree_,i,r));const o=l1(t,i);Kf(t,o)}),t.onDisconnect_=$l(),Ii(t.eventQueue_,Ce(),s)}function r1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xx)}function UT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function BT(t,e,n){return ST(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function qf(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Pr(e)){const n=jT(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&o1(t,da(e),n)}else MT(e)&&Mc(e,n=>{qf(t,n)})}function o1(t,e,n){const s=n.map(c=>c.currentWriteId),i=BT(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{UT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ui(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Lc(t,zf(t.transactionQueueTree_,e)),qf(t,t.transactionQueueTree_),Ii(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ua(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Kf(t,e)}},o)}function Kf(t,e){const n=HT(t,e),s=da(n),i=jT(t,n);return a1(t,i,s),s}function a1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tn(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Jx)u=!0,h="maxretry",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else{const d=BT(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){FT("transaction failed: Data returned ",f,l.path);let g=mt(f);typeof f=="object"&&f!=null&&rs(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,T=$T(t),R=Fx(g,d,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=R,l.currentWriteId=s1(t),o.splice(o.indexOf(v),1),i=i.concat(kx(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),i=i.concat(Ui(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0))}Ii(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ua(s[a]);qf(t,t.transactionQueueTree_)}function HT(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&Pr(s)===void 0;)s=zf(s,n),e=xe(e),n=ce(e);return s}function jT(t,e){const n=[];return zT(t,e,n),n.sort((s,i)=>s.order-i.order),n}function zT(t,e,n){const s=Pr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Mc(e,i=>{zT(t,i,n)})}function Lc(t,e){const n=Pr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,DT(e,n.length>0?n:void 0)}Mc(e,s=>{Lc(t,s)})}function l1(t,e){const n=da(HT(t,e)),s=zf(t.transactionQueueTree_,e);return Ux(s,i=>{Hu(t,i)}),Hu(t,s),LT(s,i=>{Hu(t,i)}),n}function Hu(t,e){const n=Pr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?DT(e,void 0):n.length=r+1,Ii(t.eventQueue_,da(e),i);for(let o=0;o<s.length;o++)ua(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function u1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qg=function(t,e){const n=h1(t),s=n.namespace;n.domain==="firebase.com"&&ui(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Uk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new De(n.pathString)}},h1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=c1(t.substring(u,h)));const d=u1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:sT(this._path)}get ref(){return new kr(this._repo,this._path)}get _queryIdentifier(){const e=Dg(this._queryParams),n=Sf(e);return n==="{}"?"default":n}get _queryObject(){return Dg(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof Gf))return!1;const n=this._repo===e._repo,s=oT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IN(this._path)}}class kr extends Gf{constructor(e,n){super(e,n,new Df,!1)}get parent(){const e=rT(this._path);return e===null?null:new kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Sx(kr);Px(kr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="FIREBASE_DATABASE_EMULATOR_HOST",Qh={};let f1=!1;function p1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[d1]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Qg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Fh(Fh.OWNER):new Yk(t.name,t.options,e);qx("Invalid Firebase Database URL",o),ae(o.path)||ui("Database URL must point to the root of a Firebase Database (not including a child path).");const h=g1(a,t,u,new Qk(t.name,n));return new _1(h,t)}function m1(t,e){const n=Qh[e];(!n||n[t.key]!==t)&&ui(`Database ${e}(${t.repoInfo_}) has already been deleted.`),r1(t),delete n[t.key]}function g1(t,e,n,s){let i=Qh[e.name];i||(i={},Qh[e.name]=i);let r=i[t.toURLString()];return r&&ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zx(t,f1,n,s),i[t.toURLString()]=r,r}class _1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(e1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kr(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(m1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ui("Cannot call "+e+" on a deleted database.")}}/**
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
 */function y1(t){Mk(Ls),Ln(new pn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return p1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Wt(gg,_g,t),Wt(gg,_g,"esm2017")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};y1();var v1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Qf=Qf||{},J=v1||self;function Vc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function E1(t){return Object.prototype.hasOwnProperty.call(t,ju)&&t[ju]||(t[ju]=++T1)}var ju="closure_uid_"+(1e9*Math.random()>>>0),T1=0;function w1(t,e,n){return t.call.apply(t.bind,arguments)}function I1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=w1:vt=I1,vt.apply(null,arguments)}function Ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Vs(){this.s=this.s,this.o=this.o}var b1=0;Vs.prototype.s=!1;Vs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),b1!=0)&&E1(this)};Vs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const WT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Vc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var A1=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Lo(t){return/^[\s\xa0]*$/.test(t)}function Fc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Fc().indexOf(t)!=-1}function Xf(t){return Xf[" "](t),t}Xf[" "]=function(){};function R1(t,e){var n=yO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var C1=Rn("Opera"),ar=Rn("Trident")||Rn("MSIE"),qT=Rn("Edge"),Yh=qT||ar,KT=Rn("Gecko")&&!(Fc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),S1=Fc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function GT(){var t=J.document;return t?t.documentMode:void 0}var Xh;e:{var zu="",Wu=function(){var t=Fc();if(KT)return/rv:([^\);]+)(\)|;)/.exec(t);if(qT)return/Edge\/([\d\.]+)/.exec(t);if(ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(S1)return/WebKit\/(\S+)/.exec(t);if(C1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wu&&(zu=Wu?Wu[1]:""),ar){var qu=GT();if(qu!=null&&qu>parseFloat(zu)){Xh=String(qu);break e}}Xh=zu}var Jh;if(J.document&&ar){var Xg=GT();Jh=Xg||parseInt(Xh,10)||void 0}else Jh=void 0;var P1=Jh;function Vo(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(KT){e:{try{Xf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:k1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vo.$.h.call(this)}}it(Vo,Et);var k1={2:"touch",3:"pen",4:"mouse"};Vo.prototype.h=function(){Vo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pa="closure_listenable_"+(1e6*Math.random()|0),N1=0;function x1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++N1,this.fa=this.ia=!1}function $c(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function O1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function QT(t){const e={};for(const n in t)e[n]=t[n];return e}const Jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YT(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Jg.length;r++)n=Jg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Uc(t){this.src=t,this.g={},this.h=0}Uc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ed(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new x1(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Zh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=WT(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&($c(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ed(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Zf="closure_lm_"+(1e6*Math.random()|0),Ku={};function XT(t,e,n,s,i){if(s&&s.once)return ZT(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)XT(t,e[r],n,s,i);return null}return n=np(n),t&&t[pa]?t.O(e,n,fa(s)?!!s.capture:!!s,i):JT(t,e,n,!1,s,i)}function JT(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=fa(i)?!!i.capture:!!i,a=tp(t);if(a||(t[Zf]=a=new Uc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=D1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)A1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(tw(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function D1(){function t(n){return e.call(t.src,t.listener,n)}const e=M1;return t}function ZT(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ZT(t,e[r],n,s,i);return null}return n=np(n),t&&t[pa]?t.P(e,n,fa(s)?!!s.capture:!!s,i):JT(t,e,n,!0,s,i)}function ew(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ew(t,e[r],n,s,i);else s=fa(s)?!!s.capture:!!s,n=np(n),t&&t[pa]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ed(r,n,s,i),-1<n&&($c(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=tp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ed(e,n,s,i)),(n=-1<t?e[t]:null)&&ep(n))}function ep(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pa])Zh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tw(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tp(e))?(Zh(n,t),n.h==0&&(n.src=null,e[Zf]=null)):$c(t)}}}function tw(t){return t in Ku?Ku[t]:Ku[t]="on"+t}function M1(t,e){if(t.fa)t=!0;else{e=new Vo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ep(t),t=n.call(s,e)}return t}function tp(t){return t=t[Zf],t instanceof Uc?t:null}var Gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function np(t){return typeof t=="function"?t:(t[Gu]||(t[Gu]=function(e){return t.handleEvent(e)}),t[Gu])}function st(){Vs.call(this),this.i=new Uc(this),this.S=this,this.J=null}it(st,Vs);st.prototype[pa]=!0;st.prototype.removeEventListener=function(t,e,n,s){ew(this,t,e,n,s)};function ct(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(s,t),YT(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qa(o,s,!0,e)&&i}if(o=e.g=t,i=Qa(o,s,!0,e)&&i,i=Qa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Qa(o,s,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$c(n[s]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var sp=J.JSON.stringify;class L1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function V1(){var t=ip;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F1{constructor(){this.h=this.g=null}add(e,n){const s=nw.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nw=new L1(()=>new $1,t=>t.reset());class $1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function U1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function B1(t){J.setTimeout(()=>{throw t},0)}let Fo,$o=!1,ip=new F1,sw=()=>{const t=J.Promise.resolve(void 0);Fo=()=>{t.then(H1)}};var H1=()=>{for(var t;t=V1();){try{t.h.call(t.g)}catch(n){B1(n)}var e=nw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$o=!1};function Bc(t,e){st.call(this),this.h=t||1,this.g=e||J,this.j=vt(this.qb,this),this.l=Date.now()}it(Bc,st);M=Bc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(rp(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Bc.$.N.call(this),rp(this),delete this.g};function op(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function iw(t){t.g=op(()=>{t.g=null,t.i&&(t.i=!1,iw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class j1 extends Vs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iw(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Vs.call(this),this.h=t,this.g={}}it(Uo,Vs);var Zg=[];function rw(t,e,n,s){Array.isArray(n)||(n&&(Zg[0]=n.toString()),n=Zg);for(var i=0;i<n.length;i++){var r=XT(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ow(t){Jf(t.g,function(e,n){this.g.hasOwnProperty(n)&&ep(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),ow(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hc(){this.g=!0}Hc.prototype.Ea=function(){this.g=!1};function z1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function W1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Bi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+K1(t,n)+(s?" "+s:"")})}function q1(t,e){t.info(function(){return"TIMEOUT: "+e})}Hc.prototype.info=function(){};function K1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return sp(n)}catch{return e}}var bi={},e_=null;function jc(){return e_=e_||new st}bi.Ta="serverreachability";function aw(t){Et.call(this,bi.Ta,t)}it(aw,Et);function Bo(t){const e=jc();ct(e,new aw(e))}bi.STAT_EVENT="statevent";function lw(t,e){Et.call(this,bi.STAT_EVENT,t),this.stat=e}it(lw,Et);function Pt(t){const e=jc();ct(e,new lw(e,t))}bi.Ua="timingevent";function cw(t,e){Et.call(this,bi.Ua,t),this.size=e}it(cw,Et);function ma(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var zc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ap(){}ap.prototype.h=null;function t_(t){return t.h||(t.h=t.i())}function hw(){}var ga={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lp(){Et.call(this,"d")}it(lp,Et);function cp(){Et.call(this,"c")}it(cp,Et);var td;function Wc(){}it(Wc,ap);Wc.prototype.g=function(){return new XMLHttpRequest};Wc.prototype.i=function(){return{}};td=new Wc;function _a(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Uo(this),this.P=G1,t=Yh?125:void 0,this.V=new Bc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dw}function dw(){this.i=null,this.g="",this.h=!1}var G1=45e3,nd={},jl={};M=_a.prototype;M.setTimeout=function(t){this.P=t};function sd(t,e,n){t.L=1,t.v=Kc(es(e)),t.s=n,t.S=!0,fw(t,null)}function fw(t,e){t.G=Date.now(),ya(t),t.A=es(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Tw(n.i,"t",s),t.C=0,n=t.l.J,t.h=new dw,t.g=Hw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new j1(vt(t.Pa,t,t.g),t.O)),rw(t.U,t.g,"readystatechange",t.nb),e=t.I?QT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bo(),z1(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yh||this.g&&(this.h.h||this.g.ja()||r_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Bo(3):Bo(2)),qc(this);var n=this.g.da();this.ca=n;t:if(pw(this)){var s=r_(this.g);t="";var i=s.length,r=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Js(this),fo(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,W1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lo(a)){var c=a;break t}}c=null}if(n=c)Bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,id(this,n);else{this.i=!1,this.o=3,Pt(12),Js(this),fo(this);break e}}this.S?(mw(this,u,o),Yh&&this.i&&u==3&&(rw(this.U,this.V,"tick",this.mb),this.V.start())):(Bi(this.j,this.m,o,null),id(this,o)),u==4&&Js(this),this.i&&!this.J&&(u==4?Fw(this.l,this):(this.i=!1,ya(this)))}else mO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Js(this),fo(this)}}}catch{}finally{}};function pw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function mw(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=Q1(t,n),i==jl){e==4&&(t.o=4,Pt(14),s=!1),Bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nd){t.o=4,Pt(15),Bi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Bi(t.j,t.m,i,null),id(t,i);pw(t)&&i!=jl&&i!=nd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mp(e),e.M=!0,Pt(11))):(Bi(t.j,t.m,n,"[Invalid Chunked Response]"),Js(t),fo(t))}M.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.C<e.length&&(qc(this),mw(this,t,e),this.i&&t!=4&&ya(this))}};function Q1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?jl:(n=Number(e.substring(n,s)),isNaN(n)?nd:(s+=1,s+n>e.length?jl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Js(this)};function ya(t){t.Y=Date.now()+t.P,gw(t,t.P)}function gw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ma(vt(t.lb,t),e)}function qc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(q1(this.j,this.A),this.L!=2&&(Bo(),Pt(17)),Js(this),this.o=2,fo(this)):gw(this,this.Y-t)};function fo(t){t.l.H==0||t.J||Fw(t.l,t)}function Js(t){qc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,rp(t.V),ow(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function id(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rd(n.i,t))){if(!t.K&&rd(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ql(n),Yc(n);else break e;pp(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ma(vt(n.ib,n),6e3));if(1>=bw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zs(n,11)}else if((t.K||n.g==t)&&ql(n),!Lo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(up(r,r.h),r.h=null))}if(s.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Oe(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Bw(s,s.J?s.pa:null,s.Y),o.K){Aw(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(qc(a),ya(a)),s.g=o}else Lw(s);0<n.j.length&&Xc(n)}else c[0]!="stop"&&c[0]!="close"||Zs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zs(n,7):fp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Bo(4)}catch{}}function Y1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function X1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function _w(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=X1(t),s=Y1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var yw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ai(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ai){this.h=t.h,zl(this,t.j),this.s=t.s,this.g=t.g,Wl(this,t.m),this.l=t.l;var e=t.i,n=new Ho;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),n_(this,n),this.o=t.o}else t&&(e=String(t).match(yw))?(this.h=!1,zl(this,e[1]||"",!0),this.s=eo(e[2]||""),this.g=eo(e[3]||"",!0),Wl(this,e[4]),this.l=eo(e[5]||"",!0),n_(this,e[6]||"",!0),this.o=eo(e[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,s_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,s_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?tO:eO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,sO)),t.join("")};function es(t){return new ai(t)}function zl(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function n_(t,e,n){e instanceof Ho?(t.i=e,iO(t.i,t.h)):(n||(e=to(e,nO)),t.i=new Ho(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Kc(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Z1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Z1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var s_=/[#\/\?@]/g,eO=/[#\?:]/g,tO=/[#\?]/g,nO=/[#\?@]/g,sO=/#/g;function Ho(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fs(t){t.g||(t.g=new Map,t.h=0,t.i&&J1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ho.prototype;M.add=function(t,e){Fs(this),this.i=null,t=Nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vw(t,e){Fs(t),e=Nr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ew(t,e){return Fs(t),e=Nr(t,e),t.g.has(e)}M.forEach=function(t,e){Fs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){Fs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){Fs(this);let e=[];if(typeof t=="string")Ew(this,t)&&(e=e.concat(this.g.get(Nr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Fs(this),this.i=null,t=Nr(this,t),Ew(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Tw(t,e,n){vw(t,e),0<n.length&&(t.i=null,t.g.set(Nr(t,e),Yf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iO(t,e){e&&!t.j&&(Fs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(vw(this,s),Tw(this,i,n))},t)),t.j=e}var rO=class{constructor(t,e){this.g=t,this.map=e}};function ww(t){this.l=t||oO,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oO=10;function Iw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bw(t){return t.h?1:t.g?t.g.size:0}function rd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function up(t,e){t.g?t.g.add(e):t.h=e}function Aw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ww.prototype.cancel=function(){if(this.i=Rw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yf(t.i)}var aO=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function lO(){this.g=new aO}function cO(t,e,n){const s=n||"";try{_w(t,function(i,r){let o=i;fa(i)&&(o=sp(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function uO(t,e){const n=new Hc;if(J.Image){const s=new Image;s.onload=Ga(Ya,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ga(Ya,n,s,"TestLoadImage: error",!1,e),s.onabort=Ga(Ya,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ga(Ya,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ya(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function va(t){this.l=t.fc||null,this.j=t.ob||!1}it(va,ap);va.prototype.g=function(){return new Gc(this.l,this.j)};va.prototype.i=function(t){return function(){return t}}({});function Gc(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Gc,st);var hp=0;M=Gc.prototype;M.open=function(t,e){if(this.readyState!=hp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ea(this)),this.readyState=hp};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Cw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ea(this):jo(this),this.readyState==3&&Cw(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Ea(this))};M.Ya=function(t){this.g&&(this.response=t,Ea(this))};M.ka=function(){this.g&&Ea(this)};function Ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hO=J.JSON.parse;function Ue(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sw,this.L=this.M=!1}it(Ue,st);var Sw="",dO=/^https?$/i,fO=["POST","PUT"];M=Ue.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():td.g(),this.C=this.u?t_(this.u):t_(td),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){i_(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=WT(fO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nw(this),0<this.B&&((this.L=pO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=op(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){i_(this,r)}};function pO(t){return ar&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Qf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function i_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pw(t),Qc(t)}function Pw(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Qc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qc(this,!0)),Ue.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?kw(this):this.kb())};M.kb=function(){kw(this)};function kw(t){if(t.h&&typeof Qf<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)op(t.La,0,t);else if(ct(t,"readystatechange"),kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(yw)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),s=!dO.test(i?i.toLowerCase():"")}n=s}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var r=2<kn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Pw(t)}}finally{Qc(t)}}}}function Qc(t,e){if(t.g){Nw(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=s}catch{}}}function Nw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hO(e)}};function r_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Sw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mO(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Lo(t[s]))continue;var n=U1(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}O1(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xw(t){let e="";return Jf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function dp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=xw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function zr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ow(t){this.Ga=0,this.j=[],this.l=new Hc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,t),this.hb=zr("retryDelaySeedMs",1e4,t),this.eb=zr("forwardChannelMaxRetries",2,t),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ww(t&&t.concurrentRequestLimit),this.Ja=new lO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Ow.prototype;M.ra=8;M.H=1;function fp(t){if(Dw(t),t.H==3){var e=t.W++,n=es(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Ta(t,n),e=new _a(t,t.l,e),e.L=2,e.v=Kc(es(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ya(e)}Uw(t)}function Yc(t){t.g&&(mp(t),t.g.cancel(),t.g=null)}function Dw(t){Yc(t),t.u&&(J.clearTimeout(t.u),t.u=null),ql(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Xc(t){if(!Iw(t.i)&&!t.m){t.m=!0;var e=t.Na;Fo||sw(),$o||(Fo(),$o=!0),ip.add(e,t),t.C=0}}function gO(t,e){return bw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ma(vt(t.Na,t,e),$w(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new _a(this,this.l,t);let r=this.s;if(this.U&&(r?(r=QT(r),YT(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mw(this,i,e),n=es(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),Ta(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(xw(r)))+"&"+e:this.o&&dp(n,this.o,r)),up(this.i,i),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),i.aa=!0,sd(i,n,null)):sd(i,n,e),this.H=2}}else this.H==3&&(t?o_(this,t):this.j.length==0||Iw(this.i)||o_(this))};function o_(t,e){var n;e?n=e.m:n=t.W++;const s=es(t.I);Oe(s,"SID",t.K),Oe(s,"RID",n),Oe(s,"AID",t.V),Ta(t,s),t.o&&t.s&&dp(s,t.o,t.s),n=new _a(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Mw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),up(t.i,n),sd(n,s,e)}function Ta(t,e){t.na&&Jf(t.na,function(n,s){Oe(e,s,n)}),t.h&&_w({},function(n,s){Oe(e,s,n)})}function Mw(t,e,n){n=Math.min(t.j.length,n);var s=t.h?vt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{cO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Lw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fo||sw(),$o||(Fo(),$o=!0),ip.add(e,t),t.A=0}}function pp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ma(vt(t.Ma,t),$w(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Vw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ma(vt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Yc(this),Vw(this))};function mp(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Vw(t){t.g=new _a(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=es(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),Ta(t,e),t.o&&t.s&&dp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kc(es(e)),n.s=null,n.S=!0,fw(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Yc(this),pp(this),Pt(19))};function ql(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Fw(t,e){var n=null;if(t.g==e){ql(t),mp(t),t.g=null;var s=2}else if(rd(t.i,e))n=e.F,Aw(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=jc(),ct(s,new cw(s,n)),Xc(t)}else Lw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&gO(t,e)||s==2&&pp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zs(t,5);break;case 4:Zs(t,10);break;case 3:Zs(t,6);break;default:Zs(t,2)}}}function $w(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=vt(t.pb,t);n||(n=new ai("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||zl(n,"https"),Kc(n)),uO(n.toString(),s)}else Pt(2);t.H=0,t.h&&t.h.za(e),Uw(t),Dw(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function Uw(t){if(t.H=0,t.ma=[],t.h){const e=Rw(t.i);(e.length!=0||t.j.length!=0)&&(Yg(t.ma,e),Yg(t.ma,t.j),t.i.i.length=0,Yf(t.j),t.j.length=0),t.h.ya()}}function Bw(t,e,n){var s=n instanceof ai?es(n):new ai(n);if(s.g!="")e&&(s.g=e+"."+s.g),Wl(s,s.m);else{var i=J.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ai(null);s&&zl(r,s),e&&(r.g=e),i&&Wl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ra),Ta(t,s),s}function Hw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new va({ob:!0})):new Ue(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function jw(){}M=jw.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Kl(){if(ar&&!(10<=Number(P1)))throw Error("Environmental error: no available transport.")}Kl.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){st.call(this),this.g=new Ow(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xr(this)}it(Yt,st);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Bw(t,null,t.Y),Xc(t)};Yt.prototype.close=function(){fp(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=sp(t),t=n);e.j.push(new rO(e.fb++,t)),e.H==3&&Xc(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,fp(this.g),delete this.g,Yt.$.N.call(this)};function zw(t){lp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(zw,lp);function Ww(){cp.call(this),this.status=1}it(Ww,cp);function xr(t){this.g=t}it(xr,jw);xr.prototype.Ba=function(){ct(this.g,"a")};xr.prototype.Aa=function(t){ct(this.g,new zw(t))};xr.prototype.za=function(t){ct(this.g,new Ww)};xr.prototype.ya=function(){ct(this.g,"b")};function _O(){this.blockSize=-1}function gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(gn,_O);gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}gn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Qu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Qu(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Qu(this,s),i=0;break}}this.h=i,this.i+=e};gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function we(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var yO={};function gp(t){return-128<=t&&128>t?R1(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function Nn(t){if(isNaN(t)||!isFinite(t))return Yi;if(0>t)return ot(Nn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=od;return new we(e,0)}function qw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ot(qw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nn(Math.pow(e,8)),s=Yi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Nn(Math.pow(e,r)),s=s.R(r).add(Nn(o))):(s=s.R(n),s=s.add(Nn(o)))}return s}var od=4294967296,Yi=gp(0),ad=gp(1),a_=gp(16777216);M=we.prototype;M.ea=function(){if(en(this))return-ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:od+s)*e,e*=od}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yn(this))return"0";if(en(this))return"-"+ot(this).toString(t);for(var e=Nn(Math.pow(t,6)),n=this,s="";;){var i=Ql(n,e).g;n=Gl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}M.X=function(t){return t=Gl(this,t),en(t)?-1:Yn(t)?0:1};function ot(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new we(n,~t.h).add(ad)}M.abs=function(){return en(this)?ot(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new we(n,n[n.length-1]&-2147483648?-1:0)};function Gl(t,e){return t.add(ot(e))}M.R=function(t){if(Yn(this)||Yn(t))return Yi;if(en(this))return en(t)?ot(this).R(ot(t)):ot(ot(this).R(t));if(en(t))return ot(this.R(ot(t)));if(0>this.X(a_)&&0>t.X(a_))return Nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Xa(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Xa(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Xa(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Xa(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new we(n,0)};function Xa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wr(t,e){this.g=t,this.h=e}function Ql(t,e){if(Yn(e))throw Error("division by zero");if(Yn(t))return new Wr(Yi,Yi);if(en(t))return e=Ql(ot(t),e),new Wr(ot(e.g),ot(e.h));if(en(e))return e=Ql(t,ot(e)),new Wr(ot(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ad,s=e;0>=s.X(t);)n=l_(n),s=l_(s);var i=xi(n,1),r=xi(s,1);for(s=xi(s,2),n=xi(n,2);!Yn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=xi(s,1),n=xi(n,1)}return e=Gl(t,i.R(e)),new Wr(i,e)}for(i=Yi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Nn(n),o=r.R(e);en(o)||0<o.X(t);)n-=s,r=Nn(n),o=r.R(e);Yn(r)&&(r=ad),i=i.add(r),t=Gl(t,o)}return new Wr(i,t)}M.gb=function(t){return Ql(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new we(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new we(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new we(n,this.h^t.h)};function l_(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new we(n,t.h)}function xi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new we(i,t.h)}Kl.prototype.createWebChannel=Kl.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;zc.NO_ERROR=0;zc.TIMEOUT=8;zc.HTTP_ERROR=6;uw.COMPLETE="complete";hw.EventType=ga;ga.OPEN="a";ga.CLOSE="b";ga.ERROR="c";ga.MESSAGE="d";st.prototype.listen=st.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;gn.prototype.digest=gn.prototype.l;gn.prototype.reset=gn.prototype.reset;gn.prototype.update=gn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=Nn;we.fromString=qw;var vO=function(){return new Kl},EO=function(){return jc()},Yu=zc,TO=uw,wO=bi,c_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},IO=va,Ja=hw,bO=Ue,AO=gn,Xi=we;const u_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new na("@firebase/firestore");function h_(){return pi.logLevel}function U(t,...e){if(pi.logLevel<=fe.DEBUG){const n=e.map(_p);pi.debug(`Firestore (${Or}): ${t}`,...n)}}function ts(t,...e){if(pi.logLevel<=fe.ERROR){const n=e.map(_p);pi.error(`Firestore (${Or}): ${t}`,...n)}}function lr(t,...e){if(pi.logLevel<=fe.WARN){const n=e.map(_p);pi.warn(`Firestore (${Or}): ${t}`,...n)}}function _p(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function Te(t,e){t||K()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class CO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SO{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new Kw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new ft(e)}}class PO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new PO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new NO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=OO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function cr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new We(0,0))}static max(){return new Y(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends zo{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const DO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends zo{construct(e,n,s){return new _t(e,n,s)}static isValidIdentifier(e){return DO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Le.fromString(e))}static fromName(e){return new q(Le.fromString(e).popFirst(5))}static empty(){return new q(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Le(e.slice()))}}function MO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new xs(i,q.empty(),e)}function LO(t){return new xs(t.readTime,t.key,-1)}class xs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xs(Y.min(),q.empty(),-1)}static max(){return new xs(Y.max(),q.empty(),-1)}}function VO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $O{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==FO)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}yp.ae=-1;function ba(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function UO(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??rt.RED,this.left=i??rt.EMPTY,this.right=r??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new rt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,s,i,r){return this}insert(e,n,s){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f_(this.data.getIterator())}getIteratorFrom(e){return new f_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class f_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Tt(_t.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Yw("Invalid base64 string: "+r):r}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const BO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(Te(!!t),typeof t=="string"){let e=0;const n=BO.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ep(t){const e=t.mapValue.fields.__previous_value__;return vp(e)?Ep(e):e}function Wo(t){const e=Os(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vp(t)?4:jO(t)?9007199254740991:10:K()}function Fn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Os(i.timestampValue),a=Os(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return mi(i.bytesValue).isEqual(mi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return ze(i.geoPointValue.latitude)===ze(r.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return ze(i.integerValue)===ze(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=ze(i.doubleValue),a=ze(r.doubleValue);return o===a?Yl(o)===Yl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return cr(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(d_(o)!==d_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Ko(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function ur(t,e){if(t===e)return 0;const n=gi(t),s=gi(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=ze(r.integerValue||r.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return p_(t.timestampValue,e.timestampValue);case 4:return p_(Wo(t),Wo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,o){const a=mi(r),l=mi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ge(ze(r.latitude),ze(o.latitude));return a!==0?a:ge(ze(r.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ur(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===el.mapValue&&o===el.mapValue)return 0;if(r===el.mapValue)return 1;if(o===el.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const f=ur(a[l[h]],c[u[h]]);if(f!==0)return f}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function p_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Os(t),s=Os(e),i=ge(n.seconds,s.seconds);return i!==0?i:ge(n.nanos,s.nanos)}function hr(t){return ld(t)}function ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Os(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ld(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ld(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function cd(t){return!!t&&"integerValue"in t}function Tp(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ai(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=po(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=_t.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=po(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ai(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ct(po(this.value))}}function Xw(t){const e=[];return Ai(t.fields,(n,s)=>{const i=new _t([n]);if(dl(s)){const r=Xw(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,i){return new Je(e,1,n,Y.min(),s,i,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function __(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=ur(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function zO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jw{}class Ge extends Jw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qO(e,n,s):n==="array-contains"?new QO(e,s):n==="in"?new YO(e,s):n==="not-in"?new XO(e,s):n==="array-contains-any"?new JO(e,s):new Ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new KO(e,s):new GO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ur(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(ur(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $n extends Jw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new $n(e,n)}matches(e){return Zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zw(t){return t.op==="and"}function eI(t){return WO(t)&&Zw(t)}function WO(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function ud(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+hr(t.value);if(eI(t))return t.filters.map(e=>ud(e)).join(",");{const e=t.filters.map(n=>ud(n)).join(",");return`${t.op}(${e})`}}function tI(t,e){return t instanceof Ge?function(s,i){return i instanceof Ge&&s.op===i.op&&s.field.isEqual(i.field)&&Fn(s.value,i.value)}(t,e):t instanceof $n?function(s,i){return i instanceof $n&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&tI(o,i.filters[a]),!0):!1}(t,e):void K()}function nI(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${hr(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(nI).join(" ,")+"}"}(t):"Filter"}class qO extends Ge{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class KO extends Ge{constructor(e,n){super(e,"in",n),this.keys=sI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GO extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=sI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class QO extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tp(n)&&Ko(n.arrayValue,this.value)}}class YO extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class XO extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class JO extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ko(this.value.arrayValue,s))}}/**
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
 */class ZO{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function v_(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ZO(t,e,n,s,i,r,o)}function wp(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ud(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hr(s)).join(",")),e.he=n}return e.he}function Ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function hd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function eD(t,e,n,s,i,r,o,a){return new Jc(t,e,n,s,i,r,o,a)}function Zc(t){return new Jc(t)}function E_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function sD(t){return t.collectionGroup!==null}function Ji(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=nD(e),s=tD(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new mo(n)),e.Pe.push(new mo(_t.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new mo(_t.keyField(),r))}}}return e.Pe}function ns(t){const e=te(t);if(!e.Ie)if(e.limitType==="F")e.Ie=v_(e.path,e.collectionGroup,Ji(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ji(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new mo(r.field,o))}const s=e.endAt?new Xl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xl(e.startAt.position,e.startAt.inclusive):null;e.Ie=v_(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function dd(t,e,n){return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eu(t,e){return Ip(ns(t),ns(e))&&t.limitType===e.limitType}function iI(t){return`${wp(ns(t))}|lt:${t.limitType}`}function fd(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>nI(i)).join(", ")}]`),ba(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>hr(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>hr(i)).join(",")),`Target(${s})`}(ns(t))}; limitType=${t.limitType})`}function tu(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Ji(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=__(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Ji(s),i)||s.endAt&&!function(o,a,l){const c=__(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Ji(s),i))}(t,e)}function iD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rI(t){return(e,n)=>{let s=!1;for(const i of Ji(t)){const r=rD(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function rD(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?ur(l,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new Fe(q.comparator);function ss(){return oD}const oI=new Fe(q.comparator);function no(...t){let e=oI;for(const n of t)e=e.insert(n.key,n);return e}function aI(t){let e=oI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ei(){return go()}function lI(){return go()}function go(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const aD=new Fe(q.comparator),lD=new Tt(q.comparator);function oe(...t){let e=lD;for(const n of t)e=e.add(n);return e}const cD=new Tt(ge);function uD(){return cD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function uI(t){return{integerValue:""+t}}function hI(t,e){return UO(e)?uI(e):cI(t,e)}/**
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
 */class nu{constructor(){this._=void 0}}function hD(t,e,n){return t instanceof Jl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&vp(r)&&(r=Ep(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof dr?fI(t,e):t instanceof fr?pI(t,e):function(i,r){const o=dI(i,r),a=T_(o)+T_(i.Te);return cd(o)&&cd(i.Te)?uI(a):cI(i.serializer,a)}(t,e)}function dD(t,e,n){return t instanceof dr?fI(t,e):t instanceof fr?pI(t,e):n}function dI(t,e){return t instanceof Go?function(s){return cd(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Jl extends nu{}class dr extends nu{constructor(e){super(),this.elements=e}}function fI(t,e){const n=mI(e);for(const s of t.elements)n.some(i=>Fn(i,s))||n.push(s);return{arrayValue:{values:n}}}class fr extends nu{constructor(e){super(),this.elements=e}}function pI(t,e){let n=mI(e);for(const s of t.elements)n=n.filter(i=>!Fn(i,s));return{arrayValue:{values:n}}}class Go extends nu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function T_(t){return ze(t.integerValue||t.doubleValue)}function mI(t){return Tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.field=e,this.transform=n}}function fD(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof dr&&i instanceof dr||s instanceof fr&&i instanceof fr?cr(s.elements,i.elements,Fn):s instanceof Go&&i instanceof Go?Fn(s.Te,i.Te):s instanceof Jl&&i instanceof Jl}(t.transform,e.transform)}class pD{constructor(e,n){this.version=e,this.transformResults=n}}class St{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function gI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ap(t.key,St.none()):new Aa(t.key,t.data,St.none());{const n=t.data,s=Ct.empty();let i=new Tt(_t.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new $s(t.key,s,new zt(i.toArray()),St.none())}}function mD(t,e,n){t instanceof Aa?function(i,r,o){const a=i.value.clone(),l=I_(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(i,r,o){if(!fl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=I_(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(_I(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,s){return t instanceof Aa?function(r,o,a,l){if(!fl(r.precondition,o))return a;const c=r.value.clone(),u=b_(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof $s?function(r,o,a,l){if(!fl(r.precondition,o))return a;const c=b_(r.fieldTransforms,l,o),u=o.data;return u.setAll(_I(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return fl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function gD(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=dI(s.transform,i||null);r!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,r))}return n||null}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&cr(s,i,(r,o)=>fD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends su{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $s extends su{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function _I(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function I_(t,e,n){const s=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,dD(o,a,n[i]))}return s}function b_(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,hD(r,o,e))}return s}class Ap extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yI extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&mD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=_o(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=_o(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=gI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&cr(this.mutations,e.mutations,(n,s)=>w_(n,s))&&cr(this.baseMutations,e.baseMutations,(n,s)=>w_(n,s))}}class Rp{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Te(e.mutations.length===s.length);let i=function(){return aD}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Rp(e,n,s,i)}}/**
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
 */class yD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,le;function vI(t){switch(t){default:return K();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function EI(t){if(t===void 0)return ts("GRPC error has no .code"),A.UNKNOWN;switch(t){case je.OK:return A.OK;case je.CANCELLED:return A.CANCELLED;case je.UNKNOWN:return A.UNKNOWN;case je.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case je.INTERNAL:return A.INTERNAL;case je.UNAVAILABLE:return A.UNAVAILABLE;case je.UNAUTHENTICATED:return A.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case je.NOT_FOUND:return A.NOT_FOUND;case je.ALREADY_EXISTS:return A.ALREADY_EXISTS;case je.PERMISSION_DENIED:return A.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case je.ABORTED:return A.ABORTED;case je.OUT_OF_RANGE:return A.OUT_OF_RANGE;case je.UNIMPLEMENTED:return A.UNIMPLEMENTED;case je.DATA_LOSS:return A.DATA_LOSS;default:return K()}}(le=je||(je={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Cp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return tl}static getOrCreateInstance(){return tl===null&&(tl=new Cp),tl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let tl=null;/**
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
 */function ED(){return new TextEncoder}/**
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
 */const TD=new Xi([4294967295,4294967295],0);function A_(t){const e=ED().encode(t),n=new AO;return n.update(e),new Uint8Array(n.digest())}function R_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Xi([n,s],0),new Xi([i,r],0)]}class Sp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(s<0)throw new so(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Xi.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(Xi.fromNumber(s)));return i.compare(TD)===1&&(i=new Xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=A_(e),[s,i]=R_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Sp(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=A_(e),[s,i]=R_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new iu(Y.min(),i,new Fe(ge),ss(),oe())}}class Ra{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ra(s,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class TI{constructor(e,n){this.targetId=e,this.pe=n}}class wI{constructor(e,n,s=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class C_{constructor(){this.ye=0,this.we=P_(),this.Se=bt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=oe(),n=oe(),s=oe();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:K()}}),new Ra(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=P_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class wD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ss(),this.$e=S_(),this.Ue=new Fe(ge)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(hd(a))if(r===0){const l=new q(a.path);this.ze(i,l,Je.newNoDocument(l,Y.min()))}else Te(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Cp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var _,v,T,R,P,b;const B={localCacheCount:f,existenceFilterCount:g.count},G=g.unchangedNames;return G&&(B.bloomFilter={applied:h===0,hashCount:(_=G==null?void 0:G.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(R=(T=(v=G==null?void 0:G.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&R!==void 0?R:0,padding:(b=(P=G==null?void 0:G.bits)===null||P===void 0?void 0:P.padding)!==null&&b!==void 0?b:0},d&&(B.bloomFilter.mightContain=d)),B}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=mi(r).toUint8Array()}catch(h){if(h instanceof Yw)return lr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Sp(l,o,a)}catch(h){return lr(h instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&hd(a.target)){const l=new q(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Je.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=oe();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new iu(e,n,this.Ue,this.Ke,s);return this.Ke=ss(),this.$e=S_(),this.Ue=new Fe(ge),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new C_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Tt(ge),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new C_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function S_(){return new Fe(q.comparator)}function P_(){return new Fe(q.comparator)}const ID=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),AD=(()=>({and:"AND",or:"OR"}))();class RD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pd(t,e){return t.useProto3Json||ba(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function II(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CD(t,e){return Zl(t,e.toTimestamp())}function Kt(t){return Te(!!t),Y.fromTimestamp(function(n){const s=Os(n);return new We(s.seconds,s.nanos)}(t))}function Pp(t,e){return function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function bI(t){const e=Le.fromString(t);return Te(PI(e)),e}function ec(t,e){return Pp(t.databaseId,e.path)}function yo(t,e){const n=bI(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(AI(n))}function md(t,e){return Pp(t.databaseId,e)}function SD(t){const e=bI(t);return e.length===4?Le.emptyPath():AI(e)}function Qo(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AI(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function k_(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function PD(t,e){return"found"in e?function(s,i){Te(!!i.found),i.found.name,i.found.updateTime;const r=yo(s,i.found.name),o=Kt(i.found.updateTime),a=i.found.createTime?Kt(i.found.createTime):Y.min(),l=new Ct({mapValue:{fields:i.found.fields}});return Je.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(s,i){Te(!!i.missing),Te(!!i.readTime);const r=yo(s,i.missing),o=Kt(i.readTime);return Je.newNoDocument(r,o)}(t,e):K()}function kD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Te(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:EI(c.code);return new F(u,c.message||"")}(o);n=new wI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=yo(t,s.document.name),r=Kt(s.document.updateTime),o=s.document.createTime?Kt(s.document.createTime):Y.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=Je.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new pl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=yo(t,s.document),r=s.readTime?Kt(s.readTime):Y.min(),o=Je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=yo(t,s.document),r=s.removedTargetIds||[];n=new pl([],r,i,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new vD(i,r),a=s.targetId;n=new TI(a,o)}}return n}function RI(t,e){let n;if(e instanceof Aa)n={update:k_(t,e.key,e.value)};else if(e instanceof Ap)n={delete:ec(t,e.key)};else if(e instanceof $s)n={update:k_(t,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof yI))return K();n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Jl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof dr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:CD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function ND(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Kt(i.updateTime):Kt(r);return o.isEqual(Y.min())&&(o=Kt(r)),new pD(o,i.transformResults||[])}(n,e))):[]}function xD(t,e){return{documents:[md(t,e.path)]}}function OD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=md(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=md(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return SI($n.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Di(h.field),direction:LD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=pd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function DD(t){let e=SD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=CI(h);return d instanceof $n&&eI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new mo(Mi(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ba(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Xl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Xl(f,d)}(n.endAt)),eD(e,i,o,r,a,"F",l,c)}function MD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Mi(n.unaryFilter.field);return Ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Mi(n.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mi(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(s=>CI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function LD(t){return ID[t]}function VD(t){return bD[t]}function FD(t){return AD[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Mi(t){return _t.fromServerFormat(t.fieldPath)}function SI(t){return t instanceof Ge?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(n.field),op:VD(n.op),value:n.value}}}(t):t instanceof $n?function(n){const s=n.getFilters().map(i=>SI(i));return s.length===1?s[0]:{compositeFilter:{op:FD(n.op),filters:s}}}(t):K()}function $D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,i,r=Y.min(),o=Y.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.ct=e}}function BD(t){const e=DD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
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
 */class HD{constructor(){this.sn=new jD}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(xs.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class jD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Tt(Le.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Tt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new pr(0)}static On(){return new pr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&_o(s.mutation,i,zt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=oe()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=no();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ei();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ss();const o=go(),a=function(){return go()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof $s)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),_o(u.mutation,c,u.mutation.getFieldMask(),We.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new WD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=go();let i=new Fe((o,a)=>o-a),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||zt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=lI();u.forEach(d=>{if(!r.has(d)){const f=gI(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(ei());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,oe())).next(u=>({batchId:a,changes:aI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=no();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=no();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,h){return new Jc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Je.newInvalidDocument(c)))});let o=no();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&_o(c.mutation,l,zt.empty(),We.now()),tu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Kt(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:BD(i.bundledQuery),readTime:Kt(i.readTime)}}(n)),k.resolve()}}/**
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
 */class GD{constructor(){this.overlays=new Fe(q.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ei();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=ei(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ei(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ei(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yD(n,s));let r=this.cr.get(n);r===void 0&&(r=oe(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.lr=new Tt(Xe.hr),this.Pr=new Tt(Xe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new Xe(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new Xe(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new q(new Le([])),s=new Xe(n,e),i=new Xe(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new q(new Le([])),s=new Xe(n,e),i=new Xe(n,e+1);let r=oe();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Xe(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Xe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return q.comparator(e.key,n.key)||ge(e.mr,n.mr)}static Ir(e,n){return ge(e.mr,n.mr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Tt(Xe.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _D(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Xe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Tt(ge);return n.forEach(i=>{const r=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),k.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Xe(new q(r),0);let a=new Tt(ge);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return k.forEach(n.mutations,i=>{const r=new Xe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new Xe(n,0),i=this.pr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.Dr=e,this.docs=function(){return new Fe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Je.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ss();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VO(LO(u),s)<=0||(i.has(u.key)||tu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){K()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XD(this)}getSize(e){return k.resolve(this.size)}}class XD extends zD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.persistence=e,this.Cr=new Dr(n=>wp(n),Ip),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new kp,this.targetCount=0,this.Or=pr.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new pr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new yp(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new JD(this),this.indexManager=new HD,this.remoteDocumentCache=function(i){return new YD(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new UD(n),this.Qr=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new QD(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const i=new eM(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class eM extends $O{constructor(e){super(),this.currentSequenceNumber=e}}class Np{constructor(e){this.persistence=e,this.Wr=new kp,this.Gr=null}static zr(e){return new Np(e)}get jr(){if(this.Gr)return this.Gr;throw K()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,s=>{const i=q.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,Y.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=oe(),i=oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new xp(e,n.fromCache,s,i)}}/**
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
 */class tM{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(E_(n))return k.resolve(null);let s=ns(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dd(n,null,"F"),s=ns(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=oe(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,dd(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return E_(n)||i.isEqual(Y.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(h_()<=fe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fd(n)),this.ji(e,o,n,MO(i,-1)))})}Gi(e,n){let s=new Tt(rI(e));return n.forEach((i,r)=>{tu(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return h_()<=fe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",fd(n)),this.Ki.getDocumentsMatchingQuery(e,n,xs.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Fe(ge),this.Yi=new Dr(r=>wp(r),Ip),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function sM(t,e,n,s){return new nM(t,e,n,s)}async function kI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function iM(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(_=>{const v=c.docVersions.get(g);Te(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function NI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function rM(t,e){const n=te(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(bt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(_,v,T){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=ss(),c=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(oM(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(Y.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function oM(t,e,n){let s=oe(),i=oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ss();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function aM(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function lM(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function gd(t,e,n){const s=te(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ia(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function N_(t,e,n){const s=te(t);let i=Y.min(),r=oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=te(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,ns(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?r:oe())).next(a=>(cM(s,iD(e),a),{documents:a,ss:r})))}function cM(t,e,n){let s=t.Zi.get(e)||Y.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class x_{constructor(){this.activeTargetIds=uD()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uM{constructor(){this.Hs=new x_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new x_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hM{Ys(e){}shutdown(){}}/**
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
 */class O_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nl=null;function Xu(){return nl===null?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class pM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=Xu(),l=this.mo(n,s);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw lr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=dM[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=Xu();return new Promise((o,a)=>{const l=new bO;l.setWithCredentials(!0),l.listenOnce(TO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yu.NO_ERROR:const u=l.getResponseJson();U(dt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Yu.TIMEOUT:U(dt,`RPC '${e}' ${r} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const h=l.getStatus();if(U(dt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(T)>=0?T:A.UNKNOWN}(f.status);a(new F(g,f.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(dt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);U(dt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=Xu(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vO(),a=EO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new IO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");U(dt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new fM({so:v=>{f?U(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(U(dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),U(dt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,T,R)=>{v.listen(T,P=>{try{R(P)}catch(b){setTimeout(()=>{throw b},0)}})};return _(h,Ja.EventType.OPEN,()=>{f||U(dt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ja.EventType.CLOSE,()=>{f||(f=!0,U(dt,`RPC '${e}' stream ${i} transport closed`),g.Po())}),_(h,Ja.EventType.ERROR,v=>{f||(f=!0,lr(dt,`RPC '${e}' stream ${i} transport errored:`,v),g.Po(new F(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ja.EventType.MESSAGE,v=>{var T;if(!f){const R=v.data[0];Te(!!R);const P=R,b=P.error||((T=P[0])===null||T===void 0?void 0:T.error);if(b){U(dt,`RPC '${e}' stream ${i} received error:`,b);const B=b.status;let G=function(ne){const Ie=je[ne];if(Ie!==void 0)return EI(Ie)}(B),he=b.message;G===void 0&&(G=A.INTERNAL,he="Unknown error status: "+B+" with message "+b.message),f=!0,g.Po(new F(G,he)),h.close()}else U(dt,`RPC '${e}' stream ${i} received:`,R),g.Io(R)}}),_(a,wO.STAT_EVENT,v=>{v.stat===c_.PROXY?U(dt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===c_.NOPROXY&&U(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function Ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new RD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Op(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new F(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mM extends xI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=kD(this.serializer,e),s=function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Kt(o.readTime):Y.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=Qo(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=hd(l)?{documents:xD(r,l)}:{query:OD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=II(r,o.resumeToken);const c=pd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Zl(r,o.snapshotVersion.toTimestamp());const c=pd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=MD(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=Qo(this.serializer),n.removeTarget=e,this.Ho(n)}}class gM extends xI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=ND(e.writeResults,e.commitTime),s=Kt(e.commitTime);return this.listener.u_(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Qo(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>RI(this.serializer,s))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(A.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class yM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ts(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{Ri(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.y_.add(4),await Ca(c),c.b_.set("Unknown"),c.y_.delete(4),await ou(c)}(this))})}),this.b_=new yM(s,i)}}async function ou(t){if(Ri(t))for(const e of t.w_)await e(!0)}async function Ca(t){for(const e of t.w_)await e(!1)}function OI(t,e){const n=te(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Lp(n)?Mp(n):Mr(n).Uo()&&Dp(n,e))}function DI(t,e){const n=te(t),s=Mr(n);n.p_.delete(e),s.Uo()&&MI(n,e),n.p_.size===0&&(s.Uo()?s.zo():Ri(n)&&n.b_.set("Unknown"))}function Dp(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mr(t).i_(e)}function MI(t,e){t.D_.Be(e),Mr(t).s_(e)}function Mp(t){t.D_=new wD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Mr(t).start(),t.b_.A_()}function Lp(t){return Ri(t)&&!Mr(t).$o()&&t.p_.size>0}function Ri(t){return te(t).y_.size===0}function LI(t){t.D_=void 0}async function EM(t){t.p_.forEach((e,n)=>{Dp(t,e)})}async function TM(t,e){LI(t),Lp(t)?(t.b_.m_(e),Mp(t)):t.b_.set("Unknown")}async function wM(t,e,n){if(t.b_.set("Online"),e instanceof wI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tc(t,s)}else if(e instanceof pl?t.D_.We(e):e instanceof TI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Y.min()))try{const s=await NI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),MI(r,l);const h=new Es(u.target,l,c,u.sequenceNumber);Dp(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await tc(t,s)}}async function tc(t,e,n){if(!Ia(e))throw e;t.y_.add(1),await Ca(t),t.b_.set("Offline"),n||(n=()=>NI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await ou(t)})}function VI(t,e){return e().catch(n=>tc(t,n,e))}async function au(t){const e=te(t),n=Ds(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;IM(e);)try{const i=await aM(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,bM(e,i)}catch(i){await tc(e,i)}FI(e)&&$I(e)}function IM(t){return Ri(t)&&t.g_.length<10}function bM(t,e){t.g_.push(e);const n=Ds(t);n.Uo()&&n.__&&n.a_(e.mutations)}function FI(t){return Ri(t)&&!Ds(t).$o()&&t.g_.length>0}function $I(t){Ds(t).start()}async function AM(t){Ds(t).l_()}async function RM(t){const e=Ds(t);for(const n of t.g_)e.a_(n.mutations)}async function CM(t,e,n){const s=t.g_.shift(),i=Rp.from(s,e,n);await VI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await au(t)}async function SM(t,e){e&&Ds(t).__&&await async function(s,i){if(function(o){return vI(o)&&o!==A.ABORTED}(i.code)){const r=s.g_.shift();Ds(s).Go(),await VI(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await au(s)}}(t,e),FI(t)&&$I(t)}async function D_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Ri(n);n.y_.add(3),await Ca(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await ou(n)}async function PM(t,e){const n=te(t);e?(n.y_.delete(2),await ou(n)):e||(n.y_.add(2),await Ca(n),n.b_.set("Unknown"))}function Mr(t){return t.v_||(t.v_=function(n,s,i){const r=te(n);return r.P_(),new mM(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:EM.bind(null,t),uo:TM.bind(null,t),r_:wM.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Lp(t)?Mp(t):t.b_.set("Unknown")):(await t.v_.stop(),LI(t))})),t.v_}function Ds(t){return t.C_||(t.C_=function(n,s,i){const r=te(n);return r.P_(),new gM(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:AM.bind(null,t),uo:SM.bind(null,t),c_:RM.bind(null,t),u_:CM.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await au(t)):(await t.C_.stop(),t.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vp(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fp(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Ia(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=no(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.F_=new Fe(q.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):K():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class mr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mr(e,n,Zi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(){this.x_=void 0,this.listeners=[]}}class NM{constructor(){this.queries=new Dr(e=>iI(e),eu),this.onlineState="Unknown",this.O_=new Set}}async function $p(t,e){const n=te(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kM),i)try{r.x_=await n.onListen(s)}catch(o){const a=Fp(o,`Initialization of query '${fd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&Bp(n)}async function Up(t,e){const n=te(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function xM(t,e){const n=te(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&Bp(n)}function OM(t,e,n){const s=te(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Bp(t){t.O_.forEach(e=>{e.next()})}class Hp{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new mr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.key=e}}class BI{constructor(e){this.key=e}}class DM{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=oe(),this.mutatedKeys=oe(),this.na=rI(e),this.ra=new Zi(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new M_,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=tu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(d)-g(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new mr(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new M_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=oe(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new BI(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new UI(s))}),n}ha(e){this.X_=e.ss,this.ta=oe();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return mr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class MM{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class LM{constructor(e){this.key=e,this.Ia=!1}}class VM{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Dr(a=>iI(a),eu),this.da=new Map,this.Aa=new Set,this.Ra=new Fe(q.comparator),this.Va=new Map,this.ma=new kp,this.fa={},this.ga=new Map,this.pa=pr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function FM(t,e){const n=GM(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await lM(n.localStore,ns(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await $M(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&OI(n.remoteStore,o)}return i}async function $M(t,e,n,s,i){t.wa=(h,d,f)=>async function(_,v,T,R){let P=v.view.sa(T);P.zi&&(P=await N_(_.localStore,v.query,!1).then(({documents:G})=>v.view.sa(G,P)));const b=R&&R.targetChanges.get(v.targetId),B=v.view.applyChanges(P,_.isPrimaryClient,b);return V_(_,v.targetId,B.ca),B.snapshot}(t,h,d,f);const r=await N_(t.localStore,e,!0),o=new DM(e,r.ss),a=o.sa(r.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);V_(t,n,c.ca);const u=new MM(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function UM(t,e){const n=te(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!eu(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),DI(n.remoteStore,s.targetId),_d(n,s.targetId)}).catch(wa)):(_d(n,s.targetId),await gd(n.localStore,s.targetId,!0))}async function BM(t,e,n){const s=QM(t);try{const i=await function(o,a){const l=te(o),c=We.now(),u=a.reduce((f,g)=>f.add(g.key),oe());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=ss(),_=oe();return l.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((T,R)=>{R.isValidDocument()||(_=_.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const T=[];for(const R of a){const P=gD(R,h.get(R.key).overlayedDocument);P!=null&&T.push(new $s(R.key,P,Xw(P.value.mapValue),St.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:aI(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Fe(ge)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await Sa(s,i.changes),await au(s.remoteStore)}catch(i){const r=Fp(i,"Failed to persist write");n.reject(r)}}async function HI(t,e){const n=te(t);try{const s=await rM(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Te(o.Ia):i.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await Sa(n,s,e)}catch(s){await wa(s)}}function L_(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Bp(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HM(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new Fe(q.comparator);o=o.insert(r,Je.newNoDocument(r,Y.min()));const a=oe().add(r),l=new iu(Y.min(),new Map,new Fe(ge),o,a);await HI(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),jp(s)}else await gd(s.localStore,e,!1).then(()=>_d(s,e,n)).catch(wa)}async function jM(t,e){const n=te(t),s=e.batch.batchId;try{const i=await iM(n.localStore,e);zI(n,s,null),jI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sa(n,i)}catch(i){await wa(i)}}async function zM(t,e,n){const s=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Te(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);zI(s,e,n),jI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sa(s,i)}catch(i){await wa(i)}}function jI(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function zI(t,e,n){const s=te(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||WI(t,s)})}function WI(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(DI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),jp(t))}function V_(t,e,n){for(const s of n)s instanceof UI?(t.ma.addReference(s.key,e),WM(t,s)):s instanceof BI?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||WI(t,s.key)):K()}function WM(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(U("SyncEngine","New document in limbo: "+n),t.Aa.add(s),jp(t))}function jp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new q(Le.fromString(e)),s=t.pa.next();t.Va.set(s,new LM(n)),t.Ra=t.Ra.insert(n,s),OI(t.remoteStore,new Es(ns(Zc(n.path)),s,"TargetPurposeLimboResolution",yp.ae))}}async function Sa(t,e,n){const s=te(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=xp.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ia(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,_)}}}(s.localStore,r))}async function qM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await kI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sa(n,s.ts)}}function KM(t,e){const n=te(t),s=n.Va.get(e);if(s&&s.Ia)return oe().add(s.key);{let i=oe();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function GM(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HM.bind(null,e),e.Ta.r_=xM.bind(null,e.eventManager),e.Ta.Sa=OM.bind(null,e.eventManager),e}function QM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zM.bind(null,e),e}class F_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sM(this.persistence,new tM,e.initialUser,this.serializer)}createPersistence(e){return new ZD(Np.zr,this.serializer)}createSharedClientState(e){return new uM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>L_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qM.bind(null,this.syncEngine),await PM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NM}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),s=function(r){return new pM(r)}(e.databaseInfo);return function(r,o,a,l){return new _M(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new vM(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>L_(this.syncEngine,n,0),function(){return O_.v()?new O_:new hM}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new VM(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=te(n);U("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await Ca(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new F(A.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=te(i),a=Qo(o.serializer)+"/documents",l={documents:r.map(d=>ec(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=PD(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Te(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ap(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const i=q.fromPath(s);this.mutations.push(new yI(i,this.precondition(i)))}),await async function(s,i){const r=te(s),o=Qo(r.serializer)+"/documents",a={writes:i.map(l=>RI(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=Y.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new F(A.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?St.exists(!1):St.updateTime(n):St.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new F(A.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return St.updateTime(n)}return St.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class JM{constructor(e,n,s,i,r){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.qa=s.maxAttempts,this.Ko=new Op(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new XM(this.datastore),n=this.Ka(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.$a(i)}))}).catch(s=>{this.$a(s)})})}Ka(e){try{const n=this.updateFunction(e);return!ba(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!vI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Gw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zu(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tL(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>D_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>D_(e.remoteStore,r)),t._onlineComponents=e}function eL(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eL(n))throw n;lr("Error using user provided cache. Falling back to memory cache: "+n),await Zu(t,new F_)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Zu(t,new F_);return t._offlineComponents}async function Wp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await $_(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await $_(t,new YM))),t._onlineComponents}function nL(t){return Wp(t).then(e=>e.syncEngine)}function sL(t){return Wp(t).then(e=>e.datastore)}async function nc(t){const e=await Wp(t),n=e.eventManager;return n.onListen=FM.bind(null,e.syncEngine),n.onUnlisten=UM.bind(null,e.syncEngine),n}function iL(t,e,n={}){const s=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new zp({next:d=>{o.enqueueAndForget(()=>Up(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new F(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Hp(Zc(a.path),u,{includeMetadataChanges:!0,W_:!0});return $p(r,h)}(await nc(t),t.asyncQueue,e,n,s)),s.promise}function rL(t,e,n={}){const s=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new zp({next:d=>{o.enqueueAndForget(()=>Up(r,h)),d.fromCache&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Hp(a,u,{includeMetadataChanges:!0,W_:!0});return $p(r,h)}(await nc(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function qI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oL(t,e,n,s){if(e===!0&&s===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function B_(t){if(!q.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H_(t){if(q.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qp(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new RO;switch(s.type){case"firstParty":return new kO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=U_.get(n);s&&(U("ComponentProvider","Removing Datastore"),U_.delete(n),s.terminate())}(this),Promise.resolve()}}function aL(t,e,n,s={}){var i;const r=(t=Gt(t,lu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ft.MOCK_USER;else{a=xR(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(c)}t._authCredentials=new CO(new Kw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Cs extends Pa{constructor(e,n,s){super(e,n,Zc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new q(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function lL(t,e,...n){if(t=nt(t),KI("collection","path",e),t instanceof lu){const s=Le.fromString(e,...n);return H_(s),new Cs(t,null,s)}{if(!(t instanceof wt||t instanceof Cs))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return H_(s),new Cs(t.firestore,null,s)}}function io(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Gw.V()),KI("doc","path",e),t instanceof lu){const s=Le.fromString(e,...n);return B_(s),new wt(t,null,new q(s))}{if(!(t instanceof wt||t instanceof Cs))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return B_(s),new wt(t.firestore,t instanceof Cs?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Op(this,"async_queue_retry"),this.Xa=()=>{const n=Ju();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Ju();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Dn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Ia(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Vp.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&K()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function z_(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ms extends lu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new cL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GI(this),this._firestoreClient.terminate()}}function uL(t,e){const n=typeof t=="object"?t:_f(),s=typeof t=="string"?t:e||"(default)",i=gf(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=NR("firestore");r&&aL(i,...r)}return i}function ka(t){return t._firestoreClient||GI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function GI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new HO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,qI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZM(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(bt.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=/^__.*__$/;class dL{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class QI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new $s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function YI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class uu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return sc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(YI(this.uu)&&hL.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class fL{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ru(e)}Ru(e,n,s,i=!1){return new uu({uu:e,methodName:n,Au:s,path:_t.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kp(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new fL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XI(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);Gp("Data must be an object, but it was:",o,s);const a=t0(s,o);let l,c;if(r.merge)l=new zt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=yd(e,h,n);if(!o.contains(d))throw new F(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);s0(u,d)||u.push(d)}l=new zt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new dL(new Ct(a),l,c)}class hu extends Lr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hu}}function JI(t,e,n){return new uu({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pL extends Lr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=JI(this,e,!0),s=this.Vu.map(r=>Vr(r,n)),i=new dr(s);return new bp(e.path,i)}isEqual(e){return this===e}}class mL extends Lr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=JI(this,e,!0),s=this.Vu.map(r=>Vr(r,n)),i=new fr(s);return new bp(e.path,i)}isEqual(e){return this===e}}class gL extends Lr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Go(e.serializer,hI(e.serializer,this.mu));return new bp(e.path,n)}isEqual(e){return this===e}}function ZI(t,e,n,s){const i=t.Ru(1,e,n);Gp("Data must be an object, but it was:",i,s);const r=[],o=Ct.empty();Ai(s,(l,c)=>{const u=Qp(e,l,n);c=nt(c);const h=i.Iu(u);if(c instanceof hu)r.push(u);else{const d=Vr(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new zt(r);return new QI(o,a,i.fieldTransforms)}function e0(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[yd(e,s,n)],l=[i];if(r.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(yd(e,r[d])),l.push(r[d+1]);const c=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!s0(c,a[d])){const f=a[d];let g=l[d];g=nt(g);const _=o.Iu(f);if(g instanceof hu)c.push(f);else{const v=Vr(g,_);v!=null&&(c.push(f),u.set(f,v))}}const h=new zt(c);return new QI(u,h,o.fieldTransforms)}function Vr(t,e){if(n0(t=nt(t)))return Gp("Unsupported field value:",e,t),t0(t,e);if(t instanceof Lr)return function(s,i){if(!YI(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Vr(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hI(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=We.fromDate(s);return{timestampValue:Zl(i.serializer,r)}}if(s instanceof We){const r=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zl(i.serializer,r)}}if(s instanceof cu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _i)return{bytesValue:II(i.serializer,s._byteString)};if(s instanceof wt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Pp(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${qp(s)}`)}(t,e)}function t0(t,e){const n={};return Qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(t,(s,i)=>{const r=Vr(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function n0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof cu||t instanceof _i||t instanceof wt||t instanceof Lr)}function Gp(t,e,n){if(!n0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=qp(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function yd(t,e,n){if((e=nt(e))instanceof Na)return e._internalPath;if(typeof e=="string")return Qp(t,e);throw sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _L=new RegExp("[~\\*/\\[\\]]");function Qp(t,e,n){if(e.search(_L)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Na(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}function s0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(i0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yL extends ic{data(){return super.data()}}function i0(t,e){return typeof e=="string"?Qp(t,e):e instanceof Na?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class o0{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ai(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new cu(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ep(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=Os(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);Te(PI(s));const i=new qo(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class vL extends o0{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yp extends ic{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(i0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ml extends Yp{data(e={}){return super.data(e)}}class l0{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ml(this._firestore,this._userDataWriter,s.key,s,new Hi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:EL(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){t=Gt(t,wt);const e=Gt(t.firestore,Ms);return iL(ka(e),t._key).then(n=>u0(e,t,n))}class du extends o0{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function TL(t){t=Gt(t,Pa);const e=Gt(t.firestore,Ms),n=ka(e),s=new du(e);return r0(t._query),rL(n,t._query).then(i=>new l0(e,s,t,i))}function _U(t,e,n){t=Gt(t,wt);const s=Gt(t.firestore,Ms),i=a0(t.converter,e,n);return c0(s,[XI(Kp(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,St.none())])}function yU(t,e,n,...s){t=Gt(t,wt);const i=Gt(t.firestore,Ms),r=Kp(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof Na?e0(r,"updateDoc",t._key,e,n,s):ZI(r,"updateDoc",t._key,e),c0(i,[o.toMutation(t._key,St.exists(!0))])}function Jp(t,...e){var n,s,i;t=nt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||z_(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(z_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof wt)c=Gt(t.firestore,Ms),u=Zc(t._key.path),l={next:h=>{e[o]&&e[o](u0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Gt(t,Pa);c=Gt(h.firestore,Ms),u=h._query;const d=new du(c);l={next:f=>{e[o]&&e[o](new l0(c,d,h,f))},error:e[o+1],complete:e[o+2]},r0(t._query)}return function(d,f,g,_){const v=new zp(_),T=new Hp(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>$p(await nc(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Up(await nc(d),T))}}(ka(c),u,a,l)}function c0(t,e){return function(s,i){const r=new Dn;return s.asyncQueue.enqueueAndForget(async()=>BM(await nL(s),i,r)),r.promise}(ka(t),e)}function u0(t,e,n){const s=n.docs.get(e._key),i=new du(t);return new Yp(t,i,e._key,s,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const wL={maxAttempts:5};function qr(t,e){if((t=nt(t)).firestore!==e)throw new F(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IL extends class{constructor(n,s){this._firestore=n,this._transaction=s,this._dataReader=Kp(n)}get(n){const s=qr(n,this._firestore),i=new vL(this._firestore);return this._transaction.lookup([s._key]).then(r=>{if(!r||r.length!==1)return K();const o=r[0];if(o.isFoundDocument())return new ic(this._firestore,i,o.key,o,s.converter);if(o.isNoDocument())return new ic(this._firestore,i,s._key,null,s.converter);throw K()})}set(n,s,i){const r=qr(n,this._firestore),o=a0(r.converter,s,i),a=XI(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,a),this}update(n,s,i,...r){const o=qr(n,this._firestore);let a;return a=typeof(s=nt(s))=="string"||s instanceof Na?e0(this._dataReader,"Transaction.update",o._key,s,i,r):ZI(this._dataReader,"Transaction.update",o._key,s),this._transaction.update(o._key,a),this}delete(n){const s=qr(n,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=qr(e,this._firestore),s=new du(this._firestore);return super.get(e).then(i=>new Yp(this._firestore,s,n._key,i._document,new Hi(!1,!1),n.converter))}}function bL(t,e,n){t=Gt(t,Ms);const s=Object.assign(Object.assign({},wL),n);return function(r){if(r.maxAttempts<1)throw new F(A.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,a){const l=new Dn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await sL(r);new JM(r.asyncQueue,c,a,o,l).run()}),l.promise}(ka(t),i=>e(new IL(t,i)),s)}function EU(...t){return new pL("arrayUnion",t)}function AL(...t){return new mL("arrayRemove",t)}function RL(t){return new gL("increment",t)}(function(e,n=!0){(function(i){Or=i})(Ls),Ln(new pn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ms(new SO(s.getProvider("auth-internal")),new xO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Wt(u_,"4.1.0",e),Wt(u_,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebasestorage.googleapis.com",CL="storageBucket",SL=2*60*1e3,PL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Bn{constructor(e,n,s=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function eh(t){return"storage/"+t}function kL(){const t="An unknown error occurred, please check the error payload for server response.";return new Hn(Un.UNKNOWN,t)}function NL(){return new Hn(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xL(){return new Hn(Un.CANCELED,"User canceled the upload/download.")}function OL(t){return new Hn(Un.INVALID_URL,"Invalid URL '"+t+"'.")}function DL(t){return new Hn(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function W_(t){return new Hn(Un.INVALID_ARGUMENT,t)}function d0(){return new Hn(Un.APP_DELETED,"The Firebase app was deleted.")}function ML(t){return new Hn(Un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(s.path==="")return s;throw DL(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=n===h0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${i}/${v}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<P.length;b++){const B=P[b],G=B.regex.exec(e);if(G){const he=G[B.indices.bucket];let Q=G[B.indices.path];Q||(Q=""),s=new un(he,Q),B.postModify(s);break}}if(s==null)throw OL(e);return s}}class LL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let g=!1;function _(v){g||(g=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function FL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t){return t!==void 0}function q_(t,e,n,s){if(s<e)throw W_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw W_(`Invalid value for '${t}'. Expected ${n} or less.`)}function UL(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rc||(rc={}));/**
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
 */function BL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new sl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===rc.NO_ERROR,l=r.getStatus();if(!a||BL(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===rc.ABORT;s(!1,new sl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new sl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$L(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=kL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?d0():xL();o(l)}else{const l=NL();o(l)}};this.canceled_?n(!1,new sl(!1,null,!0)):this.backoffId_=VL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function jL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KL(t,e,n,s,i,r,o=!0){const a=UL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return WL(c,e),jL(c,n),zL(c,r),qL(c,s),new HL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class oc{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new oc(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QL(this._location.path)}get storage(){return this._service}get parent(){const e=GL(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new oc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ML(e)}}function K_(t,e){const n=e==null?void 0:e[CL];return n==null?null:un.makeFromBucketSpec(n,t)}class YL{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=h0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SL,this._maxUploadRetryTime=PL,this._requests=new Set,i!=null?this._bucket=un.makeFromBucketSpec(i,this._host):this._bucket=K_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=K_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oc(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new LL(d0());{const o=KL(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const G_="@firebase/storage",Q_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="storage";function JL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new YL(n,s,i,e,Ls)}function ZL(){Ln(new pn(XL,JL,"PUBLIC").setMultipleInstances(!0)),Wt(G_,Q_,""),Wt(G_,Q_,"esm2017")}ZL();const th=new WeakMap;function f0(t,e){return th.has(e)||th.set(e,t||{f:{},r:{},s:{},u:{}}),th.get(e)}function eV(t,e,n,s){if(!t)return n;const[i,r]=p0(t);if(!i)return n;const o=f0(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function tV(t,e,n,s){if(!t)return;const[i,r]=p0(t);if(!i)return;const o=f0(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Cn),a}function p0(t){return Rk(t)||Ck(t)?["f",t.path]:Sk(t)?["r",t.toString()]:Pk(t)?["s",t.toString()]:[]}const nh=new WeakMap;function nV(t,e,n){const s=aa();nh.has(s)||nh.set(s,new Map);const i=nh.get(s),r=tV(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Cn}const sV={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function vd(t,e,n,s){if(!bk(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof We||g instanceof cu)h[f]=g;else if(Cf(g)){const _=c+f;h[f]=_ in n?l[f]:g.path,d[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let _=0;_<g.length;_++){const v=g[_];v&&v.path in r&&(h[f][_]=r[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else Ti(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",i),i}const Zp={reset:!1,wait:!0,maxRefDepth:2,converter:sV,snapshotOptions:{serverTimestamps:"estimate"}};function ac(t){for(const e in t)t[e].unsub()}function Ed(t,e,n,s,i,r,o,a,l){const[c,u]=vd(s.data(t.snapshotOptions),Rf(e,n),i,t);r.set(e,n,c),Td(t,e,n,i,u,r,o,a,l)}function iV({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Cn;return a.once?Xp(t).then(u=>{u.exists()?Ed(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Jp(t,u=>{u.exists()?Ed(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),ac(l)}}function Td(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const v=s[_],T=i[_],R=`${n}.${_}`;if(f[R]=!0,v)if(v.path!==T.path)v.unsub();else return;s[_]={data:()=>Rf(e,R),unsub:iV({ref:T,target:e,path:R,depth:o,ops:r,resolve:g.bind(null,R),reject:l},t),path:T.path}})}function rV(t,e,n,s,i,r){const o=Object.assign({},Zp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Mt(c?[]:t.value);c||n.set(t,h,[]);const f=s;let g,_=Cn;const v=[],T={added:({newIndex:P,doc:b})=>{v.splice(P,0,Object.create(null));const B=v[P],[G,he]=vd(b.data(l),void 0,B,o);n.add(Re(d),P,G),Td(o,d,`${h}.${P}`,B,he,n,0,s.bind(null,b),i)},modified:({oldIndex:P,newIndex:b,doc:B})=>{const G=Re(d),he=v[P],Q=G[P],[ne,Ie]=vd(B.data(l),Q,he,o);v.splice(b,0,he),n.remove(G,P),n.add(G,b,ne),Td(o,d,`${h}.${b}`,he,Ie,n,0,s,i)},removed:({oldIndex:P})=>{const b=Re(d);n.remove(b,P),ac(v.splice(P,1)[0])}};function R(P){const b=P.docChanges(a);if(!g&&b.length){g=!0;let B=0;const G=b.length,he=Object.create(null);for(let Q=0;Q<G;Q++)he[b[Q].doc.id]=!0;s=Q=>{Q&&Q.id in he&&++B>=G&&(c&&(n.set(t,h,Re(d)),d=t),f(Re(d)),s=Cn)}}b.forEach(B=>{T[B.type](B)}),b.length||(c&&(n.set(t,h,Re(d)),d=t),s(Re(d)))}return u?TL(e).then(R).catch(i):_=Jp(e,R,i),P=>{if(_(),P){const b=typeof P=="function"?P():[];n.set(t,h,b)}v.forEach(ac)}}function oV(t,e,n,s,i,r){const o=Object.assign({},Zp,r),a="value",l=Object.create(null);s=kk(s,()=>Rf(t,a));let c=Cn;function u(h){h.exists()?Ed(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Xp(e).then(u).catch(i):c=Jp(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}ac(l)}}const Y_=Symbol();function m0(t,e){let n=Cn;const s=Object.assign({},Zp,e),i=Re(t),r=s.target||Mt();xk()&&(s.once=!0);const o=eV(i,s.ssrKey,Y_,aa()),a=o!==Y_;a&&(r.value=o);let l=!a;const c=Mt(!1),u=Mt(),h=tv(),d=Gd();let f=Cn;function g(){let T=Re(t);const R=new Promise((P,b)=>{if(n(s.reset),!T)return n=Cn,P(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Cf(T)?oV:rV)(r,T,aV,P,b,s)}).catch(P=>(h.value===R&&(u.value=P),Promise.reject(P))).finally(()=>{h.value===R&&(c.value=!1)});h.value=R}let _=Cn;$e(t)&&(_=si(t,g)),g(),i&&(f=nV(h.value,i,s.ssrKey)),Rv()&&fv(()=>h.value),d&&$y(v);function v(T=s.reset){_(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const aV={set:(t,e,n)=>wk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function lV(t,e){return m0(t,{target:Mt([]),...e})}function cV(t,e){return m0(t,e)}function uV(t){return(e,n)=>{const s=Ok(e,n).run(()=>Mt(t));xE.set(e,s),Dk(s,e)}}function TU(t){return Tk?SE(aa(t)):null}function hV(t,{firebaseApp:e,modules:n=[]}){t.provide(NE,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let g0;const fu=t=>g0=t,_0=Symbol();function wd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vo||(vo={}));function dV(){const t=Kd(!0),e=t.run(()=>Mt({}));let n=[],s=[];const i=_c({install(r){fu(i),i._a=r,r.provide(_0,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!GP?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const y0=()=>{};function X_(t,e,n,s=y0){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Gd()&&$y(i),i}function Oi(t,...e){t.slice().forEach(n=>{n(...e)})}const fV=t=>t();function Id(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];wd(i)&&wd(s)&&t.hasOwnProperty(n)&&!$e(s)&&!ws(s)?t[n]=Id(i,s):t[n]=s}return t}const pV=Symbol();function mV(t){return!wd(t)||!t.hasOwnProperty(pV)}const{assign:ds}=Object;function gV(t){return!!($e(t)&&t.effect)}function _V(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Hb(n.state.value[t]);return ds(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=_c(jt(()=>{fu(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=v0(t,c,e,n,s,!0),l}function v0(t,e,n={},s,i,r){let o;const a=ds({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Mt({});let _;function v(Q){let ne;c=u=!1,typeof Q=="function"?(Q(s.state.value[t]),ne={type:vo.patchFunction,storeId:t,events:f}):(Id(s.state.value[t],Q),ne={type:vo.patchObject,payload:Q,storeId:t,events:f});const Ie=_=Symbol();sf().then(()=>{_===Ie&&(c=!0)}),u=!0,Oi(h,ne,s.state.value[t])}const T=r?function(){const{state:ne}=n,Ie=ne?ne():{};this.$patch(ut=>{ds(ut,Ie)})}:y0;function R(){o.stop(),h=[],d=[],s._s.delete(t)}function P(Q,ne){return function(){fu(s);const Ie=Array.from(arguments),ut=[],Ft=[];function Xt(me){ut.push(me)}function Bs(me){Ft.push(me)}Oi(d,{args:Ie,name:Q,store:B,after:Xt,onError:Bs});let Jt;try{Jt=ne.apply(this&&this.$id===t?this:B,Ie)}catch(me){throw Oi(Ft,me),me}return Jt instanceof Promise?Jt.then(me=>(Oi(ut,me),me)).catch(me=>(Oi(Ft,me),Promise.reject(me))):(Oi(ut,Jt),Jt)}}const b={_p:s,$id:t,$onAction:X_.bind(null,d),$patch:v,$reset:T,$subscribe(Q,ne={}){const Ie=X_(h,Q,ne.detached,()=>ut()),ut=o.run(()=>si(()=>s.state.value[t],Ft=>{(ne.flush==="sync"?u:c)&&Q({storeId:t,type:vo.direct,events:f},Ft)},ds({},l,ne)));return Ie},$dispose:R},B=ta(b);s._s.set(t,B);const G=s._a&&s._a.runWithContext||fV,he=s._e.run(()=>(o=Kd(),G(()=>o.run(e))));for(const Q in he){const ne=he[Q];if($e(ne)&&!gV(ne)||ws(ne))r||(g&&mV(ne)&&($e(ne)?ne.value=g[Q]:Id(ne,g[Q])),s.state.value[t][Q]=ne);else if(typeof ne=="function"){const Ie=P(Q,ne);he[Q]=Ie,a.actions[Q]=ne}}return ds(B,he),ds(pe(B),he),Object.defineProperty(B,"$state",{get:()=>s.state.value[t],set:Q=>{v(ne=>{ds(ne,Q)})}}),s._p.forEach(Q=>{ds(B,o.run(()=>Q({store:B,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(B.$state,g),c=!0,u=!0,B}function yV(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=SA();return a=a||(c?Lt(_0,null):null),a&&fu(a),a=g0,a._s.has(s)||(r?v0(s,e,i,a):_V(s,i,a)),a._s.get(s)}return o.$id=s,o}const E0=jv({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),Ks=uL(E0);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Li=typeof window<"u";function vV(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function sh(t,e){const n={};for(const s in e){const i=e[s];n[s]=_n(i)?i.map(t):t(i)}return n}const Eo=()=>{},_n=Array.isArray,EV=/\/$/,TV=t=>t.replace(EV,"");function ih(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AV(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function wV(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function J_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function IV(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&gr(e.matched[s],n.matched[i])&&T0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bV(t[n],e[n]))return!1;return!0}function bV(t,e){return _n(t)?Z_(t,e):_n(e)?Z_(e,t):t===e}function Z_(t,e){return _n(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function AV(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Yo;(function(t){t.pop="pop",t.push="push"})(Yo||(Yo={}));var To;(function(t){t.back="back",t.forward="forward",t.unknown=""})(To||(To={}));function RV(t){if(!t)if(Li){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),TV(t)}const CV=/^[^#]+#/;function SV(t,e){return t.replace(CV,"#")+e}function PV(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const pu=()=>({left:window.pageXOffset,top:window.pageYOffset});function kV(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=PV(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ey(t,e){return(history.state?history.state.position-e:-1)+t}const bd=new Map;function NV(t,e){bd.set(t,e)}function xV(t){const e=bd.get(t);return bd.delete(t),e}let OV=()=>location.protocol+"//"+location.host;function w0(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),J_(l,"")}return J_(n,t)+s+i}function DV(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=w0(t,location),g=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=_?d.position-_.position:0}else s(f);i.forEach(T=>{T(n.value,g,{delta:v,type:Yo.pop,direction:v?v>0?To.forward:To.back:To.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:pu()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ty(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?pu():null}}function MV(t){const{history:e,location:n}=window,s={value:w0(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:OV()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,ty(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ee({},i.value,e.state,{forward:l,scroll:pu()});r(u.current,u,!0);const h=Ee({},ty(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function LV(t){t=RV(t);const e=MV(t),n=DV(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ee({location:"",base:t,go:s,createHref:SV.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function VV(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),LV(t)}function FV(t){return typeof t=="string"||t&&typeof t=="object"}function I0(t){return typeof t=="string"||typeof t=="symbol"}const hs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},b0=Symbol("");var ny;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ny||(ny={}));function _r(t,e){return Ee(new Error,{type:t,[b0]:!0},e)}function zn(t,e){return t instanceof Error&&b0 in t&&(e==null||!!(t.type&e))}const sy="[^/]+?",$V={sensitive:!1,strict:!1,start:!0,end:!0},UV=/[.+*?^${}()[\]/\\]/g;function BV(t,e){const n=Ee({},$V,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(UV,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:_,optional:v,regexp:T}=d;r.push({name:g,repeatable:_,optional:v});const R=T||sy;if(R!==sy){f+=10;try{new RegExp(`(${R})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+b.message)}}let P=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(P=v&&c.length<2?`(?:/${P})`:"/"+P),v&&(P+="?"),i+=P,f+=20,v&&(f+=-8),_&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:v}=f,T=g in c?c[g]:"";if(_n(T)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=_n(T)?T.join("/"):T;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function HV(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jV(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=HV(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(iy(s))return 1;if(iy(i))return-1}return i.length-s.length}function iy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zV={type:0,value:""},WV=/[a-zA-Z0-9_]/;function qV(t){if(!t)return[[]];if(t==="/")return[[zV]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:WV.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function KV(t,e,n){const s=BV(qV(t.path),n),i=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function GV(t,e){const n=[],s=new Map;e=ay({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,g=QV(u);g.aliasOf=d&&d.record;const _=ay(e,u),v=[g];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of P)v.push(Ee({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let T,R;for(const P of v){const{path:b}=P;if(h&&b[0]!=="/"){const B=h.record.path,G=B[B.length-1]==="/"?"":"/";P.path=h.record.path+(b&&G+b)}if(T=KV(P,h,_),d?d.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),f&&u.name&&!oy(T)&&o(u.name)),g.children){const B=g.children;for(let G=0;G<B.length;G++)r(B[G],T,d&&d.children[G])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return R?()=>{o(R)}:Eo}function o(u){if(I0(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&jV(u,n[h])>=0&&(u.record.path!==n[h].record.path||!A0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!oy(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},g,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw _r(1,{location:u});_=d.record.name,f=Ee(ry(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&ry(u.params,d.keys.map(R=>R.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(R=>R.re.test(g)),d&&(f=d.parse(g),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw _r(1,{location:u,currentLocation:h});_=d.record.name,f=Ee({},h.params,u.params),g=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:g,params:f,matched:v,meta:XV(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ry(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function QV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function oy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XV(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function ay(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function A0(t,e){return e.children.some(n=>n===t||A0(t,n))}const R0=/#/g,JV=/&/g,ZV=/\//g,eF=/=/g,tF=/\?/g,C0=/\+/g,nF=/%5B/g,sF=/%5D/g,S0=/%5E/g,iF=/%60/g,P0=/%7B/g,rF=/%7C/g,k0=/%7D/g,oF=/%20/g;function em(t){return encodeURI(""+t).replace(rF,"|").replace(nF,"[").replace(sF,"]")}function aF(t){return em(t).replace(P0,"{").replace(k0,"}").replace(S0,"^")}function Ad(t){return em(t).replace(C0,"%2B").replace(oF,"+").replace(R0,"%23").replace(JV,"%26").replace(iF,"`").replace(P0,"{").replace(k0,"}").replace(S0,"^")}function lF(t){return Ad(t).replace(eF,"%3D")}function cF(t){return em(t).replace(R0,"%23").replace(tF,"%3F")}function uF(t){return t==null?"":cF(t).replace(ZV,"%2F")}function lc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hF(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(C0," "),o=r.indexOf("="),a=lc(o<0?r:r.slice(0,o)),l=o<0?null:lc(r.slice(o+1));if(a in e){let c=e[a];_n(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ly(t){let e="";for(let n in t){const s=t[n];if(n=lF(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_n(s)?s.map(r=>r&&Ad(r)):[s&&Ad(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function dF(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_n(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const fF=Symbol(""),cy=Symbol(""),mu=Symbol(""),tm=Symbol(""),Rd=Symbol("");function Kr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ps(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(_r(4,{from:n,to:e})):h instanceof Error?a(h):FV(h)?a(_r(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rh(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(pF(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ps(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=vV(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ps(d,n,s,r,o)()}))}}return i}function pF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uy(t){const e=Lt(mu),n=Lt(tm),s=jt(()=>e.resolve(Re(t.to))),i=jt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gr.bind(null,u));if(d>-1)return d;const f=hy(l[c-2]);return c>1&&hy(u)===f&&h[h.length-1].path!==f?h.findIndex(gr.bind(null,l[c-2])):d}),r=jt(()=>i.value>-1&&yF(n.params,s.value.params)),o=jt(()=>i.value>-1&&i.value===n.matched.length-1&&T0(n.params,s.value.params));function a(l={}){return _F(l)?e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Eo):Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const mF=Ei({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uy,setup(t,{slots:e}){const n=ta(uy(t)),{options:s}=Lt(mu),i=jt(()=>({[dy(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dy(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Pv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),gF=mF;function _F(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yF(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!_n(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function hy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dy=(t,e,n)=>t??e??n,vF=Ei({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Lt(Rd),i=jt(()=>t.route||s.value),r=Lt(cy,0),o=jt(()=>{let c=Re(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=jt(()=>i.value.matched[o.value]);rl(cy,jt(()=>o.value+1)),rl(fF,a),rl(Rd,i);const l=Mt();return si(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!gr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return fy(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Pv(d,Ee({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fy(n.default,{Component:v,route:c})||v}}});function fy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const N0=vF;function EF(t){const e=GV(t.routes,t),n=t.parseQuery||hF,s=t.stringifyQuery||ly,i=t.history,r=Kr(),o=Kr(),a=Kr(),l=tv(hs);let c=hs;Li&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sh.bind(null,w=>""+w),h=sh.bind(null,uF),d=sh.bind(null,lc);function f(w,V){let O,H;return I0(w)?(O=e.getRecordMatcher(w),H=V):H=w,e.addRoute(H,O)}function g(w){const V=e.getRecordMatcher(w);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function T(w,V){if(V=Ee({},V||l.value),typeof w=="string"){const y=ih(n,w,V.path),E=e.resolve({path:y.path},V),I=i.createHref(y.fullPath);return Ee(y,E,{params:d(E.params),hash:lc(y.hash),redirectedFrom:void 0,href:I})}let O;if("path"in w)O=Ee({},w,{path:ih(n,w.path,V.path).path});else{const y=Ee({},w.params);for(const E in y)y[E]==null&&delete y[E];O=Ee({},w,{params:h(y)}),V.params=h(V.params)}const H=e.resolve(O,V),ye=w.hash||"";H.params=u(d(H.params));const p=wV(s,Ee({},w,{hash:aF(ye),path:H.path})),m=i.createHref(p);return Ee({fullPath:p,hash:ye,query:s===ly?dF(w.query):w.query||{}},H,{redirectedFrom:void 0,href:m})}function R(w){return typeof w=="string"?ih(n,w,l.value.path):Ee({},w)}function P(w,V){if(c!==w)return _r(8,{from:V,to:w})}function b(w){return he(w)}function B(w){return b(Ee(R(w),{replace:!0}))}function G(w){const V=w.matched[w.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let H=typeof O=="function"?O(w):O;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=R(H):{path:H},H.params={}),Ee({query:w.query,hash:w.hash,params:"path"in H?{}:w.params},H)}}function he(w,V){const O=c=T(w),H=l.value,ye=w.state,p=w.force,m=w.replace===!0,y=G(O);if(y)return he(Ee(R(y),{state:typeof y=="object"?Ee({},ye,y.state):ye,force:p,replace:m}),V||O);const E=O;E.redirectedFrom=V;let I;return!p&&IV(s,H,O)&&(I=_r(16,{to:E,from:H}),En(H,H,!0,!1)),(I?Promise.resolve(I):Ie(E,H)).catch(C=>zn(C)?zn(C,2)?C:as(C):_e(C,E,H)).then(C=>{if(C){if(zn(C,2))return he(Ee({replace:m},R(C.to),{state:typeof C.to=="object"?Ee({},ye,C.to.state):ye,force:p}),V||E)}else C=Ft(E,H,!0,m,ye);return ut(E,H,C),C})}function Q(w,V){const O=P(w,V);return O?Promise.reject(O):Promise.resolve()}function ne(w){const V=Si.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(w):w()}function Ie(w,V){let O;const[H,ye,p]=TF(w,V);O=rh(H.reverse(),"beforeRouteLeave",w,V);for(const y of H)y.leaveGuards.forEach(E=>{O.push(ps(E,w,V))});const m=Q.bind(null,w,V);return O.push(m),ht(O).then(()=>{O=[];for(const y of r.list())O.push(ps(y,w,V));return O.push(m),ht(O)}).then(()=>{O=rh(ye,"beforeRouteUpdate",w,V);for(const y of ye)y.updateGuards.forEach(E=>{O.push(ps(E,w,V))});return O.push(m),ht(O)}).then(()=>{O=[];for(const y of p)if(y.beforeEnter)if(_n(y.beforeEnter))for(const E of y.beforeEnter)O.push(ps(E,w,V));else O.push(ps(y.beforeEnter,w,V));return O.push(m),ht(O)}).then(()=>(w.matched.forEach(y=>y.enterCallbacks={}),O=rh(p,"beforeRouteEnter",w,V),O.push(m),ht(O))).then(()=>{O=[];for(const y of o.list())O.push(ps(y,w,V));return O.push(m),ht(O)}).catch(y=>zn(y,8)?y:Promise.reject(y))}function ut(w,V,O){a.list().forEach(H=>ne(()=>H(w,V,O)))}function Ft(w,V,O,H,ye){const p=P(w,V);if(p)return p;const m=V===hs,y=Li?history.state:{};O&&(H||m?i.replace(w.fullPath,Ee({scroll:m&&y&&y.scroll},ye)):i.push(w.fullPath,ye)),l.value=w,En(w,V,O,m),as()}let Xt;function Bs(){Xt||(Xt=i.listen((w,V,O)=>{if(!Da.listening)return;const H=T(w),ye=G(H);if(ye){he(Ee(ye,{replace:!0}),H).catch(Eo);return}c=H;const p=l.value;Li&&NV(ey(p.fullPath,O.delta),pu()),Ie(H,p).catch(m=>zn(m,12)?m:zn(m,2)?(he(m.to,H).then(y=>{zn(y,20)&&!O.delta&&O.type===Yo.pop&&i.go(-1,!1)}).catch(Eo),Promise.reject()):(O.delta&&i.go(-O.delta,!1),_e(m,H,p))).then(m=>{m=m||Ft(H,p,!1),m&&(O.delta&&!zn(m,8)?i.go(-O.delta,!1):O.type===Yo.pop&&zn(m,20)&&i.go(-1,!1)),ut(H,p,m)}).catch(Eo)}))}let Jt=Kr(),me=Kr(),Se;function _e(w,V,O){as(w);const H=me.list();return H.length?H.forEach(ye=>ye(w,V,O)):console.error(w),Promise.reject(w)}function jn(){return Se&&l.value!==hs?Promise.resolve():new Promise((w,V)=>{Jt.add([w,V])})}function as(w){return Se||(Se=!w,Bs(),Jt.list().forEach(([V,O])=>w?O(w):V()),Jt.reset()),w}function En(w,V,O,H){const{scrollBehavior:ye}=t;if(!Li||!ye)return Promise.resolve();const p=!O&&xV(ey(w.fullPath,0))||(H||!O)&&history.state&&history.state.scroll||null;return sf().then(()=>ye(w,V,p)).then(m=>m&&kV(m)).catch(m=>_e(m,w,V))}const xt=w=>i.go(w);let Ci;const Si=new Set,Da={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:_,resolve:T,options:t,push:b,replace:B,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:jn,install(w){const V=this;w.component("RouterLink",gF),w.component("RouterView",N0),w.config.globalProperties.$router=V,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),Li&&!Ci&&l.value===hs&&(Ci=!0,b(i.location).catch(ye=>{}));const O={};for(const ye in hs)Object.defineProperty(O,ye,{get:()=>l.value[ye],enumerable:!0});w.provide(mu,V),w.provide(tm,Yy(O)),w.provide(Rd,l);const H=w.unmount;Si.add(w),w.unmount=function(){Si.delete(w),Si.size<1&&(c=hs,Xt&&Xt(),Xt=null,l.value=hs,Ci=!1,Se=!1),H()}}};function ht(w){return w.reduce((V,O)=>V.then(()=>ne(O)),Promise.resolve())}return Da}function TF(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>gr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>gr(c,l))||i.push(l))}return[n,s,i]}function wF(){return Lt(mu)}function IF(){return Lt(tm)}const x0=yV("settings",()=>({installEvent:Mt()})),bF=Ei({__name:"App",setup(t){const e=Nc(),n=wF(),s=IF();return si(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),window.addEventListener("beforeinstallprompt",i=>{x0().installEvent=i}),(i,r)=>(Be(),ks(Re(N0)))}}),AF="modulepreload",RF=function(t){return"/"+t},py={},Gr=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=RF(r),r in py)return;py[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":AF,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function j(t,e,n,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=t=>e=>typeof e=="function"?((n,s)=>(customElements.define(n,s),s))(t,e):((n,s)=>{const{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const CF=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},SF=(t,e,n)=>{e.constructor.createProperty(n,t)};function ke(t){return(e,n)=>n!==void 0?SF(t,e,n):CF(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Us(t){return ke({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O0=({finisher:t,descriptor:e})=>(n,s)=>{var i;if(s===void 0){const r=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,s,e(s)),t==null||t(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(t,e){return O0({descriptor:n=>{const s={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;s.get=function(){var r,o;return this[i]===void 0&&(this[i]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oh;const PF=((oh=window.HTMLSlotElement)===null||oh===void 0?void 0:oh.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function kF(t){const{slot:e,selector:n}=t??{};return O0({descriptor:s=>({get(){var i;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r),a=o!=null?PF(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=window,nm=gl.ShadowRoot&&(gl.ShadyCSS===void 0||gl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sm=Symbol(),my=new WeakMap;let D0=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==sm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(nm&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=my.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&my.set(n,e))}return e}toString(){return this.cssText}};const NF=t=>new D0(typeof t=="string"?t:t+"",void 0,sm),vn=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new D0(n,t,sm)},xF=(t,e)=>{nm?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const s=document.createElement("style"),i=gl.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,t.appendChild(s)})},gy=nm?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return NF(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ah;const cc=window,_y=cc.trustedTypes,OF=_y?_y.emptyScript:"",yy=cc.reactiveElementPolyfillSupport,Cd={toAttribute(t,e){switch(e){case Boolean:t=t?OF:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},M0=(t,e)=>e!==t&&(e==e||t==t),lh={attribute:!0,type:String,converter:Cd,reflect:!1,hasChanged:M0},Sd="finalized";let Vi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,s)=>{const i=this._$Ep(s,n);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,n=lh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,s){return{get(){return this[n]},set(i){const r=this[e];this[n]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||lh}static finalize(){if(this.hasOwnProperty(Sd))return!1;this[Sd]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,s=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of s)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)n.unshift(gy(i))}else e!==void 0&&n.push(gy(e));return n}static _$Ep(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,s;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xF(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostConnected)===null||s===void 0?void 0:s.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostDisconnected)===null||s===void 0?void 0:s.call(n)})}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$EO(e,n,s=lh){var i;const r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:Cd).toAttribute(n,s.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var s;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:Cd;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||M0)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let n=!1;const s=this._$AL;try{n=this.shouldUpdate(s),n?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(s)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,s)=>this._$EO(s,this[s],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Vi[Sd]=!0,Vi.elementProperties=new Map,Vi.elementStyles=[],Vi.shadowRootOptions={mode:"open"},yy==null||yy({ReactiveElement:Vi}),((ah=cc.reactiveElementVersions)!==null&&ah!==void 0?ah:cc.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ch;const uc=window,yr=uc.trustedTypes,vy=yr?yr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pd="$lit$",vs=`lit$${(Math.random()+"").slice(9)}$`,L0="?"+vs,DF=`<${L0}>`,yi=document,Xo=()=>yi.createComment(""),Jo=t=>t===null||typeof t!="object"&&typeof t!="function",V0=Array.isArray,MF=t=>V0(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",uh=`[ 	
\f\r]`,Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ey=/-->/g,Ty=/>/g,zs=RegExp(`>|${uh}(?:([^\\s"'>=/]+)(${uh}*=${uh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wy=/'/g,Iy=/"/g,F0=/^(?:script|style|textarea|title)$/i,LF=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Dt=LF(1),vi=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),by=new WeakMap,ti=yi.createTreeWalker(yi,129,null,!1);function $0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return vy!==void 0?vy.createHTML(e):e}const VF=(t,e)=>{const n=t.length-1,s=[];let i,r=e===2?"<svg>":"",o=Qr;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===Qr?u[1]==="!--"?o=Ey:u[1]!==void 0?o=Ty:u[2]!==void 0?(F0.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=zs):u[3]!==void 0&&(o=zs):o===zs?u[0]===">"?(o=i??Qr,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?zs:u[3]==='"'?Iy:wy):o===Iy||o===wy?o=zs:o===Ey||o===Ty?o=Qr:(o=zs,i=void 0);const f=o===zs&&t[a+1].startsWith("/>")?" ":"";r+=o===Qr?l+DF:h>=0?(s.push(c),l.slice(0,h)+Pd+l.slice(h)+vs+f):l+vs+(h===-2?(s.push(void 0),a):f)}return[$0(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),s]};class Zo{constructor({strings:e,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=VF(e,n);if(this.el=Zo.createElement(c,s),ti.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=ti.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(Pd)||d.startsWith(vs)){const f=u[o++];if(h.push(d),f!==void 0){const g=i.getAttribute(f.toLowerCase()+Pd).split(vs),_=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:_[2],strings:g,ctor:_[1]==="."?$F:_[1]==="?"?BF:_[1]==="@"?HF:gu})}else l.push({type:6,index:r})}for(const d of h)i.removeAttribute(d)}if(F0.test(i.tagName)){const h=i.textContent.split(vs),d=h.length-1;if(d>0){i.textContent=yr?yr.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],Xo()),ti.nextNode(),l.push({type:2,index:++r});i.append(h[d],Xo())}}}else if(i.nodeType===8)if(i.data===L0)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(vs,h+1))!==-1;)l.push({type:7,index:r}),h+=vs.length-1}r++}}static createElement(e,n){const s=yi.createElement("template");return s.innerHTML=e,s}}function vr(t,e,n=t,s){var i,r,o,a;if(e===vi)return e;let l=s!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[s]:n._$Cl;const c=Jo(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,s)),s!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:n._$Cl=l),l!==void 0&&(e=vr(t,l._$AS(t,e.values),l,s)),e}class FF{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:s},parts:i}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:yi).importNode(s,!0);ti.currentNode=r;let o=ti.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new xa(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new jF(o,this,e)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=ti.nextNode(),a++)}return ti.currentNode=yi,r}v(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}}class xa{constructor(e,n,s,i){var r;this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=vr(this,e,n),Jo(e)?e===se||e==null||e===""?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==vi&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):MF(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==se&&Jo(this._$AH)?this._$AA.nextSibling.data=e:this.$(yi.createTextNode(e)),this._$AH=e}g(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Zo.createElement($0(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(s);else{const o=new FF(r,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(e){let n=by.get(e.strings);return n===void 0&&by.set(e.strings,n=new Zo(e)),n}T(e){V0(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of e)i===n.length?n.push(s=new xa(this.k(Xo()),this.k(Xo()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class gu{constructor(e,n,s,i,r){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=se}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=vr(this,e,n,0),o=!Jo(e)||e!==this._$AH&&e!==vi,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=vr(this,a[s+l],n,l),c===vi&&(c=this._$AH[l]),o||(o=!Jo(c)||c!==this._$AH[l]),c===se?e=se:e!==se&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $F extends gu{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}const UF=yr?yr.emptyScript:"";class BF extends gu{constructor(){super(...arguments),this.type=4}j(e){e&&e!==se?this.element.setAttribute(this.name,UF):this.element.removeAttribute(this.name)}}class HF extends gu{constructor(e,n,s,i,r){super(e,n,s,i,r),this.type=5}_$AI(e,n=this){var s;if((e=(s=vr(this,e,n,0))!==null&&s!==void 0?s:se)===vi)return;const i=this._$AH,r=e===se&&i!==se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==se&&(i===se||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class jF{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){vr(this,e)}}const Ay=uc.litHtmlPolyfillSupport;Ay==null||Ay(Zo,xa),((ch=uc.litHtmlVersions)!==null&&ch!==void 0?ch:uc.litHtmlVersions=[]).push("2.8.0");const zF=(t,e,n)=>{var s,i;const r=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new xa(e.insertBefore(Xo(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hh,dh;let Qt=class extends Vi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const s=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=s.firstChild),s}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zF(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return vi}};Qt.finalized=!0,Qt._$litElement$=!0,(hh=globalThis.litElementHydrateSupport)===null||hh===void 0||hh.call(globalThis,{LitElement:Qt});const Ry=globalThis.litElementPolyfillSupport;Ry==null||Ry({LitElement:Qt});((dh=globalThis.litElementVersions)!==null&&dh!==void 0?dh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class WF extends Qt{render(){return Dt`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const qF=vn`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let kd=class extends WF{};kd.styles=[qF];kd=j([os("md-elevation")],kd);const U0=t=>(Tc("data-v-eabfc1cc"),t=t(),wc(),t),KF=U0(()=>Ae("md-elevation",null,null,-1)),GF={class:"title headline-large"},QF={class:"content body-large"},YF={key:1,class:"card"},XF=U0(()=>Ae("md-elevation",null,null,-1)),JF={class:"title headline-large"},ZF={class:"content body-large"},e$=Ei({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const s=af("RouterLink");return t.path?(Be(),ks(s,{key:0,to:t.path,class:"route card"},{default:rn(()=>[Ae("div",null,[KF,Ae("div",GF,[Ba(e.$slots,"title",{},void 0,!0)]),Ae("div",QF,[Ba(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):(Be(),Ut("div",YF,[XF,Ae("div",JF,[Ba(e.$slots,"title",{},void 0,!0)]),Ae("div",ZF,[Ba(e.$slots,"content",{},void 0,!0)])]))}}});const _u=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},fh=_u(e$,[["__scopeId","data-v-eabfc1cc"]]),t$=t=>(Tc("data-v-09829f4c"),t=t(),wc(),t),n$=["src"],s$=t$(()=>Ae("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),i$=Ei({__name:"AccountImage",setup(t){var s;const e=Nc(),n=Mt((s=e.value)==null?void 0:s.providerData[0].photoURL);return(i,r)=>{const o=af("RouterLink");return Be(),Ut("div",null,[Re(e)?(Be(),ks(o,{key:0,to:"/myAccount"},{default:rn(()=>[Ae("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,n$)]),_:1})):(Be(),ks(o,{key:1,to:"/login"},{default:rn(()=>[s$]),_:1}))])}}});const r$=_u(i$,[["__scopeId","data-v-09829f4c"]]),Cy=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class o$ extends Qt{render(){return Dt`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const a$=vn`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Nd=class extends o${};Nd.styles=[a$];Nd=j([os("md-icon")],Nd);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const B0=Symbol("attachableController");let _l;_l=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[B0])==null||e.hostConnected()});class H0{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[B0]=this,_l==null||_l.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l$=["focusin","focusout","pointerdown"];class im extends Qt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new H0(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[Sy]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Sy]=!0}}onControlChange(e,n){for(const s of l$)e==null||e.removeEventListener(s,this),n==null||n.addEventListener(s,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}j([ke({type:Boolean,reflect:!0})],im.prototype,"visible",void 0);j([ke({type:Boolean,reflect:!0})],im.prototype,"inward",void 0);const Sy=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const c$=vn`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let xd=class extends im{};xd.styles=[c$];xd=j([os("md-focus-ring")],xd);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u$={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h$=t=>(...e)=>({_$litDirective$:t,values:e});let d$=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yu=h$(class extends d${constructor(t){var e;if(super(t),t.type!==u$.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const i=t.element.classList;this.it.forEach(r=>{r in e||(i.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||!((s=this.nt)===null||s===void 0)&&s.has(r)||(o?(i.add(r),this.it.add(r)):(i.remove(r),this.it.delete(r)))}return vi}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ea={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f$=450,Py=225,p$=.2,m$=10,g$=75,_$=.35,y$="::after",v$="forwards";var Rt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Rt||(Rt={}));const E$=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],T$=150;class Oa extends Qt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Rt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new H0(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Dt`<div class="surface ${yu(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Rt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Rt.HOLDING){this.state=Rt.WAITING_FOR_CLICK;return}if(this.state===Rt.TOUCH_DELAY){this.state=Rt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Rt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Rt.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,T$)}),this.state===Rt.TOUCH_DELAY&&(this.state=Rt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Rt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Rt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),s=Math.max(e,n),i=Math.max(_$*s,g$),r=Math.floor(s*p$),a=Math.sqrt(n**2+e**2)+m$;this.initialSize=r,this.rippleScale=`${(a+i)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:s}=window,{left:i,top:r}=this.getBoundingClientRect(),o=n+i,a=s+r,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:s}=this.getBoundingClientRect(),i={x:(s-this.initialSize)/2,y:(n-this.initialSize)/2};let r;return e instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(e):r={x:s/2,y:n/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:i}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:s}=this.getTranslationCoordinates(e),i=`${n.x}px, ${n.y}px`,r=`${s.x}px, ${s.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:y$,duration:f$,easing:ea.STANDARD,fill:v$})}async endPressAnimation(){this.state=Rt.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=Py){this.pressed=!1;return}await new Promise(s=>{setTimeout(s,Py-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:s,left:i,bottom:r,right:o}=this.getBoundingClientRect();return e>=i&&e<=o&&n>=s&&n<=r}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const s of E$)e==null||e.removeEventListener(s,this),n==null||n.addEventListener(s,this)}}j([ke({type:Boolean,reflect:!0})],Oa.prototype,"disabled",void 0);j([Us()],Oa.prototype,"hovered",void 0);j([Us()],Oa.prototype,"pressed",void 0);j([yn(".surface")],Oa.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const w$=vn`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Od=class extends Oa{};Od.styles=[w$];Od=j([os("md-ripple")],Od);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j0=Symbol.for(""),I$=t=>{if((t==null?void 0:t.r)===j0)return t==null?void 0:t._$litStatic$},hc=(t,...e)=>({_$litStatic$:e.reduce((n,s,i)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[i+1],t[0]),r:j0}),ky=new Map,b$=t=>(e,...n)=>{const s=n.length;let i,r;const o=[],a=[];let l,c=0,u=!1;for(;c<s;){for(l=e[c];c<s&&(r=n[c],(i=I$(r))!==void 0);)l+=i+e[++c],u=!0;c!==s&&a.push(r),o.push(l),c++}if(c===s&&o.push(e[s]),u){const h=o.join("$$lit$$");(e=ky.get(h))===void 0&&(o.raw=o,ky.set(h,e=o)),n=a}return t(e,...n)},z0=b$(Dt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W0=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];W0.map(q0);function q0(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function rm(t){for(const e of W0)t.createProperty(e,{attribute:q0(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Er=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function K0(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async s=>{const{type:i,[Er]:r}=n,{form:o}=r;if(!(!o||i==="button")&&(await new Promise(a=>{a()}),!s.defaultPrevented)){if(i==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),r.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ny(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var G0;class kt extends Qt{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ny(this,this.flipIconInRtl),this[G0]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Er].form}get labels(){return this[Er].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?hc`div`:hc`button`,{ariaLabel:n,ariaHasPopup:s,ariaExpanded:i}=this,r=n&&this.ariaLabelSelected,o=r?se:this.selected;let a=se;return this.href||(a=r&&this.selected?this.ariaLabelSelected:n),z0`<${e}
        class="icon-button ${yu(this.getRenderClasses())}"
        id="button"
        aria-label="${a||se}"
        aria-haspopup="${!this.href&&s||se}"
        aria-expanded="${!this.href&&i||se}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?se:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():se}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Dt`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||se}"
        aria-label="${e||se}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Dt`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Dt`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return Dt`<span class="touch"></span>`}renderFocusRing(){return Dt`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Dt`<md-ripple
      for=${this.href?"link":se}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=Ny(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}G0=Er;rm(kt),K0(kt);kt.formAssociated=!0;kt.shadowRootOptions={mode:"open",delegatesFocus:!0};j([ke({type:Boolean,reflect:!0})],kt.prototype,"disabled",void 0);j([ke({type:Boolean,attribute:"flip-icon-in-rtl"})],kt.prototype,"flipIconInRtl",void 0);j([ke()],kt.prototype,"href",void 0);j([ke()],kt.prototype,"target",void 0);j([ke({attribute:"aria-label-selected"})],kt.prototype,"ariaLabelSelected",void 0);j([ke({type:Boolean})],kt.prototype,"toggle",void 0);j([ke({type:Boolean,reflect:!0})],kt.prototype,"selected",void 0);j([ke()],kt.prototype,"type",void 0);j([ke()],kt.prototype,"value",void 0);j([Us()],kt.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const A$=vn`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const R$=vn`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Dd=class extends kt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Dd.styles=[A$,R$];Dd=j([os("md-icon-button")],Dd);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vu extends Qt{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}j([ke({type:Boolean,reflect:!0})],vu.prototype,"inset",void 0);j([ke({type:Boolean,reflect:!0,attribute:"inset-start"})],vu.prototype,"insetStart",void 0);j([ke({type:Boolean,reflect:!0,attribute:"inset-end"})],vu.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const C$=vn`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Md=class extends vu{};Md.styles=[C$];Md=j([os("md-divider")],Md);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function S$(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),s=t.dispatchEvent(n);return s||e.preventDefault(),s}function P$(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function k$(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!N$(t)}function N$(t){const e=Ld;return e&&(t.preventDefault(),t.stopImmediatePropagation()),x$(),e}let Ld=!1;async function x$(){Ld=!0,await null,Ld=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const O$={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:ea.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:ea.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},D$={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:ea.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:ea.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qe extends Qt{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>O$,this.getCloseAnimation=()=>D$,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var i;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(i=this.querySelector("[autofocus]"))==null||i.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:s}=this;if(!n||!s||!n.open)return;const i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:s}=this;return Dt`
      <div class="scrim"></div>
      <dialog
        class=${yu(n)}
        aria-label=${s||se}
        aria-labelledby=${this.hasHeadline?"headline":se}
        role=${this.type==="alert"?"alertdialog":se}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||se}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||se}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:s}=e;n.method!=="dialog"||!s||this.close(s.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!S$(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:s,container:i,headline:r,content:o,actions:a}=this;if(!n||!s||!i||!r||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,g=[[n,c??[]],[s,u??[]],[i,l??[]],[r,h??[]],[o,d??[]],[a,f??[]]],_=[];for(const[v,T]of g)for(const R of T)_.push(v.animate(...R));await Promise.all(_.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:s}=e;n===this.topAnchor&&(this.isAtScrollTop=s),n===this.bottomAnchor&&(this.isAtScrollBottom=s)}}rm(qe);qe.shadowRootOptions={...Qt.shadowRootOptions,delegatesFocus:!0};j([ke({type:Boolean})],qe.prototype,"open",null);j([ke({attribute:!1})],qe.prototype,"returnValue",void 0);j([ke()],qe.prototype,"type",void 0);j([yn("dialog")],qe.prototype,"dialog",void 0);j([yn(".scrim")],qe.prototype,"scrim",void 0);j([yn(".container")],qe.prototype,"container",void 0);j([yn(".headline")],qe.prototype,"headline",void 0);j([yn(".content")],qe.prototype,"content",void 0);j([yn(".actions")],qe.prototype,"actions",void 0);j([Us()],qe.prototype,"isAtScrollTop",void 0);j([Us()],qe.prototype,"isAtScrollBottom",void 0);j([yn(".scroller")],qe.prototype,"scroller",void 0);j([yn(".top.anchor")],qe.prototype,"topAnchor",void 0);j([yn(".bottom.anchor")],qe.prototype,"bottomAnchor",void 0);j([Us()],qe.prototype,"hasHeadline",void 0);j([Us()],qe.prototype,"hasActions",void 0);j([Us()],qe.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const M$=vn`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Vd=class extends qe{};Vd.styles=[M$];Vd=j([os("md-dialog")],Vd);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Q0=vn`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Y0;class Nt extends Qt{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Er].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[Y0]=this.attachInternals(),this.handleActivationClick=e=>{!k$(e)||!this.buttonElement||(this.focus(),P$(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?hc`a`:hc`button`,{ariaLabel:s,ariaHasPopup:i,ariaExpanded:r}=this;return z0`
      <${n}
        class="button ${yu(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${s||se}"
        aria-haspopup="${i||se}"
        aria-expanded="${r||se}"
        href=${this.href||se}
        target=${this.target||se}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var s,i;const e=this.disabled&&!this.href,n=Dt`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Dt`
      ${(s=this.renderElevation)==null?void 0:s.call(this)}
      ${(i=this.renderOutline)==null?void 0:i.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?se:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:se}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Y0=Er;rm(Nt),K0(Nt);Nt.formAssociated=!0;Nt.shadowRootOptions={mode:"open",delegatesFocus:!0};j([ke({type:Boolean,reflect:!0})],Nt.prototype,"disabled",void 0);j([ke()],Nt.prototype,"href",void 0);j([ke()],Nt.prototype,"target",void 0);j([ke({type:Boolean,attribute:"trailing-icon"})],Nt.prototype,"trailingIcon",void 0);j([ke({type:Boolean,attribute:"has-icon"})],Nt.prototype,"hasIcon",void 0);j([ke()],Nt.prototype,"type",void 0);j([ke()],Nt.prototype,"value",void 0);j([yn(".button")],Nt.prototype,"buttonElement",void 0);j([kF({slot:"icon",flatten:!0})],Nt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class L$ extends Nt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const V$=vn`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Fd=class extends L${};Fd.styles=[Q0,V$];Fd=j([os("md-text-button")],Fd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class F$ extends Nt{renderOutline(){return Dt`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const $$=vn`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let $d=class extends F${};$d.styles=[Q0,$$];$d=j([os("md-outlined-button")],$d);const Eu=t=>(Tc("data-v-d890dc55"),t=t(),wc(),t),U$={key:0,id:"user"},B$={class:"body-large admonitions"},H$={key:0,class:"section slots"},j$=Eu(()=>Ae("div",{class:"label"}," Slot prenotati: ",-1)),z$={key:0},W$={key:1,class:"bookedSlots"},q$=Eu(()=>Ae("md-elevation",null,null,-1)),K$=["onClick"],G$=Eu(()=>Ae("md-icon",null,"close",-1)),Q$=[G$],Y$=["open"],X$=Eu(()=>Ae("div",{slot:"headline"},"Conferma rimozione",-1)),J$={key:0,slot:"content",id:"form-id",method:"dialog"},Z$={key:0},eU={slot:"actions"},tU={key:1,class:"section button"},nU=Ei({__name:"UserView",setup(t){var h,d;const e=Nc(),n=cV(io(Ks,`users/${(h=e.value)==null?void 0:h.uid}`)),s=lV(lL(Ks,`users/${(d=e.value)==null?void 0:d.uid}/availabilities`)),i=x0(),r=Mt(!1),o=Mt(),a=jt(()=>s.value.filter(f=>f.date.toDate()>new Date));function l(f){r.value=!0,o.value=f}async function c(){var R,P;if(o.value===null)return;const f=(R=o.value)==null?void 0:R.id,g=(P=e.value)==null?void 0:P.uid,_=io(Ks,`users/${g}/availabilities/${f}`),v=io(Ks,`users/${g}`),T=io(Ks,`availabilities/${f}`);await bL(Ks,async b=>{var B;b.update(T,{players:AL(v)}),b.delete(_),((B=o.value)==null?void 0:B.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&b.update(v,{admonitionCount:RL(1)})}),r.value=!1}function u(){i.installEvent,i.installEvent&&i.installEvent.prompt()}return(f,g)=>{const _=af("RouterLink");return Re(n)?(Be(),Ut("div",U$,[Ae("div",null,[Ae("h2",null,ls(Re(n).username),1)]),Ae("div",null,[Ae("div",B$," Ammonizioni: "+ls(Re(n).admonitionCount),1)]),a.value.length>0?(Be(),Ut("div",H$,[j$,Re(n).admonitionCount>=2?(Be(),Ut("div",z$," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):In("",!0),a.value.length>0?(Be(),Ut("div",W$,[(Be(!0),Ut(Zt,null,vA(a.value,v=>(Be(),Ut("div",{class:"bookedSlot",key:v.id},[q$,qn(" "+ls(v.date.toDate().getDate())+" "+ls(Re(Cy)[v.date.toDate().getMonth()])+" "+ls(v.timeSlot)+" ",1),Ae("md-icon-button",{onClick:T=>l(v)},Q$,8,K$),Ae("md-dialog",{class:"removeDialog",type:"alert",open:r.value},[X$,o.value?(Be(),Ut("form",J$,[Ae("div",null," Sei sicuro di voler disdire per il "+ls(o.value.date.toDate().getDate())+" "+ls(Re(Cy)[o.value.date.toDate().getMonth()])+" "+ls(o.value.timeSlot)+"? ",1),o.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?(Be(),Ut("p",Z$," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):In("",!0)])):In("",!0),Ae("div",eU,[Ae("md-text-button",{form:"form-id",value:"cancel",onClick:g[0]||(g[0]=T=>r.value=!1)},"Annulla"),Ae("md-text-button",{form:"form-id",value:"delete",onClick:c},"Disdici")])],8,Y$)]))),128))])):In("",!0)])):In("",!0),Re(n).role==="admin"?(Be(),Ut("div",tU,[et(_,{to:"/adminPanel"},{default:rn(()=>[qn(" Admin ")]),_:1})])):In("",!0),Re(i)&&Re(i).installEvent?(Be(),Ut("div",{key:2,class:"section button",onClick:u}," Installa app ")):In("",!0)])):In("",!0)}}});const X0=_u(nU,[["__scopeId","data-v-d890dc55"]]),sU=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),iU=t=>(Tc("data-v-a529ec71"),t=t(),wc(),t),rU={id:"home"},oU=iU(()=>Ae("h1",{class:"title display-medium"},"Fonti Paintball",-1)),aU={class:"content"},lU=Ei({__name:"HomeView",setup(t){const e=Mt(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),of(()=>window.removeEventListener("resize",n));const s=Nc();return(i,r)=>(Be(),Ut("div",rU,[e.value<900||!Re(s)?(Be(),ks(r$,{key:0})):In("",!0),oU,Ae("div",aU,[Ae("main",null,[et(fh,{path:"/rules"},{title:rn(()=>[qn(" Regolamento ")]),content:rn(()=>[qn(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),et(fh,{path:"/availability"},{title:rn(()=>[qn(" Calendario ")]),content:rn(()=>[qn(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),et(fh,null,{title:rn(()=>[qn(" Statistiche giocatori ")]),content:rn(()=>[qn(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&Re(s)?(Be(),ks(X0,{key:0})):In("",!0)])]))}});const cU=_u(lU,[["__scopeId","data-v-a529ec71"]]),J0=EF({history:VV("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:cU},{path:"/login",name:"login",component:()=>Gr(()=>import("./LoginView-83bee6d5.js"),["assets/LoginView-83bee6d5.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>Gr(()=>import("./AvailabilityView-1b797a91.js"),["assets/AvailabilityView-1b797a91.js","assets/AvailabilityView-8f68f582.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>Gr(()=>Promise.resolve().then(()=>sU),void 0)},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>Gr(()=>import("./RulesView-469776f7.js"),["assets/RulesView-469776f7.js","assets/RulesView-fa63a5c5.css"])},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>Gr(()=>import("./AdminView-7204a1ed.js"),["assets/AdminView-7204a1ed.js","assets/AdminView-09e49438.css"])}]});J0.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await mg())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await mg();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const s=await Xp(io(Ks,`users/${n.uid}`));if(!s.exists()||((e=s.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const Tu=TR(bF);Tu.use(dV());Tu.use(J0);Tu.use(hV,{firebaseApp:E0,modules:[uV()]});Tu.mount("#app");export{yU as $,yu as A,se as B,S$ as C,os as D,Cy as E,Zt as F,gs as G,Nt as H,Q0 as I,ta as J,jt as K,si as L,Ba as M,vA as N,qd as O,uU as P,Wd as Q,qn as R,Mt as S,lL as T,Ks as U,lV as V,cV as W,io as X,ks as Y,Xp as Z,_u as _,Nc as a,EU as a0,_U as a1,Be as b,Ut as c,Ei as d,Re as e,In as f,dU as g,Ae as h,et as i,wc as j,vn as k,rm as l,Qt as m,j as n,uA as o,Tc as p,ke as q,af as r,hU as s,ls as t,TU as u,yn as v,rn as w,k$ as x,P$ as y,Dt as z};
