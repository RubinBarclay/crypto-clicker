(this["webpackJsonpcrypto-clicker-v2"]=this["webpackJsonpcrypto-clicker-v2"]||[]).push([[0],{11:function(e,t,i){e.exports={notification:"Notification_notification__2M3WQ",coin:"Notification_coin__1zTUx",textGreen:"Notification_textGreen__H-EWy",slideUp:"Notification_slideUp__3ygXr",textRed:"Notification_textRed__17t22",slideDown:"Notification_slideDown__cxshl"}},19:function(e,t,i){e.exports={MiningRig:"MiningRig_MiningRig__3HM3d"}},20:function(e,t,i){e.exports={Power:"Power_Power__1vecw"}},21:function(e,t,i){e.exports={Listing:"Listing_Listing__2N6-_"}},22:function(e,t,i){e.exports={Shop:"Shop_Shop__35p-T"}},23:function(e,t,i){e.exports={Wallet:"Wallet_Wallet__vmW6i"}},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i(9),n=i.n(a),c=i(5),l=i(3),r=i(18),o=i(2),u=i(6),p=i(4),v=i.n(p),f="FETCH_LISTINGS_SUCCESS",d="FETCH_LISTINGS_FAIL",b="ACTIVE_MINING",m="PASSIVE_MINING",j="ELECTRICITY_BILL",g="UPDATE_POWER",h="BUY_ITEM",w="REPORT_PROFITS",O=[{name:"Half smoked cigarette",desc:"The nicotine makes your clicking slightly more efficient",price:.25,buffs:{active:2.5,passive:1},levelReq:1},{name:"A whole cigarette",desc:"Yay, more nicotine!",price:.5,buffs:{active:2,passive:1},levelReq:1},{name:"Strange russian energy drink",desc:"Contains more than just caffiene...",price:1,buffs:{active:2.5,passive:1},levelReq:1},{name:"Garbage dump GPU",desc:"Sold to you by a homeless guy",price:4,watts:20,buffs:{active:1.5,passive:3.5},levelReq:1},{name:"Early 00's CPU",desc:"It was considered good 20 years ago",price:7,watts:25,buffs:{active:1.5,passive:2.5},levelReq:1},{name:"Ritalin\xae 30mg",desc:"Need. More. Clicks...",price:10,buffs:{active:1.5,passive:1},levelReq:1},{name:"Dell Dimensions 8200",desc:"About time for a upgrade",price:20,watts:30,buffs:{active:2,passive:3},levelReq:1,levelUp:2},{name:"8 year old GPU",desc:"Yikes, costs more than your computer",price:38,watts:15,buffs:{active:1.5,passive:2},levelReq:2},{name:"Handfull of Adderall",desc:"The Ritalin is wearing off, need something stronger",price:50,buffs:{active:1.65,passive:1},levelReq:1},{name:"Craigslist gaming PC",desc:"God bless craigslist",price:100,watts:40,buffs:{active:1.5,passive:3},levelReq:2,levelUp:3},{name:"Last last last gen GPU",desc:"Not new, nor old. Aged?",price:120,watts:80,buffs:{active:1.25,passive:2.25},levelReq:3},{name:"Dual GPUs",desc:"Two is better than one",price:120,watts:80,buffs:{active:1.25,passive:2.25},levelReq:3},{name:"1g of white",desc:"You're not proud of it, but you need those clicks",price:100,buffs:{active:1.5,passive:1},levelReq:3},{name:"Your cousins gaming PC",desc:"He likes you, so he cuts you a neat deal",price:350,watts:200,buffs:{active:1.25,passive:2},levelReq:3,levelUp:4},{name:"Last gen GPU",desc:"Straight off the store shelf",price:480,watts:200,buffs:{active:1.125,passive:1.5},levelReq:4},{name:"Dual GPUs",desc:"So much power!",price:480,watts:200,buffs:{active:1.125,passive:1.5},levelReq:4},{name:"A very large bag of ice",desc:"It's crystal meth. Sleep is for the weak",price:800,buffs:{active:1.5,passive:1},levelReq:4},{name:"Designated Mining Rig",desc:"A money printing machine",price:1800,watts:800,buffs:{active:1.25,passive:2},levelReq:4,levelUp:5},{name:"Next gen GPU",desc:"You just gotta have it",price:1050,watts:320,buffs:{active:1.125,passive:1.5},levelReq:5},{name:"Next gen GPU",desc:"Another one",price:1050,watts:320,buffs:{active:1.125,passive:1.5},levelReq:5},{name:"Next gen GPU",desc:"Another 'nother one",price:1050,watts:320,buffs:{active:1.125,passive:1.5},levelReq:5},{name:"Next gen GPU",desc:"Another 'nother 'nother one",price:1050,watts:320,buffs:{active:1.125,passive:1.5},levelReq:5},{name:"Solar panels",desc:"Gotta do something about that electricity bill",price:3800,rate:.01,buffs:{active:1,passive:1},levelReq:5},{name:"Mining Rig v2",desc:"Up the operation a bit",price:6200,watts:1e3,buffs:{active:1.25,passive:1.5},levelReq:5,levelUp:6},{name:"Yet another GPU",desc:"Gotta fill up those slots",price:1050,watts:320,buffs:{active:1.125,passive:1.25},levelReq:6},{name:"Yet another GPU",desc:"One more can't hurt",price:1050,watts:320,buffs:{active:1.125,passive:1.25},levelReq:6},{name:"MiningRig v3",desc:"Yeah now we're talking business",price:12e3,watts:1200,buffs:{active:1.25,passive:1.25},levelReq:6,levelUp:7},{name:"A pair of new GPUs",desc:"Hey you've got money to spend",price:2100,watts:640,buffs:{active:1.125,passive:1.15},levelReq:7},{name:"A pair of new GPUs",desc:"Admit it, you like spending money",price:2100,watts:640,buffs:{active:1.125,passive:1.15},levelReq:7},{name:"A pair of new GPUs",desc:"Mmmmm money in the making",price:2100,watts:640,buffs:{active:1.125,passive:1.15},levelReq:7},{name:"A pair of new GPUs",desc:"Can't get enough of these things",price:2100,watts:640,buffs:{active:1.125,passive:1.15},levelReq:7},{name:"ASIC Miner Setup",desc:"Now you're in real deep",price:18e3,watts:2e3,buffs:{active:1.25,passive:1.5},levelReq:7,levelUp:8},{name:"Another ASIC",desc:"If you're gonna do this you better do it right",price:8e3,watts:1e3,buffs:{active:1.15,passive:1.25},levelReq:8},{name:"Double up on ASIC power",desc:"Double you're machine count",price:16e3,watts:4e3,buffs:{active:1.15,passive:1.5},levelReq:8},{name:"Backyard wind turbine",desc:"Gotta counter that electricity bill",price:2e4,rate:.01,buffs:{active:1,passive:1},levelReq:8},{name:"Double up on double ASIC power",desc:"Can't stop. Won't stop.",price:32e3,watts:8e3,buffs:{active:1.15,passive:1.5},levelReq:8},{name:"Crypto Mining Farm",desc:"It has more ASIC slots than you can count",price:1e5,watts:32e3,buffs:{active:1.5,passive:2},levelReq:8,levelUp:9},{name:"A couple more wind turbines",desc:"Go green right?",price:15e4,rate:.01,buffs:{active:1,passive:1},levelReq:9},{name:"Shopping cart full of ASICs",desc:"There's at least 20 in here",price:185e3,watts:2e4,buffs:{active:1.5,passive:1.25},levelReq:9},{name:"2 shopping carts full of ASICs",desc:"SO MANY MACHINES!",price:37e4,watts:4e4,buffs:{active:2,passive:1.25},levelReq:9},{name:"A hydropower dam",desc:"The river next to you're house is getting a makeover",price:14e5,rate:.02,buffs:{active:1,passive:1},levelReq:9},{name:"A quantum computer",desc:"Ready to become a god?",price:1e7,watts:1e5,buffs:{active:3,passive:3},levelReq:9,levelUp:10}];O.forEach((function(e){e.key=O.indexOf(e)}));var x=O,R={level:1,totalProfits:new v.a(0),newProfits:new v.a(0),funds:new v.a(0),activeRate:new v.a(10),passiveRate:new v.a(2.5),coins:{BTC:new v.a(0)},price:{},items:Object(u.a)(x)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,i=function(t){return e.newProfits.plus(t.div(1e8).times(e.price.BTC))},s=function(t){var i=t.div(1e8);return e.coins.BTC.plus(i).times(e.price.BTC)},a=function(e,t){var i=t.div(1e8);return e.plus(i)};switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{newProfits:i(e.activeRate),funds:s(e.activeRate),coins:Object(o.a)(Object(o.a)({},e.coins),{},{BTC:a(e.coins.BTC,e.activeRate)}),price:Object(o.a)({},e.price),items:Object(u.a)(e.items)});case m:return Object(o.a)(Object(o.a)({},e),{},{newProfits:i(e.passiveRate),funds:s(e.passiveRate),coins:Object(o.a)(Object(o.a)({},e.coins),{},{BTC:a(e.coins.BTC,e.passiveRate)}),price:Object(o.a)({},e.price),items:Object(u.a)(e.items)});case j:return Object(o.a)(Object(o.a)({},e),{},{newProfits:e.newProfits.minus(t.cost),funds:e.funds.minus(t.cost),coins:Object(o.a)(Object(o.a)({},e.coins),{},{BTC:e.coins.BTC.minus(t.cost.div(e.price.BTC))}),price:Object(o.a)({},e.price),items:Object(u.a)(e.items)});case h:return Object(o.a)(Object(o.a)({},e),{},{newProfits:e.newProfits.minus(t.price),level:t.level?t.level:e.level,funds:e.funds.minus(t.price),activeRate:e.activeRate.times(t.buffs.active),passiveRate:e.passiveRate.times(t.buffs.passive),coins:Object(o.a)(Object(o.a)({},e.coins),{},{BTC:e.coins.BTC.minus(t.price/e.price.BTC)}),price:Object(o.a)({},e.price),items:e.items.filter((function(e){return e.key!==t.key}))});case w:return Object(o.a)(Object(o.a)({},e),{},{totalProfits:e.newProfits,newProfits:new v.a(0),coins:Object(o.a)({},e.coins),price:Object(o.a)({},e.price),items:Object(u.a)(e.items)});case f:return Object(o.a)(Object(o.a)({},e),{},{coins:Object(o.a)({},e.coins),price:{BTC:t.payload.bitcoin.usd,ETH:t.payload.ethereum.usd,LTC:t.payload.litecoin.usd,DOGE:t.payload.dogecoin.usd,BCH:t.payload["bitcoin-cash"].usd,ADA:t.payload.cardano.usd,XMR:t.payload.monero.usd},items:Object(u.a)(e.items)});case d:return Object(o.a)(Object(o.a)({},e),{},{coins:Object(o.a)({},e.coins),price:{BTC:5e4},items:Object(u.a)(e.items),error:t.payload});default:return e}},_={cost:new v.a(.02),rate:new v.a(.13),watts:new v.a(150)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var i=t.rate?e.rate.minus(t.rate):e.rate,s=t.watts?e.watts.add(t.watts):e.watts;return{cost:new v.a(s/1e3).times(i),rate:i,watts:s};default:return e}},T=Object(c.c)({wallet:y,power:S}),C=i(19),P=i.n(C),q={1:{alt:"Mining rig level 1",img:i.p+"static/media/level1.d501f2d3.png"},2:{alt:"Mining rig level 2",img:i.p+"static/media/level2.9943a6dc.png"},3:{alt:"Mining rig level 3",img:i.p+"static/media/level3.51313127.png"},4:{alt:"Mining rig level 4",img:i.p+"static/media/level4.5f641664.png"},5:{alt:"Mining rig level 5",img:i.p+"static/media/level5.6bcf57b5.png"},6:{alt:"Mining rig level 6",img:i.p+"static/media/level6.fa127f67.png"},7:{alt:"Mining rig level 7",img:i.p+"static/media/level7.1120362b.png"},8:{alt:"Mining rig level 8",img:i.p+"static/media/level8.eefed00d.png"},9:{alt:"Mining rig level 9",img:i.p+"static/media/level9.e281634d.png"},10:{alt:"Mining rig level 10",img:i.p+"static/media/level10.28485a30.png"}},U=i(0),k=function(){var e=Object(l.c)((function(e){return e.wallet.level})),t=Object(l.b)();return Object(U.jsx)("img",{src:q[e].img,alt:q[e].alt,className:P.a.MiningRig,onClick:function(){return t({type:b})}})},A=i(20),M=i.n(A),N=function(e){var t=e.tabbed,i=Object(l.c)((function(e){return{cost:e.power.cost,rate:e.power.rate,watts:e.power.watts}})),s=i.cost,a=i.rate,n=i.watts;return Object(U.jsxs)("div",{className:t||"".concat(M.a.Power," desktopOnly"),children:[Object(U.jsx)("h2",{children:"Power"}),Object(U.jsxs)("h3",{children:["$",s.toFixed(3),"/kwh"]}),Object(U.jsxs)("span",{children:["Electricity rate: $",a.toFixed(2),"/kWh"]}),Object(U.jsxs)("span",{children:["Consumption: ",n.toFixed(0),"W"]})]})},I=i(21),G=i.n(I),B=function(e){return Object(U.jsxs)("div",{className:G.a.Listing,children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:e.name}),Object(U.jsx)("p",{children:e.desc})]}),Object(U.jsxs)("span",{children:["$",e.price]}),Object(U.jsx)("button",{onClick:e.purchase,children:"Buy"})]})},E=i(22),W=i.n(E),D=function(e){var t=e.tabbed,i=Object(l.c)((function(e){return{level:e.wallet.level,funds:e.wallet.funds,items:e.wallet.items}})),s=i.level,a=i.funds,n=i.items,c=Object(l.b)(),r=n.filter((function(e){return e.price<=a&&e.levelReq<=s})).map((function(e){return Object(U.jsx)(B,{name:e.name,desc:e.desc,price:e.price,purchase:function(){c({type:h,key:e.key,price:e.price,buffs:e.buffs,level:e.levelUp}),c({type:g,rate:e.rate,watts:e.watts})}},e.key)}));return Object(U.jsxs)("div",{className:t||"".concat(W.a.Shop," desktopOnly"),children:[Object(U.jsx)("h2",{children:"Shop"}),Object(U.jsx)("div",{children:r})]})},F=function(){var e=Object(l.c)((function(e){return e.wallet.funds})),t=e.lt(100)?e.toFixed(5):e.lt(1e5)?e.toFixed(2):e.lt(1e6)?e.toFixed(0):e.lt(1e7)?e.toString().slice(0,2)+"."+e.toString().slice(2,4)+"M":e.lt(1e8)?e.toString().slice(0,3)+"."+e.toString().slice(3,5)+"M":e.lt(1e9)?e.toString().slice(0,1)+"."+e.toString().slice(1,3)+"B":e.lt(1e10)?e.toString().slice(0,2)+"."+e.toString().slice(2,4)+"B":e.lt(1e11)?e.toString().slice(0,3)+"."+e.toString().slice(3,5)+"B":e.lt(1e12)?e.toString().slice(0,1)+"."+e.toString().slice(1,3)+"T":"Too much money";return Object(U.jsxs)("h3",{children:["$",t]})},L=function(){var e=Object(l.c)((function(e){return e.wallet.coins.BTC})),t={BTC:e.lt(100)?8:e.lt(1e4)?4:2};return Object(U.jsx)("div",{children:Object(U.jsxs)("span",{children:["BTC: ",e.toFixed(t.BTC)]})})},Y=i(11),H=i.n(Y),$=function(){var e=Object(l.c)((function(e){return e.wallet.totalProfits})),t=e.gte(0)?"+$"+e.toFixed(e.lt(10)?5:e.lt(1e4)?2:0):"-$"+e.abs().toFixed(e.abs().lt(10)?5:e.abs().lt(1e4)?2:0);return Object(U.jsx)("div",{className:H.a.notification,children:Object(U.jsx)("p",{className:e.gte(0)?H.a.textGreen:H.a.textRed,children:t},Math.random())})},X=i(23),V=i.n(X),z=function(e){var t=e.tabbed;return Object(U.jsxs)("div",{className:t||"".concat(V.a.Wallet," desktopOnly"),children:[Object(U.jsx)("h2",{children:"Wallet"}),Object(U.jsx)(F,{}),Object(U.jsx)($,{}),Object(U.jsx)(L,{})]})},J=i(15),Q=i(7),Z=i.n(Q),K=function(){var e=Object(s.useState)(),t=Object(J.a)(e,2),i=t[0],a=t[1],n=Object(s.useState)(),c=Object(J.a)(n,2),r=c[0],o=c[1],u=Object(l.c)((function(e){return{funds:e.wallet.funds,items:e.wallet.items}})),p=u.funds,v=u.items;Object(s.useEffect)((function(){o(v.filter((function(e){return e.price<=p})).length)}),[p,v]);return Object(U.jsxs)("div",{className:"".concat(Z.a.Tabmenu," mobileOnly"),children:[Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{onClick:function(){return a("Wallet")},children:"Wallet"}),Object(U.jsx)("li",{onClick:function(){return a("Power")},children:"Power"}),Object(U.jsxs)("li",{onClick:function(){return a("Shop")},children:["Shop",r?Object(U.jsx)("span",{children:r}):null]})]}),function(){switch(i){case"Wallet":return Object(U.jsx)(z,{tabbed:Z.a.Wallet});case"Power":return Object(U.jsx)(N,{tabbed:Z.a.Power});case"Shop":return Object(U.jsx)(D,{tabbed:Z.a.Shop});default:return Object(U.jsx)(z,{tabbed:Z.a.Wallet})}}()]})},ee=(i(37),function(){var e=Object(l.b)();return Object(s.useEffect)((function(){e((function(e){fetch("").then((function(e){return e.json()})).then((function(t){return console.log(t),e({type:f,payload:t})})).catch((function(t){return e({type:d,payload:t})}))}));var t=0;setInterval((function(){e({type:m}),e({type:w}),10===t?(e((function(e,t){var i=t().power.cost;e({type:j,cost:i})})),t=0):t++}),1e3)})),Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(k,{}),Object(U.jsx)(N,{}),Object(U.jsx)(z,{}),Object(U.jsx)(D,{}),Object(U.jsx)(K,{})]})}),te=(i(38),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d),ie=Object(c.e)(T,te(Object(c.a)(r.a)));n.a.render(Object(U.jsx)(l.a,{store:ie,children:Object(U.jsx)(ee,{})}),document.getElementById("root"))},7:function(e,t,i){e.exports={Tabmenu:"Tabmenu_Tabmenu__1go2T",hide:"Tabmenu_hide__3zxGn",Wallet:"Tabmenu_Wallet__1xgQc",Power:"Tabmenu_Power__-oRYq",Shop:"Tabmenu_Shop__1IxZT"}}},[[39,1,2]]]);
//# sourceMappingURL=main.c13888cc.chunk.js.map