(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{127:function(e,t,a){e.exports=a(202)},132:function(e,t,a){},133:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(51),c=a(18),o=a.n(c),u=(a(132),a(133),a(134),a(203)),m=a(208),i=a(209),d=a(19);function E(){return l.a.createElement("div",null,"Favourite")}function p(){return l.a.createElement("div",null,"FavouriteGroup")}var s=a(78),g=a(123),f=a(204),h=a(205),b=a(207),v=a(106),y=a.n(v).a.create({baseURL:"http://jinbomang.pythonanywhere.com/api/",timeout:3e3});function I(){var e=l.a.useState({pending:[],inprogress:[],end:[]}),t=Object(g.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){y.get("todo/todo?status=pending").then((function(e){var t=e.data;n((function(e){return Object(s.a)({},e,{pending:t})}))})),y.get("todo/todo?status=inprogress").then((function(e){var t=e.data;n((function(e){return Object(s.a)({},e,{inprogress:t})}))})),y.get("todo/todo?status=end").then((function(e){var t=e.data;n((function(e){return Object(s.a)({},e,{end:t})}))}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.b,{header:l.a.createElement("div",null,"\ud560\uc77c"),style:{width:"33%",float:"left",paddingRight:"5px"},itemLayout:"horizontal",dataSource:a.pending,renderItem:function(e){return l.a.createElement(f.b.Item,null,l.a.createElement(f.b.Item.Meta,{title:l.a.createElement("span",null,e.name),description:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,e.group_name)," / ",l.a.createElement("span",null,e.reg_date),l.a.createElement(h.a,{style:{float:"right"},shape:"circle",icon:l.a.createElement(b.a,null)}))}))}}),l.a.createElement(f.b,{header:l.a.createElement("div",null,"\uc9c4\ud589\uc911"),style:{width:"33%",float:"left",paddingRight:"5px"},itemLayout:"horizontal",dataSource:a.inprogress,renderItem:function(e){return l.a.createElement(f.b.Item,null,l.a.createElement(f.b.Item.Meta,{title:l.a.createElement("span",null,e.name),description:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,e.group_name)," / ",l.a.createElement("span",null,e.reg_date),l.a.createElement(h.a,{style:{float:"right"},shape:"circle",icon:l.a.createElement(b.a,null)}))}))}}),l.a.createElement(f.b,{header:l.a.createElement("div",null,"\uc885\ub8cc"),style:{width:"33%",float:"left",paddingRight:"5px"},itemLayout:"horizontal",dataSource:a.end,renderItem:function(e){return l.a.createElement(f.b.Item,null,l.a.createElement(f.b.Item.Meta,{title:l.a.createElement("span",null,e.name),description:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,e.group_name)," / ",l.a.createElement("span",null,e.reg_date),l.a.createElement(h.a,{style:{float:"right"},shape:"circle",icon:l.a.createElement(b.a,null)}))}))}}))}function k(){return l.a.createElement("div",null,"Todogroup")}var w=u.a.SubMenu;var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"menu"},l.a.createElement(u.a,{onClick:function(e){console.log("click ",e)},style:{width:256,height:"100%"},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline"},l.a.createElement(w,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(m.a,null),l.a.createElement("span",null,"\uc990\uaca8\ucc3e\uae30"))},l.a.createElement(u.a.Item,{key:"1"},l.a.createElement(r.b,{to:"/favouritegroup"},"\uadf8\ub8f9\uad00\ub9ac")),l.a.createElement(u.a.Item,{key:"2"},l.a.createElement(r.b,{to:"favourite"},"\uc990\uaca8\ucc3e\uae30"))),l.a.createElement(w,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(i.a,null),l.a.createElement("span",null,"\ud560\uc77c"))},l.a.createElement(u.a.Item,{key:"3"},l.a.createElement(r.b,{to:"/todogroup"},"\uadf8\ub8f9\uad00\ub9ac")),l.a.createElement(u.a.Item,{key:"4"},l.a.createElement(r.b,{to:"/todo"},"\ud560\uc77c"))))),l.a.createElement("div",{id:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:E}),l.a.createElement(d.a,{path:"/favourite",component:E}),l.a.createElement(d.a,{path:"/favouritegroup",component:p}),l.a.createElement(d.a,{path:"/todo",component:I}),l.a.createElement(d.a,{path:"/todoGroup",component:k}))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(F,null))),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.5d8c6e26.chunk.js.map