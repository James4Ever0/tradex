!function(e){function t(t){for(var n,c,o=t[0],i=t[1],m=t[2],s=0,p=[];s<o.length;s++)c=o[s],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&p.push(l[c][0]),l[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,m||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==l[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},l={0:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var m=0;m<o.length;m++)t(o[m]);var u=i;r.push([71,1]),a()}({71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=a(19),i=a(87),m=a(7);const u=Object(m.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",padding:"0 25px",boxSizing:"border-box",borderRadius:0,background:"#4f25f7",color:"#fff",transform:"none",boxShadow:"6px 6px 0 0 #c7d8ed",transition:"background .3s,border-color .3s,color .3s","&:hover":{backgroundColor:"#4f25f7"}},label:{textTransform:"capitalize"}})(i.a);var s=function(e){return l.a.createElement(u,{variant:"contained"},e.txt)},p=a.p+"5a93ef2fae86f877630b83a48f3c661c.svg",d=a.p+"1b06bd40a23a85255ef130704cef0f33.svg",E=a(89),b=a(90),f=a(88);class h extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Login Page"),l.a.createElement("br",null),l.a.createElement("div",{class:"login"},l.a.createElement("form",{id:"login",method:"get",action:"login.php"},l.a.createElement("label",null,l.a.createElement("b",null,"User Name")),l.a.createElement("input",{type:"text",name:"Uname",id:"Uname",placeholder:"Username"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"Password",name:"Pass",id:"Pass",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",name:"log",id:"log",value:"Log In Here"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("span",null,"Remember me"),l.a.createElement("br",null),l.a.createElement("br",null),"Forgot ",l.a.createElement("a",{href:"#"},"Password"))))}}const g=Object(f.a)({bar:{paddingTop:"1.15rem",backgroundColor:"#fff","@media (max-width:780px)":{flexDirection:"column"}},logo:{width:"15%","@media (max-width:780px)":{display:"none"}},logoMobile:{width:"100%",display:"none","@media (max-width:780px)":{display:"inline-block"}},menuItem:{cursor:"pointer",flexGrow:1,"&:hover":{color:"#4f25c8"},"@media (max-width:780px)":{paddingBottom:"1rem"}}});var y=function(){const e=g();return l.a.createElement(E.a,{position:"sticky",color:"rgba(0, 0, 0, 0.87)",className:e.bar},l.a.createElement("img",{src:p,alt:" ",className:e.logo}),l.a.createElement("img",{src:d,alt:" ",className:e.logoMobile}),l.a.createElement(b.a,{variant:"h6",className:e.menuItem},l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement(b.a,{variant:"h6",className:e.menuItem},l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement(b.a,{variant:"h6",className:e.menuItem},l.a.createElement(o.b,{to:"/signup"},"Sign up")),l.a.createElement(b.a,{variant:"h6",className:e.menuItem},l.a.createElement(o.b,{to:"/login"},"Login")),l.a.createElement(b.a,{variant:"h6",className:e.menuItem},l.a.createElement(o.b,{to:"/contact"},"Contact Us")),l.a.createElement(s,{txt:"Pay Now"}))},v=a(4),w=a(56),x=a(91);const S=Object(f.a)({wrapper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 5rem 0 5rem"},item:{paddingTop:"1rem"}});var N=function(e){const{icon:t,title:a,btnTitle:n}=e,r=S();return l.a.createElement("div",{className:r.wrapper},l.a.createElement("div",{className:r.item},t),l.a.createElement(b.a,{className:r.item,variant:"h5"},a),l.a.createElement("div",{className:r.item},l.a.createElement(s,{txt:n})))},P=(a.p,a(46)),T=a.n(P),j=a(47),O=a.n(j),M=a(48),I=a.n(M),k=a(49),C=a.n(k),U=a(50),A=a.n(U),D=a(51),F=a.n(D);const _=Object(w.a)({palette:{primary:{main:"#2e1667"},secondary:{main:"#c7d8ed"}},typography:{fontFamily:["Roboto"],h4:{fontWeight:600,fontSize:28,lineHeight:"2rem"},h5:{fontWeight:100,lineHeight:"2rem"}}}),H=Object(f.a)({wrapper:{width:"65%",margin:"auto",textAlign:"center"},bigSpace:{marginTop:"5rem"},littleSpace:{marginTop:"2.5rem"},grid:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}});var L=function(){const e=H();return l.a.createElement("div",{className:"App"},l.a.createElement(x.a,{theme:_},l.a.createElement("div",{className:e.wrapper},l.a.createElement(b.a,{variant:"h2",className:e.bigSpace,color:"primary"},"Tradex"),l.a.createElement(b.a,{variant:"h5",className:e.littleSpace,color:"primary"},"Trading Platform........")),l.a.createElement("div",{className:`${e.grid} ${e.bigSpace}`},l.a.createElement(N,{icon:l.a.createElement(T.a,{style:{fill:"#4360A6",height:"125",width:"125"}}),title:"Secure",btnTitle:"Show me More"}),l.a.createElement(N,{icon:l.a.createElement(O.a,{style:{fill:"#449A76",height:"125",width:"125"}}),title:"Reliable",btnTitle:"Show me More"}),l.a.createElement(N,{icon:l.a.createElement(I.a,{style:{fill:"#D05B2D",height:"125",width:"125"}}),title:"Performant",btnTitle:"Show me More"})),l.a.createElement("div",{className:`${e.grid} ${e.littleSpace}`},l.a.createElement(N,{icon:l.a.createElement(C.a,{style:{fill:"#5EA780",height:"125",width:"125"}}),title:"Modular",btnTitle:"Show me More"}),l.a.createElement(N,{icon:l.a.createElement(A.a,{style:{fill:"#E69426",height:"125",width:"125"}}),title:"Multi-Platform",btnTitle:"Show me More"}),l.a.createElement(N,{icon:l.a.createElement(F.a,{style:{fill:"#2EA09D",height:"125",width:"125"}}),title:"Connected",btnTitle:"Show me More"})),l.a.createElement("div",{className:e.bigSpace})))};class R extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Sign Up Page"),l.a.createElement("br",null),l.a.createElement("div",{class:"signup"},l.a.createElement("form",{id:"signup"},l.a.createElement("label",null,l.a.createElement("b",null,"User Name")),l.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"Password",name:"password",id:"password",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button"},"Sign Up"))))}}function $(){return l.a.createElement("h1",null,"About")}function z(){return l.a.createElement("h1",null,"Contact Us")}function B(){return l.a.createElement("h1",null,"You Lost?")}function W(){return l.a.createElement(v.d,null,l.a.createElement(v.a,{exact:!0,from:"/",to:"/land"}),l.a.createElement(v.b,{path:"/land",component:L}),l.a.createElement(v.b,{path:"/signup",component:R}),l.a.createElement(v.b,{path:"/login",component:h}),l.a.createElement(v.b,{path:"/about",component:$}),l.a.createElement(v.b,{path:"/contact",component:z}),l.a.createElement(v.b,{component:B}))}var J=a(92),Y=a(93),G=a(52),q=a.n(G),K=a(53),Q=a.n(K),V=a(54),X=a.n(V),Z=a(55),ee=a.n(Z);var te=function(){return l.a.createElement(J.a,null,l.a.createElement(Y.a,{color:"red",label:"Facebook",value:"recents",icon:l.a.createElement(q.a,{style:{fill:"#3b5998"}})}),l.a.createElement(Y.a,{label:"Twitter",value:"favorites",icon:l.a.createElement(Q.a,{style:{fill:"#1DA1F2"}})}),l.a.createElement(Y.a,{label:"Instagram",value:"nearby",icon:l.a.createElement(X.a,{style:{fill:" #C13584"}})}),l.a.createElement(Y.a,{label:"YouTube",value:"folder",icon:l.a.createElement(ee.a,{style:{fill:"#c4302b"}})}))};function ae(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(W,null),l.a.createElement(te,null))}function ne(){return l.a.createElement(o.a,null,l.a.createElement(ae,null))}c.a.render(l.a.createElement(ne,null),document.getElementById("root"))}});