(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{15:function(n,e,t){},61:function(n,e,t){"use strict";t.r(e);var i,o,c,a,r,s,d,l,p,m,j,h,b,x,u,g,f,O,w,y,v,I,k,C,S,A,z,M,N,F,T,_,G,P,E,B,L,Z,D,W,R,H,J,Y,V,U,Q,K,X,q,$,nn,en,tn,on,cn,an,rn,sn,dn=t(1),ln=t.n(dn),pn=t(29),mn=t.n(pn),jn=t(8),hn=t(3),bn=t(9),xn=t(10),un=t(12),gn=t(11),fn=t(6),On=t(5),wn=(t(15),t(2)),yn=Object(wn.c)(i||(i=Object(hn.a)(["\n    @supports (position: fixed) {\n        position: fixed;\n    }\n"]))),vn=wn.d.a(o||(o=Object(hn.a)(["\n    &:hover,\n    &:focus {\n        text-decoration: underline;\n    }\n"]))),In=(wn.d.a(c||(c=Object(hn.a)(["\n    text-align: center;\n    color: black;\n    width: 100%;\n \n"]))),wn.d.ul(a||(a=Object(hn.a)(["\n\n    width: 100%;\n    list-style: none;\n    align-self: center;\n    min-height: 100px;\n"])))),kn=wn.d.li(r||(r=Object(hn.a)([""]))),Cn=wn.d.nav(s||(s=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  max-width: 1050px;\n  margin: 0 auto;\n  right: 0;\n  background-color: white;\n  box-shadow: 0px 0px 15px lightgray;\n  ",";\n  \n  a {\n    display: block;\n    padding: 0.75em 15px;\n    line-height: 1em;\n    font-size: 1em;\n    color: black;\n    text-decoration: none;\n    text-align: center;\n    color: black;\n    width: 100%;\n\n  }\n"])),yn),Sn=(wn.d.a(d||(d=Object(hn.a)(["\n    display: inline-block;\n    padding: 0.75em 15px;\n    line-height: 1em;\n    font-size: 1.5em;\n    color: #333;\n\n    &:hover,\n    &:focus {\n        color: #938E9B;\n    }\n\n"]))),t(0)),An=function(){return Object(Sn.jsx)(Cn,{children:Object(Sn.jsxs)(In,{children:[Object(Sn.jsx)(kn,{children:Object(Sn.jsx)(vn,{href:"#home",children:"home"})}),Object(Sn.jsx)(kn,{children:Object(Sn.jsx)(vn,{href:"#aboutme",children:"about me"})}),Object(Sn.jsx)(kn,{children:Object(Sn.jsx)(vn,{href:"#projects",children:"projects"})}),Object(Sn.jsx)(kn,{children:Object(Sn.jsx)(vn,{href:"#skills",children:"skills"})}),Object(Sn.jsx)(kn,{children:Object(Sn.jsx)(vn,{href:"#contact",children:"contact"})})]})})},zn=wn.d.nav(l||(l=Object(hn.a)(["\n  z-index: 100;\n  display: flex;\n  position: sticky;\n  top: 0;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  width: 100%;\n  height: 10vh;\n  \n \n"]))),Mn=Object(wn.e)(p||(p=Object(hn.a)(["\n   0% {\n        transform: scale(1,1);\n    }\n    50% {\n        transform: scale(1.2,1.2);\n    }\n    100% {\n        transform: scale(1,1);\n    }\n"]))),Nn=(wn.d.a(m||(m=Object(hn.a)(["\n  color: ",";\n  width: 100%;\n  font-size: 60px;\n  background: red;\n  width: 15px;\n  border: 2px solid #FF9292;\n  border-radius: 50%;\n  \n\n"])),(function(n){return n.theme.mainColorGray})),wn.d.a(j||(j=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  width: 60px;\n  height: 60px;\n  border: 4px solid #FF9292;\n  border-radius: 50%;\n  margin-left: 0px;\n  animation: "," 1s linear;\n \n\n\n"])),(function(n){return n.theme.mainColorPastel}),Mn)),Fn=wn.d.div(h||(h=Object(hn.a)(["\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n  margin-left: 40%;\n\n  \n\n"]))),Tn=Object(wn.e)(b||(b=Object(hn.a)(["\n   0% {\n        transform: scale(1,1);\n    }\n    50% {\n        transform: scale(1.2,1.2);\n    }\n    100% {\n        transform: scale(1,1);\n    }\n"]))),_n=wn.d.a(x||(x=Object(hn.a)(["\n    position: fixed;\n    bottom: -47px;\n    right: -50px;\n    display: flex;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: ",";\n    width: 100px;\n    height: 100px;\n    padding: 23px;\n    border: none;\n    border-radius: 50%;\n    color: #fff;\n    font-size: 2rem;\n    opacity: 1;\n    border: 2px solid white;\n    animation: "," 1s linear infinite;\n    \n  \n\n"])),(function(n){return n.theme.mainColorPastel}),Tn),Gn=function(n){Object(un.a)(t,n);var e=Object(gn.a)(t);function t(n){var i;return Object(bn.a)(this,t),(i=e.call(this,n)).state={is_visible:!1},i}return Object(xn.a)(t,[{key:"componentDidMount",value:function(){var n=this;document.addEventListener("scroll",(function(e){n.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var n=this,e=this.state.is_visible;return Object(Sn.jsx)(Sn.Fragment,{children:e&&Object(Sn.jsx)(Sn.Fragment,{children:Object(Sn.jsx)(_n,{onClick:function(){return n.scrollToTop()},children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--backToTop",href:"#home",icon:On.c})})})})}}]),t}(ln.a.Component),Pn=function(n){Object(un.a)(t,n);var e=Object(gn.a)(t);function t(){var n;Object(bn.a)(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(n=e.call.apply(e,[this].concat(o))).container=ln.a.createRef(),n.state={open:!1},n.handleClickOutside=function(e){n.container.current&&!n.container.current.contains(e.target)&&n.setState({open:!1})},n.handleButtonClick=function(){n.setState((function(n){return{open:!n.open}}))},n}return Object(xn.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return Object(Sn.jsx)(Sn.Fragment,{children:Object(Sn.jsx)(zn,{ref:this.container,children:Object(Sn.jsxs)(Fn,{children:[Object(Sn.jsx)(Nn,{href:"#contact",children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--nav",icon:On.e,secondary:!0,href:"#contact"})}),this.state.open?Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--close",icon:On.p,onClick:this.handleButtonClick}):Object(Sn.jsx)(Nn,{children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--nav secondary",icon:On.h,onClick:this.handleButtonClick})}),this.state.open&&Object(Sn.jsx)(An,{}),Object(Sn.jsx)(Gn,{})]})})})}}]),t}(ln.a.Component),En=t(31),Bn=wn.d.header(u||(u=Object(hn.a)(["\n padding: 10px;\n"]))),Ln=wn.d.h1(g||(g=Object(hn.a)(["\n\n  color: ",";\n  font-size: 120px;\n  text-transform: uppercase;\n  font-weight:bold;\n  margin: 0;\n  padding: 0;\n  margin-top: 110px;\n  \n @media (min-width: 760px) {\n    font-size: 170px;\n }\n\n\n  ","\n"])),(function(n){return n.theme.mainColorPastel}),(function(n){return n.secondary&&Object(wn.c)(f||(f=Object(hn.a)(["\n\n     font-size: ",";\n     text-transform: uppercase;\n     margin-top: 0px;\n     position: relative;\n  \n  "])),(function(n){return n.theme.xxl}))})),Zn=wn.d.div(O||(O=Object(hn.a)(["\n  display: flex;\n  width: 100%;\n\n"]))),Dn=wn.d.div(w||(w=Object(hn.a)(["\nwidth: 25px;\nheight: 25px;\nborder-radius: 50%;\nbackground-color: ",";\nposition: absolute; \nright: -35px;\nbottom: 0.23em;\n"])),(function(n){return n.theme.mainColorGray})),Wn=wn.d.div(y||(y=Object(hn.a)(["\nwidth: 80%;\nheight: 2px;\nmargin:  0 auto;\nbackground-color: ",";\nmargin-top: 100px;\n"])),(function(n){return n.theme.mainColorGray})),Rn=wn.d.p(v||(v=Object(hn.a)(["\nfont-size: 12px;\n@media (min-width: 760px) {\n  font-size: 17px;\n  }\n"]))),Hn=function(){return Object(Sn.jsxs)(Bn,{id:"home",children:[Object(Sn.jsx)(Ln,{children:" he "}),Object(Sn.jsx)(Zn,{children:Object(Sn.jsxs)(Ln,{secondary:!0,children:[" llo ",Object(Sn.jsx)(Dn,{})," "]})}),Object(Sn.jsx)(Rn,{children:Object(Sn.jsx)(En.a,{string:"I am Martyna, I am junior front-end developer!",delay:80,cursor:"|"})}),Object(Sn.jsx)(Wn,{})]})},Jn=t.p+"static/media/myphoto.cdd13d4a.png",Yn=wn.d.h4(I||(I=Object(hn.a)([" \n  color: ",";\n  margin-bottom: 50px;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: ",";\n\n"])),(function(n){return n.theme.mainColorPastel}),(function(n){return n.theme.fontSize.title})),Vn=t(32),Un=t.n(Vn),Qn=(t(51),function(n){var e=n.children;return Object(dn.useEffect)((function(){Un.a.init({duration:1e3})}),[]),Object(Sn.jsx)(Yn,{"data-aos":"fade-right",children:e})}),Kn=wn.d.section(k||(k=Object(hn.a)(["\n margin-bottom: 100px;\n margin-top: 120px;\n color: black;\n font-size: ",";\n"])),(function(n){return n.theme.fontSize.text})),Xn=wn.d.div(C||(C=Object(hn.a)(["\nwidth: 33,33333%;\ndisplay:flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n"]))),qn=wn.d.p(S||(S=Object(hn.a)(["\nmargin: 15px 0 15px 0;\n"]))),$n=wn.d.img.attrs((function(n){return{src:n.src}}))(A||(A=Object(hn.a)(["\n display: flex;\n justify-content: center;\n margin-top: 50px;\n width: 270px; \n max-height: 350px;\n margin: 0 auto;\n background-size: contain;\n\n @media (min-width: 768px) {\n    height: 70%;\n }\n  "]))),ne=wn.d.p(z||(z=Object(hn.a)(["\npadding: 30px;\ntext-align: justify;\n\n\n@media (min-width: 900px) {\n      padding: 50px;\n      font-size: 17px;\n     }\n"]))),ee=wn.d.section(M||(M=Object(hn.a)(['\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 50vh;\n\n\n@media (min-width: 900px) {\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 0px 0px;\n    grid-template-areas:\n      ". . .";\n }\n\n']))),te=wn.d.p(N||(N=Object(hn.a)(["\n\nwidth: 100%;\ntext-align: center;\npadding: 10px;\nmargin-top: 80px;\nmax-width: 33,33%;\ncolor: ",";\nfont-size: ",";\n\n\n@media (min-width: 900px) {\n  font-size: 1.8rem;\n  padding: 20px;\n }\n\n"])),(function(n){return n.theme.mainColorGray}),(function(n){return n.theme.fontSize.textBig})),ie=wn.d.p(F||(F=Object(hn.a)(["\ntext-align: center;\nmargin: 0 auto;\nmargin-top:20px;\n\n@media (min-width: 900px) {\n  font-size: 17px;\n}\n\n"]))),oe=function(){return Object(Sn.jsx)(Sn.Fragment,{children:Object(Sn.jsxs)(Kn,{id:"aboutme",children:[Object(Sn.jsx)(Qn,{children:"About me"}),Object(Sn.jsx)($n,{src:Jn,alt:"my photo"}),Object(Sn.jsxs)(ne,{children:["Hi! I'm Martyna. 3 years ago I decided to change my life, I wanted to change my boring job... I became interested in creating websites and it was a 10 shot! I love doing it, but sometimes I hate it :P what is normal or nor ?:D when something doesn't work... but satisfaction when it starts working? wonderful feeling!",Object(Sn.jsx)(qn,{children:"I want to develop!\u30c4"}),Object(Sn.jsx)(ie,{children:"and so besides"})]}),Object(Sn.jsxs)(ee,{children:[Object(Sn.jsxs)(Xn,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--aboutMe",icon:On.k,secondary:!0}),Object(Sn.jsx)(te,{children:"I am mountain lover!"})]}),Object(Sn.jsxs)(Xn,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--aboutMe",icon:On.f,secondary:!0}),Object(Sn.jsx)(te,{children:"there is nothing better for me than exploring the world!"})]}),Object(Sn.jsxs)(Xn,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--aboutMe",icon:On.m,secondary:!0}),Object(Sn.jsx)(te,{children:"I can't live without pizza"})]})]})]})})},ce=wn.d.section(T||(T=Object(hn.a)(["\nwidth: 100%;\nfont-size: 20px;\nfont-weight:",";\ncolor: ",";\npadding: 10px;\nmargin-top: 10px;\n\n"])),(function(n){return n.theme.light}),(function(n){return n.theme.mainColorGray})),ae=wn.d.div(_||(_=Object(hn.a)(["\nmargin-top: 20px;\nmargin-bottom: 10px;\nfont-weight:lighter;\nfont-size: 17px;\n@media (max-width: 350px) {\n  font-size: 12px;\n }\n"]))),re=wn.d.div(G||(G=Object(hn.a)(["\nmargin-left: 36px;\nfont-weight: lighter;\ncolor: #FF9292;\nfont-size: 25px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n"]))),se=wn.d.div(P||(P=Object(hn.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items:center;\n"]))),de=wn.d.div(E||(E=Object(hn.a)(["\nmargin-top: 100px;\nwidth: 100%;\n\n@media (max-width: 1000px) {\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n  display: ","\n\n }\n\n"])),(function(n){return n.isVisible?"none":"block"})),le=wn.d.img.attrs((function(n){return{src:n.src}}))(B||(B=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 70px;\n  background-size: cover;\n  background-repeat: no-repeat, repeat;\n  background-position: center;\n  background-blend-mode: overlay;\n  overflow: hidden;\n  height: 400px;\n\n\n @media (max-width: 379px) {\n  width: 100%;\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n }\n\n @media (min-width: 380px) {\n  width: 100%;\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n }\n\n @media (min-width: 420px) {\n  width: 70%;\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n }\n @media (min-width: 820px) {\n  width: 50%;\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n }\n @media (min-width: 999px) {\n  margin: 0 auto;\n  height: 100%;\n  object-fit:cover;\n  object-position:50% 50%;\n }\n\n  "]))),pe=wn.d.p(L||(L=Object(hn.a)(["\nposition: absolute;\nbackground-color:#505050;\nwidth: 30px;\ntext-align: center;\ncolor:white;\nfont-size: 40px;\nline-height: 60px;\n"]))),me=wn.d.div(Z||(Z=Object(hn.a)(["\ndisplay: flex;\nheight: 60px;\n\n\n"]))),je=(wn.d.p(D||(D=Object(hn.a)(["\nmargin-top: 50px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\n\n\n"]))),wn.d.div(W||(W=Object(hn.a)(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\n"]))),wn.d.p(R||(R=Object(hn.a)(["\ncolor: black;\nmargin-bottom:50px;\nfont-size: 12px;\ncolor: #A9A9A9;\n"])))),he=wn.d.a(H||(H=Object(hn.a)(["\nmargin-top: 40px;\nfont-size: 20px;\ncolor: #A9A9A9;\ndisplay: flex;\nleft: 0;\njustify-content: center;\nalign-items: center;\nwidth: 20%;\npadding: 0 30 0 30px;\nborder: 2px solid #FF9292;\npadding: 5px;\ntext-decoration: none;\nbackground-color: white;\n\n&:hover {\n  color: #505050;\n\n}\n"]))),be=wn.d.a(J||(J=Object(hn.a)(["\nmargin-top: 40px;\nfont-size: 20px;\ncolor: #A9A9A9;\ndisplay: flex;\nleft: 0;\njustify-content: center;\nmargin-left: 10px;\npadding: 5px;\nborder: 2px solid #FF9292;\nalign-items: center;\nwidth: 20%;\ntext-decoration: none;\nbackground-color: white;\n\n\n\n&:hover {\n color: #505050;\n}\n"]))),xe=function(n){var e=n.id,t=n.name,i=n.description,o=n.live,c=n.urlcode,a=n.img,r=n.technologies,s=n.isVisible;return Object(Sn.jsx)(Sn.Fragment,{children:Object(Sn.jsxs)(de,{isVisible:s,children:[Object(Sn.jsxs)(me,{children:[Object(Sn.jsx)(pe,{children:e}),Object(Sn.jsx)(re,{children:t})]}),Object(Sn.jsx)(ae,{children:i}),Object(Sn.jsxs)(je,{children:["Technologies: ",r]}),Object(Sn.jsx)(le,{src:a,alt:"imgproject"}),Object(Sn.jsxs)(se,{children:[Object(Sn.jsxs)(he,{href:o,children:[" ","Live"]}),Object(Sn.jsxs)(be,{href:c,children:[" ","Code"," "]})]})]})})},ue=[{id:1,project_name:"Quiz",project_description:"It's a app - Quiz (European Capitals)",project_url_live:"https://6047c4a7b77cd309c8807c7c--quiz-martynakil.netlify.app/",project_url_code:"https://github.com/martynakiljan/QUIZ",project_img:t.p+"static/media/quiz.dce3bdab.png",technologies:"HTML, CSS , REACT, NPM, STYLED COMPONENTS"},{id:2,project_name:"Website",project_description:"My first commercial project for a client",project_url_live:"https://www.foos-events.com/",project_url_code:"https://github.com/martynakiljan/-my-first-serious-website",project_img:t.p+"static/media/website.39d025d7.png",technologies:"HTML, CSS , JAVA SCRIPT"},{id:3,project_name:"Bootstrap Website",project_description:"Boostrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.",project_url_live:"https://martynakiljan.github.io/-simple-website-BOOTSTRAP/bootstrap_website",project_url_code:"https://github.com/martynakiljan/-simple-website-BOOTSTRAP",project_img:t.p+"static/media/website2.fa0152ff.png",technologies:"HTML, CSS , BOOTSTRAP"},{id:4,project_name:"Currency wallet",project_description:"Currency wallet that calculates the potential profit or loss for the currencies held",project_url_live:"https://martynakiljan.github.io/currency-wallet-redux-/",project_url_code:"https://github.com/martynakiljan/currency-wallet-redux-",project_img:t.p+"static/media/CurrencyWallet.7e7e6c1a.png",technologies:"HTML, CSS, REACT, REDUX ,API, WEBPACK, NPM ,LOCAL STORAGE"},{id:5,project_name:"Kanban Board",project_description:"My task was to create an impregnation of the Kanban system",project_url_live:"https://6047afdec3560e19742c3562--happy-mccarthy-9ff3ff.netlify.app/",project_url_code:"https://github.com/martynakiljan/kanban-board-react",project_img:t.p+"static/media/kanban.2cb5f1b1.png",technologies:"HTML, CSS , REACT, NPM, LOCAL STORAGEE",isVisible:!0}],ge=function(){return Object(Sn.jsxs)(ce,{id:"projects",children:[Object(Sn.jsx)(Qn,{children:"My projects"}),ue.map((function(n){return Object(Sn.jsx)(xe,{id:n.id,name:n.project_name,description:n.project_description,live:n.project_url_live,urlcode:n.project_url_code,img:n.project_img,technologies:n.technologies,isVisible:n.isVisible},n)}))]})},fe=t(7),Oe=[{id:1,icon:fe.i,description:"I am using NPM"},{id:2,icon:fe.g,description:"I like programming in JavaScript and I'm still learning"},{id:3,icon:fe.b,description:"I know CSS well"},{id:4,icon:fe.d,description:"I like to use Github for version control"},{id:5,icon:fe.f,description:"I have HTML knowledge"},{id:6,icon:fe.j,description:"I develop my skills in React"},{id:7,icon:fe.a,description:"I did a few projects with Bootstrap"},{id:8,icon:On.b,description:"I am using Webpack"},{id:9,icon:On.j,description:"I can create a responsive website"},{id:10,isReactIcon:!0,description:"I started learning Redux"},{id:11,isAnotherPackageIcons:!0,description:"I style quite a deal thanks styled components"},{id:12,isReactIconTwo:!0,description:"I did some tests with JEST"}],we=[{id:13,icon:On.o,description:"If I undertake the task I try my best to finish it."},{id:14,icon:On.g,description:"I am ambitious. I learn a lot."},{id:15,icon:On.n,description:"I am persistent"},{id:16,icon:On.i,description:"I manage my time well"}],ye=t(21),ve=t(38),Ie=wn.d.section(Y||(Y=Object(hn.a)(["\n    min-height: 70vh;\n    align-items: center;\n    margin-top: 150px;\n\n"]))),ke=(Object(wn.d)(ve.a)(V||(V=Object(hn.a)(["\n    color: black;\n    font-size: 40px;\n\n"]))),wn.d.p(U||(U=Object(hn.a)(["\n   font-size: ",";\n   width: 100%;\n   text-align: center;\n   color: ",";\n   margin-bottom: 50px;\n   \n"])),(function(n){return n.theme.fontSize.text}),(function(n){return n.theme.mainColorGray}))),Ce=wn.d.div(Q||(Q=Object(hn.a)(['\n    position: relative;\n    margin-bottom: 50px;\n    display: grid;\n    place-items: center;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;\n    gap: 0px 0px;\n    grid-template-areas:\n        ". . ."\n        ". . ."\n        ". . ."\n        ". . ."\n;\n\n\n @media (min-width: 564px) {\n    display: grid;\n    margin-bottom: 100px;\n    place-items: center;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\n    align-items: start;\n    gap: 0px 0px;\n    grid-template-areas:\n        ". . . ."\n        ". . . ."\n        ". . . .";\n  }\n\n\n@media (min-width: 1024px) {\n    display: grid;\n    place-items: center;\n    margin-bottom: 50px;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 0.5fr 0.5fr;\n    gap: 0px 0px;\n    margin-bottom: 100px;\n    grid-template-areas:\n        ". . . . . ."\n        ". . . . . .";\n}\n\n\n\n']))),Se=wn.d.section(K||(K=Object(hn.a)(['\n display: grid;\n position: relative;\n place-items: center;\n margin-top: 100px;\n margin-bottom: 50px;\n grid-template-columns: 1fr 1fr 1fr 1fr;\n grid-template-rows: 0.5fr;\n gap: 0px 0px;\n grid-template-areas:\n     ". . . .";\n\n    @media (min-width: 1024px) {\n    margin-top: 150px;\n    width: 70%;\n    margin: 0 auto;\n    }\n\n']))),Ae=wn.d.p(X||(X=Object(hn.a)(["\n\n  ","\n\n  ",";\n      @media (min-width: 768px) {\n      font-size: 1.7rem;\n     }\n\n \n"])),(function(n){return n.active?"":"display : none"}),(function(n){return n.active&&Object(wn.c)(q||(q=Object(hn.a)(["\n      position: absolute;\n      text-align: center;\n      width: 100%;\n      padding: 10px 0 10px 0;\n      z-index: 50;\n      top: -45px;\n      margin-bottom: 60px;\n      color: ",";\n\n      "])),(function(n){return n.theme.mainColorPastel}))})),ze=function(){var n=Object(dn.useState)(0),e=Object(jn.a)(n,2),t=e[0],i=e[1],o=function(n){console.log("klik");var e=parseInt(n.currentTarget.id,0);e!==t&&i(e)};return Object(Sn.jsx)(Sn.Fragment,{children:Object(Sn.jsxs)(Ie,{id:"skills",children:[Object(Sn.jsx)(Qn,{children:"My hard skills"}),Object(Sn.jsx)(ke,{children:"click the icon!"}),Object(Sn.jsxs)(Ce,{children:[Oe.map((function(n){return n.isAnotherPackageIcons?Object(Sn.jsx)("button",{onMouseEnter:o,className:"btnIcon",active:t===n.id,description:n.description,id:n.id,children:Object(Sn.jsx)(ye.c,{size:"50px",margin:"5px",className:"iconFontAwesome--skill icon",fixedWidth:!0})}):n.isReactIcon?Object(Sn.jsx)("button",{onMouseEnter:o,className:"btnIcon",active:t===n.id,description:n.description,id:n.id,children:Object(Sn.jsx)(ye.b,{size:"35px",margin:"5px",className:"iconFontAwesome--skill icon",fixedWidth:!0})}):n.isReactIconTwo?Object(Sn.jsx)("button",{onMouseEnter:o,className:"btnIcon",active:t===n.id,description:n.description,id:n.id,children:Object(Sn.jsx)(ye.a,{size:"35px",margin:"5px",className:"iconFontAwesome--skill icon",fixedWidth:!0})}):Object(Sn.jsx)("button",{onMouseEnter:o,className:"btnIcon",active:t===n.id,description:n.description,id:n.id,children:Object(Sn.jsx)(fn.a,{icon:n.icon,size:"20px",className:"iconFontAwesome--skill icon",fixedWidth:!0})})})),Oe.map((function(n){return Object(Sn.jsx)(Ae,{active:t===n.id,content:n.description,children:n.description})}))]}),Object(Sn.jsx)(Qn,{children:"My soft skills"}),Object(Sn.jsxs)(Se,{children:[we.map((function(n){return Object(Sn.jsx)("button",{className:"btnIcon--soft",onMouseEnter:o,active:t===n.id,description:n.description,id:n.id,children:Object(Sn.jsx)(fn.a,{icon:n.icon,className:"iconFontAwesome--skill",fixedWidth:!0})})})),we.map((function(n){return Object(Sn.jsx)(Ae,{active:t===n.id,content:n.description,children:n.description})}))]})]})})},Me=wn.d.h4($||($=Object(hn.a)(["\nwidth: 100%;\ntext-align: center;\nmargin-top: 60px;\npadding: 10px;\nfont-weight: lighter;\ncolor: ",";\nfont-size: ",";\n\n"])),(function(n){return n.theme.mainColorGray}),(function(n){return n.theme.fontSize.text})),Ne=wn.d.form(nn||(nn=Object(hn.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\nalign-items: center;\nwidth: 100%;\nmax-width: 600px;\nmin-height: 400px;\nmargin: 0 auto;\npadding: 20px 0;\nmargin-top: 100px;\nmargin-bottom: 50px;\n"]))),Fe=wn.d.section(en||(en=Object(hn.a)(["\nwidth: 100%;\nmargin-top: 100px;\n\n@media (min-width: 1024px) {\n      margin-top: 150px;\n     }\n"]))),Te=wn.d.label(tn||(tn=Object(hn.a)(["\ndisplay: block;\npadding: 20px 0 5px;\nwidth: 80%;\nfont-size: 20px;\nfont-size: ",";\ncolor: ",";\n"])),(function(n){return n.theme.fontSize.text}),(function(n){return n.theme.mainColorGray})),_e=wn.d.input(on||(on=Object(hn.a)(["\n    display: block;\n    padding: 5px 10px;\n    min-width: 80%;\n    max-height: 80px;\n    border: 2px solid transparent;\n    border-bottom: 2px solid #AAA9A9;\n    background: none;\n    font-size: 1rem;\n    color: ",";\n"])),(function(n){return n.theme.mainColorGray})),Ge=wn.d.textarea(cn||(cn=Object(hn.a)(["\n    display: block;\n    padding: 5px 10px;\n    min-width: 80%;\n    max-width: 80%;\n    color: ",";\n    border: 2px solid transparent;\n    border-bottom: 2px solid #AAA9A9;\n    background: none;\n    font-size: 1rem;\n    font-family: Monospace;\n    min-height: 85px;\n"])),(function(n){return n.theme.mainColorGray})),Pe=wn.d.div(an||(an=Object(hn.a)(["\n\n   display: flex;\n   justify-content: space-around;\n   width: 100%;\n   padding: 10px;\n   align-items: center;\n   padding: 30px;\n   height: 100%;\n   font-size: ",";  \n"])),(function(n){return n.theme.fontSize.text})),Ee=wn.d.a(rn||(rn=Object(hn.a)(["\n  color: black;\n"]))),Be=wn.d.button(sn||(sn=Object(hn.a)(["\n margin-top: 30px;\n font-family: 'Cutive Mono', monospace;\n background-color: white;\n width: 100px;\n height: 30px;\n border: 2px solid  #FF9292;\n\n  &:hover {\n    background-color: lightgray;\n    border: none;\n    color: white;\n  }\n\n"]))),Le=t(20),Ze=t(27),De=t(35),We=t.n(De);var Re=function(n){var e=Object(dn.useState)({name:"",email:"",textarea:""}),t=Object(jn.a)(e,2),i=t[0],o=t[1],c=Object(dn.useState)({}),a=Object(jn.a)(c,2),r=a[0],s=a[1];return{handleChange:function(n){var e=n.target,t=e.name,c=e.value;o(Object(Ze.a)(Object(Ze.a)({},i),{},Object(Le.a)({},t,c)))},handleSubmit:function(e){e.preventDefault();var t=n(i);s(t),0===t.length&&(function(n){return We.a.sendForm("service_7bzr1bp","template_v2uwhrp",n.target,"user_jBHGH1YMaidwVPHhS30WC")}(e).then((function(n){console.log(n),e.target.result()}),(function(n){console.log(n.text)})),window.alert("Thanks for your message! :)"),o({name:"",email:"",textarea:""}))},values:i,errors:r}};function He(n){var e={length:0};return n.name.trim()?n.name.length<3&&(e.name="The first name usually has more than 2 letters",e.length+=1):(e.length+=1,e.name="Name is required!"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid",e.length+=1):(e.email="Email required!",e.length+=1),n.textarea||(e.textarea="Message is required!",e.length+=1),e}var Je,Ye,Ve,Ue,Qe,Ke=function(){var n=Re(He),e=n.handleChange,t=n.values,i=n.handleSubmit,o=n.errors;return Object(Sn.jsxs)(Ne,{onSubmit:i,children:[Object(Sn.jsxs)(Te,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--form",icon:On.l,secondary:!0}),"Name:"]}),Object(Sn.jsx)(_e,{id:"name",type:"name",name:"name",value:t.name,onChange:e}),o.name&&Object(Sn.jsx)("p",{className:"error",children:o.name}),Object(Sn.jsxs)(Te,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--form",icon:On.a}),"Email:"]}),Object(Sn.jsx)(_e,{id:"email",type:"email",name:"email",value:t.email,onChange:e,className:"input"}),o.email&&Object(Sn.jsx)("p",{className:"error",children:o.email}),Object(Sn.jsxs)(Te,{children:[Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--form",icon:On.d,secondary:!0}),"Your message:"]}),Object(Sn.jsx)(Ge,{id:"textarea",type:"textarea",name:"textarea",value:t.textarea,onChange:e,className:"input"}),o.textarea&&Object(Sn.jsx)("p",{className:"error",children:o.textarea}),Object(Sn.jsx)(Be,{onSubmit:i,children:"send!"})]})},Xe=function(){return Object(Sn.jsxs)(Fe,{id:"contact",children:[Object(Sn.jsx)(Qn,{children:"Contact"}),Object(Sn.jsx)(Me,{children:"I will be very pleased if you contact me! "}),Object(Sn.jsx)(Ke,{}),Object(Sn.jsx)(Me,{children:" or "}),Object(Sn.jsxs)(Pe,{children:[Object(Sn.jsx)(Ee,{href:"https://github.com/martynakiljan",children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--contact",icon:fe.e,secondary:!0})}),Object(Sn.jsx)(Ee,{href:"https://www.linkedin.com/in/martyna-kiljan-03a7a71a9/",children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--contact",icon:fe.h,secondary:!0})}),Object(Sn.jsx)(Ee,{href:"https://www.facebook.com/martyna.kiljan/",children:Object(Sn.jsx)(fn.a,{className:"iconFontAwesome--contact",icon:fe.c,secondary:!0})})]})]})},qe=wn.d.footer(Je||(Je=Object(hn.a)(["\n    background-color: #FF9292;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    color: ",";\n    min-height: 10vh;\n"])),(function(n){return n.theme.mainColorGray})),$e=wn.d.p(Ye||(Ye=Object(hn.a)(["\nfont-size: 17px;\n\n@media (max-width: 350px) {\n  font-size: 13px;\n }\n \n"]))),nt=function(){return Object(Sn.jsx)(qe,{children:Object(Sn.jsx)($e,{children:"Made with \u2665 by  Martyna. 2021"})})},et=wn.d.section(Ve||(Ve=Object(hn.a)(["\nmax-width: 1050px;\nmargin: 0 auto;\nbox-shadow: 0px 0px 15px lightgray;\nbackground-color: white;\n\n"]))),tt=function(n){Object(un.a)(t,n);var e=Object(gn.a)(t);function t(){return Object(bn.a)(this,t),e.apply(this,arguments)}return Object(xn.a)(t,[{key:"render",value:function(){return Object(Sn.jsxs)(et,{children:[Object(Sn.jsx)(Pn,{}),Object(Sn.jsx)(Hn,{}),Object(Sn.jsx)(oe,{}),Object(Sn.jsx)(ge,{}),Object(Sn.jsx)(ze,{}),Object(Sn.jsx)(Xe,{}),Object(Sn.jsx)(nt,{})]})}}]),t}(ln.a.Component),it=t(24),ot={mainColorGray:"#505050",mainColorPastel:"#FF9292",light:300,bold:600,fontSize:{text:"1.4rem",textBig:"1.5rem",title:"3.4rem",number:"6rem"}},ct=Object(wn.b)(Ue||(Ue=Object(hn.a)(["\n  @import url(\"https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap\");\n  \n \n\n  \n  html {\n    font-size: 62.5%; \n    scroll-behavior: smooth;\n    font-family: 'Cutive Mono', monospace;;\n  }\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.6rem;\n    font-family: 'Cutive Mono', monospace;\n    background:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjYxIiBoZWlnaHQ9IjYxIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgwKSAiPjxyZWN0IGlkPSJwYXR0ZXJuLWJhY2tncm91bmQiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwxKSI+PC9yZWN0PiA8Y2lyY2xlIGZpbGw9InJnYmEoMjU0LCAyMTUsIDIxNSwxKSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0icmdiYSgyNTIsIDEyOSwgMTI5LDEpIiBjeD0iMCIgY3k9IjQwIiByPSIwIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoMjUyLCAxMjksIDEyOSwxKSIgY3g9IjQwIiBjeT0iMCIgcj0iMCI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDI1MiwgMTI5LCAxMjksMSkiIGN4PSIwIiBjeT0iMCIgcj0iMCI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDI1MiwgMTI5LCAxMjksMSkiIGN4PSI0MCIgY3k9IjQwIiByPSIwIj48L2NpcmNsZT48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=\")\n\n  \n  }\n"]))),at=t(37),rt=t.n(at),st=t(36),dt=t.n(st),lt=Object(it.css)(Qe||(Qe=Object(hn.a)(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n"])));var pt=function(){var n=Object(dn.useState)(!1),e=Object(jn.a)(n,2),t=e[0],i=e[1];return Object(dn.useEffect)((function(){i(!0),setTimeout((function(){i(!1)}),1e3)}),[]),Object(Sn.jsx)(Sn.Fragment,{children:t?Object(Sn.jsx)(rt.a,{color:"#FF9292",loading:t,size:10,css:lt}):Object(Sn.jsxs)(Sn.Fragment,{children:[Object(Sn.jsx)(ct,{}),Object(Sn.jsxs)(wn.a,{theme:ot,children:[Object(Sn.jsx)(dt.a,{innerSize:8,outerSize:8,color:"193, 11, 111",outerAlpha:.2,innerScale:.7,outerScale:5}),Object(Sn.jsx)(tt,{})]})]})})},mt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),c(n),a(n)}))};mn.a.render(Object(Sn.jsx)(ln.a.StrictMode,{children:Object(Sn.jsx)(pt,{})}),document.getElementById("root")),mt()}},[[61,1,2]]]);
//# sourceMappingURL=main.dd9652c7.chunk.js.map