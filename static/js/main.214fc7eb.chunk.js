(this["webpackJsonpvending-machine"]=this["webpackJsonpvending-machine"]||[]).push([[0],{13:function(e,n,c){e.exports={sidebar:"Sidebar_sidebar__X2H-2",blockOfCoins:"Sidebar_blockOfCoins__3vs9_",balance:"Sidebar_balance__1M2Hg",message:"Sidebar_message__3P3RH",coin:"Sidebar_coin__2ZIaA",block:"Sidebar_block__1BsUR",productBlock:"Sidebar_productBlock__2gMP_",name:"Sidebar_name__1snz5"}},14:function(e,n,c){e.exports={checkout:"Checkout_checkout__OC4ZE",products:"Checkout_products__3FHAG",product:"Checkout_product__3mxL4",name:"Checkout_name__3bLKQ",price:"Checkout_price__399Jc",count:"Checkout_count__BMMDT",close:"Checkout_close__2Zktj",info:"Checkout_info__1114H"}},16:function(e,n,c){e.exports={card:"Card_card__142gr",dibable:"Card_dibable__3jAgF",price:"Card_price__33bEs",name:"Card_name__3ozd1",outOfStock:"Card_outOfStock__3q62l",count:"Card_count__2RIRj"}},17:function(e,n,c){e.exports={header:"Header_header__2hJ9C",logo:"Header_logo__2_QcF",basket:"Header_basket__1MTAz",admin:"Header_admin__QnOlC",rightBlock:"Header_rightBlock__2-1OS"}},18:function(e,n,c){e.exports={adminCard:"AdminCard_adminCard__f1QQW"}},25:function(e,n,c){e.exports={adminCoins:"AdminCoins_adminCoins__2Oojo",coin:"AdminCoins_coin__1W7bM"}},32:function(e,n,c){e.exports={footer:"Footer_footer__3C4HE",span:"Footer_span__1r87x"}},35:function(e,n,c){e.exports={button:"Button_button__2tRAV"}},36:function(e,n,c){e.exports={coin:"Coin_coin__btqBJ"}},37:function(e,n,c){e.exports={display:"DisplayInfo_display__2H_WT"}},59:function(e,n,c){},60:function(e,n,c){"use strict";c.r(n);var t={};c.r(t),c.d(t,"addToCart",(function(){return y})),c.d(t,"decrementCountProduct",(function(){return _})),c.d(t,"removeProduct",(function(){return E})),c.d(t,"incrementCountProduct",(function(){return k})),c.d(t,"getProduct",(function(){return A})),c.d(t,"addProducts",(function(){return N}));var a={};c.r(a),c.d(a,"sendMoney",(function(){return T})),c.d(a,"changeCountCoin",(function(){return B})),c.d(a,"sendMessage",(function(){return w})),c.d(a,"sendBalance",(function(){return S})),c.d(a,"getRest",(function(){return H})),c.d(a,"addCoins",(function(){return V}));var r=c(1),s=c.n(r),o=c(21),i=c.n(o),d=c(6),u=c(33),l=c(5),b=c(2),j=c(38),m={products:[{id:"a01",name:"Twix",price:1,count:2,img:c.p+"static/media/twix.a96e183f.jpg"},{id:"a02",name:"Coke",price:2.4,count:3,img:c.p+"static/media/coca-cola.053dca21.jpg"},{id:"a03",name:"Chocolate",price:1.5,count:4,img:c.p+"static/media/chocolate.c1ffcf7b.jpg"},{id:"a04",name:"Doritos",price:1.4,count:1,img:c.p+"static/media/doritos.81534347.jpg"},{id:"b04",name:"Peanuts",price:1,count:1,img:c.p+"static/media/peanuts.7fc22c63.jpg"},{id:"b01",name:"Water",price:.95,count:2,img:c.p+"static/media/water.78b8e2ab.gif"},{id:"b02",name:"Chewing gum",price:1.25,count:0,img:c.p+"static/media/chewing.9d5df264.jpg"},{id:"b03",name:"Chips",price:1.3,count:4,img:c.p+"static/media/chips.e902b97d.jpg"}],basket:[],reset:0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_PRODUCTS_TO_CART":var c=!1;if(e.basket.forEach((function(e){e.id===n.payload.id&&(e.count+=1,n.forceUpdate(),c=!0)})),c)return e;var t={id:n.payload.id,name:n.payload.name,price:n.payload.price,count:1,img:n.payload.img},a=[].concat(Object(j.a)(e.basket),[t]);return Object(b.a)(Object(b.a)({},e),{},{basket:a});case"ADD_PRODUCTS":for(var r=function(){var n=Object(l.a)(o[s],2),c=n[0],t=n[1];e.products.forEach((function(e){e.id===c&&(e.count+=+t)}))},s=0,o=Object.entries(n.payload);s<o.length;s++)r();return n.forceUpdate(),Object(b.a)(Object(b.a)({},e),{},{reset:Math.random()});case"GET_PRODUCT":return Object(b.a)(Object(b.a)({},e),{},{basket:[]});case"REMOVE_PRODUCT":return Object(b.a)(Object(b.a)({},e),{},{basket:e.basket.filter((function(e){return e.id!==n.payload}))});case"DECRENENT_COUNT_PRODUCT":return e.products.forEach((function(e){e.id===n.payload&&e.count--})),e;case"INCRENENT_COUNT_PRODUCT":return e.products.forEach((function(e){e.id===n.payload.id&&(e.count+=n.payload.count)})),e;default:return e}},O={coins:[{id:"1x1p",label:"1p",stock:22,value:.01},{id:"1x2p",label:"2p",stock:12,value:.02},{id:"1x5p",label:"5p",stock:14,value:.05},{id:"1x10p",label:"10p",stock:5,value:.1},{id:"1x20p",label:"20p",stock:20,value:.2},{id:"1x50p",label:"50p",stock:11,value:.5},{id:"1x\xa31",label:"\xa31",stock:13,value:1},{id:"1x\xa32",label:"\xa32",stock:7,value:2}],money:0,balance:[],reset:0,message:"Please send money and make an order"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_COIN":for(var c=function(){var n=Object(l.a)(a[t],2),c=n[0],r=n[1];e.coins.forEach((function(e){e.id===c&&(e.stock+=+r)}))},t=0,a=Object.entries(n.payload);t<a.length;t++)c();return n.forceUpdate(),Object(b.a)(Object(b.a)({},e),{},{reset:Math.random()});case"SEND_MONEY":return Object(b.a)(Object(b.a)({},e),{},{money:n.payload});case"SEND_BALANCE":return Object(b.a)(Object(b.a)({},e),{},{balance:n.payload});case"GET_REST":return Object(b.a)(Object(b.a)({},e),{},{balance:[],money:0});case"CHANGE_COUNT_COIN":return e.coins.forEach((function(e){e.id===n.payload&&(e.stock+=1)})),e;case"SEND_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{message:n.payload});default:return e}},f=Object(d.c)({product:p,coins:h}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,v=Object(d.e)(f,x(Object(d.a)(u.a))),C=c(11),g=c(4),y=function(e,n){return{type:"ADD_PRODUCTS_TO_CART",payload:e,forceUpdate:n}},N=function(e,n){return{type:"ADD_PRODUCTS",payload:e,forceUpdate:n}},A=function(){return function(e){e({type:"GET_PRODUCT"})}},_=function(e){return{type:"DECRENENT_COUNT_PRODUCT",payload:e}},k=function(e,n){return{type:"INCRENENT_COUNT_PRODUCT",payload:{id:e,count:n}}},E=function(e){return{type:"REMOVE_PRODUCT",payload:e}},D=c(28),P=c.n(D),R=c(34),T=function(e){return function(n){n({type:"SEND_MONEY",payload:e})}},S=function(e,n){return function(c){var t={};e.filter((function(e){return e.stock>0})).reverse().map((function(e){for(;Number(n.toFixed(2))>=e.value;)n-=e.value,t.hasOwnProperty(e.label)?t[e.label]+=1:t[e.label]=1})),c({type:"SEND_BALANCE",payload:Object.keys(t).map((function(e){return{currency:e,count:t[e]}}))})}},H=function(){return function(e){e({type:"GET_REST"})}},B=function(e){return function(n){n({type:"CHANGE_COUNT_COIN",payload:e})}},w=function(e){return function(){var n=Object(R.a)(P.a.mark((function n(c){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c({type:"SEND_MESSAGE",payload:e});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},V=function(e,n){return{type:"ADD_COIN",payload:e,forceUpdate:n}},M=c(15),I=c(16),F=c.n(I),W=c(24),U=c.n(W),G=c(0),Q=function(e){var n=e.product,c=e.onClick;return Object(G.jsxs)("div",{onClick:function(e){return c(e,n)},className:U()(F.a.card,Object(M.a)({},F.a.dibable,!n.count)),children:[n.count?Object(G.jsxs)("div",{className:F.a.count,children:["Available items: ",n.count]}):Object(G.jsx)("div",{className:F.a.outOfStock,children:"Out of stock"}),Object(G.jsx)("img",{className:"img-responsive center-block img-max-150",src:n.img,alt:"product"}),Object(G.jsx)("div",{className:F.a.name,children:n.name}),Object(G.jsxs)("div",{className:F.a.price,children:["Price: \xa3",n.price]})]})},X=c(12),Z=c.p+"static/media/logo.062b37cc.png",K=c.p+"static/media/admin.56ba3d1c.png",Y=c(17),z=c.n(Y),q=function(e){return Object(G.jsxs)("header",{className:z.a.header,children:[Object(G.jsx)(X.b,{to:"/vending-machine",children:Object(G.jsx)("img",{className:z.a.logo,src:Z,alt:"logo"})}),Object(G.jsxs)("div",{className:z.a.rightBlock,children:[Object(G.jsx)(X.b,{to:"/vending-machine/basket",children:Object(G.jsx)("img",{className:z.a.basket,src:"data:image/png;base64,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",alt:"basket"})}),Object(G.jsx)(X.b,{to:"/vending-machine/admin",children:Object(G.jsx)("img",{className:z.a.admin,src:K,alt:"admin"})})]})]})},J=c(32),L=c.n(J),$=function(){return Object(G.jsxs)("footer",{className:L.a.footer,children:[" ",Object(G.jsx)("span",{className:L.a.span,children:" 2021 "})," "]})},ee=c(35),ne=c.n(ee),ce=function(e){var n=e.onClick,c=e.children,t=e.className;return Object(G.jsx)("button",{onClick:n,className:U()(ne.a.button,t),children:c})},te=c(14),ae=c.n(te),re=function(e){var n=e.basket,c=e.remove,t=e.increment,a=e.money,r=e.sendMoney,s=e.message;return Object(G.jsxs)("div",{className:ae.a.checkout,children:[Object(G.jsx)("h3",{children:"Checkout: "}),Object(G.jsx)("div",{className:ae.a.products,children:Object(G.jsx)("ul",{children:n.map((function(e){return Object(G.jsxs)("li",{className:ae.a.product,children:[Object(G.jsx)("button",{onClick:function(n){return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0;c(n),s("You remove product!"),t(n,o),r(a+o*i)}(n,e.id,e.count,e.price)},className:ae.a.close,children:"X"}),Object(G.jsx)("img",{src:e.img,alt:"product"}),Object(G.jsx)("span",{className:ae.a.count,children:e.count}),Object(G.jsx)("div",{className:ae.a.name,children:e.name}),Object(G.jsxs)("div",{className:ae.a.price,children:["Price: \xa3",e.price]})]},e.id)}))})})]})},se=c(36),oe=c.n(se),ie=function(e){var n=e.coin,c=e.onClick;return Object(G.jsx)("div",{className:oe.a.coin,onClick:c,children:n.label})},de=function(e){var n=e.money,c=e.styles;return Object(G.jsx)("div",{className:c.balance,children:n<=0?"Insert Coin...":"\xa3"+n.toFixed(2)})},ue=c(37),le=c.n(ue),be=function(e){var n=e.children;return Object(G.jsx)("div",{className:le.a.display,children:n})},je=c(13),me=c.n(je),pe=function(e){s.a.useEffect((function(){e.sendBalance(e.coins,e.money)}),[e.money]);return Object(G.jsxs)("div",{className:me.a.sidebar,children:[Object(G.jsx)(de,{money:e.money,styles:me.a}),Object(G.jsx)("div",{className:me.a.blockOfCoins,children:e.coins.map((function(n){return Object(G.jsx)(ie,{coin:n,onClick:function(c){return function(n,c){e.sendMoney(e.money+c.value),e.changeCountCoin(c.id),e.sendMessage("You have replenished your balance!")}(0,n)}},n.id)}))}),Object(G.jsx)(ce,{onClick:function(){e.money||0!==e.balance.length?(e.getRest(),e.getProduct(),e.sendMessage("Thanks for your purchase!")):e.sendMessage("Please top up your balance")},children:"GET"}),Object(G.jsxs)(be,{children:[Object(G.jsx)("p",{className:me.a.message,children:e.message}),0!==e.basket.length&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{children:"Press GET to get products"}),0!==e.basket&&e.basket.map((function(e){return Object(G.jsxs)("div",{className:me.a.productBlock,children:[Object(G.jsx)("span",{className:me.a.name,children:e.name}),Object(G.jsxs)("span",{children:[" X ",e.count]})]},e.id)}))]}),0!==e.balance.length&&Object(G.jsxs)("span",{children:[Object(G.jsx)("h3",{children:"Press GET to get money!"}),e.balance.map((function(e){return Object(G.jsxs)("div",{className:me.a.block,children:[Object(G.jsx)("span",{className:me.a.coin,children:e.currency}),Object(G.jsxs)("span",{children:[" X ",e.count]})]},e.currency)}))]})]})]})},Oe=Object(C.b)((function(e){return{coins:e.coins.coins,money:e.coins.money,balance:e.coins.balance,message:e.coins.message,basket:e.product.basket}}),(function(e){return Object(d.b)(Object(b.a)(Object(b.a)({},a),t),e)}))(s.a.memo(pe)),he=c(18),fe=c.n(he),xe=function(e){var n=e.product,c=e.changeCountProducts,t=e.reset,a=s.a.useState(""),r=Object(l.a)(a,2),o=r[0],i=r[1];return s.a.useEffect((function(){i("")}),[t]),Object(G.jsxs)("div",{className:fe.a.adminCard,children:[Object(G.jsx)("img",{className:fe.a.img,src:n.img,alt:"product"}),Object(G.jsxs)("div",{className:fe.a.count,children:["Count: ",Object(G.jsx)("b",{children:n.count})]}),Object(G.jsxs)("div",{className:fe.a.name,children:["Name: ",Object(G.jsx)("b",{children:n.name})]}),Object(G.jsxs)("div",{className:fe.a.price,children:["Price: ",Object(G.jsxs)("b",{children:["\xa3",n.price]})]}),Object(G.jsx)("input",{value:o,onChange:function(e){return function(e,n,t){c(e,n,t),i(t)}(e,n.id,e.target.value)},type:"number",min:0,step:1})]})},ve=c(25),Ce=c.n(ve),ge=function(e){var n=e.coin,c=e.changeCountMoney,t=e.reset,a=s.a.useState(""),r=Object(l.a)(a,2),o=r[0],i=r[1];return s.a.useEffect((function(){i("")}),[t]),Object(G.jsxs)("div",{className:Ce.a.adminCoins,children:[Object(G.jsx)("span",{className:Ce.a.coin,children:n.label}),Object(G.jsxs)("div",{className:Ce.a.stock,children:["Stock: ",Object(G.jsx)("b",{children:n.stock})]}),Object(G.jsx)("input",{value:o,onChange:function(e){return function(e,n,t){c(e,n,t),i(t)}(e,n.id,e.target.value)},type:"number",min:0,step:1})]})},ye=function(e){var n=s.a.useState(),c=Object(l.a)(n,2)[1],t=s.a.useCallback((function(){return c({})}),[]),a=function(n,c){e.money<c.price?e.sendMessage("You haven't enought money"):(e.decrementCountProduct(c.id),e.sendMoney(e.money-c.price),e.addToCart(c,t),e.sendMessage("Thank you for your order!"))};return Object(G.jsx)("div",{className:"main-content",children:Object(G.jsx)("div",{className:"card__container",children:e.products.map((function(e){return Object(G.jsx)(Q,{onClick:a,product:e},e.id)}))})})},Ne=Object(C.b)((function(e){return{products:e.product.products,basket:e.product.basket,money:e.coins.money,coins:e.coins.coins}}),(function(e){return Object(d.b)(Object(b.a)(Object(b.a)({},t),a),e)}))(s.a.memo(ye)),Ae=function(e){return Object(G.jsxs)("div",{className:"main-content",children:[Object(G.jsx)(X.b,{className:"back-home",to:"/vending-machine",children:"Back to home"}),Object(G.jsx)("div",{className:"basket__container m-30t",children:0!==e.basket.length?Object(G.jsx)(re,{money:e.money,sendMoney:e.sendMoney,increment:e.incrementCountProduct,message:e.sendMessage,remove:e.removeProduct,basket:e.basket}):Object(G.jsx)("p",{className:"back-empty",children:"Basket is empty"})})]})},_e=Object(C.b)((function(e){return{basket:e.product.basket,money:e.coins.money}}),(function(e){return Object(d.b)(Object(b.a)(Object(b.a)({},t),a),e)}))(s.a.memo(Ae)),ke=function(e){var n=s.a.useState(),c=Object(l.a)(n,2)[1],t=s.a.useCallback((function(){return c({})}),[]),a=s.a.useState({}),r=Object(l.a)(a,2),o=r[0],i=r[1],d=s.a.useState({}),u=Object(l.a)(d,2),j=u[0],m=u[1],p=s.a.useCallback((function(e,n,c){i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(M.a)({},n,c))}))}),[]),O=s.a.useCallback((function(e,n,c){m((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(M.a)({},n,c))}))}),[]);return Object(G.jsxs)("div",{className:"main-content",children:[Object(G.jsx)("h2",{children:"Admin"}),Object(G.jsxs)("div",{className:"product__container m-30t m-30b",children:[Object(G.jsx)("h3",{className:"m-10b",children:"Products:"}),e.products.map((function(n){return Object(G.jsx)(xe,{reset:e.reset,changeCountProducts:O,product:n},n.id)})),Object(G.jsx)(ce,{onClick:function(){e.addProducts(j,t)},children:"Add Product"})]}),Object(G.jsxs)("div",{className:"coins__container m-30t m-30b",children:[Object(G.jsx)("h3",{className:"m-10b",children:"Coins:"}),e.coins.map((function(n){return Object(G.jsx)(ge,{reset:e.resetCoin,changeCountMoney:p,coin:n},n.id)})),Object(G.jsx)(ce,{onClick:function(){e.addCoins(o,t)},children:"Add Coins"})]})]})},Ee=Object(C.b)((function(e){return{products:e.product.products,reset:e.product.reset,resetCoin:e.coins.reset,coins:e.coins.coins}}),(function(e){return Object(d.b)(Object(b.a)(Object(b.a)({},t),a),e)}))(s.a.memo(ke));var De=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(q,{}),Object(G.jsxs)("div",{className:"container m-30t",children:[Object(G.jsxs)(g.c,{children:[Object(G.jsx)(g.a,{exact:!0,path:"/vending-machine",children:Object(G.jsx)(Ne,{})}),Object(G.jsx)(g.a,{exact:!0,path:"/vending-machine/basket",children:Object(G.jsx)(_e,{})}),Object(G.jsx)(g.a,{exact:!0,path:"/vending-machine/admin",children:Object(G.jsx)(Ee,{})})]}),Object(G.jsx)(Oe,{})]}),Object(G.jsx)($,{})]})};c(59);i.a.render(Object(G.jsx)(X.a,{children:Object(G.jsx)(C.a,{store:v,children:Object(G.jsx)(De,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.214fc7eb.chunk.js.map