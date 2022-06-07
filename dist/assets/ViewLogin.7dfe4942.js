import{r as u,f as E,o as d,c as m,a as r,u as c,b as t,F as w,g as L,h as N,i as P,w as S,R as B,e as F,j as R,k as U,l as C}from"./index.e8fa8bee.js";import{_ as h,a as M}from"./BaseAlert.852979f4.js";import{_ as $}from"./BaseFormHeading.066596ae.js";import{v as j}from"./validateEmail.db033d63.js";import{v as O}from"./validatePassword.7ebb3638.js";import{l as T}from"./logo.bccff2c0.js";function q(v){localStorage.setItem("user",JSON.stringify(v))}const D=["src"],I={class:"d-grid col-md-8 col-lg-5 mx-auto"},J={key:0},W=["onSubmit"],z={class:"mb-3"},A=F("Forgot password?"),G={class:"d-grid"},H=["disabled"],se={setup(v){const p=R(),f=U().query.next,e=u({email:"",password:""}),l=u(""),i=u(""),s=u([]),b=E(()=>e.value.email===""||e.value.password==="");async function y(){s.value=[],l.value="",i.value="";const{isValid:g,errorMessage:o}=j(e.value.email),{isValid:a,errorMessage:V}=O(e.value.password);if(g||(l.value=o,e.value.email=""),a||(i.value=V,e.value.password=""),s.value.length===0&&!i.value&&!l.value){const k={email:e.value.email,password:e.value.password};try{const n=await C(k),{data:_,status:x}=n;_&&x===200&&(q(_),f?p.push(f):p.push({name:"tracker"}))}catch(n){n.message==="Network Error"?s.value.push("Something went wrong, please try again later."):n.response.status===401?(s.value.push("Please enter valid email or password."),e.value.email="",e.value.password=""):(s.value.push("Could not login right now. Please try again later."),e.value.email="",e.value.password="")}}}return(g,o)=>(d(),m(w,null,[r("img",{src:c(T),alt:"Ticker logo",class:"logo"},null,8,D),r("div",I,[t($,{title:"Log in",shortDesc:"Welcome back!"}),s.value.length?(d(),m("div",J,[(d(!0),m(w,null,L(s.value,a=>(d(),m("div",{key:a},[t(M,{message:a,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):N("",!0),r("form",{onSubmit:P(y,["prevent"])},[r("div",z,[t(h,{type:"email",name:"email",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.email=a),error:l.value},null,8,["modelValue","error"]),t(h,{type:"password",name:"password",label:"Password",modelValue:e.value.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value.password=a),error:i.value},null,8,["modelValue","error"])]),t(c(B),{to:{name:"passwordForgot"},class:"forgot-password"},{default:S(()=>[A]),_:1}),r("div",G,[r("button",{type:"submit",class:"btn btn-primary text-white",disabled:c(b)}," Log in ",8,H)])],40,W)])],64))}};export{se as default};
