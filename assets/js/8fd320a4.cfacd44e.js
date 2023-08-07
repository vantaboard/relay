"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[7820],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>u,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(t),c=r,f=p["".concat(i,".").concat(c)]||p[c]||h[c]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={},d="GraphQL Types, Interfaces, and Polymorphism",s={unversionedId:"tutorial/interfaces-polymorphism",id:"tutorial/interfaces-polymorphism",title:"GraphQL Types, Interfaces, and Polymorphism",description:"In this section, we\u2019ll see how to treat different types of nodes differently. You might notice that some of the newsfeed stories in the example app are posted by people, while others are posted by organizations. In this example, we'll enhance our hovercard by writing a fragment that selects people-specific information about people  and organization-specific information about organizations.",source:"@site/docs/tutorial/interfaces-polymorphism.md",sourceDirName:"tutorial",slug:"/tutorial/interfaces-polymorphism",permalink:"/docs/next/tutorial/interfaces-polymorphism",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/interfaces-polymorphism.md",tags:[],version:"current",lastUpdatedBy:"Alex Danoff",lastUpdatedAt:1691433138,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Queries for Interactions",permalink:"/docs/next/tutorial/queries-2"},next:{title:"Refetchable Fragments",permalink:"/docs/next/tutorial/refetchable-fragments"}},p={},m=[{value:"Summary",id:"summary",level:2}],c={toc:m};function h(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"graphql-types-interfaces-and-polymorphism"},"GraphQL Types, Interfaces, and Polymorphism"),(0,o.mdx)("p",null,"In this section, we\u2019ll see how to treat different types of nodes differently. You might notice that some of the newsfeed stories in the example app are posted by people, while others are posted by organizations. In this example, we'll enhance our hovercard by writing a fragment that selects people-specific information about people  and organization-specific information about organizations."),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"We\u2019ve alluded to the fact that GraphQL nodes aren\u2019t just random bags of fields \u2014 they have types. Your GraphQL schema defines what fields each type has. For instance, it might define the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," type like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"type Story {\n  id: ID!\n  title: String\n  summary: String\n  createdAt: Date\n  poster: Actor\n  image: Image\n}\n")),(0,o.mdx)("p",null,"Here, some of the fields are scalars (like ",(0,o.mdx)("inlineCode",{parentName:"p"},"String")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"ID"),"). Others are types defined elsewhere in the schema, like ",(0,o.mdx)("inlineCode",{parentName:"p"},"Image")," \u2014 these fields are edges to nodes of those specific types. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"!")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"ID!")," means that field is non-nullable. In GraphQL, fields are normally nullable and non-nullability is the exception."),(0,o.mdx)("p",null,"Fragments are always \u201con\u201d a particular type. In our example above, ",(0,o.mdx)("inlineCode",{parentName:"p"},"StoryFragment")," is defined ",(0,o.mdx)("inlineCode",{parentName:"p"},"on Story"),". This means that you can only spread it into places in a query where a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," node is expected. And it means that the fragment can select just those fields that exist on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," type."),(0,o.mdx)("p",null,"Of particular interest is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Actor")," type used for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"poster")," field. This type is an ",(0,o.mdx)("em",{parentName:"p"},"interface"),". That means that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"poster")," of a story can be a Person, a Page, an Organization, or any other type of entity that meets the specifications for being an \u201cActor\u201d."),(0,o.mdx)("p",null,"The GraphQL schema in our example app defines an Actor as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"interface Actor {\n  name: String\n  profilePicture: Image\n  joined: DateTime\n}\n")),(0,o.mdx)("p",null,"Not coincidentally this is exactly the information that we\u2019re displaying here. There are two types in the schema that ",(0,o.mdx)("em",{parentName:"p"},"implement")," Actor, meaning that they include all the fields defined in Actor and declare as such:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"type Person implements Actor {\n  id: ID!\n  name: String\n  profilePicture: Image\n  joined: DateTime\n  email: String\n  location: Location\n}\n\ntype Organization implements Actor {\n  id: ID!\n  name: String\n  profilePicture: Image\n  joined: DateTime\n  organizationKind: OrganizationKind\n}\n")),(0,o.mdx)("p",null,"Both of these types have ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," , ",(0,o.mdx)("inlineCode",{parentName:"p"},"profilePicture"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"joined"),", so they can both declare that they implement Actor and thus can be used wherever an Actor is called for in the schema and in fragments. They also have other fields that are distinct to each particular type."),(0,o.mdx)("p",null,"Let\u2019s see how to work with interfaces more by extending the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContentsBody")," component to display the location of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Person")," or the organization kind of an ",(0,o.mdx)("inlineCode",{parentName:"p"},"Organization"),". These are fields that are only present on those specific types, not on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Actor")," interface."),(0,o.mdx)("p",null,"Right now, if you\u2019ve followed along so far, it should have a fragment defined like this (in ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContents.tsx"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"fragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n}\n")),(0,o.mdx)("p",null,"If you try to add a field like ",(0,o.mdx)("inlineCode",{parentName:"p"},"organizationKind")," to this fragment, you\u2019ll get an error from the Relay compiler:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\u2716\ufe0e The type `Actor` has no field organizationKind\n")),(0,o.mdx)("p",null,"This is because when we define a fragment as being on an interface, we can only use fields from that interface. To use fields from a specific type that implements the interface, we use a ",(0,o.mdx)("em",{parentName:"p"},"type refinement")," to tell GraphQL we\u2019re selecting fields from that type:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"fragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n  // change\n  ... on Organization {\n    organizationKind\n  }\n  // end-change\n}\n")),(0,o.mdx)("p",null,"Go ahead and add this now. You can also add a type refinement for ",(0,o.mdx)("inlineCode",{parentName:"p"},"Person"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"fragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n  ... on Organization {\n    organizationKind\n  }\n  // change\n  ... on Person {\n    location {\n      name\n    }\n  }\n  // end-change\n}\n")),(0,o.mdx)("p",null,"When you select a field that\u2019s only present on some of the types that implement an interface, and the node you\u2019re dealing with is of a different type, then you simply get ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," for the value of that field when you read it out. With that in mind, we can modify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContentsBody")," component to show the location of people and organization kind of organizations:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'import OrganizationKind from \'./OrganizationKind\';\n\nfunction PosterDetailsHovercardContentsBody({ poster }: Props): React.ReactElement {\n  const data = useFragment(PosterDetailsHovercardContentsBodyFragment, poster);\n  return (\n    <>\n      <Image image={data.profilePicture} width={128} height={128} className="posterHovercard__image" />\n      <div className="posterHovercard__name">{data.name}</div>\n      <ul className="posterHovercard__details">\n         <li>Joined <Timestamp time={poster.joined} /></li>\n         // change\n         {data.location != null && (\n           <li>{data.location.name}</li>\n         )}\n        {data.organizationKind != null && (\n          <li><OrganizationKind kind={data.organizationKind} /></li>\n         )}\n         // end-change\n      </ul>\n    </>\n  );\n}\n')),(0,o.mdx)("p",null,"You should now see the location of people, and the organization kind for organizations:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"An organization hovercard",src:t(267).Z,width:"1190",height:"570"})," ",(0,o.mdx)("img",{alt:"A person hovercard",src:t(18807).Z,width:"1084",height:"614"})),(0,o.mdx)("p",null,"By the way, we can now understand why we had ",(0,o.mdx)("inlineCode",{parentName:"p"},"... on Actor")," in the example earlier. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"node")," field can return a node of any type because any ID could be given at runtime. So the type that it gives us is ",(0,o.mdx)("inlineCode",{parentName:"p"},"Node"),", a very generic interface that can be implemented by anything that has an ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," field. We needed a type refinement to use fields from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Actor")," interface."),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"In the GraphQL spec and other sources, type refinements are called ",(0,o.mdx)("em",{parentName:"p"},"inline fragments"),". We call them \u201ctype refinements\u201d instead because this terminology is more descriptive and less confusing.")),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"If you need to do something totally different depending on what type it is, you can select a field called ",(0,o.mdx)("inlineCode",{parentName:"p"},"__typename"),", which returns a string with the name of the concrete type that you got (e.g., ",(0,o.mdx)("inlineCode",{parentName:"p"},'"Person"')," or ",(0,o.mdx)("inlineCode",{parentName:"p"},'"Organization"'),"). This is a built-in feature of GraphQL.")),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"... on Type {}")," syntax allows us to select fields that are only present in a specific type that implements an interface."))}h.isMDXComponent=!0},267:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/interfaces-organization-screenshot-3614512165c0726ffd8c8b5e30a8ee6a.png"},18807:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/interfaces-person-screenshot-4926f665a489443785ec6223110fe725.png"}}]);