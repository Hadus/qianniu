import{a9 as Ee,b as ie,a as Ne,r as b,l as R,z as e,w as F,k as Se,o as ue,aa as Te,ab as Me,ac as $e,a1 as Ae,ad as ce,c as Y,g as fe,p as A,D as P,x as X,q as se,v as K,O as G,P as Q,y as B,A as U,t as q,F as Be,E as ne,T as oe,B as W,G as He,R as ve,Q as me,H as Oe,N as Le,Z as Re,_ as de,ae as Pe,af as Ve,ag as ze,ah as De,X as Fe,ai as Ue}from"./index.ddaafd33.js";import{u as We}from"./index.96e958f9.js";import{d as je}from"./debounce.ef0fdf40.js";var Xe="Expected a function";function re(s,k,n){var o=!0,d=!0;if(typeof s!="function")throw new TypeError(Xe);return Ee(n)&&(o="leading"in n?!!n.leading:o,d="trailing"in n?!!n.trailing:d),je(s,k,{leading:o,maxWait:k,trailing:d})}const Ke=ie({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),qe={change:(s,k)=>[s,k].every(Ne)},he=Symbol("carouselContextKey"),le=300,Ge=(s,k,n)=>{const{children:o,addChild:d,removeChild:g}=We(ce(),"ElCarouselItem"),l=b(-1),h=b(null),y=b(!1),I=b(),C=b(0),N=R(()=>s.arrow!=="never"&&!e(m)),T=R(()=>o.value.some(t=>t.props.label.toString().length>0)),_=R(()=>s.type==="card"),m=R(()=>s.direction==="vertical"),H=R(()=>s.height!=="auto"?{height:s.height}:{height:`${C.value}px`,overflow:"hidden"}),E=re(t=>{r(t)},le,{trailing:!0}),S=re(t=>{V(t)},le);function M(){h.value&&(clearInterval(h.value),h.value=null)}function O(){s.interval<=0||!s.autoplay||h.value||(h.value=setInterval(()=>i(),s.interval))}const i=()=>{l.value<o.value.length-1?l.value=l.value+1:s.loop&&(l.value=0)};function r(t){if(Ae(t)){const z=o.value.filter(j=>j.props.name===t);z.length>0&&(t=o.value.indexOf(z[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const v=o.value.length,$=l.value;t<0?l.value=s.loop?v-1:0:t>=v?l.value=s.loop?0:v-1:l.value=t,$===l.value&&f($),x()}function f(t){o.value.forEach((v,$)=>{v.translateItem($,l.value,t)})}function a(t,v){var $,z,j,ee;const D=e(o),te=D.length;if(te===0||!t.states.inStage)return!1;const Ie=v+1,Ce=v-1,ae=te-1,we=D[ae].states.active,be=D[0].states.active,_e=(z=($=D[Ie])==null?void 0:$.states)==null?void 0:z.active,ke=(ee=(j=D[Ce])==null?void 0:j.states)==null?void 0:ee.active;return v===ae&&be||_e?"left":v===0&&we||ke?"right":!1}function w(){y.value=!0,s.pauseOnHover&&M()}function L(){y.value=!1,O()}function u(t){e(m)||o.value.forEach((v,$)=>{t===a(v,$)&&(v.states.hover=!0)})}function c(){e(m)||o.value.forEach(t=>{t.states.hover=!1})}function p(t){l.value=t}function V(t){s.trigger==="hover"&&t!==l.value&&(l.value=t)}function Z(){r(l.value-1)}function ge(){r(l.value+1)}function x(){M(),O()}function ye(t){s.height==="auto"&&(C.value=t)}F(()=>l.value,(t,v)=>{f(v),v>-1&&k("change",t,v)}),F(()=>s.autoplay,t=>{t?O():M()}),F(()=>s.loop,()=>{r(l.value)}),F(()=>s.interval,()=>{x()}),F(()=>o.value,()=>{o.value.length>0&&r(s.initialIndex)});const J=Se();return ue(()=>{J.value=Te(I.value,()=>{f()}),O()}),Me(()=>{M(),I.value&&J.value&&J.value.stop()}),$e(he,{root:I,isCardType:_,isVertical:m,items:o,loop:s.loop,addItem:d,removeItem:g,setActiveItem:r,setContainerHeight:ye}),{root:I,activeIndex:l,arrowDisplay:N,hasLabel:T,hover:y,isCardType:_,items:o,isVertical:m,containerStyle:H,handleButtonEnter:u,handleButtonLeave:c,handleIndicatorClick:p,handleMouseEnter:w,handleMouseLeave:L,setActiveItem:r,prev:Z,next:ge,throttledArrowClick:E,throttledIndicatorHover:S}},Qe=["onMouseenter","onClick"],Ye={key:0},Ze="ElCarousel",Je=Y({name:Ze}),xe=Y({...Je,props:Ke,emits:qe,setup(s,{expose:k,emit:n}){const o=s,{root:d,activeIndex:g,arrowDisplay:l,hasLabel:h,hover:y,isCardType:I,items:C,isVertical:N,containerStyle:T,handleButtonEnter:_,handleButtonLeave:m,handleIndicatorClick:H,handleMouseEnter:E,handleMouseLeave:S,setActiveItem:M,prev:O,next:i,throttledArrowClick:r,throttledIndicatorHover:f}=Ge(o,n),a=fe("carousel"),w=R(()=>{const u=[a.b(),a.m(o.direction)];return e(I)&&u.push(a.m("card")),u}),L=R(()=>{const u=[a.e("indicators"),a.em("indicators",o.direction)];return e(h)&&u.push(a.em("indicators","labels")),o.indicatorPosition==="outside"&&u.push(a.em("indicators","outside")),e(N)&&u.push(a.em("indicators","right")),u});return k({setActiveItem:M,prev:O,next:i}),(u,c)=>(A(),P("div",{ref_key:"root",ref:d,class:B(e(w)),onMouseenter:c[6]||(c[6]=U((...p)=>e(E)&&e(E)(...p),["stop"])),onMouseleave:c[7]||(c[7]=U((...p)=>e(S)&&e(S)(...p),["stop"]))},[X("div",{class:B(e(a).e("container")),style:me(e(T))},[e(l)?(A(),se(oe,{key:0,name:"carousel-arrow-left",persisted:""},{default:K(()=>[G(X("button",{type:"button",class:B([e(a).e("arrow"),e(a).em("arrow","left")]),onMouseenter:c[0]||(c[0]=p=>e(_)("left")),onMouseleave:c[1]||(c[1]=(...p)=>e(m)&&e(m)(...p)),onClick:c[2]||(c[2]=U(p=>e(r)(e(g)-1),["stop"]))},[q(e(ne),null,{default:K(()=>[q(e(Be))]),_:1})],34),[[Q,(u.arrow==="always"||e(y))&&(o.loop||e(g)>0)]])]),_:1})):W("v-if",!0),e(l)?(A(),se(oe,{key:1,name:"carousel-arrow-right",persisted:""},{default:K(()=>[G(X("button",{type:"button",class:B([e(a).e("arrow"),e(a).em("arrow","right")]),onMouseenter:c[3]||(c[3]=p=>e(_)("right")),onMouseleave:c[4]||(c[4]=(...p)=>e(m)&&e(m)(...p)),onClick:c[5]||(c[5]=U(p=>e(r)(e(g)+1),["stop"]))},[q(e(ne),null,{default:K(()=>[q(e(He))]),_:1})],34),[[Q,(u.arrow==="always"||e(y))&&(o.loop||e(g)<e(C).length-1)]])]),_:1})):W("v-if",!0),ve(u.$slots,"default")],6),u.indicatorPosition!=="none"?(A(),P("ul",{key:0,class:B(e(L))},[(A(!0),P(Oe,null,Le(e(C),(p,V)=>(A(),P("li",{key:V,class:B([e(a).e("indicator"),e(a).em("indicator",u.direction),e(a).is("active",V===e(g))]),onMouseenter:Z=>e(f)(V),onClick:U(Z=>e(H)(V),["stop"])},[X("button",{class:B(e(a).e("button"))},[e(h)?(A(),P("span",Ye,Re(p.props.label),1)):W("v-if",!0)],2)],42,Qe))),128))],2)):W("v-if",!0)],34))}});var et=de(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const tt=ie({name:{type:String,default:""},label:{type:[String,Number],default:""}}),at=(s,k)=>{const n=Pe(he),o=ce(),d=.83,g=b(),l=b(!1),h=b(0),y=b(1),I=b(!1),C=b(!1),N=b(!1),T=b(!1),{isCardType:_,isVertical:m}=n;function H(i,r,f){const a=f-1,w=r-1,L=r+1,u=f/2;return r===0&&i===a?-1:r===a&&i===0?f:i<w&&r-i>=u?f+1:i>L&&i-r>=u?-2:i}function E(i,r){var f,a;const w=e(m)?((f=n.root.value)==null?void 0:f.offsetHeight)||0:((a=n.root.value)==null?void 0:a.offsetWidth)||0;return N.value?w*((2-d)*(i-r)+1)/4:i<r?-(1+d)*w/4:(3+d)*w/4}function S(i,r,f){const a=n.root.value;return a?((f?a.offsetHeight:a.offsetWidth)||0)*(i-r):0}const M=(i,r,f)=>{var a;const w=e(_),L=(a=n.items.value.length)!=null?a:Number.NaN,u=i===r;!w&&!De(f)&&(T.value=u||i===f),!u&&L>2&&n.loop&&(i=H(i,r,L));const c=e(m);I.value=u,w?(N.value=Math.round(Math.abs(i-r))<=1,h.value=E(i,r),y.value=e(I)?1:d):h.value=S(i,r,c),C.value=!0,u&&g.value&&n.setContainerHeight(g.value.offsetHeight)};function O(){if(n&&e(_)){const i=n.items.value.findIndex(({uid:r})=>r===o.uid);n.setActiveItem(i)}}return ue(()=>{n.addItem({props:s,states:Ve({hover:l,translate:h,scale:y,active:I,ready:C,inStage:N,animating:T}),uid:o.uid,translateItem:M})}),ze(()=>{n.removeItem(o.uid)}),{carouselItemRef:g,active:I,animating:T,hover:l,inStage:N,isVertical:m,translate:h,isCardType:_,scale:y,ready:C,handleItemClick:O}},st=Y({name:"ElCarouselItem"}),nt=Y({...st,props:tt,setup(s){const k=s,n=fe("carousel"),{carouselItemRef:o,active:d,animating:g,hover:l,inStage:h,isVertical:y,translate:I,isCardType:C,scale:N,ready:T,handleItemClick:_}=at(k),m=R(()=>{const E=`${`translate${e(y)?"Y":"X"}`}(${e(I)}px)`,S=`scale(${e(N)})`;return{transform:[E,S].join(" ")}});return(H,E)=>G((A(),P("div",{ref_key:"carouselItemRef",ref:o,class:B([e(n).e("item"),e(n).is("active",e(d)),e(n).is("in-stage",e(h)),e(n).is("hover",e(l)),e(n).is("animating",e(g)),{[e(n).em("item","card")]:e(C),[e(n).em("item","card-vertical")]:e(C)&&e(y)}]),style:me(e(m)),onClick:E[0]||(E[0]=(...S)=>e(_)&&e(_)(...S))},[e(C)?G((A(),P("div",{key:0,class:B(e(n).e("mask"))},null,2)),[[Q,!e(d)]]):W("v-if",!0),ve(H.$slots,"default")],6)),[[Q,e(T)]])}});var pe=de(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const it=Fe(et,{CarouselItem:pe}),ut=Ue(pe);export{ut as E,it as a,re as t};