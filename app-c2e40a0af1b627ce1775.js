webpackJsonp([0xd2a57dc1d883],{85:function(n,e){"use strict";function t(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function o(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=o;var r=[]},244:function(n,e,t){"use strict";e.components={"component---src-templates-blog-template-js":t(368),"component---src-pages-404-js":t(365),"component---src-pages-index-js":t(366),"component---src-pages-page-2-js":t(367)},e.json={"layout-index.json":t(369),"blog-the-ziggurat-architecture.json":t(390),"blog-getters-and-setters-antipattern.json":t(379),"blog-typescript-i-get-it.json":t(392),"blog-private-and-protected.json":t(382),"blog-react-before-vue.json":t(384),"blog-typescript-i-dont-get-it.json":t(391),"blog-css-in-js-seperate-concerns.json":t(375),"blog-stupid-redux-tricks.json":t(387),"blog-react-is-just-a-view.json":t(385),"blog-currying-thinking-with-portals.json":t(376),"blog-d-3-in-react.json":t(377),"blog-c-live-dangerously.json":t(372),"blog-coding-on-paper.json":t(373),"blog-the-hip.json":t(388),"blog-interestinglinks-1.json":t(381),"blog-video-hack-reactor-1.json":t(393),"blog-cool-tools.json":t(374),"blog-random-redux-thoughts.json":t(383),"blog-redux-mobx.json":t(386),"blog-the-other-side.json":t(389),"blog-git-and-subversion.json":t(380),"blog-working-with-dynamic-type.json":t(395),"blog-why-redux.json":t(394),"blog-doing-it-right-vs-doing-it-fast.json":t(378),"404.json":t(370),"index.json":t(396),"page-2.json":t(397),"404-html.json":t(371)},e.layouts={"layout---index":t(364)}},245:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(3),c=o(s),l=t(8),p=o(l),f=t(177),d=o(f),m=t(64),g=o(m),h=t(85),y=t(543),b=o(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,b.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},64:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(435),a=o(r),u=(0,a.default)();n.exports=u},246:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(84),a=t(178),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},247:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(207),a=o(r),u=t(85),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},371:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},370:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},372:function(n,e,t){t(2),n.exports=function(n){return t.e(0xc887d1b28faa,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},373:function(n,e,t){t(2),n.exports=function(n){return t.e(92893447782357,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},374:function(n,e,t){t(2),n.exports=function(n){return t.e(0xfefd67b5113a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},375:function(n,e,t){t(2),n.exports=function(n){return t.e(0xee521eeb9c95,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},376:function(n,e,t){t(2),n.exports=function(n){return t.e(49926254253336,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},377:function(n,e,t){t(2),n.exports=function(n){return t.e(41763247558397,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},378:function(n,e,t){t(2),n.exports=function(n){return t.e(0x8f059f1030d4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},379:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf6eba88b15e1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},380:function(n,e,t){t(2),n.exports=function(n){return t.e(0x837fae233d5a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},381:function(n,e,t){t(2),n.exports=function(n){return t.e(21394539151705,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},382:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa797c70163e7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},383:function(n,e,t){t(2),n.exports=function(n){return t.e(0xedc8681ccc64,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},384:function(n,e,t){t(2),n.exports=function(n){return t.e(0x95041e3a1a6a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},385:function(n,e,t){t(2),n.exports=function(n){return t.e(0xeb3eb872dabd,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},386:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf58a7e871a8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},387:function(n,e,t){t(2),n.exports=function(n){return t.e(0x690a005578ae,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},388:function(n,e,t){t(2),n.exports=function(n){return t.e(31428463216379,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},389:function(n,e,t){t(2),n.exports=function(n){return t.e(69855552298772,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},390:function(n,e,t){t(2),n.exports=function(n){return t.e(0xdce2611b2f46,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},391:function(n,e,t){t(2),n.exports=function(n){return t.e(0xd70c647ff41f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},392:function(n,e,t){t(2),n.exports=function(n){return t.e(0x98ffe3d3243f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(427)})})}},393:function(n,e,t){t(2),n.exports=function(n){return t.e(0xceecab5d6529,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(428)})})}},394:function(n,e,t){t(2),n.exports=function(n){return t.e(0x6e5086204a99,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(429)})})}},395:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe5a02734ac11,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(430)})})}},396:function(n,e,t){t(2),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(431)})})}},369:function(n,e,t){t(2),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(115)})})}},397:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7b71d9db271c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(432)})})}},364:function(n,e,t){t(2),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(248)})})}},177:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(3),a=(o(r),t(246)),u=o(a),i=t(64),s=o(i),c=t(178),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],b=[],j={},x="",v=[],C={},N=function(n){return n&&n.default||n},R=void 0,k=!0,w=[],P={},_={},E=5;R=t(249)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){v=v.filter(function(e){return e!==n}),R.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,w.push({resource:e,succeeded:!n}),_[e]||(_[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):_[e]?n.nextTick(function(){t(_[e])}):L(e,function(n,o){if(n)t(n);else{var r=N(o());h[e]=r,t(n,r)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),P[n]||(P[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,M={empty:function(){b=[],j={},C={},v=[],y=[],x=""},addPagesArray:function(n){y=n,x="/onCoding",p=(0,u.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return b.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var t=1/F;F+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||b.unshift(e),b.sort(T);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,v.indexOf(o.jsonName)!==-1||g[o.jsonName]||v.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,v.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||v.unshift(o.componentChunkName)),v.sort(O),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:C}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return b.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(P[e])return A(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return A(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&A(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),S(o.jsonName,function(n,e){n&&A(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&A(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(n){return b.length-b.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(157))},433:function(n,e){n.exports=[{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-the-ziggurat-architecture.json",path:"/blog/the-ziggurat-architecture"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-getters-and-setters-antipattern.json",path:"/blog/getters-and-setters-antipattern"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-typescript-i-get-it.json",path:"/blog/typescript-i-get-it"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-private-and-protected.json",path:"/blog/private-and-protected"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-react-before-vue.json",path:"/blog/react-before-vue"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-typescript-i-dont-get-it.json",path:"/blog/typescript-i-don't-get-it"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-css-in-js-seperate-concerns.json",path:"/blog/css-in-js-seperate-concerns"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-stupid-redux-tricks.json",path:"/blog/stupid-redux-tricks"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-react-is-just-a-view.json",path:"/blog/react-is-just-a-view"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-currying-thinking-with-portals.json",path:"/blog/currying-thinking-with-portals"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-d-3-in-react.json",path:"/blog/D3-in-React"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-c-live-dangerously.json",path:"/blog/c-live-dangerously"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-coding-on-paper.json",path:"/blog/coding-on-paper"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-the-hip.json",path:"/blog/the hip"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-interestinglinks-1.json",path:"/blog/interestinglinks-1"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-video-hack-reactor-1.json",path:"/blog/video-hack-reactor-1"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-cool-tools.json",path:"/blog/cool-tools"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-random-redux-thoughts.json",path:"/blog/random-redux-thoughts"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-redux-mobx.json",path:"/blog/redux-mobx"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-the-other-side.json",path:"/blog/the-other-side"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-git-and-subversion.json",path:"/blog/git-and-subversion"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-working-with-dynamic-type.json",path:"/blog/Working-with-dynamic-type"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-why-redux.json",path:"/blog/why-redux"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-doing-it-right-vs-doing-it-fast.json",path:"/blog/doing-it-right-vs-doing-it-fast"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},249:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(85),u=t(3),i=o(u),s=t(210),c=o(s),l=t(84),p=t(401),f=t(348),d=o(f),m=t(23),g=t(247),h=o(g),y=t(64),b=o(y),j=t(433),x=o(j),v=t(434),C=o(v),N=t(245),R=o(N),k=t(244),w=o(k),P=t(177),_=o(P);t(270),window.___history=h.default,window.___emitter=b.default,_.default.addPagesArray(x.default),_.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=_.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(250);var o=function(n){function e(n){n.page.path===_.default.getPage(o).path&&(b.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){b.default.off("onPostLoadPageResources",e),b.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);_.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):b.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return i.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(R.default);_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:g,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return _.default.getPage(o.location.pathname)?(0,u.createElement)(R.default,r({page:!0},o)):(0,u.createElement)(R.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],s=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return s(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},434:function(n,e){n.exports=[]},250:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(64),a=o(r),u="/";u="/onCoding/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},178:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},348:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},2:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},114:function(n,e){"use strict";function t(n,e,p){if("string"!=typeof e){if(l){var f=c(e);f&&f!==l&&t(n,f,p)}var d=u(e);i&&(d=d.concat(i(e)));for(var m=0;m<d.length;++m){var g=d[m];if(!(o[g]||r[g]||p&&p[g])){var h=s(e,g);try{a(n,g,h)}catch(n){}}}return n}return n}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);n.exports=t},435:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},157:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&i())}function i(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||g||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},543:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},365:function(n,e,t){t(2),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(256)})})}},366:function(n,e,t){t(2),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(257)})})}},367:function(n,e,t){t(2),n.exports=function(n){return t.e(0xc6c285f8fd10,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(258)})})}},368:function(n,e,t){t(2),n.exports=function(n){return t.e(0x6f26da274c7e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(259)})})}}});
//# sourceMappingURL=app-c2e40a0af1b627ce1775.js.map