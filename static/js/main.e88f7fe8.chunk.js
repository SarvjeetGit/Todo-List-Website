(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),i=(c(13),c(3)),l=(c(14),c(8)),d=c(0),r=function(t){var e=t.setStatus,c=t.setInputText,o=t.inputText,n=t.todos,s=t.setTodos;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",value:o,onChange:function(t){c(t.target.value)},className:"todo-input"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(l.a)(n),[{text:o,completed:!1,id:1e3*Math.random()}])),c("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){e(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.setTodos,c=t.todo,o=t.todos,n=t.text;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:n}),Object(d.jsx)("button",{onClick:function(){e(o.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){e(o.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})})},b=function(t){var e=t.setTodos,c=t.todos,o=t.filteredTodos;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(d.jsx)(j,{setTodos:e,todo:t,todos:c,text:t.text},t.id)}))})})})};var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),O=f[0],m=f[1],p=Object(o.useState)([]),x=Object(i.a)(p,2),h=x[0],v=x[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){g(),N()}),[l,O]);var g=function(){switch(O){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}},N=function(){localStorage.setItem("todos",JSON.stringify(l))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Sarvjeet's Todo List"})}),Object(d.jsx)(r,{setStatus:m,todos:l,setTodos:u,inputText:c,setInputText:n}),Object(d.jsx)(b,{setTodos:u,todos:l,filteredTodos:h})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.e88f7fe8.chunk.js.map