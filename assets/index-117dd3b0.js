var lA=Object.defineProperty;var cA=(t,e,n)=>e in t?lA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>(cA(t,typeof e!="symbol"?e+"":e,n),n),uA=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var nh=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var rl=(t,e,n)=>(uA(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Sf(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const qe={},ar=[],Sn=()=>{},hA=()=>!1,dA=/^on[^a-z]/,Hc=t=>dA.test(t),kf=t=>t.startsWith("onUpdate:"),pt=Object.assign,Pf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fA=Object.prototype.hasOwnProperty,we=(t,e)=>fA.call(t,e),re=Array.isArray,lr=t=>jc(t)==="[object Map]",Rv=t=>jc(t)==="[object Set]",fe=t=>typeof t=="function",lt=t=>typeof t=="string",xf=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",Cv=t=>Ke(t)&&fe(t.then)&&fe(t.catch),Sv=Object.prototype.toString,jc=t=>Sv.call(t),pA=t=>jc(t).slice(8,-1),kv=t=>jc(t)==="[object Object]",Df=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pl=Sf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mA=/-(\w)/g,Zn=qc(t=>t.replace(mA,(e,n)=>n?n.toUpperCase():"")),gA=/\B([A-Z])/g,Fr=qc(t=>t.replace(gA,"-$1").toLowerCase()),Wc=qc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ih=qc(t=>t?`on${Wc(t)}`:""),zo=(t,e)=>!Object.is(t,e),sh=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ql=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_A=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jm;const Yh=()=>Jm||(Jm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=lt(i)?wA(i):Ho(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(lt(t))return t;if(Ke(t))return t}}const yA=/;(?![^(]*\))/g,vA=/:([^]+)/,EA=/\/\*[^]*?\*\//g;function wA(t){const e={};return t.replace(EA,"").split(yA).forEach(n=>{if(n){const i=n.split(vA);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function di(t){let e="";if(lt(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const i=di(t[n]);i&&(e+=i+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",TA=Sf(bA);function Pv(t){return!!t||t===""}const Ze=t=>lt(t)?t:t==null?"":re(t)||Ke(t)&&(t.toString===Sv||!fe(t.toString))?JSON.stringify(t,xv,2):String(t),xv=(t,e)=>e&&e.__v_isRef?xv(t,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Rv(e)?{[`Set(${e.size})`]:[...e.values()]}:Ke(e)&&!re(e)&&!kv(e)?String(e):e;let rn;class Dv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=rn;try{return rn=this,e()}finally{rn=n}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nf(t){return new Dv(t)}function IA(t,e=rn){e&&e.active&&e.effects.push(t)}function Of(){return rn}function Nv(t){rn&&rn.cleanups.push(t)}const Mf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ov=t=>(t.w&Gi)>0,Mv=t=>(t.n&Gi)>0,AA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gi},RA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Ov(s)&&!Mv(s)?s.delete(t):e[n++]=s,s.w&=~Gi,s.n&=~Gi}e.length=n}},Wl=new WeakMap;let _o=0,Gi=1;const Xh=30;let Tn;const ws=Symbol(""),Jh=Symbol("");class Lf{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,IA(this,i)}run(){if(!this.active)return this.fn();let e=Tn,n=Ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tn,Tn=this,Ui=!0,Gi=1<<++_o,_o<=Xh?AA(this):Zm(this),this.fn()}finally{_o<=Xh&&RA(this),Gi=1<<--_o,Tn=this.parent,Ui=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tn===this?this.deferStop=!0:this.active&&(Zm(this),this.onStop&&this.onStop(),this.active=!1)}}function Zm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ui=!0;const Lv=[];function Ur(){Lv.push(Ui),Ui=!1}function Br(){const t=Lv.pop();Ui=t===void 0?!0:t}function nn(t,e,n){if(Ui&&Tn){let i=Wl.get(t);i||Wl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Mf()),Vv(s)}}function Vv(t,e){let n=!1;_o<=Xh?Mv(t)||(t.n|=Gi,n=!Ov(t)):n=!t.has(Tn),n&&(t.add(Tn),Tn.deps.push(t))}function vi(t,e,n,i,s,r){const o=Wl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?Df(n)&&a.push(o.get("length")):(a.push(o.get(ws)),lr(t)&&a.push(o.get(Jh)));break;case"delete":re(t)||(a.push(o.get(ws)),lr(t)&&a.push(o.get(Jh)));break;case"set":lr(t)&&a.push(o.get(ws));break}if(a.length===1)a[0]&&Zh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Zh(Mf(l))}}function Zh(t,e){const n=re(t)?t:[...t];for(const i of n)i.computed&&eg(i);for(const i of n)i.computed||eg(i)}function eg(t,e){(t!==Tn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function CA(t,e){var n;return(n=Wl.get(t))==null?void 0:n.get(e)}const SA=Sf("__proto__,__v_isRef,__isVue"),$v=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xf)),kA=Vf(),PA=Vf(!1,!0),xA=Vf(!0),tg=DA();function DA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Te(this);for(let r=0,o=this.length;r<o;r++)nn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ur();const i=Te(this)[e].apply(this,n);return Br(),i}}),t}function NA(t){const e=Te(this);return nn(e,"has",t),e.hasOwnProperty(t)}function Vf(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?QA:Hv:e?zv:Bv).get(i))return i;const o=re(i);if(!t){if(o&&we(tg,s))return Reflect.get(tg,s,r);if(s==="hasOwnProperty")return NA}const a=Reflect.get(i,s,r);return(xf(s)?$v.has(s):SA(s))||(t||nn(i,"get",s),e)?a:Ye(a)?o&&Df(s)?a:a.value:Ke(a)?t?qv(a):zr(a):a}}const OA=Fv(),MA=Fv(!0);function Fv(t=!1){return function(n,i,s,r){let o=n[i];if(yr(o)&&Ye(o)&&!Ye(s))return!1;if(!t&&(!Kl(s)&&!yr(s)&&(o=Te(o),s=Te(s)),!re(n)&&Ye(o)&&!Ye(s)))return o.value=s,!0;const a=re(n)&&Df(i)?Number(i)<n.length:we(n,i),l=Reflect.set(n,i,s,r);return n===Te(r)&&(a?zo(s,o)&&vi(n,"set",i,s):vi(n,"add",i,s)),l}}function LA(t,e){const n=we(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&vi(t,"delete",e,void 0),i}function VA(t,e){const n=Reflect.has(t,e);return(!xf(e)||!$v.has(e))&&nn(t,"has",e),n}function $A(t){return nn(t,"iterate",re(t)?"length":ws),Reflect.ownKeys(t)}const Uv={get:kA,set:OA,deleteProperty:LA,has:VA,ownKeys:$A},FA={get:xA,set(t,e){return!0},deleteProperty(t,e){return!0}},UA=pt({},Uv,{get:PA,set:MA}),$f=t=>t,Kc=t=>Reflect.getPrototypeOf(t);function ol(t,e,n=!1,i=!1){t=t.__v_raw;const s=Te(t),r=Te(e);n||(e!==r&&nn(s,"get",e),nn(s,"get",r));const{has:o}=Kc(s),a=i?$f:n?Bf:jo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function al(t,e=!1){const n=this.__v_raw,i=Te(n),s=Te(t);return e||(t!==s&&nn(i,"has",t),nn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ll(t,e=!1){return t=t.__v_raw,!e&&nn(Te(t),"iterate",ws),Reflect.get(t,"size",t)}function ng(t){t=Te(t);const e=Te(this);return Kc(e).has.call(e,t)||(e.add(t),vi(e,"add",t,t)),this}function ig(t,e){e=Te(e);const n=Te(this),{has:i,get:s}=Kc(n);let r=i.call(n,t);r||(t=Te(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?zo(e,o)&&vi(n,"set",t,e):vi(n,"add",t,e),this}function sg(t){const e=Te(this),{has:n,get:i}=Kc(e);let s=n.call(e,t);s||(t=Te(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&vi(e,"delete",t,void 0),r}function rg(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&vi(t,"clear",void 0,void 0),n}function cl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Te(o),l=e?$f:t?Bf:jo;return!t&&nn(a,"iterate",ws),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ul(t,e,n){return function(...i){const s=this.__v_raw,r=Te(s),o=lr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?$f:e?Bf:jo;return!e&&nn(r,"iterate",l?Jh:ws),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Si(t){return function(...e){return t==="delete"?!1:this}}function BA(){const t={get(r){return ol(this,r)},get size(){return ll(this)},has:al,add:ng,set:ig,delete:sg,clear:rg,forEach:cl(!1,!1)},e={get(r){return ol(this,r,!1,!0)},get size(){return ll(this)},has:al,add:ng,set:ig,delete:sg,clear:rg,forEach:cl(!1,!0)},n={get(r){return ol(this,r,!0)},get size(){return ll(this,!0)},has(r){return al.call(this,r,!0)},add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear"),forEach:cl(!0,!1)},i={get(r){return ol(this,r,!0,!0)},get size(){return ll(this,!0)},has(r){return al.call(this,r,!0)},add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear"),forEach:cl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ul(r,!1,!1),n[r]=ul(r,!0,!1),e[r]=ul(r,!1,!0),i[r]=ul(r,!0,!0)}),[t,n,e,i]}const[zA,HA,jA,qA]=BA();function Ff(t,e){const n=e?t?qA:jA:t?HA:zA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(we(n,s)&&s in i?n:i,s,r)}const WA={get:Ff(!1,!1)},KA={get:Ff(!1,!0)},GA={get:Ff(!0,!1)},Bv=new WeakMap,zv=new WeakMap,Hv=new WeakMap,QA=new WeakMap;function YA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function XA(t){return t.__v_skip||!Object.isExtensible(t)?0:YA(pA(t))}function zr(t){return yr(t)?t:Uf(t,!1,Uv,WA,Bv)}function jv(t){return Uf(t,!1,UA,KA,zv)}function qv(t){return Uf(t,!0,FA,GA,Hv)}function Uf(t,e,n,i,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=XA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Bi(t){return yr(t)?Bi(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function Kl(t){return!!(t&&t.__v_isShallow)}function Wv(t){return Bi(t)||yr(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Gc(t){return ql(t,"__v_skip",!0),t}const jo=t=>Ke(t)?zr(t):t,Bf=t=>Ke(t)?qv(t):t;function Kv(t){Ui&&Tn&&(t=Te(t),Vv(t.dep||(t.dep=Mf())))}function Gv(t,e){t=Te(t);const n=t.dep;n&&Zh(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Ue(t){return Yv(t,!1)}function Qv(t){return Yv(t,!0)}function Yv(t,e){return Ye(t)?t:new JA(t,e)}class JA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:jo(e)}get value(){return Kv(this),this._value}set value(e){const n=this.__v_isShallow||Kl(e)||yr(e);e=n?e:Te(e),zo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jo(e),Gv(this))}}function H(t){return Ye(t)?t.value:t}const ZA={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Xv(t){return Bi(t)?t:new Proxy(t,ZA)}function eR(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=nR(t,n);return e}class tR{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return CA(Te(this._object),this._key)}}function nR(t,e,n){const i=t[e];return Ye(i)?i:new tR(t,e,n)}class iR{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Lf(e,()=>{this._dirty||(this._dirty=!0,Gv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Te(this);return Kv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sR(t,e,n=!1){let i,s;const r=fe(t);return r?(i=t,s=Sn):(i=t.get,s=t.set),new iR(i,s,r||!s,n)}function zi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Qc(r,e,n)}return s}function kn(t,e,n,i){if(fe(t)){const r=zi(t,e,n,i);return r&&Cv(r)&&r.catch(o=>{Qc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(kn(t[r],e,n,i));return s}function Qc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){zi(l,null,10,[t,o,a]);return}}rR(t,n,s,i)}function rR(t,e,n,i=!0){console.error(t)}let qo=!1,ed=!1;const Nt=[];let Un=0;const cr=[];let hi=null,fs=0;const Jv=Promise.resolve();let zf=null;function Hf(t){const e=zf||Jv;return t?e.then(this?t.bind(this):t):e}function oR(t){let e=Un+1,n=Nt.length;for(;e<n;){const i=e+n>>>1;Wo(Nt[i])<t?e=i+1:n=i}return e}function jf(t){(!Nt.length||!Nt.includes(t,qo&&t.allowRecurse?Un+1:Un))&&(t.id==null?Nt.push(t):Nt.splice(oR(t.id),0,t),Zv())}function Zv(){!qo&&!ed&&(ed=!0,zf=Jv.then(tE))}function aR(t){const e=Nt.indexOf(t);e>Un&&Nt.splice(e,1)}function lR(t){re(t)?cr.push(...t):(!hi||!hi.includes(t,t.allowRecurse?fs+1:fs))&&cr.push(t),Zv()}function og(t,e=qo?Un+1:0){for(;e<Nt.length;e++){const n=Nt[e];n&&n.pre&&(Nt.splice(e,1),e--,n())}}function eE(t){if(cr.length){const e=[...new Set(cr)];if(cr.length=0,hi){hi.push(...e);return}for(hi=e,hi.sort((n,i)=>Wo(n)-Wo(i)),fs=0;fs<hi.length;fs++)hi[fs]();hi=null,fs=0}}const Wo=t=>t.id==null?1/0:t.id,cR=(t,e)=>{const n=Wo(t)-Wo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tE(t){ed=!1,qo=!0,Nt.sort(cR);const e=Sn;try{for(Un=0;Un<Nt.length;Un++){const n=Nt[Un];n&&n.active!==!1&&zi(n,null,14)}}finally{Un=0,Nt.length=0,eE(),qo=!1,zf=null,(Nt.length||cr.length)&&tE()}}function uR(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||qe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||qe;d&&(s=n.map(f=>lt(f)?f.trim():f)),h&&(s=n.map(_A))}let a,l=i[a=ih(e)]||i[a=ih(Zn(e))];!l&&r&&(l=i[a=ih(Fr(e))]),l&&kn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kn(c,t,6,s)}}function nE(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=nE(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ke(t)&&i.set(t,null),null):(re(r)?r.forEach(l=>o[l]=null):pt(o,r),Ke(t)&&i.set(t,o),o)}function Yc(t,e){return!t||!Hc(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Fr(e))||we(t,e))}let Tt=null,Xc=null;function Gl(t){const e=Tt;return Tt=t,Xc=t&&t.type.__scopeId||null,e}function Jc(t){Xc=t}function Zc(){Xc=null}function an(t,e=Tt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&_g(-1);const r=Gl(e);let o;try{o=t(...s)}finally{Gl(r),i._d&&_g(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rh(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,w;const b=Gl(t);try{if(n.shapeFlag&4){const A=s||i;v=Fn(u.call(A,A,h,r,f,d,g)),w=l}else{const A=e;v=Fn(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),w=e.props?l:hR(l)}}catch(A){Co.length=0,Qc(A,t,1),v=Ge(Qi)}let T=v;if(w&&y!==!1){const A=Object.keys(w),{shapeFlag:O}=T;A.length&&O&7&&(o&&A.some(kf)&&(w=dR(w,o)),T=vr(T,w))}return n.dirs&&(T=vr(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),v=T,Gl(b),v}const hR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hc(n))&&((e||(e={}))[n]=t[n]);return e},dR=(t,e)=>{const n={};for(const i in t)(!kf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function fR(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ag(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Yc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ag(i,o,c):!0:!!o;return!1}function ag(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Yc(n,r))return!0}return!1}function pR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mR=t=>t.__isSuspense;function gR(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):lR(t)}const hl={};function Hi(t,e,n){return iE(t,e,n)}function iE(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=qe){var a;const l=Of()===((a=ot)==null?void 0:a.scope)?ot:null;let c,u=!1,h=!1;if(Ye(t)?(c=()=>t.value,u=Kl(t)):Bi(t)?(c=()=>t,i=!0):re(t)?(h=!0,u=t.some(A=>Bi(A)||Kl(A)),c=()=>t.map(A=>{if(Ye(A))return A.value;if(Bi(A))return nr(A);if(fe(A))return zi(A,l,2)})):fe(t)?e?c=()=>zi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),kn(t,l,3,[f])}:c=Sn,e&&i){const A=c;c=()=>nr(A())}let d,f=A=>{d=b.onStop=()=>{zi(A,l,4)}},g;if(Qo)if(f=Sn,e?n&&kn(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const A=cC();g=A.__watcherHandles||(A.__watcherHandles=[])}else return Sn;let y=h?new Array(t.length).fill(hl):hl;const v=()=>{if(b.active)if(e){const A=b.run();(i||u||(h?A.some((O,j)=>zo(O,y[j])):zo(A,y)))&&(d&&d(),kn(e,l,3,[A,y===hl?void 0:h&&y[0]===hl?[]:y,f]),y=A)}else b.run()};v.allowRecurse=!!e;let w;s==="sync"?w=v:s==="post"?w=()=>Zt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),w=()=>jf(v));const b=new Lf(c,w);e?n?v():y=b.run():s==="post"?Zt(b.run.bind(b),l&&l.suspense):b.run();const T=()=>{b.stop(),l&&l.scope&&Pf(l.scope.effects,b)};return g&&g.push(T),T}function _R(t,e,n){const i=this.proxy,s=lt(t)?t.includes(".")?sE(i,t):()=>i[t]:t.bind(i,i);let r;fe(e)?r=e:(r=e.handler,n=e);const o=ot;Er(this);const a=iE(s,r.bind(i),n);return o?Er(o):bs(),a}function sE(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function nr(t,e){if(!Ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))nr(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)nr(t[n],e);else if(Rv(t)||lr(t))t.forEach(n=>{nr(n,e)});else if(kv(t))for(const n in t)nr(t[n],e);return t}function ls(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ur(),kn(l,n,8,[t.el,a,t,e]),Br())}}function Yt(t,e){return fe(t)?(()=>pt({name:t.name},e,{setup:t}))():t}const Ao=t=>!!t.type.__asyncLoader,rE=t=>t.type.__isKeepAlive;function yR(t,e){oE(t,"a",e)}function vR(t,e){oE(t,"da",e)}function oE(t,e,n=ot){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(eu(e,i,n),n){let s=n.parent;for(;s&&s.parent;)rE(s.parent.vnode)&&ER(i,e,n,s),s=s.parent}}function ER(t,e,n,i){const s=eu(e,t,i,!0);qf(()=>{Pf(i[e],s)},n)}function eu(t,e,n=ot,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ur(),Er(n);const a=kn(e,n,t,o);return bs(),Br(),a});return i?s.unshift(r):s.push(r),r}}const Ai=t=>(e,n=ot)=>(!Qo||t==="sp")&&eu(t,(...i)=>e(...i),n),wR=Ai("bm"),bR=Ai("m"),TR=Ai("bu"),IR=Ai("u"),AR=Ai("bum"),qf=Ai("um"),aE=Ai("sp"),RR=Ai("rtg"),CR=Ai("rtc");function SR(t,e=ot){eu("ec",t,e)}const lE="components";function tu(t,e){return PR(lE,t,!0,e)||t}const kR=Symbol.for("v-ndc");function PR(t,e,n=!0,i=!1){const s=Tt||ot;if(s){const r=s.type;if(t===lE){const a=oC(r,!1);if(a&&(a===e||a===Zn(e)||a===Wc(Zn(e))))return r}const o=lg(s[t]||r[t],e)||lg(s.appContext[t],e);return!o&&i?r:o}}function lg(t,e){return t&&(t[e]||t[Zn(e)]||t[Wc(Zn(e))])}function fi(t,e,n,i){let s;const r=n&&n[i];if(re(t)||lt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function $n(t,e,n={},i,s){if(Tt.isCE||Tt.parent&&Ao(Tt.parent)&&Tt.parent.isCE)return e!=="default"&&(n.name=e),Ge("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),te();const o=r&&cE(r(n)),a=ei(it,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function cE(t){return t.some(e=>Yl(e)?!(e.type===Qi||e.type===it&&!cE(e.children)):!0)?t:null}const td=t=>t?wE(t)?Yf(t)||t.proxy:td(t.parent):null,Ro=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>td(t.parent),$root:t=>td(t.root),$emit:t=>t.emit,$options:t=>Wf(t),$forceUpdate:t=>t.f||(t.f=()=>jf(t.update)),$nextTick:t=>t.n||(t.n=Hf.bind(t.proxy)),$watch:t=>_R.bind(t)}),oh=(t,e)=>t!==qe&&!t.__isScriptSetup&&we(t,e),xR={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(oh(i,e))return o[e]=1,i[e];if(s!==qe&&we(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&we(c,e))return o[e]=3,r[e];if(n!==qe&&we(n,e))return o[e]=4,n[e];nd&&(o[e]=0)}}const u=Ro[e];let h,d;if(u)return e==="$attrs"&&nn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==qe&&we(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,we(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return oh(s,e)?(s[e]=n,!0):i!==qe&&we(i,e)?(i[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==qe&&we(t,o)||oh(e,o)||(a=r[0])&&we(a,o)||we(i,o)||we(Ro,o)||we(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cg(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nd=!0;function DR(t){const e=Wf(t),n=t.proxy,i=t.ctx;nd=!1,e.beforeCreate&&ug(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:T,unmounted:A,render:O,renderTracked:j,renderTriggered:ie,errorCaptured:Y,serverPrefetch:ae,expose:Ae,inheritAttrs:ct,components:At,directives:Rt,filters:li}=e;if(c&&NR(c,i,null),o)for(const De in o){const Ie=o[De];fe(Ie)&&(i[De]=Ie.bind(n))}if(s){const De=s.call(n,n);Ke(De)&&(t.data=zr(De))}if(nd=!0,r)for(const De in r){const Ie=r[De],En=fe(Ie)?Ie.bind(n,n):fe(Ie.get)?Ie.get.bind(n,n):Sn,wn=!fe(Ie)&&fe(Ie.set)?Ie.set.bind(n):Sn,mn=Re({get:En,set:wn});Object.defineProperty(i,De,{enumerable:!0,configurable:!0,get:()=>mn.value,set:yt=>mn.value=yt})}if(a)for(const De in a)uE(a[De],i,n,De);if(l){const De=fe(l)?l.call(n):l;Reflect.ownKeys(De).forEach(Ie=>{xl(Ie,De[Ie])})}u&&ug(u,t,"c");function Ee(De,Ie){re(Ie)?Ie.forEach(En=>De(En.bind(n))):Ie&&De(Ie.bind(n))}if(Ee(wR,h),Ee(bR,d),Ee(TR,f),Ee(IR,g),Ee(yR,y),Ee(vR,v),Ee(SR,Y),Ee(CR,j),Ee(RR,ie),Ee(AR,b),Ee(qf,A),Ee(aE,ae),re(Ae))if(Ae.length){const De=t.exposed||(t.exposed={});Ae.forEach(Ie=>{Object.defineProperty(De,Ie,{get:()=>n[Ie],set:En=>n[Ie]=En})})}else t.exposed||(t.exposed={});O&&t.render===Sn&&(t.render=O),ct!=null&&(t.inheritAttrs=ct),At&&(t.components=At),Rt&&(t.directives=Rt)}function NR(t,e,n=Sn){re(t)&&(t=id(t));for(const i in t){const s=t[i];let r;Ke(s)?"default"in s?r=tn(s.from||i,s.default,!0):r=tn(s.from||i):r=tn(s),Ye(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ug(t,e,n){kn(re(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function uE(t,e,n,i){const s=i.includes(".")?sE(n,i):()=>n[i];if(lt(t)){const r=e[t];fe(r)&&Hi(s,r)}else if(fe(t))Hi(s,t.bind(n));else if(Ke(t))if(re(t))t.forEach(r=>uE(r,e,n,i));else{const r=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(r)&&Hi(s,r,t)}}function Wf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ql(l,c,o,!0)),Ql(l,e,o)),Ke(e)&&r.set(e,l),l}function Ql(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ql(t,r,n,!0),s&&s.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=OR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const OR={data:hg,props:dg,emits:dg,methods:yo,computed:yo,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:yo,directives:yo,watch:LR,provide:hg,inject:MR};function hg(t,e){return e?t?function(){return pt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function MR(t,e){return yo(id(t),id(e))}function id(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function yo(t,e){return t?pt(Object.create(null),t,e):e}function dg(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:pt(Object.create(null),cg(t),cg(e??{})):e}function LR(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const i in e)n[i]=Ht(t[i],e[i]);return n}function hE(){return{app:null,config:{isNativeTag:hA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VR=0;function $R(t,e){return function(i,s=null){fe(i)||(i=pt({},i)),s!=null&&!Ke(s)&&(s=null);const r=hE(),o=new Set;let a=!1;const l=r.app={_uid:VR++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:uC,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ge(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Yf(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ko=l;try{return c()}finally{Ko=null}}};return l}}let Ko=null;function xl(t,e){if(ot){let n=ot.provides;const i=ot.parent&&ot.parent.provides;i===n&&(n=ot.provides=Object.create(i)),n[t]=e}}function tn(t,e,n=!1){const i=ot||Tt;if(i||Ko){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ko._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(i&&i.proxy):e}}function FR(){return!!(ot||Tt||Ko)}function UR(t,e,n,i=!1){const s={},r={};ql(r,iu,1),t.propsDefaults=Object.create(null),dE(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:jv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function BR(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Te(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Yc(t.emitsOptions,d))continue;const f=e[d];if(l)if(we(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Zn(d);s[g]=sd(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{dE(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!we(e,h)&&((u=Fr(h))===h||!we(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=sd(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!we(e,h))&&(delete r[h],c=!0)}c&&vi(t,"set","$attrs")}function dE(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pl(l))continue;const c=e[l];let u;s&&we(s,u=Zn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Yc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Te(n),c=a||qe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=sd(s,l,h,c[h],t,!we(c,h))}}return o}function sd(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Er(s),i=c[n]=l.call(null,e),bs())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fr(n))&&(i=!0))}return i}function fE(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=fE(h,e,!0);pt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ke(t)&&i.set(t,ar),ar;if(re(r))for(let u=0;u<r.length;u++){const h=Zn(r[u]);fg(h)&&(o[h]=qe)}else if(r)for(const u in r){const h=Zn(u);if(fg(h)){const d=r[u],f=o[h]=re(d)||fe(d)?{type:d}:pt({},d);if(f){const g=gg(Boolean,f.type),y=gg(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||we(f,"default"))&&a.push(h)}}}const c=[o,a];return Ke(t)&&i.set(t,c),c}function fg(t){return t[0]!=="$"}function pg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mg(t,e){return pg(t)===pg(e)}function gg(t,e){return re(e)?e.findIndex(n=>mg(n,t)):fe(e)&&mg(e,t)?0:-1}const pE=t=>t[0]==="_"||t==="$stable",Kf=t=>re(t)?t.map(Fn):[Fn(t)],zR=(t,e,n)=>{if(e._n)return e;const i=an((...s)=>Kf(e(...s)),n);return i._c=!1,i},mE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(pE(s))continue;const r=t[s];if(fe(r))e[s]=zR(s,r,i);else if(r!=null){const o=Kf(r);e[s]=()=>o}}},gE=(t,e)=>{const n=Kf(e);t.slots.default=()=>n},HR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),ql(e,"_",n)):mE(e,t.slots={})}else t.slots={},e&&gE(t,e);ql(t.slots,iu,1)},jR=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=qe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(pt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,mE(e,s)),o=e}else e&&(gE(t,e),o={default:1});if(r)for(const a in s)!pE(a)&&!(a in o)&&delete s[a]};function rd(t,e,n,i,s=!1){if(re(t)){t.forEach((d,f)=>rd(d,e&&(re(e)?e[f]:e),n,i,s));return}if(Ao(i)&&!s)return;const r=i.shapeFlag&4?Yf(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===qe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(lt(c)?(u[c]=null,we(h,c)&&(h[c]=null)):Ye(c)&&(c.value=null)),fe(l))zi(l,a,12,[o,u]);else{const d=lt(l),f=Ye(l);if(d||f){const g=()=>{if(t.f){const y=d?we(h,l)?h[l]:u[l]:l.value;s?re(y)&&Pf(y,r):re(y)?y.includes(r)||y.push(r):d?(u[l]=[r],we(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,we(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Zt(g,n)):g()}}}const Zt=gR;function qR(t){return WR(t)}function WR(t,e){const n=Yh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Sn,insertStaticContent:g}=t,y=(p,m,E,R=null,C=null,P=null,z=!1,M=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!oo(p,m)&&(R=_(p),yt(p,C,P,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:D,ref:J,shapeFlag:K}=m;switch(D){case nu:v(p,m,E,R);break;case Qi:w(p,m,E,R);break;case ah:p==null&&b(m,E,R,z);break;case it:At(p,m,E,R,C,P,z,M,L);break;default:K&1?O(p,m,E,R,C,P,z,M,L):K&6?Rt(p,m,E,R,C,P,z,M,L):(K&64||K&128)&&D.process(p,m,E,R,C,P,z,M,L,S)}J!=null&&C&&rd(J,p&&p.ref,P,m||p,!m)},v=(p,m,E,R)=>{if(p==null)i(m.el=a(m.children),E,R);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},w=(p,m,E,R)=>{p==null?i(m.el=l(m.children||""),E,R):m.el=p.el},b=(p,m,E,R)=>{[p.el,p.anchor]=g(p.children,m,E,R,p.el,p.anchor)},T=({el:p,anchor:m},E,R)=>{let C;for(;p&&p!==m;)C=d(p),i(p,E,R),p=C;i(m,E,R)},A=({el:p,anchor:m})=>{let E;for(;p&&p!==m;)E=d(p),s(p),p=E;s(m)},O=(p,m,E,R,C,P,z,M,L)=>{z=z||m.type==="svg",p==null?j(m,E,R,C,P,z,M,L):ae(p,m,C,P,z,M,L)},j=(p,m,E,R,C,P,z,M)=>{let L,D;const{type:J,props:K,shapeFlag:Z,transition:le,dirs:pe}=p;if(L=p.el=o(p.type,P,K&&K.is,K),Z&8?u(L,p.children):Z&16&&Y(p.children,L,null,R,C,P&&J!=="foreignObject",z,M),pe&&ls(p,null,R,"created"),ie(L,p,p.scopeId,z,R),K){for(const Ve in K)Ve!=="value"&&!Pl(Ve)&&r(L,Ve,null,K[Ve],P,p.children,R,C,Je);"value"in K&&r(L,"value",null,K.value),(D=K.onVnodeBeforeMount)&&Vn(D,R,p)}pe&&ls(p,null,R,"beforeMount");const Fe=(!C||C&&!C.pendingBranch)&&le&&!le.persisted;Fe&&le.beforeEnter(L),i(L,m,E),((D=K&&K.onVnodeMounted)||Fe||pe)&&Zt(()=>{D&&Vn(D,R,p),Fe&&le.enter(L),pe&&ls(p,null,R,"mounted")},C)},ie=(p,m,E,R,C)=>{if(E&&f(p,E),R)for(let P=0;P<R.length;P++)f(p,R[P]);if(C){let P=C.subTree;if(m===P){const z=C.vnode;ie(p,z,z.scopeId,z.slotScopeIds,C.parent)}}},Y=(p,m,E,R,C,P,z,M,L=0)=>{for(let D=L;D<p.length;D++){const J=p[D]=M?Di(p[D]):Fn(p[D]);y(null,J,m,E,R,C,P,z,M)}},ae=(p,m,E,R,C,P,z)=>{const M=m.el=p.el;let{patchFlag:L,dynamicChildren:D,dirs:J}=m;L|=p.patchFlag&16;const K=p.props||qe,Z=m.props||qe;let le;E&&cs(E,!1),(le=Z.onVnodeBeforeUpdate)&&Vn(le,E,m,p),J&&ls(m,p,E,"beforeUpdate"),E&&cs(E,!0);const pe=C&&m.type!=="foreignObject";if(D?Ae(p.dynamicChildren,D,M,E,R,pe,P):z||Ie(p,m,M,null,E,R,pe,P,!1),L>0){if(L&16)ct(M,m,K,Z,E,R,C);else if(L&2&&K.class!==Z.class&&r(M,"class",null,Z.class,C),L&4&&r(M,"style",K.style,Z.style,C),L&8){const Fe=m.dynamicProps;for(let Ve=0;Ve<Fe.length;Ve++){const et=Fe[Ve],bn=K[et],Ws=Z[et];(Ws!==bn||et==="value")&&r(M,et,bn,Ws,C,p.children,E,R,Je)}}L&1&&p.children!==m.children&&u(M,m.children)}else!z&&D==null&&ct(M,m,K,Z,E,R,C);((le=Z.onVnodeUpdated)||J)&&Zt(()=>{le&&Vn(le,E,m,p),J&&ls(m,p,E,"updated")},R)},Ae=(p,m,E,R,C,P,z)=>{for(let M=0;M<m.length;M++){const L=p[M],D=m[M],J=L.el&&(L.type===it||!oo(L,D)||L.shapeFlag&70)?h(L.el):E;y(L,D,J,null,R,C,P,z,!0)}},ct=(p,m,E,R,C,P,z)=>{if(E!==R){if(E!==qe)for(const M in E)!Pl(M)&&!(M in R)&&r(p,M,E[M],null,z,m.children,C,P,Je);for(const M in R){if(Pl(M))continue;const L=R[M],D=E[M];L!==D&&M!=="value"&&r(p,M,D,L,z,m.children,C,P,Je)}"value"in R&&r(p,"value",E.value,R.value)}},At=(p,m,E,R,C,P,z,M,L)=>{const D=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:le}=m;le&&(M=M?M.concat(le):le),p==null?(i(D,E,R),i(J,E,R),Y(m.children,E,J,C,P,z,M,L)):K>0&&K&64&&Z&&p.dynamicChildren?(Ae(p.dynamicChildren,Z,E,C,P,z,M),(m.key!=null||C&&m===C.subTree)&&_E(p,m,!0)):Ie(p,m,E,J,C,P,z,M,L)},Rt=(p,m,E,R,C,P,z,M,L)=>{m.slotScopeIds=M,p==null?m.shapeFlag&512?C.ctx.activate(m,E,R,z,L):li(m,E,R,C,P,z,L):Jt(p,m,L)},li=(p,m,E,R,C,P,z)=>{const M=p.component=tC(p,R,C);if(rE(p)&&(M.ctx.renderer=S),nC(M),M.asyncDep){if(C&&C.registerDep(M,Ee),!p.el){const L=M.subTree=Ge(Qi);w(null,L,m,E)}return}Ee(M,p,m,E,C,P,z)},Jt=(p,m,E)=>{const R=m.component=p.component;if(fR(p,m,E))if(R.asyncDep&&!R.asyncResolved){De(R,m,E);return}else R.next=m,aR(R.update),R.update();else m.el=p.el,R.vnode=m},Ee=(p,m,E,R,C,P,z)=>{const M=()=>{if(p.isMounted){let{next:J,bu:K,u:Z,parent:le,vnode:pe}=p,Fe=J,Ve;cs(p,!1),J?(J.el=pe.el,De(p,J,z)):J=pe,K&&sh(K),(Ve=J.props&&J.props.onVnodeBeforeUpdate)&&Vn(Ve,le,J,pe),cs(p,!0);const et=rh(p),bn=p.subTree;p.subTree=et,y(bn,et,h(bn.el),_(bn),p,C,P),J.el=et.el,Fe===null&&pR(p,et.el),Z&&Zt(Z,C),(Ve=J.props&&J.props.onVnodeUpdated)&&Zt(()=>Vn(Ve,le,J,pe),C)}else{let J;const{el:K,props:Z}=m,{bm:le,m:pe,parent:Fe}=p,Ve=Ao(m);if(cs(p,!1),le&&sh(le),!Ve&&(J=Z&&Z.onVnodeBeforeMount)&&Vn(J,Fe,m),cs(p,!0),K&&x){const et=()=>{p.subTree=rh(p),x(K,p.subTree,p,C,null)};Ve?m.type.__asyncLoader().then(()=>!p.isUnmounted&&et()):et()}else{const et=p.subTree=rh(p);y(null,et,E,R,p,C,P),m.el=et.el}if(pe&&Zt(pe,C),!Ve&&(J=Z&&Z.onVnodeMounted)){const et=m;Zt(()=>Vn(J,Fe,et),C)}(m.shapeFlag&256||Fe&&Ao(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&p.a&&Zt(p.a,C),p.isMounted=!0,m=E=R=null}},L=p.effect=new Lf(M,()=>jf(D),p.scope),D=p.update=()=>L.run();D.id=p.uid,cs(p,!0),D()},De=(p,m,E)=>{m.component=p;const R=p.vnode.props;p.vnode=m,p.next=null,BR(p,m.props,R,E),jR(p,m.children,E),Ur(),og(),Br()},Ie=(p,m,E,R,C,P,z,M,L=!1)=>{const D=p&&p.children,J=p?p.shapeFlag:0,K=m.children,{patchFlag:Z,shapeFlag:le}=m;if(Z>0){if(Z&128){wn(D,K,E,R,C,P,z,M,L);return}else if(Z&256){En(D,K,E,R,C,P,z,M,L);return}}le&8?(J&16&&Je(D,C,P),K!==D&&u(E,K)):J&16?le&16?wn(D,K,E,R,C,P,z,M,L):Je(D,C,P,!0):(J&8&&u(E,""),le&16&&Y(K,E,R,C,P,z,M,L))},En=(p,m,E,R,C,P,z,M,L)=>{p=p||ar,m=m||ar;const D=p.length,J=m.length,K=Math.min(D,J);let Z;for(Z=0;Z<K;Z++){const le=m[Z]=L?Di(m[Z]):Fn(m[Z]);y(p[Z],le,E,null,C,P,z,M,L)}D>J?Je(p,C,P,!0,!1,K):Y(m,E,R,C,P,z,M,L,K)},wn=(p,m,E,R,C,P,z,M,L)=>{let D=0;const J=m.length;let K=p.length-1,Z=J-1;for(;D<=K&&D<=Z;){const le=p[D],pe=m[D]=L?Di(m[D]):Fn(m[D]);if(oo(le,pe))y(le,pe,E,null,C,P,z,M,L);else break;D++}for(;D<=K&&D<=Z;){const le=p[K],pe=m[Z]=L?Di(m[Z]):Fn(m[Z]);if(oo(le,pe))y(le,pe,E,null,C,P,z,M,L);else break;K--,Z--}if(D>K){if(D<=Z){const le=Z+1,pe=le<J?m[le].el:R;for(;D<=Z;)y(null,m[D]=L?Di(m[D]):Fn(m[D]),E,pe,C,P,z,M,L),D++}}else if(D>Z)for(;D<=K;)yt(p[D],C,P,!0),D++;else{const le=D,pe=D,Fe=new Map;for(D=pe;D<=Z;D++){const sn=m[D]=L?Di(m[D]):Fn(m[D]);sn.key!=null&&Fe.set(sn.key,D)}let Ve,et=0;const bn=Z-pe+1;let Ws=!1,Qm=0;const ro=new Array(bn);for(D=0;D<bn;D++)ro[D]=0;for(D=le;D<=K;D++){const sn=p[D];if(et>=bn){yt(sn,C,P,!0);continue}let Ln;if(sn.key!=null)Ln=Fe.get(sn.key);else for(Ve=pe;Ve<=Z;Ve++)if(ro[Ve-pe]===0&&oo(sn,m[Ve])){Ln=Ve;break}Ln===void 0?yt(sn,C,P,!0):(ro[Ln-pe]=D+1,Ln>=Qm?Qm=Ln:Ws=!0,y(sn,m[Ln],E,null,C,P,z,M,L),et++)}const Ym=Ws?KR(ro):ar;for(Ve=Ym.length-1,D=bn-1;D>=0;D--){const sn=pe+D,Ln=m[sn],Xm=sn+1<J?m[sn+1].el:R;ro[D]===0?y(null,Ln,E,Xm,C,P,z,M,L):Ws&&(Ve<0||D!==Ym[Ve]?mn(Ln,E,Xm,2):Ve--)}}},mn=(p,m,E,R,C=null)=>{const{el:P,type:z,transition:M,children:L,shapeFlag:D}=p;if(D&6){mn(p.component.subTree,m,E,R);return}if(D&128){p.suspense.move(m,E,R);return}if(D&64){z.move(p,m,E,S);return}if(z===it){i(P,m,E);for(let K=0;K<L.length;K++)mn(L[K],m,E,R);i(p.anchor,m,E);return}if(z===ah){T(p,m,E);return}if(R!==2&&D&1&&M)if(R===0)M.beforeEnter(P),i(P,m,E),Zt(()=>M.enter(P),C);else{const{leave:K,delayLeave:Z,afterLeave:le}=M,pe=()=>i(P,m,E),Fe=()=>{K(P,()=>{pe(),le&&le()})};Z?Z(P,pe,Fe):Fe()}else i(P,m,E)},yt=(p,m,E,R=!1,C=!1)=>{const{type:P,props:z,ref:M,children:L,dynamicChildren:D,shapeFlag:J,patchFlag:K,dirs:Z}=p;if(M!=null&&rd(M,null,E,p,!0),J&256){m.ctx.deactivate(p);return}const le=J&1&&Z,pe=!Ao(p);let Fe;if(pe&&(Fe=z&&z.onVnodeBeforeUnmount)&&Vn(Fe,m,p),J&6)as(p.component,E,R);else{if(J&128){p.suspense.unmount(E,R);return}le&&ls(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,E,C,S,R):D&&(P!==it||K>0&&K&64)?Je(D,m,E,!1,!0):(P===it&&K&384||!C&&J&16)&&Je(L,m,E),R&&ci(p)}(pe&&(Fe=z&&z.onVnodeUnmounted)||le)&&Zt(()=>{Fe&&Vn(Fe,m,p),le&&ls(p,null,m,"unmounted")},E)},ci=p=>{const{type:m,el:E,anchor:R,transition:C}=p;if(m===it){Ci(E,R);return}if(m===ah){A(p);return}const P=()=>{s(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:z,delayLeave:M}=C,L=()=>z(E,P);M?M(p.el,P,L):L()}else P()},Ci=(p,m)=>{let E;for(;p!==m;)E=d(p),s(p),p=E;s(m)},as=(p,m,E)=>{const{bum:R,scope:C,update:P,subTree:z,um:M}=p;R&&sh(R),C.stop(),P&&(P.active=!1,yt(z,p,m,E)),M&&Zt(M,m),Zt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Je=(p,m,E,R=!1,C=!1,P=0)=>{for(let z=P;z<p.length;z++)yt(p[z],m,E,R,C)},_=p=>p.shapeFlag&6?_(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),I=(p,m,E)=>{p==null?m._vnode&&yt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,E),og(),eE(),m._vnode=p},S={p:y,um:yt,m:mn,r:ci,mt:li,mc:Y,pc:Ie,pbc:Ae,n:_,o:t};let F,x;return e&&([F,x]=e(S)),{render:I,hydrate:F,createApp:$R(I,F)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _E(t,e,n=!1){const i=t.children,s=e.children;if(re(i)&&re(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Di(s[r]),a.el=o.el),n||_E(o,a)),a.type===nu&&(a.el=o.el)}}function KR(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const GR=t=>t.__isTeleport,it=Symbol.for("v-fgt"),nu=Symbol.for("v-txt"),Qi=Symbol.for("v-cmt"),ah=Symbol.for("v-stc"),Co=[];let An=null;function te(t=!1){Co.push(An=t?null:[])}function QR(){Co.pop(),An=Co[Co.length-1]||null}let Go=1;function _g(t){Go+=t}function yE(t){return t.dynamicChildren=Go>0?An||ar:null,QR(),Go>0&&An&&An.push(t),t}function he(t,e,n,i,s,r){return yE(U(t,e,n,i,s,r,!0))}function ei(t,e,n,i,s){return yE(Ge(t,e,n,i,s,!0))}function Yl(t){return t?t.__v_isVNode===!0:!1}function oo(t,e){return t.type===e.type&&t.key===e.key}const iu="__vInternal",vE=({key:t})=>t??null,Dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||Ye(t)||fe(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,i=0,s=null,r=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vE(e),ref:e&&Dl(e),scopeId:Xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Gf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=lt(n)?8:16),Go>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const Ge=YR;function YR(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===kR)&&(t=Qi),Yl(t)){const a=vr(t,e,!0);return n&&Gf(a,n),Go>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(t)]=a:An.push(a)),a.patchFlag|=-2,a}if(aC(t)&&(t=t.__vccOpts),e){e=XR(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=di(a)),Ke(l)&&(Wv(l)&&!re(l)&&(l=pt({},l)),e.style=Ho(l))}const o=lt(t)?1:mR(t)?128:GR(t)?64:Ke(t)?4:fe(t)?2:0;return U(t,e,n,i,s,o,r,!0)}function XR(t){return t?Wv(t)||iu in t?pt({},t):t:null}function vr(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?JR(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vE(a),ref:e&&e.ref?n&&s?re(s)?s.concat(Dl(e)):[s,Dl(e)]:Dl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vr(t.ssContent),ssFallback:t.ssFallback&&vr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function en(t=" ",e=0){return Ge(nu,null,t,e)}function vt(t="",e=!1){return e?(te(),ei(Qi,null,t)):Ge(Qi,null,t)}function Fn(t){return t==null||typeof t=="boolean"?Ge(Qi):re(t)?Ge(it,null,t.slice()):typeof t=="object"?Di(t):Ge(nu,null,String(t))}function Di(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vr(t)}function Gf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Gf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(iu in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),i&64?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function JR(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=di([e.class,i.class]));else if(s==="style")e.style=Ho([e.style,i.style]);else if(Hc(s)){const r=e[s],o=i[s];o&&r!==o&&!(re(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Vn(t,e,n,i=null){kn(t,e,7,[n,i])}const ZR=hE();let eC=0;function tC(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||ZR,r={uid:eC++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fE(i,s),emitsOptions:nE(i,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=uR.bind(null,r),t.ce&&t.ce(r),r}let ot=null;const EE=()=>ot||Tt;let Qf,Ks,yg="__VUE_INSTANCE_SETTERS__";(Ks=Yh()[yg])||(Ks=Yh()[yg]=[]),Ks.push(t=>ot=t),Qf=t=>{Ks.length>1?Ks.forEach(e=>e(t)):Ks[0](t)};const Er=t=>{Qf(t),t.scope.on()},bs=()=>{ot&&ot.scope.off(),Qf(null)};function wE(t){return t.vnode.shapeFlag&4}let Qo=!1;function nC(t,e=!1){Qo=e;const{props:n,children:i}=t.vnode,s=wE(t);UR(t,n,s,e),HR(t,i);const r=s?iC(t,e):void 0;return Qo=!1,r}function iC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gc(new Proxy(t.ctx,xR));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?rC(t):null;Er(t),Ur();const r=zi(i,t,0,[t.props,s]);if(Br(),bs(),Cv(r)){if(r.then(bs,bs),e)return r.then(o=>{vg(t,o,e)}).catch(o=>{Qc(o,t,0)});t.asyncDep=r}else vg(t,r,e)}else bE(t,e)}function vg(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Xv(e)),bE(t,n)}let Eg;function bE(t,e,n){const i=t.type;if(!t.render){if(!e&&Eg&&!i.render){const s=i.template||Wf(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pt(pt({isCustomElement:r,delimiters:a},o),l);i.render=Eg(s,c)}}t.render=i.render||Sn}Er(t),Ur(),DR(t),Br(),bs()}function sC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return nn(t,"get","$attrs"),e[n]}}))}function rC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sC(t)},slots:t.slots,emit:t.emit,expose:e}}function Yf(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xv(Gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ro)return Ro[n](t)},has(e,n){return n in e||n in Ro}}))}function oC(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function aC(t){return fe(t)&&"__vccOpts"in t}const Re=(t,e)=>sR(t,e,Qo);function TE(t,e,n){const i=arguments.length;return i===2?Ke(e)&&!re(e)?Yl(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Yl(n)&&(n=[n]),Ge(t,e,n))}const lC=Symbol.for("v-scx"),cC=()=>tn(lC),uC="3.3.4",hC="http://www.w3.org/2000/svg",ps=typeof document<"u"?document:null,wg=ps&&ps.createElement("template"),dC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ps.createElementNS(hC,t):ps.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ps.createTextNode(t),createComment:t=>ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{wg.innerHTML=i?`<svg>${t}</svg>`:t;const a=wg.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fC(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function pC(t,e,n){const i=t.style,s=lt(n);if(n&&!s){if(e&&!lt(e))for(const r in e)n[r]==null&&od(i,r,"");for(const r in n)od(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const bg=/\s*!important$/;function od(t,e,n){if(re(n))n.forEach(i=>od(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=mC(t,e);bg.test(n)?t.setProperty(Fr(i),n.replace(bg,""),"important"):t[i]=n}}const Tg=["Webkit","Moz","ms"],lh={};function mC(t,e){const n=lh[e];if(n)return n;let i=Zn(e);if(i!=="filter"&&i in t)return lh[e]=i;i=Wc(i);for(let s=0;s<Tg.length;s++){const r=Tg[s]+i;if(r in t)return lh[e]=r}return e}const Ig="http://www.w3.org/1999/xlink";function gC(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ig,e.slice(6,e.length)):t.setAttributeNS(Ig,e,n);else{const r=TA(e);n==null||r&&!Pv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _C(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yC(t,e,n,i){t.addEventListener(e,n,i)}function vC(t,e,n,i){t.removeEventListener(e,n,i)}function EC(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=wC(e);if(i){const c=r[e]=IC(i,s);yC(t,a,c,l)}else o&&(vC(t,a,o,l),r[e]=void 0)}}const Ag=/(?:Once|Passive|Capture)$/;function wC(t){let e;if(Ag.test(t)){e={};let i;for(;i=t.match(Ag);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ch=0;const bC=Promise.resolve(),TC=()=>ch||(bC.then(()=>ch=0),ch=Date.now());function IC(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;kn(AC(i,n.value),e,5,[i])};return n.value=t,n.attached=TC(),n}function AC(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rg=/^on[a-z]/,RC=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?fC(t,i,s):e==="style"?pC(t,n,i):Hc(e)?kf(e)||EC(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CC(t,e,i,s))?_C(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),gC(t,e,i,s))};function CC(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Rg.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rg.test(e)&&lt(n)?!1:e in t}const SC=["ctrl","shift","alt","meta"],kC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>SC.some(n=>t[`${n}Key`]&&!e.includes(n))},Gs=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=kC[e[s]];if(r&&r(n,e))return}return t(n,...i)},PC=pt({patchProp:RC},dC);let Cg;function xC(){return Cg||(Cg=qR(PC))}const DC=(...t)=>{const e=xC().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=NC(i);if(!s)return;const r=e._component;!fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function NC(t){return lt(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw Hr(e)},Hr=function(t){return new Error("Firebase Database ("+IE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OC=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(AE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new MC;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RE=function(t){const e=AE(t);return su.encodeByteArray(e,!0)},Xl=function(t){return RE(t).replace(/\./g,"")},Jl=function(t){try{return su.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return CE(void 0,t)}function CE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!VC(n)||(t[n]=CE(t[n],e[n]));return t}function VC(t){return t!=="__proto__"}/**
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
 */function $C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FC=()=>$C().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jl(t[1]);return e&&JSON.parse(e)},Xf=()=>{try{return FC()||UC()||BC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SE=t=>{var e,n;return(n=(e=Xf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zC=t=>{const e=SE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},kE=()=>{var t;return(t=Xf())===null||t===void 0?void 0:t.config},PE=t=>{var e;return(e=Xf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function HC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xl(JSON.stringify(n)),Xl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function jC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qC(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DE(){return IE.NODE_ADMIN===!0}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function WC(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="FirebaseError";class oi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=KC,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?GC(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new oi(s,a,i)}}function GC(t,e){return t.replace(QC,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const QC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return JSON.parse(t)}function bt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Xo(Jl(r[0])||""),n=Xo(Jl(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},YC=function(t){const e=OE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XC=function(t){const e=OE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ec(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Sg(r)&&Sg(o)){if(!ec(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ZC(t,e){const n=new eS(t,e);return n.subscribe.bind(n)}class eS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");tS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=uh),s.error===void 0&&(s.error=uh),s.complete===void 0&&(s.complete=uh);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uh(){}function nS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,V(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ru=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class sS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Yo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oS(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rS(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rS(t){return t===hs?void 0:t}function oS(t){return t.instantiationMode==="EAGER"}/**
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
 */class aS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const lS={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},cS=be.INFO,uS={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},hS=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=uS[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=hS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const dS=(t,e)=>e.some(n=>t instanceof n);let kg,Pg;function fS(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pS(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ME=new WeakMap,ld=new WeakMap,LE=new WeakMap,hh=new WeakMap,Zf=new WeakMap;function mS(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ji(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ME.set(n,t)}).catch(()=>{}),Zf.set(e,t),e}function gS(t){if(ld.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ji(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _S(t){cd=t(cd)}function yS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(dh(this),e,...n);return LE.set(i,e.sort?e.sort():[e]),ji(i)}:pS().includes(t)?function(...e){return t.apply(dh(this),e),ji(ME.get(this))}:function(...e){return ji(t.apply(dh(this),e))}}function vS(t){return typeof t=="function"?yS(t):(t instanceof IDBTransaction&&gS(t),dS(t,fS())?new Proxy(t,cd):t)}function ji(t){if(t instanceof IDBRequest)return mS(t);if(hh.has(t))return hh.get(t);const e=vS(t);return e!==t&&(hh.set(t,e),Zf.set(e,t)),e}const dh=t=>Zf.get(t);function ES(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ji(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ji(o.result),l.oldVersion,l.newVersion,ji(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wS=["get","getKey","getAll","getAllKeys","count"],bS=["put","add","delete","clear"],fh=new Map;function xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=bS.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wS.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return fh.set(e,r),r}_S(t=>({...t,get:(e,n,i)=>xg(e,n)||t.get(e,n,i),has:(e,n)=>!!xg(e,n)||t.has(e,n)}));/**
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
 */class TS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IS(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function IS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",Dg="0.9.15";/**
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
 */const Rs=new Aa("@firebase/app"),AS="@firebase/app-compat",RS="@firebase/analytics-compat",CS="@firebase/analytics",SS="@firebase/app-check-compat",kS="@firebase/app-check",PS="@firebase/auth",xS="@firebase/auth-compat",DS="@firebase/database",NS="@firebase/database-compat",OS="@firebase/functions",MS="@firebase/functions-compat",LS="@firebase/installations",VS="@firebase/installations-compat",$S="@firebase/messaging",FS="@firebase/messaging-compat",US="@firebase/performance",BS="@firebase/performance-compat",zS="@firebase/remote-config",HS="@firebase/remote-config-compat",jS="@firebase/storage",qS="@firebase/storage-compat",WS="@firebase/firestore",KS="@firebase/firestore-compat",GS="firebase",QS="10.1.0";/**
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
 */const hd="[DEFAULT]",YS={[ud]:"fire-core",[AS]:"fire-core-compat",[CS]:"fire-analytics",[RS]:"fire-analytics-compat",[kS]:"fire-app-check",[SS]:"fire-app-check-compat",[PS]:"fire-auth",[xS]:"fire-auth-compat",[DS]:"fire-rtdb",[NS]:"fire-rtdb-compat",[OS]:"fire-fn",[MS]:"fire-fn-compat",[LS]:"fire-iid",[VS]:"fire-iid-compat",[$S]:"fire-fcm",[FS]:"fire-fcm-compat",[US]:"fire-perf",[BS]:"fire-perf-compat",[zS]:"fire-rc",[HS]:"fire-rc-compat",[jS]:"fire-gcs",[qS]:"fire-gcs-compat",[WS]:"fire-fst",[KS]:"fire-fst-compat","fire-js":"fire-js",[GS]:"fire-js-all"};/**
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
 */const tc=new Map,dd=new Map;function XS(t,e){try{t.container.addComponent(e)}catch(n){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(dd.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,t);for(const n of tc.values())XS(n,t);return!0}function ep(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const JS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qi=new jr("app","Firebase",JS);/**
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
 */class ZS{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=QS;function VE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw qi.create("bad-app-name",{appName:String(s)});if(n||(n=kE()),!n)throw qi.create("no-options");const r=tc.get(s);if(r){if(ec(n,r.options)&&ec(i,r.config))return r;throw qi.create("duplicate-app",{appName:s})}const o=new aS(s);for(const l of dd.values())o.addComponent(l);const a=new ZS(n,i,o);return tc.set(s,a),a}function tp(t=hd){const e=tc.get(t);if(!e&&t===hd&&kE())return VE();if(!e)throw qi.create("no-app",{appName:t});return e}function un(t,e,n){var i;let s=(i=YS[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(a.join(" "));return}ti(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ek="firebase-heartbeat-database",tk=1,Jo="firebase-heartbeat-store";let ph=null;function $E(){return ph||(ph=ES(ek,tk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jo)}}}).catch(t=>{throw qi.create("idb-open",{originalErrorMessage:t.message})})),ph}async function nk(t){try{return await(await $E()).transaction(Jo).objectStore(Jo).get(FE(t))}catch(e){if(e instanceof oi)Rs.warn(e.message);else{const n=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rs.warn(n.message)}}}async function Ng(t,e){try{const i=(await $E()).transaction(Jo,"readwrite");await i.objectStore(Jo).put(e,FE(t)),await i.done}catch(n){if(n instanceof oi)Rs.warn(n.message);else{const i=qi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rs.warn(i.message)}}}function FE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ik=1024,sk=30*24*60*60*1e3;class rk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ak(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Og();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=sk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Og(),{heartbeatsToSend:n,unsentEntries:i}=ok(this._heartbeatsCache.heartbeats),s=Xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Og(){return new Date().toISOString().substring(0,10)}function ok(t,e=ik){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Mg(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?WC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Xl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lk(t){ti(new xn("platform-logger",e=>new TS(e),"PRIVATE")),ti(new xn("heartbeat",e=>new rk(e),"PRIVATE")),un(ud,Dg,t),un(ud,Dg,"esm2017"),un("fire-js","")}lk("");function np(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function UE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=UE,BE=new jr("auth","Firebase",UE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Aa("@firebase/auth");function uk(t,...e){nc.logLevel<=be.WARN&&nc.warn(`Auth (${ts}): ${t}`,...e)}function Nl(t,...e){nc.logLevel<=be.ERROR&&nc.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,...e){throw ip(t,...e)}function Yn(t,...e){return ip(t,...e)}function zE(t,e,n){const i=Object.assign(Object.assign({},ck()),{[e]:n});return new jr("auth","Firebase",i).create(e,{appName:t.name})}function hk(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ni(t,"argument-error"),zE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ip(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return BE.create(t,...e)}function ce(t,e,...n){if(!t)throw ip(e,...n)}function pi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function Ei(t,e){t||pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dk(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dk()||jC()||"connection"in navigator)?navigator.onLine:!0}function pk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ei(n>e,"Short delay should be less than long delay!"),this.isMobile=Jf()||xE()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){Ei(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new Ra(3e4,6e4);function jE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ca(t,e,n,i,s={}){return qE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=qr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HE.fetch()(WE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},mk),e);try{const s=new yk(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dl(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zE(t,u,c);ni(t,u)}}catch(s){if(s instanceof oi)throw s;ni(t,"network-request-failed",{message:String(s)})}}async function _k(t,e,n,i,s={}){const r=await Ca(t,e,n,i,s);return"mfaPendingCredential"in r&&ni(t,"multi-factor-auth-required",{_serverResponse:r}),r}function WE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?sp(t.config,s):`${t.config.apiScheme}://${s}`}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Yn(this.auth,"network-request-failed")),gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Yn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e){return Ca(t,"POST","/v1/accounts:delete",e)}async function Ek(t,e){return Ca(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wk(t,e=!1){const n=mt(t),i=await n.getIdToken(e),s=rp(i);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:So(mh(s.auth_time)),issuedAtTime:So(mh(s.iat)),expirationTime:So(mh(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function rp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jl(n);return s?JSON.parse(s):(Nl("Failed to decode base64 JWT payload"),null)}catch(s){return Nl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bk(t){const e=rp(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof oi&&Tk(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=So(this.lastLoginAt),this.creationTime=So(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ic(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Zo(t,Ek(n,{idToken:i}));ce(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ck(r.providerUserInfo):[],a=Rk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new KE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ak(t){const e=mt(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ck(t){return t.map(e=>{var{providerId:n}=e,i=np(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e){const n=await qE(t,{},async()=>{const i=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=WE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ce(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Sk(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ea;return i&&(ce(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ts{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new KE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wk(this,e)}reload(){return Ak(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zo(this,vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:A,isAnonymous:O,providerData:j,stsTokenManager:ie}=n;ce(T&&ie,e,"internal-error");const Y=ea.fromJSON(this.name,ie);ce(typeof T=="string",e,"internal-error"),ki(h,e.name),ki(d,e.name),ce(typeof A=="boolean",e,"internal-error"),ce(typeof O=="boolean",e,"internal-error"),ki(f,e.name),ki(g,e.name),ki(y,e.name),ki(v,e.name),ki(w,e.name),ki(b,e.name);const ae=new Ts({uid:T,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:O,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:Y,createdAt:w,lastLoginAt:b});return j&&Array.isArray(j)&&(ae.providerData=j.map(Ae=>Object.assign({},Ae))),v&&(ae._redirectEventId=v),ae}static async _fromIdTokenResponse(e,n,i=!1){const s=new ea;s.updateFromServerResponse(n);const r=new Ts({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ic(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;function mi(t){Ei(t instanceof Function,"Expected a class definition");let e=Vg.get(t);return e?(Ei(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vg.set(t,e),e)}/**
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
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const $g=GE;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ol(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ol("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ur(mi($g),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||mi($g);const o=Ol(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ts._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ur(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ur(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(ew(e))return"Webos";if(op(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(JE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function QE(t=Ut()){return/firefox\//i.test(t)}function op(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=Ut()){return/crios\//i.test(t)}function XE(t=Ut()){return/iemobile/i.test(t)}function JE(t=Ut()){return/android/i.test(t)}function ZE(t=Ut()){return/blackberry/i.test(t)}function ew(t=Ut()){return/webos/i.test(t)}function ou(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kk(t=Ut()){var e;return ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pk(){return qC()&&document.documentMode===10}function tw(t=Ut()){return ou(t)||JE(t)||ew(t)||ZE(t)||/windows phone/i.test(t)||XE(t)}function xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=Fg(Ut());break;case"Worker":n=`${Fg(Ut())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${i}`}async function iw(t,e){return Ca(t,"GET","/v2/recaptchaConfig",jE(t,e))}function Ug(t){return t!==void 0&&t.enterprise!==void 0}class sw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rw(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Yn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Dk().appendChild(i)})}function Nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ok="https://www.google.com/recaptcha/enterprise.js?render=",Mk="recaptcha-enterprise",Lk="NO_RECAPTCHA";class Vk{constructor(e){this.type=Mk,this.auth=Wr(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{iw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sw(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Ug(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rw(Ok+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class $k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bg(this),this.idTokenSubscription=new Bg(this),this.beforeStateQueue=new $k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mi(e))})}async initializeRecaptchaConfig(){const e=await iw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new sw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Vk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mi(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[mi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wr(t){return mt(t)}class Bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZC(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){const n=ep(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ec(r,e??{}))return s;ni(s,"already-initialized")}return n.initialize({options:e})}function Bk(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(mi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zk(t,e,n){const i=Wr(t);ce(i._canInitEmulator,i,"emulator-config-failed"),ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=ow(e),{host:o,port:a}=Hk(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||jk()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hk(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zg(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pi("not implemented")}_getIdTokenResponse(e){return pi("not implemented")}_linkToIdToken(e,n){return pi("not implemented")}_getReauthenticationResolver(e){return pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e){return _k(t,"POST","/v1/accounts:signInWithIdp",jE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="http://localhost";class Cs extends aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=np(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Cs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,hr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sa extends ap{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Sa{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oi.credential(e.oauthAccessToken)}catch{return null}}}Oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Sa{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Li.credential(e.oauthAccessToken)}catch{return null}}}Li.GITHUB_SIGN_IN_METHOD="github.com";Li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Sa{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Vi.credential(n,i)}catch{return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com";Vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ts._fromIdTokenResponse(e,i,s),o=Hg(i);return new br({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Hg(i);return new br({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends oi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new sc(e,n,i,s)}}function lw(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,r,e,i):r})}async function Wk(t,e,n=!1){const i=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",i)}/**
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
 */async function Kk(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Zo(t,lw(i,s,e,t),n);ce(r.idToken,i,"internal-error");const o=rp(r.idToken);ce(o,i,"internal-error");const{sub:a}=o;return ce(t.uid===a,i,"user-mismatch"),br._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e,n=!1){const i="signIn",s=await lw(t,i,e),r=await br._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function cw(t,e,n,i){return mt(t).onIdTokenChanged(e,n,i)}function Qk(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const rc="__sak";/**
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
 */class uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){const t=Ut();return op(t)||ou(t)}const Xk=1e3,Jk=10;class hw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yk()&&xk(),this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Pk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jk):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hw.type="LOCAL";const Zk=hw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dw.type="SESSION";const fw=dw;/**
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
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new au(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await eP(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=lp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function nP(t){Xn().location.href=t}/**
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
 */function pw(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rP(){return pw()?self:null}/**
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
 */const mw="firebaseLocalStorageDb",oP=1,oc="firebaseLocalStorage",gw="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lu(t,e){return t.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function aP(){const t=indexedDB.deleteDatabase(mw);return new ka(t).toPromise()}function pd(){const t=indexedDB.open(mw,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(oc,{keyPath:gw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(oc)?e(i):(i.close(),await aP(),e(await pd()))})})}async function jg(t,e,n){const i=lu(t,!0).put({[gw]:e,value:n});return new ka(i).toPromise()}async function lP(t,e){const n=lu(t,!1).get(e),i=await new ka(n).toPromise();return i===void 0?null:i.value}function qg(t,e){const n=lu(t,!0).delete(e);return new ka(n).toPromise()}const cP=800,uP=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>uP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=au._getInstance(rP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await jg(e,rc,"1"),await qg(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>jg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>lP(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=lu(s,!1).getAll();return new ka(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const hP=_w;new Ra(3e4,6e4);/**
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
 */function yw(t,e){return e?mi(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cp extends aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dP(t){return Gk(t.auth,new cp(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Kk(n,new cp(t),t.bypassAuthState)}async function pP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Wk(n,new cp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dP;case"linkViaPopup":case"linkViaRedirect":return pP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:ni(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new Ra(2e3,1e4);async function uB(t,e,n){const i=Wr(t);hk(t,e,ap);const s=yw(i,n);return new ms(i,"signInViaPopup",e,s).executeNotNull()}class ms extends vw{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mP.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="pendingRedirect",Ml=new Map;class _P extends vw{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const i=await yP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yP(t,e){const n=wP(e),i=EP(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function vP(t,e){Ml.set(t._key(),e)}function EP(t){return mi(t._redirectPersistence)}function wP(t){return Ol(gP,t.config.apiKey,t.name)}async function hB(t,e){return await Wr(t)._initializationPromise,Ew(t,e,!1)}async function Ew(t,e,n=!1){const i=Wr(t),s=yw(i,e),o=await new _P(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=10*60*1e3;class TP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ww(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wg(e))}saveEventToCache(e){this.cachedEventUids.add(Wg(e)),this.lastProcessedEventTime=Date.now()}}function Wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ww(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return Ca(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AP(t);for(const n of e)try{if(kP(n))return}catch{}ni(t,"unauthorized-domain")}function kP(t){const e=fd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!CP.test(n))return!1;if(RP.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const PP=new Ra(3e4,6e4);function Kg(){const t=Xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xP(t){return new Promise((e,n)=>{var i,s,r;function o(){Kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kg(),n(Yn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(i=Xn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Xn().gapi)===null||r===void 0)&&r.load)o();else{const a=Nk("iframefcb");return Xn()[a]=()=>{gapi.load?o():n(Yn(t,"network-request-failed"))},rw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function DP(t){return Ll=Ll||xP(t),Ll}/**
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
 */const NP=new Ra(5e3,15e3),OP="__/auth/iframe",MP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sp(e,MP):`https://${t.config.authDomain}/${OP}`,i={apiKey:e.apiKey,appName:t.name,v:ts},s=VP.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${qr(i).slice(1)}`}async function FP(t){const e=await DP(t),n=Xn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:$P(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Yn(t,"network-request-failed"),a=Xn().setTimeout(()=>{r(o)},NP.get());function l(){Xn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const UP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BP=500,zP=600,HP="_blank",jP="http://localhost";class Gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qP(t,e,n,i=BP,s=zP){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UP),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ut().toLowerCase();n&&(a=YE(c)?HP:n),QE(c)&&(e=e||jP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(kk(c)&&a!=="_self")return WP(e||"",a),new Gg(null);const h=window.open(e||"",a,u);ce(h,t,"popup-blocked");try{h.focus()}catch{}return new Gg(h)}function WP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const KP="__/auth/handler",GP="emulator/auth/handler",QP=encodeURIComponent("fac");async function Qg(t,e,n,i,s,r){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ts,eventId:s};if(e instanceof ap){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ad(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Sa){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${QP}=${encodeURIComponent(l)}`:"";return`${YP(t)}?${qr(a).slice(1)}${c}`}function YP({config:t}){return t.emulator?sp(t,GP):`https://${t.authDomain}/${KP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class XP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fw,this._completeRedirectFn=Ew,this._overrideRedirectResult=vP}async _openPopup(e,n,i,s){var r;Ei((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qg(e,n,i,fd(),s);return qP(e,o,lp())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Qg(e,n,i,fd(),s);return nP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ei(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await FP(e),i=new TP(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gh,{type:gh},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[gh];o!==void 0&&n(!!o),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tw()||op()||ou()}}const JP=XP;var Yg="@firebase/auth",Xg="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tx(t){ti(new xn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},c=new Fk(i,s,r,l);return Bk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ti(new xn("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(i=>new ZP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Yg,Xg,ex(t)),un(Yg,Xg,"esm2017")}/**
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
 */const nx=5*60,ix=PE("authIdTokenMaxAge")||nx;let Jg=null;const sx=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ix)return;const s=n==null?void 0:n.token;Jg!==s&&(Jg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bw(t=tp()){const e=ep(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uk(t,{popupRedirectResolver:JP,persistence:[hP,Zk,fw]}),i=PE("authTokenSyncURL");if(i){const r=sx(i);Qk(n,r,()=>r(n.currentUser)),cw(n,o=>r(o))}const s=SE("auth");return s&&zk(n,`http://${s}`),n}tx("Browser");var rx=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new Map,ax={activated:!1,tokenObservers:[]};function Dn(t){return ox.get(t)||Object.assign({},ax)}const Zg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Yo,await cx(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Yo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function cx(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ac=new jr("appCheck","AppCheck",ux);function Tw(t){if(!Dn(t).activated)throw ac.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="firebase-app-check-database",dx=1,md="firebase-app-check-store";let fl=null;function fx(){return fl||(fl=new Promise((t,e)=>{try{const n=indexedDB.open(hx,dx);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(ac.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(md,{keyPath:"compositeKey"})}}}catch(n){e(ac.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fl)}function px(t,e){return mx(gx(t),e)}async function mx(t,e){const i=(await fx()).transaction(md,"readwrite"),r=i.objectStore(md).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(ac.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function gx(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Aa("@firebase/app-check");function e_(t,e){return NE()?px(t,e).catch(n=>{gd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={error:"UNKNOWN_ERROR"};function yx(t){return su.encodeString(JSON.stringify(t),!1)}async function _d(t,e=!1){const n=t.app;Tw(n);const i=Dn(n);let s=i.token,r;if(s&&!vo(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(vo(l)?s=l:await e_(n,void 0))}if(!e&&s&&vo(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Dn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?gd.warn(l.message):gd.error(l),r=l}let a;return s?r?vo(s)?a={token:s.token,internalError:r}:a=n_(r):(a={token:s.token},i.token=s,await e_(n,s)):a=n_(r),o&&bx(n,a),a}async function vx(t){const e=t.app;Tw(e);const{provider:n}=Dn(e);{const{token:i}=await n.getToken();return{token:i}}}function Ex(t,e,n,i){const{app:s}=t,r=Dn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&vo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),t_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>t_(t))}function Iw(t,e){const n=Dn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function t_(t){const{app:e}=t,n=Dn(e);let i=n.tokenRefresher;i||(i=wx(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function wx(t){const{app:e}=t;return new lx(async()=>{const n=Dn(e);let i;if(n.token?i=await _d(t,!0):i=await _d(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Dn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Zg.RETRIAL_MIN_WAIT,Zg.RETRIAL_MAX_WAIT)}function bx(t,e){const n=Dn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function vo(t){return t.expireTimeMillis-Date.now()>0}function n_(t){return{token:yx(_x),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Dn(this.app);for(const n of e)Iw(this.app,n.next);return Promise.resolve()}}function Ix(t,e){return new Tx(t,e)}function Ax(t){return{getToken:e=>_d(t,e),getLimitedUseToken:()=>vx(t),addTokenListener:e=>Ex(t,"INTERNAL",e),removeTokenListener:e=>Iw(t.app,e)}}const Rx="@firebase/app-check",Cx="0.8.0",Sx="app-check",i_="app-check-internal";function kx(){ti(new xn(Sx,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ix(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(i_).initialize()})),ti(new xn(i_,t=>{const e=t.getProvider("app-check").getImmediate();return Ax(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),un(Rx,Cx)}kx();var Px="firebase",xx="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(Px,xx,"app");const Aw=Symbol("firebaseApp");function Pa(t){return EE()&&tn(Aw,null)||tp(t)}const Hn=()=>{},Dx=typeof window<"u";function up(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function Nx(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Fs(t){return!!t&&typeof t=="object"}const Ox=Object.prototype;function Mx(t){return Fs(t)&&Object.getPrototypeOf(t)===Ox}function hp(t){return Fs(t)&&t.type==="document"}function Lx(t){return Fs(t)&&t.type==="collection"}function Vx(t){return hp(t)||Lx(t)}function $x(t){return Fs(t)&&t.type==="query"}function Fx(t){return Fs(t)&&"ref"in t}function Ux(t){return Fs(t)&&typeof t.bucket=="string"}function Bx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const zx=Symbol.for("v-scx");function Hx(){return!!tn(zx,0)}const pl=new WeakMap;function jx(t,e){if(!pl.has(t)){const n=Nf(!0);pl.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),pl.delete(t)}}return pl.get(t)}const Rw=new WeakMap;function Kr(t){return Rw.get(Pa(t))}const ml=new WeakMap;function Cw(t){const e=Pa(t);if(!ml.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{ml.set(e,r),n(r.value)}];ml.set(e,s)}return ml.get(e)}function s_(t){const e=Cw(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function qx(t,e){const n=bw(e);cw(n,i=>{const s=Cw();t.value=i,Array.isArray(s)&&s[1](t)})}const r_="@firebase/database",o_="1.0.1";/**
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
 */let Sw="";function Wx(t){Sw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),bt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ri(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kx(e)}}catch{}return new Gx},gs=kw("localStorage"),yd=kw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Aa("@firebase/database"),Qx=function(){let t=1;return function(){return t++}}(),Pw=function(t){const e=iS(t),n=new JC;n.update(e);const i=n.digest();return su.encodeByteArray(i)},xa=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=xa.apply(null,i):typeof i=="object"?e+=bt(i):e+=i,e+=" "}return e};let Is=null,a_=!0;const Yx=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(dr.logLevel=be.VERBOSE,Is=dr.log.bind(dr),e&&yd.set("logging_enabled",!0)):typeof t=="function"?Is=t:(Is=null,yd.remove("logging_enabled"))},Pt=function(...t){if(a_===!0&&(a_=!1,Is===null&&yd.get("logging_enabled")===!0&&Yx(!0)),Is){const e=xa.apply(null,t);Is(e)}},Da=function(t){return function(...e){Pt(t,...e)}},vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+xa(...t);dr.error(e)},Ss=function(...t){const e=`FIREBASE FATAL ERROR: ${xa(...t)}`;throw dr.error(e),new Error(e)},hn=function(...t){const e="FIREBASE WARNING: "+xa(...t);dr.warn(e)},Xx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Tr="[MIN_NAME]",ks="[MAX_NAME]",Gr=function(t,e){if(t===e)return 0;if(t===Tr||e===ks)return-1;if(e===Tr||t===ks)return 1;{const n=l_(t),i=l_(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Zx=function(t,e){return t===e?0:t<e?-1:1},ao=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+bt(e))},dp=function(t){if(typeof t!="object"||t===null)return bt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=bt(e[i]),n+=":",n+=dp(t[e[i]]);return n+="}",n},Dw=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function yn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nw=function(t){V(!xw(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},e1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},t1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},n1=new RegExp("^-?(0*)\\d{1,10}$"),i1=-2147483648,s1=2147483647,l_=function(t){if(n1.test(t)){const e=Number(t);if(e>=i1&&e<=s1)return e}return null},Na=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},r1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class o1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hn(e)}}class Ed{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ed.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="5",Ow="v",Mw="s",Lw="r",Vw="f",$w=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fw="ls",Uw="p",wd="ac",Bw="websocket",zw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function c1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Hw(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let i;if(e===Bw)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zw)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);c1(t)&&(n.ns=t.namespace);const s=[];return yn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(){this.counters_={}}incrementCounter(e,n=1){Ri(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={},yh={};function pp(t){const e=t.toString();return _h[e]||(_h[e]=new u1),_h[e]}function h1(t,e){const n=t.toString();return yh[n]||(yh[n]=e()),yh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Na(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="start",f1="close",p1="pLPCommand",m1="pRTLPCB",jw="id",qw="pw",Ww="ser",g1="cb",_1="seg",y1="ts",v1="d",E1="dframe",Kw=1870,Gw=30,w1=Kw-Gw,b1=25e3,T1=3e4;class ir{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Da(e),this.stats_=pp(n),this.urlFn=l=>(this.appCheckToken&&(l[wd]=this.appCheckToken),Hw(n,zw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new d1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(T1)),Jx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mp((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===c_)this.id=a,this.password=l;else if(o===f1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[c_]="t",i[Ww]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[g1]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ow]=fp,this.transportSessionId&&(i[Mw]=this.transportSessionId),this.lastSessionId&&(i[Fw]=this.lastSessionId),this.applicationId&&(i[Uw]=this.applicationId),this.appCheckToken&&(i[wd]=this.appCheckToken),typeof location<"u"&&location.hostname&&$w.test(location.hostname)&&(i[Lw]=Vw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ir.forceAllow_=!0}static forceDisallow(){ir.forceDisallow_=!0}static isAvailable(){return ir.forceAllow_?!0:!ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!e1()&&!t1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=RE(n),s=Dw(i,w1);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[E1]="t",i[jw]=e,i[qw]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=bt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mp{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qx(),window[p1+this.uniqueCallbackIdentifier]=e,window[m1+this.uniqueCallbackIdentifier]=n,this.myIFrame=mp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pt("frame writing exception"),a.stack&&Pt(a.stack),Pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jw]=this.myID,e[qw]=this.myPW,e[Ww]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gw+i.length<=Kw;){const o=this.pendingSegs.shift();i=i+"&"+_1+s+"="+o.seg+"&"+y1+s+"="+o.ts+"&"+v1+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(b1)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=16384,A1=45e3;let lc=null;typeof MozWebSocket<"u"?lc=MozWebSocket:typeof WebSocket<"u"&&(lc=WebSocket);class In{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Da(this.connId),this.stats_=pp(n),this.connURL=In.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ow]=fp,typeof location<"u"&&location.hostname&&$w.test(location.hostname)&&(o[Lw]=Vw),n&&(o[Mw]=n),i&&(o[Fw]=i),s&&(o[wd]=s),r&&(o[Uw]=r),Hw(e,Bw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gs.set("previous_websocket_failure",!0);try{let i;DE(),this.mySock=new lc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&lc!==null&&!In.forceDisallow_}static previouslyFailed(){return gs.isInMemoryStorage||gs.get("previous_websocket_failure")===!0}markConnectionHealthy(){gs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Xo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Dw(n,I1);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(A1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ir,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=In&&In.isAvailable();let i=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[In];else{const s=this.transports_=[];for(const r of ta.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ta.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ta.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=6e4,C1=5e3,S1=10*1024,k1=100*1024,vh="t",u_="d",P1="s",h_="r",x1="e",d_="o",f_="a",p_="n",m_="p",D1="h";class N1{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Da("c:"+this.id+":"),this.transportManager_=new ta(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>S1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vh in e){const n=e[vh];n===f_?this.upgradeIfSecondaryHealthy_():n===h_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===d_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ao("t",e),i=ao("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:f_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:p_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ao("t",e),i=ao("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ao(vh,e);if(u_ in e){const i=e[u_];if(n===D1){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===p_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===P1?this.onConnectionShutdown_(i):n===h_?this.onReset_(i):n===x1?vd("Server Error: "+i):n===d_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fp!==i&&hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(C1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:m_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Yw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cc}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=32,__=768;class je{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $e(){return new je("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yi(t){return t.pieces_.length-t.pieceNum_}function ze(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new je(t.pieces_,e)}function Xw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function O1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new je(e,0)}function ft(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof je)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new je(n,0)}function ge(t){return t.pieceNum_>=t.pieces_.length}function _n(t,e){const n=ye(t),i=ye(e);if(n===null)return e;if(n===i)return _n(ze(t),ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function e0(t,e){if(Yi(t)!==Yi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Yi(t)>Yi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class M1{constructor(e,n){this.errorPrefix_=n,this.parts_=Jw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ru(this.parts_[i]);t0(this)}}function L1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ru(e),t0(t)}function V1(t){const e=t.parts_.pop();t.byteLength_-=ru(e),t.parts_.length>0&&(t.byteLength_-=1)}function t0(t){if(t.byteLength_>__)throw new Error(t.errorPrefix_+"has a key path longer than "+__+" bytes ("+t.byteLength_+").");if(t.parts_.length>g_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+g_+") or object contains a cycle "+ds(t))}function ds(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends Yw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new gp}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=1e3,$1=60*5*1e3,y_=30*1e3,F1=1.3,U1=3e4,B1="server_kill",v_=3;class yi extends Qw{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yi.nextPersistentConnectionId_++,this.log_=Da("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lo,this.maxReconnectDelay_=$1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!DE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(bt(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Yo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;yi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ri(e,"w")){const i=wr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=y_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YC(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+bt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vd("Unrecognized action received from server: "+bt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>U1&&(this.reconnectDelay_=lo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*F1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pt("getToken() completed but was canceled"):(Pt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new N1(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{hn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(B1)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&hn(h),l())}}}interrupt(e){Pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ad(this.interruptReasons_)&&(this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>dp(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new je(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=v_&&(this.reconnectDelay_=y_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=v_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sw.replace(/\./g,"-")]=1,Jf()?e["framework.cordova"]=1:xE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cc.getInstance().currentlyOnline();return ad(this.interruptReasons_)&&e}}yi.nextPersistentConnectionId_=0;yi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ve(Tr,e),s=new ve(Tr,n);return this.compare(i,s)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class n0 extends cu{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Gr(e.name,n.name)}isDefinedOn(e){throw Hr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(ks,gl)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,gl)}toString(){return".key"}}const fr=new n0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},on=class Eo{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Eo.RED,this.left=s??jn.EMPTY_NODE,this.right=r??jn.EMPTY_NODE}copy(e,n,i,s,r){return new Eo(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return jn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return jn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Eo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Eo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};on.RED=!0;on.BLACK=!1;class z1{copy(e,n,i,s,r){return this}insert(e,n,i){return new on(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let jn=class Vl{constructor(e,n=Vl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,on.BLACK,null,null))}remove(e){return new Vl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,on.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _l(this.root_,null,this.comparator_,!0,e)}};jn.EMPTY_NODE=new z1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e){return Gr(t.name,e.name)}function _p(t,e){return Gr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd;function j1(t){bd=t}const i0=function(t){return typeof t=="number"?"number:"+Nw(t):"string:"+t},s0=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ri(e,".sv"),"Priority must be a string or number.")}else V(t===bd||t.isEmpty(),"priority of unexpected type.");V(t===bd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_;class ut{constructor(e,n=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s0(this.priorityNode_)}static set __childrenNodeConstructor(e){E_=e}static get __childrenNodeConstructor(){return E_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:ye(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ye(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||Yi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+i0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nw(this.value_):e+=this.value_,this.lazyHash_=Pw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ut.VALUE_TYPE_ORDER.indexOf(n),r=ut.VALUE_TYPE_ORDER.indexOf(i);return V(s>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0,o0;function q1(t){r0=t}function W1(t){o0=t}class K1 extends cu{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Gr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(ks,new ut("[PRIORITY-POST]",o0))}makePost(e,n){const i=r0(e);return new ve(n,new ut("[PRIORITY-POST]",i))}toString(){return".priority"}}const Mt=new K1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=Math.log(2);class Q1{constructor(e){const n=r=>parseInt(Math.log(r)/G1,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uc=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new on(d,h.node,on.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),y=s(f+1,c);return h=t[f],d=n?n(h):h,new on(d,h.node,on.BLACK,g,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const v=h-g,w=h;h-=g;const b=s(v+1,w),T=t[v],A=n?n(T):T;f(new on(A,T.node,y,null,b))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));y?d(v,on.BLACK):(d(v,on.BLACK),d(v,on.RED))}return u},o=new Q1(t.length),a=r(o);return new jn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh;const Qs={};class gi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(Qs&&Mt,"ChildrenNode.ts has not been loaded"),Eh=Eh||new gi({".priority":Qs},{".priority":Mt}),Eh}get(e){const n=wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jn?n:null}hasIndex(e){return Ri(this.indexSet_,e.toString())}addIndex(e,n){V(e!==fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ve.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=uc(i,e.getCompare()):a=Qs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new gi(u,c)}addToIndexes(e,n){const i=Zl(this.indexes_,(s,r)=>{const o=wr(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),s===Qs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),uc(a,o.getCompare())}else return Qs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new gi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Zl(this.indexes_,s=>{if(s===Qs)return s;{const r=n.get(e.name);return r?s.remove(new ve(e.name,r)):s}});return new gi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;class ke{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&s0(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return co||(co=new ke(new jn(_p),null,gi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||co}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?co:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ve(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?co:this.priorityNode_;return new ke(s,o,r)}}updateChild(e,n){const i=ye(e);if(i===null)return n;{V(ye(e)!==".priority"||Yi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ze(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Mt,(o,a)=>{n[o]=a.val(e),i++,r&&ke.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+i0(this.getPriority().val())+":"),this.forEachChild(Mt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Pw(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ve(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oa?-1:0}withIndex(e){if(e===fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Mt),s=n.getIterator(Mt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fr?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Y1 extends ke{constructor(){super(new jn(_p),ke.EMPTY_NODE,gi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const Oa=new Y1;Object.defineProperties(ve,{MIN:{value:new ve(Tr,ke.EMPTY_NODE)},MAX:{value:new ve(ks,Oa)}});n0.__EMPTY_NODE=ke.EMPTY_NODE;ut.__childrenNodeConstructor=ke;j1(Oa);W1(Oa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=!0;function xt(t,e=null){if(t===null)return ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ut(n,xt(e))}if(!(t instanceof Array)&&X1){const n=[];let i=!1;if(yn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return ke.EMPTY_NODE;const r=uc(n,H1,o=>o.name,_p);if(i){const o=uc(n,Mt.getCompare());return new ke(r,xt(e),new gi({".priority":o},{".priority":Mt}))}else return new ke(r,xt(e),gi.Default)}else{let n=ke.EMPTY_NODE;return yn(t,(i,s)=>{if(Ri(t,i)&&i.substring(0,1)!=="."){const r=xt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(xt(e))}}q1(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends cu{constructor(e){super(),this.indexPath_=e,V(!ge(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Gr(e.name,n.name):r}makePost(e,n){const i=xt(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,i);return new ve(n,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,Oa);return new ve(ks,e)}toString(){return Jw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1 extends cu{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Gr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const i=xt(e);return new ve(n,i)}toString(){return".value"}}const eD=new Z1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){return{type:"value",snapshotNode:t}}function nD(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function iD(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function w_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tr}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Mt}copy(){const e=new yp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Mt?n="$priority":t.index_===eD?n="$value":t.index_===fr?n="$key":(V(t.index_ instanceof J1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=bt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=bt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+bt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=bt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+bt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function T_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Qw{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Da("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hc.getListenId_(e,i),a={};this.listens_[o]=a;const l=b_(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),wr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=hc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=b_(e._queryParams),i=e._path.toString(),s=new Yo;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xo(a.responseText)}catch{hn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&hn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){return{value:null,children:new Map}}function a0(t,e,n){if(ge(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ye(e);t.children.has(i)||t.children.set(i,dc());const s=t.children.get(i);e=ze(e),a0(s,e,n)}}function Td(t,e,n){t.value!==null?n(e,t.value):oD(t,(i,s)=>{const r=new je(e.toString()+"/"+i);Td(s,r,n)})}function oD(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=10*1e3,lD=30*1e3,cD=5*60*1e3;class uD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aD(e);const i=I_+(lD-I_)*Math.random();ko(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;yn(e,(s,r)=>{r>0&&Ri(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*cD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qn||(qn={}));function l0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function u0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=qn.ACK_USER_WRITE,this.source=l0()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new je(e));return new fc($e(),n,this.revert)}}else return V(ye(this.path)===e,"operationForChild called for unrelated child."),new fc(ze(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=qn.OVERWRITE}operationForChild(e){return ge(this.path)?new Ps(this.source,$e(),this.snap.getImmediateChild(e)):new Ps(this.source,ze(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=qn.MERGE}operationForChild(e){if(ge(this.path)){const n=this.children.subtree(new je(e));return n.isEmpty()?null:n.value?new Ps(this.source,$e(),n.value):new na(this.source,$e(),n)}else return V(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new na(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function hD(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sD(o.childName,o.snapshotNode))}),uo(t,s,"child_removed",e,i,n),uo(t,s,"child_added",e,i,n),uo(t,s,"child_moved",r,i,n),uo(t,s,"child_changed",e,i,n),uo(t,s,"value",e,i,n),s}function uo(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>fD(t,a,l)),o.forEach(a=>{const l=dD(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fD(t,e,n){if(e.childName==null||n.childName==null)throw Hr("Should only compare child_ events.");const i=new ve(e.childName,e.snapshotNode),s=new ve(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){return{eventCache:t,serverCache:e}}function Po(t,e,n,i){return h0(new vp(e,n,i),t.serverCache)}function d0(t,e,n,i){return h0(t.eventCache,new vp(e,n,i))}function Id(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;const pD=()=>(wh||(wh=new jn(Zx)),wh);class Be{constructor(e,n=pD()){this.value=e,this.children=n}static fromObject(e){let n=new Be(null);return yn(e,(i,s)=>{n=n.set(new je(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$e(),value:this.value};if(ge(e))return null;{const i=ye(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ze(e),n);return r!=null?{path:ft(new je(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const n=ye(e),i=this.children.get(n);return i!==null?i.subtree(ze(e)):new Be(null)}}set(e,n){if(ge(e))return new Be(n,this.children);{const i=ye(e),r=(this.children.get(i)||new Be(null)).set(ze(e),n),o=this.children.insert(i,r);return new Be(this.value,o)}}remove(e){if(ge(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const n=ye(e),i=this.children.get(n);if(i){const s=i.remove(ze(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Be(null):new Be(this.value,r)}else return this}}get(e){if(ge(e))return this.value;{const n=ye(e),i=this.children.get(n);return i?i.get(ze(e)):null}}setTree(e,n){if(ge(e))return n;{const i=ye(e),r=(this.children.get(i)||new Be(null)).setTree(ze(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Be(this.value,o)}}fold(e){return this.fold_($e(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ft(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,$e(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ge(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(ze(e),ft(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$e(),n)}foreachOnPath_(e,n,i){if(ge(e))return this;{this.value&&i(n,this.value);const s=ye(e),r=this.children.get(s);return r?r.foreachOnPath_(ze(e),ft(n,s),i):new Be(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ft(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Be(null))}}function xo(t,e,n){if(ge(e))return new Pn(new Be(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=_n(s,e);return r=r.updateChild(o,n),new Pn(t.writeTree_.set(s,r))}else{const s=new Be(n),r=t.writeTree_.setTree(e,s);return new Pn(r)}}}function A_(t,e,n){let i=t;return yn(n,(s,r)=>{i=xo(i,ft(e,s),r)}),i}function R_(t,e){if(ge(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Be(null));return new Pn(n)}}function Ad(t,e){return Us(t,e)!=null}function Us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_n(n.path,e)):null}function C_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Mt,(i,s)=>{e.push(new ve(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ve(i,s.value))}),e}function Wi(t,e){if(ge(e))return t;{const n=Us(t,e);return n!=null?new Pn(new Be(n)):new Pn(t.writeTree_.subtree(e))}}function Rd(t){return t.writeTree_.isEmpty()}function Ir(t,e){return f0($e(),t.writeTree_,e)}function f0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=f0(ft(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ft(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t,e){return v0(e,t)}function mD(t,e,n,i,s){V(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=i}function gD(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function _D(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yD(a,i.path)?s=!1:Rn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return vD(t),!0;if(i.snap)t.visibleWrites=R_(t.visibleWrites,i.path);else{const a=i.children;yn(a,l=>{t.visibleWrites=R_(t.visibleWrites,ft(i.path,l))})}return!0}else return!1}function yD(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(ft(t.path,n),e))return!0;return!1}function vD(t){t.visibleWrites=m0(t.allWrites,ED,$e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ED(t){return t.visible}function m0(t,e,n){let i=Pn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Rn(n,o)?(a=_n(n,o),i=xo(i,a,r.snap)):Rn(o,n)&&(a=_n(o,n),i=xo(i,$e(),r.snap.getChild(a)));else if(r.children){if(Rn(n,o))a=_n(n,o),i=A_(i,a,r.children);else if(Rn(o,n))if(a=_n(o,n),ge(a))i=A_(i,$e(),r.children);else{const l=wr(r.children,ye(a));if(l){const c=l.getChild(ze(a));i=xo(i,$e(),c)}}}else throw Hr("WriteRecord should have .snap or .children")}}return i}function g0(t,e,n,i,s){if(!i&&!s){const r=Us(t.visibleWrites,e);if(r!=null)return r;{const o=Wi(t.visibleWrites,e);if(Rd(o))return n;if(n==null&&!Ad(o,$e()))return null;{const a=n||ke.EMPTY_NODE;return Ir(o,a)}}}else{const r=Wi(t.visibleWrites,e);if(!s&&Rd(r))return n;if(!s&&n==null&&!Ad(r,$e()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Rn(c.path,e)||Rn(e,c.path))},a=m0(t.allWrites,o,e),l=n||ke.EMPTY_NODE;return Ir(a,l)}}}function wD(t,e,n){let i=ke.EMPTY_NODE;const s=Us(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Mt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Wi(t.visibleWrites,e);return n.forEachChild(Mt,(o,a)=>{const l=Ir(Wi(r,new je(o)),a);i=i.updateImmediateChild(o,l)}),C_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Wi(t.visibleWrites,e);return C_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function bD(t,e,n,i,s){V(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ft(e,n);if(Ad(t.visibleWrites,r))return null;{const o=Wi(t.visibleWrites,r);return Rd(o)?s.getChild(n):Ir(o,s.getChild(n))}}function TD(t,e,n,i){const s=ft(e,n),r=Us(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Wi(t.visibleWrites,s);return Ir(o,i.getNode().getImmediateChild(n))}else return null}function ID(t,e){return Us(t.visibleWrites,e)}function AD(t,e,n,i,s,r,o){let a;const l=Wi(t.visibleWrites,e),c=Us(l,$e());if(c!=null)a=c;else if(n!=null)a=Ir(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function RD(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Cd(t,e,n,i){return g0(t.writeTree,t.treePath,e,n,i)}function _0(t,e){return wD(t.writeTree,t.treePath,e)}function S_(t,e,n,i){return bD(t.writeTree,t.treePath,e,n,i)}function pc(t,e){return ID(t.writeTree,ft(t.treePath,e))}function CD(t,e,n,i,s,r){return AD(t.writeTree,t.treePath,e,n,i,s,r)}function Ep(t,e,n){return TD(t.writeTree,t.treePath,e,n)}function y0(t,e){return v0(ft(t.treePath,e),t.writeTree)}function v0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,w_(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,iD(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,nD(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,w_(i,e.snapshotNode,s.oldSnap));else throw Hr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const E0=new kD;class wp{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new vp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ep(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xs(this.viewCache_),r=CD(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function PD(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xD(t,e,n,i,s){const r=new SD;let o,a;if(n.type===qn.OVERWRITE){const c=n;c.source.fromUser?o=Sd(t,e,c.path,c.snap,i,s,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ge(c.path),o=mc(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===qn.MERGE){const c=n;c.source.fromUser?o=ND(t,e,c.path,c.children,i,s,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=kd(t,e,c.path,c.children,i,s,a,r))}else if(n.type===qn.ACK_USER_WRITE){const c=n;c.revert?o=LD(t,e,c.path,i,s,r):o=OD(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===qn.LISTEN_COMPLETE)o=MD(t,e,n.path,i,r);else throw Hr("Unknown operation type: "+n.type);const l=r.getChanges();return DD(e,o,l),{viewCache:o,changes:l}}function DD(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Id(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tD(Id(e)))}}function w0(t,e,n,i,s,r){const o=e.eventCache;if(pc(i,n)!=null)return e;{let a,l;if(ge(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xs(e),u=c instanceof ke?c:ke.EMPTY_NODE,h=_0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Cd(i,xs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ye(n);if(c===".priority"){V(Yi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=S_(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ze(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=S_(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ep(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Po(e,a,o.isFullyInitialized()||ge(n),t.filter.filtersNodes())}}function mc(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ge(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&Yi(n)>1)return e;const g=ze(n),v=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,g,E0,null)}const h=d0(e,c,l.isFullyInitialized()||ge(n),u.filtersNodes()),d=new wp(s,h,r);return w0(t,h,n,s,d,a)}function Sd(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new wp(s,e,r);if(ge(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Po(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Po(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ze(n),f=a.getNode().getImmediateChild(h);let g;if(ge(d))g=i;else{const y=u.getCompleteChild(h);y!=null?Xw(d)===".priority"&&y.getChild(Zw(d)).isEmpty()?g=y:g=y.updateChild(d,i):g=ke.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Po(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function k_(t,e){return t.eventCache.isCompleteForChild(e)}function ND(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ft(n,l);k_(e,ye(u))&&(a=Sd(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ft(n,l);k_(e,ye(u))||(a=Sd(t,a,u,c,s,r,o))}),a}function P_(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function kd(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ge(n)?c=i:c=new Be(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=P_(t,f,d);l=mc(t,l,new je(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=P_(t,g,d);l=mc(t,l,new je(h),y,s,r,o,a)}}),l}function OD(t,e,n,i,s,r,o){if(pc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ge(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return mc(t,e,n,l.getNode().getChild(n),s,r,a,o);if(ge(n)){let c=new Be(null);return l.getNode().forEachChild(fr,(u,h)=>{c=c.set(new je(u),h)}),kd(t,e,n,c,s,r,a,o)}else return e}else{let c=new Be(null);return i.foreach((u,h)=>{const d=ft(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),kd(t,e,n,c,s,r,a,o)}}function MD(t,e,n,i,s){const r=e.serverCache,o=d0(e,r.getNode(),r.isFullyInitialized()||ge(n),r.isFiltered());return w0(t,o,n,i,E0,s)}function LD(t,e,n,i,s,r){let o;if(pc(i,n)!=null)return e;{const a=new wp(i,e,s),l=e.eventCache.getNode();let c;if(ge(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cd(i,xs(e));else{const h=e.serverCache.getNode();V(h instanceof ke,"serverChildren would be complete if leaf node"),u=_0(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ye(n);let h=Ep(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ze(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ke.EMPTY_NODE,ze(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cd(i,xs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||pc(i,$e())!=null,Po(e,c,o,t.filter.filtersNodes())}}function VD(t,e){const n=xs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ge(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function x_(t,e,n,i){e.type===qn.MERGE&&e.source.queryId!==null&&(V(xs(t.viewCache_),"We should always have a full cache before handling merges"),V(Id(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=xD(t.processor_,s,e,n,i);return PD(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$D(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $D(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return hD(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D_;function FD(t){V(!D_,"__referenceConstructor has already been defined"),D_=t}function bp(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return V(r!=null,"SyncTree gave us an op for an invalid query."),x_(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(x_(o,e,n,i));return r}}function Tp(t,e){let n=null;for(const i of t.views.values())n=n||VD(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N_;function UD(t){V(!N_,"__referenceConstructor has already been defined"),N_=t}class O_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=RD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BD(t,e,n,i,s){return mD(t.pendingWriteTree_,e,n,i,s),s?hu(t,new Ps(l0(),e,n)):[]}function sr(t,e,n=!1){const i=gD(t.pendingWriteTree_,e);if(_D(t.pendingWriteTree_,e)){let r=new Be(null);return i.snap!=null?r=r.set($e(),!0):yn(i.children,o=>{r=r.set(new je(o),!0)}),hu(t,new fc(i.path,r,n))}else return[]}function uu(t,e,n){return hu(t,new Ps(c0(),e,n))}function zD(t,e,n){const i=Be.fromObject(n);return hu(t,new na(c0(),e,i))}function HD(t,e,n,i){const s=A0(t,i);if(s!=null){const r=R0(s),o=r.path,a=r.queryId,l=_n(o,e),c=new Ps(u0(a),l,n);return C0(t,o,c)}else return[]}function jD(t,e,n,i){const s=A0(t,i);if(s){const r=R0(s),o=r.path,a=r.queryId,l=_n(o,e),c=Be.fromObject(n),u=new na(u0(a),l,c);return C0(t,o,u)}else return[]}function b0(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_n(o,e),c=Tp(a,l);if(c)return c});return g0(s,e,r,n,!0)}function hu(t,e){return T0(e,t.syncPointTree_,null,p0(t.pendingWriteTree_,$e()))}function T0(t,e,n,i){if(ge(t.path))return I0(t,e,n,i);{const s=e.get($e());n==null&&s!=null&&(n=Tp(s,$e()));let r=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=y0(i,o);r=r.concat(T0(a,l,c,u))}return s&&(r=r.concat(bp(s,t,i,n))),r}}function I0(t,e,n,i){const s=e.get($e());n==null&&s!=null&&(n=Tp(s,$e()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=y0(i,o),u=t.operationForChild(o);u&&(r=r.concat(I0(u,a,l,c)))}),s&&(r=r.concat(bp(s,t,i,n))),r}function A0(t,e){return t.tagToQueryMap.get(e)}function R0(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new je(t.substr(0,e))}}function C0(t,e,n){const i=t.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const s=p0(t.pendingWriteTree_,e);return bp(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ip(n)}node(){return this.node_}}class Ap{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new Ap(this.syncTree_,n)}node(){return b0(this.syncTree_,this.path_)}}const qD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},M_=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KD(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},KD=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},GD=function(t,e,n,i){return Rp(e,new Ap(n,t),i)},QD=function(t,e,n){return Rp(t,new Ip(e),n)};function Rp(t,e,n){const i=t.getPriority().val(),s=M_(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=M_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ut(a,xt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ut(s))),o.forEachChild(Mt,(a,l)=>{const c=Rp(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Sp(t,e){let n=e instanceof je?e:new je(e),i=t,s=ye(n);for(;s!==null;){const r=wr(i.node.children,s)||{children:{},childCount:0};i=new Cp(s,i,r),n=ze(n),s=ye(n)}return i}function Qr(t){return t.node.value}function S0(t,e){t.node.value=e,Pd(t)}function k0(t){return t.node.childCount>0}function YD(t){return Qr(t)===void 0&&!k0(t)}function du(t,e){yn(t.node.children,(n,i)=>{e(new Cp(n,t,i))})}function P0(t,e,n,i){n&&!i&&e(t),du(t,s=>{P0(s,e,!0,i)}),n&&i&&e(t)}function XD(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ma(t){return new je(t.parent===null?t.name:Ma(t.parent)+"/"+t.name)}function Pd(t){t.parent!==null&&JD(t.parent,t.name,t)}function JD(t,e,n){const i=YD(n),s=Ri(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Pd(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Pd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/[\[\].#$\/\u0000-\u001F\u007F]/,eN=/[\[\].#$\u0000-\u001F\u007F]/,bh=10*1024*1024,x0=function(t){return typeof t=="string"&&t.length!==0&&!ZD.test(t)},tN=function(t){return typeof t=="string"&&t.length!==0&&!eN.test(t)},nN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tN(t)},D0=function(t,e,n){const i=n instanceof je?new M1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ds(i));if(typeof e=="function")throw new Error(t+"contains a function "+ds(i)+" with contents = "+e.toString());if(xw(e))throw new Error(t+"contains "+e.toString()+" "+ds(i));if(typeof e=="string"&&e.length>bh/3&&ru(e)>bh)throw new Error(t+"contains a string greater than "+bh+" utf8 bytes "+ds(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(yn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!x0(o)))throw new Error(t+" contains an invalid key ("+o+") "+ds(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);L1(i,o),D0(t,a,i),V1(i)}),s&&r)throw new Error(t+' contains ".value" child '+ds(i)+" in addition to actual children.")}},iN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!x0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nN(n))throw new Error(nS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rN(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!e0(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Bs(t,e,n){rN(t,n),oN(t,i=>Rn(i,e)||Rn(e,i))}function oN(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(aN(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Is&&Pt("event: "+n.toString()),Na(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="repo_interrupt",cN=25;class uN{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dc(),this.transactionQueueTree_=new Cp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hN(t,e,n){if(t.stats_=pp(t.repoInfo_),t.forceRestClient_||r1())t.server_=new hc(t.repoInfo_,(i,s,r,o)=>{L_(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>V_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{bt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new yi(t.repoInfo_,e,(i,s,r,o)=>{L_(t,i,s,r,o)},i=>{V_(t,i)},i=>{fN(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=h1(t.repoInfo_,()=>new uD(t.stats_,t.server_)),t.infoData_=new rD,t.infoSyncTree_=new O_({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=uu(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kp(t,"connected",!1),t.serverSyncTree_=new O_({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Bs(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function dN(t){const n=t.infoData_.getNode(new je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function N0(t){return qD({timestamp:dN(t)})}function L_(t,e,n,i,s){t.dataUpdateCount++;const r=new je(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Zl(n,c=>xt(c));o=jD(t.serverSyncTree_,r,l,s)}else{const l=xt(n);o=HD(t.serverSyncTree_,r,l,s)}else if(i){const l=Zl(n,c=>xt(c));o=zD(t.serverSyncTree_,r,l)}else{const l=xt(n);o=uu(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=xp(t,r)),Bs(t.eventQueue_,a,o)}function V_(t,e){kp(t,"connected",e),e===!1&&mN(t)}function fN(t,e){yn(e,(n,i)=>{kp(t,n,i)})}function kp(t,e,n){const i=new je("/.info/"+e),s=xt(n);t.infoData_.updateSnapshot(i,s);const r=uu(t.infoSyncTree_,i,s);Bs(t.eventQueue_,i,r)}function pN(t){return t.nextWriteId_++}function mN(t){O0(t,"onDisconnectEvents");const e=N0(t),n=dc();Td(t.onDisconnect_,$e(),(s,r)=>{const o=GD(s,r,t.serverSyncTree_,e);a0(n,s,o)});let i=[];Td(n,$e(),(s,r)=>{i=i.concat(uu(t.serverSyncTree_,s,r));const o=vN(t,s);xp(t,o)}),t.onDisconnect_=dc(),Bs(t.eventQueue_,$e(),i)}function gN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lN)}function O0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pt(n,...e)}function M0(t,e,n){return b0(t.serverSyncTree_,e,n)||ke.EMPTY_NODE}function Pp(t,e=t.transactionQueueTree_){if(e||fu(t,e),Qr(e)){const n=V0(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&_N(t,Ma(e),n)}else k0(e)&&du(e,n=>{Pp(t,n)})}function _N(t,e,n){const i=n.map(c=>c.currentWriteId),s=M0(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=_n(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{O0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(sr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();fu(t,Sp(t.transactionQueueTree_,e)),Pp(t,t.transactionQueueTree_),Bs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Na(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{hn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}xp(t,e)}},o)}function xp(t,e){const n=L0(t,e),i=Ma(n),s=V0(t,n);return yN(t,s,i),i}function yN(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_n(n,l.path);let u=!1,h;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cN)u=!0,h="maxretry",s=s.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=M0(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){D0("transaction failed: Data returned ",f,l.path);let g=xt(f);typeof f=="object"&&f!=null&&Ri(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,w=N0(t),b=QD(g,d,w);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=b,l.currentWriteId=pN(t),o.splice(o.indexOf(v),1),s=s.concat(BD(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),s=s.concat(sr(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(sr(t.serverSyncTree_,l.currentWriteId,!0))}Bs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}fu(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Na(i[a]);Pp(t,t.transactionQueueTree_)}function L0(t,e){let n,i=t.transactionQueueTree_;for(n=ye(e);n!==null&&Qr(i)===void 0;)i=Sp(i,n),e=ze(e),n=ye(e);return i}function V0(t,e){const n=[];return $0(t,e,n),n.sort((i,s)=>i.order-s.order),n}function $0(t,e,n){const i=Qr(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);du(e,s=>{$0(t,s,n)})}function fu(t,e){const n=Qr(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,S0(e,n.length>0?n:void 0)}du(e,i=>{fu(t,i)})}function vN(t,e){const n=Ma(L0(t,e)),i=Sp(t.transactionQueueTree_,e);return XD(i,s=>{Th(t,s)}),Th(t,i),P0(i,s=>{Th(t,s)}),n}function Th(t,e){const n=Qr(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(sr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?S0(e,void 0):n.length=r+1,Bs(t.eventQueue_,Ma(e),s);for(let o=0;o<i.length;o++)Na(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function wN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const $_=function(t,e){const n=bN(t),i=n.namespace;n.domain==="firebase.com"&&Ss(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xx();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new l1(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new je(n.pathString)}},bN=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=EN(t.substring(u,h)));const d=wN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ge(this._path)?null:Xw(this._path)}get ref(){return new Yr(this._repo,this._path)}get _queryIdentifier(){const e=T_(this._queryParams),n=dp(e);return n==="{}"?"default":n}get _queryObject(){return T_(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Dp))return!1;const n=this._repo===e._repo,i=e0(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+O1(this._path)}}class Yr extends Dp{constructor(e,n){super(e,n,new yp,!1)}get parent(){const e=Zw(this._path);return e===null?null:new Yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}FD(Yr);UD(Yr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="FIREBASE_DATABASE_EMULATOR_HOST",xd={};let IN=!1;function AN(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$_(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[TN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=$_(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Ed(Ed.OWNER):new a1(t.name,t.options,e);iN("Invalid Firebase Database URL",o),ge(o.path)||Ss("Database URL must point to the root of a Firebase Database (not including a child path).");const h=CN(a,t,u,new o1(t.name,n));return new SN(h,t)}function RN(t,e){const n=xd[e];(!n||n[t.key]!==t)&&Ss(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gN(t),delete n[t.key]}function CN(t,e,n,i){let s=xd[e.name];s||(s={},xd[e.name]=s);let r=s[t.toURLString()];return r&&Ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uN(t,IN,n,i),s[t.toURLString()]=r,r}class SN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yr(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ss("Cannot call "+e+" on a deleted database.")}}/**
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
 */function kN(t){Wx(ts),ti(new xn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AN(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),un(r_,o_,t),un(r_,o_,"esm2017")}yi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kN();var PN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Np=Np||{},oe=PN||self;function pu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function La(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xN(t){return Object.prototype.hasOwnProperty.call(t,Ih)&&t[Ih]||(t[Ih]=++DN)}var Ih="closure_uid_"+(1e9*Math.random()>>>0),DN=0;function NN(t,e,n){return t.call.apply(t.bind,arguments)}function ON(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=NN:Lt=ON,Lt.apply(null,arguments)}function yl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function _t(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function ns(){this.s=this.s,this.o=this.o}var MN=0;ns.prototype.s=!1;ns.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MN!=0)&&xN(this)};ns.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const F0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Op(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function F_(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(pu(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var LN=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",()=>{},e),oe.removeEventListener("test",()=>{},e)}catch{}return t}();function ia(t){return/^[\s\xa0]*$/.test(t)}function mu(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Bn(t){return mu().indexOf(t)!=-1}function Mp(t){return Mp[" "](t),t}Mp[" "]=function(){};function VN(t,e){var n=kO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $N=Bn("Opera"),Ar=Bn("Trident")||Bn("MSIE"),U0=Bn("Edge"),Dd=U0||Ar,B0=Bn("Gecko")&&!(mu().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge"))&&!(Bn("Trident")||Bn("MSIE"))&&!Bn("Edge"),FN=mu().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge");function z0(){var t=oe.document;return t?t.documentMode:void 0}var Nd;e:{var Ah="",Rh=function(){var t=mu();if(B0)return/rv:([^\);]+)(\)|;)/.exec(t);if(U0)return/Edge\/([\d\.]+)/.exec(t);if(Ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FN)return/WebKit\/(\S+)/.exec(t);if($N)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rh&&(Ah=Rh?Rh[1]:""),Ar){var Ch=z0();if(Ch!=null&&Ch>parseFloat(Ah)){Nd=String(Ch);break e}}Nd=Ah}var Od;if(oe.document&&Ar){var U_=z0();Od=U_||parseInt(Nd,10)||void 0}else Od=void 0;var UN=Od;function sa(t,e){if(Vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B0){e:{try{Mp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sa.$.h.call(this)}}_t(sa,Vt);var BN={2:"touch",3:"pen",4:"mouse"};sa.prototype.h=function(){sa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Va="closure_listenable_"+(1e6*Math.random()|0),zN=0;function HN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++zN,this.fa=this.ia=!1}function gu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lp(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function jN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function H0(t){const e={};for(const n in t)e[n]=t[n];return e}const B_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j0(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<B_.length;r++)n=B_[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function _u(t){this.src=t,this.g={},this.h=0}_u.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ld(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new HN(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Md(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=F0(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(gu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ld(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Vp="closure_lm_"+(1e6*Math.random()|0),Sh={};function q0(t,e,n,i,s){if(i&&i.once)return K0(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)q0(t,e[r],n,i,s);return null}return n=Up(n),t&&t[Va]?t.O(e,n,La(i)?!!i.capture:!!i,s):W0(t,e,n,!1,i,s)}function W0(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=La(s)?!!s.capture:!!s,a=Fp(t);if(a||(t[Vp]=a=new _u(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=qN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)LN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Q0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qN(){function t(n){return e.call(t.src,t.listener,n)}const e=WN;return t}function K0(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)K0(t,e[r],n,i,s);return null}return n=Up(n),t&&t[Va]?t.P(e,n,La(i)?!!i.capture:!!i,s):W0(t,e,n,!0,i,s)}function G0(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)G0(t,e[r],n,i,s);else i=La(i)?!!i.capture:!!i,n=Up(n),t&&t[Va]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ld(r,n,i,s),-1<n&&(gu(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ld(e,n,i,s)),(n=-1<t?e[t]:null)&&$p(n))}function $p(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Va])Md(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Q0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Fp(e))?(Md(n,t),n.h==0&&(n.src=null,e[Vp]=null)):gu(t)}}}function Q0(t){return t in Sh?Sh[t]:Sh[t]="on"+t}function WN(t,e){if(t.fa)t=!0;else{e=new sa(e,this);var n=t.listener,i=t.la||t.src;t.ia&&$p(t),t=n.call(i,e)}return t}function Fp(t){return t=t[Vp],t instanceof _u?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Up(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function gt(){ns.call(this),this.i=new _u(this),this.S=this,this.J=null}_t(gt,ns);gt.prototype[Va]=!0;gt.prototype.removeEventListener=function(t,e,n,i){G0(this,t,e,n,i)};function It(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Vt(e,t);else if(e instanceof Vt)e.target=e.target||t;else{var s=e;e=new Vt(i,t),j0(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=vl(o,i,!0,e)&&s}if(o=e.g=t,s=vl(o,i,!0,e)&&s,s=vl(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=vl(o,i,!1,e)&&s}gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)gu(n[i]);delete t.g[e],t.h--}}this.J=null};gt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};gt.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function vl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Md(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Bp=oe.JSON.stringify;class KN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function GN(){var t=zp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QN{constructor(){this.h=this.g=null}add(e,n){const i=Y0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Y0=new KN(()=>new YN,t=>t.reset());class YN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JN(t){oe.setTimeout(()=>{throw t},0)}let ra,oa=!1,zp=new QN,X0=()=>{const t=oe.Promise.resolve(void 0);ra=()=>{t.then(ZN)}};var ZN=()=>{for(var t;t=GN();){try{t.h.call(t.g)}catch(n){JN(n)}var e=Y0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oa=!1};function yu(t,e){gt.call(this),this.h=t||1,this.g=e||oe,this.j=Lt(this.qb,this),this.l=Date.now()}_t(yu,gt);$=yu.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(Hp(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){yu.$.N.call(this),Hp(this),delete this.g};function jp(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function J0(t){t.g=jp(()=>{t.g=null,t.i&&(t.i=!1,J0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eO extends ns{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:J0(this)}N(){super.N(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aa(t){ns.call(this),this.h=t,this.g={}}_t(aa,ns);var z_=[];function Z0(t,e,n,i){Array.isArray(n)||(n&&(z_[0]=n.toString()),n=z_);for(var s=0;s<n.length;s++){var r=q0(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function eb(t){Lp(t.g,function(e,n){this.g.hasOwnProperty(n)&&$p(e)},t),t.g={}}aa.prototype.N=function(){aa.$.N.call(this),eb(this)};aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vu(){this.g=!0}vu.prototype.Ea=function(){this.g=!1};function tO(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function nO(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function rr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sO(t,n)+(i?" "+i:"")})}function iO(t,e){t.info(function(){return"TIMEOUT: "+e})}vu.prototype.info=function(){};function sO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bp(n)}catch{return e}}var zs={},H_=null;function Eu(){return H_=H_||new gt}zs.Ta="serverreachability";function tb(t){Vt.call(this,zs.Ta,t)}_t(tb,Vt);function la(t){const e=Eu();It(e,new tb(e))}zs.STAT_EVENT="statevent";function nb(t,e){Vt.call(this,zs.STAT_EVENT,t),this.stat=e}_t(nb,Vt);function Kt(t){const e=Eu();It(e,new nb(e,t))}zs.Ua="timingevent";function ib(t,e){Vt.call(this,zs.Ua,t),this.size=e}_t(ib,Vt);function $a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var wu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qp(){}qp.prototype.h=null;function j_(t){return t.h||(t.h=t.i())}function rb(){}var Fa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wp(){Vt.call(this,"d")}_t(Wp,Vt);function Kp(){Vt.call(this,"c")}_t(Kp,Vt);var Vd;function bu(){}_t(bu,qp);bu.prototype.g=function(){return new XMLHttpRequest};bu.prototype.i=function(){return{}};Vd=new bu;function Ua(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new aa(this),this.P=rO,t=Dd?125:void 0,this.V=new yu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ob}function ob(){this.i=null,this.g="",this.h=!1}var rO=45e3,$d={},gc={};$=Ua.prototype;$.setTimeout=function(t){this.P=t};function Fd(t,e,n){t.L=1,t.v=Iu(wi(e)),t.s=n,t.S=!0,ab(t,null)}function ab(t,e){t.G=Date.now(),Ba(t),t.A=wi(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),mb(n.i,"t",i),t.C=0,n=t.l.J,t.h=new ob,t.g=Lb(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eO(Lt(t.Pa,t,t.g),t.O)),Z0(t.U,t.g,"readystatechange",t.nb),e=t.I?H0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),la(),tO(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Wn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const u=Wn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Dd||this.g&&(this.h.h||this.g.ja()||G_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?la(3):la(2)),Tu(this);var n=this.g.da();this.ca=n;t:if(lb(this)){var i=G_(this.g);t="";var s=i.length,r=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_s(this),Do(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ia(a)){var c=a;break t}}c=null}if(n=c)rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ud(this,n);else{this.i=!1,this.o=3,Kt(12),_s(this),Do(this);break e}}this.S?(cb(this,u,o),Dd&&this.i&&u==3&&(Z0(this.U,this.V,"tick",this.mb),this.V.start())):(rr(this.j,this.m,o,null),Ud(this,o)),u==4&&_s(this),this.i&&!this.J&&(u==4?Db(this.l,this):(this.i=!1,Ba(this)))}else RO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),_s(this),Do(this)}}}catch{}finally{}};function lb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cb(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=oO(t,n),s==gc){e==4&&(t.o=4,Kt(14),i=!1),rr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$d){t.o=4,Kt(15),rr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else rr(t.j,t.m,s,null),Ud(t,s);lb(t)&&s!=gc&&s!=$d&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zp(e),e.M=!0,Kt(11))):(rr(t.j,t.m,n,"[Invalid Chunked Response]"),_s(t),Do(t))}$.mb=function(){if(this.g){var t=Wn(this.g),e=this.g.ja();this.C<e.length&&(Tu(this),cb(this,t,e),this.i&&t!=4&&Ba(this))}};function oO(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gc:(n=Number(e.substring(n,i)),isNaN(n)?$d:(i+=1,i+n>e.length?gc:(e=e.slice(i,i+n),t.C=i+n,e)))}$.cancel=function(){this.J=!0,_s(this)};function Ba(t){t.Y=Date.now()+t.P,ub(t,t.P)}function ub(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$a(Lt(t.lb,t),e)}function Tu(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(iO(this.j,this.A),this.L!=2&&(la(),Kt(17)),_s(this),this.o=2,Do(this)):ub(this,this.Y-t)};function Do(t){t.l.H==0||t.J||Db(t.l,t)}function _s(t){Tu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hp(t.V),eb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ud(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Bd(n.i,t))){if(!t.K&&Bd(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)vc(n),Cu(n);else break e;Jp(n),Kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=$a(Lt(n.ib,n),6e3));if(1>=yb(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ys(n,11)}else if((t.K||n.g==t)&&vc(n),!ia(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Gp(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,He(i.I,i.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Mb(i,i.J?i.pa:null,i.Y),o.K){vb(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Tu(a),Ba(a)),i.g=o}else Pb(i);0<n.j.length&&Su(n)}else c[0]!="stop"&&c[0]!="close"||ys(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ys(n,7):Xp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}la(4)}catch{}}function aO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function lO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function hb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lO(t),i=aO(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var db=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function As(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=t.h,_c(this,t.j),this.s=t.s,this.g=t.g,yc(this,t.m),this.l=t.l;var e=t.i,n=new ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),q_(this,n),this.o=t.o}else t&&(e=String(t).match(db))?(this.h=!1,_c(this,e[1]||"",!0),this.s=wo(e[2]||""),this.g=wo(e[3]||"",!0),yc(this,e[4]),this.l=wo(e[5]||"",!0),q_(this,e[6]||"",!0),this.o=wo(e[7]||"")):(this.h=!1,this.i=new ca(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bo(e,W_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bo(e,W_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bo(n,n.charAt(0)=="/"?dO:hO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bo(n,pO)),t.join("")};function wi(t){return new As(t)}function _c(t,e,n){t.j=n?wo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function q_(t,e,n){e instanceof ca?(t.i=e,mO(t.i,t.h)):(n||(e=bo(e,fO)),t.i=new ca(e,t.h))}function He(t,e,n){t.i.set(e,n)}function Iu(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var W_=/[#\/\?@]/g,hO=/[#\?:]/g,dO=/[#\?]/g,fO=/[#\?@]/g,pO=/#/g;function ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function is(t){t.g||(t.g=new Map,t.h=0,t.i&&cO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=ca.prototype;$.add=function(t,e){is(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fb(t,e){is(t),e=Xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pb(t,e){return is(t),e=Xr(t,e),t.g.has(e)}$.forEach=function(t,e){is(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};$.ta=function(){is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};$.Z=function(t){is(this);let e=[];if(typeof t=="string")pb(this,t)&&(e=e.concat(this.g.get(Xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return is(this),this.i=null,t=Xr(this,t),pb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function mb(t,e,n){fb(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),Op(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mO(t,e){e&&!t.j&&(is(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(fb(this,i),mb(this,s,n))},t)),t.j=e}var gO=class{constructor(t,e){this.g=t,this.map=e}};function gb(t){this.l=t||_O,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ka&&oe.g.Ka()&&oe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _O=10;function _b(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yb(t){return t.h?1:t.g?t.g.size:0}function Bd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gp(t,e){t.g?t.g.add(e):t.h=e}function vb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gb.prototype.cancel=function(){if(this.i=Eb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Eb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Op(t.i)}var yO=class{stringify(t){return oe.JSON.stringify(t,void 0)}parse(t){return oe.JSON.parse(t,void 0)}};function vO(){this.g=new yO}function EO(t,e,n){const i=n||"";try{hb(t,function(s,r){let o=s;La(s)&&(o=Bp(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function wO(t,e){const n=new vu;if(oe.Image){const i=new Image;i.onload=yl(El,n,i,"TestLoadImage: loaded",!0,e),i.onerror=yl(El,n,i,"TestLoadImage: error",!1,e),i.onabort=yl(El,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=yl(El,n,i,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function El(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function za(t){this.l=t.fc||null,this.j=t.ob||!1}_t(za,qp);za.prototype.g=function(){return new Au(this.l,this.j)};za.prototype.i=function(t){return function(){return t}}({});function Au(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(Au,gt);var Qp=0;$=Au.prototype;$.open=function(t,e){if(this.readyState!=Qp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ua(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||oe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ha(this)),this.readyState=Qp};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function wb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ha(this):ua(this),this.readyState==3&&wb(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ha(this))};$.Ya=function(t){this.g&&(this.response=t,Ha(this))};$.ka=function(){this.g&&Ha(this)};function Ha(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ua(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Au.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bO=oe.JSON.parse;function Xe(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bb,this.L=this.M=!1}_t(Xe,gt);var bb="",TO=/^https?$/i,IO=["POST","PUT"];$=Xe.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vd.g(),this.C=this.u?j_(this.u):j_(Vd),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){K_(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=oe.FormData&&t instanceof oe.FormData,!(0<=F0(IO,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ab(this),0<this.B&&((this.L=AO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=jp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){K_(this,r)}};function AO(t){return Ar&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Np<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function K_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tb(t),Ru(t)}function Tb(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),Ru(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ru(this,!0)),Xe.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?Ib(this):this.kb())};$.kb=function(){Ib(this)};function Ib(t){if(t.h&&typeof Np<"u"&&(!t.C[1]||Wn(t)!=4||t.da()!=2)){if(t.v&&Wn(t)==4)jp(t.La,0,t);else if(It(t,"readystatechange"),Wn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(db)[1]||null;!s&&oe.self&&oe.self.location&&(s=oe.self.location.protocol.slice(0,-1)),i=!TO.test(s?s.toLowerCase():"")}n=i}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var r=2<Wn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Tb(t)}}finally{Ru(t)}}}}function Ru(t,e){if(t.g){Ab(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=i}catch{}}}function Ab(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Wn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bO(e)}};function G_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RO(t){const e={};t=(t.g&&2<=Wn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(ia(t[i]))continue;var n=XN(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}jN(e,function(i){return i.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rb(t){let e="";return Lp(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Yp(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Rb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cb(t){this.Ga=0,this.j=[],this.l=new vu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ho("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ho("baseRetryDelayMs",5e3,t),this.hb=ho("retryDelaySeedMs",1e4,t),this.eb=ho("forwardChannelMaxRetries",2,t),this.xa=ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new gb(t&&t.concurrentRequestLimit),this.Ja=new vO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=Cb.prototype;$.ra=8;$.H=1;function Xp(t){if(Sb(t),t.H==3){var e=t.W++,n=wi(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),ja(t,n),e=new Ua(t,t.l,e),e.L=2,e.v=Iu(wi(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon)try{n=oe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lb(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ba(e)}Ob(t)}function Cu(t){t.g&&(Zp(t),t.g.cancel(),t.g=null)}function Sb(t){Cu(t),t.u&&(oe.clearTimeout(t.u),t.u=null),vc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function Su(t){if(!_b(t.i)&&!t.m){t.m=!0;var e=t.Na;ra||X0(),oa||(ra(),oa=!0),zp.add(e,t),t.C=0}}function CO(t,e){return yb(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$a(Lt(t.Na,t,e),Nb(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ua(this,this.l,t);let r=this.s;if(this.U&&(r?(r=H0(r),j0(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kb(this,s,e),n=wi(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),ja(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Rb(r)))+"&"+e:this.o&&Yp(n,this.o,r)),Gp(this.i,s),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),s.aa=!0,Fd(s,n,null)):Fd(s,n,e),this.H=2}}else this.H==3&&(t?Q_(this,t):this.j.length==0||_b(this.i)||Q_(this))};function Q_(t,e){var n;e?n=e.m:n=t.W++;const i=wi(t.I);He(i,"SID",t.K),He(i,"RID",n),He(i,"AID",t.V),ja(t,i),t.o&&t.s&&Yp(i,t.o,t.s),n=new Ua(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gp(t.i,n),Fd(n,i,e)}function ja(t,e){t.na&&Lp(t.na,function(n,i){He(e,i,n)}),t.h&&hb({},function(n,i){He(e,i,n)})}function kb(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Lt(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{EO(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Pb(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ra||X0(),oa||(ra(),oa=!0),zp.add(e,t),t.A=0}}function Jp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$a(Lt(t.Ma,t),Nb(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,xb(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$a(Lt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Cu(this),xb(this))};function Zp(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function xb(t){t.g=new Ua(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wi(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),ja(t,e),t.o&&t.s&&Yp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Iu(wi(e)),n.s=null,n.S=!0,ab(n,t)}$.ib=function(){this.v!=null&&(this.v=null,Cu(this),Jp(this),Kt(19))};function vc(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function Db(t,e){var n=null;if(t.g==e){vc(t),Zp(t),t.g=null;var i=2}else if(Bd(t.i,e))n=e.F,vb(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Eu(),It(i,new ib(i,n)),Su(t)}else Pb(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&CO(t,e)||i==2&&Jp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ys(t,5);break;case 4:ys(t,10);break;case 3:ys(t,6);break;default:ys(t,2)}}}function Nb(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ys(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Lt(t.pb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||_c(n,"https"),Iu(n)),wO(n.toString(),i)}else Kt(2);t.H=0,t.h&&t.h.za(e),Ob(t),Sb(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function Ob(t){if(t.H=0,t.ma=[],t.h){const e=Eb(t.i);(e.length!=0||t.j.length!=0)&&(F_(t.ma,e),F_(t.ma,t.j),t.i.i.length=0,Op(t.j),t.j.length=0),t.h.ya()}}function Mb(t,e,n){var i=n instanceof As?wi(n):new As(n);if(i.g!="")e&&(i.g=e+"."+i.g),yc(i,i.m);else{var s=oe.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new As(null);i&&_c(r,i),e&&(r.g=e),s&&yc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&He(i,n,e),He(i,"VER",t.ra),ja(t,i),i}function Lb(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Xe(new za({ob:!0})):new Xe(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function Vb(){}$=Vb.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function Ec(){if(Ar&&!(10<=Number(UN)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new pn(t,e)};function pn(t,e){gt.call(this),this.g=new Cb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ia(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jr(this)}_t(pn,gt);pn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Mb(t,null,t.Y),Su(t)};pn.prototype.close=function(){Xp(this.g)};pn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bp(t),t=n);e.j.push(new gO(e.fb++,t)),e.H==3&&Su(e)};pn.prototype.N=function(){this.g.h=null,delete this.j,Xp(this.g),delete this.g,pn.$.N.call(this)};function $b(t){Wp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t($b,Wp);function Fb(){Kp.call(this),this.status=1}_t(Fb,Kp);function Jr(t){this.g=t}_t(Jr,Vb);Jr.prototype.Ba=function(){It(this.g,"a")};Jr.prototype.Aa=function(t){It(this.g,new $b(t))};Jr.prototype.za=function(t){It(this.g,new Fb)};Jr.prototype.ya=function(){It(this.g,"b")};function SO(){this.blockSize=-1}function Nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(Nn,SO);Nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ph(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Ph(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Ph(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Ph(this,i),s=0;break}}this.h=s,this.i+=e};Nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Me(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var kO={};function em(t){return-128<=t&&128>t?VN(t,function(e){return new Me([e|0],0>e?-1:0)}):new Me([t|0],0>t?-1:0)}function Kn(t){if(isNaN(t)||!isFinite(t))return pr;if(0>t)return wt(Kn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=zd;return new Me(e,0)}function Ub(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return wt(Ub(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kn(Math.pow(e,8)),i=pr,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Kn(Math.pow(e,r)),i=i.R(r).add(Kn(o))):(i=i.R(n),i=i.add(Kn(o)))}return i}var zd=4294967296,pr=em(0),Hd=em(1),Y_=em(16777216);$=Me.prototype;$.ea=function(){if(gn(this))return-wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:zd+i)*e,e*=zd}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_i(this))return"0";if(gn(this))return"-"+wt(this).toString(t);for(var e=Kn(Math.pow(t,6)),n=this,i="";;){var s=bc(n,e).g;n=wc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,_i(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _i(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gn(t){return t.h==-1}$.X=function(t){return t=wc(this,t),gn(t)?-1:_i(t)?0:1};function wt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Me(n,~t.h).add(Hd)}$.abs=function(){return gn(this)?wt(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Me(n,n[n.length-1]&-2147483648?-1:0)};function wc(t,e){return t.add(wt(e))}$.R=function(t){if(_i(this)||_i(t))return pr;if(gn(this))return gn(t)?wt(this).R(wt(t)):wt(wt(this).R(t));if(gn(t))return wt(this.R(wt(t)));if(0>this.X(Y_)&&0>t.X(Y_))return Kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,wl(n,2*i+2*s),n[2*i+2*s+1]+=r*l,wl(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,wl(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,wl(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Me(n,0)};function wl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fo(t,e){this.g=t,this.h=e}function bc(t,e){if(_i(e))throw Error("division by zero");if(_i(t))return new fo(pr,pr);if(gn(t))return e=bc(wt(t),e),new fo(wt(e.g),wt(e.h));if(gn(e))return e=bc(t,wt(e)),new fo(wt(e.g),e.h);if(30<t.g.length){if(gn(t)||gn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Hd,i=e;0>=i.X(t);)n=X_(n),i=X_(i);var s=Ys(n,1),r=Ys(i,1);for(i=Ys(i,2),n=Ys(n,2);!_i(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ys(i,1),n=Ys(n,1)}return e=wc(t,s.R(e)),new fo(s,e)}for(s=pr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Kn(n),o=r.R(e);gn(o)||0<o.X(t);)n-=i,r=Kn(n),o=r.R(e);_i(r)&&(r=Hd),s=s.add(r),t=wc(t,o)}return new fo(s,t)}$.gb=function(t){return bc(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Me(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Me(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Me(n,this.h^t.h)};function X_(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Me(n,t.h)}function Ys(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Me(s,t.h)}Ec.prototype.createWebChannel=Ec.prototype.g;pn.prototype.send=pn.prototype.u;pn.prototype.open=pn.prototype.m;pn.prototype.close=pn.prototype.close;wu.NO_ERROR=0;wu.TIMEOUT=8;wu.HTTP_ERROR=6;sb.COMPLETE="complete";rb.EventType=Fa;Fa.OPEN="a";Fa.CLOSE="b";Fa.ERROR="c";Fa.MESSAGE="d";gt.prototype.listen=gt.prototype.O;Xe.prototype.listenOnce=Xe.prototype.P;Xe.prototype.getLastError=Xe.prototype.Sa;Xe.prototype.getLastErrorCode=Xe.prototype.Ia;Xe.prototype.getStatus=Xe.prototype.da;Xe.prototype.getResponseJson=Xe.prototype.Wa;Xe.prototype.getResponseText=Xe.prototype.ja;Xe.prototype.send=Xe.prototype.ha;Xe.prototype.setWithCredentials=Xe.prototype.Oa;Nn.prototype.digest=Nn.prototype.l;Nn.prototype.reset=Nn.prototype.reset;Nn.prototype.update=Nn.prototype.j;Me.prototype.add=Me.prototype.add;Me.prototype.multiply=Me.prototype.R;Me.prototype.modulo=Me.prototype.gb;Me.prototype.compare=Me.prototype.X;Me.prototype.toNumber=Me.prototype.ea;Me.prototype.toString=Me.prototype.toString;Me.prototype.getBits=Me.prototype.D;Me.fromNumber=Kn;Me.fromString=Ub;var PO=function(){return new Ec},xO=function(){return Eu()},xh=wu,DO=sb,NO=zs,J_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},OO=za,bl=rb,MO=Xe,LO=Nn,mr=Me;const Z_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Aa("@firebase/firestore");function ey(){return Ds.logLevel}function Q(t,...e){if(Ds.logLevel<=be.DEBUG){const n=e.map(tm);Ds.debug(`Firestore (${Zr}): ${t}`,...n)}}function bi(t,...e){if(Ds.logLevel<=be.ERROR){const n=e.map(tm);Ds.error(`Firestore (${Zr}): ${t}`,...n)}}function Rr(t,...e){if(Ds.logLevel<=be.WARN){const n=e.map(tm);Ds.warn(`Firestore (${Zr}): ${t}`,...n)}}function tm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw bi(e),new Error(e)}function Oe(t,e){t||ne()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class $O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FO{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oe(typeof i.accessToken=="string"),new Bb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new kt(e)}}class UO{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BO{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new UO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new zO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=jO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ce(t,e){return t<e?-1:t>e?1:0}function Cr(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new st(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new st(0,0))}static max(){return new se(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,i){n===void 0?n=0:n>e.length&&ne(),i===void 0?i=e.length-n:i>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends ha{construct(e,n,i){return new We(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const qO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends ha{construct(e,n,i){return new Ot(e,n,i)}static isValidIdentifier(e){return qO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(We.fromString(e))}static fromName(e){return new ee(We.fromString(e).popFirst(5))}static empty(){return new ee(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new We(e.slice()))}}function WO(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(i===1e9?new st(n+1,0):new st(n,i));return new Xi(s,ee.empty(),e)}function KO(t){return new Xi(t.readTime,t.key,-1)}class Xi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Xi(se.min(),ee.empty(),-1)}static max(){return new Xi(se.max(),ee.empty(),-1)}}function GO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==QO)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,i)=>{n(e)})}static reject(e){return new N((n,i)=>{i(e)})}static waitFor(e){return new N((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=N.resolve(!1);for(const i of e)n=n.next(s=>s?N.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new N((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new N((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Wa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}nm.ae=-1;function Ka(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function XO(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}}class Tl{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Et.RED,this.left=s??Et.EMPTY,this.right=r??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Et(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,i,s,r){return this}insert(e,n,i){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new cn([])}unionWith(e){let n=new $t(Ot.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class jb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jb("Invalid base64 string: "+r):r}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const JO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ji(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=JO.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sm(t){const e=t.mapValue.fields.__previous_value__;return im(e)?sm(e):e}function da(t){const e=Ji(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?im(t)?4:eM(t)?9007199254740991:10:ne()}function ii(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ji(s.timestampValue),a=Ji(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ns(s.bytesValue).isEqual(Ns(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return nt(s.geoPointValue.latitude)===nt(r.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return nt(s.integerValue)===nt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=nt(s.doubleValue),a=nt(r.doubleValue);return o===a?Tc(o)===Tc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Cr(t.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(ty(o)!==ty(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ii(o[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function pa(t,e){return(t.values||[]).find(n=>ii(n,e))!==void 0}function Sr(t,e){if(t===e)return 0;const n=Os(t),i=Os(e);if(n!==i)return Ce(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=nt(r.integerValue||r.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(da(t),da(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Ns(r),l=Ns(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ce(a[c],l[c]);if(u!==0)return u}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ce(nt(r.latitude),nt(o.latitude));return a!==0?a:Ce(nt(r.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Sr(a[c],l[c]);if(u)return u}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Il.mapValue&&o===Il.mapValue)return 0;if(r===Il.mapValue)return 1;if(o===Il.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ce(l[h],u[h]);if(d!==0)return d;const f=Sr(a[l[h]],c[u[h]]);if(f!==0)return f}return Ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Ji(t),i=Ji(e),s=Ce(n.seconds,i.seconds);return s!==0?s:Ce(n.nanos,i.nanos)}function kr(t){return jd(t)}function jd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ji(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=jd(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${jd(n.fields[o])}`;return s+"}"}(t.mapValue):ne()}function qd(t){return!!t&&"integerValue"in t}function rm(t){return!!t&&"arrayValue"in t}function sy(t){return!!t&&"nullValue"in t}function ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function No(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hs(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=No(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=Ot.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=No(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];$l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Hs(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new qt(No(this.value))}}function qb(t){const e=[];return Hs(t.fields,(n,i)=>{const s=new Ot([n]);if($l(i)){const r=qb(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,se.min(),se.min(),se.min(),qt.empty(),0)}static newFoundDocument(e,n,i,s){return new dt(e,1,n,se.min(),i,s,0)}static newNoDocument(e,n){return new dt(e,2,n,se.min(),se.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,se.min(),se.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function oy(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ee.comparator(ee.fromName(o.referenceValue),n.key):i=Sr(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ii(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function tM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Wb{}class at extends Wb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new iM(e,n,i):n==="array-contains"?new oM(e,i):n==="in"?new aM(e,i):n==="not-in"?new lM(e,i):n==="array-contains-any"?new cM(e,i):new at(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new sM(e,i):new rM(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Sr(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Sr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class si extends Wb{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new si(e,n)}matches(e){return Kb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Kb(t){return t.op==="and"}function Gb(t){return nM(t)&&Kb(t)}function nM(t){for(const e of t.filters)if(e instanceof si)return!1;return!0}function Wd(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(Gb(t))return t.filters.map(e=>Wd(e)).join(",");{const e=t.filters.map(n=>Wd(n)).join(",");return`${t.op}(${e})`}}function Qb(t,e){return t instanceof at?function(i,s){return s instanceof at&&i.op===s.op&&i.field.isEqual(s.field)&&ii(i.value,s.value)}(t,e):t instanceof si?function(i,s){return s instanceof si&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&Qb(o,s.filters[a]),!0):!1}(t,e):void ne()}function Yb(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(t):t instanceof si?function(n){return n.op.toString()+" {"+n.getFilters().map(Yb).join(" ,")+"}"}(t):"Filter"}class iM extends at{constructor(e,n,i){super(e,n,i),this.key=ee.fromName(i.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class sM extends at{constructor(e,n){super(e,"in",n),this.keys=Xb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rM extends at{constructor(e,n){super(e,"not-in",n),this.keys=Xb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ee.fromName(i.referenceValue))}class oM extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rm(n)&&pa(n.arrayValue,this.value)}}class aM extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class lM extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pa(this.value.arrayValue,n)}}class cM extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>pa(this.value.arrayValue,i))}}/**
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
 */class uM{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function ly(t,e=null,n=[],i=[],s=null,r=null,o=null){return new uM(t,e,n,i,s,r,o)}function om(t){const e=ue(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Wd(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>kr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>kr(i)).join(",")),e.he=n}return e.he}function am(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ay(t.startAt,e.startAt)&&ay(t.endAt,e.endAt)}function Kd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function hM(t,e,n,i,s,r,o,a){return new ku(t,e,n,i,s,r,o,a)}function Pu(t){return new ku(t)}function cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pM(t){return t.collectionGroup!==null}function gr(t){const e=ue(t);if(e.Pe===null){e.Pe=[];const n=fM(e),i=dM(e);if(n!==null&&i===null)n.isKeyField()||e.Pe.push(new Oo(n)),e.Pe.push(new Oo(Ot.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Oo(Ot.keyField(),r))}}}return e.Pe}function Ti(t){const e=ue(t);if(!e.Ie)if(e.limitType==="F")e.Ie=ly(e.path,e.collectionGroup,gr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of gr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Oo(r.field,o))}const i=e.endAt?new Ic(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ic(e.startAt.position,e.startAt.inclusive):null;e.Ie=ly(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.Ie}function Gd(t,e,n){return new ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return am(Ti(t),Ti(e))&&t.limitType===e.limitType}function Jb(t){return`${om(Ti(t))}|lt:${t.limitType}`}function Qd(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>Yb(s)).join(", ")}]`),Ka(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>kr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>kr(s)).join(",")),`Target(${i})`}(Ti(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):ee.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of gr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=oy(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,gr(i),s)||i.endAt&&!function(o,a,l){const c=oy(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,gr(i),s))}(t,e)}function mM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zb(t){return(e,n)=>{let i=!1;for(const s of gr(t)){const r=gM(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function gM(t,e,n){const i=t.field.isKeyField()?ee.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Sr(l,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Hb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=new Qe(ee.comparator);function Ii(){return _M}const eT=new Qe(ee.comparator);function To(...t){let e=eT;for(const n of t)e=e.insert(n.key,n);return e}function tT(t){let e=eT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function vs(){return Mo()}function nT(){return Mo()}function Mo(){return new eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const yM=new Qe(ee.comparator),vM=new $t(ee.comparator);function me(...t){let e=vM;for(const n of t)e=e.add(n);return e}const EM=new $t(Ce);function wM(){return EM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function sT(t){return{integerValue:""+t}}function rT(t,e){return XO(e)?sT(e):iT(t,e)}/**
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
 */class Nu{constructor(){this._=void 0}}function bM(t,e,n){return t instanceof Ac?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&im(r)&&(r=sm(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Pr?aT(t,e):t instanceof xr?lT(t,e):function(s,r){const o=oT(s,r),a=uy(o)+uy(s.Te);return qd(o)&&qd(s.Te)?sT(a):iT(s.serializer,a)}(t,e)}function TM(t,e,n){return t instanceof Pr?aT(t,e):t instanceof xr?lT(t,e):n}function oT(t,e){return t instanceof ma?function(i){return qd(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Ac extends Nu{}class Pr extends Nu{constructor(e){super(),this.elements=e}}function aT(t,e){const n=cT(e);for(const i of t.elements)n.some(s=>ii(s,i))||n.push(i);return{arrayValue:{values:n}}}class xr extends Nu{constructor(e){super(),this.elements=e}}function lT(t,e){let n=cT(e);for(const i of t.elements)n=n.filter(s=>!ii(s,i));return{arrayValue:{values:n}}}class ma extends Nu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function uy(t){return nt(t.integerValue||t.doubleValue)}function cT(t){return rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.field=e,this.transform=n}}function IM(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Pr&&s instanceof Pr||i instanceof xr&&s instanceof xr?Cr(i.elements,s.elements,ii):i instanceof ma&&s instanceof ma?ii(i.Te,s.Te):i instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class AM{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function uT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cm(t.key,Wt.none()):new Ga(t.key,t.data,Wt.none());{const n=t.data,i=qt.empty();let s=new $t(Ot.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ss(t.key,i,new cn(s.toArray()),Wt.none())}}function RM(t,e,n){t instanceof Ga?function(s,r,o){const a=s.value.clone(),l=dy(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,r,o){if(!Fl(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=dy(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(hT(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,i){return t instanceof Ga?function(r,o,a,l){if(!Fl(r.precondition,o))return a;const c=r.value.clone(),u=fy(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof ss?function(r,o,a,l){if(!Fl(r.precondition,o))return a;const c=fy(r.fieldTransforms,l,o),u=o.data;return u.setAll(hT(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(r,o,a){return Fl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CM(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=oT(i.transform,s||null);r!=null&&(n===null&&(n=qt.empty()),n.set(i.field,r))}return n||null}function hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Cr(i,s,(r,o)=>IM(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Ou{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends Ou{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function hT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function dy(t,e,n){const i=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,TM(o,a,n[s]))}return i}function fy(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,bM(r,o,e))}return i}class cm extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dT extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&RM(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Lo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Lo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=nT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=uT(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(n,i)=>hy(n,i))&&Cr(this.baseMutations,e.baseMutations,(n,i)=>hy(n,i))}}class um{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Oe(e.mutations.length===i.length);let s=function(){return yM}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new um(e,n,i,s)}}/**
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
 */class kM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class PM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,_e;function fT(t){switch(t){default:return ne();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function pT(t){if(t===void 0)return bi("GRPC error has no .code"),k.UNKNOWN;switch(t){case tt.OK:return k.OK;case tt.CANCELLED:return k.CANCELLED;case tt.UNKNOWN:return k.UNKNOWN;case tt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case tt.INTERNAL:return k.INTERNAL;case tt.UNAVAILABLE:return k.UNAVAILABLE;case tt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case tt.NOT_FOUND:return k.NOT_FOUND;case tt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case tt.ABORTED:return k.ABORTED;case tt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case tt.DATA_LOSS:return k.DATA_LOSS;default:return ne()}}(_e=tt||(tt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class hm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Al}static getOrCreateInstance(){return Al===null&&(Al=new hm),Al}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Al=null;/**
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
 */function xM(){return new TextEncoder}/**
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
 */const DM=new mr([4294967295,4294967295],0);function py(t){const e=xM().encode(t),n=new LO;return n.update(e),new Uint8Array(n.digest())}function my(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new mr([n,i],0),new mr([s,r],0)]}class dm{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Io(`Invalid padding: ${n}`);if(i<0)throw new Io(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Io(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=mr.fromNumber(this.de)}Re(e,n,i){let s=e.add(n.multiply(mr.fromNumber(i)));return s.compare(DM)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=py(e),[i,s]=my(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);if(!this.Ve(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new dm(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=py(e),[i,s]=my(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(i,s,r);this.me(o)}}me(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Mu(se.min(),s,new Qe(Ce),Ii(),me())}}class Qa{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Qa(i,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,i,s){this.fe=e,this.removedTargetIds=n,this.key=i,this.ge=s}}class mT{constructor(e,n){this.targetId=e,this.pe=n}}class gT{constructor(e,n,i=Bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class gy{constructor(){this.ye=0,this.we=yy(),this.Se=Bt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=me(),n=me(),i=me();return this.we.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ne()}}),new Qa(this.Se,this.be,e,n,i)}xe(){this.De=!1,this.we=yy()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class NM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Ii(),this.$e=_y(),this.Ue=new Qe(Ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const i=this.He(n);switch(e.state){case 0:this.Je(n)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),i.Fe(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((i,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,i;const s=e.targetId,r=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Kd(a))if(r===0){const l=new ee(a.path);this.ze(s,l,dt.newNoDocument(l,se.min()))}else Oe(r===1);else{const l=this.et(s);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(s);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=hm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var y,v,w,b,T,A;const O={localCacheCount:f,existenceFilterCount:g.count},j=g.unchangedNames;return j&&(O.bloomFilter={applied:h===0,hashCount:(y=j==null?void 0:j.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(w=(v=j==null?void 0:j.bits)===null||v===void 0?void 0:v.bitmap)===null||w===void 0?void 0:w.length)!==null&&b!==void 0?b:0,padding:(A=(T=j==null?void 0:j.bits)===null||T===void 0?void 0:T.padding)!==null&&A!==void 0?A:0},d&&(O.bloomFilter.mightContain=d)),O}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=Ns(r).toUint8Array()}catch(h){if(h instanceof jb)return Rr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new dm(l,o,a)}catch(h){return Rr(h instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const i=this.qe.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Kd(a.target)){const l=new ee(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,dt.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let i=me();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const s=new Mu(e,n,this.Ue,this.Ke,i);return this.Ke=Ii(),this.$e=_y(),this.Ue=new Qe(Ce),s}Ge(e,n){if(!this.Je(e))return;const i=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,i),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,i){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),i&&(this.Ke=this.Ke.insert(n,i))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new gy,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new $t(Ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new gy),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function _y(){return new Qe(ee.comparator)}function yy(){return new Qe(ee.comparator)}const OM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LM=(()=>({and:"AND",or:"OR"}))();class VM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yd(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $M(t,e){return Rc(t,e.toTimestamp())}function dn(t){return Oe(!!t),se.fromTimestamp(function(n){const i=Ji(n);return new st(i.seconds,i.nanos)}(t))}function fm(t,e){return function(i){return new We(["projects",i.projectId,"databases",i.database])}(t).child("documents").child(e).canonicalString()}function yT(t){const e=We.fromString(t);return Oe(TT(e)),e}function Cc(t,e){return fm(t.databaseId,e.path)}function Vo(t,e){const n=yT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(vT(n))}function Xd(t,e){return fm(t.databaseId,e)}function FM(t){const e=yT(t);return e.length===4?We.emptyPath():vT(e)}function ga(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vT(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vy(t,e,n){return{name:Cc(t,e),fields:n.value.mapValue.fields}}function UM(t,e){return"found"in e?function(i,s){Oe(!!s.found),s.found.name,s.found.updateTime;const r=Vo(i,s.found.name),o=dn(s.found.updateTime),a=s.found.createTime?dn(s.found.createTime):se.min(),l=new qt({mapValue:{fields:s.found.fields}});return dt.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(i,s){Oe(!!s.missing),Oe(!!s.readTime);const r=Vo(i,s.missing),o=dn(s.readTime);return dt.newNoDocument(r,o)}(t,e):ne()}function BM(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Oe(u===void 0||typeof u=="string"),Bt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),Bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:pT(c.code);return new W(u,c.message||"")}(o);n=new gT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Vo(t,i.document.name),r=dn(i.document.updateTime),o=i.document.createTime?dn(i.document.createTime):se.min(),a=new qt({mapValue:{fields:i.document.fields}}),l=dt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Ul(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Vo(t,i.document),r=i.readTime?dn(i.readTime):se.min(),o=dt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Vo(t,i.document),r=i.removedTargetIds||[];n=new Ul([],r,s,null)}else{if(!("filter"in e))return ne();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new PM(s,r),a=i.targetId;n=new mT(a,o)}}return n}function ET(t,e){let n;if(e instanceof Ga)n={update:vy(t,e.key,e.value)};else if(e instanceof cm)n={delete:Cc(t,e.key)};else if(e instanceof ss)n={update:vy(t,e.key,e.data),updateMask:YM(e.fieldMask)};else{if(!(e instanceof dT))return ne();n={verify:Cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ma)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ne()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:$M(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ne()}(t,e.precondition)),n}function zM(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?dn(s.updateTime):dn(r);return o.isEqual(se.min())&&(o=dn(r)),new AM(o,s.transformResults||[])}(n,e))):[]}function HM(t,e){return{documents:[Xd(t,e.path)]}}function jM(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Xd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return bT(si.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Js(h.field),direction:KM(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Yd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qM(t){let e=FM(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Oe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=wT(h);return d instanceof si&&Gb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Oo(Zs(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ka(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ic(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ic(f,d)}(n.endAt)),hM(e,s,o,r,a,"F",l,c)}function WM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Zs(n.unaryFilter.field);return at.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Zs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zs(n.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Zs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return si.create(n.compositeFilter.filters.map(i=>wT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function KM(t){return OM[t]}function GM(t){return MM[t]}function QM(t){return LM[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return Ot.fromServerFormat(t.fieldPath)}function bT(t){return t instanceof at?function(n){if(n.op==="=="){if(ry(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NAN"}};if(sy(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ry(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NAN"}};if(sy(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(n.field),op:GM(n.op),value:n.value}}}(t):t instanceof si?function(n){const i=n.getFilters().map(s=>bT(s));return i.length===1?i[0]:{compositeFilter:{op:QM(n.op),filters:i}}}(t):ne()}function YM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,i,s,r=se.min(),o=se.min(),a=Bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.ct=e}}function JM(t){const e=qM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gd(e,e.limit,"L"):e}/**
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
 */class ZM{constructor(){this.sn=new eL}addToCollectionParentIndex(e,n){return this.sn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Xi.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Xi.min())}updateCollectionGroup(e,n,i){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class eL{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new $t(We.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new $t(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Dr(0)}static On(){return new Dr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(){this.changes=new eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?N.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Lo(i.mutation,s,cn.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,me()).next(()=>i))}getLocalViewOfDocuments(e,n,i=me()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=To();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=vs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,me()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ii();const o=Mo(),a=function(){return Mo()}();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ss)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Lo(u.mutation,c,u.mutation.getFieldMask(),st.now())):o.set(c.key,cn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new nL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Mo();let s=new Qe((o,a)=>o-a),r=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||cn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||me()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=nT();u.forEach(d=>{if(!r.has(d)){const f=uT(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):N.resolve(vs());let a=-1,l=r;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,me())).next(u=>({batchId:a,changes:tT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(i=>{let s=To();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=To();return this.indexManager.getCollectionParents(e,s).next(o=>N.forEach(o,a=>{const l=function(u,h){return new ku(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,dt.newInvalidDocument(c)))});let o=To();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Lo(c.mutation,l,cn.empty(),st.now()),Du(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return N.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:JM(s.bundledQuery),readTime:dn(s.readTime)}}(n)),N.resolve()}}/**
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
 */class rL{constructor(){this.overlays=new Qe(ee.comparator),this.cr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const i=vs();return N.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ht(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.cr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(i)),N.resolve()}getOverlaysForCollection(e,n,i){const s=vs(),r=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=vs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=vs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}ht(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(i.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new kM(n,i));let r=this.cr.get(n);r===void 0&&(r=me(),this.cr.set(n,r)),this.cr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.lr=new $t(ht.hr),this.Pr=new $t(ht.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const i=new ht(e,n);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Er(new ht(e,n))}dr(e,n){e.forEach(i=>this.removeReference(i,n))}Ar(e){const n=new ee(new We([])),i=new ht(n,e),s=new ht(n,e+1),r=[];return this.Pr.forEachInRange([i,s],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new ee(new We([])),i=new ht(n,e),s=new ht(n,e+1);let r=me();return this.Pr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ht(e,0),i=this.lr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ht{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return ee.comparator(e.key,n.key)||Ce(e.mr,n.mr)}static Ir(e,n){return Ce(e.mr,n.mr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new $t(ht.hr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SM(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new ht(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.wr(i),r=s<0?0:s;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([i,s],o=>{const a=this.yr(o.mr);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new $t(Ce);return n.forEach(s=>{const r=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{i=i.add(a.mr)})}),N.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ee.isDocumentKey(r)||(r=r.child(""));const o=new ht(new ee(r),0);let a=new $t(Ce);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),N.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(i=>{const s=this.yr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return N.forEach(n.mutations,s=>{const r=new ht(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,n){const i=new ht(n,0),s=this.pr.firstAfterOrEqual(i);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.Dr=e,this.docs=function(){return new Qe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return N.resolve(i?i.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let i=Ii();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():dt.newInvalidDocument(s))}),N.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ii();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GO(KO(u),i)<=0||(s.has(u.key)||Du(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ne()}vr(e,n){return N.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new lL(this)}getSize(e){return N.resolve(this.size)}}class lL extends tL{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(i)}),N.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.persistence=e,this.Cr=new eo(n=>om(n),am),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new pm,this.targetCount=0,this.Or=Dr.xn()}forEachTarget(e,n){return this.Cr.forEach((i,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Fr&&(this.Fr=n),N.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Dr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Ln(n),N.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(r).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cr.get(n)||null;return N.resolve(i)}addMatchingKeys(e,n,i){return this.Mr.Tr(n,i),N.resolve()}removeMatchingKeys(e,n,i){this.Mr.dr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),N.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Mr.Vr(n);return N.resolve(i)}containsKey(e,n){return N.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n){this.Nr={},this.overlays={},this.Br=new nm(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new cL(this),this.indexManager=new ZM,this.remoteDocumentCache=function(s){return new aL(s)}(i=>this.referenceDelegate.qr(i)),this.serializer=new XM(n),this.Qr=new sL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Nr[e.toKey()];return i||(i=new oL(n,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,i){Q("MemoryPersistence","Starting transaction:",e);const s=new hL(this.Br.next());return this.referenceDelegate.Kr(),i(s).next(r=>this.referenceDelegate.$r(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ur(e,n){return N.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,n)))}}class hL extends YO{constructor(e){super(),this.currentSequenceNumber=e}}class mm{constructor(e){this.persistence=e,this.Wr=new pm,this.Gr=null}static zr(e){return new mm(e)}get jr(){if(this.Gr)return this.Gr;throw ne()}addReference(e,n,i){return this.Wr.addReference(i,n),this.jr.delete(i.toString()),N.resolve()}removeReference(e,n,i){return this.Wr.removeReference(i,n),this.jr.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.jr.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.jr,i=>{const s=ee.fromPath(i);return this.Hr(e,s).next(r=>{r||n.removeEntry(s,se.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(i=>{i?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return N.or([()=>N.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Li=i,this.ki=s}static qi(e,n){let i=me(),s=me();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new gm(e,n.fromCache,i,s)}}/**
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
 */class dL{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.$i(e,n).next(r=>r||this.Ui(e,n,s,i)).next(r=>r||this.Wi(e,n))}$i(e,n){if(cy(n))return N.resolve(null);let i=Ti(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gd(n,null,"F"),i=Ti(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=me(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Gd(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,i,s){return cy(n)||s.isEqual(se.min())?this.Wi(e,n):this.Ki.getDocuments(e,i).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,i,s)?this.Wi(e,n):(ey()<=be.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qd(n)),this.ji(e,o,n,WO(s,-1)))})}Gi(e,n){let i=new $t(Zb(e));return n.forEach((s,r)=>{Du(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Wi(e,n){return ey()<=be.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Qd(n)),this.Ki.getDocumentsMatchingQuery(e,n,Xi.min())}ji(e,n,i,s){return this.Ki.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Qe(Ce),this.Yi=new eo(r=>om(r),am),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iL(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function pL(t,e,n,i){return new fL(t,e,n,i)}async function IT(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.es(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=me();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function mL(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=N.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const v=c.docVersions.get(g);Oe(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function AT(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function gL(t,e){const n=ue(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Bt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(y,v,w){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Ii(),c=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(_L(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(se.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function _L(t,e,n){let i=me(),s=me();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ii();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:s}})}function yL(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function vL(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.kr.getTargetData(i,e).next(r=>r?(s=r,N.resolve(s)):n.kr.allocateTargetId(i).next(o=>(s=new Fi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.kr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function Jd(t,e,n){const i=ue(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wa(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Ey(t,e,n){const i=ue(t);let s=se.min(),r=me();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=ue(l),d=h.Yi.get(u);return d!==void 0?N.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,Ti(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?r:me())).next(a=>(EL(i,mM(e),a),{documents:a,ss:r})))}function EL(t,e,n){let i=t.Zi.get(e)||se.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Zi.set(e,i)}class wy{constructor(){this.activeTargetIds=wM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wL{constructor(){this.Hs=new wy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,i){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new wy,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bL{Ys(e){}shutdown(){}}/**
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
 */class by{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rl=null;function Dh(){return Rl===null?Rl=function(){return 268435456+Math.round(2147483648*Math.random())}():Rl++,"0x"+Rl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class AL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=i+"://"+n.host,this.Eo=`projects/${s}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Ro(){return!1}Vo(n,i,s,r,o){const a=Dh(),l=this.mo(n,i);Q("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,s).then(u=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Rr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,i,s,r,o,a){return this.Vo(n,i,s,r,o)}fo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>n[o]=r),s&&s.headers.forEach((r,o)=>n[o]=r)}mo(n,i){const s=TL[n];return`${this.To}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,i,s){const r=Dh();return new Promise((o,a)=>{const l=new MO;l.setWithCredentials(!0),l.listenOnce(DO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xh.NO_ERROR:const u=l.getResponseJson();Q(Ct,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case xh.TIMEOUT:Q(Ct,`RPC '${e}' ${r} timed out`),a(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case xh.HTTP_ERROR:const h=l.getStatus();if(Q(Ct,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(w)>=0?w:k.UNKNOWN}(f.status);a(new W(g,f.message))}else a(new W(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(k.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(Ct,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);Q(Ct,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Dh(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PO(),a=xO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new OO({})),this.fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");Q(Ct,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new IL({so:v=>{f?Q(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(Q(Ct,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),Q(Ct,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,w,b)=>{v.listen(w,T=>{try{b(T)}catch(A){setTimeout(()=>{throw A},0)}})};return y(h,bl.EventType.OPEN,()=>{f||Q(Ct,`RPC '${e}' stream ${s} transport opened.`)}),y(h,bl.EventType.CLOSE,()=>{f||(f=!0,Q(Ct,`RPC '${e}' stream ${s} transport closed`),g.Po())}),y(h,bl.EventType.ERROR,v=>{f||(f=!0,Rr(Ct,`RPC '${e}' stream ${s} transport errored:`,v),g.Po(new W(k.UNAVAILABLE,"The operation could not be completed")))}),y(h,bl.EventType.MESSAGE,v=>{var w;if(!f){const b=v.data[0];Oe(!!b);const T=b,A=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(A){Q(Ct,`RPC '${e}' stream ${s} received error:`,A);const O=A.status;let j=function(ae){const Ae=tt[ae];if(Ae!==void 0)return pT(Ae)}(O),ie=A.message;j===void 0&&(j=k.INTERNAL,ie="Unknown error status: "+O+" with message "+A.message),f=!0,g.Po(new W(j,ie)),h.close()}else Q(Ct,`RPC '${e}' stream ${s} received:`,b),g.Io(b)}}),y(a,NO.STAT_EVENT,v=>{v.stat===J_.PROXY?Q(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===J_.NOPROXY&&Q(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function Nh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new VM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.Bo=i,this.Lo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new _m(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(bi(n.toString()),bi("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.ko===n&&this.e_(i,s)},i=>{e(()=>{const s=new W(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(s)})})}e_(e,n){const i=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{i(()=>this.t_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RL extends RT{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=BM(this.serializer,e),i=function(r){if(!("targetChange"in r))return se.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?dn(o.readTime):se.min()}(e);return this.listener.r_(n,i)}i_(e){const n={};n.database=ga(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Kd(l)?{documents:HM(r,l)}:{query:jM(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_T(r,o.resumeToken);const c=Yd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Rc(r,o.snapshotVersion.toTimestamp());const c=Yd(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=WM(this.serializer,e);i&&(n.labels=i),this.Ho(n)}s_(e){const n={};n.database=ga(this.serializer),n.removeTarget=e,this.Ho(n)}}class CL extends RT{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=zM(e.writeResults,e.commitTime),i=dn(e.commitTime);return this.listener.u_(i,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ga(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>ET(this.serializer,i))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Vo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(k.UNKNOWN,s.toString())})}yo(e,n,i,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(k.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class kL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(bi(n),this.d_=!1):Q("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{js(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.y_.add(4),await Ya(c),c.b_.set("Unknown"),c.y_.delete(4),await Vu(c)}(this))})}),this.b_=new kL(i,s)}}async function Vu(t){if(js(t))for(const e of t.w_)await e(!0)}async function Ya(t){for(const e of t.w_)await e(!1)}function CT(t,e){const n=ue(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Em(n)?vm(n):to(n).Uo()&&ym(n,e))}function ST(t,e){const n=ue(t),i=to(n);n.p_.delete(e),i.Uo()&&kT(n,e),n.p_.size===0&&(i.Uo()?i.zo():js(n)&&n.b_.set("Unknown"))}function ym(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}to(t).i_(e)}function kT(t,e){t.D_.Be(e),to(t).s_(e)}function vm(t){t.D_=new NM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),to(t).start(),t.b_.A_()}function Em(t){return js(t)&&!to(t).$o()&&t.p_.size>0}function js(t){return ue(t).y_.size===0}function PT(t){t.D_=void 0}async function xL(t){t.p_.forEach((e,n)=>{ym(t,e)})}async function DL(t,e){PT(t),Em(t)?(t.b_.m_(e),vm(t)):t.b_.set("Unknown")}async function NL(t,e,n){if(t.b_.set("Online"),e instanceof gT&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Sc(t,i)}else if(e instanceof Ul?t.D_.We(e):e instanceof mT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(se.min()))try{const i=await AT(t.localStore);n.compareTo(i)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(Bt.EMPTY_BYTE_STRING,u.snapshotVersion)),kT(r,l);const h=new Fi(u.target,l,c,u.sequenceNumber);ym(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await Sc(t,i)}}async function Sc(t,e,n){if(!Wa(e))throw e;t.y_.add(1),await Ya(t),t.b_.set("Offline"),n||(n=()=>AT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Vu(t)})}function xT(t,e){return e().catch(n=>Sc(t,n,e))}async function $u(t){const e=ue(t),n=Zi(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;OL(e);)try{const s=await yL(e.localStore,i);if(s===null){e.g_.length===0&&n.zo();break}i=s.batchId,ML(e,s)}catch(s){await Sc(e,s)}DT(e)&&NT(e)}function OL(t){return js(t)&&t.g_.length<10}function ML(t,e){t.g_.push(e);const n=Zi(t);n.Uo()&&n.__&&n.a_(e.mutations)}function DT(t){return js(t)&&!Zi(t).$o()&&t.g_.length>0}function NT(t){Zi(t).start()}async function LL(t){Zi(t).l_()}async function VL(t){const e=Zi(t);for(const n of t.g_)e.a_(n.mutations)}async function $L(t,e,n){const i=t.g_.shift(),s=um.from(i,e,n);await xT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $u(t)}async function FL(t,e){e&&Zi(t).__&&await async function(i,s){if(function(o){return fT(o)&&o!==k.ABORTED}(s.code)){const r=i.g_.shift();Zi(i).Go(),await xT(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await $u(i)}}(t,e),DT(t)&&NT(t)}async function Ty(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=js(n);n.y_.add(3),await Ya(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Vu(n)}async function UL(t,e){const n=ue(t);e?(n.y_.delete(2),await Vu(n)):e||(n.y_.add(2),await Ya(n),n.b_.set("Unknown"))}function to(t){return t.v_||(t.v_=function(n,i,s){const r=ue(n);return r.P_(),new RL(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:xL.bind(null,t),uo:DL.bind(null,t),r_:NL.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Em(t)?vm(t):t.b_.set("Unknown")):(await t.v_.stop(),PT(t))})),t.v_}function Zi(t){return t.C_||(t.C_=function(n,i,s){const r=ue(n);return r.P_(),new CL(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{_o:LL.bind(null,t),uo:FL.bind(null,t),c_:VL.bind(null,t),u_:$L.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await $u(t)):(await t.C_.stop(),t.g_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new wm(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bm(t,e){if(bi("AsyncQueue",`${e}: ${t}`),Wa(t))return new W(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ee.comparator(n.key,i.key):(n,i)=>ee.comparator(n.key,i.key),this.keyedMap=To(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new _r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new _r;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.F_=new Qe(ee.comparator)}track(e){const n=e.doc.key,i=this.F_.get(n);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(n,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(n):e.type===1&&i.type===2?this.F_=this.F_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ne():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Nr{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Nr(e,n,_r.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(){this.x_=void 0,this.listeners=[]}}class zL{constructor(){this.queries=new eo(e=>Jb(e),xu),this.onlineState="Unknown",this.O_=new Set}}async function Tm(t,e){const n=ue(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new BL),s)try{r.x_=await n.onListen(i)}catch(o){const a=bm(o,`Initialization of query '${Qd(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&Am(n)}async function Im(t,e){const n=ue(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function HL(t,e){const n=ue(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(s)&&(i=!0);o.x_=s}}i&&Am(n)}function jL(t,e,n){const i=ue(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Am(t){t.O_.forEach(e=>{e.next()})}class Rm{constructor(e,n,i){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Nr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.key=e}}class MT{constructor(e){this.key=e}}class qL{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=me(),this.mutatedKeys=me(),this.na=Zb(e),this.ra=new _r(this.na)}get ia(){return this.X_}sa(e,n){const i=n?n.oa:new Iy,s=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Du(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(i.track({type:3,doc:f}),v=!0):this._a(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return g(d)-g(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Nr(this.query,e.ra,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Iy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=me(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const n=[];return e.forEach(i=>{this.ta.has(i)||n.push(new MT(i))}),this.ta.forEach(i=>{e.has(i)||n.push(new OT(i))}),n}ha(e){this.X_=e.ss,this.ta=me();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Nr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class WL{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class KL{constructor(e){this.key=e,this.Ia=!1}}class GL{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new eo(a=>Jb(a),xu),this.da=new Map,this.Aa=new Set,this.Ra=new Qe(ee.comparator),this.Va=new Map,this.ma=new pm,this.fa={},this.ga=new Map,this.pa=Dr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function QL(t,e){const n=rV(t);let i,s;const r=n.Ea.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Pa();else{const o=await vL(n.localStore,Ti(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await YL(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&CT(n.remoteStore,o)}return s}async function YL(t,e,n,i,s){t.wa=(h,d,f)=>async function(y,v,w,b){let T=v.view.sa(w);T.zi&&(T=await Ey(y.localStore,v.query,!1).then(({documents:j})=>v.view.sa(j,T)));const A=b&&b.targetChanges.get(v.targetId),O=v.view.applyChanges(T,y.isPrimaryClient,A);return Ry(y,v.targetId,O.ca),O.snapshot}(t,h,d,f);const r=await Ey(t.localStore,e,!0),o=new qL(e,r.ss),a=o.sa(r.documents),l=Qa.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Ry(t,n,c.ca);const u=new WL(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function XL(t,e){const n=ue(t),i=n.Ea.get(e),s=n.da.get(i.targetId);if(s.length>1)return n.da.set(i.targetId,s.filter(r=>!xu(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Jd(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),ST(n.remoteStore,i.targetId),Zd(n,i.targetId)}).catch(qa)):(Zd(n,i.targetId),await Jd(n.localStore,i.targetId,!0))}async function JL(t,e,n){const i=oV(t);try{const s=await function(o,a){const l=ue(o),c=st.now(),u=a.reduce((f,g)=>f.add(g.key),me());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Ii(),y=me();return l.Xi.getEntries(f,u).next(v=>{g=v,g.forEach((w,b)=>{b.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const w=[];for(const b of a){const T=CM(b,h.get(b.key).overlayedDocument);T!=null&&w.push(new ss(b.key,T,qb(T.value.mapValue),Wt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(v=>{d=v;const w=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,w)})}).then(()=>({batchId:d.batchId,changes:tT(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new Qe(Ce)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(i,s.batchId,n),await Xa(i,s.changes),await $u(i.remoteStore)}catch(s){const r=bm(s,"Failed to persist write");n.reject(r)}}async function LT(t,e){const n=ue(t);try{const i=await gL(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Va.get(r);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Oe(o.Ia):s.removedDocuments.size>0&&(Oe(o.Ia),o.Ia=!1))}),await Xa(n,i,e)}catch(i){await qa(i)}}function Ay(t,e,n){const i=ue(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Am(l)}(i.eventManager,e),s.length&&i.Ta.r_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ZL(t,e,n){const i=ue(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Va.get(e),r=s&&s.key;if(r){let o=new Qe(ee.comparator);o=o.insert(r,dt.newNoDocument(r,se.min()));const a=me().add(r),l=new Mu(se.min(),new Map,new Qe(Ce),o,a);await LT(i,l),i.Ra=i.Ra.remove(r),i.Va.delete(e),Cm(i)}else await Jd(i.localStore,e,!1).then(()=>Zd(i,e,n)).catch(qa)}async function eV(t,e){const n=ue(t),i=e.batch.batchId;try{const s=await mL(n.localStore,e);$T(n,i,null),VT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Xa(n,s)}catch(s){await qa(s)}}async function tV(t,e,n){const i=ue(t);try{const s=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Oe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);$T(i,e,n),VT(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Xa(i,s)}catch(s){await qa(s)}}function VT(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function $T(t,e,n){const i=ue(t);let s=i.fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fa[i.currentUser.toKey()]=s}}function Zd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(i=>{t.ma.containsKey(i)||FT(t,i)})}function FT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(ST(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Cm(t))}function Ry(t,e,n){for(const i of n)i instanceof OT?(t.ma.addReference(i.key,e),nV(t,i)):i instanceof MT?(Q("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||FT(t,i.key)):ne()}function nV(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(Q("SyncEngine","New document in limbo: "+n),t.Aa.add(i),Cm(t))}function Cm(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new ee(We.fromString(e)),i=t.pa.next();t.Va.set(i,new KL(n)),t.Ra=t.Ra.insert(n,i),CT(t.remoteStore,new Fi(Ti(Pu(n.path)),i,"TargetPurposeLimboResolution",nm.ae))}}async function Xa(t,e,n){const i=ue(t),s=[],r=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=gm.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Ta.r_(s),await async function(l,c){const u=ue(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,d=>N.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>N.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Wa(h))throw h;Q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,y)}}}(i.localStore,r))}async function iV(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const i=await IT(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new W(k.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Xa(n,i.ts)}}function sV(t,e){const n=ue(t),i=n.Va.get(e);if(i&&i.Ia)return me().add(i.key);{let s=me();const r=n.da.get(e);if(!r)return s;for(const o of r){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function rV(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZL.bind(null,e),e.Ta.r_=HL.bind(null,e.eventManager),e.Ta.Sa=jL.bind(null,e.eventManager),e}function oV(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tV.bind(null,e),e}class Cy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pL(this.persistence,new dL,e.initialUser,this.serializer)}createPersistence(e){return new uL(mm.zr,this.serializer)}createSharedClientState(e){return new wL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ay(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=iV.bind(null,this.syncEngine),await UL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zL}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),i=function(r){return new AL(r)}(e.databaseInfo);return function(r,o,a,l){return new SL(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,a){return new PL(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ay(this.syncEngine,n,0),function(){return by.v()?new by:new bL}())}createSyncEngine(e,n){return function(s,r,o,a,l,c,u){const h=new GL(s,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const i=ue(n);Q("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await Ya(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):bi("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new W(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const o=ue(s),a=ga(o.serializer)+"/documents",l={documents:r.map(d=>Cc(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=UM(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());Oe(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new cm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=ee.fromPath(i);this.mutations.push(new dT(s,this.precondition(s)))}),await async function(i,s){const r=ue(i),o=ga(r.serializer)+"/documents",a={writes:s.map(l=>ET(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ne();n=se.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new W(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?Wt.exists(!1):Wt.updateTime(n):Wt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new W(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Wt.updateTime(n)}return Wt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class cV{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.qa=i.maxAttempts,this.Ko=new _m(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new lV(this.datastore),n=this.Ka(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.$a(s)}))}).catch(i=>{this.$a(i)})})}Ka(e){try{const n=this.updateFunction(e);return!Ka(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!fT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=zb.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=bm(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Oh(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await IT(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dV(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Ty(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Ty(e.remoteStore,r)),t._onlineComponents=e}function hV(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hV(n))throw n;Rr("Error using user provided cache. Falling back to memory cache: "+n),await Oh(t,new Cy)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Oh(t,new Cy);return t._offlineComponents}async function km(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Sy(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Sy(t,new aV))),t._onlineComponents}function fV(t){return km(t).then(e=>e.syncEngine)}function pV(t){return km(t).then(e=>e.datastore)}async function kc(t){const e=await km(t),n=e.eventManager;return n.onListen=QL.bind(null,e.syncEngine),n.onUnlisten=XL.bind(null,e.syncEngine),n}function mV(t,e,n={}){const i=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Sm({next:d=>{o.enqueueAndForget(()=>Im(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Rm(Pu(a.path),u,{includeMetadataChanges:!0,W_:!0});return Tm(r,h)}(await kc(t),t.asyncQueue,e,n,i)),i.promise}function gV(t,e,n={}){const i=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Sm({next:d=>{o.enqueueAndForget(()=>Im(r,h)),d.fromCache&&l.source==="server"?c.reject(new W(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Rm(a,u,{includeMetadataChanges:!0,W_:!0});return Tm(r,h)}(await kc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function UT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e,n){if(!n)throw new W(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _V(t,e,n,i){if(e===!0&&i===!0)throw new W(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Py(t){if(!ee.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xy(t){if(ee.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pm(t);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_V("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UT((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new VO;switch(i.type){case"firstParty":return new BO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=ky.get(n);i&&(Q("ComponentProvider","Removing Datastore"),ky.delete(n),i.terminate())}(this),Promise.resolve()}}function yV(t,e,n,i={}){var s;const r=(t=fn(t,Fu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=kt.MOCK_USER;else{a=HC(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new kt(c)}t._authCredentials=new $O(new Bb(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ja(this.firestore,e,this._query)}}class Ft{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Ki extends Ja{constructor(e,n,i){super(e,n,Pu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new ee(e))}withConverter(e){return new Ki(this.firestore,e,this._path)}}function zT(t,e,...n){if(t=mt(t),BT("collection","path",e),t instanceof Fu){const i=We.fromString(e,...n);return xy(i),new Ki(t,null,i)}{if(!(t instanceof Ft||t instanceof Ki))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return xy(i),new Ki(t.firestore,null,i)}}function zn(t,e,...n){if(t=mt(t),arguments.length===1&&(e=zb.V()),BT("doc","path",e),t instanceof Fu){const i=We.fromString(e,...n);return Py(i),new Ft(t,null,new ee(i))}{if(!(t instanceof Ft||t instanceof Ki))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return Py(i),new Ft(t.firestore,t instanceof Ki?t.converter:null,new ee(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new _m(this,"async_queue_retry"),this.Xa=()=>{const n=Nh();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Nh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Jn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Wa(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw bi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=wm.createAndSchedule(this,e,n,i,r=>this.ru(r));return this.ja.push(s),s}eu(){this.Ha&&ne()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Ny(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends Fu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new vV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HT(this),this._firestoreClient.terminate()}}function EV(t,e){const n=typeof t=="object"?t:tp(),i=typeof t=="string"?t:e||"(default)",s=ep(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=zC("firestore");r&&yV(s,...r)}return s}function Za(t){return t._firestoreClient||HT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HT(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new ZO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,UT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uV(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(Bt.fromBase64String(e))}catch(n){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=/^__.*__$/;class bV{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}class jT{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Bu{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.Pu(e),s}Iu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:i,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Pc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(qT(this.uu)&&wV.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class TV{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Lu(e)}Ru(e,n,i,s=!1){return new Bu({uu:e,methodName:n,Au:i,path:Ot.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xm(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new TV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WT(t,e,n,i,s,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,s);Dm("Data must be an object, but it was:",o,i);const a=YT(i,o);let l,c;if(r.merge)l=new cn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ef(e,h,n);if(!o.contains(d))throw new W(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JT(u,d)||u.push(d)}l=new cn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new bV(new qt(a),l,c)}class zu extends no{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}function KT(t,e,n){return new Bu({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class IV extends no{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=KT(this,e,!0),i=this.Vu.map(r=>io(r,n)),s=new Pr(i);return new lm(e.path,s)}isEqual(e){return this===e}}class AV extends no{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=KT(this,e,!0),i=this.Vu.map(r=>io(r,n)),s=new xr(i);return new lm(e.path,s)}isEqual(e){return this===e}}class RV extends no{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new ma(e.serializer,rT(e.serializer,this.mu));return new lm(e.path,n)}isEqual(e){return this===e}}function GT(t,e,n,i){const s=t.Ru(1,e,n);Dm("Data must be an object, but it was:",s,i);const r=[],o=qt.empty();Hs(i,(l,c)=>{const u=Nm(e,l,n);c=mt(c);const h=s.Iu(u);if(c instanceof zu)r.push(u);else{const d=io(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new cn(r);return new jT(o,a,s.fieldTransforms)}function QT(t,e,n,i,s,r){const o=t.Ru(1,e,n),a=[ef(e,i,n)],l=[s];if(r.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ef(e,r[d])),l.push(r[d+1]);const c=[],u=qt.empty();for(let d=a.length-1;d>=0;--d)if(!JT(c,a[d])){const f=a[d];let g=l[d];g=mt(g);const y=o.Iu(f);if(g instanceof zu)c.push(f);else{const v=io(g,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new cn(c);return new jT(u,h,o.fieldTransforms)}function io(t,e){if(XT(t=mt(t)))return Dm("Unsupported field value:",e,t),YT(t,e);if(t instanceof no)return function(i,s){if(!qT(s.uu))throw s.Eu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=io(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return rT(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=st.fromDate(i);return{timestampValue:Rc(s.serializer,r)}}if(i instanceof st){const r=new st(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Rc(s.serializer,r)}}if(i instanceof Uu)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ms)return{bytesValue:_T(s.serializer,i._byteString)};if(i instanceof Ft){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fm(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Eu(`Unsupported field value: ${Pm(i)}`)}(t,e)}function YT(t,e){const n={};return Hb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(t,(i,s)=>{const r=io(s,e.lu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function XT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Uu||t instanceof Ms||t instanceof Ft||t instanceof no)}function Dm(t,e,n){if(!XT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Pm(n);throw i==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function ef(t,e,n){if((e=mt(e))instanceof el)return e._internalPath;if(typeof e=="string")return Nm(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const CV=new RegExp("[~\\*/\\[\\]]");function Nm(t,e,n){if(e.search(CV)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new el(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new W(k.INVALID_ARGUMENT,a+t+l)}function JT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ZT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SV extends xc{data(){return super.data()}}function ZT(t,e){return typeof e=="string"?Nm(t,e):e instanceof el?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tI{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Hs(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Uu(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=sm(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Ji(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=We.fromString(e);Oe(TT(i));const s=new fa(i.get(1),i.get(3)),r=new ee(i.popFirst(5));return s.isEqual(n)||bi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class kV extends tI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Om extends xc{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(ZT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Bl extends Om{data(e={}){return super.data(e)}}class iI{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new or(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Bl(this._firestore,this._userDataWriter,i.key,i,new or(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Bl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new or(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Bl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new or(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:PV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){t=fn(t,Ft);const e=fn(t.firestore,es);return mV(Za(e),t._key).then(n=>rI(e,t,n))}class ju extends tI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function xV(t){t=fn(t,Ja);const e=fn(t.firestore,es),n=Za(e),i=new ju(e);return eI(t._query),gV(n,t._query).then(s=>new iI(e,i,t,s))}function Oy(t,e,n){t=fn(t,Ft);const i=fn(t.firestore,es),s=nI(t.converter,e,n);return sI(i,[WT(xm(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function DV(t,e,n,...i){t=fn(t,Ft);const s=fn(t.firestore,es),r=xm(s);let o;return o=typeof(e=mt(e))=="string"||e instanceof el?QT(r,"updateDoc",t._key,e,n,i):GT(r,"updateDoc",t._key,e),sI(s,[o.toMutation(t._key,Wt.exists(!0))])}function Mm(t,...e){var n,i,s;t=mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ny(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ny(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Ft)c=fn(t.firestore,es),u=Pu(t._key.path),l={next:h=>{e[o]&&e[o](rI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=fn(t,Ja);c=fn(h.firestore,es),u=h._query;const d=new ju(c);l={next:f=>{e[o]&&e[o](new iI(c,d,h,f))},error:e[o+1],complete:e[o+2]},eI(t._query)}return function(d,f,g,y){const v=new Sm(y),w=new Rm(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>Tm(await kc(d),w)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Im(await kc(d),w))}}(Za(c),u,a,l)}function sI(t,e){return function(i,s){const r=new Jn;return i.asyncQueue.enqueueAndForget(async()=>JL(await fV(i),s,r)),r.promise}(Za(t),e)}function rI(t,e,n){const i=n.docs.get(e._key),s=new ju(t);return new Om(t,s,e._key,i,new or(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const NV={maxAttempts:5};function po(t,e){if((t=mt(t)).firestore!==e)throw new W(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OV extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=xm(n)}get(n){const i=po(n,this._firestore),s=new kV(this._firestore);return this._transaction.lookup([i._key]).then(r=>{if(!r||r.length!==1)return ne();const o=r[0];if(o.isFoundDocument())return new xc(this._firestore,s,o.key,o,i.converter);if(o.isNoDocument())return new xc(this._firestore,s,i._key,null,i.converter);throw ne()})}set(n,i,s){const r=po(n,this._firestore),o=nI(r.converter,i,s),a=WT(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,s);return this._transaction.set(r._key,a),this}update(n,i,s,...r){const o=po(n,this._firestore);let a;return a=typeof(i=mt(i))=="string"||i instanceof el?QT(this._dataReader,"Transaction.update",o._key,i,s,r):GT(this._dataReader,"Transaction.update",o._key,i),this._transaction.update(o._key,a),this}delete(n){const i=po(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=po(e,this._firestore),i=new ju(this._firestore);return super.get(e).then(s=>new Om(this._firestore,i,n._key,s._document,new or(!1,!1),n.converter))}}function MV(t,e,n){t=fn(t,es);const i=Object.assign(Object.assign({},NV),n);return function(r){if(r.maxAttempts<1)throw new W(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(r,o,a){const l=new Jn;return r.asyncQueue.enqueueAndForget(async()=>{const c=await pV(r);new cV(r.asyncQueue,c,a,o,l).run()}),l.promise}(Za(t),s=>e(new OV(t,s)),i)}function LV(...t){return new IV("arrayUnion",t)}function VV(...t){return new AV("arrayRemove",t)}function $V(t){return new RV("increment",t)}(function(e,n=!0){(function(s){Zr=s})(ts),ti(new xn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new es(new FO(i.getProvider("auth-internal")),new HO(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),un(Z_,"4.1.0",e),un(Z_,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",FV="storageBucket",UV=2*60*1e3,BV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends oi{constructor(e,n,i=0){super(Mh(e),`Firebase Storage: ${n} (${Mh(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ai.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ri;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ri||(ri={}));function Mh(t){return"storage/"+t}function zV(){const t="An unknown error occurred, please check the error payload for server response.";return new ai(ri.UNKNOWN,t)}function HV(){return new ai(ri.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jV(){return new ai(ri.CANCELED,"User canceled the upload/download.")}function qV(t){return new ai(ri.INVALID_URL,"Invalid URL '"+t+"'.")}function WV(t){return new ai(ri.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function My(t){return new ai(ri.INVALID_ARGUMENT,t)}function aI(){return new ai(ri.APP_DELETED,"The Firebase app was deleted.")}function KV(t){return new ai(ri.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(i.path==="")return i;throw WV(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",w=new RegExp(`^https?://${y}/${s}/${v}`,"i"),T=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<T.length;A++){const O=T[A],j=O.regex.exec(e);if(j){const ie=j[O.indices.bucket];let Y=j[O.indices.path];Y||(Y=""),i=new Cn(ie,Y),O.postModify(i);break}}if(i==null)throw qV(e);return i}}class GV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...w){if(c){d();return}if(v){d(),u.call(null,v,...w);return}if(l()||o){d(),u.call(null,v,...w);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,h(T)}let g=!1;function y(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function YV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(t){return t!==void 0}function Ly(t,e,n,i){if(i<e)throw My(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw My(`Invalid value for '${t}'. Expected ${n} or less.`)}function JV(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dc||(Dc={}));/**
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
 */function ZV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Cl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Dc.NO_ERROR,l=r.getStatus();if(!a||ZV(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Dc.ABORT;i(!1,new Cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Cl(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());XV(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=zV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?aI():jV();o(l)}else{const l=HV();o(l)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=QV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function t$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function n$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function i$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function s$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function r$(t,e,n,i,s,r,o=!0){const a=JV(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return i$(c,e),t$(c,n),n$(c,r),s$(c,i),new e$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function a$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Nc{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nc(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return a$(this._location.path)}get storage(){return this._service}get parent(){const e=o$(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new Nc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw KV(e)}}function Vy(t,e){const n=e==null?void 0:e[FV];return n==null?null:Cn.makeFromBucketSpec(n,t)}class l${constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UV,this._maxUploadRetryTime=BV,this._requests=new Set,s!=null?this._bucket=Cn.makeFromBucketSpec(s,this._host):this._bucket=Vy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=Vy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ly("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ly("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new GV(aI());{const o=r$(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const $y="@firebase/storage",Fy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$="storage";function u$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new l$(n,i,s,e,ts)}function h$(){ti(new xn(c$,u$,"PUBLIC").setMultipleInstances(!0)),un($y,Fy,""),un($y,Fy,"esm2017")}h$();const Lh=new WeakMap;function lI(t,e){return Lh.has(e)||Lh.set(e,t||{f:{},r:{},s:{},u:{}}),Lh.get(e)}function d$(t,e,n,i){if(!t)return n;const[s,r]=cI(t);if(!s)return n;const o=lI(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function f$(t,e,n,i){if(!t)return;const[s,r]=cI(t);if(!s)return;const o=lI(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Hn),a}function cI(t){return Vx(t)||$x(t)?["f",t.path]:Fx(t)?["r",t.toString()]:Ux(t)?["s",t.toString()]:[]}const Vh=new WeakMap;function p$(t,e,n){const i=Pa();Vh.has(i)||Vh.set(i,new Map);const s=Vh.get(i),r=f$(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):Hn}const m$={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function tf(t,e,n,i){if(!Mx(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof st||g instanceof Uu)h[f]=g;else if(hp(g)){const y=c+f;h[f]=y in n?l[f]:g.path,d[y]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let y=0;y<g.length;y++){const v=g[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else Fs(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",s),s}const Lm={reset:!1,wait:!0,maxRefDepth:2,converter:m$,snapshotOptions:{serverTimestamps:"estimate"}};function Oc(t){for(const e in t)t[e].unsub()}function nf(t,e,n,i,s,r,o,a,l){const[c,u]=tf(i.data(t.snapshotOptions),up(e,n),s,t);r.set(e,n,c),sf(t,e,n,s,u,r,o,a,l)}function g$({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=Hn;return a.once?Hu(t).then(u=>{u.exists()?nf(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=Mm(t,u=>{u.exists()?nf(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Oc(l)}}function sf(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=i[y],w=s[y],b=`${n}.${y}`;if(f[b]=!0,v)if(v.path!==w.path)v.unsub();else return;i[y]={data:()=>up(e,b),unsub:g$({ref:w,target:e,path:b,depth:o,ops:r,resolve:g.bind(null,b),reject:l},t),path:w.path}})}function _$(t,e,n,i,s,r){const o=Object.assign({},Lm,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Ue(c?[]:t.value);c||n.set(t,h,[]);const f=i;let g,y=Hn;const v=[],w={added:({newIndex:T,doc:A})=>{v.splice(T,0,Object.create(null));const O=v[T],[j,ie]=tf(A.data(l),void 0,O,o);n.add(H(d),T,j),sf(o,d,`${h}.${T}`,O,ie,n,0,i.bind(null,A),s)},modified:({oldIndex:T,newIndex:A,doc:O})=>{const j=H(d),ie=v[T],Y=j[T],[ae,Ae]=tf(O.data(l),Y,ie,o);v.splice(A,0,ie),n.remove(j,T),n.add(j,A,ae),sf(o,d,`${h}.${A}`,ie,Ae,n,0,i,s)},removed:({oldIndex:T})=>{const A=H(d);n.remove(A,T),Oc(v.splice(T,1)[0])}};function b(T){const A=T.docChanges(a);if(!g&&A.length){g=!0;let O=0;const j=A.length,ie=Object.create(null);for(let Y=0;Y<j;Y++)ie[A[Y].doc.id]=!0;i=Y=>{Y&&Y.id in ie&&++O>=j&&(c&&(n.set(t,h,H(d)),d=t),f(H(d)),i=Hn)}}A.forEach(O=>{w[O.type](O)}),A.length||(c&&(n.set(t,h,H(d)),d=t),i(H(d)))}return u?xV(e).then(b).catch(s):y=Mm(e,b,s),T=>{if(y(),T){const A=typeof T=="function"?T():[];n.set(t,h,A)}v.forEach(Oc)}}function y$(t,e,n,i,s,r){const o=Object.assign({},Lm,r),a="value",l=Object.create(null);i=Bx(i,()=>up(t,a));let c=Hn;function u(h){h.exists()?nf(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?Hu(e).then(u).catch(s):c=Mm(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Oc(l)}}const Uy=Symbol();function uI(t,e){let n=Hn;const i=Object.assign({},Lm,e),s=H(t),r=i.target||Ue();Hx()&&(i.once=!0);const o=d$(s,i.ssrKey,Uy,Pa()),a=o!==Uy;a&&(r.value=o);let l=!a;const c=Ue(!1),u=Ue(),h=Qv(),d=Of();let f=Hn;function g(){let w=H(t);const b=new Promise((T,A)=>{if(n(i.reset),!w)return n=Hn,T(null);c.value=l,l=!0,w.converter||(w=w.withConverter(i.converter)),n=(hp(w)?y$:_$)(r,w,v$,T,A,i)}).catch(T=>(h.value===b&&(u.value=T),Promise.reject(T))).finally(()=>{h.value===b&&(c.value=!1)});h.value=b}let y=Hn;Ye(t)&&(y=Hi(t,g)),g(),s&&(f=p$(h.value,s,i.ssrKey)),EE()&&aE(()=>h.value),d&&Nv(v);function v(w=i.reset){y(),f(),n(w)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const v$={set:(t,e,n)=>Nx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function hI(t,e){return uI(t,{target:Ue([]),...e})}function dI(t,e){return uI(t,e)}function E$(t){return(e,n)=>{const i=jx(e,n).run(()=>Ue(t));Rw.set(e,i),qx(i,e)}}function _B(t){return Dx?bw(Pa(t)):null}function w$(t,{firebaseApp:e,modules:n=[]}){t.provide(Aw,e);for(const i of n)i(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let fI;const qu=t=>fI=t,pI=Symbol();function rf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($o||($o={}));function b$(){const t=Nf(!0),e=t.run(()=>Ue({}));let n=[],i=[];const s=Gc({install(r){qu(s),s._a=r,r.provide(pI,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!rx?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mI=()=>{};function By(t,e,n,i=mI){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Of()&&Nv(s),s}function Xs(t,...e){t.slice().forEach(n=>{n(...e)})}const T$=t=>t();function of(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];rf(s)&&rf(i)&&t.hasOwnProperty(n)&&!Ye(i)&&!Bi(i)?t[n]=of(s,i):t[n]=i}return t}const I$=Symbol();function A$(t){return!rf(t)||!t.hasOwnProperty(I$)}const{assign:xi}=Object;function R$(t){return!!(Ye(t)&&t.effect)}function C$(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=eR(n.state.value[t]);return xi(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Gc(Re(()=>{qu(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=gI(t,c,e,n,i,!0),l}function gI(t,e,n={},i,s,r){let o;const a=xi({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),Ue({});let y;function v(Y){let ae;c=u=!1,typeof Y=="function"?(Y(i.state.value[t]),ae={type:$o.patchFunction,storeId:t,events:f}):(of(i.state.value[t],Y),ae={type:$o.patchObject,payload:Y,storeId:t,events:f});const Ae=y=Symbol();Hf().then(()=>{y===Ae&&(c=!0)}),u=!0,Xs(h,ae,i.state.value[t])}const w=r?function(){const{state:ae}=n,Ae=ae?ae():{};this.$patch(ct=>{xi(ct,Ae)})}:mI;function b(){o.stop(),h=[],d=[],i._s.delete(t)}function T(Y,ae){return function(){qu(i);const Ae=Array.from(arguments),ct=[],At=[];function Rt(Ee){ct.push(Ee)}function li(Ee){At.push(Ee)}Xs(d,{args:Ae,name:Y,store:O,after:Rt,onError:li});let Jt;try{Jt=ae.apply(this&&this.$id===t?this:O,Ae)}catch(Ee){throw Xs(At,Ee),Ee}return Jt instanceof Promise?Jt.then(Ee=>(Xs(ct,Ee),Ee)).catch(Ee=>(Xs(At,Ee),Promise.reject(Ee))):(Xs(ct,Jt),Jt)}}const A={_p:i,$id:t,$onAction:By.bind(null,d),$patch:v,$reset:w,$subscribe(Y,ae={}){const Ae=By(h,Y,ae.detached,()=>ct()),ct=o.run(()=>Hi(()=>i.state.value[t],At=>{(ae.flush==="sync"?u:c)&&Y({storeId:t,type:$o.direct,events:f},At)},xi({},l,ae)));return Ae},$dispose:b},O=zr(A);i._s.set(t,O);const j=i._a&&i._a.runWithContext||T$,ie=i._e.run(()=>(o=Nf(),j(()=>o.run(e))));for(const Y in ie){const ae=ie[Y];if(Ye(ae)&&!R$(ae)||Bi(ae))r||(g&&A$(ae)&&(Ye(ae)?ae.value=g[Y]:of(ae,g[Y])),i.state.value[t][Y]=ae);else if(typeof ae=="function"){const Ae=T(Y,ae);ie[Y]=Ae,a.actions[Y]=ae}}return xi(O,ie),xi(Te(O),ie),Object.defineProperty(O,"$state",{get:()=>i.state.value[t],set:Y=>{v(ae=>{xi(ae,Y)})}}),i._p.forEach(Y=>{xi(O,o.run(()=>Y({store:O,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(O.$state,g),c=!0,u=!0,O}function S$(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=FR();return a=a||(c?tn(pI,null):null),a&&qu(a),a=fI,a._s.has(i)||(r?gI(i,e,s,a):C$(i,s,a)),a._s.get(i)}return o.$id=i,o}const _I=VE({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),ln=EV(_I);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof window<"u";function k$(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function $h(t,e){const n={};for(const i in e){const s=e[i];n[i]=On(s)?s.map(t):t(s)}return n}const Fo=()=>{},On=Array.isArray,P$=/\/$/,x$=t=>t.replace(P$,"");function Fh(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=M$(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function D$(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function N$(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Or(e.matched[i],n.matched[s])&&yI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!O$(t[n],e[n]))return!1;return!0}function O$(t,e){return On(t)?Hy(t,e):On(e)?Hy(e,t):t===e}function Hy(t,e){return On(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function M$(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var _a;(function(t){t.pop="pop",t.push="push"})(_a||(_a={}));var Uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Uo||(Uo={}));function L$(t){if(!t)if(er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),x$(t)}const V$=/^[^#]+#/;function $$(t,e){return t.replace(V$,"#")+e}function F$(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Wu=()=>({left:window.pageXOffset,top:window.pageYOffset});function U$(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=F$(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jy(t,e){return(history.state?history.state.position-e:-1)+t}const af=new Map;function B$(t,e){af.set(t,e)}function z$(t){const e=af.get(t);return af.delete(t),e}let H$=()=>location.protocol+"//"+location.host;function vI(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),zy(l,"")}return zy(n,t)+i+s}function j$(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=vI(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else i(f);s.forEach(w=>{w(n.value,g,{delta:v,type:_a.pop,direction:v?v>0?Uo.forward:Uo.back:Uo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ne({},d.state,{scroll:Wu()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function qy(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Wu():null}}function q$(t){const{history:e,location:n}=window,i={value:vI(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:H$()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ne({},e.state,qy(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ne({},s.value,e.state,{forward:l,scroll:Wu()});r(u.current,u,!0);const h=Ne({},qy(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function W$(t){t=L$(t);const e=q$(t),n=j$(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ne({location:"",base:t,go:i,createHref:$$.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function K$(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),W$(t)}function G$(t){return typeof t=="string"||t&&typeof t=="object"}function EI(t){return typeof t=="string"||typeof t=="symbol"}const Pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wI=Symbol("");var Wy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wy||(Wy={}));function Mr(t,e){return Ne(new Error,{type:t,[wI]:!0},e)}function ui(t,e){return t instanceof Error&&wI in t&&(e==null||!!(t.type&e))}const Ky="[^/]+?",Q$={sensitive:!1,strict:!1,start:!0,end:!0},Y$=/[.+*?^${}()[\]/\\]/g;function X$(t,e){const n=Ne({},Q$,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Y$,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:w}=d;r.push({name:g,repeatable:y,optional:v});const b=w||Ky;if(b!==Ky){f+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+A.message)}}let T=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(T=v&&c.length<2?`(?:/${T})`:"/"+T),v&&(T+="?"),s+=T,f+=20,v&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,w=g in c?c[g]:"";if(On(w)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=On(w)?w.join("/"):w;if(!b)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function J$(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Z$(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=J$(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Gy(i))return 1;if(Gy(s))return-1}return s.length-i.length}function Gy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eF={type:0,value:""},tF=/[a-zA-Z0-9_]/;function nF(t){if(!t)return[[]];if(t==="/")return[[eF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:tF.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function iF(t,e,n){const i=X$(nF(t.path),n),s=Ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sF(t,e){const n=[],i=new Map;e=Xy({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=rF(u);g.aliasOf=d&&d.record;const y=Xy(e,u),v=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of T)v.push(Ne({},g,{components:d?d.record.components:g.components,path:A,aliasOf:d?d.record:g}))}let w,b;for(const T of v){const{path:A}=T;if(h&&A[0]!=="/"){const O=h.record.path,j=O[O.length-1]==="/"?"":"/";T.path=h.record.path+(A&&j+A)}if(w=iF(T,h,y),d?d.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),f&&u.name&&!Yy(w)&&o(u.name)),g.children){const O=g.children;for(let j=0;j<O.length;j++)r(O[j],w,d&&d.children[j])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return b?()=>{o(b)}:Fo}function o(u){if(EI(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Z$(u,n[h])>=0&&(u.record.path!==n[h].record.path||!bI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yy(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Mr(1,{location:u});y=d.record.name,f=Ne(Qy(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Qy(u.params,d.keys.map(b=>b.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(b=>b.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?i.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Mr(1,{location:u,currentLocation:h});y=d.record.name,f=Ne({},h.params,u.params),g=d.stringify(f)}const v=[];let w=d;for(;w;)v.unshift(w.record),w=w.parent;return{name:y,path:g,params:f,matched:v,meta:aF(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function rF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Yy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aF(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Xy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function bI(t,e){return e.children.some(n=>n===t||bI(t,n))}const TI=/#/g,lF=/&/g,cF=/\//g,uF=/=/g,hF=/\?/g,II=/\+/g,dF=/%5B/g,fF=/%5D/g,AI=/%5E/g,pF=/%60/g,RI=/%7B/g,mF=/%7C/g,CI=/%7D/g,gF=/%20/g;function Vm(t){return encodeURI(""+t).replace(mF,"|").replace(dF,"[").replace(fF,"]")}function _F(t){return Vm(t).replace(RI,"{").replace(CI,"}").replace(AI,"^")}function lf(t){return Vm(t).replace(II,"%2B").replace(gF,"+").replace(TI,"%23").replace(lF,"%26").replace(pF,"`").replace(RI,"{").replace(CI,"}").replace(AI,"^")}function yF(t){return lf(t).replace(uF,"%3D")}function vF(t){return Vm(t).replace(TI,"%23").replace(hF,"%3F")}function EF(t){return t==null?"":vF(t).replace(cF,"%2F")}function Mc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wF(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(II," "),o=r.indexOf("="),a=Mc(o<0?r:r.slice(0,o)),l=o<0?null:Mc(r.slice(o+1));if(a in e){let c=e[a];On(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Jy(t){let e="";for(let n in t){const i=t[n];if(n=yF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(On(i)?i.map(r=>r&&lf(r)):[i&&lf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function bF(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=On(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const TF=Symbol(""),Zy=Symbol(""),Ku=Symbol(""),$m=Symbol(""),cf=Symbol("");function mo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ni(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Mr(4,{from:n,to:e})):h instanceof Error?a(h):G$(h)?a(Mr(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Uh(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(IF(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ni(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=k$(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ni(d,n,i,r,o)()}))}}return s}function IF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ev(t){const e=tn(Ku),n=tn($m),i=Re(()=>e.resolve(H(t.to))),s=Re(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Or.bind(null,u));if(d>-1)return d;const f=tv(l[c-2]);return c>1&&tv(u)===f&&h[h.length-1].path!==f?h.findIndex(Or.bind(null,l[c-2])):d}),r=Re(()=>s.value>-1&&SF(n.params,i.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&yI(n.params,i.value.params));function a(l={}){return CF(l)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(Fo):Promise.resolve()}return{route:i,href:Re(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const AF=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ev,setup(t,{slots:e}){const n=zr(ev(t)),{options:i}=tn(Ku),s=Re(()=>({[nv(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[nv(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:TE("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),RF=AF;function CF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SF(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!On(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function tv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nv=(t,e,n)=>t??e??n,kF=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=tn(cf),s=Re(()=>t.route||i.value),r=tn(Zy,0),o=Re(()=>{let c=H(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Re(()=>s.value.matched[o.value]);xl(Zy,Re(()=>o.value+1)),xl(TF,a),xl(cf,s);const l=Ue();return Hi(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Or(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return iv(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=TE(d,Ne({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return iv(n.default,{Component:v,route:c})||v}}});function iv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SI=kF;function PF(t){const e=sF(t.routes,t),n=t.parseQuery||wF,i=t.stringifyQuery||Jy,s=t.history,r=mo(),o=mo(),a=mo(),l=Qv(Pi);let c=Pi;er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$h.bind(null,_=>""+_),h=$h.bind(null,EF),d=$h.bind(null,Mc);function f(_,I){let S,F;return EI(_)?(S=e.getRecordMatcher(_),F=I):F=_,e.addRoute(F,S)}function g(_){const I=e.getRecordMatcher(_);I&&e.removeRoute(I)}function y(){return e.getRoutes().map(_=>_.record)}function v(_){return!!e.getRecordMatcher(_)}function w(_,I){if(I=Ne({},I||l.value),typeof _=="string"){const E=Fh(n,_,I.path),R=e.resolve({path:E.path},I),C=s.createHref(E.fullPath);return Ne(E,R,{params:d(R.params),hash:Mc(E.hash),redirectedFrom:void 0,href:C})}let S;if("path"in _)S=Ne({},_,{path:Fh(n,_.path,I.path).path});else{const E=Ne({},_.params);for(const R in E)E[R]==null&&delete E[R];S=Ne({},_,{params:h(E)}),I.params=h(I.params)}const F=e.resolve(S,I),x=_.hash||"";F.params=u(d(F.params));const p=D$(i,Ne({},_,{hash:_F(x),path:F.path})),m=s.createHref(p);return Ne({fullPath:p,hash:x,query:i===Jy?bF(_.query):_.query||{}},F,{redirectedFrom:void 0,href:m})}function b(_){return typeof _=="string"?Fh(n,_,l.value.path):Ne({},_)}function T(_,I){if(c!==_)return Mr(8,{from:I,to:_})}function A(_){return ie(_)}function O(_){return A(Ne(b(_),{replace:!0}))}function j(_){const I=_.matched[_.matched.length-1];if(I&&I.redirect){const{redirect:S}=I;let F=typeof S=="function"?S(_):S;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=b(F):{path:F},F.params={}),Ne({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function ie(_,I){const S=c=w(_),F=l.value,x=_.state,p=_.force,m=_.replace===!0,E=j(S);if(E)return ie(Ne(b(E),{state:typeof E=="object"?Ne({},x,E.state):x,force:p,replace:m}),I||S);const R=S;R.redirectedFrom=I;let C;return!p&&N$(i,F,S)&&(C=Mr(16,{to:R,from:F}),mn(F,F,!0,!1)),(C?Promise.resolve(C):Ae(R,F)).catch(P=>ui(P)?ui(P,2)?P:wn(P):Ie(P,R,F)).then(P=>{if(P){if(ui(P,2))return ie(Ne({replace:m},b(P.to),{state:typeof P.to=="object"?Ne({},x,P.to.state):x,force:p}),I||R)}else P=At(R,F,!0,m,x);return ct(R,F,P),P})}function Y(_,I){const S=T(_,I);return S?Promise.reject(S):Promise.resolve()}function ae(_){const I=Ci.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(_):_()}function Ae(_,I){let S;const[F,x,p]=xF(_,I);S=Uh(F.reverse(),"beforeRouteLeave",_,I);for(const E of F)E.leaveGuards.forEach(R=>{S.push(Ni(R,_,I))});const m=Y.bind(null,_,I);return S.push(m),Je(S).then(()=>{S=[];for(const E of r.list())S.push(Ni(E,_,I));return S.push(m),Je(S)}).then(()=>{S=Uh(x,"beforeRouteUpdate",_,I);for(const E of x)E.updateGuards.forEach(R=>{S.push(Ni(R,_,I))});return S.push(m),Je(S)}).then(()=>{S=[];for(const E of p)if(E.beforeEnter)if(On(E.beforeEnter))for(const R of E.beforeEnter)S.push(Ni(R,_,I));else S.push(Ni(E.beforeEnter,_,I));return S.push(m),Je(S)}).then(()=>(_.matched.forEach(E=>E.enterCallbacks={}),S=Uh(p,"beforeRouteEnter",_,I),S.push(m),Je(S))).then(()=>{S=[];for(const E of o.list())S.push(Ni(E,_,I));return S.push(m),Je(S)}).catch(E=>ui(E,8)?E:Promise.reject(E))}function ct(_,I,S){a.list().forEach(F=>ae(()=>F(_,I,S)))}function At(_,I,S,F,x){const p=T(_,I);if(p)return p;const m=I===Pi,E=er?history.state:{};S&&(F||m?s.replace(_.fullPath,Ne({scroll:m&&E&&E.scroll},x)):s.push(_.fullPath,x)),l.value=_,mn(_,I,S,m),wn()}let Rt;function li(){Rt||(Rt=s.listen((_,I,S)=>{if(!as.listening)return;const F=w(_),x=j(F);if(x){ie(Ne(x,{replace:!0}),F).catch(Fo);return}c=F;const p=l.value;er&&B$(jy(p.fullPath,S.delta),Wu()),Ae(F,p).catch(m=>ui(m,12)?m:ui(m,2)?(ie(m.to,F).then(E=>{ui(E,20)&&!S.delta&&S.type===_a.pop&&s.go(-1,!1)}).catch(Fo),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Ie(m,F,p))).then(m=>{m=m||At(F,p,!1),m&&(S.delta&&!ui(m,8)?s.go(-S.delta,!1):S.type===_a.pop&&ui(m,20)&&s.go(-1,!1)),ct(F,p,m)}).catch(Fo)}))}let Jt=mo(),Ee=mo(),De;function Ie(_,I,S){wn(_);const F=Ee.list();return F.length?F.forEach(x=>x(_,I,S)):console.error(_),Promise.reject(_)}function En(){return De&&l.value!==Pi?Promise.resolve():new Promise((_,I)=>{Jt.add([_,I])})}function wn(_){return De||(De=!_,li(),Jt.list().forEach(([I,S])=>_?S(_):I()),Jt.reset()),_}function mn(_,I,S,F){const{scrollBehavior:x}=t;if(!er||!x)return Promise.resolve();const p=!S&&z$(jy(_.fullPath,0))||(F||!S)&&history.state&&history.state.scroll||null;return Hf().then(()=>x(_,I,p)).then(m=>m&&U$(m)).catch(m=>Ie(m,_,I))}const yt=_=>s.go(_);let ci;const Ci=new Set,as={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:w,options:t,push:A,replace:O,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:En,install(_){const I=this;_.component("RouterLink",RF),_.component("RouterView",SI),_.config.globalProperties.$router=I,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),er&&!ci&&l.value===Pi&&(ci=!0,A(s.location).catch(x=>{}));const S={};for(const x in Pi)Object.defineProperty(S,x,{get:()=>l.value[x],enumerable:!0});_.provide(Ku,I),_.provide($m,jv(S)),_.provide(cf,l);const F=_.unmount;Ci.add(_),_.unmount=function(){Ci.delete(_),Ci.size<1&&(c=Pi,Rt&&Rt(),Rt=null,l.value=Pi,ci=!1,De=!1),F()}}};function Je(_){return _.reduce((I,S)=>I.then(()=>ae(S)),Promise.resolve())}return as}function xF(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Or(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Or(c,l))||s.push(l))}return[n,i,s]}function DF(){return tn(Ku)}function NF(){return tn($m)}const kI=S$("settings",()=>({installEvent:Ue()})),OF=Yt({__name:"App",setup(t){const e=Kr(),n=DF(),i=NF();return Hi(e,async(s,r)=>{if(!s&&r&&i.meta.requiresAuth)return n.push({name:"login"});if(s&&typeof i.query.redirect=="string")return n.push(i.query.redirect)}),window.addEventListener("beforeinstallprompt",s=>{kI().installEvent=s}),(s,r)=>(te(),ei(H(SI)))}}),MF="modulepreload",LF=function(t){return"/"+t},sv={},Bh=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=LF(r),r in sv)return;sv[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":MF,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function G(t,e,n,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const VF=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},$F=(t,e,n)=>{e.constructor.createProperty(n,t)};function Le(t){return(e,n)=>n!==void 0?$F(t,e,n):VF(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rs(t){return Le({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const PI=({finisher:t,descriptor:e})=>(n,i)=>{var s;if(i===void 0){const r=(s=n.originalKey)!==null&&s!==void 0?s:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,i,e(i)),t==null||t(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vn(t,e){return PI({descriptor:n=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof n=="symbol"?Symbol():"__"+n;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zh;const FF=((zh=window.HTMLSlotElement)===null||zh===void 0?void 0:zh.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function UF(t){const{slot:e,selector:n}=t??{};return PI({descriptor:i=>({get(){var s;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r),a=o!=null?FF(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zl=window,Fm=zl.ShadowRoot&&(zl.ShadyCSS===void 0||zl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Um=Symbol(),rv=new WeakMap;let xI=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==Um)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Fm&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=rv.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&rv.set(n,e))}return e}toString(){return this.cssText}};const BF=t=>new xI(typeof t=="string"?t:t+"",void 0,Um),Xt=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new xI(n,t,Um)},zF=(t,e)=>{Fm?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),s=zl.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)})},ov=Fm?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return BF(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hh;const Lc=window,av=Lc.trustedTypes,HF=av?av.emptyScript:"",lv=Lc.reactiveElementPolyfillSupport,uf={toAttribute(t,e){switch(e){case Boolean:t=t?HF:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},DI=(t,e)=>e!==t&&(e==e||t==t),jh={attribute:!0,type:String,converter:uf,reflect:!1,hasChanged:DI},hf="finalized";let tr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const s=this._$Ep(i,n);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,n=jh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(s){const r=this[e];this[n]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||jh}static finalize(){if(this.hasOwnProperty(hf))return!1;this[hf]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of i)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(ov(s))}else e!==void 0&&n.push(ov(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zF(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=jh){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:uf).toAttribute(n,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:uf;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||DI)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};tr[hf]=!0,tr.elementProperties=new Map,tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},lv==null||lv({ReactiveElement:tr}),((Hh=Lc.reactiveElementVersions)!==null&&Hh!==void 0?Hh:Lc.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qh;const Vc=window,Lr=Vc.trustedTypes,cv=Lr?Lr.createPolicy("lit-html",{createHTML:t=>t}):void 0,df="$lit$",$i=`lit$${(Math.random()+"").slice(9)}$`,NI="?"+$i,jF=`<${NI}>`,Ls=document,ya=()=>Ls.createComment(""),va=t=>t===null||typeof t!="object"&&typeof t!="function",OI=Array.isArray,qF=t=>OI(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Wh=`[ 	
\f\r]`,go=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uv=/-->/g,hv=/>/g,us=RegExp(`>|${Wh}(?:([^\\s"'>=/]+)(${Wh}*=${Wh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dv=/'/g,fv=/"/g,MI=/^(?:script|style|textarea|title)$/i,WF=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Dt=WF(1),Vs=Symbol.for("lit-noChange"),de=Symbol.for("lit-nothing"),pv=new WeakMap,Es=Ls.createTreeWalker(Ls,129,null,!1);function LI(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return cv!==void 0?cv.createHTML(e):e}const KF=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=go;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===go?u[1]==="!--"?o=uv:u[1]!==void 0?o=hv:u[2]!==void 0?(MI.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=us):u[3]!==void 0&&(o=us):o===us?u[0]===">"?(o=s??go,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?us:u[3]==='"'?fv:dv):o===fv||o===dv?o=us:o===uv||o===hv?o=go:(o=us,s=void 0);const f=o===us&&t[a+1].startsWith("/>")?" ":"";r+=o===go?l+jF:h>=0?(i.push(c),l.slice(0,h)+df+l.slice(h)+$i+f):l+$i+(h===-2?(i.push(void 0),a):f)}return[LI(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class Ea{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=KF(e,n);if(this.el=Ea.createElement(c,i),Es.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Es.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(df)||d.startsWith($i)){const f=u[o++];if(h.push(d),f!==void 0){const g=s.getAttribute(f.toLowerCase()+df).split($i),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:y[2],strings:g,ctor:y[1]==="."?QF:y[1]==="?"?XF:y[1]==="@"?JF:Gu})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(MI.test(s.tagName)){const h=s.textContent.split($i),d=h.length-1;if(d>0){s.textContent=Lr?Lr.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],ya()),Es.nextNode(),l.push({type:2,index:++r});s.append(h[d],ya())}}}else if(s.nodeType===8)if(s.data===NI)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf($i,h+1))!==-1;)l.push({type:7,index:r}),h+=$i.length-1}r++}}static createElement(e,n){const i=Ls.createElement("template");return i.innerHTML=e,i}}function Vr(t,e,n=t,i){var s,r,o,a;if(e===Vs)return e;let l=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=va(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=Vr(t,l._$AS(t,e.values),l,i)),e}class GF{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ls).importNode(i,!0);Es.currentNode=r;let o=Es.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new tl(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new ZF(o,this,e)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Es.nextNode(),a++)}return Es.currentNode=Ls,r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class tl{constructor(e,n,i,s){var r;this.type=2,this._$AH=de,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Vr(this,e,n),va(e)?e===de||e==null||e===""?(this._$AH!==de&&this._$AR(),this._$AH=de):e!==this._$AH&&e!==Vs&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):qF(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==de&&va(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ls.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ea.createElement(LI(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const o=new GF(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let n=pv.get(e.strings);return n===void 0&&pv.set(e.strings,n=new Ea(e)),n}T(e){OI(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new tl(this.k(ya()),this.k(ya()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Gu{constructor(e,n,i,s,r){this.type=1,this._$AH=de,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=de}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Vr(this,e,n,0),o=!va(e)||e!==this._$AH&&e!==Vs,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Vr(this,a[i+l],n,l),c===Vs&&(c=this._$AH[l]),o||(o=!va(c)||c!==this._$AH[l]),c===de?e=de:e!==de&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===de?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let QF=class extends Gu{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===de?void 0:e}};const YF=Lr?Lr.emptyScript:"";let XF=class extends Gu{constructor(){super(...arguments),this.type=4}j(e){e&&e!==de?this.element.setAttribute(this.name,YF):this.element.removeAttribute(this.name)}};class JF extends Gu{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=Vr(this,e,n,0))!==null&&i!==void 0?i:de)===Vs)return;const s=this._$AH,r=e===de&&s!==de||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==de&&(s===de||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ZF{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Vr(this,e)}}const mv=Vc.litHtmlPolyfillSupport;mv==null||mv(Ea,tl),((qh=Vc.litHtmlVersions)!==null&&qh!==void 0?qh:Vc.litHtmlVersions=[]).push("2.8.0");const e2=(t,e,n)=>{var i,s;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new tl(e.insertBefore(ya(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kh,Gh;let Gt=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=e2(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Vs}};Gt.finalized=!0,Gt._$litElement$=!0,(Kh=globalThis.litElementHydrateSupport)===null||Kh===void 0||Kh.call(globalThis,{LitElement:Gt});const gv=globalThis.litElementPolyfillSupport;gv==null||gv({LitElement:Gt});((Gh=globalThis.litElementVersions)!==null&&Gh!==void 0?Gh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t2 extends Gt{render(){return Dt`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const n2=Xt`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ff=class extends t2{};ff.styles=[n2];ff=G([Mn("md-elevation")],ff);const VI=t=>(Jc("data-v-eabfc1cc"),t=t(),Zc(),t),i2=VI(()=>U("md-elevation",null,null,-1)),s2={class:"title headline-large"},r2={class:"content body-large"},o2={key:1,class:"card"},a2=VI(()=>U("md-elevation",null,null,-1)),l2={class:"title headline-large"},c2={class:"content body-large"},u2=Yt({__name:"ListItem",props:{path:{type:String,required:!1}},setup(t){return(e,n)=>{const i=tu("RouterLink");return t.path?(te(),ei(i,{key:0,to:t.path,class:"route card"},{default:an(()=>[U("div",null,[i2,U("div",s2,[$n(e.$slots,"title",{},void 0,!0)]),U("div",r2,[$n(e.$slots,"content",{},void 0,!0)])])]),_:3},8,["to"])):(te(),he("div",o2,[a2,U("div",l2,[$n(e.$slots,"title",{},void 0,!0)]),U("div",c2,[$n(e.$slots,"content",{},void 0,!0)])]))}}});const Qu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Qh=Qu(u2,[["__scopeId","data-v-eabfc1cc"]]),h2=t=>(Jc("data-v-27e31cd3"),t=t(),Zc(),t),d2=["src"],f2=h2(()=>U("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),p2=Yt({__name:"AccountImage",setup(t){var i;const e=Kr(),n=Ue((i=e.value)==null?void 0:i.providerData[0].photoURL);return(s,r)=>{const o=tu("RouterLink");return te(),he("div",null,[H(e)?(te(),ei(o,{key:0,to:"/myAccount"},{default:an(()=>[U("img",{class:"accountImage",src:n.value,referrerpolicy:"no-referrer",alt:""},null,8,d2)]),_:1})):(te(),ei(o,{key:1,to:"/myAccount"},{default:an(()=>[f2]),_:1}))])}}});const m2=Qu(p2,[["__scopeId","data-v-27e31cd3"]]),wa=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class g2 extends Gt{render(){return Dt`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const _2=Xt`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pf=class extends g2{};pf.styles=[_2];pf=G([Mn("md-icon")],pf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $I=Symbol("attachableController");let Hl;Hl=new MutationObserver(t=>{var e;for(const n of t)(e=n.target[$I])==null||e.hostConnected()});class FI{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,n){this.host=e,this.onControlChange=n,this.currentControl=null,e.addController(this),e[$I]=this,Hl==null||Hl.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const y2=["focusin","focusout","pointerdown"];class Bm extends Gt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new FI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var n;if(!e[_v]){switch(e.type){default:return;case"focusin":this.visible=((n=this.control)==null?void 0:n.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[_v]=!0}}onControlChange(e,n){for(const i of y2)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}G([Le({type:Boolean,reflect:!0})],Bm.prototype,"visible",void 0);G([Le({type:Boolean,reflect:!0})],Bm.prototype,"inward",void 0);const _v=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const v2=Xt`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mf=class extends Bm{};mf.styles=[v2];mf=G([Mn("md-focus-ring")],mf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w2=t=>(...e)=>({_$litDirective$:t,values:e});let b2=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nl=w2(class extends b2{constructor(t){var e;if(super(t),t.type!==E2.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const s=t.element.classList;this.it.forEach(r=>{r in e||(s.remove(r),this.it.delete(r))});for(const r in e){const o=!!e[r];o===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return Vs}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ba={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T2=450,yv=225,I2=.2,A2=10,R2=75,C2=.35,S2="::after",k2="forwards";var jt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(jt||(jt={}));const P2=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],x2=150;class il extends Gt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=jt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new FI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return Dt`<div class="surface ${nl(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==jt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===jt.HOLDING){this.state=jt.WAITING_FOR_CLICK;return}if(this.state===jt.TOUCH_DELAY){this.state=jt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=jt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=jt.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,x2)}),this.state===jt.TOUCH_DELAY&&(this.state=jt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===jt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===jt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:n}=this.getBoundingClientRect(),i=Math.max(e,n),s=Math.max(C2*i,R2),r=Math.floor(i*I2),a=Math.sqrt(n**2+e**2)+A2;this.initialSize=r,this.rippleScale=`${(a+s)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:n,scrollY:i}=window,{left:s,top:r}=this.getBoundingClientRect(),o=n+s,a=i+r,{pageX:l,pageY:c}=e;return{x:l-o,y:c-a}}getTranslationCoordinates(e){const{height:n,width:i}=this.getBoundingClientRect(),s={x:(i-this.initialSize)/2,y:(n-this.initialSize)/2};let r;return e instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(e):r={x:i/2,y:n/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:s}}startPressAnimation(e){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:n,endPoint:i}=this.getTranslationCoordinates(e),s=`${n.x}px, ${n.y}px`,r=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:S2,duration:T2,easing:ba.STANDARD,fill:k2})}async endPressAnimation(){this.state=jt.INACTIVE;const e=this.growAnimation,n=(e==null?void 0:e.currentTime)??1/0;if(n>=yv){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,yv-n)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const n=e.buttons===1;return this.isTouch(e)||n}inBounds({x:e,y:n}){const{top:i,left:s,bottom:r,right:o}=this.getBoundingClientRect();return e>=s&&e<=o&&n>=i&&n<=r}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,n){for(const i of P2)e==null||e.removeEventListener(i,this),n==null||n.addEventListener(i,this)}}G([Le({type:Boolean,reflect:!0})],il.prototype,"disabled",void 0);G([rs()],il.prototype,"hovered",void 0);G([rs()],il.prototype,"pressed",void 0);G([vn(".surface")],il.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const D2=Xt`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let gf=class extends il{};gf.styles=[D2];gf=G([Mn("md-ripple")],gf);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const UI=Symbol.for(""),N2=t=>{if((t==null?void 0:t.r)===UI)return t==null?void 0:t._$litStatic$},$c=(t,...e)=>({_$litStatic$:e.reduce((n,i,s)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:UI}),vv=new Map,O2=t=>(e,...n)=>{const i=n.length;let s,r;const o=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=e[c];c<i&&(r=n[c],(s=N2(r))!==void 0);)l+=s+e[++c],u=!0;c!==i&&a.push(r),o.push(l),c++}if(c===i&&o.push(e[i]),u){const h=o.join("$$lit$$");(e=vv.get(h))===void 0&&(o.raw=o,vv.set(h,e=o)),n=a}return t(e,...n)},BI=O2(Dt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zI=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];zI.map(HI);function HI(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Yu(t){for(const e of zI)t.createProperty(e,{attribute:HI(e),reflect:!0});t.addInitializer(e=>{const n={hostConnected(){e.setAttribute("role","presentation")}};e.addController(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $r=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function jI(t){t.addInitializer(e=>{const n=e;n.addEventListener("click",async i=>{const{type:s,[$r]:r}=n,{form:o}=r;if(!(!o||s==="button")&&(await new Promise(a=>{a()}),!i.defaultPrevented)){if(s==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),r.setFormValue(n.value),o.requestSubmit()}})})}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ev(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var qI;class Qt extends Gt{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Ev(this,this.flipIconInRtl),this[qI]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[$r].form}get labels(){return this[$r].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?$c`div`:$c`button`,{ariaLabel:n,ariaHasPopup:i,ariaExpanded:s}=this,r=n&&this.ariaLabelSelected,o=r?de:this.selected;let a=de;return this.href||(a=r&&this.selected?this.ariaLabelSelected:n),BI`<${e}
        class="icon-button ${nl(this.getRenderClasses())}"
        id="button"
        aria-label="${a||de}"
        aria-haspopup="${!this.href&&i||de}"
        aria-expanded="${!this.href&&s||de}"
        aria-pressed="${o}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?de:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():de}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Dt`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||de}"
        aria-label="${e||de}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Dt`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Dt`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return Dt`<span class="touch"></span>`}renderFocusRing(){return Dt`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Dt`<md-ripple
      for=${this.href?"link":de}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=Ev(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}qI=$r;Yu(Qt),jI(Qt);Qt.formAssociated=!0;Qt.shadowRootOptions={mode:"open",delegatesFocus:!0};G([Le({type:Boolean,reflect:!0})],Qt.prototype,"disabled",void 0);G([Le({type:Boolean,attribute:"flip-icon-in-rtl"})],Qt.prototype,"flipIconInRtl",void 0);G([Le()],Qt.prototype,"href",void 0);G([Le()],Qt.prototype,"target",void 0);G([Le({attribute:"aria-label-selected"})],Qt.prototype,"ariaLabelSelected",void 0);G([Le({type:Boolean})],Qt.prototype,"toggle",void 0);G([Le({type:Boolean,reflect:!0})],Qt.prototype,"selected",void 0);G([Le()],Qt.prototype,"type",void 0);G([Le()],Qt.prototype,"value",void 0);G([rs()],Qt.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const M2=Xt`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const L2=Xt`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-size))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _f=class extends Qt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};_f.styles=[M2,L2];_f=G([Mn("md-icon-button")],_f);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xu extends Gt{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}G([Le({type:Boolean,reflect:!0})],Xu.prototype,"inset",void 0);G([Le({type:Boolean,reflect:!0,attribute:"inset-start"})],Xu.prototype,"insetStart",void 0);G([Le({type:Boolean,reflect:!0,attribute:"inset-end"})],Xu.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const V2=Xt`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let yf=class extends Xu{};yf.styles=[V2];yf=G([Mn("md-divider")],yf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WI(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const n=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(n);return i||e.preventDefault(),i}function KI(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function GI(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!$2(t)}function $2(t){const e=vf;return e&&(t.preventDefault(),t.stopImmediatePropagation()),F2(),e}let vf=!1;async function F2(){vf=!0,await null,vf=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const U2={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:ba.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:ba.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},B2={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:ba.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:ba.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rt extends Gt{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>U2,this.getCloseAnimation=()=>B2,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var s;const{dialog:e,container:n}=this;if(!e||!n||e.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(s=this.querySelector("[autofocus]"))==null||s.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(e=this.returnValue){const{dialog:n,container:i}=this;if(!n||!i||!n.open)return;const s=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=s;return}await this.animateDialog(this.getCloseAnimation()),n.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),n={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return Dt`
      <div class="scrim"></div>
      <dialog
        class=${nl(n)}
        aria-label=${i||de}
        aria-labelledby=${this.hasHeadline?"headline":de}
        role=${this.type==="alert"?"alertdialog":de}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||de}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||de}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const n of e)this.handleAnchorIntersection(n)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const n=e.target,{submitter:i}=e;n.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;const n=!WI(this,e);e.preventDefault(),!n&&this.close()}async animateDialog(e){const{dialog:n,scrim:i,container:s,headline:r,content:o,actions:a}=this;if(!n||!i||!s||!r||!o||!a)return;const{container:l,dialog:c,scrim:u,headline:h,content:d,actions:f}=e,g=[[n,c??[]],[i,u??[]],[s,l??[]],[r,h??[]],[o,d??[]],[a,f??[]]],y=[];for(const[v,w]of g)for(const b of w)y.push(v.animate(...b));await Promise.all(y.map(v=>v.finished))}handleHeadlineChange(e){const n=e.target;this.hasHeadline=n.assignedElements().length>0}handleActionsChange(e){const n=e.target;this.hasActions=n.assignedElements().length>0}handleIconChange(e){const n=e.target;this.hasIcon=n.assignedElements().length>0}handleAnchorIntersection(e){const{target:n,isIntersecting:i}=e;n===this.topAnchor&&(this.isAtScrollTop=i),n===this.bottomAnchor&&(this.isAtScrollBottom=i)}}Yu(rt);rt.shadowRootOptions={...Gt.shadowRootOptions,delegatesFocus:!0};G([Le({type:Boolean})],rt.prototype,"open",null);G([Le({attribute:!1})],rt.prototype,"returnValue",void 0);G([Le()],rt.prototype,"type",void 0);G([vn("dialog")],rt.prototype,"dialog",void 0);G([vn(".scrim")],rt.prototype,"scrim",void 0);G([vn(".container")],rt.prototype,"container",void 0);G([vn(".headline")],rt.prototype,"headline",void 0);G([vn(".content")],rt.prototype,"content",void 0);G([vn(".actions")],rt.prototype,"actions",void 0);G([rs()],rt.prototype,"isAtScrollTop",void 0);G([rs()],rt.prototype,"isAtScrollBottom",void 0);G([vn(".scroller")],rt.prototype,"scroller",void 0);G([vn(".top.anchor")],rt.prototype,"topAnchor",void 0);G([vn(".bottom.anchor")],rt.prototype,"bottomAnchor",void 0);G([rs()],rt.prototype,"hasHeadline",void 0);G([rs()],rt.prototype,"hasActions",void 0);G([rs()],rt.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const z2=Xt`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ef=class extends rt{};Ef.styles=[z2];Ef=G([Mn("md-dialog")],Ef);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const zm=Xt`:host{display:inline-flex;height:var(--_container-height);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var QI;class zt extends Gt{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[$r].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[QI]=this.attachInternals(),this.handleActivationClick=e=>{!GI(e)||!this.buttonElement||(this.focus(),KI(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){const e=this.disabled&&!this.href,n=this.href?$c`a`:$c`button`,{ariaLabel:i,ariaHasPopup:s,ariaExpanded:r}=this;return BI`
      <${n}
        class="button ${nl(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||de}"
        aria-haspopup="${s||de}"
        aria-expanded="${r||de}"
        href=${this.href||de}
        target=${this.target||de}
      >${this.renderContent()}</${n}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){var i,s;const e=this.disabled&&!this.href,n=Dt`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return Dt`
      ${(i=this.renderElevation)==null?void 0:i.call(this)}
      ${(s=this.renderOutline)==null?void 0:s.call(this)}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?de:n}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?n:de}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}QI=$r;Yu(zt),jI(zt);zt.formAssociated=!0;zt.shadowRootOptions={mode:"open",delegatesFocus:!0};G([Le({type:Boolean,reflect:!0})],zt.prototype,"disabled",void 0);G([Le()],zt.prototype,"href",void 0);G([Le()],zt.prototype,"target",void 0);G([Le({type:Boolean,attribute:"trailing-icon"})],zt.prototype,"trailingIcon",void 0);G([Le({type:Boolean,attribute:"has-icon"})],zt.prototype,"hasIcon",void 0);G([Le()],zt.prototype,"type",void 0);G([Le()],zt.prototype,"value",void 0);G([vn(".button")],zt.prototype,"buttonElement",void 0);G([UF({slot:"icon",flatten:!0})],zt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class H2 extends zt{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const j2=Xt`:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let wf=class extends H2{};wf.styles=[zm,j2];wf=G([Mn("md-text-button")],wf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class q2 extends zt{renderOutline(){return Dt`<span class="button__outline"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const W2=Xt`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bf=class extends q2{};bf.styles=[zm,W2];bf=G([Mn("md-outlined-button")],bf);const Ju=t=>(Jc("data-v-d890dc55"),t=t(),Zc(),t),K2={key:0,id:"user"},G2={class:"body-large admonitions"},Q2={key:0,class:"section slots"},Y2=Ju(()=>U("div",{class:"label"}," Slot prenotati: ",-1)),X2={key:0},J2={key:1,class:"bookedSlots"},Z2=Ju(()=>U("md-elevation",null,null,-1)),eU=["onClick"],tU=Ju(()=>U("md-icon",null,"close",-1)),nU=[tU],iU=["open"],sU=Ju(()=>U("div",{slot:"headline"},"Conferma rimozione",-1)),rU={key:0,slot:"content",id:"form-id",method:"dialog"},oU={key:0},aU={slot:"actions"},lU={key:1,class:"section button"},cU=Yt({__name:"UserView",setup(t){var h,d;const e=Kr(),n=dI(zn(ln,`users/${(h=e.value)==null?void 0:h.uid}`)),i=hI(zT(ln,`users/${(d=e.value)==null?void 0:d.uid}/availabilities`)),s=kI(),r=Ue(!1),o=Ue(),a=Re(()=>i.value.filter(f=>f.date.toDate()>new Date));function l(f){r.value=!0,o.value=f}async function c(){var b,T;if(o.value===null)return;const f=(b=o.value)==null?void 0:b.id,g=(T=e.value)==null?void 0:T.uid,y=zn(ln,`users/${g}/availabilities/${f}`),v=zn(ln,`users/${g}`),w=zn(ln,`availabilities/${f}`);await MV(ln,async A=>{var O;A.update(w,{players:VV(v)}),A.delete(y),((O=o.value)==null?void 0:O.date.seconds)-Math.round(new Date().getTime()/1e3)<24*60*60&&A.update(v,{admonitionCount:$V(1)})}),r.value=!1}function u(){s.installEvent,s.installEvent&&s.installEvent.prompt()}return(f,g)=>{const y=tu("RouterLink");return H(n)?(te(),he("div",K2,[U("div",null,[U("h2",null,Ze(H(n).username),1)]),U("div",null,[U("div",G2," Ammonizioni: "+Ze(H(n).admonitionCount),1)]),a.value.length>0?(te(),he("div",Q2,[Y2,H(n).admonitionCount>=2?(te(),he("div",X2," Anche se hai prenotato questi slot, avendo due o più ammonizioni non verranno presi in considerazione ")):vt("",!0),a.value.length>0?(te(),he("div",J2,[(te(!0),he(it,null,fi(a.value,v=>(te(),he("div",{class:"bookedSlot",key:v.id},[Z2,en(" "+Ze(v.date.toDate().getDate())+" "+Ze(H(wa)[v.date.toDate().getMonth()])+" "+Ze(v.timeSlot)+" ",1),U("md-icon-button",{onClick:w=>l(v)},nU,8,eU),U("md-dialog",{class:"removeDialog",type:"alert",open:r.value},[sU,o.value?(te(),he("form",rU,[U("div",null," Sei sicuro di voler disdire per il "+Ze(o.value.date.toDate().getDate())+" "+Ze(H(wa)[o.value.date.toDate().getMonth()])+" "+Ze(o.value.timeSlot)+"? ",1),o.value.date.seconds-Math.round(new Date().getTime()/1e3)<24*60*60?(te(),he("p",oU," Lo slot è fra meno di 24 ore. La disdetta ti costerà un'ammonizione ")):vt("",!0)])):vt("",!0),U("div",aU,[U("md-text-button",{form:"form-id",value:"cancel",onClick:g[0]||(g[0]=w=>r.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:c},"Disdici")])],8,iU)]))),128))])):vt("",!0)])):vt("",!0),H(n).role==="admin"?(te(),he("div",lU,[Ge(y,{to:"/adminPanel"},{default:an(()=>[en(" Admin ")]),_:1})])):vt("",!0),H(s)&&H(s).installEvent?(te(),he("div",{key:2,class:"section button",onClick:u}," Installa app ")):vt("",!0)])):vt("",!0)}}});const YI=Qu(cU,[["__scopeId","data-v-d890dc55"]]),uU=Object.freeze(Object.defineProperty({__proto__:null,default:YI},Symbol.toStringTag,{value:"Module"})),hU=t=>(Jc("data-v-a529ec71"),t=t(),Zc(),t),dU={id:"home"},fU=hU(()=>U("h1",{class:"title display-medium"},"Fonti Paintball",-1)),pU={class:"content"},mU=Yt({__name:"HomeView",setup(t){const e=Ue(window.innerWidth),n=()=>e.value=window.innerWidth;window.addEventListener("resize",n),qf(()=>window.removeEventListener("resize",n));const i=Kr();return(s,r)=>(te(),he("div",dU,[e.value<900||!H(i)?(te(),ei(m2,{key:0})):vt("",!0),fU,U("div",pU,[U("main",null,[Ge(Qh,{path:"/rules"},{title:an(()=>[en(" Regolamento ")]),content:an(()=>[en(" Da leggere prima di prenotare. Scopri come, quando e quanto puoi farlo ")]),_:1}),Ge(Qh,{path:"/availability"},{title:an(()=>[en(" Calendario ")]),content:an(()=>[en(" Inserisci qui la tua disponibilità prenotando uno slot ")]),_:1}),Ge(Qh,null,{title:an(()=>[en(" Statistiche giocatori ")]),content:an(()=>[en(" Qui verranno raccolti i tuoi dati su vittorie, sconfitte e uccisioni (prossimamente...) ")]),_:1})]),e.value>900&&H(i)?(te(),ei(YI,{key:0})):vt("",!0)])]))}});const gU=Qu(mU,[["__scopeId","data-v-a529ec71"]]);function Hm(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let qs=Hm();function XI(t){qs=t}const JI=/[&<>"']/,_U=new RegExp(JI.source,"g"),ZI=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,yU=new RegExp(ZI.source,"g"),vU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wv=t=>vU[t];function St(t,e){if(e){if(JI.test(t))return t.replace(_U,wv)}else if(ZI.test(t))return t.replace(yU,wv);return t}const EU=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function eA(t){return t.replace(EU,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const wU=/(^|[^\[])\^/g;function xe(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(i,s)=>(s=typeof s=="object"&&"source"in s?s.source:s,s=s.replace(wU,"$1"),t=t.replace(i,s),n),getRegex:()=>new RegExp(t,e)};return n}const bU=/[^\w:]/g,TU=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function bv(t,e,n){if(t){let i;try{i=decodeURIComponent(eA(n)).replace(bU,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!TU.test(n)&&(n=CU(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Sl={},IU=/^[^:]+:\/*[^/]*$/,AU=/^([^:]+:)[\s\S]*$/,RU=/^([^:]+:\/*[^/]*)[\s\S]*$/;function CU(t,e){Sl[" "+t]||(IU.test(t)?Sl[" "+t]=t+"/":Sl[" "+t]=jl(t,"/",!0)),t=Sl[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(AU,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(RU,"$1")+e:t+e}const Fc={exec:()=>null};function Tv(t,e){const n=t.replace(/\|/g,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=n.split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i}function jl(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i;){const r=t.charAt(i-s-1);if(r===e&&!n)s++;else if(r!==e&&n)s++;else break}return t.slice(0,i-s)}function SU(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let i=0,s=0;for(;s<n;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return-1}function kU(t,e){!t||t.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(t.sanitize||t.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(t.highlight||t.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),t.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),t.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),t.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),t.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(t.headerIds||t.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Iv(t,e,n,i){const s=e.href,r=e.title?St(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:s,title:r,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:r,text:St(o)}}function PU(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=i.length?s.slice(i.length):s}).join(`
`)}class Uc{constructor(e){Se(this,"options");Se(this,"rules");Se(this,"lexer");this.options=e||qs}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:jl(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=PU(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const s=jl(i,"#");(this.options.pedantic||!s||/ $/.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=n[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(i);return this.lexer.state.top=s,{type:"blockquote",raw:n[0],tokens:r,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i,s,r,o,a,l,c,u,h,d,f,g,y=n[1].trim();const v=y.length>1,w={type:"list",raw:"",ordered:v,start:v?+y.slice(0,-1):"",loose:!1,items:[]};y=v?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=v?y:"[*+-]");const b=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(n=b.exec(e))||this.rules.block.hr.test(e)));){if(i=n[0],e=e.substring(i.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,A=>" ".repeat(3*A.length)),h=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(h)&&(i+=h+`
`,e=e.substring(h.length+1),g=!0),!g){const A=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),O=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),j=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),ie=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],h=d,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(j.test(h)||ie.test(h)||A.test(h)||O.test(e)));){if(h.search(/[^ ]/)>=o||!h.trim())f+=`
`+h.slice(o);else{if(l||u.search(/[^ ]/)>=4||j.test(u)||ie.test(u)||O.test(u))break;f+=`
`+h}!l&&!h.trim()&&(l=!0),i+=d+`
`,e=e.substring(d.length+1),u=h.slice(o)}}w.loose||(c?w.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(f),s&&(r=s[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),w.items.push({type:"list_item",raw:i,task:!!s,checked:r,loose:!1,text:f}),w.raw+=i}w.items[w.items.length-1].raw=i.trimRight(),w.items[w.items.length-1].text=f.trimRight(),w.raw=w.raw.trimRight();const T=w.items.length;for(a=0;a<T;a++)if(this.lexer.state.top=!1,w.items[a].tokens=this.lexer.blockTokens(w.items[a].text,[]),!w.loose){const A=w.items[a].tokens.filter(j=>j.type==="space"),O=A.length>0&&A.some(j=>/\n.*\n/.test(j.raw));w.loose=O}if(w.loose)for(a=0;a<T;a++)w.items[a].loose=!0;return w}}html(e){const n=this.rules.block.html.exec(e);if(n){const i={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):St(n[0]),r=i;r.type="paragraph",r.text=s,r.tokens=this.lexer.inline(s)}return i}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),s=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:r}}}table(e){const n=this.rules.block.table.exec(e);if(n){const i={type:"table",raw:n[0],header:Tv(n[1]).map(s=>({text:s})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){let s=i.align.length,r,o,a,l;for(r=0;r<s;r++)/^ *-+: *$/.test(i.align[r])?i.align[r]="right":/^ *:-+: *$/.test(i.align[r])?i.align[r]="center":/^ *:-+ *$/.test(i.align[r])?i.align[r]="left":i.align[r]=null;for(s=i.rows.length,r=0;r<s;r++)i.rows[r]=Tv(i.rows[r],i.header.length).map(c=>({text:c}));for(s=i.header.length,o=0;o<s;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(s=i.rows.length,o=0;o<s;o++)for(l=i.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return i}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:St(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):St(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=jl(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=SU(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(i)?s=s.slice(1):s=s.slice(1,-1)),Iv(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let s=(i[2]||i[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s){const r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return Iv(i,s,i[0],this.lexer)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let a,l,c=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(s=h.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...e].slice(0,o+s.index+l+1).join("");if(Math.min(o,l)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const s=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return s&&r&&(i=i.substring(1,i.length-1)),i=St(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const i=this.rules.inline.autolink.exec(e);if(i){let s,r;return i[2]==="@"?(s=St(this.options.mangle?n(i[1]):i[1]),r="mailto:"+s):(s=St(i[1]),r=s),{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let i;if(i=this.rules.inline.url.exec(e)){let s,r;if(i[2]==="@")s=St(this.options.mangle?n(i[0]):i[0]),r="mailto:"+s;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);s=St(i[0]),i[1]==="www."?r="http://"+i[0]:r=i[0]}return{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const i=this.rules.inline.text.exec(e);if(i){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):St(i[0]):i[0]:s=St(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:s}}}}const X={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fc,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};X._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;X._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;X.def=xe(X.def).replace("label",X._label).replace("title",X._title).getRegex();X.bullet=/(?:[*+-]|\d{1,9}[.)])/;X.listItemStart=xe(/^( *)(bull) */).replace("bull",X.bullet).getRegex();X.list=xe(X.list).replace(/bull/g,X.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+X.def.source+")").getRegex();X._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";X._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;X.html=xe(X.html,"i").replace("comment",X._comment).replace("tag",X._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();X.lheading=xe(X.lheading).replace(/bull/g,X.bullet).getRegex();X.paragraph=xe(X._paragraph).replace("hr",X.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X._tag).getRegex();X.blockquote=xe(X.blockquote).replace("paragraph",X.paragraph).getRegex();X.normal={...X};X.gfm={...X.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};X.gfm.table=xe(X.gfm.table).replace("hr",X.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X._tag).getRegex();X.gfm.paragraph=xe(X._paragraph).replace("hr",X.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",X.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X._tag).getRegex();X.pedantic={...X.normal,html:xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",X._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xe(X.normal._paragraph).replace("hr",X.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",X.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const B={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fc,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fc,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};B._punctuation="\\p{P}$+<=>`^|~";B.punctuation=xe(B.punctuation,"u").replace(/punctuation/g,B._punctuation).getRegex();B.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;B.anyPunctuation=/\\[punct]/g;B._escapes=/\\([punct])/g;B._comment=xe(X._comment).replace("(?:-->|$)","-->").getRegex();B.emStrong.lDelim=xe(B.emStrong.lDelim,"u").replace(/punct/g,B._punctuation).getRegex();B.emStrong.rDelimAst=xe(B.emStrong.rDelimAst,"gu").replace(/punct/g,B._punctuation).getRegex();B.emStrong.rDelimUnd=xe(B.emStrong.rDelimUnd,"gu").replace(/punct/g,B._punctuation).getRegex();B.anyPunctuation=xe(B.anyPunctuation,"gu").replace(/punct/g,B._punctuation).getRegex();B._escapes=xe(B._escapes,"gu").replace(/punct/g,B._punctuation).getRegex();B._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;B._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;B.autolink=xe(B.autolink).replace("scheme",B._scheme).replace("email",B._email).getRegex();B._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;B.tag=xe(B.tag).replace("comment",B._comment).replace("attribute",B._attribute).getRegex();B._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;B._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;B._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;B.link=xe(B.link).replace("label",B._label).replace("href",B._href).replace("title",B._title).getRegex();B.reflink=xe(B.reflink).replace("label",B._label).replace("ref",X._label).getRegex();B.nolink=xe(B.nolink).replace("ref",X._label).getRegex();B.reflinkSearch=xe(B.reflinkSearch,"g").replace("reflink",B.reflink).replace("nolink",B.nolink).getRegex();B.normal={...B};B.pedantic={...B.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:xe(/^!?\[(label)\]\((.*?)\)/).replace("label",B._label).getRegex(),reflink:xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",B._label).getRegex()};B.gfm={...B.normal,escape:xe(B.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};B.gfm.url=xe(B.gfm.url,"i").replace("email",B.gfm._extended_email).getRegex();B.breaks={...B.gfm,br:xe(B.br).replace("{2,}","*").getRegex(),text:xe(B.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function xU(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Av(t){let e="",n,i;const s=t.length;for(n=0;n<s;n++)i=t.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class Gn{constructor(e){Se(this,"tokens");Se(this,"options");Se(this,"state");Se(this,"tokenizer");Se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||qs,this.options.tokenizer=this.options.tokenizer||new Uc,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:X.normal,inline:B.normal};this.options.pedantic?(n.block=X.pedantic,n.inline=B.pedantic):this.options.gfm&&(n.block=X.gfm,this.options.breaks?n.inline=B.breaks:n.inline=B.gfm),this.tokenizer.rules=n}static get rules(){return{block:X,inline:B}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i),o=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,s,r,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),s=n[n.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e,Av)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,Av))){e=e.substring(i.raw.length),n.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(r,xU)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Bc{constructor(e){Se(this,"options");this.options=e||qs}code(e,n,i){const s=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(i=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+St(s)+'">'+(i?e:St(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:St(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i,s){if(this.options.headerIds){const r=this.options.headerPrefix+s.slug(i);return`<h${n} id="${r}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,i){const s=n?"ol":"ul",r=n&&i!==1?' start="'+i+'"':"";return"<"+s+r+`>
`+e+"</"+s+`>
`}listitem(e,n,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){if(e=bv(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image(e,n,i){if(e=bv(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s=`<img src="${e}" alt="${i}"`;return n&&(s+=` title="${n}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class jm{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class qm{constructor(){Se(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let i=e,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[e];do s++,i=e+"-"+s;while(this.seen.hasOwnProperty(i))}return n||(this.seen[e]=s,this.seen[i]=0),i}slug(e,n={}){const i=this.serialize(e);return this.getNextSafeSlug(i,n.dryrun)}}class Qn{constructor(e){Se(this,"options");Se(this,"renderer");Se(this,"textRenderer");Se(this,"slugger");this.options=e||qs,this.options.renderer=this.options.renderer||new Bc,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new jm,this.slugger=new qm}static parse(e,n){return new Qn(n).parse(e)}static parseInline(e,n){return new Qn(n).parseInline(e)}parse(e,n=!0){let i="",s,r,o,a,l,c,u,h,d,f,g,y,v,w,b,T,A,O,j;const ie=e.length;for(s=0;s<ie;s++){if(f=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(j=this.options.extensions.renderers[f.type].call({parser:this},f),j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){i+=j||"";continue}switch(f.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(f.tokens),f.depth,eA(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(f.text,f.lang,!!f.escaped);continue}case"table":{for(h="",u="",a=f.header.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(f.header[r].tokens),{header:!0,align:f.align[r]});for(h+=this.renderer.tablerow(u),d="",a=f.rows.length,r=0;r<a;r++){for(c=f.rows[r],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(u)}i+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(f.tokens),i+=this.renderer.blockquote(d);continue}case"list":{for(g=f.ordered,y=f.start,v=f.loose,a=f.items.length,d="",r=0;r<a;r++)b=f.items[r],T=b.checked,A=b.task,w="",b.task&&(O=this.renderer.checkbox(!!T),v?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=O+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=O+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:O}):w+=O),w+=this.parse(b.tokens,v),d+=this.renderer.listitem(w,A,!!T);i+=this.renderer.list(d,g,y);continue}case"html":{i+=this.renderer.html(f.text,f.block);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;s+1<ie&&e[s+1].type==="text";)f=e[++s],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);i+=n?this.renderer.paragraph(d):d;continue}default:{const Y='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(Y),"";throw new Error(Y)}}}return i}parseInline(e,n){n=n||this.renderer;let i="",s,r,o;const a=e.length;for(s=0;s<a;s++){if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){i+=o||"";continue}switch(r.type){case"escape":{i+=n.text(r.text);break}case"html":{i+=n.html(r.text);break}case"link":{i+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{i+=n.image(r.href,r.title,r.text);break}case"strong":{i+=n.strong(this.parseInline(r.tokens,n));break}case"em":{i+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{i+=n.codespan(r.text);break}case"br":{i+=n.br();break}case"del":{i+=n.del(this.parseInline(r.tokens,n));break}case"text":{i+=n.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}}class Bo{constructor(e){Se(this,"options");this.options=e||qs}preprocess(e){return e}postprocess(e){return e}}Se(Bo,"passThroughHooks",new Set(["preprocess","postprocess"]));var Ia,Tf,zc,tA;class DU{constructor(...e){nh(this,Ia);nh(this,zc);Se(this,"defaults",Hm());Se(this,"options",this.setOptions);Se(this,"parse",rl(this,Ia,Tf).call(this,Gn.lex,Qn.parse));Se(this,"parseInline",rl(this,Ia,Tf).call(this,Gn.lexInline,Qn.parseInline));Se(this,"Parser",Qn);Se(this,"parser",Qn.parse);Se(this,"Renderer",Bc);Se(this,"TextRenderer",jm);Se(this,"Lexer",Gn);Se(this,"lexer",Gn.lex);Se(this,"Tokenizer",Uc);Se(this,"Slugger",qm);Se(this,"Hooks",Bo);this.use(...e)}walkTokens(e,n){let i=[];for(const s of e)switch(i=i.concat(n.call(this,s)),s.type){case"table":{for(const r of s.header)i=i.concat(this.walkTokens(r.tokens,n));for(const r of s.rows)for(const o of r)i=i.concat(this.walkTokens(o.tokens,n));break}case"list":{i=i.concat(this.walkTokens(s.items,n));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{i=i.concat(this.walkTokens(s[r],n))}):s.tokens&&(i=i.concat(this.walkTokens(s.tokens,n)))}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=n.renderers[r.name];o?n.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),s.extensions=n),i.renderer){const r=this.defaults.renderer||new Bc(this.defaults);for(const o in i.renderer){const a=i.renderer[o],l=o,c=r[l];r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h||""}}s.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new Uc(this.defaults);for(const o in i.tokenizer){const a=i.tokenizer[o],l=o,c=r[l];r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new Bo;for(const o in i.hooks){const a=i.hooks[o],l=o,c=r[l];Bo.passThroughHooks.has(o)?r[l]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(d=>c.call(r,d));const h=a.call(r,u);return c.call(r,h)}:r[l]=(...u)=>{let h=a.apply(r,u);return h===!1&&(h=c.apply(r,u)),h}}s.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens;s.walkTokens=function(o){let a=[];return a.push(i.walkTokens.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}Ia=new WeakSet,Tf=function(e,n){return(i,s,r)=>{typeof s=="function"&&(r=s,s=null);const o={...s},a={...this.defaults,...o},l=rl(this,zc,tA).call(this,!!a.silent,!!a.async,r);if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(kU(a,r),a.hooks&&(a.hooks.options=a),r){const c=a.highlight;let u;try{a.hooks&&(i=a.hooks.preprocess(i)),u=e(i,a)}catch(f){return l(f)}const h=f=>{let g;if(!f)try{a.walkTokens&&this.walkTokens(u,a.walkTokens),g=n(u,a),a.hooks&&(g=a.hooks.postprocess(g))}catch(y){f=y}return a.highlight=c,f?l(f):r(null,g)};if(!c||c.length<3||(delete a.highlight,!u.length))return h();let d=0;this.walkTokens(u,f=>{f.type==="code"&&(d++,setTimeout(()=>{c(f.text,f.lang,(g,y)=>{if(g)return h(g);y!=null&&y!==f.text&&(f.text=y,f.escaped=!0),d--,d===0&&h()})},0))}),d===0&&h();return}if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(c=>e(c,a)).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>n(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(l);try{a.hooks&&(i=a.hooks.preprocess(i));const c=e(i,a);a.walkTokens&&this.walkTokens(c,a.walkTokens);let u=n(c,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(c){return l(c)}}},zc=new WeakSet,tA=function(e,n,i){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+St(s.message+"",!0)+"</pre>";if(n)return Promise.resolve(r);if(i){i(null,r);return}return r}if(n)return Promise.reject(s);if(i){i(s);return}throw s}};const $s=new DU;function Pe(t,e,n){return $s.parse(t,e,n)}Pe.options=Pe.setOptions=function(t){return $s.setOptions(t),Pe.defaults=$s.defaults,XI(Pe.defaults),Pe};Pe.getDefaults=Hm;Pe.defaults=qs;Pe.use=function(...t){return $s.use(...t),Pe.defaults=$s.defaults,XI(Pe.defaults),Pe};Pe.walkTokens=function(t,e){return $s.walkTokens(t,e)};Pe.parseInline=$s.parseInline;Pe.Parser=Qn;Pe.parser=Qn.parse;Pe.Renderer=Bc;Pe.TextRenderer=jm;Pe.Lexer=Gn;Pe.lexer=Gn.lex;Pe.Tokenizer=Uc;Pe.Slugger=qm;Pe.Hooks=Bo;Pe.parse=Pe;Pe.options;Pe.setOptions;Pe.use;Pe.walkTokens;Pe.parseInline;Qn.parse;Gn.lex;const NU=["innerHTML"],OU=`
# Come funziona
Per prenotare basta aprire il calendario e prenotare uno degli slot già aperti o crearne uno nuovo cliccando su un giorno. Gli slot disponibili ogni giorno sono due:
- mattina: 8:00/10:30 circa
- pomeriggio: 17:00/19:30 circa

Si gioca se si raggiunge il numero necessario di giocatori. **Gli orari potrebbero variare e anche se si raggiunge il numero necessario di giocatori si potrebbe non giocare**. Per ogni slot prenotato i giocatori riceveranno una conferma e gli orari esatti nel caso in cui si giochi.

# Regolamento
- Ogni giocatore può segnarsi per un numero illimitato di slot. Ogni giorno ci sono 2 slot disponibili: uno per la mattina e uno per il pomeriggio
- Segnarsi per uno slot vuol dire dare la disponibilità a giocare a paintball per quel giorno e quella fascia oraria
- Ogni slot ha 3 posti disponibili
- La prenotazione dà la garanzia di giocare nel caso in cui venga raggiunto il numero necessario di giocatori (4) e nel caso in cui venga fatta una partita
- Raggiungere il numero necessario di giocatori non garantisce che venga fatta una partita
- I giocatori che prenotano uno slot e annullano e/o non si presentano vengono ammoniti
- Questo regolamento potrà subire variazioni. Sarà premura di chi lo accetta accertarsi di aver letto l'ultima versione
- I giocatori sono responsabili dell'attrezzatura offerta e, in caso di danno, del pagamento della riparazione/sostituzione dell'attrezzatura danneggiata
- Potrebbe essere richiesta una quota per l'acquisto dei paintballs (correlata al numero dei paintballs usati dal giocatore)

## Ammonizioni
Essere ammoniti implica avere delle limitazioni.

Il giocatore con **una ammonizione**:
- può prenotarsi ma se un giocatore senza ammonizione vuole prendere il suo slot avrà la precedenza. Da ciò deriva che il giocatore ammonito non ha la garanzia di giocare anche se ha prenotato

Il giocatore con **due ammonizioni**:
- non può prenotarsi
- verrà contattato solo come possibile sostituto
- ogni rifiuto costerà una ammonizione aggiuntiva
- i giocatori con meno ammonizioni hanno la precedenza sui giocatori con più ammonizioni

## Riduzione ammonizioni
- Ogni presenza eliminerà una ammonizione
- Il giocatore con una sola ammonizione dovrà partecipare a due partite per eliminare la restante ammonizione

**Le ammonizioni sono retroattive ed hanno perciò effetto anche sulle prenotazioni effettuate prima della ricezione delle ammonizioni.**

# Abbigliamento e protezioni
L'unica protezione fornita è un casco che copre interamente viso e orecchie. 
Sono consigliati pantaloni lunghi e scarpe da trekking (o comunque adatte al bosco). 
Altre protezioni utili potrebbero essere: ginocchiere, guanti, protezione per il collo, pettorina rinforzata.
<br />

**NB:** 
Questa webapp è stata creata in poco tempo, ci sono sicuramente bug e dimenticanze (che si spera verranno risolte in futuro). Qualunque cosa permessa dall'app ma non dal regolamento e qualunque altro utilizzo scorretto dell'app varrà due ammonizioni 

<br />
<br />

v.1.3
`,MU=Yt({__name:"RulesView",setup(t){const e=Pe(OU);return(n,i)=>(te(),he("div",{class:"output",innerHTML:H(e)},null,8,NU))}});/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const LU=Xt`@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-icon-color: CanvasText;--md-radio-hover-icon-color: CanvasText;--md-radio-focus-icon-color: CanvasText;--md-radio-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class VU{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=n=>{const i=n.key==="ArrowDown",s=n.key==="ArrowUp",r=n.key==="ArrowLeft",o=n.key==="ArrowRight";if(!r&&!o&&!i&&!s)return;const a=this.getNamedSiblings();if(!a.length)return;n.preventDefault();const c=getComputedStyle(this.host).direction==="rtl"?r||i:o||i,u=a.indexOf(this.host);let h=c?u+1:u-1;for(;h!==u;){h>=a.length?h=0:h<0&&(h=a.length-1);const d=a[h];if(d.hasAttribute("disabled")){c?h++:h--;continue}for(const f of a)f!==d&&(f.checked=!1,f.tabIndex=-1);d.checked=!0,d.removeAttribute("tabindex"),d.focus(),d.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.getNamedSiblings())e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.getNamedSiblings(),n=e.find(i=>i.checked);if(n||this.focused){const i=n||this.host;i.removeAttribute("tabindex");for(const s of e)s!==i&&(s.tabIndex=-1);return}for(const i of e)i.removeAttribute("tabindex")}getNamedSiblings(){const e=this.host.getAttribute("name");return!e||!this.root?[]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var nA;const If=Symbol("checked");let $U=0;class os extends Gt{get checked(){return this[If]}set checked(e){const n=this.checked;if(n===e)return;this[If]=e;const i=String(e);this.internals.setFormValue(this.checked?this.value:null,i),this.requestUpdate("checked",n),this.selectionController.handleCheckedChange()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.maskId=`cutout${++$U}`,this[nA]=!1,this.disabled=!1,this.value="on",this.selectionController=new VU(this),this.internals=this.attachInternals(),this.addController(this.selectionController),this.addEventListener("click",e=>{GI(e)&&(this.focus(),KI(this.input))})}focus(){var e;(e=this.input)==null||e.focus()}render(){const e={checked:this.checked},{ariaLabel:n}=this;return Dt`
      <div class="container ${nl(e)}">
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle class="outer circle" cx="10" cy="10" r="10"
              mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>
        <input
          id="input"
          type="radio"
          name=${this.name}
          aria-label=${n||de}
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        >
      </div>
    `}handleChange(e){this.disabled||(this.checked=!0,WI(this,e))}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}}nA=If;Yu(os);os.shadowRootOptions={...Gt.shadowRootOptions,delegatesFocus:!0};os.formAssociated=!0;G([Le({type:Boolean})],os.prototype,"checked",null);G([Le({type:Boolean,reflect:!0})],os.prototype,"disabled",void 0);G([Le()],os.prototype,"value",void 0);G([vn("input")],os.prototype,"input",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const FU=Xt`:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:grid;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:48px}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Af=class extends os{};Af.styles=[FU,LU];Af=G([Mn("md-radio")],Af);const UU=U("span",{"aria-hidden":"true"},"Mattina",-1),BU=U("span",{"aria-hidden":"true"},"Pomeriggio",-1),zU={props:{date:{type:Date,required:!0}},methods:{onSelect(t){this.$emit("select",{timeSlot:t})}}},HU=Yt({...zU,__name:"BookSlot",setup(t){return(e,n)=>(te(),he("div",null,[U("h2",null,"Dai la disponibilità per il "+Ze(t.date.getDate())+" "+Ze(H(wa)[t.date.getMonth()]),1),U("form",null,[U("label",null,[U("md-radio",{onChange:n[0]||(n[0]=i=>e.onSelect("mattina")),type:"radio",name:"time",value:"mattina","aria-label":"Mattina","touch-target":"wrapper",checked:""},null,32),UU]),U("label",null,[U("md-radio",{onChange:n[1]||(n[1]=i=>e.onSelect("pomeriggio")),type:"radio",name:"time",value:"pomeriggio","aria-label":"Pomeriggio","touch-target":"wrapper"},null,32),BU])])]))}});const jU={props:{date:{type:Date,required:!0},time:{type:String,required:!0}}},qU=Yt({...jU,__name:"ExistingSlot",setup(t){return(e,n)=>(te(),he("div",null,[U("h2",null,"Dai la disponibilità per il "+Ze(t.date.getDate())+" "+Ze(H(wa)[t.date.getMonth()])+" "+Ze(t.time),1)]))}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class WU extends zt{renderElevation(){return Dt`<md-elevation></md-elevation>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const KU=Xt`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-type: var(--md-filled-tonal-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const GU=Xt`md-elevation{transition-duration:280ms}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Rf=class extends WU{};Rf.styles=[zm,GU,KU];Rf=G([Mn("md-filled-tonal-button")],Rf);var QU=Object.defineProperty,YU=(t,e,n)=>e in t?QU(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kl=(t,e,n)=>(YU(t,typeof e!="symbol"?e+"":e,n),n);const sl=()=>Zu(new Date),XU=(t,e,n)=>{switch(e){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return Wm(t,n);default:return t}},JU=t=>[...Array(7)].map((e,n)=>so(t,n)),so=(t,e)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+e,t.getHours(),t.getMinutes(),t.getSeconds()),Wm=(t,e)=>so(t,(e-t.getDay()-7)%-7),ZU=(t,e)=>so(Wm(t,e),7),Ta=t=>new Date(t.getFullYear(),t.getMonth()),e4=t=>Math.ceil(t.getDate()/7),t4=(t,e,n)=>new Date(t.getFullYear()+(e=="year"?n:0),t.getMonth()+(e=="month"?n:0),t.getDate()+(e=="week"?n*7:0)),Km=t=>("0"+String(t.getMonth()+1)).slice(-2),Gm=t=>("0"+String(t.getDate())).slice(-2),iA=t=>t.getFullYear()+"-"+Km(t),n4=t=>iA(t)+"-"+Gm(t),i4=t=>Km(t)+"-"+Gm(t),s4=(t,e,n)=>{if(t.getHours()===0&&t.getMinutes()===0&&t.getSeconds()===0)return"";if(!eh()){var i=new Date().getTimezoneOffset()*6e4;return new Date(t.getTime()-i).toISOString().slice(11,16)}return t.toLocaleTimeString(e,n)},r4=(t,e,n,i)=>{const s=t.getFullYear()===e.getFullYear(),r=rA(t,e),o=n!=="year"&&n!=="month";let a=[];return a.push(i[t.getMonth()]),o&&(a.push(" "),a.push(t.getDate())),s||(a.push(o?", ":" "),a.push(t.getFullYear())),!r||!s?(a.push(" – "),r||a.push(i[e.getMonth()]),o&&a.push(" ")):o&&a.push(" – "),o?(a.push(e.getDate()),a.push(", ")):a.push(" "),a.push(e.getFullYear()),a.join("")},sA=(t,e)=>{const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return(n-i)/864e5},o4=(t,e)=>!!t&&!!e&&sA(t,e)===0,a4=(t,e)=>!!t&&!!e&&t.getTime()===e.getTime(),rA=(t,e)=>!!t&&!!e&&t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth(),l4=t=>Ta(t)<Ta(sl()),c4=t=>Ta(t)>Ta(sl()),u4=t=>Zu(t)>sl(),h4=t=>Zu(t)<sl(),d4=t=>t.getMonth()!==so(t,7).getMonth(),f4=t=>t.getMonth()!==so(t,1).getMonth(),oA=t=>{let e=[...Array(7)].map(n=>0);return t.split(/\D/,7).forEach((n,i)=>e[i]=Number(n)),e[1]--,new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},Cf=t=>typeof t=="string"?oA(t):new Date(t),Zu=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},p4=t=>t.substring(0,2),eh=()=>typeof Intl<"u",m4=(t,e)=>{if(!eh())return[...Array(12)].map(i=>"");const n=new Intl.DateTimeFormat(t,{month:e});return[...Array(12)].map((i,s)=>n.format(new Date(2017,s,1)))},g4=(t,e,n)=>{if(!eh())return[...Array(7)].map(s=>"");const i=new Intl.DateTimeFormat(t,{weekday:e});return[...Array(7)].map((s,r)=>i.format(new Date(2017,0,(r+1+n)%7)))},_4=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),y4=(t,e)=>{const n=t.classes?[...t.classes]:[];return e&&n.push("isHovered"),{originalItem:t,startDate:Cf(t.startDate),endDate:Cf(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id,url:t.url,tooltip:t.tooltip??t.title}},q={addDays:so,beginningOfMonth:Ta,beginningOfPeriod:XU,beginningOfWeek:Wm,dateOnly:Zu,dayDiff:sA,daysOfWeek:JU,endOfWeek:ZU,formattedPeriod:r4,formattedTime:s4,fromIsoStringToLocalDate:oA,getDefaultBrowserLocale:_4,getFormattedMonthNames:m4,getFormattedWeekdayNames:g4,incrementPeriod:t4,instanceOfMonth:e4,isFutureMonth:c4,isInFuture:u4,isInPast:h4,isLastDayOfMonth:f4,isLastInstanceOfMonth:d4,isoMonthDay:i4,isoYearMonth:iA,isoYearMonthDay:n4,isPastMonth:l4,isSameDate:o4,isSameDateTime:a4,isSameMonth:rA,languageCode:p4,normalizeItem:y4,paddedDay:Gm,paddedMonth:Km,supportsIntl:eh,today:sl,toLocalDate:Cf};class v4{constructor(){kl(this,"currentDragItem"),kl(this,"dateSelectionOrigin"),kl(this,"currentHoveredItemId",""),kl(this,"CalendarMath",q)}}const E4={class:"cv-header-days"},w4={key:0,class:"cv-weeknumber"},b4=["aria-multiselectable"],T4={key:0,class:"cv-weeknumber"},I4={class:"cv-weekdays"},A4=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],R4={class:"cv-day-number"},C4=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],S4=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],k4=Yt({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(t,{emit:e}){const n=t,i=zr(new v4),s=Re(()=>n.locale||q.getDefaultBrowserLocale()),r=Re(()=>n.showDate?q.dateOnly(n.showDate):q.today()),o=Re(()=>q.beginningOfPeriod(r.value,n.displayPeriodUom,n.startingDayOfWeek)),a=Re(()=>q.addDays(q.incrementPeriod(o.value,n.displayPeriodUom,n.displayPeriodCount),-1)),l=Re(()=>{const _=q.beginningOfWeek(q.beginningOfPeriod(o.value,"year",0),n.startingDayOfWeek),I=q.beginningOfWeek(o.value,n.startingDayOfWeek);return 1+Math.floor(q.dayDiff(_,I)/7)}),c=Re(()=>q.beginningOfWeek(o.value,n.startingDayOfWeek)),u=Re(()=>q.endOfWeek(a.value,n.startingDayOfWeek)),h=Re(()=>{const _=Math.floor((q.dayDiff(c.value,u.value)+1)/7);return[...Array(_)].map((I,S)=>q.addDays(c.value,S*7))}),d=Re(()=>q.getFormattedMonthNames(s.value,n.monthNameFormat)),f=Re(()=>q.getFormattedWeekdayNames(s.value,n.weekdayNameFormat,n.startingDayOfWeek)),g=Re(()=>n.items?n.items.map(_=>q.normalizeItem(_,_.id===i.currentHoveredItemId)):[]),y=Re(()=>q.beginningOfPeriod(q.today(),n.displayPeriodUom,n.startingDayOfWeek)),v=Re(()=>q.addDays(q.incrementPeriod(y.value,n.displayPeriodUom,n.displayPeriodCount),-1)),w=Re(()=>q.formattedPeriod(o.value,a.value,n.displayPeriodUom,d.value)),b=Re(()=>{const _=y.value,I=o.value;return n.currentPeriodLabel?n.currentPeriodLabel==="icons"?n.currentPeriodLabelIcons[Math.sign(_.getTime()-I.getTime())+1]:n.currentPeriodLabel:q.formattedPeriod(_,v.value,n.displayPeriodUom,d.value)}),T=Re(()=>({previousYear:Y(-12),previousPeriod:Y(-1),nextPeriod:Y(1),previousFullPeriod:Y(-n.displayPeriodCount),nextFullPeriod:Y(n.displayPeriodCount),nextYear:Y(12),currentPeriod:y.value,currentPeriodLabel:b.value,periodStart:o.value,periodEnd:a.value,displayLocale:s.value,displayFirstDate:c.value,displayLastDate:u.value,monthNames:d.value,fixedItems:g.value,periodLabel:w.value})),A=Re(()=>({periodStart:o,periodEnd:a,displayFirstDate:c,displayLastDate:u}));Hi(()=>A,_=>{n.periodChangedCallback&&(e("period-changed"),n.periodChangedCallback(_,"watch"))},{immediate:!0,deep:!0});const O=(_,I)=>{n.disablePast&&q.isInPast(_)||n.disableFuture&&q.isInFuture(_)||e("click-date",_,wn(_,_),I)},j=(_,I)=>e("click-item",_,I),ie=_=>"dow"+(_+n.startingDayOfWeek)%7,Y=_=>{const I=q.incrementPeriod(o.value,n.displayPeriodUom,_),S=q.incrementPeriod(I,n.displayPeriodUom,n.displayPeriodCount);return n.disablePast&&S<=q.today()||n.disableFuture&&I>q.today()?null:I},ae=(_,I)=>{i.currentHoveredItemId=_.id,n.doEmitItemMouseEvents&&e("item-mouseenter",_,I)},Ae=(_,I)=>{i.currentHoveredItemId="",n.doEmitItemMouseEvents&&e("item-mouseleave",_,I)},ct=(_,I)=>{var S,F;if(!n.enableDateSelection)return!1;(S=I.dataTransfer)==null||S.setData("text",_.toString());let x=new Image;return x.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(F=I.dataTransfer)==null||F.setDragImage(x,10,10),i.dateSelectionOrigin=_,e("date-selection-start",Rt(_),I),!0},At=(_,I)=>{var S;return n.enableDragDrop?((S=I.dataTransfer)==null||S.setData("text",_.id),i.currentDragItem=_,i.dateSelectionOrigin=void 0,e("drag-start",_,I),!0):!1},Rt=_=>_<=i.dateSelectionOrigin?[_,i.dateSelectionOrigin]:[i.dateSelectionOrigin,_],li=(_,I)=>{n.enableDragDrop&&e("drag-over-date",i.currentDragItem,_,I)},Jt=(_,I)=>{n.enableDateSelection&&i.dateSelectionOrigin&&e("date-selection",Rt(_),I),n.enableDragDrop&&(e("drag-enter-date",i.currentDragItem,_,I),I.target.classList.add("draghover"))},Ee=(_,I)=>{n.enableDateSelection&&n.selectionStart||!n.enableDragDrop||(e("drag-leave-date",i.currentDragItem,_,I),I.target.classList.remove("draghover"))},De=(_,I)=>{if(n.enableDateSelection&&i.dateSelectionOrigin){e("date-selection-finish",Rt(_),I);return}n.enableDragDrop&&(e("drop-on-date",i.currentDragItem,_,I),I.target.classList.remove("draghover"))},Ie=(_,I)=>_.startDate<I.startDate?-1:I.startDate<_.startDate?1:_.endDate>I.endDate?-1:I.endDate>_.endDate?1:_.id<I.id?-1:1,En=_=>wn(_,q.addDays(_,6)),wn=(_,I)=>g.value.filter(S=>S.endDate>=_&&q.dateOnly(S.startDate)<=I,this).sort(Ie),mn=_=>!!g.value.find(I=>I.endDate>=_&&q.dateOnly(I.startDate)<=_),yt=_=>!(!n.selectionStart||!n.selectionEnd||_<q.dateOnly(n.selectionStart)||_>q.dateOnly(n.selectionEnd)),ci=_=>{const I=En(_),S=[],F=[[],[],[],[],[],[],[]];if(!I)return S;for(let x=0;x<I.length;x++){const p=Object.assign({},I[x],{classes:[...I[x].classes],itemRow:0}),m=p.startDate<_,E=m?0:q.dayDiff(_,p.startDate),R=Math.min(7-E,q.dayDiff(q.addDays(_,E),p.endDate)+1);m&&p.classes.push("continued"),q.dayDiff(_,p.endDate)>6&&p.classes.push("toBeContinued"),q.isInPast(p.endDate)&&p.classes.push("past"),p.originalItem.url&&p.classes.push("hasUrl");for(let C=0;C<7;C++)if(C===E){let P=0;for(;F[C][P];)P++;p.itemRow=P,F[C][P]=!0}else C<E+R&&(F[C][p.itemRow]=!0);p.classes.push(`offset${E}`),p.classes.push(`span${R}`),S.push(p)}return S},Ci=_=>{const I='<span class="startTime">'+q.formattedTime(_.startDate,s.value,n.timeFormatOptions)+"</span>";let S="";return q.isSameDateTime(_.startDate,_.endDate)||(S='<span class="endTime">'+q.formattedTime(_.endDate,s.value,n.timeFormatOptions)+"</span>"),I+S},as=_=>n.showTimes?Ci(_)+" "+_.title:_.title,Je=_=>{const I=_.itemRow,S=n.itemContentHeight,F=n.itemBorderHeight;return`calc(${n.itemTop} + ${I}*${S} + ${I}*${F})`};return(_,I)=>(te(),he("div",{"aria-label":"Calendar",class:di(["cv-wrapper",`locale-${H(q).languageCode(H(s))}`,`locale-${H(s)}`,`y${H(o).getFullYear()}`,`m${H(q).paddedMonth(H(o))}`,`period-${t.displayPeriodUom}`,`periodCount-${t.displayPeriodCount}`,{past:H(q).isPastMonth(H(o)),future:H(q).isFutureMonth(H(o)),noIntl:!H(q).supportsIntl}])},[$n(_.$slots,"header",{headerProps:H(T)}),U("div",E4,[t.displayWeekNumbers?(te(),he("div",w4)):vt("",!0),(te(!0),he(it,null,fi(H(f),(S,F)=>$n(_.$slots,"dayHeader",{index:ie(F),label:S},()=>[(te(),he("div",{key:ie(F),class:di([ie(F),"cv-header-day"])},Ze(S),3))])),256))]),U("div",{"aria-multiselectable":t.enableDateSelection,class:"cv-weeks"},[(te(!0),he(it,null,fi(H(h),(S,F)=>(te(),he("div",{key:`${F}-week`,class:di(["cv-week",`week${F+1}`,`ws${H(q).isoYearMonthDay(S)}`])},[t.displayWeekNumbers?(te(),he("div",T4,[$n(_.$slots,"weekNumber",{date:S,numberInYear:H(l)+F,numberInPeriod:F+1},()=>[U("span",null,Ze(H(l)+F),1)])])):vt("",!0),U("div",I4,[(te(!0),he(it,null,fi(H(q).daysOfWeek(S),(x,p)=>(te(),he("div",{key:ie(p),draggable:t.enableDateSelection,class:di(["cv-day",ie(p),`d${H(q).isoYearMonthDay(x)}`,`d${H(q).isoMonthDay(x)}`,`d${H(q).paddedDay(x)}`,`instance${H(q).instanceOfMonth(x)}`,{today:H(q).isSameDate(x,H(q).today()),outsideOfMonth:!H(q).isSameMonth(x,H(r)),past:H(q).isInPast(x),future:H(q).isInFuture(x),last:H(q).isLastDayOfMonth(x),lastInstance:H(q).isLastInstanceOfMonth(x),hasItems:mn(x),selectionStart:H(q).isSameDate(x,t.selectionStart),selectionEnd:H(q).isSameDate(x,t.selectionEnd)},...t.dateClasses&&t.dateClasses[H(q).isoYearMonthDay(x)]||[]]),"aria-grabbed":t.enableDateSelection?yt(x):void 0,"aria-label":x.getDate().toString(),"aria-selected":yt(x),"aria-dropeffect":t.enableDragDrop&&i.currentDragItem?"move":t.enableDateSelection&&i.dateSelectionOrigin?"execute":"none",onClick:m=>O(x,m),onDragstart:m=>ct(x,m),onDrop:Gs(m=>De(x,m),["prevent"]),onDragover:Gs(m=>li(x,m),["prevent"]),onDragenter:Gs(m=>Jt(x,m),["prevent"]),onDragleave:Gs(m=>Ee(x,m),["prevent"])},[U("div",R4,Ze(x.getDate()),1),$n(_.$slots,"dayContent",{day:x})],42,A4))),128)),n.enableHtmlTitles?(te(!0),he(it,{key:0},fi(ci(S),x=>$n(_.$slots,"item",{value:x,weekStartDate:S,top:Je(x)},()=>[(te(),he("div",{key:x.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?x==i.currentDragItem:void 0,class:di([x.classes,"cv-item"]),title:x.tooltip||x.title,style:Ho(`top:${Je(x)};${x.originalItem.style}`),onDragstart:p=>At(x,p),onMouseenter:p=>ae(x,p),onMouseleave:p=>Ae(x,p),onClick:Gs(p=>j(x,p),["stop"]),innerHTML:as(x)},null,46,C4))])),256)):(te(!0),he(it,{key:1},fi(ci(S),x=>$n(_.$slots,"item",{value:x,weekStartDate:S,top:Je(x)},()=>[(te(),he("div",{key:x.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?x==i.currentDragItem:void 0,class:di([x.classes,"cv-item"]),title:x.tooltip||x.title,style:Ho(`top:${Je(x)};${x.originalItem.style}`),onDragstart:p=>At(x,p),onMouseenter:p=>ae(x,p),onMouseleave:p=>Ae(x,p),onClick:Gs(p=>j(x,p),["stop"])},Ze(as(x)),47,S4)),en(" div> ")])),256))])],2))),128))],8,b4)],2))}}),P4={class:"calendarHeader"},x4=U("md-icon",null,"chevron_left",-1),D4=[x4],N4=U("md-icon",null,"today",-1),O4=[N4],M4=U("md-icon",null,"chevron_right",-1),L4=[M4],V4={class:"date"},$4=Yt({__name:"CalendarHeader",props:{headerProps:{type:Object,required:!0}},emits:["input"],setup(t,{emit:e}){const n=t;function i(){e("input",n.headerProps.nextPeriod)}function s(){e("input",n.headerProps.currentPeriod)}function r(){e("input",n.headerProps.previousPeriod)}return(o,a)=>(te(),he("div",P4,[U("div",{class:"navButtons"},[U("md-icon-button",{onClick:r},D4),U("md-icon-button",{onClick:s},O4),U("md-icon-button",{onClick:i},L4)]),U("div",V4,Ze(H(wa)[n.headerProps.periodStart.getMonth()]),1)]))}});const F4={class:"calendarContainer"},U4={id:"calendar-component"},B4=Yt({__name:"Calendar",emits:["onClickDay","onClickItem"],setup(t,{emit:e}){var d;let n=Ue(new Date);const i=(d=Kr().value)==null?void 0:d.uid;function s(f){return f.map(y=>{const v=y.id.substring(0,8),w=y.id.charAt(y.id.length-1);let b;if(w==="M")b=8;else if(w==="P")b=15;else throw new Error("Formato ID non riconosciuto");const T=new Date(parseInt(v.substring(0,4),10),parseInt(v.substring(4,6),10)-1,parseInt(v.substring(6,8),10),b),A=new Date(T);A.setHours(T.getHours()+4);const O=y.players||y.users,j=O.filter(ie=>ie.id===i).length>0;return{id:y.id,startDate:T,endDate:A,title:O.length>=3?"Al completo":`${3-O.length} posti disponibili`,classes:j?["bookedByUser"]:["green"],slotAvailables:3-O.length,playersNames:O.map(ie=>ie.username),bookedByUser:j}})}const r=zT(ln,"availabilities"),o=hI(r,{wait:!0}),a=Re(()=>s(o.value));function l(f,g){return g.filter(y=>y.slotAvailables===0&&y.startDate.getFullYear()===f.getFullYear()&&y.startDate.getMonth()===f.getMonth()&&y.startDate.getDate()===f.getDate())}function c(f){n.value=f}function u(f){l(f,a.value).length>=1||e("onClickDay",f)}function h(f){f.endDate<new Date||e("onClickItem",f)}return(f,g)=>(te(),he("div",F4,[U("div",U4,[Ge(H(k4),{"show-date":H(n),class:"theme-default",onClickDate:u,onClickItem:h,items:a.value,"disable-past":!0,"current-period-label":"icons","display-period-uom":"month",startingDayOfWeek:1},{header:an(({headerProps:y})=>[Ge($4,{headerProps:y,onInput:c},null,8,["headerProps"])]),_:1},8,["show-date","items"])])]))}});const z4={class:"squadGen"},H4={key:0,class:"squads"},j4={class:"squad"},q4=Yt({__name:"SquadGenerator",props:{players:{}},setup(t){const e=t,n=Ue();function i(r){const o=[],a=r.slice().sort(()=>Math.random()-.5);for(let l=a.length-1;l>=0;l--)l%2!==0&&o.push(a.splice(l,1)[0]);return[a,o]}function s(){n.value=i(e.players)}return(r,o)=>(te(),he("div",z4,[n.value&&n.value.length>0?(te(),he("div",H4,[(te(!0),he(it,null,fi(n.value,(a,l)=>(te(),he("div",j4,[U("b",null," Squadra "+Ze(l+1),1),(te(!0),he(it,null,fi(a,c=>(te(),he("div",null,Ze(c),1))),256))]))),256))])):vt("",!0),U("md-filled-tonal-button",{onClick:s}," Genera squadre ")]))}});const W4={class:"availabilityView"},K4=U("div",{class:"istruzioni"}," Per prenotare, clicca su un giorno vuoto o su uno slot già creato ",-1),G4=["open"],Q4=U("div",{slot:"headline"},"Non puoi prenotare",-1),Y4=U("form",{id:"form",slot:"content",method:"dialog"}," Hai ricevuto due o più ammonizioni e non puoi più prenotare. Dai un'occhiata al regolamento se vuoi sapere come ridurre le tue ammonizioni. ",-1),X4={slot:"actions"},J4=["open"],Z4=U("div",{slot:"headline"},"Slot prenotato",-1),eB={slot:"content",id:"form-id",method:"dialog"},tB=["open"],nB=U("div",{slot:"headline"},"Prenota slot",-1),iB={slot:"content",id:"form-id",method:"dialog"},sB={key:2,class:"clausola"},rB={slot:"actions"},oB={key:0},aB=U("a",{target:"_blank",rel:"noopener noreferrer",href:"https://calendar.google.com/calendar/embed?src=rho5n91oc32t7pdipjecqvpe9s%40group.calendar.google.com&ctz=Europe%2FRome"},[U("md-filled-tonal-button",{id:"addToCalendar"},[en(" Aggiungi calendario a Google Calendar "),U("md-icon",{slot:"icon"},"calendar_add_on")])],-1),lB=Yt({__name:"AvailabilityView",setup(t){var w;const e=Ue(!1),n=Ue(!1),i=Ue(new Date),s=Ue("mattina"),r=Ue(!1),o=Ue(!1),a=Ue(!1),l=Ue(!1),c=Ue(!1),u=Ue([]),h=(w=Kr().value)==null?void 0:w.uid,d=dI(zn(ln,`users/${h}`));function f(b,T){return`availabilities/${b.getFullYear()}${(b.getMonth()+1).toString().padStart(2,"0")}${b.getDate().toString().padStart(2,"0")}-${T==="mattina"?"M":"P"}`}async function g(){if(l.value=!1,i.value==null||s.value==null){console.error("Ma che cazz");return}r.value=!0;const b=zn(ln,f(i.value,s.value)),T=zn(ln,`users/${h}/${f(i.value,s.value)}`);(await Hu(b)).exists()?DV(b,{players:LV(zn(ln,`users/${h}`))}):Oy(b,{players:[zn(ln,`users/${h}`)]}),Oy(T,{date:i.value,timeSlot:s.value}),r.value=!1,o.value=!0,n.value=!1,e.value=!1}function y(b){var T;if(((T=d.value)==null?void 0:T.admonitionCount)>=2){a.value=!0;return}l.value=!0,o.value=!1,i.value=b,n.value=!1,e.value=!0}function v(b){var T;if(b.originalItem.bookedByUser){c.value=!0,u.value=["Danilo",...b.originalItem.playersNames];return}if(((T=d.value)==null?void 0:T.admonitionCount)>=2){a.value=!0;return}o.value=!1,l.value=!0,b.originalItem.slotAvailables>0&&(s.value=b.id.charAt(b.id.length-1)==="M"?"mattina":"pomeriggio",i.value=b.startDate,n.value=!0,e.value=!1)}return(b,T)=>{const A=tu("RouterLink");return te(),he("div",W4,[K4,Ge(B4,{onOnClickDay:y,onOnClickItem:v}),U("md-dialog",{type:"alert",open:a.value},[Q4,Y4,U("div",X4,[U("md-text-button",{form:"form",value:"ok",onClick:T[0]||(T[0]=O=>a.value=!1)},"OK")])],8,G4),U("md-dialog",{type:"alert",open:c.value,onClose:T[1]||(T[1]=O=>c.value=!1)},[Z4,U("div",eB,[en(" Giocatori: "),U("ul",null,[(te(!0),he(it,null,fi(u.value,O=>(te(),he("li",null,Ze(O),1))),256))]),Ge(q4,{players:u.value},null,8,["players"])])],40,J4),U("md-dialog",{type:"alert",open:l.value},[nB,U("form",iB,[e.value&&!r.value?(te(),ei(HU,{key:0,date:i.value,onSelect:T[2]||(T[2]=O=>s.value=O.timeSlot)},null,8,["date"])):vt("",!0),n.value&&!r.value?(te(),ei(qU,{key:1,date:i.value,time:s.value},null,8,["date","time"])):vt("",!0),!r.value&&(e.value||n.value)?(te(),he("div",sB,[en("Confermando accetti "),Ge(A,{class:"link",to:"/rules"},{default:an(()=>[en(" il regolamento")]),_:1})])):vt("",!0)]),U("div",rB,[U("md-text-button",{form:"form-id",value:"cancel",onClick:T[3]||(T[3]=O=>l.value=!1)},"Annulla"),U("md-text-button",{form:"form-id",value:"delete",onClick:g},"Conferma")])],8,tB),o.value?(te(),he("div",oB,"Prenotato")):vt("",!0),aB])}}});const aA=PF({history:K$("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:gU},{path:"/login",name:"login",component:()=>Bh(()=>import("./LoginView-d6b2990a.js"),["assets/LoginView-d6b2990a.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:lB},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>Bh(()=>Promise.resolve().then(()=>uU),void 0)},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:MU},{path:"/adminPanel",name:"adminPanel",meta:{requiresAdmin:!0},component:()=>Bh(()=>import("./AdminView-0460280d.js"),["assets/AdminView-0460280d.js","assets/AdminView-fab7fdba.css"])}]});aA.beforeEach(async t=>{var e;if(t.meta.requiresAuth&&!await s_())return{path:"/login",query:{redirect:t.fullPath}};if(t.meta.requiresAdmin){const n=await s_();if(!n)return{path:"/login",query:{redirect:t.fullPath}};const i=await Hu(zn(ln,`users/${n.uid}`));if(!i.exists()||((e=i.data())==null?void 0:e.role)!=="admin")return{path:"/login",query:{redirect:t.fullPath}}}});const th=DC(OF);th.use(b$());th.use(aA);th.use(w$,{firebaseApp:_I,modules:[E$()]});th.mount("#app");export{it as F,Mi as G,Qu as _,Kr as a,te as b,he as c,Yt as d,H as e,vt as f,hB as g,U as h,Ge as i,Zc as j,hI as k,zT as l,Re as m,fi as n,bR as o,Jc as p,ln as q,tu as r,uB as s,Ze as t,_B as u,wa as v,an as w};
