(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{5055:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/klarna",function(){return e(4496)}])},4496:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return b}});var r=e(5893),a=e(9008),o=e(7294),i=e(4051),u=e.n(i),c=e(2645),s=e(4708),l=e(9669),f=e.n(l),d=e(3072),p=function(n){return f().get("/.netlify/functions/product/".concat(n))},y=function(n){var t=n.order_lines;return f().post(d.j.payment.klarnaSession,{order_lines:t})},m=function(n){var t=n.authorization_token,e=n.order_lines;return f().post("/.netlify/functions/order",{authorization_token:t,order_lines:e})};function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function _(n,t,e,r,a,o,i){try{var u=n[o](i),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(n){_(o,r,a,i,u,"next",n)}function u(n){_(o,r,a,i,u,"throw",n)}i(void 0)}))}}function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,a,o=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw a}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(n){var t=n.name,e=n.price;return{type:"physical",reference:n.id,image_url:n.image,name:t,quantity:n.quentity,unit_price:e,tax_rate:0,total_amount:e,total_discount_amount:0,total_tax_amount:0}};var x=function(){var n=k((0,c.K1)(),1)[0].cart,t=k(o.useState("cart"),2),e=t[0],a=t[1],i=k(o.useState([]),2),l=i[0],f=i[1],d=k(o.useState(""),2),h=(d[0],d[1]),_=k(o.useState(!1),2),x=_[0],b=_[1],g=(o.useCallback((function(){a("scanning")}),[a]),o.useCallback((function(){a("cart")}),[a]),o.useCallback(function(){var n=v(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.getText(),n.next=3,p(e);case 3:r=n.sent,f((function(n){return n.concat(r.data)})),a("cart");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[a,f]),o.useCallback(v(u().mark((function t(){var e,r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a("paying"),t.next=3,y({order_lines:n.map(w)});case 3:e=t.sent,r=e.data.client_token,(o=window.Klarna).Payments.init({client_token:r}),o.Payments.load({container:"#klarna-payments-container",payment_method_category:"pay_later"},(function(){b(!0)}));case 8:case"end":return t.stop()}}),t)}))),[a,l])),j=(o.useCallback((function(){a("qrCode")}),[a]),o.useCallback((function(){a("completed")}),[a]),o.useCallback(v(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.Klarna.Payments.authorize({payment_method_category:"pay_later",auto_finalize:!0},function(){var n=v(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.authorization_token,n.next=3,m({authorization_token:e,order_lines:l.map(w)});case 3:r=n.sent,h(r.data.order_id),a("completed");case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)}))),[a,h,l]));return"cart"===e?(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{onClick:g,children:"Pay with Klarna"})}):"paying"===e?(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{id:"klarna-payments-container",style:{paddingTop:"10px"}}),(0,r.jsx)(s.Z,{onClick:j,disabled:!x,children:"Continue"})]}):"completed"===e?(0,r.jsx)(s.Z,{children:"Payment completed"}):null};var b=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("script",{async:!0,src:"https://x.klarnacdn.net/kp/lib/v1/api.js"})}),(0,r.jsx)(x,{})]})}}},function(n){n.O(0,[774,888,179],(function(){return t=5055,n(n.s=t);var t}));var t=n.O();_N_E=t}]);