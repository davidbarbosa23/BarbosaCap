(this.webpackJsonpbarbosacap=this.webpackJsonpbarbosacap||[]).push([[3],{52:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},53:function(e,t,a){e.exports=a.p+"static/media/logo_barbosacap.a5065d2a.svg"},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(0),r=a.n(n),l=a(16),c=a(52),s=a(2),o=a(51);function i(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,l="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0===--r){s++;break}}else if("("===e[s]&&(r++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at "+s);l+=e[s++]}else l+=e[s++]+e[s++];if(r)throw new TypeError("Unbalanced pattern at "+a);if(!l)throw new TypeError("Missing pattern at "+a);t.push({type:"PATTERN",index:a,value:l}),a=s}else{for(var c="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;c+=e[s++]}if(!c)throw new TypeError("Missing parameter name at "+a);t.push({type:"NAME",index:a,value:c}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,r=void 0===n?"./":n,l="[^"+u(t.delimiter||"/#?")+"]+?",c=[],s=0,o=0,i="",m=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},p=function(e){var t=m(e);if(void 0!==t)return t;var n=a[o],r=n.type,l=n.index;throw new TypeError("Unexpected "+r+" at "+l+", expected "+e)},f=function(){for(var e,t="";e=m("CHAR")||m("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var E=m("CHAR"),d=m("NAME"),v=m("PATTERN");if(d||v){var h=E||"";-1===r.indexOf(h)&&(i+=h,h=""),i&&(c.push(i),i=""),c.push({name:d||s++,prefix:h,suffix:"",pattern:v||l,modifier:m("MODIFIER")||""})}else{var g=E||m("ESCAPED_CHAR");if(g)i+=g;else if(i&&(c.push(i),i=""),m("OPEN")){h=f();var b=m("NAME")||"",y=m("PATTERN")||"",N=f();p("CLOSE"),c.push({name:b||(y?s++:""),pattern:b&&!y?l:y,prefix:h,suffix:N,modifier:m("MODIFIER")||""})}else p("END")}}return c}function m(e,t){return function(e,t){void 0===t&&(t={});var a=p(t),n=t.encode,r=void 0===n?function(e){return e}:n,l=t.validate,c=void 0===l||l,s=e.map((function(e){if("object"===typeof e)return new RegExp("^(?:"+e.pattern+")$",a)}));return function(t){for(var a="",n=0;n<e.length;n++){var l=e[n];if("string"!==typeof l){var o=t?t[l.name]:void 0,i="?"===l.modifier||"*"===l.modifier,m="*"===l.modifier||"+"===l.modifier;if(Array.isArray(o)){if(!m)throw new TypeError('Expected "'+l.name+'" to not repeat, but got an array');if(0===o.length){if(i)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var u=0;u<o.length;u++){var p=r(o[u],l);if(c&&!s[n].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but got "'+p+'"');a+=l.prefix+p+l.suffix}}else if("string"!==typeof o&&"number"!==typeof o){if(!i){var f=m?"an array":"a string";throw new TypeError('Expected "'+l.name+'" to be '+f)}}else{p=r(String(o),l);if(c&&!s[n].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+p+'"');a+=l.prefix+p+l.suffix}}else a+=l}return a}}(i(e,t),t)}function u(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(e){return e&&e.sensitive?"":"i"}function f(e,t,a){return function(e,t,a){void 0===a&&(a={});for(var n=a.strict,r=void 0!==n&&n,l=a.start,c=void 0===l||l,s=a.end,o=void 0===s||s,i=a.encode,m=void 0===i?function(e){return e}:i,f="["+u(a.endsWith||"")+"]|$",E="["+u(a.delimiter||"/#?")+"]",d=c?"^":"",v=0,h=e;v<h.length;v++){var g=h[v];if("string"===typeof g)d+=u(m(g));else{var b=u(m(g.prefix)),y=u(m(g.suffix));if(g.pattern)if(t&&t.push(g),b||y)if("+"===g.modifier||"*"===g.modifier){var N="*"===g.modifier?"?":"";d+="(?:"+b+"((?:"+g.pattern+")(?:"+y+b+"(?:"+g.pattern+"))*)"+y+")"+N}else d+="(?:"+b+"("+g.pattern+")"+y+")"+g.modifier;else d+="("+g.pattern+")"+g.modifier;else d+="(?:"+b+y+")"+g.modifier}}if(o)r||(d+=E+"?"),d+=a.endsWith?"(?="+f+")":"$";else{var O=e[e.length-1],x="string"===typeof O?E.indexOf(O[O.length-1])>-1:void 0===O;r||(d+="(?:"+E+"(?="+f+"))?"),x||(d+="(?="+E+"|"+f+")")}return new RegExp(d,p(a))}(i(e,a),t,a)}function E(e,t,a){return e instanceof RegExp?function(e,t){if(!t)return e;for(var a=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=a.exec(e.source);r;)t.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=a.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,a){var n=e.map((function(e){return E(e,t,a).source}));return new RegExp("(?:"+n.join("|")+")",p(a))}(e,t,a):f(e,t,a)}var d=a(12);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=function(e){var t=e.svgRef,a=e.title,n=h(e,["svgRef","title"]);return r.a.createElement("svg",v({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("circle",{style:{fill:"#F0F0F0"},cx:256,cy:256,r:256}),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"}),r.a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"}),r.a.createElement("path",{style:{fill:"#D80027"},d:"M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"}),r.a.createElement("path",{style:{fill:"#D80027"},d:"M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"})),r.a.createElement("path",{style:{fill:"#0052B4"},d:"M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"}))},b=r.a.forwardRef((function(e,t){return r.a.createElement(g,v({svgRef:t},e))}));a.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=function(e){var t=e.svgRef,a=e.title,n=N(e,["svgRef","title"]);return r.a.createElement("svg",y({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("path",{style:{fill:"#FFDA44"},d:"M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261 C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"}),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#D80027"},d:"M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"}),r.a.createElement("path",{style:{fill:"#D80027"},d:"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"})))},x=r.a.forwardRef((function(e,t){return r.a.createElement(O,y({svgRef:t},e))})),w=(a.p,{en:r.a.createElement(b,null),es:r.a.createElement(x,null)}),j=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),s=a[0],o=a[1];return r.a.createElement("li",{className:"nav-item",onClick:function(){return o(!s)}},null===e.to?r.a.createElement("button",{className:e.className},e.icon,e.content):r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:e.className,to:e.to},e.icon,e.content),s&&e.children)},S=function(){var e=Object(s.g)();return r.a.createElement("ul",{className:"lang-selector"},Object.entries(d.a).map((function(t,a){var n=Object(c.a)(t,2),l=n[0],s=n[1];return r.a.createElement(j,{key:a,to:R(l,e.pathname),content:s,icon:w[l]})})))},R=function(e,t){var a=m("/:locale/:path*"),n=E("/:locale/:path*").exec(t),r=null;return n&&n[2]&&(r=n[2].split("/")),a({locale:e,path:r})},C=function(){var e=Object(o.a)().t;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement(j,{to:"/".concat(e("lang")),content:e("home.menu")}),r.a.createElement(j,{to:null,className:"lang-button",icon:w[e("lang")]},r.a.createElement(S,null))))},A=a(53),L=a.n(A),M=function(){return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/",className:"brand"},r.a.createElement("img",{src:L.a,alt:"".concat("BarbosaCap"," Logo")})),r.a.createElement(C,null))},P=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("div",{className:"copy"},"\xa9 ",e," ","BarbosaCap"))},k=function(e){var t=e.children,a=e.className;return r.a.createElement(n.Fragment,null,r.a.createElement(M,null),r.a.createElement("main",{className:a},t),r.a.createElement(P,null))}},55:function(e,t,a){e.exports=a.p+"static/media/profile_picture.86ba7a35.jpg"},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(54),c=a(51);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createElement("path",{d:"M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007 c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z"}),m=r.a.createElement("path",{d:"M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106 C512,99.077,510.301,92.593,507.496,86.728z"}),u=r.a.createElement("path",{d:"M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z"}),p=r.a.createElement("path",{d:"M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211 L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z"}),f=function(e){var t=e.svgRef,a=e.title,n=o(e,["svgRef","title"]);return r.a.createElement("svg",s({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,i,m,u,p)},E=r.a.forwardRef((function(e,t){return r.a.createElement(f,s({svgRef:t},e))}));a.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}),g=function(e){var t=e.svgRef,a=e.title,n=v(e,["svgRef","title"]);return r.a.createElement("svg",d({height:32,width:32,viewBox:"0 0 16 16","aria-hidden":"true",ref:t},n),a?r.a.createElement("title",null,a):null,h)},b=r.a.forwardRef((function(e,t){return r.a.createElement(g,d({svgRef:t},e))}));a.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createElement("path",{d:"m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0"}),x=r.a.createElement("path",{d:"m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0"}),w=r.a.createElement("path",{d:"m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0"}),j=function(e){var t=e.svgRef,a=e.title,n=N(e,["svgRef","title"]);return r.a.createElement("svg",y({height:"682pt",viewBox:"-21 -35 682.66669 682",width:"682pt",ref:t},n),a?r.a.createElement("title",null,a):null,O,x,w)},S=r.a.forwardRef((function(e,t){return r.a.createElement(j,y({svgRef:t},e))})),R=(a.p,a(55)),C=a.n(R),A=function(){var e=Object(c.a)().t;return r.a.createElement("section",{className:"Prologue container"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:C.a,alt:"".concat("BarbosaCap"," Profile")}),r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,e("home.prologue.title"))),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/".concat("davidbarbosar"),title:"in/".concat("davidbarbosar")},r.a.createElement(S,null))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat("davidbarbosa23"),title:"".concat("davidbarbosa23")},r.a.createElement(b,null))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:".concat("davidbarbosa.dev@gmail.com"),title:"".concat("davidbarbosa.dev@gmail.com")},r.a.createElement(E,null))))))},L=a(52),M=0,P=function(e){var t=e.children,a=Object(n.useState)(M),l=Object(L.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){return s(M+=1),function(){s(M=0)}}),[]),r.a.createElement("div",{"data-line-nr":c,className:"code-l"},t," ")},k=function(e){var t=e.children;return Object(n.useEffect)((function(){M=0}),[]),r.a.createElement("code",null,t)},T=function(){var e=Object(c.a)().t;return r.a.createElement("section",{className:"AboutMe"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e("home.about.title")),r.a.createElement(k,null,r.a.createElement(P,null,r.a.createElement("div",{className:"methods"},"class")," ",r.a.createElement("span",{className:"propname"},"BarbosaCap")," ","{"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("div",{className:"methods"},"constructor"),"() ","{"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("span",{className:"propname"},"this"),".",r.a.createElement("span",{className:"proplabel"},"name")," ",r.a.createElement("span",{className:"scope"},"=")," ",r.a.createElement("span",{className:"string"},"'","David Barbosa","'"),";"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("span",{className:"propname"},"this"),".",r.a.createElement("span",{className:"proplabel"},"dayOfBirthTimestamp")," ",r.a.createElement("span",{className:"scope"},"=")," ",r.a.createElement("span",{className:"number"},"840839401"),";"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("span",{className:"propname"},"this"),".",r.a.createElement("span",{className:"proplabel"},"email")," ",r.a.createElement("span",{className:"scope"},"=")," ",r.a.createElement("span",{className:"string"},"'","davidbarbosa.dev@gmail.com","'"),";"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("span",{className:"propname"},"this"),".",r.a.createElement("span",{className:"proplabel"},"description")," ",r.a.createElement("span",{className:"scope"},"=")," ",r.a.createElement("span",{className:"string"},"'",e("home.about.code.desc"),"'"),";"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),"}"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("div",{className:"comment"},"// ",e("home.about.code.exp"))),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("span",{className:"function"},"workExperience"),"() ","{"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("div",{className:"methods"},"return")," ["),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2019-2020'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.exp5")," Quantun Connexion'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2018-2019'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.exp4")," Tradeview Ltd. / iLikeWebSites.com'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2016-2018'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.exp3")," Tradeview Ltd. / iLikeWebSites.com'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2015-2016'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.exp2")," Rampa Marketing Digital'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2015-2015'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.exp1")," Data Solutions Group'")," ","}"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),"]"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),"}"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("div",{className:"comment"},"// ",e("home.about.code.edu"))),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("span",{className:"function"},"education"),"() ","{"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("div",{className:"methods"},"return")," ["),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2017-2017'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.edu3")," - Google Act\xedvate'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2013-2016'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.edu2")," - Escuela de Artes y Letras'")," ","}",","),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7\xb7\xb7"),"{"," ",r.a.createElement("span",{className:"string"},"'2011-2011'")," :",r.a.createElement("span",{className:"string"}," ","'",e("home.about.code.edu1")," - SENA'")," ","}"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),"]"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),"}"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("div",{className:"comment"},"// ",e("home.about.code.skills"))),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),r.a.createElement("span",{className:"function"},"skills"),"() ","{"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7\xb7\xb7"),r.a.createElement("div",{className:"methods"},"return")," ["," ",r.a.createElement("span",{className:"string"},"'HTML/CSS/JS'"),","," ",r.a.createElement("span",{className:"string"},"'TypeScript'"),","," ",r.a.createElement("span",{className:"string"},"'Node.js'"),","," ",r.a.createElement("span",{className:"string"},"'React'"),","," ",r.a.createElement("span",{className:"string"},"'Vue.js'"),","," ",r.a.createElement("span",{className:"string"},"'Angular'"),","," ",r.a.createElement("span",{className:"string"},"'jQuery'"),","," ",r.a.createElement("span",{className:"string"},"'SASS'"),","," ",r.a.createElement("span",{className:"string"},"'PHP'"),","," ",r.a.createElement("span",{className:"string"},"'MySQL'"),","," ",r.a.createElement("span",{className:"string"},"'MongoDB'"),","," ",r.a.createElement("span",{className:"string"},"'Firebase'"),","," ",r.a.createElement("span",{className:"string"},"'GIT'"),","," ",r.a.createElement("span",{className:"string"},"'Ubuntu/CentOS'"),","," ",r.a.createElement("span",{className:"string"},"'IBM Watson'"),","," ",r.a.createElement("span",{className:"cursor"})," ]"),r.a.createElement(P,null,r.a.createElement("div",{className:"dot"},"\xb7\xb7"),"}"),r.a.createElement(P,null,"}"))))};a(56),t.default=function(){return r.a.createElement(l.a,{className:"Home"},r.a.createElement(A,null),r.a.createElement(T,null))}}}]);
//# sourceMappingURL=3.6a903bbc.chunk.js.map