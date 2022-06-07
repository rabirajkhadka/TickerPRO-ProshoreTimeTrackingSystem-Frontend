import{r as l,o as g,c as V,a as t,u as f,b as r,w as h,R as C,h as E,i as R,F as M,e as u,k as N,v as T}from"./index.e8fa8bee.js";import{_ as S}from"./BaseFormHeading.066596ae.js";import{a as B,_ as v}from"./BaseAlert.852979f4.js";import{v as U}from"./validateEmail.db033d63.js";import{v as $}from"./validatePassword.7ebb3638.js";import{l as q}from"./logo.bccff2c0.js";function F(m,w){const s={isValid:!0,errorMessage:""};return m===""?(s.isValid=!1,s.errorMessage="Confirm password field is required.",s):(m!==w&&(s.isValid=!1,s.errorMessage="Password and confirm password fields do not match."),s)}const L=["src"],j={class:"d-grid col-md-8 col-lg-5 mx-auto"},D={key:0,class:"alert alert-success",role:"alert"},z=u(" Password reset successfully! "),A=u("Login"),G=u(" to start using Ticker. "),H=["onSubmit"],I=t("div",{class:"d-grid"},[t("button",{type:"submit",class:"btn btn-primary text-white mt-3"}," Password reset ")],-1),J={class:"mt-4"},K=u(" Never mind! "),O=t("u",null," Take me back to login",-1),ae={setup(m){const s=N().query.token,e=l({email:"",password:"",passwordConfirmation:""}),i=l(""),n=l(""),d=l(""),c=l(""),p=l(!1);async function y(){i.value="",n.value="",d.value="",c.value="",p.value=!1;const{isValid:_,errorMessage:a}=U(e.value.email),{isValid:o,errorMessage:k}=$(e.value.password),{isValid:b,errorMessage:P}=F(e.value.passwordConfirmation,e.value.password);if(_||(i.value=a,e.value.email=""),o||(n.value=k,e.value.password=""),b||(d.value=P,e.value.passwordConfirmation=""),i.value===""&n.value===""&&d.value===""){const x={email:e.value.email,password:e.value.password,password_confirmation:e.value.passwordConfirmation,token:s};try{await T(x),p.value=!0,e.value.email="",e.value.password="",e.value.passwordConfirmation=""}catch{c.value="Something went wrong, please try again later."}}}return(_,a)=>(g(),V(M,null,[t("img",{src:f(q),alt:"Ticker logo",class:"logo"},null,8,L),t("div",j,[r(S,{title:"Password Reset",shortDesc:"Reset password to restart your journey with Ticker."}),p.value?(g(),V("div",D,[z,r(f(C),{to:{name:"login"},class:"alert-link text-decoration-underline"},{default:h(()=>[A]),_:1}),G])):E("",!0),r(B,{message:c.value,"hex-font-color":"ff0000"},null,8,["message"]),t("form",{onSubmit:R(y,["prevent"])},[r(v,{type:"email",name:"email",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.email=o),error:i.value},null,8,["modelValue","error"]),r(v,{type:"password",name:"password",label:"New password",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value.password=o),error:n.value},null,8,["modelValue","error"]),r(v,{type:"password",name:"password-confirmation",label:"Confirm password",modelValue:e.value.passwordConfirmation,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value.passwordConfirmation=o),error:d.value},null,8,["modelValue","error"]),I,t("p",J,[K,r(f(C),{to:{name:"login"},class:"text-secondary fw-normal"},{default:h(()=>[O]),_:1})])],40,H)])],64))}};export{ae as default};
