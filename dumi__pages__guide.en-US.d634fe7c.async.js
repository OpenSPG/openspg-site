"use strict";(self.webpackChunkspg_site=self.webpackChunkspg_site||[]).push([[646,93],{73616:function(O,i,n){n.d(i,{l:function(){return r}});var u=n(74330),d=n(25778),o=n(87363),g=n.n(o),x=n(85893),r=function(p){var m=p.url,c=p.target,y=p.text,v=(0,d.bU)(),h=v.id,j=c!=="_blank";return(0,o.useEffect)(function(){c==="_blank"?window.open(m):window.location.replace(m)},[]),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:15},children:[(0,x.jsx)(u.Z,{spinning:j}),y||(h==="zh-CN"?"\u8DF3\u8F6C\u4E2D...":"Redirecting...")]})}},99761:function(O,i,n){n.r(i);var u=n(35957);i.default=u.default},35957:function(O,i,n){n.r(i);var u=n(73616),d=n(5801),o=n(86250),g=n(21387),x=n(25778),r=n(85893),P=d.Z.Title;i.default=function(){var p=(0,x.bU)(),m=p.id,c=function(v,h){return m==="zh-CN"?v:h};return(0,r.jsxs)("div",{children:[(0,r.jsx)(P,{level:4,children:c("\u7248\u672C","Version")}),(0,r.jsx)(u.l,{url:c("https://openspg.yuque.com/ndx6g9/docs","https://openspg.yuque.com/ndx6g9/docs_en"),target:"_blank",text:" "}),(0,r.jsxs)(o.Z,{vertical:!0,align:"flex-start",children:[(0,r.jsx)(g.ZP,{type:"link",target:"_blank",href:c("https://openspg.yuque.com/ndx6g9/ooil9x","https://openspg.yuque.com/ndx6g9/ns5nw2"),children:"0.0.2"}),(0,r.jsx)(g.ZP,{type:"link",target:"_blank",href:c("https://openspg.yuque.com/ndx6g9/nmwkzz","https://openspg.yuque.com/ndx6g9/wc9oyq"),children:"0.0.3"}),(0,r.jsx)(g.ZP,{type:"link",target:"_blank",href:c("https://openspg.yuque.com/ndx6g9/0.5","https://openspg.yuque.com/ndx6g9/wc9oyq"),children:"0.5"}),(0,r.jsx)(g.ZP,{type:"link",target:"_blank",href:c("https://openspg.yuque.com/ndx6g9/docs","https://openspg.yuque.com/ndx6g9/docs_en"),children:"0.6"})]})]})}},98065:function(O,i,n){n.d(i,{T:function(){return d},n:function(){return u}});function u(o){return["small","middle","large"].includes(o)}function d(o){return o?typeof o=="number"&&!Number.isNaN(o):!1}},86250:function(O,i,n){n.d(i,{Z:function(){return b}});var u=n(87363),d=n.n(u),o=n(93967),g=n.n(o),x=n(98423),r=n(98065),P=n(53124),p=n(83559),m=n(83262);const c=["wrap","nowrap","wrap-reverse"],y=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],v=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],h=(t,e)=>{const s=e.wrap===!0?"wrap":e.wrap;return{[`${t}-wrap-${s}`]:s&&c.includes(s)}},j=(t,e)=>{const s={};return v.forEach(l=>{s[`${t}-align-${l}`]=e.align===l}),s[`${t}-align-stretch`]=!e.align&&!!e.vertical,s},I=(t,e)=>{const s={};return y.forEach(l=>{s[`${t}-justify-${l}`]=e.justify===l}),s};function R(t,e){return g()(Object.assign(Object.assign(Object.assign({},h(t,e)),j(t,e)),I(t,e)))}var _=R;const $=t=>{const{componentCls:e}=t;return{[e]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},L=t=>{const{componentCls:e}=t;return{[e]:{"&-gap-small":{gap:t.flexGapSM},"&-gap-middle":{gap:t.flexGap},"&-gap-large":{gap:t.flexGapLG}}}},T=t=>{const{componentCls:e}=t,s={};return c.forEach(l=>{s[`${e}-wrap-${l}`]={flexWrap:l}}),s},W=t=>{const{componentCls:e}=t,s={};return v.forEach(l=>{s[`${e}-align-${l}`]={alignItems:l}}),s},U=t=>{const{componentCls:e}=t,s={};return y.forEach(l=>{s[`${e}-justify-${l}`]={justifyContent:l}}),s},A=()=>({});var N=(0,p.I$)("Flex",t=>{const{paddingXS:e,padding:s,paddingLG:l}=t,a=(0,m.IX)(t,{flexGapSM:e,flexGap:s,flexGapLG:l});return[$(a),L(a),T(a),W(a),U(a)]},A,{resetStyle:!1}),B=function(t,e){var s={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(t);a<l.length;a++)e.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(t,l[a])&&(s[l[a]]=t[l[a]]);return s},b=d().forwardRef((t,e)=>{const{prefixCls:s,rootClassName:l,className:a,style:G,flex:S,gap:C,children:K,vertical:D=!1,component:w="div"}=t,Z=B(t,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:f,direction:F,getPrefixCls:V}=d().useContext(P.E_),E=V("flex",s),[z,J,X]=N(E),H=D!=null?D:f==null?void 0:f.vertical,Q=g()(a,l,f==null?void 0:f.className,E,J,X,_(E,t),{[`${E}-rtl`]:F==="rtl",[`${E}-gap-${C}`]:(0,r.n)(C),[`${E}-vertical`]:H}),M=Object.assign(Object.assign({},f==null?void 0:f.style),G);return S&&(M.flex=S),C&&!(0,r.n)(C)&&(M.gap=C),z(d().createElement(w,Object.assign({ref:e,className:Q,style:M},(0,x.Z)(Z,["justify","wrap","align"])),K))})}}]);