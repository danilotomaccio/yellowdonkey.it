import{d as b,k as D,l as v,m as I,c as a,h as e,F as r,n as c,q as f,b as o,t as u,f as w,p as y,j as A,v as V,_ as x}from"./index-fcb07fab.js";const d=l=>(y("data-v-a78e2c62"),l=l(),A(),l),P={class:"adminView"},S={class:"tabella"},k=d(()=>e("thead",null,[e("tr",null,[e("th",null,"Data"),e("th",null,"Giocatori")])],-1)),M={key:0},B=d(()=>e("b",null,"Tutti i posti vuoti",-1)),C=[B],T=b({__name:"AdminView",setup(l){const _=D(v(f,"availabilities")),p=new Date,h=I(()=>_.value.filter(t=>m(t.id)>p));function m(t){const n=t.substring(0,8),s=t.charAt(t.length-1);return new Date(parseInt(n.substring(0,4),10),parseInt(n.substring(4,6),10)-1,parseInt(n.substring(6,8),10),s==="M"?13:20)}function g(t){const n=t.substring(0,8),s=t.charAt(t.length-1),i=new Date(parseInt(n.substring(0,4),10),parseInt(n.substring(4,6),10)-1,parseInt(n.substring(6,8),10));return`${i.getDate()} ${V[i.getMonth()+1]} ${s==="M"?"Mattina":"Pomeriggio"}`}return(t,n)=>(o(),a("div",P,[e("table",S,[k,e("tbody",null,[(o(!0),a(r,null,c(h.value,s=>(o(),a("tr",null,[e("td",null,u(g(s.id)),1),e("td",null,[e("ul",null,[s.players.length===0?(o(),a("li",M,C)):w("",!0),(o(!0),a(r,null,c(s.players,i=>(o(),a("li",null,u(i.username),1))),256))])])]))),256))])])]))}});const F=x(T,[["__scopeId","data-v-a78e2c62"]]);export{F as default};