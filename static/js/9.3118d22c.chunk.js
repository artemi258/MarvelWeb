(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[9],{219:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(0),a=r(1),c=r(30),i=r(34),s=r(2);e.default=function(t){var e=t.Component,r=t.dataType,u=Object(a.g)().id,l=Object(o.useState)(null),h=Object(n.a)(l,2),f=h[0],p=h[1],d=Object(c.a)(),v=d.getComic,m=d.getCharacterName,g=d.error,y=d.clearError,b=d.setProcess,w=d.process;Object(o.useEffect)((function(){j()}),[u]);var j=function(){switch(y(),r){case"character":m(u).then(x).then((function(){return b("confirmed")}));break;case"comic":v(u).then(x).then((function(){return b("confirmed")}))}},x=function(t){p(t)};return g&&Object(o.history)("/error"),Object(s.jsx)(s.Fragment,{children:Object(i.a)(w,e,f)})}},25:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",o=r(2);e.a=function(){return Object(o.jsx)("img",{src:n,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"Error"})}},30:function(t,e,r){"use strict";var n=r(31),o=r.n(n),a=r(32),c=r(4),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(c.a)(t,2),r=e[0],n=e[1],s=Object(i.useState)(null),u=Object(c.a)(s,2),l=u[0],h=u[1],f=Object(i.useState)("waiting"),p=Object(c.a)(f,2),d=p[0],v=p[1];return{loading:r,error:l,request:Object(i.useCallback)(function(){var t=Object(a.a)(o.a.mark((function t(e){var r,a,c,i,s,u=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n(!0),v("loading"),t.prev=5,t.next=8,fetch(e,{method:r,body:a,headers:c});case 8:if((i=t.sent).ok){t.next=11;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 11:return t.next=13,i.json();case 13:return s=t.sent,n(!1),t.abrupt("return",s);case 18:throw t.prev=18,t.t0=t.catch(5),n(!1),h(!0),v("error"),t.t0;case 24:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){h(null),v("waiting")}),[]),process:d,setProcess:v}}(),e=t.loading,r=t.request,n=t.error,s=t.clearError,u=t.process,l=t.setProcess,h="https://gateway.marvel.com:443/v1/public/",f="apikey=1edd0447276bb1866d74649bfc5c1316",p=210,d=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n,a,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:p,n=c.length>1&&void 0!==c[1]?c[1]:9,t.next=4,r("".concat(h,"characters?limit=").concat(n,"&offset=").concat(e,"&").concat(f));case 4:return a=t.sent,t.abrupt("return",a.data.results.map(b));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(h,"characters/").concat(e,"?").concat(f));case 2:return n=t.sent,t.abrupt("return",b(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(h,"characters?name=").concat(e,"&").concat(f));case 2:return n=t.sent,t.abrupt("return",b(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n,a,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:p,n=c.length>1&&void 0!==c[1]?c[1]:9,t.next=4,r("".concat(h,"comics?limit=").concat(n,"&offset=").concat(e,"&").concat(f));case 4:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){return w(t)})));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(h,"comics/").concat(e,"?").concat(f));case 2:return n=t.sent,t.abrupt("return",w(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.description?t.description:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u043d\u0435\u0442",r=e.length>200?e.substr(0,200)+"...":e;return{id:t.id,name:t.name,description:r,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},w=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{getAllCharacters:d,getCharacter:v,getComics:g,loading:e,error:n,clearError:s,getComic:y,getCharacterName:m,process:u,setProcess:l}}},31:function(t,e,r){t.exports=r(54)},32:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},34:function(t,e,r){"use strict";var n=r(25),o=r(10),a=(r(43),r(2)),c=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};e.a=function(t,e,r){switch(t){case"waiting":return Object(a.jsx)(c,{});case"loading":return Object(a.jsx)(o.a,{});case"confirmed":return Object(a.jsx)(e,{data:r});case"error":return Object(a.jsx)(n.a,{});default:throw new Error("Unexpected process state")}}},43:function(t,e,r){},54:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new N(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===v)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(C([])));j&&j!==r&&n.call(j,a)&&(b=j);var x=y.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,i){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=y,s(x,"constructor",y),s(y,"constructor",g),g.displayName=s(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),s(x,i,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=9.3118d22c.chunk.js.map