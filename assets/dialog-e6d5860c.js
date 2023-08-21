import{X as K,m as s,l as v,k as y,n as A,Y as W,x as O,A as f}from"./index-0850df7f.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}},j=(i,t,e)=>{t.constructor.createProperty(e,i)};function d(i){return(t,e)=>e!==void 0?j(i,t,e):Z(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(i){return d({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(i,t){return K({descriptor:e=>{const o={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,l;return this[n]===void 0&&(this[n]=(l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&l!==void 0?l:null),this[n]}}return o}})}const Ct=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const M=Symbol("attachableController");let b;b=new MutationObserver(i=>{var t;for(const e of i)(t=e.target[M])==null||t.hostConnected()});class N{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[M]=this,b==null||b.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const X=["focusin","focusout","pointerdown"];class k extends v{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new N(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}handleEvent(t){var e;if(!t[D]){switch(t.type){default:return;case"focusin":this.visible=((e=this.control)==null?void 0:e.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[D]=!0}}onControlChange(t,e){for(const o of X)t==null||t.removeEventListener(o,this),e==null||e.addEventListener(o,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}s([d({type:Boolean,reflect:!0})],k.prototype,"visible",void 0);s([d({type:Boolean,reflect:!0})],k.prototype,"inward",void 0);const D=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const J=y`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _=class extends k{};_.styles=[J];_=s([A("md-focus-ring")],_);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tt=i=>(...t)=>({_$litDirective$:i,values:t});class et{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=tt(class extends et{constructor(i){var t;if(super(i),i.type!==Q.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.nt)===null||e===void 0)&&e.has(r))&&this.it.add(r);return this.render(t)}const n=i.element.classList;this.it.forEach(r=>{r in t||(n.remove(r),this.it.delete(r))});for(const r in t){const l=!!t[r];l===this.it.has(r)||!((o=this.nt)===null||o===void 0)&&o.has(r)||(l?(n.add(r),this.it.add(r)):(n.remove(r),this.it.delete(r)))}return W}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const m={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const it=450,L=225,ot=.2,rt=10,st=75,nt=.35,at="::after",lt="forwards";var c;(function(i){i[i.INACTIVE=0]="INACTIVE",i[i.TOUCH_DELAY=1]="TOUCH_DELAY",i[i.HOLDING=2]="HOLDING",i[i.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(c||(c={}));const ct=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],dt=150;class g extends v{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=c.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new N(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}render(){const t={hovered:this.hovered,pressed:this.pressed};return O`<div class="surface ${z(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==c.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===c.HOLDING){this.state=c.WAITING_FOR_CLICK;return}if(this.state===c.TOUCH_DELAY){this.state=c.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=c.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=c.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,dt)}),this.state===c.TOUCH_DELAY&&(this.state=c.HOLDING,this.startPressAnimation(t)))}}handleClick(){if(!this.disabled){if(this.state===c.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===c.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),o=Math.max(t,e),n=Math.max(nt*o,st),r=Math.floor(o*ot),u=Math.sqrt(e**2+t**2)+rt;this.initialSize=r,this.rippleScale=`${(u+n)/r}`,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:o}=window,{left:n,top:r}=this.getBoundingClientRect(),l=e+n,u=o+r,{pageX:E,pageY:x}=t;return{x:E-l,y:x-u}}getTranslationCoordinates(t){const{height:e,width:o}=this.getBoundingClientRect(),n={x:(o-this.initialSize)/2,y:(e-this.initialSize)/2};let r;return t instanceof PointerEvent?r=this.getNormalizedPointerEventCoords(t):r={x:o/2,y:e/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:n}}startPressAnimation(t){var l;if(!this.mdRoot)return;this.pressed=!0,(l=this.growAnimation)==null||l.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:o}=this.getTranslationCoordinates(t),n=`${e.x}px, ${e.y}px`,r=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${n}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:at,duration:it,easing:m.STANDARD,fill:lt})}async endPressAnimation(){this.state=c.INACTIVE;const t=this.growAnimation,e=(t==null?void 0:t.currentTime)??1/0;if(e>=L){this.pressed=!1;return}await new Promise(o=>{setTimeout(o,L-e)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);const e=t.buttons===1;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:o,left:n,bottom:r,right:l}=this.getBoundingClientRect();return t>=n&&t<=l&&e>=o&&e<=r}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break}}onControlChange(t,e){for(const o of ct)t==null||t.removeEventListener(o,this),e==null||e.addEventListener(o,this)}}s([d({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0);s([p()],g.prototype,"hovered",void 0);s([p()],g.prototype,"pressed",void 0);s([h(".surface")],g.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ht=y`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let I=class extends g{};I.styles=[ht];I=s([A("md-ripple")],I);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];$.map(F);function F(i){return i.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pt(i){for(const t of $)i.createProperty(t,{attribute:F(t),reflect:!0});i.addInitializer(t=>{const e={hostConnected(){t.setAttribute("role","presentation")}};t.addController(e)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ut(i,t){t.bubbles&&(!i.shadowRoot||t.composed)&&t.stopPropagation();const e=Reflect.construct(t.constructor,[t.type,t]),o=i.dispatchEvent(e);return o||t.preventDefault(),o}function wt(i){const t=new MouseEvent("click",{bubbles:!0});return i.dispatchEvent(t),t}function _t(i){return i.currentTarget!==i.target||i.composedPath()[0]!==i.target||i.target.disabled?!1:!ft(i)}function ft(i){const t=S;return t&&(i.preventDefault(),i.stopImmediatePropagation()),mt(),t}let S=!1;async function mt(){S=!0,await null,S=!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class C extends v{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}s([d({type:Boolean,reflect:!0})],C.prototype,"inset",void 0);s([d({type:Boolean,reflect:!0,attribute:"inset-start"})],C.prototype,"insetStart",void 0);s([d({type:Boolean,reflect:!0,attribute:"inset-end"})],C.prototype,"insetEnd",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const vt=y`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let T=class extends C{};T.styles=[vt];T=s([A("md-divider")],T);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const gt={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:m.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:m.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},bt={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:m.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:m.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class a extends v{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>gt,this.getCloseAnimation=()=>bt,this.isOpen=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.addEventListener("submit",this.handleSubmit)}async show(){var n;const{dialog:t,container:e}=this;if(!t||!e||t.open)return;if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened"))}async close(t=this.returnValue){const{dialog:e,container:o}=this;if(!e||!o||!e.open)return;const n=this.returnValue;if(this.returnValue=t,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},{ariaLabel:o}=this;return O`
      <div class="scrim"></div>
      <dialog
        class=${z(e)}
        aria-label=${o||f}
        aria-labelledby=${this.hasHeadline?"headline":f}
        role=${this.type==="alert"?"alertdialog":f}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||f}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||f}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(t=>{for(const e of t)this.handleAnchorIntersection(e)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:o}=t;e.method!=="dialog"||!o||this.close(o.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;const e=!ut(this,t);t.preventDefault(),!e&&this.close()}async animateDialog(t){const{dialog:e,scrim:o,container:n,headline:r,content:l,actions:u}=this;if(!e||!o||!n||!r||!l||!u)return;const{container:E,dialog:x,scrim:H,headline:B,content:U,actions:G}=t,V=[[e,x??[]],[o,H??[]],[n,E??[]],[r,B??[]],[l,U??[]],[u,G??[]]],P=[];for(const[w,Y]of V)for(const q of Y)P.push(w.animate(...q));await Promise.all(P.map(w=>w.finished))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:o}=t;e===this.topAnchor&&(this.isAtScrollTop=o),e===this.bottomAnchor&&(this.isAtScrollBottom=o)}}pt(a);a.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0};s([d({type:Boolean})],a.prototype,"open",null);s([d({attribute:!1})],a.prototype,"returnValue",void 0);s([d()],a.prototype,"type",void 0);s([h("dialog")],a.prototype,"dialog",void 0);s([h(".scrim")],a.prototype,"scrim",void 0);s([h(".container")],a.prototype,"container",void 0);s([h(".headline")],a.prototype,"headline",void 0);s([h(".content")],a.prototype,"content",void 0);s([h(".actions")],a.prototype,"actions",void 0);s([p()],a.prototype,"isAtScrollTop",void 0);s([p()],a.prototype,"isAtScrollBottom",void 0);s([h(".scroller")],a.prototype,"scroller",void 0);s([h(".top.anchor")],a.prototype,"topAnchor",void 0);s([h(".bottom.anchor")],a.prototype,"bottomAnchor",void 0);s([p()],a.prototype,"hasHeadline",void 0);s([p()],a.prototype,"hasActions",void 0);s([p()],a.prototype,"hasIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const yt=y`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font:var(--_headline-type);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;display:flex;gap:8px;margin:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);margin-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;margin-top:16px}.scrollable slot[name=headline]::slotted(*){margin-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){margin-top:8px}.container{border-radius:inherit;display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);content:"";inset:0;position:absolute}.scroller{flex:1;overflow:hidden;z-index:0}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font:var(--_supporting-text-type);position:relative}slot[name=content]::slotted(*){margin:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){display:flex;gap:8px;justify-content:flex-end;margin:16px 24px 24px}.has-actions slot[name=content]::slotted(*){margin-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let R=class extends a{};R.styles=[yt];R=s([A("md-dialog")],R);export{_t as a,ut as b,wt as d,h as i,Ct as m,d as n,z as o,pt as r,p as t};