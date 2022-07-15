!function(){var e={4184:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)){if(l.length){var r=o.apply(null,l);r&&e.push(r)}}else if("object"===a)if(l.toString===Object.prototype.toString)for(var i in l)n.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,l),a.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},e.apply(this,arguments)}var t=window.wp.element,n=window.wp.components,o=window.wp.blockEditor,a=window.wp.compose,r=window.wp.hooks,i=window.wp.i18n;const s=["core/button","core/buttons","core/code","core/columns","core/column","core/group","core/image","core/row","core/spacer","core/video","blockify/accordion","blockify/email","blockify/icon","blockify/newsletter","blockify/submit","blockify/popup","blockify/tabs"];(0,r.addFilter)("blocks.registerBlockType","blockify/add-box-shadow-attributes",((e,t)=>{var l,n;return!s.includes(t)||null!=e&&null!==(l=e.attributes)&&void 0!==l&&l.boxShadowColor||null!=e&&null!==(n=e.attributes)&&void 0!==n&&n.boxShadowGradient||(e.attributes=Object.assign(e.attributes,{boxShadowX:{type:"integer"},boxShadowY:{type:"integer"},boxShadowBlur:{type:"integer"},boxShadowSpread:{type:"integer"},boxShadowColor:{type:"string"},boxShadowGradient:{type:"string"}})),e}));const c=(0,a.createHigherOrderComponent)((e=>l=>{if(!s.includes(l.name))return(0,t.createElement)(e,l);const{attributes:a,setAttributes:r}=l,{boxShadowX:c,boxShadowY:u,boxShadowBlur:d,boxShadowSpread:p,boxShadowColor:m,boxShadowGradient:b}=a;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,l),(0,t.createElement)(o.InspectorAdvancedControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Box Shadow","blockify"),initialOpen:!1,className:"blockify-advanced-controls-shadow"},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.Flex,null,(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalNumberControl,{label:(0,i.__)("X","blockify"),value:null!=c?c:0,step:1,shiftStep:10,onChange:e=>r({boxShadowX:parseInt(e)})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalNumberControl,{label:(0,i.__)("Y","blockify"),value:null!=u?u:0,step:1,shiftStep:10,onChange:e=>r({boxShadowY:parseInt(e)})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalNumberControl,{label:(0,i.__)("Blur","blockify"),value:null!=d?d:0,step:1,shiftStep:10,min:0,onChange:e=>r({boxShadowBlur:parseInt(e)})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalNumberControl,{label:(0,i.__)("Spread","blockify"),step:1,shiftStep:10,value:null!=p?p:0,onChange:e=>r({boxShadowSpread:parseInt(e)})})))),(0,t.createElement)(o.__experimentalPanelColorGradientSettings,{title:(0,i.__)("Color","blockify"),showTitle:!1,settings:[{colorValue:null!=m?m:"",gradientValue:null!=b?b:"",label:(0,i.__)("Box Shadow Color","blockify"),onColorChange:e=>r({boxShadowColor:e}),onGradientChange:e=>r({boxShadowGradient:e})}]}))))}),"withBoxShadow");(0,r.addFilter)("editor.BlockEdit","blockify/with-box-shadows",c);const u=(0,a.createHigherOrderComponent)((l=>n=>{var o;const{attributes:a,name:r}=n;if(!s.includes(r)||!a)return(0,t.createElement)(l,n);const{boxShadowX:i,boxShadowY:c,boxShadowBlur:u,boxShadowSpread:d,boxShadowColor:p,boxShadowGradient:m,style:b}=a;let h={...n.wrapperProps};if(!m&&!p)return(0,t.createElement)(l,n);let y="0px";return null!=b&&null!==(o=b.border)&&void 0!==o&&o.radius&&(y=(parseInt(b.border.radius)+parseInt(d)/2).toString()+"px"),h.style={...h.style,"--box-shadow-x":(null!=i?i:0)+"px","--box-shadow-y":(null!=c?c:0)+"px","--box-shadow-blur":(null!=u?u:0)+"px","--box-shadow-spread":(null!=d?d:0)+"px","--box-shadow-radius":y},m&&(h.style["--box-shadow-gradient"]=m),p&&(h.style["--box-shadow-color"]=p),(0,t.createElement)(l,e({},n,{wrapperProps:h}))}),"withBoxShadowCss");(0,r.addFilter)("editor.BlockListBlock","blockify/with-box-shadow",u),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-box-shadow-styles",((e,t,l)=>{var n,o;if(!s.includes(t.name))return e;const{boxShadowX:a,boxShadowY:r,boxShadowBlur:i,boxShadowSpread:c,boxShadowColor:u,boxShadowGradient:d,style:p}=l;if(!d&&!u)return e;let m="0px";return null!=p&&null!==(n=p.border)&&void 0!==n&&n.radius&&(m=(parseInt(p.border.radius)+parseInt(c)/2).toString()+"px"),e.style={...e.style,"--box-shadow-x":(null!=a?a:0)+"px","--box-shadow-y":(null!=r?r:0)+"px","--box-shadow-blur":(null!=i?i:0)+"px","--box-shadow-spread":(null!=c?c:0)+"px","--box-shadow-radius":null!==(o=m)&&void 0!==o?o:"0px"},d&&(e.style["--box-shadow-gradient"]=d),u&&(e.style["--box-shadow-color"]=u),e}));const d=["core/separator","core/paragraph"];(0,r.addFilter)("blocks.registerBlockType","blockify/add-width-attribute",((e,t)=>(d.includes(t)&&(e.attributes.width={type:"string"},e.attributes.height={type:"string"}),e)));const p=(0,a.createHigherOrderComponent)((e=>l=>{var a;const r=(0,t.createElement)(e,l);if(!d.includes(l.name))return r;const{attributes:s,setAttributes:c}=l;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,l),(0,t.createElement)(o.InspectorAdvancedControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Dimensions","blockify"),initialOpen:!1,className:"blockify-advanced-controls-dimensions"},(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Width","blockify"),value:null!==(a=s.width)&&void 0!==a?a:"auto",onChange:e=>c({width:e})}))))}),"withWidthCss"),m=e=>{let t="";return null!=e&&e.width&&(t+="width:"+e.width),t.trim()};(0,r.addFilter)("editor.BlockEdit","blockify/with-width-css",p);const b=(0,a.createHigherOrderComponent)((e=>l=>{const{attributes:n,name:o,clientId:a}=l,r=(0,t.createElement)(e,l);if(!d.includes(o))return r;let i=m(n);return i?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,"#block-"+a+"{"+i+"}"),(0,t.createElement)(e,l)):r}),"withWidth");(0,r.addFilter)("editor.BlockListBlock","blockify/with-css-filter",b),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-filter-styles",(function(e,t,l){if(void 0!==l&&d.includes(t.name)){let t=m(l);t&&(e={...e,style:{...e.style,styles:t}})}return e}));const h=["core/image","core/group"],y={blur:{type:"integer"},brightness:{type:"integer"},contrast:{type:"integer"},grayscale:{type:"integer"},hueRotate:{type:"integer"},invert:{type:"integer"},opacity:{type:"integer"},saturate:{type:"integer"},sepia:{type:"integer"}};(0,r.addFilter)("blocks.registerBlockType","blockify/add-css-filter-attributes",((e,t)=>(h.includes(t)&&Object.keys(y).map((t=>{e.attributes[t]=y[t]})),e)));const g=(0,a.createHigherOrderComponent)((e=>l=>{var a,r,s,c,u,d,p,m,b;const y=(0,t.createElement)(e,l);if(!h.includes(l.name))return y;const{attributes:g,setAttributes:v}=l;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,l),(0,t.createElement)(o.InspectorAdvancedControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Filter","blockify"),initialOpen:!1,className:"blockify-advanced-controls-filter"},(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Blur","blockify"),value:null!==(a=null==g?void 0:g.blur)&&void 0!==a?a:0,onChange:e=>v({blur:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Brightness","blockify"),value:null!==(r=null==g?void 0:g.brightness)&&void 0!==r?r:100,onChange:e=>v({brightness:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Contrast","blockify"),value:null!==(s=null==g?void 0:g.contrast)&&void 0!==s?s:100,onChange:e=>v({contrast:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Grayscale","blockify"),value:null!==(c=null==g?void 0:g.grayscale)&&void 0!==c?c:0,onChange:e=>v({grayscale:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Hue Rotate","blockify"),value:null!==(u=null==g?void 0:g.hueRotate)&&void 0!==u?u:0,onChange:e=>v({hueRotate:e}),min:0,max:360,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Invert","blockify"),value:null!==(d=null==g?void 0:g.invert)&&void 0!==d?d:0,onChange:e=>v({invert:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Opacity","blockify"),value:null!==(p=null==g?void 0:g.opacity)&&void 0!==p?p:100,onChange:e=>v({opacity:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Saturate","blockify"),value:null!==(m=null==g?void 0:g.saturate)&&void 0!==m?m:100,onChange:e=>v({saturate:e}),min:0,max:1e3,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Sepia","blockify"),value:null!==(b=null==g?void 0:g.sepia)&&void 0!==b?b:0,onChange:e=>v({sepia:e}),min:0,max:100,step:1,shiftStep:10,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}))))}),"withCssFilter"),v=e=>{let t="";return null!=e&&e.blur&&(t+=" blur("+e.blur+"px)"),null!=e&&e.brightness&&(t+=" brightness("+e.brightness+"%)"),null!=e&&e.contrast&&(t+=" contrast("+e.contrast+"%)"),null!=e&&e.grayscale&&(t+=" grayscale("+e.grayscale+"%)"),null!=e&&e.hueRotate&&(t+=" hue-rotate("+e.hueRotate+"deg)"),null!=e&&e.invert&&(t+=" invert("+e.invert+"%)"),null!=e&&e.opacity&&(t+=" opacity("+e.opacity+"%)"),null!=e&&e.saturate&&(t+=" saturate("+e.saturate+"%)"),null!=e&&e.sepia&&(t+=" sepia("+e.sepia+"%)"),t.trim()};(0,r.addFilter)("editor.BlockEdit","blockify/with-css-transforms",g);const f=(0,a.createHigherOrderComponent)((e=>l=>{const{attributes:n,name:o,clientId:a}=l,r=(0,t.createElement)(e,l);if(!h.includes(o))return r;let i=v(n);return i?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,"#block-"+a+"{filter:"+i+"}"),(0,t.createElement)(e,l)):r}),"withCssTransform");(0,r.addFilter)("editor.BlockListBlock","blockify/with-css-filter",f),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-filter-styles",(function(e,t,l){if(void 0!==l&&h.includes(t.name)){let t=v(l);t&&(e={...e,style:{...e.style,filter:t}})}return e})),(0,r.addFilter)("blocks.registerBlockType","blockify/block-attributes-position",(e=>{var t;return null!=e&&null!==(t=e.attributes)&&void 0!==t&&t.position||(e.attributes=Object.assign(e.attributes,{position:{type:"string"},inset:{type:"object"},zIndex:{type:"integer"}})),e}));const w=(0,a.createHigherOrderComponent)((e=>l=>{const{attributes:a,setAttributes:r,isSelected:s}=l;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,l),s&&(0,t.createElement)(o.InspectorAdvancedControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Position","blockify"),initialOpen:!1,className:"blockify-advanced-controls-position"},((e,l)=>{var o,a,r,s;const{position:c,inset:u,zIndex:d}=e,p=[{label:(0,i.__)("Default","blockify"),value:""},{label:(0,i.__)("Relative","blockify"),value:"relative"},{label:(0,i.__)("Absolute","blockify"),value:"absolute"},{label:(0,i.__)("Sticky","blockify"),value:"sticky"},{label:(0,i.__)("Fixed","blockify"),value:"fixed"},{label:(0,i.__)("Static","blockify"),value:"static"}];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.SelectControl,{label:(0,i.__)("Position","blockify"),value:null!=c?c:"",options:p,onChange:e=>l({position:e})})),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.Flex,null,(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Top","blockify"),value:null!==(o=null==u?void 0:u.top)&&void 0!==o?o:"",onChange:e=>l({inset:{...u,top:e}})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Right","blockify"),value:null!==(a=null==u?void 0:u.right)&&void 0!==a?a:"",onChange:e=>l({inset:{...u,right:e}})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Bottom","blockify"),value:null!==(r=null==u?void 0:u.bottom)&&void 0!==r?r:"",onChange:e=>l({inset:{...u,bottom:e}})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Left","blockify"),value:null!==(s=null==u?void 0:u.left)&&void 0!==s?s:"",onChange:e=>l({inset:{...u,left:e}})})))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Z Index","blockify"),onChange:e=>l({zIndex:e}),value:d,min:-10,max:10,step:1,shiftStep:!0,allowReset:!0})))})(a,r))))}),"withAdvancedControls");(0,r.addFilter)("editor.BlockEdit","blockify/custom-advanced-control",w);const k=e=>{const{position:t,inset:l,zIndex:n,transform:o,opacity:a}=e;let r={};return t&&(r.position=t),null!=l&&l.top&&(r.top=l.top),null!=l&&l.right&&(r.right=l.right),null!=l&&l.bottom&&(r.bottom=l.bottom),null!=l&&l.left&&(r.left=l.left),n&&(r.zIndex=n),r},x=(0,a.createHigherOrderComponent)((l=>n=>{const{attributes:o}=n,a=k(o);let r={...n.wrapperProps};return a&&(r.style={...r.style,...a}),(0,t.createElement)(l,e({},n,{wrapperProps:r}))}),"withPositionStyle");(0,r.addFilter)("editor.BlockListBlock","blockify/with-position-style",x),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/add-position-style",((e,t,l)=>{const n=k(l);return n&&(e.style={...e.style,...n}),e}));const _=["core/group","core/image"],E={translateX:{type:"object"},translateY:{type:"object"},translateZ:{type:"object"},scale:{type:"integer"},scaleX:{type:"integer"},scaleY:{type:"integer"},scaleZ:{type:"integer"},rotate:{type:"integer"},rotateX:{type:"integer"},rotateY:{type:"integer"},rotateZ:{type:"integer"},skewX:{type:"integer"},skewY:{type:"integer"}};(0,r.addFilter)("blocks.registerBlockType","blockify/add-css-transform-attributes",((e,t)=>(_.includes(t)&&Object.keys(E).map((t=>{e.attributes[t]=E[t]})),e)));const S=(0,a.createHigherOrderComponent)((e=>l=>{var a,r,s,c,u,d,p,m,b,h,y,g,v;const f=(0,t.createElement)(e,l);if(!_.includes(l.name))return f;const{attributes:w,setAttributes:k}=l;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,l),(0,t.createElement)(o.InspectorAdvancedControls,null,(0,t.createElement)(n.PanelBody,{title:(0,i.__)("Transform","blockify"),initialOpen:!1,className:"blockify-advanced-controls-transform"},(0,t.createElement)(n.__experimentalText,null,(0,i.__)("Translate","blockify")),(0,t.createElement)("br",null),(0,t.createElement)(n.Flex,null,(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("X","blockify"),value:null!==(a=w.translateX)&&void 0!==a?a:"0px",onChange:e=>k({translateX:e})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Y","blockify"),value:null!==(r=null==w?void 0:w.translateY)&&void 0!==r?r:"0px",onChange:e=>k({translateY:e})})),(0,t.createElement)(n.FlexItem,null,(0,t.createElement)(n.__experimentalUnitControl,{label:(0,i.__)("Z","blockify"),value:null!==(s=null==w?void 0:w.translateZ)&&void 0!==s?s:"0px",onChange:e=>k({translateZ:e})}))),(0,t.createElement)("br",null),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Scale","blockify"),value:null!==(c=null==w?void 0:w.scale)&&void 0!==c?c:1,onChange:e=>k({scale:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Scale X","blockify"),value:null!==(u=null==w?void 0:w.scaleX)&&void 0!==u?u:1,onChange:e=>k({scaleX:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Scale Y","blockify"),value:null!==(d=null==w?void 0:w.scaleY)&&void 0!==d?d:1,onChange:e=>k({scaleY:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.RangeControl,{label:(0,i.__)("Scale Z","blockify"),value:null!==(p=null==w?void 0:w.scaleZ)&&void 0!==p?p:1,onChange:e=>k({scaleZ:e}),min:-10,max:10,step:.1,shiftStep:1,isShiftStepEnabled:!0,withInputField:!0,allowReset:!0}),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("Rotate","blockify"),value:null!==(m=null==w?void 0:w.rotate)&&void 0!==m?m:0,onChange:e=>k({rotate:e})}),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("RotateX","blockify"),value:null!==(b=null==w?void 0:w.rotateX)&&void 0!==b?b:0,onChange:e=>k({rotateX:e})}),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("RotateY","blockify"),value:null!==(h=null==w?void 0:w.rotateY)&&void 0!==h?h:0,onChange:e=>k({rotateY:e})}),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("RotateZ","blockify"),value:null!==(y=null==w?void 0:w.rotateZ)&&void 0!==y?y:0,onChange:e=>k({rotateZ:e})}),(0,t.createElement)("br",null),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("Skew X","blockify"),value:null!==(g=null==w?void 0:w.skewX)&&void 0!==g?g:0,onChange:e=>k({skewX:e})}),(0,t.createElement)(n.AnglePickerControl,{label:(0,i.__)("Skew Y","blockify"),value:null!==(v=null==w?void 0:w.skewY)&&void 0!==v?v:0,onChange:e=>k({skewY:e})}))))}),"withCssTransforms"),C=e=>{let t="";return null!=e&&e.translateX&&"0px"!==e.translateX&&(t+=" translateX("+e.translateX+")"),null!=e&&e.translateY&&"0px"!==e.translateY&&(t+=" translateY("+e.translateY+")"),null!=e&&e.translateZ&&"0px"!==e.translateZ&&(t+=" translateZ("+e.translateZ+")"),null!=e&&e.scale&&(t+=" scale("+e.scale+")"),null!=e&&e.scaleX&&(t+=" scaleX("+e.scaleX+")"),null!=e&&e.scaleY&&(t+=" scaleY("+e.scaleY+")"),null!=e&&e.scaleZ&&(t+=" scaleZ("+e.scaleZ+")"),null!=e&&e.rotate&&(t+=" rotate("+e.rotate+"deg)"),null!=e&&e.rotateX&&(t+=" rotateX("+e.rotateX+"deg)"),null!=e&&e.rotateY&&(t+=" rotateY("+e.rotateY+"deg)"),null!=e&&e.rotateZ&&(t+=" rotateZ("+e.rotateZ+"deg)"),null!=e&&e.skewX&&(t+=" skewX("+e.skewX+"deg)"),null!=e&&e.skewY&&(t+=" skewY("+e.skewY+"deg)"),t.trim()};(0,r.addFilter)("editor.BlockEdit","blockify/with-css-transforms",S);const F=(0,a.createHigherOrderComponent)((e=>l=>{const{attributes:n,name:o,clientId:a}=l,r=(0,t.createElement)(e,l);if(!_.includes(o))return r;const i=C(n);return i?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,"#block-"+a+"{transform:"+i+"}"),(0,t.createElement)(e,l)):r}),"withCssTransform");(0,r.addFilter)("editor.BlockListBlock","blockify/with-css-transform",F),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/apply-css-transform-styles",(function(e,t,l){if(void 0!==l&&_.includes(t.name)){const t=C(l);t&&(e={...e,style:{...e.style,transform:t}})}return e}));var B=window.lodash,R=window.wp.data,T=window.wp.richText;class I extends t.Component{render(){const{value:e,isActive:l,onChange:n,formatTypes:a}=this.props;return(0,t.createElement)(o.RichTextToolbarButton,{icon:"editor-removeformatting",title:(0,i.__)("Clear Formatting","blockify"),onClick:()=>{if(a.length>0){let t=e;(0,B.map)(a,(e=>{t=(0,T.removeFormat)(t,e.name)})),n({...t})}},isActive:l})}}const P=(0,a.compose)((0,R.withSelect)((e=>({formatTypes:e("core/rich-text").getFormatTypes()}))))(I);(0,T.registerFormatType)("blockify/clear-formatting",{title:(0,i.__)("Clear","blockify"),tagName:"span",className:"clear",edit:e=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(P,e))});var X=window.wp.primitives,Y=(0,t.createElement)(X.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(X.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),A=(0,t.createElement)(X.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(X.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"}));const O="blockify/small";(0,T.registerFormatType)(O,{title:(0,i.__)("Small","blockify"),tagName:"small",className:null,edit(e){let{isActive:l,value:n,onChange:a}=e;const r=()=>{a((0,T.toggleFormat)(n,{type:O}))};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichTextShortcut,{type:"primary",character:"sm",onUse:r}),(0,t.createElement)(o.RichTextToolbarButton,{icon:Y,title:(0,i.__)("Small","blockify"),onClick:r,isActive:l,shortcutType:"primary",shortcutCharacter:"sm"}))}});const N="blockify/big";(0,T.registerFormatType)(N,{title:(0,i.__)("Big","blockify"),tagName:"big",className:null,edit(e){let{isActive:l,value:n,onChange:a}=e;const r=()=>{a((0,T.toggleFormat)(n,{type:N}))};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichTextShortcut,{type:"primary",character:"+",onUse:r}),(0,t.createElement)(o.RichTextToolbarButton,{icon:A,title:(0,i.__)("Big","blockify"),onClick:r,isActive:l,shortcutType:"primary",shortcutCharacter:"+"}))}});var Z=(0,t.createElement)(X.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(X.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"}));const j="blockify/underline";(0,T.registerFormatType)(j,{title:(0,i.__)("Underline","blockify"),tagName:"u",className:null,edit:e=>{let{isActive:l,value:n,onChange:a}=e;const r=()=>{a((0,T.toggleFormat)(n,{type:j}))};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichTextShortcut,{type:"primary",character:"u",onUse:r}),(0,t.createElement)(o.RichTextToolbarButton,{icon:Z,title:(0,i.__)("Underline","blockify"),onClick:r,isActive:l,shortcutType:"primary",shortcutCharacter:"u"}))}});var z=(0,t.createElement)(X.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(X.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"}));const H="blockify/gradient",G=[{gradient:"linear-gradient(0deg,var(--wp--preset--color--black) 0%,var(--wp--preset--color--white) 100%)",slug:"black-white",name:"Black White"}];(0,T.registerFormatType)(H,{title:(0,i.__)("Gradient","blockify"),tagName:"span",className:"has-gradient-text",attributes:{style:"style",class:"class"},edit:(0,a.compose)((0,R.withSelect)((e=>{const{gradients:t}=e("core/block-editor").getSettings();return{gradients:t||G}})))((e=>{let{isActive:l,value:a,onChange:r,gradients:s}=e;const[c,u]=(0,t.useState)(""),[d,p]=(0,t.useState)(!1);return(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(o.RichTextShortcut,{type:"primary",character:"g"}),(0,t.createElement)(o.RichTextToolbarButton,{icon:z,title:(0,i.__)("Gradient","blockify"),isActive:l,shortcutType:"primary",shortcutCharacter:"g",onClick:()=>p(!d)}),d&&(0,t.createElement)(n.Toolbar,{className:"blockify-components-toolbar"},(0,t.createElement)(n.Popover,{position:"bottom center",className:"blockify-gradient-text-control",focusOnMount:"container",onFocusOutside:()=>p(!1)},(0,t.createElement)(n.GradientPicker,{value:c,gradients:s,onChange:e=>{u(e),r((0,T.applyFormat)(a,{type:H,attributes:{style:"background:"+e,class:"has-gradient-text"}}))}}))))}))});var L=window.wp.blocks,U=window.wp.domReady,V=l.n(U);(0,L.registerBlockStyle)("core/columns",{name:"reverse",label:(0,i.__)("Reverse","blockify")}),(0,L.registerBlockStyle)("core/list",{name:"numbered",label:(0,i.__)("Numbered","blockify")}),(0,L.registerBlockStyle)("core/list",{name:"checklist",label:(0,i.__)("Checklist","blockify")}),(0,L.registerBlockStyle)("core/list",{name:"square",label:(0,i.__)("Square","blockify")}),V()((()=>{(0,L.unregisterBlockStyle)("core/separator","wide"),(0,L.unregisterBlockStyle)("core/separator","dots")}));var M,W,q,D=l(4184),Q=l.n(D);const J=null!==(M=null===(W=window)||void 0===W||null===(q=W.blockify)||void 0===q?void 0:q.block_supports)&&void 0!==M?M:{};(0,r.addFilter)("blocks.registerBlockType","blockify/block-supports",((e,t)=>(Object.keys(J).includes(t)&&(e.supports={...e.supports,...J[t]}),e)),0),(0,r.addFilter)("blocks.getSaveContent.extraProps","blockify/alignment-class",((e,t,l)=>(Object.keys(J).includes(t.name)&&null!=l&&l.align&&(e.className=Q()(e.className,"align"+l.align)),e))),(0,r.addFilter)("blocks.registerBlockType","blockify/block-attributes-search",((e,t)=>{var l,n,o;return"core/search"===t&&(e.attributes.style={...null===(l=e.attributes)||void 0===l?void 0:l.style,spacing:{...null===(n=e.attributes)||void 0===n||null===(o=n.style)||void 0===o?void 0:o.spacing,padding:{top:"1em",right:"1em",bottom:"1em",left:"2em"}}}),e}),0);const K=(0,a.createHigherOrderComponent)((e=>l=>{var n,o,a;if("core/search"!==l.name)return(0,t.createElement)(e,l);const r=document.getElementsByClassName("wp-block-search__input"),i=null==l||null===(n=l.attributes)||void 0===n||null===(o=n.style)||void 0===o||null===(a=o.spacing)||void 0===a?void 0:a.padding;return r[0]&&i&&(i.top&&(r[0].style.paddingTop=null==i?void 0:i.top),i.right&&(r[0].style.paddingRight=null==i?void 0:i.right),i.bottom&&(r[0].style.paddingBottom=null==i?void 0:i.bottom),i.left&&(r[0].style.paddingLeft=null==i?void 0:i.left)),(0,t.createElement)(e,l)}),"withInspectorControl");(0,r.addFilter)("editor.BlockEdit","blockify/with-search-padding-css",K);var $=window.jQuery,ee=l.n($);V()((()=>{var e,t;const l=ee()(".post-type-block_pattern .page-title-action")[0];if(!l)return;const n=null!==(e=null===(t=window)||void 0===t?void 0:t.blockify)&&void 0!==e?e:{},o=ee()('<button class="export-button page-title-action">Export All</button>').get(0);l.after(o),ee()(".export-button").on("click",(()=>{ee().ajax({method:"POST",url:null==n?void 0:n.ajaxUrl,data:{action:"blockify_export_patterns",nonce:null==n?void 0:n.nonce},success:e=>{console.log(e)},error:e=>{console.log((0,i.__)("Patterns error","blockify")),console.log(e)}})}))}));var te=window.wp.plugins,le=window.wp.editor,ne=window.wp.editPost;(0,te.registerPlugin)("blockify-page-title-field",{render:()=>{const{postTitle:e,template:l}=(0,R.useSelect)((e=>({postTitle:e(le.store).getEditedPostAttribute("title"),template:e(le.store).getEditedPostAttribute("template")})),[]);"landing-page"===l?document.body.classList.add("page-template-landing-page"):document.body.classList.remove("page-template-landing-page");const{editPost:o}=(0,R.useDispatch)(le.store);return(0,t.createElement)("div",null,(0,t.createElement)(ne.PluginPostStatusInfo,null,(0,t.createElement)(n.TextControl,{label:(0,i.__)("Title","blockify"),value:null!=e?e:"",min:1,onChange:e=>o({title:e}),required:!0})))}});const oe=()=>{var e,t,l,n,o;const a=null===(e=document.getElementsByClassName("edit-site-visual-editor__editor-canvas"))||void 0===e?void 0:e.item(0),r=null==a||null===(t=a.contentWindow)||void 0===t?void 0:t.getComputedStyle(null==a||null===(l=a.contentWindow)||void 0===l||null===(n=l.document)||void 0===n?void 0:n.body);let i=null==r||null===(o=r.getPropertyValue("--wp--custom--variation"))||void 0===o?void 0:o.replace(/\s/g,"");if(i){document.body.setAttribute("data-style-variation",i);const e=document.getElementById("blockify-pattern-style-variations"),t=document.createElement("style"),l=i[0].toUpperCase()+i.slice(1);e&&e.remove(),t.id="blockify-pattern-style-variations",t.innerHTML='.block-editor-block-patterns-list__list-item[aria-label^="Blockify "] { display: none } .block-editor-block-patterns-list__list-item[aria-label^="Blockify '+l+'"] { display: block }',document.head.appendChild(t)}};V()((()=>{(document.body.classList.contains("site-editor-php")||document.body.classList.contains("appearance_page_gutenberg-edit-site"))&&(document.addEventListener("click",oe),setTimeout((()=>{oe()}),5e3))}))}()}();