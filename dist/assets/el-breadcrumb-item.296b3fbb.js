import{b as f,aq as C,c as l,g as _,r as y,ac as E,o as P,p as t,D as u,R as k,y as o,z as r,_ as v,d as S,ae as $,x as w,q as d,v as x,K as q,E as D,Z as K,ad as N,X as j,ai as z}from"./index.ddaafd33.js";const B=Symbol("breadcrumbKey"),A=f({separator:{type:String,default:"/"},separatorIcon:{type:C}}),T=l({name:"ElBreadcrumb"}),M=l({...T,props:A,setup(p){const a=p,n=_("breadcrumb"),s=y();return E(B,a),P(()=>{const e=s.value.querySelectorAll(`.${n.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,c)=>(t(),u("div",{ref_key:"breadcrumb",ref:s,class:o(r(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[k(e.$slots,"default")],2))}});var O=v(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const R=f({to:{type:S([String,Object]),default:""},replace:{type:Boolean,default:!1}}),V=l({name:"ElBreadcrumbItem"}),X=l({...V,props:R,setup(p){const a=p,n=N(),s=$(B,void 0),e=_("breadcrumb"),c=n.appContext.config.globalProperties.$router,I=y(),h=()=>{!a.to||!c||(a.replace?c.replace(a.to):c.push(a.to))};return(m,Z)=>{var i,b;return t(),u("span",{class:o(r(e).e("item"))},[w("span",{ref_key:"link",ref:I,class:o([r(e).e("inner"),r(e).is("link",!!m.to)]),role:"link",onClick:h},[k(m.$slots,"default")],2),(i=r(s))!=null&&i.separatorIcon?(t(),d(r(D),{key:0,class:o(r(e).e("separator"))},{default:x(()=>[(t(),d(q(r(s).separatorIcon)))]),_:1},8,["class"])):(t(),u("span",{key:1,class:o(r(e).e("separator")),role:"presentation"},K((b=r(s))==null?void 0:b.separator),3))],2)}}});var g=v(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const G=j(O,{BreadcrumbItem:g}),H=z(g);export{H as E,G as a};