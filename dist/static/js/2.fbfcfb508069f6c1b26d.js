webpackJsonp([2],{"0jH9":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Gu7T"),s=r.n(a),i=(r("ssT3"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",r="",a=[];try{a=[].concat(s()(Array(t))).map(function(){return e[Math.floor(Math.random()*e.length)]})}catch(t){}return a.forEach(function(t){r+='<span class="flex1 hcenter">'+t+"</span>"}),a=a.join(""),{tpl:r,captcha:a}}(6),e=t.tpl,r=t.captcha;this.captchaTpl=e,this.localCaptcha=r},register:function(t){var e=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&e.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"},e=this.$store.state.user;e&&e.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=r,this.msgShow=!1,this.$nextTick(function(){e.msgShow=!0})}}}),o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[r("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),t._v(" "),r("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),r("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(e){e.target.composing||(t.cpassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[r("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),r("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[r("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var n=r("VU/8")(i,o,!1,function(t){r("PIDO")},"data-v-69e52327",null);e.default=n.exports},"5zde":function(t,e,r){r("zQR9"),r("qyJz"),t.exports=r("FeBl").Array.from},Gu7T:function(t,e,r){"use strict";e.__esModule=!0;var a,s=r("c/Tr"),i=(a=s)&&a.__esModule?a:{default:a};e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,i.default)(t)}},Mhyx:function(t,e,r){var a=r("/bQp"),s=r("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||i[s]===t)}},PIDO:function(t,e){},"c/Tr":function(t,e,r){t.exports={default:r("5zde"),__esModule:!0}},dY0y:function(t,e,r){var a=r("dSzd")("iterator"),s=!1;try{var i=[7][a]();i.return=function(){s=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!s)return!1;var r=!1;try{var i=[7],o=i[a]();o.next=function(){return{done:r=!0}},i[a]=function(){return o},t(i)}catch(t){}return r}},fBQ2:function(t,e,r){"use strict";var a=r("evD5"),s=r("X8DO");t.exports=function(t,e,r){e in t?a.f(t,e,s(0,r)):t[e]=r}},msXi:function(t,e,r){var a=r("77Pl");t.exports=function(t,e,r,s){try{return s?e(a(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&a(i.call(t)),e}}},qyJz:function(t,e,r){"use strict";var a=r("+ZMJ"),s=r("kM2E"),i=r("sB3e"),o=r("msXi"),n=r("Mhyx"),c=r("QRG4"),l=r("fBQ2"),u=r("3fs2");s(s.S+s.F*!r("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,s,d,p=i(t),m="function"==typeof this?this:Array,v=arguments.length,f=v>1?arguments[1]:void 0,h=void 0!==f,g=0,w=u(p);if(h&&(f=a(f,v>2?arguments[2]:void 0,2)),void 0==w||m==Array&&n(w))for(r=new m(e=c(p.length));e>g;g++)l(r,g,h?f(p[g],g):p[g]);else for(d=w.call(p),r=new m;!(s=d.next()).done;g++)l(r,g,h?o(d,f,[s.value,g],!0):s.value);return r.length=g,r}})}});
//# sourceMappingURL=2.fbfcfb508069f6c1b26d.js.map