(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-games-games"],{1081:function(t,e,i){"use strict";i.r(e);var a=i("2bab"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1c7a":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"games"},[i("v-uni-view",{staticStyle:{width:"750rpx",height:"88rpx"}}),i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"header-icon"}),i("v-uni-view",{staticClass:"header-txt"}),i("v-uni-view",{staticClass:"header-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.kefu.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/img/icon13.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"banner"},[i("v-uni-swiper",t._l(t.lbList,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticClass:"banner_img",staticStyle:{width:"702rpx",height:"190rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHref(e.slide_url)}}},[i("v-uni-image",{attrs:{src:e.slide_pic}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"gg-swiper"},[i("v-uni-view",{staticClass:"tj-swiper-icon"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon1.png",mode:""}})],1),i("v-uni-view",{staticClass:"tj-swiper-txt"},[i("v-uni-swiper",t._l(t.ggObj,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",[t._v(t._s(e.content))])],1)})),1)],1),i("v-uni-view",{staticClass:"button1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigateTo("/pages/user/topUp")}}},[t._v(t._s(t.$t("games.czjl")))])],1),i("v-uni-view",{staticClass:"gn"},[i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v(t._s(t.infoData.user_nicename))]),i("v-uni-view",[i("v-uni-view",[t._v(t._s(t.coin))]),i("v-uni-view",{staticClass:"money-img"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon2.png",mode:""}})],1)],1)],1),i("v-uni-view",[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigateTo("/pages/storedValue/storedValue")}}},[i("v-uni-view",{staticClass:"gn-icon"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon3.png",mode:""}})],1),i("v-uni-view",[t._v(t._s(t.$t("games.ck")))])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigateTo("/pages/user/cash")}}},[i("v-uni-view",{staticClass:"gn-icon"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon4.png",mode:""}})],1),i("v-uni-view",[t._v(t._s(t.$t("games.tx")))])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigateTo("/pages/gameHall/gameHall")}}},[i("v-uni-view",{staticClass:"gn-icon"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon5.png",mode:""}})],1),i("v-uni-view",[t._v(t._s(t.$t("games.yh")))])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.guiJi.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"gn-icon"},[i("v-uni-image",{attrs:{src:"/static/images/games/icon6.png",mode:""}})],1),i("v-uni-view",[t._v(t._s(t.$t("games.yjgj")))])],1)],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-scroll-view",{staticClass:"scroll-view-left",attrs:{"scroll-y":!0}},t._l(t.gameNav,(function(e,a){return i("v-uni-view",{key:a,class:a==t.leftNav?"left-box left-active":"left-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftNav=a,t.rightNav=0,t.contentActive=0,t.getGame(a)}}},[i("v-uni-view",{staticClass:"left-img"},[i("v-uni-image",{attrs:{src:e.icon,mode:""}})],1),i("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1),0==t.leftNav?i("v-uni-view",{staticClass:"right"},[i("v-uni-scroll-view",{staticClass:"scroll-view-right",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"right-box"},t._l(t.gameList,(function(e,a){return i("v-uni-view",{key:a,class:a==t.contentActive?"right-active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentActive=a,t.goPath(e)}}},[i("v-uni-view",{staticClass:"right-img",staticStyle:{width:"152rpx",height:"152rpx"}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}})],1),i("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"right1"},[i("v-uni-view",{staticClass:"right-nav"},[i("v-uni-scroll-view",{staticClass:"scroll-view-nav",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"nav-box"},t._l(t.gameNav1,(function(e,a){return i("v-uni-view",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightNav=a,t.contentActive=0,t.gameContent(t.index,e.id)}}},[i("v-uni-view",{class:a==t.rightNav?"popup6-active pop6-img":"pop6-img"},[t._v(t._s(e.name))])],1)})),1)],1)],1),i("v-uni-scroll-view",{staticClass:"scroll-view-right",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"right-box"},t._l(t.gameList,(function(e,a){return i("v-uni-view",{key:a,class:a==t.contentActive?"right-active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentActive=a,t.tapGame(e.id)}}},[i("v-uni-view",{staticClass:"right-img"},[i("v-uni-image",{attrs:{src:e.icon,mode:""}})],1),i("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1),i("uniFooter",{attrs:{currentTab:"1"}})],1)},r=[]},"2bab":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),r=a(i("fdd7")),o={components:{uniFooter:r.default},data:function(){return{infoData:{},coin:"",leftNav:0,rightNav:0,contentActive:0,lbList:[],ggObj:{},gameNav:[],gameList:[],gameNav1:[]}},onLoad:function(){this.infoData=uni.getStorageSync("infor"),this.getList()},methods:{getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"Gameapi.huishou",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 2:return e.sent,e.next=5,t.$myRequest({url:"User.getBalance",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 5:return i=e.sent,t.coin=i.data.data.info[0].coin,e.next=9,t.$myRequest({url:"Home.GetSlide",method:"GET",data:{slide:"7"}});case 9:return a=e.sent,t.lbList=a.data.data.info,e.next=13,t.$myRequest({url:"Home.GetNotice",method:"GET",data:{}});case 13:n=e.sent,t.ggObj=n.data.data.info[2].list,t.getGame(0);case 16:case"end":return e.stop()}}),e)})))()},getGame:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a,n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$myRequest({url:"Caipiao.topclass",method:"GET",data:{}});case 2:if(a=i.sent,e.gameNav=a.data.data.info,0!=t){i.next=11;break}return i.next=7,e.$myRequest({url:"Caipiao.Twoclass",method:"GET",data:{pid:a.data.data.info[t].id}});case 7:n=i.sent,e.gameList=n.data.data.info,i.next=16;break;case 11:return i.next=13,e.$myRequest({url:"Caipiao.getoneclass",method:"GET",data:{pid:a.data.data.info[t].id}});case 13:r=i.sent,e.gameNav1=r.data.data.info,e.gameContent(0,r.data.data.info[0].id);case 16:case"end":return i.stop()}}),i)})))()},gameContent:function(t,e){var i=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.$myRequest({url:"Caipiao.gettwoclass",method:"GET",data:{pid:i.gameNav[i.leftNav].id,oneclass_id:e}});case 2:a=t.sent,i.gameList=a.data.data.info;case 4:case"end":return t.stop()}}),t)})))()},tapGame:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$myRequest({url:"Gameapi.entergame",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token,code:t}});case 2:a=i.sent,uni.showToast({title:a.data.data.msg,icon:"none"});case 4:case"end":return i.stop()}}),i)})))()},guiJi:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"Gameapi.guiji",method:"GET",data:{uid:uni.getStorageSync("infor").id,token:uni.getStorageSync("infor").token}});case 2:i=e.sent,uni.showToast({title:i.data.data.msg,icon:"none"});case 4:case"end":return e.stop()}}),e)})))()},goPath:function(t){this.goNavigateTo("/pages/games/gamesDetail"),uni.setStorageSync("item1",t)},goHref:function(t){window.location.href=t},kefu:function(){window.location.href="http://"}}};e.default=o},4399:function(t,e,i){"use strict";var a=i("6efc"),n=i.n(a);n.a},"61ab":function(t,e,i){"use strict";var a=i("6840"),n=i.n(a);n.a},6275:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{currentTab:{type:String,default:""}},data:function(){return{list:[{pagePath:"/pages/index/index",iconPath:"/static/img/tabBar/icon1.png",selectedIconPath:"/static/img/tabBar/icon1_1.png",text:"首页"},{pagePath:"/pages/games/games",iconPath:"/static/img/tabBar/icon2.png",selectedIconPath:"/static/img/tabBar/icon2_1.png",text:"游戏"},{pagePath:"/pages/gameHall/gameHall",iconPath:"/static/img/tabBar/icon3.png",selectedIconPath:"/static/img/tabBar/icon3.png",text:"活动大厅"},{pagePath:"/pages/storedValue/storedValue",iconPath:"/static/img/tabBar/icon4.png",selectedIconPath:"/static/img/tabBar/icon4_1.png",text:"储值"},{pagePath:"/pages/user/user",iconPath:"/static/img/tabBar/icon5.png",selectedIconPath:"/static/img/tabBar/icon5_1.png",text:"我的"}],rank:null}},methods:{switchNav:function(t,e){uni.redirectTo({url:e.pagePath})}}};e.default=a},6495:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{width:"750rpx",height:"120rpx"}}),i("v-uni-view",{staticClass:"tabbar_bottom"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tabbar_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchNav(a,e)}}},[i("v-uni-view",[i("v-uni-image",{class:2==a?"tabbar_img3":"tabbar_img",attrs:{src:t.currentTab==a?e.selectedIconPath:e.iconPath,mode:""}})],1),i("v-uni-view",{class:t.currentTab==a?"tabbar_label act":"tabbar_label"},[t._v(t._s(e.text))])],1)})),1)],1)},r=[]},6840:function(t,e,i){var a=i("6f20");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3f73f63e",a,!0,{sourceMap:!1,shadowMode:!1})},"6efc":function(t,e,i){var a=i("f66f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("88caaf4c",a,!0,{sourceMap:!1,shadowMode:!1})},"6f20":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-video[data-v-5b848f59],\r\nuni-image[data-v-5b848f59]{width:100%;height:100%}uni-swiper[data-v-5b848f59]{width:100%;height:100%}uni-swiper-item[data-v-5b848f59]{width:100%;height:100%}.bgvh[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#fafafa}.newbgvh[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.flex[data-v-5b848f59]{display:flex}.flex-between[data-v-5b848f59]{justify-content:space-between}.flex-items-start[data-v-5b848f59]{align-items:flex-start}.flex-items-center[data-v-5b848f59]{align-items:center}.flex-wrap[data-v-5b848f59]{flex-wrap:wrap}.poa[data-v-5b848f59]{top:0;left:0;right:0;bottom:0}.popupShow[data-v-5b848f59]{overflow:hidden;position:fixed;height:100vh;width:100%}.loading[data-v-5b848f59]{position:fixed;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,0)}.tabbar_bottom[data-v-5b848f59]{width:100%;height:%?120?%;padding-bottom:%?10?%;box-sizing:border-box;position:fixed;left:0;bottom:0;z-index:998;background:#fff;backdrop-filter:blur(13px);-webkit-backdrop-filter:blur(13px);display:flex;justify-content:space-between;align-items:flex-end;text-align:center}.tabbar_bottom .tabbar_item[data-v-5b848f59]{flex:1}.tabbar_bottom .tabbar_img[data-v-5b848f59]{width:%?52?%;height:%?52?%}.tabbar_bottom .tabbar_img3[data-v-5b848f59]{width:%?66?%;height:%?66?%}.tabbar_bottom .tabbar_label[data-v-5b848f59]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.tabbar_bottom .tabbar_label.act[data-v-5b848f59]{color:#fc6ea1}',""]),t.exports=e},"8c32":function(t,e,i){"use strict";i.r(e);var a=i("6275"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},da12:function(t,e,i){"use strict";i.r(e);var a=i("1c7a"),n=i("1081");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4399");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"10313c92",null,!1,a["a"],o);e["default"]=s.exports},f66f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */uni-video[data-v-10313c92],\r\nuni-image[data-v-10313c92]{width:100%;height:100%}uni-swiper[data-v-10313c92]{width:100%;height:100%}uni-swiper-item[data-v-10313c92]{width:100%;height:100%}.bgvh[data-v-10313c92]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#fafafa}.newbgvh[data-v-10313c92]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.flex[data-v-10313c92]{display:flex}.flex-between[data-v-10313c92]{justify-content:space-between}.flex-items-start[data-v-10313c92]{align-items:flex-start}.flex-items-center[data-v-10313c92]{align-items:center}.flex-wrap[data-v-10313c92]{flex-wrap:wrap}.poa[data-v-10313c92]{top:0;left:0;right:0;bottom:0}.popupShow[data-v-10313c92]{overflow:hidden;position:fixed;height:100vh;width:100%}.loading[data-v-10313c92]{position:fixed;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,0)}.games[data-v-10313c92]{width:%?750?%}.bg[data-v-10313c92]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background:#f5f8fc}.header[data-v-10313c92]{display:flex;justify-content:space-between;align-items:center;width:%?750?%;height:%?88?%;position:fixed;top:0;left:0;right:0;background:#fff;z-index:999}.header .header-txt[data-v-10313c92]{font-size:%?36?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333}.header .header-icon[data-v-10313c92]{width:%?162?%;height:%?60?%}.header .header-icon uni-image[data-v-10313c92]{width:100%;height:100%}.banner[data-v-10313c92]{width:%?702?%;height:%?190?%;border-radius:%?16?%;overflow:hidden;margin:%?20?% auto}.banner .banner_img[data-v-10313c92]{width:%?702?%;height:%?190?%}.gg-swiper[data-v-10313c92]{width:%?702?%;height:%?56?%;margin:%?20?% auto 0;background:linear-gradient(270deg,#fff,#ebe3fb);color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 %?24?%;box-sizing:border-box}.gg-swiper .tj-swiper-icon[data-v-10313c92]{width:%?44?%;height:%?44?%}.gg-swiper .tj-swiper-icon uni-image[data-v-10313c92]{width:100%;height:100%}.gg-swiper .tj-swiper-txt[data-v-10313c92]{width:%?446?%;height:%?56?%;line-height:%?56?%}.gg-swiper .tj-swiper-txt uni-swiper[data-v-10313c92]{width:100%;height:100%}.gg-swiper .tj-swiper-txt uni-swiper uni-swiper-item[data-v-10313c92]{width:100%;height:100%}.gg-swiper .tj-swiper-txt uni-swiper uni-swiper-item > uni-view[data-v-10313c92]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#9e94c8}.gg-swiper .button1[data-v-10313c92]{width:%?132?%;height:%?40?%;line-height:%?40?%;padding-right:%?0?%;box-sizing:border-box;background:url(/static/images/games/button1.png) no-repeat;background-size:100% 100%;text-align:right;font-size:%?20?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff}.gn[data-v-10313c92]{display:flex;justify-content:space-between;align-items:center;width:%?702?%;height:%?126?%;margin:%?20?% auto 0;background:#f4f1ff;box-shadow:inset %?0?% %?-2?% %?2?% %?0?% #e7dcfd;border-radius:%?8?%}.gn .money > uni-view[data-v-10313c92]{text-align:center;display:flex;justify-content:center;align-items:center;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;padding:0 %?20?%;box-sizing:border-box;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.gn .money > uni-view .money-img[data-v-10313c92]{width:%?32?%;height:%?32?%;margin-left:%?12?%}.gn > uni-view[data-v-10313c92]:nth-child(1){border-right:%?4?% solid #d8d8d8}.gn > uni-view[data-v-10313c92]:nth-child(2){display:flex;justify-content:center;align-items:center}.gn > uni-view:nth-child(2) > uni-view[data-v-10313c92]{width:%?106?%;height:%?106?%;background:url(/static/images/games/bg1.png) no-repeat;background-size:100% 100%;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#6f5aa2;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 %?7?%}.gn > uni-view:nth-child(2) > uni-view .gn-icon[data-v-10313c92]{width:%?60?%;height:%?60?%}.gn > uni-view:nth-child(2) > uni-view[data-v-10313c92]:last-child{margin-right:%?17?%}.content[data-v-10313c92]{margin-top:%?12?%;display:flex;justify-content:space-between}.content .left[data-v-10313c92]{width:%?120?%;height:50vh;margin-left:%?16?%}.content .left .scroll-view-left[data-v-10313c92]{width:%?120?%;height:50vh}.content .left .scroll-view-left .left-box[data-v-10313c92]{width:%?120?%;height:%?120?%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#6f5aa2;background:url(/static/images/games/bg1.png) no-repeat;background-size:100% 100%;margin-bottom:%?8?%}.content .left .scroll-view-left .left-box .left-img[data-v-10313c92]{width:%?54?%;height:%?54?%}.content .left .scroll-view-left .left-active[data-v-10313c92]{background:url(/static/images/games/bg4.png) no-repeat;background-size:100% 100%}.content .right[data-v-10313c92]{margin:0 %?22?% 0 %?12?%;width:%?576?%;height:50vh}.content .right .scroll-view-right[data-v-10313c92]{width:%?576?%;height:50vh}.content .right .scroll-view-right .right-box[data-v-10313c92]{display:flex;justify-content:space-between;flex-wrap:wrap}.content .right .scroll-view-right .right-box > uni-view[data-v-10313c92]{width:%?280?%;height:%?226?%;background:url(/static/images/games/bg2.png) no-repeat;background-size:100% 100%;margin-bottom:%?18?%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?28?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#6f5aa2}.content .right .scroll-view-right .right-box > uni-view .right-img[data-v-10313c92]{width:%?198?%;height:%?152?%}.content .right .scroll-view-right .right-box .right-active[data-v-10313c92]{background:url(/static/images/games/bg3.png) no-repeat;background-size:100% 100%}.content .right1[data-v-10313c92]{margin:0 %?22?% 0 %?12?%;width:%?576?%;height:50vh}.content .right1 .right-nav[data-v-10313c92]{width:%?576?%;height:5vh}.content .right1 .right-nav .scroll-view-nav[data-v-10313c92]{width:%?576?%;height:5vh}.content .right1 .right-nav .scroll-view-nav .nav-box[data-v-10313c92]{display:flex;justify-content:start}.content .right1 .right-nav .scroll-view-nav .nav-box > uni-view[data-v-10313c92]{width:%?140?%;text-align:center;margin:%?6?% %?14?%}.content .right1 .right-nav .scroll-view-nav .nav-box > uni-view .pop6-img[data-v-10313c92]{width:%?140?%;text-align:center;padding:%?12?% 0;box-sizing:border-box;border-radius:%?12?%;background:#fff}.content .right1 .right-nav .scroll-view-nav .nav-box > uni-view > uni-view[data-v-10313c92]:nth-child(2){font-size:%?32?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff}.content .right1 .right-nav .scroll-view-nav .nav-box > uni-view .popup6-active[data-v-10313c92]{color:#fff;background:#ff63a7}.content .right1 .scroll-view-right[data-v-10313c92]{width:%?576?%;height:45vh;padding-top:%?18?%;box-sizing:border-box}.content .right1 .scroll-view-right .right-box[data-v-10313c92]{display:flex;justify-content:space-between;flex-wrap:wrap}.content .right1 .scroll-view-right .right-box > uni-view[data-v-10313c92]{width:%?280?%;height:%?226?%;background:url(/static/images/games/bg2.png) no-repeat;background-size:100% 100%;margin-bottom:%?18?%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?28?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#6f5aa2}.content .right1 .scroll-view-right .right-box > uni-view .right-img[data-v-10313c92]{width:%?198?%;height:%?152?%}.content .right1 .scroll-view-right .right-box .right-active[data-v-10313c92]{background:url(/static/images/games/bg3.png) no-repeat;background-size:100% 100%}',""]),t.exports=e},fdd7:function(t,e,i){"use strict";i.r(e);var a=i("6495"),n=i("8c32");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("61ab");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5b848f59",null,!1,a["a"],o);e["default"]=s.exports}}]);