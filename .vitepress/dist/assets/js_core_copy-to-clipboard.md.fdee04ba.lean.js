import{h as t,o as c,c as r,C as o,t as F,V as y}from"./chunks/framework.071bb2b9.js";const D=y("",3),d=JSON.parse('{"title":"CopyToClipboard","description":"","frontmatter":{"next":false},"headers":[],"relativePath":"js/core/copy-to-clipboard.md","filePath":"js/core/copy-to-clipboard.md","lastUpdated":1686911510000}'),A={name:"js/core/copy-to-clipboard.md"},u=Object.assign(A,{setup(i){const a=t(!1),p=n=>{try{if(navigator.clipboard&&window.isSecureContext)return a.value=!0,navigator.clipboard.writeText(n);{let s=document.createElement("textarea");return s.value=n,s.style.position="fixed",s.style.left="-999999px",s.style.top="-999999px",document.body.appendChild(s),s.focus(),s.select(),new Promise((l,e)=>{document.execCommand("copy")?l():e(),s.remove(),a.value=!0})}}catch(s){a.value=!1,console.error(s)}};return(n,s)=>(c(),r("div",null,[D,o("p",null,[o("button",{class:"btn medium",onClick:s[0]||(s[0]=l=>p("Copy success"))},"Click to copy!")]),o("p",null,"Result is: "+F(a.value),1)]))}});export{d as __pageData,u as default};