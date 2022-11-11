import{bz as R,r as a,o as n,c as l,a as e,i as K,b as L,b9 as z,br as W,F as U,g as N,t as h,h as E,e as S,bA as q,bB as M,bs as P,p as Y,d as j,bC as H}from"./index.0c51494b.js";import{v as J}from"./validateName.6ce7ed4b.js";import{v as Q}from"./validateEmail.db033d63.js";import{_ as T}from"./BaseInput.88a58503.js";/* empty css                                                  */import{i as D}from"./index.min.da1b6411.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import{T as Z,_ as ee}from"./BaseHeading.ee76db84.js";import"./logo.5b10267d.js";const te="/api/all-roles",se="/api/admin/invite",oe="/api/invite/invited-users",ae="/api/invite/resend",ne="/api/invite/revoke/",le="/api/admin/users",re="/api/admin/user",ie="/api/admin/user-status";var k={ALL_ROLES_URL:te,INVITE_MEMBER_URL:se,INVITED_MEMBERS_LIST_URL:oe,REINVITE_URL:ae,REINVOKE_URL:ne,REGISTER_USER_LIST_URL:le,DELETE_USER_URL:re,ENABLE_USER_URL:ie};const ce=async()=>await R.get(k.ALL_ROLES_URL),de=async(r,i)=>await R.post(k.INVITE_MEMBER_URL,r,{headers:{Authorization:i}}),ue=async r=>await R.get(k.INVITED_MEMBERS_LIST_URL,{headers:{Authorization:r}}),_e=async(r,i)=>await R.post(k.REINVITE_URL,i,{headers:{Authorization:r}}),he=async(r,i)=>await R.delete(`${k.REINVOKE_URL}${i}`,{headers:{Authorization:r}}),me=async r=>await R.get(k.REGISTER_USER_LIST_URL,{headers:{Authorization:r}}),ve=async(r,i)=>await R.delete(`${k.DELETE_USER_URL}/${i}`,{headers:{Authorization:r}}),pe=async(r,i)=>await R.patch(`${k.ENABLE_USER_URL}/${i}`,null,{headers:{Authorization:r}});const be={key:0,class:"popup"},ye={class:"modal-dialog"},fe={class:"modal-content"},ge=e("h5",{class:"modal-title",id:"exampleModalLabel"},"Add New Member",-1),we={class:"modal-body"},Ce=["onSubmit"],xe={class:"mt-4"},Ee=e("label",{for:"roles"},[S("Roles "),e("span",{class:"text-danger"},"*")],-1),$e=["value","textContent"],Re=["textContent"],ke=e("div",{class:"mt-4 mb-2"},[e("button",{type:"submit",class:"btn btn-primary text-white"}," Send Invite ")],-1),Le={props:{handleInvitedMembers:Function},setup(r){const i=r,c=a(""),v=a(""),_=a(""),x=a(""),y=a(""),$=a(""),w=a(!1),u=a([]),m=a([]),d=D.exports.useToast(),b=a(!1),{handleInvitedMembers:I}=i;async function A(){try{const p=await ce();u.value=p.data.UserRoles}catch{m.value.push(response.data.message)}}A();async function B(){x.value="",y.value="",$.value="",m.value=[],w.value=!1;const{isValid:p,errorMessage:f}=J(c.value),{isValid:g,errorMessage:F}=Q(v.value);if(p||(x.value=f,c.value=""),g||(y.value=F,v.value=""),x.value===""&&y.value===""&&m.value.length===0)try{const{user:{id:V}}=q(),O={name:c.value,email:v.value,role_id:_.value,user_id:V},G=M();(await de(O,G)).status===200&&(w.value=!0,I(),d.success("Invite is sent successfully!!!"),o(),b.value=!1,setTimeout(()=>{w.value=!1},1500))}catch{d.error(response.data.message)}}function t(){b.value=!0}function s(){b.value=!1,o()}function o(){c.value="",v.value="",_.value=""}return(p,f)=>(n(),l(U,null,[e("div",{class:"my-3"},[e("button",{style:{height:"2.5rem",width:"10rem"},type:"button my-2",class:"btn btn-sm btn-primary text-white",onClick:t,"data-cy":"AddNewMemberModal"}," Add New Member ")]),b.value?(n(),l("div",be,[e("div",ye,[e("div",fe,[e("div",{class:"modal-header"},[ge,e("button",{onClick:s,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close","data-cy":"clearFieldWhenClose"})]),e("div",we,[e("form",{onSubmit:K(B,["prevent"])},[L(T,{type:"text",name:"name",label:"Full name",modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=g=>c.value=g),error:x.value},null,8,["modelValue","error"]),L(T,{type:"email",name:"email",label:"Email address",modelValue:v.value,"onUpdate:modelValue":f[1]||(f[1]=g=>v.value=g),error:y.value},null,8,["modelValue","error"]),e("div",xe,[Ee,u.value.length?z((n(),l("select",{key:0,class:"form-select mt-2","aria-label":"roles select menu","onUpdate:modelValue":f[2]||(f[2]=g=>_.value=g),required:""},[(n(!0),l(U,null,N(u.value,g=>(n(),l("option",{key:g.id,value:g.id,textContent:h(`${g.role.toUpperCase()}`)},null,8,$e))),128))],512)),[[W,_.value]]):E("",!0),$.value?(n(),l("div",{key:1,class:"form-text text-danger",textContent:h($.value)},null,8,Re)):E("",!0)]),ke],40,Ce)])])])])):E("",!0)],64))}},Me={class:"mt-2 fs-5"},Ue=S(" Invited Members "),Se=["textContent"],Ie={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},Be=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Ae={class:"mt-3 border border-bottom-0 rounded"},Ne={class:"table table-hover"},Ve=e("thead",{class:"text-primary"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Name"),e("th",{scope:"col"},"Email"),e("th",{scope:"col"},"Role"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action"),e("th",{scope:"col"})])],-1),Te={key:0},ze={key:1},De=["textContent"],Fe=["textContent"],Oe=["textContent"],Ge=["textContent"],Ke=["textContent"],We=["onClick"],qe=e("button",{class:"btn btn-light dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"true"},null,-1),Pe={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},Ye=["onClick"],je={setup(r){const i=a(0),c=a([]),v=a(!0);a([]);const _=a(""),x=u=>u===!1?"Wait":"Active";async function y(u,m){_.value="";try{const d=M(),b=await _e(d,{email:u,name:m});b.status==200&&w(),_.value=b.data.message}catch(d){console.log(d)}}async function $(u){_.value="";try{const m=M(),d=await he(m,u);_.value=d.data.message,d.status==200&&w()}catch(m){console.log(m)}}async function w(){try{const u=M(),m=await ue(u);c.value=m.data.invitedUsers,i.value=m.data.total,v.value=!1}catch(u){console.log(u)}}return w(),(u,m)=>(n(),l(U,null,[e("div",Me,[Ue,i.value?(n(),l("span",{key:0,textContent:h(`(${i.value})`)},null,8,Se)):E("",!0)]),_.value?(n(),l("div",Ie,[S(h(_.value)+" ",1),Be])):E("",!0),L(Le,{handleInvitedMembers:w}),e("div",Ae,[e("table",Ne,[Ve,v.value?(n(),l("p",Te,"Loading...")):E("",!0),c.value.length?(n(),l("tbody",ze,[(n(!0),l(U,null,N(c.value,(d,b)=>(n(),l("tr",{key:b},[e("th",{scope:"row",textContent:h(`${b+1}`)},null,8,De),e("td",{textContent:h(d.name)},null,8,Fe),e("td",{class:"gray-color",textContent:h(d.email)},null,8,Oe),e("td",{textContent:h(d.role.role.toUpperCase())},null,8,Ge),e("td",{class:"gray-color",textContent:h(x(d.inviteAccepted))},null,8,Ke),e("td",null,[e("button",{class:"btn btn-light btn-sm",onClick:I=>y(d.email,d.name)}," Reinvite ",8,We)]),e("td",null,[qe,e("ul",Pe,[e("li",null,[e("a",{class:"dropdown-item",onClick:I=>$(d.id)}," Revoke ",8,Ye)])])])]))),128))])):E("",!0)])])],64))}};const C=r=>(Y("data-v-316e9f76"),r=r(),j(),r),He={class:"mt-5 fs-5"},Je=S(" All Members "),Qe=["textContent"],Xe={class:"my-3"},Ze={class:"mt-3 border border-bottom-0 rounded"},et={class:"table table-hover"},tt={class:"text-primary"},st=C(()=>e("th",{scope:"col"},[S("# "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[e("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})])],-1)),ot=S(" Name "),at=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[e("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})],-1)),nt=[ot,at],lt=S(" Email "),rt=C(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[e("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})],-1)),it=[lt,rt],ct=C(()=>e("th",{scope:"col"},"Role",-1)),dt=C(()=>e("th",{scope:"col"},"Status",-1)),ut=C(()=>e("th",{scope:"col"},"Action",-1)),_t={key:0},ht=["textContent"],mt=["textContent"],vt=["textContent"],pt={key:0,class:"btn btn-light btn-sm text-primary"},bt=["onClick","textContent"],yt={class:"dropdown"},ft=C(()=>e("button",{class:"btn btn-light dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"true"},null,-1)),gt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},wt={key:0},Ct=C(()=>e("span",null,"Sorry, You can't delete Admin user!!!",-1)),xt=[Ct],Et={key:1},$t=["onClick"],Rt={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},kt={class:"modal-dialog modal-dialog-centered"},Lt={class:"modal-content"},Mt=C(()=>e("div",{class:"modal-header text-center border-0"},[e("h5",{class:"modal-title w-100",id:"staticBackdropLabel"}," Are you sure you want to delete? ")],-1)),Ut={class:"modal-footer pull-right justify-content-center border-0"},St=C(()=>e("button",{type:"button",class:"btn btn-secondary-outline","data-bs-dismiss":"modal","data-cy":"cancelDeleteRegisteredMember"}," Cancel ",-1)),It={setup(r){const i=a(0),c=a([]),v=a(c.value),_=a(!0),x=a(!0),y=D.exports.useToast();a("desc"),a("desc");const $=a(null);function w(t){$.value=t}async function u(){try{const t=M(),s=await me(t);c.value=s.data.users,i.value=s.data.total,_.value=!1}catch{alert(response.data.message)}}async function m(){try{const t=M(),s=await ve(t,c.value[$.value].id);_.value=!1,s.status==200&&(u(),y.success(s.data.message))}catch{y.error("User could not be deleted, please try again later")}}async function d(t){try{const s=M(),o=await pe(s,c.value[t].id);_.value=!1,o.status==200&&(u(),y.success(o.data.message))}catch{y.error("User status could not be changed, please try again later.")}}function b(t){return t=="1"?"Disable":"Enable"}function I(t){v.value.splice(0,c.value.length),c.value.forEach(s=>{s.name.includes(t)&&v.value.push(s),x.value=!1})}function A(t,s){return function(o,p){if(s==="asc")return o[t].toLowerCase()<p[t].toLowerCase()?1:o[t].toLowerCase()>p[t].toLowerCase()?-1:0;if(s==="desc")return o[t].toLowerCase()>p[t].toLowerCase()?1:o[t].toLowerCase()<p[t].toLowerCase()?-1:0}}function B(t){t==="email"&&(this.emailSortBy==="desc"?this.emailSortBy="asc":this.emailSortBy="desc"),t==="name"&&(this.nameSortBy==="desc"?this.nameSortBy="asc":this.nameSortBy="desc");let s=null;t==="email"&&(s=this.emailSortBy),t==="name"&&(s=this.nameSortBy),c.value.sort(A(t,s))}return u(),(t,s)=>(n(),l(U,null,[e("div",He,[Je,i.value?(n(),l("span",{key:0,textContent:h(`(${i.value})`)},null,8,Qe)):E("",!0)]),e("div",Xe,[z(e("input",{style:{width:"20rem",height:"2.5rem"},class:"searchButton",type:"text",placeholder:"Search..","onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),onInput:s[1]||(s[1]=o=>I(t.value))},null,544),[[P,t.value]])]),e("div",Ze,[e("table",et,[e("thead",tt,[e("tr",null,[st,e("th",{onClick:s[2]||(s[2]=o=>B("name")),scope:"col"},nt),e("th",{onClick:s[3]||(s[3]=o=>B("email")),scope:"col"},it),ct,dt,ut])]),_.value?(n(),l("p",_t,"Loading...")):E("",!0),e("tbody",null,[(n(!0),l(U,null,N(x.value?c.value:v.value,(o,p)=>(n(),l("tr",{key:o.id},[e("th",{scope:"row",textContent:h(p+1)},null,8,ht),e("td",{textContent:h(o.name)},null,8,mt),e("td",{textContent:h(o.email)},null,8,vt),e("td",null,h(o.role[0].role.toUpperCase()),1),e("td",null,h(b(o.active_status)==="Enable"?"Disabled":"Enabled"),1),e("td",null,[o.role[0].role==="admin"?(n(),l("span",pt,"Admin")):(n(),l("button",{key:1,class:"btn btn-light btn-sm",onClick:f=>d(p),textContent:h(b(o.active_status))},null,8,bt))]),e("td",yt,[ft,e("ul",gt,[o.role[0].role==="admin"?(n(),l("li",wt,xt)):(n(),l("li",Et,[e("button",{type:"button",class:"btn btn-light btn-sm mx-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop","data-cy":"deleteRegisteredMember",onClick:f=>w(p)}," Delete ",8,$t)]))]),e("div",Rt,[e("div",kt,[e("div",Lt,[Mt,e("div",Ut,[St,e("button",{type:"button",class:"btn btn-primary-outline text-primary",onClick:s[4]||(s[4]=f=>m()),"data-bs-dismiss":"modal","data-cy":"deleteRegisteredUserSuccessfully"}," Delete ")])])])])])]))),128))])])])],64))}};var Bt=X(It,[["__scopeId","data-v-316e9f76"]]);const At={class:"teams__container"},qt={setup(r){const i=H();return i.userStatus=!1,(c,v)=>(n(),l(U,null,[L(Z),e("main",null,[L(ee,{title:"Teams"}),e("div",At,[L(je),L(Bt)])])],64))}};export{qt as default};
