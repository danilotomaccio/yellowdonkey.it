(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Nd(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ne={},Fs=[],an=()=>{},$0=()=>!1,U0=/^on[^a-z]/,oc=t=>U0.test(t),xd=t=>t.startsWith("onUpdate:"),Je=Object.assign,Od=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},B0=Object.prototype.hasOwnProperty,ce=(t,e)=>B0.call(t,e),Y=Array.isArray,$s=t=>ac(t)==="[object Map]",wy=t=>ac(t)==="[object Set]",ne=t=>typeof t=="function",ze=t=>typeof t=="string",Dd=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Iy=t=>Oe(t)&&ne(t.then)&&ne(t.catch),Ay=Object.prototype.toString,ac=t=>Ay.call(t),H0=t=>ac(t).slice(8,-1),by=t=>ac(t)==="[object Object]",Md=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ja=Nd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},j0=/-(\w)/g,kn=lc(t=>t.replace(j0,(e,n)=>n?n.toUpperCase():"")),z0=/\B([A-Z])/g,_r=lc(t=>t.replace(z0,"-$1").toLowerCase()),cc=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),mu=lc(t=>t?`on${cc(t)}`:""),yo=(t,e)=>!Object.is(t,e),gu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},q0=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zp;const ah=()=>Zp||(Zp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ld(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ze(i)?Q0(i):Ld(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ze(t))return t;if(Oe(t))return t}}const W0=/;(?![^(]*\))/g,K0=/:([^]+)/,G0=/\/\*[^]*?\*\//g;function Q0(t){const e={};return t.replace(G0,"").split(W0).forEach(n=>{if(n){const i=n.split(K0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vd(t){let e="";if(ze(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const i=Vd(t[n]);i&&(e+=i+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X0=Nd(Y0);function Ry(t){return!!t||t===""}const ri=t=>ze(t)?t:t==null?"":Y(t)||Oe(t)&&(t.toString===Ay||!ne(t.toString))?JSON.stringify(t,Cy,2):String(t),Cy=(t,e)=>e&&e.__v_isRef?Cy(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:wy(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!Y(e)&&!by(e)?String(e):e;let Dt;class Sy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Py(t){return new Sy(t)}function J0(t,e=Dt){e&&e.active&&e.effects.push(t)}function ky(){return Dt}function Z0(t){Dt&&Dt.cleanups.push(t)}const Fd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ny=t=>(t.w&Ii)>0,xy=t=>(t.n&Ii)>0,eA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ii},tA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Ny(s)&&!xy(s)?s.delete(t):e[n++]=s,s.w&=~Ii,s.n&=~Ii}e.length=n}},lh=new WeakMap;let Kr=0,Ii=1;const ch=30;let tn;const Ji=Symbol(""),uh=Symbol("");class $d{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,J0(this,i)}run(){if(!this.active)return this.fn();let e=tn,n=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,_i=!0,Ii=1<<++Kr,Kr<=ch?eA(this):em(this),this.fn()}finally{Kr<=ch&&tA(this),Ii=1<<--Kr,tn=this.parent,_i=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(em(this),this.onStop&&this.onStop(),this.active=!1)}}function em(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _i=!0;const Oy=[];function yr(){Oy.push(_i),_i=!1}function vr(){const t=Oy.pop();_i=t===void 0?!0:t}function xt(t,e,n){if(_i&&tn){let i=lh.get(t);i||lh.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Fd()),Dy(s)}}function Dy(t,e){let n=!1;Kr<=ch?xy(t)||(t.n|=Ii,n=!Ny(t)):n=!t.has(tn),n&&(t.add(tn),tn.deps.push(t))}function Qn(t,e,n,i,s,r){const o=lh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Md(n)&&a.push(o.get("length")):(a.push(o.get(Ji)),$s(t)&&a.push(o.get(uh)));break;case"delete":Y(t)||(a.push(o.get(Ji)),$s(t)&&a.push(o.get(uh)));break;case"set":$s(t)&&a.push(o.get(Ji));break}if(a.length===1)a[0]&&hh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);hh(Fd(l))}}function hh(t,e){const n=Y(t)?t:[...t];for(const i of n)i.computed&&tm(i);for(const i of n)i.computed||tm(i)}function tm(t,e){(t!==tn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const nA=Nd("__proto__,__v_isRef,__isVue"),My=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dd)),iA=Ud(),sA=Ud(!1,!0),rA=Ud(!0),nm=oA();function oA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=de(this);for(let r=0,o=this.length;r<o;r++)xt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yr();const i=de(this)[e].apply(this,n);return vr(),i}}),t}function aA(t){const e=de(this);return xt(e,"has",t),e.hasOwnProperty(t)}function Ud(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?IA:Uy:e?$y:Fy).get(i))return i;const o=Y(i);if(!t){if(o&&ce(nm,s))return Reflect.get(nm,s,r);if(s==="hasOwnProperty")return aA}const a=Reflect.get(i,s,r);return(Dd(s)?My.has(s):nA(s))||(t||xt(i,"get",s),e)?a:ot(a)?o&&Md(s)?a:a.value:Oe(a)?t?Hy(a):hc(a):a}}const lA=Ly(),cA=Ly(!0);function Ly(t=!1){return function(n,i,s,r){let o=n[i];if(Xs(o)&&ot(o)&&!ot(s))return!1;if(!t&&(!fl(s)&&!Xs(s)&&(o=de(o),s=de(s)),!Y(n)&&ot(o)&&!ot(s)))return o.value=s,!0;const a=Y(n)&&Md(i)?Number(i)<n.length:ce(n,i),l=Reflect.set(n,i,s,r);return n===de(r)&&(a?yo(s,o)&&Qn(n,"set",i,s):Qn(n,"add",i,s)),l}}function uA(t,e){const n=ce(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Qn(t,"delete",e,void 0),i}function hA(t,e){const n=Reflect.has(t,e);return(!Dd(e)||!My.has(e))&&xt(t,"has",e),n}function dA(t){return xt(t,"iterate",Y(t)?"length":Ji),Reflect.ownKeys(t)}const Vy={get:iA,set:lA,deleteProperty:uA,has:hA,ownKeys:dA},fA={get:rA,set(t,e){return!0},deleteProperty(t,e){return!0}},pA=Je({},Vy,{get:sA,set:cA}),Bd=t=>t,uc=t=>Reflect.getPrototypeOf(t);function Pa(t,e,n=!1,i=!1){t=t.__v_raw;const s=de(t),r=de(e);n||(e!==r&&xt(s,"get",e),xt(s,"get",r));const{has:o}=uc(s),a=i?Bd:n?qd:vo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function ka(t,e=!1){const n=this.__v_raw,i=de(n),s=de(t);return e||(t!==s&&xt(i,"has",t),xt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Na(t,e=!1){return t=t.__v_raw,!e&&xt(de(t),"iterate",Ji),Reflect.get(t,"size",t)}function im(t){t=de(t);const e=de(this);return uc(e).has.call(e,t)||(e.add(t),Qn(e,"add",t,t)),this}function sm(t,e){e=de(e);const n=de(this),{has:i,get:s}=uc(n);let r=i.call(n,t);r||(t=de(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?yo(e,o)&&Qn(n,"set",t,e):Qn(n,"add",t,e),this}function rm(t){const e=de(this),{has:n,get:i}=uc(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Qn(e,"delete",t,void 0),r}function om(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Qn(t,"clear",void 0,void 0),n}function xa(t,e){return function(i,s){const r=this,o=r.__v_raw,a=de(o),l=e?Bd:t?qd:vo;return!t&&xt(a,"iterate",Ji),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Oa(t,e,n){return function(...i){const s=this.__v_raw,r=de(s),o=$s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Bd:e?qd:vo;return!e&&xt(r,"iterate",l?uh:Ji),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function oi(t){return function(...e){return t==="delete"?!1:this}}function mA(){const t={get(r){return Pa(this,r)},get size(){return Na(this)},has:ka,add:im,set:sm,delete:rm,clear:om,forEach:xa(!1,!1)},e={get(r){return Pa(this,r,!1,!0)},get size(){return Na(this)},has:ka,add:im,set:sm,delete:rm,clear:om,forEach:xa(!1,!0)},n={get(r){return Pa(this,r,!0)},get size(){return Na(this,!0)},has(r){return ka.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:xa(!0,!1)},i={get(r){return Pa(this,r,!0,!0)},get size(){return Na(this,!0)},has(r){return ka.call(this,r,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:xa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oa(r,!1,!1),n[r]=Oa(r,!0,!1),e[r]=Oa(r,!1,!0),i[r]=Oa(r,!0,!0)}),[t,n,e,i]}const[gA,_A,yA,vA]=mA();function Hd(t,e){const n=e?t?vA:yA:t?_A:gA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ce(n,s)&&s in i?n:i,s,r)}const EA={get:Hd(!1,!1)},TA={get:Hd(!1,!0)},wA={get:Hd(!0,!1)},Fy=new WeakMap,$y=new WeakMap,Uy=new WeakMap,IA=new WeakMap;function AA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bA(t){return t.__v_skip||!Object.isExtensible(t)?0:AA(H0(t))}function hc(t){return Xs(t)?t:jd(t,!1,Vy,EA,Fy)}function By(t){return jd(t,!1,pA,TA,$y)}function Hy(t){return jd(t,!0,fA,wA,Uy)}function jd(t,e,n,i,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=bA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Us(t){return Xs(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Xs(t){return!!(t&&t.__v_isReadonly)}function fl(t){return!!(t&&t.__v_isShallow)}function jy(t){return Us(t)||Xs(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function zd(t){return dl(t,"__v_skip",!0),t}const vo=t=>Oe(t)?hc(t):t,qd=t=>Oe(t)?Hy(t):t;function zy(t){_i&&tn&&(t=de(t),Dy(t.dep||(t.dep=Fd())))}function qy(t,e){t=de(t);const n=t.dep;n&&hh(n)}function ot(t){return!!(t&&t.__v_isRef===!0)}function Yt(t){return Ky(t,!1)}function Wy(t){return Ky(t,!0)}function Ky(t,e){return ot(t)?t:new RA(t,e)}class RA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:vo(e)}get value(){return zy(this),this._value}set value(e){const n=this.__v_isShallow||fl(e)||Xs(e);e=n?e:de(e),yo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),qy(this))}}function be(t){return ot(t)?t.value:t}const CA={get:(t,e,n)=>be(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Gy(t){return Us(t)?t:new Proxy(t,CA)}class SA{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new $d(e,()=>{this._dirty||(this._dirty=!0,qy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=de(this);return zy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function PA(t,e,n=!1){let i,s;const r=ne(t);return r?(i=t,s=an):(i=t.get,s=t.set),new SA(i,s,r||!s,n)}function yi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){dc(r,e,n)}return s}function ln(t,e,n,i){if(ne(t)){const r=yi(t,e,n,i);return r&&Iy(r)&&r.catch(o=>{dc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(ln(t[r],e,n,i));return s}function dc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){yi(l,null,10,[t,o,a]);return}}kA(t,n,s,i)}function kA(t,e,n,i=!0){console.error(t)}let Eo=!1,dh=!1;const pt=[];let En=0;const Bs=[];let Bn=null,zi=0;const Qy=Promise.resolve();let Wd=null;function Yy(t){const e=Wd||Qy;return t?e.then(this?t.bind(this):t):e}function NA(t){let e=En+1,n=pt.length;for(;e<n;){const i=e+n>>>1;To(pt[i])<t?e=i+1:n=i}return e}function Kd(t){(!pt.length||!pt.includes(t,Eo&&t.allowRecurse?En+1:En))&&(t.id==null?pt.push(t):pt.splice(NA(t.id),0,t),Xy())}function Xy(){!Eo&&!dh&&(dh=!0,Wd=Qy.then(Zy))}function xA(t){const e=pt.indexOf(t);e>En&&pt.splice(e,1)}function OA(t){Y(t)?Bs.push(...t):(!Bn||!Bn.includes(t,t.allowRecurse?zi+1:zi))&&Bs.push(t),Xy()}function am(t,e=Eo?En+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function Jy(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((n,i)=>To(n)-To(i)),zi=0;zi<Bn.length;zi++)Bn[zi]();Bn=null,zi=0}}const To=t=>t.id==null?1/0:t.id,DA=(t,e)=>{const n=To(t)-To(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zy(t){dh=!1,Eo=!0,pt.sort(DA);const e=an;try{for(En=0;En<pt.length;En++){const n=pt[En];n&&n.active!==!1&&yi(n,null,14)}}finally{En=0,pt.length=0,Jy(),Eo=!1,Wd=null,(pt.length||Bs.length)&&Zy()}}function MA(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ne;d&&(s=n.map(f=>ze(f)?f.trim():f)),h&&(s=n.map(q0))}let a,l=i[a=mu(e)]||i[a=mu(kn(e))];!l&&r&&(l=i[a=mu(_r(e))]),l&&ln(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(c,t,6,s)}}function ev(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=ev(c,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Oe(t)&&i.set(t,null),null):(Y(r)?r.forEach(l=>o[l]=null):Je(o,r),Oe(t)&&i.set(t,o),o)}function fc(t,e){return!t||!oc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,_r(e))||ce(t,e))}let gt=null,pc=null;function pl(t){const e=gt;return gt=t,pc=t&&t.type.__scopeId||null,e}function mc(t){pc=t}function gc(){pc=null}function en(t,e=gt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ym(-1);const r=pl(e);let o;try{o=t(...s)}finally{pl(r),i._d&&ym(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _u(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=t;let v,T;const R=pl(t);try{if(n.shapeFlag&4){const b=s||i;v=vn(u.call(b,b,h,r,f,d,g)),T=l}else{const b=e;v=vn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),T=e.props?l:LA(l)}}catch(b){so.length=0,dc(b,t,1),v=Xe(Ai)}let P=v;if(T&&_!==!1){const b=Object.keys(T),{shapeFlag:X}=P;b.length&&X&7&&(o&&b.some(xd)&&(T=VA(T,o)),P=Js(P,T))}return n.dirs&&(P=Js(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),v=P,pl(R),v}const LA=t=>{let e;for(const n in t)(n==="class"||n==="style"||oc(n))&&((e||(e={}))[n]=t[n]);return e},VA=(t,e)=>{const n={};for(const i in t)(!xd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function FA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?lm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!fc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?lm(i,o,c):!0:!!o;return!1}function lm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!fc(n,r))return!0}return!1}function $A({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const UA=t=>t.__isSuspense;function BA(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):OA(t)}const Da={};function Hs(t,e,n){return tv(t,e,n)}function tv(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ne){var a;const l=ky()===((a=Qe)==null?void 0:a.scope)?Qe:null;let c,u=!1,h=!1;if(ot(t)?(c=()=>t.value,u=fl(t)):Us(t)?(c=()=>t,i=!0):Y(t)?(h=!0,u=t.some(b=>Us(b)||fl(b)),c=()=>t.map(b=>{if(ot(b))return b.value;if(Us(b))return Os(b);if(ne(b))return yi(b,l,2)})):ne(t)?e?c=()=>yi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),ln(t,l,3,[f])}:c=an,e&&i){const b=c;c=()=>Os(b())}let d,f=b=>{d=R.onStop=()=>{yi(b,l,4)}},g;if(Io)if(f=an,e?n&&ln(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const b=Db();g=b.__watcherHandles||(b.__watcherHandles=[])}else return an;let _=h?new Array(t.length).fill(Da):Da;const v=()=>{if(R.active)if(e){const b=R.run();(i||u||(h?b.some((X,G)=>yo(X,_[G])):yo(b,_)))&&(d&&d(),ln(e,l,3,[b,_===Da?void 0:h&&_[0]===Da?[]:_,f]),_=b)}else R.run()};v.allowRecurse=!!e;let T;s==="sync"?T=v:s==="post"?T=()=>Nt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>Kd(v));const R=new $d(c,T);e?n?v():_=R.run():s==="post"?Nt(R.run.bind(R),l&&l.suspense):R.run();const P=()=>{R.stop(),l&&l.scope&&Od(l.scope.effects,R)};return g&&g.push(P),P}function HA(t,e,n){const i=this.proxy,s=ze(t)?t.includes(".")?nv(i,t):()=>i[t]:t.bind(i,i);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Qe;Zs(this);const a=tv(s,r.bind(i),n);return o?Zs(o):Zi(),a}function nv(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Os(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))Os(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Os(t[n],e);else if(wy(t)||$s(t))t.forEach(n=>{Os(n,e)});else if(by(t))for(const n in t)Os(t[n],e);return t}function Fi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yr(),ln(l,n,8,[t.el,a,t,e]),vr())}}function ms(t,e){return ne(t)?(()=>Je({name:t.name},e,{setup:t}))():t}const no=t=>!!t.type.__asyncLoader,iv=t=>t.type.__isKeepAlive;function jA(t,e){sv(t,"a",e)}function zA(t,e){sv(t,"da",e)}function sv(t,e,n=Qe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_c(e,i,n),n){let s=n.parent;for(;s&&s.parent;)iv(s.parent.vnode)&&qA(i,e,n,s),s=s.parent}}function qA(t,e,n,i){const s=_c(e,t,i,!0);Gd(()=>{Od(i[e],s)},n)}function _c(t,e,n=Qe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yr(),Zs(n);const a=ln(e,n,t,o);return Zi(),vr(),a});return i?s.unshift(r):s.push(r),r}}const ti=t=>(e,n=Qe)=>(!Io||t==="sp")&&_c(t,(...i)=>e(...i),n),WA=ti("bm"),KA=ti("m"),GA=ti("bu"),QA=ti("u"),YA=ti("bum"),Gd=ti("um"),rv=ti("sp"),XA=ti("rtg"),JA=ti("rtc");function ZA(t,e=Qe){_c("ec",t,e)}const ov="components";function Qd(t,e){return tb(ov,t,!0,e)||t}const eb=Symbol.for("v-ndc");function tb(t,e,n=!0,i=!1){const s=gt||Qe;if(s){const r=s.type;if(t===ov){const a=Nb(r,!1);if(a&&(a===e||a===kn(e)||a===cc(kn(e))))return r}const o=cm(s[t]||r[t],e)||cm(s.appContext[t],e);return!o&&i?r:o}}function cm(t,e){return t&&(t[e]||t[kn(e)]||t[cc(kn(e))])}function nb(t,e,n,i){let s;const r=n&&n[i];if(Y(t)||ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function Ma(t,e,n={},i,s){if(gt.isCE||gt.parent&&no(gt.parent)&&gt.parent.isCE)return e!=="default"&&(n.name=e),Xe("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),$e();const o=r&&av(r(n)),a=bi(Wt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function av(t){return t.some(e=>_l(e)?!(e.type===Ai||e.type===Wt&&!av(e.children)):!0)?t:null}const fh=t=>t?vv(t)?ef(t)||t.proxy:fh(t.parent):null,io=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fh(t.parent),$root:t=>fh(t.root),$emit:t=>t.emit,$options:t=>Yd(t),$forceUpdate:t=>t.f||(t.f=()=>Kd(t.update)),$nextTick:t=>t.n||(t.n=Yy.bind(t.proxy)),$watch:t=>HA.bind(t)}),yu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ce(t,e),ib={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(yu(i,e))return o[e]=1,i[e];if(s!==Ne&&ce(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Ne&&ce(n,e))return o[e]=4,n[e];ph&&(o[e]=0)}}const u=io[e];let h,d;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return yu(s,e)?(s[e]=n,!0):i!==Ne&&ce(i,e)?(i[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ne&&ce(t,o)||yu(e,o)||(a=r[0])&&ce(a,o)||ce(i,o)||ce(io,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function um(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ph=!0;function sb(t){const e=Yd(t),n=t.proxy,i=t.ctx;ph=!1,e.beforeCreate&&hm(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:R,destroyed:P,unmounted:b,render:X,renderTracked:G,renderTriggered:we,errorCaptured:Re,serverPrefetch:Pt,expose:nt,inheritAttrs:ii,components:Vi,directives:mn,filters:Dr}=e;if(c&&rb(c,i,null),o)for(const Ie in o){const fe=o[Ie];ne(fe)&&(i[Ie]=fe.bind(n))}if(s){const Ie=s.call(n,n);Oe(Ie)&&(t.data=hc(Ie))}if(ph=!0,r)for(const Ie in r){const fe=r[Ie],$n=ne(fe)?fe.bind(n,n):ne(fe.get)?fe.get.bind(n,n):an,si=!ne(fe)&&ne(fe.set)?fe.set.bind(n):an,gn=Kt({get:$n,set:si});Object.defineProperty(i,Ie,{enumerable:!0,configurable:!0,get:()=>gn.value,set:kt=>gn.value=kt})}if(a)for(const Ie in a)lv(a[Ie],i,n,Ie);if(l){const Ie=ne(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(fe=>{Za(fe,Ie[fe])})}u&&hm(u,t,"c");function qe(Ie,fe){Y(fe)?fe.forEach($n=>Ie($n.bind(n))):fe&&Ie(fe.bind(n))}if(qe(WA,h),qe(KA,d),qe(GA,f),qe(QA,g),qe(jA,_),qe(zA,v),qe(ZA,Re),qe(JA,G),qe(XA,we),qe(YA,R),qe(Gd,b),qe(rv,Pt),Y(nt))if(nt.length){const Ie=t.exposed||(t.exposed={});nt.forEach(fe=>{Object.defineProperty(Ie,fe,{get:()=>n[fe],set:$n=>n[fe]=$n})})}else t.exposed||(t.exposed={});X&&t.render===an&&(t.render=X),ii!=null&&(t.inheritAttrs=ii),Vi&&(t.components=Vi),mn&&(t.directives=mn)}function rb(t,e,n=an){Y(t)&&(t=mh(t));for(const i in t){const s=t[i];let r;Oe(s)?"default"in s?r=Vt(s.from||i,s.default,!0):r=Vt(s.from||i):r=Vt(s),ot(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hm(t,e,n){ln(Y(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function lv(t,e,n,i){const s=i.includes(".")?nv(n,i):()=>n[i];if(ze(t)){const r=e[t];ne(r)&&Hs(s,r)}else if(ne(t))Hs(s,t.bind(n));else if(Oe(t))if(Y(t))t.forEach(r=>lv(r,e,n,i));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&Hs(s,r,t)}}function Yd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ml(l,c,o,!0)),ml(l,e,o)),Oe(e)&&r.set(e,l),l}function ml(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ml(t,r,n,!0),s&&s.forEach(o=>ml(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ob[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ob={data:dm,props:fm,emits:fm,methods:Gr,computed:Gr,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Gr,directives:Gr,watch:lb,provide:dm,inject:ab};function dm(t,e){return e?t?function(){return Je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function ab(t,e){return Gr(mh(t),mh(e))}function mh(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Gr(t,e){return t?Je(Object.create(null),t,e):e}function fm(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:Je(Object.create(null),um(t),um(e??{})):e}function lb(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const i in e)n[i]=At(t[i],e[i]);return n}function cv(){return{app:null,config:{isNativeTag:$0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cb=0;function ub(t,e){return function(i,s=null){ne(i)||(i=Je({},i)),s!=null&&!Oe(s)&&(s=null);const r=cv(),o=new Set;let a=!1;const l=r.app={_uid:cb++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Mb,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Xe(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ef(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){gl=l;try{return c()}finally{gl=null}}};return l}}let gl=null;function Za(t,e){if(Qe){let n=Qe.provides;const i=Qe.parent&&Qe.parent.provides;i===n&&(n=Qe.provides=Object.create(i)),n[t]=e}}function Vt(t,e,n=!1){const i=Qe||gt;if(i||gl){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:gl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(i&&i.proxy):e}}function hb(t,e,n,i=!1){const s={},r={};dl(r,vc,1),t.propsDefaults=Object.create(null),uv(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:By(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function db(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=de(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(fc(t.emitsOptions,d))continue;const f=e[d];if(l)if(ce(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=kn(d);s[g]=gh(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{uv(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=_r(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=gh(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],c=!0)}c&&Qn(t,"set","$attrs")}function uv(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ja(l))continue;const c=e[l];let u;s&&ce(s,u=kn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=de(n),c=a||Ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=gh(s,l,h,c[h],t,!ce(c,h))}}return o}function gh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Zs(s),i=c[n]=l.call(null,e),Zi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_r(n))&&(i=!0))}return i}function hv(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[d,f]=hv(h,e,!0);Je(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Oe(t)&&i.set(t,Fs),Fs;if(Y(r))for(let u=0;u<r.length;u++){const h=kn(r[u]);pm(h)&&(o[h]=Ne)}else if(r)for(const u in r){const h=kn(u);if(pm(h)){const d=r[u],f=o[h]=Y(d)||ne(d)?{type:d}:Je({},d);if(f){const g=_m(Boolean,f.type),_=_m(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||ce(f,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&i.set(t,c),c}function pm(t){return t[0]!=="$"}function mm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gm(t,e){return mm(t)===mm(e)}function _m(t,e){return Y(e)?e.findIndex(n=>gm(n,t)):ne(e)&&gm(e,t)?0:-1}const dv=t=>t[0]==="_"||t==="$stable",Xd=t=>Y(t)?t.map(vn):[vn(t)],fb=(t,e,n)=>{if(e._n)return e;const i=en((...s)=>Xd(e(...s)),n);return i._c=!1,i},fv=(t,e,n)=>{const i=t._ctx;for(const s in t){if(dv(s))continue;const r=t[s];if(ne(r))e[s]=fb(s,r,i);else if(r!=null){const o=Xd(r);e[s]=()=>o}}},pv=(t,e)=>{const n=Xd(e);t.slots.default=()=>n},pb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),dl(e,"_",n)):fv(e,t.slots={})}else t.slots={},e&&pv(t,e);dl(t.slots,vc,1)},mb=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ne;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Je(s,e),!n&&a===1&&delete s._):(r=!e.$stable,fv(e,s)),o=e}else e&&(pv(t,e),o={default:1});if(r)for(const a in s)!dv(a)&&!(a in o)&&delete s[a]};function _h(t,e,n,i,s=!1){if(Y(t)){t.forEach((d,f)=>_h(d,e&&(Y(e)?e[f]:e),n,i,s));return}if(no(i)&&!s)return;const r=i.shapeFlag&4?ef(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ze(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):ot(c)&&(c.value=null)),ne(l))yi(l,a,12,[o,u]);else{const d=ze(l),f=ot(l);if(d||f){const g=()=>{if(t.f){const _=d?ce(h,l)?h[l]:u[l]:l.value;s?Y(_)&&Od(_,r):Y(_)?_.includes(r)||_.push(r):d?(u[l]=[r],ce(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Nt(g,n)):g()}}}const Nt=BA;function gb(t){return _b(t)}function _b(t,e){const n=ah();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=an,insertStaticContent:g}=t,_=(p,m,y,E=null,I=null,C=null,L=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!Lr(p,m)&&(E=w(p),kt(p,I,C,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:H,shapeFlag:$}=m;switch(S){case yc:v(p,m,y,E);break;case Ai:T(p,m,y,E);break;case vu:p==null&&R(m,y,E,L);break;case Wt:Vi(p,m,y,E,I,C,L,N,x);break;default:$&1?X(p,m,y,E,I,C,L,N,x):$&6?mn(p,m,y,E,I,C,L,N,x):($&64||$&128)&&S.process(p,m,y,E,I,C,L,N,x,O)}H!=null&&I&&_h(H,p&&p.ref,C,m||p,!m)},v=(p,m,y,E)=>{if(p==null)i(m.el=a(m.children),y,E);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},T=(p,m,y,E)=>{p==null?i(m.el=l(m.children||""),y,E):m.el=p.el},R=(p,m,y,E)=>{[p.el,p.anchor]=g(p.children,m,y,E,p.el,p.anchor)},P=({el:p,anchor:m},y,E)=>{let I;for(;p&&p!==m;)I=d(p),i(p,y,E),p=I;i(m,y,E)},b=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=d(p),s(p),p=y;s(m)},X=(p,m,y,E,I,C,L,N,x)=>{L=L||m.type==="svg",p==null?G(m,y,E,I,C,L,N,x):Pt(p,m,I,C,L,N,x)},G=(p,m,y,E,I,C,L,N)=>{let x,S;const{type:H,props:$,shapeFlag:j,transition:J,dirs:ie}=p;if(x=p.el=o(p.type,C,$&&$.is,$),j&8?u(x,p.children):j&16&&Re(p.children,x,null,E,I,C&&H!=="foreignObject",L,N),ie&&Fi(p,null,E,"created"),we(x,p,p.scopeId,L,E),$){for(const ve in $)ve!=="value"&&!Ja(ve)&&r(x,ve,null,$[ve],C,p.children,E,I,lt);"value"in $&&r(x,"value",null,$.value),(S=$.onVnodeBeforeMount)&&yn(S,E,p)}ie&&Fi(p,null,E,"beforeMount");const Ae=(!I||I&&!I.pendingBranch)&&J&&!J.persisted;Ae&&J.beforeEnter(x),i(x,m,y),((S=$&&$.onVnodeMounted)||Ae||ie)&&Nt(()=>{S&&yn(S,E,p),Ae&&J.enter(x),ie&&Fi(p,null,E,"mounted")},I)},we=(p,m,y,E,I)=>{if(y&&f(p,y),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(I){let C=I.subTree;if(m===C){const L=I.vnode;we(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},Re=(p,m,y,E,I,C,L,N,x=0)=>{for(let S=x;S<p.length;S++){const H=p[S]=N?ci(p[S]):vn(p[S]);_(null,H,m,y,E,I,C,L,N)}},Pt=(p,m,y,E,I,C,L)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:S,dirs:H}=m;x|=p.patchFlag&16;const $=p.props||Ne,j=m.props||Ne;let J;y&&$i(y,!1),(J=j.onVnodeBeforeUpdate)&&yn(J,y,m,p),H&&Fi(m,p,y,"beforeUpdate"),y&&$i(y,!0);const ie=I&&m.type!=="foreignObject";if(S?nt(p.dynamicChildren,S,N,y,E,ie,C):L||fe(p,m,N,null,y,E,ie,C,!1),x>0){if(x&16)ii(N,m,$,j,y,E,I);else if(x&2&&$.class!==j.class&&r(N,"class",null,j.class,I),x&4&&r(N,"style",$.style,j.style,I),x&8){const Ae=m.dynamicProps;for(let ve=0;ve<Ae.length;ve++){const Ve=Ae[ve],Zt=$[Ve],bs=j[Ve];(bs!==Zt||Ve==="value")&&r(N,Ve,Zt,bs,I,p.children,y,E,lt)}}x&1&&p.children!==m.children&&u(N,m.children)}else!L&&S==null&&ii(N,m,$,j,y,E,I);((J=j.onVnodeUpdated)||H)&&Nt(()=>{J&&yn(J,y,m,p),H&&Fi(m,p,y,"updated")},E)},nt=(p,m,y,E,I,C,L)=>{for(let N=0;N<m.length;N++){const x=p[N],S=m[N],H=x.el&&(x.type===Wt||!Lr(x,S)||x.shapeFlag&70)?h(x.el):y;_(x,S,H,null,E,I,C,L,!0)}},ii=(p,m,y,E,I,C,L)=>{if(y!==E){if(y!==Ne)for(const N in y)!Ja(N)&&!(N in E)&&r(p,N,y[N],null,L,m.children,I,C,lt);for(const N in E){if(Ja(N))continue;const x=E[N],S=y[N];x!==S&&N!=="value"&&r(p,N,S,x,L,m.children,I,C,lt)}"value"in E&&r(p,"value",y.value,E.value)}},Vi=(p,m,y,E,I,C,L,N,x)=>{const S=m.el=p?p.el:a(""),H=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:j,slotScopeIds:J}=m;J&&(N=N?N.concat(J):J),p==null?(i(S,y,E),i(H,y,E),Re(m.children,y,H,I,C,L,N,x)):$>0&&$&64&&j&&p.dynamicChildren?(nt(p.dynamicChildren,j,y,I,C,L,N),(m.key!=null||I&&m===I.subTree)&&mv(p,m,!0)):fe(p,m,y,H,I,C,L,N,x)},mn=(p,m,y,E,I,C,L,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,y,E,L,x):Dr(m,y,E,I,C,L,x):ws(p,m,x)},Dr=(p,m,y,E,I,C,L)=>{const N=p.component=Rb(p,E,I);if(iv(p)&&(N.ctx.renderer=O),Cb(N),N.asyncDep){if(I&&I.registerDep(N,qe),!p.el){const x=N.subTree=Xe(Ai);T(null,x,m,y)}return}qe(N,p,m,y,I,C,L)},ws=(p,m,y)=>{const E=m.component=p.component;if(FA(p,m,y))if(E.asyncDep&&!E.asyncResolved){Ie(E,m,y);return}else E.next=m,xA(E.update),E.update();else m.el=p.el,E.vnode=m},qe=(p,m,y,E,I,C,L)=>{const N=()=>{if(p.isMounted){let{next:H,bu:$,u:j,parent:J,vnode:ie}=p,Ae=H,ve;$i(p,!1),H?(H.el=ie.el,Ie(p,H,L)):H=ie,$&&gu($),(ve=H.props&&H.props.onVnodeBeforeUpdate)&&yn(ve,J,H,ie),$i(p,!0);const Ve=_u(p),Zt=p.subTree;p.subTree=Ve,_(Zt,Ve,h(Zt.el),w(Zt),p,I,C),H.el=Ve.el,Ae===null&&$A(p,Ve.el),j&&Nt(j,I),(ve=H.props&&H.props.onVnodeUpdated)&&Nt(()=>yn(ve,J,H,ie),I)}else{let H;const{el:$,props:j}=m,{bm:J,m:ie,parent:Ae}=p,ve=no(m);if($i(p,!1),J&&gu(J),!ve&&(H=j&&j.onVnodeBeforeMount)&&yn(H,Ae,m),$i(p,!0),$&&pe){const Ve=()=>{p.subTree=_u(p),pe($,p.subTree,p,I,null)};ve?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=_u(p);_(null,Ve,y,E,p,I,C),m.el=Ve.el}if(ie&&Nt(ie,I),!ve&&(H=j&&j.onVnodeMounted)){const Ve=m;Nt(()=>yn(H,Ae,Ve),I)}(m.shapeFlag&256||Ae&&no(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&Nt(p.a,I),p.isMounted=!0,m=y=E=null}},x=p.effect=new $d(N,()=>Kd(S),p.scope),S=p.update=()=>x.run();S.id=p.uid,$i(p,!0),S()},Ie=(p,m,y)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,db(p,m.props,E,y),mb(p,m.children,y),yr(),am(),vr()},fe=(p,m,y,E,I,C,L,N,x=!1)=>{const S=p&&p.children,H=p?p.shapeFlag:0,$=m.children,{patchFlag:j,shapeFlag:J}=m;if(j>0){if(j&128){si(S,$,y,E,I,C,L,N,x);return}else if(j&256){$n(S,$,y,E,I,C,L,N,x);return}}J&8?(H&16&&lt(S,I,C),$!==S&&u(y,$)):H&16?J&16?si(S,$,y,E,I,C,L,N,x):lt(S,I,C,!0):(H&8&&u(y,""),J&16&&Re($,y,E,I,C,L,N,x))},$n=(p,m,y,E,I,C,L,N,x)=>{p=p||Fs,m=m||Fs;const S=p.length,H=m.length,$=Math.min(S,H);let j;for(j=0;j<$;j++){const J=m[j]=x?ci(m[j]):vn(m[j]);_(p[j],J,y,null,I,C,L,N,x)}S>H?lt(p,I,C,!0,!1,$):Re(m,y,E,I,C,L,N,x,$)},si=(p,m,y,E,I,C,L,N,x)=>{let S=0;const H=m.length;let $=p.length-1,j=H-1;for(;S<=$&&S<=j;){const J=p[S],ie=m[S]=x?ci(m[S]):vn(m[S]);if(Lr(J,ie))_(J,ie,y,null,I,C,L,N,x);else break;S++}for(;S<=$&&S<=j;){const J=p[$],ie=m[j]=x?ci(m[j]):vn(m[j]);if(Lr(J,ie))_(J,ie,y,null,I,C,L,N,x);else break;$--,j--}if(S>$){if(S<=j){const J=j+1,ie=J<H?m[J].el:E;for(;S<=j;)_(null,m[S]=x?ci(m[S]):vn(m[S]),y,ie,I,C,L,N,x),S++}}else if(S>j)for(;S<=$;)kt(p[S],I,C,!0),S++;else{const J=S,ie=S,Ae=new Map;for(S=ie;S<=j;S++){const Ot=m[S]=x?ci(m[S]):vn(m[S]);Ot.key!=null&&Ae.set(Ot.key,S)}let ve,Ve=0;const Zt=j-ie+1;let bs=!1,Yp=0;const Mr=new Array(Zt);for(S=0;S<Zt;S++)Mr[S]=0;for(S=J;S<=$;S++){const Ot=p[S];if(Ve>=Zt){kt(Ot,I,C,!0);continue}let _n;if(Ot.key!=null)_n=Ae.get(Ot.key);else for(ve=ie;ve<=j;ve++)if(Mr[ve-ie]===0&&Lr(Ot,m[ve])){_n=ve;break}_n===void 0?kt(Ot,I,C,!0):(Mr[_n-ie]=S+1,_n>=Yp?Yp=_n:bs=!0,_(Ot,m[_n],y,null,I,C,L,N,x),Ve++)}const Xp=bs?yb(Mr):Fs;for(ve=Xp.length-1,S=Zt-1;S>=0;S--){const Ot=ie+S,_n=m[Ot],Jp=Ot+1<H?m[Ot+1].el:E;Mr[S]===0?_(null,_n,y,Jp,I,C,L,N,x):bs&&(ve<0||S!==Xp[ve]?gn(_n,y,Jp,2):ve--)}}},gn=(p,m,y,E,I=null)=>{const{el:C,type:L,transition:N,children:x,shapeFlag:S}=p;if(S&6){gn(p.component.subTree,m,y,E);return}if(S&128){p.suspense.move(m,y,E);return}if(S&64){L.move(p,m,y,O);return}if(L===Wt){i(C,m,y);for(let $=0;$<x.length;$++)gn(x[$],m,y,E);i(p.anchor,m,y);return}if(L===vu){P(p,m,y);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),i(C,m,y),Nt(()=>N.enter(C),I);else{const{leave:$,delayLeave:j,afterLeave:J}=N,ie=()=>i(C,m,y),Ae=()=>{$(C,()=>{ie(),J&&J()})};j?j(C,ie,Ae):Ae()}else i(C,m,y)},kt=(p,m,y,E=!1,I=!1)=>{const{type:C,props:L,ref:N,children:x,dynamicChildren:S,shapeFlag:H,patchFlag:$,dirs:j}=p;if(N!=null&&_h(N,null,y,p,!0),H&256){m.ctx.deactivate(p);return}const J=H&1&&j,ie=!no(p);let Ae;if(ie&&(Ae=L&&L.onVnodeBeforeUnmount)&&yn(Ae,m,p),H&6)Sa(p.component,y,E);else{if(H&128){p.suspense.unmount(y,E);return}J&&Fi(p,null,m,"beforeUnmount"),H&64?p.type.remove(p,m,y,I,O,E):S&&(C!==Wt||$>0&&$&64)?lt(S,m,y,!1,!0):(C===Wt&&$&384||!I&&H&16)&&lt(x,m,y),E&&Is(p)}(ie&&(Ae=L&&L.onVnodeUnmounted)||J)&&Nt(()=>{Ae&&yn(Ae,m,p),J&&Fi(p,null,m,"unmounted")},y)},Is=p=>{const{type:m,el:y,anchor:E,transition:I}=p;if(m===Wt){As(y,E);return}if(m===vu){b(p);return}const C=()=>{s(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,x=()=>L(y,C);N?N(p.el,C,x):x()}else C()},As=(p,m)=>{let y;for(;p!==m;)y=d(p),s(p),p=y;s(m)},Sa=(p,m,y)=>{const{bum:E,scope:I,update:C,subTree:L,um:N}=p;E&&gu(E),I.stop(),C&&(C.active=!1,kt(L,p,m,y)),N&&Nt(N,m),Nt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},lt=(p,m,y,E=!1,I=!1,C=0)=>{for(let L=C;L<p.length;L++)kt(p[L],m,y,E,I)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,m,y)=>{p==null?m._vnode&&kt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),am(),Jy(),m._vnode=p},O={p:_,um:kt,m:gn,r:Is,mt:Dr,mc:Re,pc:fe,pbc:nt,n:w,o:t};let B,pe;return e&&([B,pe]=e(O)),{render:V,hydrate:B,createApp:ub(V,B)}}function $i({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mv(t,e,n=!1){const i=t.children,s=e.children;if(Y(i)&&Y(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),n||mv(o,a)),a.type===yc&&(a.el=o.el)}}function yb(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const vb=t=>t.__isTeleport,Wt=Symbol.for("v-fgt"),yc=Symbol.for("v-txt"),Ai=Symbol.for("v-cmt"),vu=Symbol.for("v-stc"),so=[];let sn=null;function $e(t=!1){so.push(sn=t?null:[])}function Eb(){so.pop(),sn=so[so.length-1]||null}let wo=1;function ym(t){wo+=t}function gv(t){return t.dynamicChildren=wo>0?sn||Fs:null,Eb(),wo>0&&sn&&sn.push(t),t}function qt(t,e,n,i,s,r){return gv(Ee(t,e,n,i,s,r,!0))}function bi(t,e,n,i,s){return gv(Xe(t,e,n,i,s,!0))}function _l(t){return t?t.__v_isVNode===!0:!1}function Lr(t,e){return t.type===e.type&&t.key===e.key}const vc="__vInternal",_v=({key:t})=>t??null,el=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||ot(t)||ne(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,i=0,s=null,r=t===Wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_v(e),ref:e&&el(e),scopeId:pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gt};return a?(Jd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),wo>0&&!o&&sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&sn.push(l),l}const Xe=Tb;function Tb(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===eb)&&(t=Ai),_l(t)){const a=Js(t,e,!0);return n&&Jd(a,n),wo>0&&!r&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag|=-2,a}if(xb(t)&&(t=t.__vccOpts),e){e=wb(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=Vd(a)),Oe(l)&&(jy(l)&&!Y(l)&&(l=Je({},l)),e.style=Ld(l))}const o=ze(t)?1:UA(t)?128:vb(t)?64:Oe(t)?4:ne(t)?2:0;return Ee(t,e,n,i,s,o,r,!0)}function wb(t){return t?jy(t)||vc in t?Je({},t):t:null}function Js(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Ib(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_v(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(el(e)):[s,el(e)]:el(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Js(t.ssContent),ssFallback:t.ssFallback&&Js(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jn(t=" ",e=0){return Xe(yc,null,t,e)}function Hn(t="",e=!1){return e?($e(),bi(Ai,null,t)):Xe(Ai,null,t)}function vn(t){return t==null||typeof t=="boolean"?Xe(Ai):Y(t)?Xe(Wt,null,t.slice()):typeof t=="object"?ci(t):Xe(yc,null,String(t))}function ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Js(t)}function Jd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Jd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(vc in e)?e._ctx=gt:s===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),i&64?(n=16,e=[jn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ib(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Vd([e.class,i.class]));else if(s==="style")e.style=Ld([e.style,i.style]);else if(oc(s)){const r=e[s],o=i[s];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function yn(t,e,n,i=null){ln(t,e,7,[n,i])}const Ab=cv();let bb=0;function Rb(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Ab,r={uid:bb++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hv(i,s),emitsOptions:ev(i,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=MA.bind(null,r),t.ce&&t.ce(r),r}let Qe=null;const yv=()=>Qe||gt;let Zd,Rs,vm="__VUE_INSTANCE_SETTERS__";(Rs=ah()[vm])||(Rs=ah()[vm]=[]),Rs.push(t=>Qe=t),Zd=t=>{Rs.length>1?Rs.forEach(e=>e(t)):Rs[0](t)};const Zs=t=>{Zd(t),t.scope.on()},Zi=()=>{Qe&&Qe.scope.off(),Zd(null)};function vv(t){return t.vnode.shapeFlag&4}let Io=!1;function Cb(t,e=!1){Io=e;const{props:n,children:i}=t.vnode,s=vv(t);hb(t,n,s,e),pb(t,i);const r=s?Sb(t,e):void 0;return Io=!1,r}function Sb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zd(new Proxy(t.ctx,ib));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?kb(t):null;Zs(t),yr();const r=yi(i,t,0,[t.props,s]);if(vr(),Zi(),Iy(r)){if(r.then(Zi,Zi),e)return r.then(o=>{Em(t,o,e)}).catch(o=>{dc(o,t,0)});t.asyncDep=r}else Em(t,r,e)}else Ev(t,e)}function Em(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Gy(e)),Ev(t,n)}let Tm;function Ev(t,e,n){const i=t.type;if(!t.render){if(!e&&Tm&&!i.render){const s=i.template||Yd(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Je(Je({isCustomElement:r,delimiters:a},o),l);i.render=Tm(s,c)}}t.render=i.render||an}Zs(t),yr(),sb(t),vr(),Zi()}function Pb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}}))}function kb(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Pb(t)},slots:t.slots,emit:t.emit,expose:e}}function ef(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gy(zd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}}))}function Nb(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function xb(t){return ne(t)&&"__vccOpts"in t}const Kt=(t,e)=>PA(t,e,Io);function Tv(t,e,n){const i=arguments.length;return i===2?Oe(e)&&!Y(e)?_l(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_l(n)&&(n=[n]),Xe(t,e,n))}const Ob=Symbol.for("v-scx"),Db=()=>Vt(Ob),Mb="3.3.4",Lb="http://www.w3.org/2000/svg",qi=typeof document<"u"?document:null,wm=qi&&qi.createElement("template"),Vb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?qi.createElementNS(Lb,t):qi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>qi.createTextNode(t),createComment:t=>qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{wm.innerHTML=i?`<svg>${t}</svg>`:t;const a=wm.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fb(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $b(t,e,n){const i=t.style,s=ze(n);if(n&&!s){if(e&&!ze(e))for(const r in e)n[r]==null&&yh(i,r,"");for(const r in n)yh(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Im=/\s*!important$/;function yh(t,e,n){if(Y(n))n.forEach(i=>yh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ub(t,e);Im.test(n)?t.setProperty(_r(i),n.replace(Im,""),"important"):t[i]=n}}const Am=["Webkit","Moz","ms"],Eu={};function Ub(t,e){const n=Eu[e];if(n)return n;let i=kn(e);if(i!=="filter"&&i in t)return Eu[e]=i;i=cc(i);for(let s=0;s<Am.length;s++){const r=Am[s]+i;if(r in t)return Eu[e]=r}return e}const bm="http://www.w3.org/1999/xlink";function Bb(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bm,e.slice(6,e.length)):t.setAttributeNS(bm,e,n);else{const r=X0(e);n==null||r&&!Ry(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Hb(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ry(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function jb(t,e,n,i){t.addEventListener(e,n,i)}function zb(t,e,n,i){t.removeEventListener(e,n,i)}function qb(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Wb(e);if(i){const c=r[e]=Qb(i,s);jb(t,a,c,l)}else o&&(zb(t,a,o,l),r[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function Wb(t){let e;if(Rm.test(t)){e={};let i;for(;i=t.match(Rm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Tu=0;const Kb=Promise.resolve(),Gb=()=>Tu||(Kb.then(()=>Tu=0),Tu=Date.now());function Qb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ln(Yb(i,n.value),e,5,[i])};return n.value=t,n.attached=Gb(),n}function Yb(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cm=/^on[a-z]/,Xb=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?Fb(t,i,s):e==="style"?$b(t,n,i):oc(e)?xd(e)||qb(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jb(t,e,i,s))?Hb(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Bb(t,e,i,s))};function Jb(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Cm.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cm.test(e)&&ze(n)?!1:e in t}const Zb=["ctrl","shift","alt","meta"],eR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zb.some(n=>t[`${n}Key`]&&!e.includes(n))},U$=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=eR[e[s]];if(r&&r(n,e))return}return t(n,...i)},tR=Je({patchProp:Xb},Vb);let Sm;function nR(){return Sm||(Sm=gb(tR))}const iR=(...t)=>{const e=nR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=sR(i);if(!s)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sR(t){return ze(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Er(e)},Er=function(t){return new Error("Firebase Database ("+wv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new oR;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Av=function(t){const e=Iv(t);return Ec.encodeByteArray(e,!0)},yl=function(t){return Av(t).replace(/\./g,"")},vl=function(t){try{return Ec.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){return bv(void 0,t)}function bv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lR(n)||(t[n]=bv(t[n],e[n]));return t}function lR(t){return t!=="__proto__"}/**
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
 */function cR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uR=()=>cR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},tf=()=>{try{return uR()||hR()||dR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rv=t=>{var e,n;return(n=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fR=t=>{const e=Rv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Cv=()=>{var t;return(t=tf())===null||t===void 0?void 0:t.config},Sv=t=>{var e;return(e=tf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function pR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function mR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gR(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kv(){return wv.NODE_ADMIN===!0}function Nv(){try{return typeof indexedDB=="object"}catch{return!1}}function _R(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="FirebaseError";class Ln extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=yR,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,i)}}function vR(t,e){return t.replace(ER,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ER=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=bo(vl(r[0])||""),n=bo(vl(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},TR=function(t){const e=xv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wR=function(t){const e=xv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function er(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function El(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Tl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Pm(r)&&Pm(o)){if(!Tl(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function AR(t,e){const n=new bR(t,e);return n.subscribe.bind(n)}class bR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=wu),s.error===void 0&&(s.error=wu),s.complete===void 0&&(s.complete=wu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wu(){}function CR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,D(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Tc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bi="[DEFAULT]";/**
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
 */class PR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ao;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Bi?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
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
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const OR={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},DR=ue.INFO,MR={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},LR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=MR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=DR,this._logHandler=LR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const VR=(t,e)=>e.some(n=>t instanceof n);let km,Nm;function FR(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $R(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,Eh=new WeakMap,Dv=new WeakMap,Iu=new WeakMap,sf=new WeakMap;function UR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ov.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function BR(t){if(Eh.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Eh.set(t,e)}let Th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HR(t){Th=t(Th)}function jR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Au(this),e,...n);return Dv.set(i,e.sort?e.sort():[e]),vi(i)}:$R().includes(t)?function(...e){return t.apply(Au(this),e),vi(Ov.get(this))}:function(...e){return vi(t.apply(Au(this),e))}}function zR(t){return typeof t=="function"?jR(t):(t instanceof IDBTransaction&&BR(t),VR(t,FR())?new Proxy(t,Th):t)}function vi(t){if(t instanceof IDBRequest)return UR(t);if(Iu.has(t))return Iu.get(t);const e=zR(t);return e!==t&&(Iu.set(t,e),sf.set(e,t)),e}const Au=t=>sf.get(t);function qR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=vi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(vi(o.result),l.oldVersion,l.newVersion,vi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WR=["get","getKey","getAll","getAllKeys","count"],KR=["put","add","delete","clear"],bu=new Map;function xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bu.get(e))return bu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=KR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||WR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return bu.set(e,r),r}HR(t=>({...t,get:(e,n,i)=>xm(e,n)||t.get(e,n,i),has:(e,n)=>!!xm(e,n)||t.has(e,n)}));/**
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
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function QR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wh="@firebase/app",Om="0.9.15";/**
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
 */const is=new Yo("@firebase/app"),YR="@firebase/app-compat",XR="@firebase/analytics-compat",JR="@firebase/analytics",ZR="@firebase/app-check-compat",eC="@firebase/app-check",tC="@firebase/auth",nC="@firebase/auth-compat",iC="@firebase/database",sC="@firebase/database-compat",rC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",cC="@firebase/messaging",uC="@firebase/messaging-compat",hC="@firebase/performance",dC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",_C="@firebase/firestore",yC="@firebase/firestore-compat",vC="firebase",EC="10.1.0";/**
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
 */const Ih="[DEFAULT]",TC={[wh]:"fire-core",[YR]:"fire-core-compat",[JR]:"fire-analytics",[XR]:"fire-analytics-compat",[eC]:"fire-app-check",[ZR]:"fire-app-check-compat",[tC]:"fire-auth",[nC]:"fire-auth-compat",[iC]:"fire-rtdb",[sC]:"fire-rtdb-compat",[rC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[cC]:"fire-fcm",[uC]:"fire-fcm-compat",[hC]:"fire-perf",[dC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[_C]:"fire-fst",[yC]:"fire-fst-compat","fire-js":"fire-js",[vC]:"fire-js-all"};/**
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
 */const wl=new Map,Ah=new Map;function wC(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Ah.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Ah.set(e,t);for(const n of wl.values())wC(n,t);return!0}function rf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const IC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ei=new Tr("app","Firebase",IC);/**
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
 */class AC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=EC;function Mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ei.create("bad-app-name",{appName:String(s)});if(n||(n=Cv()),!n)throw Ei.create("no-options");const r=wl.get(s);if(r){if(Tl(n,r.options)&&Tl(i,r.config))return r;throw Ei.create("duplicate-app",{appName:s})}const o=new xR(s);for(const l of Ah.values())o.addComponent(l);const a=new AC(n,i,o);return wl.set(s,a),a}function of(t=Ih){const e=wl.get(t);if(!e&&t===Ih&&Cv())return Mv();if(!e)throw Ei.create("no-app",{appName:t});return e}function Ft(t,e,n){var i;let s=(i=TC[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}Nn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bC="firebase-heartbeat-database",RC=1,Ro="firebase-heartbeat-store";let Ru=null;function Lv(){return Ru||(Ru=qR(bC,RC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ro)}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),Ru}async function CC(t){try{return await(await Lv()).transaction(Ro).objectStore(Ro).get(Vv(t))}catch(e){if(e instanceof Ln)is.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function Dm(t,e){try{const i=(await Lv()).transaction(Ro,"readwrite");await i.objectStore(Ro).put(e,Vv(t)),await i.done}catch(n){if(n instanceof Ln)is.warn(n.message);else{const i=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(i.message)}}}function Vv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SC=1024,PC=30*24*60*60*1e3;class kC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=PC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mm(),{heartbeatsToSend:n,unsentEntries:i}=NC(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mm(){return new Date().toISOString().substring(0,10)}function NC(t,e=SC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Lm(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nv()?_R().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lm(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OC(t){Nn(new un("platform-logger",e=>new GR(e),"PRIVATE")),Nn(new un("heartbeat",e=>new kC(e),"PRIVATE")),Ft(wh,Om,t),Ft(wh,Om,"esm2017"),Ft("fire-js","")}OC("");function af(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DC=Fv,$v=new Tr("auth","Firebase",Fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Yo("@firebase/auth");function MC(t,...e){Il.logLevel<=ue.WARN&&Il.warn(`Auth (${Ni}): ${t}`,...e)}function tl(t,...e){Il.logLevel<=ue.ERROR&&Il.error(`Auth (${Ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,...e){throw lf(t,...e)}function Cn(t,...e){return lf(t,...e)}function Uv(t,e,n){const i=Object.assign(Object.assign({},DC()),{[e]:n});return new Tr("auth","Firebase",i).create(e,{appName:t.name})}function LC(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&xn(t,"argument-error"),Uv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return $v.create(t,...e)}function Z(t,e,...n){if(!t)throw lf(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Yn(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VC(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VC()||mR()||"connection"in navigator)?navigator.onLine:!0}function $C(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=nf()||Pv()}get(){return FC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new Xo(3e4,6e4);function Hv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jo(t,e,n,i,s={}){return jv(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=wr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bv.fetch()(zv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function jv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},UC),e);try{const s=new jC(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Uv(t,u,c);xn(t,u)}}catch(s){if(s instanceof Ln)throw s;xn(t,"network-request-failed",{message:String(s)})}}async function HC(t,e,n,i,s={}){const r=await Jo(t,e,n,i,s);return"mfaPendingCredential"in r&&xn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function zv(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?cf(t.config,s):`${t.config.apiScheme}://${s}`}class jC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Cn(this.auth,"network-request-failed")),BC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Cn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return Jo(t,"POST","/v1/accounts:delete",e)}async function qC(t,e){return Jo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WC(t,e=!1){const n=Ze(t),i=await n.getIdToken(e),s=uf(i);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ro(Cu(s.auth_time)),issuedAtTime:ro(Cu(s.iat)),expirationTime:ro(Cu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Cu(t){return Number(t)*1e3}function uf(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const s=vl(n);return s?JSON.parse(s):(tl("Failed to decode base64 JWT payload"),null)}catch(s){return tl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function KC(t){const e=uf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ln&&GC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function GC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Al(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Co(t,qC(n,{idToken:i}));Z(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?JC(r.providerUserInfo):[],a=XC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YC(t){const e=Ze(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function JC(t){return t.map(e=>{var{providerId:n}=e,i=af(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){const n=await jv(t,{},async()=>{const i=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=zv(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await ZC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new So;return i&&(Z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Co(this,zC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:b,isAnonymous:X,providerData:G,stsTokenManager:we}=n;Z(P&&we,e,"internal-error");const Re=So.fromJSON(this.name,we);Z(typeof P=="string",e,"internal-error"),ai(h,e.name),ai(d,e.name),Z(typeof b=="boolean",e,"internal-error"),Z(typeof X=="boolean",e,"internal-error"),ai(f,e.name),ai(g,e.name),ai(_,e.name),ai(v,e.name),ai(T,e.name),ai(R,e.name);const Pt=new es({uid:P,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:Re,createdAt:T,lastLoginAt:R});return G&&Array.isArray(G)&&(Pt.providerData=G.map(nt=>Object.assign({},nt))),v&&(Pt._redirectEventId=v),Pt}static async _fromIdTokenResponse(e,n,i=!1){const s=new So;s.updateFromServerResponse(n);const r=new es({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Al(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Map;function qn(t){Yn(t instanceof Function,"Expected a class definition");let e=Fm.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fm.set(t,e),e)}/**
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
 */class Wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wv.type="NONE";const $m=Wv;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=nl(this.userKey,s.apiKey,r),this.fullPersistenceKey=nl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new js(qn($m),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||qn($m);const o=nl(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=es._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new js(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new js(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xv(e))return"Blackberry";if(Jv(e))return"Webos";if(hf(e))return"Safari";if((e.includes("chrome/")||Gv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kv(t=wt()){return/firefox\//i.test(t)}function hf(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gv(t=wt()){return/crios\//i.test(t)}function Qv(t=wt()){return/iemobile/i.test(t)}function Yv(t=wt()){return/android/i.test(t)}function Xv(t=wt()){return/blackberry/i.test(t)}function Jv(t=wt()){return/webos/i.test(t)}function wc(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eS(t=wt()){var e;return wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return gR()&&document.documentMode===10}function Zv(t=wt()){return wc(t)||Yv(t)||Jv(t)||Xv(t)||/windows phone/i.test(t)||Qv(t)}function nS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e=[]){let n;switch(t){case"Browser":n=Um(wt());break;case"Worker":n=`${Um(wt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${i}`}async function tE(t,e){return Jo(t,"GET","/v2/recaptchaConfig",Hv(t,e))}function Bm(t){return t!==void 0&&t.enterprise!==void 0}class nE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Cn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",iS().appendChild(i)})}function sS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rS="https://www.google.com/recaptcha/enterprise.js?render=",oS="recaptcha-enterprise",aS="NO_RECAPTCHA";class lS{constructor(e){this.type=oS,this.auth=Ir(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{tE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Bm(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(aS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Bm(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}iE(rS+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class cS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new cS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}async initializeRecaptchaConfig(){const e=await tE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new lS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return Ze(t)}class Hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=AR(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){const n=rf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Tl(r,e??{}))return s;xn(s,"already-initialized")}return n.initialize({options:e})}function dS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function fS(t,e,n){const i=Ir(t);Z(i._canInitEmulator,i,"emulator-config-failed"),Z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=sE(e),{host:o,port:a}=pS(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mS()}function sE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pS(t){const e=sE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:jm(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:jm(o)}}}function jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return HC(t,"POST","/v1/accounts:signInWithIdp",Hv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="http://localhost";class ss extends rE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=af(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ss(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,zs(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:gS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Zo{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return di.credential(n,i)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Zo{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Zo{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return pi.credential(n,i)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await es._fromIdTokenResponse(e,i,s),o=zm(i);return new tr({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=zm(i);return new tr({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Ln{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new bl(e,n,i,s)}}function oE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,r,e,i):r})}async function _S(t,e,n=!1){const i=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",i)}/**
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
 */async function yS(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Co(t,oE(i,s,e,t),n);Z(r.idToken,i,"internal-error");const o=uf(r.idToken);Z(o,i,"internal-error");const{sub:a}=o;return Z(t.uid===a,i,"user-mismatch"),tr._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&xn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e,n=!1){const i="signIn",s=await oE(t,i,e),r=await tr._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function aE(t,e,n,i){return Ze(t).onIdTokenChanged(e,n,i)}function ES(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}const Rl="__sak";/**
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
 */class lE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){const t=wt();return hf(t)||wc(t)}const wS=1e3,IS=10;class cE extends lE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TS()&&nS(),this.fallbackToPolling=Zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);tS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IS):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},wS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cE.type="LOCAL";const AS=cE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends lE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uE.type="SESSION";const hE=uE;/**
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
 */function bS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ic(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await bS(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ff("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function CS(t){Sn().location.href=t}/**
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
 */function dE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function SS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kS(){return dE()?self:null}/**
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
 */const fE="firebaseLocalStorageDb",NS=1,Cl="firebaseLocalStorage",pE="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function xS(){const t=indexedDB.deleteDatabase(fE);return new ea(t).toPromise()}function Rh(){const t=indexedDB.open(fE,NS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Cl,{keyPath:pE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Cl)?e(i):(i.close(),await xS(),e(await Rh()))})})}async function qm(t,e,n){const i=Ac(t,!0).put({[pE]:e,value:n});return new ea(i).toPromise()}async function OS(t,e){const n=Ac(t,!1).get(e),i=await new ea(n).toPromise();return i===void 0?null:i.value}function Wm(t,e){const n=Ac(t,!0).delete(e);return new ea(n).toPromise()}const DS=800,MS=3;class mE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>MS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(kS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SS(),!this.activeServiceWorker)return;this.sender=new RS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await qm(e,Rl,"1"),await Wm(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>qm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>OS(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ac(s,!1).getAll();return new ea(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mE.type="LOCAL";const LS=mE;new Xo(3e4,6e4);/**
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
 */function gE(t,e){return e?qn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pf extends rE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VS(t){return vS(t.auth,new pf(t),t.bypassAuthState)}function FS(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),yS(n,new pf(t),t.bypassAuthState)}async function $S(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),_S(n,new pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VS;case"linkViaPopup":case"linkViaRedirect":return $S;case"reauthViaPopup":case"reauthViaRedirect":return FS;default:xn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Xo(2e3,1e4);async function B$(t,e,n){const i=Ir(t);LC(t,e,df);const s=gE(i,n);return new Wi(i,"signInViaPopup",e,s).executeNotNull()}class Wi extends _E{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="pendingRedirect",il=new Map;class HS extends _E{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const i=await jS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jS(t,e){const n=WS(e),i=qS(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function zS(t,e){il.set(t._key(),e)}function qS(t){return qn(t._redirectPersistence)}function WS(t){return nl(BS,t.config.apiKey,t.name)}async function H$(t,e){return await Ir(t)._initializationPromise,yE(t,e,!1)}async function yE(t,e,n=!1){const i=Ir(t),s=gE(i,e),o=await new HS(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=10*60*1e3;class GS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!vE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Km(e))}saveEventToCache(e){this.cachedEventUids.add(Km(e)),this.lastProcessedEventTime=Date.now()}}function Km(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e={}){return Jo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JS=/^https?/;async function ZS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YS(t);for(const n of e)try{if(eP(n))return}catch{}xn(t,"unauthorized-domain")}function eP(t){const e=bh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!JS.test(n))return!1;if(XS.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const tP=new Xo(3e4,6e4);function Gm(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nP(t){return new Promise((e,n)=>{var i,s,r;function o(){Gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gm(),n(Cn(t,"network-request-failed"))},timeout:tP.get()})}if(!((s=(i=Sn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Sn().gapi)===null||r===void 0)&&r.load)o();else{const a=sS("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},iE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sl=null,e})}let sl=null;function iP(t){return sl=sl||nP(t),sl}/**
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
 */const sP=new Xo(5e3,15e3),rP="__/auth/iframe",oP="emulator/auth/iframe",aP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cP(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cf(e,oP):`https://${t.config.authDomain}/${rP}`,i={apiKey:e.apiKey,appName:t.name,v:Ni},s=lP.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${wr(i).slice(1)}`}async function uP(t){const e=await iP(t),n=Sn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:cP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aP,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Sn().setTimeout(()=>{r(o)},sP.get());function l(){Sn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const hP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dP=500,fP=600,pP="_blank",mP="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gP(t,e,n,i=dP,s=fP){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hP),{width:i.toString(),height:s.toString(),top:r,left:o}),c=wt().toLowerCase();n&&(a=Gv(c)?pP:n),Kv(c)&&(e=e||mP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(eS(c)&&a!=="_self")return _P(e||"",a),new Qm(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Qm(h)}function _P(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const yP="__/auth/handler",vP="emulator/auth/handler",EP=encodeURIComponent("fac");async function Ym(t,e,n,i,s,r){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ni,eventId:s};if(e instanceof df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Zo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${EP}=${encodeURIComponent(l)}`:"";return`${TP(t)}?${wr(a).slice(1)}${c}`}function TP({config:t}){return t.emulator?cf(t,vP):`https://${t.authDomain}/${yP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="webStorageSupport";class wP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hE,this._completeRedirectFn=yE,this._overrideRedirectResult=zS}async _openPopup(e,n,i,s){var r;Yn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ym(e,n,i,bh(),s);return gP(e,o,ff())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ym(e,n,i,bh(),s);return CS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await uP(e),i=new GS(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Su];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zv()||hf()||wc()}}const IP=wP;var Xm="@firebase/auth",Jm="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RP(t){Nn(new un("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eE(t)},c=new uS(i,s,r,l);return dS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Nn(new un("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(i=>new AP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Xm,Jm,bP(t)),Ft(Xm,Jm,"esm2017")}/**
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
 */const CP=5*60,SP=Sv("authIdTokenMaxAge")||CP;let Zm=null;const PP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>SP)return;const s=n==null?void 0:n.token;Zm!==s&&(Zm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EE(t=of()){const e=rf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hS(t,{popupRedirectResolver:IP,persistence:[LS,AS,hE]}),i=Sv("authTokenSyncURL");if(i){const r=PP(i);ES(n,r,()=>r(n.currentUser)),aE(n,o=>r(o))}const s=Rv("auth");return s&&fS(n,`http://${s}`),n}RP("Browser");var kP=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Map,xP={activated:!1,tokenObservers:[]};function hn(t){return NP.get(t)||Object.assign({},xP)}const eg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ao,await DP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ao,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function DP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Sl=new Tr("appCheck","AppCheck",MP);function TE(t){if(!hn(t).activated)throw Sl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="firebase-app-check-database",VP=1,Ch="firebase-app-check-store";let Va=null;function FP(){return Va||(Va=new Promise((t,e)=>{try{const n=indexedDB.open(LP,VP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Sl.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ch,{keyPath:"compositeKey"})}}}catch(n){e(Sl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Va)}function $P(t,e){return UP(BP(t),e)}async function UP(t,e){const i=(await FP()).transaction(Ch,"readwrite"),r=i.objectStore(Ch).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Sl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function BP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Yo("@firebase/app-check");function tg(t,e){return Nv()?$P(t,e).catch(n=>{Sh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={error:"UNKNOWN_ERROR"};function jP(t){return Ec.encodeString(JSON.stringify(t),!1)}async function Ph(t,e=!1){const n=t.app;TE(n);const i=hn(n);let s=i.token,r;if(s&&!Qr(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Qr(l)?s=l:await tg(n,void 0))}if(!e&&s&&Qr(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Sh.warn(l.message):Sh.error(l),r=l}let a;return s?r?Qr(s)?a={token:s.token,internalError:r}:a=ig(r):(a={token:s.token},i.token=s,await tg(n,s)):a=ig(r),o&&KP(n,a),a}async function zP(t){const e=t.app;TE(e);const{provider:n}=hn(e);{const{token:i}=await n.getToken();return{token:i}}}function qP(t,e,n,i){const{app:s}=t,r=hn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Qr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ng(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ng(t))}function wE(t,e){const n=hn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function ng(t){const{app:e}=t,n=hn(e);let i=n.tokenRefresher;i||(i=WP(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function WP(t){const{app:e}=t;return new OP(async()=>{const n=hn(e);let i;if(n.token?i=await Ph(t,!0):i=await Ph(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=hn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},eg.RETRIAL_MIN_WAIT,eg.RETRIAL_MAX_WAIT)}function KP(t,e){const n=hn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Qr(t){return t.expireTimeMillis-Date.now()>0}function ig(t){return{token:jP(HP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=hn(this.app);for(const n of e)wE(this.app,n.next);return Promise.resolve()}}function QP(t,e){return new GP(t,e)}function YP(t){return{getToken:e=>Ph(t,e),getLimitedUseToken:()=>zP(t),addTokenListener:e=>qP(t,"INTERNAL",e),removeTokenListener:e=>wE(t.app,e)}}const XP="@firebase/app-check",JP="0.8.0",ZP="app-check",sg="app-check-internal";function ek(){Nn(new un(ZP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return QP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(sg).initialize()})),Nn(new un(sg,t=>{const e=t.getProvider("app-check").getImmediate();return YP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ft(XP,JP)}ek();var tk="firebase",nk="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(tk,nk,"app");const IE=Symbol("firebaseApp");function ta(t){return yv()&&Vt(IE,null)||of(t)}const wn=()=>{},ik=typeof window<"u";function mf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function sk(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function gs(t){return!!t&&typeof t=="object"}const rk=Object.prototype;function ok(t){return gs(t)&&Object.getPrototypeOf(t)===rk}function gf(t){return gs(t)&&t.type==="document"}function ak(t){return gs(t)&&t.type==="collection"}function lk(t){return gf(t)||ak(t)}function ck(t){return gs(t)&&t.type==="query"}function uk(t){return gs(t)&&"ref"in t}function hk(t){return gs(t)&&typeof t.bucket=="string"}function dk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const fk=Symbol.for("v-scx");function pk(){return!!Vt(fk,0)}const Fa=new WeakMap;function mk(t,e){if(!Fa.has(t)){const n=Py(!0);Fa.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Fa.delete(t)}}return Fa.get(t)}const AE=new WeakMap;function bc(t){return AE.get(ta(t))}const $a=new WeakMap;function bE(t){const e=ta(t);if(!$a.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{$a.set(e,r),n(r.value)}];$a.set(e,s)}return $a.get(e)}function rg(t){const e=bE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function gk(t,e){const n=EE(e);aE(n,i=>{const s=bE();t.value=i,Array.isArray(s)&&s[1](t)})}const og="@firebase/database",ag="1.0.1";/**
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
 */let RE="";function _k(t){RE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ni(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yk(e)}}catch{}return new vk},Ki=CE("localStorage"),kh=CE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Yo("@firebase/database"),Ek=function(){let t=1;return function(){return t++}}(),SE=function(t){const e=SR(t),n=new IR;n.update(e);const i=n.digest();return Ec.encodeByteArray(i)},na=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=na.apply(null,i):typeof i=="object"?e+=rt(i):e+=i,e+=" "}return e};let ts=null,lg=!0;const Tk=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qs.logLevel=ue.VERBOSE,ts=qs.log.bind(qs),e&&kh.set("logging_enabled",!0)):typeof t=="function"?ts=t:(ts=null,kh.remove("logging_enabled"))},ht=function(...t){if(lg===!0&&(lg=!1,ts===null&&kh.get("logging_enabled")===!0&&Tk(!0)),ts){const e=na.apply(null,t);ts(e)}},ia=function(t){return function(...e){ht(t,...e)}},Nh=function(...t){const e="FIREBASE INTERNAL ERROR: "+na(...t);qs.error(e)},rs=function(...t){const e=`FIREBASE FATAL ERROR: ${na(...t)}`;throw qs.error(e),new Error(e)},$t=function(...t){const e="FIREBASE WARNING: "+na(...t);qs.warn(e)},wk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},PE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ik=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nr="[MIN_NAME]",os="[MAX_NAME]",Ar=function(t,e){if(t===e)return 0;if(t===nr||e===os)return-1;if(e===nr||t===os)return 1;{const n=cg(t),i=cg(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ak=function(t,e){return t===e?0:t<e?-1:1},Vr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},_f=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=rt(e[i]),n+=":",n+=_f(t[e[i]]);return n+="}",n},kE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const NE=function(t){D(!PE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Rk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ck=new RegExp("^-?(0*)\\d{1,10}$"),Sk=-2147483648,Pk=2147483647,cg=function(t){if(Ck.test(t)){const e=Number(t);if(e>=Sk&&e<=Pk)return e}return null},sa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $t("Exception was thrown by user callback.",n),e},Math.floor(0))}},kk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Nk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(e)}}class xh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="5",xE="v",OE="s",DE="r",ME="f",LE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VE="ls",FE="p",Oh="ac",$E="websocket",UE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function BE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===$E)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===UE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dk(t)&&(n.ns=t.namespace);const s=[];return Xt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.counters_={}}incrementCounter(e,n=1){ni(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={},ku={};function vf(t){const e=t.toString();return Pu[e]||(Pu[e]=new Mk),Pu[e]}function Lk(t,e){const n=t.toString();return ku[n]||(ku[n]=e()),ku[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&sa(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="start",Fk="close",$k="pLPCommand",Uk="pRTLPCB",HE="id",jE="pw",zE="ser",Bk="cb",Hk="seg",jk="ts",zk="d",qk="dframe",qE=1870,WE=30,Wk=qE-WE,Kk=25e3,Gk=3e4;class Ds{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ia(e),this.stats_=vf(n),this.urlFn=l=>(this.appCheckToken&&(l[Oh]=this.appCheckToken),BE(n,UE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Vk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gk)),Ik(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ef((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ug)this.id=a,this.password=l;else if(o===Fk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ug]="t",i[zE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Bk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[xE]=yf,this.transportSessionId&&(i[OE]=this.transportSessionId),this.lastSessionId&&(i[VE]=this.lastSessionId),this.applicationId&&(i[FE]=this.applicationId),this.appCheckToken&&(i[Oh]=this.appCheckToken),typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(i[DE]=ME);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bk()&&!Rk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Av(n),s=kE(i,Wk);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[qk]="t",i[HE]=e,i[jE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ef{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ek(),window[$k+this.uniqueCallbackIdentifier]=e,window[Uk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ef.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[HE]=this.myID,e[jE]=this.myPW,e[zE]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+WE+i.length<=qE;){const o=this.pendingSegs.shift();i=i+"&"+Hk+s+"="+o.seg+"&"+jk+s+"="+o.ts+"&"+zk+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Kk)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=16384,Yk=45e3;let Pl=null;typeof MozWebSocket<"u"?Pl=MozWebSocket:typeof WebSocket<"u"&&(Pl=WebSocket);class nn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ia(this.connId),this.stats_=vf(n),this.connURL=nn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[xE]=yf,typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(o[DE]=ME),n&&(o[OE]=n),i&&(o[VE]=i),s&&(o[Oh]=s),r&&(o[FE]=r),BE(e,$E,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let i;kv(),this.mySock=new Pl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Pl!==null&&!nn.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=bo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=kE(n,Qk);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ds,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nn&&nn.isAvailable();let i=n&&!nn.previouslyFailed();if(e.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[nn];else{const s=this.transports_=[];for(const r of Po.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Po.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=6e4,Jk=5e3,Zk=10*1024,eN=100*1024,Nu="t",hg="d",tN="s",dg="r",nN="e",fg="o",pg="a",mg="n",gg="p",iN="h";class sN{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ia("c:"+this.id+":"),this.transportManager_=new Po(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nu in e){const n=e[Nu];n===pg?this.upgradeIfSecondaryHealthy_():n===dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vr("t",e),i=Vr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vr("t",e),i=Vr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vr(Nu,e);if(hg in e){const i=e[hg];if(n===iN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tN?this.onConnectionShutdown_(i):n===dg?this.onReset_(i):n===nN?Nh("Server Error: "+i):n===fg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yf!==i&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends GE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kl}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=32,yg=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Te(){return new ke("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ri(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function QE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function YE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function XE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Ye(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ke)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ke(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=ae(t),i=ae(e);if(n===null)return e;if(n===i)return Qt(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JE(t,e){if(Ri(t)!==Ri(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function rn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ri(t)>Ri(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class oN{constructor(e,n){this.errorPrefix_=n,this.parts_=YE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Tc(this.parts_[i]);ZE(this)}}function aN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tc(e),ZE(t)}function lN(t){const e=t.parts_.pop();t.byteLength_-=Tc(e),t.parts_.length>0&&(t.byteLength_-=1)}function ZE(t){if(t.byteLength_>yg)throw new Error(t.errorPrefix_+"has a key path longer than "+yg+" bytes ("+t.byteLength_+").");if(t.parts_.length>_g)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_g+") or object contains a cycle "+Hi(t))}function Hi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends GE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Tf}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=1e3,cN=60*5*1e3,vg=30*1e3,uN=1.3,hN=3e4,dN="server_kill",Eg=3;class Gn extends KE{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gn.nextPersistentConnectionId_++,this.log_=ia("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fr,this.maxReconnectDelay_=cN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(rt(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ao,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Gn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ni(e,"w")){const i=er(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nh("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hN&&(this.reconnectDelay_=Fr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new sN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{$t(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(dN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&$t(h),l())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vh(this.interruptReasons_)&&(this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>_f(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ke(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eg&&(this.reconnectDelay_=vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+RE.replace(/\./g,"-")]=1,nf()?e["framework.cordova"]=1:Pv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kl.getInstance().currentlyOnline();return vh(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new le(nr,e),s=new le(nr,n);return this.compare(i,s)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;class eT extends Rc{static get __EMPTY_NODE(){return Ua}static set __EMPTY_NODE(e){Ua=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw Er("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(os,Ua)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ua)}toString(){return".key"}}const Ws=new eT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mt=class Yr{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Yr.RED,this.left=s??In.EMPTY_NODE,this.right=r??In.EMPTY_NODE}copy(e,n,i,s,r){return new Yr(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return In.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mt.RED=!0;Mt.BLACK=!1;class fN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let In=class rl{constructor(e,n=rl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Mt.BLACK,null,null))}remove(e){return new rl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ba(this.root_,null,this.comparator_,!0,e)}};In.EMPTY_NODE=new fN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e){return Ar(t.name,e.name)}function wf(t,e){return Ar(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;function mN(t){Dh=t}const tT=function(t){return typeof t=="number"?"number:"+NE(t):"string:"+t},nT=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ni(e,".sv"),"Priority must be a string or number.")}else D(t===Dh||t.isEmpty(),"priority of unexpected type.");D(t===Dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nT(this.priorityNode_)}static set __childrenNodeConstructor(e){Tg=e}static get __childrenNodeConstructor(){return Tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ae(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ae(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||Ri(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=NE(this.value_):e+=this.value_,this.lazyHash_=SE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=We.VALUE_TYPE_ORDER.indexOf(n),r=We.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iT,sT;function gN(t){iT=t}function _N(t){sT=t}class yN extends Rc{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ar(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(os,new We("[PRIORITY-POST]",sT))}makePost(e,n){const i=iT(e);return new le(n,new We("[PRIORITY-POST]",i))}toString(){return".priority"}}const _t=new yN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=Math.log(2);class EN{constructor(e){const n=r=>parseInt(Math.log(r)/vN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nl=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Mt(d,h.node,Mt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),_=s(f+1,c);return h=t[f],d=n?n(h):h,new Mt(d,h.node,Mt.BLACK,g,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,_){const v=h-g,T=h;h-=g;const R=s(v+1,T),P=t[v],b=n?n(P):P;f(new Mt(b,P.node,_,null,R))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));_?d(v,Mt.BLACK):(d(v,Mt.BLACK),d(v,Mt.RED))}return u},o=new EN(t.length),a=r(o);return new In(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;const Cs={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Cs&&_t,"ChildrenNode.ts has not been loaded"),xu=xu||new Wn({".priority":Cs},{".priority":_t}),xu}get(e){const n=er(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof In?n:null}hasIndex(e){return ni(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(le.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Nl(i,e.getCompare()):a=Cs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wn(u,c)}addToIndexes(e,n){const i=El(this.indexes_,(s,r)=>{const o=er(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),s===Cs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Nl(a,o.getCompare())}else return Cs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new Wn(i,this.indexSet_)}removeFromIndexes(e,n){const i=El(this.indexes_,s=>{if(s===Cs)return s;{const r=n.get(e.name);return r?s.remove(new le(e.name,r)):s}});return new Wn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class me{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nT(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $r||($r=new me(new In(wf),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$r}updatePriority(e){return this.children_.isEmpty()?this:new me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$r:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new le(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?$r:this.priorityNode_;return new me(s,o,r)}}updateChild(e,n){const i=ae(e);if(i===null)return n;{D(ae(e)!==".priority"||Ri(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Se(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(_t,(o,a)=>{n[o]=a.val(e),i++,r&&me.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tT(this.getPriority().val())+":"),this.forEachChild(_t,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":SE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new le(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,le.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(_t),s=n.getIterator(_t);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TN extends me{constructor(){super(new In(wf),me.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return me.EMPTY_NODE}isEmpty(){return!1}}const ra=new TN;Object.defineProperties(le,{MIN:{value:new le(nr,me.EMPTY_NODE)},MAX:{value:new le(os,ra)}});eT.__EMPTY_NODE=me.EMPTY_NODE;We.__childrenNodeConstructor=me;mN(ra);_N(ra);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=!0;function dt(t,e=null){if(t===null)return me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,dt(e))}if(!(t instanceof Array)&&wN){const n=[];let i=!1;if(Xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=dt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return me.EMPTY_NODE;const r=Nl(n,pN,o=>o.name,wf);if(i){const o=Nl(n,_t.getCompare());return new me(r,dt(e),new Wn({".priority":o},{".priority":_t}))}else return new me(r,dt(e),Wn.Default)}else{let n=me.EMPTY_NODE;return Xt(t,(i,s)=>{if(ni(t,i)&&i.substring(0,1)!=="."){const r=dt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(dt(e))}}gN(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN extends Rc{constructor(e){super(),this.indexPath_=e,D(!re(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ar(e.name,n.name):r}makePost(e,n){const i=dt(e),s=me.EMPTY_NODE.updateChild(this.indexPath_,i);return new le(n,s)}maxPost(){const e=me.EMPTY_NODE.updateChild(this.indexPath_,ra);return new le(os,e)}toString(){return YE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN extends Rc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ar(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const i=dt(e);return new le(n,i)}toString(){return".value"}}const bN=new AN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){return{type:"value",snapshotNode:t}}function CN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function SN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:os}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new If;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ig(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_t?n="$priority":t.index_===bN?n="$value":t.index_===Ws?n="$key":(D(t.index_ instanceof IN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=rt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+rt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=rt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ag(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends KE{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ia("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xl.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ig(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),er(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=xl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ig(e._queryParams),i=e._path.toString(),s=new Ao;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bo(a.responseText)}catch{$t("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.rootNode_=me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){return{value:null,children:new Map}}function rT(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ae(e);t.children.has(i)||t.children.set(i,Ol());const s=t.children.get(i);e=Se(e),rT(s,e,n)}}function Mh(t,e,n){t.value!==null?n(e,t.value):NN(t,(i,s)=>{const r=new ke(e.toString()+"/"+i);Mh(s,r,n)})}function NN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=10*1e3,ON=30*1e3,DN=5*60*1e3;class MN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xN(e);const i=bg+(ON-bg)*Math.random();oo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Xt(e,(s,r)=>{r>0&&ni(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*DN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function oT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function aT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=An.ACK_USER_WRITE,this.source=oT()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new Dl(Te(),n,this.revert)}}else return D(ae(this.path)===e,"operationForChild called for unrelated child."),new Dl(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=An.OVERWRITE}operationForChild(e){return re(this.path)?new as(this.source,Te(),this.snap.getImmediateChild(e)):new as(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=An.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new as(this.source,Te(),n.value):new ko(this.source,Te(),n)}else return D(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ko(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(PN(o.childName,o.snapshotNode))}),Ur(t,s,"child_removed",e,i,n),Ur(t,s,"child_added",e,i,n),Ur(t,s,"child_moved",r,i,n),Ur(t,s,"child_changed",e,i,n),Ur(t,s,"value",e,i,n),s}function Ur(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>FN(t,a,l)),o.forEach(a=>{const l=VN(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FN(t,e,n){if(e.childName==null||n.childName==null)throw Er("Should only compare child_ events.");const i=new le(e.childName,e.snapshotNode),s=new le(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,i){return cT(new Af(e,n,i),t.serverCache)}function uT(t,e,n,i){return cT(t.eventCache,new Af(e,n,i))}function Lh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ls(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;const $N=()=>(Ou||(Ou=new In(Ak)),Ou);class Ce{constructor(e,n=$N()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Xt(e,(i,s)=>{n=n.set(new ke(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Te(),value:this.value};if(re(e))return null;{const i=ae(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Se(e),n);return r!=null?{path:Ye(new ke(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ae(e),i=this.children.get(n);return i!==null?i.subtree(Se(e)):new Ce(null)}}set(e,n){if(re(e))return new Ce(n,this.children);{const i=ae(e),r=(this.children.get(i)||new Ce(null)).set(Se(e),n),o=this.children.insert(i,r);return new Ce(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ae(e),i=this.children.get(n);if(i){const s=i.remove(Se(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const n=ae(e),i=this.children.get(n);return i?i.get(Se(e)):null}}setTree(e,n){if(re(e))return n;{const i=ae(e),r=(this.children.get(i)||new Ce(null)).setTree(Se(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ce(this.value,o)}}fold(e){return this.fold_(Te(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ye(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Te(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(re(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),Ye(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Te(),n)}foreachOnPath_(e,n,i){if(re(e))return this;{this.value&&i(n,this.value);const s=ae(e),r=this.children.get(s);return r?r.foreachOnPath_(Se(e),Ye(n,s),i):new Ce(null)}}foreach(e){this.foreach_(Te(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ye(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.writeTree_=e}static empty(){return new cn(new Ce(null))}}function lo(t,e,n){if(re(e))return new cn(new Ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Qt(s,e);return r=r.updateChild(o,n),new cn(t.writeTree_.set(s,r))}else{const s=new Ce(n),r=t.writeTree_.setTree(e,s);return new cn(r)}}}function Rg(t,e,n){let i=t;return Xt(n,(s,r)=>{i=lo(i,Ye(e,s),r)}),i}function Cg(t,e){if(re(e))return cn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new cn(n)}}function Vh(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function Sg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_t,(i,s)=>{e.push(new le(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new le(i,s.value))}),e}function Ti(t,e){if(re(e))return t;{const n=_s(t,e);return n!=null?new cn(new Ce(n)):new cn(t.writeTree_.subtree(e))}}function Fh(t){return t.writeTree_.isEmpty()}function ir(t,e){return hT(Te(),t.writeTree_,e)}function hT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=hT(Ye(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ye(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e){return _T(e,t)}function UN(t,e,n,i,s){D(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=i}function BN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function HN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jN(a,i.path)?s=!1:rn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return zN(t),!0;if(i.snap)t.visibleWrites=Cg(t.visibleWrites,i.path);else{const a=i.children;Xt(a,l=>{t.visibleWrites=Cg(t.visibleWrites,Ye(i.path,l))})}return!0}else return!1}function jN(t,e){if(t.snap)return rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rn(Ye(t.path,n),e))return!0;return!1}function zN(t){t.visibleWrites=fT(t.allWrites,qN,Te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qN(t){return t.visible}function fT(t,e,n){let i=cn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)rn(n,o)?(a=Qt(n,o),i=lo(i,a,r.snap)):rn(o,n)&&(a=Qt(o,n),i=lo(i,Te(),r.snap.getChild(a)));else if(r.children){if(rn(n,o))a=Qt(n,o),i=Rg(i,a,r.children);else if(rn(o,n))if(a=Qt(o,n),re(a))i=Rg(i,Te(),r.children);else{const l=er(r.children,ae(a));if(l){const c=l.getChild(Se(a));i=lo(i,Te(),c)}}}else throw Er("WriteRecord should have .snap or .children")}}return i}function pT(t,e,n,i,s){if(!i&&!s){const r=_s(t.visibleWrites,e);if(r!=null)return r;{const o=Ti(t.visibleWrites,e);if(Fh(o))return n;if(n==null&&!Vh(o,Te()))return null;{const a=n||me.EMPTY_NODE;return ir(o,a)}}}else{const r=Ti(t.visibleWrites,e);if(!s&&Fh(r))return n;if(!s&&n==null&&!Vh(r,Te()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(rn(c.path,e)||rn(e,c.path))},a=fT(t.allWrites,o,e),l=n||me.EMPTY_NODE;return ir(a,l)}}}function WN(t,e,n){let i=me.EMPTY_NODE;const s=_s(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ti(t.visibleWrites,e);return n.forEachChild(_t,(o,a)=>{const l=ir(Ti(r,new ke(o)),a);i=i.updateImmediateChild(o,l)}),Sg(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ti(t.visibleWrites,e);return Sg(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function KN(t,e,n,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ye(e,n);if(Vh(t.visibleWrites,r))return null;{const o=Ti(t.visibleWrites,r);return Fh(o)?s.getChild(n):ir(o,s.getChild(n))}}function GN(t,e,n,i){const s=Ye(e,n),r=_s(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ti(t.visibleWrites,s);return ir(o,i.getNode().getImmediateChild(n))}else return null}function QN(t,e){return _s(t.visibleWrites,e)}function YN(t,e,n,i,s,r,o){let a;const l=Ti(t.visibleWrites,e),c=_s(l,Te());if(c!=null)a=c;else if(n!=null)a=ir(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function XN(){return{visibleWrites:cn.empty(),allWrites:[],lastWriteId:-1}}function $h(t,e,n,i){return pT(t.writeTree,t.treePath,e,n,i)}function mT(t,e){return WN(t.writeTree,t.treePath,e)}function Pg(t,e,n,i){return KN(t.writeTree,t.treePath,e,n,i)}function Ml(t,e){return QN(t.writeTree,Ye(t.treePath,e))}function JN(t,e,n,i,s,r){return YN(t.writeTree,t.treePath,e,n,i,s,r)}function bf(t,e,n){return GN(t.writeTree,t.treePath,e,n)}function gT(t,e){return _T(Ye(t.treePath,e),t.writeTree)}function _T(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,wg(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,SN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,CN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,wg(i,e.snapshotNode,s.oldSnap));else throw Er("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const yT=new ex;class Rf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Af(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ls(this.viewCache_),r=JN(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function tx(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nx(t,e,n,i,s){const r=new ZN;let o,a;if(n.type===An.OVERWRITE){const c=n;c.source.fromUser?o=Uh(t,e,c.path,c.snap,i,s,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=Ll(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===An.MERGE){const c=n;c.source.fromUser?o=sx(t,e,c.path,c.children,i,s,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bh(t,e,c.path,c.children,i,s,a,r))}else if(n.type===An.ACK_USER_WRITE){const c=n;c.revert?o=ax(t,e,c.path,i,s,r):o=rx(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===An.LISTEN_COMPLETE)o=ox(t,e,n.path,i,r);else throw Er("Unknown operation type: "+n.type);const l=r.getChanges();return ix(e,o,l),{viewCache:o,changes:l}}function ix(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Lh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(RN(Lh(e)))}}function vT(t,e,n,i,s,r){const o=e.eventCache;if(Ml(i,n)!=null)return e;{let a,l;if(re(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ls(e),u=c instanceof me?c:me.EMPTY_NODE,h=mT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=$h(i,ls(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ae(n);if(c===".priority"){D(Ri(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Pg(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Se(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Pg(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=bf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return ao(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Ll(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ae(n);if(!l.isCompleteForPath(n)&&Ri(n)>1)return e;const g=Se(n),v=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,yT,null)}const h=uT(e,c,l.isFullyInitialized()||re(n),u.filtersNodes()),d=new Rf(s,h,r);return vT(t,h,n,s,d,a)}function Uh(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Rf(s,e,r);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ao(e,c,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Se(n),f=a.getNode().getImmediateChild(h);let g;if(re(d))g=i;else{const _=u.getCompleteChild(h);_!=null?QE(d)===".priority"&&_.getChild(XE(d)).isEmpty()?g=_:g=_.updateChild(d,i):g=me.EMPTY_NODE}if(f.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=ao(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kg(t,e){return t.eventCache.isCompleteForChild(e)}function sx(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Ye(n,l);kg(e,ae(u))&&(a=Uh(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Ye(n,l);kg(e,ae(u))||(a=Uh(t,a,u,c,s,r,o))}),a}function Ng(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Bh(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;re(n)?c=i:c=new Ce(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Ng(t,f,d);l=Ll(t,l,new ke(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),_=Ng(t,g,d);l=Ll(t,l,new ke(h),_,s,r,o,a)}}),l}function rx(t,e,n,i,s,r,o){if(Ml(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ll(t,e,n,l.getNode().getChild(n),s,r,a,o);if(re(n)){let c=new Ce(null);return l.getNode().forEachChild(Ws,(u,h)=>{c=c.set(new ke(u),h)}),Bh(t,e,n,c,s,r,a,o)}else return e}else{let c=new Ce(null);return i.foreach((u,h)=>{const d=Ye(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Bh(t,e,n,c,s,r,a,o)}}function ox(t,e,n,i,s){const r=e.serverCache,o=uT(e,r.getNode(),r.isFullyInitialized()||re(n),r.isFiltered());return vT(t,o,n,i,yT,s)}function ax(t,e,n,i,s,r){let o;if(Ml(i,n)!=null)return e;{const a=new Rf(i,e,s),l=e.eventCache.getNode();let c;if(re(n)||ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$h(i,ls(e));else{const h=e.serverCache.getNode();D(h instanceof me,"serverChildren would be complete if leaf node"),u=mT(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ae(n);let h=bf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Se(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,me.EMPTY_NODE,Se(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$h(i,ls(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ml(i,Te())!=null,ao(e,c,o,t.filter.filtersNodes())}}function lx(t,e){const n=ls(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function xg(t,e,n,i){e.type===An.MERGE&&e.source.queryId!==null&&(D(ls(t.viewCache_),"We should always have a full cache before handling merges"),D(Lh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=nx(t.processor_,s,e,n,i);return tx(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,cx(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cx(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return LN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og;function ux(t){D(!Og,"__referenceConstructor has already been defined"),Og=t}function Cf(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return D(r!=null,"SyncTree gave us an op for an invalid query."),xg(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(xg(o,e,n,i));return r}}function Sf(t,e){let n=null;for(const i of t.views.values())n=n||lx(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg;function hx(t){D(!Dg,"__referenceConstructor has already been defined"),Dg=t}class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=XN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dx(t,e,n,i,s){return UN(t.pendingWriteTree_,e,n,i,s),s?Sc(t,new as(oT(),e,n)):[]}function Ms(t,e,n=!1){const i=BN(t.pendingWriteTree_,e);if(HN(t.pendingWriteTree_,e)){let r=new Ce(null);return i.snap!=null?r=r.set(Te(),!0):Xt(i.children,o=>{r=r.set(new ke(o),!0)}),Sc(t,new Dl(i.path,r,n))}else return[]}function Cc(t,e,n){return Sc(t,new as(aT(),e,n))}function fx(t,e,n){const i=Ce.fromObject(n);return Sc(t,new ko(aT(),e,i))}function px(t,e,n,i){const s=IT(t,i);if(s!=null){const r=AT(s),o=r.path,a=r.queryId,l=Qt(o,e),c=new as(lT(a),l,n);return bT(t,o,c)}else return[]}function mx(t,e,n,i){const s=IT(t,i);if(s){const r=AT(s),o=r.path,a=r.queryId,l=Qt(o,e),c=Ce.fromObject(n),u=new ko(lT(a),l,c);return bT(t,o,u)}else return[]}function ET(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qt(o,e),c=Sf(a,l);if(c)return c});return pT(s,e,r,n,!0)}function Sc(t,e){return TT(e,t.syncPointTree_,null,dT(t.pendingWriteTree_,Te()))}function TT(t,e,n,i){if(re(t.path))return wT(t,e,n,i);{const s=e.get(Te());n==null&&s!=null&&(n=Sf(s,Te()));let r=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gT(i,o);r=r.concat(TT(a,l,c,u))}return s&&(r=r.concat(Cf(s,t,i,n))),r}}function wT(t,e,n,i){const s=e.get(Te());n==null&&s!=null&&(n=Sf(s,Te()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gT(i,o),u=t.operationForChild(o);u&&(r=r.concat(wT(u,a,l,c)))}),s&&(r=r.concat(Cf(s,t,i,n))),r}function IT(t,e){return t.tagToQueryMap.get(e)}function AT(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function bT(t,e,n){const i=t.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=dT(t.pendingWriteTree_,e);return Cf(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pf(n)}node(){return this.node_}}class kf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new kf(this.syncTree_,n)}node(){return ET(this.syncTree_,this.path_)}}const gx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lg=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _x(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yx(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_x=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},yx=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},vx=function(t,e,n,i){return Nf(e,new kf(n,t),i)},Ex=function(t,e,n){return Nf(t,new Pf(e),n)};function Nf(t,e,n){const i=t.getPriority().val(),s=Lg(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Lg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new We(a,dt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new We(s))),o.forEachChild(_t,(a,l)=>{const c=Nf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Of(t,e){let n=e instanceof ke?e:new ke(e),i=t,s=ae(n);for(;s!==null;){const r=er(i.node.children,s)||{children:{},childCount:0};i=new xf(s,i,r),n=Se(n),s=ae(n)}return i}function br(t){return t.node.value}function RT(t,e){t.node.value=e,Hh(t)}function CT(t){return t.node.childCount>0}function Tx(t){return br(t)===void 0&&!CT(t)}function Pc(t,e){Xt(t.node.children,(n,i)=>{e(new xf(n,t,i))})}function ST(t,e,n,i){n&&!i&&e(t),Pc(t,s=>{ST(s,e,!0,i)}),n&&i&&e(t)}function wx(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function oa(t){return new ke(t.parent===null?t.name:oa(t.parent)+"/"+t.name)}function Hh(t){t.parent!==null&&Ix(t.parent,t.name,t)}function Ix(t,e,n){const i=Tx(n),s=ni(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Hh(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Hh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=/[\[\].#$\/\u0000-\u001F\u007F]/,bx=/[\[\].#$\u0000-\u001F\u007F]/,Du=10*1024*1024,PT=function(t){return typeof t=="string"&&t.length!==0&&!Ax.test(t)},Rx=function(t){return typeof t=="string"&&t.length!==0&&!bx.test(t)},Cx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rx(t)},kT=function(t,e,n){const i=n instanceof ke?new oN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hi(i));if(typeof e=="function")throw new Error(t+"contains a function "+Hi(i)+" with contents = "+e.toString());if(PE(e))throw new Error(t+"contains "+e.toString()+" "+Hi(i));if(typeof e=="string"&&e.length>Du/3&&Tc(e)>Du)throw new Error(t+"contains a string greater than "+Du+" utf8 bytes "+Hi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Xt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!PT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aN(i,o),kT(t,a,i),lN(i)}),s&&r)throw new Error(t+' contains ".value" child '+Hi(i)+" in addition to actual children.")}},Sx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cx(n))throw new Error(CR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kx(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!JE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ys(t,e,n){kx(t,n),Nx(t,i=>rn(i,e)||rn(e,i))}function Nx(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(xx(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ts&&ht("event: "+n.toString()),sa(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="repo_interrupt",Dx=25;class Mx{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Px,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ol(),this.transactionQueueTree_=new xf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lx(t,e,n){if(t.stats_=vf(t.repoInfo_),t.forceRestClient_||kk())t.server_=new xl(t.repoInfo_,(i,s,r,o)=>{Vg(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Gn(t.repoInfo_,e,(i,s,r,o)=>{Vg(t,i,s,r,o)},i=>{Fg(t,i)},i=>{Fx(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Lk(t.repoInfo_,()=>new MN(t.stats_,t.server_)),t.infoData_=new kN,t.infoSyncTree_=new Mg({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Cc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Df(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ys(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Vx(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function NT(t){return gx({timestamp:Vx(t)})}function Vg(t,e,n,i,s){t.dataUpdateCount++;const r=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=El(n,c=>dt(c));o=mx(t.serverSyncTree_,r,l,s)}else{const l=dt(n);o=px(t.serverSyncTree_,r,l,s)}else if(i){const l=El(n,c=>dt(c));o=fx(t.serverSyncTree_,r,l)}else{const l=dt(n);o=Cc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Lf(t,r)),ys(t.eventQueue_,a,o)}function Fg(t,e){Df(t,"connected",e),e===!1&&Ux(t)}function Fx(t,e){Xt(e,(n,i)=>{Df(t,n,i)})}function Df(t,e,n){const i=new ke("/.info/"+e),s=dt(n);t.infoData_.updateSnapshot(i,s);const r=Cc(t.infoSyncTree_,i,s);ys(t.eventQueue_,i,r)}function $x(t){return t.nextWriteId_++}function Ux(t){xT(t,"onDisconnectEvents");const e=NT(t),n=Ol();Mh(t.onDisconnect_,Te(),(s,r)=>{const o=vx(s,r,t.serverSyncTree_,e);rT(n,s,o)});let i=[];Mh(n,Te(),(s,r)=>{i=i.concat(Cc(t.serverSyncTree_,s,r));const o=zx(t,s);Lf(t,o)}),t.onDisconnect_=Ol(),ys(t.eventQueue_,Te(),i)}function Bx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ox)}function xT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function OT(t,e,n){return ET(t.serverSyncTree_,e,n)||me.EMPTY_NODE}function Mf(t,e=t.transactionQueueTree_){if(e||kc(t,e),br(e)){const n=MT(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Hx(t,oa(e),n)}else CT(e)&&Pc(e,n=>{Mf(t,n)})}function Hx(t,e,n){const i=n.map(c=>c.currentWriteId),s=OT(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ms(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();kc(t,Of(t.transactionQueueTree_,e)),Mf(t,t.transactionQueueTree_),ys(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)sa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{$t("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Lf(t,e)}},o)}function Lf(t,e){const n=DT(t,e),i=oa(n),s=MT(t,n);return jx(t,s,i),i}function jx(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qt(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Dx)u=!0,h="maxretry",s=s.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else{const d=OT(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){kT("transaction failed: Data returned ",f,l.path);let g=dt(f);typeof f=="object"&&f!=null&&ni(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,T=NT(t),R=Ex(g,d,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=R,l.currentWriteId=$x(t),o.splice(o.indexOf(v),1),s=s.concat(dx(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),s=s.concat(Ms(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0))}ys(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}kc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)sa(i[a]);Mf(t,t.transactionQueueTree_)}function DT(t,e){let n,i=t.transactionQueueTree_;for(n=ae(e);n!==null&&br(i)===void 0;)i=Of(i,n),e=Se(e),n=ae(e);return i}function MT(t,e){const n=[];return LT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function LT(t,e,n){const i=br(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Pc(e,s=>{LT(t,s,n)})}function kc(t,e){const n=br(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,RT(e,n.length>0?n:void 0)}Pc(e,i=>{kc(t,i)})}function zx(t,e){const n=oa(DT(t,e)),i=Of(t.transactionQueueTree_,e);return wx(i,s=>{Mu(t,s)}),Mu(t,i),ST(i,s=>{Mu(t,s)}),n}function Mu(t,e){const n=br(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ms(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?RT(e,void 0):n.length=r+1,ys(t.eventQueue_,oa(e),s);for(let o=0;o<i.length;o++)sa(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Wx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$t(`Invalid query segment '${n}' in query '${t}'`)}return e}const $g=function(t,e){const n=Kx(t),i=n.namespace;n.domain==="firebase.com"&&rs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&rs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wk();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ok(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ke(n.pathString)}},Kx=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=qx(t.substring(u,h)));const d=Wx(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return re(this._path)?null:QE(this._path)}get ref(){return new Rr(this._repo,this._path)}get _queryIdentifier(){const e=Ag(this._queryParams),n=_f(e);return n==="{}"?"default":n}get _queryObject(){return Ag(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof Vf))return!1;const n=this._repo===e._repo,i=JE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rN(this._path)}}class Rr extends Vf{constructor(e,n){super(e,n,new If,!1)}get parent(){const e=XE(this._path);return e===null?null:new Rr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ux(Rr);hx(Rr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="FIREBASE_DATABASE_EMULATOR_HOST",jh={};let Qx=!1;function Yx(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||rs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$g(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Gx]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=$g(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new xh(xh.OWNER):new xk(t.name,t.options,e);Sx("Invalid Firebase Database URL",o),re(o.path)||rs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Jx(a,t,u,new Nk(t.name,n));return new Zx(h,t)}function Xx(t,e){const n=jh[e];(!n||n[t.key]!==t)&&rs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Bx(t),delete n[t.key]}function Jx(t,e,n,i){let s=jh[e.name];s||(s={},jh[e.name]=s);let r=s[t.toURLString()];return r&&rs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mx(t,Qx,n,i),s[t.toURLString()]=r,r}class Zx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rr(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function e1(t){_k(Ni),Nn(new un("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Yx(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ft(og,ag,t),Ft(og,ag,"esm2017")}Gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};e1();var t1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Ff=Ff||{},Q=t1||self;function Nc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function aa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function n1(t){return Object.prototype.hasOwnProperty.call(t,Lu)&&t[Lu]||(t[Lu]=++i1)}var Lu="closure_uid_"+(1e9*Math.random()>>>0),i1=0;function s1(t,e,n){return t.call.apply(t.bind,arguments)}function r1(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=s1:yt=r1,yt.apply(null,arguments)}function Ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function xi(){this.s=this.s,this.o=this.o}var o1=0;xi.prototype.s=!1;xi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),o1!=0)&&n1(this)};xi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const VT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $f(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ug(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Nc(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var a1=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function No(t){return/^[\s\xa0]*$/.test(t)}function xc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return xc().indexOf(t)!=-1}function Uf(t){return Uf[" "](t),t}Uf[" "]=function(){};function l1(t,e){var n=eO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var c1=Tn("Opera"),sr=Tn("Trident")||Tn("MSIE"),FT=Tn("Edge"),zh=FT||sr,$T=Tn("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),u1=xc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function UT(){var t=Q.document;return t?t.documentMode:void 0}var qh;e:{var Vu="",Fu=function(){var t=xc();if($T)return/rv:([^\);]+)(\)|;)/.exec(t);if(FT)return/Edge\/([\d\.]+)/.exec(t);if(sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(u1)return/WebKit\/(\S+)/.exec(t);if(c1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fu&&(Vu=Fu?Fu[1]:""),sr){var $u=UT();if($u!=null&&$u>parseFloat(Vu)){qh=String($u);break e}}qh=Vu}var Wh;if(Q.document&&sr){var Bg=UT();Wh=Bg||parseInt(qh,10)||void 0}else Wh=void 0;var h1=Wh;function xo(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($T){e:{try{Uf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:d1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xo.$.h.call(this)}}tt(xo,vt);var d1={2:"touch",3:"pen",4:"mouse"};xo.prototype.h=function(){xo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var la="closure_listenable_"+(1e6*Math.random()|0),f1=0;function p1(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++f1,this.fa=this.ia=!1}function Oc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bf(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function m1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function BT(t){const e={};for(const n in t)e[n]=t[n];return e}const Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function HT(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Hg.length;r++)n=Hg[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Dc(t){this.src=t,this.g={},this.h=0}Dc.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Gh(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new p1(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Kh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=VT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Oc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gh(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Hf="closure_lm_"+(1e6*Math.random()|0),Uu={};function jT(t,e,n,i,s){if(i&&i.once)return qT(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jT(t,e[r],n,i,s);return null}return n=qf(n),t&&t[la]?t.O(e,n,aa(i)?!!i.capture:!!i,s):zT(t,e,n,!1,i,s)}function zT(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=aa(s)?!!s.capture:!!s,a=zf(t);if(a||(t[Hf]=a=new Dc(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=g1(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)a1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(KT(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function g1(){function t(n){return e.call(t.src,t.listener,n)}const e=_1;return t}function qT(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)qT(t,e[r],n,i,s);return null}return n=qf(n),t&&t[la]?t.P(e,n,aa(i)?!!i.capture:!!i,s):zT(t,e,n,!0,i,s)}function WT(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)WT(t,e[r],n,i,s);else i=aa(i)?!!i.capture:!!i,n=qf(n),t&&t[la]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Gh(r,n,i,s),-1<n&&(Oc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gh(e,n,i,s)),(n=-1<t?e[t]:null)&&jf(n))}function jf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[la])Kh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(KT(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=zf(e))?(Kh(n,t),n.h==0&&(n.src=null,e[Hf]=null)):Oc(t)}}}function KT(t){return t in Uu?Uu[t]:Uu[t]="on"+t}function _1(t,e){if(t.fa)t=!0;else{e=new xo(e,this);var n=t.listener,i=t.la||t.src;t.ia&&jf(t),t=n.call(i,e)}return t}function zf(t){return t=t[Hf],t instanceof Dc?t:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function qf(t){return typeof t=="function"?t:(t[Bu]||(t[Bu]=function(e){return t.handleEvent(e)}),t[Bu])}function et(){xi.call(this),this.i=new Dc(this),this.S=this,this.J=null}tt(et,xi);et.prototype[la]=!0;et.prototype.removeEventListener=function(t,e,n,i){WT(this,t,e,n,i)};function at(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var s=e;e=new vt(i,t),HT(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ja(o,i,!0,e)&&s}if(o=e.g=t,s=ja(o,i,!0,e)&&s,s=ja(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=ja(o,i,!1,e)&&s}et.prototype.N=function(){if(et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Oc(n[i]);delete t.g[e],t.h--}}this.J=null};et.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};et.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ja(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Kh(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Wf=Q.JSON.stringify;class y1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function v1(){var t=Kf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class E1{constructor(){this.h=this.g=null}add(e,n){const i=GT.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var GT=new y1(()=>new T1,t=>t.reset());class T1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function w1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function I1(t){Q.setTimeout(()=>{throw t},0)}let Oo,Do=!1,Kf=new E1,QT=()=>{const t=Q.Promise.resolve(void 0);Oo=()=>{t.then(A1)}};var A1=()=>{for(var t;t=v1();){try{t.h.call(t.g)}catch(n){I1(n)}var e=GT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Do=!1};function Mc(t,e){et.call(this),this.h=t||1,this.g=e||Q,this.j=yt(this.qb,this),this.l=Date.now()}tt(Mc,et);M=Mc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Gf(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Mc.$.N.call(this),Gf(this),delete this.g};function Qf(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function YT(t){t.g=Qf(()=>{t.g=null,t.i&&(t.i=!1,YT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class b1 extends xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:YT(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mo(t){xi.call(this),this.h=t,this.g={}}tt(Mo,xi);var jg=[];function XT(t,e,n,i){Array.isArray(n)||(n&&(jg[0]=n.toString()),n=jg);for(var s=0;s<n.length;s++){var r=jT(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function JT(t){Bf(t.g,function(e,n){this.g.hasOwnProperty(n)&&jf(e)},t),t.g={}}Mo.prototype.N=function(){Mo.$.N.call(this),JT(this)};Mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lc(){this.g=!0}Lc.prototype.Ea=function(){this.g=!1};function R1(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function C1(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ls(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+P1(t,n)+(i?" "+i:"")})}function S1(t,e){t.info(function(){return"TIMEOUT: "+e})}Lc.prototype.info=function(){};function P1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Wf(n)}catch{return e}}var vs={},zg=null;function Vc(){return zg=zg||new et}vs.Ta="serverreachability";function ZT(t){vt.call(this,vs.Ta,t)}tt(ZT,vt);function Lo(t){const e=Vc();at(e,new ZT(e))}vs.STAT_EVENT="statevent";function ew(t,e){vt.call(this,vs.STAT_EVENT,t),this.stat=e}tt(ew,vt);function St(t){const e=Vc();at(e,new ew(e,t))}vs.Ua="timingevent";function tw(t,e){vt.call(this,vs.Ua,t),this.size=e}tt(tw,vt);function ca(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Fc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yf(){}Yf.prototype.h=null;function qg(t){return t.h||(t.h=t.i())}function iw(){}var ua={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xf(){vt.call(this,"d")}tt(Xf,vt);function Jf(){vt.call(this,"c")}tt(Jf,vt);var Qh;function $c(){}tt($c,Yf);$c.prototype.g=function(){return new XMLHttpRequest};$c.prototype.i=function(){return{}};Qh=new $c;function ha(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Mo(this),this.P=k1,t=zh?125:void 0,this.V=new Mc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sw}function sw(){this.i=null,this.g="",this.h=!1}var k1=45e3,Yh={},Vl={};M=ha.prototype;M.setTimeout=function(t){this.P=t};function Xh(t,e,n){t.L=1,t.v=Bc(Xn(e)),t.s=n,t.S=!0,rw(t,null)}function rw(t,e){t.G=Date.now(),da(t),t.A=Xn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),fw(n.i,"t",i),t.C=0,n=t.l.J,t.h=new sw,t.g=Dw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new b1(yt(t.Pa,t,t.g),t.O)),XT(t.U,t.g,"readystatechange",t.nb),e=t.I?BT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Lo(),R1(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zh||this.g&&(this.h.h||this.g.ja()||Qg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Lo(3):Lo(2)),Uc(this);var n=this.g.da();this.ca=n;t:if(ow(this)){var i=Qg(this.g);t="";var s=i.length,r=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gi(this),co(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,C1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!No(a)){var c=a;break t}}c=null}if(n=c)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jh(this,n);else{this.i=!1,this.o=3,St(12),Gi(this),co(this);break e}}this.S?(aw(this,u,o),zh&&this.i&&u==3&&(XT(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Jh(this,o)),u==4&&Gi(this),this.i&&!this.J&&(u==4?kw(this.l,this):(this.i=!1,da(this)))}else X1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),Gi(this),co(this)}}}catch{}finally{}};function ow(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function aw(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=N1(t,n),s==Vl){e==4&&(t.o=4,St(14),i=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Yh){t.o=4,St(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ls(t.j,t.m,s,null),Jh(t,s);ow(t)&&s!=Vl&&s!=Yh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sp(e),e.M=!0,St(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),Gi(t),co(t))}M.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(Uc(this),aw(this,t,e),this.i&&t!=4&&da(this))}};function N1(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Vl:(n=Number(e.substring(n,i)),isNaN(n)?Yh:(i+=1,i+n>e.length?Vl:(e=e.slice(i,i+n),t.C=i+n,e)))}M.cancel=function(){this.J=!0,Gi(this)};function da(t){t.Y=Date.now()+t.P,lw(t,t.P)}function lw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ca(yt(t.lb,t),e)}function Uc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(S1(this.j,this.A),this.L!=2&&(Lo(),St(17)),Gi(this),this.o=2,co(this)):lw(this,this.Y-t)};function co(t){t.l.H==0||t.J||kw(t.l,t)}function Gi(t){Uc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gf(t.V),JT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Jh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Zh(n.i,t))){if(!t.K&&Zh(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ul(n),zc(n);else break e;ip(n),St(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ca(yt(n.ib,n),6e3));if(1>=gw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qi(n,11)}else if((t.K||n.g==t)&&Ul(n),!No(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zf(r,r.h),r.h=null))}if(i.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,Pe(i.I,i.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Ow(i,i.J?i.pa:null,i.Y),o.K){_w(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Uc(a),da(a)),i.g=o}else Sw(i);0<n.j.length&&qc(n)}else c[0]!="stop"&&c[0]!="close"||Qi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Qi(n,7):np(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Lo(4)}catch{}}function x1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Nc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function O1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Nc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function cw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=O1(t),i=x1(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var uw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ns(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ns){this.h=t.h,Fl(this,t.j),this.s=t.s,this.g=t.g,$l(this,t.m),this.l=t.l;var e=t.i,n=new Vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wg(this,n),this.o=t.o}else t&&(e=String(t).match(uw))?(this.h=!1,Fl(this,e[1]||"",!0),this.s=Xr(e[2]||""),this.g=Xr(e[3]||"",!0),$l(this,e[4]),this.l=Xr(e[5]||"",!0),Wg(this,e[6]||"",!0),this.o=Xr(e[7]||"")):(this.h=!1,this.i=new Vo(null,this.h))}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jr(e,Kg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jr(e,Kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jr(n,n.charAt(0)=="/"?V1:L1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jr(n,$1)),t.join("")};function Xn(t){return new ns(t)}function Fl(t,e,n){t.j=n?Xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $l(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wg(t,e,n){e instanceof Vo?(t.i=e,U1(t.i,t.h)):(n||(e=Jr(e,F1)),t.i=new Vo(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Bc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,M1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function M1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kg=/[#\/\?@]/g,L1=/[#\?:]/g,V1=/[#\?]/g,F1=/[#\?@]/g,$1=/#/g;function Vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oi(t){t.g||(t.g=new Map,t.h=0,t.i&&D1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Vo.prototype;M.add=function(t,e){Oi(this),this.i=null,t=Cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hw(t,e){Oi(t),e=Cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dw(t,e){return Oi(t),e=Cr(t,e),t.g.has(e)}M.forEach=function(t,e){Oi(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};M.ta=function(){Oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};M.Z=function(t){Oi(this);let e=[];if(typeof t=="string")dw(this,t)&&(e=e.concat(this.g.get(Cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Oi(this),this.i=null,t=Cr(this,t),dw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fw(t,e,n){hw(t,e),0<n.length&&(t.i=null,t.g.set(Cr(t,e),$f(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function U1(t,e){e&&!t.j&&(Oi(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(hw(this,i),fw(this,s,n))},t)),t.j=e}var B1=class{constructor(t,e){this.g=t,this.map=e}};function pw(t){this.l=t||H1,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var H1=10;function mw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gw(t){return t.h?1:t.g?t.g.size:0}function Zh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zf(t,e){t.g?t.g.add(e):t.h=e}function _w(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pw.prototype.cancel=function(){if(this.i=yw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $f(t.i)}var j1=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function z1(){this.g=new j1}function q1(t,e,n){const i=n||"";try{cw(t,function(s,r){let o=s;aa(s)&&(o=Wf(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function W1(t,e){const n=new Lc;if(Q.Image){const i=new Image;i.onload=Ha(za,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ha(za,n,i,"TestLoadImage: error",!1,e),i.onabort=Ha(za,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ha(za,n,i,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function za(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function fa(t){this.l=t.fc||null,this.j=t.ob||!1}tt(fa,Yf);fa.prototype.g=function(){return new Hc(this.l,this.j)};fa.prototype.i=function(t){return function(){return t}}({});function Hc(t,e){et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ep,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Hc,et);var ep=0;M=Hc.prototype;M.open=function(t,e){if(this.readyState!=ep)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pa(this)),this.readyState=ep};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pa(this):Fo(this),this.readyState==3&&vw(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,pa(this))};M.Ya=function(t){this.g&&(this.response=t,pa(this))};M.ka=function(){this.g&&pa(this)};function pa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var K1=Q.JSON.parse;function Le(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ew,this.L=this.M=!1}tt(Le,et);var Ew="",G1=/^https?$/i,Q1=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qh.g(),this.C=this.u?qg(this.u):qg(Qh),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Gg(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=VT(Q1,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Iw(this),0<this.B&&((this.L=Y1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=Qf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gg(this,r)}};function Y1(t){return sr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Ff<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tw(t),jc(t)}function Tw(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),jc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jc(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?ww(this):this.kb())};M.kb=function(){ww(this)};function ww(t){if(t.h&&typeof Ff<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)Qf(t.La,0,t);else if(at(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(uw)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),i=!G1.test(s?s.toLowerCase():"")}n=i}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var r=2<bn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Tw(t)}}finally{jc(t)}}}}function jc(t,e){if(t.g){Iw(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=i}catch{}}}function Iw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),K1(e)}};function Qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ew:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function X1(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(No(t[i]))continue;var n=w1(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}m1(e,function(i){return i.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Aw(t){let e="";return Bf(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function tp(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Aw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bw(t){this.Ga=0,this.j=[],this.l=new Lc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Br("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Br("baseRetryDelayMs",5e3,t),this.hb=Br("retryDelaySeedMs",1e4,t),this.eb=Br("forwardChannelMaxRetries",2,t),this.xa=Br("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pw(t&&t.concurrentRequestLimit),this.Ja=new z1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=bw.prototype;M.ra=8;M.H=1;function np(t){if(Rw(t),t.H==3){var e=t.W++,n=Xn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),ma(t,n),e=new ha(t,t.l,e),e.L=2,e.v=Bc(Xn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),da(e)}xw(t)}function zc(t){t.g&&(sp(t),t.g.cancel(),t.g=null)}function Rw(t){zc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Ul(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function qc(t){if(!mw(t.i)&&!t.m){t.m=!0;var e=t.Na;Oo||QT(),Do||(Oo(),Do=!0),Kf.add(e,t),t.C=0}}function J1(t,e){return gw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ca(yt(t.Na,t,e),Nw(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ha(this,this.l,t);let r=this.s;if(this.U&&(r?(r=BT(r),HT(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cw(this,s,e),n=Xn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),ma(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Aw(r)))+"&"+e:this.o&&tp(n,this.o,r)),Zf(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,Xh(s,n,null)):Xh(s,n,e),this.H=2}}else this.H==3&&(t?Yg(this,t):this.j.length==0||mw(this.i)||Yg(this))};function Yg(t,e){var n;e?n=e.m:n=t.W++;const i=Xn(t.I);Pe(i,"SID",t.K),Pe(i,"RID",n),Pe(i,"AID",t.V),ma(t,i),t.o&&t.s&&tp(i,t.o,t.s),n=new ha(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zf(t.i,n),Xh(n,i,e)}function ma(t,e){t.na&&Bf(t.na,function(n,i){Pe(e,i,n)}),t.h&&cw({},function(n,i){Pe(e,i,n)})}function Cw(t,e,n){n=Math.min(t.j.length,n);var i=t.h?yt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{q1(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Sw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Oo||QT(),Do||(Oo(),Do=!0),Kf.add(e,t),t.A=0}}function ip(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ca(yt(t.Ma,t),Nw(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Pw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ca(yt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,St(10),zc(this),Pw(this))};function sp(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Pw(t){t.g=new ha(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Xn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),ma(t,e),t.o&&t.s&&tp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bc(Xn(e)),n.s=null,n.S=!0,rw(n,t)}M.ib=function(){this.v!=null&&(this.v=null,zc(this),ip(this),St(19))};function Ul(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function kw(t,e){var n=null;if(t.g==e){Ul(t),sp(t),t.g=null;var i=2}else if(Zh(t.i,e))n=e.F,_w(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Vc(),at(i,new tw(i,n)),qc(t)}else Sw(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&J1(t,e)||i==2&&ip(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qi(t,5);break;case 4:Qi(t,10);break;case 3:Qi(t,6);break;default:Qi(t,2)}}}function Nw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=yt(t.pb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Fl(n,"https"),Bc(n)),W1(n.toString(),i)}else St(2);t.H=0,t.h&&t.h.za(e),xw(t),Rw(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),St(2)):(this.l.info("Failed to ping google.com"),St(1))};function xw(t){if(t.H=0,t.ma=[],t.h){const e=yw(t.i);(e.length!=0||t.j.length!=0)&&(Ug(t.ma,e),Ug(t.ma,t.j),t.i.i.length=0,$f(t.j),t.j.length=0),t.h.ya()}}function Ow(t,e,n){var i=n instanceof ns?Xn(n):new ns(n);if(i.g!="")e&&(i.g=e+"."+i.g),$l(i,i.m);else{var s=Q.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ns(null);i&&Fl(r,i),e&&(r.g=e),s&&$l(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Pe(i,n,e),Pe(i,"VER",t.ra),ma(t,i),i}function Dw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new fa({ob:!0})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mw(){}M=Mw.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Bl(){if(sr&&!(10<=Number(h1)))throw Error("Environmental error: no available transport.")}Bl.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){et.call(this),this.g=new bw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!No(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!No(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}tt(jt,et);jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ow(t,null,t.Y),qc(t)};jt.prototype.close=function(){np(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wf(t),t=n);e.j.push(new B1(e.fb++,t)),e.H==3&&qc(e)};jt.prototype.N=function(){this.g.h=null,delete this.j,np(this.g),delete this.g,jt.$.N.call(this)};function Lw(t){Xf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(Lw,Xf);function Vw(){Jf.call(this),this.status=1}tt(Vw,Jf);function Sr(t){this.g=t}tt(Sr,Mw);Sr.prototype.Ba=function(){at(this.g,"a")};Sr.prototype.Aa=function(t){at(this.g,new Lw(t))};Sr.prototype.za=function(t){at(this.g,new Vw)};Sr.prototype.ya=function(){at(this.g,"b")};function Z1(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(dn,Z1);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hu(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Hu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Hu(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Hu(this,i),s=0;break}}this.h=s,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ye(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var eO={};function rp(t){return-128<=t&&128>t?l1(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return Ks;if(0>t)return st(Rn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ed;return new ye(e,0)}function Fw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(Fw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),i=Ks,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Rn(Math.pow(e,r)),i=i.R(r).add(Rn(o))):(i=i.R(n),i=i.add(Rn(o)))}return i}var ed=4294967296,Ks=rp(0),td=rp(1),Xg=rp(16777216);M=ye.prototype;M.ea=function(){if(Gt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ed+i)*e,e*=ed}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(Gt(this))return"-"+st(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,i="";;){var s=jl(n,e).g;n=Hl(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Kn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Gt(t){return t.h==-1}M.X=function(t){return t=Hl(this,t),Gt(t)?-1:Kn(t)?0:1};function st(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ye(n,~t.h).add(td)}M.abs=function(){return Gt(this)?st(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function Hl(t,e){return t.add(st(e))}M.R=function(t){if(Kn(this)||Kn(t))return Ks;if(Gt(this))return Gt(t)?st(this).R(st(t)):st(st(this).R(t));if(Gt(t))return st(this.R(st(t)));if(0>this.X(Xg)&&0>t.X(Xg))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,qa(n,2*i+2*s),n[2*i+2*s+1]+=r*l,qa(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,qa(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,qa(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ye(n,0)};function qa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Hr(t,e){this.g=t,this.h=e}function jl(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new Hr(Ks,Ks);if(Gt(t))return e=jl(st(t),e),new Hr(st(e.g),st(e.h));if(Gt(e))return e=jl(t,st(e)),new Hr(st(e.g),e.h);if(30<t.g.length){if(Gt(t)||Gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=td,i=e;0>=i.X(t);)n=Jg(n),i=Jg(i);var s=Ss(n,1),r=Ss(i,1);for(i=Ss(i,2),n=Ss(n,2);!Kn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ss(i,1),n=Ss(n,1)}return e=Hl(t,s.R(e)),new Hr(s,e)}for(s=Ks;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Rn(n),o=r.R(e);Gt(o)||0<o.X(t);)n-=i,r=Rn(n),o=r.R(e);Kn(r)&&(r=td),s=s.add(r),t=Hl(t,o)}return new Hr(s,t)}M.gb=function(t){return jl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ye(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ye(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ye(n,this.h^t.h)};function Jg(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ye(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ye(s,t.h)}Bl.prototype.createWebChannel=Bl.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Fc.NO_ERROR=0;Fc.TIMEOUT=8;Fc.HTTP_ERROR=6;nw.COMPLETE="complete";iw.EventType=ua;ua.OPEN="a";ua.CLOSE="b";ua.ERROR="c";ua.MESSAGE="d";et.prototype.listen=et.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=Rn;ye.fromString=Fw;var tO=function(){return new Bl},nO=function(){return Vc()},ju=Fc,iO=nw,sO=vs,Zg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rO=fa,Wa=iw,oO=Le,aO=dn,Gs=ye;const e_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Yo("@firebase/firestore");function t_(){return cs.logLevel}function U(t,...e){if(cs.logLevel<=ue.DEBUG){const n=e.map(op);cs.debug(`Firestore (${Pr}): ${t}`,...n)}}function Jn(t,...e){if(cs.logLevel<=ue.ERROR){const n=e.map(op);cs.error(`Firestore (${Pr}): ${t}`,...n)}}function rr(t,...e){if(cs.logLevel<=ue.WARN){const n=e.map(op);cs.warn(`Firestore (${Pr}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function _e(t,e){t||W()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $w{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class cO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uO{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(_e(typeof i.accessToken=="string"),new $w(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new ut(e)}}class hO{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dO{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new hO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new fO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=mO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function he(t,e){return t<e?-1:t>e?1:0}function or(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Be(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Be(0,0))}static max(){return new K(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,i){n===void 0?n=0:n>e.length&&W(),i===void 0?i=e.length-n:i>e.length-n&&W(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return $o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $o?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends $o{construct(e,n,i){return new xe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const gO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends $o{construct(e,n,i){return new mt(e,n,i)}static isValidIdentifier(e){return gO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(xe.fromString(e))}static fromName(e){return new z(xe.fromString(e).popFirst(5))}static empty(){return new z(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new xe(e.slice()))}}function _O(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new Be(n+1,0):new Be(n,i));return new Ci(s,z.empty(),e)}function yO(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ci(K.min(),z.empty(),-1)}static max(){return new Ci(K.max(),z.empty(),-1)}}function vO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==EO)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,i)=>{n(e)})}static reject(e){return new k((n,i)=>{i(e)})}static waitFor(e){return new k((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=k.resolve(!1);for(const i of e)n=n.next(s=>s?k.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new k((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new k((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function _a(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ap{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ap.ae=-1;function ya(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function wO(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=r??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new it(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,i,s,r){return this}insert(e,n,i){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i_(this.data.getIterator())}getIteratorFrom(e){return new i_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Et(this.comparator);return n.data=e,n}}class i_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Et(mt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Hw("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const IO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(_e(!!t),typeof t=="string"){let e=0;const n=IO.exec(t);if(_e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cp(t){const e=t.mapValue.fields.__previous_value__;return lp(e)?cp(e):e}function Uo(t){const e=Si(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lp(t)?4:bO(t)?9007199254740991:10:W()}function On(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Si(s.timestampValue),a=Si(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return us(s.bytesValue).isEqual(us(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ue(s.geoPointValue.latitude)===Ue(r.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ue(s.integerValue)===Ue(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Ue(s.doubleValue),a=Ue(r.doubleValue);return o===a?zl(o)===zl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return or(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(n_(o)!==n_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!On(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function Ho(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function ar(t,e){if(t===e)return 0;const n=hs(t),i=hs(e);if(n!==i)return he(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Ue(r.integerValue||r.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return s_(t.timestampValue,e.timestampValue);case 4:return s_(Uo(t),Uo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(r,o){const a=us(r),l=us(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=he(a[c],l[c]);if(u!==0)return u}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=he(Ue(r.latitude),Ue(o.latitude));return a!==0?a:he(Ue(r.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ar(a[c],l[c]);if(u)return u}return he(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ga.mapValue&&o===Ga.mapValue)return 0;if(r===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=he(l[h],u[h]);if(d!==0)return d;const f=ar(a[l[h]],c[u[h]]);if(f!==0)return f}return he(l.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function s_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Si(t),i=Si(e),s=he(n.seconds,i.seconds);return s!==0?s:he(n.nanos,i.nanos)}function lr(t){return nd(t)}function nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Si(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=nd(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${nd(n.fields[o])}`;return s+"}"}(t.mapValue):W()}function id(t){return!!t&&"integerValue"in t}function up(t){return!!t&&"arrayValue"in t}function r_(t){return!!t&&"nullValue"in t}function o_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=uo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=mt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=uo(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];ol(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Es(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Rt(uo(this.value))}}function jw(t){const e=[];return Es(t.fields,(n,i)=>{const s=new mt([n]);if(ol(i)){const r=jw(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,K.min(),K.min(),K.min(),Rt.empty(),0)}static newFoundDocument(e,n,i,s){return new Ge(e,1,n,K.min(),i,s,0)}static newNoDocument(e,n){return new Ge(e,2,n,K.min(),K.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,K.min(),K.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ql{constructor(e,n){this.position=e,this.inclusive=n}}function a_(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),n.key):i=ar(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function l_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function RO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zw{}class je extends zw{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new SO(e,n,i):n==="array-contains"?new NO(e,i):n==="in"?new xO(e,i):n==="not-in"?new OO(e,i):n==="array-contains-any"?new DO(e,i):new je(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new PO(e,i):new kO(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ar(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(ar(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dn extends zw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Dn(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qw(t){return t.op==="and"}function Ww(t){return CO(t)&&qw(t)}function CO(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function sd(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+lr(t.value);if(Ww(t))return t.filters.map(e=>sd(e)).join(",");{const e=t.filters.map(n=>sd(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof je?function(i,s){return s instanceof je&&i.op===s.op&&i.field.isEqual(s.field)&&On(i.value,s.value)}(t,e):t instanceof Dn?function(i,s){return s instanceof Dn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&Kw(o,s.filters[a]),!0):!1}(t,e):void W()}function Gw(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${lr(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Gw).join(" ,")+"}"}(t):"Filter"}class SO extends je{constructor(e,n,i){super(e,n,i),this.key=z.fromName(i.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class PO extends je{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kO extends je{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>z.fromName(i.referenceValue))}class NO extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return up(n)&&Ho(n.arrayValue,this.value)}}class xO extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ho(this.value.arrayValue,n)}}class OO extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ho(this.value.arrayValue,n)}}class DO extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!up(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ho(this.value.arrayValue,i))}}/**
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
 */class MO{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function c_(t,e=null,n=[],i=[],s=null,r=null,o=null){return new MO(t,e,n,i,s,r,o)}function hp(t){const e=ee(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>sd(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>lr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>lr(i)).join(",")),e.he=n}return e.he}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l_(t.startAt,e.startAt)&&l_(t.endAt,e.endAt)}function rd(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function LO(t,e,n,i,s,r,o,a){return new Wc(t,e,n,i,s,r,o,a)}function Kc(t){return new Wc(t)}function u_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function VO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function FO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $O(t){return t.collectionGroup!==null}function Qs(t){const e=ee(t);if(e.Pe===null){e.Pe=[];const n=FO(e),i=VO(e);if(n!==null&&i===null)n.isKeyField()||e.Pe.push(new ho(n)),e.Pe.push(new ho(mt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ho(mt.keyField(),r))}}}return e.Pe}function Zn(t){const e=ee(t);if(!e.Ie)if(e.limitType==="F")e.Ie=c_(e.path,e.collectionGroup,Qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Qs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ho(r.field,o))}const i=e.endAt?new ql(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ql(e.startAt.position,e.startAt.inclusive):null;e.Ie=c_(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.Ie}function od(t,e,n){return new Wc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gc(t,e){return dp(Zn(t),Zn(e))&&t.limitType===e.limitType}function Yw(t){return`${hp(Zn(t))}|lt:${t.limitType}`}function ad(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>Gw(s)).join(", ")}]`),ya(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>lr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>lr(s)).join(",")),`Target(${i})`}(Zn(t))}; limitType=${t.limitType})`}function Qc(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of Qs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=a_(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Qs(i),s)||i.endAt&&!function(o,a,l){const c=a_(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Qs(i),s))}(t,e)}function UO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xw(t){return(e,n)=>{let i=!1;for(const s of Qs(t)){const r=BO(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function BO(t,e,n){const i=t.field.isKeyField()?z.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?ar(l,c):W()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Bw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new Me(z.comparator);function ei(){return HO}const Jw=new Me(z.comparator);function Zr(...t){let e=Jw;for(const n of t)e=e.insert(n.key,n);return e}function Zw(t){let e=Jw;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Yi(){return fo()}function eI(){return fo()}function fo(){return new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jO=new Me(z.comparator),zO=new Et(z.comparator);function se(...t){let e=zO;for(const n of t)e=e.add(n);return e}const qO=new Et(he);function WO(){return qO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function nI(t){return{integerValue:""+t}}function iI(t,e){return wO(e)?nI(e):tI(t,e)}/**
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
 */class Yc{constructor(){this._=void 0}}function KO(t,e,n){return t instanceof Wl?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&lp(r)&&(r=cp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof cr?rI(t,e):t instanceof ur?oI(t,e):function(s,r){const o=sI(s,r),a=h_(o)+h_(s.Te);return id(o)&&id(s.Te)?nI(a):tI(s.serializer,a)}(t,e)}function GO(t,e,n){return t instanceof cr?rI(t,e):t instanceof ur?oI(t,e):n}function sI(t,e){return t instanceof jo?function(i){return id(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Wl extends Yc{}class cr extends Yc{constructor(e){super(),this.elements=e}}function rI(t,e){const n=aI(e);for(const i of t.elements)n.some(s=>On(s,i))||n.push(i);return{arrayValue:{values:n}}}class ur extends Yc{constructor(e){super(),this.elements=e}}function oI(t,e){let n=aI(e);for(const i of t.elements)n=n.filter(s=>!On(s,i));return{arrayValue:{values:n}}}class jo extends Yc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function h_(t){return Ue(t.integerValue||t.doubleValue)}function aI(t){return up(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.field=e,this.transform=n}}function QO(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof cr&&s instanceof cr||i instanceof ur&&s instanceof ur?or(i.elements,s.elements,On):i instanceof jo&&s instanceof jo?On(i.Te,s.Te):i instanceof Wl&&s instanceof Wl}(t.transform,e.transform)}class YO{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xc{}function lI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pp(t.key,Ct.none()):new va(t.key,t.data,Ct.none());{const n=t.data,i=Rt.empty();let s=new Et(mt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Di(t.key,i,new Lt(s.toArray()),Ct.none())}}function XO(t,e,n){t instanceof va?function(s,r,o){const a=s.value.clone(),l=f_(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(s,r,o){if(!al(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=f_(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(cI(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,i){return t instanceof va?function(r,o,a,l){if(!al(r.precondition,o))return a;const c=r.value.clone(),u=p_(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Di?function(r,o,a,l){if(!al(r.precondition,o))return a;const c=p_(r.fieldTransforms,l,o),u=o.data;return u.setAll(cI(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return al(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function JO(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=sI(i.transform,s||null);r!=null&&(n===null&&(n=Rt.empty()),n.set(i.field,r))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&or(i,s,(r,o)=>QO(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Xc{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Di extends Xc{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function f_(t,e,n){const i=new Map;_e(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,GO(o,a,n[s]))}return i}function p_(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,KO(r,o,e))}return i}class pp extends Xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uI extends Xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&XO(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=eI();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=lI(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,(n,i)=>d_(n,i))&&or(this.baseMutations,e.baseMutations,(n,i)=>d_(n,i))}}class mp{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){_e(e.mutations.length===i.length);let s=function(){return jO}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new mp(e,n,i,s)}}/**
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
 */var Fe,oe;function hI(t){switch(t){default:return W();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function dI(t){if(t===void 0)return Jn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return W()}}(oe=Fe||(Fe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class gp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Qa}static getOrCreateInstance(){return Qa===null&&(Qa=new gp),Qa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Qa=null;/**
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
 */function nD(){return new TextEncoder}/**
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
 */const iD=new Gs([4294967295,4294967295],0);function m_(t){const e=nD().encode(t),n=new aO;return n.update(e),new Uint8Array(n.digest())}function g_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Gs([n,i],0),new Gs([s,r],0)]}class _p{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(i<0)throw new eo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Gs.fromNumber(this.de)}Re(e,n,i){let s=e.add(n.multiply(Gs.fromNumber(i)));return s.compare(iD)===1&&(s=new Gs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=m_(e),[i,s]=g_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);if(!this.Ve(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new _p(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=m_(e),[i,s]=g_(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);this.me(o)}}me(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Jc(K.min(),s,new Me(he),ei(),se())}}class Ea{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ea(i,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,i,s){this.fe=e,this.removedTargetIds=n,this.key=i,this.ge=s}}class fI{constructor(e,n){this.targetId=e,this.pe=n}}class pI{constructor(e,n,i=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class __{constructor(){this.ye=0,this.we=v_(),this.Se=It.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=se(),n=se(),i=se();return this.we.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:W()}}),new Ea(this.Se,this.be,e,n,i)}xe(){this.De=!1,this.we=v_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class sD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ei(),this.$e=y_(),this.Ue=new Me(he)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const i=this.He(n);switch(e.state){case 0:this.Je(n)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),i.Fe(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((i,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,i;const s=e.targetId,r=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(rd(a))if(r===0){const l=new z(a.path);this.ze(s,l,Ge.newNoDocument(l,K.min()))}else _e(r===1);else{const l=this.et(s);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=gp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var _,v,T,R,P,b;const X={localCacheCount:f,existenceFilterCount:g.count},G=g.unchangedNames;return G&&(X.bloomFilter={applied:h===0,hashCount:(_=G==null?void 0:G.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(R=(T=(v=G==null?void 0:G.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&R!==void 0?R:0,padding:(b=(P=G==null?void 0:G.bits)===null||P===void 0?void 0:P.padding)!==null&&b!==void 0?b:0},d&&(X.bloomFilter.mightContain=d)),X}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=us(r).toUint8Array()}catch(h){if(h instanceof Hw)return rr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new _p(l,o,a)}catch(h){return rr(h instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const i=this.qe.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&rd(a.target)){const l=new z(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ge.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let i=se();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const s=new Jc(e,n,this.Ue,this.Ke,i);return this.Ke=ei(),this.$e=y_(),this.Ue=new Me(he),s}Ge(e,n){if(!this.Je(e))return;const i=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,i),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,i){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),i&&(this.Ke=this.Ke.insert(n,i))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new __,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Et(he),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new __),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function y_(){return new Me(z.comparator)}function v_(){return new Me(z.comparator)}const rD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aD=(()=>({and:"AND",or:"OR"}))();class lD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ld(t,e){return t.useProto3Json||ya(e)?e:{value:e}}function Kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cD(t,e){return Kl(t,e.toTimestamp())}function Ut(t){return _e(!!t),K.fromTimestamp(function(n){const i=Si(n);return new Be(i.seconds,i.nanos)}(t))}function yp(t,e){return function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function gI(t){const e=xe.fromString(t);return _e(TI(e)),e}function Gl(t,e){return yp(t.databaseId,e.path)}function mo(t,e){const n=gI(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(_I(n))}function cd(t,e){return yp(t.databaseId,e)}function uD(t){const e=gI(t);return e.length===4?xe.emptyPath():_I(e)}function zo(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _I(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function E_(t,e,n){return{name:Gl(t,e),fields:n.value.mapValue.fields}}function hD(t,e){return"found"in e?function(i,s){_e(!!s.found),s.found.name,s.found.updateTime;const r=mo(i,s.found.name),o=Ut(s.found.updateTime),a=s.found.createTime?Ut(s.found.createTime):K.min(),l=new Rt({mapValue:{fields:s.found.fields}});return Ge.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(i,s){_e(!!s.missing),_e(!!s.readTime);const r=mo(i,s.missing),o=Ut(s.readTime);return Ge.newNoDocument(r,o)}(t,e):W()}function dD(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(_e(u===void 0||typeof u=="string"),It.fromBase64String(u||"")):(_e(u===void 0||u instanceof Uint8Array),It.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:dI(c.code);return new F(u,c.message||"")}(o);n=new pI(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=mo(t,i.document.name),r=Ut(i.document.updateTime),o=i.document.createTime?Ut(i.document.createTime):K.min(),a=new Rt({mapValue:{fields:i.document.fields}}),l=Ge.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ll(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=mo(t,i.document),r=i.readTime?Ut(i.readTime):K.min(),o=Ge.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=mo(t,i.document),r=i.removedTargetIds||[];n=new ll([],r,s,null)}else{if(!("filter"in e))return W();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new tD(s,r),a=i.targetId;n=new fI(a,o)}}return n}function yI(t,e){let n;if(e instanceof va)n={update:E_(t,e.key,e.value)};else if(e instanceof pp)n={delete:Gl(t,e.key)};else if(e instanceof Di)n={update:E_(t,e.key,e.data),updateMask:TD(e.fieldMask)};else{if(!(e instanceof uI))return W();n={verify:Gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof Wl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cD(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function fD(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?Ut(s.updateTime):Ut(r);return o.isEqual(K.min())&&(o=Ut(r)),new YO(o,s.transformResults||[])}(n,e))):[]}function pD(t,e){return{documents:[cd(t,e.path)]}}function mD(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=cd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return EI(Dn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ps(h.field),direction:yD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=ld(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function gD(t){let e=uD(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){_e(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=vI(h);return d instanceof Dn&&Ww(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ho(ks(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ya(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ql(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ql(f,d)}(n.endAt)),LO(e,s,o,r,a,"F",l,c)}function _D(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ks(n.unaryFilter.field);return je.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ks(n.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(i=>vI(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function yD(t){return rD[t]}function vD(t){return oD[t]}function ED(t){return aD[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return mt.fromServerFormat(t.fieldPath)}function EI(t){return t instanceof je?function(n){if(n.op==="=="){if(o_(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(r_(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o_(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(r_(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:vD(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const i=n.getFilters().map(s=>EI(s));return i.length===1?i[0]:{compositeFilter:{op:ED(n.op),filters:i}}}(t):W()}function TD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,i,s,r=K.min(),o=K.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.ct=e}}function ID(t){const e=gD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
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
 */class AD{constructor(){this.sn=new bD}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Ci.min())}updateCollectionGroup(e,n,i){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class bD{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Et(xe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Et(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new hr(0)}static On(){return new hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.changes=new kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?k.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&po(i.mutation,s,Lt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,se()).next(()=>i))}getLocalViewOfDocuments(e,n,i=se()){const s=Yi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Zr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Yi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,se()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=ei();const o=fo(),a=function(){return fo()}();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Di)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),po(u.mutation,c,u.mutation.getFieldMask(),Be.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new CD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=fo();let s=new Me((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Lt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||se()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=eI();u.forEach(d=>{if(!r.has(d)){const f=lI(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$O(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):k.resolve(Yi());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:Zw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(i=>{let s=Zr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Zr();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const l=function(u,h){return new Wc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ge.newInvalidDocument(c)))});let o=Zr();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&po(c.mutation,l,Lt.empty(),Be.now()),Qc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:ID(s.bundledQuery),readTime:Ut(s.readTime)}}(n)),k.resolve()}}/**
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
 */class kD{constructor(){this.overlays=new Me(z.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Yi();return k.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ht(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.cr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(i)),k.resolve()}getOverlaysForCollection(e,n,i){const s=Yi(),r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Me((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=Yi(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Yi(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return k.resolve(a)}ht(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(i.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new eD(n,i));let r=this.cr.get(n);r===void 0&&(r=se(),this.cr.set(n,r)),this.cr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.lr=new Et(Ke.hr),this.Pr=new Et(Ke.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const i=new Ke(e,n);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Er(new Ke(e,n))}dr(e,n){e.forEach(i=>this.removeReference(i,n))}Ar(e){const n=new z(new xe([])),i=new Ke(n,e),s=new Ke(n,e+1),r=[];return this.Pr.forEachInRange([i,s],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new z(new xe([])),i=new Ke(n,e),s=new Ke(n,e+1);let r=se();return this.Pr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ke(e,0),i=this.lr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ke{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return z.comparator(e.key,n.key)||he(e.mr,n.mr)}static Ir(e,n){return he(e.mr,n.mr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Et(Ke.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZO(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.wr(i),r=s<0?0:s;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([i,s],o=>{const a=this.yr(o.mr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Et(he);return n.forEach(s=>{const r=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{i=i.add(a.mr)})}),k.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new Ke(new z(r),0);let a=new Et(he);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(i=>{const s=this.yr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return k.forEach(n.mutations,s=>{const r=new Ke(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,n){const i=new Ke(n,0),s=this.pr.firstAfterOrEqual(i);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.Dr=e,this.docs=function(){return new Me(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return k.resolve(i?i.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let i=ei();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ge.newInvalidDocument(s))}),k.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=ei();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vO(yO(u),i)<=0||(s.has(u.key)||Qc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,i,s){W()}vr(e,n){return k.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new OD(this)}getSize(e){return k.resolve(this.size)}}class OD extends RD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(i)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.persistence=e,this.Cr=new kr(n=>hp(n),dp),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new vp,this.targetCount=0,this.Or=hr.xn()}forEachTarget(e,n){return this.Cr.forEach((i,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new hr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(r).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cr.get(n)||null;return k.resolve(i)}addMatchingKeys(e,n,i){return this.Mr.Tr(n,i),k.resolve()}removeMatchingKeys(e,n,i){this.Mr.dr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Mr.Vr(n);return k.resolve(i)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new ap(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new DD(this),this.indexManager=new AD,this.remoteDocumentCache=function(s){return new xD(s)}(i=>this.referenceDelegate.qr(i)),this.serializer=new wD(n),this.Qr=new PD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Nr[e.toKey()];return i||(i=new ND(n,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,i){U("MemoryPersistence","Starting transaction:",e);const s=new LD(this.Br.next());return this.referenceDelegate.Kr(),i(s).next(r=>this.referenceDelegate.$r(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ur(e,n){return k.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,n)))}}class LD extends TO{constructor(e){super(),this.currentSequenceNumber=e}}class Ep{constructor(e){this.persistence=e,this.Wr=new vp,this.Gr=null}static zr(e){return new Ep(e)}get jr(){if(this.Gr)return this.Gr;throw W()}addReference(e,n,i){return this.Wr.addReference(i,n),this.jr.delete(i.toString()),k.resolve()}removeReference(e,n,i){return this.Wr.removeReference(i,n),this.jr.add(i.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.jr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,i=>{const s=z.fromPath(i);return this.Hr(e,s).next(r=>{r||n.removeEntry(s,K.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(i=>{i?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Li=i,this.ki=s}static qi(e,n){let i=se(),s=se();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Tp(e,n.fromCache,i,s)}}/**
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
 */class VD{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.$i(e,n).next(r=>r||this.Ui(e,n,s,i)).next(r=>r||this.Wi(e,n))}$i(e,n){if(u_(n))return k.resolve(null);let i=Zn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=od(n,null,"F"),i=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=se(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,od(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,i,s){return u_(n)||s.isEqual(K.min())?this.Wi(e,n):this.Ki.getDocuments(e,i).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,i,s)?this.Wi(e,n):(t_()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ad(n)),this.ji(e,o,n,_O(s,-1)))})}Gi(e,n){let i=new Et(Xw(e));return n.forEach((s,r)=>{Qc(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Wi(e,n){return t_()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ad(n)),this.Ki.getDocumentsMatchingQuery(e,n,Ci.min())}ji(e,n,i,s){return this.Ki.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Me(he),this.Yi=new kr(r=>hp(r),dp),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function $D(t,e,n,i){return new FD(t,e,n,i)}async function wI(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.es(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=se();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function UD(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(_=>{const v=c.docVersions.get(g);_e(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function II(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function BD(t,e){const n=ee(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(It.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(_,v,T){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=ei(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(HD(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(K.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function HD(t,e,n){let i=se(),s=se();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=ei();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function jD(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function zD(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.kr.getTargetData(i,e).next(r=>r?(s=r,k.resolve(s)):n.kr.allocateTargetId(i).next(o=>(s=new gi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.kr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function ud(t,e,n){const i=ee(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_a(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function T_(t,e,n){const i=ee(t);let s=K.min(),r=se();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ee(l),d=h.Yi.get(u);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,Zn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:K.min(),n?r:se())).next(a=>(qD(i,UO(e),a),{documents:a,ss:r})))}function qD(t,e,n){let i=t.Zi.get(e)||K.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Zi.set(e,i)}class w_{constructor(){this.activeTargetIds=WO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WD{constructor(){this.Hs=new w_,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,i){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new w_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KD{Ys(e){}shutdown(){}}/**
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
 */class I_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function zu(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class YD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=i+"://"+n.host,this.Eo=`projects/${s}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Ro(){return!1}Vo(n,i,s,r,o){const a=zu(),l=this.mo(n,i);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw rr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,i,s,r,o,a){return this.Vo(n,i,s,r,o)}fo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}mo(n,i){const s=GD[n];return`${this.To}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,i,s){const r=zu();return new Promise((o,a)=>{const l=new oO;l.setWithCredentials(!0),l.listenOnce(iO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ju.NO_ERROR:const u=l.getResponseJson();U(ct,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case ju.TIMEOUT:U(ct,`RPC '${e}' ${r} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const h=l.getStatus();if(U(ct,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(T)>=0?T:A.UNKNOWN}(f.status);a(new F(g,f.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(ct,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);U(ct,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=zu(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tO(),a=nO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new rO({})),this.fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");U(ct,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new QD({so:v=>{f?U(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(U(ct,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),U(ct,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,T,R)=>{v.listen(T,P=>{try{R(P)}catch(b){setTimeout(()=>{throw b},0)}})};return _(h,Wa.EventType.OPEN,()=>{f||U(ct,`RPC '${e}' stream ${s} transport opened.`)}),_(h,Wa.EventType.CLOSE,()=>{f||(f=!0,U(ct,`RPC '${e}' stream ${s} transport closed`),g.Po())}),_(h,Wa.EventType.ERROR,v=>{f||(f=!0,rr(ct,`RPC '${e}' stream ${s} transport errored:`,v),g.Po(new F(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Wa.EventType.MESSAGE,v=>{var T;if(!f){const R=v.data[0];_e(!!R);const P=R,b=P.error||((T=P[0])===null||T===void 0?void 0:T.error);if(b){U(ct,`RPC '${e}' stream ${s} received error:`,b);const X=b.status;let G=function(Pt){const nt=Fe[Pt];if(nt!==void 0)return dI(nt)}(X),we=b.message;G===void 0&&(G=A.INTERNAL,we="Unknown error status: "+X+" with message "+b.message),f=!0,g.Po(new F(G,we)),h.close()}else U(ct,`RPC '${e}' stream ${s} received:`,R),g.Io(R)}}),_(a,sO.STAT_EVENT,v=>{v.stat===Zg.PROXY?U(ct,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Zg.NOPROXY&&U(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function qu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return new lD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-i);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.Bo=i,this.Lo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new wp(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.ko===n&&this.e_(i,s)},i=>{e(()=>{const s=new F(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(s)})})}e_(e,n){const i=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{i(()=>this.t_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XD extends AI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=dD(this.serializer,e),i=function(r){if(!("targetChange"in r))return K.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Ut(o.readTime):K.min()}(e);return this.listener.r_(n,i)}i_(e){const n={};n.database=zo(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=rd(l)?{documents:pD(r,l)}:{query:mD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mI(r,o.resumeToken);const c=ld(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(K.min())>0){a.readTime=Kl(r,o.snapshotVersion.toTimestamp());const c=ld(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=_D(this.serializer,e);i&&(n.labels=i),this.Ho(n)}s_(e){const n={};n.database=zo(this.serializer),n.removeTarget=e,this.Ho(n)}}class JD extends AI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=fD(e.writeResults,e.commitTime),i=Ut(e.commitTime);return this.listener.u_(i,n)}return _e(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=zo(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>yI(this.serializer,i))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Vo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(A.UNKNOWN,s.toString())})}yo(e,n,i,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(A.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class eM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Jn(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{Ts(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.y_.add(4),await Ta(c),c.b_.set("Unknown"),c.y_.delete(4),await eu(c)}(this))})}),this.b_=new eM(i,s)}}async function eu(t){if(Ts(t))for(const e of t.w_)await e(!0)}async function Ta(t){for(const e of t.w_)await e(!1)}function bI(t,e){const n=ee(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),bp(n)?Ap(n):Nr(n).Uo()&&Ip(n,e))}function RI(t,e){const n=ee(t),i=Nr(n);n.p_.delete(e),i.Uo()&&CI(n,e),n.p_.size===0&&(i.Uo()?i.zo():Ts(n)&&n.b_.set("Unknown"))}function Ip(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Nr(t).i_(e)}function CI(t,e){t.D_.Be(e),Nr(t).s_(e)}function Ap(t){t.D_=new sD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Nr(t).start(),t.b_.A_()}function bp(t){return Ts(t)&&!Nr(t).$o()&&t.p_.size>0}function Ts(t){return ee(t).y_.size===0}function SI(t){t.D_=void 0}async function nM(t){t.p_.forEach((e,n)=>{Ip(t,e)})}async function iM(t,e){SI(t),bp(t)?(t.b_.m_(e),Ap(t)):t.b_.set("Unknown")}async function sM(t,e,n){if(t.b_.set("Online"),e instanceof pI&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(i){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ql(t,i)}else if(e instanceof ll?t.D_.We(e):e instanceof fI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(K.min()))try{const i=await II(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(It.EMPTY_BYTE_STRING,u.snapshotVersion)),CI(r,l);const h=new gi(u.target,l,c,u.sequenceNumber);Ip(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){U("RemoteStore","Failed to raise snapshot:",i),await Ql(t,i)}}async function Ql(t,e,n){if(!_a(e))throw e;t.y_.add(1),await Ta(t),t.b_.set("Offline"),n||(n=()=>II(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await eu(t)})}function PI(t,e){return e().catch(n=>Ql(t,n,e))}async function tu(t){const e=ee(t),n=Pi(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;rM(e);)try{const s=await jD(e.localStore,i);if(s===null){e.g_.length===0&&n.zo();break}i=s.batchId,oM(e,s)}catch(s){await Ql(e,s)}kI(e)&&NI(e)}function rM(t){return Ts(t)&&t.g_.length<10}function oM(t,e){t.g_.push(e);const n=Pi(t);n.Uo()&&n.__&&n.a_(e.mutations)}function kI(t){return Ts(t)&&!Pi(t).$o()&&t.g_.length>0}function NI(t){Pi(t).start()}async function aM(t){Pi(t).l_()}async function lM(t){const e=Pi(t);for(const n of t.g_)e.a_(n.mutations)}async function cM(t,e,n){const i=t.g_.shift(),s=mp.from(i,e,n);await PI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await tu(t)}async function uM(t,e){e&&Pi(t).__&&await async function(i,s){if(function(o){return hI(o)&&o!==A.ABORTED}(s.code)){const r=i.g_.shift();Pi(i).Go(),await PI(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await tu(i)}}(t,e),kI(t)&&NI(t)}async function A_(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const i=Ts(n);n.y_.add(3),await Ta(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await eu(n)}async function hM(t,e){const n=ee(t);e?(n.y_.delete(2),await eu(n)):e||(n.y_.add(2),await Ta(n),n.b_.set("Unknown"))}function Nr(t){return t.v_||(t.v_=function(n,i,s){const r=ee(n);return r.P_(),new XD(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:nM.bind(null,t),uo:iM.bind(null,t),r_:sM.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),bp(t)?Ap(t):t.b_.set("Unknown")):(await t.v_.stop(),SI(t))})),t.v_}function Pi(t){return t.C_||(t.C_=function(n,i,s){const r=ee(n);return r.P_(),new JD(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:aM.bind(null,t),uo:uM.bind(null,t),c_:lM.bind(null,t),u_:cM.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await tu(t)):(await t.C_.stop(),t.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Rp(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),_a(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,i)=>e(n,i)||z.comparator(n.key,i.key):(n,i)=>z.comparator(n.key,i.key),this.keyedMap=Zr(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ys;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.F_=new Me(z.comparator)}track(e){const n=e.doc.key,i=this.F_.get(n);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(n,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(n):e.type===1&&i.type===2?this.F_=this.F_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):W():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,i)=>{e.push(i)}),e}}class dr{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new dr(e,n,Ys.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.x_=void 0,this.listeners=[]}}class fM{constructor(){this.queries=new kr(e=>Yw(e),Gc),this.onlineState="Unknown",this.O_=new Set}}async function Sp(t,e){const n=ee(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new dM),s)try{r.x_=await n.onListen(i)}catch(o){const a=Cp(o,`Initialization of query '${ad(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&kp(n)}async function Pp(t,e){const n=ee(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function pM(t,e){const n=ee(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(s)&&(i=!0);o.x_=s}}i&&kp(n)}function mM(t,e,n){const i=ee(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function kp(t){t.O_.forEach(e=>{e.next()})}class Np{constructor(e,n,i){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new dr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.key=e}}class OI{constructor(e){this.key=e}}class gM{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=se(),this.mutatedKeys=se(),this.na=Xw(e),this.ra=new Ys(this.na)}get ia(){return this.X_}sa(e,n){const i=n?n.oa:new b_,s=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Qc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(i.track({type:3,doc:f}),v=!0):this._a(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(d)-g(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new dr(this.query,e.ra,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new b_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=se(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const n=[];return e.forEach(i=>{this.ta.has(i)||n.push(new OI(i))}),this.ta.forEach(i=>{e.has(i)||n.push(new xI(i))}),n}ha(e){this.X_=e.ss,this.ta=se();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return dr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class _M{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class yM{constructor(e){this.key=e,this.Ia=!1}}class vM{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new kr(a=>Yw(a),Gc),this.da=new Map,this.Aa=new Set,this.Ra=new Me(z.comparator),this.Va=new Map,this.ma=new vp,this.fa={},this.ga=new Map,this.pa=hr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function EM(t,e){const n=kM(t);let i,s;const r=n.Ea.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Pa();else{const o=await zD(n.localStore,Zn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await TM(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&bI(n.remoteStore,o)}return s}async function TM(t,e,n,i,s){t.wa=(h,d,f)=>async function(_,v,T,R){let P=v.view.sa(T);P.zi&&(P=await T_(_.localStore,v.query,!1).then(({documents:G})=>v.view.sa(G,P)));const b=R&&R.targetChanges.get(v.targetId),X=v.view.applyChanges(P,_.isPrimaryClient,b);return C_(_,v.targetId,X.ca),X.snapshot}(t,h,d,f);const r=await T_(t.localStore,e,!0),o=new gM(e,r.ss),a=o.sa(r.documents),l=Ea.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);C_(t,n,c.ca);const u=new _M(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function wM(t,e){const n=ee(t),i=n.Ea.get(e),s=n.da.get(i.targetId);if(s.length>1)return n.da.set(i.targetId,s.filter(r=>!Gc(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ud(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),RI(n.remoteStore,i.targetId),hd(n,i.targetId)}).catch(ga)):(hd(n,i.targetId),await ud(n.localStore,i.targetId,!0))}async function IM(t,e,n){const i=NM(t);try{const s=await function(o,a){const l=ee(o),c=Be.now(),u=a.reduce((f,g)=>f.add(g.key),se());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=ei(),_=se();return l.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((T,R)=>{R.isValidDocument()||(_=_.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const T=[];for(const R of a){const P=JO(R,h.get(R.key).overlayedDocument);P!=null&&T.push(new Di(R.key,P,jw(P.value.mapValue),Ct.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(v=>{d=v;const T=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:d.batchId,changes:Zw(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Me(he)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,s.batchId,n),await wa(i,s.changes),await tu(i.remoteStore)}catch(s){const r=Cp(s,"Failed to persist write");n.reject(r)}}async function DI(t,e){const n=ee(t);try{const i=await BD(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Va.get(r);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?_e(o.Ia):s.removedDocuments.size>0&&(_e(o.Ia),o.Ia=!1))}),await wa(n,i,e)}catch(i){await ga(i)}}function R_(t,e,n){const i=ee(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&kp(l)}(i.eventManager,e),s.length&&i.Ta.r_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function AM(t,e,n){const i=ee(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Va.get(e),r=s&&s.key;if(r){let o=new Me(z.comparator);o=o.insert(r,Ge.newNoDocument(r,K.min()));const a=se().add(r),l=new Jc(K.min(),new Map,new Me(he),o,a);await DI(i,l),i.Ra=i.Ra.remove(r),i.Va.delete(e),xp(i)}else await ud(i.localStore,e,!1).then(()=>hd(i,e,n)).catch(ga)}async function bM(t,e){const n=ee(t),i=e.batch.batchId;try{const s=await UD(n.localStore,e);LI(n,i,null),MI(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await wa(n,s)}catch(s){await ga(s)}}async function RM(t,e,n){const i=ee(t);try{const s=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(_e(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);LI(i,e,n),MI(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await wa(i,s)}catch(s){await ga(s)}}function MI(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function LI(t,e,n){const i=ee(t);let s=i.fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fa[i.currentUser.toKey()]=s}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(i=>{t.ma.containsKey(i)||VI(t,i)})}function VI(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(RI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),xp(t))}function C_(t,e,n){for(const i of n)i instanceof xI?(t.ma.addReference(i.key,e),CM(t,i)):i instanceof OI?(U("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||VI(t,i.key)):W()}function CM(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(U("SyncEngine","New document in limbo: "+n),t.Aa.add(i),xp(t))}function xp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new z(xe.fromString(e)),i=t.pa.next();t.Va.set(i,new yM(n)),t.Ra=t.Ra.insert(n,i),bI(t.remoteStore,new gi(Zn(Kc(n.path)),i,"TargetPurposeLimboResolution",ap.ae))}}async function wa(t,e,n){const i=ee(t),s=[],r=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Tp.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Ta.r_(s),await async function(l,c){const u=ee(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!_a(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,_)}}}(i.localStore,r))}async function SM(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const i=await wI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await wa(n,i.ts)}}function PM(t,e){const n=ee(t),i=n.Va.get(e);if(i&&i.Ia)return se().add(i.key);{let s=se();const r=n.da.get(e);if(!r)return s;for(const o of r){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function kM(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AM.bind(null,e),e.Ta.r_=pM.bind(null,e.eventManager),e.Ta.Sa=mM.bind(null,e.eventManager),e}function NM(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RM.bind(null,e),e}class S_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $D(this.persistence,new VD,e.initialUser,this.serializer)}createPersistence(e){return new MD(Ep.zr,this.serializer)}createSharedClientState(e){return new WD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>R_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=SM.bind(null,this.syncEngine),await hM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fM}()}createDatastore(e){const n=Zc(e.databaseInfo.databaseId),i=function(r){return new YD(r)}(e.databaseInfo);return function(r,o,a,l){return new ZD(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new tM(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return I_.v()?new I_:new KD}())}createSyncEngine(e,n){return function(s,r,o,a,l,c,u){const h=new vM(s,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=ee(n);U("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await Ta(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Op{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new F(A.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const o=ee(s),a=zo(o.serializer)+"/documents",l={documents:r.map(d=>Gl(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=hD(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());_e(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new pp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=z.fromPath(i);this.mutations.push(new uI(s,this.precondition(s)))}),await async function(i,s){const r=ee(i),o=zo(r.serializer)+"/documents",a={writes:s.map(l=>yI(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw W();n=K.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new F(A.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(K.min())?Ct.exists(!1):Ct.updateTime(n):Ct.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(K.min()))throw new F(A.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ct.updateTime(n)}return Ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class DM{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.qa=i.maxAttempts,this.Ko=new wp(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new OM(this.datastore),n=this.Ka(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.$a(s)}))}).catch(i=>{this.$a(i)})})}Ka(e){try{const n=this.updateFunction(e);return!ya(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!hI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Uw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Cp(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await wI(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VM(t);U("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>A_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>A_(e.remoteStore,r)),t._onlineComponents=e}function LM(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function VM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LM(n))throw n;rr("Error using user provided cache. Falling back to memory cache: "+n),await Wu(t,new S_)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new S_);return t._offlineComponents}async function Dp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await P_(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await P_(t,new xM))),t._onlineComponents}function FM(t){return Dp(t).then(e=>e.syncEngine)}function $M(t){return Dp(t).then(e=>e.datastore)}async function Yl(t){const e=await Dp(t),n=e.eventManager;return n.onListen=EM.bind(null,e.syncEngine),n.onUnlisten=wM.bind(null,e.syncEngine),n}function UM(t,e,n={}){const i=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Op({next:d=>{o.enqueueAndForget(()=>Pp(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new F(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Np(Kc(a.path),u,{includeMetadataChanges:!0,W_:!0});return Sp(r,h)}(await Yl(t),t.asyncQueue,e,n,i)),i.promise}function BM(t,e,n={}){const i=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Op({next:d=>{o.enqueueAndForget(()=>Pp(r,h)),d.fromCache&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Np(a,u,{includeMetadataChanges:!0,W_:!0});return Sp(r,h)}(await Yl(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function FI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HM(t,e,n,i){if(e===!0&&i===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!z.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x_(t){if(z.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mp(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FI((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new lO;switch(i.type){case"firstParty":return new dO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=k_.get(n);i&&(U("ComponentProvider","Removing Datastore"),k_.delete(n),i.terminate())}(this),Promise.resolve()}}function jM(t,e,n,i={}){var s;const r=(t=Bt(t,nu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=ut.MOCK_USER;else{a=pR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new cO(new $w(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class Tt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class wi extends Ia{constructor(e,n,i){super(e,n,Kc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new z(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function zM(t,e,...n){if(t=Ze(t),$I("collection","path",e),t instanceof nu){const i=xe.fromString(e,...n);return x_(i),new wi(t,null,i)}{if(!(t instanceof Tt||t instanceof wi))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(xe.fromString(e,...n));return x_(i),new wi(t.firestore,null,i)}}function to(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Uw.V()),$I("doc","path",e),t instanceof nu){const i=xe.fromString(e,...n);return N_(i),new Tt(t,null,new z(i))}{if(!(t instanceof Tt||t instanceof wi))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(xe.fromString(e,...n));return N_(i),new Tt(t.firestore,t instanceof wi?t.converter:null,new z(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new wp(this,"async_queue_retry"),this.Xa=()=>{const n=qu();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=qu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=qu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Pn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!_a(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Jn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=Rp.createAndSchedule(this,e,n,i,r=>this.ru(r));return this.ja.push(s),s}eu(){this.Ha&&W()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function D_(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ki extends nu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new qM}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UI(this),this._firestoreClient.terminate()}}function WM(t,e){const n=typeof t=="object"?t:of(),i=typeof t=="string"?t:e||"(default)",s=rf(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=fR("firestore");r&&jM(s,...r)}return s}function Aa(t){return t._firestoreClient||UI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UI(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new AO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,FI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new MM(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(It.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=/^__.*__$/;class GM{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class BI{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class su{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.Pu(e),s}Iu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Xl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(HI(this.uu)&&KM.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class QM{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Zc(e)}Ru(e,n,i,s=!1){return new su({uu:e,methodName:n,Au:i,path:mt.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lp(t){const e=t._freezeSettings(),n=Zc(t._databaseId);return new QM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jI(t,e,n,i,s,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,s);Vp("Data must be an object, but it was:",o,i);const a=KI(i,o);let l,c;if(r.merge)l=new Lt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=dd(e,h,n);if(!o.contains(d))throw new F(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);QI(u,d)||u.push(d)}l=new Lt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new GM(new Rt(a),l,c)}class ru extends xr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ru}}function zI(t,e,n){return new su({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class YM extends xr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=zI(this,e,!0),i=this.Vu.map(r=>Or(r,n)),s=new cr(i);return new fp(e.path,s)}isEqual(e){return this===e}}class XM extends xr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=zI(this,e,!0),i=this.Vu.map(r=>Or(r,n)),s=new ur(i);return new fp(e.path,s)}isEqual(e){return this===e}}class JM extends xr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new jo(e.serializer,iI(e.serializer,this.mu));return new fp(e.path,n)}isEqual(e){return this===e}}function qI(t,e,n,i){const s=t.Ru(1,e,n);Vp("Data must be an object, but it was:",s,i);const r=[],o=Rt.empty();Es(i,(l,c)=>{const u=Fp(e,l,n);c=Ze(c);const h=s.Iu(u);if(c instanceof ru)r.push(u);else{const d=Or(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Lt(r);return new BI(o,a,s.fieldTransforms)}function WI(t,e,n,i,s,r){const o=t.Ru(1,e,n),a=[dd(e,i,n)],l=[s];if(r.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(dd(e,r[d])),l.push(r[d+1]);const c=[],u=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!QI(c,a[d])){const f=a[d];let g=l[d];g=Ze(g);const _=o.Iu(f);if(g instanceof ru)c.push(f);else{const v=Or(g,_);v!=null&&(c.push(f),u.set(f,v))}}const h=new Lt(c);return new BI(u,h,o.fieldTransforms)}function Or(t,e){if(GI(t=Ze(t)))return Vp("Unsupported field value:",e,t),KI(t,e);if(t instanceof xr)return function(i,s){if(!HI(s.uu))throw s.Eu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=Or(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Ze(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return iI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Be.fromDate(i);return{timestampValue:Kl(s.serializer,r)}}if(i instanceof Be){const r=new Be(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Kl(s.serializer,r)}}if(i instanceof iu)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ds)return{bytesValue:mI(s.serializer,i._byteString)};if(i instanceof Tt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yp(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Eu(`Unsupported field value: ${Mp(i)}`)}(t,e)}function KI(t,e){const n={};return Bw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(i,s)=>{const r=Or(s,e.lu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function GI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof iu||t instanceof ds||t instanceof Tt||t instanceof xr)}function Vp(t,e,n){if(!GI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Mp(n);throw i==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function dd(t,e,n){if((e=Ze(e))instanceof ba)return e._internalPath;if(typeof e=="string")return Fp(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZM=new RegExp("[~\\*/\\[\\]]");function Fp(t,e,n){if(e.search(ZM)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ba(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}function QI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(YI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eL extends Jl{data(){return super.data()}}function YI(t,e){return typeof e=="string"?Fp(t,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JI{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Es(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new iu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=cp(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=Si(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=xe.fromString(e);_e(TI(i));const s=new Bo(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(n)||Jn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class tL extends JI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $p extends Jl{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(YI("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class cl extends $p{data(e={}){return super.data(e)}}class e0{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new cl(this._firestore,this._userDataWriter,i.key,i,new Vs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new cl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new cl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:nL(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){t=Bt(t,Tt);const e=Bt(t.firestore,ki);return UM(Aa(e),t._key).then(n=>n0(e,t,n))}class ou extends JI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function iL(t){t=Bt(t,Ia);const e=Bt(t.firestore,ki),n=Aa(e),i=new ou(e);return XI(t._query),BM(n,t._query).then(s=>new e0(e,i,t,s))}function K$(t,e,n){t=Bt(t,Tt);const i=Bt(t.firestore,ki),s=ZI(t.converter,e,n);return t0(i,[jI(Lp(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ct.none())])}function G$(t,e,n,...i){t=Bt(t,Tt);const s=Bt(t.firestore,ki),r=Lp(s);let o;return o=typeof(e=Ze(e))=="string"||e instanceof ba?WI(r,"updateDoc",t._key,e,n,i):qI(r,"updateDoc",t._key,e),t0(s,[o.toMutation(t._key,Ct.exists(!0))])}function Bp(t,...e){var n,i,s;t=Ze(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||D_(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(D_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Tt)c=Bt(t.firestore,ki),u=Kc(t._key.path),l={next:h=>{e[o]&&e[o](n0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Bt(t,Ia);c=Bt(h.firestore,ki),u=h._query;const d=new ou(c);l={next:f=>{e[o]&&e[o](new e0(c,d,h,f))},error:e[o+1],complete:e[o+2]},XI(t._query)}return function(d,f,g,_){const v=new Op(_),T=new Np(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>Sp(await Yl(d),T)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Pp(await Yl(d),T))}}(Aa(c),u,a,l)}function t0(t,e){return function(i,s){const r=new Pn;return i.asyncQueue.enqueueAndForget(async()=>IM(await FM(i),s,r)),r.promise}(Aa(t),e)}function n0(t,e,n){const i=n.docs.get(e._key),s=new ou(t);return new $p(t,s,e._key,i,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const sL={maxAttempts:5};function jr(t,e){if((t=Ze(t)).firestore!==e)throw new F(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rL extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=Lp(n)}get(n){const i=jr(n,this._firestore),s=new tL(this._firestore);return this._transaction.lookup([i._key]).then(r=>{if(!r||r.length!==1)return W();const o=r[0];if(o.isFoundDocument())return new Jl(this._firestore,s,o.key,o,i.converter);if(o.isNoDocument())return new Jl(this._firestore,s,i._key,null,i.converter);throw W()})}set(n,i,s){const r=jr(n,this._firestore),o=ZI(r.converter,i,s),a=jI(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,s);return this._transaction.set(r._key,a),this}update(n,i,s,...r){const o=jr(n,this._firestore);let a;return a=typeof(i=Ze(i))=="string"||i instanceof ba?WI(this._dataReader,"Transaction.update",o._key,i,s,r):qI(this._dataReader,"Transaction.update",o._key,i),this._transaction.update(o._key,a),this}delete(n){const i=jr(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=jr(e,this._firestore),i=new ou(this._firestore);return super.get(e).then(s=>new $p(this._firestore,i,n._key,s._document,new Vs(!1,!1),n.converter))}}function oL(t,e,n){t=Bt(t,ki);const i=Object.assign(Object.assign({},sL),n);return function(r){if(r.maxAttempts<1)throw new F(A.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(r,o,a){const l=new Pn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await $M(r);new DM(r.asyncQueue,c,a,o,l).run()}),l.promise}(Aa(t),s=>e(new rL(t,s)),i)}function Y$(...t){return new YM("arrayUnion",t)}function aL(...t){return new XM("arrayRemove",t)}function lL(t){return new JM("increment",t)}(function(e,n=!0){(function(s){Pr=s})(Ni),Nn(new un("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new ki(new uO(i.getProvider("auth-internal")),new pO(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ft(e_,"4.1.0",e),Ft(e_,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebasestorage.googleapis.com",cL="storageBucket",uL=2*60*1e3,hL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ln{constructor(e,n,i=0){super(Ku(e),`Firebase Storage: ${n} (${Ku(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mn||(Mn={}));function Ku(t){return"storage/"+t}function dL(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Mn.UNKNOWN,t)}function fL(){return new Vn(Mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pL(){return new Vn(Mn.CANCELED,"User canceled the upload/download.")}function mL(t){return new Vn(Mn.INVALID_URL,"Invalid URL '"+t+"'.")}function gL(t){return new Vn(Mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function M_(t){return new Vn(Mn.INVALID_ARGUMENT,t)}function s0(){return new Vn(Mn.APP_DELETED,"The Firebase app was deleted.")}function _L(t){return new Vn(Mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(i.path==="")return i;throw gL(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},_=n===i0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${s}/${v}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<P.length;b++){const X=P[b],G=X.regex.exec(e);if(G){const we=G[X.indices.bucket];let Re=G[X.indices.path];Re||(Re=""),i=new on(we,Re),X.postModify(i);break}}if(i==null)throw mL(e);return i}}class yL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...T){if(c){d();return}if(v){d(),u.call(null,v,...T);return}if(l()||o){d(),u.call(null,v,...T);return}i<64&&(i*=2);let P;a===1?(a=2,P=0):P=(i+Math.random())*1e3,h(P)}let g=!1;function _(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function EL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){return t!==void 0}function L_(t,e,n,i){if(i<e)throw M_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw M_(`Invalid value for '${t}'. Expected ${n} or less.`)}function wL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zl||(Zl={}));/**
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
 */function IL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Xa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Zl.NO_ERROR,l=r.getStatus();if(!a||IL(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Zl.ABORT;i(!1,new Xa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Xa(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());TL(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=dL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?s0():pL();o(l)}else{const l=fL();o(l)}};this.canceled_?n(!1,new Xa(!1,null,!0)):this.backoffId_=vL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xa{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function bL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PL(t,e,n,i,s,r,o=!0){const a=wL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return CL(c,e),bL(c,n),RL(c,r),SL(c,i),new AL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ec{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ec(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NL(this._location.path)}get storage(){return this._service}get parent(){const e=kL(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new ec(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _L(e)}}function V_(t,e){const n=e==null?void 0:e[cL];return n==null?null:on.makeFromBucketSpec(n,t)}class xL{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=i0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uL,this._maxUploadRetryTime=hL,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=V_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=V_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ec(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new yL(s0());{const o=PL(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const F_="@firebase/storage",$_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL="storage";function DL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xL(n,i,s,e,Ni)}function ML(){Nn(new un(OL,DL,"PUBLIC").setMultipleInstances(!0)),Ft(F_,$_,""),Ft(F_,$_,"esm2017")}ML();const Gu=new WeakMap;function r0(t,e){return Gu.has(e)||Gu.set(e,t||{f:{},r:{},s:{},u:{}}),Gu.get(e)}function LL(t,e,n,i){if(!t)return n;const[s,r]=o0(t);if(!s)return n;const o=r0(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function VL(t,e,n,i){if(!t)return;const[s,r]=o0(t);if(!s)return;const o=r0(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(wn),a}function o0(t){return lk(t)||ck(t)?["f",t.path]:uk(t)?["r",t.toString()]:hk(t)?["s",t.toString()]:[]}const Qu=new WeakMap;function FL(t,e,n){const i=ta();Qu.has(i)||Qu.set(i,new Map);const s=Qu.get(i),r=VL(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):wn}const $L={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function fd(t,e,n,i){if(!ok(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof Be||g instanceof iu)h[f]=g;else if(gf(g)){const _=c+f;h[f]=_ in n?l[f]:g.path,d[_]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let _=0;_<g.length;_++){const v=g[_];v&&v.path in r&&(h[f][_]=r[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else gs(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const Hp={reset:!1,wait:!0,maxRefDepth:2,converter:$L,snapshotOptions:{serverTimestamps:"estimate"}};function tc(t){for(const e in t)t[e].unsub()}function pd(t,e,n,i,s,r,o,a,l){const[c,u]=fd(i.data(t.snapshotOptions),mf(e,n),s,t);r.set(e,n,c),md(t,e,n,s,u,r,o,a,l)}function UL({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=wn;return a.once?Up(t).then(u=>{u.exists()?pd(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=Bp(t,u=>{u.exists()?pd(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),tc(l)}}function md(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(_=>c.indexOf(_)<0).forEach(_=>{i[_].unsub(),delete i[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const v=i[_],T=s[_],R=`${n}.${_}`;if(f[R]=!0,v)if(v.path!==T.path)v.unsub();else return;i[_]={data:()=>mf(e,R),unsub:UL({ref:T,target:e,path:R,depth:o,ops:r,resolve:g.bind(null,R),reject:l},t),path:T.path}})}function BL(t,e,n,i,s,r){const o=Object.assign({},Hp,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Yt(c?[]:t.value);c||n.set(t,h,[]);const f=i;let g,_=wn;const v=[],T={added:({newIndex:P,doc:b})=>{v.splice(P,0,Object.create(null));const X=v[P],[G,we]=fd(b.data(l),void 0,X,o);n.add(be(d),P,G),md(o,d,`${h}.${P}`,X,we,n,0,i.bind(null,b),s)},modified:({oldIndex:P,newIndex:b,doc:X})=>{const G=be(d),we=v[P],Re=G[P],[Pt,nt]=fd(X.data(l),Re,we,o);v.splice(b,0,we),n.remove(G,P),n.add(G,b,Pt),md(o,d,`${h}.${b}`,we,nt,n,0,i,s)},removed:({oldIndex:P})=>{const b=be(d);n.remove(b,P),tc(v.splice(P,1)[0])}};function R(P){const b=P.docChanges(a);if(!g&&b.length){g=!0;let X=0;const G=b.length,we=Object.create(null);for(let Re=0;Re<G;Re++)we[b[Re].doc.id]=!0;i=Re=>{Re&&Re.id in we&&++X>=G&&(c&&(n.set(t,h,be(d)),d=t),f(be(d)),i=wn)}}b.forEach(X=>{T[X.type](X)}),b.length||(c&&(n.set(t,h,be(d)),d=t),i(be(d)))}return u?iL(e).then(R).catch(s):_=Bp(e,R,s),P=>{if(_(),P){const b=typeof P=="function"?P():[];n.set(t,h,b)}v.forEach(tc)}}function HL(t,e,n,i,s,r){const o=Object.assign({},Hp,r),a="value",l=Object.create(null);i=dk(i,()=>mf(t,a));let c=wn;function u(h){h.exists()?pd(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?Up(e).then(u).catch(s):c=Bp(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}tc(l)}}const U_=Symbol();function a0(t,e){let n=wn;const i=Object.assign({},Hp,e),s=be(t),r=i.target||Yt();pk()&&(i.once=!0);const o=LL(s,i.ssrKey,U_,ta()),a=o!==U_;a&&(r.value=o);let l=!a;const c=Yt(!1),u=Yt(),h=Wy(),d=ky();let f=wn;function g(){let T=be(t);const R=new Promise((P,b)=>{if(n(i.reset),!T)return n=wn,P(null);c.value=l,l=!0,T.converter||(T=T.withConverter(i.converter)),n=(gf(T)?HL:BL)(r,T,jL,P,b,i)}).catch(P=>(h.value===R&&(u.value=P),Promise.reject(P))).finally(()=>{h.value===R&&(c.value=!1)});h.value=R}let _=wn;ot(t)&&(_=Hs(t,g)),g(),s&&(f=FL(h.value,s,i.ssrKey)),yv()&&rv(()=>h.value),d&&Z0(v);function v(T=i.reset){_(),f(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const jL={set:(t,e,n)=>sk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function zL(t,e){return a0(t,{target:Yt([]),...e})}function qL(t,e){return a0(t,e)}function WL(t){return(e,n)=>{const i=mk(e,n).run(()=>Yt(t));AE.set(e,i),gk(i,e)}}function X$(t){return ik?EE(ta(t)):null}function KL(t,{firebaseApp:e,modules:n=[]}){t.provide(IE,e);for(const i of n)i(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const GL=Symbol();var B_;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(B_||(B_={}));function QL(){const t=Py(!0),e=t.run(()=>Yt({}));let n=[],i=[];const s=zd({install(r){s._a=r,r.provide(GL,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!kP?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const l0=Mv({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),ji=WM(l0);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof window<"u";function YL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Yu(t,e){const n={};for(const i in e){const s=e[i];n[i]=fn(s)?s.map(t):t(s)}return n}const go=()=>{},fn=Array.isArray,XL=/\/$/,JL=t=>t.replace(XL,"");function Xu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=nV(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function ZL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function H_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eV(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&fr(e.matched[i],n.matched[s])&&c0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function c0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tV(t[n],e[n]))return!1;return!0}function tV(t,e){return fn(t)?j_(t,e):fn(e)?j_(e,t):t===e}function j_(t,e){return fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function nV(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var qo;(function(t){t.pop="pop",t.push="push"})(qo||(qo={}));var _o;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_o||(_o={}));function iV(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JL(t)}const sV=/^[^#]+#/;function rV(t,e){return t.replace(sV,"#")+e}function oV(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const au=()=>({left:window.pageXOffset,top:window.pageYOffset});function aV(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=oV(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function z_(t,e){return(history.state?history.state.position-e:-1)+t}const gd=new Map;function lV(t,e){gd.set(t,e)}function cV(t){const e=gd.get(t);return gd.delete(t),e}let uV=()=>location.protocol+"//"+location.host;function u0(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),H_(l,"")}return H_(n,t)+i+s}function hV(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=u0(t,location),g=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=_?d.position-_.position:0}else i(f);s.forEach(T=>{T(n.value,g,{delta:v,type:qo.pop,direction:v?v>0?_o.forward:_o.back:_o.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:au()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function q_(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?au():null}}function dV(t){const{history:e,location:n}=window,i={value:u0(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:uV()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=ge({},e.state,q_(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ge({},s.value,e.state,{forward:l,scroll:au()});r(u.current,u,!0);const h=ge({},q_(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function fV(t){t=iV(t);const e=dV(t),n=hV(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ge({location:"",base:t,go:i,createHref:rV.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pV(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),fV(t)}function mV(t){return typeof t=="string"||t&&typeof t=="object"}function h0(t){return typeof t=="string"||typeof t=="symbol"}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},d0=Symbol("");var W_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(W_||(W_={}));function pr(t,e){return ge(new Error,{type:t,[d0]:!0},e)}function Un(t,e){return t instanceof Error&&d0 in t&&(e==null||!!(t.type&e))}const K_="[^/]+?",gV={sensitive:!1,strict:!1,start:!0,end:!0},_V=/[.+*?^${}()[\]/\\]/g;function yV(t,e){const n=ge({},gV,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(_V,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:_,optional:v,regexp:T}=d;r.push({name:g,repeatable:_,optional:v});const R=T||K_;if(R!==K_){f+=10;try{new RegExp(`(${R})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+b.message)}}let P=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(P=v&&c.length<2?`(?:/${P})`:"/"+P),v&&(P+="?"),s+=P,f+=20,v&&(f+=-8),_&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:v}=f,T=g in c?c[g]:"";if(fn(T)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=fn(T)?T.join("/"):T;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function vV(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function EV(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=vV(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(G_(i))return 1;if(G_(s))return-1}return s.length-i.length}function G_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TV={type:0,value:""},wV=/[a-zA-Z0-9_]/;function IV(t){if(!t)return[[]];if(t==="/")return[[TV]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:wV.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function AV(t,e,n){const i=yV(IV(t.path),n),s=ge(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bV(t,e){const n=[],i=new Map;e=X_({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=RV(u);g.aliasOf=d&&d.record;const _=X_(e,u),v=[g];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of P)v.push(ge({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let T,R;for(const P of v){const{path:b}=P;if(h&&b[0]!=="/"){const X=h.record.path,G=X[X.length-1]==="/"?"":"/";P.path=h.record.path+(b&&G+b)}if(T=AV(P,h,_),d?d.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),f&&u.name&&!Y_(T)&&o(u.name)),g.children){const X=g.children;for(let G=0;G<X.length;G++)r(X[G],T,d&&d.children[G])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return R?()=>{o(R)}:go}function o(u){if(h0(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&EV(u,n[h])>=0&&(u.record.path!==n[h].record.path||!f0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Y_(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},g,_;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw pr(1,{location:u});_=d.record.name,f=ge(Q_(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Q_(u.params,d.keys.map(R=>R.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(R=>R.re.test(g)),d&&(f=d.parse(g),_=d.record.name);else{if(d=h.name?i.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw pr(1,{location:u,currentLocation:h});_=d.record.name,f=ge({},h.params,u.params),g=d.stringify(f)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:g,params:f,matched:v,meta:SV(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Q_(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function RV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Y_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SV(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function X_(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function f0(t,e){return e.children.some(n=>n===t||f0(t,n))}const p0=/#/g,PV=/&/g,kV=/\//g,NV=/=/g,xV=/\?/g,m0=/\+/g,OV=/%5B/g,DV=/%5D/g,g0=/%5E/g,MV=/%60/g,_0=/%7B/g,LV=/%7C/g,y0=/%7D/g,VV=/%20/g;function jp(t){return encodeURI(""+t).replace(LV,"|").replace(OV,"[").replace(DV,"]")}function FV(t){return jp(t).replace(_0,"{").replace(y0,"}").replace(g0,"^")}function _d(t){return jp(t).replace(m0,"%2B").replace(VV,"+").replace(p0,"%23").replace(PV,"%26").replace(MV,"`").replace(_0,"{").replace(y0,"}").replace(g0,"^")}function $V(t){return _d(t).replace(NV,"%3D")}function UV(t){return jp(t).replace(p0,"%23").replace(xV,"%3F")}function BV(t){return t==null?"":UV(t).replace(kV,"%2F")}function nc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HV(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(m0," "),o=r.indexOf("="),a=nc(o<0?r:r.slice(0,o)),l=o<0?null:nc(r.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function J_(t){let e="";for(let n in t){const i=t[n];if(n=$V(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(i)?i.map(r=>r&&_d(r)):[i&&_d(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function jV(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zV=Symbol(""),Z_=Symbol(""),lu=Symbol(""),zp=Symbol(""),yd=Symbol("");function zr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ui(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(pr(4,{from:n,to:e})):h instanceof Error?a(h):mV(h)?a(pr(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ju(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(qV(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ui(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=YL(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ui(d,n,i,r,o)()}))}}return s}function qV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ey(t){const e=Vt(lu),n=Vt(zp),i=Kt(()=>e.resolve(be(t.to))),s=Kt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(fr.bind(null,u));if(d>-1)return d;const f=ty(l[c-2]);return c>1&&ty(u)===f&&h[h.length-1].path!==f?h.findIndex(fr.bind(null,l[c-2])):d}),r=Kt(()=>s.value>-1&&QV(n.params,i.value.params)),o=Kt(()=>s.value>-1&&s.value===n.matched.length-1&&c0(n.params,i.value.params));function a(l={}){return GV(l)?e[be(t.replace)?"replace":"push"](be(t.to)).catch(go):Promise.resolve()}return{route:i,href:Kt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const WV=ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ey,setup(t,{slots:e}){const n=hc(ey(t)),{options:i}=Vt(lu),s=Kt(()=>({[ny(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ny(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),KV=WV;function GV(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QV(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!fn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ty(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ny=(t,e,n)=>t??e??n,YV=ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vt(yd),s=Kt(()=>t.route||i.value),r=Vt(Z_,0),o=Kt(()=>{let c=be(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kt(()=>s.value.matched[o.value]);Za(Z_,Kt(()=>o.value+1)),Za(zV,a),Za(yd,s);const l=Yt();return Hs(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!fr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return iy(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Tv(d,ge({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return iy(n.default,{Component:v,route:c})||v}}});function iy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const v0=YV;function XV(t){const e=bV(t.routes,t),n=t.parseQuery||HV,i=t.stringifyQuery||J_,s=t.history,r=zr(),o=zr(),a=zr(),l=Wy(li);let c=li;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yu.bind(null,w=>""+w),h=Yu.bind(null,BV),d=Yu.bind(null,nc);function f(w,V){let O,B;return h0(w)?(O=e.getRecordMatcher(w),B=V):B=w,e.addRoute(B,O)}function g(w){const V=e.getRecordMatcher(w);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function T(w,V){if(V=ge({},V||l.value),typeof w=="string"){const y=Xu(n,w,V.path),E=e.resolve({path:y.path},V),I=s.createHref(y.fullPath);return ge(y,E,{params:d(E.params),hash:nc(y.hash),redirectedFrom:void 0,href:I})}let O;if("path"in w)O=ge({},w,{path:Xu(n,w.path,V.path).path});else{const y=ge({},w.params);for(const E in y)y[E]==null&&delete y[E];O=ge({},w,{params:h(y)}),V.params=h(V.params)}const B=e.resolve(O,V),pe=w.hash||"";B.params=u(d(B.params));const p=ZL(i,ge({},w,{hash:FV(pe),path:B.path})),m=s.createHref(p);return ge({fullPath:p,hash:pe,query:i===J_?jV(w.query):w.query||{}},B,{redirectedFrom:void 0,href:m})}function R(w){return typeof w=="string"?Xu(n,w,l.value.path):ge({},w)}function P(w,V){if(c!==w)return pr(8,{from:V,to:w})}function b(w){return we(w)}function X(w){return b(ge(R(w),{replace:!0}))}function G(w){const V=w.matched[w.matched.length-1];if(V&&V.redirect){const{redirect:O}=V;let B=typeof O=="function"?O(w):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=R(B):{path:B},B.params={}),ge({query:w.query,hash:w.hash,params:"path"in B?{}:w.params},B)}}function we(w,V){const O=c=T(w),B=l.value,pe=w.state,p=w.force,m=w.replace===!0,y=G(O);if(y)return we(ge(R(y),{state:typeof y=="object"?ge({},pe,y.state):pe,force:p,replace:m}),V||O);const E=O;E.redirectedFrom=V;let I;return!p&&eV(i,B,O)&&(I=pr(16,{to:E,from:B}),gn(B,B,!0,!1)),(I?Promise.resolve(I):nt(E,B)).catch(C=>Un(C)?Un(C,2)?C:si(C):fe(C,E,B)).then(C=>{if(C){if(Un(C,2))return we(ge({replace:m},R(C.to),{state:typeof C.to=="object"?ge({},pe,C.to.state):pe,force:p}),V||E)}else C=Vi(E,B,!0,m,pe);return ii(E,B,C),C})}function Re(w,V){const O=P(w,V);return O?Promise.reject(O):Promise.resolve()}function Pt(w){const V=As.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(w):w()}function nt(w,V){let O;const[B,pe,p]=JV(w,V);O=Ju(B.reverse(),"beforeRouteLeave",w,V);for(const y of B)y.leaveGuards.forEach(E=>{O.push(ui(E,w,V))});const m=Re.bind(null,w,V);return O.push(m),lt(O).then(()=>{O=[];for(const y of r.list())O.push(ui(y,w,V));return O.push(m),lt(O)}).then(()=>{O=Ju(pe,"beforeRouteUpdate",w,V);for(const y of pe)y.updateGuards.forEach(E=>{O.push(ui(E,w,V))});return O.push(m),lt(O)}).then(()=>{O=[];for(const y of p)if(y.beforeEnter)if(fn(y.beforeEnter))for(const E of y.beforeEnter)O.push(ui(E,w,V));else O.push(ui(y.beforeEnter,w,V));return O.push(m),lt(O)}).then(()=>(w.matched.forEach(y=>y.enterCallbacks={}),O=Ju(p,"beforeRouteEnter",w,V),O.push(m),lt(O))).then(()=>{O=[];for(const y of o.list())O.push(ui(y,w,V));return O.push(m),lt(O)}).catch(y=>Un(y,8)?y:Promise.reject(y))}function ii(w,V,O){a.list().forEach(B=>Pt(()=>B(w,V,O)))}function Vi(w,V,O,B,pe){const p=P(w,V);if(p)return p;const m=V===li,y=Ns?history.state:{};O&&(B||m?s.replace(w.fullPath,ge({scroll:m&&y&&y.scroll},pe)):s.push(w.fullPath,pe)),l.value=w,gn(w,V,O,m),si()}let mn;function Dr(){mn||(mn=s.listen((w,V,O)=>{if(!Sa.listening)return;const B=T(w),pe=G(B);if(pe){we(ge(pe,{replace:!0}),B).catch(go);return}c=B;const p=l.value;Ns&&lV(z_(p.fullPath,O.delta),au()),nt(B,p).catch(m=>Un(m,12)?m:Un(m,2)?(we(m.to,B).then(y=>{Un(y,20)&&!O.delta&&O.type===qo.pop&&s.go(-1,!1)}).catch(go),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(m,B,p))).then(m=>{m=m||Vi(B,p,!1),m&&(O.delta&&!Un(m,8)?s.go(-O.delta,!1):O.type===qo.pop&&Un(m,20)&&s.go(-1,!1)),ii(B,p,m)}).catch(go)}))}let ws=zr(),qe=zr(),Ie;function fe(w,V,O){si(w);const B=qe.list();return B.length?B.forEach(pe=>pe(w,V,O)):console.error(w),Promise.reject(w)}function $n(){return Ie&&l.value!==li?Promise.resolve():new Promise((w,V)=>{ws.add([w,V])})}function si(w){return Ie||(Ie=!w,Dr(),ws.list().forEach(([V,O])=>w?O(w):V()),ws.reset()),w}function gn(w,V,O,B){const{scrollBehavior:pe}=t;if(!Ns||!pe)return Promise.resolve();const p=!O&&cV(z_(w.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return Yy().then(()=>pe(w,V,p)).then(m=>m&&aV(m)).catch(m=>fe(m,w,V))}const kt=w=>s.go(w);let Is;const As=new Set,Sa={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:_,resolve:T,options:t,push:b,replace:X,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:qe.add,isReady:$n,install(w){const V=this;w.component("RouterLink",KV),w.component("RouterView",v0),w.config.globalProperties.$router=V,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Ns&&!Is&&l.value===li&&(Is=!0,b(s.location).catch(pe=>{}));const O={};for(const pe in li)Object.defineProperty(O,pe,{get:()=>l.value[pe],enumerable:!0});w.provide(lu,V),w.provide(zp,By(O)),w.provide(yd,l);const B=w.unmount;As.add(w),w.unmount=function(){As.delete(w),As.size<1&&(c=li,mn&&mn(),mn=null,l.value=li,Is=!1,Ie=!1),B()}}};function lt(w){return w.reduce((V,O)=>V.then(()=>Pt(O)),Promise.resolve())}return Sa}function JV(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>fr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>fr(c,l))||s.push(l))}return[n,i,s]}function ZV(){return Vt(lu)}function eF(){return Vt(zp)}const tF=ms({__name:"App",setup(t){const e=bc(),n=ZV(),i=eF();return Hs(e,async(s,r)=>{if(!s&&r&&i.meta.requiresAuth)return n.push({name:"login"});if(s&&typeof i.query.redirect=="string")return n.push(i.query.redirect)}),(s,r)=>($e(),bi(be(v0)))}}),nF="modulepreload",iF=function(t){return"/"+t},sy={},qr=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=iF(r),r in sy)return;sy[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":nF,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function q(t,e,n,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sF=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},rF=(t,e,n)=>{e.constructor.createProperty(n,t)};function De(t){return(e,n)=>n!==void 0?rF(t,e,n):sF(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Li(t){return De({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E0=({finisher:t,descriptor:e})=>(n,i)=>{var s;if(i===void 0){const r=(s=n.originalKey)!==null&&s!==void 0?s:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pn(t,e){return E0({descriptor:n=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zu;const oF=((Zu=window.HTMLSlotElement)===null||Zu===void 0?void 0:Zu.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function aF(t){const{slot:e,selector:n}=t??{};return E0({descriptor:i=>({get(){var s;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),a=o!=null?oF(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul=window,qp=ul.ShadowRoot&&(ul.ShadyCSS===void 0||ul.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wp=Symbol(),ry=new WeakMap;let T0=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==Wp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(qp&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=ry.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ry.set(n,e))}return e}toString(){return this.cssText}};const lF=t=>new T0(typeof t=="string"?t:t+"",void 0,Wp),Fn=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new T0(n,t,Wp)},cF=(t,e)=>{qp?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),s=ul.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)})},oy=qp?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return lF(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var eh;const ic=window,ay=ic.trustedTypes,uF=ay?ay.emptyScript:"",ly=ic.reactiveElementPolyfillSupport,vd={toAttribute(t,e){switch(e){case Boolean:t=t?uF:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},w0=(t,e)=>e!==t&&(e==e||t==t),th={attribute:!0,type:String,converter:vd,reflect:!1,hasChanged:w0},Ed="finalized";let xs=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const s=this._$Ep(i,n);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,n=th){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(s){const r=this[e];this[n]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||th}static finalize(){if(this.hasOwnProperty(Ed))return!1;this[Ed]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of i)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(oy(s))}else e!==void 0&&n.push(oy(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return cF(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=th){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:vd).toAttribute(n,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:vd;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||w0)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};xs[Ed]=!0,xs.elementProperties=new Map,xs.elementStyles=[],xs.shadowRootOptions={mode:"open"},ly==null||ly({ReactiveElement:xs}),((eh=ic.reactiveElementVersions)!==null&&eh!==void 0?eh:ic.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nh;const sc=window,mr=sc.trustedTypes,cy=mr?mr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Td="$lit$",mi=`lit$${(Math.random()+"").slice(9)}$`,I0="?"+mi,hF=`<${I0}>`,fs=document,Wo=()=>fs.createComment(""),Ko=t=>t===null||typeof t!="object"&&typeof t!="function",A0=Array.isArray,dF=t=>A0(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ih=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uy=/-->/g,hy=/>/g,Ui=RegExp(`>|${ih}(?:([^\\s"'>=/]+)(${ih}*=${ih}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dy=/'/g,fy=/"/g,b0=/^(?:script|style|textarea|title)$/i,fF=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),ft=fF(1),ps=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),py=new WeakMap,Xi=fs.createTreeWalker(fs,129,null,!1);function R0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return cy!==void 0?cy.createHTML(e):e}const pF=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=Wr;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===Wr?u[1]==="!--"?o=uy:u[1]!==void 0?o=hy:u[2]!==void 0?(b0.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Ui):u[3]!==void 0&&(o=Ui):o===Ui?u[0]===">"?(o=s??Wr,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Ui:u[3]==='"'?fy:dy):o===fy||o===dy?o=Ui:o===uy||o===hy?o=Wr:(o=Ui,s=void 0);const f=o===Ui&&t[a+1].startsWith("/>")?" ":"";r+=o===Wr?l+hF:h>=0?(i.push(c),l.slice(0,h)+Td+l.slice(h)+mi+f):l+mi+(h===-2?(i.push(void 0),a):f)}return[R0(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class Go{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=pF(e,n);if(this.el=Go.createElement(c,i),Xi.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Xi.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(Td)||d.startsWith(mi)){const f=u[o++];if(h.push(d),f!==void 0){const g=s.getAttribute(f.toLowerCase()+Td).split(mi),_=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:_[2],strings:g,ctor:_[1]==="."?gF:_[1]==="?"?yF:_[1]==="@"?vF:cu})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(b0.test(s.tagName)){const h=s.textContent.split(mi),d=h.length-1;if(d>0){s.textContent=mr?mr.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],Wo()),Xi.nextNode(),l.push({type:2,index:++r});s.append(h[d],Wo())}}}else if(s.nodeType===8)if(s.data===I0)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(mi,h+1))!==-1;)l.push({type:7,index:r}),h+=mi.length-1}r++}}static createElement(e,n){const i=fs.createElement("template");return i.innerHTML=e,i}}function gr(t,e,n=t,i){var s,r,o,a;if(e===ps)return e;let l=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=Ko(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=gr(t,l._$AS(t,e.values),l,i)),e}class mF{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:fs).importNode(i,!0);Xi.currentNode=r;let o=Xi.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Ra(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new EF(o,this,e)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Xi.nextNode(),a++)}return Xi.currentNode=fs,r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class Ra{constructor(e,n,i,s){var r;this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=gr(this,e,n),Ko(e)?e===te||e==null||e===""?(this._$AH!==te&&this._$AR(),this._$AH=te):e!==this._$AH&&e!==ps&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):dF(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==te&&Ko(this._$AH)?this._$AA.nextSibling.data=e:this.$(fs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Go.createElement(R0(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const o=new mF(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let n=py.get(e.strings);return n===void 0&&py.set(e.strings,n=new Go(e)),n}T(e){A0(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new Ra(this.k(Wo()),this.k(Wo()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class cu{constructor(e,n,i,s,r){this.type=1,this._$AH=te,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=te}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=gr(this,e,n,0),o=!Ko(e)||e!==this._$AH&&e!==ps,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=gr(this,a[i+l],n,l),c===ps&&(c=this._$AH[l]),o||(o=!Ko(c)||c!==this._$AH[l]),c===te?e=te:e!==te&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gF extends cu{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===te?void 0:e}}const _F=mr?mr.emptyScript:"";class yF extends cu{constructor(){super(...arguments),this.type=4}j(e){e&&e!==te?this.element.setAttribute(this.name,_F):this.element.removeAttribute(this.name)}}class vF extends cu{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=gr(this,e,n,0))!==null&&i!==void 0?i:te)===ps)return;const s=this._$AH,r=e===te&&s!==te||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==te&&(s===te||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class EF{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){gr(this,e)}}const my=sc.litHtmlPolyfillSupport;my==null||my(Go,Ra),((nh=sc.litHtmlVersions)!==null&&nh!==void 0?nh:sc.litHtmlVersions=[]).push("2.8.0");const TF=(t,e,n)=>{var i,s;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Ra(e.insertBefore(Wo(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sh,rh;let Ht=class extends xs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=TF(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ps}};Ht.finalized=!0,Ht._$litElement$=!0,(sh=globalThis.litElementHydrateSupport)===null||sh===void 0||sh.call(globalThis,{LitElement:Ht});const gy=globalThis.litElementPolyfillSupport;gy==null||gy({LitElement:Ht});((rh=globalThis.litElementVersions)!==null&&rh!==void 0?rh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wF extends Ht{render(){return ft`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const IF=Fn`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let wd=class extends wF{};wd.styles=[IF];wd=q([Mi("md-elevation")],wd);const C0=t=>(mc("data-v-eabfc1cc"),t=t(),gc(),t),AF=C0(()=>Ee("md-elevation",null,null,-1)),bF={class:"title headline-large"},RF={class:"content body-large"},CF={key:1,class:"card"},SF=C0(()=>Ee("md-elevation",null,null,-1)),PF={class:"title headline-large"},kF={class:"content body-large"},NF=ms({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const i=Qd("RouterLink");return t.path?($e(),bi(i,{key:0,to:t.path,class:"route card"},{default:en(()=>[Ee("div",null,[AF,Ee("div",bF,[Ma(e.$slots,"title",{},void 0,!0)]),Ee("div",RF,[Ma(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):($e(),qt("div",CF,[SF,Ee("div",PF,[Ma(e.$slots,"title",{},void 0,!0)]),Ee("div",kF,[Ma(e.$slots,"content",{},void 0,!0)])]))}}});const uu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},oh=uu(NF,[["__scopeId","data-v-eabfc1cc"]]),xF=t=>(mc("data-v-09829f4c"),t=t(),gc(),t),OF=["src"],DF=xF(()=>Ee("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),MF=ms({__name:"AccountImage",setup(t){var i;const e=bc(),n=Yt((i=e.value)==null?void 0:i.providerData[0].photoURL);return(s,r)=>{const o=Qd("RouterLink");return $e(),qt("div",null,[be(e)?($e(),bi(o,{key:0,to:"/myAccount"},{default:en(()=>[Ee("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,OF)]),_:1})):($e(),bi(o,{key:1,to:"/login"},{default:en(()=>[DF]),_:1}))])}}});const LF=uu(MF,[["__scopeId","data-v-09829f4c"]]),_y=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class VF extends Ht{render(){return ft`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const FF=Fn`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Id=class extends VF{};Id.styles=[FF];Id=q([Mi("md-icon")],Id);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S0=Symbol("attachableController");let hl;hl=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[S0])==null||e.hostConnected()});class P0{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[S0]=this,hl==null||hl.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $F=["focusin","focusout","pointerdown"];class Kp extends Ht{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new P0(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[yy]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[yy]=!0}}onControlChange(e,n){for(const i of $F)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}q([De({type:Boolean,reflect:!0})],Kp.prototype,"visible",void 0);q([De({type:Boolean,reflect:!0})],Kp.prototype,"inward",void 0);const yy=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const UF=Fn`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ad=class extends Kp{};Ad.styles=[UF];Ad=q([Mi("md-focus-ring")],Ad);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const BF={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},HF=t=>(...e)=>({_$litDirective$:t,values:e});let jF=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=HF(class extends jF{constructor(t){var e;if(super(t),t.type!==BF.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const s=t.element.classList;this.it.forEach(r=>{r in e||(s.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return ps}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qo={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zF=450,vy=225,qF=.2,WF=10,KF=75,GF=.35,QF="::after",YF="forwards";var bt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(bt||(bt={}));const XF=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],JF=150;class Ca extends Ht{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=bt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new P0(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return ft`<div class="surface ${hu(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==bt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===bt.HOLDING){this.state=bt.WAITING_FOR_CLICK;return}if(this.state===bt.TOUCH_DELAY){this.state=bt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=bt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=bt.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,JF)}),this.state===bt.TOUCH_DELAY&&(this.state=bt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===bt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===bt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),i=Math.max(e,n),s=Math.max(GF*i,KF),r=Math.floor(i*qF),a=Math.sqrt(n**2+e**2)+WF;this.initialSize=r,this.rippleScale=`${(a+s)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:i}=window,{left:s,top:r}=this.getBoundingClientRect(),o=n+s,a=i+r,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:i}=this.getBoundingClientRect(),s={x:(i-this.initialSize)/2,y:(n-this.initialSize)/2};let r;return e instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(e):r={x:i/2,y:n/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:s}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:i}=this.getTranslationCoordinates(e),s=`${n.x}px, ${n.y}px`,r=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:QF,duration:zF,easing:Qo.STANDARD,fill:YF})}async endPressAnimation(){this.state=bt.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=vy){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,vy-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:i,left:s,bottom:r,right:o}=this.getBoundingClientRect();return e>=s&&e<=o&&n>=i&&n<=r}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const i of XF)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}}q([De({type:Boolean,reflect:!0})],Ca.prototype,"disabled",void 0);q([Li()],Ca.prototype,"hovered",void 0);q([Li()],Ca.prototype,"pressed",void 0);q([pn(".surface")],Ca.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ZF=Fn`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bd=class extends Ca{};bd.styles=[ZF];bd=q([Mi("md-ripple")],bd);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k0=Symbol.for(""),e$=t=>{if((t==null?void 0:t.r)===k0)return t==null?void 0:t._$litStatic$},rc=(t,...e)=>({_$litStatic$:e.reduce((n,i,s)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:k0}),Ey=new Map,t$=t=>(e,...n)=>{const i=n.length;let s,r;const o=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(r=n[c],(s=e$(r))!==void 0);)l+=s+e[++c],u=!0;c!==i&&a.push(r),o.push(l),c++}if(c===i&&o.push(e[i]),u){const h=o.join("$$lit$$");(e=Ey.get(h))===void 0&&(o.raw=o,Ey.set(h,e=o)),n=a}return t(e,...n)},N0=t$(ft);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const x0=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];x0.map(O0);function O0(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Gp(t){for(const e of x0)t.createProperty(e,{attribute:O0(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qp=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function D0(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async i=>{const{type:s,[Qp]:{form:r}}=n;if(!(!r||s==="button")&&(await new Promise(o=>{o()}),!i.defaultPrevented)){if(s==="reset"){r.reset();return}r.addEventListener("submit",o=>{Object.defineProperty(o,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),r.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ty(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var M0;class zt extends Ht{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.type="submit",this.flipIcon=Ty(this,this.flipIconInRtl),this[M0]=this.attachInternals()}static get formAssociated(){return!0}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?rc`div`:rc`button`,{ariaLabel:n,ariaHasPopup:i,ariaExpanded:s}=this,r=n&&this.selectedAriaLabel,o=r?te:this.selected;let a=te;return this.href||(a=r&&this.selected?this.selectedAriaLabel:n),N0`<${e}
        class="icon-button ${hu(this.getRenderClasses())}"
        id="button"
        aria-label="${a||te}"
        aria-haspopup="${!this.href&&i||te}"
        aria-expanded="${!this.href&&s||te}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?te:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():te}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return ft`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||te}"
        aria-label="${e||te}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return ft`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return ft`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return ft`<span class="touch"></span>`}renderFocusRing(){return ft`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return ft`<md-ripple
      for=${this.href?"link":te}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=Ty(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}M0=Qp;Gp(zt),D0(zt);zt.shadowRootOptions={mode:"open",delegatesFocus:!0};q([De({type:Boolean,reflect:!0})],zt.prototype,"disabled",void 0);q([De({type:Boolean,attribute:"flip-icon-in-rtl"})],zt.prototype,"flipIconInRtl",void 0);q([De()],zt.prototype,"href",void 0);q([De()],zt.prototype,"target",void 0);q([De({attribute:"selected-aria-label",reflect:!0})],zt.prototype,"selectedAriaLabel",void 0);q([De({type:Boolean})],zt.prototype,"toggle",void 0);q([De({type:Boolean,reflect:!0})],zt.prototype,"selected",void 0);q([De()],zt.prototype,"type",void 0);q([Li()],zt.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const n$=Fn`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const i$=Fn`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Rd=class extends zt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Rd.styles=[n$,i$];Rd=q([Mi("md-icon-button")],Rd);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class du extends Ht{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}q([De({type:Boolean,reflect:!0})],du.prototype,"inset",void 0);q([De({type:Boolean,reflect:!0,attribute:"inset-start"})],du.prototype,"insetStart",void 0);q([De({type:Boolean,reflect:!0,attribute:"inset-end"})],du.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const s$=Fn`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Cd=class extends du{};Cd.styles=[s$];Cd=q([Mi("md-divider")],Cd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function r$(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(n);return i||e.preventDefault(),i}function o$(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function a$(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!l$(t)}function l$(t){const e=Sd;return e&&(t.preventDefault(),t.stopImmediatePropagation()),c$(),e}let Sd=!1;async function c$(){Sd=!0,await null,Sd=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u$={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Qo.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Qo.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},h$={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Qo.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Qo.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class He extends Ht{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>u$,this.getCloseAnimation=()=>h$,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var s;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(s=this.querySelector("[autofocus]"))==null||s.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:i}=this;if(!n||!i||!n.open)return;const s=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=s;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return ft`
      <div class="scrim"></div>
      <dialog
        class=${hu(n)}
        aria-label=${i||te}
        aria-labelledby=${this.hasHeadline?"headline":te}
        role=${this.type==="alert"?"alertdialog":te}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||te}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||te}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!r$(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:i,container:s,headline:r,content:o,actions:a}=this;if(!n||!i||!s||!r||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,g=[[n,c??[]],[i,u??[]],[s,l??[]],[r,h??[]],[o,d??[]],[a,f??[]]],_=[];for(const[v,T]of g)for(const R of T)_.push(v.animate(...R));await Promise.all(_.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:i}=e;n===this.topAnchor&&(this.isAtScrollTop=i),n===this.bottomAnchor&&(this.isAtScrollBottom=i)}}Gp(He);He.shadowRootOptions={...Ht.shadowRootOptions,delegatesFocus:!0};q([De({type:Boolean})],He.prototype,"open",null);q([De({attribute:!1})],He.prototype,"returnValue",void 0);q([De()],He.prototype,"type",void 0);q([pn("dialog")],He.prototype,"dialog",void 0);q([pn(".scrim")],He.prototype,"scrim",void 0);q([pn(".container")],He.prototype,"container",void 0);q([pn(".headline")],He.prototype,"headline",void 0);q([pn(".content")],He.prototype,"content",void 0);q([pn(".actions")],He.prototype,"actions",void 0);q([Li()],He.prototype,"isAtScrollTop",void 0);q([Li()],He.prototype,"isAtScrollBottom",void 0);q([pn(".scroller")],He.prototype,"scroller",void 0);q([pn(".top.anchor")],He.prototype,"topAnchor",void 0);q([pn(".bottom.anchor")],He.prototype,"bottomAnchor",void 0);q([Li()],He.prototype,"hasHeadline",void 0);q([Li()],He.prototype,"hasActions",void 0);q([Li()],He.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const d$=Fn`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Pd=class extends He{};Pd.styles=[d$];Pd=q([Mi("md-dialog")],Pd);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const f$=Fn`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid rgba(0,0,0,0);border-radius:inherit;inset:0;pointer-events:none;position:absolute}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var L0;class Jt extends Ht{static get formAssociated(){return!0}constructor(){super(),this.disabled=!1,this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this[L0]=this.attachInternals(),this.handleActivationClick=e=>{!a$(e)||!this.buttonElement||(this.focus(),o$(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?rc`a`:rc`button`,{ariaLabel:i,ariaHasPopup:s,ariaExpanded:r}=this;return N0`
      <${n}
        class="button ${hu(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||te}"
        aria-haspopup="${s||te}"
        aria-expanded="${r||te}"
        href=${this.href||te}
        target=${this.target||te}
      >
        ${this.renderFocusRing()}
        ${this.renderElevation()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderElevation(){return te}renderOutline(){return te}renderTouchTarget(){return ft`<span class="touch"></span>`}renderRipple(){return ft`<md-ripple class="button__ripple" ?disabled="${this.disabled}"></md-ripple>`}renderFocusRing(){return ft`<md-focus-ring part="focus-ring"></md-focus-ring>`}renderLabel(){return ft`<span class="button__label"><slot></slot></span>`}renderLeadingIcon(){return this.trailingIcon?te:this.renderIcon()}renderTrailingIcon(){return this.trailingIcon?this.renderIcon():te}renderIcon(){return ft`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}L0=Qp;Gp(Jt),D0(Jt);Jt.shadowRootOptions={mode:"open",delegatesFocus:!0};q([De({type:Boolean,reflect:!0})],Jt.prototype,"disabled",void 0);q([De()],Jt.prototype,"href",void 0);q([De()],Jt.prototype,"target",void 0);q([De({type:Boolean,attribute:"trailing-icon"})],Jt.prototype,"trailingIcon",void 0);q([De({type:Boolean,attribute:"has-icon"})],Jt.prototype,"hasIcon",void 0);q([De()],Jt.prototype,"type",void 0);q([pn(".button")],Jt.prototype,"buttonElement",void 0);q([aF({slot:"icon",flatten:!0})],Jt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class p$ extends Jt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const m$=Fn`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let kd=class extends p${};kd.styles=[f$,m$];kd=q([Mi("md-text-button")],kd);const fu=t=>(mc("data-v-14755761"),t=t(),gc(),t),g$={key:0,id:"user"},_$={class:"body-large admonitions"},y$={key:0,class:"section slots"},v$=fu(()=>Ee("div",{class:"label"}," Slot prenotati: ",-1)),E$={key:0},T$={key:1,class:"bookedSlots"},w$=fu(()=>Ee("md-elevation",null,null,-1)),I$=["onClick"],A$=fu(()=>Ee("md-icon",null,"close",-1)),b$=[A$],R$=["open"],C$=fu(()=>Ee("div",{slot:"headline"},"Conferma rimozione",-1)),S$={key:0,slot:"content",id:"form-id",method:"dialog"},P$={key:0},k$={slot:"actions"},N$={key:1,class:"section"},x$=ms({__name:"UserView",setup(t){var c,u;const e=bc(),n=qL(to(ji,`users/${(c=e.value)==null?void 0:c.uid}`)),i=zL(zM(ji,`users/${(u=e.value)==null?void 0:u.uid}/availabilities`)),s=Yt(!1),r=Yt(),o=Kt(()=>i.value.filter(h=>h.date.toDate()>new Date));function a(h){s.value=!0,r.value=h}async function l(){var v,T;if(r.value===null)return;const h=(v=r.value)==null?void 0:v.id,d=(T=e.value)==null?void 0:T.uid,f=to(ji,`users/${d}/availabilities/${h}`),g=to(ji,`users/${d}`),_=to(ji,`availabilities/${h}`);await oL(ji,async R=>{var P;R.update(_,{players:aL(g)}),R.delete(f),((P=r.value)==null?void 0:P.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&R.update(g,{admonitionCount:lL(1)})}),s.value=!1}return(h,d)=>{const f=Qd("RouterLink");return be(n)?($e(),qt("div",g$,[Ee("div",null,[Ee("h2",null,ri(be(n).username),1)]),Ee("div",null,[Ee("div",_$," Ammonizioni: "+ri(be(n).admonitionCount),1)]),o.value.length>0?($e(),qt("div",y$,[v$,be(n).admonitionCount>=2?($e(),qt("div",E$," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):Hn("",!0),o.value.length>0?($e(),qt("div",T$,[($e(!0),qt(Wt,null,nb(o.value,g=>($e(),qt("div",{class:"bookedSlot",key:g.id},[w$,jn(" "+ri(g.date.toDate().getDate())+" "+ri(be(_y)[g.date.toDate().getMonth()])+" "+ri(g.timeSlot)+" ",1),Ee("md-icon-button",{onClick:_=>a(g)},b$,8,I$),Ee("md-dialog",{class:"removeDialog",type:"alert",open:s.value},[C$,r.value?($e(),qt("form",S$,[Ee("div",null," Sei sicuro di voler disdire per il "+ri(r.value.date.toDate().getDate())+" "+ri(be(_y)[r.value.date.toDate().getMonth()])+" "+ri(r.value.timeSlot)+"? ",1),r.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?($e(),qt("p",P$," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):Hn("",!0)])):Hn("",!0),Ee("div",k$,[Ee("md-text-button",{form:"form-id",value:"cancel",onClick:d[0]||(d[0]=_=>s.value=!1)},"Annulla"),Ee("md-text-button",{form:"form-id",value:"delete",onClick:l},"Disdici")])],8,R$)]))),128))])):Hn("",!0)])):Hn("",!0),be(n).role==="admin"?($e(),qt("div",N$,[Xe(f,{to:"/adminPanel"},{default:en(()=>[jn(" Admin ")]),_:1})])):Hn("",!0)])):Hn("",!0)}}});const V0=uu(x$,[["__scopeId","data-v-14755761"]]),O$=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),D$=t=>(mc("data-v-a529ec71"),t=t(),gc(),t),M$={id:"home"},L$=D$(()=>Ee("h1",{class:"title display-medium"},"Fonti Paintball",-1)),V$={class:"content"},F$=ms({__name:"HomeView",setup(t){const e=Yt(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),Gd(()=>window.removeEventListener("resize",n));const i=bc();return(s,r)=>($e(),qt("div",M$,[e.value<900||!be(i)?($e(),bi(LF,{key:0})):Hn("",!0),L$,Ee("div",V$,[Ee("main",null,[Xe(oh,{path:"/rules"},{title:en(()=>[jn(" Regolamento ")]),content:en(()=>[jn(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),Xe(oh,{path:"/availability"},{title:en(()=>[jn(" Calendario ")]),content:en(()=>[jn(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),Xe(oh,null,{title:en(()=>[jn(" Statistiche giocatori ")]),content:en(()=>[jn(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&be(i)?($e(),bi(V0,{key:0})):Hn("",!0)])]))}});const $$=uu(F$,[["__scopeId","data-v-a529ec71"]]),F0=XV({history:pV("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:$$},{path:"/login",name:"login",component:()=>qr(()=>import("./LoginView-a9a7bb1d.js"),["assets/LoginView-a9a7bb1d.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>qr(()=>import("./AvailabilityView-f93e1709.js"),["assets/AvailabilityView-f93e1709.js","assets/AvailabilityView-ec6c4237.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>qr(()=>Promise.resolve().then(()=>O$),void 0)},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>qr(()=>import("./RulesView-16badbf6.js"),["assets/RulesView-16badbf6.js","assets/RulesView-fa63a5c5.css"])},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>qr(()=>import("./AdminView-b8d1c204.js"),[])}]});F0.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await rg())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await rg();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const i=await Up(to(ji,`users/${n.uid}`));if(!i.exists()||((e=i.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const pu=iR(tF);pu.use(QL());pu.use(F0);pu.use(KL,{firebaseApp:l0,modules:[WL()]});pu.mount("#app");export{K$ as $,hu as A,te as B,r$ as C,Mi as D,_y as E,Wt as F,di as G,hc as H,Kt as I,Hs as J,Ma as K,nb as L,Vd as M,U$ as N,Ld as O,jn as P,Yt as Q,zM as R,ji as S,zL as T,qL as U,to as V,bi as W,Up as X,G$ as Y,Y$ as Z,uu as _,bc as a,$e as b,qt as c,ms as d,be as e,Hn as f,H$ as g,Ee as h,Xe as i,gc as j,Fn as k,Gp as l,Ht as m,q as n,KA as o,mc as p,De as q,Qd as r,B$ as s,ri as t,X$ as u,pn as v,en as w,a$ as x,o$ as y,ft as z};
