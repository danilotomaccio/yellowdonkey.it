import{G as p,d as u,u as h,o as m,g as f,a as v,b as s,c as n,e as r,f as _,h as g,t as w,F as L,s as R,i as k,r as y,j as d,w as x,p as C,k as F,_ as I}from"./index-762d6598.js";const V="/assets/btn_google_light_normal_ios-464e961b.svg",b={key:0},P={key:1},l=new p,A=u({__name:"Login",setup(t){const o=h(),a=window.navigator.userAgent;function i(){(/iPad/.test(a)||/iPhone/.test(a))&&R(o,l).catch(e=>{console.error("Failed signinRedirect",e)}),k(o,l).catch(e=>{console.error("Failed signinRedirect",e)})}m(()=>{f(o).catch(e=>{console.error("Failed redirect result",e)})});const c=v();return(e,G)=>(s(),n(L,null,[r(c)?_("",!0):(s(),n("p",b,"Effettua il login con Google")),g("img",{onClick:i,alt:"Login button",class:"loginBtn",src:V,width:"125",height:"125"}),r(c)?(s(),n("p",P,"Loggato come "+w(r(c).providerData[0].displayName),1)):_("",!0)],64))}});const B=t=>(C("data-v-715d64c9"),t=t(),F(),t),N=B(()=>g("div",null,"Ritorna alla home",-1)),S=u({__name:"LoginView",setup(t){return(o,a)=>{const i=y("RouterLink");return s(),n("main",null,[d(A),d(i,{to:"/"},{default:x(()=>[N]),_:1})])}}});const E=I(S,[["__scopeId","data-v-715d64c9"]]);export{E as default};