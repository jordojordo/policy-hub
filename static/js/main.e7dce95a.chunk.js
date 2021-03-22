(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){},29:function(e){e.exports=JSON.parse('[{"name":"psp-apparmor","abstract":"A Pod Security Policy that controls usage of AppArmor profiles","source":"https://github.com/chimera-kube/psp-apparmor","download":{"registry":"ghcr.io/chimera-kube/policies/psp-apparmor:v0.1.1","url":"https://github.com/chimera-kube/psp-apparmor/releases/download/v0.1.1/policy.wasm"},"tags":["PSP","AppArmor"],"resources":["Pod"],"mutation":false},{"name":"psp-capabilities","abstract":"A Pod Security Policy that controls Container Capabilities","source":"https://github.com/chimera-kube/psp-capabilities","download":{"registry":"ghcr.io/chimera-kube/policies/psp-capabilities:v0.1.0","url":"https://github.com/chimera-kube/psp-capabilities/releases/download/v0.1.0/policy.wasm"},"tags":["PSP","Container","Capabilities"],"resources":["Pod"],"mutation":true},{"name":"trusted-repo-source","abstract":"Restrict what registries, tags and images can be used","source":"https://github.com/chimera-kube/trusted-repos-policy","download":{"registry":"ghcr.io/chimera-kube/policies/trusted-repos:latest"},"tags":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false},{"name":"psp-allow-privilege-escalation","abstract":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","source":"https://github.com/chimera-kube/psp-allow-privilege-escalation","download":{"registry":"ghcr.io/chimera-kube/policies/psp-allow-privilege-escalation:v0.1.1","url":"https://github.com/chimera-kube/psp-allow-privilege-escalation/releases/download/v0.1.1/policy.wasm"},"tags":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false},{"name":"pod-privileged-policy","abstract":"Limit the ability to create privileged containers","source":"https://github.com/chimera-kube/pod-privileged-policy","download":{"registry":"ghcr.io/chimera-kube/policies/pod-privileged-policy:v0.1.2","url":"https://github.com/chimera-kube/pod-privileged-policy/releases/download/v0.1.2/policy.wasm"},"tags":["PSP","Container","Privileged"],"resources":["Pod"],"mutation":false}]')},31:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),s=r(4),c=r.n(s),o=(r(21),r(9)),l=r(10),n=r(15),d=r(14),p=(r(22),r(1));function b(e){var t=e.text,r=e.highlight,a=t.toLocaleLowerCase().indexOf(r.toLocaleLowerCase());if(a<0)return Object(p.jsx)("span",{children:t},"hl");var i=t.substring(0,a),s=t.substring(a,a+r.length),c=t.substring(a+r.length,t.length);return i=i?Object(p.jsx)("span",{children:i},"m1"):null,s=s?Object(p.jsx)("span",{style:{borderRadius:"2px"},children:Object(p.jsx)("mark",{children:s})},"m2"):null,c=c?Object(p.jsx)("span",{children:c},"m3"):null,Object(p.jsxs)("span",{children:[i,s,c]},"hl")}var u=r(11),h=r.n(u),j=r(13),g=r.n(j),m=function(e){return Object(p.jsxs)("div",{className:"policy-item",children:[Object(p.jsx)("div",{className:"title",children:e.policy.name}),Object(p.jsxs)("dl",{children:[Object(p.jsx)("dt",{children:"abstract :"}),Object(p.jsx)("dd",{children:Object(p.jsx)(b,{text:e.policy.abstract,highlight:e.abstractCriteria})}),Object(p.jsx)("br",{}),Object(p.jsx)("dt",{children:"source :"}),Object(p.jsx)("dd",{children:Object(p.jsxs)("a",{className:"link",href:e.policy.source,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)(h.a,{})," source"]})}),Object(p.jsx)("br",{}),Object(p.jsx)("dt",{children:"registry :"}),Object(p.jsxs)("dd",{children:[e.policy.download.registry?Object(p.jsx)("code",{children:e.policy.download.registry}):null,e.policy.download.url?Object(p.jsxs)("a",{className:"link download",href:e.policy.download.url,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)(g.a,{}),"download"]}):null]}),Object(p.jsx)("br",{}),Object(p.jsx)("dt",{children:"resources :"}),Object(p.jsx)("dd",{children:e.policy.resources.map((function(t){return Object(p.jsx)("span",{children:t},e.policy.name+"-"+t)}))}),Object(p.jsx)("br",{}),Object(p.jsx)("dt",{children:"mutation :"}),Object(p.jsx)("dd",{children:e.policy.mutation?"True":"False"}),Object(p.jsx)("br",{}),Object(p.jsx)("dt",{children:"tags :"}),Object(p.jsx)("dd",{children:e.policy.tags.map((function(t){return Object(p.jsx)("p",{className:"tag",children:t},e.policy.name+"-"+t)}))})]})]})},x=function(e){Object(n.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={abstractCriteria:"",dataSet:r(29)},i}return Object(l.a)(a,[{key:"onAbstractFilterChange",value:function(e){var t=e.target.value;this.setState({abstractCriteria:t})}},{key:"filter",value:function(){var e=this;return this.state.dataSet?this.state.dataSet.filter((function(t){return t.abstract.toLowerCase().includes(e.state.abstractCriteria.toLowerCase())})):[]}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"Hub",children:[Object(p.jsx)("header",{className:"Hub-header",children:Object(p.jsx)("a",{className:"link",href:"/policy-hub",target:"_blank",rel:"noopener noreferrer",children:"Policy Hub"})}),Object(p.jsxs)("section",{children:[Object(p.jsx)("div",{className:"filter-box",children:Object(p.jsx)("input",{name:"filter-abstract",onChange:function(t){return e.onAbstractFilterChange(t)},placeholder:"Filter by abstract"},"filter-abstract")}),this.filter().map((function(t){return Object(p.jsx)(m,{policy:t,abstractCriteria:e.state.abstractCriteria},t.name)}))]})]})}}]),a}(a.Component),O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.e7dce95a.chunk.js.map