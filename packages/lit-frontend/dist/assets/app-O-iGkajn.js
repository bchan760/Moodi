(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,Z=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ee=new WeakMap;let de=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Z&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}};const ve=o=>new de(typeof o=="string"?o:o+"",void 0,G),M=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new de(t,o,G)},be=(o,e)=>{if(Z)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},te=Z?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ve(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:we,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Se,getOwnPropertySymbols:xe,getPrototypeOf:Pe}=Object,$=globalThis,se=$.trustedTypes,Ce=se?se.emptyScript:"",F=$.reactiveElementPolyfillSupport,C=(o,e)=>o,j={toAttribute(o,e){switch(e){case Boolean:o=o?Ce:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Q=(o,e)=>!Ae(o,e),ie={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&we(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=Ee(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...Se(t),...xe(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(te(s))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:j;this._$Em=s,this[s]=a.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Q)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,F==null||F({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,L=O.trustedTypes,oe=L?L.createPolicy("lit-html",{createHTML:o=>o}):void 0,pe="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+m,Oe=`<${ue}>`,b=document,U=()=>b.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",ge=Array.isArray,Ue=o=>ge(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",K=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ne=/>/g,y=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,ae=/"/g,fe=/^(?:script|style|textarea|title)$/i,Te=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=Te(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ce=new WeakMap,v=b.createTreeWalker(b,129);function me(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return oe!==void 0?oe.createHTML(e):e}const Ne=(o,e)=>{const t=o.length-1,i=[];let s,r=e===2?"<svg>":"",n=P;for(let a=0;a<t;a++){const l=o[a];let h,p,c=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===P?p[1]==="!--"?n=re:p[1]!==void 0?n=ne:p[2]!==void 0?(fe.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=s??P,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?y:p[3]==='"'?ae:le):n===ae||n===le?n=y:n===re||n===ne?n=P:(n=y,s=void 0);const f=n===y&&o[a+1].startsWith("/>")?" ":"";r+=n===P?l+Oe:c>=0?(i.push(h),l.slice(0,c)+pe+l.slice(c)+m+f):l+m+(c===-2?a:f)}return[me(o,r+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class N{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[h,p]=Ne(e,t);if(this.el=N.createElement(h,i),v.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=v.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(pe)){const u=p[n++],f=s.getAttribute(c).split(m),z=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:z[2],strings:f,ctor:z[1]==="."?Me:z[1]==="?"?ke:z[1]==="@"?Re:V}),s.removeAttribute(c)}else c.startsWith(m)&&(l.push({type:6,index:r}),s.removeAttribute(c));if(fe.test(s.tagName)){const c=s.textContent.split(m),u=c.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let f=0;f<u;f++)s.append(c[f],U()),v.nextNode(),l.push({type:2,index:++r});s.append(c[u],U())}}}else if(s.nodeType===8)if(s.data===ue)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(m,c+1))!==-1;)l.push({type:7,index:r}),c+=m.length-1}r++}}static createElement(e,t){const i=b.createElement("template");return i.innerHTML=e,i}}function S(o,e,t=o,i){var n,a;if(e===E)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const r=T(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=S(o,s._$AS(o,e.values),s,i)),e}class He{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??b).importNode(t,!0);v.currentNode=s;let r=v.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new k(r,r.nextSibling,this,e):l.type===1?h=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(h=new ze(r,this,e)),this._$AV.push(h),l=i[++a]}n!==(l==null?void 0:l.index)&&(r=v.nextNode(),n++)}return v.currentNode=b,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),T(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ue(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(me(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const n=new He(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new N(e)),t}k(e){ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new k(this.S(U()),this.S(U()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(r===void 0)e=S(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=S(this,a[i+l],t,l),h===E&&(h=this._$AH[l]),n||(n=!T(h)||h!==this._$AH[l]),h===d?e=d:e!==d&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class ke extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Re extends V{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??d)===E)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const J=O.litHtmlPolyfillSupport;J==null||J(N,k),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.1.2");const De=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new k(e.insertBefore(U(),r),r,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var he;g._$litElement$=!0,g.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:g});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Q},Le=(o=je,e,t)=>{const{kind:i,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(t.name,o),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,o)},init(a){return a!==void 0&&this.P(n,void 0,o),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,o)}}throw Error("Unsupported decorator location: "+i)};function _(o){return(e,t)=>typeof t=="object"?Le(o,e,t):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,e,t)}var Be=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,X=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ie(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Be(e,t,s),s};let H=class extends g{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){const o=this.align==="left"?"":"--position-left: auto; --position-right: 0;";return w`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu" style=${o}>
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(o){const e=o.target;this._toggle(e==null?void 0:e.checked)}_toggle(o){this.open=o,this._toggleClickAway(o)}_toggleClickAway(o){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};o?document.addEventListener("click",e):document.removeEventListener("click",e)}};H.styles=M`
    :host {
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: var(--position-left);
      right: var(--position-right);
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;X([_({reflect:!0,type:Boolean})],H.prototype,"open",2);X([_()],H.prototype,"align",2);H=X([R("drop-down")],H);var We=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,$e=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ve(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&We(e,t,s),s};let B=class extends g{constructor(){super(...arguments),this.avatar=""}render(){return w`
      <ul>
        <li class="header">
          <img src=${this.avatar} />
          <h1><slot name="name">Your Name</slot></h1>
        </li>
        <li>
          <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>
        </li>
        <slot></slot>
        <li>
          <slot name="logout">Sign out&hellip;</slot>
        </li>
      </ul>
    `}_toggleDarkMode(o){const e=o.target,t=document.body;console.log("Toggling Dark mode",o),e!=null&&e.on?(t.classList.add("dark-mode"),t.classList.remove("light-mode")):(t.classList.remove("dark-mode"),t.classList.add("light-mode"))}_selectFontSize(o){const e=o.target,t=document.body;if(console.log("Selecting Font Size",o),e){const i=e.value?e.value.toString()+"px":"initial";t.style.fontSize=i}}};B.styles=M`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-text);
      border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: min-content;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: var(--line-weight-superfine);
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: right;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px; /* spacing between image and text */
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: left;
    }
  `;$e([_()],B.prototype,"avatar",2);B=$e([R("user-panel")],B);var qe=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,_e=(o,e,t,i)=>{for(var s=i>1?void 0:i?Fe(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&qe(e,t,s),s};let I=class extends g{constructor(){super(...arguments),this.on=!1}render(){return w`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(o){const e=o.target,t=new Event(o.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};I.styles=M`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: right;
      gap: var(--size-spacing-medium);
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-border-control);
      border-radius: 0.75em;
      background-color: var(--color-background-control);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color
        var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-accent);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--color-foreground-control);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;_e([_({reflect:!0,type:Boolean})],I.prototype,"on",2);I=_e([R("toggle-switch")],I);var Ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,q=(o,e,t,i)=>{for(var s=i>1?void 0:i?Je(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ke(e,t,s),s};let x=class extends g{constructor(){super(...arguments),this.name="preset",this.options=[1,2,3,4,5]}_renderButton(o){const e=this.value===o;return w`
      <label>
        <input
          type="radio"
          name=${this.name}
          .value=${o}
          .checked=${e} />
        ${o}
      </label>
    `}render(){return w`
      <div>
        <span><slot></slot></span>
        <span class="switches" @change=${this._handleChange}>
          ${this.options.map(o=>this._renderButton(o))}
        </span>
      </div>
    `}_handleChange(o){const e=o.target,t=new Event(o.type,{bubbles:!0,composed:!0});console.log("Preset changed",o),e&&(this.value=e.value?parseInt(e.value):void 0),this.dispatchEvent(t)}};x.styles=M`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    span.switches {
      display: flex;
      justify-content: stretch;
      border-radius: var(--size-corner-medium);
      border: var(--line-weight-fine) solid var(--color-accent);
      overflow: hidden;
      align-item: end;
      margin: var(--size-spacing-small) 0;
    }
    label {
      display: inline-block;
      flex-grow: 1;
      padding: var(--size-spacing-small);
      line-height: 1em;
      background-color: var(--color-background-control);
      color: var(--color-text-control);
      font-family: var(--font-family-display);
      transition: background-color
        var(--time-transition-control);
      cursor: pointer;
    }
    label:has(input:checked) {
      background-color: var(--color-accent);
      color: var(--color-text-control-inverted);
    }
    label + label {
      border-left: var(--line-weight-fine) solid
        var(--color-accent);
    }
    input {
      display: none;
    }
  `;q([_({reflect:!0,type:Number})],x.prototype,"value",2);q([_()],x.prototype,"name",2);q([_({attribute:!1})],x.prototype,"options",2);x=q([R("preset-buttons")],x);var Ye=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,ye=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ze(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ye(e,t,s),s};let W=class extends g{constructor(){super(...arguments),this.href="platform.html"}render(){return w`
            <li class="song-item">
                <a href=${this.href}>
                    <slot name="image"></slot>
                    <span class="title">
                        <slot name="title"></slot>
                    </span>
                </a>
            </li>
        `}};W.styles=M`
        .song-item {
            display: inline-block;
            margin-right: 100px; /* Add space between the list items */
            font-size: 18px;
            color: var(--color-text-light); /* Use custom text color */
            list-style: none; /* Remove default list styling */
        }

        .song-item a {
            color: var(--color-text-light); /* Set link text color to custom color */
            text-decoration: none; /* Remove default underline styling */
        }

        .song-image {
            width: 300px;
            height: 300px;
            display: block;
            margin: 0 auto; /* Center the image */
        }

        .song-title {
            display: block;
            text-align: center;
            margin-top: 10px;
        }
    `;ye([_({type:String})],W.prototype,"href",2);W=ye([R("song-item")],W);
