(window.webpackJsonp=window.webpackJsonp||[]).push([[81,43,69,128],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(323)),o=n(329),c=n(324),s=n(69),l={id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/"},u={unversionedId:"api-reference/hooks/use-subscription",id:"version-v11.0.0/api-reference/hooks/use-subscription",isDocsHomePage:!1,title:"useSubscription",description:"useSubscription",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-subscription.md",slug:"/api-reference/use-subscription/",permalink:"/docs/api-reference/use-subscription/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/hooks/use-subscription.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1616721649,sidebar:"version-v11.0.0/docs",previous:{title:"useMutation",permalink:"/docs/api-reference/use-mutation/"},next:{title:"useEntryPointLoader",permalink:"/docs/api-reference/use-entrypoint-loader/"}},p=[{value:"<code>useSubscription</code>",id:"usesubscription",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Behavior",id:"behavior",children:[]}]}],b={toc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usesubscription"},Object(a.b)("inlineCode",{parentName:"h2"},"useSubscription")),Object(a.b)("p",null,"Hook used to subscribe and unsubscribe to a subscription."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`\n  subscription UserDataSubscription($input: InputData!) {\n    # ...\n  }\n`;\n\nfunction UserComponent({ id }) {\n  // IMPORTANT: your config should be memoized.\n  // Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => ({\n    variables: {id},\n    subscription,\n  }), [id, subscription]);\n\n  useSubscription(config);\n\n  return (/* ... */);\n}\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config"),": a config of type ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#type-graphqlsubscriptionconfigtsubscriptionpayload"}),Object(a.b)("inlineCode",{parentName:"a"},"GraphQLSubscriptionConfig"))," passed to ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../request-subscription/"}),Object(a.b)("inlineCode",{parentName:"a"},"requestSubscription"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"requestSubscriptionFn"),": ",Object(a.b)("inlineCode",{parentName:"li"},"?<TSubscriptionPayload>(IEnvironment, GraphQLSubscriptionConfig<TSubscriptionPayload>) => Disposable"),". An optional function with the same signature as ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../request-subscription/"}),Object(a.b)("inlineCode",{parentName:"a"},"requestSubscription")),", which will be called in its stead. Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"requestSubscription"),".")),Object(a.b)(s.default,{mdxType:"GraphQLSubscriptionConfig"}),Object(a.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TSubscriptionPayload"),": The type of the payloads vended by the subscription. You should pass the flow type imported from the auto-generated ",Object(a.b)("inlineCode",{parentName:"li"},".graphql")," file corresponding to the subscription, e.g. use ",Object(a.b)("inlineCode",{parentName:"li"},"UserDataSubscription")," as the type parameter, from ",Object(a.b)("inlineCode",{parentName:"li"},"import type {UserDataSubscription} from './__generated__/UserDataSubscription.graphql'"),";")),Object(a.b)("h3",{id:"behavior"},"Behavior"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This is only a thin wrapper around the ",Object(a.b)("inlineCode",{parentName:"li"},"requestSubscription")," API. It will:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),Object(a.b)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted"),Object(a.b)("li",{parentName:"ul"},"Unsubscribe and resubscribe with new values if the environment, config or ",Object(a.b)("inlineCode",{parentName:"li"},"requestSubscriptionFn")," changes."))),Object(a.b)("li",{parentName:"ul"},"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../request-subscription/"}),Object(a.b)("inlineCode",{parentName:"a"},"requestSubscription"))," API directly."),Object(a.b)("li",{parentName:"ul"},"See the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../guided-tour/updating-data/graphql-subscriptions/"}),"GraphQL Subscriptions Guide")," for a more detailed explanation of how to work with subscriptions.")),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},"useSubscription")," doesn't automatically add ",Object(a.b)("inlineCode",{parentName:"p"},"client_subscription_id"),". You may need to provide an arbitrary ",Object(a.b)("inlineCode",{parentName:"p"},"client_subscription_id")," to ",Object(a.b)("inlineCode",{parentName:"p"},"config.variables.input"))))),Object(a.b)(o.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=a(n(327));const o=["internal","external"];let c;try{c=n(325).usePluginData}catch(b){c=null}function s(e){return u(e),p()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function p(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=u,t.isInternal=p,t.FbInternalOnly=function(e){return p()?e.children:null},t.OssOnly=function(e){return p()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return o}));var r=n(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,l=[],u=!1,p=-1;function b(){u&&s&&(u=!1,s.length?l=s.concat(l):p=-1,l.length&&d())}function d(){if(!u){var e=c(b);u=!0;for(var t=l.length;t;){for(s=l,l=[];++p<t;)s&&s[p].run();p=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},327:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(328);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,a=0;const o={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=a++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),n}))}},329:function(e,t,n){"use strict";n(61);var r=n(324),i=n(0);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var c=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},l=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(c,null))},u=function(){return i.createElement(o,null,i.createElement(c,null))};t.a=function(){return Object(r.fbContent)({internal:i.createElement(l,null),external:i.createElement(u,null)})}},330:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(22),i=n(331);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},331:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(323)),o={},c={unversionedId:"api-reference/types/CacheConfig",id:"version-v11.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",slug:"/api-reference/types/CacheConfig",permalink:"/docs/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1616721649},s=[],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"type-cacheconfig"},"Type ",Object(a.b)("inlineCode",{parentName:"h4"},"CacheConfig")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An object with the following fields:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"force"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"poll"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",Object(a.b)("inlineCode",{parentName:"li"},"setTimeout"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"liveConfigId"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"metadata"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transactionId"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}u.isMDXComponent=!0},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(323)),o=n(330),c={},s={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v11.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1616721649},l=[],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"type-selectorstoreupdater"},"Type ",Object(a.b)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A function with signature ",Object(a.b)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),Object(a.b)("li",{parentName:"ul"},"This interface allows you to ",Object(a.b)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",Object(a.b)("em",{parentName:"li"},"create entirely new records"),", or ",Object(a.b)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",Object(a.b)("a",{href:Object(o.a)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}p.isMDXComponent=!0},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),a=(n(0),n(323)),o=n(63),c=n(62),s={},l={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig.md",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/GraphQLSubscriptionConfig.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1616721649},u=[],p={toc:u};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",Object(a.b)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An object with the following fields:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cacheConfig"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#type-cacheconfig"}),Object(a.b)("inlineCode",{parentName:"a"},"CacheConfig"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"subscription"),": ",Object(a.b)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",Object(a.b)("inlineCode",{parentName:"li"},"graphql")," template literal"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onCompleted"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," ",Object(a.b)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onError"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," ",Object(a.b)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"onNext"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," ",Object(a.b)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updater"),": ",Object(a.b)("em",{parentName:"li"},Object(a.b)("em",{parentName:"em"},"[Optional]"))," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#type-selectorstoreupdater"}),Object(a.b)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),Object(a.b)(c.default,{mdxType:"CacheConfig"}),Object(a.b)(o.default,{mdxType:"SelectorStoreUpdater"}))}b.isMDXComponent=!0}}]);