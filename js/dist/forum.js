/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={27:(t,r,e)=>{var n=e(668).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var r,e={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(r){h=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new F(n||[]);return c(i,"_invoke",{value:S(t,e,a)}),i}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",m="suspendedYield",v="executing",g="completed",w={};function x(){}function b(){}function L(){}var _={};h(_,s,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(I([])));O&&O!==i&&a.call(O,s)&&(_=O);var j=L.prototype=x.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function P(t,r){function e(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===w)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?g:m,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,w;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,w):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return b.prototype=L,c(j,"constructor",{value:L,configurable:!0}),c(L,"constructor",{value:b,configurable:!0}),b.displayName=h(L,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},k(P.prototype),h(P.prototype,l,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(j),h(j,f,"Generator"),h(j,s,(function(){return this})),h(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),w},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),w}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),w}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},38:(t,r,e)=>{var n=e(27)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},668:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";const t=flarum.core.compat["common/app"];var r=e.n(t);const n=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var o=e.n(n);function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t,r){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},a(t,r)}var c=e(38),u=e.n(c);const s=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var l=e.n(s),f="liplum-trends-widget";const h=flarum.core.compat["common/components/LoadingIndicator"];var p=e.n(h);const d=flarum.core.compat["common/utils/ItemList"];var y=e.n(d);const v=flarum.core.compat["common/components/Link"];var g=e.n(v),w=function(t){function e(){for(var r,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(r=t.call.apply(t,[this].concat(n))||this).loading=!0,r.trends=[],r}var n,o;o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,a(n,o);var c=e.prototype;return c.className=function(){return"liplum-trends-widget"},c.icon=function(){return"fas fa-fire-alt"},c.title=function(){return r().translator.trans(f+".forum.widget.title")},c.content=function(){if(this.loading)return m(p(),null);if(!this.trends||0===this.trends.length)return r().translator.trans(f+".forum.widget.empty");var t=new(y());return this.trends.forEach((function(r,e){t.add(r.id,m(g(),{href:r.attributes.shareUrl,style:{fontWeight:"bold",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis"}},e+1+" "+r.attributes.title))})),m("div",null,t.toArray())},c.oncreate=function(r){t.prototype.oncreate.call(this,r),this.fetchTrends()},c.fetchTrends=function(){var t,e=(t=u().mark((function t(){var e,n,o,i,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=r().forum.attribute(f+".recentDays"),n=r().forum.attribute(f+".limit"),o=r().forum.attribute(f+".hotSpotHours"),i={},e&&(i.recentDays=e),n&&(i.limit=n),o&&(i.hotSpotHours=o),t.prev=8,t.next=11,r().request({method:"GET",url:r().forum.attribute("apiUrl")+"/trends/recent",params:i});case 11:a=t.sent,this.trends=a.data,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),console.error("Error fetching trends:",t.t0);case 18:return t.prev=18,this.loading=!1,m.redraw(),t.finish(18);case 22:case"end":return t.stop()}}),t,this,[[8,15,18,22]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),e}(l());r().initializers.add(f,(function(){var t;t=r(),(new(o())).add({key:"liplum-trends-widget",component:w,isDisabled:!1,isUnique:!0,placement:"end",position:2}).extend(t,f)}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map