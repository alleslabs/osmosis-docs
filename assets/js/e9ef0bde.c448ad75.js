"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[4730],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>d});var a=o(67294);function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e){if(null==t)return{};var o,a,s=function(t,e){if(null==t)return{};var o,a,s={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(s[o]=t[o]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}var i=a.createContext({}),c=function(t){var e=a.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},m=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var o=t.components,s=t.mdxType,n=t.originalType,i=t.parentName,m=r(t,["components","mdxType","originalType","parentName"]),p=c(o),d=s,k=p["".concat(i,".").concat(d)]||p[d]||u[d]||n;return o?a.createElement(k,l(l({ref:e},m),{},{components:o})):a.createElement(k,l({ref:e},m))}));function d(t,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=o.length,l=new Array(n);l[0]=p;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r.mdxType="string"==typeof t?t:s,l[1]=r;for(var c=2;c<n;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},68807:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var a=o(87462),s=(o(67294),o(3905));const n={title:"Cosmwasm & LocalOsmosis",sidebar_position:3},l="CosmWasm & LocalOsmosis",r={unversionedId:"local/localosmosis",id:"local/localosmosis",title:"Cosmwasm & LocalOsmosis",description:"You can now deploy contracts to LocalOsmosis with Beaker. The official tooling to deploy Osmosis Smartcontracts.",source:"@site/docs/cosmwasm/local/localosmosis.md",sourceDirName:"local",slug:"/local/localosmosis",permalink:"/cosmwasm/local/localosmosis",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/cosmwasm/local/localosmosis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cosmwasm & LocalOsmosis",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cosmwasm",permalink:"/cosmwasm/"},next:{title:"Submit a Cosmwasm Governance Proposal",permalink:"/cosmwasm/local/submit-wasm-proposal"}},i={},c=[{value:"Initial Setup: Rust, Contract Environment, Beaker, and Osmosis",id:"initial-setup-rust-contract-environment-beaker-and-osmosis",level:2},{value:"Option 1: Automatic Setup",id:"option-1-automatic-setup",level:3},{value:"Option 2: Manual Setup",id:"option-2-manual-setup",level:3},{value:"Rust",id:"rust",level:4},{value:"Contact Environment",id:"contact-environment",level:4},{value:"Beaker",id:"beaker",level:4},{value:"Osmosis",id:"osmosis",level:4},{value:"Start LocalOsmosis",id:"start-localosmosis",level:2},{value:"Deploy a smart contract",id:"deploy-a-smart-contract",level:2},{value:"Clone cw-tpl-osmosis",id:"clone-cw-tpl-osmosis",level:3},{value:"Compile the wasm contract with stable toolchain",id:"compile-the-wasm-contract-with-stable-toolchain",level:3},{value:"Optimized Compilation",id:"optimized-compilation",level:3},{value:"Created a local key",id:"created-a-local-key",level:3},{value:"Store to your localOsmosis chain",id:"store-to-your-localosmosis-chain",level:3},{value:"Or Store CODE_ID",id:"or-store-code_id",level:3},{value:"Instantiate the contract",id:"instantiate-the-contract",level:3},{value:"Get contract address",id:"get-contract-address",level:3},{value:"Query Contract",id:"query-contract",level:2},{value:"Increment contract&#39;s count",id:"increment-contracts-count",level:3},{value:"Reset contracts count",id:"reset-contracts-count",level:3},{value:"Get contract&#39;s state",id:"get-contracts-state",level:3},{value:"Query contract info",id:"query-contract-info",level:3},{value:"List all contracts",id:"list-all-contracts",level:3}],m={toc:c};function u(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cosmwasm--localosmosis"},"CosmWasm & LocalOsmosis"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can now deploy contracts to LocalOsmosis with ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker"},"Beaker"),". The official tooling to deploy Osmosis Smartcontracts.")),(0,s.kt)("p",null,"The following is detailed guide that shows the basics of manually deploying a contract to a Osmosis local environment. It covers: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Initial Setup",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Rust"),(0,s.kt)("li",{parentName:"ul"},"LocalOsmosis via Osmosis installer. ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"osmosisd binary automatically configured to connect to your localOsmosis"),(0,s.kt)("li",{parentName:"ul"},"localOsmosis setup in the $HOME directory (~/localosmosis)"))))),(0,s.kt)("li",{parentName:"ul"},"Deploy a smart contract",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Clone a base template contract"),(0,s.kt)("li",{parentName:"ul"},"Compile contract"),(0,s.kt)("li",{parentName:"ul"},"Optimize  contract"),(0,s.kt)("li",{parentName:"ul"},"Create local key"),(0,s.kt)("li",{parentName:"ul"},"Store contract"),(0,s.kt)("li",{parentName:"ul"},"Initialize"),(0,s.kt)("li",{parentName:"ul"},"Get contract address"),(0,s.kt)("li",{parentName:"ul"},"Query contract"),(0,s.kt)("li",{parentName:"ul"},"Increment contract's count"),(0,s.kt)("li",{parentName:"ul"},"Reset contracts count"),(0,s.kt)("li",{parentName:"ul"},"Get contract's state"),(0,s.kt)("li",{parentName:"ul"},"Query contract info"),(0,s.kt)("li",{parentName:"ul"},"List all contracts")))),(0,s.kt)("h2",{id:"initial-setup-rust-contract-environment-beaker-and-osmosis"},"Initial Setup: Rust, Contract Environment, Beaker, and Osmosis"),(0,s.kt)("p",null,"Before beginning, you must set up Rust, your contract environment, Beaker, and Osmosis with one of the two following options:"),(0,s.kt)("h3",{id:"option-1-automatic-setup"},"Option 1: Automatic Setup"),(0,s.kt)("p",null,"Start the installer with the following command, choose LocalOsmosis (option 3), and follow the prompts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sL https://get.osmosis.zone/run)\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(46490).Z,width:"1586",height:"996"})),(0,s.kt)("h3",{id:"option-2-manual-setup"},"Option 2: Manual Setup"),(0,s.kt)("h4",{id:"rust"},"Rust"),(0,s.kt)("p",null,"Install Rust using rustup with the following command and follow the prompts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,s.kt)("h4",{id:"contact-environment"},"Contact Environment"),(0,s.kt)("p",null,"Set 'stable' as the default release channel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup default stable\n")),(0,s.kt)("p",null,"Add WASM as the compilation target:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-unknown-unknown\n")),(0,s.kt)("p",null,"Install the following packages to generate the contract:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-generate --features vendored-openssl\ncargo install cargo-run-scrip\n")),(0,s.kt)("h4",{id:"beaker"},"Beaker"),(0,s.kt)("p",null,"Install Beaker with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install -f beaker\n")),(0,s.kt)("h4",{id:"osmosis"},"Osmosis"),(0,s.kt)("p",null,"Setup v12.x Osmosis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/osmosis-labs/osmosis.git\ncd $HOME/osmosis\ngit checkout v12.x\nmake install\nsource ~/.profile\n")),(0,s.kt)("h2",{id:"start-localosmosis"},"Start LocalOsmosis"),(0,s.kt)("p",null,"Inside a separate bash window start LocalOsmosis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/osmosis\nmake localnet-start\n")),(0,s.kt)("p",null,"You will start seeing LocalOsmosis block activity in your terminal. Keep LocalOsmosis running while you perform the next steps in a new terminal window."),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(10522).Z,width:"837",height:"542"})),(0,s.kt)("p",null,"In place of doing the above commands, you can instead start LocalOsmosis with pre-made pools by starting LocalOsmosis with the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/osmosis\nmake localnet-start-with-state\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To view the LocalOsmosis wallet information, visit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/localosmosis#accounts"},"LocalOsmosis accounts page"),". ")),(0,s.kt)("h2",{id:"deploy-a-smart-contract"},"Deploy a smart contract"),(0,s.kt)("h3",{id:"clone-cw-tpl-osmosis"},"Clone cw-tpl-osmosis"),(0,s.kt)("p",null,"For this example we will use the cw-tpl-osmosis (CosmWasm Template Osmosis) repo that was created with the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-template"},"cw-template")," repo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"git clone https://github.com/osmosis-labs/cw-tpl-osmosis\n")),(0,s.kt)("h3",{id:"compile-the-wasm-contract-with-stable-toolchain"},"Compile the wasm contract with stable toolchain"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rustup default stable\ncargo wasm\n")),(0,s.kt)("p",null,"After this compiles, it should produce a file in ",(0,s.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_tpl_osmosis.wasm.")," A quick ls -lh should show around 1.8MB. This is a release build, but not stripped of all unneeded code. To produce a much smaller version, you can run this which tells the compiler to strip all unused code out:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RUSTFLAGS='-C link-arg=-s' \ncargo wasm \n\n")),(0,s.kt)("p",null,"This produces a file about 149kB. We will do further optimisation below."),(0,s.kt)("h3",{id:"optimized-compilation"},"Optimized Compilation"),(0,s.kt)("p",null,"To reduce gas costs, the binary size should be as small as possible. This will result in a less costly deployment, and lower fees on every interaction. Luckily, there is tooling to help with this. You can optimize production code using rust-optimizer. rust-optimizer produces reproducible builds of CosmWasm smart contracts. This means third parties can verify the contract is actually the claimed code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'sudo docker run --rm -v "$(pwd)":/code \\\n    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n    cosmwasm/rust-optimizer:0.12.6\n \n')),(0,s.kt)("p",null,"Binary will be at artifacts/osmosis_cw_tpl.wasm folder and its size will be 138k"),(0,s.kt)("h3",{id:"created-a-local-key"},"Created a local key"),(0,s.kt)("p",null,"Create a key using one of the seeds provided in localOsmosis. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"osmosisd keys add <unsafe-test-key-name> --recover\n")),(0,s.kt)("p",null,"Example test1 key from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/tree/main/tests/localosmosis#localosmosis-accounts"},"here"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius\n")),(0,s.kt)("h3",{id:"store-to-your-localosmosis-chain"},"Store to your localOsmosis chain"),(0,s.kt)("p",null,"You can deploy the contract to localOsmosis or a testnet.  In this example we will deploy to localOsmosis."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd artifacts\nosmosisd tx wasm store cw_tpl_osmosis.wasm  --from <unsafe-test-key-name> --chain-id=<chain-id> --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block -y\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"<unsafe-test-key-name>")," = Name of your local key.\n",(0,s.kt)("inlineCode",{parentName:"p"},"<chain-id>")," = localosmosis"),(0,s.kt)("p",null,"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"<unsafe-test-key-name>")," with the key name from your local keys. ",(0,s.kt)("inlineCode",{parentName:"p"},"osmosisd keys list"),"\nReplace ",(0,s.kt)("inlineCode",{parentName:"p"},"<chain-id>")," with localosmosis or osmo-test-4.\nSave the CODE_ID from the output of the command above as a local variable ",(0,s.kt)("inlineCode",{parentName:"p"},"CODE_ID=XX")),(0,s.kt)("h3",{id:"or-store-code_id"},"Or Store CODE_ID"),(0,s.kt)("p",null,"Instead of looking for the code_id the command above, you can also run the following command to set the CODE_ID as a variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"TX=$(osmosisd tx wasm store cw_tpl_osmosis.wasm  --from <unsafe-test-key-name> --chain-id=<chain-id> --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block --output json -y | jq -r '.txhash')\nCODE_ID=$(osmosisd query tx $TX --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho \"Your contract code_id is $CODE_ID\"\n")),(0,s.kt)("p",null,"If this is a brand new localOsmosis instance it should be ",(0,s.kt)("inlineCode",{parentName:"p"},"1")),(0,s.kt)("h3",{id:"instantiate-the-contract"},"Instantiate the contract"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'INITIAL_STATE=\'{"count":100}\'\nosmosisd tx wasm instantiate $CODE_ID $INITIAL_STATE --amount 50000uosmo  --label "Counter Contract" --from <unsafe-test-key-name> --chain-id <chain-id> --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block -y --no-admin\n')),(0,s.kt)("p",null,"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'INITIAL_STATE=\'{"count":100}\'\nosmosisd tx wasm instantiate $CODE_ID $INITIAL_STATE --amount 50000uosmo  --label "Counter Contract" --from c1 --chain-id localosmosis --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block -y --no-admin\n')),(0,s.kt)("h3",{id:"get-contract-address"},"Get contract address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CONTRACT_ADDR=$(osmosisd query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[0]')\n")),(0,s.kt)("h2",{id:"query-contract"},"Query Contract"),(0,s.kt)("h3",{id:"increment-contracts-count"},"Increment contract's count"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'INCREMENT_MSG=\'{"increment":{}}\'\nosmosisd tx wasm execute $CONTRACT_ADDR "$INCREMENT_MSG" --from c1\n')),(0,s.kt)("h3",{id:"reset-contracts-count"},"Reset contracts count"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'RESET_MSG=\'{"reset":{"count":0}}\'\nosmosisd tx wasm execute $CONTRACT_ADDR "$RESET_MSG" --from c1\n')),(0,s.kt)("h3",{id:"get-contracts-state"},"Get contract's state"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'GET_STATE_MSG=\'{"get_count":{}}\'\nosmosisd query wasm contract-state smart  $CONTRACT_ADDR "$GET_STATE_MSG"\n')),(0,s.kt)("h3",{id:"query-contract-info"},"Query contract info"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"osmosisd query wasm contract $CONTRACT_ADDR\n")),(0,s.kt)("h3",{id:"list-all-contracts"},"List all contracts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"osmosisd query wasm list-code\n")),(0,s.kt)("p",null,"Good job! It's now time to learn how to actually develop contracts. You can now visit the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/getting-started/intro"},"official CosmWasm contracts")," and as you explore the docs you will understand how tio actually interact with the Osmosis Blockchain."))}u.isMDXComponent=!0},46490:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/local-installer-81833fc47f4c02b154759d4ec12f4265.png"},10522:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/localOsmosis-a40e40f39bce9e6a0df0fc5bc5b9f81e.png"}}]);