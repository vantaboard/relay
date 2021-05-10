(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,j=m["".concat(l,".").concat(O)]||m[O]||u[O]||b;return a?r.a.createElement(j,c(c({ref:t},i),{},{components:a})):r.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(1142)),l={id:"compatibility-cheatsheet",title:"Compatibility Cheatsheet",original_id:"compatibility-cheatsheet"},c={unversionedId:"compatibility-cheatsheet",id:"version-v10.1.3/compatibility-cheatsheet",isDocsHomePage:!1,title:"Compatibility Cheatsheet",description:"What works with what? Relay Compat ('react-relay/compat') is the most flexible.",source:"@site/versioned_docs/version-v10.1.3/Modern-CompatibilityCheatsheet.md",slug:"/compatibility-cheatsheet",permalink:"/docs/v10.1.3/compatibility-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/Modern-CompatibilityCheatsheet.md",version:"v10.1.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620652887},o=[{value:"Can RelayRootContainer use:",id:"can-relayrootcontainer-use",children:[]},{value:"Can QueryRenderer using Classic Environment (<code>Store</code> in <code>react-relay/classic</code>) use:",id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use",children:[]},{value:"Can QueryRenderer using Modern Environment use:",id:"can-queryrenderer-using-modern-environment-use",children:[]},{value:"Can React Modern Component use:",id:"can-react-modern-component-use",children:[]},{value:"Can React Compat Component use:",id:"can-react-compat-component-use",children:[]},{value:"Can React Classic Component use:",id:"can-react-classic-component-use",children:[]}],i={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"What works with what? Relay Compat (",Object(b.b)("inlineCode",{parentName:"p"},"'react-relay/compat'"),") is the most flexible.\nCompat components and mutations can be used by everything. Compat components can also have any kind of children."),Object(b.b)("p",null,"However components using the Relay Modern API (",Object(b.b)("inlineCode",{parentName:"p"},"'react-relay'"),") and the Relay Classic API (",Object(b.b)("inlineCode",{parentName:"p"},"'react-relay/classic'"),") cannot be used with each other."),Object(b.b)("h3",{id:"can-relayrootcontainer-use"},"Can RelayRootContainer use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h3",{id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use"},"Can QueryRenderer using Classic Environment (",Object(b.b)("inlineCode",{parentName:"h3"},"Store")," in ",Object(b.b)("inlineCode",{parentName:"h3"},"react-relay/classic"),") use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h3",{id:"can-queryrenderer-using-modern-environment-use"},"Can QueryRenderer using Modern Environment use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("h3",{id:"can-react-modern-component-use"},"Can React Modern Component use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("h3",{id:"can-react-compat-component-use"},"Can React Compat Component use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes","*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("p",null,"*"," Modern API doesn't support mutation fragments. You might have to inline the mutation fragments from your legacy mutation in the fragment of the component."),Object(b.b)("h3",{id:"can-react-classic-component-use"},"Can React Classic Component use:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);