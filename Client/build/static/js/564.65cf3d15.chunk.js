"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[564],{18:function(n,e,r){var t,a=r(168),o=(r(2791),r(203)),i=r(3479),s=r(9126),c=r(6031),l=r(184);var u=c.ZP.section(t||(t=(0,a.Z)(["\n  .icon-style {\n    display: flex;\n    gap: 0.2rem;\n    align-items: center;\n    justify-content: flex-start;\n\n    .icon {\n      font-size: 2rem;\n      color: orange;\n    }\n\n    .empty-icon {\n      font-size: 2.6rem;\n    }\n  }\n"])));e.Z=function(n){var e=n.stars,r=void 0===e?0:e,t=Array.from({length:5},(function(n,e){var t=e+.5;return(0,l.jsx)("span",{children:r>=e+1?(0,l.jsx)(o.QJe,{className:"icon"}):r>=t?(0,l.jsx)(s.fXH,{className:"icon"}):(0,l.jsx)(i.LHG,{className:"icon"})},e)}));return(0,l.jsx)(u,{children:(0,l.jsx)("div",{className:"icon-style",children:t})})}},1301:function(n,e,r){r(2791);var t=r(184);e.Z=function(n){var e=n.price;return(0,t.jsx)(t.Fragment,{children:Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(e)})}},2725:function(n,e,r){var t=r(9439),a=r(2791),o=r(5218),i=r(184);e.Z=function(n){var e=n.src,r=n.blurhash,s=(0,a.useState)(!0),c=(0,t.Z)(s,2),l=c[0],u=c[1],d=(0,a.useRef)(null),h=(0,a.useState)(""),p=(0,t.Z)(h,2),f=p[0],m=p[1];return(0,a.useEffect)((function(){var n=new IntersectionObserver((function(r){r[0].isIntersecting&&(m(e),n.disconnect())}),{rootMargin:"0px 0px",threshold:0});return d&&d.current&&n.observe(d.current),function(){n.disconnect()}}),[]),(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{ref:d,style:{position:"relative",width:"100%",height:"100%"},children:(0,i.jsx)(o.E,{hash:r,width:"100%",height:"100%",resolutionX:32,resolutionY:32,punch:1})}),(0,i.jsx)("img",{src:"https://ecommerce-server.uk.to/uploads/".concat(f),alt:"",style:{display:l?"none":"block",width:"100%"},onLoad:function(){u(!1)}})]})}},9567:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(1413);function a(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var o=r(2791),i=r(9439);var s=r(6290),c=r(184),l=["children","threshold","root","rootMargin"];var u=function(n){var e=n.children,r=n.threshold,u=void 0===r?0:r,d=n.root,h=void 0===d?null:d,p=n.rootMargin,f=void 0===p?"0px 0px 0px 0px":p,m=a(n,l),v=(0,o.useRef)(),g=function(n,e){var r=(0,o.useState)(!1),t=(0,i.Z)(r,2),a=t[0],s=t[1],c=(0,o.useRef)(new IntersectionObserver((function(n){var e=(0,i.Z)(n,1)[0];return s(e.isIntersecting)}),e));return(0,o.useEffect)((function(){var e=n.current,r=c.current;if(!a)return e&&!a&&r.observe(e),function(){return r.disconnect()};r.disconnect()}),[a,n]),a}(v,{threshold:u,root:h,rootMargin:f});return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},m),{},{ref:v,children:g&&(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(s.Z,{}),children:e})}))}},7564:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,a=r(168),o=r(4165),i=r(5861),s=r(9439),c=r(2791),l=r(7689),u=r(6031),d=r(6290),h=r(3737),p=r(1087),f=r(184);function m(n){var e=n.title,r=n.nav;return(0,f.jsxs)(b,{children:[(0,f.jsx)(p.rU,{to:"/"===r?"/":"/products"===r?"/products":"/sellerproducts",children:"/"===r?"Home":"/products"===r?"Products":"Your Products"}),(0,f.jsx)("span",{children:"/"}),e]})}var v,g,x,b=u.ZP.section(t||(t=(0,a.Z)(["\n  height: 6rem;\n  background-color: ",";\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 2.5rem;\n  padding-left: 3rem;\n\n  a,\n  span {\n    color: ",";\n    text-decoration: none;\n    font-size: 3.2rem;\n  }\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.cart})),j=u.ZP.div(v||(v=(0,a.Z)(["\n  width: 100%;\n  padding: 0rem 12rem;\n"]))),y=r(6355),w=r(2725),Z=function(n){var e=n.image,r=(0,c.useState)(0),t=(0,s.Z)(r,2),a=t[0],o=t[1];return(0,f.jsx)(N,{children:(0,f.jsx)("div",{className:"image-carousel-wrapper",children:e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"carousel-container",style:{transform:"translateX(-".concat(100*a,"%)")},children:e.map((function(n,e){return(0,f.jsx)("div",{className:"carousel-image","data-index":e,children:(0,f.jsx)(w.Z,{className:"lazy-image",src:n.url,blurhash:n.blurHash})},e)}))}),(0,f.jsx)("div",{className:"carousel-button left",onClick:function(){o((function(n){return 0===n?e.length-1:n-1}))},children:(0,f.jsx)(y.bUI,{className:"carousel-button-icon"})}),(0,f.jsx)("div",{className:"carousel-button right",onClick:function(){o((function(n){return n===e.length-1?0:n+1}))},children:(0,f.jsx)(y.Dli,{className:"carousel-button-icon"})}),(0,f.jsx)("div",{className:"pagination-container",children:e.map((function(n,e){return(0,f.jsx)("div",{className:"pagination-button ".concat(e===a?"active":""),onClick:function(){return function(n){o(n)}(e)}},e)}))})]})})})},N=u.ZP.div(g||(g=(0,a.Z)(["\n  /* ImageCarousel.css */\n\n  .image-carousel-wrapper {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .carousel-container {\n    display: flex;\n    transition: transform 0.5s ease-in-out;\n  }\n\n  .carousel-image {\n    border-radius: 1rem;\n    overflow: hidden;\n    width: 100%;\n    flex-shrink: 0;\n    height: 70vh; /* Adjust as needed */\n    overflow: hidden;\n  }\n\n  .carousel-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n\n  .carousel-button {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    font-size: 2rem;\n    color: white;\n    padding: 10px;\n    border-radius: 50%;\n    transition: background-color 0.3s ease;\n  }\n\n  .carousel-button.left {\n    left: 10px;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .carousel-button.right {\n    right: 10px;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .carousel-button:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  .carousel-button-icon {\n    width: 100%;\n    height: 100%;\n  }\n\n  .pagination-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n  }\n\n  .pagination-button {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: gray;\n    margin: 0 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n\n  .pagination-button.active {\n    background-color: #000000;\n  }\n\n  .pagination-button:hover {\n    background-color: #000000;\n  }\n"]))),k=r(1301),O=r(1578),P=r(6856),M=r(18),I=r(9567),D=r(4569),E=r.n(D),S=r(1493),z=(0,c.lazy)((function(){return r.e(869).then(r.bind(r,869))})),C=u.ZP.section(x||(x=(0,a.Z)(["\n  .container {\n    padding: 3rem 2rem;\n  }\n  .product-data {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 2rem;\n\n    h2 {\n      text-transform: capitalize;\n    }\n\n    .product-data-warranty {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-bottom: 1px solid #ccc;\n      margin-bottom: 1rem;\n\n      .product-warranty-data {\n        text-align: center;\n\n        .warranty-icon {\n          background-color: rgba(220, 220, 220, 0.5);\n          border-radius: 50%;\n          width: 4rem;\n          height: 4rem;\n          padding: 0.6rem;\n        }\n        p {\n          font-size: 1.4rem;\n          padding-top: 0.4rem;\n        }\n      }\n    }\n\n    .product-data-price {\n      font-weight: bold;\n    }\n    .product-data-real-price {\n      color: ",";\n    }\n    .product-data-info {\n      display: flex;\n      flex-direction: column;\n      gap: 1rem;\n\n      font-size: 1.8rem;\n\n      span {\n        font-weight: bold;\n        color: #000;\n      }\n    }\n\n    hr {\n      max-width: 100%;\n      width: 90%;\n      /* height: 0.2rem; */\n      border: 0.1rem solid #000;\n      color: red;\n    }\n  }\n\n  @media (max-width: ",") {\n    padding: 0;\n  }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.media.mobile})),A=function(){var n=(0,l.UO)().id,e=(0,S.S)().dispatchUser,r=(0,h.$)().nav,t=(0,c.useState)({}),a=(0,s.Z)(t,2),u=a[0],p=a[1],v=(0,c.useState)(!1),g=(0,s.Z)(v,2),x=g[0],b=g[1],y="https://ecommerce-server.uk.to/products/singleproduct?pid=".concat(n);(0,c.useEffect)((function(){var n=new AbortController,r=function(){var r=(0,i.Z)((0,o.Z)().mark((function r(){var t,a;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,b(!0),r.next=4,E().get(y,{signal:n.signal});case 4:t=r.sent,a=t.data,p(a.singleproduct[0]),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),e({type:"SHOW_NOTIFICATION",payload:{message:r.t0.response.data.message,color:"red"}});case 12:return r.prev=12,b(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){n.abort()}}),[]);var w=u.name,N=u.company,D=u.price,A=u.description,X=u.stock,R=u.stars,Y=u.reviews,F=u.images;return x?(0,f.jsx)(d.Z,{}):(0,f.jsxs)(C,{children:[(0,f.jsx)(m,{title:w,nav:r}),(0,f.jsx)(j,{className:"container",children:(0,f.jsxs)("div",{className:"grid grid-two-column",children:[(0,f.jsx)("div",{className:"product-images",children:(0,f.jsx)(Z,{image:F})}),(0,f.jsxs)("div",{className:"product-data",children:[(0,f.jsx)("h2",{children:w}),(0,f.jsx)(M.Z,{stars:R}),(0,f.jsxs)("p",{children:["(",Y," customer reviews)"]}),(0,f.jsxs)("p",{className:"product-data-price",children:["MRP : \xa0",(0,f.jsx)("del",{className:"product-data-real-price",children:(0,f.jsx)(k.Z,{price:D+3e3})})]}),(0,f.jsxs)("p",{className:"product-data-real-price product-data-price",children:["Deal of the Day : \xa0",(0,f.jsx)(k.Z,{price:D})]}),(0,f.jsx)("p",{children:A}),(0,f.jsxs)("div",{className:"product-data-warranty ",children:[(0,f.jsxs)("div",{className:"product-warranty-data",children:[(0,f.jsx)(O.u5D,{className:"warranty-icon"}),(0,f.jsx)("p",{children:"Free Delivery"})]}),(0,f.jsxs)("div",{className:"product-warranty-data",children:[(0,f.jsx)(O.rtw,{className:"warranty-icon"}),(0,f.jsx)("p",{children:"30 Days Replacement"})]}),(0,f.jsxs)("div",{className:"product-warranty-data",children:[(0,f.jsx)(O.u5D,{className:"warranty-icon"}),(0,f.jsx)("p",{children:"On time Delivery"})]}),(0,f.jsxs)("div",{className:"product-warranty-data",children:[(0,f.jsx)(P.AXp,{className:"warranty-icon"}),(0,f.jsx)("p",{children:"Secure Payments"})]})]}),(0,f.jsxs)("div",{className:"product-data-info",children:[(0,f.jsxs)("p",{children:["Available :",(0,f.jsx)("span",{children:X>0?"In Stock":"Not Available"})]}),(0,f.jsxs)("p",{children:["Brand : ",(0,f.jsx)("span",{children:N})]})]}),(0,f.jsx)("hr",{}),X>0&&(0,f.jsx)(I.Z,{threshold:0,style:{minHeight:"240px"},children:(0,f.jsx)(z,{product:u,nav:r,id:n})})]})]})})]})}},5218:function(n,e,r){r.d(e,{E:function(){return S}});var t=r(5671),a=r(3144),o=r(136),i=r(516),s=r(7762),c=r(2791),l=r(8737),u=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],d=function(n){for(var e=0,r=0;r<n.length;r++){var t=n[r];e=83*e+u.indexOf(t)}return e},h=function(n){var e=n/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},p=function(n){var e=Math.max(0,Math.min(1,n));return e<=.0031308?Math.trunc(12.92*e*255+.5):Math.trunc(255*(1.055*Math.pow(e,.4166666666666667)-.055)+.5)},f=function(n,e){return function(n){return n<0?-1:1}(n)*Math.pow(Math.abs(n),e)},m=function(n){(0,o.Z)(r,n);var e=(0,i.Z)(r);function r(n){var a;return(0,t.Z)(this,r),(a=e.call(this,n)).name="ValidationError",a.message=n,a}return(0,a.Z)(r)}((0,l.Z)(Error)),v=function(n){if(!n||n.length<6)throw new m("The blurhash string must be at least 6 characters");var e=d(n[0]),r=Math.floor(e/9)+1,t=e%9+1;if(n.length!==4+2*t*r)throw new m("blurhash length mismatch: length is ".concat(n.length," but it should be ").concat(4+2*t*r))},g=function(n){var e=n>>8&255,r=255&n;return[h(n>>16),h(e),h(r)]},x=function(n,e){var r=Math.floor(n/361),t=Math.floor(n/19)%19,a=n%19;return[f((r-9)/9,2)*e,f((t-9)/9,2)*e,f((a-9)/9,2)*e]},b=function(n,e,r,t){v(n),t|=1;for(var a=d(n[0]),o=Math.floor(a/9)+1,i=a%9+1,s=(d(n[1])+1)/166,c=new Array(i*o),l=0;l<c.length;l++)if(0===l){var u=d(n.substring(2,6));c[l]=g(u)}else{var h=d(n.substring(4+2*l,6+2*l));c[l]=x(h,s*t)}for(var f=4*e,m=new Uint8ClampedArray(f*r),b=0;b<r;b++)for(var j=0;j<e;j++){for(var y=0,w=0,Z=0,N=0;N<o;N++)for(var k=0;k<i;k++){var O=Math.cos(Math.PI*j*k/e)*Math.cos(Math.PI*b*N/r),P=c[k+N*i];y+=P[0]*O,w+=P[1]*O,Z+=P[2]*O}var M=p(y),I=p(w),D=p(Z);m[4*j+0+b*f]=M,m[4*j+1+b*f]=I,m[4*j+2+b*f]=D,m[4*j+3+b*f]=255}return m},j=Object.defineProperty,y=Object.defineProperties,w=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,O=function(n,e,r){return e in n?j(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r},P=function(n,e){for(var r in e||(e={}))N.call(e,r)&&O(n,r,e[r]);if(Z){var t,a=(0,s.Z)(Z(e));try{for(a.s();!(t=a.n()).done;){r=t.value;k.call(e,r)&&O(n,r,e[r])}}catch(o){a.e(o)}finally{a.f()}}return n},M=function(n,e){return y(n,w(e))},I=function(n,e){var r={};for(var t in n)N.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&Z){var a,o=(0,s.Z)(Z(n));try{for(o.s();!(a=o.n()).done;){t=a.value;e.indexOf(t)<0&&k.call(n,t)&&(r[t]=n[t])}}catch(i){o.e(i)}finally{o.f()}}return r},D=function(n){(0,o.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;return(0,t.Z)(this,r),(n=e.apply(this,arguments)).canvas=null,n.handleRef=function(e){n.canvas=e,n.draw()},n.draw=function(){var e=n.props,r=e.hash,t=e.height,a=e.punch,o=e.width;if(n.canvas){var i=b(r,o,t,a),s=n.canvas.getContext("2d"),c=s.createImageData(o,t);c.data.set(i),s.putImageData(c,0,0)}},n}return(0,a.Z)(r,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){var n=this.props,e=(n.hash,n.height),r=n.width,t=I(n,["hash","height","width"]);return c.createElement("canvas",M(P({},t),{height:e,width:r,ref:this.handleRef}))}}]),r}(c.PureComponent);D.defaultProps={height:128,width:128};var E={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},S=function(n){(0,o.Z)(r,n);var e=(0,i.Z)(r);function r(){return(0,t.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"componentDidUpdate",value:function(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}},{key:"render",value:function(){var n=this.props,e=n.hash,r=n.height,t=n.width,a=n.punch,o=n.resolutionX,i=n.resolutionY,s=n.style,l=I(n,["hash","height","width","punch","resolutionX","resolutionY","style"]);return c.createElement("div",M(P({},l),{style:M(P({display:"inline-block",height:r,width:t},s),{position:"relative"})}),c.createElement(D,{hash:e,height:i,width:o,punch:a,style:E}))}}]),r}(c.PureComponent);S.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32}}}]);
//# sourceMappingURL=564.65cf3d15.chunk.js.map