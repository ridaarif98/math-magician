(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{28:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(16),l=n.n(c),r=n(17),s=n(18),o=n(23),u=n(21),j=n(2),x=(n(28),n(10)),d=n(22),h=n(13),b=n.n(h);function m(t,e,n){var a=b()(t),i=b()(e);if("+"===n)return a.plus(i).toString();if("-"===n)return a.minus(i).toString();if("x"===n)return a.times(i).toString();if("\xf7"===n)return"0"===e?"Error":a.div(i).toString();if("%"===n)return"0"===e?"Error":a.mod(i).toString();throw Error("Unknown operation '".concat(n,"'"))}var p=n(0);var O=function(){var t=Object(a.useState)({total:0,next:null,operation:null}),e=Object(d.a)(t,2),n=e[0],i=e[1],c=function(t){var e,a,c=Object(x.a)(Object(x.a)({},n),(e=n,"AC"===(a=t.target.name)?{total:0,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===e.next?{}:e.operation?e.next?{next:e.next+a}:{next:a}:e.next?{next:e.next+a,total:null}:{next:a,total:null}:"."===a?e.next?e.next.includes(".")?{}:{next:"".concat(e.next,".")}:e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===a?e.next&&e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===a?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:a}:e.next?{total:e.next,next:null,operation:a}:{operation:a}));i((function(){return Object(x.a)({},c)}))};return Object(p.jsxs)("div",{className:"calculateDiv",children:[Object(p.jsx)("h3",{children:"Let's do some Math!"}),Object(p.jsxs)("ul",{className:"mainList",children:[Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"resultList",children:Object(p.jsxs)("li",{children:[n.total,n.operation,n.next]})})}),Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"buttonList",children:["AC","+/-","%","\xf7"].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"calculateBtn",name:t,value:t,onClick:c,children:t})},t)}))})}),Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"buttonList",children:["7","8","9","x"].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"calculateBtn",name:t,value:t,onClick:c,children:t})},t)}))})}),Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"buttonList",children:["4","5","6","-"].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"calculateBtn",name:t,value:t,onClick:c,children:t})},t)}))})}),Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"buttonList",children:["1","2","3","+"].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"calculateBtn",name:t,value:t,onClick:c,children:t})},t)}))})}),Object(p.jsx)("li",{children:Object(p.jsx)("ul",{className:"buttonListBottom",children:["0",".","="].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"calculateBtn",name:t,value:t,onClick:c,children:t})},t)}))})})]})]})},f=function(){return Object(p.jsxs)("section",{className:"homeContent",children:[Object(p.jsx)("h1",{children:"Welcome to our Page!"}),Object(p.jsx)("p",{children:'"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.'}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus? Consectetur quaerat expedita nulla, reprehenderit illo, in dicta sed debitis ratione facilis distinctio accusamus aperiam reiciendis ullam excepturi mollitia repellat."}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus? Consectetur quaerat expedita nulla, reprehenderit illo, in dicta sed debitis ratione facilis distinctio accusamus aperiam reiciendis ullam excepturi mollitia repellat."})]})},g=function(){return Object(p.jsxs)("div",{className:"quotes",children:[Object(p.jsx)("p",{children:"Math is not about numbers, equations, computations, or algorithms, : it is about understanding. _William Paul Thurston"}),Object(p.jsx)("p",{children:"Without mathematics, there\u2019s nothing you can do. Everything around you is mathematics. Everything around you is numbers. \u2014 Shakuntala Devi"})]})},v=n(8),N=n.p+"static/media/calculator.34fa1a22.png",C=function(){return Object(p.jsxs)("nav",{className:"navBar",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:N,alt:"logo"}),Object(p.jsx)("h1",{children:" Math Magician"})]}),Object(p.jsx)("ul",{className:"navBarLink",children:[{id:1,path:"/",text:"Home"},{id:2,path:"/calculator",text:"Calculator"},{id:3,path:"/Qoute",text:"Qoute"}].map((function(t){return Object(p.jsx)("li",{children:Object(p.jsxs)(v.b,{to:t.path,className:"links",children:[" ",t.text]})},t.id)}))})]})},k=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={res:""},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.res;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/calculator",children:Object(p.jsxs)("div",{children:[t,Object(p.jsx)(O,{})]})}),Object(p.jsx)(j.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{})}),Object(p.jsx)(j.a,{exact:!0,path:"/Qoute",children:Object(p.jsx)(g,{})})]})]})}}]),n}(i.a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,l=e.getTTFB;n(t),a(t),i(t),c(t),l(t)}))};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)(k,{})})}),document.getElementById("root")),L()}},[[35,1,2]]]);
//# sourceMappingURL=main.5aa504b8.chunk.js.map