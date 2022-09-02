import{o as u,c as d,a as o,n as L,r as n,f as N,u as l,b as i,F as y,g as $,h as B,i as C,j as R,w as S,R as F,e as T,k as U,l as M,m as j}from"./index.247ea62d.js";import{_ as b,a as q}from"./BaseAlert.aef924b9.js";import{_ as O}from"./BaseFormHeading.e73ac2e4.js";import{v as z}from"./validateEmail.6be92a2d.js";import{v as A}from"./validatePassword.1dd98178.js";import{l as D}from"./logo.f5257f33.js";function I(m){localStorage.setItem("user",JSON.stringify(m))}const J={class:"toggle_button"},W={props:{showPassword:{type:Boolean,required:!0}},emits:["togglePassword"],setup(m,{emit:c}){function w(){c("togglePassword")}return(_,e)=>(u(),d("span",J,[o("i",{class:L(["bi toggle_icon",m.showPassword?"bi-eye":"bi-eye-slash"]),id:"showPassword",onClick:w},null,2)]))}};const G=["src"],H={class:"d-grid col-md-8 col-lg-5 mx-auto"},K={key:0},Q=["onSubmit"],X={class:"mb-3"},Y={class:"input_form"},Z=T("Forgot password?"),ee={class:"d-grid"},se=["disabled"],ne={setup(m){const c=U(),_=M().query.next,e=n({email:"",password:""}),p=n(""),v=n(""),r=n([]);let t=n(!1);const P=N(()=>e.value.email===""||e.value.password==="");async function x(){r.value=[],p.value="",v.value="";const{isValid:f,errorMessage:a}=z(e.value.email),{isValid:s,errorMessage:V}=A(e.value.password);if(f||(p.value=a,e.value.email=""),s||(v.value=V,e.value.password=""),r.value.length===0&&!v.value&&!p.value){const k={email:e.value.email,password:e.value.password};try{const g=await j(k),{data:h,status:E}=g;h&&E===200&&(I(h),_?c.push(_):c.push({name:"tracker"}))}catch(g){g.message==="Network Error"?r.value.push("Something went wrong, please try again later."):g.response.status===401?(r.value.push("Please enter valid email or password."),e.value.email="",e.value.password=""):(r.value.push("Could not login right now. Please try again later."),e.value.email="",e.value.password="")}}}return(f,a)=>(u(),d(y,null,[o("img",{src:l(D),alt:"Proshore Ticker logo",class:"logo"},null,8,G),o("div",H,[i(O,{title:"Log in",shortDesc:"Welcome back!"}),r.value.length?(u(),d("div",K,[(u(!0),d(y,null,$(r.value,s=>(u(),d("div",{key:s},[i(q,{message:s,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):B("",!0),o("form",{onSubmit:C(x,["prevent"])},[o("div",X,[i(b,{type:"email",name:"email",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.email=s),error:p.value,"data-cy":"loginEmailAddress"},null,8,["modelValue","error"]),o("div",Y,[i(b,{type:l(t)?"text":"password",name:"password",label:"Password",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.password=s),error:v.value,"data-cy":"loginPassword"},null,8,["type","modelValue","error"]),i(W,{showPassword:l(t),onTogglePassword:a[2]||(a[2]=s=>R(t)?t.value=!l(t):t=!l(t))},null,8,["showPassword"])])]),i(l(F),{to:{name:"passwordForgot"},class:"forgot-password"},{default:S(()=>[Z]),_:1}),o("div",ee,[o("button",{type:"submit",class:"btn btn-primary text-white",disabled:l(P)}," Log in ",8,se)])],40,Q)])],64))}};export{ne as default};
