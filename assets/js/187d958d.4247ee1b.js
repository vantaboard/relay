"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[6558],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){return function(n){var t=d(n.components);return a.createElement(e,l({},n,{components:t}))}},d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(39960),r=t(86341),l=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),n)}var s=function(){var e=l.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},p=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return l.createElement(o,null,l.createElement(p,null),l.createElement(s,null),l.createElement(c,null))},m=function(){return l.createElement(o,null,l.createElement(s,null),l.createElement(c,null))};const u=function(){return(0,r.fbContent)({internal:l.createElement(d,null),external:l.createElement(m,null)})}},38274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=t(68629),o=(t(86341),["components"]),s={id:"installation-and-setup",title:"Installing in a Project",slug:"/getting-started/installation-and-setup/",description:"Relay installation and setup guide",keywords:["installation","setup","compiler","babel-plugin-relay"]},p="Installation",c={unversionedId:"getting-started/installation-and-setup",id:"version-v14.0.0/getting-started/installation-and-setup",title:"Installing in a Project",description:"Relay installation and setup guide",source:"@site/versioned_docs/version-v14.0.0/getting-started/installation-and-setup.md",sourceDirName:"getting-started",slug:"/getting-started/installation-and-setup/",permalink:"/docs/getting-started/installation-and-setup/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/getting-started/installation-and-setup.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Roman Martynenko",lastUpdatedAt:1674060892,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{id:"installation-and-setup",title:"Installing in a Project",slug:"/getting-started/installation-and-setup/",description:"Relay installation and setup guide",keywords:["installation","setup","compiler","babel-plugin-relay"]},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/getting-started/prerequisites/"},next:{title:"Editor Support",permalink:"/docs/editor-support/"}},d={},m=[{value:"Set up the compiler",id:"set-up-the-compiler",level:2},{value:"Compiler configuration",id:"compiler-configuration",level:2},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",level:2},{value:"Running the compiler",id:"running-the-compiler",level:2},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",level:2}],u={toc:m};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"In many situations, the easiest way to install Relay is with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"create-relay-app")," package written by Tobias Tengler. Contrary to what the name suggests, this package ",(0,l.mdx)("em",{parentName:"p"},"installs")," Relay on your existing app."),(0,l.mdx)("p",null,"It currently supports apps built on Next, Vite, and Create React App. If you aren't on one of those platforms, or if it doesn't work for you for some reason, proceed to the manual steps below."),(0,l.mdx)("p",null,"To run it, make sure you have a clean working directory and run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"npm create @tobiastengler/relay-app\n")),(0,l.mdx)("p",null,"(or use ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"pnpm")," instead of ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm")," as you prefer)."),(0,l.mdx)("p",null,'When it\'s done it will print some "Next Steps" for you to follow.'),(0,l.mdx)("p",null,"More details about this script can be found at its ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/tobias-tengler/create-relay-app"},"GitHub repository"),"."),(0,l.mdx)("hr",null),(0,l.mdx)("h1",{id:"manual-installation"},"Manual Installation"),(0,l.mdx)("p",null,"Install React and Relay using ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add react react-dom react-relay\n")),(0,l.mdx)("h2",{id:"set-up-the-compiler"},"Set up the compiler"),(0,l.mdx)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.mdx)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler"),", which you can install via ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev relay-compiler\n")),(0,l.mdx)("p",null,"This installs the bin script ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "relay": "relay-compiler"\n}\n')),(0,l.mdx)("h2",{id:"compiler-configuration"},"Compiler configuration"),(0,l.mdx)("p",null,"Create the configuration file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  language: "javascript", // "javascript" | "typescript" | "flow"\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),(0,l.mdx)("p",null,"This configuration also can be specified in ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," section of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," file.\nFor more details, and configuration options see: ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-compiler"},"Relay Compiler Configuration")),(0,l.mdx)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.mdx)("p",null,"Relay requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev babel-plugin-relay graphql\n")),(0,l.mdx)("p",null,"Add ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.mdx)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.mdx)("p",null,"Please note that the ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.mdx)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,l.mdx)("p",null,"Alternatively, instead of using ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,l.mdx)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,l.mdx)("h2",{id:"running-the-compiler"},"Running the compiler"),(0,l.mdx)("p",null,"After making edits to your application files, just run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay\n")),(0,l.mdx)("p",null,"Alternatively, you can pass the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.mdx)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay --watch\n")),(0,l.mdx)("p",null,"For more details, check out our ",(0,l.mdx)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler docs"),"."),(0,l.mdx)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.mdx)("p",null,"The Relay packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.mdx)("p",null,"However, Relay expects modern JavaScript global types (",(0,l.mdx)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,l.mdx)("p",null,"A polyfilled environment for Relay using ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")),(0,l.mdx)(i.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);