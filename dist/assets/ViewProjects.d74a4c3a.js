import{r as l,C as N,o as s,c as o,a as e,F as b,g as w,t as u,A as I,i as U,x as R,h as j,b as h,y as k,z as S,n as D,G as z,e as L,B as F,E as G}from"./index.3d1a6b33.js";import{T as q,_ as H}from"./BaseHeading.69f9ca9b.js";import{p as J,e as K,a as O}from"./index.5b7b62f7.js";import{v as Q}from"./validateName.6ce7ed4b.js";import{a as V,_ as W}from"./BaseAlert.5c41d31b.js";import"./logo.bccff2c0.js";import"./plugin-vue_export-helper.21dcd24c.js";const X={class:"mt-3 border border-bottom-0 rounded"},Y={class:"table table-hover"},Z=e("thead",{class:"text-primary"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Project Name"),e("th",{scope:"col"},"Color"),e("th",{scope:"col"},"Client Id"),e("th",{scope:"col"},"Billable"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action")])],-1),ee=["onClick","textContent"],te={setup(v){const i=l(!0),c=l([]),f=N();async function _(){try{const n=await J(f);n.status===200&&(c.value=n.data.users)}catch{alert("Something went wrong, please try again later")}}_();async function d(n){try{const m=await K(f,n);i.value=!1,m.status==200&&(alert("Project status changed successfully"),_())}catch{alert("Something went wrong, please try again later")}}function x(n){return n=="1"?"Disable":"Enable"}return(n,m)=>(s(),o("div",X,[e("table",Y,[Z,e("tbody",null,[(s(!0),o(b,null,w(c.value,(r,g)=>(s(),o("tr",{key:r.id},[e("td",null,u(g+1),1),e("td",null,u(r.project_name),1),e("td",null,u(r.project_color_code),1),e("td",null,u(r.client_id),1),e("td",null,u(r.billable),1),e("td",null,u(x(r.status)),1),e("td",null,[e("button",{class:"btn btn-light btn-sm",onClick:y=>d(r.id),textContent:u(x(r.status)==="Enable"?"Disable":"Enable")},null,8,ee)])]))),128))])])]))}},ae="/api/client/view-client";var le={CLIENT_LIST_URL:ae};const se=async v=>await I.get(le.CLIENT_LIST_URL,{headers:{Authorization:v}});function oe(v){return v?{isValid:!0,errorMessage:""}:{isValid:!1,errorMessage:"Color field is required."}}const ne=e("button",{type:"button",class:"btn btn-sm btn-primary text-white","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Add Project ",-1),re={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ie={class:"modal-dialog"},ce={class:"modal-content"},ue=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"Create New Project"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),de={class:"modal-body"},me=["onSubmit"],_e={key:1},ve={class:"mt-4"},pe=e("label",{class:"form-label"},[L("Color"),e("span",{class:"text-danger"},"*")],-1),be=["error"],he=["value","textContent"],fe={class:"mt-4"},ge=e("label",{class:"form-label",for:"client-id"},[L("Client Name"),e("span",{class:"text-danger"},"*")],-1),ye=["error"],Ce=["value","textContent"],xe={class:"mt-4"},we=e("label",{for:"billable"},"Billable",-1),je=e("div",{class:"mt-4 mb-2"},[e("button",{type:"submit",class:"btn btn-primary text-white"}," CREATE ")],-1),ke={setup(v){const i=l(""),c=l(""),f=l([{id:1,name:"Black",hex:"#000000"},{id:2,name:"Red",hex:"#ff0000"},{id:3,name:"Blue",hex:"#0000ff"},{id:3,name:"Green",hex:"#008000"}]),_=l(""),d=l("0"),x=l(1),n=l([]),m=l(""),r=l(""),g=l(""),y=l(!1),C=l([]),E=N();async function T(p){try{const a=await se(p);a.status===200&&(n.value=a.data.users)}catch{alert("Something went wrong, please try again later")}}T(E);async function M(){m.value="",r.value="",g.value="",C.value=[],y.value=!1;const{isValid:p,errorMessage:a}=Q(i.value),{isValid:t,errorMessage:$}=oe(c.value);if(p||(r.value=$,c.value=""),t||(m.value=a,i.value=""),m.value===""&&g.value===""&&C.value.length===0)try{const{user:{id:P}}=F();d.value=d.value===!0?"1":"0";const B={project_name:i.value,client_id:_.value,billable:d.value,status:x.value,project_color_code:c.value,user_id:P},A=N();(await O(B,A)).status===200&&(y.value=!0,location.reload(),setTimeout(()=>{y.value=!1},3e3),i.value="",_.value="",d.value="",c.value="")}catch{C.value.push("Something went wrong, please try again later.")}}return(p,a)=>(s(),o(b,null,[ne,e("div",re,[e("div",ie,[e("div",ce,[ue,e("div",de,[e("form",{onSubmit:U(M,["prevent"])},[y.value?(s(),R(V,{key:0,message:"Project add successfully!","hex-font-color":"198754"})):j("",!0),C.value.length?(s(),o("div",_e,[(s(!0),o(b,null,w(C.value,t=>(s(),o("div",{key:t},[h(V,{message:t,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):j("",!0),h(W,{type:"text",name:"project_name",label:"Project name",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=t=>i.value=t),error:m.value},null,8,["modelValue","error"]),e("div",ve,[pe,k(e("select",{id:"color","onUpdate:modelValue":a[1]||(a[1]=t=>c.value=t),onChange:a[2]||(a[2]=(...t)=>p.onChangeRole&&p.onChangeRole(...t)),class:"form-select",error:r.value},[(s(!0),o(b,null,w(f.value,t=>(s(),o("option",{key:t.id,value:t.name,style:D({color:t.hex}),textContent:u(t.name)},null,12,he))),128))],40,be),[[S,c.value]])]),e("div",fe,[ge,n.value.length?k((s(),o("select",{key:0,id:"client-id","onUpdate:modelValue":a[3]||(a[3]=t=>_.value=t),class:"form-select",error:g.value},[(s(!0),o(b,null,w(n.value,t=>(s(),o("option",{key:t.id,value:t.id,textContent:u(t.client_name)},null,8,Ce))),128))],8,ye)),[[S,_.value]]):j("",!0)]),e("div",xe,[we,k(e("input",{type:"radio",value:"true","onUpdate:modelValue":a[4]||(a[4]=t=>d.value=t),name:"billable"},null,512),[[z,d.value]])]),je],40,me)])])])])],64))}},$e={setup(v){const i=G();return i.userStatus=!1,(c,f)=>(s(),o(b,null,[h(q),e("main",null,[h(H,{title:"Projects"}),h(ke),h(te)])],64))}};export{$e as default};