"use strict";(self["webpackChunkvue_learn"]=self["webpackChunkvue_learn"]||[]).push([[511],{511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cp"},[n("div",{staticClass:"head"},[n("div",{on:{click:function(t){return e.clickHome(t)}}},[e._v("首页")]),n("div",{on:{click:function(t){return e.clickLogin(t)}}},[e._v("返回登录")])]),n("div",{staticClass:"main"},[n("form",{attrs:{action:""}},[n("h2",[e._v("用户注册")]),n("div",[n("label",[e._v("用户名:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),n("div",[n("label",[e._v("性别:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.gender,"1")},on:{change:function(t){e.gender="1"}}}),e._v("男 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.gender,"0")},on:{change:function(t){e.gender="0"}}}),e._v("女 ")]),n("div",[n("button",{on:{click:e.submit}},[e._v("提交")])])])])])},r=[],i=n(816);const o={activated(){console.log("register")},data:()=>({userName:"",gender:""}),methods:{created(){console.log("regis")},submit(){let e=(0,i.FA)(JSON.stringify(this.$data));e.then((({code:e,data:{userName:t,gender:n}})=>{console.log(e,t,n)}))},clickHome(){this.$router.push("/")},clickLogin(){this.$router.push("/login")}}},s=o;var c=n(378),l=(0,c.A)(s,a,r,!1,null,"54b8a74f",null);const d=l.exports}}]);
//# sourceMappingURL=511.c2572611.js.map