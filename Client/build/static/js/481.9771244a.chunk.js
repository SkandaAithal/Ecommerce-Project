"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[481],{1481:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var i,t=r(168),a=r(2791),o=r(6031),s=r(1301),c=r(7689),l=r(1087),d=r(9561),m=r(3737),h=r(6290),g=r(2725),f=r(1493),u=r(4771),p=r(184);function x(n){var e=n.products,r=void 0===e?[]:e,i=n.loadMoreItems,t=n.totalItems,o=(0,m.$)(),x=o.isLoading,j=o.setNav,v=(0,c.TH)(),w=(0,f.S)().dispatchUser;return v=v.pathname,(0,a.useEffect)((function(){j(v)}),[v]),(0,p.jsx)(b,{className:"section",children:x?(0,p.jsx)(h.Z,{}):(0,p.jsx)(u.Z,{dataLength:r.length,next:i,hasMore:r.length<t,loader:(0,p.jsx)(h.Z,{}),endMessage:(0,p.jsx)("p",{style:{textAlign:"center",fontSize:"1.5rem",margin:"2rem",color:"#3d3d3d"},children:(0,p.jsx)("b",{children:"That's all for now! Thanks for exploring."})}),scrollThreshold:.5,children:(0,p.jsx)("div",{className:"container grid",children:r.map((function(n){var e=n._id,r=n.name,i=n.image,t=n.price,a=n.description,o=n.blurHash;return(0,p.jsxs)("div",{className:"card grid grid-two-column",children:[(0,p.jsx)("figure",{className:"card",children:(0,p.jsx)(g.Z,{src:i,blurhash:o})}),(0,p.jsxs)("div",{className:"card-data",children:[(0,p.jsx)("h3",{children:r}),(0,p.jsx)("p",{children:(0,p.jsx)(s.Z,{price:t})}),(0,p.jsxs)("p",{children:[a.slice(0,75),"..."]}),(0,p.jsx)(l.rU,{to:"/singleproduct/".concat(e),className:"btn-main",onClick:function(){window.scrollTo(0,0)},children:(0,p.jsx)(d.z,{className:"btn",children:"Read more"})}),"/sellerproducts"===v&&(0,p.jsx)(d.z,{onClick:function(){w({type:"OPEN_CONFIRM",payload:{id:e,name:r}})},style:{backgroundColor:"red",marginBottom:"2rem"},children:"Delete"})]})]},e)}))})})})}var b=o.ZP.section(i||(i=(0,t.Z)(['\n  .grid {\n    gap: 3.2rem;\n  }\n  .container {\n    padding: 2rem;\n  }\n  figure {\n    width: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    transition: all 0.5s linear;\n    &::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 0%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      transition: all 0.2s linear;\n      cursor: pointer;\n    }\n    &:hover::after {\n      width: 100%;\n    }\n    &:hover img {\n      transform: scale(1.2);\n    }\n    img {\n      max-width: 100%;\n      height: 40rem;\n      transition: all 0.2s linear;\n    }\n  }\n\n  .card {\n    border: 0.1rem solid rgb(170 170 170 / 40%);\n\n    .card-data {\n      padding: 0 2rem;\n    }\n\n    h3 {\n      margin: 2rem 0;\n      font-weight: 300;\n      font-size: 2.4rem;\n      text-transform: capitalize;\n    }\n\n    .btn {\n      margin: 2rem 0;\n      background-color: rgb(0 0 0 / 0%);\n      border: 0.1rem solid rgb(98 84 243);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: rgb(98 84 243);\n\n      &:hover {\n        background-color: rgb(98 84 243);\n      }\n\n      &:hover a {\n        color: #fff;\n      }\n      a {\n        color: rgb(98 84 243);\n        font-size: 1.4rem;\n      }\n    }\n\n    .btn-main .btn:hover {\n      color: #fff;\n    }\n  }\n\n  @media (max-width: ',") {\n    .container {\n      padding: 0;\n    }\n  }\n"])),(function(n){return n.theme.media.mobile}))}}]);
//# sourceMappingURL=481.9771244a.chunk.js.map