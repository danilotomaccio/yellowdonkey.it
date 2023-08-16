import{d as q,l as xe,m as b,n as He,b as D,c as h,q as F,e as s,h as v,f as x,F as V,v as R,x as B,y as w,t as k,z as te,A as ye,B as Ee,C as Ne,D as $,E as We,H as Ue,a as Ve,r as Re,j as le,w as Pe,I as ke,J as z,K as ze,L as de,M as je}from"./index-23fffb94.js";var qe=Object.defineProperty,Ge=(e,r,t)=>r in e?qe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ee=(e,r,t)=>(Ge(e,typeof r!="symbol"?r+"":r,t),t);const G=()=>ae(new Date),Je=(e,r,t)=>{switch(r){case"year":return new Date(e.getFullYear(),0);case"month":return new Date(e.getFullYear(),e.getMonth());case"week":return ce(e,t);default:return e}},Ke=e=>[...Array(7)].map((r,t)=>H(e,t)),H=(e,r)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+r,e.getHours(),e.getMinutes(),e.getSeconds()),ce=(e,r)=>H(e,(r-e.getDay()-7)%-7),Qe=(e,r)=>H(ce(e,r),7),j=e=>new Date(e.getFullYear(),e.getMonth()),Xe=e=>Math.ceil(e.getDate()/7),Ze=(e,r,t)=>new Date(e.getFullYear()+(r=="year"?t:0),e.getMonth()+(r=="month"?t:0),e.getDate()+(r=="week"?t*7:0)),ge=e=>("0"+String(e.getMonth()+1)).slice(-2),me=e=>("0"+String(e.getDate())).slice(-2),Se=e=>e.getFullYear()+"-"+ge(e),et=e=>Se(e)+"-"+me(e),tt=e=>ge(e)+"-"+me(e),at=(e,r,t)=>{if(e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0)return"";if(!re()){var l=new Date().getTimezoneOffset()*6e4;return new Date(e.getTime()-l).toISOString().slice(11,16)}return e.toLocaleTimeString(r,t)},rt=(e,r,t,l)=>{const c=e.getFullYear()===r.getFullYear(),y=Me(e,r),g=t!=="year"&&t!=="month";let m=[];return m.push(l[e.getMonth()]),g&&(m.push(" "),m.push(e.getDate())),c||(m.push(g?", ":" "),m.push(e.getFullYear())),!y||!c?(m.push(" – "),y||m.push(l[r.getMonth()]),g&&m.push(" ")):g&&m.push(" – "),g?(m.push(r.getDate()),m.push(", ")):m.push(" "),m.push(r.getFullYear()),m.join("")},we=(e,r)=>{const t=Date.UTC(r.getFullYear(),r.getMonth(),r.getDate()),l=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return(t-l)/864e5},it=(e,r)=>!!e&&!!r&&we(e,r)===0,ot=(e,r)=>!!e&&!!r&&e.getTime()===r.getTime(),Me=(e,r)=>!!e&&!!r&&e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth(),nt=e=>j(e)<j(G()),st=e=>j(e)>j(G()),lt=e=>ae(e)>G(),dt=e=>ae(e)<G(),ut=e=>e.getMonth()!==H(e,7).getMonth(),ct=e=>e.getMonth()!==H(e,1).getMonth(),Ie=e=>{let r=[...Array(7)].map(t=>0);return e.split(/\D/,7).forEach((t,l)=>r[l]=Number(t)),r[1]--,new Date(r[0],r[1],r[2],r[3],r[4],r[5],r[6])},ue=e=>typeof e=="string"?Ie(e):new Date(e),ae=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},gt=e=>e.substring(0,2),re=()=>typeof Intl<"u",mt=(e,r)=>{if(!re())return[...Array(12)].map(l=>"");const t=new Intl.DateTimeFormat(e,{month:r});return[...Array(12)].map((l,c)=>t.format(new Date(2017,c,1)))},pt=(e,r,t)=>{if(!re())return[...Array(7)].map(c=>"");const l=new Intl.DateTimeFormat(e,{weekday:r});return[...Array(7)].map((c,y)=>l.format(new Date(2017,0,(y+1+t)%7)))},vt=()=>typeof navigator>"u"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),Dt=(e,r)=>{const t=e.classes?[...e.classes]:[];return r&&t.push("isHovered"),{originalItem:e,startDate:ue(e.startDate),endDate:ue(e.endDate||e.startDate),classes:t,title:e.title||"Untitled",id:e.id,url:e.url,tooltip:e.tooltip??e.title}},i={addDays:H,beginningOfMonth:j,beginningOfPeriod:Je,beginningOfWeek:ce,dateOnly:ae,dayDiff:we,daysOfWeek:Ke,endOfWeek:Qe,formattedPeriod:rt,formattedTime:at,fromIsoStringToLocalDate:Ie,getDefaultBrowserLocale:vt,getFormattedMonthNames:mt,getFormattedWeekdayNames:pt,incrementPeriod:Ze,instanceOfMonth:Xe,isFutureMonth:st,isInFuture:lt,isInPast:dt,isLastDayOfMonth:ct,isLastInstanceOfMonth:ut,isoMonthDay:tt,isoYearMonth:Se,isoYearMonthDay:et,isPastMonth:nt,isSameDate:it,isSameDateTime:ot,isSameMonth:Me,languageCode:gt,normalizeItem:Dt,paddedDay:me,paddedMonth:ge,supportsIntl:re,today:G,toLocalDate:ue};class ht{constructor(){ee(this,"currentDragItem"),ee(this,"dateSelectionOrigin"),ee(this,"currentHoveredItemId",""),ee(this,"CalendarMath",i)}}const ft={class:"cv-header-days"},bt={key:0,class:"cv-weeknumber"},yt=["aria-multiselectable"],Pt={key:0,class:"cv-weeknumber"},kt={class:"cv-weekdays"},St=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],wt={class:"cv-day-number"},Mt=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],It=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick"],Ct=q({__name:"CalendarView",props:{showDate:{default:void 0},displayPeriodUom:{default:"month"},displayPeriodCount:{default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{default:void 0},monthNameFormat:{default:"long"},weekdayNameFormat:{default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{default:()=>({})},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{default:void 0},selectionEnd:{default:void 0},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{default:0},items:{default:()=>[]},dateClasses:{default:()=>({})},itemTop:{default:"1.4em"},itemContentHeight:{default:"1.4em"},itemBorderHeight:{default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{default:""},currentPeriodLabelIcons:{default:"⇤-⇥"},doEmitItemMouseEvents:{type:Boolean,default:!1},enableHtmlTitles:{type:Boolean,default:!0}},emits:["period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(e,{emit:r}){const t=e,l=xe(new ht),c=b(()=>t.locale||i.getDefaultBrowserLocale()),y=b(()=>t.showDate?i.dateOnly(t.showDate):i.today()),g=b(()=>i.beginningOfPeriod(y.value,t.displayPeriodUom,t.startingDayOfWeek)),m=b(()=>i.addDays(i.incrementPeriod(g.value,t.displayPeriodUom,t.displayPeriodCount),-1)),J=b(()=>{const a=i.beginningOfWeek(i.beginningOfPeriod(g.value,"year",0),t.startingDayOfWeek),n=i.beginningOfWeek(g.value,t.startingDayOfWeek);return 1+Math.floor(i.dayDiff(a,n)/7)}),L=b(()=>i.beginningOfWeek(g.value,t.startingDayOfWeek)),E=b(()=>i.endOfWeek(m.value,t.startingDayOfWeek)),ie=b(()=>{const a=Math.floor((i.dayDiff(L.value,E.value)+1)/7);return[...Array(a)].map((n,u)=>i.addDays(L.value,u*7))}),A=b(()=>i.getFormattedMonthNames(c.value,t.monthNameFormat)),K=b(()=>i.getFormattedWeekdayNames(c.value,t.weekdayNameFormat,t.startingDayOfWeek)),T=b(()=>t.items?t.items.map(a=>i.normalizeItem(a,a.id===l.currentHoveredItemId)):[]),N=b(()=>i.beginningOfPeriod(i.today(),t.displayPeriodUom,t.startingDayOfWeek)),oe=b(()=>i.addDays(i.incrementPeriod(N.value,t.displayPeriodUom,t.displayPeriodCount),-1)),ne=b(()=>i.formattedPeriod(g.value,m.value,t.displayPeriodUom,A.value)),Q=b(()=>{const a=N.value,n=g.value;return t.currentPeriodLabel?t.currentPeriodLabel==="icons"?t.currentPeriodLabelIcons[Math.sign(a.getTime()-n.getTime())+1]:t.currentPeriodLabel:i.formattedPeriod(a,oe.value,t.displayPeriodUom,A.value)}),p=b(()=>({previousYear:M(-12),previousPeriod:M(-1),nextPeriod:M(1),previousFullPeriod:M(-t.displayPeriodCount),nextFullPeriod:M(t.displayPeriodCount),nextYear:M(12),currentPeriod:N.value,currentPeriodLabel:Q.value,periodStart:g.value,periodEnd:m.value,displayLocale:c.value,displayFirstDate:L.value,displayLastDate:E.value,monthNames:A.value,fixedItems:T.value,periodLabel:ne.value})),I=b(()=>({periodStart:g,periodEnd:m,displayFirstDate:L,displayLastDate:E}));He(()=>I,a=>{t.periodChangedCallback&&(r("period-changed"),t.periodChangedCallback(a,"watch"))},{immediate:!0,deep:!0});const S=(a,n)=>{t.disablePast&&i.isInPast(a)||t.disableFuture&&i.isInFuture(a)||r("click-date",a,ve(a,a),n)},C=(a,n)=>r("click-item",a,n),O=a=>"dow"+(a+t.startingDayOfWeek)%7,M=a=>{const n=i.incrementPeriod(g.value,t.displayPeriodUom,a),u=i.incrementPeriod(n,t.displayPeriodUom,t.displayPeriodCount);return t.disablePast&&u<=i.today()||t.disableFuture&&n>i.today()?null:n},Y=(a,n)=>{l.currentHoveredItemId=a.id,t.doEmitItemMouseEvents&&r("item-mouseenter",a,n)},W=(a,n)=>{l.currentHoveredItemId="",t.doEmitItemMouseEvents&&r("item-mouseleave",a,n)},Oe=(a,n)=>{var u,f;if(!t.enableDateSelection)return!1;(u=n.dataTransfer)==null||u.setData("text",a.toString());let o=new Image;return o.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(f=n.dataTransfer)==null||f.setDragImage(o,10,10),l.dateSelectionOrigin=a,r("date-selection-start",se(a),n),!0},pe=(a,n)=>{var u;return t.enableDragDrop?((u=n.dataTransfer)==null||u.setData("text",a.id),l.currentDragItem=a,l.dateSelectionOrigin=void 0,r("drag-start",a,n),!0):!1},se=a=>a<=l.dateSelectionOrigin?[a,l.dateSelectionOrigin]:[l.dateSelectionOrigin,a],_e=(a,n)=>{t.enableDragDrop&&r("drag-over-date",l.currentDragItem,a,n)},$e=(a,n)=>{t.enableDateSelection&&l.dateSelectionOrigin&&r("date-selection",se(a),n),t.enableDragDrop&&(r("drag-enter-date",l.currentDragItem,a,n),n.target.classList.add("draghover"))},Fe=(a,n)=>{t.enableDateSelection&&t.selectionStart||!t.enableDragDrop||(r("drag-leave-date",l.currentDragItem,a,n),n.target.classList.remove("draghover"))},Le=(a,n)=>{if(t.enableDateSelection&&l.dateSelectionOrigin){r("date-selection-finish",se(a),n);return}t.enableDragDrop&&(r("drop-on-date",l.currentDragItem,a,n),n.target.classList.remove("draghover"))},Ae=(a,n)=>a.startDate<n.startDate?-1:n.startDate<a.startDate?1:a.endDate>n.endDate?-1:n.endDate>a.endDate?1:a.id<n.id?-1:1,Te=a=>ve(a,i.addDays(a,6)),ve=(a,n)=>T.value.filter(u=>u.endDate>=a&&i.dateOnly(u.startDate)<=n,this).sort(Ae),Ye=a=>!!T.value.find(n=>n.endDate>=a&&i.dateOnly(n.startDate)<=a),De=a=>!(!t.selectionStart||!t.selectionEnd||a<i.dateOnly(t.selectionStart)||a>i.dateOnly(t.selectionEnd)),he=a=>{const n=Te(a),u=[],f=[[],[],[],[],[],[],[]];if(!n)return u;for(let o=0;o<n.length;o++){const d=Object.assign({},n[o],{classes:[...n[o].classes],itemRow:0}),P=d.startDate<a,U=P?0:i.dayDiff(a,d.startDate),be=Math.min(7-U,i.dayDiff(i.addDays(a,U),d.endDate)+1);P&&d.classes.push("continued"),i.dayDiff(a,d.endDate)>6&&d.classes.push("toBeContinued"),i.isInPast(d.endDate)&&d.classes.push("past"),d.originalItem.url&&d.classes.push("hasUrl");for(let _=0;_<7;_++)if(_===U){let Z=0;for(;f[_][Z];)Z++;d.itemRow=Z,f[_][Z]=!0}else _<U+be&&(f[_][d.itemRow]=!0);d.classes.push(`offset${U}`),d.classes.push(`span${be}`),u.push(d)}return u},Be=a=>{const n='<span class="startTime">'+i.formattedTime(a.startDate,c.value,t.timeFormatOptions)+"</span>";let u="";return i.isSameDateTime(a.startDate,a.endDate)||(u='<span class="endTime">'+i.formattedTime(a.endDate,c.value,t.timeFormatOptions)+"</span>"),n+u},fe=a=>t.showTimes?Be(a)+" "+a.title:a.title,X=a=>{const n=a.itemRow,u=t.itemContentHeight,f=t.itemBorderHeight;return`calc(${t.itemTop} + ${n}*${u} + ${n}*${f})`};return(a,n)=>(D(),h("div",{"aria-label":"Calendar",class:B(["cv-wrapper",`locale-${s(i).languageCode(s(c))}`,`locale-${s(c)}`,`y${s(g).getFullYear()}`,`m${s(i).paddedMonth(s(g))}`,`period-${e.displayPeriodUom}`,`periodCount-${e.displayPeriodCount}`,{past:s(i).isPastMonth(s(g)),future:s(i).isFutureMonth(s(g)),noIntl:!s(i).supportsIntl}])},[F(a.$slots,"header",{headerProps:s(p)}),v("div",ft,[e.displayWeekNumbers?(D(),h("div",bt)):x("",!0),(D(!0),h(V,null,R(s(K),(u,f)=>F(a.$slots,"dayHeader",{index:O(f),label:u},()=>[(D(),h("div",{key:O(f),class:B([O(f),"cv-header-day"])},k(u),3))])),256))]),v("div",{"aria-multiselectable":e.enableDateSelection,class:"cv-weeks"},[(D(!0),h(V,null,R(s(ie),(u,f)=>(D(),h("div",{key:`${f}-week`,class:B(["cv-week",`week${f+1}`,`ws${s(i).isoYearMonthDay(u)}`])},[e.displayWeekNumbers?(D(),h("div",Pt,[F(a.$slots,"weekNumber",{date:u,numberInYear:s(J)+f,numberInPeriod:f+1},()=>[v("span",null,k(s(J)+f),1)])])):x("",!0),v("div",kt,[(D(!0),h(V,null,R(s(i).daysOfWeek(u),(o,d)=>(D(),h("div",{key:O(d),draggable:e.enableDateSelection,class:B(["cv-day",O(d),`d${s(i).isoYearMonthDay(o)}`,`d${s(i).isoMonthDay(o)}`,`d${s(i).paddedDay(o)}`,`instance${s(i).instanceOfMonth(o)}`,{today:s(i).isSameDate(o,s(i).today()),outsideOfMonth:!s(i).isSameMonth(o,s(y)),past:s(i).isInPast(o),future:s(i).isInFuture(o),last:s(i).isLastDayOfMonth(o),lastInstance:s(i).isLastInstanceOfMonth(o),hasItems:Ye(o),selectionStart:s(i).isSameDate(o,e.selectionStart),selectionEnd:s(i).isSameDate(o,e.selectionEnd)},...e.dateClasses&&e.dateClasses[s(i).isoYearMonthDay(o)]||[]]),"aria-grabbed":e.enableDateSelection?De(o):void 0,"aria-label":o.getDate().toString(),"aria-selected":De(o),"aria-dropeffect":e.enableDragDrop&&l.currentDragItem?"move":e.enableDateSelection&&l.dateSelectionOrigin?"execute":"none",onClick:P=>S(o,P),onDragstart:P=>Oe(o,P),onDrop:w(P=>Le(o,P),["prevent"]),onDragover:w(P=>_e(o,P),["prevent"]),onDragenter:w(P=>$e(o,P),["prevent"]),onDragleave:w(P=>Fe(o,P),["prevent"])},[v("div",wt,k(o.getDate()),1),F(a.$slots,"dayContent",{day:o})],42,St))),128)),t.enableHtmlTitles?(D(!0),h(V,{key:0},R(he(u),o=>F(a.$slots,"item",{value:o,weekStartDate:u,top:X(o)},()=>[(D(),h("div",{key:o.id,draggable:e.enableDragDrop,"aria-grabbed":e.enableDragDrop?o==l.currentDragItem:void 0,class:B([o.classes,"cv-item"]),title:o.tooltip||o.title,style:ye(`top:${X(o)};${o.originalItem.style}`),onDragstart:d=>pe(o,d),onMouseenter:d=>Y(o,d),onMouseleave:d=>W(o,d),onClick:w(d=>C(o,d),["stop"]),innerHTML:fe(o)},null,46,Mt))])),256)):(D(!0),h(V,{key:1},R(he(u),o=>F(a.$slots,"item",{value:o,weekStartDate:u,top:X(o)},()=>[(D(),h("div",{key:o.id,draggable:e.enableDragDrop,"aria-grabbed":e.enableDragDrop?o==l.currentDragItem:void 0,class:B([o.classes,"cv-item"]),title:o.tooltip||o.title,style:ye(`top:${X(o)};${o.originalItem.style}`),onDragstart:d=>pe(o,d),onMouseenter:d=>Y(o,d),onMouseleave:d=>W(o,d),onClick:w(d=>C(o,d),["stop"])},k(fe(o)),47,It)),te(" div> ")])),256))])],2))),128))],8,yt)],2))}}),Ot={class:"cv-header"},_t={class:"cv-header-nav"},$t=["disabled"],Ft=["disabled","innerHTML"],Lt=["disabled"],At=["disabled"],Tt={class:"periodLabel"},Yt=q({__name:"CalendarViewHeader",props:{headerProps:{type:Object,required:!0},previousYearLabel:{type:String,default:"<<"},previousPeriodLabel:{type:String,default:"<"},nextPeriodLabel:{type:String,default:">"},nextYearLabel:{type:String,default:">>"}},emits:["input"],setup(e,{emit:r}){const t=l=>r("input",l);return(l,c)=>(D(),h("div",Ot,[v("div",_t,[v("button",{disabled:!e.headerProps.previousYear,class:"previousYear","aria-label":"Previous Year",onClick:c[0]||(c[0]=w(y=>t(e.headerProps.previousYear),["prevent"]))},k(e.previousYearLabel),9,$t),v("button",{disabled:!e.headerProps.previousPeriod,class:"previousPeriod","aria-label":"Previous Period",onClick:c[1]||(c[1]=w(y=>t(e.headerProps.previousPeriod),["prevent"])),innerHTML:e.previousPeriodLabel},null,8,Ft),v("button",{class:"currentPeriod","aria-label":"Current Period",onClick:c[2]||(c[2]=w(y=>t(e.headerProps.currentPeriod),["prevent"]))},k(e.headerProps.currentPeriodLabel),1),v("button",{disabled:!e.headerProps.nextPeriod,class:"nextPeriod","aria-label":"Next Period",onClick:c[3]||(c[3]=w(y=>t(e.headerProps.nextPeriod),["prevent"]))},k(e.nextPeriodLabel),9,Lt),v("button",{disabled:!e.headerProps.nextYear,class:"nextYear","aria-label":"Next Year",onClick:c[4]||(c[4]=w(y=>t(e.headerProps.nextYear),["prevent"]))},k(e.nextYearLabel),9,At)]),v("div",Tt,[F(l.$slots,"label",{},()=>[te(k(e.headerProps.periodLabel),1)])])]))}}),Ce=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],Bt=v("option",{value:"mattina"},"Mattina",-1),xt=v("option",{value:"pomeriggio"},"Pomeriggio",-1),Ht=[Bt,xt],Et=v("button",{type:"submit"},"Conferma",-1),Nt={props:{date:{type:Date,required:!0}},data(){return{timeSlot:"mattina"}},methods:{saveBooking(){this.$emit("save",{date:this.date,timeSlot:this.timeSlot})}}},Wt=q({...Nt,__name:"BookSlot",setup(e){return(r,t)=>(D(),h("div",null,[v("h2",null,"Dai la disponibilità per il "+k(e.date.getDate())+" "+k(s(Ce)[e.date.getMonth()]),1),v("form",{onSubmit:t[1]||(t[1]=w((...l)=>r.saveBooking&&r.saveBooking(...l),["prevent"]))},[Ee(v("select",{id:"time-slot","onUpdate:modelValue":t[0]||(t[0]=l=>r.timeSlot=l)},Ht,512),[[Ne,r.timeSlot]]),Et],32)]))}});const Ut={props:{date:{type:Date,required:!0},time:{type:String,required:!0}},data(){return{timeSlot:"mattina"}},methods:{saveBooking(){this.$emit("save",{date:this.date,timeSlot:this.time})}}},Vt=q({...Ut,__name:"ExistingSlot",setup(e){return(r,t)=>(D(),h("div",null,[v("h2",null,"Dai la disponibilità per il "+k(e.date.getDate())+" "+k(s(Ce)[e.date.getMonth()])+" "+k(e.time),1),v("button",{onClick:t[0]||(t[0]=(...l)=>r.saveBooking&&r.saveBooking(...l))},"Conferma")]))}}),Rt={class:"availabilityView"},zt=v("div",{class:"istruzioni"}," Per prenotare, clicca su un giorno vuoto o su uno slot già creato ",-1),jt={id:"calendar-component"},qt={key:2,class:"clausola"},Gt={key:3},Kt=q({__name:"AvailabilityView",setup(e){var Q;let r=$(new Date),t=$(!1),l=$(!1),c=$(new Date),y=$("mattina"),g=$(!1),m=$(!1);function J(p){return p.map(S=>{const C=S.id.substring(0,8),O=S.id.charAt(S.id.length-1);let M;if(O==="M")M=8;else if(O==="P")M=15;else throw new Error("Formato ID non riconosciuto");const Y=new Date(parseInt(C.substring(0,4),10),parseInt(C.substring(4,6),10)-1,parseInt(C.substring(6,8),10),M),W=new Date(Y);return W.setHours(Y.getHours()+4),{id:S.id,startDate:Y,endDate:W,title:S.users.length>=3?"Al completo":`${3-S.users.length} posti disponibili`,classes:S.users.length>=3?"red":"green",slotAvailables:3-S.users.length}})}const L=We(z,"availabilities"),E=Ue(L,{wait:!0}),ie=b(()=>J(E.value)),A=(Q=Ve().value)==null?void 0:Q.uid;function K(p,I){return`availabilities/${p.getFullYear()}${(p.getMonth()+1).toString().padStart(2,"0")}${p.getDate().toString().padStart(2,"0")}-${I==="mattina"?"M":"P"}`}async function T(p){g.value=!0,await ze(z,async I=>{I.set(de(z,K(p.date,p.timeSlot)),{users:je(de(z,`users/${A}`))}),I.set(de(z,`users/${A}/${K(p.date,p.timeSlot)}`),{date:p.date,timeSlot:p.timeSlot})}),g.value=!1,m.value=!0,l.value=!1,t.value=!1}function N(p){r.value=p}function oe(p){m.value=!1,c.value=p,l.value=!1,t.value=!0}function ne(p){m.value=!1,p.originalItem.slotAvailables>0&&(y.value=p.id.charAt(p.id.length-1)==="M"?"mattina":"pomeriggio",c.value=p.startDate,l.value=!0,t.value=!1)}return(p,I)=>{const S=Re("RouterLink");return D(),h("div",Rt,[zt,v("div",jt,[le(s(Ct),{"show-date":s(r),class:"theme-default",onClickDate:oe,onClickItem:ne,items:ie.value,"disable-past":!0,"current-period-label":"icons","display-period-uom":"month"},{header:Pe(({headerProps:C})=>[le(s(Yt),{"header-props":C,onInput:N},null,8,["header-props"])]),_:1},8,["show-date","items"]),s(t)&&!s(g)?(D(),ke(Wt,{key:0,date:s(c),onSave:T},null,8,["date"])):x("",!0),s(l)&&!s(g)?(D(),ke(Vt,{key:1,date:s(c),time:s(y),onSave:T},null,8,["date","time"])):x("",!0),!s(g)&&(s(t)||s(l))?(D(),h("div",qt,[te("Confermando accetti "),le(S,{class:"link",to:"/rules"},{default:Pe(()=>[te(" il regolamento")]),_:1})])):x("",!0),s(m)?(D(),h("div",Gt,"Prenotato")):x("",!0)])])}}});export{Kt as default};