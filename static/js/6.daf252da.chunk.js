(this.webpackJsonpbarbosacap=this.webpackJsonpbarbosacap||[]).push([[6],{56:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(57),c=n(0),l=n(2),r=Object(c.createContext)({}),s=function(e){var t=e.children,n=Object(c.useState)(false),s=Object(a.a)(n,2),i=s[0],o=s[1];return Object(l.jsx)(r.Provider,{value:{contactShow:i,setContactShow:o},children:t})},i=function(){return Object(c.useContext)(r)}},62:function(e,t,n){e.exports={navItem:"styles_navItem__dKxSt",active:"styles_active__1vNKL"}},63:function(e,t,n){e.exports={langSelector:"styles_langSelector__3IvL8","nav-item":"styles_nav-item__2hRih"}},64:function(e,t,n){e.exports={navbar:"styles_navbar__2_ADT",langButton:"styles_langButton__3QXrU"}},65:function(e,t,n){e.exports={header:"styles_header__RxlAF",brand:"styles_brand__1Tg0B"}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var a=n(0),c=n.n(a),l=n(61),r=n(56),s=n(67),i=n.n(s),o=n(68),u=n(74),b=n(55),j=n(92),d=n(72),m=(n(76),n(75),d.a.initializeApp({apiKey:"AIzaSyBs1hrB4NmfEMpsjJh2IFaecx_FMXS3R7o",authDomain:"barbosacap-53e95.firebaseapp.com",databaseURL:"https://barbosacap-53e95.firebaseio.com",projectId:"barbosacap-53e95",storageBucket:"barbosacap-53e95.appspot.com",messagingSenderId:"341892524274",appId:"1:341892524274:web:a294e1990e5cf17ce4c86b",measurementId:"G-1JJ0VBFPKE"})),h=(m.analytics(),m.firestore()),p=n(2),O=function(){var e=Object(b.a)().t,t=Object(r.b)(),n=t.contactShow,a=t.setContactShow,s=c.a.useRef(null),d=Object(u.a)(),m=d.handleSubmit,O=d.register,f=d.errors,x=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("contacts").doc().set(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(j.a,{nodeRef:s,in:n,timeout:400,classNames:"modal-contact",unmountOnExit:!0,children:Object(p.jsx)("div",{className:"modal-container",children:Object(p.jsxs)("div",{ref:s,className:"container modal-contact",children:[Object(p.jsx)("div",{className:"highlight",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e("about.title")}),Object(p.jsx)("p",{children:e("contact.about.desc")})]})}),Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"close-modal",onClick:function(){a&&a(!1)},children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]}),Object(p.jsx)("h3",{children:e("contact.title")}),Object(p.jsxs)("form",{action:"",onSubmit:m((function(t){x(t)?(a&&a(!1),l.b.success(e("toast.success.attempt"))):l.b.error(e("toast.fail.attempt"))})),children:[Object(p.jsxs)("div",{className:"input ",children:[Object(p.jsx)("input",{id:"name",name:"name",className:f.name&&"invalid",type:"text",ref:O({required:!0,maxLength:80})}),Object(p.jsx)("label",{htmlFor:"name",children:e("name")})]}),Object(p.jsxs)("div",{className:"input ",children:[Object(p.jsx)("input",{id:"email",name:"email",className:f.email&&"invalid",type:"email",ref:O({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),Object(p.jsx)("label",{htmlFor:"email",children:e("email")})]}),Object(p.jsxs)("div",{className:"input ",children:[Object(p.jsx)("textarea",{id:"message",name:"message",className:f.message&&"invalid",ref:O({required:!0})}),Object(p.jsx)("label",{htmlFor:"message",children:e("message")})]}),Object(p.jsx)("button",{className:"btn",type:"submit",children:e("submit")})]})]})})]})})})},f=function(){var e=(new Date).getFullYear();return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"copy",children:["\xa9 ",e," ","BarbosaCap"]})})},x=n(18);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function y(e,t){var n=e.title,c=e.titleId,l=g(e,["title","titleId"]);return a.createElement("svg",v({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},l),n?a.createElement("title",{id:c},n):null,a.createElement("path",{style:{fill:"#FFDA44"},d:"M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261 C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"}),a.createElement("g",null,a.createElement("path",{style:{fill:"#D80027"},d:"M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"})))}var w=a.forwardRef(y);n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function E(e,t){var n=e.title,c=e.titleId,l=_(e,["title","titleId"]);return a.createElement("svg",N({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},l),n?a.createElement("title",{id:c},n):null,a.createElement("circle",{style:{fill:"#F0F0F0"},cx:256,cy:256,r:256}),a.createElement("g",null,a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"})),a.createElement("path",{style:{fill:"#0052B4"},d:"M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"}))}var C=a.forwardRef(E),S=(n.p,{en:Object(p.jsx)(C,{}),es:Object(p.jsx)(w,{})}),L=n(57),k=n(3),B=n(10),I=n(73),z=function(e,t){var n="/:locale/:path*",a=Object(I.a)(n),c=Object(I.b)(n).exec(t),l=null;return c&&c[2]&&(l=c[2].split("/")),a({locale:e,path:l})},F=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},M=n(62),P=n.n(M),D=function(e){var t=Object(a.useState)(!1),n=Object(L.a)(t,2),c=n[0],l=n[1],r=Object(a.useRef)(null);return F(r,(function(){l(!1)})),Object(p.jsxs)("li",{ref:r,className:P.a.navItem,onClick:function(){return l(!c)},children:[null===e.to?Object(p.jsxs)("button",{className:e.className,onClick:e.clickHandler,children:[e.icon,e.content]}):Object(p.jsxs)(x.c,{exact:!0,activeClassName:P.a.active,className:e.className,to:e.to,children:[e.icon,e.content]}),c&&e.children]})},H=n(63),R=n.n(H),A=function(){var e=Object(k.g)();return Object(p.jsx)("ul",{className:R.a.langSelector,children:Object.entries(B.a).map((function(t,n){var a=Object(L.a)(t,2),c=a[0],l=a[1];return Object(p.jsx)(D,{to:z(c,e.pathname),content:l,icon:S[c]},n)}))})},J=n(64),q=n.n(J),K=function(){var e=Object(b.a)().t,t=Object(r.b)().setContactShow;return Object(p.jsx)("nav",{className:q.a.navbar,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)(D,{to:null,content:e("contact.menu"),clickHandler:function(){t&&t(!0)}}),Object(p.jsx)(D,{to:null,className:q.a.langButton,icon:S[e("lang")],children:Object(p.jsx)(A,{})})]})})},X=n.p+"static/media/logo_barbosacap.1140ab4d.svg",T=n(65),V=n.n(T),Z=function(){var e=Object(b.a)().t;return Object(p.jsxs)("header",{className:V.a.header,children:[Object(p.jsx)(x.b,{to:"/".concat(e("lang")),className:V.a.brand,children:Object(p.jsx)("img",{src:X,alt:"".concat("BarbosaCap"," Logo")})}),Object(p.jsx)(K,{})]})},U=function(e){var t=e.children,n=e.className;return Object(p.jsxs)(r.a,{children:[Object(p.jsx)(Z,{}),Object(p.jsx)("main",{className:n,children:t}),Object(p.jsx)(f,{}),Object(p.jsx)(O,{}),Object(p.jsx)(l.a,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(0);var a=n(14),c=n(55),l=n(66),r=(n(86),n(2));t.default=function(){var e=Object(c.a)().t;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsxs)("title",{children:[e("projects.title")," | ","BarbosaCap"]}),Object(r.jsx)("meta",{name:"description",content:"Projects | Experiments"})]}),Object(r.jsx)(l.a,{className:"Projects",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{children:e("projects.title")})})})]})}}}]);
//# sourceMappingURL=6.daf252da.chunk.js.map