(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),c=r(n("Gytx"));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.shouldComponentUpdate=function(e){return!c(e,this.props)},a.componentWillMount=function(){l.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.Component);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",u),p}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),c=Object.keys(t);if(i.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!a(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),c=n("y3w9"),a=n("0/R4"),u=n("eeVq"),s=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,f=u((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),p=!u((function(){l((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){i(e),c(t);var n=arguments.length<3?e:i(arguments[2]);if(p&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var u=n.prototype,d=o(a(u)?u:Object.prototype),h=Function.apply.call(e,d,t);return a(h)?h:d}})},LwmV:function(e,t,n){"use strict";n.r(t);n("91GP"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),i=n("A2+M"),c=(n("DNiP"),n("xfY5"),n("KKXr"),n("bWfx"),n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("LK8F"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("rE2o"),n("ioFf"),n("YwZP")),a=n("qKvR"),u=n("txSG"),s=n("TJpk"),l=n("yDJ3"),f=n.n(l),p=n("2oH+"),d=n.n(p),h=(n("Z2Ku"),n("a6Uy")),b=n("FUM2"),y=n("Flpk"),v=39,m=37,O=38,g=40,j=32,w=80,T=79,x=71,E=27,S=33,A=34,_=function(e){return function(t){return t.mode===e?{mode:b.a.normal}:{mode:e}}},C=["input","select","textarea","a","button"],k=function(){var e=Object(h.a)();Object(r.useEffect)((function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var a=document.activeElement.tagName.toLowerCase();if(!C.includes(a))if(o)switch(t.keyCode){case j:Object(y.b)(e);break;case w:e.setState(_(b.a.print)),Object(c.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case w:e.setState(_(b.a.presenter));break;case T:e.setState(_(b.a.overview));break;case x:e.setState(_(b.a.grid))}else switch(t.keyCode){case v:case g:case A:case j:Object(y.a)(e);break;case m:case O:case S:Object(y.b)(e);break;case E:e.setState({mode:b.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},P="mdx-deck-slide",L="mdx-deck-step",I=function(){var e=Object(h.a)(),t=Object(r.useState)(!1),n=t[0],o=t[1],i=function(){return o(!0)},a=function(){return o(!1)},u=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case P:Object(c.navigate)([e.slug,n].join("/"));break;case L:e.setState({step:n})}};Object(r.useEffect)((function(){o(document.hasFocus())}),[]),Object(r.useEffect)((function(){return n||window.addEventListener("storage",u),window.addEventListener("focus",i),window.addEventListener("blur",a),function(){n||window.removeEventListener("storage",u),window.removeEventListener("focus",i),window.removeEventListener("blur",a)}}),[n]),Object(r.useEffect)((function(){n&&(localStorage.setItem(P,e.index),localStorage.setItem(L,e.step))}),[n,e.index,e.step])},R=n("/WHa");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=function(e){return o.a.createElement(r.Fragment,null,e.children)},D=function(e){var t=Object(r.useState)("100vh"),n=t[0],o=t[1],i=Object(h.a)(),c=i.mode,a=i.theme;Object(r.useEffect)((function(){o(window.innerHeight);var e=function(e){o(window.innerHeight)},t=function(e){c===b.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}}),[c]);var s=a.Provider,l=void 0===s?M:s;return Object(u.d)(l,null,Object(u.d)("div",F({},e,{sx:{width:"100vw",height:c!==b.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},N=n("34Gm"),H=n("1Is2"),K=n("+VME"),q=n("iRXn"),W=function(e){var t=Object(h.a)(),n=t.index,r=t.length;return Object(u.d)(o.a.Fragment,null,Object(u.d)("div",null,n," / ",r-1),Object(u.d)("div",{sx:{mx:4}},Object(u.d)("a",{href:c.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.d)("div",{sx:{mx:"auto"}}),Object(u.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.d)(q.a,null)),Object(u.d)("div",null,Object(u.d)(K.a,null)))},V=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),i=t[r.index+1],c=!!r.notes&&o.a.Children.toArray(r.notes);return Object(u.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.d)("div",{sx:{width:"75%",p:3}},Object(u.d)(H.a,{zoom:.75},n)),Object(u.d)("div",{sx:{width:"25%",p:3}},Object(u.d)(H.a,{ratio:4/3,zoom:.25},Object(u.d)(N.a,{slide:i,preview:!0})),c&&Object(u.d)("div",{sx:{my:3}},c))),Object(u.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.d)(W,null)))};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var z=function(){},G=function(e){var t=e.slides,n=void 0===t?[]:t,i=e.ratio,c=void 0===i?16/9:i,a=e.zoom,s=void 0===a?.25:a,l=e.onClick,f=void 0===l?z:l,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slides","ratio","zoom","onClick"]),d=Object(h.a)().index,b=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=b.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()})),Object(u.d)(o.a.Fragment,null,n.map((function(e,t){return Object(u.d)("div",B({},p,{key:t,role:"link",ref:t===d?b:null,onClick:function(e){f(t)},style:d===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:d===t?"4px solid cyan":null}}),Object(u.d)(H.a,{zoom:s,ratio:c},Object(u.d)(N.a,{slide:e,preview:!0})))})))},Y=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),o=r.slug,i=r.index,a=r.length;return Object(u.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.d)(G,{slides:t,zoom:1/6,onClick:function(e){Object(c.navigate)([o,e].join("/"))}})),Object(u.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.d)("div",{sx:{flex:"1 1 auto"}},Object(u.d)(H.a,{zoom:5/6},n)),Object(u.d)("div",{sx:{py:3}},i," / ",a-1)))},U=function(e){var t=e.slides,n=Object(h.a)(),r=n.slug,o=n.setState;return Object(u.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.d)(G,{slides:t,onClick:function(e){Object(c.navigate)([r,e].join("/")),o({mode:b.a.normal})},sx:{width:"25%",m:0}})))};function X(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function J(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){return k(),!1},te=function(){return I(),!1},ne=function(e){var t=e.slides,n=Z({},Object(h.a)(),{mode:b.a.print});return Object(a.c)(R.a.Provider,{value:n},t.map((function(e,t){return Object(a.c)(N.a,{key:t,slide:e,preview:!0})})))},re=function(e){var t=e.theme;return!!t.googleFont&&Object(a.c)(s.Helmet,null,Object(a.c)("link",{rel:"stylesheet",href:t.googleFont}))},oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return"function"==typeof t?t(e):d()(e,t)}),{})},ie=function(e){var t=e.children;return Object(a.c)(o.a.Fragment,{children:t})},ce=function(e){var t,n,r=e.slides,i=void 0===r?[]:r,l=e.pageContext,p=l.title,d=l.slug,y=e.theme,v=void 0===y?{}:y,m=e.themes,O=void 0===m?[]:m,g=(J(e,["slides","pageContext","theme","themes"]),Object(h.a)()),j=(t=c.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),w=i.head.children,T=oe.apply(void 0,[v].concat(X(O))),x=T.components,E=J(T,["components"]),S=Z({},g,{slug:d,length:i.length,index:j,steps:f()(g,"metadata."+j+".steps"),notes:f()(g,"metadata."+j+".notes"),theme:E}),A=ie;switch(S.mode){case b.a.presenter:A=V;break;case b.a.overview:A=Y;break;case b.a.grid:A=U}return Object(a.c)(o.a.Fragment,null,Object(a.c)(s.Helmet,null,Object(a.c)("title",null,p),w),Object(a.c)(re,{theme:E}),Object(a.c)(R.a.Provider,{value:S},Object(a.c)(u.b,{components:x,theme:E},Object(a.c)(a.a,{styles:{body:{margin:0,overflow:S.mode===b.a.normal?"hidden":null}}}),Object(a.c)(ee,null),Object(a.c)(te,null),Object(a.c)(D,null,Object(a.c)(A,{slides:i},Object(a.c)(c.Router,{basepath:d,style:{height:"100%"}},Object(a.c)(N.a,{index:0,path:"/",slide:i[0]}),i.map((function(e,t){return Object(a.c)(N.a,{key:t,index:t,path:t+"/*",slide:e})})),Object(a.c)(ne,{path:"/print",slides:i})))))))},ae=n("K1fZ");function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"pageQuery",(function(){return se}));var se="2133597988",le={wrapper:function(e){var t=Object(ae.a)(e);return Object(a.c)(ce,ue({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data"]);return Object(a.c)((function(e){return Object(a.c)(i.MDXRenderer,ue({},e,{children:n}))}),ue({},r,{components:le}))}},TJpk:function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,i,c,a,u=r(n("17x9")),s=r(n("8+s/")),l=r(n("bmMU")),f=r(n("q1tI")),p=r(n("MgzW")),d="bodyAttributes",h="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),m="cssText",O="href",g="http-equiv",j="innerHTML",w="itemprop",T="name",x="property",E="rel",S="src",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",C="defer",k="encodeSpecialCharacters",P="onChangeClientState",L="titleTemplate",I=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Y(e,y.TITLE),n=Y(e,L);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Y(e,_);return t||r||void 0},V=function(e){return Y(e,P)||function(){}},B=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return N({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Z("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===E&&"canonical"===e[n].toLowerCase()||u===E&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==j&&a!==m&&a!==w||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=p({},r[a],o[a]);r[a]=u}return e}),[]).reverse()},Y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},U=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){U(e)}),0)}),X=function(e){return clearTimeout(e)},J="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||U:e.requestAnimationFrame||U,$="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:e.cancelAnimationFrame||X,Z=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Q=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(f,p);var d={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,c),noscriptTags:oe(y.NOSCRIPT,a),scriptTags:oe(y.SCRIPT,s),styleTags:oe(y.STYLE,l)},h={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,h,b)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return c=t,n.isEqualNode(e)}))?o.splice(c,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[A[n]||n]=e[n],t}),t)},ae=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ce(n,r),[f.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case h:return{toComponent:function(){return ce(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=A[e]||e;if(n===j||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===m)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ae(y.BASE,t,r),bodyAttributes:ae(d,n,r),htmlAttributes:ae(h,o,r),link:ae(y.LINK,i,r),meta:ae(y.META,c,r),noscript:ae(y.NOSCRIPT,a,r),script:ae(y.SCRIPT,u,r),style:ae(y.STYLE,s,r),title:ae(y.TITLE,{title:f,titleAttributes:p},r)}},se=s((function(e){return{baseTag:z([O],e),bodyAttributes:B(d,e),defer:Y(e,C),encode:Y(e,k),htmlAttributes:B(h,e),linkTags:G(y.LINK,[E,O],e),metaTags:G(y.META,[T,v,g,x,w],e),noscriptTags:G(y.NOSCRIPT,[j],e),onChangeClientState:V(e),scriptTags:G(y.SCRIPT,[S,j],e),styleTags:G(y.STYLE,[m],e),title:W(e),titleAttributes:B(b,e)}}),(function(e){Q&&$(Q),e.defer?Q=J((function(){ee(e,(function(){Q=null}))})):(ee(e),Q=null)}),ue)((function(){return null})),le=(i=se,a=c=function(e){function t(){return M(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!l(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return N({},r,((t={})[n.type]=[].concat(r[n.type]||[],[N({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return N({},o,((t={})[r.type]=c,t.titleAttributes=N({},i),t));case y.BODY:return N({},o,{bodyAttributes:N({},i)});case y.HTML:return N({},o,{htmlAttributes:N({},i)})}return N({},o,((n={})[r.type]=N({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=N({},t);return Object.keys(e).forEach((function(t){var r;n=N({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=N({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},D(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),c.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=i.peek,c.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);le.renderStatic=le.rewind,t.Helmet=le}).call(this,n("yLpj"))},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("bWfx"),n("V+eJ"),n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("yt8O"),n("RW0V"),n("LK8F"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("2Spj"),n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var l=n("q1tI"),f=n("7ljp"),p=f.useMDXComponents,d=f.mdx,h=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),a=p(n),s=h(t),f=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:d},s),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(c(t),[""+r])).apply(void 0,[{}].concat(c(n)))}),[r,t]);return l.createElement(f,u({components:a},i))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,c="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,b=n instanceof RegExp;if(h!=b)return!1;if(h&&b)return t.toString()==n.toString();var y=o(t);if((u=y.length)!==o(n).length)return!1;for(a=u;0!=a--;)if(!i.call(n,y[a]))return!1;if(c&&t instanceof Element&&n instanceof Element)return t===n;for(a=u;0!=a--;)if(!("_owner"===(s=y[a])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},yDJ3:function(e,t,n){(function(t){n("LK8F"),n("bWfx"),n("pIFo"),n("Oyvg"),n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("Btvt");var r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,i=/^\./,c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=/^\[object .+?Constructor\]$/,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=s||l||Function("return this")();var p,d=Array.prototype,h=Function.prototype,b=Object.prototype,y=f["__core-js_shared__"],v=(p=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+p:"",m=h.toString,O=b.hasOwnProperty,g=b.toString,j=RegExp("^"+m.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=f.Symbol,T=d.splice,x=F(f,"Map"),E=F(Object,"create"),S=w?w.prototype:void 0,A=S?S.toString:void 0;function _(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function P(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function L(e,t){for(var n,i=0,c=(t=function(e,t){if(H(e))return!1;var n=typeof e;if("number"==n||"symbol"==n||"boolean"==n||null==e||q(e))return!0;return o.test(e)||!r.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:H(n=t)?n:M(n)).length;null!=e&&i<c;)e=e[D(t[i++])];return i&&i==c?e:void 0}function I(e){return!(!K(e)||(t=e,v&&v in t))&&(function(e){var t=K(e)?g.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?j:u).test(function(e){if(null!=e){try{return m.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function R(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function F(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return I(n)?n:void 0}_.prototype.clear=function(){this.__data__=E?E(null):{}},_.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},_.prototype.get=function(e){var t=this.__data__;if(E){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return O.call(t,e)?t[e]:void 0},_.prototype.has=function(e){var t=this.__data__;return E?void 0!==t[e]:O.call(t,e)},_.prototype.set=function(e,t){return this.__data__[e]=E&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,n=P(t,e);return!(n<0)&&(n==t.length-1?t.pop():T.call(t,n,1),!0)},C.prototype.get=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},C.prototype.has=function(e){return P(this.__data__,e)>-1},C.prototype.set=function(e,t){var n=this.__data__,r=P(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},k.prototype.clear=function(){this.__data__={hash:new _,map:new(x||C),string:new _}},k.prototype.delete=function(e){return R(this,e).delete(e)},k.prototype.get=function(e){return R(this,e).get(e)},k.prototype.has=function(e){return R(this,e).has(e)},k.prototype.set=function(e,t){return R(this,e).set(e,t),this};var M=N((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(q(e))return A?A.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var n=[];return i.test(e)&&n.push(""),e.replace(c,(function(e,t,r,o){n.push(r?o.replace(a,"$1"):t||e)})),n}));function D(e){if("string"==typeof e||q(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function N(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var c=e.apply(this,r);return n.cache=i.set(o,c),c};return n.cache=new(N.Cache||k),n}N.Cache=k;var H=Array.isArray;function K(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:L(e,t);return void 0===r?n:r}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js-9c73af2742c01bc83881.js.map