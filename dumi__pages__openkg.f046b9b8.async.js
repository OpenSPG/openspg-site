"use strict";(self.webpackChunkspg_site=self.webpackChunkspg_site||[]).push([[709],{44294:function(at,O,l){l.r(O),l.d(O,{default:function(){return it}});var o=l(87363),G=l(93967),g=l.n(G),B=l(98423);function R(t,e,i){var n=i||{},a=n.noTrailing,v=a===void 0?!1:a,$=n.noLeading,S=$===void 0?!1:$,w=n.debounceMode,m=w===void 0?void 0:w,d,u=!1,b=0;function D(){d&&clearTimeout(d)}function s(f){var p=f||{},r=p.upcomingOnly,h=r===void 0?!1:r;D(),u=!h}function x(){for(var f=arguments.length,p=new Array(f),r=0;r<f;r++)p[r]=arguments[r];var h=this,z=Date.now()-b;if(u)return;function y(){b=Date.now(),e.apply(h,p)}function c(){d=void 0}!S&&m&&!d&&y(),D(),m===void 0&&z>t?S?(b=Date.now(),v||(d=setTimeout(m?c:y,t))):y():v!==!0&&(d=setTimeout(m?c:y,m===void 0?t-z:t))}return x.cancel=s,x}function H(t,e,i){var n=i||{},a=n.atBegin,v=a===void 0?!1:a;return R(t,e,{debounceMode:v!==!1})}var C=l(96159),j=l(53124),M=l(39302),A=l(14747),q=l(91945),F=l(45503);const V=new M.E4("antSpinMove",{to:{opacity:1}}),W=new M.E4("antRotate",{to:{transform:"rotate(405deg)"}}),U=t=>{const{componentCls:e,calc:i}=t;return{[`${e}`]:Object.assign(Object.assign({},(0,A.Wf)(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${e}-text`]:{fontSize:t.fontSize,paddingTop:i(i(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:t.colorBgMask,zIndex:t.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${t.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${e}-dot ${e}-dot-item`]:{backgroundColor:t.colorWhite},[`${e}-text`]:{color:t.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${e}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${e}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:i(t.dotSize).mul(-1).div(2).equal()},[`${e}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${t.colorBgContainer}`},[`&${e}-show-text ${e}-dot`]:{marginTop:i(t.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${e}-dot`]:{margin:i(t.dotSizeSM).mul(-1).div(2).equal()},[`${e}-text`]:{paddingTop:i(i(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()},[`&${e}-show-text ${e}-dot`]:{marginTop:i(t.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${e}-dot`]:{margin:i(t.dotSizeLG).mul(-1).div(2).equal()},[`${e}-text`]:{paddingTop:i(i(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()},[`&${e}-show-text ${e}-dot`]:{marginTop:i(t.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${e}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:t.spinDotDefault},[`${e}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:i(t.dotSize).sub(i(t.marginXXS).div(2)).div(2).equal(),height:i(t.dotSize).sub(i(t.marginXXS).div(2)).div(2).equal(),backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:V,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:W,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e}-dot`]:{fontSize:t.dotSizeSM,i:{width:i(i(t.dotSizeSM).sub(i(t.marginXXS).div(2))).div(2).equal(),height:i(i(t.dotSizeSM).sub(i(t.marginXXS).div(2))).div(2).equal()}},[`&-lg ${e}-dot`]:{fontSize:t.dotSizeLG,i:{width:i(i(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),height:i(i(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()}},[`&${e}-show-text ${e}-text`]:{display:"block"}})}},Z=t=>{const{controlHeightLG:e,controlHeight:i}=t;return{contentHeight:400,dotSize:e/2,dotSizeSM:e*.35,dotSizeLG:i}};var J=(0,q.I$)("Spin",t=>{const e=(0,F.TS)(t,{spinDotDefault:t.colorTextDescription});return[U(e)]},Z),K=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};const st=null;let E=null;function Q(t,e){const{indicator:i}=e,n=`${t}-dot`;return i===null?null:(0,C.l$)(i)?(0,C.Tm)(i,{className:g()(i.props.className,n)}):(0,C.l$)(E)?(0,C.Tm)(E,{className:g()(E.props.className,n)}):o.createElement("span",{className:g()(n,`${t}-dot-spin`)},o.createElement("i",{className:`${t}-dot-item`,key:1}),o.createElement("i",{className:`${t}-dot-item`,key:2}),o.createElement("i",{className:`${t}-dot-item`,key:3}),o.createElement("i",{className:`${t}-dot-item`,key:4}))}function Y(t,e){return!!t&&!!e&&!isNaN(Number(e))}const L=t=>{const{prefixCls:e,spinning:i=!0,delay:n=0,className:a,rootClassName:v,size:$="default",tip:S,wrapperClassName:w,style:m,children:d,fullscreen:u}=t,b=K(t,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:D}=o.useContext(j.E_),s=D("spin",e),[x,f,p]=J(s),[r,h]=o.useState(()=>i&&!Y(i,n));o.useEffect(()=>{if(i){const N=H(n,()=>{h(!0)});return N(),()=>{var T;(T=N==null?void 0:N.cancel)===null||T===void 0||T.call(N)}}h(!1)},[n,i]);const z=o.useMemo(()=>typeof d!="undefined"&&!u,[d,u]),{direction:y,spin:c}=o.useContext(j.E_),et=g()(s,c==null?void 0:c.className,{[`${s}-sm`]:$==="small",[`${s}-lg`]:$==="large",[`${s}-spinning`]:r,[`${s}-show-text`]:!!S,[`${s}-fullscreen`]:u,[`${s}-fullscreen-show`]:u&&r,[`${s}-rtl`]:y==="rtl"},a,v,f,p),nt=g()(`${s}-container`,{[`${s}-blur`]:r}),X=(0,B.Z)(b,["indicator"]),ot=Object.assign(Object.assign({},c==null?void 0:c.style),m),P=o.createElement("div",Object.assign({},X,{style:ot,className:et,"aria-live":"polite","aria-busy":r}),Q(s,t),S&&(z||u)?o.createElement("div",{className:`${s}-text`},S):null);return x(z?o.createElement("div",Object.assign({},X,{className:g()(`${s}-nested-loading`,w,f,p)}),r&&o.createElement("div",{key:"loading"},P),o.createElement("div",{className:nt,key:"container"},d)):P)};L.setDefaultIndicator=t=>{E=t};var k=L,_=l(83026),I=l(86074),tt=function(e){var i=e.url,n=(0,_.bU)(),a=n.id;return(0,o.useEffect)(function(){window.location.replace(i)},[]),(0,I.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:15},children:[(0,I.jsx)(k,{}),a==="zh-CN"?"\u8DF3\u8F6C\u4E2D...":"Redirecting..."]})},it=function(){return(0,I.jsx)(tt,{url:"http://openkg.cn/"})}}}]);