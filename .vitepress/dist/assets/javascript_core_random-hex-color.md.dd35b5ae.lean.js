import{h as l,o as n,c as e,C as a,t,K as r,V as p}from"./chunks/framework.f29eb792.js";const c=p("",3),A=JSON.parse('{"title":"Random Hex Color","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/core/random-hex-color.md","filePath":"javascript/core/random-hex-color.md","lastUpdated":null}'),i={name:"javascript/core/random-hex-color.md"},h=Object.assign(i,{setup(C){const o=l("#000000"),s=()=>{o.value=`#${Math.floor(Math.random()*16777215).toString(16)}`};return(d,D)=>(n(),e("div",null,[c,a("p",null,[a("button",{onClick:s},"Click to random color")]),a("p",null,"Result is: "+t(o.value),1),a("div",{style:r({background:o.value,width:"50px",height:"50px"})},null,4)]))}});export{A as __pageData,h as default};