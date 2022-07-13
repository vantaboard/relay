"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70095],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){return function(n){var t=u(n.components);return a.createElement(e,i({},n,{components:t}))}},u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(t),p=r,f=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(39960),r=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(l,null,i.createElement(c,null),i.createElement(d,null),i.createElement(s,null))},p=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(p,null)})}},33312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),l=t(68629),d=t(44256),c=["components"],s={id:"client-only-data",title:"Client-Only Data",slug:"/guided-tour/updating-data/client-only-data/"},u=void 0,p={unversionedId:"guided-tour/updating-data/client-only-data",id:"version-v11.0.0/guided-tour/updating-data/client-only-data",title:"Client-Only Data",description:"Client-Only Data (Client Schema Extensions)",source:"@site/versioned_docs/version-v11.0.0/guided-tour/updating-data/client-only-data.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/client-only-data/",permalink:"/docs/v11.0.0/guided-tour/updating-data/client-only-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/updating-data/client-only-data.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1657743687,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"client-only-data",title:"Client-Only Data",slug:"/guided-tour/updating-data/client-only-data/"},sidebar:"version-v11.0.0/docs",previous:{title:"Local Data Updates",permalink:"/docs/v11.0.0/guided-tour/updating-data/local-data-updates/"},next:{title:"Retaining Queries",permalink:"/docs/v11.0.0/guided-tour/accessing-data-without-react/retaining-queries/"}},m={},f=[{value:"Client-Only Data (Client Schema Extensions)",id:"client-only-data-client-schema-extensions",level:2},{value:"Extending Existing Types",id:"extending-existing-types",level:3},{value:"Adding New Types",id:"adding-new-types",level:3},{value:"Reading Client-Only Data",id:"reading-client-only-data",level:3},{value:"Updating Client-Only Data",id:"updating-client-only-data",level:3}],y=(a="FbClientOnlyDataDir",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),h={toc:f};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"client-only-data-client-schema-extensions"},"Client-Only Data (Client Schema Extensions)"),(0,o.mdx)("p",null,"Relay provides the ability to extend the GraphQL schema ",(0,o.mdx)("em",{parentName:"p"},"on the client")," (i.e. in the browser), via client schema extensions, in order to model data that only needs to be created, read and updated on the client. This can be useful to add small pieces of information to data that is fetched from the server, or to entirely model client-specific state to be stored and managed by Relay."),(0,o.mdx)("p",null,"Client schema extensions allows you to modify existing types on the schema (e.g. by adding new fields to a type), or to create entirely new types that only exist in the client."),(0,o.mdx)("h3",{id:"extending-existing-types"},"Extending Existing Types"),(0,o.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("p",null,"In order to extend an existing type, add a ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file to the appropriate schema extension directory (depending on the repo):")),(0,o.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"In order to extend an existing type, add a ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file to your appropriate source (",(0,o.mdx)("inlineCode",{parentName:"p"},"--src"),") directory:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type Comment {\n  is_new_comment: Boolean\n}\n")),(0,o.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(y,{mdxType:"FbClientOnlyDataDir"})),(0,o.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this example, we're using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"extend")," keyword to extend an existing type, and we're adding a new field, ",(0,o.mdx)("inlineCode",{parentName:"li"},"is_new_comment")," to the existing ",(0,o.mdx)("inlineCode",{parentName:"li"},"Comment")," type, which we will be able to ",(0,o.mdx)("a",{parentName:"li",href:"#reading-client-only-data"},"read")," in our components, and ",(0,o.mdx)("a",{parentName:"li",href:"#updating-client-only-data"},"update")," when necessary using normal Relay APIs; you might imagine that we might use this field to render a different visual treatment for a comment if it's new, and we might set it when creating a new comment."))),(0,o.mdx)("h3",{id:"adding-new-types"},"Adding New Types"),(0,o.mdx)("p",null,"You can define types using the same regular GraphQL syntax, by defining it inside a ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file in  ",(0,o.mdx)("inlineCode",{parentName:"p"},"html/js/relay/schema/"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"# You can define more than one type in a single file\nenum FetchStatus {\n  FETCHED\n  PENDING\n  ERRORED\n}\n\n\ntype FetchState {\n  # You can reuse client types to define other types\n  status: FetchStatus\n\n  # You can also reference regular server types\n  started_by: User!\n}\n\nextend type Item {\n  # You can extend server types with client-only types\n  fetch_state: FetchState\n}\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this contrived example, we're defining 2 new client-only types, and ",(0,o.mdx)("inlineCode",{parentName:"li"},"enum")," and a regular ",(0,o.mdx)("inlineCode",{parentName:"li"},"type"),". Note that they can reference themselves as normal, and reference regular server defined types. Also note that we can extend server types and add fields that are of our client-only types."),(0,o.mdx)("li",{parentName:"ul"},"As mentioned previously, we will be able to ",(0,o.mdx)("a",{parentName:"li",href:"#reading-client-only-data"},"read")," and ",(0,o.mdx)("a",{parentName:"li",href:"#updating-client-only-data"},"update")," this data normally via Relay APIs.")),(0,o.mdx)("h3",{id:"reading-client-only-data"},"Reading Client-Only Data"),(0,o.mdx)("p",null,"We can read client-only data be selecting it inside ",(0,o.mdx)("a",{parentName:"p",href:"../../rendering/fragments/"},"fragments")," or ",(0,o.mdx)("a",{parentName:"p",href:"../../rendering/queries/"},"queries")," as normal:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const data = *useFragment*(\n  graphql`\n    fragment CommentComponent_comment on Comment {\n\n      # We can select client-only fields as we would any other field\n      is_new_comment\n\n      body {\n        text\n      }\n    }\n  `,\n  props.user,\n);\n")),(0,o.mdx)("h3",{id:"updating-client-only-data"},"Updating Client-Only Data"),(0,o.mdx)("p",null,"In order to update client-only data, you can do so regularly inside ",(0,o.mdx)("a",{parentName:"p",href:"../graphql-mutations/"},"mutation")," or ",(0,o.mdx)("a",{parentName:"p",href:"../graphql-subscriptions/"},"subscription")," updaters, or by using our primitives for doing ",(0,o.mdx)("a",{parentName:"p",href:"../local-data-updates/"},"local updates")," to the store."),(0,o.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0},47596:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(11737);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,r=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=r++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},24855:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const r=t(11737);n.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(a){}}))}},44256:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const o=["internal","external"];function l(e){return c(e),s()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=c,n.isInternal=s,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return s()?e.children:null},n.OssOnly=function(e){return s()?null:e.children}},27312:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const r=t(11737);n.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:a,diff_number:i}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:a,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);