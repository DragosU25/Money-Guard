"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[861],{805:(e,t,a)=>{a.d(t,{A:()=>r});a(43);const s=a.p+"static/media/icon.e3bb1261f9b2869a1e4b5d24ade27747.svg";var n=a(579);const r=function(e){let{className:t}=e;return(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)("img",{src:s,alt:"Icon"}),(0,n.jsx)("span",{children:"Money Guard"})]})}},838:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(768);a(43);const n="Button_button__d84On",r="Button_coloredButton__4Eobf",i="Button_whiteButton__2Omvz";var o=a(579);const l=function(e){let{type:t,children:a,variant:l="",handleClick:d,disabled:c,className:u}=e;return(0,o.jsx)("button",{disabled:c,onClick:d,type:t,className:(0,s.A)(u,n,"colored"===l?r:i),children:a})}},461:(e,t,a)=>{a.d(t,{A:()=>i});a(43);var s=a(768);const n={inputContainer:"Input_inputContainer__QZk4R",input:"Input_input__MJJzI",inputCenter:"Input_inputCenter__pFBIS",inputInfo:"Input_inputInfo__z+ueb"};var r=a(579);function i(e){let{inputContainer:t,type:a,placeholder:i,required:o,variant:l="",className:d,name:c,handleChange:u,width:p,value:_,paddingLeft:m,autoComplete:g}=e;return(0,r.jsx)("div",{style:{width:`${p}`},className:n.inputContainer,children:(0,r.jsx)("input",{autoComplete:g,style:{paddingLeft:`${m}`},onChange:u,name:c,className:(0,s.A)(n.input,d,"center"===l?n.inputCenter:n.input),type:a,placeholder:i,required:o,value:_})})}},340:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(43);function n(e){const[t,a]=(0,s.useState)(e);return[t,function(){a(!t)}]}},861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var s=a(43),n=a(3),r=a(467),i=a(475),o=a(910),l=a(929),d=a(461),c=a(838),u=a(340),p=a(425);const _="RegisterForm_form__Tv43W",m="RegisterForm_inputs__Wb7ho",g="RegisterForm_inputWrapper__63Rq3",h="RegisterForm_inputIcon__TwsvE",x="RegisterForm_eyeIcon__PZ59+",v="RegisterForm_error__yDHjz",j="RegisterForm_buttonsContainer__WBAxD",C="RegisterForm_navLink__8t31+",N="RegisterForm_passwordStrengthBar__1CK-9",f="RegisterForm_passwordStrengthIndicator__Ce9Eh";var w=a(579);const A=function(){const[e,t]=(0,s.useState)(""),[a,A]=(0,s.useState)(""),[b,y]=(0,s.useState)(""),[k,R]=(0,s.useState)(""),[I,S]=(0,s.useState)(0),[F,z]=(0,s.useState)(""),P=(0,n.wA)(),[L,q]=(0,s.useState)("password"),[B,W]=(0,u.A)(!0),[Z,D]=(0,u.A)(!1),[E,Q]=(0,s.useState)("password"),[H,J]=(0,u.A)(!0),[M,O]=(0,u.A)(!1);return(0,w.jsxs)("form",{className:_,onSubmit:s=>{s.preventDefault(),b===k?P((0,r.kz)({username:e,email:a,password:b})).unwrap().then((()=>{t(""),A(""),y(""),R(""),z("")})).catch((e=>{z(e||"An unknown error occurred.")})):z("Passwords do not match.")},children:[(0,w.jsxs)("div",{className:m,children:[(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)(o.g,{icon:l.X46,className:h}),(0,w.jsx)(d.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"text",value:e,handleChange:e=>{t(e.target.value)},placeholder:"Name",required:!0})]}),(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)(o.g,{icon:l.y_8,className:h}),(0,w.jsx)(d.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"email",value:a,handleChange:e=>{A(e.target.value)},placeholder:"E-mail",required:!0})]}),(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)(o.g,{icon:l.DW4,className:h}),B&&(0,w.jsx)(p.gZ8,{onClick:()=>{W(),D(),q("text")},size:"24px",className:x}),Z&&(0,w.jsx)(p.iWd,{onClick:()=>{W(),D(),q("password")},size:"24px",className:x}),(0,w.jsx)(d.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:L,value:b,handleChange:e=>{const t=e.target.value;y(t),S((e=>{let t=0;return e.length>7&&(t+=1),e.length>10&&(t+=1),/[A-Z]/.test(e)&&(t+=1),/[0-9]/.test(e)&&(t+=1),/[^A-Za-z0-9]/.test(e)&&(t+=1),t})(t))},placeholder:"Password",required:!0})]}),(0,w.jsxs)("div",{className:g,children:[(0,w.jsx)(o.g,{icon:l.DW4,className:h}),H&&(0,w.jsx)(p.gZ8,{onClick:()=>{J(),O(),Q("text")},size:"24px",className:x}),M&&(0,w.jsx)(p.iWd,{onClick:()=>{J(),O(),Q("password")},size:"24px",className:x}),(0,w.jsx)(d.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:E,value:k,handleChange:e=>R(e.target.value),placeholder:"Confirm Password",required:!0})]}),(0,w.jsx)("div",{className:N,children:(0,w.jsx)("div",{className:f,style:{width:I/5*100+"%",backgroundColor:I<3?"red":I<4?"orange":"green"}})})]}),(0,w.jsxs)("div",{className:j,children:[(0,w.jsx)(c.A,{variant:"colored",type:"submit",children:"Register"}),F&&(0,w.jsx)("p",{className:v,children:F}),(0,w.jsxs)(c.A,{type:"button",children:[(0,w.jsx)(i.N_,{to:"/login",className:C,children:"Log in"})," "]})]})]})},b="RegistrationPage_container__o9QxY",y="RegistrationPage_backgroundImage__hZhz3",k="RegistrationPage_registrationPage__8V+L8",R="RegistrationPage_registrationContainer__Hk17k",I="RegistrationPage_logoContainer__jQ3qF";var S=a(805);const F=function(){return(0,w.jsxs)("div",{className:b,children:[(0,w.jsx)("div",{className:y}),(0,w.jsx)("div",{className:k,children:(0,w.jsxs)("div",{className:R,children:[(0,w.jsx)(S.A,{className:I}),(0,w.jsx)(A,{})]})})]})}}}]);
//# sourceMappingURL=861.2ba3cd81.chunk.js.map