import{$ as P,S as n,P as b,R as x,U as _,a0 as L,Q as z,V as h}from"./index-a415af87.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},V=(e,t,i)=>{t.constructor.createProperty(i,e)};function d(e){return(t,i)=>i!==void 0?V(e,t,i):H(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(e){return d({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(e,t){return P({descriptor:i=>{const a={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const s=typeof i=="symbol"?Symbol():"__"+i;a.get=function(){var o,l;return this[s]===void 0&&(this[s]=(l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&l!==void 0?l:null),this[s]}}return a}})}const X=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class m extends b{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}n([d({type:Boolean,reflect:!0})],m.prototype,"inset",void 0);n([d({type:Boolean,reflect:!0,attribute:"inset-start"})],m.prototype,"insetStart",void 0);n([d({type:Boolean,reflect:!0,attribute:"inset-end"})],m.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const B=x`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let f=class extends m{};f.styles=[B];f=n([_("md-divider")],f);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U=e=>(...t)=>({_$litDirective$:e,values:t});class q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this._$Ct=t,this._$AM=i,this._$Ci=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=U(class extends q{constructor(e){var t;if(super(e),e.type!==N.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,a;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((i=this.nt)===null||i===void 0)&&i.has(o))&&this.it.add(o);return this.render(t)}const s=e.element.classList;this.it.forEach(o=>{o in t||(s.remove(o),this.it.delete(o))});for(const o in t){const l=!!t[o];l===this.it.has(o)||!((a=this.nt)===null||a===void 0)&&a.has(o)||(l?(s.add(o),this.it.add(o)):(s.remove(o),this.it.delete(o)))}return L}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const C=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];C.map(w);function w(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Z(e){for(const t of C)e.createProperty(t,{attribute:w(t),reflect:!0});e.addInitializer(t=>{const i={hostConnected(){t.setAttribute("role","presentation")}};t.addController(i)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function j(e,t){t.bubbles&&(!e.shadowRoot||t.composed)&&t.stopPropagation();const i=Reflect.construct(t.constructor,[t.type,t]),a=e.dispatchEvent(i);return a||t.preventDefault(),a}function et(e){const t=new MouseEvent("click",{bubbles:!0});return e.dispatchEvent(t),t}function it(e){return e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!G(e)}function G(e){const t=g;return t&&(e.preventDefault(),e.stopImmediatePropagation()),Y(),t}let g=!1;async function Y(){g=!0,await null,g=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const K={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:u.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:u.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Q={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:u.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:u.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class r extends b{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>K,this.getCloseAnimation=()=>Q,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var s;const{dialog:t,container:i}=this;if(!t||!i||t.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(s=this.querySelector("[autofocus]"))==null||s.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(t=this.returnValue){const{dialog:i,container:a}=this;if(!i||!a||!i.open)return;const s=this.returnValue;if(this.returnValue=t,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=s;return}await this.animateDialog(this.getCloseAnimation()),i.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),i={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},{ariaLabel:a}=this;return z`
      <div class="scrim"></div>
      <dialog
        class=${F(i)}
        aria-label=${a||h}
        aria-labelledby=${this.hasHeadline?"headline":h}
        role=${this.type==="alert"?"alertdialog":h}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||h}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||h}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(t=>{for(const i of t)this.handleAnchorIntersection(i)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const i=t.target,{submitter:a}=t;i.method!=="dialog"||!a||this.close(a.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;const i=!j(this,t);t.preventDefault(),!i&&this.close()}async animateDialog(t){const{dialog:i,scrim:a,container:s,headline:o,content:l,actions:A}=this;if(!i||!a||!s||!o||!l||!A)return;const{container:S,dialog:D,scrim:I,headline:T,content:R,actions:k}=t,M=[[i,D??[]],[a,I??[]],[s,S??[]],[o,T??[]],[l,R??[]],[A,k??[]]],E=[];for(const[v,O]of M)for(const $ of O)E.push(v.animate(...$));await Promise.all(E.map(v=>v.finished))}handleHeadlineChange(t){const i=t.target;this.hasHeadline=i.assignedElements().length>0}handleActionsChange(t){const i=t.target;this.hasActions=i.assignedElements().length>0}handleIconChange(t){const i=t.target;this.hasIcon=i.assignedElements().length>0}handleAnchorIntersection(t){const{target:i,isIntersecting:a}=t;i===this.topAnchor&&(this.isAtScrollTop=a),i===this.bottomAnchor&&(this.isAtScrollBottom=a)}}Z(r);r.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0};n([d({type:Boolean})],r.prototype,"open",null);n([d({attribute:!1})],r.prototype,"returnValue",void 0);n([d()],r.prototype,"type",void 0);n([c("dialog")],r.prototype,"dialog",void 0);n([c(".scrim")],r.prototype,"scrim",void 0);n([c(".container")],r.prototype,"container",void 0);n([c(".headline")],r.prototype,"headline",void 0);n([c(".content")],r.prototype,"content",void 0);n([c(".actions")],r.prototype,"actions",void 0);n([p()],r.prototype,"isAtScrollTop",void 0);n([p()],r.prototype,"isAtScrollBottom",void 0);n([c(".scroller")],r.prototype,"scroller",void 0);n([c(".top.anchor")],r.prototype,"topAnchor",void 0);n([c(".bottom.anchor")],r.prototype,"bottomAnchor",void 0);n([p()],r.prototype,"hasHeadline",void 0);n([p()],r.prototype,"hasActions",void 0);n([p()],r.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const W=x`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let y=class extends r{};y.styles=[W];y=n([_("md-dialog")],y);export{u as E,it as a,et as d,c as i,X as m,d as n,F as o,Z as r,p as t};
