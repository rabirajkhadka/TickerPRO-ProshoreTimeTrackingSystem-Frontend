import{o as r,c as _,a as s,b as e,w as a,u as t,R as n,p as v,d as m,D as p,t as l}from"./index.247ea62d.js";import{l as u}from"./logo.f5257f33.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var g="/assets/s-tracker.c4f0921c.svg",f="/assets/s-projects.76911225.svg",k="/assets/s-teams.59664014.svg",x="/assets/s-clients.b097ff39.svg",b="/assets/s-reports.9f018d67.svg",w="/assets/s-settings.008903eb.svg";const o=c=>(v("data-v-15b50f1d"),c=c(),m(),c),S={class:"navbar"},T={class:"navbar-nav"},y={class:"nav-item mb-5 mt-2"},C=["src"],j={class:"nav-item"},B=["src"],R=o(()=>s("span",{class:"link-text"},"Tracker",-1)),$=o(()=>s("p",{class:"mt-3 fw-bolder fs-6 mb-2 nav-p"},"Manage",-1)),I={class:"nav-item"},H=["src"],P=o(()=>s("span",{class:"link-text"},"Projects",-1)),V={class:"nav-item"},D=["src"],M=o(()=>s("span",{class:"link-text"},"Teams",-1)),N={class:"nav-item"},q=["src"],E=o(()=>s("span",{class:"link-text"},"Clients",-1)),L={class:"nav-item"},U=["src"],z=o(()=>s("span",{class:"link-text"},"Reports",-1)),A={class:"nav-item"},F=["src"],G=o(()=>s("span",{class:"link-text"},"Settings",-1)),J={setup(c){return(i,d)=>(r(),_("nav",S,[s("ul",T,[s("li",y,[e(t(n),{to:"no-link",class:"nav-link"},{default:a(()=>[s("img",{src:t(u),alt:"Ticker logo",class:"side-logo"},null,8,C)]),_:1})]),s("li",j,[e(t(n),{to:{name:"tracker"},class:"nav-link"},{default:a(()=>[s("img",{src:t(g),alt:"Time tracker icon",class:"side-icon"},null,8,B),R]),_:1})]),$,s("li",I,[e(t(n),{to:{name:"projects"},class:"nav-link"},{default:a(()=>[s("img",{src:t(f),alt:"Projects icon",class:"side-icon"},null,8,H),P]),_:1})]),s("li",V,[e(t(n),{to:{name:"teams"},class:"nav-link"},{default:a(()=>[s("img",{src:t(k),alt:"Teams icon",class:"side-icon"},null,8,D),M]),_:1})]),s("li",N,[e(t(n),{to:{name:"clients"},class:"nav-link"},{default:a(()=>[s("img",{src:t(x),alt:"Clients icon",class:"side-icon"},null,8,q),E]),_:1})]),s("li",L,[e(t(n),{to:{name:"reports"},class:"nav-link"},{default:a(()=>[s("img",{src:t(b),alt:"Reports icon",class:"side-icon"},null,8,U),z]),_:1})]),s("div",null,[s("li",A,[e(t(n),{to:{name:"settings"},class:"nav-link"},{default:a(()=>[s("img",{src:t(w),alt:"Settings icon",class:"side-icon"},null,8,F),G]),_:1})])])])]))}};var ts=h(J,[["__scopeId","data-v-15b50f1d"]]);const K={class:"base-heading mb-4"},O=["textContent"],Q={class:"text-secondary fs-6 border rounded px-2 text-center py-1"},W=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1),es={props:{title:{type:String,required:!0}},setup(c){const i=p().user.name.split(" ")[0];return(d,X)=>(r(),_("div",K,[s("h1",{class:"fs-3 fw-bolder",textContent:l(c.title)},null,8,O),s("div",null,[s("span",Q,l(t(i)),1),e(t(n),{to:{name:"logout"},title:"logout"},{default:a(()=>[W]),_:1})])]))}};export{ts as T,es as _};