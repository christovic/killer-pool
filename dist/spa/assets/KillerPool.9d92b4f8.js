import{c as h,w as z,o as de,i as $e,f as Le,g as H,h as w,r as O,d as Ne,a as De,b as Ke,s as Pe,n as J,e as Ue,j as Ze,k as xe,l as Qe,p as oe,T as He,m as Ge,q as We,t as we,u as Je,v as Xe,x as D,y as G,z as K,A as W,B as Ye,C as X,D as _e,E as ee,F as me,G as te,H as re,I as qe,J as ne,K as et}from"./index.937c2332.js";import{u as tt,c as fe,a as lt,h as at,Q as ae,b as nt,d as le,e as ot,f as rt,g as ut,i as Y}from"./QBtn.d535c6b5.js";const Ce={dark:{type:Boolean,default:null}};function pe(e,t){return h(()=>e.dark===null?t.dark.isActive:e.dark)}function it({validate:e,resetValidation:t,requiresQForm:o}){const l=$e(Le,!1);if(l!==!1){const{props:r,proxy:g}=H();Object.assign(g,{validate:e,resetValidation:t}),z(()=>r.disable,d=>{d===!0?(typeof t=="function"&&t(),l.unbindComponent(g)):l.bindComponent(g)}),r.disable!==!0&&l.bindComponent(g),de(()=>{r.disable!==!0&&l.unbindComponent(g)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const Se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Me=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Re=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ie=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Be={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Se.test(e),hexaColor:e=>Me.test(e),hexOrHexaColor:e=>Re.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>ie.test(e),rgbOrRgbaColor:e=>ue.test(e)||ie.test(e),hexOrRgbColor:e=>Se.test(e)||ue.test(e),hexaOrRgbaColor:e=>Me.test(e)||ie.test(e),anyColor:e=>Re.test(e)||ue.test(e)||ie.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const st={...tt,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function ct(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}const he=50,Oe=2*he,Te=Oe*Math.PI,dt=Math.round(Te*1e3)/1e3;fe({name:"QCircularProgress",props:{...st,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=H(),l=lt(e),r=h(()=>{const S=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-S}deg)`:`rotate3d(0, 0, 1, ${S-90}deg)`}}),g=h(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),d=h(()=>Oe/(1-e.thickness/2)),k=h(()=>`${d.value/2} ${d.value/2} ${d.value} ${d.value}`),_=h(()=>ct(e.value,e.min,e.max)),p=h(()=>Te*(1-(_.value-e.min)/(e.max-e.min))),P=h(()=>e.thickness/2*d.value);function R({thickness:S,offset:F,color:M,cls:j}){return w("circle",{class:"q-circular-progress__"+j+(M!==void 0?` text-${M}`:""),style:g.value,fill:"transparent",stroke:"currentColor","stroke-width":S,"stroke-dasharray":dt,"stroke-dashoffset":F,cx:d.value,cy:d.value,r:he})}return()=>{const S=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&S.push(w("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:he-P.value/2,cx:d.value,cy:d.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&S.push(R({cls:"track",thickness:P.value,offset:0,color:e.trackColor})),S.push(R({cls:"circle",thickness:P.value,offset:p.value,color:e.color}));const F=[w("svg",{class:"q-circular-progress__svg",style:r.value,viewBox:k.value,"aria-hidden":"true"},S)];return e.showValue===!0&&F.push(w("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[w("div",_.value)])),w("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:l.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:_.value},at(t.internal,F))}}});const ft=["rejected"],vt=[...ft,"start","finish","added","removed"],mt=()=>!0;function Ie(e){const t={};return e.forEach(o=>{t[o]=mt}),t}Ie(vt);let ge,se=0;const I=new Array(256);for(let e=0;e<256;e++)I[e]=(e+256).toString(16).substring(1);const gt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let l=t;l>0;l--)o.push(Math.floor(Math.random()*256));return o}})(),Ve=4096;function ht(){(ge===void 0||se+16>Ve)&&(se=0,ge=gt(Ve));const e=Array.prototype.slice.call(ge,se,se+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,I[e[0]]+I[e[1]]+I[e[2]]+I[e[3]]+"-"+I[e[4]]+I[e[5]]+"-"+I[e[6]]+I[e[7]]+"-"+I[e[8]]+I[e[9]]+"-"+I[e[10]]+I[e[11]]+I[e[12]]+I[e[13]]+I[e[14]]+I[e[15]]}const yt=[!0,!1,"ondemand"],bt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>yt.includes(e)}};function kt(e,t){const{props:o,proxy:l}=H(),r=O(!1),g=O(null),d=O(null);it({validate:M,resetValidation:F});let k=0,_;const p=h(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),P=h(()=>o.disable!==!0&&p.value===!0),R=h(()=>o.error===!0||r.value===!0),S=h(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:g.value);z(()=>o.modelValue,()=>{j()}),z(()=>o.reactiveRules,x=>{x===!0?_===void 0&&(_=z(()=>o.rules,()=>{j(!0)})):_!==void 0&&(_(),_=void 0)},{immediate:!0}),z(e,x=>{x===!0?d.value===null&&(d.value=!1):d.value===!1&&(d.value=!0,P.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&s())});function F(){k++,t.value=!1,d.value=null,r.value=!1,g.value=null,s.cancel()}function M(x=o.modelValue){if(P.value!==!0)return!0;const q=++k;t.value!==!0&&o.lazyRules!==!0&&(d.value=!0);const V=(E,n)=>{r.value!==E&&(r.value=E);const i=n||void 0;g.value!==i&&(g.value=i),t.value=!1},C=[];for(let E=0;E<o.rules.length;E++){const n=o.rules[E];let i;if(typeof n=="function"?i=n(x):typeof n=="string"&&Be[n]!==void 0&&(i=Be[n](x)),i===!1||typeof i=="string")return V(!0,i),!1;i!==!0&&i!==void 0&&C.push(i)}return C.length===0?(V(!1),!0):(t.value=!0,Promise.all(C).then(E=>{if(E===void 0||Array.isArray(E)===!1||E.length===0)return q===k&&V(!1),!0;const n=E.find(i=>i===!1||typeof i=="string");return q===k&&V(n!==void 0,n),n===void 0},E=>(q===k&&(console.error(E),V(!0)),!1)))}function j(x){P.value===!0&&o.lazyRules!=="ondemand"&&(d.value===!0||o.lazyRules!==!0&&x!==!0)&&s()}const s=Ne(M,0);return de(()=>{_!==void 0&&_(),s.cancel()}),Object.assign(l,{resetValidation:F,validate:M}),De(l,"hasError",()=>R.value),{isDirtyModel:d,hasRules:p,hasError:R,errorMessage:S,validate:M,resetValidation:F}}const Ae=/^on[A-Z]/;function xt(e,t){const o={listeners:O({}),attributes:O({})};function l(){const r={},g={};for(const d in e)d!=="class"&&d!=="style"&&Ae.test(d)===!1&&(r[d]=e[d]);for(const d in t.props)Ae.test(d)===!0&&(g[d]=t.props[d]);o.attributes.value=r,o.listeners.value=g}return Ke(l),l(),o}let ye=[],Ct=[];function ze(e){Ct.length===0?e():ye.push(e)}function pt(e){ye=ye.filter(t=>t!==e)}function be(e){return e===void 0?`f_${ht()}`:e}function ke(e){return e!=null&&(""+e).length>0}const wt={...Ce,...bt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},_t=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function qt(){const{props:e,attrs:t,proxy:o,vnode:l}=H();return{isDark:pe(e,o.$q),editable:h(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:xt(t,l),targetUid:O(be(e.for)),rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function St(e){const{props:t,emit:o,slots:l,attrs:r,proxy:g}=H(),{$q:d}=g;let k;e.hasValue===void 0&&(e.hasValue=h(()=>ke(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{o("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:f,onFocusout:v}),Object.assign(e,{clearValue:c,onControlFocusin:f,onControlFocusout:v,focus:i}),e.computedCounter===void 0&&(e.computedCounter=h(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:_,hasRules:p,hasError:P,errorMessage:R,resetValidation:S}=kt(e.focused,e.innerLoading),F=e.floatingLabel!==void 0?h(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):h(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),M=h(()=>t.bottomSlots===!0||t.hint!==void 0||p.value===!0||t.counter===!0||t.error!==null),j=h(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),s=h(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(F.value===!0?" q-field--float":"")+(q.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(P.value===!0?" q-field--error":"")+(P.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&M.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),x=h(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(P.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),q=h(()=>t.labelSlot===!0||t.label!==void 0),V=h(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&P.value!==!0?` text-${t.labelColor}`:"")),C=h(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:F.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=h(()=>{const a={for:e.targetUid.value};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a});z(()=>t.for,a=>{e.targetUid.value=be(a)});function n(){const a=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(a===null||a.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==a&&y.focus({preventScroll:!0}))}function i(){ze(n)}function m(){pt(n);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function f(a){clearTimeout(k),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",a))}function v(a,y){clearTimeout(k),k=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,o("blur",a)),y!==void 0&&y())})}function c(a){Pe(a),d.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),J(()=>{S(),d.platform.is.mobile!==!0&&(_.value=!1)})}function B(){const a=[];return l.prepend!==void 0&&a.push(w("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:oe},l.prepend())),a.push(w("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),P.value===!0&&t.noErrorIcon===!1&&a.push(L("error",[w(ae,{name:d.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(L("inner-loading-append",l.loading!==void 0?l.loading():[w(nt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(L("inner-clearable-append",[w(ae,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||d.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:c})])),l.append!==void 0&&a.push(w("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:oe},l.append())),e.getInnerAppend!==void 0&&a.push(L("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function b(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(w("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):l.rawControl!==void 0?a.push(l.rawControl()):l.control!==void 0&&a.push(w("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(C.value))),q.value===!0&&a.push(w("div",{class:V.value},le(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(w("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(le(l.default))}function $(){let a,y;P.value===!0?R.value!==null?(a=[w("div",{role:"alert"},R.value)],y=`q--slot-error-${R.value}`):(a=le(l.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[w("div",t.hint)],y=`q--slot-hint-${t.hint}`):(a=le(l.hint),y="q--slot-hint"));const u=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&u===!1&&a===void 0)return;const A=w("div",{key:y,class:"q-field__messages col"},a);return w("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?A:w(He,{name:"q-transition--field-message"},()=>A),u===!0?w("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function L(a,y){return y===null?null:w("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}Object.assign(g,{focus:i,blur:m});let U=!1;return Ue(()=>{U=!0}),Ze(()=>{U===!0&&t.autofocus===!0&&g.focus()}),xe(()=>{Qe.value===!0&&t.for===void 0&&(e.targetUid.value=be()),t.autofocus===!0&&g.focus()}),de(()=>{clearTimeout(k)}),function(){const y=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return w("label",{ref:e.rootRef,class:[s.value,r.class],style:r.style,...y},[l.before!==void 0?w("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:oe},l.before()):null,w("div",{class:"q-field__inner relative-position col self-stretch"},[w("div",{ref:e.controlRef,class:x.value,tabindex:-1,...e.controlEvents},B()),M.value===!0?$():null]),l.after!==void 0?w("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:oe},l.after()):null])}}const Fe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ce={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},je=Object.keys(ce);je.forEach(e=>{ce[e].regex=new RegExp(ce[e].pattern)});const Mt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+je.join("")+"])|(.)","g"),Ee=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),Rt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Bt(e,t,o,l){let r,g,d,k;const _=O(null),p=O(R());function P(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,F),z(()=>e.mask,n=>{if(n!==void 0)M(p.value,!0);else{const i=C(p.value);F(),e.modelValue!==i&&t("update:modelValue",i)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{_.value===!0&&M(p.value,!0)}),z(()=>e.unmaskedValue,()=>{_.value===!0&&M(p.value)});function R(){if(F(),_.value===!0){const n=q(C(e.modelValue));return e.fillMask!==!1?E(n):n}return e.modelValue}function S(n){if(n<r.length)return r.slice(-n);let i="",m=r;const f=m.indexOf(T);if(f>-1){for(let v=n-m.length;v>0;v--)i+=T;m=m.slice(0,f)+i+m.slice(f)}return m}function F(){if(_.value=e.mask!==void 0&&e.mask.length>0&&P(),_.value===!1){k=void 0,r="",g="";return}const n=Fe[e.mask]===void 0?e.mask:Fe[e.mask],i=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",m=i.replace(Ee,"\\$&"),f=[],v=[],c=[];let B=e.reverseFillMask===!0,b="",$="";n.replace(Mt,(y,u,A,Z,Q)=>{if(Z!==void 0){const N=ce[Z];c.push(N),$=N.negate,B===!0&&(v.push("(?:"+$+"+)?("+N.pattern+"+)?(?:"+$+"+)?("+N.pattern+"+)?"),B=!1),v.push("(?:"+$+"+)?("+N.pattern+")?")}else if(A!==void 0)b="\\"+(A==="\\"?"":A),c.push(A),f.push("([^"+b+"]+)?"+b+"?");else{const N=u!==void 0?u:Q;b=N==="\\"?"\\\\\\\\":N.replace(Ee,"\\\\$&"),c.push(N),f.push("([^"+b+"]+)?"+b+"?")}});const L=new RegExp("^"+f.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?$"),U=v.length-1,a=v.map((y,u)=>u===0&&e.reverseFillMask===!0?new RegExp("^"+m+"*"+y):u===U?new RegExp("^"+y+"("+($===""?".":$)+"+)?"+(e.reverseFillMask===!0?"$":m+"*")):new RegExp("^"+y));d=c,k=y=>{const u=L.exec(y);u!==null&&(y=u.slice(1).join(""));const A=[],Z=a.length;for(let Q=0,N=y;Q<Z;Q++){const ve=a[Q].exec(N);if(ve===null)break;N=N.slice(ve.shift().length),A.push(...ve)}return A.length>0?A.join(""):y},r=c.map(y=>typeof y=="string"?y:T).join(""),g=r.split(T).join(i)}function M(n,i,m){const f=l.value,v=f.selectionEnd,c=f.value.length-v,B=C(n);i===!0&&F();const b=q(B),$=e.fillMask!==!1?E(b):b,L=p.value!==$;f.value!==$&&(f.value=$),L===!0&&(p.value=$),document.activeElement===f&&J(()=>{if($===g){const a=e.reverseFillMask===!0?g.length:0;f.setSelectionRange(a,a,"forward");return}if(m==="insertFromPaste"&&e.reverseFillMask!==!0){const a=v-1;s.right(f,a,a);return}if(["deleteContentBackward","deleteContentForward"].indexOf(m)>-1){const a=e.reverseFillMask===!0?v===0?$.length>b.length?1:0:Math.max(0,$.length-($===g?0:Math.min(b.length,c)+1))+1:v;f.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(L===!0){const a=Math.max(0,$.length-($===g?0:Math.min(b.length,c+1)));a===1&&v===1?f.setSelectionRange(a,a,"forward"):s.rightReverse(f,a,a)}else{const a=$.length-c;f.setSelectionRange(a,a,"backward")}else if(L===!0){const a=Math.max(0,r.indexOf(T),Math.min(b.length,v)-1);s.right(f,a,a)}else{const a=v-1;s.right(f,a,a)}});const U=e.unmaskedValue===!0?C($):$;String(e.modelValue)!==U&&o(U,!0)}function j(n,i,m){const f=q(C(n.value));i=Math.max(0,r.indexOf(T),Math.min(f.length,i)),n.setSelectionRange(i,m,"forward")}const s={left(n,i,m,f){const v=r.slice(i-1).indexOf(T)===-1;let c=Math.max(0,i-1);for(;c>=0;c--)if(r[c]===T){i=c,v===!0&&i++;break}if(c<0&&r[i]!==void 0&&r[i]!==T)return s.right(n,0,0);i>=0&&n.setSelectionRange(i,f===!0?m:i,"backward")},right(n,i,m,f){const v=n.value.length;let c=Math.min(v,m+1);for(;c<=v;c++)if(r[c]===T){m=c;break}else r[c-1]===T&&(m=c);if(c>v&&r[m-1]!==void 0&&r[m-1]!==T)return s.left(n,v,v);n.setSelectionRange(f?i:m,m,"forward")},leftReverse(n,i,m,f){const v=S(n.value.length);let c=Math.max(0,i-1);for(;c>=0;c--)if(v[c-1]===T){i=c;break}else if(v[c]===T&&(i=c,c===0))break;if(c<0&&v[i]!==void 0&&v[i]!==T)return s.rightReverse(n,0,0);i>=0&&n.setSelectionRange(i,f===!0?m:i,"backward")},rightReverse(n,i,m,f){const v=n.value.length,c=S(v),B=c.slice(0,m+1).indexOf(T)===-1;let b=Math.min(v,m+1);for(;b<=v;b++)if(c[b-1]===T){m=b,m>0&&B===!0&&m--;break}if(b>v&&c[m-1]!==void 0&&c[m-1]!==T)return s.leftReverse(n,v,v);n.setSelectionRange(f===!0?i:m,m,"forward")}};function x(n){if(Ge(n)===!0)return;const i=l.value,m=i.selectionStart,f=i.selectionEnd;if(n.keyCode===37||n.keyCode===39){const v=s[(n.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];n.preventDefault(),v(i,m,f,n.shiftKey)}else n.keyCode===8&&e.reverseFillMask!==!0&&m===f?s.left(i,m,f,!0):n.keyCode===46&&e.reverseFillMask===!0&&m===f&&s.rightReverse(i,m,f,!0)}function q(n){if(n==null||n==="")return"";if(e.reverseFillMask===!0)return V(n);const i=d;let m=0,f="";for(let v=0;v<i.length;v++){const c=n[m],B=i[v];if(typeof B=="string")f+=B,c===B&&m++;else if(c!==void 0&&B.regex.test(c))f+=B.transform!==void 0?B.transform(c):c,m++;else return f}return f}function V(n){const i=d,m=r.indexOf(T);let f=n.length-1,v="";for(let c=i.length-1;c>=0&&f>-1;c--){const B=i[c];let b=n[f];if(typeof B=="string")v=B+v,b===B&&f--;else if(b!==void 0&&B.regex.test(b))do v=(B.transform!==void 0?B.transform(b):b)+v,f--,b=n[f];while(m===c&&b!==void 0&&B.regex.test(b));else return v}return v}function C(n){return typeof n!="string"||k===void 0?typeof n=="number"?k(""+n):n:k(n)}function E(n){return g.length-n.length<=0?n:e.reverseFillMask===!0&&n.length>0?g.slice(0,-n.length)+n:n+g.slice(n.length)}return{innerValue:p,hasMask:_,moveCursorForPaste:j,updateMaskValue:M,onMaskedKeydown:x}}const Vt={name:String};function At(e){return h(()=>e.name||e.for)}function Ft(e,t){function o(){const l=e.modelValue;try{const r="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(l)===l&&("length"in l?Array.from(l):[l]).forEach(g=>{r.items.add(g)}),{files:r.files}}catch{return{files:void 0}}}return t===!0?h(()=>{if(e.type==="file")return o()}):h(o)}const Et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,$t=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Pt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ot=/[a-z0-9_ -]$/i;function Tt(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(We.is.firefox===!0?Ot.test(o.data)===!1:Et.test(o.data)===!0||$t.test(o.data)===!0||Pt.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var It=fe({name:"QInput",inheritAttrs:!1,props:{...wt,...Rt,...Vt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[..._t,"paste","change"],setup(e,{emit:t,attrs:o}){const l={};let r=NaN,g,d,k,_;const p=O(null),P=At(e),{innerValue:R,hasMask:S,moveCursorForPaste:F,updateMaskValue:M,onMaskedKeydown:j}=Bt(e,t,B,p),s=Ft(e,!0),x=h(()=>ke(R.value)),q=Tt(c),V=qt(),C=h(()=>e.type==="textarea"||e.autogrow===!0),E=h(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),n=h(()=>{const u={...V.splitAttrs.listeners.value,onInput:c,onPaste:v,onChange:$,onBlur:L,onFocus:we};return u.onCompositionstart=u.onCompositionupdate=u.onCompositionend=q,S.value===!0&&(u.onKeydown=j),e.autogrow===!0&&(u.onAnimationend=b),u}),i=h(()=>{const u={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:P.value,...V.splitAttrs.attributes.value,id:V.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(u.type=e.type),e.autogrow===!0&&(u.rows=1),u});z(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),z(()=>e.modelValue,u=>{if(S.value===!0){if(d===!0&&(d=!1,String(u)===r))return;M(u)}else R.value!==u&&(R.value=u,e.type==="number"&&l.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete l.value));e.autogrow===!0&&J(b)}),z(()=>e.autogrow,u=>{u===!0?J(b):p.value!==null&&o.rows>0&&(p.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&J(b)});function m(){ze(()=>{const u=document.activeElement;p.value!==null&&p.value!==u&&(u===null||u.id!==V.targetUid.value)&&p.value.focus({preventScroll:!0})})}function f(){p.value!==null&&p.value.select()}function v(u){if(S.value===!0&&e.reverseFillMask!==!0){const A=u.target;F(A,A.selectionStart,A.selectionEnd)}t("paste",u)}function c(u){if(!u||!u.target)return;if(e.type==="file"){t("update:modelValue",u.target.files);return}const A=u.target.value;if(u.target.qComposing===!0){l.value=A;return}if(S.value===!0)M(A,!1,u.inputType);else if(B(A),E.value===!0&&u.target===document.activeElement){const{selectionStart:Z,selectionEnd:Q}=u.target;Z!==void 0&&Q!==void 0&&J(()=>{u.target===document.activeElement&&A.indexOf(u.target.value)===0&&u.target.setSelectionRange(Z,Q)})}e.autogrow===!0&&b()}function B(u,A){_=()=>{e.type!=="number"&&l.hasOwnProperty("value")===!0&&delete l.value,e.modelValue!==u&&r!==u&&(r=u,A===!0&&(d=!0),t("update:modelValue",u),J(()=>{r===u&&(r=NaN)})),_=void 0},e.type==="number"&&(g=!0,l.value=u),e.debounce!==void 0?(clearTimeout(k),l.value=u,k=setTimeout(_,e.debounce)):_()}function b(){const u=p.value;if(u!==null){const A=u.parentNode.style,{overflow:Z}=u.style;A.marginBottom=u.scrollHeight-1+"px",u.style.height="1px",u.style.overflow="hidden",u.style.height=u.scrollHeight+"px",u.style.overflow=Z,A.marginBottom=""}}function $(u){q(u),clearTimeout(k),_!==void 0&&_(),t("change",u.target.value)}function L(u){u!==void 0&&we(u),clearTimeout(k),_!==void 0&&_(),g=!1,d=!1,delete l.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=R.value!==void 0?R.value:"")})}function U(){return l.hasOwnProperty("value")===!0?l.value:R.value!==void 0?R.value:""}de(()=>{L()}),xe(()=>{e.autogrow===!0&&b()}),Object.assign(V,{innerValue:R,fieldClass:h(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:h(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:p,emitValue:B,hasValue:x,floatingLabel:h(()=>x.value===!0||ke(e.displayValue)),getControl:()=>w(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...i.value,...n.value,...e.type!=="file"?{value:U()}:s.value}),getShadowControl:()=>w("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[w("span",{class:"invisible"},U()),w("span",e.shadowText)])});const a=St(V),y=H();return Object.assign(y.proxy,{focus:m,select:f,getNativeElement:()=>p.value}),a}}),zt=fe({name:"QItem",props:{...Ce,...ot,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=H(),r=pe(e,l),{hasRouterLink:g,hasLink:d,linkProps:k,linkClass:_,linkTag:p,navigateToRouterLink:P}=rt(),R=O(null),S=O(null),F=h(()=>e.clickable===!0||d.value===!0||e.tag==="label"),M=h(()=>e.disable!==!0&&F.value===!0),j=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?_.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(M.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),s=h(()=>{if(e.insetLevel===void 0)return null;const C=l.lang.rtl===!0?"Right":"Left";return{["padding"+C]:16+e.insetLevel*56+"px"}});function x(C){M.value===!0&&(S.value!==null&&(C.qKeyEvent!==!0&&document.activeElement===R.value?S.value.focus():document.activeElement===S.value&&R.value.focus()),g.value===!0&&P(C),o("click",C))}function q(C){if(M.value===!0&&Je(C,13)===!0){Pe(C),C.qKeyEvent=!0;const E=new MouseEvent("click",C);E.qKeyEvent=!0,R.value.dispatchEvent(E)}o("keyup",C)}function V(){const C=ut(t.default,[]);return M.value===!0&&C.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:S})),C}return()=>{const C={ref:R,class:j.value,style:s.value,onClick:x,onKeyup:q};return M.value===!0?(C.tabindex=e.tabindex||"0",Object.assign(C,k.value)):F.value===!0&&(C["aria-disabled"]="true"),w(p.value,C,V())}}}),jt=fe({name:"QList",props:{...Ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const o=H(),l=pe(e,o.proxy.$q),r=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w("div",{class:r.value},le(t.default))}});const Lt=["ok","hide"];Ie(Lt);function Nt(){return $e(Xe)}const Dt={style:{width:"100%"},class:"row justify-between q-pa-md"},Kt={class:"justify-center"},Ut={class:"row"},Zt={class:"row justify-center items-center q-gutter-md"},Qt=ne("Reset Game"),Ht=ne("Shuffle Players"),Gt={style:{width:"100vw"}},Wt={style:{width:"500px"},class:"row items-center"},Jt=["onClick"],Xt=["onClick"],Yt={class:"col"},el={key:1,class:"flex flex-center",style:{width:"100%"}},tl={class:"column flex flex-center"},ll={key:0},al={class:"row q-gutter-md items-center"},nl=ne("Pot"),ol=K("div",null,"or",-1),rl=ne("Miss"),ul={key:1,class:"row"},cl={__name:"KillerPool",setup(e){const t=Nt();xe(()=>{_(),F()});const o=O(""),l=O([]),r=O({name:""}),g=O(),d=h(()=>(console.log("Formatted Players called"),l.value.forEach(function(s){s.health>0&&s.name==r.value.name?s.style="height: 100px; color: black":s.health>0?s.style="color: black":s.style="color: grey"}),l.value)),k=h(()=>l.value.filter(s=>s.health>0));function _(){let s=t.localStorage.getItem("players");s!=null&&(l.value=s.players)}function p(s){for(let x=s.length-1;x>0;x--){let q=Math.floor(Math.random()*(x+1));[s[x],s[q]]=[s[q],s[x]]}}function P(){p(l.value)}function R(s){s.name==r.value.name&&(console.log("assigning new user as current "),r.value=k.value[k.value.indexOf(s)+1]),l.value.length==1&&(r.value={name:""}),l.value=l.value.filter(x=>x!=s)}function S(){l.value.forEach(function(s){s.health=3}),r.value={name:""},F()}function F(){k.value.length!=0&&r.value.name==""&&(r.value=k.value[0],console.log(d.value))}function M(s){let x;k.value.length!=0&&(r.value.name==null?(r.value=k.value[0],console.log(d.value)):(x=k.value[(k.value.indexOf(r.value)+1)%k.value.length],s||r.value.health--,r.value.health==0&&M()),r.value=x)}function j(){if(!(o.value==""||l.value.filter(x=>x.name==o.value).length>0)){var s={name:o.value,health:3};r.value.name==""&&(r.value=s),l.value.push(s),o.value="",d.value}}return z(l,async()=>{let s={players:l.value};t.localStorage.set("players",s)},{deep:!0}),z(r,async()=>{console.log("watched"),console.log(r.value)}),z(k,async()=>{if(k.value.length==1&&l.value.length>1){r.value={name:""},g.value=k.value[0];return}else g.value=void 0},{deep:!0}),(s,x)=>(D(),G(re,null,[K("div",Dt,[K("div",Kt,[K("div",Ut,[W(It,{dense:"",modelValue:o.value,"onUpdate:modelValue":x[0]||(x[0]=q=>o.value=q),label:"Add a player",outlined:"",onKeydown:Ye(j,["enter"])},null,8,["modelValue","onKeydown"]),W(Y,{class:"vertical-bottom",round:"",dense:"",flat:"",icon:"add",onClick:j})])]),K("div",Zt,[W(Y,{onClick:S},{default:X(()=>[Qt]),_:1}),W(Y,{onClick:P},{default:X(()=>[Ht]),_:1})])]),K("div",Gt,[_e(d).length>0?(D(),ee(jt,{key:0},{default:X(()=>[(D(!0),G(re,null,qe(_e(d),q=>(D(),ee(zt,{class:"justify-center",key:q,style:et(q.style+"; width: 100%"),active:q.name==r.value.name,"active-class":"bg-light-green-2"},{default:X(()=>[K("div",Wt,[K("div",{class:"col text-right items-center text-weight-bold",onClick:V=>r.value=q},[r.value&&q.name==r.value.name?(D(),ee(ae,{key:0,size:"lg",name:"chevron_right"})):te("",!0),ne(" "+me(q.name),1)],8,Jt),K("div",{class:"col flex flex-center no-wrap",onClick:V=>r.value=q},[(D(),G(re,null,qe(3,V=>(D(),G(re,{key:V},[V<=q.health?(D(),ee(ae,{key:0,color:"red",name:"favorite",size:"lg"})):te("",!0),V>q.health?(D(),ee(ae,{key:1,color:"grey",name:"favorite",size:"lg"})):te("",!0)],64))),64))],8,Xt),K("div",Yt,[W(Y,{class:"float-left",icon:"delete",round:"",dense:"",flat:"",onClick:V=>R(q)},null,8,["onClick"])])])]),_:2},1032,["style","active"]))),128))]),_:1})):(D(),G("h1",el," Add some players! "))]),K("div",tl,[r.value.name!=""?(D(),G("h4",ll,"Did "+me(r.value.name),1)):te("",!0),K("div",al,[W(Y,{color:"green",onClick:x[1]||(x[1]=q=>M(!0))},{default:X(()=>[nl]),_:1}),ol,W(Y,{color:"red",onClick:x[2]||(x[2]=q=>M(!1))},{default:X(()=>[rl]),_:1})]),g.value?(D(),G("h1",ul," Winner: "+me(g.value.name),1)):te("",!0)])],64))}};export{cl as default};