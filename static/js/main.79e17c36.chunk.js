(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(16),s=c.n(a),i=(c(23),c(18)),j=c(6),r=c(17),l=c(12),d=c(9),o=c(0),u=function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=e.getDate(),s=t[e.getDay()],i=c[e.getMonth()],r=Object(n.useState)({date:a,day:s,month:i}),l=Object(j.a)(r,2),d=l[0],u=l[1];return setInterval((function(){a=e.getDate(),s=t[e.getDay()],i=c[e.getMonth()],u({date:a,day:s,month:i})}),1e5),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("h3",{children:[" ",d.day,", ",d.date," ",d.month]})})},b=c(30),O=c(29),h=function(e){return e.curValue?Object(o.jsx)("div",{className:"status",style:{backgroundColor:"green"},children:Object(o.jsx)("i",{className:"bi bi-check"})}):Object(o.jsx)("div",{className:"status",children:Object(o.jsx)("i",{className:"bi bi-x"})})},x=function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),a=c[0],s=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("div",{onClick:function(){s(!a)},children:Object(o.jsx)(h,{curValue:a})}),a?Object(o.jsx)("li",{children:Object(o.jsx)("del",{className:"todo_done",children:e.item})}):Object(o.jsx)("li",{children:e.item}),Object(o.jsx)("i",{class:"bi bi-trash",onClick:function(){e.onSelect(e.id)}})]})})},m=function(e){var t=e.activeStatus?"open-input":"close-input";return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{className:"add_button "+t,onClick:function(){return e.setActive(!e.activeStatus)},children:Object(o.jsx)("i",{class:"bi bi-plus-lg"})})})},v=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),h=Object(j.a)(s,2),v=h[0],f=h[1],p=Object(n.useState)([]),g=Object(j.a)(p,2),y=g[0],N=g[1],S=function(e){console.log("Done"),N((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{fluid:!0,className:"main_div",children:[Object(o.jsx)(l.a,{children:Object(o.jsx)("h1",{children:"ToDo List"})}),Object(o.jsx)(l.a,{children:Object(o.jsxs)(d.a,{className:"center_div",children:[Object(o.jsxs)(l.a,{className:"py-5 px-2",children:[Object(o.jsx)(d.a,{className:"todo_date",children:Object(o.jsx)(u,{})}),Object(o.jsx)(d.a,{children:Object(o.jsx)(m,{setActive:a,activeStatus:c})}),c&&Object(o.jsx)("div",{className:"input_panel",children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Add a Item",className:"todo_input",onChange:function(e){f(e.target.value)},value:v}),Object(o.jsx)(b.a,{className:"btn-success",onClick:function(){N((function(e){return[].concat(Object(i.a)(e),[v])})),f("")},children:"Add"})]})})]}),Object(o.jsx)("ol",{children:y.map((function(e,t){return Object(o.jsx)(x,{id:t,item:e,onSelect:S},t)}))})]})})]})})};c(27);s.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.79e17c36.chunk.js.map