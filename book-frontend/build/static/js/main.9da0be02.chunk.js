(this["webpackJsonpbook-frontend"]=this["webpackJsonpbook-frontend"]||[]).push([[0],{48:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(17),r=n.n(o),s=n(50),j=n(6),i=n(52),h=n(54),l=n(2),b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.a.Brand,{href:"/",children:"\ud648"}),Object(l.jsxs)(h.a,{className:"me-auto",children:[Object(l.jsx)(h.a.Link,{href:"/joinForm",children:"\ud68c\uc6d0\uac00\uc785"}),Object(l.jsx)(h.a.Link,{href:"/loginForm",children:"\ub85c\uadf8\uc778"}),Object(l.jsx)(h.a.Link,{href:"/saveForm",children:"\uae00\uc4f0\uae30"}),Object(l.jsx)(h.a.Link,{href:"#pricing",children:"\ub9ac\uc561\ud2b8\uc2a4\ud504\ub9c1 CRUD \uad6c\ud604\uc911!"})]})]})})})},u=n(14),d=n(55),O=n(23),x=function(t){var e=t.book,n=e.id,c=e.title;e.author;return Object(l.jsxs)(d.a,{children:[Object(l.jsxs)(d.a.Body,{children:[Object(l.jsx)(d.a.Title,{children:c}),Object(l.jsx)(O.b,{to:"/book/"+n,className:"btn btn-primary",children:"\uc0c1\uc138\ubcf4\uae30"})]}),Object(l.jsx)("br",{})]})},f=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){fetch("http://localhost:8011/book",{method:"GET"}).then((function(t){return t.json()})).then((function(t){console.log(1,t),a(t)}))}),[]),Object(l.jsx)("div",{children:n.map((function(t){return Object(l.jsx)(x,{book:t},t.id)}))})},m=n(51),p=function(t){var e=t.match.params.id,n=Object(c.useState)({id:"",title:"",author:""}),a=Object(u.a)(n,2),o=a[0],r=a[1];Object(c.useEffect)((function(){fetch("http://localhost:8011/book/"+e).then((function(t){return t.json()})).then((function(t){r(t)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"\ucc45 \uc0c1\uc138\ubcf4\uae30"}),Object(l.jsx)(m.a,{variant:"success",onClick:function(){t.history.push("/updateForm/"+e)},children:"\uc218\uc815"})," ",Object(l.jsx)(m.a,{variant:"success",onClick:function(){fetch("http://localhost:8011/book/"+e,{method:"DELETE"}).then((function(t){return t.text()})).then((function(e){"ok"===e?t.history.push("/"):alert("\uc0ad\uc81c \uc2e4\ud328")}))},children:"\uc0ad\uc81c"}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:o.author}),Object(l.jsx)("h1",{children:o.title})]})},v=n(16),k=n(18),y=n(53),g=function(t){var e=Object(c.useState)({title:"",author:""}),n=Object(u.a)(e,2),a=n[0],o=n[1],r=function(t){o(Object(k.a)(Object(k.a)({},a),{},Object(v.a)({},t.target.name,t.target.value)))};return Object(l.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8011/book",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)}).then((function(t){return 201===t.status?t.json():null})).then((function(e){null!==e?t.history.push("/"):alert("\ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},children:[Object(l.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(y.a.Label,{children:"\uc81c\ubaa9"}),Object(l.jsx)(y.a.Control,{type:"text",placeholder:"\ucc45 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:r,name:"title"}),Object(l.jsx)(y.a.Text,{className:"text-muted"})]}),Object(l.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(y.a.Label,{children:"\uc800\uc790"}),Object(l.jsx)(y.a.Control,{type:"text",placeholder:"\uc800\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:r,name:"author"})]}),Object(l.jsx)(m.a,{variant:"primary",type:"submit",children:"\ub4f1\ub85d"})]})},C=function(t){var e=t.match.params.id,n=Object(c.useState)({title:"",author:""}),a=Object(u.a)(n,2),o=a[0],r=a[1];Object(c.useEffect)((function(){fetch("http://localhost:8011/book/"+e).then((function(t){return t.json()})).then((function(t){r(t)}))}),[]);var s=function(t){r(Object(k.a)(Object(k.a)({},o),{},Object(v.a)({},t.target.name,t.target.value)))};return Object(l.jsxs)(y.a,{onSubmit:function(n){n.preventDefault(),fetch("http://localhost:8011/book/"+e,{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(o)}).then((function(t){return 200===t.status?t.json():null})).then((function(n){null!==n?t.history.push("/book/"+e):alert("\uc218\uc815\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},children:[Object(l.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(y.a.Label,{children:"\uc81c\ubaa9"}),Object(l.jsx)(y.a.Control,{type:"text",placeholder:"\uc218\uc815\ud560 \ucc45 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:s,name:"title",value:o.title}),Object(l.jsx)(y.a.Text,{className:"text-muted"})]}),Object(l.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(l.jsx)(y.a.Label,{children:"\uc800\uc790"}),Object(l.jsx)(y.a.Control,{type:"text",placeholder:"\uc218\uc815 \ud560 \uc800\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:s,name:"author",value:o.author})]}),Object(l.jsx)(m.a,{variant:"primary",type:"submit",children:"\uc218\uc815"})]})},E=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"\ub85c\uadf8\uc778\ud3fc"})})},N=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785\ud3fc"})})};n(32);var S=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:f}),Object(l.jsx)(j.a,{path:"/saveForm",exact:!0,component:g}),Object(l.jsx)(j.a,{path:"/book/:id",exact:!0,component:p}),Object(l.jsx)(j.a,{path:"/loginForm",exact:!0,component:E}),Object(l.jsx)(j.a,{path:"/joinForm",exact:!0,component:N}),Object(l.jsx)(j.a,{path:"/updateForm/:id",exact:!0,component:C})]})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O.a,{children:Object(l.jsx)(S,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9da0be02.chunk.js.map