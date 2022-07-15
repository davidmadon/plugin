!function(){"use strict";var e={};function o(){return o=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},o.apply(this,arguments)}e.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(l,{a:l}),l},e.d=function(o,l){for(var t in l)e.o(l,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:l[t]})},e.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)};var l=window.wp.element,t=window.wp.blockEditor,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blockify/accordion","title":"Accordion","category":"blockify","icon":"list-view","textdomain":"blockify","keywords":["Faq","Toggle"],"supports":{"align":true,"alignWide":true,"color":{"gradients":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalBorder":{"width":true,"style":true,"color":true,"radius":true,"__experimentalDefaultControls":{"width":true,"color":true}}},"attributes":{"style":{"type":"object","default":{"align":"none","spacing":{"padding":{"top":"1em","right":"1em","bottom":"1em","left":"1em"}},"blockGap":"1em"}}},"editorScript":"file:index.tsx","script":"file:script.tsx","editorStyle":"file:editor.scss","style":"file:style.scss"}'),n=window.wp.blocks,i=window.wp.i18n,c=window.wp.domReady;e.n(c)()((()=>{(0,n.registerBlockStyle)("blockify/accordion-item",{name:"closed",label:(0,i.__)("Closed","blockify"),isDefault:!0}),(0,n.registerBlockStyle)("blockify/accordion-item",{name:"open",label:(0,i.__)("Open","blockify")})})),(0,n.registerBlockType)("blockify/accordion-item",{apiVersion:2,title:(0,i.__)("Accordion item","blockify"),category:"blockify",parent:["blockify/accordion"],icon:"plus",attributes:{summary:{type:"string",default:(0,i.__)("Item title","blockify")}},edit:e=>{let{attributes:o,setAttributes:r}=e;const n=(0,t.useBlockProps)(),{summary:i}=o;return(0,l.createElement)("details",n,(0,l.createElement)(t.RichText,{tagName:"summary",className:"blockify-accordion-summary",placeholder:i,value:i,onChange:e=>r({summary:e})}),(0,l.createElement)("div",{className:"blockify-accordion-content"},(0,l.createElement)(t.InnerBlocks,{template:[["core/paragraph"]]})))},save:e=>{let{attributes:o}=e;const r=t.useBlockProps.save(),{summary:n}=o;return(0,l.createElement)("details",r,(0,l.createElement)(t.RichText.Content,{tagName:"summary",className:"blockify-accordion-summary",placeholder:n,value:n}),(0,l.createElement)("div",{className:"blockify-accordion-content"},(0,l.createElement)(t.InnerBlocks.Content,null)))}});var a=window.wp.primitives,d=(0,l.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(a.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"}));const s=(e,o)=>{var l,t,r,n,i,c,a,d,s,u,p,v,m,y,b,g,k,f,w,h,B,E,_,x,C,O;let P="",N="";return null!=e&&e.gradient?P="var(--wp--preset--gradient--"+e.gradient+")":null!=e&&e.backgroundColor?P="var(--wp--preset--color--"+e.backgroundColor+")":null!=e&&null!==(l=e.style)&&void 0!==l&&null!==(t=l.color)&&void 0!==t&&t.gradient?P=e.style.color.gradient:null!=e&&null!==(r=e.style)&&void 0!==r&&null!==(n=r.color)&&void 0!==n&&n.background&&(P=e.style.color.background),null!=e&&e.borderColor?N="var(--wp--preset--color--"+e.borderColor+")":null!=e&&null!==(i=e.style)&&void 0!==i&&null!==(c=i.color)&&void 0!==c&&c.border&&(N=e.style.color.border),{...null==o?void 0:o.style,"--accordion--gap":null==e||null===(a=e.style)||void 0===a||null===(d=a.spacing)||void 0===d?void 0:d.blockGap,"--accordion--background":P,"--accordion--padding-top":null==e||null===(s=e.style)||void 0===s||null===(u=s.spacing)||void 0===u||null===(p=u.padding)||void 0===p?void 0:p.top,"--accordion--padding-right":null==e||null===(v=e.style)||void 0===v||null===(m=v.spacing)||void 0===m||null===(y=m.padding)||void 0===y?void 0:y.right,"--accordion--padding-bottom":null==e||null===(b=e.style)||void 0===b||null===(g=b.spacing)||void 0===g||null===(k=g.padding)||void 0===k?void 0:k.bottom,"--accordion--padding-left":null==e||null===(f=e.style)||void 0===f||null===(w=f.spacing)||void 0===w||null===(h=w.padding)||void 0===h?void 0:h.left,"--accordion--border-width":null==e||null===(B=e.style)||void 0===B||null===(E=B.border)||void 0===E?void 0:E.width,"--accordion--border-style":null==e||null===(_=e.style)||void 0===_||null===(x=_.border)||void 0===x?void 0:x.style,"--accordion--border-color":N,"--accordion--border-radius":null==e||null===(C=e.style)||void 0===C||null===(O=C.border)||void 0===O?void 0:O.radius}},u=e=>{var o,l,t,r;let n={"data-stack":!1};return null!=e&&null!==(o=e.style)&&void 0!==o&&null!==(l=o.spacing)&&void 0!==l&&l.blockGap&&0!==parseInt(null==e||null===(t=e.style)||void 0===t||null===(r=t.spacing)||void 0===r?void 0:r.blockGap)||(n={"data-stack":!0}),n};(0,n.registerBlockType)(r,{icon:d,edit:e=>{let{attributes:r}=e,n=(0,t.useBlockProps)();return(0,l.createElement)("div",o({},n,u(r),{style:{...s(r,n)}}),(0,l.createElement)(t.InnerBlocks,{allowedBlocks:["blockify/accordion-item"],template:[["blockify/accordion-item"],["blockify/accordion-item"],["blockify/accordion-item"]]}))},save:e=>{let{attributes:r}=e,n=t.useBlockProps.save();return(0,l.createElement)("div",o({},n,u(r),{style:{...s(r,n)}}),(0,l.createElement)(t.InnerBlocks.Content,null))}})}();