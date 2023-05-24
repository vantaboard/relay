"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[47287],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){return function(t){var a=m(t.components);return n.createElement(e,o({},t,{components:a}))}},m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={},s="Tutorial Intro",p={unversionedId:"tutorial/intro",id:"tutorial/intro",title:"Tutorial Intro",description:"This tutorial will get you started with the most important and frequently-used features of Relay. To do that, we\u2019ll build a simple app that displays a newsfeed. We will cover:",source:"@site/docs/tutorial/intro.md",sourceDirName:"tutorial",slug:"/tutorial/intro",permalink:"/docs/next/tutorial/intro",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/intro.md",tags:[],version:"current",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1684885254,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Home",permalink:"/docs/next/"},next:{title:"GraphQL and Relay",permalink:"/docs/next/tutorial/graphql"}},d={},m=[],u={toc:m};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,o.mdx)("p",null,"This tutorial will get you started with the most important and frequently-used features of Relay. To do that, we\u2019ll build a simple app that displays a newsfeed. We will cover:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"How to fetch data using Queries."),(0,o.mdx)("li",{parentName:"ul"},"How to make components self-contained by breaking Queries into Fragments."),(0,o.mdx)("li",{parentName:"ul"},"How to paginate through data with Connections."),(0,o.mdx)("li",{parentName:"ul"},"How to update data on the server with Mutations and Updaters.")),(0,o.mdx)("p",null,"This tutorial assumes a fair familiarity with React. If you\u2019re still new to React, we suggest going through the ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/tutorial/"},"React tutorial")," and working with React until you\u2019re comfortable with creating components, passing props, and using the basic hooks such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),". The tutorial is based on the Web, but Relay also works great with React Native."),(0,o.mdx)("p",null,"This tutorial is built with TypeScript, so ",(0,o.mdx)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/"},"very basic knowledge of TypeScript")," is helpful as well \u2014 you don\u2019t need to know anything beyond declaring and importing types and annotating functions. Relay can also be used with the Flow type system or without a type system."),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("strong",{parentName:"p"},"IMPORTANT"),": The tutorial is meant to be gone through in order, as the exercises build on each other. You\u2019ll be making incremental changes to an example app, so later section won\u2019t make sense if you haven\u2019t done the earlier sections.")),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"To get started, run the following commands:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"git clone https://github.com/relayjs/relay-examples.git\ncd relay-examples/newsfeed\nnpm install\nnpm run dev\n")),(0,o.mdx)("p",null,"This downloads a template project to get started from and starts the server. (If they don\u2019t work, you may need to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/git-guides/install-git"},"install git")," or ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"install npm"),".)"),(0,o.mdx)("p",null,"When you run ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm run dev"),", several processes are started:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A Webpack-based HTTP server that serves up the front-end code."),(0,o.mdx)("li",{parentName:"ul"},"A basic GraphQL server that that front-end will query to retrieve information."),(0,o.mdx)("li",{parentName:"ul"},"The Relay compiler, which processes the GraphQL in your app and generates additional files that Relay uses at runtime, as well as TypeScript types representing the inputs and results of your queries. It will automatically regenerate when you save changes in your files.")),(0,o.mdx)("p",null,"In the terminal output, these three processes\u2019 log output are marked with tags: ",(0,o.mdx)("inlineCode",{parentName:"p"},"[webpack]")," in yellow, ",(0,o.mdx)("inlineCode",{parentName:"p"},"[server]")," in green, and ",(0,o.mdx)("inlineCode",{parentName:"p"},"[relay]")," in blue. Keep a look out for errors marked with ",(0,o.mdx)("inlineCode",{parentName:"p"},"[relay]")," as these are helpful if your GraphQL has any mistakes."),(0,o.mdx)("p",null,"Now that these processes are running, you should be able to open ",(0,o.mdx)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")," in your browser."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Screenshot",src:a(4017).Z,width:"1414",height:"1326"})),(0,o.mdx)("p",null,"We start from a webpage that shows a single Newsfeed story rendered with React, but the data for that story is just placeholder data hard-coded into the React components. In the rest of this tutorial, we\u2019ll make the app functional by having it fetch data from the server, paginate over multiple stories, and update the data by commenting and liking."),(0,o.mdx)("p",null,"The files that make up the example app are laid out in this way:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"src/components")," \u2014 the front-end app components that we\u2019ll be modifying and working with. Some of the important components are:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"App.tsx")," \u2014 the top-level component"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Newsfeed.tsx")," \u2014 a component that will run a query to fetch newsfeed stories and display a scrolling list of stories. At the beginning of the tutorial, this component uses hard-coded placeholder data \u2014 we\u2019ll modify it to fetch data via GraphQL and Relay."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Story.tsx")," \u2014 a component that shows a single newsfeed story."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"server")," \u2014 a very basic GraphQL server that serves up example data",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"server/schema.graphql")," \u2014 the GraphQL schema: it specifies what information can be queried from the server via GraphQL.")))),(0,o.mdx)("p",null,"Finally, you may want to install the ",(0,o.mdx)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=meta.relay"},"Relay VSCode extension")," for autocomplete, errors, and other help when using VSCode."),(0,o.mdx)("p",null,"Head over to the next section to start learning about GraphQL and Relay."))}c.isMDXComponent=!0},4017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/intro-screenshot-placeholder-b3306c44c795c65cf8ce0d2552e4d365.png"}}]);