(this.webpackJsonptestasd=this.webpackJsonptestasd||[]).push([[0],{14:function(a,e,t){a.exports={charLink:"char-list_charLink__36Gch",character:"char-list_character__3cIvK",image:"char-list_image__3l7AD"}},15:function(a,e,t){a.exports={detail:"char-detail_detail__19dJj",name:"char-detail_name__2dBlt",image:"char-detail_image__1i815"}},18:function(a,e,t){a.exports={pag:"paginator_pag__1rqK_",active:"paginator_active__KDHjb"}},28:function(a,e,t){},29:function(a,e,t){},32:function(a,e,t){},38:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(22),s=t.n(r),i=(t(28),t(29),t(8)),o=t.n(i),u=t(6),l=t(11),d=t(12),j=t(2),b=t(9);function p(){return(p=Object(l.a)(o.a.mark((function a(e){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e).then((function(a){return a.json()}));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var h={data:{getData:function(a){return function(a){return p.apply(this,arguments)}(a)}}},g=t(15),m=t.n(g),f=t(14),O=t.n(f),v=t(1),x=function(a){var e=a.data;return Object(v.jsxs)("div",{className:m.a.detail,children:[Object(v.jsx)("img",{className:m.a.image,src:e.image,alt:e.name}),Object(v.jsx)("div",{className:m.a.name,children:e.name}),Object(v.jsx)("div",{className:"status",children:e.status}),Object(v.jsx)("div",{className:"origin",children:e.origin.name}),Object(v.jsx)("div",{className:"location",children:e.location.name}),Object(v.jsxs)("div",{className:"species gender",children:[e.species," - ",e.gender]})]})},_=function(a){var e=a.image,t=a.name;return Object(v.jsx)("div",{className:O.a.character,children:Object(v.jsx)("div",{className:O.a.image,children:Object(v.jsx)("img",{src:e,alt:t})})})},N=t(18),k=t.n(N),w=(t(32),function(a){var e=a.currentPage,t=a.totalPages,c=Object(n.useState)({buttons:null}),r=Object(d.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){o()}),[e,t]);var o=function(){var a=Math.floor(parseInt(e)-2),n=Math.floor(parseInt(e)+2);a<=0&&(n+=Math.abs(a)+1,a=1),n>t&&(a-=n-t,n=t);for(var c=[],r=a;r<=n;r++)c.push({value:r});i(Object(u.a)(Object(u.a)({},s),{},{buttons:c}))};return Object(v.jsxs)("div",{className:k.a.pag,children:[Object(v.jsx)(b.b,{to:"/page/1",children:Object(v.jsx)("i",{className:"fas fa-chevron-left"})}),null!==s.buttons&&s.buttons.map((function(a){return Object(v.jsx)(b.b,{to:"/page/".concat(a.value),className:a.value==e?k.a.active:"",children:a.value},"paginator-button-".concat(a.value))})),Object(v.jsx)(b.b,{to:"/page/".concat(t),children:Object(v.jsx)("i",{className:"fas fa-chevron-right"})})]})}),y=function(a){var e=Object(j.e)(),t=Object(n.useState)({data:null,actualPage:a.actualPage,pages:0,loading:!0}),c=Object(d.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(Object(u.a)(Object(u.a)({},r),{},{loading:!0})),e.prev=1,e.next=4,h.data.getData("https://rickandmortyapi.com/api/character/?page="+a.pageId);case 4:t=e.sent,s(Object(u.a)(Object(u.a)({},r),{},{data:t.results,pages:t.info.pages,loading:!1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:null!==r.data&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"characters ".concat(r.loading?"loading":"loaded"),children:r.data.map((function(a,e){return Object(v.jsx)(b.b,{className:f.charLink,to:"/character/"+a.id,children:Object(v.jsx)(_,{image:a.image,name:a.name},a.name+"-"+e)},a.id)}))}),Object(v.jsx)(w,{currentPage:a.pageId,totalPages:r.pages})]})})},I=function(a){return Object(v.jsx)(y,{pageId:a.match.params.id})},P=function(a){var e=a.id,t=Object(n.useState)({data:null,loading:!0}),c=Object(d.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){i()}),[e]);var i=function(){var a=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(Object(u.a)(Object(u.a)({},r),{},{loading:!0})),a.prev=1,a.next=4,h.data.getData("https://rickandmortyapi.com/api/character/"+e);case 4:t=a.sent,s(Object(u.a)(Object(u.a)({},r),{},{data:t,loading:!1})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log("error",a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:null!==r.data&&Object(v.jsx)(x,{data:r.data})})},F=function(a){return Object(v.jsx)(P,{id:a.match.params.id})};var D=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(b.a,{basename:"/react-rick-and-morty/page/1",children:[Object(v.jsx)(j.a,{exact:!0,path:"/page/:id",render:I}),Object(v.jsx)(j.a,{exact:!0,path:"/character/:id",render:F})]})})},L=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),L()}},[[38,1,2]]]);
//# sourceMappingURL=main.aedfee22.chunk.js.map