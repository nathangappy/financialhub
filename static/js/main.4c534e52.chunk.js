(this.webpackJsonpfinancehub=this.webpackJsonpfinancehub||[]).push([[0],{43:function(e,t,a){e.exports=a(93)},48:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),l=a.n(r),o=(a(48),a(16)),i=a(8),s=a.n(i),u=a(15),h=a(3),m=a(4),p=a(6),d=a(5),f=a(7),b=a(13),E=a.n(b),g=a(23),v=a.n(g);a(66),a(68);v.a.initializeApp({apiKey:"AIzaSyAz40e4QBJ6drkc1_2PYVK79zeg5XYWJ-Q",authDomain:"financehub0.firebaseapp.com",databaseURL:"https://financehub0.firebaseio.com",projectId:"financehub0",storageBucket:"financehub0.appspot.com",messagingSenderId:"7120312129",appId:"1:7120312129:web:129016e6a7a4ec4cd0f3c0"});var k=v.a,S=(a(70),a(11)),y=(a(71),function(e){var t=e.mobileMenu,a=e.handleMobileClick,n=e.handleSignout;return c.a.createElement("ul",{className:"open"===t?"links-open":"links-closed"},c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/",className:"navLink"},"Home")),c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/portfolio",className:"navLink"},"Portfolio")),c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/",className:"navLink",onClick:n},"Sign Out")),c.a.createElement("li",{onClick:a},c.a.createElement("i",{className:"fas fa-minus-circle",onClick:a})))}),w=(a(76),function(e){var t=e.mobileMenu,a=e.handleMobileClick;return c.a.createElement("ul",{className:"open"===t?"links-open":"links-closed"},c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/",className:"navLink"},"Home")),c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/dashboard",className:"navLink"},"Dashboard")),c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/signin",className:"navLink"},"Sign In")),c.a.createElement("li",{onClick:a},c.a.createElement(S.b,{to:"/signup",className:"navLink"},"Sign Up")),c.a.createElement("li",{onClick:a},c.a.createElement("i",{className:"fas fa-minus-circle",onClick:a})))}),C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleSignout=function(){k.auth().signOut().then((function(){return console.log("signed out")})).catch((function(e){return console.log(e)}))},e.handleMobileClick=function(){e.setState({openSlideMenu:!e.state.openSlideMenu})},e.state={isLoggedIn:!1,openSlideMenu:!1},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.auth().onAuthStateChanged((function(t){t?e.setState({isLoggedIn:!0}):e.setState({isLoggedIn:!1})}))}},{key:"render",value:function(){var e=this.state.openSlideMenu;return e=!0===e?"open":"close",c.a.createElement("header",{className:"navigation"},c.a.createElement("h1",null,"FinanceHub"),this.state.isLoggedIn?c.a.createElement(y,{handleSignout:this.handleSignout,mobileMenu:e,handleMobileClick:this.handleMobileClick}):c.a.createElement(w,{mobileMenu:e,handleMobileClick:this.handleMobileClick}),c.a.createElement("i",{className:"fas fa-bars",onClick:this.handleMobileClick}))}}]),t}(n.Component),O=(a(77),a(78),function(){return c.a.createElement("div",{className:"home-hero"},c.a.createElement("h2",null,"Market Headlines"))}),j=(a(79),function(e){var t=e.newsList.map((function(e,t){return c.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",tabIndex:t},c.a.createElement("li",{key:e.url},c.a.createElement("div",{className:"story-image"},c.a.createElement("img",{src:e.urlToImage,alt:""})),c.a.createElement("div",{className:"story-info"},c.a.createElement("h3",null,e.title))))}));return c.a.createElement("div",{className:"homenews"},c.a.createElement("ul",null,t))}),N=function(e){var t=e.newsList;return c.a.createElement("div",{className:"home-container"},c.a.createElement(O,null),c.a.createElement(j,{newsList:t}))},D=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={headlineStories:[]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=50e00636604e42f89129053042aeaafc");case 2:t=e.sent,this.setState({headlineStories:t.data.articles});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"homepage"},c.a.createElement(C,{user:this.props.user}),c.a.createElement(N,{newsList:this.state.headlineStories}))}}]),t}(n.Component),M=a(18),x=(a(80),a(81),a(82),a(83),a(42)),L=a.n(x),F=(a(86),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).chartRef=c.a.createRef(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d");new L.a(e,{type:"line",data:{labels:this.props.labels,datasets:[{data:this.props.data,fill:!1,borderColor:"positive"===this.props.status?"green":"red"}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1}}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"stock-chart"},c.a.createElement("canvas",{id:"myChart",ref:this.chartRef,height:"300","aria-label":"Hello ARIA World",role:"img"},c.a.createElement("p",null,"Hello Aria. The Chart seems to be malfunctioning")))}}]),t}(n.Component)),I=function(e){var t,a=e.globalQuote,n=e.chartData,r=e.labels;return a&&(t=parseFloat(a["10. change percent"]).toFixed(2)>0?"positive":"negative"),c.a.createElement("div",{className:"company-info"},a?c.a.createElement("div",{className:"quote-info"},c.a.createElement("h3",null,a["01. symbol"]||null),c.a.createElement("p",null,parseFloat(a["05. price"]).toFixed(2),"USD"),c.a.createElement("p",{className:t},"(".concat(parseFloat(a["10. change percent"]).toFixed(2),")%")),c.a.createElement("ul",null,c.a.createElement("li",null,"Open: ",parseFloat(a["02. open"]).toFixed(2)),c.a.createElement("li",null,"High: ",parseFloat(a["03. high"]).toFixed(2)),c.a.createElement("li",null,"Low: ",parseFloat(a["04. low"]).toFixed(2)),c.a.createElement("li",null,"Prev Close:"," ",parseFloat(a["08. previous close"]).toFixed(2)))):null,n.length>0&&r.length>0?c.a.createElement(F,{data:n,labels:r,status:t}):null)},T=(a(87),function(e){var t=e.stockNews.map((function(e){return c.a.createElement("li",{key:"".concat(e.news_url," + ").concat(Math.random())},c.a.createElement("a",{href:"".concat(e.news_url),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"".concat(e.image_url),alt:""}),c.a.createElement("p",null,e.title)))}));return c.a.createElement("div",{className:"company-news"},c.a.createElement("div",{className:"company-news-group"},c.a.createElement("ul",null,t)))}),R=function(e){var t=[],a=[];for(var n in e.chartData)a.push(n),t.push(parseFloat(e.chartData[n]["4. close"]));return t=t.filter((function(e,t){return t<10})),a=a.filter((function(e,t){return t<10})),t=t.reverse(),a=a.reverse(),c.a.createElement("main",{className:"stockinfo"},c.a.createElement(I,{globalQuote:e.globalQuote,chartData:t,labels:a}),c.a.createElement(T,{stockNews:e.stockNews}))},Q=(a(88),a(89),function(e){var t=e.companyMatches.map((function(e){return c.a.createElement("li",{key:e["1. symbol"]},c.a.createElement("p",null,e["1. symbol"]," - ",e["2. name"]))}));return c.a.createElement("div",{className:"searchbar"},c.a.createElement("form",{action:"",onSubmit:e.handleTickerSearch,className:"tickerSearch"},c.a.createElement("label",{htmlFor:"tickerSearch"},"Get Financial Data"),c.a.createElement("input",{type:"text",onChange:e.handleSearchChange,value:e.tickerSearch,name:"tickerSearch"}),c.a.createElement("button",null,"Get Info")),c.a.createElement("form",{action:"",onSubmit:e.handleCompanyLookup,className:"companySearch"},c.a.createElement("label",{htmlFor:"companySearch"},"Search for Company Symbol"),c.a.createElement("input",{type:"text",onChange:e.handleSearchChange,value:e.companySearch,name:"companySearch"}),c.a.createElement("button",null,"Find Symbol")),c.a.createElement("ul",null,t))}),A=(a(90),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={sectors:[]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://www.alphavantage.co/query?function=SECTOR&apikey=V18JBVR8U7KTDD7W");case 3:return t=e.sent,e.next=6,Object.entries(t.data["Rank F: Year-to-Date (YTD) Performance"]||null);case 6:a=e.sent,this.setState({sectors:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.sectors.map((function(e){var t=e[1].replace(/%/g,"");return t=parseInt(t.replace(/\./g,"")),c.a.createElement("li",{key:e[0]},e[0]," -"," ",c.a.createElement("span",{className:"".concat(t)>0?"positive":"negative"},e[1]))}));return c.a.createElement("div",{className:"sectors"},c.a.createElement("h3",null,"Sectors - YTD"),c.a.createElement("ul",null,e))}}]),t}(n.Component)),U=function(e){return c.a.createElement("div",{className:"dashboard-side"},c.a.createElement("h3",null,"Financial Hub Search Center"),c.a.createElement(Q,{tickerSearch:e.tickerSearch,companySearch:e.companySearch,companyMatches:e.companyMatches,handleSearchChange:e.handleSearchChange,handleTickerSearch:e.handleTickerSearch,handleCompanyLookup:e.handleCompanyLookup}),c.a.createElement(A,null))},B=function(e){return c.a.createElement("div",{className:"dashboard-container"},c.a.createElement(R,{globalQuote:e.globalQuote,stockNews:e.stockNews,chartData:e.chartData}),c.a.createElement(U,{tickerSearch:e.tickerSearch,companySearch:e.companySearch,companyMatches:e.companyMatches,handleSearchChange:e.handleSearchChange,handleTickerSearch:e.handleTickerSearch,handleCompanyLookup:e.handleCompanyLookup}))},V=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleTickerSearch=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({chartData:{}}),t.prev=2,n=[],t.next=6,E.a.get("https://stocknewsapi.com/api/v1?tickers=".concat(e.state.tickerSearch.toUpperCase(),"&items=9&token=j5kxgoilv3tyac5is1rcowzhm1bgacherychyco2"));case 6:return t.sent.data.data.forEach((function(e){return n.push(e)})),e.setState({stockNews:n}),t.next=11,E.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(e.state.tickerSearch.toUpperCase(),"&apikey=V18JBVR8U7KTDD7W"));case 11:return c=t.sent,e.setState({globalQuote:c.data["Global Quote"]}),t.next=15,E.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(e.state.tickerSearch.toUpperCase(),"&apikey=V18JBVR8U7KTDD7W"));case 15:r=t.sent,e.setState({chartData:r.data["Time Series (Daily)"]}),e.setState({tickerSearch:""}),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[2,20]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSearchChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.handleCompanyLookup=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n=[],t.next=5,E.a.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e.state.companySearch,"&apikey=V18JBVR8U7KTDD7W"));case 5:t.sent.data.bestMatches.forEach((function(e){return n.push(e)})),e.setState({companyMatches:n}),e.setState({companySearch:""}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e.state={tickerSearch:"",companySearch:"",globalQuote:{},chartData:{},stockNews:[],companyMatches:[]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({globalQuote:{},chartData:{}}),E.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=V18JBVR8U7KTDD7W").then((function(t){return e.setState({globalQuote:t.data["Global Quote"]})})).catch((function(t){e.props.history.push("/dashboard")})),E.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=V18JBVR8U7KTDD7W").then((function(t){e.setState({chartData:t.data["Time Series (Daily)"]})})).catch((function(e){return console.log("error getting chart data")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"dashboard"},c.a.createElement(C,null),c.a.createElement(B,{tickerSearch:this.state.tickerSearch,companySearch:this.state.companySearch,globalQuote:this.state.globalQuote,chartData:this.state.chartData,stockNews:this.state.stockNews,companyMatches:this.state.companyMatches,handleSearchChange:this.handleSearchChange,handleTickerSearch:this.handleTickerSearch,handleCompanyLookup:this.handleCompanyLookup}))}}]),t}(n.Component),_=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("h1",null,"Portfolio"))}}]),t}(n.Component),J=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("h1",null,"Community"))}}]),t}(n.Component),W=(a(91),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleSignupChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.handleSignupSubmit=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n=e.state,c=n.email,r=n.password,t.next=5,k.auth().createUserWithEmailAndPassword(c,r);case 5:e.setState({successfulSignup:!0}),e.setState({email:"",password:""}),e.props.history.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:"",successfulSignup:!1},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("div",{className:"signup"},c.a.createElement("div",{className:"signup-form"},c.a.createElement("h1",null,"Join our community"),c.a.createElement("form",{action:"",onSubmit:this.handleSignupSubmit,autoComplete:"off"},c.a.createElement("label",{htmlFor:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleSignupChange}),c.a.createElement("label",{htmlFor:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleSignupChange}),c.a.createElement("button",null,"Become a Member"))),this.state.successfulSignup?c.a.createElement("div",{className:"signup-feedback"},c.a.createElement("i",{class:"far fa-check-circle"})):null))}}]),t}(n.Component)),H=(a(92),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleSignInChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.handleSignInSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,c=a.password;k.auth().signInWithEmailAndPassword(n,c).then(e.setState({successfulLogin:!0})).then((function(){return e.props.history.push("/")})).then(e.setState({email:"",password:""})).catch((function(e){return console.log(e)}))},e.state={email:"",password:"",successfulLogin:!1},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement("div",{className:"signin"},c.a.createElement("div",{className:"signin-wrapper"},c.a.createElement("div",{className:"signin-form"},c.a.createElement("h1",null,"Sign in to your account"),c.a.createElement("form",{action:"",onSubmit:this.handleSignInSubmit,autoComplete:"off"},c.a.createElement("label",{htmlFor:"email"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleSignInChange}),c.a.createElement("label",{htmlFor:"password"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleSignInChange}),c.a.createElement("button",null,"Sign In"))),this.state.successfulLogin?c.a.createElement("div",{className:"signup-feedback"},c.a.createElement("i",{class:"far fa-check-circle"})):null)))}}]),t}(n.Component)),K=function(){return c.a.createElement("div",null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:D}),c.a.createElement(o.a,{exact:!0,path:"/dashboard",component:V}),c.a.createElement(o.a,{exact:!0,path:"/portfolio",component:_}),c.a.createElement(o.a,{exact:!0,path:"/community",component:J}),c.a.createElement(o.a,{exact:!0,path:"/signup",component:W}),c.a.createElement(o.a,{exact:!0,path:"/signin",component:H})))};l.a.render(c.a.createElement(S.a,{basename:window.location.pathname||""},c.a.createElement(K,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4c534e52.chunk.js.map