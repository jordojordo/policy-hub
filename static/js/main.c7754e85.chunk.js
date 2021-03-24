(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{27:function(e,t,i){},28:function(e,t,i){},38:function(e){e.exports=JSON.parse('[{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/chimera-kube/psp-apparmor","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-apparmor:v0.1.1","url":"https://github.com/chimera-kube/psp-apparmor/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false},{"name":"psp-capabilities","description":"A Pod Security Policy that controls Container Capabilities","homepage":"https://github.com/chimera-kube/psp-capabilities","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-capabilities:v0.1.0","url":"https://github.com/chimera-kube/psp-capabilities/releases/download/v0.1.0/policy.wasm"},"keywords":["PSP","Container","Capabilities"],"resources":["Pod"],"mutation":true},{"name":"trusted-repo-source","description":"Restrict what registries, tags and images can be used","homepage":"https://github.com/chimera-kube/trusted-repos-policy","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/trusted-repos:latest"},"keywords":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false},{"name":"psp-allow-privilege-escalation","description":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","homepage":"https://github.com/chimera-kube/psp-allow-privilege-escalation","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-allow-privilege-escalation:v0.1.1","url":"https://github.com/chimera-kube/psp-allow-privilege-escalation/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false},{"name":"pod-privileged-policy","description":"Limit the ability to create privileged containers","homepage":"https://github.com/chimera-kube/pod-privileged-policy","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/pod-privileged-policy:v0.1.2","url":"https://github.com/chimera-kube/pod-privileged-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Container","Privileged"],"resources":["Pod"],"mutation":false}]')},40:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),s=i(7),o=i.n(s),n=(i(27),i(10)),c=i(11),l=i(21),h=i(19),p=(i(28),i(20)),u=i(1);function d(e){var t=e.text,i=e.highlight,r=t.toLocaleLowerCase().indexOf(i.toLocaleLowerCase());if(r<0)return Object(u.jsx)("span",{children:t},"hl");var a=t.substring(0,r),s=t.substring(r,r+i.length),o=t.substring(r+i.length,t.length);return a=a?Object(u.jsx)("span",{children:a},"m1"):null,s=s?Object(u.jsx)("span",{style:{borderRadius:"2px"},children:Object(u.jsx)("mark",{children:s})},"m2"):null,o=o?Object(u.jsx)("span",{children:o},"m3"):null,Object(u.jsxs)("span",{children:[a,s,o]},"hl")}var m=i(16),b=i.n(m),g=i(13),j=i.n(g),x=i(17),O=i.n(x),y=i(18),v=i.n(y),f=i(9),k=i.n(f),w=i(12),C=i(15),P=i.n(C),N=function(e){var t=Object(r.useState)(!1),i=Object(p.a)(t,2),a=i[0],s=i[1],o=e.policy;return Object(u.jsxs)("article",{children:[Object(u.jsx)("div",{className:"name",children:o.name}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("aside",{children:[Object(u.jsxs)("a",{className:"text-light text-smaller link",href:o.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)(j.a,{}),"Homepage"]}),Object(u.jsx)("br",{}),o.author.homepage?Object(u.jsxs)("a",{className:"text-light text-smaller link",href:o.author.homepage,target:"_blank",rel:"noopener noreferrer",title:"Author",children:[Object(u.jsx)(k.a,{}),o.author.name]}):Object(u.jsxs)("span",{className:"text-light text-smaller not-a-real-link",children:[Object(u.jsx)(k.a,{}),o.author.name]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),o.download.registry?Object(u.jsx)(w.CopyToClipboard,{text:o.download.registry,onCopy:function(){return s(!0),void setTimeout((function(){s(!1)}),1e3)},children:Object(u.jsxs)("button",{className:"text-smaller text-light button-link",children:[Object(u.jsx)(P.a,{}),"Copy registry",a?Object(u.jsx)("div",{className:"inline-but-absolute-message",children:"Copied!"}):null]})}):null,Object(u.jsx)("br",{}),o.download.url?Object(u.jsxs)("a",{className:"text-smaller link download",href:o.download.url,target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)(b.a,{}),"Download Policy"]}):null,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"text-light not-a-real-link mutation",title:o.mutation?"Validation + Mutation Policy":"Validation Policy",children:[Object(u.jsx)(O.a,{}),o.mutation?Object(u.jsx)(v.a,{}):null]})]}),Object(u.jsx)("div",{className:"text-light text-bigger",children:Object(u.jsx)(d,{text:o.description,highlight:e.descriptionCriteria})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-light text-smaller",children:"Resources"}),o.resources.map((function(e){return Object(u.jsx)("span",{className:"badge resource text-smaller",children:e},o.name+"-"+e)}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-light text-smaller",children:"Keywords"}),o.keywords.map((function(e){return Object(u.jsx)("span",{className:"badge keyword text-smaller",children:e},o.name+"-"+e)}))]})]})]})},S=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={descriptionCriteria:"",dataSet:i(38)},a}return Object(c.a)(r,[{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this;return this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[]}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"Hub",children:[Object(u.jsxs)("header",{className:"Hub-header",children:[Object(u.jsx)("a",{href:"/policy-hub",rel:"noopener noreferrer",children:"Policy Hub"}),Object(u.jsx)("input",{className:"filter-box",name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")]}),Object(u.jsx)("section",{children:this.filter().map((function(t){return Object(u.jsx)(N,{policy:t,descriptionCriteria:e.state.descriptionCriteria},t.name)}))})]})}}]),r}(r.Component),L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,52)).then((function(t){var i=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),L()}},[[40,1,2]]]);
//# sourceMappingURL=main.c7754e85.chunk.js.map