import{d as I,ae as y,af as b,ah as B,ay as F,az as x,r as P,I as w,o as s,c as o,ai as e,e as i,ao as t,aA as U,al as _,ap as d,aj as E,am as L,an as R,K as S}from"./index.3aea5e33.js";import{a as A,C as D}from"./index.cdf4675c.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";import{I as T,a as V}from"./function-call.088b9f17.js";import"./index.188b6061.js";const j={class:"user-page"},q={class:"user-img-box"},z={class:"user-content"},G={class:"user-name van-ellipsis"},H={class:"user-account van-ellipsis"},K={key:1,class:"user-name van-ellipsis"},M={class:"user-header-right"},J={class:"user-body mgt-middle"},O=I({__name:"UserPage",setup(Q){const c=y();b();const r=B(),m=F.get("token"),{userInfo:a,isLogin:u}=x(r);m&&!u.value&&r.getUserInfoFn();function p(){u.value?c.push({path:"/userInfo"}):c.push({path:"/login",query:{from:"user"}})}function v(){var n;V({images:[(n=a.value)==null?void 0:n.headerImg],closeable:!0})}const g=P([{title:"\u94B1\u5305",value:"",label:"",icon:"paid",to:"",border:!0,"is-link":!0},{title:"\u8BBE\u7F6E",value:"",label:"",icon:"setting-o",to:"",border:!0,"is-link":!0}]);return(n,W)=>{const f=T,h=w,k=D,C=A;return s(),o("div",j,[e("div",{class:"user-header",onClick:p},[e("div",q,[i(f,{class:"user-img",src:t(a).headerImg,onClick:U(v,["stop"])},null,8,["src","onClick"])]),e("div",z,[t(r).isLogin?(s(),o(_,{key:0},[e("div",G,d(t(a).name),1),e("div",H,"\u8D26\u53F7\uFF1A"+d(t(a).account),1)],64)):(s(),o("div",K,"\u767B\u5F55 | \u6CE8\u518C"))]),e("div",M,[i(h,{name:"arrow"})])]),e("div",J,[i(C,null,{default:E(()=>[(s(!0),o(_,null,L(g,l=>(s(),R(k,S({key:l.icon},l),null,16))),128))]),_:1})])])}}});var se=N(O,[["__scopeId","data-v-c01fbdf2"]]);export{se as default};
