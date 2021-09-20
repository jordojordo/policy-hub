(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{54:function(e){e.exports=JSON.parse('[{"name":"ingress","description":"Enforce requirements on Ingress resources","homepage":"https://github.com/kubewarden/ingress-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/ingress:v0.1.10","url":"https://github.com/kubewarden/ingress-policy/releases/download/v0.1.10/policy.wasm"},"keywords":["Ingress"],"resources":["Ingress"],"mutation":false,"contextAware":false},{"name":"pod-privileged-policy","description":"Limit the ability to create privileged containers","homepage":"https://github.com/kubewarden/pod-privileged-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/pod-privileged:v0.1.9","url":"https://github.com/kubewarden/pod-privileged-policy/releases/download/v0.1.9/policy.wasm"},"keywords":["PSP","Pod","Container","Privileged"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"pod-runtime","description":"Control Pod runtimeClass usage","homepage":"https://github.com/kubewarden/pod-runtime-class-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/pod-runtime:v0.1.3","url":"https://github.com/kubewarden/pod-runtime-class-policy/releases/download/v0.1.3/policy.wasm"},"keywords":["Pod","Runtime","Container Runtime"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-disallow-service-nodeport","description":"A policy that prevents the creation of Service resources of type `NodePort`","homepage":"https://github.com/kubewarden/policy-disallow-service-nodeport","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/disallow-service-nodeport:v0.1.0","url":"https://github.com/kubewarden/disallow-service-nodeport/releases/download/v0.1.0/policy.wasm"},"keywords":["Service"],"resources":["Service"],"mutation":false,"contextAware":false},{"name":"psp-allow-privilege-escalation","description":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","homepage":"https://github.com/kubewarden/psp-allow-privilege-escalation","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-allow-privilege-escalation:v0.1.7","url":"https://github.com/kubewarden/psp-allow-privilege-escalation/releases/download/v0.1.7/policy.wasm"},"keywords":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/kubewarden/psp-apparmor","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-apparmor:v0.1.6","url":"https://github.com/kubewarden/psp-apparmor/releases/download/v0.1.6/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-capabilities","description":"A Pod Security Policy that controls Container Capabilities","homepage":"https://github.com/kubewarden/psp-capabilities","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-capabilities:v0.1.6","url":"https://github.com/kubewarden/psp-capabilities/releases/download/v0.1.6/policy.wasm"},"keywords":["PSP","Container","Capability","Capabilities"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-host-namespaces","description":"A Pod Security Policy that controls the usage of host namespaces","homepage":"https://github.com/kubewarden/psp-host-namespaces","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-host-namespaces:v0.0.9","url":"https://github.com/kubewarden/psp-host-namespaces/releases/download/v0.0.9/policy.wasm"},"keywords":["PSP","Container","Network"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-hostpaths","description":"A Pod Security Policy that controls usage of hostPath volumes","homepage":"https://github.com/kubewarden/psp-hostpaths-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-hostpaths:v0.1.2","url":"https://github.com/kubewarden/psp-hostpaths-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Hostpaths","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-sysctl","description":"A Pod Security Policy that controls usage of sysctls in pods","homepage":"https://github.com/kubewarden/psp-sysctl-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-sysctl:v0.1.4","url":"https://github.com/kubewarden/psp-sysctl-policy/releases/download/v0.1.4/policy.wasm"},"keywords":["PSP","Sysctl","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-volumes","description":"Pod Security Policy that controls usage of volumes","homepage":"https://github.com/kubewarden/psp-volumes-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-volumes:v0.1.2","url":"https://github.com/kubewarden/psp-volumes-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Volumes","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"safe-annotations","description":"A policy that validates Kubernetes\' resource annotations","homepage":"https://github.com/kubewarden/safe-annotations-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-annotations:v0.1.0","url":"https://github.com/kubewarden/safe-annotations-policy/releases/download/v0.1.0/policy.wasm"},"keywords":["Annotations"],"resources":["*"],"mutation":false,"contextAware":false},{"name":"safe-labels","description":"A policy that validates Kubernetes\' resource labels","homepage":"https://github.com/kubewarden/safe-labels-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-labels:v0.1.5","url":"https://github.com/kubewarden/safe-labels-policy/releases/download/v0.1.5/policy.wasm"},"keywords":["Labels"],"resources":["*"],"mutation":false,"contextAware":false},{"name":"trusted-repos","description":"Restrict what registries, tags and images can be used","homepage":"https://github.com/kubewarden/trusted-repos-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/trusted-repos:v0.1.6","url":"https://github.com/kubewarden/trusted-repos-policy/releases/download/v0.1.6/policy.wasm"},"keywords":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false,"contextAware":false}]')},64:function(e,t,s){},65:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s.n(r),o=s(5),i=s.n(o),n=(s(64),s(26)),c=s(44),l=s(45),d=s(57),u=s(55),p=(s(65),s(56)),h=s(2);function b(e){var t=e.text,s=e.highlight,r=t.toLocaleLowerCase().indexOf(s.toLocaleLowerCase());if(r<0)return Object(h.jsx)("span",{children:t},"hl");var a=t.substring(0,r),o=t.substring(r,r+s.length),i=t.substring(r+s.length,t.length);return a=a?Object(h.jsx)("span",{children:a},"m1"):null,o=o?Object(h.jsx)("span",{style:{borderRadius:"2px"},children:Object(h.jsx)("mark",{children:o})},"m2"):null,i=i?Object(h.jsx)("span",{children:i},"m3"):null,Object(h.jsxs)("span",{children:[a,o,i]},"hl")}var m=s(50),w=s.n(m),g=s(49),y=s.n(g),j=s(51),v=s.n(j),f=s(52),k=s.n(f),x=s(38),O=s.n(x),P=s(46),S=s(48),C=s.n(S),N=s(103),A=s(53),K=s.n(A),F=function(e){var t=Object(r.useState)(!1),s=Object(p.a)(t,2),a=s[0],o=s[1],i=e.policy;return Object(h.jsxs)("article",{children:[Object(h.jsx)("div",{className:"name",children:i.name}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"text-description",children:Object(h.jsx)(b,{text:i.description,highlight:e.descriptionCriteria})}),i.download.registry?Object(h.jsxs)("div",{className:"registry-wrapper",children:[Object(h.jsx)("div",{className:"text-light text-tiny text-label",children:"REGISTRY"}),Object(h.jsx)("code",{className:"text-smaller",children:i.download.registry}),Object(h.jsx)(P.CopyToClipboard,{text:i.download.registry,onCopy:function(){return o(!0),void setTimeout((function(){o(!1)}),1500)},children:Object(h.jsx)(N.a,{title:a?"Copied!":"Copy registry",arrow:!0,children:Object(h.jsx)("button",{id:"copy-registry",className:"text-small button-link",children:Object(h.jsx)(C.a,{})})})})]}):null,Object(h.jsxs)("div",{className:"links-wrapper",children:[Object(h.jsxs)("a",{className:"text-smaller link",href:i.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(y.a,{}),"Homepage"]}),Object(h.jsx)(N.a,{title:"Author",arrow:!0,children:i.author.homepage?Object(h.jsxs)("a",{className:"text-smaller link",href:i.author.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(O.a,{}),i.author.name]}):Object(h.jsxs)("span",{className:"text-smaller not-a-real-link",children:[Object(h.jsx)(O.a,{}),i.author.name]})}),i.download.url?Object(h.jsxs)("a",{className:"text-smaller link download",href:i.download.url,rel:"noopener noreferrer",children:[Object(h.jsx)(w.a,{}),"Download Policy"]}):null]}),Object(h.jsxs)("aside",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"RESOURCES"}),i.resources.map((function(t,s){return Object(h.jsx)(N.a,{title:"Filter by this resource",arrow:!0,children:Object(h.jsxs)("button",{className:"badge resource text-small",onClick:function(){return e.additionalResourceFilter(t)},children:[t,s<i.resources.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},i.name+"-"+t)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"KEYWORDS"}),i.keywords.map((function(t,s){return Object(h.jsx)(N.a,{title:"Filter by this keyword",arrow:!0,children:Object(h.jsxs)("button",{className:"badge keyword text-small",onClick:function(){return e.additionalKeywordFilter(t)},children:[t,s<i.keywords.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},i.name+"-"+t)}))]}),Object(h.jsxs)("div",{className:"icons-wrapper",children:[Object(h.jsx)(N.a,{arrow:!0,title:i.mutation?"Validation + Mutation Policy":"Validation Policy",children:Object(h.jsxs)("div",{className:"icon-badge",children:[Object(h.jsx)(v.a,{color:"primary"}),i.mutation?Object(h.jsx)(k.a,{color:"secondary"}):null]})}),i.contextAware?Object(h.jsx)(N.a,{arrow:!0,title:"Context Aware",children:Object(h.jsx)("div",{className:"icon-badge",children:Object(h.jsx)(K.a,{color:"primary"})})}):null]})]})]})]})},R=s(39),E=s(54),D=s.p+"static/media/logo-kubewarden.7337b18e.svg",L=s.p+"static/media/logo-no-text.fb9fba0c.svg";function H(){var e=document.getElementsByTagName("footer")[0].offsetHeight;console.log(e);var t=document.getElementsByTagName("header")[0].offsetHeight;console.log(t),document.getElementsByTagName("section")[0].style.minHeight=window.innerHeight-e-t-31+"px"}var T=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={descriptionCriteria:"",dataSet:E,resourcesOptionsSelected:[],keywordsOptionsSelected:[]},r}return Object(l.a)(s,[{key:"componentDidMount",value:function(){H()}},{key:"componentDidUpdate",value:function(){H()}},{key:"getDistinctSetOfResources",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var s;return e=(s=e).concat.apply(s,Object(n.a)(t.resources))})),Array.from(new Set(e))}},{key:"getDistinctSetOfKeywords",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var s;return e=(s=e).concat.apply(s,Object(n.a)(t.keywords))})),Array.from(new Set(e))}},{key:"additionalResourceFilter",value:function(e){var t={value:e,label:e},s=this.state.resourcesOptionsSelected;s.map((function(e){return e.value})).includes(e)||this.setState({resourcesOptionsSelected:s.concat(t)})}},{key:"additionalKeywordFilter",value:function(e){var t={value:e,label:e},s=this.state.keywordsOptionsSelected;s.map((function(e){return e.value})).includes(e)||this.setState({keywordsOptionsSelected:s.concat(t)})}},{key:"onResourcesFilterChange",value:function(e){this.setState({resourcesOptionsSelected:e})}},{key:"onKeywordsFilterChange",value:function(e){this.setState({keywordsOptionsSelected:e})}},{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this,t=this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[];return t=this.state.resourcesOptionsSelected.length>0?t.filter((function(t){return e.state.resourcesOptionsSelected.map((function(e){return e.value})).every((function(e){return t.resources.includes(e)}))})):t,t=this.state.keywordsOptionsSelected.length>0?t.filter((function(t){return e.state.keywordsOptionsSelected.map((function(e){return e.value})).every((function(e){return t.keywords.includes(e)}))})):t}},{key:"render",value:function(){var e=this,t=[];this.getDistinctSetOfResources().forEach((function(e){t=[].concat(Object(n.a)(t),[{value:e,label:e}])}));var s=[];this.getDistinctSetOfKeywords().forEach((function(e){s=[].concat(Object(n.a)(s),[{value:e,label:e}])}));var r=Object.keys(this.state.dataSet).length,a=this.filter(),o=a.length;return Object(h.jsxs)("div",{className:"Hub",children:[Object(h.jsxs)("header",{className:"Hub-header",children:[Object(h.jsxs)("div",{className:"header-links",children:[Object(h.jsxs)("a",{href:"/",className:"header-homepage",rel:"noopener noreferrer",children:[Object(h.jsx)("img",{src:L,alt:"Kubewarden Policy Hub Logo"})," POLICY HUB"]}),Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"main-site",children:"KUBEWARDEN"})]}),Object(h.jsxs)("div",{className:"filters-wrapper",children:[Object(h.jsx)("div",{className:"filter-box filter-description",children:Object(h.jsx)("input",{name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")}),Object(h.jsx)("div",{className:"filter-box resources-select-container",children:Object(h.jsx)(R.a,{value:this.state.resourcesOptionsSelected,onChange:function(t){return e.onResourcesFilterChange(t)},options:t,isMulti:!0,placeholder:"Filter by resources"})}),Object(h.jsx)("div",{className:"filter-box keywords-select-container",children:Object(h.jsx)(R.a,{value:this.state.keywordsOptionsSelected,onChange:function(t){return e.onKeywordsFilterChange(t)},options:s,isMulti:!0,placeholder:"Filter by keywords"})}),Object(h.jsxs)("div",{className:"toolbar",children:[Object(h.jsx)("b",{children:o})," ",o>1?"items":"item"," of ",Object(h.jsx)("b",{children:r})]})]})]}),Object(h.jsx)("section",{children:a.map((function(t){return Object(h.jsx)(F,{policy:t,descriptionCriteria:e.state.descriptionCriteria,additionalResourceFilter:function(t){return e.additionalResourceFilter(t)},additionalKeywordFilter:function(t){return e.additionalKeywordFilter(t)}},t.name)}))}),Object(h.jsx)("footer",{children:Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"kubewarden-logo",children:Object(h.jsx)("img",{src:D,alt:"Kubewarden main site logo"})})})]})}}]),s}(r.Component),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,105)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;s(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),I()}},[[85,1,2]]]);
//# sourceMappingURL=main.931ff28f.chunk.js.map