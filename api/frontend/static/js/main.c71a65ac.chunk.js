(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{153:function(e,t,a){e.exports=a.p+"static/media/calendar.c74d6a32.svg"},155:function(e,t,a){e.exports=a(306)},160:function(e,t,a){},162:function(e,t,a){},188:function(e,t){},190:function(e,t){},204:function(e,t){},206:function(e,t){},234:function(e,t){},236:function(e,t){},237:function(e,t){},243:function(e,t){},245:function(e,t){},263:function(e,t){},265:function(e,t){},277:function(e,t){},280:function(e,t){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(149),c=a.n(o),i=(a(160),a(161),a(162),a(23)),l=a(7),s=a(8),u=a(10),m=a(9),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).changeValueOfSession=function(){localStorage.removeItem("token"),window.location.href="/"},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-link text-white",style:{cursor:"pointer"},onClick:this.changeValueOfSession},"Cerrar Sesion")}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={logged:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.setState({logged:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-danger "},r.a.createElement(i.b,{className:"navbar-brand text-white",exact:!0,to:"/",activeClassName:"main-nav-active",style:{fontWeight:"bold"}},"Citas"),r.a.createElement("button",{className:"navbar-toggler text-white",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-white",to:"/calendario",activeClassName:"main-nav-active"},"Calendario")),this.state.logged?r.a.createElement("li",{className:"nav-item"},r.a.createElement(d,null)):r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-white",to:"/login",activeClassName:"main-nav-active"},"Iniciar Sesion"))))))}}]),a}(n.Component),f=a(3),h=a(151),g=a(15),v=a.n(g),b=a(25),y=a(41),E=a.n(y),x=a(33),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cedula:0},e.onsubmitForm=function(){var t=Object(b.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={cedula:e.state.cedula},t.next=4,E.a.post("/api/login",n);case 4:if(200!==(r=t.sent).status){t.next=11;break}return t.next=8,x.fire("Bienvenido!","Has iniciado sesion!","success");case 8:return t.next=10,localStorage.setItem("token",r.data.token);case 10:window.location.href="/ciclos";case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeInput=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement("h1",{style:{borderBottom:"5px solid gray"}},r.a.createElement("span",{style:{color:"red"}},"Visita")," Remota")),r.a.createElement("div",{className:"container login",style:{paddingTop:"100px"}},r.a.createElement("form",{onSubmit:this.onsubmitForm},r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",{style:{textAlign:"center"}},"Bienvenido(a)"),r.a.createElement("p",{style:{textAlign:"center"}},"Si ya est\xe1 registrado(a) inicie la visita remota digitando su numero de c\xe9dula"),r.a.createElement("input",{type:"Number",className:"form-control",id:"cedula",name:"cedula",onChange:this.onChangeInput})),r.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},r.a.createElement("button",{type:"submit",className:"btn btn-danger",style:{width:"200px"}},"Iniciar sesi\xf3n")))))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={logged:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.setState({logged:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.logged?window.location.href="/ciclos":r.a.createElement(k,null))}}]),a}(n.Component),O=(a(184),a(42)),w=a.n(O),j=a(152),S=a.n(j),N=a(153),D=a.n(N),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={horarios:[],active:"",idCell:"",fecha:"",doctor:"",idDoctor:""},e.getHorarios=Object(b.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("/api/horario");case 2:a=t.sent,e.setState({horarios:a.data});case 4:case"end":return t.stop()}}),t)}))),e.selectHour=function(t,a){if(""===e.state.active){var n=t.target.id;e.setState({active:"clicked",idCell:n}),x.fire({text:"Dr. ".concat(e.state.doctor," usted ha seleccionado el d\xeda y la hora de su visita remota. \n \xbfEst\xe1 seguro que desea agendar su cita?"),icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",iconColor:"#E01B16",confirmButtonText:"Si",cancelButtonText:"No"}).then(function(){var t=Object(b.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isConfirmed){t.next=9;break}return r={doctor:e.state.idDoctor,fecha:w()(e.props.history.location.state).format("L"),hora:a.hora},t.next=4,E.a.post("/api/citas",r).catch((function(e){return x.fire({icon:"error",text:"El horario seleccionado no se encuentra disponible, por favor selecciona una hora que se encuentre libre y se ajuste a su tiempo",confirmButtonText:"Ok"})}));case 4:200===t.sent.status&&x.fire({title:"Su visita ha sido agendada exitosamente",html:"<b>Muchas gracias</b><br>"+"Dr. ".concat(e.state.doctor)+" por agendar la Visita Remota de Colgate.<p>Pr\xf3ximamente le estaremos contactando para nuestra pr\xf3xima visita.</p>"+"<p>".concat(e.state.fecha,",<br>en el horario de ").concat(a.hora,"</p>"),imageUrl:D.a,imageWidth:400,imageHeight:200,imageAlt:"Custom image",confirmButtonText:" Entendido",confirmButtonColor:"red"}),e.setState({active:"",idCell:"",doctor:"",idDoctor:""}),t.next=10;break;case 9:e.setState({active:"",idCell:""});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({active:"",idCell:""})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHorarios();case 2:return w.a.locale("es-mx"),e.next=5,this.setState({fecha:w()(this.props.history.location.state).format("LL")});case 5:(t=S.a.decode(localStorage.getItem("token")))&&this.setState({doctor:t.nombre,idDoctor:t.id});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.horarios,a=this.state.fecha;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement("h1",{style:{borderBottom:"5px solid gray"}},r.a.createElement("span",{style:{color:"red"}},"Visita")," Remota")),r.a.createElement("div",{style:{marginTop:"50px",textAlign:"center"}},r.a.createElement("h4",{style:{color:"red"}},a),t.length<1?r.a.createElement("h3",{style:{color:"red"}},"Loading..."):r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement(n.Fragment,{key:a},r.a.createElement("tr",{key:t._id},r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{style:{width:"150px"}},t.hora),r.a.createElement("td",{onClick:function(a){return e.selectHour(a,t)},id:t._id,className:"clicked"===e.state.active&&e.state.idCell===t._id?"bg-danger":null}))),7===a?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:2})):null)}))))))}}]),a}(n.Component),B=a(154),T=a.n(B),I=(a(304),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selectedDay:void 0,redirect:!1},e.handleDayClick=function(){var t=Object(b.a)(v.a.mark((function t(a,n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.selected,!n.disabled){t.next=3;break}return t.abrupt("return");case 3:if(!r){t.next=6;break}return e.setState({selectedDay:void 0}),t.abrupt("return");case 6:return t.next=8,e.setState({selectedDay:a,redirect:!0});case 8:e.props.history.push("/hora",e.state.selectedDay);case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement("h1",{style:{borderBottom:"5px solid gray"}},r.a.createElement("span",{style:{color:"red"}},"Visita")," Remota")),r.a.createElement(T.a,{onDayClick:this.handleDayClick,selectedDays:this.state.selectedDay,month:new Date(2020,7),fromMonth:new Date(2020,7),toMonth:new Date(2020,8)}))}}]),a}(n.Component)),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement("p",{style:{color:"gray",fontSize:"20px"}},"Agende su visita remota",r.a.createElement("br",null)," seleccionando el ciclo en el dia y hora que usted desee."),r.a.createElement(i.b,{to:"/calendario",className:"btn btn-danger",style:{marginTop:"70px",width:"300px",height:"50px",borderRadius:"40px",padding:"10px"}},"Ciclo 1"))}}]),a}(n.Component),H=function(){return!!localStorage.getItem("token")},M=function(e){return H()?r.a.createElement(f.a,{to:"/"}):r.a.createElement(f.b,e)},V=function(e){return H()?r.a.createElement(f.b,e):r.a.createElement(f.a,{to:"/"})};function R(){return r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:C}),r.a.createElement(V,{path:"/calendario",exact:!0,component:I}),r.a.createElement(V,{path:"/hora",exact:!0,component:A}),r.a.createElement(V,{path:"/ciclos",exact:!0,component:F}),r.a.createElement(M,{path:"/login",exact:!0,component:k}),r.a.createElement(V,{path:"/logout",component:d}))}var L=function(){return r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement("div",{className:"container col-sm-4"},r.a.createElement(R,null)))};a(148),a(305);c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.c71a65ac.chunk.js.map