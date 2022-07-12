import{a as O,d as w,v as R,aN as W,u as j,t as P,e as l,w as T,l as g,a9 as J,aq as Q,x as Y,y as D,b as G,aO as X,n as Z,q as ee,m as te,aP as ne,r as oe,K as F,a5 as ae,z as le,aC as se,aQ as ce,aR as re,aS as ie,a6 as ue,aT as E,f as de,S as fe,aE as me,aF as Be,aU as ge,o as he,c as ve,ai as K,aj as A,aJ as Ce,aK as be,D as _e,L as $}from"./index.3aea5e33.js";import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";import{B as p}from"./index.95e2d51e.js";const[V,I]=O("action-bar"),z=Symbol(V),we={placeholder:Boolean,safeAreaInsetBottom:P};var ye=w({name:V,props:we,setup(e,{slots:a}){const n=R(),s=W(n,I),{linkChildren:c}=j(z);c();const f=()=>{var d;return l("div",{ref:n,class:[I(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(d=a.default)==null?void 0:d.call(a)])};return()=>e.placeholder?s(f):f()}});const xe=T(ye),[ke,Se]=O("action-bar-button"),Pe=g({},J,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Oe=w({name:ke,props:Pe,setup(e,{slots:a}){const n=Q(),{parent:s,index:c}=Y(z),f=D(()=>{if(s){const i=s.children[c.value-1];return!(i&&"isButton"in i)}}),d=D(()=>{if(s){const i=s.children[c.value+1];return!(i&&"isButton"in i)}});return G({isButton:!0}),()=>{const{type:i,icon:h,text:v,color:y,loading:x,disabled:k}=e;return l(p,{class:Se([i,{last:d.value,first:f.value}]),size:"large",type:i,icon:h,color:y,loading:x,disabled:k,onClick:n},{default:()=>[a.default?a.default():v]})}}});const N=T(Oe),[Te,u,_]=O("dialog"),De=g({},X,{title:String,theme:String,width:Z,message:[String,Function],callback:Function,allowHtml:Boolean,className:ee,transition:te("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),Ee=[...ne,"transition","closeOnPopstate"];var H=w({name:Te,props:De,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const s=R(),c=oe({confirm:!1,cancel:!1}),f=t=>a("update:show",t),d=t=>{var r;f(!1),(r=e.callback)==null||r.call(e,t)},i=t=>()=>{!e.show||(a(t),e.beforeClose?(c[t]=!0,ue(e.beforeClose,{args:[t],done(){d(t),c[t]=!1},canceled(){c[t]=!1}})):d(t))},h=i("cancel"),v=i("confirm"),y=ce(t=>{var r,m;if(t.target!==((m=(r=s.value)==null?void 0:r.popupRef)==null?void 0:m.value))return;({Enter:e.showConfirmButton?v:E,Escape:e.showCancelButton?h:E})[t.key](),a("keydown",t)},["enter","esc"]),x=()=>{const t=n.title?n.title():e.title;if(t)return l("div",{class:u("header",{isolated:!e.message&&!n.default})},[t])},k=t=>{const{message:r,allowHtml:m,messageAlign:B}=e,b=u("message",{"has-title":t,[B]:B}),S=de(r)?r():r;return m&&typeof S=="string"?l("div",{class:b,innerHTML:S},null):l("div",{class:b},[S])},L=()=>{if(n.default)return l("div",{class:u("content")},[n.default()]);const{title:t,message:r,allowHtml:m}=e;if(r){const B=!!(t||n.title);return l("div",{key:m?1:0,class:u("content",{isolated:!B})},[k(B)])}},U=()=>l("div",{class:[ie,u("footer")]},[e.showCancelButton&&l(p,{size:"large",text:e.cancelButtonText||_("cancel"),class:u("cancel"),style:{color:e.cancelButtonColor},loading:c.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&l(p,{size:"large",text:e.confirmButtonText||_("confirm"),class:[u("confirm"),{[re]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:c.confirm,disabled:e.confirmButtonDisabled,onClick:v},null)]),q=()=>l(xe,{class:u("footer")},{default:()=>[e.showCancelButton&&l(N,{type:"warning",text:e.cancelButtonText||_("cancel"),class:u("cancel"),color:e.cancelButtonColor,loading:c.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&l(N,{type:"danger",text:e.confirmButtonText||_("confirm"),class:u("confirm"),color:e.confirmButtonColor,loading:c.confirm,disabled:e.confirmButtonDisabled,onClick:v},null)]}),M=()=>n.footer?n.footer():e.theme==="round-button"?q():U();return()=>{const{width:t,title:r,theme:m,message:B,className:b}=e;return l(se,F({ref:s,role:"dialog",class:[u([m]),b],style:{width:le(t)},tabindex:0,"aria-labelledby":r||B,onKeydown:y,"onUpdate:show":f},ae(e,Ee)),{default:()=>[x(),L(),M()]})}}});let C;function Ae(){({instance:C}=me({setup(){const{state:a,toggle:n}=Be();return()=>l(H,F(a,{"onUpdate:show":n}),null)}}))}function o(e){return fe?new Promise((a,n)=>{C||Ae(),C.open(g({},o.currentOptions,e,{callback:s=>{(s==="confirm"?a:n)(s)}}))}):Promise.resolve()}o.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};o.currentOptions=g({},o.defaultOptions);o.alert=o;o.confirm=e=>o(g({showCancelButton:!0},e));o.close=()=>{C&&C.toggle(!1)};o.setDefaultOptions=e=>{g(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=g({},o.defaultOptions)};o.Component=T(H);o.install=e=>{e.use(o.Component),e.config.globalProperties.$dialog=o};const Ie=e=>(Ce("data-v-54b4a56f"),e=e(),be(),e),Ne={class:"block"},Re=Ie(()=>K("div",{class:"block-title van-hairline--bottom"},"1. Dialog",-1)),Fe={class:"block-body"},Ke=$("\u6253\u5F00 Dialog"),$e=$("\u5207\u6362\u786E\u8BA4\u6309\u94AE\u989C\u8272"),Ve=w({__name:"cssVar",setup(e){const a=ge("--van-dialog-confirm-button-text-color",document.body);function n(){o.confirm({title:"\u6807\u9898",message:`\u786E\u8BA4\u6309\u94AE\u7684\u989C\u8272\u4E3A${a.value}`}).then(()=>{}).catch(()=>{})}function s(){a.value.trim()==="#1989fa"?a.value="#f00":a.value="#1989fa",_e(()=>{n()})}return(c,f)=>{const d=p;return he(),ve("div",Ne,[Re,K("div",Fe,[l(d,{size:"small",type:"primary",onClick:n},{default:A(()=>[Ke]),_:1}),l(d,{size:"small",type:"primary",onClick:s},{default:A(()=>[$e]),_:1})])])}}});var Ue=pe(Ve,[["__scopeId","data-v-54b4a56f"]]);export{Ue as default};