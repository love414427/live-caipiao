(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0da9":function(t,i,e){"use strict";e.r(i);var a=e("e0ad"),n=e("8b07");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("ada4");var s,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"a5a2707c",null,!1,a["a"],s);i["default"]=c.exports},"3d1c":function(t,i,e){"use strict";var a=e("4ea4");e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),r=a(e("fdd7")),s={components:{uniFooter:r.default},data:function(){return{pageList:[{img:"/static/img/user/icon13.png",name:this.$t("user.sjrz"),url:"/pages/user/security"},{img:"/static/img/user/icon14.png",name:this.$t("user.wdbb"),url:"/pages/user/knapsack"},{img:"/static/img/user/icon15.png",name:this.$t("user.dj"),url:"等级"},{img:"/static/img/user/icon16.png",name:this.$t("user.zskf"),url:"客服"},{img:"/static/images/user/icon4.png",name:this.$t("user.jzzx"),url:"家族中心"},{img:"/static/img/user/icon18.png",name:this.$t("user.sz"),url:"/pages/user/setup"}],infoObj:{},level:"",SlideArr:[],message:[{content:""}]}},onShow:function(){this.getList()},methods:{getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e,a,n,r,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$myRequest({url:"User.getBaseInfo",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 2:return e=i.sent,t.infoObj=e.data.data.info[0],i.next=6,t.$myRequest({url:"Home.GetConfig",method:"GET",data:{}});case 6:return a=i.sent,n=e.data.data.info[0].level,console.log(a,n),t.level=a.data.data.info[0].level[parseInt(n)-1],i.next=12,t.$myRequest({url:"Home.GetSlide",method:"GET",data:{slide:"6"}});case 12:return r=i.sent,t.SlideArr=r.data.data.info,i.next=16,t.$myRequest({url:"Message.GetList",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 16:s=i.sent,console.log(s),t.message=s.data.data.info;case 19:case"end":return i.stop()}}),i)})))()},lianjie:function(t){var i=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("客服"!=t){e.next=3;break}return window.location.href="https://",e.abrupt("return");case 3:if("推广"!=t){e.next=6;break}return window.location.href="https://zb.iun.cc/Appapi/Agent/index",e.abrupt("return");case 6:if("等级"!=t){e.next=13;break}return e.next=9,i.$myRequest({url:"User.getBaseInfo",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 9:return a=e.sent,console.log(a),window.location.href=a.data.data.info[0].list[0].list[3].href,e.abrupt("return");case 13:if("代理中心"!=t){e.next=20;break}return e.next=16,i.$myRequest({url:"User.getBaseInfo",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 16:return n=e.sent,console.log(n),window.location.href=n.data.data.info[0].list[0].list[7].href,e.abrupt("return");case 20:if("家族中心"!=t){e.next=28;break}return e.next=23,i.$myRequest({url:"User.getBaseInfo",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 23:return r=e.sent,console.log(r),e.abrupt("return");case 28:i.goNavigateTo(t);case 29:case"end":return e.stop()}}),e)})))()},goPath:function(t){window.location.href=t}}};i.default=s},"61ab":function(t,i,e){"use strict";var a=e("6840"),n=e.n(a);n.a},6275:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{currentTab:{type:String,default:""}},data:function(){return{list:[{pagePath:"/pages/index/index",iconPath:"/static/img/tabBar/icon1.png",selectedIconPath:"/static/img/tabBar/icon1_1.png",text:"首页"},{pagePath:"/pages/games/games",iconPath:"/static/img/tabBar/icon2.png",selectedIconPath:"/static/img/tabBar/icon2_1.png",text:"游戏"},{pagePath:"/pages/gameHall/gameHall",iconPath:"/static/img/tabBar/icon3.png",selectedIconPath:"/static/img/tabBar/icon3.png",text:"活动大厅"},{pagePath:"/pages/storedValue/storedValue",iconPath:"/static/img/tabBar/icon4.png",selectedIconPath:"/static/img/tabBar/icon4_1.png",text:"储值"},{pagePath:"/pages/user/user",iconPath:"/static/img/tabBar/icon5.png",selectedIconPath:"/static/img/tabBar/icon5_1.png",text:"我的"}],rank:null}},methods:{switchNav:function(t,i){uni.redirectTo({url:i.pagePath})}}};i.default=a},6495:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticStyle:{width:"750rpx",height:"120rpx"}}),e("v-uni-view",{staticClass:"tabbar_bottom"},t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tabbar_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchNav(a,i)}}},[e("v-uni-view",[e("v-uni-image",{class:2==a?"tabbar_img3":"tabbar_img",attrs:{src:t.currentTab==a?i.selectedIconPath:i.iconPath,mode:""}})],1),e("v-uni-view",{class:t.currentTab==a?"tabbar_label act":"tabbar_label"},[t._v(t._s(i.text))])],1)})),1)],1)},r=[]},6840:function(t,i,e){var a=e("6f20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("3f73f63e",a,!0,{sourceMap:!1,shadowMode:!1})},"6f20":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-video[data-v-5b848f59],\r\nuni-image[data-v-5b848f59]{width:100%;height:100%}uni-swiper[data-v-5b848f59]{width:100%;height:100%}uni-swiper-item[data-v-5b848f59]{width:100%;height:100%}.bgvh[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#fafafa}.newbgvh[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.flex[data-v-5b848f59]{display:flex}.flex-between[data-v-5b848f59]{justify-content:space-between}.flex-items-start[data-v-5b848f59]{align-items:flex-start}.flex-items-center[data-v-5b848f59]{align-items:center}.flex-wrap[data-v-5b848f59]{flex-wrap:wrap}.poa[data-v-5b848f59]{top:0;left:0;right:0;bottom:0}.popupShow[data-v-5b848f59]{overflow:hidden;position:fixed;height:100vh;width:100%}.loading[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,0)}.tabbar_bottom[data-v-5b848f59]{width:100%;height:%?120?%;padding-bottom:%?10?%;box-sizing:border-box;position:fixed;left:0;bottom:0;z-index:998;background:#fff;backdrop-filter:blur(13px);-webkit-backdrop-filter:blur(13px);display:flex;justify-content:space-between;align-items:flex-end;text-align:center}.tabbar_bottom .tabbar_item[data-v-5b848f59]{flex:1}.tabbar_bottom .tabbar_img[data-v-5b848f59]{width:%?52?%;height:%?52?%}.tabbar_bottom .tabbar_img3[data-v-5b848f59]{width:%?66?%;height:%?66?%}.tabbar_bottom .tabbar_label[data-v-5b848f59]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.tabbar_bottom .tabbar_label.act[data-v-5b848f59]{color:#fc6ea1}',""]),t.exports=i},"820d":function(t,i,e){var a=e("934e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("552f00e0",a,!0,{sourceMap:!1,shadowMode:!1})},"8b07":function(t,i,e){"use strict";e.r(i);var a=e("3d1c"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"8c32":function(t,i,e){"use strict";e.r(i);var a=e("6275"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"934e":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-video[data-v-a5a2707c],\r\nuni-image[data-v-a5a2707c]{width:100%;height:100%}uni-swiper[data-v-a5a2707c]{width:100%;height:100%}uni-swiper-item[data-v-a5a2707c]{width:100%;height:100%}.bgvh[data-v-a5a2707c]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#fafafa}.newbgvh[data-v-a5a2707c]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.flex[data-v-a5a2707c]{display:flex}.flex-between[data-v-a5a2707c]{justify-content:space-between}.flex-items-start[data-v-a5a2707c]{align-items:flex-start}.flex-items-center[data-v-a5a2707c]{align-items:center}.flex-wrap[data-v-a5a2707c]{flex-wrap:wrap}.poa[data-v-a5a2707c]{top:0;left:0;right:0;bottom:0}.popupShow[data-v-a5a2707c]{overflow:hidden;position:fixed;height:100vh;width:100%}.loading[data-v-a5a2707c]{position:fixed;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,0)}.user[data-v-a5a2707c]{padding-bottom:%?20?%}.sz[data-v-a5a2707c]{display:flex;justify-content:flex-end;align-items:center}.sz > uni-view[data-v-a5a2707c]{width:%?48?%;height:%?48?%;padding:%?20?% %?24?% 0 0}.sz > uni-view uni-image[data-v-a5a2707c]{width:100%;height:100%}.tb-xx[data-v-a5a2707c]{display:flex;justify-content:space-between;align-items:center;padding:0 %?24?%}.tb-xx .tb-zlxx[data-v-a5a2707c]{display:flex;align-items:center;padding:0 0 0 %?24?%}.tb-xx .tb-zlxx .zlxx-tx[data-v-a5a2707c]{width:%?140?%;height:%?140?%;margin-right:%?40?%;position:relative}.tb-xx .tb-zlxx .zlxx-tx > uni-view[data-v-a5a2707c]{width:%?140?%;height:%?40?%;display:flex;justify-content:center;align-items:center;font-size:%?20?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff;background:#666;border-radius:%?20?%;padding:%?0?% %?16?%;position:absolute;right:%?-16?%;bottom:%?0?%}.tb-xx .tb-zlxx .zlxx-tx > uni-view uni-image[data-v-a5a2707c]{margin-top:%?10?%;border-radius:%?0?%;width:%?24?%;height:%?24?%}.tb-xx .tb-zlxx .zlxx-tx uni-image[data-v-a5a2707c]{border-radius:%?100?%}.tb-xx .tb-zlxx .zlxx-wz .wz-name[data-v-a5a2707c]{font-size:%?36?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.tb-xx .tb-zlxx .zlxx-wz .wz-xb[data-v-a5a2707c]{display:flex;align-items:center}.tb-xx .tb-zlxx .zlxx-wz .wz-xb > uni-view:nth-child(1) uni-image[data-v-a5a2707c]{width:%?28?%;height:%?28?%}.tb-xx .tb-zlxx .zlxx-wz .wz-xb > uni-view[data-v-a5a2707c]:nth-child(2){display:flex;align-items:center;height:%?32?%;background-size:100% 100%;font-size:%?20?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;margin-left:%?16?%;padding:0 %?12?% 0 %?6?%}.tb-xx .tb-zlxx .zlxx-wz .wz-xb > uni-view:nth-child(2) uni-image[data-v-a5a2707c]{margin-top:%?10?%;width:%?26?%;height:%?26?%}.tb-xx .tb-zlxx .zlxx-wz .wz-xb > uni-view:nth-child(2) > uni-view[data-v-a5a2707c]:nth-child(2){margin-left:%?6?%}.tb-xx .tb-zlxx .zlxx-wz .wz-hy[data-v-a5a2707c]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;display:flex}.tb-xx .tb-zlxx .zlxx-wz .wz-hy > uni-view[data-v-a5a2707c]:nth-child(2){width:%?56?%;height:%?32?%;text-align:center;line-height:%?32?%;margin-left:%?16?%;background:#ededed;border-radius:%?8?%;font-size:%?20?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#3894ff}.tb-xx .tb-zlxx .zlxx-wz .wz-qm[data-v-a5a2707c]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.tb-xx .tb-icon[data-v-a5a2707c]{width:%?28?%;height:%?28?%}.tb-xx .tb-icon uni-image[data-v-a5a2707c]{width:100%;height:100%}.gzfs[data-v-a5a2707c]{display:flex;justify-content:space-between;align-items:center;font-size:%?36?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;text-align:center;margin:%?20?% 0}.gzfs > uni-view[data-v-a5a2707c]{margin:0 %?140?%}.gzfs > uni-view > uni-view[data-v-a5a2707c]:nth-child(2){font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.nav[data-v-a5a2707c]{width:%?702?%;height:%?150?%;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:%?16?% %?2?%;text-align:center;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;background:#fff;border-radius:%?8?%;box-shadow:%?0?% %?2?% %?4?% %?0?% #f1eeef}.nav > uni-view[data-v-a5a2707c]{margin:0 %?30?%}.nav > uni-view uni-image[data-v-a5a2707c]{width:%?80?%;height:%?80?%}.banner[data-v-a5a2707c]{width:%?702?%;height:%?190?%;border-radius:%?16?%;overflow:hidden;margin:%?20?% auto}.banner .banner_img[data-v-a5a2707c]{width:100%;height:100%}.nav2[data-v-a5a2707c]{width:%?702?%;margin:0 auto;display:flex;justify-content:space-between;align-items:center}.nav2 > uni-view[data-v-a5a2707c]{width:%?702?%;background:#fff;box-shadow:%?0?% %?2?% %?4?% %?0?% #f1eeef;border-radius:%?8?%;padding:%?24?%;box-sizing:border-box}.nav2 > uni-view > uni-view[data-v-a5a2707c]:nth-child(1){font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;margin:%?12?% 0;color:#161616}.nav2 > uni-view > uni-view[data-v-a5a2707c]:nth-child(2){font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.page-list[data-v-a5a2707c]{margin-top:%?20?%}.page-list > uni-view[data-v-a5a2707c]{display:flex;justify-content:space-between;align-content:center;width:%?702?%;height:%?80?%;margin:%?2?% auto;background:#fff;border-radius:%?8?%;padding:%?16?% %?20?%;box-sizing:border-box}.page-list > uni-view > uni-view[data-v-a5a2707c]:nth-child(1){display:flex;justify-content:space-between;align-content:center;height:%?48?%;line-height:%?48?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.page-list > uni-view > uni-view:nth-child(1) uni-image[data-v-a5a2707c]{width:%?48?%;height:%?48?%;margin-right:%?16?%}.page-list > uni-view > uni-view:nth-child(2) uni-image[data-v-a5a2707c]{width:%?28?%;height:%?28?%}',""]),t.exports=i},ada4:function(t,i,e){"use strict";var a=e("820d"),n=e.n(a);n.a},e0ad:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"user"},[e("v-uni-view",{staticClass:"bgvh",staticStyle:{background:"#F5F8FC"}}),e("v-uni-view",{staticClass:"sz"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/setup")}}},[e("v-uni-image",{attrs:{src:"/static/img/user/icon1.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"tb-xx"},[e("v-uni-view",{staticClass:"tb-zlxx"},[e("v-uni-view",{staticClass:"zlxx-tx"},[e("v-uni-image",{attrs:{src:t.infoObj.avatar,mode:""}})],1),e("v-uni-view",{staticClass:"zlxx-wz"},[e("v-uni-view",{staticClass:"wz-name"},[t._v(t._s(t.infoObj.user_nicename))]),e("v-uni-view",{staticClass:"wz-xb"},[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon3.png",mode:""}})],1),e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:t.level.thumb,mode:""}})],1)],1)],1),e("v-uni-view",{staticClass:"wz-hy"},[e("v-uni-view",[t._v(t._s(t.$t("user.hy"))+"ID："+t._s(t.infoObj.id))]),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copy(t.infoObj.id)}}},[t._v(t._s(t.$t("user.fz")))])],1),e("v-uni-view",{staticClass:"wz-qm"},[t._v(t._s(t.infoObj.signature))])],1)],1),e("v-uni-view",{staticClass:"tb-icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/Personal/Personal?touid="+t.infoObj.id)}}},[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"gzfs"},[e("v-uni-view",{staticClass:"gz",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/follow/follow")}}},[e("v-uni-view",[t._v(t._s(t.infoObj.follows))]),e("v-uni-view",[t._v(t._s(t.$t("user.gz")))])],1),e("v-uni-view",{staticClass:"fs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/vermicelli/vermicelli")}}},[e("v-uni-view",[t._v(t._s(t.infoObj.fans))]),e("v-uni-view",[t._v(t._s(t.$t("user.fs")))])],1)],1),e("v-uni-view",{staticClass:"nav"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/wallet")}}},[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon6.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.qb")))])],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/cash")}}},[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon7.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.tx")))])],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/gameHall/gameHall")}}},[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon9.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.hd")))])],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.lianjie("推广")}}},[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon10.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.tg")))])],1)],1),e("v-uni-view",{staticClass:"banner"},[e("v-uni-swiper",t._l(t.SlideArr,(function(i,a){return e("v-uni-swiper-item",{key:a},[e("v-uni-view",{staticClass:"banner_img"},[e("v-uni-image",{attrs:{src:i.slide_pic},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath(i.slide_url)}}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"nav2"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/message")}}},[e("v-uni-view",[t._v(t._s(t.$t("user.xx")))]),t.message?e("v-uni-view",[t._v(t._s(t.message[0].content))]):e("v-uni-view",[t._v(t._s(t.$t("user.zwxx")))])],1)],1),e("v-uni-view",{staticClass:"page-list"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/accountDetails")}}},[e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/images/user/icon3.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.zmmx")))])],1),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/topUp")}}},[e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/images/user/icon1.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.czjl")))])],1),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigateTo("/pages/user/BettingRecord")}}},[e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/images/user/icon2.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.tzjl")))])],1),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1)],1),e("v-uni-view",{staticClass:"page-list"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.lianjie("代理中心")}}},[e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/images/user/icon1.png",mode:""}})],1),e("v-uni-view",[t._v(t._s(t.$t("user.dlzx")))])],1),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1)],1),e("v-uni-view",{staticClass:"page-list"},t._l(t.pageList,(function(i,a){return e("v-uni-view",{key:a,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lianjie(i.url)}}},[e("v-uni-view",[e("v-uni-view",[e("v-uni-image",{attrs:{src:i.img,mode:""}})],1),e("v-uni-view",[t._v(t._s(i.name))])],1),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/img/user/icon5.png",mode:""}})],1)],1)})),1),e("uniFooter",{attrs:{currentTab:"4"}})],1)},r=[]},fdd7:function(t,i,e){"use strict";e.r(i);var a=e("6495"),n=e("8c32");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("61ab");var s,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5b848f59",null,!1,a["a"],s);i["default"]=c.exports}}]);