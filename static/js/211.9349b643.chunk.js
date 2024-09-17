"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[211],{5805:(e,s,r)=>{r.d(s,{A:()=>t});r(5043);const a=r.p+"static/media/icon.f07fbab0ef8427fbc29843f3c96e56f9.svg";var n=r(579);const t=function(e){let{className:s}=e;return(0,n.jsxs)("div",{className:s,children:[(0,n.jsx)("img",{src:a,alt:"Icon"}),(0,n.jsx)("span",{children:"Money Guard"})]})}},8838:(e,s,r)=>{r.d(s,{A:()=>d});var a=r(8387);r(5043);const n="Button_button__NPUGC",t="Button_coloredButton__qrbiU",i="Button_whiteButton__pRFHg";var o=r(579);const d=function(e){let{type:s,children:r,variant:d="",handleClick:l,disabled:c,className:u}=e;return(0,o.jsx)("button",{disabled:c,onClick:l,type:s,className:(0,a.A)(u,n,"colored"===d?t:i),children:r})}},2461:(e,s,r)=>{r.d(s,{A:()=>i});r(5043);var a=r(8387);const n={inputContainer:"Input_inputContainer__iR9nS",input:"Input_input__eMbXz",inputCenter:"Input_inputCenter__X8De3",inputInfo:"Input_inputInfo__nE2k5"};var t=r(579);function i(e){let{type:s,placeholder:r,required:i,variant:o="",className:d,name:l,handleChange:c,width:u,value:p,paddingLeft:m,autoComplete:h,handleBlur:_}=e;return(0,t.jsx)("div",{style:{width:u||"auto"},className:n.inputContainer,children:(0,t.jsx)("input",{autoComplete:h||"off",style:{paddingLeft:m||"0px"},onChange:c,name:l||"",className:(0,a.A)(n.input,d,"center"===o?n.inputCenter:n.input),type:s||"text",placeholder:r||"",required:i||!1,value:p||"",onBlur:_})})}},2870:(e,s,r)=>{r.d(s,{A:()=>n});var a=r(5043);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[s,r]=(0,a.useState)(Object.keys(e).reduce(((e,s)=>(e[s]=!1,e)),{}));return{touched:s,handleBlur:e=>()=>{r((s=>({...s,[e]:!0})))}}}},1313:(e,s,r)=>{r.d(s,{A:()=>n});var a=r(5043);const n=(e,s)=>{const[r,n]=(0,a.useState)(e),[t,i]=(0,a.useState)({});return{fields:r,setFields:n,errors:t,validateFields:()=>{const e=s(r);return i(e),0===Object.keys(e).length}}}},5340:(e,s,r)=>{r.d(s,{A:()=>n});var a=r(5043);function n(e){const[s,r]=(0,a.useState)(e);return[s,function(){r(!s)}]}},7211:(e,s,r)=>{r.r(s),r.d(s,{default:()=>I});var a=r(5043),n=r(3003),t=r(1870),i=r(5475),o=r(3910),d=r(7929),l=r(2461),c=r(8838),u=r(5340),p=r(1036),m=r(5659),h=r(1313);const _=e=>{const s={};return e.username||(s.username="Username is required"),e.password.length<6&&(s.password="Password must be at least 6 characters!"),e.email||(s.email="Email is required"),e.password||(s.password="Password is required"),e.passwordConfirm?e.password!==e.passwordConfirm&&(s.passwordConfirm="Passwords do not match"):s.passwordConfirm="Password confirmation is required",s};var g=r(2870);const x=e=>{const[s,r]=(0,a.useState)(0);return(0,a.useEffect)((()=>{r((e=>{let s=0;return e.length>7&&(s+=1),e.length>10&&(s+=1),/[A-Z]/.test(e)&&(s+=1),/[0-9]/.test(e)&&(s+=1),/[^A-Za-z0-9]/.test(e)&&(s+=1),s})(e))}),[e]),s},w={form:"RegisterForm_form__JLIsD",input:"RegisterForm_input__Ruvkk",inputs:"RegisterForm_inputs__huA+P",inputWrapper:"RegisterForm_inputWrapper__SNYru",inputError:"RegisterForm_inputError__IICbw",inputIcon:"RegisterForm_inputIcon__KiSab",eyeIcon:"RegisterForm_eyeIcon__deu0j",error:"RegisterForm_error__xvplm",buttonsContainer:"RegisterForm_buttonsContainer__01z9X",navLink:"RegisterForm_navLink__l7tYm",passwordStrengthBar:"RegisterForm_passwordStrengthBar__+aJOz",passwordStrengthIndicator:"RegisterForm_passwordStrengthIndicator__BW0WV"};var f=r(579);const v=function(){const{fields:e,setFields:s,validateFields:r}=(0,h.A)({username:"",email:"",password:"",passwordConfirm:""},_),{touched:v,handleBlur:C}=(0,g.A)(),j=x(e.password),[N,R]=(0,a.useState)(""),y=(0,n.wA)(),[A,I]=(0,a.useState)("password"),[b,k]=(0,u.A)(!0),[S,B]=(0,u.A)(!1),[F,q]=(0,a.useState)("password"),[P,W]=(0,u.A)(!0),[E,L]=(0,u.A)(!1);return(0,f.jsxs)("form",{className:w.form,onSubmit:a=>{if(a.preventDefault(),!r())return;const{passwordConfirm:n,...i}=e;y((0,t.kz)(i)).unwrap().then((()=>{s({username:"",email:"",password:"",passwordConfirm:""}),p.oR.success("Registration successful!")})).catch((e=>{console.error(e),R("Account with this email already exists."),p.oR.error("Account with this email already exists.")}))},children:[(0,f.jsx)(p.N9,{}),(0,f.jsxs)("div",{className:w.inputs,children:[(0,f.jsxs)("div",{className:w.inputContainer,children:[(0,f.jsxs)("div",{className:w.inputWrapper,children:[(0,f.jsx)(o.g,{icon:d.X46,className:w.inputIcon}),(0,f.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"text",value:e.username,handleChange:r=>{s({...e,username:r.target.value})},handleBlur:C("username"),placeholder:"Name",required:!0})]}),v.username&&!e.username&&(0,f.jsx)("p",{className:w.inputError,children:"Required"})]}),(0,f.jsxs)("div",{className:w.inputContainer,children:[(0,f.jsxs)("div",{className:w.inputWrapper,children:[(0,f.jsx)(o.g,{icon:d.y_8,className:w.inputIcon}),(0,f.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"email",value:e.email,handleChange:r=>{s({...e,email:r.target.value})},handleBlur:C("email"),placeholder:"E-mail",required:!0})]}),v.email&&!e.email&&(0,f.jsx)("p",{className:w.inputError,children:"Required"})]}),(0,f.jsxs)("div",{className:w.inputContainer,children:[(0,f.jsxs)("div",{className:w.inputWrapper,children:[(0,f.jsx)(o.g,{icon:d.DW4,className:w.inputIcon}),b&&(0,f.jsx)(m.gZ8,{onClick:()=>{k(),B(),I("text")},size:"24px",className:w.eyeIcon}),S&&(0,f.jsx)(m.iWd,{onClick:()=>{k(),B(),I("password")},size:"24px",className:w.eyeIcon}),(0,f.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:A,value:e.password,handleChange:r=>{s({...e,password:r.target.value})},handleBlur:C("password"),placeholder:"Password",required:!0})]}),v.password&&!e.password&&(0,f.jsx)("p",{className:w.inputError,children:"Required"})]}),(0,f.jsxs)("div",{className:w.inputContainer,children:[(0,f.jsxs)("div",{className:w.inputWrapper,children:[(0,f.jsx)(o.g,{icon:d.DW4,className:w.inputIcon}),P&&(0,f.jsx)(m.gZ8,{onClick:()=>{W(),L(),q("text")},size:"24px",className:w.eyeIcon}),E&&(0,f.jsx)(m.iWd,{onClick:()=>{W(),L(),q("password")},size:"24px",className:w.eyeIcon}),(0,f.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:F,value:e.passwordConfirm,handleChange:r=>s({...e,passwordConfirm:r.target.value}),handleBlur:C("passwordConfirm"),placeholder:"Confirm Password",required:!0})]}),v.passwordConfirm&&!e.passwordConfirm&&(0,f.jsx)("p",{className:w.inputError,children:"Required"}),v.passwordConfirm&&e.password!==e.passwordConfirm&&(0,f.jsx)("p",{className:w.inputError,children:"Passwords must match"})]}),(0,f.jsx)("div",{className:w.passwordStrengthBar,children:(0,f.jsx)("div",{className:w.passwordStrengthIndicator,style:{width:j/5*100+"%",backgroundColor:j<3?"red":j<4?"orange":"green"}})})]}),(0,f.jsxs)("div",{className:w.buttonsContainer,children:[(0,f.jsx)(c.A,{variant:"colored",type:"submit",children:"Register"}),N&&(0,f.jsx)("p",{className:w.error,children:N}),(0,f.jsxs)(c.A,{type:"button",children:[(0,f.jsx)(i.N_,{to:"/login",className:w.navLink,children:"Log in"})," "]})]})]})},C="RegistrationPage_container__H7MVj",j="RegistrationPage_backgroundImage__wXJOR",N="RegistrationPage_registrationPage__QRQrT",R="RegistrationPage_registrationContainer__zOeU1",y="RegistrationPage_logoContainer__Ypn-Q";var A=r(5805);const I=function(){return(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("div",{className:j}),(0,f.jsx)("div",{className:N,children:(0,f.jsxs)("div",{className:R,children:[(0,f.jsx)(A.A,{className:y}),(0,f.jsx)(v,{})]})})]})}}}]);
//# sourceMappingURL=211.9349b643.chunk.js.map