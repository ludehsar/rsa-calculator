(this["webpackJsonprsa-calculator"]=this["webpackJsonprsa-calculator"]||[]).push([[0],{103:function(n,t,e){n.exports=e(206)},108:function(n,t,e){},109:function(n,t,e){},115:function(n,t){},117:function(n,t){},128:function(n,t){},130:function(n,t){},157:function(n,t){},159:function(n,t){},160:function(n,t){},166:function(n,t){},168:function(n,t){},186:function(n,t){},188:function(n,t){},200:function(n,t){},203:function(n,t){},206:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e.n(r),a=e(101),o=e.n(a);e(108),e(109);var c=function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar__brand"},i.a.createElement("h2",null,"RSA Algorithm")))};var u=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(c,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=Object(r.createContext)(),l=function(n){var t=n.reducer,e=n.initialState,a=n.children;return i.a.createElement(g.Provider,{value:Object(r.useReducer)(t,e)},a)},f=e(102),B=e(24),I=e(110).rando,s={p:BigInt(0),q:BigInt(0),n:BigInt(0),phi:BigInt(0),e:BigInt(0),d:BigInt(0),errorbag:[]},m=function(n,t){var e=[BigInt(n),BigInt(t)];n=e[0],t=e[1];var r=function(n,t,e){var r=[BigInt(n),BigInt(t),BigInt(e)];n=r[0],t=r[1],e=r[2];var i=BigInt(1);for(n%=e;t>BigInt(0);)t&BigInt(1)&&(i=i*n%e),t>>=BigInt(1),n=n*n%e;return i}(BigInt(2)+BigInt(I(1e8,1e22))%(t-BigInt(4)),n,t);if(r===BigInt(1)||r===t-BigInt(1))return!0;for(;n!==t-BigInt(1);){if(r=r*r%t,n*=BigInt(2),r===BigInt(1))return!1;if(r===t-BigInt(1))return!0}return!1},v=function(n){if((n=BigInt(n))<=BigInt(1)||n===BigInt(4))return!1;if(n<=BigInt(3))return!0;for(var t=n-BigInt(1);t%BigInt(2)===BigInt(0);)t/=BigInt(2);for(var e=0;e<2e3;++e)if(!m(t,n))return!1;return!0},d=function(n,t){switch(console.log(t),t.type){case"SET_P_AND_Q":var e=BigInt(t.item.p),r=BigInt(t.item.q);if(!v(e)||!v(r))return Object(B.a)(Object(B.a)({},n),{},{errorbag:[].concat(Object(f.a)(n.errorbag),[{message:"P and Q should be prime numbers."}])});var i=e*r,a=(e-BigInt(1))*(r-BigInt(1));return Object(B.a)(Object(B.a)({},n),{},{p:e,q:r,n:i,phi:a,errorbag:[]});default:return n}};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l,{initialState:s,reducer:d},i.a.createElement(u,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.12b60e77.chunk.js.map