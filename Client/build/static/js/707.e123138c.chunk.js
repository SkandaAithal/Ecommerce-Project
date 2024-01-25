"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([[707],{9567:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413);function i(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=t(2791),a=t(9439);var l=t(6290),c=t(184),s=["children","threshold","root","rootMargin"];var d=function(n){var e=n.children,t=n.threshold,d=void 0===t?0:t,f=n.root,u=void 0===f?null:f,m=n.rootMargin,p=void 0===m?"0px 0px 0px 0px":m,h=i(n,s),g=(0,o.useRef)(),x=function(n,e){var t=(0,o.useState)(!1),r=(0,a.Z)(t,2),i=r[0],l=r[1],c=(0,o.useRef)(new IntersectionObserver((function(n){var e=(0,a.Z)(n,1)[0];return l(e.isIntersecting)}),e));return(0,o.useEffect)((function(){var e=n.current,t=c.current;if(!i)return e&&!i&&t.observe(e),function(){return t.disconnect()};t.disconnect()}),[i,n]),i}(g,{threshold:d,root:u,rootMargin:p});return(0,c.jsx)("div",(0,r.Z)((0,r.Z)({},h),{},{ref:g,children:x&&(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(l.Z,{}),children:e})}))}},4707:function(n,e,t){t.r(e);var r,i=t(168),o=t(1413),a=t(6031),l=t(2791),c=t(7967),s=t(9561),d=t(7689),f=t(9567),u=t(184),m=(0,l.lazy)((function(){return t.e(622).then(t.bind(t,8622))})),p=(0,l.lazy)((function(){return Promise.all([t.e(126),t.e(477)]).then(t.bind(t,1477))}));var h=a.ZP.section(r||(r=(0,i.Z)(["\n  padding: 9rem 0;\n\n  .grid-four-column {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .grid-five-column {\n    grid-template-columns: repeat(4, 1fr) 0.3fr;\n    text-align: center;\n    align-items: center;\n  }\n  .cart-heading {\n    text-align: center;\n    text-transform: uppercase;\n  }\n  hr {\n    margin-top: 1rem;\n  }\n  .cart-item {\n    padding: 3.2rem 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n\n  .cart-user--profile {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1.2rem;\n    margin-bottom: 5.4rem;\n\n    h2 {\n      font-size: 2.4rem;\n    }\n  }\n  .cart-user--name {\n    text-transform: capitalize;\n  }\n  .cart-image--name {\n    /* background-color: red; */\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 0.4fr 1fr;\n    text-transform: capitalize;\n    text-align: left;\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: contain;\n      color: transparent;\n      border-radius: 5px;\n    }\n\n    .color-div {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      gap: 1rem;\n\n      .color-style {\n        width: 1.4rem;\n        height: 1.4rem;\n\n        border-radius: 50%;\n      }\n    }\n  }\n\n  .btn {\n    width: fit-content;\n  }\n  .cart-two-button {\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n\n    .btn-clear {\n      background-color: #e74c3c;\n      color: #fff;\n    }\n  }\n\n  .amount-toggle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2.4rem;\n    font-size: 1.4rem;\n\n    button {\n      border: none;\n      background-color: #fff;\n      cursor: pointer;\n    }\n\n    .amount-style {\n      font-size: 2.4rem;\n      color: ",";\n    }\n  }\n\n  .remove_icon {\n    font-size: 1.6rem;\n    color: #e74c3c;\n    cursor: pointer;\n  }\n\n  .order-total--amount {\n    width: 100%;\n    margin: 4.8rem 0;\n    text-transform: capitalize;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-end;\n\n    .order-total--subdata {\n      border: 0.1rem solid #f0f0f0;\n      display: flex;\n      flex-direction: column;\n      gap: 1.8rem;\n      padding: 3.2rem;\n    }\n    div {\n      display: flex;\n      gap: 3.2rem;\n      justify-content: space-between;\n    }\n\n    div:last-child {\n      background-color: #fafafa;\n    }\n\n    div p:last-child {\n      font-weight: bold;\n      color: ",";\n    }\n  }\n\n  @media (max-width: ",") {\n    .grid-five-column {\n      grid-template-columns: 1.5fr 1fr 0.5fr;\n    }\n    .cart-hide {\n      display: none;\n    }\n\n    .cart-two-button {\n      margin-top: 2rem;\n      display: flex;\n      justify-content: space-between;\n      gap: 2.2rem;\n    }\n\n    .order-total--amount {\n      width: 100%;\n      text-transform: capitalize;\n      justify-content: flex-start;\n      align-items: flex-start;\n\n      .order-total--subdata {\n        width: 100%;\n        border: 0.1rem solid #f0f0f0;\n        display: flex;\n        flex-direction: column;\n        gap: 1.8rem;\n        padding: 3.2rem;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.btn}),(function(n){return n.theme.colors.heading}),(function(n){return n.theme.media.mobile}));e.default=function(){var n=(0,c.i)(),e=n.cart,t=n.clearCart,r=n.total_price,i=n.shippingfee,a=(0,d.s0)();return(0,u.jsx)(h,{children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("div",{className:"cart-heading grid grid-five-column ",children:[(0,u.jsx)("p",{children:"Item"}),(0,u.jsx)("p",{className:"cart-hide",children:"Price"}),(0,u.jsx)("p",{children:"Quantity"}),(0,u.jsx)("p",{className:"cart-hide",children:"Subtotal"}),(0,u.jsx)("p",{children:"Remove"})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{className:"cart-item",children:[e.length?e.map((function(n){return(0,u.jsx)(f.Z,{threshold:0,children:(0,u.jsx)(p,(0,o.Z)({},n))},n.id)})):(0,u.jsx)("h2",{children:"No Items in the CART."}),(0,u.jsxs)("div",{className:"cart-two-button",children:[(0,u.jsx)(s.z,{className:"btn",onClick:function(){window.scrollTo(0,0),a("/products")},children:"Continue shopping"}),e.length?(0,u.jsx)(s.z,{onClick:t,className:"btn-clear",children:"Clear cart"}):null]})]}),r?(0,u.jsx)(f.Z,{threshold:0,style:{minHeight:"240px"},children:(0,u.jsx)(m,{total_price:r,shippingfee:i})}):null]})})}}}]);
//# sourceMappingURL=707.e123138c.chunk.js.map