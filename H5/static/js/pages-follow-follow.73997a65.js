(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-follow-follow"],{1043:function(t,e,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o={data:function(){return{list:[],level:""}},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("pages.gz")})},onShow:function(){this.getList()},methods:{getList:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"User.getBaseInfo",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 2:return i=e.sent,e.next=5,t.$myRequest({url:"Home.GetConfig",method:"GET",data:{}});case 5:return n=e.sent,a=i.data.data.info[0].level,t.level=n.data.data.info[0].level[parseInt(a)-1],console.log(t.level),e.next=11,t.$myRequest({url:"User.getFollowsList",method:"GET",data:{uid:uni.getStorageSync("infor").id,touid:uni.getStorageSync("infor").id}});case 11:o=e.sent,console.log(o),t.list=o.data.data.info;case 14:case"end":return e.stop()}}),e)})))()},quxiao:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$myRequest({url:"User.SetAttent",method:"GET",data:{uid:uni.getStorageSync("infor").id,touid:t}});case 2:n=i.sent,uni.showToast({title:n.data.data.msg,icon:"none"}),e.getList();case 5:case"end":return i.stop()}}),i)})))()}}};e.default=o},"15de":function(t,e,i){"use strict";var n=i("f288"),a=i.n(n);a.a},"17b2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-video[data-v-f7bd47e2],\r\nuni-image[data-v-f7bd47e2]{width:100%;height:100%}uni-swiper[data-v-f7bd47e2]{width:100%;height:100%}uni-swiper-item[data-v-f7bd47e2]{width:100%;height:100%}.bgvh[data-v-f7bd47e2]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#fafafa}.newbgvh[data-v-f7bd47e2]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.flex[data-v-f7bd47e2]{display:flex}.flex-between[data-v-f7bd47e2]{justify-content:space-between}.flex-items-start[data-v-f7bd47e2]{align-items:flex-start}.flex-items-center[data-v-f7bd47e2]{align-items:center}.flex-wrap[data-v-f7bd47e2]{flex-wrap:wrap}.poa[data-v-f7bd47e2]{top:0;left:0;right:0;bottom:0}.popupShow[data-v-f7bd47e2]{overflow:hidden;position:fixed;height:100vh;width:100%}.loading[data-v-f7bd47e2]{position:fixed;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,0)}.vermicelli[data-v-f7bd47e2]{width:%?750?%;padding-top:%?20?%}.bg[data-v-f7bd47e2]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.box[data-v-f7bd47e2]{width:%?702?%;height:%?140?%;background:#fff;border-radius:%?8?%;display:flex;justify-content:space-between;align-items:center;padding:%?15?% %?24?%;box-sizing:border-box;margin:%?0?% auto %?8?%}.box > uni-view[data-v-f7bd47e2]:nth-child(1){display:flex;align-items:center}.box > uni-view:nth-child(1) .img[data-v-f7bd47e2]{width:%?110?%;height:%?110?%;border-radius:%?110?%;overflow:hidden}.box > uni-view:nth-child(1) .name[data-v-f7bd47e2]{margin-left:%?24?%;font-size:%?36?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333}.box > uni-view:nth-child(1) .name > uni-view[data-v-f7bd47e2]:nth-child(1){overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.box > uni-view:nth-child(1) .name .icon[data-v-f7bd47e2]{display:flex}.box .button[data-v-f7bd47e2]{width:%?122?%;height:%?56?%;line-height:%?56?%;text-align:center;background:url(/static/images/user/button3.png) no-repeat;background-size:100% 100%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}.box .button1[data-v-f7bd47e2]{width:%?122?%;height:%?56?%;line-height:%?56?%;text-align:center;background:url(/static/images/user/button4.png) no-repeat;background-size:100% 100%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}',""]),t.exports=e},"85c6":function(t,e,i){"use strict";i.r(e);var n=i("938e"),a=i("db03");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("15de");var r,d=i("f0c5"),s=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"f7bd47e2",null,!1,n["a"],r);e["default"]=s.exports},"938e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"vermicelli"},[i("v-uni-view",{staticClass:"bg"}),t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"box"},[i("v-uni-view",[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.avatar,mode:""}})],1),i("v-uni-view",{staticClass:"name"},[i("v-uni-view",[t._v(t._s(e.user_nicename))]),i("v-uni-view",{staticClass:"icon"},[i("v-uni-view",{staticStyle:{width:"28rpx",height:"28rpx"}},["1"!=e.sex?i("v-uni-image",{attrs:{src:"/static/img/user/icon3.png",mode:""}}):i("v-uni-image",{attrs:{src:"/static/img/user/icon4.png",mode:""}})],1),i("v-uni-view",{staticStyle:{width:"30rpx",height:"40rpx","margin-top":"5rpx","margin-left":"24rpx"}},[i("v-uni-image",{attrs:{src:t.level.bg,mode:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"button1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.quxiao(e.id)}}},[t._v(t._s(t.$t("follow.ygz")))])],1)}))],2)},o=[]},db03:function(t,e,i){"use strict";i.r(e);var n=i("1043"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f288:function(t,e,i){var n=i("17b2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("498bf4dd",n,!0,{sourceMap:!1,shadowMode:!1})}}]);