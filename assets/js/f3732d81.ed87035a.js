"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[27103],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){return function(t){var n=d(t.components);return i.createElement(e,r({},t,{components:n}))}},d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,c(c({ref:t},l),{},{components:n})):i.createElement(f,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(39960),a=n(44256),r=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var s=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(i.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return r.createElement(c,null,r.createElement(l,null),r.createElement(s,null),r.createElement(u,null))},m=function(){return r.createElement(c,null,r.createElement(s,null),r.createElement(u,null))};const p=function(){return(0,a.fbContent)({internal:r.createElement(d,null),external:r.createElement(m,null)})}},88327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(68629),c=n(44256),s=["components"],l={id:"streaming-pagination",title:"Streaming Pagination",slug:"/guided-tour/list-data/streaming-pagination/",description:"Relay guide to streaming pagination",keywords:["pagination","usePaginationFragment","connection","streaming"]},u=void 0,d={unversionedId:"guided-tour/list-data/streaming-pagination",id:"guided-tour/list-data/streaming-pagination",title:"Streaming Pagination",description:"Relay guide to streaming pagination",source:"@site/docs/guided-tour/list-data/streaming-pagination.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/streaming-pagination/",permalink:"/docs/next/guided-tour/list-data/streaming-pagination/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/list-data/streaming-pagination.md",tags:[],version:"current",lastUpdatedBy:"Pasha Smirnov",lastUpdatedAt:1661442462,formattedLastUpdatedAt:"8/25/2022",frontMatter:{id:"streaming-pagination",title:"Streaming Pagination",slug:"/guided-tour/list-data/streaming-pagination/",description:"Relay guide to streaming pagination",keywords:["pagination","usePaginationFragment","connection","streaming"]},sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/next/guided-tour/list-data/pagination/"},next:{title:"Refetching Connections (Using and Changing Filters)",permalink:"/docs/next/guided-tour/list-data/refetching-connections/"}},m={},p=[],f={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.mdx)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"Additionally, we can combine ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," with Relay's ",(0,r.mdx)("a",{parentName:"p",href:"../../../guides/incremental-data-delivery/"},"Incremental Data Delivery")," capabilities in order to fetch a connection and incrementally receive each item in the connection as it becomes ready, instead of waiting for the whole list of items to be returned in a single payload. This can be useful when for example computing each item in the connection is an expensive operation in the server, and we want to be able to show the first item(s) in the list as soon as possible without blocking on ",(0,r.mdx)("em",{parentName:"p"},"all")," the items that we need to become available; for example, on News Feed a user could ideally see and start interacting with the first story while additional stories loaded in below.")),(0,r.mdx)(c.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("p",null,"Additionally, we can combine ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," with Relay's Incremental Data Delivery capabilities in order to fetch a connection and incrementally receive each item in the connection as it becomes ready, instead of waiting for the whole list of items to be returned in a single payload. This can be useful when for example computing each item in the connection is an expensive operation in the server, and we want to be able to show the first item(s) in the list as soon as possible without blocking on ",(0,r.mdx)("em",{parentName:"p"},"all")," the items that we need to become available; for example, on News Feed a user could ideally see and start interacting with the first story while additional stories loaded in below.")),(0,r.mdx)("p",null,"In order to do so, we can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@stream_connection")," directive instead of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@connection")," directive:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  // ...\n\n  const {\n    data,\n    loadNext,\n    hasNext,\n  } = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @stream_connection(key: \"FriendsList_user_friends\", initial_count: 2,) {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,r.mdx)("p",null,"Let's distill what's happening here:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"@stream_connection")," directive can be used directly in place of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"@connection")," directive; it accepts the same arguments as @connection plus additional, ",(0,r.mdx)("em",{parentName:"li"},"optional")," parameters to control streaming:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"initial_count: Int"),": A number (defaulting to zero) that controls how many items will be included in the initial payload. Any subsequent items are streamed, so when set to zero the list will initially be empty and all items will be streamed. Note that this number does not affect how many items are returned ",(0,r.mdx)("em",{parentName:"li"},"total"),", only how many items are included in the initial payload. For example, consider a product that today makes an initial fetch for 2 items and then ",(0,r.mdx)("em",{parentName:"li"},"immediately")," issues a pagination query to fetch 3 more. With streaming, this product could instead choose to fetch 5 items in the initial query with initial_count=2, in order to fetch the 2 items quickly while avoiding a round trip for the subsequent 3 items."))),(0,r.mdx)("li",{parentName:"ul"},"As with regular usage of ",(0,r.mdx)("inlineCode",{parentName:"li"},"usePaginationFragment"),", the connection will be automatically updated as new items are streamed in from the server, and the component will re-render each time with the latest items in the connection.")),(0,r.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"For more information, see our docs on ",(0,r.mdx)("a",{parentName:"p",href:"../../../guides/incremental-data-delivery/#stream_connection"},"Incremental Data Delivery"),".")),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},47596:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(t){r(t)}}function c(e){try{s(i.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(11737);t.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(t){r(t)}}function c(e){try{s(i.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,a=0;const r={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in r||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?r[t].resolve(e.data.response):r[t].reject(new Error(e.data.error)),delete r[t]})));const t=a++,n=new Promise(((e,n)=>{r[t]={resolve:e,reject:n}})),o={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,c),n}))}},24855:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(t){r(t)}}function c(e){try{s(i.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const a=n(11737);t.reportContentCopied=function(e){return i(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return i(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(i){}}))}},44256:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=r(n(47596)),t.uidocs=r(n(17483)),t.feedback=r(n(24855)),t.inpageeditor=r(n(27312));const o=["internal","external"];function c(e){return l(e),u()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=l,t.isInternal=u,t.hasEphemeralDiffNumber=function(){return Boolean(d())},t.getEphemeralDiffNumber=d,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}},27312:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(t){r(t)}}function c(e){try{s(i.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const a=n(11737);t.submitDiff=function(e){return i(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:i,diff_number:r}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:i,diff_number:r}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(t){r(t)}}function c(e){try{s(i.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const a=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return i(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:i}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:i}})}))}}}]);