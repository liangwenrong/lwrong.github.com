import{h as i}from"./api-Dj-A2qCH.js";import{n as a}from"./index-DDgDITyT.js";import"./axios-DTyqpfTh.js";var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"cp"},[t("div",{staticClass:"head"},[t("div",{on:{click:function(r){return e.clickHome(r)}}},[e._v("首页")]),t("div",{on:{click:function(r){return e.clickLogin(r)}}},[e._v("返回登录")])]),t("div",{staticClass:"main"},[t("form",{attrs:{action:""}},[t("h2",[e._v("用户注册")]),t("div",[t("label",[e._v("用户名:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userName},on:{input:function(r){r.target.composing||(e.userName=r.target.value)}}})]),t("div",[t("label",[e._v("性别:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.gender,"1")},on:{change:function(r){e.gender="1"}}}),e._v("男 "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.gender,"0")},on:{change:function(r){e.gender="0"}}}),e._v("女 ")]),t("div",[t("button",{on:{click:e.submit}},[e._v("提交")])])])])])},c=[];const d={activated(){console.log("register")},data:()=>({userName:"",gender:""}),methods:{created(){console.log("regis")},submit(){i(JSON.stringify(this.$data)).then(({code:n,data:{userName:t,gender:r}})=>{console.log(n,t,r)})},clickHome(){this.$router.push("/")},clickLogin(){this.$router.push("/login")}}},o={};var l=a(d,s,c,!1,u,"287bd21a");function u(e){for(let n in o)this[n]=o[n]}const _=function(){return l.exports}();export{_ as default};
