(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{85:function(e,t,a){e.exports=a(97)},90:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=a(58),i=a(59),s=a(71),m=a(60),u=a(72),p=a(127),f=a(137),d=a(68),g=a.n(d),h=(a(90),a(122)),E=a(141),v=a(123),b=a(125),y=a(126),j=a(4),O=a(69),S=a(124),x=a(46),k=a(47),C=a(44),q=a.n(C),w=Object(j.a)((function(e){return{root:{color:"#ffffff",fontSize:14}}}))(h.a),N=Object(j.a)((function(e){return{root:{color:"#ffffff",fontFamily:"Source Code Pro, monospace"}}}))(E.a),L=Object(j.a)((function(e){return{root:{color:"#ffffff",fontFamily:"Source Code Pro, monospace"}}}))(v.a),T=Object(O.a)({palette:{primary:{main:"#5682fb"},secondary:{light:"#ffffff",main:x.a[50],dark:"white",contrastText:"#fff"},error:{main:k.a[400]}}}),M=function(e){var t=e.error,a=e.submit,n=e.change,l=e.value,o=e.helperText;return r.a.createElement(S.a,{theme:T},r.a.createElement("div",{className:"header"},r.a.createElement(b.a,{required:!0,fullWidth:!0,error:t},r.a.createElement(N,null,"Your message"),r.a.createElement(w,{inputProps:{maxLength:160},multiline:!0,onChange:n,value:l}),r.a.createElement(L,null,o||"".concat(e.length," / 160"))),r.a.createElement(y.a,{style:{marginLeft:15},disabled:t,color:"secondary",onClick:a},r.a.createElement(q.a,null))))},z=a(25),A=a(142),B=a(129),F=a(140),G=a(131),P=a(132),D=a(133),J=a(134),W=a(135),Y=a(136),I=a(64),R=a.n(I),H=a(65),K=a.n(H),Q=["user01@gmail.com","double@gmail.com","tripple@gmail.com","quadra@gmail.com"],U=Object(j.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[3],fontSize:12}}}))(A.a);function V(e){var t=Object(n.useState)(!1),a=Object(z.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),i=Object(z.a)(c,2),s=i[0],m=i[1];return r.a.createElement("div",{className:"user"},s&&r.a.createElement("p",{className:"p-small"},"Logged in as: ",r.a.createElement("strong",null,s)),r.a.createElement(B.a,{in:!0},r.a.createElement(U,{title:s?"":"Login / Register",placement:"left"},r.a.createElement(y.a,{onClick:function(){return o(!0)},color:"secondary"},r.a.createElement(R.a,null)))),r.a.createElement(F.a,{onClose:function(){return o(!1)},open:l},r.a.createElement(G.a,{id:"dsaads"},"Login to your account"),r.a.createElement(P.a,null,Q.map((function(e){return r.a.createElement(D.a,{key:e,button:!0,onClick:function(){return function(e){m(e),o(!1)}(e)}},r.a.createElement(J.a,null,r.a.createElement(W.a,null,r.a.createElement(K.a,null))),r.a.createElement(Y.a,{primary:e}))})))))}var X=a(70),Z=a(36),$=a(138),_=a(66),ee=a.n(_),te=a(67),ae=a.n(te);function ne(){var e=Object(n.useState)(!1),t=Object(z.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(z.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)(""),u=Object(z.a)(m,2),d=u[0],g=u[1],h=Object(n.useState)([]),E=Object(z.a)(h,2),v=E[0],b=E[1],O=Object(j.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[3],fontSize:14}}}))(A.a),S=Object(j.a)((function(e){return{root:{color:"rgba(57, 153, 251, 1)",fontSize:28,padding:4}}}))(a?q.a:ee.a),x=v.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("code",null,e.time," / as Guest"),r.a.createElement("p",null,e.message),r.a.createElement(f.a,{style:{margin:"10px 0"}}))}));return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"circle bg"},r.a.createElement(p.a,{in:!0},r.a.createElement(O,{placement:"top",title:a?"":"Let's chat!"},r.a.createElement(y.a,{className:"chat-icon",color:"secondary",onClick:a?function(){var e=(new Date).toLocaleTimeString();d.length>0?(b([].concat(Object(X.a)(v),[{message:d,time:e}])),g(""),s(!1)):s(!0)}:function(){l(!0)}},r.a.createElement(S,null))))),r.a.createElement(p.a,{in:a},r.a.createElement("div",{className:"chat chat-window bg"},r.a.createElement("div",{className:"close"},r.a.createElement(W.a,null,"G"),r.a.createElement(Z.a,{color:"primary",variant:"button"},"Messages : ",v.length),r.a.createElement(O,{placement:"top",title:"Close button"},r.a.createElement(y.a,{onClick:function(){return l(!a)}},r.a.createElement(ae.a,null)))),r.a.createElement(Z.a,{color:"primary",variant:"subtitle2"},v.length>0&&x),r.a.createElement($.a,{style:{margin:"15px 0 0 0"},value:d,onChange:function(e){g(e.target.value)},fullWidth:!0,multiline:!0,error:i,helperText:i&&"Must be filled",variant:"standard",margin:"dense",placeholder:"Your message"}))))}var re="minimum message length is 6",le=[{user:"guest",message:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit, molestias sed quaerat excepturi eos.",time:"29.09.2019, 12:00:38"},{user:"guest",message:"velit vitae porro optio dolorum neque veritatis praesentium quasi quos.",time:"20.09.2019, 17:07:43"},{user:"guest",message:"Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.",time:"12.09.2019, 05:10:21"},{user:"guest",message:"Minima, velit vitae porro optio dolorum neque veritatis praesentium quasi quos modi nihil accusamus molestiae expedita odit.",time:"12.09.2019, 05:10:21"}],oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",user:""},a.handleChange=function(e){var t=a.state.value.length;a.setState({value:e.target.value,helperText:t<5?re:null,error:t<5||null})},a.handleSubmit=function(){var e=a.state,t=e.user,n=e.value;if(a.state.value){var r={user:t,message:n,time:(new Date).toLocaleString()};le.push(r),a.setState({value:""})}else a.setState({helperText:re,error:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=le.map((function(e,t){return r.a.createElement(p.a,{in:!0,key:t},r.a.createElement("div",{className:"content"},r.a.createElement("code",null,r.a.createElement(g.a,{color:"primary",fontSize:"inherit"})," ",e.time),r.a.createElement("code",{style:{color:"#999"}}," | Author: guest"),r.a.createElement(f.a,{style:{margin:"8px 0"}}),r.a.createElement("p",null,e.message)))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(ne,null),r.a.createElement("h2",{style:{color:"#fff",marginBottom:0,textAlign:"center"}},"Guest Message Board"),r.a.createElement("p",{className:"p-small"},"\xa9 2019 bkasperski"),r.a.createElement(M,{change:this.handleChange,submit:this.handleSubmit,value:this.state.value,error:this.state.error,helperText:this.state.helperText,length:this.state.value.length}),r.a.createElement("div",{className:"container"},e?e.reverse():"No messages found yet!"))}}]),t}(n.Component);o.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.c94909aa.chunk.js.map