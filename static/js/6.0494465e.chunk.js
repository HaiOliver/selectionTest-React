(this["webpackJsonpselection-test-react"]=this["webpackJsonpselection-test-react"]||[]).push([[6],{116:function(e,t,a){},118:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var c=a(0),s=a(68),n=a(51),r=a.n(n),o=a(69),l=a(120),i=a(93),d=a.n(i),j=a(3),u=(a(116),a(1));function h(){var e=Object(c.useState)(new Date),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),h=Object(s.a)(i,2),b=h[0],f=h[1],x=Object(c.useState)(""),O=Object(s.a)(x,2),m=O[0],p=O[1],y=Object(c.useState)(""),v=Object(s.a)(y,2),g=v[0],N=v[1],k=Object(c.useState)(""),w=Object(s.a)(k,2),S=w[0],C=w[1],T=function(e){var t=e,a=("0"+t.getDate()).slice(-2),c=("0"+(t.getMonth()+1)).slice(-2);return t.getFullYear()+"-"+c+"-"+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},D=Object(j.f)();return Object(u.jsxs)(l.a,{onSubmit:function(e){if(e.preventDefault(),""!==b&&""!==S&&""!==m&&""!==g){var t={location:b,number_of_duck:m,number_of_food:g,time_fed:T(a),food:S};r.a.post("https://react-selection-test.herokuapp.com/allParks/addNewPark",t).then((function(e){console.log("\ud83d\ude80 ~ file: inputForm.jsx ~ line 57 ~ .then ~ response",e),alert("Park successfully added!")})).catch((function(e){console.log("\ud83d\ude80 ~ file: inputForm.jsx ~ line 61 ~ handleSubmit ~ error",e),alert("Sorry, Park cannot be added. Network error.")}));D.push("/selectionTest-React")}else alert("There is empty field. Please enter data !!")},children:[Object(u.jsxs)(l.a.Group,{controlId:"formBasicLocation",children:[Object(u.jsx)(l.a.Label,{className:"text-left",style:{width:"100%"},children:Object(u.jsx)("h3",{className:"where",children:"Location Park"})}),Object(u.jsx)(l.a.Control,{type:"text",placeholder:"Type here ...",size:"lg",onChange:function(e){return t=e.target.value,void f(t);var t}})]}),Object(u.jsxs)(l.a.Group,{controlId:"formBasicTime",children:[Object(u.jsx)(l.a.Label,{className:"text-left",style:{width:"100%"},children:Object(u.jsx)("h3",{className:"time_fed",children:"What time the duck are fed ?"})}),Object(u.jsx)("div",{className:"text-left",children:Object(u.jsx)(d.a,{onChange:n,value:a})})]}),Object(u.jsxs)(l.a.Group,{controlId:"formBasicDucks",children:[Object(u.jsx)(l.a.Label,{className:"text-left",style:{width:"100%"},children:Object(u.jsx)("h3",{className:"numberDucksFed",children:"How many ducks are fed ?"})}),Object(u.jsx)(l.a.Control,{type:"text",size:"lg",placeholder:"Type here ...",onChange:function(e){return t=e.target.value,isNaN(t)&&alert("please input a number !!"),void p(t);var t}})]}),Object(u.jsxs)(l.a.Group,{controlId:"formBasicFoods",children:[Object(u.jsx)(l.a.Label,{className:"text-left",style:{width:"100%"},children:Object(u.jsx)("h3",{className:"foodFedDuck",children:"What food the duck are fed ?"})}),Object(u.jsx)(l.a.Control,{type:"text",size:"lg",placeholder:"Type here ...",onChange:function(e){return t=e.target.value,void C(t);var t}})]}),Object(u.jsxs)(l.a.Group,{controlId:"formBasicNumberFoods",children:[Object(u.jsx)(l.a.Label,{className:"text-left",style:{width:"100%"},children:Object(u.jsx)("h3",{className:"howManyfood",children:"How many food the duck are fed ?"})}),Object(u.jsx)(l.a.Control,{type:"text",size:"lg",placeholder:"Type here ...",onChange:function(e){return t=e.target.value,void N(t);var t}})]}),Object(u.jsx)(o.a,{variant:"success",type:"submit",children:"Add new location"})]})}var b=a(13),f=a(9),x=a(18);a(118);function O(){return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(f.a,{className:"d-flex justify-content-center",children:Object(u.jsx)("h1",{className:"another-title",children:" Input your data about your duck fed activity "})}),Object(u.jsx)(f.a,{className:"d-flex justify-content-center",children:Object(u.jsx)(h,{})}),Object(u.jsx)(f.a,{className:"d-flex justify-content-center m-3",children:Object(u.jsx)(x.b,{to:"/selectionTest-React",style:{textDecoration:"none"},children:Object(u.jsx)(o.a,{variant:"info",children:"See all locations"})})})]})}}}]);
//# sourceMappingURL=6.0494465e.chunk.js.map