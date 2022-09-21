import{r as u,o as l,c as n,a as s,u as d,b as i,F as c,g,h,i as w,w as y,R as k,e as x,k as b,x as V}from"./index.98eba871.js";import{_ as E}from"./BaseFormHeading.b81b1922.js";import{_ as R}from"./BaseAlert.vue_vue_type_style_index_0_lang.68c3382f.js";import{_ as N}from"./BaseAlert.b33af321.js";import{v as S}from"./validateEmail.6be92a2d.js";import{l as T}from"./logo.f5257f33.js";const B=["src"],F={class:"d-grid col-md-8 col-lg-5 mx-auto"},P={key:0},$=["onSubmit"],C=s("div",{class:"d-grid"},[s("button",{class:"btn btn-primary mt-3 text-white","data-cy":"forgetPasswordResetButton"},"Get reset link")],-1),L={class:"mt-4"},M=x(" Never mind! "),D=s("u",null," Take me back to login",-1),A={setup(G){const t=u(""),o=u(""),a=u([]),_=b();async function f(){o.value="",a.value=[];const{isValid:m,errorMessage:r}=S(t.value);if(m||(o.value=r,t.value=""),o.value===""&&a.value.length===0)try{const e=await V(t.value),{status:p,statusText:v}=e;p===200&&v==="OK"&&_.push({name:"passwordResetSent"})}catch(e){e.response.status===404?a.value.push(e.response.data.message):a.value.push("Something went wrong, please try again later"),t.value=""}}return(m,r)=>(l(),n(c,null,[s("img",{src:d(T),alt:"Ticker logo",class:"logo"},null,8,B),s("div",F,[i(E,{title:"Reset password",shortDesc:"To reset your password, enter the email address you use to login."}),a.value.length?(l(),n("div",P,[(l(!0),n(c,null,g(a.value,e=>(l(),n("div",{key:e},[i(N,{message:e,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):h("",!0),s("form",{onSubmit:w(f,["prevent"])},[i(R,{type:"email",name:"email",label:"Email address",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),error:o.value,"data-cy":"forgetPasswordEmail"},null,8,["modelValue","error"]),C],40,$),s("p",L,[M,i(d(k),{to:{name:"login"},class:"text-secondary fw-normal"},{default:y(()=>[D]),_:1})])])],64))}};export{A as default};