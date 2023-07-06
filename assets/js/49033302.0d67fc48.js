"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[7888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"CosmWasm, Beaker, & Celatone"},s=void 0,i={unversionedId:"testnet/cosmwasm-celatone",id:"testnet/cosmwasm-celatone",title:"CosmWasm, Beaker, & Celatone",description:"The following guide will walk you through the process of uploading and deploying a CosmWasm contract to the Osmosis testnet. The testnet is permissionless by default to allow developers to test their contracts on a live environment. The Osmosis mainnet is permissioned meaning that you will need to submit a governance proposal in order to deploy to it.",source:"@site/docs/cosmwasm/testnet/cosmwasm-celatone.md",sourceDirName:"testnet",slug:"/testnet/cosmwasm-celatone",permalink:"/cosmwasm/testnet/cosmwasm-celatone",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/cosmwasm/testnet/cosmwasm-celatone.md",tags:[],version:"current",frontMatter:{title:"CosmWasm, Beaker, & Celatone"},sidebar:"tutorialSidebar",previous:{title:"Cosmwasm & Beaker",permalink:"/cosmwasm/testnet/cosmwasm-beaker"},next:{title:"Cosmwasm testnet deployment",permalink:"/cosmwasm/testnet/cosmwasm-deployment"}},l={},c=[{value:"Scaffolding the Project",id:"scaffolding-the-project",level:2},{value:"Install Beaker",id:"install-beaker",level:3},{value:"Scaffolding your new dapp project",id:"scaffolding-your-new-dapp-project",level:3},{value:"Your first CosmWasm contract with Beaker",id:"your-first-cosmwasm-contract-with-beaker",level:3},{value:"Compiling the Contract",id:"compiling-the-contract",level:3},{value:"Uploading the Contract",id:"uploading-the-contract",level:3},{value:"Testnet (Permissionless)",id:"testnet-permissionless",level:4},{value:"Instantiating the Contract",id:"instantiating-the-contract",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following guide will walk you through the process of uploading and deploying a CosmWasm contract to the Osmosis testnet. The testnet is permissionless by default to allow developers to test their contracts on a live environment. The Osmosis mainnet is permissioned meaning that you will need to submit a governance proposal in order to deploy to it."),(0,o.kt)("h2",{id:"scaffolding-the-project"},"Scaffolding the Project"),(0,o.kt)("p",null,"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Cargo")," ")),(0,o.kt)("h3",{id:"install-beaker"},"Install Beaker"),(0,o.kt)("p",null,"Beaker is available via ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"cargo")," which is a rust toolchain. Once cargo is ready on your machine, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install beaker\n")),(0,o.kt)("h3",{id:"scaffolding-your-new-dapp-project"},"Scaffolding your new dapp project"),(0,o.kt)("p",null,"In the directory you want your project to reside, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"beaker new counter-dapp\n")),(0,o.kt)("p",null,"For detailed information about Beaker ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/edit/main/README.md"},"click here"),"."),(0,o.kt)("h3",{id:"your-first-cosmwasm-contract-with-beaker"},"Your first CosmWasm contract with Beaker"),(0,o.kt)("p",null,"After that we can create new contract (the command uses template from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-template"},"cw-template"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd counter-dapp\nbeaker wasm new counter\n")),(0,o.kt)("p",null,"For detailed information about Beaker ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/edit/main/README.md"},"click here"),"."),(0,o.kt)("h3",{id:"compiling-the-contract"},"Compiling the Contract"),(0,o.kt)("p",null,"To deploy the contract, we first need to compile it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"beaker wasm build\n")),(0,o.kt)("p",null,"Once the build is complete, the contract's wasm file will be created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts")," folder."),(0,o.kt)("h3",{id:"uploading-the-contract"},"Uploading the Contract"),(0,o.kt)("h4",{id:"testnet-permissionless"},"Testnet (Permissionless)"),(0,o.kt)("p",null,"To upload the contract, navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://celatone.osmosis.zone"},"https://celatone.osmosis.zone")," and select ",(0,o.kt)("strong",{parentName:"p"},"Osmosis Testnet")," from the network list on top right hand corner."),(0,o.kt)("p",null,"For permisisonless networks like the Osmosis testnet, click on ",(0,o.kt)("strong",{parentName:"p"},"Deploy Contract")," on the sidebar."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(65950).Z,width:"5066",height:"2796"})),(0,o.kt)("p",null,'Click on "Upload new WASM File" and choose the previously built WASM file. Select the desired upload permission from the option.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(19858).Z,width:"5064",height:"2780"})),(0,o.kt)("p",null,"Finally, click ",(0,o.kt)("strong",{parentName:"p"},"Upload")," and sign the transaction with your wallet. Once the transaction is commited, you should see a modal confirming the upload, as well as additional information such as the uploaded code's ID."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(23314).Z,width:"5060",height:"2772"})),(0,o.kt)("h3",{id:"instantiating-the-contract"},"Instantiating the Contract"),(0,o.kt)("p",null,"Once you've uplaoded the contract, you can proceed to instantiate it. "),(0,o.kt)("p",null,"If you follow the steps from the previous section, you should see be able to select ",(0,o.kt)("strong",{parentName:"p"},"Proceed to Instantiate"),". This will take you to Celatone's Instantiate page, with the code ID already filled in. Otherwise, you can select a code to instantiate from from either the list of codes your wallet account has previously uploaded (",(0,o.kt)("strong",{parentName:"p"},"Select from your code"),") or any other one (",(0,o.kt)("strong",{parentName:"p"},"Fill Code ID manually"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(44801).Z,width:"5064",height:"2574"})),(0,o.kt)("p",null,"After the code ID is selected, enter the contract's label, admin address (optional), and the instantiate message JSON. Finally, click ",(0,o.kt)("strong",{parentName:"p"},"Instantiate")," and sign the transaction with your wallet. Once the transaction is confirmed, you should see details about your instantiated contract including contract's address and the instantiate transaction hash."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95246).Z,width:"5040",height:"2776"})))}m.isMDXComponent=!0},65950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/celatone-deploy-1622f01e7b2193540b0187967f233cb9.png"},95246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/celatone-instantiate-confirm-68c5a09254da366ecb31382aa6916e0c.png"},44801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/celatone-instantiate-ebc3103d912d2732b6ae936e9e404d1b.png"},23314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/celatone-upload-confirm-a6b8c2d68c0b7ccd9f8ddd57134af17f.png"},19858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/celatone-upload-4f0236bbc511e777eaa1867573431a75.png"}}]);