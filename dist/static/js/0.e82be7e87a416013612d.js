webpackJsonp([0],{"0jH9":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("Gu7T"),n=e.n(a),i={name:"Register",data:function(){return{captchaTpl:""}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",e="",a=[];try{a=[].concat(n()(Array(t))).map(function(){return r[Math.floor(Math.random()*r.length)]})}catch(t){}return a.forEach(function(t){e+='<span class="flex1 hcenter">'+t+"</span>"}),a=a.join(""),{tpl:e,captcha:a}}(),r=t.tpl,e=t.captcha;this.captchaTpl=r,this.localCaptcha=e}}},o={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[e("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),e("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),e("input",{directives:[{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),e("input",{directives:[{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),e("input",{directives:[{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"}})]),t._v(" "),e("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[e("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"panel-heading"},[r("h3",{staticClass:"panel-title"},[this._v("请注册")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"}},[r("i",{staticClass:"fa fa-btn fa-sign-in"}),this._v(" 注册\n          ")])}]};var s=e("VU/8")(i,o,!1,function(t){e("szSk")},"data-v-21c8f662",null);r.default=s.exports},"3fs2":function(t,r,e){var a=e("RY/4"),n=e("dSzd")("iterator"),i=e("/bQp");t.exports=e("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||i[a(t)]}},"5zde":function(t,r,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},Gu7T:function(t,r,e){"use strict";r.__esModule=!0;var a,n=e("c/Tr"),i=(a=n)&&a.__esModule?a:{default:a};r.default=function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return(0,i.default)(t)}},Mhyx:function(t,r,e){var a=e("/bQp"),n=e("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||i[n]===t)}},"RY/4":function(t,r,e){var a=e("R9M2"),n=e("dSzd")("toStringTag"),i="Arguments"==a(function(){return arguments}());t.exports=function(t){var r,e,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),n))?e:i?a(r):"Object"==(o=a(r))&&"function"==typeof r.callee?"Arguments":o}},"c/Tr":function(t,r,e){t.exports={default:e("5zde"),__esModule:!0}},dY0y:function(t,r,e){var a=e("dSzd")("iterator"),n=!1;try{var i=[7][a]();i.return=function(){n=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,r){if(!r&&!n)return!1;var e=!1;try{var i=[7],o=i[a]();o.next=function(){return{done:e=!0}},i[a]=function(){return o},t(i)}catch(t){}return e}},fBQ2:function(t,r,e){"use strict";var a=e("evD5"),n=e("X8DO");t.exports=function(t,r,e){r in t?a.f(t,r,n(0,e)):t[r]=e}},msXi:function(t,r,e){var a=e("77Pl");t.exports=function(t,r,e,n){try{return n?r(a(e)[0],e[1]):r(e)}catch(r){var i=t.return;throw void 0!==i&&a(i.call(t)),r}}},qyJz:function(t,r,e){"use strict";var a=e("+ZMJ"),n=e("kM2E"),i=e("sB3e"),o=e("msXi"),s=e("Mhyx"),c=e("QRG4"),l=e("fBQ2"),u=e("3fs2");n(n.S+n.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var r,e,n,d,f=i(t),v="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,m=void 0!==h,y=0,g=u(f);if(m&&(h=a(h,p>2?arguments[2]:void 0,2)),void 0==g||v==Array&&s(g))for(e=new v(r=c(f.length));r>y;y++)l(e,y,m?h(f[y],y):f[y]);else for(d=g.call(f),e=new v;!(n=d.next()).done;y++)l(e,y,m?o(d,h,[n.value,y],!0):n.value);return e.length=y,e}})},szSk:function(t,r){}});
//# sourceMappingURL=0.e82be7e87a416013612d.js.map