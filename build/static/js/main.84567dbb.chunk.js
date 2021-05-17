(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[2],{102:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c.n(r),a=c(22),s=c.n(a),o=(c(66),c(67),c(8)),u=c(3),i=function(t){var e=t.children;return Object(u.jsx)("div",{className:"Container",children:e})},b=c(12),j=c(11),l=c(109),O=c(18);function d(){var t=Object(j.c)(b.c.getIsAuthenticated);return Object(u.jsxs)(l.a,{variant:"pills",className:"justify-content-start",activeKey:"/home",children:[Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(l.a.Link,{eventKey:"1",as:O.b,to:"/",exact:!0,children:"Home Page"})}),t&&Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(l.a.Link,{eventKey:"2",as:O.b,to:"/contacts",exact:!0,children:"Contacts"})})]})}var f=c.p+"static/media/default-avatar.e44fc4e2.png",h=c(108),g=c(104),p=c(105);function x(){var t=Object(j.b)(),e=Object(j.c)(b.c.getUseremail),c=Object(r.useCallback)((function(){t(b.a.logOut())}),[t]);return Object(u.jsx)("div",{children:Object(u.jsxs)(h.a,{inline:!0,children:[Object(u.jsx)("img",{src:f,alt:"",width:"32"}),Object(u.jsx)(g.a,{variant:"dark",children:Object(u.jsx)("span",{children:e})})," ",Object(u.jsx)(p.a,{variant:"success",type:"button",onClick:c,children:"Logout"})," "]})})}var C=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{variant:"pills",className:"justify-content-end",activeKey:"/auth",children:[Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(l.a.Link,{eventKey:"1",as:O.b,to:"/register",exact:!0,children:"Registration"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(l.a.Link,{eventKey:"2",as:O.b,to:"/login",exact:!0,children:"Login"})})]})})},v=c(107);function m(){var t=Object(j.c)(b.c.getIsAuthenticated);return Object(u.jsx)("header",{children:Object(u.jsxs)(v.a,{bg:"dark",variant:"dark",children:[Object(u.jsx)(l.a,{className:"mr-auto",children:Object(u.jsx)(d,{})}),t?Object(u.jsx)(x,{}):Object(u.jsx)(C,{})]})})}var S=c(26),k=c(36);function E(t){var e=t.component,c=(t.isAuthenticated,t.redirectTo),r=Object(k.a)(t,["component","isAuthenticated","redirectTo"]),n=Object(j.c)(b.c.getIsAuthenticated);return Object(u.jsx)(o.b,Object(S.a)(Object(S.a)({},r),{},{render:function(t){return n?Object(u.jsx)(e,Object(S.a)({},t)):Object(u.jsx)(o.a,{to:c})}}))}function y(t){var e=t.component,c=(t.isAuthenticated,t.redirectTo),r=Object(k.a)(t,["component","isAuthenticated","redirectTo"]),n=Object(j.c)(b.c.getIsAuthenticated);return Object(u.jsx)(o.b,Object(S.a)(Object(S.a)({},r),{},{render:function(t){return n&&r.restricted?Object(u.jsx)(o.a,{to:c}):Object(u.jsx)(e,Object(S.a)({},t))}}))}var R=c(106),q=Object(r.lazy)((function(){return c.e(0).then(c.bind(null,113))})),U=Object(r.lazy)((function(){return c.e(3).then(c.bind(null,116))})),w=Object(r.lazy)((function(){return c.e(4).then(c.bind(null,114))})),A=Object(r.lazy)((function(){return c.e(1).then(c.bind(null,115))}));function I(){var t=Object(j.b)();return Object(r.useEffect)((function(){t(b.a.getCurrentUser())}),[t]),Object(u.jsxs)(i,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(r.Suspense,{fallback:Object(u.jsx)(R.a,{animation:"border",size:"sl"}),children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(y,{exact:!0,path:"/",component:q}),Object(u.jsx)(E,{path:"/contacts",redirectTo:"/login",component:U}),Object(u.jsx)(y,{path:"/register",restricted:!0,redirectTo:"/contacts",component:w}),Object(u.jsx)(y,{path:"/login",restricted:!0,redirectTo:"/contacts",component:A})]})})]})}c(97),c(98);var z,T,L=c(35),K=c(6),N=c(59),B=c.n(N),J=c(21),F=c(7),H=c(9),M=c(13),P=Object(K.c)([],(z={},Object(F.a)(z,M.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(F.a)(z,M.a.addContactSuccess,(function(t,e){var c=e.payload;return[].concat(Object(L.a)(t),[c])})),Object(F.a)(z,M.a.deleteContactSuccess,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),z)),D=Object(K.c)(!1,(T={},Object(F.a)(T,M.a.fetchContactsRequest,(function(){return!0})),Object(F.a)(T,M.a.fetchContactsSuccess,(function(){return!1})),Object(F.a)(T,M.a.fetchContactsError,(function(){return!1})),Object(F.a)(T,M.a.addContactRequest,(function(){return!0})),Object(F.a)(T,M.a.addContactSuccess,(function(){return!1})),Object(F.a)(T,M.a.addContactError,(function(){return!1})),Object(F.a)(T,M.a.deleteContactRequest,(function(){return!0})),Object(F.a)(T,M.a.deleteContactSuccess,(function(){return!1})),Object(F.a)(T,M.a.deleteContactError,(function(){return!1})),T)),G=Object(K.c)("",Object(F.a)({},M.a.filterContact,(function(t,e){return e.payload}))),Q=Object(H.c)({items:P,loading:D,filter:G}),V=c(60),W=c.n(V),X=[].concat(Object(L.a)(Object(K.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[B.a]),Y={key:"auth",storage:W.a,whitelist:["token"]},Z=Object(K.a)({reducer:{auth:Object(J.g)(Y,b.b),contacts:Q},middleware:X,devTools:!1}),$={store:Z,persistor:Object(J.h)(Z)},_=c(61);c(101);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(j.a,{store:$.store,children:Object(u.jsx)(_.a,{loading:null,persistor:$.persistor,children:Object(u.jsx)(O.a,{children:Object(u.jsx)(I,{})})})})}),document.getElementById("root"))},12:function(t,e,c){"use strict";c.d(e,"b",(function(){return S})),c.d(e,"a",(function(){return A})),c.d(e,"c",(function(){return I}));var r,n,a,s,o=c(6),u=Object(o.b)("auth/registerRequest"),i=Object(o.b)("auth/registerSuccess"),b=Object(o.b)("auth/registerError"),j=Object(o.b)("auth/loginRequest"),l=Object(o.b)("auth/loginSuccess"),O=Object(o.b)("auth/loginError"),d={registerRequest:u,registerSuccess:i,registerError:b,logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),loginRequest:j,loginSuccess:l,loginError:O,getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},f=c(7),h=c(9),g={name:null,email:null},p=Object(o.c)(g,(r={},Object(f.a)(r,d.registerSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,d.loginSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,d.logoutSuccess,(function(){return g})),Object(f.a)(r,d.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),x=Object(o.c)(null,(n={},Object(f.a)(n,d.registerSuccess,(function(t,e){return e.payload.token})),Object(f.a)(n,d.loginSuccess,(function(t,e){return e.payload.token})),Object(f.a)(n,d.logoutSuccess,(function(){return null})),n)),C=function(t,e){return e.payload},v=Object(o.c)(null,(a={},Object(f.a)(a,d.registerError,C),Object(f.a)(a,d.loginError,C),Object(f.a)(a,d.logoutError,C),Object(f.a)(a,d.getCurrentUserError,C),a)),m=Object(o.c)(!1,(s={},Object(f.a)(s,d.registerSuccess,(function(){return!0})),Object(f.a)(s,d.loginSuccess,(function(){return!0})),Object(f.a)(s,d.getCurrentUserSuccess,(function(){return!0})),Object(f.a)(s,d.getCurrentUserRequest,(function(){return!0})),Object(f.a)(s,d.registerError,(function(){return!1})),Object(f.a)(s,d.loginError,(function(){return!1})),Object(f.a)(s,d.getCurrentUserError,(function(){return!1})),Object(f.a)(s,d.logoutSuccess,(function(){return!1})),s)),S=Object(h.c)({user:p,token:x,error:v,isAuthenticated:m}),k=c(20),E=c.n(k),y=c(29),R=c(24),q=c.n(R);q.a.defaults.baseURL="https://connections-api.herokuapp.com";var U=function(t){q.a.defaults.headers.common.Authorization="Bearer ".concat(t)},w=function(){q.a.defaults.headers.common.Authorization=""},A={register:function(t){return function(){var e=Object(y.a)(E.a.mark((function e(c){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(d.registerRequest()),e.prev=1,e.next=4,q.a.post("/users/signup",t);case 4:r=e.sent,U(r.data.token),c(d.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c(d.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(y.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d.logoutRequest()),t.prev=1,t.next=4,q.a.post("/users/logout");case 4:w(),e(d.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(d.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(y.a)(E.a.mark((function e(c){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(d.loginRequest()),e.prev=1,e.next=4,q.a.post("/users/login",t);case 4:r=e.sent,U(r.data.token),c(d.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c(d.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(y.a)(E.a.mark((function t(e,c){var r,n,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=c(),n=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return U(n),e(d.getCurrentUserRequest()),t.prev=5,t.next=8,q.a.get("/users/current");case 8:a=t.sent,e(d.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(d.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,c){return t.apply(this,arguments)}}()}},I={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUseremail:function(t){return t.auth.user.email}}},13:function(t,e,c){"use strict";var r=c(6),n=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),s=Object(r.b)("contacts/fetchContactsError"),o=Object(r.b)("contacts/addContactsRequest"),u=Object(r.b)("contacts/addContactsSuccess"),i=Object(r.b)("contacts/addContactsError"),b=Object(r.b)("contacts/deleteContactsRequest"),j=Object(r.b)("contacts/deleteContactsSuccess"),l=Object(r.b)("contacts/deleteContactsError"),O=Object(r.b)("contacts/FilterContact");e.a={fetchContactsRequest:n,fetchContactsSuccess:a,fetchContactsError:s,addContactRequest:o,addContactSuccess:u,addContactError:i,deleteContactRequest:b,deleteContactSuccess:j,deleteContactError:l,filterContact:O}},66:function(t,e,c){},67:function(t,e,c){},98:function(t,e,c){}},[[102,5,6]]]);
//# sourceMappingURL=main.84567dbb.chunk.js.map