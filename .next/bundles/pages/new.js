module.exports=__NEXT_REGISTER_PAGE("/new",function(){var e=webpackJsonp([4],{10:function(e,t,r){e.exports=r(46)},258:function(e,t,r){e.exports=r(259)},259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(91);t["default"]=n["a"]},46:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:true});t.default=h;t.registerChunk=p;t.flushChunks=b;t.SameLoopPromise=void 0;var a=n(r(63));var o=n(r(56));var u=n(r(17));var i=n(r(7));var l=n(r(8));var c=n(r(18));var s=n(r(19));var f=n(r(27));var d=n(r(0));var m=r(15);var v=new f.default;function h(e,t){var r;var n;if(e instanceof y){r=e;n=t||{}}else{if(!e.modules||!e.render){var a="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(a)}if(t){var f="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(f)}n=e}return function(e){(0,s.default)(t,e);function t(){var e;var r;(0,i.default)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];r=(0,c.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(o)));r.LoadingComponent=n.loading?n.loading:function(){return d.default.createElement("p",null,"loading...")};r.ssr=false!==n.ssr||n.ssr;r.state={AsyncComponent:null,asyncElement:null};r.isServer="undefined"===typeof window;r.loadBundleAgain=null;r.loadingBundle=false;r.ssr&&r.load();return r}(0,l.default)(t,[{key:"load",value:function e(){r?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var n=this;r.then(function(e){var r=e.default||e;var a=(0,m.getDisplayName)(r);a&&(t.displayName="DynamicComponent for ".concat(a));if(n.mounted)n.setState({AsyncComponent:r});else{n.isServer&&p(e.__webpackChunkName);n.state.AsyncComponent=r}})}},{key:"loadBundle",value:function e(r){var a=this;this.loadBundleAgain=null;this.loadingBundle=true;var u=n.modules(r);var i=(0,o.default)(u);var l=i.length;var c={};var s=function e(){if(a.loadBundleAgain){a.loadBundle(a.loadBundleAgain);return}a.loadingBundle=false;t.displayName="DynamicBundle";var o=n.render(r,c);a.mounted?a.setState({asyncElement:o}):a.state.asyncElement=o};var f=function e(t){var r=u[t];r.then(function(e){var r=e.default||e;a.isServer&&p(e.__webpackChunkName);c[t]=r;l--;0===l&&s()})};i.forEach(f)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(r)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"componentWillUnmount",value:function e(){this.mounted=false}},{key:"render",value:function e(){var t=this.state,r=t.AsyncComponent,n=t.asyncElement;var a=this.LoadingComponent;if(n)return n;if(r)return d.default.createElement(r,this.props);return d.default.createElement(a,this.props)}}]);return t}(d.default.Component)}function p(e){v.add(e)}function b(){var e=(0,a.default)(v);v.clear();return e}var y=function(){(0,l.default)(e,null,[{key:"resolve",value:function t(r){var n=new e(function(e){return e(r)});return n}}]);function e(t){(0,i.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,l.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(r,n){var a=this;this.runIfNeeded();var o=new e;var u=function e(){n?o.setResult(n(a.error)):o.setError(a.error)};var i=function e(){o.setResult(r(a.result))};if(this.gotResult){i();return o}if(this.gotError){u();return o}this.onResultCallbacks.push(i);this.onErrorCallbacks.push(u);return o}},{key:"catch",value:function t(r){var n=this;this.runIfNeeded();var a=new e;var o=function e(){a.setResult(r(n.error))};var u=function e(){a.setResult(n.result)};if(this.gotResult){u();return a}if(this.gotError){o();return a}this.onErrorCallbacks.push(o);this.onResultCallbacks.push(u);return a}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}();t.SameLoopPromise=y},47:function(e,t,r){"use strict";var n=r(0);var a=r.n(n);var o=r(10);var u=r.n(o);function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return i.apply(this,arguments)}var l=function e(t){var r=function e(){var r="";var n={};if("undefined"!==typeof document){var o=document.querySelector(t);if(o){r=o.innerHTML;o.getAttributeNames().forEach(function(e){var t="class"===e?"className":e;n[t]=o.getAttribute(e)})}}return a.a.createElement("div",i({},n,{dangerouslySetInnerHTML:{__html:r}}))};return{loading:r}};var c=l;function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return s.apply(this,arguments)}var f=u()(new(r(10).SameLoopPromise)(function(e,t){var n=92;try{var a=r(n);return e(a)}catch(e){}r.e(0).then(function(n){try{var a=r(92);a.__webpackChunkName="react_markdown_2310f29285bb72f338f5fec99785c0fb";e(a)}catch(e){t(e)}}.bind(null,r)).catch(r.oe)}),c(".Markdown"));var d=function e(t){return a.a.createElement("a",s({},t,{target:"_blank",rel:"noopener noreferrer"}))};var m={link:d};var v=function e(t){var r=t.className,n=t.source;return a.a.createElement(f,{className:r,source:n,renderers:m})};var h=t["a"]=v},48:function(e,t,r){"use strict";t["a"]=a;function n(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function a(e){var t=e.target;this.setState(n({},t.id,t.value))}},91:function(e,t,r){"use strict";r.d(t,"a",function(){return P});var n=r(6);var a=r.n(n);var o=r(0);var u=r.n(o);var i=r(36);var l=r.n(i);var c=r(10);var s=r.n(c);var f=r(35);var d=r(47);var m=r(93);var v=r.n(m);var h=r(48);var p=r(9);var b=r.n(p);var y=r(23);function g(e){g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return g(e)}function k(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e,t){try{var r=o[e](t);var u=r.value}catch(e){a(e);return}r.done?n(u):Promise.resolve(u).then(i,l)}function i(e){u("next",e)}function l(e){u("throw",e)}i()})}}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function C(e,t,r){t&&w(e.prototype,t);r&&w(e,r);return e}function _(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;return S(e)}function N(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var O=function e(){return u.a.createElement("div",{className:"column"},u.a.createElement("textarea",{style:{height:"calc(300px - 1.2rem)",margin:0}}))};var x=s()(new(r(10).SameLoopPromise)(function(e,t){var n=64;try{var a=r(n);return e(a)}catch(e){}r.e(1).then(function(n){try{var a=r(64);a.__webpackChunkName="comps_CodeMirror_51c113b8f0eb112cf9be60e9d3293726";e(a)}catch(e){t(e)}}.bind(null,r)).catch(r.oe)}),{loading:O,ssr:false});var j={name:"",dir:"",md:"## New Document!!",editMode:false,error:null,pending:false};var P=function(e){N(t,e);function t(){var e;var r,n;E(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return _(n,(r=n=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),Object.defineProperty(S(n),"state",{configurable:true,enumerable:true,writable:true,value:j}),Object.defineProperty(S(n),"updVal",{configurable:true,enumerable:true,writable:true,value:h["a"].bind(S(n))}),Object.defineProperty(S(n),"updMd",{configurable:true,enumerable:true,writable:true,value:function e(t){return n.setState({md:t})}}),Object.defineProperty(S(n),"submit",{configurable:true,enumerable:true,writable:true,value:function(){var e=k(a.a.mark(function e(){var t,r,o,u,i,c,s,f,d,v,h,p,g,k,E,w;return a.a.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:t=n.state,r=t.name,o=t.md,u=t.dir,i=t.editMode;c={name:Object(m["checkName"])(r),dir:Object(m["checkDir"])(u),md:o};s=function e(t){return n.setState({pending:false,error:t})};f="can only contain A-Z, a-z, 0-9, -, or . and not start or end with .";if(c.name){a.next=6;break}return a.abrupt("return",s("Document name "+(0===c.name?"can not be empty":f)));case 6:if(!(!c.dir&&0!==c.dir)){a.next=10;break}return a.abrupt("return",s("Directory "+f));case 10:0===c.dir&&(c.dir="");case 11:if(!(0===c.md.trim().length)){a.next=13;break}return a.abrupt("return",s("Content can not be empty"));case 13:d=b()("docs"),v="POST",h={Authorization:Object(y["a"])(),"Content-Type":"application/json"};if(!i){a.next=22;break}p=0;g=Object.keys(c);g.forEach(function(e){if(c[e]===n.props.doc[e]){delete c[e];p++}});if(!(g.length===p)){a.next=20;break}return a.abrupt("return");case 20:d=b()("docs/"+n.props.doc.id);v="PATCH";case 22:n.setState({error:null,pending:true});a.next=25;return fetch(d,{headers:h,method:v,body:JSON.stringify(c)}).catch(s);case 25:k=a.sent;a.prev=26;a.next=29;return k.json();case 29:c=a.sent;a.next=35;break;case 32:a.prev=32;a.t0=a["catch"](26);c={message:"An error occurred submitting doc"};case 35:if(!k.ok){a.next=38;break}E=c,w=E.id;return a.abrupt("return",l.a.push({pathname:"/k",query:{id:w}},b()("k/".concat(w))));case 38:s(c.message);case 39:case"end":return a.stop()}},e,this,[[26,32]])}));return function t(){return e.apply(this,arguments)}}()}),r))}C(t,[{key:"render",value:function e(){var t=this.state,r=t.md,n=t.dir,a=t.name,o=t.error,i=t.pending;var l={paddingTop:10};return u.a.createElement(f["a"],null,u.a.createElement("div",{className:"row fill",style:l},u.a.createElement("div",{className:"column column-50"},u.a.createElement(d["a"],{className:"fill Markdown",source:r})),u.a.createElement("div",{className:"column column-50"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"column column-60"},u.a.createElement("input",{type:"text",maxLength:250,placeholder:"New document name",id:"name",value:a,onChange:this.updVal})),u.a.createElement("div",{className:"column"},u.a.createElement("input",{type:"text",maxLength:1024,placeholder:"Subdirectory (optional)",id:"dir",value:n,onChange:this.updVal}))),u.a.createElement("div",{className:"row"},u.a.createElement(x,{value:r,className:"column WrapCodeMirror",onChange:this.updMd,onSubmit:this.submit,options:{theme:"monokai",mode:"markdown",lineWrapping:true}})),u.a.createElement("div",{className:"row",style:{marginTop:5}},u.a.createElement("div",{className:"column"},u.a.createElement("span",null,o),u.a.createElement("button",{className:"float-right",style:{marginTop:5},onClick:i?null:this.submit},"Submit"))))))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){var n=t.doc;if(n){var a=n.name,o=n.dir,u=n.md;return{name:a,md:u,dir:o,editMode:true}}if(r.id)return j;return null}}]);return t}(o["Component"])},93:function(e,t){var r=function e(t){if(t.length>255||0===t.length)return false;var r=t.length-1;for(var n=0;n<t.length;n++){var a=t.charCodeAt(n);if(!(a>47&&a<58)&&!(a>64&&a<91)&&!(a>96&&a<123)&&!(95===a)&&!(45===a)&&!((46===a||32===a)&&0!==n&&n!==r))return false}return true};e.exports={checkDir:function e(t){if("string"!==typeof t)return false;t=t.trim();if(0===t.length)return 0;if(t.indexOf("/")>-1){t=t.split("/").filter(function(e){return 0!==e.length});if(1===t.length){r(t[0])||false;t=t[0]}else if(0===t.length)t="";else if(t.some(function(e){return!r(e)}))return false}else if(!r(t))return false;return Array.isArray(t)?t.join("/"):t},checkName:function e(t){if("string"!==typeof t)return false;t=t.trim();if(0===t.length)return 0;if(!r(t))return false;return t}}}},[258]);return{page:e.default}});