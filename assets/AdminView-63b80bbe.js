import{d as b,V as D,T as I,K as f,c as a,h as e,F as r,N as c,U as v,b as o,t as u,f as w,p as y,j as V,E as A,_ as x}from"./index-12b72d4c.js";const d=l=>(y("data-v-a78e2c62"),l=l(),V(),l),P={class:"adminView"},S={class:"tabella"},M=d(()=>e("thead",null,[e("tr",null,[e("th",null,"Data"),e("th",null,"Giocatori")])],-1)),T={key:0},k=d(()=>e("b",null,"Tutti i posti vuoti",-1)),B=[k],C=b({__name:"AdminView",setup(l){const _=D(I(v,"availabilities")),p=new Date,h=f(()=>_.value.filter(t=>g(t.id)>p));function g(t){const s=t.substring(0,8),n=t.charAt(t.length-1);return new Date(parseInt(s.substring(0,4),10),parseInt(s.substring(4,6),10)-1,parseInt(s.substring(6,8),10),n==="M"?13:20)}function m(t){const s=t.substring(0,8),n=t.charAt(t.length-1),i=new Date(parseInt(s.substring(0,4),10),parseInt(s.substring(4,6),10)-1,parseInt(s.substring(6,8),10));return`${i.getDate()} ${A[i.getMonth()+1]} ${n==="M"?"Mattina":"Pomeriggio"}`}return(t,s)=>(o(),a("div",P,[e("table",S,[M,e("tbody",null,[(o(!0),a(r,null,c(h.value,n=>(o(),a("tr",null,[e("td",null,u(m(n.id)),1),e("td",null,[e("ul",null,[n.players.length===0?(o(),a("li",T,B)):w("",!0),(o(!0),a(r,null,c(n.players,i=>(o(),a("li",null,u(i.username),1))),256))])])]))),256))])])]))}});const $=x(C,[["__scopeId","data-v-a78e2c62"]]);export{$ as default};