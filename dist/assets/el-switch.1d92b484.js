import{b as $,aq as S,d as x,aF as k,a1 as V,a as E,c as q,g as ee,l as u,r as T,bm as ae,w as B,ax as te,o as ie,p as o,D as v,x as N,z as a,y as r,aM as oe,q as c,v as p,K as y,E as h,B as d,Z as P,t as ne,bx as le,Q as O,A as se,_ as ce,bz as re,n as ue,ca as U,bl as de,ad as ve,X as fe}from"./index.ddaafd33.js";import{i as pe}from"./validator.d6e17d1d.js";import{U as A,C as D,I as z}from"./event.776e7e11.js";import{u as he,a as me,c as ye,b as be}from"./use-form-item.b6b7a00b.js";const ge=$({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:pe},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:S},activeActionIcon:{type:S},activeIcon:{type:S},inactiveIcon:{type:S},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:x(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Ce={[A]:s=>k(s)||V(s)||E(s),[D]:s=>k(s)||V(s)||E(s),[z]:s=>k(s)||V(s)||E(s)},Ie=["onClick"],Se=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ke=["aria-hidden"],we=["aria-hidden"],Ve=["aria-hidden"],K="ElSwitch",Ee=q({name:K}),Te=q({...Ee,props:ge,emits:Ce,setup(s,{expose:L,emit:f}){const t=s,G=ve(),{formItem:b}=he(),H=me(),i=ee("switch");(e=>{e.forEach(l=>{re({from:l[0],replacement:l[1],scope:K,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var I;return!!((I=G.vnode.props)!=null&&I[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:Q}=ye(t,{formItemContext:b}),g=be(u(()=>t.loading)),w=T(t.modelValue!==!1),m=T(),R=T(),W=u(()=>[i.b(),i.m(H.value),i.is("disabled",g.value),i.is("checked",n.value)]),X=u(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),Z=u(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),j=u(()=>({width:ae(t.width)}));B(()=>t.modelValue,()=>{w.value=!0}),B(()=>t.value,()=>{w.value=!1});const _=u(()=>w.value?t.modelValue:t.value),n=u(()=>_.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(_.value)||(f(A,t.inactiveValue),f(D,t.inactiveValue),f(z,t.inactiveValue)),B(n,e=>{var l;m.value.checked=e,t.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(I=>te()))});const C=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(A,e),f(D,e),f(z,e),ue(()=>{m.value.checked=n.value})},F=()=>{if(g.value)return;const{beforeChange:e}=t;if(!e){C();return}const l=e();[U(l),k(l)].includes(!0)||de(K,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(l)?l.then(M=>{M&&C()}).catch(M=>{}):l&&C()},J=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),Y=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return ie(()=>{m.value.checked=n.value}),L({focus:Y,checked:n}),(e,l)=>(o(),v("div",{class:r(a(W)),style:O(a(J)),onClick:se(F,["prevent"])},[N("input",{id:a(Q),ref_key:"input",ref:m,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(g),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(g),tabindex:e.tabindex,onChange:C,onKeydown:oe(F,["enter"])},null,42,Se),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:r(a(X))},[e.inactiveIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.inactiveIcon)))]),_:1})):d("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},P(e.inactiveText),9,ke)):d("v-if",!0)],2)):d("v-if",!0),N("span",{ref_key:"core",ref:R,class:r(a(i).e("core")),style:O(a(j))},[e.inlinePrompt?(o(),v("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),c(a(h),{key:0,class:r(a(i).is("icon"))},{default:p(()=>[(o(),c(y(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},P(a(n)?e.activeText:e.inactiveText),11,we)):d("v-if",!0)],2)):d("v-if",!0),N("div",{class:r(a(i).e("action"))},[e.loading?(o(),c(a(h),{key:0,class:r(a(i).is("loading"))},{default:p(()=>[ne(a(le))]),_:1},8,["class"])):e.activeActionIcon&&a(n)?(o(),c(a(h),{key:1},{default:p(()=>[(o(),c(y(e.activeActionIcon)))]),_:1})):e.inactiveActionIcon&&!a(n)?(o(),c(a(h),{key:2},{default:p(()=>[(o(),c(y(e.inactiveActionIcon)))]),_:1})):d("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:r(a(Z))},[e.activeIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.activeIcon)))]),_:1})):d("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},P(e.activeText),9,Ve)):d("v-if",!0)],2)):d("v-if",!0)],14,Ie))}});var Be=ce(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ke=fe(Be);export{Ke as E};
